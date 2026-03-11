defmodule Storybook.ProductComponents.Tearsheet do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon
  alias Graphene.ProductComponents, as: Product

  def doc do
    """
    Tearsheets present complex flows without leaving the page.
    Use header navigation, influencer content, and footer actions to guide users.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, active_tearsheet: nil)}
  end

  @impl true
  def handle_event("open_tearsheet", %{"id" => id}, socket) do
    {:noreply, assign(socket, active_tearsheet: id)}
  end

  @impl true
  def handle_event("close_tearsheet", _params, socket) do
    {:noreply, assign(socket, active_tearsheet: nil)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1rem;">
      <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
        <Carbon.button kind="primary" phx-click="open_tearsheet" phx-value-id="default">
          Open default
        </Carbon.button>
        <Carbon.button kind="secondary" phx-click="open_tearsheet" phx-value-id="with_navigation">
          Open with navigation
        </Carbon.button>
        <Carbon.button kind="secondary" phx-click="open_tearsheet" phx-value-id="with_influencer">
          Open with influencer
        </Carbon.button>
        <Carbon.button
          kind="secondary"
          phx-click="open_tearsheet"
          phx-value-id="with_all_header_items_and_influencer"
        >
          Open with all header items
        </Carbon.button>
        <Carbon.button kind="secondary" phx-click="open_tearsheet" phx-value-id="narrow">
          Open narrow
        </Carbon.button>
        <Carbon.button
          kind="secondary"
          phx-click="open_tearsheet"
          phx-value-id="narrow_with_all_header_items"
        >
          Open narrow + header items
        </Carbon.button>
        <Carbon.button kind="ghost" phx-click="close_tearsheet">Close</Carbon.button>
      </div>

      <Product.tearsheet
        :if={@active_tearsheet == "default"}
        open
        width="wide"
        events={tearsheet_events()}
      >
        <:label>Step flow</:label>
        <:title>Connect a data source</:title>
        <:description>Step 1 of 3 — choose a source to ingest.</:description>
        <.tearsheet_form />
        <:actions><.tearsheet_actions /></:actions>
      </Product.tearsheet>

      <Product.tearsheet
        :if={@active_tearsheet == "with_navigation"}
        open
        width="wide"
        events={tearsheet_events()}
      >
        <:header_navigation><.tearsheet_navigation /></:header_navigation>
        <:label>Step flow</:label>
        <:title>Connect a data source</:title>
        <:description>Step 1 of 3 — choose a source to ingest.</:description>
        <.tearsheet_form />
        <:actions><.tearsheet_actions /></:actions>
      </Product.tearsheet>

      <Product.tearsheet
        :if={@active_tearsheet == "with_influencer"}
        open
        width="wide"
        influencer_width="wide"
        influencer_placement="left"
        events={tearsheet_events()}
      >
        <:influencer><.tearsheet_influencer /></:influencer>
        <:label>Step flow</:label>
        <:title>Connect a data source</:title>
        <:description>Step 1 of 3 — choose a source to ingest.</:description>
        <.tearsheet_form />
        <:actions><.tearsheet_actions /></:actions>
      </Product.tearsheet>

      <Product.tearsheet
        :if={@active_tearsheet == "with_all_header_items_and_influencer"}
        open
        width="wide"
        influencer_width="wide"
        influencer_placement="left"
        events={tearsheet_events()}
      >
        <:header_actions><.tearsheet_header_actions /></:header_actions>
        <:slug><.tearsheet_slug /></:slug>
        <:decorator><.tearsheet_decorator /></:decorator>
        <:header_navigation><.tearsheet_navigation /></:header_navigation>
        <:influencer><.tearsheet_influencer /></:influencer>
        <:label>Step flow</:label>
        <:title>Connect a data source</:title>
        <:description>Step 1 of 3 — choose a source to ingest.</:description>
        <.tearsheet_form />
        <:actions><.tearsheet_actions /></:actions>
      </Product.tearsheet>

      <Product.tearsheet
        :if={@active_tearsheet == "narrow"}
        open
        width="narrow"
        events={tearsheet_events()}
      >
        <:label>Step flow</:label>
        <:title>Connect a data source</:title>
        <:description>Step 1 of 3 — choose a source to ingest.</:description>
        <.tearsheet_form />
        <:actions><.tearsheet_actions /></:actions>
      </Product.tearsheet>

      <Product.tearsheet
        :if={@active_tearsheet == "narrow_with_all_header_items"}
        open
        width="narrow"
        events={tearsheet_events()}
      >
        <:header_actions><.tearsheet_header_actions /></:header_actions>
        <:slug><.tearsheet_slug /></:slug>
        <:decorator><.tearsheet_decorator /></:decorator>
        <:header_navigation><.tearsheet_navigation /></:header_navigation>
        <:label>Step flow</:label>
        <:title>Connect a data source</:title>
        <:description>Step 1 of 3 — choose a source to ingest.</:description>
        <.tearsheet_form />
        <:actions><.tearsheet_actions /></:actions>
      </Product.tearsheet>
    </div>
    """
  end

  defp tearsheet_events do
    [{"c4p-tearsheet-closed", [push: "close_tearsheet"]}]
  end

  defp tearsheet_form(assigns) do
    ~H"""
    <div style="display: grid; gap: 0.75rem; padding: 1rem 0;">
      <Carbon.text_input name="tearsheet-source-name" placeholder="Analytics DB">
        <:label_text>Source name</:label_text>
      </Carbon.text_input>
      <Carbon.text_input name="tearsheet-connection-string" placeholder="postgres://…">
        <:label_text>Connection string</:label_text>
      </Carbon.text_input>
    </div>
    """
  end

  defp tearsheet_actions(assigns) do
    ~H"""
    <Carbon.button kind="secondary" phx-click="close_tearsheet">Cancel</Carbon.button>
    <Carbon.button kind="primary">Next</Carbon.button>
    """
  end

  defp tearsheet_navigation(assigns) do
    ~H"""
    <Carbon.breadcrumb>
      <Carbon.breadcrumb_item>
        <Carbon.breadcrumb_link href="#">Overview</Carbon.breadcrumb_link>
      </Carbon.breadcrumb_item>
      <Carbon.breadcrumb_item>
        <Carbon.breadcrumb_link href="#">Setup</Carbon.breadcrumb_link>
      </Carbon.breadcrumb_item>
    </Carbon.breadcrumb>
    """
  end

  defp tearsheet_influencer(assigns) do
    ~H"""
    <div style="display: grid; gap: 0.5rem;">
      <strong>Recommended source</strong>
      <span>Connect to the analytics warehouse for the fastest sync.</span>
      <Carbon.tag type="cool-gray">Beta</Carbon.tag>
    </div>
    """
  end

  defp tearsheet_header_actions(assigns) do
    ~H"""
    <Carbon.icon_button kind="ghost" size="sm" tooltip_text="Settings">
      <:icon name="settings" size={16} />
    </Carbon.icon_button>
    <Carbon.icon_button kind="ghost" size="sm" tooltip_text="Help">
      <:icon name="help" size={16} />
    </Carbon.icon_button>
    """
  end

  defp tearsheet_slug(assigns) do
    ~H"""
    <Carbon.slug size="xs" alignment="bottom-right">
      <div slot="body-text">
        <p class="secondary">AI explained</p>
        <h1>84%</h1>
        <p>Confidence score for this recommendation.</p>
      </div>
    </Carbon.slug>
    """
  end

  defp tearsheet_decorator(assigns) do
    ~H"""
    <Carbon.ai_label>AI suggestion</Carbon.ai_label>
    """
  end
end
