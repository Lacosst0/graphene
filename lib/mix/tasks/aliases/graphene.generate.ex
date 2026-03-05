if Mix.env() == :dev do
  defmodule Mix.Tasks.Graphene.Generate do
    use Mix.Task
    require Logger

    @impl true
    def run(_args \\ []) do
      Logger.debug("Running #{__MODULE__}")

      for task <- [
            "graphene.version.generate",
            "graphene.components.generate",
            "graphene.stories.generate",
            "graphene.product_stories.generate",
            "graphene.docs.generate"
          ] do
        Mix.Task.reenable(task)
        Mix.Task.run(task)
      end
    end
  end
end
