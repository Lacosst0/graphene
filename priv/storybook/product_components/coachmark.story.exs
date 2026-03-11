defmodule Storybook.ProductComponents.Coachmark do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon
  alias Graphene.ProductComponents, as: Product

  def doc do
    """
    Coachmarks guide users through key UI actions. Use the beacon trigger for
    inline nudges, or a floating coachmark for movable walkthroughs.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, active_coachmark: nil, event_log: [])}
  end

  @impl true
  def handle_event("open_coachmark", %{"id" => id}, socket) do
    {:noreply, assign(socket, active_coachmark: id)}
  end

  @impl true
  def handle_event("close_coachmark", _params, socket) do
    {:noreply, assign(socket, active_coachmark: nil)}
  end

  @impl true
  def handle_event("coachmark:event", payload, socket) do
    socket = log_event(socket, payload)

    socket =
      if payload["event"] == "cds-popover-closed" do
        assign(socket, active_coachmark: nil)
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
        <Carbon.button kind="primary" phx-click="open_coachmark" phx-value-id="tooltip">
          Open tooltip coachmark
        </Carbon.button>
        <Carbon.button kind="secondary" phx-click="open_coachmark" phx-value-id="floating">
          Open floating coachmark
        </Carbon.button>
        <Carbon.button kind="ghost" phx-click="close_coachmark">Close</Carbon.button>
      </div>

      <Product.coachmark
        :if={@active_coachmark == "tooltip"}
        id="coachmark-tooltip"
        open
        align="bottom"
        high_contrast
        events={[
          {"c4p-coachmark-opened",
           [
             push: "coachmark:event",
             payload: event_payload("c4p-coachmark-opened", %{variant: "tooltip"})
           ]},
          {"cds-popover-closed",
           [
             push: "coachmark:event",
             payload: event_payload("cds-popover-closed", %{variant: "tooltip"})
           ]}
        ]}
      >
        <:trigger>
          <Product.coachmark_beacon
            id="coachmark-beacon-1"
            label="Show information"
            expanded
            events={[
              {"c4p-coachmark-beacon-clicked",
               [
                 push: "coachmark:event",
                 payload: event_payload("c4p-coachmark-beacon-clicked", %{variant: "tooltip"})
               ]}
            ]}
          />
        </:trigger>
        <Product.coachmark_header close_icon_description="Close" />
        <Product.coachmark_body>
          <h2>Hello world</h2>
          <p>This is a short description for the coachmark.</p>
          <Carbon.button size="sm" phx-click="close_coachmark">Done</Carbon.button>
        </Product.coachmark_body>
      </Product.coachmark>

      <Product.coachmark
        :if={@active_coachmark == "floating"}
        id="coachmark-floating"
        open
        align="bottom"
        high_contrast
        floating
        events={[
          {"c4p-coachmark-opened",
           [
             push: "coachmark:event",
             payload: event_payload("c4p-coachmark-opened", %{variant: "floating"})
           ]},
          {"cds-popover-closed",
           [
             push: "coachmark:event",
             payload: event_payload("cds-popover-closed", %{variant: "floating"})
           ]}
        ]}
      >
        <:trigger>
          <span
            id="coachmark-floating-anchor"
            style="display: inline-block; width: 1px; height: 1px;"
          />
        </:trigger>
        <Product.coachmark_header close_icon_description="Close" drag_icon_description="Drag" />
        <Product.coachmark_body>
          <h2>Floating coachmark</h2>
          <p>Drag the coachmark to reposition it while exploring content.</p>
          <Carbon.button size="sm" phx-click="close_coachmark">Done</Carbon.button>
        </Product.coachmark_body>
      </Product.coachmark>

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
