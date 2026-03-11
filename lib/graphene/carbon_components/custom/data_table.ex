defmodule Graphene.CarbonComponents.Custom.DataTable do
  @moduledoc false

  defdelegate table_live(assigns), to: Graphene.CarbonComponents.DataTable, as: :data_table
  defdelegate data_table(assigns), to: Graphene.CarbonComponents.DataTable
end
