if Mix.env() == :dev do
  defmodule Mix.Tasks.Graphene.Docs.Generate do
    use Mix.Task
    require Logger

    @moduledoc false

    @marker_start "  <!-- STORYBOOK_DOCS:START -->"
    @marker_end "  <!-- STORYBOOK_DOCS:END -->"
    @components_docs_dir Path.join(["docs", "components"])
    @product_components_docs_dir Path.join(["docs", "product_components"])

    @impl true
    def run(_args \\ []) do
      Logger.debug("Running #{__MODULE__}")

      with_silenced_warnings(fn ->
        markdown =
          Graphene.Docs.StorybookCarbon.generate_markdown(
            indent: 2,
            include_html: false
          )

        update_graphene_moduledoc!(markdown)
        write_component_docs!()
        write_product_component_docs!()
      end)
    end

    defp update_graphene_moduledoc!(markdown) do
      path = Path.join(["lib", "graphene.ex"])
      content = File.read!(path)

      {before, rest} = split!(content, @marker_start)
      {_old, tail} = split!(rest, @marker_end)

      updated =
        before <>
          @marker_start <>
          "\n\n" <>
          markdown <>
          "\n" <>
          @marker_end <>
          tail

      File.write!(path, updated)
    end

    defp split!(content, marker) do
      case String.split(content, marker, parts: 2) do
        [before, tail] -> {before, tail}
        _ -> raise "Expected marker #{marker} in lib/graphene.ex"
      end
    end

    defp write_component_docs! do
      File.mkdir_p!(@components_docs_dir)

      @components_docs_dir
      |> Path.join("*.md")
      |> Path.wildcard()
      |> Enum.each(&File.rm!/1)

      Graphene.Docs.StorybookCarbon.generate_component_markdown()
      |> Enum.each(fn {component, markdown} ->
        path = Path.join(@components_docs_dir, "#{component}.md")
        File.write!(path, markdown)
      end)
    end

    defp write_product_component_docs! do
      File.mkdir_p!(@product_components_docs_dir)

      @product_components_docs_dir
      |> Path.join("*.md")
      |> Path.wildcard()
      |> Enum.each(&File.rm!/1)

      Graphene.Docs.StorybookProducts.generate_component_markdown()
      |> Enum.each(fn {component, markdown} ->
        path = Path.join(@product_components_docs_dir, "#{component}.md")
        File.write!(path, markdown)
      end)
    end

    defp with_silenced_warnings(fun) when is_function(fun, 0) do
      previous_level = Logger.level()
      previous_ignore_module_conflict = Code.get_compiler_option(:ignore_module_conflict)

      Logger.configure(level: :error)
      Code.put_compiler_option(:ignore_module_conflict, true)

      try do
        fun.()
      after
        Logger.configure(level: previous_level)
        Code.put_compiler_option(:ignore_module_conflict, previous_ignore_module_conflict)
      end
    end
  end
end
