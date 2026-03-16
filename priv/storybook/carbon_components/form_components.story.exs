Code.require_file(Path.expand("interactivity_helpers.exs", __DIR__))

defmodule Storybook.CarbonComponents.FormComponents do
  use PhoenixStorybook.Story, :example
  import Storybook.CarbonComponents.InteractivityHelpers
  alias Phoenix.LiveView.JS
  alias Graphene.Internal.CoreComponents
  def doc do
    """
This page demonstrates form-aware components sharing a single form state. Use
it as a reference for how fields, selects, and pickers work together.

Combine inputs with .form_group and .button actions, and surface validation with
.inline_notification or per-field error text.
"""
  end

  @impl true
  def mount(_params, _session, socket) do
    form =
      Phoenix.Component.to_form(
        %{
          "subscribe" => true,
          "feature" => false,
          "plan" => "starter",
          "quantity" => "2",
          "fluid_quantity" => "4",
          "name" => "Ada Lovelace",
          "title" => "Engineer",
          "password" => "password",
          "bio" => "Inventor of the first algorithm.",
          "notes" => "Prefers a concise summary.",
          "search" => "Ada",
          "fluid_search" => "",
          "select" => "option-1",
          "fluid_select" => "option-2",
          "dropdown" => "option-1",
          "combo" => "option-2",
          "multi" => "option-1",
          "date" => "2024-01-10",
          "time" => "09:30",
          "slo" => "65",
          "attachments" => ""
        },
        as: :form
      )

    {:ok,
     assign(socket,
       form: form,
       form_state: %{},
       submitted_state: %{},
       change_event: nil,
       submit_event: nil
     )}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 2rem;">
      <div id="form-components-demo">
        <form id="form-components-form" phx-change="form_change" phx-submit="form_submit">
          <div style="display: grid; gap: 1.5rem;">
            <div style="display: grid; gap: 0.75rem;">
              <h3>Boolean inputs</h3>
              <Graphene.CarbonComponents.checkbox field={@form[:subscribe]} label_text="Receive updates" />
              <Graphene.CarbonComponents.toggle field={@form[:feature]} label_a="On" label_b="Off">
                <:label_text>Enable feature</:label_text>
              </Graphene.CarbonComponents.toggle>
            </div>

            <div style="display: grid; gap: 0.75rem;">
              <h3>Radio group</h3>
              <Graphene.CarbonComponents.radio_button_group field={@form[:plan]} legend_text="Choose a plan">
                <Graphene.CarbonComponents.radio_button value="starter" label_text="Starter" />
                <Graphene.CarbonComponents.radio_button value="pro" label_text="Pro" />
                <Graphene.CarbonComponents.radio_button value="enterprise" label_text="Enterprise" />
              </Graphene.CarbonComponents.radio_button_group>
            </div>

            <div style="display: grid; gap: 0.75rem;">
              <h3>Numbers</h3>
              <Graphene.CarbonComponents.number_input field={@form[:quantity]} min="0" max="Infinity">
                <:label_text>Quantity</:label_text>
              </Graphene.CarbonComponents.number_input>
              <Graphene.CarbonComponents.fluid_number_input field={@form[:fluid_quantity]} min="0" max="Infinity">
                <:label_text>Fluid quantity</:label_text>
              </Graphene.CarbonComponents.fluid_number_input>
              <Graphene.CarbonComponents.slider
                field={@form[:slo]}
                id={@form[:slo].id}
                name={@form[:slo].name}
                value={@form[:slo].value}
                min="0"
                max="100"
                step="5"
              >
                <:label_text>Utilization target</:label_text>
              </Graphene.CarbonComponents.slider>
            </div>

            <div style="display: grid; gap: 0.75rem;">
              <h3>Text</h3>
              <Graphene.CarbonComponents.text_input field={@form[:name]} label="Name" />
              <Graphene.CarbonComponents.fluid_text_input field={@form[:title]} label="Title" />
              <Graphene.CarbonComponents.password_input field={@form[:password]} label="Password" />
              <Graphene.CarbonComponents.textarea field={@form[:bio]} label="Bio" />
              <Graphene.CarbonComponents.fluid_textarea field={@form[:notes]} label="Notes" />
            </div>

            <div style="display: grid; gap: 0.75rem;">
              <h3>Search</h3>
              <Graphene.CarbonComponents.search field={@form[:search]} label_text="Search" />
              <Graphene.CarbonComponents.fluid_search field={@form[:fluid_search]} label_text="Fluid search" />
            </div>

            <div style="display: grid; gap: 0.75rem;">
              <h3>Selects</h3>
              <Graphene.CarbonComponents.select
                field={@form[:select]}
                id={@form[:select].id}
                name={@form[:select].name}
                value={@form[:select].value}
              >
                <:label_text>Select option</:label_text>
                <:item value="option-1">Option 1</:item>
                <:item value="option-2">Option 2</:item>
                <:item value="option-3">Option 3</:item>
              </Graphene.CarbonComponents.select>
              <Graphene.CarbonComponents.fluid_select
                field={@form[:fluid_select]}
                id={@form[:fluid_select].id}
                name={@form[:fluid_select].name}
                value={@form[:fluid_select].value}
              >
                <:label_text>Fluid select</:label_text>
                <:item value="option-1">Option 1</:item>
                <:item value="option-2">Option 2</:item>
                <:item value="option-3">Option 3</:item>
              </Graphene.CarbonComponents.fluid_select>
              <Graphene.CarbonComponents.dropdown
                field={@form[:dropdown]}
                id={@form[:dropdown].id}
                name={@form[:dropdown].name}
                value={@form[:dropdown].value}
                label="Dropdown"
              >
                <:item value="option-1">Option 1</:item>
                <:item value="option-2">Option 2</:item>
                <:item value="option-3">Option 3</:item>
              </Graphene.CarbonComponents.dropdown>
              <Graphene.CarbonComponents.combo_box
                field={@form[:combo]}
                id={@form[:combo].id}
                name={@form[:combo].name}
                value={@form[:combo].value}
                label="Combo box"
              >
                <:item value="option-1">Option 1</:item>
                <:item value="option-2">Option 2</:item>
                <:item value="option-3">Option 3</:item>
              </Graphene.CarbonComponents.combo_box>
              <Graphene.CarbonComponents.multi_select
                field={@form[:multi]}
                id={@form[:multi].id}
                name={@form[:multi].name}
                value={@form[:multi].value}
                label="Multi select"
              >
                <:item value="option-1">Option 1</:item>
                <:item value="option-2">Option 2</:item>
                <:item value="option-3">Option 3</:item>
              </Graphene.CarbonComponents.multi_select>
            </div>

            <div style="display: grid; gap: 0.75rem;">
              <h3>Date & time</h3>
              <Graphene.CarbonComponents.date_picker field={@form[:date]}>
                <Graphene.CarbonComponents.date_picker_input
                  label_text="Start date"
                  placeholder="mm/dd/yyyy"
                  kind="single"
                />
              </Graphene.CarbonComponents.date_picker>
              <Graphene.CarbonComponents.time_picker field={@form[:time]}>
                <:label_text>Select time</:label_text>
              </Graphene.CarbonComponents.time_picker>
            </div>

            <div style="display: grid; gap: 0.75rem;">
              <h3>File upload</h3>
              <Graphene.CarbonComponents.file_uploader field={@form[:attachments]} label_title="Upload evidence">
                <:button label="Add files" />
                <:item state="complete">audit-report.pdf</:item>
              </Graphene.CarbonComponents.file_uploader>
            </div>
          </div>

          <div style="margin-top: 1.5rem;">
            <Graphene.CarbonComponents.button
              type="button"
              phx-click={JS.dispatch("submit", to: "#form-components-form")}
            >
              Send form state
            </Graphene.CarbonComponents.button>
          </div>
        </form>
      </div>

      <div style="display: grid; gap: 1.5rem;">
        <.event_panel
          title="Form params (phx-change)"
          state={@form_state}
          last_event={@change_event}
          pretty={true}
        />
        <.event_panel
          title="Submitted params (phx-submit)"
          state={@submitted_state}
          last_event={@submit_event}
          pretty={true}
        />
      </div>
    </div>
    """
  end

  @impl true
  def handle_event("form_change", %{"form" => params} = payload, socket) do
    {:noreply,
     socket
     |> assign(form_state: params)
     |> assign(change_event: %{event: "form_change", payload: payload})}
  end

  @impl true
  def handle_event("form_submit", %{"form" => params} = payload, socket) do
    {:noreply,
     socket
     |> assign(submitted_state: params)
     |> assign(submit_event: %{event: "form_submit", payload: payload})}
  end
end
