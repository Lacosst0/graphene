defmodule Storybook.ProductComponents.Checklist.Interactivity do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon
  alias Graphene.ProductComponents, as: Product

  def doc do
    """
    Interactive checklist with all checklist and checklist-item events wired.
    Use it to verify view-all, toggle, and item click payloads.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, event_log: [])}
  end

  @impl true
  def handle_event("checklist:event", payload, socket) do
    {:noreply, log_event(socket, payload)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1.5rem;">
      <Product.checklist
        id="checklist-events"
        title="Setup checklist"
        chart_label="60% complete"
        chart_value="0.6"
        toggle_label="Toggle"
        toggle_label_align="top"
        toggle_aria_label="Checklist toggle"
        view_all_label="View all (8)"
        open={true}
        events={checklist_events()}
      >
        <:header_chart>
          <Carbon.icon name="list--checked" size={32} />
        </:header_chart>
        <:header_title>
          <Product.truncated_text
            value="A longer header title to demonstrate truncation and tooltip"
            lines="2"
            type="tooltip"
            align="bottom"
          />
        </:header_title>
        <:header_chart_label>
          <Product.truncated_text
            value="60% complete with a longer label for overflow"
            lines="2"
            type="tooltip"
            align="bottom"
          />
        </:header_chart_label>
        <Product.checklist_group title="Section label">
          <Product.checklist_item
            id="checklist-item-1"
            label="Create workspace"
            status="completed"
            clickable
            events={item_events("Create workspace")}
          />
          <Product.checklist_item
            id="checklist-item-2"
            label="Invite collaborators"
            status="error"
            clickable
            events={item_events("Invite collaborators")}
          />
          <Product.checklist_item
            id="checklist-item-3"
            label="Connect data"
            status="in progress"
            clickable
            events={item_events("Connect data")}
          />
          <Product.checklist_item
            id="checklist-item-4"
            label="Configure alerts"
            status="not started"
            clickable
            events={item_events("Configure alerts")}
          />
        </Product.checklist_group>
        <Product.checklist_group title="Next steps">
          <Product.checklist_item
            id="checklist-item-5"
            label="Enable backups"
            status="not started"
            clickable
            events={item_events("Enable backups")}
          />
          <Product.checklist_item
            id="checklist-item-6"
            label="Set retention"
            status="not started"
            clickable
            events={item_events("Set retention")}
          />
          <Product.checklist_item
            id="checklist-item-7"
            label="Share dashboard"
            status="not started"
            clickable
            events={item_events("Share dashboard")}
          />
        </Product.checklist_group>
      </Product.checklist>

      <.event_log logs={@event_log} />
    </div>
    """
  end

  defp checklist_events do
    [
      {"c4p-checklist-view-all",
       [push: "checklist:event", payload: event_payload("c4p-checklist-view-all")]},
      {"c4p-checklist-toggle",
       [push: "checklist:event", payload: event_payload("c4p-checklist-toggle")]}
    ]
  end

  defp item_events(label) do
    [
      {"c4p-checklist-item-clicked",
       [
         push: "checklist:event",
         payload: event_payload("c4p-checklist-item-clicked", %{item: label})
       ]}
    ]
  end

  defp event_payload(event, extra \\ %{}) do
    %{merge: [:detail, :target], static: Map.merge(%{event: event}, extra)}
  end

  defp log_event(socket, payload) do
    update(socket, :event_log, fn logs ->
      [%{event: payload["event"] || "event", payload: payload} | Enum.take(logs, 19)]
    end)
  end

  attr :logs, :list, default: []

  defp event_log(assigns) do
    ~H"""
    <div>
      <h4>Event payloads</h4>
      <pre>
    <%= for log <- @logs do %>
    [<%= log.event %>] <%= Jason.encode!(log.payload) %>
    <% end %>
      </pre>
    </div>
    """
  end
end
