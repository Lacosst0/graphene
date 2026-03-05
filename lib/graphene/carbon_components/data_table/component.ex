defmodule Graphene.CarbonComponents.DataTableComponent do
  @moduledoc false

  use Phoenix.LiveComponent

  alias Graphene.Internal.CoreComponents

  @impl true
  def update(assigns, socket) do
    prev_selected_ids = socket.assigns[:selected_ids]

    socket =
      socket
      |> assign(assigns)
      |> assign(
        :locale,
        if(is_nil(assigns[:locale]) || assigns[:locale] == "", do: "en", else: assigns[:locale])
      )
      |> maybe_preserve_selected_ids(prev_selected_ids, assigns)
      |> assign_new(:selected_ids, fn -> [] end)
      |> assign_new(:table_id, fn -> assigns.id end)
      |> assign_new(:selection_name, fn ->
        "#{Map.get(assigns, :table_id, assigns.id)}-selection"
      end)
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
      |> assign_new(:filter_rows, fn -> nil end)
      |> assign_new(:phx_update, fn -> "ignore" end)
      |> assign_new(:on_row_selected, fn -> nil end)
      |> assign_new(:on_row_all_selected, fn -> nil end)
      |> assign_new(:on_sorted, fn -> nil end)
      |> assign_new(:on_filtered, fn -> nil end)
      |> assign_new(:on_search, fn -> nil end)
      |> assign_new(:on_batch_cancel, fn -> nil end)
      |> assign_new(:row_item, fn -> &Function.identity/1 end)
      |> assign_new(:row_click, fn -> nil end)
      |> assign_new(:row_id, fn -> &default_row_id/1 end)
      |> assign_new(:action, fn -> [] end)
      |> assign_new(:col, fn -> [] end)
      |> assign_new(:title, fn -> [] end)
      |> assign_new(:description, fn -> [] end)
      |> assign_new(:toolbar, fn -> [] end)
      |> assign_new(:row_decorator, fn -> [] end)
      |> assign_new(:expanded_row, fn -> [] end)
      |> limit_selected_ids()

    {:ok, socket}
  end

  @impl true
  def render(assigns) do
    assigns =
      assigns
      |> assign(:selected_set, selected_set(assigns.selected_ids))
      |> assign(:selected_ids_attr, selected_ids_attr(assigns.selected_ids))
      |> assign(:effective_selectable, effective_selectable?(assigns))
      |> assign(:effective_sortable, effective_sortable?(assigns))
      |> assign(:effective_expandable, effective_expandable?(assigns))

    ~H"""
    <div id={@id}>
      <CoreComponents.table_element
        id={@table_id}
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
        phx-hook="BasicComponentsTable"
        phx-target={@myself}
        phx-update={@phx_update}
        data-selected-ids={@selected_ids_attr}
      >
        <:title :if={@title != []}>
          <CoreComponents.table_header_title>
            {render_slot(@title)}
          </CoreComponents.table_header_title>
        </:title>
        <:description :if={@description != []}>
          <CoreComponents.table_header_description>
            {render_slot(@description)}
          </CoreComponents.table_header_description>
        </:description>
        <:toolbar :if={@toolbar != []}>{render_slot(@toolbar)}</:toolbar>
        <CoreComponents.table_head>
          <CoreComponents.table_header_row
            selection_name={@effective_selectable && @selection_name}
            selection_label={@effective_selectable && "Select all"}
            hide_checkbox={@radio}
            batch_expansion={@batch_expansion}
          >
            <CoreComponents.table_header_cell
              :for={{col, index} <- Enum.with_index(@col)}
              is_sortable={@effective_sortable}
              data-col-index={index}
            >
              {render_column_label(col[:label])}
            </CoreComponents.table_header_cell>
            <CoreComponents.table_header_cell :if={@action != []}>
              <span class="sr-only">Actions</span>
            </CoreComponents.table_header_cell>
          </CoreComponents.table_header_row>
        </CoreComponents.table_head>
        <CoreComponents.table_body
          id={@table_id <> "body"}
          phx-update={is_struct(@rows, Phoenix.LiveView.LiveStream) && "stream"}
        >
          <%= for {row, index} <- Enum.with_index(@rows) do %>
            <CoreComponents.table_row
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
              <CoreComponents.table_cell
                :for={col <- @col}
                phx-click={@row_click && @row_click.(row)}
              >
                <CoreComponents.table_cell_content>
                  {render_slot(col, @row_item.(row))}
                </CoreComponents.table_cell_content>
              </CoreComponents.table_cell>
              <CoreComponents.table_cell :if={@action != []}>
                <div>
                  <%= for action <- @action do %>
                    {render_slot(action, @row_item.(row))}
                  <% end %>
                </div>
              </CoreComponents.table_cell>
            </CoreComponents.table_row>
            <CoreComponents.table_expanded_row :if={@effective_expandable}>
              <%= for expanded <- @expanded_row do %>
                {render_slot(expanded, @row_item.(row))}
              <% end %>
            </CoreComponents.table_expanded_row>
          <% end %>
        </CoreComponents.table_body>
      </CoreComponents.table_element>
    </div>
    """
  end

  @impl true
  def handle_event("graphene:table-row-selected", payload, socket) do
    socket = maybe_update_selected(socket, payload)
    socket = apply_callback(socket, socket.assigns.on_row_selected, payload)
    {:noreply, socket}
  end

  @impl true
  def handle_event("graphene:table-row-all-selected", payload, socket) do
    socket = maybe_update_selected(socket, payload)
    socket = apply_callback(socket, socket.assigns.on_row_all_selected, payload)
    {:noreply, socket}
  end

  @impl true
  def handle_event("graphene:table-sorted", payload, socket) do
    socket = apply_callback(socket, socket.assigns.on_sorted, payload)
    {:noreply, socket}
  end

  @impl true
  def handle_event("graphene:table-filtered", payload, socket) do
    socket = apply_callback(socket, socket.assigns.on_filtered, payload)
    {:noreply, socket}
  end

  @impl true
  def handle_event("graphene:table-search-input", payload, socket) do
    socket = apply_callback(socket, socket.assigns.on_search, payload)
    {:noreply, socket}
  end

  @impl true
  def handle_event("graphene:table-batch-cancel", payload, socket) do
    socket =
      if effective_selectable?(socket.assigns) do
        assign(socket, :selected_ids, [])
      else
        socket
      end

    socket = apply_callback(socket, socket.assigns.on_batch_cancel, payload)
    {:noreply, socket}
  end

  defp effective_selectable?(assigns) do
    selected_ids = assigns.selected_ids || []

    assigns.selectable ||
      assigns.radio ||
      selected_ids != [] ||
      is_function(assigns.on_row_selected) ||
      is_function(assigns.on_row_all_selected)
  end

  defp effective_sortable?(assigns) do
    assigns.sortable || is_function(assigns.on_sorted)
  end

  defp effective_expandable?(assigns) do
    assigns.expandable || assigns.expanded_row != []
  end

  defp maybe_update_selected(socket, %{"selected_ids" => ids}) when is_list(ids) do
    if effective_selectable?(socket.assigns) do
      ids =
        ids
        |> Enum.map(&to_string/1)
        |> maybe_limit_selection(socket.assigns)

      assign(socket, :selected_ids, ids)
    else
      socket
    end
  end

  defp maybe_update_selected(socket, _payload), do: socket

  defp selected_set(nil), do: MapSet.new()

  defp selected_set(ids) do
    ids
    |> Enum.map(&to_string/1)
    |> MapSet.new()
  end

  defp selected_ids_attr(nil), do: nil

  defp selected_ids_attr(ids) when is_list(ids) do
    ids
    |> Enum.map(&to_string/1)
    |> Enum.join(",")
  end

  defp row_key(row_id_fun, row, index) do
    key =
      cond do
        is_function(row_id_fun, 1) -> row_id_fun.(row)
        is_nil(row_id_fun) -> default_row_id(row)
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
    case row_id_fun do
      fun when is_function(fun, 1) ->
        row_id_fun
        |> row_key(row, index)
        |> to_string()

      _ ->
        row_key(row_id_fun, row, index) |> to_string()
    end
  end

  defp row_selected?(selected_set, row_id_fun, row, index) do
    MapSet.member?(selected_set, row_key_string(row_id_fun, row, index))
  end

  defp default_row_id(row) do
    Graphene.CarbonComponents.DataTable.Shared.row_id(row)
  end

  defp render_column_label(nil), do: nil
  defp render_column_label(fun) when is_function(fun, 0), do: fun.()
  defp render_column_label(label), do: label

  defp apply_callback(socket, nil, _payload), do: socket

  defp apply_callback(socket, fun, payload) when is_function(fun, 2) do
    normalize_callback_result(fun.(payload, socket), socket)
  end

  defp apply_callback(socket, fun, payload) when is_function(fun, 1) do
    normalize_callback_result(fun.(payload), socket)
  end

  defp apply_callback(socket, _fun, _payload), do: socket

  defp normalize_callback_result({:noreply, %Phoenix.LiveView.Socket{} = sock}, _socket), do: sock
  defp normalize_callback_result(%Phoenix.LiveView.Socket{} = sock, _socket), do: sock
  defp normalize_callback_result(%{} = assigns, socket), do: assign(socket, assigns)
  defp normalize_callback_result(_, socket), do: socket

  defp limit_selected_ids(%Phoenix.LiveView.Socket{} = socket) do
    assigns = socket.assigns

    if assigns.radio && is_list(assigns.selected_ids) do
      assign(socket, :selected_ids, Enum.take(assigns.selected_ids, 1))
    else
      socket
    end
  end

  defp maybe_limit_selection(ids, %{radio: true}) when is_list(ids), do: Enum.take(ids, 1)
  defp maybe_limit_selection(ids, _assigns), do: ids

  defp maybe_preserve_selected_ids(socket, prev_selected_ids, assigns) do
    case Map.get(assigns, :selected_ids, :unset) do
      nil when is_list(prev_selected_ids) ->
        assign(socket, :selected_ids, prev_selected_ids)

      _ ->
        socket
    end
  end
end
