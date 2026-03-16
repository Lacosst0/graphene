defmodule DemoWeb.ActivityLive do
  use DemoWeb, :live_view

  alias Demo.CloudData
  alias Demo.CloudEvents

  import DemoWeb.CloudHelpers

  @impl true
  def mount(_params, _session, socket) do
    if connected?(socket) do
      CloudEvents.subscribe()
    end

    {:ok,
     assign(socket,
       active_page: :activity,
       page_title: "Live Activity · Nimbus Cloud",
       events: CloudData.activity_seed()
     )}
  end

  @impl true
  def handle_event("emit_event", _params, socket) do
    event = %{
      id: "evt-#{System.unique_integer([:positive])}",
      time: DateTime.utc_now() |> Calendar.strftime("%H:%M"),
      service: "Automation",
      event: "Synthetic health check passed",
      severity: "Info",
      status: "Healthy"
    }

    CloudEvents.broadcast(event)
    {:noreply, put_flash(socket, :info, "Synthetic event broadcast to all operators.")}
  end

  @impl true
  def handle_info({:cloud_event, event}, socket) do
    events = [event | socket.assigns.events] |> Enum.take(15)
    {:noreply, assign(socket, :events, events)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <.page_header>
      <.page_header_breadcrumb>
        <.breadcrumb size="sm">
          <:item href={~p"/demo"} text="Cloud Admin" />
        </.breadcrumb>
      </.page_header_breadcrumb>
      <.page_header_content title="Live Activity">
        <:contextual_actions>
          <.tag type="blue">PubSub</.tag>
        </:contextual_actions>
        <:page_actions>
          <.button kind="primary" size="sm" phx-click="emit_event">
            Send synthetic event
          </.button>
        </:page_actions>
        <.page_header_content_text subtitle="Streaming operational events in real-time across the control plane." />
      </.page_header_content>
    </.page_header>

    <.grid full_width row_gap="07">
      <:column span="16">
        <.data_table id="activity-feed" rows={@events} row_id={& &1.id} size="sm">
          <:title>Activity feed</:title>
          <:description>Recent events across the control plane.</:description>
          <:toolbar>
            <.table_toolbar>
              <.table_toolbar_content>
                <.table_toolbar_search placeholder="Search events" size="sm" />
                <.content_switcher value="24h" size="sm" low_contrast>
                  <:item value="24h">24h</:item>
                  <:item value="7d">7d</:item>
                  <:item value="30d">30d</:item>
                </.content_switcher>
                <.overflow_menu toolbar_action>
                  <:icon>
                    <Graphene.Icons.icon fit="width" name="overflow-menu--horizontal" />
                  </:icon>
                  <:tooltip_content>Filters</:tooltip_content>
                  <:item>Severity</:item>
                  <:item>Status</:item>
                </.overflow_menu>
              </.table_toolbar_content>
            </.table_toolbar>
          </:toolbar>
          <:col :let={event} label="Time">{event.time}</:col>
          <:col :let={event} label="Service">{event.service}</:col>
          <:col :let={event} label="Event">{event.event}</:col>
          <:col :let={event} label="Severity">
            <.tag type={severity_kind(event.severity)}>
              {event.severity}
            </.tag>
          </:col>
          <:col :let={event} label="Status">
            <.tag type={status_kind(event.status)}>
              {event.status}
            </.tag>
          </:col>
        </.data_table>
      </:column>
    </.grid>
    """
  end
end
