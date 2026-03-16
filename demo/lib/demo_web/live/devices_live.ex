defmodule DemoWeb.DevicesLive do
  use DemoWeb, :live_view

  alias Demo.CloudData
  alias Demo.CloudEvents
  import DemoWeb.CloudHelpers

  @map_style %{
    version: 8,
    sources: %{
      "yandex-source": %{
        type: "raster",
        tiles: [
          "https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&scale=2&lang=ru_RU&projection=web_mercator"
        ],
        tileSize: 256,
        attribution: "© Яндекс",
        maxzoom: 20,
        minzoom: 0
      }
    },
    layers: [
      %{
        id: "yandex",
        type: "raster",
        source: "yandex-source"
      }
    ]
  }

  @impl true
  def mount(_params, _session, socket) do
    if connected?(socket), do: CloudEvents.subscribe()

    device_data = CloudData.devices()

    random_device = device_data.devices |> Enum.random()

    socket =
      socket
      |> assign(
        active_page: :devices,
        map_style: @map_style,
        page_title: "Devices · Nimbus Cloud",
        sites: device_data.sites,
        devices: device_data.devices,
        query: %{violations: false, offline: false},
        selected_device: random_device,
        map_center: [random_device.lon, random_device.lat]
      )
      |> assign_filtered()
      |> push_event("graphene:map-focus-marker", %{"id" => random_device.device_id})

    {:ok, socket}
  end

  @impl true
  def handle_event("toggle_filter", %{"field" => field}, socket)
      when field in ["violations", "offline"] do
    new_query = Map.update!(socket.assigns.query, String.to_existing_atom(field), &(!&1))
    {:noreply, assign(socket, query: new_query) |> assign_filtered()}
  end

  def handle_info({"map-marker-click", %{"id" => id}, _}, socket) do
    id = String.to_integer(id)

    socket =
      assign(socket, selected_device: socket.assigns.devices |> Enum.find(&(&1.device_id == id)))

    {:noreply, socket}
  end

  # -- Filtering Helpers --

  defp maybe_filter(devices, true, filter_fun), do: filter_fun.(devices)
  defp maybe_filter(devices, _cond, _filter_fun), do: devices

  defp violations_filter(devices) do
    Enum.filter(devices, &(&1.leq_5min && &1.leq_5min > 50))
  end

  defp offline_filter(devices) do
    Enum.filter(devices, &(&1.leq_5min == nil || &1.last_bucket == nil))
  end

  defp assign_filtered(socket) do
    %{violations: v, offline: o} = socket.assigns.query

    filtered_devices =
      socket.assigns.devices
      |> maybe_filter(v, &violations_filter/1)
      |> maybe_filter(o, &offline_filter/1)

    filtered_sites =
      filtered_devices
      |> Enum.group_by(& &1.site_id)
      |> Enum.map(fn {site_id, devices} ->
        {Enum.find(socket.assigns.sites, &(&1.id == site_id)), devices}
      end)

    markers =
      Enum.map(filtered_devices, fn d ->
        {Integer.to_string(d.device_id),
         %{
           lat: d.lat,
           lon: d.lon
         }}
      end)
      |> Map.new()

    assign(socket,
      filtered_devices: filtered_devices,
      filtered_sites: filtered_sites,
      markers: markers
    )
  end

  # -- Render Helpers --

  defp count_violations(devices),
    do: devices |> violations_filter() |> Enum.uniq_by(& &1.site_id) |> length()

  defp count_offline(devices), do: devices |> offline_filter() |> length()

  @impl true
  def render(assigns) do
    ~H"""
    <.page_header>
      <:breadcrumb>
        <.breadcrumb size="sm">
          <:item href={~p"/demo"} text="Cloud Admin" />
        </.breadcrumb>
      </:breadcrumb>
      <:content title="Devices">
        <.tag type="blue">PubSub</.tag>
      </:content>
      <:content_text subtitle="Health and status of devices on the sites." />
    </.page_header>

    <div style="padding-top: 16px;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        <.tile style="display: flex; flex-direction: column; gap: 16px; height: 400px;">
          <div style="display: flex; gap: 8px; align-items: center">
            <.selectable_tag
              phx-click="toggle_filter"
              phx-value-field="violations"
              type="red"
              size="lg"
              text={"Sites with violations: #{count_violations(@devices)}"}
            />
            <.selectable_tag
              phx-click="toggle_filter"
              phx-value-field="offline"
              type="red"
              size="lg"
              text={"Offline sensors: #{count_offline(@devices)}"}
            />
          </div>
          <div style="overflow-y: auto; scrollbar-gutter: stable;">
            <.table
              id="sites-table"
              rows={@filtered_sites}
              locale="en"
              expandable={true}
            >
              <:toolbar>
                <.table_toolbar>
                  <.table_toolbar_content>
                    <.table_toolbar_search placeholder="Filter table" persistent />
                  </.table_toolbar_content>
                </.table_toolbar>
              </:toolbar>
              <:col :let={row} :for={col <- [:address, :uin]} label={col}>
                {elem(row, 0)[col]}
              </:col>

              <:expanded_row :let={row}>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  <div :for={device <- elem(row, 1)}>
                    <.button
                      id={"device-#{device.device_id}"}
                      phx-click="graphene:map-focus-marker"
                      phx-value-id={device.device_id}
                      phx-target="#devices-map"
                      variant="ghost"
                      style="display: contents;"
                    >
                      <strong>Device ID:</strong> {device.device_id}
                    </.button>
                  </div>
                </div>
              </:expanded_row>
            </.table>
          </div>
        </.tile>

        <.tile>
          <div style="height: 400px;">
            <.map
              id="devices-map"
              map_styles={Jason.encode!(@map_style)}
              map_center={@map_center}
              markers={@markers}
              bubble_events={["map-marker-click"]}
            >
              <:popup>
                <.tile style="display: flex; flex-direction: column;">
                  <h5 style="margin-bottom: 8px;">Device #{@selected_device.serial_number}</h5>
                  <div><strong>Coords:</strong> {@selected_device.lon} {@selected_device.lat}</div>
                  <div style="font-weight: light;">
                    <strong>ID:</strong> #{@selected_device.device_id}
                  </div>
                </.tile>
              </:popup>
            </.map>
          </div>
        </.tile>
      </div>
    </div>
    """
  end
end
