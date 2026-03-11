defmodule Storybook.CarbonComponents.Pagination.Interactivity do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon

  def doc do
    """
    Interactive pagination with page and page-size events wired.
    Use it to validate pagination payloads.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, event_log: [])}
  end

  @impl true
  def handle_event("pagination:event", payload, socket) do
    {:noreply, log_event(socket, payload)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1.5rem;">
      <Carbon.pagination
        id="pagination-events"
        total_items="105"
        page_size="10"
        events={pagination_events()}
      />

      <Carbon.pagination_nav
        id="pagination-nav-events"
        page="1"
        total_items="105"
        page_size="10"
        events={pagination_nav_events()}
      />

      <.event_log logs={@event_log} />
    </div>
    """
  end

  defp pagination_events do
    [
      {"cds-pagination-changed-current",
       [push: "pagination:event", payload: event_payload("cds-pagination-changed-current")]},
      {"cds-page-sizes-select-changed",
       [push: "pagination:event", payload: event_payload("cds-page-sizes-select-changed")]}
    ]
  end

  defp pagination_nav_events do
    [
      {"cds-page-changed", [push: "pagination:event", payload: event_payload("cds-page-changed")]}
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
