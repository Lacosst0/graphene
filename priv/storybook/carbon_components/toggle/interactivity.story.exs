defmodule Storybook.CarbonComponents.Toggle.Interactivity do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon

  def doc do
    """
    Interactive toggle with change events wired.
    Use it to validate toggle payloads.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, event_log: [])}
  end

  @impl true
  def handle_event("toggle:event", payload, socket) do
    {:noreply, log_event(socket, payload)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1.5rem;">
      <Carbon.toggle
        id="toggle-events"
        name="toggle-events"
        label_a="On"
        label_b="Off"
        events={toggle_events()}
      >
        <:label_text>Enable alerts</:label_text>
      </Carbon.toggle>

      <.event_log logs={@event_log} />
    </div>
    """
  end

  defp toggle_events do
    [
      {"cds-toggle-changed",
       [push: "toggle:event", payload: event_payload("cds-toggle-changed")]},
      {"cds-checkbox-changed",
       [push: "toggle:event", payload: event_payload("cds-checkbox-changed")]}
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
