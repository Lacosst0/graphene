defmodule Storybook.CarbonComponents.FluidSelect.Interactivity do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon

  def doc do
    """
    Interactive fluid select with selection events wired.
    Use it to validate select payloads.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, event_log: [])}
  end

  @impl true
  def handle_event("fluid_select:event", payload, socket) do
    {:noreply, log_event(socket, payload)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1.5rem;">
      <Carbon.fluid_select
        id="fluid-select-events"
        name="fluid-select-events"
        events={fluid_select_events()}
      >
        <:label_text>Environment</:label_text>
        <:item value="prod">Production</:item>
        <:item value="stage">Staging</:item>
        <:item value="dev">Development</:item>
      </Carbon.fluid_select>

      <.event_log logs={@event_log} />
    </div>
    """
  end

  defp fluid_select_events do
    [
      {"cds-select-selected",
       [push: "fluid_select:event", payload: event_payload("cds-select-selected")]}
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
