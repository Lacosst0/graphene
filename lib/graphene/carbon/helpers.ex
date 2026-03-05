defmodule Graphene.CarbonComponents.Helpers do
  @moduledoc false

  use Phoenix.Component

  alias Graphene.Internal.CoreComponents

  def render_menu_items(assigns) do
    ~H"""
    <%= for group <- @group do %>
      <CoreComponents.menu_item_group label={group[:label]} {group[:attrs] || %{}}>
        <%= if group.inner_block do %>
          {render_slot(group)}
        <% end %>
      </CoreComponents.menu_item_group>
    <% end %>
    <%= for item <- @item do %>
      <%= if item[:divider] do %>
        <CoreComponents.menu_item_divider />
      <% end %>
      <CoreComponents.menu_item
        label={item[:label]}
        disabled={item[:disabled]}
        kind={item[:kind]}
        shortcut={item[:shortcut]}
        {item[:attrs] || %{}}
      >
        <%= if item.inner_block do %>
          {render_slot(item)}
        <% end %>
      </CoreComponents.menu_item>
    <% end %>
    <%= for divider <- @divider do %>
      <CoreComponents.menu_item_divider {divider[:attrs] || %{}} />
    <% end %>
    """
  end

  def render_column_label(nil), do: nil
  def render_column_label(fun) when is_function(fun, 0), do: fun.()
  def render_column_label(label), do: label

  def structured_list_row_id(row_id_fun, row, index) do
    key =
      cond do
        is_function(row_id_fun, 1) -> row_id_fun.(row)
        is_nil(row_id_fun) -> index
        true -> row_id_fun
      end

    key |> to_string()
  end

  def structured_list_selected?(selected_set, row_id_fun, row, index) do
    MapSet.member?(selected_set, structured_list_row_id(row_id_fun, row, index))
  end
end
