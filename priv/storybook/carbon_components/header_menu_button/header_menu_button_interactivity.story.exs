defmodule Storybook.CarbonComponents.HeaderMenuButton.Interactivity do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon

  def doc do
    """
    Interactive header menu button with toggle events wired.
    Use it to validate header menu button payloads.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, event_log: [])}
  end

  @impl true
  def handle_event("header_menu:event", payload, socket) do
    {:noreply, log_event(socket, payload)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1.5rem;">
      <Carbon.header_menu_button
        id="header-menu-button-events"
        button_label_active="Close navigation menu"
        button_label_inactive="Open navigation menu"
        events={header_menu_events()}
      />

      <.event_log logs={@event_log} />
    </div>
    """
  end

  defp header_menu_events do
    [
      {"cds-header-menu-button-toggled",
       [push: "header_menu:event", payload: event_payload("cds-header-menu-button-toggled")]}
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
