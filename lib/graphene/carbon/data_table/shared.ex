defmodule Graphene.CarbonComponents.DataTable.Shared do
  @moduledoc false

  def row_id(row) when is_map(row) do
    Map.get(row, :id) || Map.get(row, "id")
  end

  def row_id(_row), do: nil
end
