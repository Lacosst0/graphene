defmodule Storybook.ProductComponents.Patterns.ApiKeyModal do
  use PhoenixStorybook.Story, :example
  use Phoenix.Component

  alias Graphene.CarbonComponents, as: Carbon


  def doc do
    """
API key modal pattern covers generate/edit flows with optional validation.
Use this as a reference for building API key workflows with Carbon components.
"""
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, active_variant: nil)}
  end

  @impl true
  def handle_event("open_modal", %{"id" => id}, socket) do
    {:noreply, assign(socket, active_variant: id)}
  end

  @impl true
  def handle_event("close_modal", _params, socket) do
    {:noreply, assign(socket, active_variant: nil)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1rem;">
      <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
        <Carbon.button kind="primary" phx-click="open_modal" phx-value-id="generate">
          Open generate
        </Carbon.button>
        <Carbon.button kind="secondary" phx-click="open_modal" phx-value-id="generate_with_error">
          Open generate (error)
        </Carbon.button>
        <Carbon.button kind="secondary" phx-click="open_modal" phx-value-id="instant_generate">
          Open instant generate
        </Carbon.button>
        <Carbon.button kind="secondary" phx-click="open_modal" phx-value-id="custom_generate">
          Open custom generate
        </Carbon.button>
        <Carbon.button kind="secondary" phx-click="open_modal" phx-value-id="edit">
          Open edit
        </Carbon.button>
        <Carbon.button kind="secondary" phx-click="open_modal" phx-value-id="edit_with_error">
          Open edit (error)
        </Carbon.button>
        <Carbon.button kind="secondary" phx-click="open_modal" phx-value-id="custom_edit">
          Open custom edit
        </Carbon.button>
        <Carbon.button kind="ghost" phx-click="close_modal">Close</Carbon.button>
      </div>

      <%= if @active_variant do %>
        <.api_key_modal variant={@active_variant} />
      <% end %>
    </div>
    """
  end

  attr :variant, :string, default: "generate"

  def api_key_modal(assigns) do
    variant = assigns.variant || "generate"

    assigns =
      assigns
      |> assign(:heading, heading_for(variant))
      |> assign(:primary_label, primary_label_for(variant))
      |> assign(:show_error, variant in ["generate_with_error", "edit_with_error"])
      |> assign(:show_code, variant in ["instant_generate"])
      |> assign(:editing, variant in ["edit", "edit_with_error", "custom_edit"])
      |> assign(:custom, variant in ["custom_generate", "custom_edit"])
      |> assign(:name_value, if(variant in ["edit", "edit_with_error", "custom_edit"], do: "Production key", else: "New API key"))

    ~H"""
    <Carbon.modal open size="lg">
      <:label>API key</:label>
      <:heading>{@heading}</:heading>
      <:body>
        <div style="display: grid; gap: 1rem;">
          <%= if @show_error do %>
            <Carbon.inline_notification kind="error">
              <:title>Unable to save</:title>
              <:subtitle>Fix the highlighted fields and try again.</:subtitle>
            </Carbon.inline_notification>
          <% end %>

          <Carbon.text_input
            name={"api-key-name-#{@variant}"}
            value={@name_value}
            invalid={@show_error}
            invalid_text={if(@show_error, do: "Name is required", else: nil)}
          >
            <:label_text>API key name</:label_text>
          </Carbon.text_input>

          <Carbon.textarea
            id={"api-key-description-#{@variant}"}
            value="Key used for automated exports."
          >
            <:label_text>Description</:label_text>
          </Carbon.textarea>

          <%= if @editing do %>
            <Carbon.code_snippet type="single">gw-9b83-94fd-11</Carbon.code_snippet>
          <% end %>

          <%= if @show_code do %>
            <Carbon.code_snippet type="single">gw-9b83-94fd-11</Carbon.code_snippet>
            <p style="margin: 0;">
              Store this API key now. You will not be able to view it again.
            </p>
          <% end %>

          <%= if @custom do %>
            <Carbon.checkbox id={"api-key-rotation-#{@variant}"} label_text="Enable rotation" checked />
            <Carbon.checkbox id={"api-key-notify-#{@variant}"} label_text="Notify team on changes" checked />
          <% end %>
        </div>
      </:body>
      <:footer_button kind="secondary" label="Cancel" attrs={%{"phx-click" => "close_modal"}} />
      <:footer_button kind="primary" label={@primary_label} attrs={%{"phx-click" => "close_modal"}} />
    </Carbon.modal>
    """
  end

  defp heading_for("instant_generate"), do: "API key ready"
  defp heading_for("edit"), do: "Edit API key"
  defp heading_for("edit_with_error"), do: "Edit API key"
  defp heading_for("custom_edit"), do: "Edit API key"
  defp heading_for(_), do: "Generate API key"

  defp primary_label_for("instant_generate"), do: "Close"
  defp primary_label_for("edit"), do: "Save"
  defp primary_label_for("edit_with_error"), do: "Save"
  defp primary_label_for("custom_edit"), do: "Save"
  defp primary_label_for(_), do: "Generate"
end
