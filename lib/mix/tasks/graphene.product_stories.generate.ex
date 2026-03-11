if Mix.env() == :dev do
  defmodule Mix.Tasks.Graphene.ProductStories.Generate do
    use Mix.Task
    require Logger

    defp template_story(:src) do
      Path.join(["assets", "eex", "graphene_component_story.exs"])
    end

    defp template_index(:src) do
      Path.join(["assets", "eex", "graphene_product_storybook_index.exs"])
    end

    defp template_story(:dst, base, name) do
      Path.join([base, "#{name}.story.exs"])
    end

    defp template_index(:dst, base) do
      Path.join([base, "_index.index.exs"])
    end

    defp storybook_location(folder) do
      Path.join(["priv", "storybook", "generated", folder])
    end

    @impl true
    def run(_args \\ []) do
      Logger.debug("Running #{__MODULE__}")

      Tmp.dir(fn path ->
        for name <- Map.keys(Graphene.Internal.ProductCoreComponents.__components__()) do
          component = to_string(name)
          {func_module, func_name} = story_function(component)

          Mix.Generator.copy_template(
            template_story(:src),
            template_story(:dst, path, name),
            component: component,
            module: "ProductComponents",
            func_module: func_module,
            func_name: func_name,
            component_module: "Graphene.Internal.ProductCoreComponents"
          )
        end

        Mix.Generator.copy_template(
          template_index(:src),
          template_index(:dst, path),
          []
        )

        maybe_compile_generated_stories(path)

        Logger.debug("Generation complete, finishing transaction")
        File.rm_rf!(storybook_location("product"))
        File.mkdir_p!(storybook_location("product"))
        File.cp_r(path, storybook_location("product"))
      end)
    end

    defp maybe_compile_generated_stories(path) do
      if Code.ensure_loaded?(PhoenixStorybook.Story) do
        path
        |> Path.join("**/*.story.exs")
        |> Path.wildcard()
        |> Enum.each(&Code.compile_file/1)
      else
        Logger.warning(
          "PhoenixStorybook is not available; skipping compile check for generated stories."
        )
      end
    end

    defp story_function(component), do: {"Graphene.ProductComponents", component}
  end
end
