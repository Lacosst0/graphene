if Mix.env() == :dev do
  defmodule Mix.Tasks.Graphene.Codegen.Extract do
    use Mix.Task
    require Logger

    @impl true
    def run(_args \\ []) do
      Logger.debug("Running #{__MODULE__}")
      Graphene.CodeGen.Metadata.extract!()
    end
  end
end
