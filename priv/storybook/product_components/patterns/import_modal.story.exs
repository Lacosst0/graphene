defmodule Storybook.ProductComponents.Patterns.ImportModal do
  use PhoenixStorybook.Story, :example
  use Phoenix.Component

  alias Graphene.CarbonComponents, as: Carbon


  def doc do
    """
Import modal pattern for uploading files and confirming import settings.
Use Carbon file uploader, checkboxes, and modal actions to guide the flow.
"""
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, open_modal: false)}
  end

  @impl true
  def handle_event("open_modal", _params, socket) do
    {:noreply, assign(socket, open_modal: true)}
  end

  @impl true
  def handle_event("close_modal", _params, socket) do
    {:noreply, assign(socket, open_modal: false)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1rem;">
      <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
        <Carbon.button kind="primary" phx-click="open_modal">Open import modal</Carbon.button>
        <Carbon.button kind="ghost" phx-click="close_modal">Close</Carbon.button>
      </div>

      <%= if @open_modal do %>
        <.import_modal />
      <% end %>
    </div>
    """
  end

  def import_modal(assigns) do
    ~H"""
    <Carbon.modal open size="lg">
      <:label>Import</:label>
      <:heading>Import data</:heading>
      <:body>
        <div style="display: grid; gap: 1rem;">
          <Carbon.file_uploader
            label_title="Upload files"
            label_description="CSV or JSON (max 50 MB)"
            name="import-files"
          >
            <:button>Select files</:button>
          </Carbon.file_uploader>
          <Carbon.checkbox id="import-overwrite" label_text="Overwrite existing data" />
          <Carbon.checkbox id="import-notify" label_text="Notify team on completion" checked />
        </div>
      </:body>
      <:footer_button kind="secondary" label="Cancel" attrs={%{"phx-click" => "close_modal"}} />
      <:footer_button kind="primary" label="Import" attrs={%{"phx-click" => "close_modal"}} />
    </Carbon.modal>
    """
  end
end
