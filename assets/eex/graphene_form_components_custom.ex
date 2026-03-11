  defp form_input_assigns(assigns, opts) do
    mode = Keyword.fetch!(opts, :mode)
    checked_attr = Keyword.get(opts, :checked_attr, :checked)
    value_attr = Keyword.get(opts, :value_attr, :value)
    default_event = Keyword.get(opts, :event, "change")

    assigns =
      case assigns do
        %{field: %Phoenix.HTML.FormField{} = field} ->
          assigns
          |> assign(:field, nil)
          |> assign(:id, field.id)
          |> assign(:name, field.name)
          |> assign(:value, field.value)

        _ ->
          assigns
      end

    assigns =
      assigns
      |> assign_new(:name, fn -> nil end)
      |> assign_new(:id, fn -> nil end)
      |> assign_new(:value, fn -> nil end)
      |> assign_new(:form, fn -> nil end)
      |> assign_new(:form_event, fn -> default_event end)
      |> assign_new(:rest, fn -> %{} end)

    id = assigns[:id] || assigns[:name]

    if is_nil(id) or id == "" do
      raise ArgumentError, "expected :id or :name for form component"
    end
    assigns = assign(assigns, :id, id)

    assigns =
      case mode do
        :boolean ->
          checked = normalize_checked(assigns, checked_attr)

          assigns
          |> assign(:checked, checked)
          |> assign(checked_attr, checked)

        _ ->
          assigns
          |> assign(value_attr, assigns[:value])
      end

    assigns = if value_attr == :value, do: assigns, else: assign(assigns, :value, nil)

    assigns
    |> assign(:rest, assigns[:rest] || %{})
  end

  defp normalize_checked(assigns, checked_attr) do
    value =
      cond do
        Map.has_key?(assigns, checked_attr) and not is_nil(assigns[checked_attr]) ->
          assigns[checked_attr]

        Map.has_key?(assigns, :checked) and not is_nil(assigns[:checked]) ->
          assigns[:checked]

        true ->
          assigns[:value]
      end

    Phoenix.HTML.Form.normalize_value("checkbox", value)
  end

  @doc """
  Form-aware file uploader wrapper.

  Uses the file uploader button event by default. If you only provide a
  drop container slot, set `form_event` to `cds-file-uploader-drop-container-changed`.
  """
  attr :field, Phoenix.HTML.FormField, doc: "a form field struct, for example: @form[:attachments]"

  attr :form, :string,
    default: nil,
    doc: "the form attribute for the form-associated element"

  attr :id, :string,
    default: nil,
    doc: "the DOM id for the file uploader root element"

  attr :name, :string,
    default: nil,
    doc: "the name used for the form value"

  attr :value, :any,
    default: nil,
    doc: "optional value to sync to the form value"

  attr :form_event, :string,
    default: nil,
    doc: "override the custom event used to sync form values (passed as `form-event`)"

  attr :file_input_name, :string,
    default: nil,
    doc: "optional name attribute for the underlying file input"

  attr :disabled, :boolean, doc: "`true` if the file uploader should be disabled"
  attr :label_description, :string, doc: "The description text."
  attr :label_title, :string, doc: "The label title."
  attr :rest, :global

  slot :button do
    attr :label, :string
    attr :accept, :string
    attr :button_kind, :string
    attr :disabled, :boolean
    attr :multiple, :boolean
    attr :name, :string
    attr :size, :string
    attr :attrs, :map
  end

  slot :drop_container do
    attr :accept, :string
    attr :disabled, :boolean
    attr :multiple, :boolean
    attr :name, :string
    attr :attrs, :map
  end

  slot :item do
    attr :state, :string
    attr :invalid, :boolean
    attr :icon_description, :string
    attr :attrs, :map
  end

  slot :inner_block

  def file_uploader(assigns) do
    assigns =
      assigns
      |> assign_new(:disabled, fn -> false end)
      |> assign_new(:label_description, fn -> nil end)
      |> assign_new(:label_title, fn -> nil end)
      |> assign_new(:file_input_name, fn -> nil end)
      |> assign_new(:button, fn -> [] end)
      |> assign_new(:drop_container, fn -> [] end)
      |> assign_new(:item, fn -> [] end)
      |> assign(
        :form_event,
        assigns[:form_event] ||
          if Map.get(assigns, :drop_container, []) != [] and Map.get(assigns, :button, []) == [] do
            "cds-file-uploader-drop-container-changed"
          else
            "cds-file-uploader-button-changed"
          end
      )
      |> form_input_assigns(name: :file_uploader, mode: :value, event: "cds-file-uploader-button-changed")

    ~H"""
    <cds-file-uploader-form
      disabled={@disabled}
      label-description={@label_description}
      label-title={@label_title}
      name={@name}
      form={@form}
      form-event={@form_event}
      {@rest}
    >
      <%= for drop <- @drop_container do %>
        <CoreComponents.file_uploader_drop_container
          accept={drop[:accept]}
          disabled={drop[:disabled]}
          multiple={drop[:multiple]}
          name={drop[:name] || @file_input_name}
          {drop[:attrs] || %{}}
        >
          {render_slot(drop)}
        </CoreComponents.file_uploader_drop_container>
      <% end %>
      <%= for button <- @button do %>
        <CoreComponents.file_uploader_button
          accept={button[:accept]}
          button_kind={button[:button_kind]}
          disabled={button[:disabled]}
          multiple={button[:multiple]}
          name={button[:name] || @file_input_name}
          size={button[:size]}
          {button[:attrs] || %{}}
        >
          {button[:label] || render_slot(button)}
        </CoreComponents.file_uploader_button>
      <% end %>
      <%= for item <- @item do %>
        <CoreComponents.file_uploader_item
          state={item[:state]}
          invalid={item[:invalid]}
          icon_description={item[:icon_description]}
          {item[:attrs] || %{}}
        >
          {render_slot(item)}
        </CoreComponents.file_uploader_item>
      <% end %>
      {render_slot(@inner_block)}
    </cds-file-uploader-form>
    """
  end
