defmodule Storybook.CarbonComponents.RadioButton.Interactivity do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon

  def doc do
    """
    Interactive radio button group with selection events wired.
    Use it to validate radio payloads.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, event_log: [])}
  end

  @impl true
  def handle_event("radio_button:event", payload, socket) do
    {:noreply, log_event(socket, payload)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1.5rem;">
      <Carbon.radio_button_group
        id="radio-group-events"
        legend_text="Choose a plan"
        name="plan"
        events={radio_group_events()}
      >
        <:item label="Starter" value="starter" checked />
        <:item label="Pro" value="pro" />
        <:item label="Enterprise" value="enterprise" />
      </Carbon.radio_button_group>

      <.event_log logs={@event_log} />
    </div>
    """
  end

  defp radio_group_events do
    [
      {"cds-radio-button-group-changed",
       [push: "radio_button:event", payload: event_payload("cds-radio-button-group-changed")]},
      {"cds-radio-button-changed",
       [push: "radio_button:event", payload: event_payload("cds-radio-button-changed")]}
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
