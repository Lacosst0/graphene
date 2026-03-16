defmodule Storybook.CarbonComponents.Select.Interactivity do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon

  def doc do
    """
    Interactive select with selection events wired.
    Use it to validate select payloads.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, event_log: [])}
  end

  @impl true
  def handle_event("select:event", payload, socket) do
    {:noreply, log_event(socket, payload)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1.5rem;">
      <Carbon.select id="select-events" name="select-events" events={select_events()}>
        <:label_text>Select option</:label_text>
        <:item value="option-1">Option 1</:item>
        <:item value="option-2">Option 2</:item>
        <:item value="option-3">Option 3</:item>
      </Carbon.select>

      <.event_log logs={@event_log} />
    </div>
    """
  end

  defp select_events do
    [
      {"cds-select-selected",
       [push: "select:event", payload: event_payload("cds-select-selected")]}
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
