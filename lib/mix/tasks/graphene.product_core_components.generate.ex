if Mix.env() == :dev do
  defmodule Mix.Tasks.Graphene.ProductCoreComponents.Generate do
    use Mix.Task
    require Logger
    alias Graphene.CodeGen.ProductMetadata

    defp template_core_components(:src) do
      Path.join(["assets", "eex", "graphene_core_components.ex"])
    end

    defp template_core_components(:dst) do
      Path.join(["lib", "graphene", "internal", "product_core_components.ex"])
    end

    defp template_js_mapping(:src) do
      Path.join(["assets", "eex", "dynamic_loader_mapping_products.ts"])
    end

    defp template_js_mapping(:dst) do
      Path.join(["assets", "src", "lib", "_dynamic_loader_mapping_products.ts"])
    end

    defp module() do
      "Graphene.Internal.ProductCoreComponents"
    end

    def get_version() do
      ProductMetadata.version()
    end

    def get_components() do
      ProductMetadata.components()
    end

    defp template_assigns(components) do
      [
        version: get_version(),
        module: module(),
        components: components,
        source: ProductMetadata.source()
      ]
    end

    defp render_template(path, assigns) do
      EEx.eval_file(path, assigns: assigns)
    end

    defp compile_generated!(path, module_name) do
      content = File.read!(path)
      module_decl = "defmodule #{module_name} do"
      check_module = "#{module_name}.GeneratedCheck"

      content =
        if String.contains?(content, module_decl) do
          String.replace(content, module_decl, "defmodule #{check_module} do", global: false)
        else
          raise "Expected #{module_decl} in generated output"
        end

      Code.compile_string(content, path)
      :ok
    end

    @impl true
    def run(_args \\ []) do
      Logger.debug("Running #{__MODULE__}")
      components = get_components()
      assigns = template_assigns(components)

      tmp_dir =
        Path.join(System.tmp_dir!(), "graphene-product-codegen-#{System.unique_integer([:positive])}")

      File.mkdir_p!(tmp_dir)
      tmp_core = Path.join(tmp_dir, "product_core_components.ex")
      tmp_js = Path.join(tmp_dir, "_dynamic_loader_mapping_products.ts")

      File.write!(tmp_core, render_template(template_core_components(:src), assigns))
      File.write!(tmp_js, render_template(template_js_mapping(:src), assigns))

      Mix.Task.reenable("format")
      Mix.Task.run("format", [tmp_core])

      compile_generated!(tmp_core, module())

      File.mkdir_p!(Path.dirname(template_core_components(:dst)))
      File.cp!(tmp_core, template_core_components(:dst))

      File.mkdir_p!(Path.dirname(template_js_mapping(:dst)))
      File.cp!(tmp_js, template_js_mapping(:dst))

      Logger.debug("Added #{length(components)} product components")
    end
  end
end
