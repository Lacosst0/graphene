defmodule Storybook.CarbonComponents.TreeView.Interactivity do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon

  def doc do
    """
    Interactive tree view with node select/toggle events wired.
    Use it to validate tree node payloads.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, event_log: [])}
  end

  @impl true
  def handle_event("tree:event", payload, socket) do
    {:noreply, log_event(socket, payload)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1.5rem;">
      <div {Graphene.JS.events(
          id: "tree-view-events",
          target: "cds-tree-node",
          on: %{
            "eventSelected" => [push: "tree:event", payload: event_payload("eventSelected")],
            "eventToggled" => [push: "tree:event", payload: event_payload("eventToggled")]
          }
        )}>
        <Carbon.tree_view label="Primary navigation">
          <Carbon.tree_node label="Products" is_expanded={true} id="products">
            <Carbon.tree_node label="Catalog" id="catalog" />
            <Carbon.tree_node label="Pricing" id="pricing" />
            <Carbon.tree_node label="Releases" id="releases" />
          </Carbon.tree_node>
          <Carbon.tree_node label="Teams" is_expanded={true} id="teams">
            <Carbon.tree_node label="Design" id="design" />
            <Carbon.tree_node label="Engineering" id="engineering" selected />
            <Carbon.tree_node label="Marketing" id="marketing" disabled />
          </Carbon.tree_node>
          <Carbon.tree_node label="Settings" id="settings" active />
        </Carbon.tree_view>
      </div>

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
