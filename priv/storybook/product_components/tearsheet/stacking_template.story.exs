defmodule Storybook.ProductComponents.Tearsheet.StackingTemplate do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon
  alias Graphene.ProductComponents, as: Product

  def doc do
    """
    Stacked tearsheets can be opened sequentially to guide multi-step flows.
    Use this pattern when each panel depends on the previous step.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, open_one: false, open_two: false, open_three: false)}
  end

  @impl true
  def handle_event("toggle", %{"id" => id}, socket) do
    {:noreply,
     case id do
       "one" -> update(socket, :open_one, &(!&1))
       "two" -> update(socket, :open_two, &(!&1))
       "three" -> update(socket, :open_three, &(!&1))
       _ -> socket
     end}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1rem;">
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        <Carbon.button phx-click="toggle" phx-value-id="one">Toggle tearsheet one</Carbon.button>
        <Carbon.button phx-click="toggle" phx-value-id="two">Toggle tearsheet two</Carbon.button>
        <Carbon.button phx-click="toggle" phx-value-id="three">Toggle tearsheet three</Carbon.button>
      </div>

      <Product.tearsheet :if={@open_one} open width="wide" has_close_icon>
        <:label>Step 1</:label>
        <:title>Connect a data source</:title>
        <:description>Choose a source to ingest.</:description>
        <div style="display: grid; gap: 0.75rem; padding: 1rem 0;">
          <Carbon.text_input name="stacking-source-name" placeholder="Analytics DB">
            <:label_text>Source name</:label_text>
          </Carbon.text_input>
          <Carbon.text_input name="stacking-connection-string" placeholder="postgres://…">
            <:label_text>Connection string</:label_text>
          </Carbon.text_input>
        </div>
        <:actions>
          <Carbon.button kind="secondary" phx-click="toggle" phx-value-id="one">Close</Carbon.button>
          <Carbon.button kind="primary" phx-click="toggle" phx-value-id="two">Next</Carbon.button>
        </:actions>
      </Product.tearsheet>

      <Product.tearsheet :if={@open_two} open width="wide" has_close_icon>
        <:label>Step 2</:label>
        <:title>Configure access</:title>
        <:description>Assign permissions for collaborators.</:description>
        <div style="display: grid; gap: 0.75rem; padding: 1rem 0;">
          <Carbon.checkbox_group>
            <Carbon.checkbox id="stacking-permission-read" label_text="Read access" />
            <Carbon.checkbox id="stacking-permission-write" label_text="Write access" />
            <Carbon.checkbox id="stacking-permission-admin" label_text="Admin access" />
          </Carbon.checkbox_group>
        </div>
        <:actions>
          <Carbon.button kind="secondary" phx-click="toggle" phx-value-id="two">Close</Carbon.button>
          <Carbon.button kind="primary" phx-click="toggle" phx-value-id="three">Next</Carbon.button>
        </:actions>
      </Product.tearsheet>

      <Product.tearsheet :if={@open_three} open width="wide" has_close_icon>
        <:label>Step 3</:label>
        <:title>Review & launch</:title>
        <:description>Confirm settings and start monitoring.</:description>
        <div style="display: grid; gap: 0.75rem; padding: 1rem 0;">
          <p>You're ready to launch the workflow.</p>
        </div>
        <:actions>
          <Carbon.button kind="secondary" phx-click="toggle" phx-value-id="three">
            Close
          </Carbon.button>
          <Carbon.button kind="primary">Finish</Carbon.button>
        </:actions>
      </Product.tearsheet>
    </div>
    """
  end
end
