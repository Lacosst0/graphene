defmodule Storybook.ProductComponents.GuideBanner.Interactivity do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon
  alias Graphene.ProductComponents, as: Product

  def doc do
    """
    Interactive guide banner with toggle/close events wired.
    Use it to validate banner open/close payloads.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, event_log: [])}
  end

  @impl true
  def handle_event("guide_banner:event", payload, socket) do
    {:noreply, log_event(socket, payload)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1.5rem;">
      <Product.guide_banner
        id="guide-banner-events"
        open={true}
        title_text="Page-related heading that can stand on its own"
        expand_text="Read more"
        collapse_text="Read less"
        events={guide_banner_events()}
      >
        <:icon>
          <Carbon.icon name="information" size={20} />
        </:icon>
        <:body>
          <div style="display: grid; gap: 1rem;">
            <Product.guide_banner_element>
              <:title>Title text 1</:title>
              <:description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices
                erat ut cursus porta.
              </:description>
              <Carbon.button kind="ghost">Read more</Carbon.button>
            </Product.guide_banner_element>
            <Product.guide_banner_element>
              <:title>Title text 2</:title>
              <:description>
                Cras id sapien justo. Pellentesque consequat mollis ex sit amet aliquet.
              </:description>
              <Carbon.button kind="ghost">Read more</Carbon.button>
            </Product.guide_banner_element>
            <Product.guide_banner_element>
              <:title>Title text 3</:title>
              <:description>
                Curabitur non urna ut erat tincidunt ullamcorper. Maecenas gravida
                commodo urna.
              </:description>
              <Carbon.button kind="ghost">Read more</Carbon.button>
            </Product.guide_banner_element>
          </div>
        </:body>
        <:footer>
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem;">
            <Carbon.button kind="ghost">Read less</Carbon.button>
            <div style="display: flex; gap: 0.5rem;">
              <Carbon.button kind="ghost" aria-label="Previous">
                <:icon>
                  <Carbon.icon name="chevron--left" size={16} />
                </:icon>
              </Carbon.button>
              <Carbon.button kind="ghost" aria-label="Next">
                <:icon>
                  <Carbon.icon name="chevron--right" size={16} />
                </:icon>
              </Carbon.button>
            </div>
          </div>
        </:footer>
      </Product.guide_banner>

      <.event_log logs={@event_log} />
    </div>
    """
  end

  defp guide_banner_events do
    [
      {"c4p-guidebanner-toggle",
       [push: "guide_banner:event", payload: event_payload("c4p-guidebanner-toggle")]},
      {"c4p-guidebanner-close",
       [push: "guide_banner:event", payload: event_payload("c4p-guidebanner-close")]}
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
    <%= for log <- @logs do %>
    [<%= log.event %>] <%= Jason.encode!(log.payload) %>
    <% end %>
      </pre>
    </div>
    """
  end
end
