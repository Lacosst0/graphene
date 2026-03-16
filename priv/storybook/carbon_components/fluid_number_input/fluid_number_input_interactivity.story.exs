defmodule Storybook.CarbonComponents.FluidNumberInput.Interactivity do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon

  def doc do
    """
    Interactive fluid number input with change/invalid events wired.
    Use it to validate number input payloads.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, event_log: [])}
  end

  @impl true
  def handle_event("fluid_number:event", payload, socket) do
    {:noreply, log_event(socket, payload)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1.5rem;">
      <Carbon.fluid_number_input
        id="fluid-number-events"
        name="fluid-number-events"
        value="4"
        min="0"
        max="10"
        events={fluid_number_events()}
      >
        <:label_text>Seats</:label_text>
        <:helper_text>Available seats</:helper_text>
        <:validity_message>Minimum is 1</:validity_message>
      </Carbon.fluid_number_input>

      <.event_log logs={@event_log} />
    </div>
    """
  end

  defp fluid_number_events do
    [
      {"cds-number-input",
       [push: "fluid_number:event", payload: event_payload("cds-number-input")]},
      {"invalid", [push: "fluid_number:event", payload: event_payload("invalid")]}
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
