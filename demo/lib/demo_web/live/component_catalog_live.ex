defmodule DemoWeb.ComponentCatalogLive do
  use DemoWeb, :live_view

  alias Graphene.Icons

  @graphene_asset_files ["graphene.css", "index.js"]

  @impl true
  def mount(_params, _session, socket) do
    components = build_component_list()
    default_component = default_component(components)

    socket =
      socket
      |> assign(
        active_page: :components,
        page_title: "Component Catalog · Nimbus Cloud",
        components: components,
        selected_name: Atom.to_string(default_component.name),
        query: "",
        filter_form: to_form(%{"query" => ""}, as: :filter),
        graphene_version: graphene_version(),
        carbon_version: carbon_version(),
        graphene_assets: graphene_assets()
      )

    if connected?(socket) do
      :timer.send_interval(2_000, self(), :refresh_graphene_assets)
    end

    {:ok, socket}
  end

  @impl true
  def handle_event("filter", %{"filter" => %{"query" => query}}, socket) do
    {:noreply,
     assign(socket,
       query: query,
       filter_form: to_form(%{"query" => query}, as: :filter)
     )}
  end

  def handle_event("select_component", %{"name" => name}, socket) do
    {:noreply, assign(socket, :selected_name, name)}
  end

  @impl true
  def handle_info(:refresh_graphene_assets, socket) do
    {:noreply,
     socket
     |> assign(:graphene_assets, graphene_assets())
     |> assign(:graphene_version, graphene_version())
     |> assign(:carbon_version, carbon_version())}
  end

  @impl true
  def render(assigns) do
    filtered = filter_components(assigns.components, assigns.query)

    selected =
      Enum.find(filtered, fn component ->
        Atom.to_string(component.name) == assigns.selected_name
      end) || List.first(filtered)

    assigns =
      assigns
      |> assign(:filtered_components, filtered)
      |> assign(:component_count, length(filtered))
      |> assign(:selected_component, selected)

    ~H"""
    <.page_header>
      <:breadcrumb>
        <.breadcrumb size="sm">
          <:item href={~p"/demo"} text="Cloud Admin" />
        </.breadcrumb>
      </:breadcrumb>
      <:content title="Component Catalog">
        <.tag type="cool-gray">Carbon</.tag>
      </:content>
      <:content_text subtitle="Rendered coverage for every Carbon wrapper in Graphene." />
    </.page_header>

    <.grid full_width row_gap="07">
      <:column span="16">
        <.grid>
          <:column sm="4" md="4" lg="6">
            <.stack gap="3">
              <.tile>
                <.stack gap="2">
                  <.stack orientation="horizontal" gap="2">
                    <.heading>Assets</.heading>
                    <.tag type="cool-gray">v{@graphene_version}</.tag>
                    <.tag type="cool-gray">Carbon {@carbon_version}</.tag>
                  </.stack>
                  <p>This panel refreshes every 2 seconds to surface regenerated assets.</p>
                  <.structured_list rows={@graphene_assets} condensed>
                    <:col :let={asset} label="Asset">{asset.name}</:col>
                    <:col :let={asset} label="Size">{asset.size || "Missing"}</:col>
                    <:col :let={asset} label="Updated">{asset.updated_at || "Missing"}</:col>
                  </.structured_list>
                </.stack>
              </.tile>

              <.tile>
                <div style="max-height: 22rem; overflow-y: auto; padding-right: 0.25rem;">
                  <.contained_list kind="on-page" size="sm">
                    <:label>
                      <.stack orientation="horizontal" gap="2">
                        <span>Components</span>
                        <.tag type="cool-gray">{@component_count}</.tag>
                      </.stack>
                    </:label>
                    <:action>
                      <.form for={@filter_form} phx-change="filter">
                        <.search
                          field={@filter_form[:query]}
                          label_text="Filter components"
                          placeholder="Search by name"
                          size="sm"
                        />
                      </.form>
                    </:action>
                    <.contained_list_item
                      :for={component <- @filtered_components}
                      clickable
                      phx-click="select_component"
                      phx-value-name={component.name}
                    >
                      {component.label}
                    </.contained_list_item>
                  </.contained_list>
                </div>
              </.tile>
            </.stack>
          </:column>
          <:column sm="4" md="4" lg="10">
            <.tile :if={@selected_component}>
              <.stack gap="3">
                <.stack orientation="horizontal" gap="2">
                  <.heading>{@selected_component.label}</.heading>
                  <.tag type="cool-gray">:{@selected_component.name}</.tag>
                </.stack>
                <.layer level="1">
                  <div style="padding: 1rem;">
                    {component_preview(@selected_component)}
                  </div>
                </.layer>
              </.stack>
            </.tile>
          </:column>
        </.grid>
      </:column>

      <:column span="16">
        <.tile>
          <.stack orientation="horizontal" gap="2">
            <.icon name="document" size="16" />
            <p>
              This catalog uses generated defaults to render each component once for visual QA.
            </p>
          </.stack>
        </.tile>
      </:column>
    </.grid>
    """
  end

  defp build_component_list do
    meta_map = carbon_component_meta_map()

    carbon_component_functions()
    |> Enum.map(fn name ->
      meta = resolve_component_meta(name, meta_map)
      label = humanize(name)

      %{
        name: name,
        label: label,
        label_downcase: String.downcase(label),
        meta: meta
      }
    end)
    |> Enum.sort_by(& &1.label)
  end

  defp default_component(components) do
    Enum.find(components, fn component -> component.name == :button end) || List.first(components)
  end

  defp filter_components(components, query) do
    query = query |> to_string() |> String.trim() |> String.downcase()

    if query == "" do
      components
    else
      Enum.filter(components, fn component ->
        String.contains?(component.label_downcase, query) or
          String.contains?(Atom.to_string(component.name), query)
      end)
    end
  end

  defp component_preview(%{name: name, meta: meta}) do
    assigns = build_assigns(name, meta)
    apply(Graphene.CarbonComponents, name, [assigns])
  end

  defp build_assigns(:data_table, meta) do
    base = build_assigns_base(:data_table, meta)

    rows = [
      %{id: "row-1", name: "Aurora", status: "Healthy", owner: "Platform"},
      %{id: "row-2", name: "Helix", status: "Degraded", owner: "Experience"}
    ]

    cols = [
      %{label: "Name", inner_block: fn _changed, row -> row.name end},
      %{label: "Status", inner_block: fn _changed, row -> row.status end},
      %{label: "Owner", inner_block: fn _changed, row -> row.owner end}
    ]

    base
    |> Map.put(:id, "catalog-data-table")
    |> Map.put(:rows, rows)
    |> Map.put(:col, cols)
  end

  defp build_assigns(:table_live, meta) do
    build_assigns(:data_table, meta)
  end

  defp build_assigns(name, meta) do
    build_assigns_base(name, meta)
  end

  defp carbon_component_functions do
    Graphene.CarbonComponents.__info__(:functions)
    |> Enum.filter(fn {_name, arity} -> arity == 1 end)
    |> Enum.map(&elem(&1, 0))
    |> Enum.reject(&(&1 in [:__info__, :__components__, :__struct__]))
    |> Enum.uniq()
  end

  defp carbon_component_meta_map do
    modules =
      case :application.get_key(:graphene, :modules) do
        {:ok, modules} -> modules
        _ -> []
      end

    modules
    |> Enum.filter(&carbon_component_module?/1)
    |> Enum.reduce(%{}, fn module, acc ->
      if Code.ensure_loaded?(module) and function_exported?(module, :__components__, 0) do
        Map.merge(acc, module.__components__())
      else
        acc
      end
    end)
  end

  defp carbon_component_module?(module) do
    module == Graphene.CarbonComponents or
      match?(["Graphene", "CarbonComponents" | _], Module.split(module))
  end

  defp resolve_component_meta(:table_live, meta_map) do
    Map.get(meta_map, :data_table, empty_component_meta())
  end

  defp resolve_component_meta(name, meta_map) do
    Map.get(meta_map, name, empty_component_meta())
  end

  defp empty_component_meta do
    %{attrs: [], slots: []}
  end

  defp build_assigns_base(name, meta) do
    base = %{__changed__: %{}}

    base =
      if Enum.any?(meta.attrs, &(&1.name == :rest)) do
        Map.put(base, :rest, %{})
      else
        base
      end

    base =
      Enum.reduce(meta.attrs, base, fn attr, acc ->
        if attr.required do
          Map.put(acc, attr.name, attr_value(attr, name, nil, 1))
        else
          acc
        end
      end)

    base =
      base
      |> maybe_put_named_attr(:name, meta, name)
      |> maybe_put_named_attr(:id, meta, name)

    Enum.reduce(meta.slots, base, fn slot, acc ->
      Map.put(acc, slot.name, slot_entries(slot, name))
    end)
  end

  defp graphene_assets do
    Enum.map(@graphene_asset_files, fn name ->
      case graphene_asset_stat(name) do
        {:ok, stat} ->
          %{
            name: name,
            size: format_bytes(stat.size),
            updated_at: format_mtime(stat.mtime)
          }

        {:error, _} ->
          %{name: name, size: nil, updated_at: nil}
      end
    end)
  end

  defp graphene_asset_stat(name) do
    with priv_dir when is_list(priv_dir) <- :code.priv_dir(:graphene),
         path <- Path.join([to_string(priv_dir), "static", "assets", name]),
         {:ok, stat} <- File.stat(path) do
      {:ok, stat}
    else
      _ -> {:error, :missing}
    end
  end

  defp graphene_version do
    Graphene.Version.graphene()
  end

  defp carbon_version do
    Graphene.Version.carbon_web_components()
  end

  defp format_mtime(mtime) do
    mtime
    |> NaiveDateTime.from_erl!()
    |> Calendar.strftime("%Y-%m-%d %H:%M:%S")
  end

  defp format_bytes(size) when is_integer(size) do
    cond do
      size >= 1_048_576 ->
        "#{Float.round(size / 1_048_576, 1)} MB"

      size >= 1024 ->
        "#{Float.round(size / 1024, 1)} KB"

      true ->
        "#{size} B"
    end
  end

  defp maybe_put_named_attr(assigns, attr_name, meta, component_name) do
    attr =
      Enum.find(meta.attrs, fn meta_attr ->
        meta_attr.name == attr_name
      end)

    cond do
      is_nil(attr) -> assigns
      Map.has_key?(assigns, attr_name) -> assigns
      true -> Map.put(assigns, attr_name, attr_value(attr, component_name, nil, 1))
    end
  end

  defp slot_entries(slot, component_name) do
    [build_slot_entry(slot, component_name, 1)]
  end

  defp build_slot_entry(slot, component_name, index) do
    slot_attrs =
      Enum.reduce(slot.attrs, %{}, fn attr, acc ->
        if attr.required or attr.name in [:label, :text, :title, :value, :name, :href] do
          Map.put(acc, attr.name, attr_value(attr, component_name, slot.name, index))
        else
          acc
        end
      end)

    Map.merge(slot_attrs, %{
      inner_block: slot_inner_block(slot, component_name, index),
      __slot__: slot.name
    })
  end

  defp slot_inner_block(slot, component_name, index) do
    label = "#{humanize(slot.name)} #{index}"

    fn _changed, _argument ->
      case {component_name, slot.name} do
        {:breadcrumb, :item} -> label
        _ -> label
      end
    end
  end

  defp attr_value(%{opts: opts} = attr, component_name, slot_name, index) do
    with values when is_list(values) <- Keyword.get(opts, :values),
         value when not is_nil(value) <- Enum.find(values, &(!is_nil(&1))) do
      value
    else
      _ ->
        case Keyword.get(opts, :default) do
          nil ->
            case {component_name, attr.name, slot_name} do
              {:icon, :name, _} ->
                Icons.available_icons() |> List.first() || "cloud"

              {_, :name, :icon} ->
                Icons.available_icons() |> List.first() || "cloud"

              _ ->
                case attr.name do
                  :id -> "demo-#{component_name}"
                  :rows -> [%{id: "row-1", name: "Row 1"}]
                  :href -> "#"
                  :name -> "#{component_name}-#{slot_name || "attr"}-#{index}"
                  :value -> "value-#{index}"
                  :label -> "#{humanize(slot_name || component_name)} #{index}"
                  :title -> "#{humanize(component_name)} #{index}"
                  :text -> "#{humanize(component_name)}"
                  :placeholder -> "#{humanize(component_name)}"
                  _ -> fallback_attr_value(attr, index)
                end
            end

          default ->
            default
        end
    end
  end

  defp fallback_attr_value(%{type: :boolean}, _index), do: true
  defp fallback_attr_value(%{type: :integer}, index), do: index
  defp fallback_attr_value(%{type: :float}, _index), do: 0.5
  defp fallback_attr_value(%{type: :list}, _index), do: []
  defp fallback_attr_value(%{type: :map}, _index), do: %{}
  defp fallback_attr_value(%{type: :any}, _index), do: "demo"
  defp fallback_attr_value(%{type: :string}, _index), do: "demo"
  defp fallback_attr_value(_attr, _index), do: "demo"

  defp humanize(value) when is_atom(value) do
    value
    |> Atom.to_string()
    |> humanize()
  end

  defp humanize(value) when is_binary(value) do
    value
    |> String.replace("_", " ")
    |> String.split()
    |> Enum.map(&String.capitalize/1)
    |> Enum.join(" ")
  end
end
