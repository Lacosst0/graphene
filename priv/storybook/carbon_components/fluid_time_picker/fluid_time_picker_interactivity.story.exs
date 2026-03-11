defmodule Storybook.CarbonComponents.FluidTimePicker.Interactivity do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon

  def doc do
    """
    Interactive fluid time picker with change/invalid events wired.
    Use it to validate time picker payloads.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, event_log: [])}
  end

  @impl true
  def handle_event("fluid_time_picker:event", payload, socket) do
    {:noreply, log_event(socket, payload)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1.5rem;">
      <Carbon.fluid_time_picker
        id="fluid-time-picker-events"
        name="fluid-time-picker-events"
        value="09:30"
        events={fluid_time_picker_events()}
      >
        <:label_text>Select time</:label_text>
      </Carbon.fluid_time_picker>

      <.event_log logs={@event_log} />
    </div>
    """
  end

  defp fluid_time_picker_events do
    [
      {"change", [push: "fluid_time_picker:event", payload: event_payload("change")]},
      {"invalid", [push: "fluid_time_picker:event", payload: event_payload("invalid")]}
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
