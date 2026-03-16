defmodule DemoWeb.SecurityLive do
  use DemoWeb, :live_view

  alias Demo.CloudData
  alias Demo.CloudEvents

  import DemoWeb.CloudHelpers

  @impl true
  def mount(_params, _session, socket) do
    {:ok,
     assign(socket,
       active_page: :security,
       page_title: "Security · Nimbus Cloud",
       policies: CloudData.policies(),
       last_rotated: "08:10 UTC"
     )}
  end

  @impl true
  def handle_event("rotate_keys", _params, socket) do
    now = DateTime.utc_now() |> Calendar.strftime("%H:%M UTC")

    CloudEvents.broadcast(%{
      id: "evt-#{System.unique_integer([:positive])}",
      time: DateTime.utc_now() |> Calendar.strftime("%H:%M"),
      service: "Security",
      event: "API keys rotated",
      severity: "Medium",
      status: "Completed"
    })

    {:noreply,
     socket
     |> assign(:last_rotated, now)
     |> put_flash(:info, "API keys rotated across all production tenants.")}
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
      <.page_header_content title="Security & Compliance">
        <:contextual_actions>
          <.tag type="cool-gray">Policy Pack v3.2</.tag>
        </:contextual_actions>
        <:page_actions>
          <.button kind="primary" size="sm" phx-click="rotate_keys">
            Rotate API keys
          </.button>
        </:page_actions>
        <.page_header_content_text subtitle="Continuous policy enforcement, identity hardening, and audit trails." />
      </.page_header_content>
    </.page_header>

    <.grid full_width row_gap="07">
      <:column span="16">
        <.grid>
          <:column sm="4" md="4" lg="8">
            <.tile>
              <.stack gap="3">
                <.heading>Policy coverage</.heading>
                <.structured_list rows={@policies} condensed>
                  <:col :let={policy} label="Policy">{policy.name}</:col>
                  <:col :let={policy} label="Coverage">{policy.coverage}%</:col>
                  <:col :let={policy} label="Status">
                    <.tag type={status_kind(policy.status)}>
                      {policy.status}
                    </.tag>
                  </:col>
                </.structured_list>
              </.stack>
            </.tile>
          </:column>
          <:column sm="4" md="4" lg="8">
            <.tile>
              <.stack gap="4">
                <.heading>Identity controls</.heading>
                <.form_group
                  legend_text="Required for production"
                  message
                  message_text="Applies to all production tenants."
                >
                  <.checkbox
                    id="security-mfa"
                    name="security-mfa"
                    label_text="MFA enforced"
                    checked
                  />
                  <.checkbox
                    id="security-review"
                    name="security-review"
                    label_text="Privileged access review"
                    checked
                  />
                  <.checkbox
                    id="security-keys"
                    name="security-keys"
                    label_text="Hardware security keys"
                  />
                </.form_group>
                <.radio_button_group
                  legend_text="Default access policy"
                  name="default-access-policy"
                >
                  <:item label="Least privilege" value="least" checked />
                  <:item label="Balanced" value="balanced" />
                  <:item label="Open" value="open" />
                </.radio_button_group>
                <.stack gap="2">
                  <p>Last rotated {@last_rotated}</p>
                </.stack>
              </.stack>
            </.tile>
          </:column>
        </.grid>
      </:column>

      <:column span="16">
        <.tile>
          <.stack gap="3">
            <.heading>Policy details</.heading>
            <.accordion>
              <:item title="Network perimeter" open>
                Edge ingress is protected by WAF ruleset 6.2 with managed threat detection.
                New rule proposals are staged in "Audit" mode for 24 hours.
              </:item>
              <:item title="Data protection">
                All persistent volumes use envelope encryption with quarterly key rotation.
              </:item>
              <:item title="Incident response">
                On-call rotation schedules are synchronized with PagerDuty and Opsgenie.
              </:item>
            </.accordion>
          </.stack>
        </.tile>
      </:column>
    </.grid>
    """
  end
end
