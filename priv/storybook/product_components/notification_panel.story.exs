defmodule Storybook.ProductComponents.NotificationPanel do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon
  alias Graphene.ProductComponents, as: Product

  def doc do
    """
    Notification panels group recent alerts and actions into Today/Previous sections.
    Use notification items with titles and descriptions, and provide a footer action.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    now = DateTime.utc_now()

    timestamps = %{
      build: now |> DateTime.add(-120, :second) |> DateTime.to_iso8601(),
      storage: now |> DateTime.add(-720, :second) |> DateTime.to_iso8601(),
      access: now |> DateTime.add(-86_400, :second) |> DateTime.to_iso8601()
    }

    {:ok, assign(socket, active_panel: nil, event_log: [], notification_timestamps: timestamps)}
  end

  @impl true
  def handle_event("open_panel", %{"id" => id}, socket) do
    {:noreply, assign(socket, active_panel: id)}
  end

  @impl true
  def handle_event("close_panel", _params, socket) do
    {:noreply, assign(socket, active_panel: nil)}
  end

  @impl true
  def handle_event("notification:event", payload, socket) do
    socket = log_event(socket, payload)

    socket =
      if payload["event"] in ["c4p-notification-dismiss-all", "c4p-notification-click-outside"] do
        assign(socket, active_panel: nil)
      else
        socket
      end

    {:noreply, socket}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1rem;">
      <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
        <Carbon.button kind="primary" phx-click="open_panel" phx-value-id="default">
          Open notifications
        </Carbon.button>
        <Carbon.button kind="secondary" phx-click="open_panel" phx-value-id="empty_state">
          Open empty state
        </Carbon.button>
        <Carbon.button kind="ghost" phx-click="close_panel">Close</Carbon.button>
      </div>

      <Product.notification_panel
        :if={@active_panel == "default"}
        id="notification-panel-default"
        open
        title_text="Notifications"
        today_text="Today"
        previous_text="Earlier"
        dismiss_all_label="Dismiss all"
        donot_disturb_label="Do not disturb"
        empty_state_label="You are all caught up"
        events={panel_events("default")}
      >
        <:today>
          <Product.notification
            id="notification-build"
            type="informational"
            timestamp={@notification_timestamps.build}
            events={notification_events("Build completed")}
          >
            <:title>Build completed</:title>
            <:description>The nightly data ingest finished successfully.</:description>
          </Product.notification>
          <Product.notification
            id="notification-storage"
            type="warning"
            timestamp={@notification_timestamps.storage}
            events={notification_events("Storage nearing limit")}
          >
            <:title>Storage nearing limit</:title>
            <:description>Increase your storage quota or archive old runs.</:description>
          </Product.notification>
        </:today>
        <:previous>
          <Product.notification
            id="notification-access"
            type="success"
            timestamp={@notification_timestamps.access}
            events={notification_events("Access granted")}
          >
            <:title>Access granted</:title>
            <:description>New access policy applied to the analytics workspace.</:description>
          </Product.notification>
        </:previous>
        <:footer>
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.75rem;">
            <Product.notification_footer
              id="notification-footer"
              view_all_label="View all (3)"
              events={notification_footer_events()}
            />
            <Carbon.button size="sm" kind="ghost" phx-click="close_panel">Close</Carbon.button>
          </div>
        </:footer>
      </Product.notification_panel>

      <Product.notification_panel
        :if={@active_panel == "empty_state"}
        id="notification-panel-empty"
        open
        title_text="Notifications"
        empty_state_label="You are all caught up"
      >
        <:empty_state>
          <div style="display: grid; gap: 0.5rem;">
            <strong>No notifications</strong>
            <span>You're all caught up. We'll let you know if anything changes.</span>
            <Carbon.button size="sm" kind="ghost" phx-click="close_panel">Close</Carbon.button>
          </div>
        </:empty_state>
      </Product.notification_panel>

      <.event_log logs={@event_log} />
    </div>
    """
  end

  defp panel_events(variant) do
    [
      {"c4p-notification-panel-beingclosed",
       [
         push: "notification:event",
         payload: event_payload("c4p-notification-panel-beingclosed", %{variant: variant})
       ]},
      {"c4p-notification-dismiss-all",
       [
         push: "notification:event",
         payload: event_payload("c4p-notification-dismiss-all", %{variant: variant})
       ]},
      {"c4p-notification-donot-disturb-change",
       [
         push: "notification:event",
         payload: event_payload("c4p-notification-donot-disturb-change", %{variant: variant})
       ]},
      {"c4p-notification-click-outside",
       [
         push: "notification:event",
         payload: event_payload("c4p-notification-click-outside", %{variant: variant})
       ]}
    ]
  end

  defp notification_events(title) do
    [
      {"c4p-notification-dismiss",
       [
         push: "notification:event",
         payload: event_payload("c4p-notification-dismiss", %{title: title})
       ]}
    ]
  end

  defp notification_footer_events do
    [
      {"c4p-notification-view-all",
       [push: "notification:event", payload: event_payload("c4p-notification-view-all")]},
      {"c4p-notification-settings",
       [push: "notification:event", payload: event_payload("c4p-notification-settings")]}
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
