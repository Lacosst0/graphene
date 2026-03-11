defmodule Storybook.CarbonComponents.Tile.Interactivity do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon

  def doc do
    """
    Interactive tile groups with selectable and radio tile events wired.
    Use it to validate tile selection payloads.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, event_log: [])}
  end

  @impl true
  def handle_event("tile:event", payload, socket) do
    {:noreply, log_event(socket, payload)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1.5rem;">
      <Carbon.tile_group
        id="radio-tile-group"
        events={tile_group_events("radio")}
      >
        <:legend>Service tier</:legend>
        <Carbon.radio_tile
          id="radio-tile-starter"
          name="tier"
          value="starter"
          events={radio_tile_events("Starter")}
        >
          Starter
        </Carbon.radio_tile>
        <Carbon.radio_tile
          id="radio-tile-pro"
          name="tier"
          value="pro"
          events={radio_tile_events("Pro")}
        >
          Pro
        </Carbon.radio_tile>
      </Carbon.tile_group>

      <Carbon.tile_group
        id="selectable-tile-group"
        events={tile_group_events("selectable")}
      >
        <:legend>Add-ons</:legend>
        <Carbon.selectable_tile
          id="selectable-tile-monitoring"
          name="addons"
          value="monitoring"
          events={selectable_tile_events("Monitoring")}
        >
          Monitoring
        </Carbon.selectable_tile>
        <Carbon.selectable_tile
          id="selectable-tile-backup"
          name="addons"
          value="backup"
          events={selectable_tile_events("Backup")}
        >
          Backup
        </Carbon.selectable_tile>
      </Carbon.tile_group>

      <.event_log logs={@event_log} />
    </div>
    """
  end

  defp tile_group_events(kind) do
    [
      {"cds-current-radio-tile-selection",
       [
         push: "tile:event",
         payload: event_payload("cds-current-radio-tile-selection", %{group: kind})
       ]},
      {"cds-current-selectable-tile-selections",
       [
         push: "tile:event",
         payload: event_payload("cds-current-selectable-tile-selections", %{group: kind})
       ]}
    ]
  end

  defp radio_tile_events(label) do
    [
      {"cds-radio-tile-selected",
       [push: "tile:event", payload: event_payload("cds-radio-tile-selected", %{label: label})]},
      {"cds-selectable-tile-changed",
       [
         push: "tile:event",
         payload: event_payload("cds-selectable-tile-changed", %{label: label})
       ]}
    ]
  end

  defp selectable_tile_events(label) do
    [
      {"cds-selectable-tile-changed",
       [
         push: "tile:event",
         payload: event_payload("cds-selectable-tile-changed", %{label: label})
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
