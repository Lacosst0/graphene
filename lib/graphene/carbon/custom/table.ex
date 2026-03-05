defmodule Graphene.CarbonComponents.Custom.Table do
  @moduledoc false

  use Phoenix.Component

  @doc """
  Renders a static table with Carbon styling.

  Use `table_live/1` for LiveView-aware tables with selection/sorting callbacks.
  """
  attr :id, :string, required: true
  attr :rows, :list, required: true
  attr :row_id, :any, default: nil, doc: "the function for generating the row id"
  attr :row_click, :any, default: nil, doc: "the function for handling phx-click on each row"

  attr :row_item, :any,
    default: &Function.identity/1,
    doc: "the function for mapping each row before calling the :col and :action slots"

  attr :selectable, :boolean, default: false, doc: "enable row selection"
  attr :sortable, :boolean, default: false, doc: "enable sorting UI on header cells"

  attr :selected_ids, :list,
    default: nil,
    doc:
      "selected row ids. When nil, the table keeps its internal selection state. Pass an explicit list to control selection."

  attr :selection_name, :string, default: nil, doc: "name attribute for row selection inputs"
  attr :selection_label, :string, default: "Select row", doc: "aria label for row selection"
  attr :radio, :boolean, default: false, doc: "use radio selection instead of checkboxes"
  attr :size, :string, default: "lg", values: ["xs", "sm", "md", "lg", "xl"], doc: "table size"
  attr :expandable, :boolean, default: false, doc: "enable expandable rows"
  attr :batch_expansion, :boolean, default: false, doc: "enable batch expansion control"

  attr :overflow_menu_on_hover, :boolean,
    default: false,
    doc: "show overflow menu only on hover"

  attr :use_zebra_styles, :boolean, default: true, doc: "enable zebra striping"
  attr :use_static_width, :boolean, default: false, doc: "use static table width"
  attr :with_row_ai_labels, :boolean, default: false, doc: "enable AI labels in rows"
  attr :with_row_slugs, :boolean, default: false, doc: "enable slugs in rows"
  attr :locale, :string, default: nil, doc: "table locale"
  attr :filter_rows, :any, default: nil, doc: "custom filter rows function"

  slot :col, required: true do
    attr :label, :any
  end

  slot :action, doc: "the slot for showing user actions in the last table column"
  slot :title, doc: "table title"
  slot :description, doc: "table description"
  slot :toolbar, doc: "table toolbar contents"

  slot :row_decorator, doc: "content injected before row cells" do
    attr :class, :string
  end

  slot :expanded_row, doc: "content rendered as expanded rows"

  def table(%{rows: _} = assigns) do
    assigns =
      assigns
      |> assign_new(:selection_name, fn -> "#{assigns.id}-selection" end)
      |> assign_new(:selection_label, fn -> "Select row" end)
      |> assign_new(:selectable, fn -> false end)
      |> assign_new(:sortable, fn -> false end)
      |> assign_new(:radio, fn -> false end)
      |> assign_new(:size, fn -> "lg" end)
      |> assign_new(:expandable, fn -> false end)
      |> assign_new(:batch_expansion, fn -> false end)
      |> assign_new(:overflow_menu_on_hover, fn -> false end)
      |> assign_new(:use_zebra_styles, fn -> true end)
      |> assign_new(:use_static_width, fn -> false end)
      |> assign_new(:with_row_ai_labels, fn -> false end)
      |> assign_new(:with_row_slugs, fn -> false end)
      |> assign_new(:locale, fn -> "en" end)
      |> assign(:selected_set, selected_set(assigns.selected_ids))
      |> assign(:effective_selectable, effective_selectable?(assigns))
      |> assign(:effective_sortable, effective_sortable?(assigns))
      |> assign(:effective_expandable, effective_expandable?(assigns))

    ~H"""
    <Graphene.CarbonComponents.table_element
      id={@id}
      size={@size}
      expandable={@effective_expandable}
      batch_expansion={@batch_expansion}
      radio={@radio}
      overflow_menu_on_hover={@overflow_menu_on_hover}
      use_zebra_styles={@use_zebra_styles}
      use_static_width={@use_static_width}
      with_row_ai_labels={@with_row_ai_labels}
      with_row_slugs={@with_row_slugs}
      locale={@locale}
      filter_rows={@filter_rows}
      is_selectable={@effective_selectable}
      is_sortable={@effective_sortable}
    >
      <:title :if={@title != []}>
        <Graphene.CarbonComponents.table_header_title>
          {render_slot(@title)}
        </Graphene.CarbonComponents.table_header_title>
      </:title>
      <:description :if={@description != []}>
        <Graphene.CarbonComponents.table_header_description>
          {render_slot(@description)}
        </Graphene.CarbonComponents.table_header_description>
      </:description>
      <:toolbar :if={@toolbar != []}>{render_slot(@toolbar)}</:toolbar>
      <Graphene.CarbonComponents.table_head>
        <Graphene.CarbonComponents.table_header_row
          selection_name={@effective_selectable && @selection_name}
          selection_label={@effective_selectable && "Select all"}
          hide_checkbox={@radio}
          batch_expansion={@batch_expansion}
        >
          <Graphene.CarbonComponents.table_header_cell
            :for={{col, index} <- Enum.with_index(@col)}
            is_sortable={@effective_sortable}
            data-col-index={index}
          >
            {render_column_label(col[:label])}
          </Graphene.CarbonComponents.table_header_cell>
          <Graphene.CarbonComponents.table_header_cell :if={@action != []}>
            <span class="sr-only">Actions</span>
          </Graphene.CarbonComponents.table_header_cell>
        </Graphene.CarbonComponents.table_header_row>
      </Graphene.CarbonComponents.table_head>
      <Graphene.CarbonComponents.table_body id={@id <> "-body"}>
        <%= for {row, index} <- Enum.with_index(@rows) do %>
          <Graphene.CarbonComponents.table_row
            id={row_dom_id(@row_id, row, index)}
            data-row-id={row_key_string(@row_id, row, index)}
            selected={row_selected?(@selected_set, @row_id, row, index)}
            selection_name={@effective_selectable && @selection_name}
            selection_value={@effective_selectable && row_key_string(@row_id, row, index)}
            selection_label={@effective_selectable && @selection_label}
            radio={@radio}
            batch_expansion={@batch_expansion}
          >
            <%= for decorator <- @row_decorator do %>
              {render_slot(decorator, @row_item.(row))}
            <% end %>
            <Graphene.CarbonComponents.table_cell
              :for={col <- @col}
              phx-click={@row_click && @row_click.(row)}
            >
              <Graphene.CarbonComponents.table_cell_content>
                {render_slot(col, @row_item.(row))}
              </Graphene.CarbonComponents.table_cell_content>
            </Graphene.CarbonComponents.table_cell>
            <Graphene.CarbonComponents.table_cell :if={@action != []}>
              <div>
                <%= for action <- @action do %>
                  {render_slot(action, @row_item.(row))}
                <% end %>
              </div>
            </Graphene.CarbonComponents.table_cell>
          </Graphene.CarbonComponents.table_row>
          <Graphene.CarbonComponents.table_expanded_row :if={@effective_expandable}>
            <%= for expanded <- @expanded_row do %>
              {render_slot(expanded, @row_item.(row))}
            <% end %>
          </Graphene.CarbonComponents.table_expanded_row>
        <% end %>
      </Graphene.CarbonComponents.table_body>
    </Graphene.CarbonComponents.table_element>
    """
  end

  def table(assigns), do: Graphene.CarbonComponents.table_element(assigns)

  defp selected_set(nil), do: MapSet.new()

  defp selected_set(ids) do
    ids
    |> Enum.map(&to_string/1)
    |> MapSet.new()
  end

  defp effective_selectable?(assigns) do
    selected_ids = assigns.selected_ids || []
    assigns.selectable || assigns.radio || selected_ids != []
  end

  defp effective_sortable?(assigns), do: assigns.sortable
  defp effective_expandable?(assigns), do: assigns.expandable || assigns.expanded_row != []

  defp row_key(row_id_fun, row, index) do
    key =
      cond do
        is_function(row_id_fun, 1) -> row_id_fun.(row)
        is_nil(row_id_fun) -> Graphene.CarbonComponents.DataTable.Shared.row_id(row)
        true -> index
      end

    if is_nil(key), do: index, else: key
  end

  defp row_key_string(row_id_fun, row, index) do
    row_id_fun
    |> row_key(row, index)
    |> to_string()
  end

  defp row_dom_id(row_id_fun, row, index) do
    row_id_fun
    |> row_key(row, index)
    |> to_string()
  end

  defp row_selected?(selected_set, row_id_fun, row, index) do
    MapSet.member?(selected_set, row_key_string(row_id_fun, row, index))
  end

  defp render_column_label(nil), do: nil
  defp render_column_label(fun) when is_function(fun, 0), do: fun.()
  defp render_column_label(label), do: label
end
