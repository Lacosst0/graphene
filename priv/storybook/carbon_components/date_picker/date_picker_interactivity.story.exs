defmodule Storybook.CarbonComponents.DatePicker.Interactivity do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon

  def doc do
    """
    Interactive date picker with change events wired.
    Use it to validate date selection payloads.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, event_log: [])}
  end

  @impl true
  def handle_event("date_picker:event", payload, socket) do
    {:noreply, log_event(socket, payload)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1.5rem;">
      <Carbon.date_picker
        id="date-picker-events"
        name="date-picker-range"
        value="2024-01-10/2024-01-14"
        date_format="d/m/Y"
        events={date_picker_events()}
      >
        <:input label="Start" placeholder="dd/mm/yyyy" />
        <:input label="End" placeholder="dd/mm/yyyy" />
      </Carbon.date_picker>

      <.event_log logs={@event_log} />
    </div>
    """
  end

  defp date_picker_events do
    [
      {"cds-date-picker-changed",
       [push: "date_picker:event", payload: event_payload("cds-date-picker-changed")]},
      {"cds-date-picker-flatpickr-error",
       [push: "date_picker:event", payload: event_payload("cds-date-picker-flatpickr-error")]}
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
