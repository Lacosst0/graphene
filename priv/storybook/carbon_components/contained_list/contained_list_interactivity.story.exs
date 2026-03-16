defmodule Storybook.CarbonComponents.ContainedList.Interactivity do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon

  def doc do
    """
    Interactive contained list with clickable item events wired.
    Use it to validate list item click payloads.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, event_log: [])}
  end

  @impl true
  def handle_event("contained_list:event", payload, socket) do
    {:noreply, log_event(socket, payload)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1.5rem;">
      <Carbon.contained_list size="lg">
        <:label>Clickable list</:label>
        <:action>
          <Carbon.link href="#" size="sm">View all</Carbon.link>
        </:action>

        <Carbon.contained_list_item
          id="contained-item-1"
          clickable
          events={item_events("First item")}
        >
          First item
        </Carbon.contained_list_item>
        <Carbon.contained_list_item
          id="contained-item-2"
          clickable
          events={item_events("Second item")}
        >
          Second item
        </Carbon.contained_list_item>
        <Carbon.contained_list_item id="contained-item-3" disabled>
          Disabled item
        </Carbon.contained_list_item>
      </Carbon.contained_list>

      <.event_log logs={@event_log} />
    </div>
    """
  end

  defp item_events(label) do
    [
      {"cds-contained-list-item-click",
       [
         push: "contained_list:event",
         payload: event_payload("cds-contained-list-item-click", %{label: label})
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
    <%= for log <- Enum.reverse(@logs) do %>
    [<%= log.event %>] <%= Jason.encode!(log.payload) %>
    <% end %>
      </pre>
    </div>
    """
  end
end
