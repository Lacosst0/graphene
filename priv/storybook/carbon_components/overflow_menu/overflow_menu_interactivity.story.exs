defmodule Storybook.CarbonComponents.OverflowMenu.Interactivity do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon

  def doc do
    """
    Interactive overflow menu with item click events wired.
    Use it to validate overflow menu item payloads.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, event_log: [])}
  end

  @impl true
  def handle_event("overflow_menu:event", payload, socket) do
    {:noreply, log_event(socket, payload)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1.5rem;">
      <Carbon.overflow_menu {Graphene.JS.events(
          id: "overflow-menu-events",
          target: "cds-overflow-menu-item",
          on: %{
            "cds-overflow-menu-item-clicked" => [
              push: "overflow_menu:event",
              payload: event_payload("cds-overflow-menu-item-clicked")
            ]
          }
        )}>
        <:icon>
          <Graphene.Icons.icon fit="width" name="overflow-menu--horizontal" />
        </:icon>
        <:tooltip_content>Options</:tooltip_content>
        <:item>Rename</:item>
        <:item>Duplicate</:item>
        <:item danger>Delete</:item>
      </Carbon.overflow_menu>

      <.event_log logs={@event_log} />
    </div>
    """
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
