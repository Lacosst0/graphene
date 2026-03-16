if Mix.env() == :dev do
  defmodule Mix.Tasks.Graphene.ProductCodegen.Extract do
    use Mix.Task
    require Logger

    @impl true
    def run(_args \\ []) do
      Logger.debug("Running #{__MODULE__}")
      Graphene.CodeGen.ProductMetadata.extract!()
    end
  end
end
