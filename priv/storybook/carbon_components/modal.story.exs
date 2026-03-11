defmodule Storybook.CarbonComponents.Modal do
  use PhoenixStorybook.Story, :example
  import Graphene.CarbonComponents
  def doc do
    """
Modals focus the user on a single task or decision. Keep content concise and
avoid nesting modals.

Pair .modal with clear primary and secondary .button actions, and use inline
validation for form content inside the modal.
"""
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, open_modal: nil)}
  end

  @impl true
  def handle_event("open_modal", %{"id" => id}, socket) do
    {:noreply, assign(socket, open_modal: id)}
  end

  @impl true
  def handle_event("close_modal", _params, socket) do
    {:noreply, assign(socket, open_modal: nil)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1rem;">
      <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
        <Graphene.CarbonComponents.button kind="primary" phx-click="open_modal" phx-value-id="small">
          Open small modal
        </Graphene.CarbonComponents.button>
        <Graphene.CarbonComponents.button kind="secondary" phx-click="open_modal" phx-value-id="large">
          Open large modal
        </Graphene.CarbonComponents.button>
        <Graphene.CarbonComponents.button kind="danger--tertiary" phx-click="open_modal" phx-value-id="danger">
          Open danger modal
        </Graphene.CarbonComponents.button>
      </div>

      <Graphene.CarbonComponents.modal open={@open_modal == "small"} size="sm">
        <:label>Optional label</:label>
        <:heading>Modal heading</:heading>
        <:body>Add your modal content here. Use descriptive text to explain next steps.</:body>
        <:footer_button kind="secondary" attrs={%{"phx-click" => "close_modal"}}>Cancel</:footer_button>
        <:footer_button kind="primary" attrs={%{"phx-click" => "close_modal"}}>Submit</:footer_button>
      </Graphene.CarbonComponents.modal>

      <Graphene.CarbonComponents.modal open={@open_modal == "large"} size="lg">
        <:label>Large modal</:label>
        <:heading>Modal heading</:heading>
        <:body>Large modal content with additional context.</:body>
        <:footer_button kind="secondary" attrs={%{"phx-click" => "close_modal"}}>Back</:footer_button>
        <:footer_button kind="primary" attrs={%{"phx-click" => "close_modal"}}>Continue</:footer_button>
      </Graphene.CarbonComponents.modal>

      <Graphene.CarbonComponents.modal open={@open_modal == "danger"} size="sm">
        <:label>Danger</:label>
        <:heading>Delete item</:heading>
        <:body>Are you sure you want to delete this item?</:body>
        <:footer_button kind="secondary" attrs={%{"phx-click" => "close_modal"}}>Cancel</:footer_button>
        <:footer_button kind="danger" attrs={%{"phx-click" => "close_modal"}}>Delete</:footer_button>
      </Graphene.CarbonComponents.modal>
    </div>
    """
  end
end
