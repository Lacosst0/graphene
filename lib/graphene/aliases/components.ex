defmodule Graphene.Components do
  @moduledoc """
  Carbon-first component facade.

  Usage:

      use Graphene.Components
  """

  defmacro __using__(_opts) do
    quote do
      use Graphene.CarbonComponents
      use Graphene.ProductComponents
      alias Graphene.CarbonComponents
      alias Graphene.ProductComponents
    end
  end
end
