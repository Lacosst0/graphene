defmodule Graphene.CarbonComponents.Custom.Exports do
  @moduledoc false

  @exports [
    %{name: :table, arity: 1, module: Graphene.CarbonComponents.Custom.Table, import: true},
    %{
      name: :table_live,
      arity: 1,
      module: Graphene.CarbonComponents.Custom.DataTable,
      import: true
    },
    %{
      name: :file_uploader,
      arity: 1,
      module: Graphene.CarbonComponents.Custom.FileUploader,
      import: true
    },
    %{name: :ui_shell, arity: 1, module: Graphene.CarbonComponents.Custom.UiShell, import: true},
    %{name: :data_table, arity: 1, module: Graphene.CarbonComponents.Custom.DataTable, import: false}
  ]

  def exports, do: @exports

  def import_list do
    @exports
    |> Enum.filter(&Map.get(&1, :import, false))
    |> Enum.map(fn %{name: name, arity: arity} -> {name, arity} end)
  end
end
