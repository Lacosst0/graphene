defmodule DemoWeb.SupportLive do
  use DemoWeb, :live_view

  @impl true
  def mount(_params, _session, socket) do
    {:ok,
     assign(socket,
       active_page: :support,
       page_title: "Support · Nimbus Cloud",
       ticket_open: false
     )}
  end

  @impl true
  def handle_event("open_ticket", _params, socket) do
    {:noreply,
     socket
     |> assign(:ticket_open, true)
     |> put_flash(:info, "Support ticket #NIM-4821 created.")}
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
      <.page_header_content title="Support">
        <:contextual_actions>
          <.tag type="purple">24/7 coverage</.tag>
        </:contextual_actions>
        <.page_header_content_text subtitle="Runbooks, documentation, and live support channels." />
      </.page_header_content>
      <.page_header_tabs>
        <.tabs id="support-tabs" type="contained" value="runbooks" phx-hook="TabsInit">
          <:tab target="support-panel-runbooks" title="Runbooks" value="runbooks">
            Runbooks
          </:tab>
          <:tab target="support-panel-docs" title="Documentation" value="docs">
            Documentation
          </:tab>
          <:tab target="support-panel-support" title="Support" value="support">
            Support
          </:tab>
        </.tabs>
      </.page_header_tabs>
    </.page_header>

    <.grid full_width row_gap="07">
      <:column span="16">
        <div id="support-panel-runbooks" role="tabpanel" hidden>
          <.tile>
            <.accordion>
              <:item title="Database failover" open>
                <p>Estimated runtime: 12 minutes</p>
                <.code_snippet type="multi">
                  <code>nimbus ctl failover --cluster aurora --region us-east-1</code>
                </.code_snippet>
              </:item>
              <:item title="Region evacuation">
                <.code_snippet type="multi">
                  <code>nimbus ctl evacuate --region eu-west-1 --approve</code>
                </.code_snippet>
              </:item>
            </.accordion>
          </.tile>
        </div>

        <div id="support-panel-docs" role="tabpanel" hidden>
          <.tile>
            <.stack gap="3">
              <.heading>Quickstart</.heading>
              <p>Deploy your first managed cluster in under 10 minutes.</p>
              <.link href="https://www.ibm.com/docs/en" target="_blank">
                Open docs
              </.link>
            </.stack>
          </.tile>
        </div>

        <div id="support-panel-support" role="tabpanel" hidden>
          <.tile>
            <.stack gap="3">
              <.inline_notification kind="info" open>
                <:title>Dedicated support</:title>
                <:subtitle>
                  Enterprise plans include 15-minute response time and live chat.
                </:subtitle>
              </.inline_notification>
              <.button kind="primary" phx-click="open_ticket">
                Open support ticket
              </.button>
            </.stack>
          </.tile>
        </div>
      </:column>
    </.grid>
    """
  end
end
