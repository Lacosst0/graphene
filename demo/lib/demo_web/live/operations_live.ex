defmodule DemoWeb.OperationsLive do
  use DemoWeb, :live_view

  alias Demo.CloudData
  alias Demo.CloudEvents

  import DemoWeb.CloudHelpers

  @impl true
  def mount(_params, _session, socket) do
    {:ok,
     assign(socket,
       active_page: :operations,
       page_title: "Operations · Nimbus Cloud",
       incidents: CloudData.incidents(),
       modal_incident: nil
     )}
  end

  @impl true
  def handle_event("open_incident", %{"id" => id}, socket) do
    incident = Enum.find(socket.assigns.incidents, &(&1.id == id))
    {:noreply, assign(socket, :modal_incident, incident)}
  end

  def handle_event("close_incident", _params, socket) do
    {:noreply, assign(socket, :modal_incident, nil)}
  end

  def handle_event("resolve_incident", %{"id" => id}, socket) do
    incidents =
      Enum.map(socket.assigns.incidents, fn incident ->
        if incident.id == id do
          %{incident | status: "Resolved"}
        else
          incident
        end
      end)

    CloudEvents.broadcast(%{
      id: "evt-#{System.unique_integer([:positive])}",
      time: current_time(),
      service: "Operations",
      event: "Incident #{id} resolved",
      severity: "Low",
      status: "Completed"
    })

    {:noreply,
     socket
     |> assign(:incidents, incidents)
     |> assign(:modal_incident, nil)
     |> put_flash(:info, "Incident #{id} marked as resolved.")}
  end

  defp current_time do
    DateTime.utc_now() |> Calendar.strftime("%H:%M")
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
      <.page_header_content title="Operations">
        <:contextual_actions>
          <.tag type="green">On-call</.tag>
        </:contextual_actions>
        <.page_header_content_text subtitle="Incident triage, deployments, and runtime safeguards." />
      </.page_header_content>
      <.page_header_tabs>
        <.tabs id="operations-tabs" type="contained" value="incidents" phx-hook="TabsInit">
          <:tab target="operations-panel-incidents" title="Incidents" value="incidents">
            Incidents
          </:tab>
          <:tab target="operations-panel-deployments" title="Deployments" value="deployments">
            Deployments
          </:tab>
          <:tab target="operations-panel-maintenance" title="Maintenance" value="maintenance">
            Maintenance
          </:tab>
        </.tabs>
      </.page_header_tabs>
    </.page_header>

    <.grid full_width row_gap="07">
      <:column span="16">
        <.stack gap="4">
          <div id="operations-panel-incidents" role="tabpanel" hidden>
            <.data_table id="incident-table" rows={@incidents} row_id={& &1.id} size="sm">
              <:title>Active incidents</:title>
              <:description>Track priority, ownership, and status.</:description>
              <:toolbar>
                <.table_toolbar>
                  <.table_toolbar_content>
                    <.table_toolbar_search placeholder="Search incidents" size="sm" />
                    <.overflow_menu toolbar_action>
                      <:icon>
                        <Graphene.Icons.icon fit="width" name="overflow-menu--horizontal" />
                      </:icon>
                      <:tooltip_content>Filters</:tooltip_content>
                      <:item>Severity</:item>
                      <:item>Status</:item>
                    </.overflow_menu>
                    <.button kind="primary" size="sm">New incident</.button>
                  </.table_toolbar_content>
                </.table_toolbar>
              </:toolbar>
              <:col :let={incident} label="ID">{incident.id}</:col>
              <:col :let={incident} label="Title">{incident.title}</:col>
              <:col :let={incident} label="Severity">
                <.tag type={severity_kind(incident.severity)}>
                  {incident.severity}
                </.tag>
              </:col>
              <:col :let={incident} label="Status">
                <.tag type={status_kind(incident.status)}>
                  {incident.status}
                </.tag>
              </:col>
              <:col :let={incident} label="Owner">{incident.owner}</:col>
              <:col :let={incident} label="Opened">{incident.opened_at}</:col>
              <:action :let={incident}>
                <.overflow_menu toolbar_action flipped>
                  <:icon>
                    <Graphene.Icons.icon fit="width" name="overflow-menu--horizontal" />
                  </:icon>
                  <:tooltip_content>Actions</:tooltip_content>
                  <:item phx-click="open_incident" phx-value-id={incident.id}>
                    Details
                  </:item>
                  <:item phx-click="resolve_incident" phx-value-id={incident.id}>
                    Resolve
                  </:item>
                </.overflow_menu>
              </:action>
            </.data_table>
          </div>

          <div id="operations-panel-deployments" role="tabpanel" hidden>
            <.tile>
              <.stack gap="3">
                <.heading>Deployment guardrails</.heading>
                <p>Automatic rollbacks are enabled for production clusters.</p>
                <.progress_indicator current_index="2">
                  <:step label="Build" />
                  <:step label="Test" />
                  <:step label="Canary" />
                  <:step label="Rollout" />
                </.progress_indicator>
              </.stack>
            </.tile>
          </div>

          <div id="operations-panel-maintenance" role="tabpanel" hidden>
            <.tile>
              <.stack gap="3">
                <.heading>Upcoming maintenance</.heading>
                <.inline_notification kind="info" open>
                  <:title>Region upgrade</:title>
                  <:subtitle>eu-west-1 scheduled for kernel patching at 02:00 UTC.</:subtitle>
                </.inline_notification>
              </.stack>
            </.tile>
          </div>
        </.stack>
      </:column>
    </.grid>

    <.modal :if={@modal_incident} open>
      <:body>
        <.modal_header>
          <.modal_label>{@modal_incident.id}</.modal_label>
          <.modal_heading>{@modal_incident.title}</.modal_heading>
        </.modal_header>
        <.stack gap="2">
          <p>
            Severity: <strong>{@modal_incident.severity}</strong>
            · Owner: <strong>{@modal_incident.owner}</strong>
          </p>
          <p>Opened {@modal_incident.opened_at} — status {@modal_incident.status}</p>
        </.stack>
      </:body>
      <:footer_button label="Close" attrs={%{:"phx-click" => "close_incident"}} />
      <:footer_button
        label="Resolve"
        kind="primary"
        attrs={
          %{
            :"phx-click" => "resolve_incident",
            :"phx-value-id" => @modal_incident.id
          }
        }
      />
    </.modal>
    """
  end
end
