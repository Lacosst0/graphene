defmodule DemoWeb.CostsLive do
  use DemoWeb, :live_view

  alias Demo.CloudData

  import DemoWeb.CloudHelpers

  @impl true
  def mount(_params, _session, socket) do
    metrics = Demo.CloudData.summary_metrics()

    {:ok,
     assign(socket,
       active_page: :costs,
       page_title: "Cost Management · Nimbus Cloud",
       budget: metrics.budget,
       spend: metrics.monthly_spend,
       cost_centers: CloudData.cost_centers(),
       budget_form: to_form(%{"budget" => metrics.budget}, as: :budget)
     )}
  end

  @impl true
  def handle_event("update_budget", %{"budget" => %{"budget" => value}}, socket) do
    budget = parse_int(value, socket.assigns.budget)

    {:noreply,
     socket
     |> assign(:budget, budget)
     |> assign(:budget_form, to_form(%{"budget" => budget}, as: :budget))
     |> put_flash(:info, "Budget updated to #{format_money(budget)}")}
  end

  defp parse_int(nil, fallback), do: fallback

  defp parse_int(value, fallback) do
    case Integer.parse(to_string(value)) do
      {int, _} -> int
      :error -> fallback
    end
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
      <:content title="Cost Management">
        <.tag type="warm-gray">FinOps</.tag>
      </:content>
      <:content_text subtitle="Track spend, forecast demand, and allocate budgets across teams." />
    </.page_header>

    <.grid full_width row_gap="07">
      <:column span="16">
        <.grid>
          <:column sm="4" md="4" lg="8">
            <.tile>
              <.stack gap="3">
                <.heading>Budget health</.heading>
                <p>Current month spend</p>
                <h3>{format_money(@spend)}</h3>
                <.progress_bar value={@spend / @budget * 100} />
                <p>Budget {format_money(@budget)}</p>
              </.stack>
            </.tile>
          </:column>
          <:column sm="4" md="4" lg="8">
            <.tile>
              <.stack gap="3">
                <.heading>Adjust budget</.heading>
                <.form for={@budget_form} phx-change="update_budget">
                  <.form_group
                    legend_text="Monthly budget"
                    message
                    message_text="Changes apply immediately to forecasts and alerts."
                  >
                    <.number_input
                      field={@budget_form[:budget]}
                      label="Monthly budget"
                      min="0"
                    />
                  </.form_group>
                </.form>
              </.stack>
            </.tile>
          </:column>
        </.grid>
      </:column>

      <:column span="16">
        <.data_table id="cost-centers" rows={@cost_centers} row_id={& &1.id} size="sm">
          <:title>Cost centers</:title>
          <:description>Monthly allocation trends by team.</:description>
          <:toolbar>
            <.table_toolbar>
              <.table_toolbar_content>
                <.table_toolbar_search placeholder="Search cost centers" size="sm" />
                <.overflow_menu toolbar_action>
                  <:icon>
                    <Graphene.Icons.icon fit="width" name="overflow-menu--horizontal" />
                  </:icon>
                  <:tooltip_content>Filters</:tooltip_content>
                  <:item>Month</:item>
                  <:item>Team</:item>
                </.overflow_menu>
              </.table_toolbar_content>
            </.table_toolbar>
          </:toolbar>
          <:col :let={center} label="Team">{center.name}</:col>
          <:col :let={center} label="Month">{center.month}</:col>
          <:col :let={center} label="Spend">{format_money(center.spend)}</:col>
          <:col :let={center} label="Delta">
            <.tag type={
              cond do
                center.change > 0 -> "green"
                center.change < 0 -> "red"
                true -> "cool-gray"
              end
            }>
              {delta_label(center.change)}
            </.tag>
          </:col>
        </.data_table>
      </:column>
    </.grid>
    """
  end
end
