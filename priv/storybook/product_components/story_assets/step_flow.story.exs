defmodule Storybook.ProductComponents.StoryAssets.StepFlow do
  use PhoenixStorybook.Story, :example
  use Graphene, [:html, :live]
  alias Graphene.CarbonComponents, as: Carbon
  alias Graphene.ProductComponents, as: Product

  def doc do
    """
    Story-only step flow examples inspired by IBM Products story assets.
    Use Product components together with Carbon buttons and inputs to build
    multi-step flows.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, active_flow: nil)}
  end

  @impl true
  def handle_event("open_flow", %{"id" => id}, socket) do
    {:noreply, assign(socket, active_flow: id)}
  end

  @impl true
  def handle_event("close_flow", _params, socket) do
    {:noreply, assign(socket, active_flow: nil)}
  end

  @impl true
  def handle_event("c4p-tearsheet-closed", _params, socket) do
    {:noreply, assign(socket, active_flow: nil)}
  end

  @impl true
  def handle_event("c4p-side-panel-closed", _params, socket) do
    {:noreply, assign(socket, active_flow: nil)}
  end

  @impl true
  def handle_event("c4p-interstitial-closed", _params, socket) do
    {:noreply, assign(socket, active_flow: nil)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1.5rem;">
      <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
        <Carbon.button kind="secondary" phx-click="open_flow" phx-value-id="tearsheet">
          Open tearsheet flow
        </Carbon.button>
        <Carbon.button kind="secondary" phx-click="open_flow" phx-value-id="side-panel">
          Open side panel flow
        </Carbon.button>
        <Carbon.button kind="secondary" phx-click="open_flow" phx-value-id="interstitial">
          Open interstitial flow
        </Carbon.button>
        <Carbon.button kind="ghost" phx-click="close_flow">Close all</Carbon.button>
      </div>

      <%= if @active_flow == "tearsheet" do %>
        <Product.tearsheet
          id="step-flow-tearsheet"
          open
          width="wide"
          has_close_icon
          {Graphene.JS.events(
            on: %{
              "c4p-tearsheet-closed" => [push: "c4p-tearsheet-closed"]
            }
          )}
        >
          <:label>Step flow</:label>
          <:title>Connect a data source</:title>
          <:description>Step 1 of 3 — choose a source to ingest.</:description>
          <div style="display: grid; gap: 0.75rem; padding: 1rem 0;">
            <Carbon.text_input name="step-flow-source-name" placeholder="Analytics DB">
              <:label_text>Source name</:label_text>
            </Carbon.text_input>
            <Carbon.text_input name="step-flow-connection-string" placeholder="postgres://…">
              <:label_text>Connection string</:label_text>
            </Carbon.text_input>
          </div>
          <:actions>
            <Carbon.button kind="secondary" phx-click="close_flow">Cancel</Carbon.button>
            <Carbon.button kind="primary">Next</Carbon.button>
          </:actions>
        </Product.tearsheet>
      <% end %>

      <%= if @active_flow == "side-panel" do %>
        <Product.side_panel
          id="step-flow-side-panel"
          open
          title="Configure access"
          label_text="Step flow"
          size="md"
          {Graphene.JS.events(
            on: %{
              "c4p-side-panel-closed" => [push: "c4p-side-panel-closed"]
            }
          )}
        >
          <:subtitle>Step 2 of 3 — permissions</:subtitle>
          <div style="display: grid; gap: 0.75rem; padding: 1rem 0;">
            <Carbon.checkbox_group>
              <Carbon.checkbox id="step-flow-permission-read" label_text="Read access" />
              <Carbon.checkbox id="step-flow-permission-write" label_text="Write access" />
              <Carbon.checkbox id="step-flow-permission-admin" label_text="Admin access" />
            </Carbon.checkbox_group>
          </div>
          <:actions>
            <Carbon.button kind="secondary" phx-click="close_flow">Back</Carbon.button>
            <Carbon.button kind="primary">Continue</Carbon.button>
          </:actions>
        </Product.side_panel>
      <% end %>

      <%= if @active_flow == "interstitial" do %>
        <Product.interstitial_screen
          id="step-flow-interstitial"
          open
          fullscreen
          {Graphene.JS.events(
            on: %{
              "c4p-interstitial-closed" => [push: "c4p-interstitial-closed"]
            }
          )}
        >
          <Product.interstitial_screen_header
            slot="header"
            header_title="Finalize setup"
            header_subtitle="Step 3 of 3"
          >
            <div style="display: flex; justify-content: flex-end;">
              <Carbon.button kind="ghost" phx-click="close_flow">Close</Carbon.button>
            </div>
          </Product.interstitial_screen_header>
          <Product.interstitial_screen_body slot="body">
            <Product.interstitial_screen_body_item step_title="Review settings">
              <p>Confirm the selected source and permissions before finishing.</p>
            </Product.interstitial_screen_body_item>
          </Product.interstitial_screen_body>
          <Product.interstitial_screen_footer
            slot="footer"
            next_button_label="Finish"
            previous_button_label="Back"
            skip_button_label="Skip"
            start_button_label="Start"
          />
        </Product.interstitial_screen>
      <% end %>
    </div>
    """
  end
end
