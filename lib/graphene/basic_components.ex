defmodule Graphene.BasicComponents do
  @moduledoc """
  Compatibility wrappers around Graphene.CarbonComponents that mirror the
  Phoenix installer core_components API.

  These components preserve the Phoenix core attributes/slots while rendering
  Carbon web components where possible.
  """

  use Phoenix.Component

  alias Phoenix.LiveView.JS
  alias Graphene.CarbonComponents

  @basic_icon_names Graphene.Icons.available_icons()

  @doc """
  Renders flash notices.

  ## Examples

      <.flash kind={:info} flash={@flash} />
      <.flash kind={:info} phx-mounted={show("#flash")}>Welcome Back!</.flash>
  """
  attr :id, :string, doc: "the optional id of flash container"
  attr :flash, :map, default: %{}, doc: "the map of flash messages to display"
  attr :title, :string, default: nil
  attr :kind, :atom, values: [:info, :error], doc: "used for styling and flash lookup"
  attr :open, :boolean, default: true
  attr :rest, :global, doc: "the arbitrary HTML attributes to add to the flash container"

  slot :inner_block, doc: "the optional inner block that renders the flash message"

  def flash(assigns) do
    assigns = assign_new(assigns, :id, fn -> "flash-#{assigns.kind}" end)
    assigns = assign(assigns, :carbon_kind, flash_kind(assigns.kind))
    ~H"""
    <CarbonComponents.toast_notification
      :if={msg = render_slot(@inner_block) || Phoenix.Flash.get(@flash, @kind)}
      id={@id}
      kind={@carbon_kind}
      open={@open}
      phx-click={JS.push("lv:clear-flash", value: %{key: @kind}) |> hide("##{@id}")}
      {@rest}
    >
      <:title :if={@title}>{@title}</:title>
      <:subtitle>{msg}</:subtitle>
    </CarbonComponents.toast_notification>
    """
  end

  @doc """
  Shows the flash group with standard titles and content.

  ## Examples

      <.flash_group flash={@flash} />
  """
  attr :flash, :map, required: true, doc: "the map of flash messages"
  attr :id, :string, default: "flash-group", doc: "the optional id of flash container"
  attr :class, :any, default: nil

  attr :show_system_messages, :boolean,
    default: true,
    doc: "show LiveView connection error toasts"

  attr :rest, :global

  def flash_group(assigns) do
    ~H"""
    <div
      id={@id}
      class={["graphene-flash-group", @class]}
      style="position: fixed; top: var(--cds-spacing-05, 1rem); right: var(--cds-spacing-05, 1rem); left: auto; bottom: auto; z-index: 9000; display: flex; flex-direction: column; align-items: flex-end; gap: var(--cds-spacing-03, 0.75rem);"
      phx-connected={JS.add_class("graphene-live-connected", to: "body")}
      {@rest}
    >
      <.flash kind={:info} title="Success!" flash={@flash} />
      <.flash kind={:error} title="Error!" flash={@flash} />
      <.flash
        :if={@show_system_messages}
        id="client-error"
        kind={:error}
        title="We can't find the internet"
        open={false}
        phx-disconnected={open_component("body.graphene-live-connected .phx-client-error #client-error")}
        phx-connected={close_component("#client-error")}
        hidden
      >
        Attempting to reconnect
      </.flash>

      <.flash
        :if={@show_system_messages}
        id="server-error"
        kind={:error}
        title="Service interruption"
        open={false}
        phx-disconnected={open_component("body.graphene-live-connected .phx-server-error #server-error")}
        phx-connected={close_component("#server-error")}
        hidden
      >
        Hang in there while we get back on track
      </.flash>
    </div>
    """
  end

  @doc """
  Renders a modal.

  ## Examples

      <.modal id="confirm-modal" show>
        This is a modal.
      </.modal>
  """
  attr :id, :string, default: nil
  attr :show, :boolean, default: false
  attr :open, :boolean, default: false
  attr :size, :string, default: "md", values: ["xs", "sm", "md", "lg"]
  attr :on_cancel, JS, default: %JS{}
  attr :rest, :global

  slot :label
  slot :heading
  slot :body
  slot :inner_block

  slot :footer_button do
    attr :label, :string
    attr :kind, :string
    attr :disabled, :boolean
    attr :type, :string
    attr :autofocus, :boolean
    attr :attrs, :map
  end

  slot :actions do
    attr :label, :string
    attr :kind, :string
    attr :disabled, :boolean
    attr :type, :string
    attr :autofocus, :boolean
    attr :attrs, :map
  end

  def modal(assigns) do
    ~H"""
    <CarbonComponents.modal
      id={@id}
      open={@open || @show}
      size={@size}
      phx-window-keydown={@on_cancel}
      phx-key="escape"
      {@rest}
    >
      <:label :for={label <- @label}>{render_slot(label)}</:label>
      <:heading :for={heading <- @heading}>{render_slot(heading)}</:heading>
      <:body :if={@body != []}>
        <%= for body <- @body do %>
          {render_slot(body)}
        <% end %>
      </:body>
      <:body :if={@body == [] and @inner_block != []}>
        {render_slot(@inner_block)}
      </:body>
      <:footer_button
        :for={action <- @actions}
        label={action[:label]}
        kind={action[:kind]}
        disabled={action[:disabled]}
        type={action[:type]}
        autofocus={action[:autofocus]}
        attrs={action[:attrs]}
      >
        {render_slot(action)}
      </:footer_button>
      <:footer_button
        :for={button <- @footer_button}
        label={button[:label]}
        kind={button[:kind]}
        disabled={button[:disabled]}
        type={button[:type]}
        autofocus={button[:autofocus]}
        attrs={button[:attrs]}
      >
        {render_slot(button)}
      </:footer_button>
    </CarbonComponents.modal>
    """
  end

  @doc """
  Renders a simple form.

  ## Examples

      <.simple_form for={@form} phx-change="validate" phx-submit="save">
        <.input field={@form[:email]} label="Email"/>
        <:actions>
          <.button>Save</.button>
        </:actions>
      </.simple_form>
  """
  attr :for, :any, required: true, doc: "the datastructure for the form"
  attr :as, :any, default: nil, doc: "the server side parameter to collect all input under"

  attr :rest, :global,
    include: ~w(autocomplete name rel action enctype method novalidate target multipart),
    doc: "the arbitrary HTML attributes to apply to the form tag"

  slot :inner_block, required: true
  slot :actions, doc: "the slot for form actions, such as a submit button"

  def simple_form(assigns) do
    ~H"""
    <CarbonComponents.form :let={f} for={@for} as={@as} {@rest}>
      <CarbonComponents.stack gap="5">
        {render_slot(@inner_block, f)}
        <CarbonComponents.stack :if={@actions != []} orientation="horizontal" gap="3">
          <%= for action <- @actions do %>
            {render_slot(action, f)}
          <% end %>
        </CarbonComponents.stack>
      </CarbonComponents.stack>
    </CarbonComponents.form>
    """
  end

  @doc """
  Renders a button with navigation support.

  ## Examples

      <.button>Send!</.button>
      <.button phx-click="go" variant="primary">Send!</.button>
      <.button navigate={~p"/"}>Home</.button>
  """
  attr :rest, :global, include: ~w(href navigate patch method download name value disabled)
  attr :class, :any, default: nil
  attr :variant, :string, default: nil, values: [nil, "primary"]
  attr :kind, :string, default: nil, doc: "Carbon button kind override."
  attr :size, :string, default: nil
  slot :inner_block, required: true

  def button(assigns) do
    assigns =
      assigns
      |> assign_new(:rest, fn -> %{} end)
      |> assign_new(:class, fn -> nil end)

    rest = assigns.rest
    navigate = rest[:navigate]
    patch = rest[:patch]
    href = rest[:href] || navigate || patch
    {rest, phx_click} = button_click(rest)
    kind = assigns[:kind] || assigns[:variant] || "primary"

    rest =
      case href do
        nil -> rest
        _ -> Map.put(rest, :href, href)
      end

    assigns =
      assigns
      |> assign(:rest, rest)
      |> assign(:phx_click, phx_click)
      |> assign(:carbon_kind, kind)

    ~H"""
    <CarbonComponents.button
      kind={@carbon_kind}
      size={@size}
      class={@class}
      phx-click={@phx_click}
      {@rest}
    >
      {render_slot(@inner_block)}
    </CarbonComponents.button>
    """
  end

  @doc """
  Renders an input with label and error messages.

  A `Phoenix.HTML.FormField` may be passed as argument,
  which is used to retrieve the input name, id, and values.
  Otherwise all attributes may be passed explicitly.
  """
  attr :id, :any, default: nil
  attr :name, :any
  attr :label, :string, default: nil
  attr :value, :any, default: nil

  attr :type, :string,
    default: "text",
    values:
      ~w(checkbox color date datetime-local email file month number password search select tel text textarea time url week hidden)

  attr :field, Phoenix.HTML.FormField,
    doc: "a form field struct retrieved from the form, for example: @form[:email]"

  attr :errors, :list, default: []
  attr :checked, :boolean, doc: "the checked flag for checkbox inputs"
  attr :prompt, :string, default: nil, doc: "the prompt for select inputs"
  attr :options, :list, doc: "the options to pass to Phoenix.HTML.Form.options_for_select/2"
  attr :multiple, :boolean, default: false, doc: "the multiple flag for select inputs"
  attr :class, :any, default: nil, doc: "the input class to use over defaults"
  attr :error_class, :any, default: nil, doc: "the input error class to use over defaults"

  attr :rest, :global,
    include: ~w(accept autocomplete capture cols disabled form list max maxlength min minlength
                multiple pattern placeholder readonly required rows size step)

  def input(%{field: %Phoenix.HTML.FormField{} = field} = assigns) do
    errors = if Phoenix.Component.used_input?(field), do: field.errors, else: []

    assigns
    |> assign(field: nil, id: assigns.id || field.id)
    |> assign(:errors, Enum.map(errors, &translate_error(&1)))
    |> assign_new(:name, fn -> if assigns.multiple, do: field.name <> "[]", else: field.name end)
    |> assign_new(:value, fn -> field.value end)
    |> input()
  end

  def input(%{type: "hidden"} = assigns) do
    assigns = input_defaults(assigns)

    ~H"""
    <input type="hidden" id={@id} name={@name} value={@value} {@rest} />
    """
  end

  def input(%{type: "checkbox"} = assigns) do
    assigns = input_defaults(assigns)

    assigns =
      assign_new(assigns, :checked, fn ->
        Phoenix.HTML.Form.normalize_value("checkbox", assigns[:value])
      end)

    {invalid, invalid_text} = input_errors(assigns.errors)
    class = input_class(assigns.class, assigns.error_class, invalid)

    assigns = assign(assigns, invalid: invalid, invalid_text: invalid_text, class: class)

    ~H"""
    <CarbonComponents.form_item>
      <CarbonComponents.checkbox
        id={@id}
        name={@name}
        checked={@checked}
        label_text={@label}
        invalid={@invalid}
        invalid_text={@invalid_text}
        class={@class}
        {@rest}
      />
      <.error :for={msg <- @errors}>{msg}</.error>
    </CarbonComponents.form_item>
    """
  end

  def input(%{type: "select"} = assigns) do
    assigns = input_defaults(assigns)

    {invalid, invalid_text} = input_errors(assigns.errors)
    class = input_class(assigns.class, assigns.error_class, invalid)
    selected = selected_values(assigns.value, assigns.multiple)

    items = build_select_items(assigns.options, selected, assigns.prompt, assigns.value)

    assigns =
      assign(assigns,
        selected: selected,
        invalid: invalid,
        invalid_text: invalid_text,
        class: class,
        items: items
      )

    ~H"""
    <CarbonComponents.form_item>
      <CarbonComponents.select
        id={@id}
        name={@name}
        value={select_value(@value, @multiple)}
        multiple={@multiple}
        invalid={@invalid}
        invalid_text={@invalid_text}
        class={@class}
        {@rest}
      >
        <:label_text :if={@label}>{@label}</:label_text>
        <:item
          :for={item <- @items}
          label={item.label}
          value={item.value}
          selected={item.selected}
        >
          {item.label}
        </:item>
      </CarbonComponents.select>
    </CarbonComponents.form_item>
    """
  end

  def input(%{type: "textarea"} = assigns) do
    assigns = input_defaults(assigns)

    {invalid, invalid_text} = input_errors(assigns.errors)
    class = input_class(assigns.class, assigns.error_class, invalid)

    assigns = assign(assigns, invalid: invalid, invalid_text: invalid_text, class: class)

    ~H"""
    <CarbonComponents.form_item>
      <CarbonComponents.textarea
        id={@id}
        name={@name}
        value={Phoenix.HTML.Form.normalize_value("textarea", @value)}
        invalid={@invalid}
        invalid_text={@invalid_text}
        class={@class}
        {@rest}
      >
        <:label_text :if={@label}>{@label}</:label_text>
      </CarbonComponents.textarea>
    </CarbonComponents.form_item>
    """
  end

  def input(%{type: "search"} = assigns) do
    assigns = input_defaults(assigns)

    class = input_class(assigns.class, assigns.error_class, assigns.errors != [])

    assigns = assign(assigns, class: class)

    ~H"""
    <CarbonComponents.form_item>
      <CarbonComponents.search
        name={@name}
        label_text={@label}
        value={Phoenix.HTML.Form.normalize_value("search", @value)}
        class={@class}
        {@rest}
      />
      <.error :for={msg <- @errors}>{msg}</.error>
    </CarbonComponents.form_item>
    """
  end

  def input(%{type: "number"} = assigns) do
    assigns = input_defaults(assigns)

    {invalid, invalid_text} = input_errors(assigns.errors)
    class = input_class(assigns.class, assigns.error_class, invalid)

    {min, rest} = Map.pop(assigns.rest, :min)
    {max, rest} = Map.pop(rest, :max)

    assigns =
      assign(assigns,
        invalid: invalid,
        invalid_text: invalid_text,
        class: class,
        min: if(is_nil(min), do: "", else: min),
        max: if(is_nil(max), do: "", else: max),
        rest: rest
      )

    ~H"""
    <CarbonComponents.form_item>
      <CarbonComponents.number_input
        id={@id}
        name={@name}
        value={Phoenix.HTML.Form.normalize_value("number", @value)}
        min={@min}
        max={@max}
        invalid={@invalid}
        invalid_text={@invalid_text}
        class={@class}
        {@rest}
      >
        <:label_text :if={@label}>{@label}</:label_text>
      </CarbonComponents.number_input>
    </CarbonComponents.form_item>
    """
  end

  def input(%{type: "file"} = assigns) do
    assigns = input_defaults(assigns)

    {invalid, invalid_text} = input_errors(assigns.errors)
    class = input_class(assigns.class, assigns.error_class, invalid)

    assigns = assign(assigns, invalid: invalid, invalid_text: invalid_text, class: class)

    ~H"""
    <CarbonComponents.form_item>
      <CarbonComponents.file_uploader
        id={@id}
        name={@name}
        label_title={@label}
        label_description={@prompt}
        {@rest}
      >
        <:button
          label={if @label, do: @label, else: "Upload"}
          name={@name}
          accept={@rest[:accept]}
          multiple={@multiple}
          disabled={@rest[:disabled]}
        >
          {if @label, do: @label, else: "Upload"}
        </:button>
      </CarbonComponents.file_uploader>
      <.error :for={msg <- @errors}>{msg}</.error>
    </CarbonComponents.form_item>
    """
  end

  def input(%{type: type} = assigns) when type in ["text", "email", "password", "tel", "url"] do
    assigns = input_defaults(assigns)

    {invalid, invalid_text} = input_errors(assigns.errors)
    class = input_class(assigns.class, assigns.error_class, invalid)

    assigns = assign(assigns, invalid: invalid, invalid_text: invalid_text, class: class)

    ~H"""
    <CarbonComponents.form_item>
      <CarbonComponents.text_input
        id={@id}
        name={@name}
        type={@type}
        value={Phoenix.HTML.Form.normalize_value(@type, @value)}
        invalid={@invalid}
        invalid_text={@invalid_text}
        class={@class}
        {@rest}
      >
        <:label_text :if={@label}>{@label}</:label_text>
      </CarbonComponents.text_input>
    </CarbonComponents.form_item>
    """
  end

  def input(assigns) do
    assigns = input_defaults(assigns)

    class = input_class(assigns.class, assigns.error_class, assigns.errors != [])

    assigns = assign(assigns, class: class)

    ~H"""
    <CarbonComponents.form_item>
      <label :if={@label}>{@label}</label>
      <input
        type={@type}
        name={@name}
        id={@id}
        value={Phoenix.HTML.Form.normalize_value(@type, @value)}
        class={@class}
        {@rest}
      />
      <.error :for={msg <- @errors}>{msg}</.error>
    </CarbonComponents.form_item>
    """
  end

  # Helper used by inputs to generate form errors
  defp error(assigns) do
    ~H"""
    <p class="cds--form-requirement">{render_slot(@inner_block)}</p>
    """
  end

  @doc """
  Renders a Carbon header.
  """
  attr :rest, :global

  slot :name do
    attr :href, :string
    attr :prefix, :string
    attr :attrs, :map
  end

  slot :global
  slot :inner_block

  def header(assigns) do
    Graphene.CarbonComponents.header(assigns)
  end

  @doc """
  Renders a static table with Carbon styling.

  ## Examples

      <.table id="users" rows={@users}>
        <:col :let={user} label="id">{user.id}</:col>
        <:col :let={user} label="username">{user.username}</:col>
      </.table>
  """
  defdelegate table(assigns), to: Graphene.CarbonComponents

  @doc """
  Renders a LiveView-aware data table.

  ## Examples

      <.table_live id="users" rows={@users}>
        <:col :let={user} label="id">{user.id}</:col>
        <:col :let={user} label="username">{user.username}</:col>
      </.table_live>
  """
  defdelegate table_live(assigns), to: Graphene.CarbonComponents, as: :table_live

  @doc """
  Renders a data list.

  ## Examples

      <.list>
        <:item title="Title">{@post.title}</:item>
        <:item title="Views">{@post.views}</:item>
      </.list>
  """
  slot :item, required: true do
    attr :title, :string, required: true
  end

  def list(assigns) do
    ~H"""
    <CarbonComponents.unordered_list>
      <CarbonComponents.list_item :for={item <- @item}>
        <div>
          <strong>{item.title}</strong>
          <div>{render_slot(item)}</div>
        </div>
      </CarbonComponents.list_item>
    </CarbonComponents.unordered_list>
    """
  end

  @doc """
  Renders a back navigation link.

  ## Examples

      <.back navigate={~p"/"}>Back to home</.back>
  """
  attr :navigate, :any, required: true
  attr :class, :any, default: nil
  slot :inner_block, required: true

  def back(assigns) do
    ~H"""
    <div class="cds--breadcrumb">
      <CarbonComponents.link href={@navigate} class={@class}>
        {render_slot(@inner_block)}
      </CarbonComponents.link>
    </div>
    """
  end

  @doc """
  Renders a Carbon icon by name.
  """
  if @basic_icon_names == [] do
    attr :name, :string, required: true
  else
    attr :name, :string, required: true, values: @basic_icon_names
  end

  attr :class, :any, default: ""
  attr :size, :any, default: 24

  def icon(assigns) do
    ~H"""
    <Graphene.Icons.icon name={@name} size={@size} class={@class} />
    """
  end

  ## JS Commands

  def show(js \\ %JS{}, selector) do
    JS.show(js,
      to: selector,
      time: 300,
      transition:
        {"transition-all ease-out duration-300",
         "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
         "opacity-100 translate-y-0 sm:scale-100"}
    )
  end

  def open_component(js \\ %JS{}, selector) do
    js
    |> JS.remove_attribute("hidden", to: selector)
    |> JS.set_attribute({"open", ""}, to: selector)
  end

  def hide(js \\ %JS{}, selector) do
    JS.hide(js,
      to: selector,
      time: 200,
      transition:
        {"transition-all ease-in duration-200", "opacity-100 translate-y-0 sm:scale-100",
         "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}
    )
  end

  def close_component(js \\ %JS{}, selector) do
    js
    |> JS.remove_attribute("open", to: selector)
    |> JS.set_attribute({"hidden", ""}, to: selector)
  end

  def show_modal(js \\ %JS{}, id) when is_binary(id) do
    JS.set_attribute(js, {"open", ""}, to: "##{id}")
  end

  def hide_modal(js \\ %JS{}, id) when is_binary(id) do
    JS.remove_attribute(js, "open", to: "##{id}")
  end

  @doc """
  Translates an error message using gettext.
  """
  def translate_error({msg, opts}) do
    Enum.reduce(opts, msg, fn {key, value}, acc ->
      String.replace(acc, "%{#{key}}", fn _ -> to_string(value) end)
    end)
  end

  @doc """
  Translates the errors for a field from a keyword list of errors.
  """
  def translate_errors(errors, field) when is_list(errors) do
    for {^field, {msg, opts}} <- errors, do: translate_error({msg, opts})
  end

  defp button_click(rest) do
    navigate = rest[:navigate]
    patch = rest[:patch]
    {phx_click, rest} = Map.pop(rest, :"phx-click")
    rest = Map.drop(rest, [:navigate, :patch, :method])

    cond do
      not is_nil(phx_click) -> {rest, phx_click}
      navigate -> {rest, JS.navigate(navigate)}
      patch -> {rest, JS.patch(patch)}
      true -> {rest, nil}
    end
  end

  defp flash_kind(:info), do: "info"
  defp flash_kind(:error), do: "error"
  defp flash_kind(kind) when is_atom(kind), do: Atom.to_string(kind)
  defp flash_kind(kind), do: to_string(kind)

  defp input_defaults(assigns) do
    assigns
    |> assign_new(:id, fn -> nil end)
    |> assign_new(:name, fn -> nil end)
    |> assign_new(:label, fn -> nil end)
    |> assign_new(:value, fn -> nil end)
    |> assign_new(:type, fn -> "text" end)
    |> assign_new(:errors, fn -> [] end)
    |> assign_new(:prompt, fn -> nil end)
    |> assign_new(:options, fn -> [] end)
    |> assign_new(:multiple, fn -> false end)
    |> assign_new(:class, fn -> nil end)
    |> assign_new(:error_class, fn -> nil end)
    |> assign_new(:rest, fn -> %{} end)
  end

  defp input_errors([]), do: {false, nil}
  defp input_errors([message | _]), do: {true, message}

  defp input_class(nil, nil, _invalid), do: nil
  defp input_class(class, nil, _invalid), do: class
  defp input_class(class, error_class, true), do: [class, error_class]
  defp input_class(class, _error_class, false), do: class

  defp prompt_selected?(value) do
    value in [nil, "", []]
  end

  defp selected_values(value, multiple) do
    values =
      cond do
        value in [nil, ""] -> []
        multiple and is_list(value) -> value
        is_list(value) -> value
        true -> [value]
      end

    values
    |> Enum.map(&to_string/1)
    |> MapSet.new()
  end

  defp normalize_options(nil), do: []

  defp normalize_options(options) when is_list(options) do
    Enum.map(options, fn
      {label, value} when is_list(value) -> {:group, label, normalize_options(value)}
      {label, value} -> {:option, label, value}
      value -> {:option, value, value}
    end)
  end

  defp build_select_items(options, selected, prompt, value) do
    items =
      options
      |> normalize_options()
      |> flatten_options()
      |> Enum.map(fn {label, item_value} ->
        %{
          label: label,
          value: item_value,
          selected: MapSet.member?(selected, item_value)
        }
      end)

    if is_nil(prompt) do
      items
    else
      [
        %{label: prompt, value: "", selected: prompt_selected?(value)}
        | items
      ]
    end
  end

  defp flatten_options(options) do
    Enum.flat_map(options, fn
      {:group, _label, group_options} -> flatten_options(group_options)
      {:option, label, value} -> [{to_string(label), to_string(value)}]
    end)
  end

  defp select_value(_value, true), do: nil
  defp select_value(value, false) when is_nil(value), do: nil
  defp select_value(value, false), do: to_string(value)
end
