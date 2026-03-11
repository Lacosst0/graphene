defmodule Storybook.CarbonComponents.Slider.Interactivity do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon

  def doc do
    """
    Interactive slider and slider input with change events wired.
    Use it to validate slider payloads.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, event_log: [])}
  end

  @impl true
  def handle_event("slider:event", payload, socket) do
    {:noreply, log_event(socket, payload)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1.5rem;">
      <Carbon.slider
        id="slider-events"
        name="slider-events"
        min="0"
        max="100"
        step="5"
        value="50"
        events={slider_events()}
      >
        <:label_text>Utilization target</:label_text>
      </Carbon.slider>

      <Carbon.slider_input
        id="slider-input-events"
        name="slider-input-events"
        min="0"
        max="10"
        step="1"
        value="3"
        events={slider_input_events()}
      />

      <.event_log logs={@event_log} />
    </div>
    """
  end

  defp slider_events do
    [
      {"cds-slider-input-changed",
       [push: "slider:event", payload: event_payload("cds-slider-input-changed")]},
      {"cds-slider-changed", [push: "slider:event", payload: event_payload("cds-slider-changed")]}
    ]
  end

  defp slider_input_events do
    [
      {"cds-slider-input-changed",
       [push: "slider:event", payload: event_payload("cds-slider-input-changed")]}
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
