defmodule DemoWeb.DevicesLive do
  use DemoWeb, :live_view

  alias Demo.CloudData
  alias Demo.CloudEvents
  import DemoWeb.CloudHelpers

  @impl true
  def mount(_params, _session, socket) do
    if connected?(socket), do: CloudEvents.subscribe()

    device_data = CloudData.devices()
    random_device = device_data.devices |> Enum.random() |> Map.fetch!(:device_id)

    socket =
      socket
      |> assign(
        active_page: :devices,
        page_title: "Devices · Nimbus Cloud",
        sites: device_data.sites,
        devices: device_data.devices,
        query: %{violations: false, offline: false},
        focus_marker: random_device
      )
      |> assign_filtered()

    {:ok, socket}
  end

  @impl true
  def handle_event("toggle_filter", %{"field" => field}, socket) when field in ["violations", "offline"] do
    new_query = Map.update!(socket.assigns.query, String.to_existing_atom(field), &(!&1))
    {:noreply, assign(socket, query: new_query) |> assign_filtered()}
  end

  @impl true
  def handle_event("focus_marker", %{"id" => id}, socket) do
    {:noreply, assign(socket, focus_marker: id)}
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
        %{
          id: d.device_id,
          lat: d.lat,
          lon: d.lon,
          label: "Marker ##{d.serial_number}",
          description: """
          Site Address: #{d.site_address}
          Device id: #{d.device_id}
          Comment: #{d.comment}
          """
        }
      end)

    assign(socket,
      filtered_devices: filtered_devices,
      filtered_sites: filtered_sites,
      markers: markers
    )
  end

  # -- Render Helpers --

  defp count_violations(devices), do: devices |> violations_filter() |> Enum.uniq_by(& &1.site_id) |> length()
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

    <.grid>
      <:column span="100%">
        <div class="demo-section demo-card">
          <.grid>
            <:column span="100%">
              <.heading>Overview</.heading>
            </:column>
            <:column span="100%">
              <.selectable_tag phx-click="toggle_filter" phx-value-field="violations" type="red" size="lg" text={"Sites with violations: #{count_violations(@devices)}"} />
              <.selectable_tag phx-click="toggle_filter" phx-value-field="offline" type="red" size="lg" text={"Offline sensors: #{count_offline(@devices)}"} />
            </:column>
          </.grid>
        </div>
      </:column>

      <:column span="100%">
        <div class="demo-section demo-card">
          <.grid>
            <:column span="50%">
              <.accordion alignment="start">
                <:item :for={{site, devices} <- @filtered_sites} title={site.address} class="empty">
                  <.grid row_gap="01" full_width>
                    <:column :for={device <- devices} span="100%">
                      <.button phx-click="focus_marker" variant="ghost" phx-value-id={device.device_id}>
                        #{device.serial_number}
                      </.button>
                    </:column>
                  </.grid>
                </:item>
              </.accordion>
            </:column>
            <:column span="50%">
              <div
                id="map"
                phx-hook="MapLibreHook"
                phx-update="ignore"
                data-markers={Jason.encode!(@markers)}
                data-focus={@focus_marker}
                style="width: 100%; height: 400px;"
              />
            </:column>
          </.grid>
        </div>
      </:column>
    </.grid>
    """
  end
end
