if Mix.env() == :dev do
  defmodule Mix.Tasks.Graphene.Components.Generate do
    use Mix.Task
    require Logger

    @impl true
    def run(_args \\ []) do
      Logger.debug("Running #{__MODULE__}")

      for task <- [
            "graphene.codegen.extract",
            "graphene.core_components.generate",
            "graphene.form_components.generate",
            "graphene.carbon_components.generate",
            "graphene.product_codegen.extract",
            "graphene.product_core_components.generate",
            "graphene.product_components.generate"
          ] do
        Mix.Task.reenable(task)
        Mix.Task.run(task)
      end
    end
  end
end
