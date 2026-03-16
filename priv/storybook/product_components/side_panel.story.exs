defmodule Storybook.ProductComponents.SidePanel do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon
  alias Graphene.ProductComponents, as: Product

  def doc do
    """
    Side panels slide in to capture focused tasks without leaving the page.
    Use action toolbars and footer actions for primary and secondary flows.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, active_panel: nil, event_log: [])}
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
  def handle_event("side_panel:event", payload, socket) do
    socket = log_event(socket, payload)

    socket =
      if payload["event"] == "c4p-side-panel-closed" do
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
        <Carbon.button kind="primary" phx-click="open_panel" phx-value-id="slide_over">
          Open slide over
        </Carbon.button>
        <Carbon.button kind="secondary" phx-click="open_panel" phx-value-id="slide_in">
          Open slide in
        </Carbon.button>
        <Carbon.button kind="secondary" phx-click="open_panel" phx-value-id="with_action_toolbar">
          Open with action toolbar
        </Carbon.button>
        <Carbon.button kind="secondary" phx-click="open_panel" phx-value-id="focus_selector">
          Open with focus selector
        </Carbon.button>
        <Carbon.button kind="secondary" phx-click="open_panel" phx-value-id="with_static_title">
          Open with static title
        </Carbon.button>
        <Carbon.button
          kind="secondary"
          phx-click="open_panel"
          phx-value-id="with_static_title_and_action_toolbar"
        >
          Open static title + actions
        </Carbon.button>
        <Carbon.button kind="secondary" phx-click="open_panel" phx-value-id="without_title">
          Open without title
        </Carbon.button>
        <Carbon.button kind="secondary" phx-click="open_panel" phx-value-id="custom_header">
          Open with custom header
        </Carbon.button>
        <Carbon.button kind="ghost" phx-click="close_panel">Close</Carbon.button>
      </div>

      <Product.side_panel
        :if={@active_panel == "slide_over"}
        id="side-panel-slide-over"
        open
        title="Configure access"
        label_text="Step flow"
        current_step="2"
        size="md"
        placement="right"
        events={side_panel_events("slide_over")}
      >
        <:subtitle><.panel_subtitle /></:subtitle>
        <.panel_form />
        <:actions><.panel_actions /></:actions>
      </Product.side_panel>

      <Product.side_panel
        :if={@active_panel == "slide_in"}
        open
        slide_in
        title="Configure access"
        label_text="Step flow"
        size="md"
        placement="right"
      >
        <:subtitle><.panel_subtitle /></:subtitle>
        <.panel_form />
        <:actions><.panel_actions /></:actions>
      </Product.side_panel>

      <Product.side_panel
        :if={@active_panel == "with_action_toolbar"}
        open
        title="Configure access"
        label_text="Step flow"
        size="md"
      >
        <:action_toolbar>
          <.panel_action_toolbar />
        </:action_toolbar>
        <:subtitle><.panel_subtitle /></:subtitle>
        <.panel_form />
        <:actions><.panel_actions /></:actions>
      </Product.side_panel>

      <Product.side_panel
        :if={@active_panel == "focus_selector"}
        open
        title="Configure access"
        label_text="Step flow"
        selector_initial_focus="#side-panel-focus-input"
        size="md"
      >
        <:subtitle><.panel_subtitle /></:subtitle>
        <.panel_focus_form />
        <:actions><.panel_actions /></:actions>
      </Product.side_panel>

      <Product.side_panel
        :if={@active_panel == "with_static_title"}
        open
        title="Configure access"
        label_text="Step flow"
        animate_title={false}
        size="md"
      >
        <:subtitle><.panel_subtitle /></:subtitle>
        <.panel_form />
        <:actions><.panel_actions /></:actions>
      </Product.side_panel>

      <Product.side_panel
        :if={@active_panel == "with_static_title_and_action_toolbar"}
        open
        title="Configure access"
        label_text="Step flow"
        animate_title={false}
        size="md"
      >
        <:action_toolbar>
          <.panel_action_toolbar />
        </:action_toolbar>
        <:subtitle><.panel_subtitle /></:subtitle>
        <.panel_form />
        <:actions><.panel_actions /></:actions>
      </Product.side_panel>

      <Product.side_panel
        :if={@active_panel == "without_title"}
        open
        title=""
        label_text="Step flow"
        size="md"
      >
        <:subtitle><.panel_subtitle /></:subtitle>
        <.panel_form />
        <:actions><.panel_actions /></:actions>
      </Product.side_panel>

      <Product.side_panel
        :if={@active_panel == "custom_header"}
        open
        title="Configure access"
        label_text="Step flow"
        size="md"
      >
        <:above_title>
          <Carbon.tag type="cool-gray">Custom header</Carbon.tag>
        </:above_title>
        <:below_title>
          <div style="display: grid; gap: 0.25rem;">
            <strong>Optional subtitle</strong>
            <span>Use above/below title slots for extra context.</span>
          </div>
        </:below_title>
        <:subtitle><.panel_subtitle /></:subtitle>
        <.panel_form />
        <:actions><.panel_actions /></:actions>
      </Product.side_panel>

      <.event_log logs={@event_log} />
    </div>
    """
  end

  defp side_panel_events(variant) do
    [
      {"c4p-side-panel-beingclosed",
       [
         push: "side_panel:event",
         payload: event_payload("c4p-side-panel-beingclosed", %{variant: variant})
       ]},
      {"c4p-side-panel-closed",
       [
         push: "side_panel:event",
         payload: event_payload("c4p-side-panel-closed", %{variant: variant})
       ]},
      {"c4p-side-panel-navigate-back",
       [
         push: "side_panel:event",
         payload: event_payload("c4p-side-panel-navigate-back", %{variant: variant})
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

  defp panel_subtitle(assigns) do
    ~H"""
    I am your subtitle slot for adding detail that can be one or two lines.
    """
  end

  defp panel_form(assigns) do
    ~H"""
    <div style="display: grid; gap: 0.75rem; padding: 0.5rem 0;">
      <Carbon.text_input name="side-panel-input-a">
        <:label_text>Input A</:label_text>
      </Carbon.text_input>
      <Carbon.text_input name="side-panel-input-b">
        <:label_text>Input B</:label_text>
      </Carbon.text_input>
    </div>
    """
  end

  defp panel_focus_form(assigns) do
    ~H"""
    <div style="display: grid; gap: 0.75rem; padding: 0.5rem 0;">
      <Carbon.text_input name="side-panel-focus-input">
        <:label_text>Input A</:label_text>
      </Carbon.text_input>
      <Carbon.text_input name="side-panel-input-b">
        <:label_text>Input B</:label_text>
      </Carbon.text_input>
    </div>
    """
  end

  defp panel_actions(assigns) do
    ~H"""
    <Carbon.button kind="secondary" phx-click="close_panel">Cancel</Carbon.button>
    <Carbon.button kind="primary">Continue</Carbon.button>
    """
  end

  defp panel_action_toolbar(assigns) do
    ~H"""
    <Carbon.button kind="ghost">Copy</Carbon.button>
    <Carbon.icon_button kind="ghost" size="sm" tooltip_text="Settings">
      <:icon name="settings" size={16} />
    </Carbon.icon_button>
    <Carbon.icon_button kind="ghost" size="sm" tooltip_text="Delete">
      <:icon name="trash-can" size={16} />
    </Carbon.icon_button>
    """
  end
end
