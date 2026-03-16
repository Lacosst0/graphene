defmodule DemoWeb.SettingsLive do
  use DemoWeb, :live_view

  alias Demo.CloudData

  @impl true
  def mount(_params, _session, socket) do
    settings = %{
      "org_name" => "Nimbus Labs",
      "region" => "us-east-1",
      "timezone" => "UTC",
      "alerts" => true,
      "notifications" => "balanced",
      "support_plan" => "enterprise",
      "budget_guardrail" => "200000"
    }

    {:ok,
     assign(socket,
       active_page: :settings,
       page_title: "Settings · Nimbus Cloud",
       settings: settings,
       form: to_form(settings, as: :settings),
       regions: CloudData.regions(),
       support_plans: CloudData.support_plans()
     )}
  end

  @impl true
  def handle_event("validate", %{"settings" => params}, socket) do
    {:noreply, assign(socket, settings: params, form: to_form(params, as: :settings))}
  end

  def handle_event("save", %{"settings" => params}, socket) do
    {:noreply,
     socket
     |> assign(settings: params, form: to_form(params, as: :settings))
     |> put_flash(:info, "Settings saved and applied across the control plane.")}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <.page_header>
      <:breadcrumb>
        <.breadcrumb size="sm">
          <:item href={~p"/demo"} text="Cloud Admin" />
        </.breadcrumb>
      </:breadcrumb>
      <:content title="Settings">
        <.tag type="cool-gray">Organization</.tag>
      </:content>
      <:content_text subtitle="Configure organization defaults, budgets, and notification policies." />
    </.page_header>

    <.grid full_width row_gap="07">
      <:column span="16">
        <.tile>
          <.form for={@form} phx-change="validate" phx-submit="save">
            <.stack gap="6">
              <.form_group legend_text="Organization">
                <.grid full_width>
                  <:column sm="4" md="4" lg="8">
                    <.text_input field={@form["org_name"]} label="Organization name" />
                  </:column>
                  <:column sm="4" md="4" lg="8">
                    <.select field={@form["region"]} id="settings-region" name="region">
                      <:label_text>Primary region</:label_text>
                      <:item :for={region <- @regions} value={region.id} label={region.label} />
                    </.select>
                  </:column>
                  <:column sm="4" md="4" lg="8">
                    <.text_input field={@form["timezone"]} label="Timezone" />
                  </:column>
                </.grid>
              </.form_group>

              <.form_group
                legend_text="Budget guardrails"
                message
                message_text="Controls alerts and forecast thresholds."
              >
                <.grid full_width>
                  <:column sm="4" md="4" lg="8">
                    <.number_input
                      field={@form["budget_guardrail"]}
                      label="Monthly guardrail"
                      min="0"
                    />
                  </:column>
                </.grid>
              </.form_group>

              <.form_group
                legend_text="Notifications"
                message
                message_text="Balance signal and noise for operational alerts."
              >
                <.grid full_width>
                  <:column sm="4" md="4" lg="8">
                    <.radio_button_group
                      field={@form["notifications"]}
                      legend_text="Notification sensitivity"
                      name="notification-sensitivity"
                    >
                      <:item label="Balanced" value="balanced" />
                      <:item label="Strict" value="strict" />
                      <:item label="Relaxed" value="relaxed" />
                    </.radio_button_group>
                  </:column>
                  <:column sm="4" md="4" lg="8">
                    <.toggle field={@form["alerts"]}>
                      <:label_text>Enable proactive alerts</:label_text>
                    </.toggle>
                  </:column>
                </.grid>
              </.form_group>

              <.form_group legend_text="Support">
                <.grid full_width>
                  <:column sm="4" md="4" lg="8">
                    <.radio_button_group
                      field={@form["support_plan"]}
                      legend_text="Support plan"
                      name="support-plan"
                    >
                      <:item :for={plan <- @support_plans} label={plan.label} value={plan.id} />
                    </.radio_button_group>
                  </:column>
                </.grid>
              </.form_group>

              <.stack orientation="horizontal" gap="3">
                <.button kind="primary" type="submit">
                  Save settings
                </.button>
              </.stack>
            </.stack>
          </.form>
        </.tile>
      </:column>
    </.grid>
    """
  end
end
