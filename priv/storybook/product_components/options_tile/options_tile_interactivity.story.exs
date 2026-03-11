defmodule Storybook.ProductComponents.OptionsTile.Interactivity do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon
  alias Graphene.ProductComponents, as: Product

  def doc do
    """
    Interactive options tile with open/close events wired.
    Use it to validate expand/collapse payloads.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, event_log: [])}
  end

  @impl true
  def handle_event("options_tile:event", payload, socket) do
    {:noreply, log_event(socket, payload)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1.5rem;">
      <Product.options_tile
        id="options-tile-events"
        title_id="title-01"
        title_text="Language"
        size="lg"
        default_open={false}
        events={options_tile_events()}
      >
        <:summary>
          <span>English - Locale: English</span>
        </:summary>
        <:toggle>
          <Carbon.toggle id="language-toggle" size="sm" hide_label />
        </:toggle>
        <:body>
          <div style="display: grid; gap: 1rem;">
            <p>
              User interface defines the language the application is displayed in.
              Locale sets regional formats for date and currency.
            </p>
            <Carbon.dropdown name="language-ui" label="User interface">
              <:title_text>User interface</:title_text>
              <Carbon.dropdown_item value="option-0">English</Carbon.dropdown_item>
              <Carbon.dropdown_item value="option-1">Spanish</Carbon.dropdown_item>
            </Carbon.dropdown>
            <Carbon.dropdown name="language-locale" label="Locale">
              <:title_text>Locale</:title_text>
              <Carbon.dropdown_item value="option-0">English</Carbon.dropdown_item>
              <Carbon.dropdown_item value="option-1">French</Carbon.dropdown_item>
            </Carbon.dropdown>
          </div>
        </:body>
      </Product.options_tile>

      <.event_log logs={@event_log} />
    </div>
    """
  end

  defp options_tile_events do
    [
      {"c4p-options-tile-open",
       [push: "options_tile:event", payload: event_payload("c4p-options-tile-open")]},
      {"c4p-options-tile-close",
       [push: "options_tile:event", payload: event_payload("c4p-options-tile-close")]}
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
