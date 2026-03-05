defmodule Graphene.CarbonComponents.Custom.ComponentRecipes do
  @moduledoc false

  defmodule AttrSpec do
    @moduledoc false
    defstruct [:name, :type, :opts]
  end

  defmodule SlotAttrSpec do
    @moduledoc false
    defstruct [:name, :type, :opts]
  end

  defmodule SlotSpec do
    @moduledoc false
    defstruct [:name, :opts, :attrs]
  end

  defmodule Recipe do
    @moduledoc false
    defstruct [
      :name,
      :delegate,
      :delegate_to,
      :prelude,
      :body,
      patterns: [],
      extra_attrs: [],
      extra_slots: [],
      auto_attrs: nil
    ]
  end

  alias __MODULE__.{AttrSpec, Recipe, SlotAttrSpec, SlotSpec}

  def overrides, do: MapSet.new([:file_uploader])

  def attr(name, type, opts \\ []), do: %AttrSpec{name: name, type: type, opts: opts}
  def slot_attr(name, type, opts \\ []), do: %SlotAttrSpec{name: name, type: type, opts: opts}
  def slot(name, attrs \\ [], opts \\ []), do: %SlotSpec{name: name, attrs: attrs, opts: opts}
  def recipe(opts), do: struct(Recipe, opts)

  defp normalize_recipe(recipe) do
    %Recipe{
      name: Map.fetch!(recipe, :name),
      delegate: Map.get(recipe, :delegate),
      delegate_to: Map.get(recipe, :delegate_to),
      patterns: Map.get(recipe, :patterns, []),
      extra_attrs: parse_extra_attrs(Map.get(recipe, :extra_attrs)),
      extra_slots: parse_extra_slots(Map.get(recipe, :extra_slots)),
      prelude: Map.get(recipe, :prelude),
      body: Map.get(recipe, :body),
      auto_attrs: Map.get(recipe, :auto_attrs)
    }
  end

  defp parse_extra_attrs(nil), do: []
  defp parse_extra_attrs(""), do: []
  defp parse_extra_attrs(extra_attrs) when is_list(extra_attrs), do: extra_attrs

  defp parse_extra_attrs(source) when is_binary(source) do
    source
    |> Code.string_to_quoted!()
    |> normalize_block()
    |> Enum.map(&parse_attr_spec/1)
  end

  defp parse_extra_slots(nil), do: []
  defp parse_extra_slots(""), do: []
  defp parse_extra_slots(extra_slots) when is_list(extra_slots), do: extra_slots

  defp parse_extra_slots(source) when is_binary(source) do
    source
    |> Code.string_to_quoted!()
    |> normalize_block()
    |> Enum.map(&parse_slot_spec/1)
  end

  defp normalize_block({:__block__, _, exprs}), do: exprs
  defp normalize_block(expr), do: [expr]

  defp parse_attr_spec({:attr, _meta, [name, type]}) do
    %AttrSpec{name: name, type: normalize_type(type), opts: []}
  end

  defp parse_attr_spec({:attr, _meta, [name, type, opts]}) when is_list(opts) do
    %AttrSpec{name: name, type: normalize_type(type), opts: opts}
  end

  defp parse_slot_spec({:slot, _meta, args}) do
    {name, opts, block} = parse_slot_args(args)
    %SlotSpec{name: name, opts: opts, attrs: parse_slot_attrs(block)}
  end

  defp parse_slot_args([name]), do: {name, [], nil}

  defp parse_slot_args([name, opts]) when is_list(opts) do
    if Keyword.keyword?(opts) do
      if Keyword.has_key?(opts, :do) do
        {name, Keyword.delete(opts, :do), Keyword.fetch!(opts, :do)}
      else
        {name, opts, nil}
      end
    else
      {name, [], nil}
    end
  end

  defp parse_slot_args([name, opts, [do: block]]) when is_list(opts) do
    {name, opts, block}
  end

  defp parse_slot_attrs(nil), do: []

  defp parse_slot_attrs(block) do
    block
    |> normalize_block()
    |> Enum.map(&parse_slot_attr_spec/1)
  end

  defp parse_slot_attr_spec({:attr, _meta, [name, type]}) do
    %SlotAttrSpec{name: name, type: normalize_type(type), opts: []}
  end

  defp parse_slot_attr_spec({:attr, _meta, [name, type, opts]}) when is_list(opts) do
    %SlotAttrSpec{name: name, type: normalize_type(type), opts: opts}
  end

  defp normalize_type(type) when is_atom(type), do: type
  defp normalize_type(type), do: Macro.to_string(type)

  @recipe_sources [

    %{
      name: :table_element,
      delegate: :core,
      delegate_to: :table_element
    },
    %{
      name: :accordion,
      delegate: :core,
      patterns: ["%{item: [_ | _]}"],
      extra_slots: ~S"""
        slot :item do
          attr :title, :string
          attr :open, :boolean
          attr :disabled, :boolean
        end
      """,
      auto_attrs: :component,
      body: ~S"""
          <CoreComponents.accordion {@component_attrs} {@rest}>
            <%= for item <- @item do %>
              <CoreComponents.accordion_item
                title={item[:title]}
                open={item[:open]}
                disabled={item[:disabled]}
              >
                {render_slot(item)}
              </CoreComponents.accordion_item>
            <% end %>
          </CoreComponents.accordion>
      """
    },
    %{
      name: :ai_label,
      delegate: :core,
      patterns: ["%{}"],
      extra_slots: ~S"""
        slot :action_button do
          attr :attrs, :map
        end
      """,
      auto_attrs: :component,
      body: ~S"""
          <CoreComponents.ai_label {@component_attrs} {@rest}>
            <.dynamic_tag :for={body <- @body_text} tag_name={Map.get(body, :tag, "div")} slot="body-text">
              {render_slot(body)}
            </.dynamic_tag>
            <.dynamic_tag :for={action <- @actions} tag_name={Map.get(action, :tag, "div")} slot="actions">
              {render_slot(action)}
            </.dynamic_tag>
            <%= for action_button <- @action_button do %>
              <CoreComponents.ai_label_action_button {action_button[:attrs] || %{}}>
                {render_slot(action_button)}
              </CoreComponents.ai_label_action_button>
            <% end %>
            {render_slot(@inner_block)}
          </CoreComponents.ai_label>
      """
    },
    %{
      name: :breadcrumb,
      delegate: :core,
      patterns: ["%{item: [_ | _]}"],
      extra_slots: ~S"""
        slot :item do
          attr :href, :string
          attr :disabled, :boolean
          attr :current, :boolean
          attr :text, :string
        end
      """,
      auto_attrs: :component,
      body: ~S"""
          <CoreComponents.breadcrumb {@component_attrs} {@rest}>
            <%= for item <- @item do %>
              <CoreComponents.breadcrumb_item>
                <%= if item[:href] do %>
                  <CoreComponents.breadcrumb_link
                    href={item[:href]}
                    disabled={item[:disabled]}
                    is_currentpage={item[:current]}
                  >
                    {item[:text] || render_slot(item)}
                  </CoreComponents.breadcrumb_link>
                <% else %>
                  {item[:text] || render_slot(item)}
                <% end %>
              </CoreComponents.breadcrumb_item>
            <% end %>
          </CoreComponents.breadcrumb>
      """
    },
    %{
      name: :checkbox_group,
      delegate: :core,
      patterns: ["%{item: [_ | _]}"],
      extra_slots: ~S"""
        slot :item do
          attr :label, :string
          attr :value, :string
          attr :checked, :boolean
          attr :disabled, :boolean
        end
      """,
      auto_attrs: :component,
      body: ~S"""
          <CoreComponents.checkbox_group {@component_attrs} {@rest}>
            <%= for item <- @item do %>
              <CoreComponents.checkbox
                label_text={item[:label]}
                value={item[:value]}
                checked={item[:checked]}
                disabled={item[:disabled]}
              />
            <% end %>
          </CoreComponents.checkbox_group>
      """
    },
    %{
      name: :combo_box,
      delegate: :form,
      patterns: ["%{item: [_ | _]}"],
      extra_slots: ~S"""
        slot :item do
          attr :label, :string
          attr :value, :string
          attr :disabled, :boolean
        end
      """,
      auto_attrs: :form,
      body: ~S"""
          <FormComponents.combo_box {@component_attrs} {@rest}>
            <%= for item <- @item do %>
              <CoreComponents.combo_box_item
                value={item[:value] || item[:label]}
                disabled={item[:disabled]}
              >
                {item[:label] || render_slot(item)}
              </CoreComponents.combo_box_item>
            <% end %>
          </FormComponents.combo_box>
      """
    },
    %{
      name: :combo_button,
      delegate: :core,
      patterns: ["%{item: [_ | _]}"],
      extra_slots: ~S"""
        slot :item do
          attr :label, :string
          attr :disabled, :boolean
          attr :kind, :any
          attr :shortcut, :string
          attr :divider, :boolean
          attr :attrs, :map
        end

        slot :group do
          attr :label, :string
          attr :attrs, :map
        end

        slot :divider do
          attr :attrs, :map
        end
      """,
      auto_attrs: :component,
      body: ~S"""
          <CoreComponents.combo_button {@component_attrs} {@rest}>
            <CoreComponents.menu>
              {Graphene.CarbonComponents.Helpers.render_menu_items(assigns)}
            </CoreComponents.menu>
          </CoreComponents.combo_button>
      """
    },
    %{
      name: :code_snippet,
      delegate: :core,
      patterns: ["%{copy_text: nil}"],
      auto_attrs: :component,
      body: ~S"""
          <% copy_text =
            @copy_text ||
              (@inner_block
               |> render_slot()
               |> Phoenix.HTML.Safe.to_iodata()
               |> IO.iodata_to_binary()
               |> String.trim()) %>
          <CoreComponents.code_snippet {@component_attrs} copy_text={copy_text} {@rest}>
            {render_slot(@inner_block)}
          </CoreComponents.code_snippet>
      """
    },
    %{
      name: :contained_list,
      delegate: :core,
      patterns: ["%{item: [_ | _]}"],
      extra_slots: ~S"""
        slot :item do
          attr :clickable, :boolean
          attr :disabled, :boolean
        end
      """,
      auto_attrs: :component,
      body: ~S"""
          <CoreComponents.contained_list {@component_attrs} {@rest}>
            <.dynamic_tag :for={label <- @label} tag_name={Map.get(label, :tag, "div")} slot="label">
              {render_slot(label)}
            </.dynamic_tag>
            <.dynamic_tag :for={action <- @action} tag_name={Map.get(action, :tag, "div")} slot="action">
              {render_slot(action)}
            </.dynamic_tag>
            <%= for item <- @item do %>
              <CoreComponents.contained_list_item
                clickable={item[:clickable]}
                disabled={item[:disabled]}
              >
                {render_slot(item)}
              </CoreComponents.contained_list_item>
            <% end %>
          </CoreComponents.contained_list>
      """
    },
    %{
      name: :content_switcher,
      delegate: :core,
      patterns: ["%{item: [_ | _]}"],
      extra_slots: ~S"""
        slot :item do
          attr :label, :string
          attr :value, :string
          attr :disabled, :boolean
          attr :icon, :boolean
          attr :target, :string
        end
      """,
      auto_attrs: :component,
      body: ~S"""
          <CoreComponents.content_switcher {@component_attrs} {@rest}>
            <%= for item <- @item do %>
              <CoreComponents.content_switcher_item
                value={item[:value]}
                disabled={item[:disabled]}
                icon={item[:icon]}
                target={item[:target]}
              >
                {item[:label] || render_slot(item)}
              </CoreComponents.content_switcher_item>
            <% end %>
          </CoreComponents.content_switcher>
      """
    },
    %{
      name: :date_picker,
      delegate: :form,
      patterns: ["%{input: [_ | _]}"],
      extra_slots: ~S"""
        slot :input do
          attr :label, :string
          attr :placeholder, :string
          attr :value, :string
          attr :kind, :string
          attr :disabled, :boolean
          attr :invalid, :boolean
          attr :invalid_text, :string
          attr :readonly, :boolean
          attr :attrs, :map
        end
      """,
      auto_attrs: :form,
      body: ~S"""
          <FormComponents.date_picker {@component_attrs} {@rest}>
            <%= for input <- @input do %>
              <CoreComponents.date_picker_input
                label_text={input[:label]}
                placeholder={input[:placeholder]}
                value={input[:value]}
                kind={input[:kind]}
                disabled={input[:disabled]}
                invalid={input[:invalid]}
                invalid_text={input[:invalid_text]}
                readonly={input[:readonly]}
                {input[:attrs] || %{}}
              />
            <% end %>
          </FormComponents.date_picker>
      """
    },
    %{
      name: :dropdown,
      delegate: :form,
      patterns: ["%{item: [_ | _]}"],
      extra_slots: ~S"""
        slot :item do
          attr :label, :string
          attr :value, :string
          attr :disabled, :boolean
        end
      """,
      auto_attrs: :form,
      body: ~S"""
          <FormComponents.dropdown {@component_attrs} {@rest}>
            <.dynamic_tag
              :for={title <- @title_text}
              tag_name={Map.get(title, :tag, "div")}
              slot="title-text"
            >
              {render_slot(title)}
            </.dynamic_tag>
            <%= for item <- @item do %>
              <CoreComponents.dropdown_item
                value={item[:value] || item[:label]}
                disabled={item[:disabled]}
              >
                {item[:label] || render_slot(item)}
              </CoreComponents.dropdown_item>
            <% end %>
          </FormComponents.dropdown>
      """
    },
    %{
      name: :file_uploader,
      delegate: :core,
      patterns: ["%{button: [_ | _]}"],
      extra_slots: ~S"""
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

        slot :item do
          attr :state, :string
          attr :invalid, :boolean
          attr :icon_description, :string
          attr :attrs, :map
        end
      """,
      auto_attrs: :component,
      body: ~S"""
          <CoreComponents.file_uploader {@component_attrs} {@rest}>
            <%= for button <- @button do %>
              <CoreComponents.file_uploader_button
                accept={button[:accept]}
                button_kind={button[:button_kind]}
                disabled={button[:disabled]}
                multiple={button[:multiple]}
                name={button[:name]}
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
          </CoreComponents.file_uploader>
      """
    },
    %{
      name: :form,
      delegate: :core,
      patterns: ["%{}"],
      extra_attrs: ~S"""
        attr :for, :any, default: nil, doc: "form data passed to Phoenix.Component.form/1"
        attr :as, :any, default: nil, doc: "form name passed to Phoenix.Component.form/1"
        attr :action, :string, default: nil, doc: "form action"
        attr :method, :string, default: nil, doc: "form method"
        attr :multipart, :boolean, default: false, doc: "multipart form"
        attr :csrf_token, :any, default: nil, doc: "CSRF token"
        attr :errors, :list, default: nil, doc: "form errors"
      """,
      body: ~S"""
          <Phoenix.Component.form
            for={@for}
            as={@as}
            action={@action}
            method={@method}
            multipart={@multipart}
            csrf_token={@csrf_token}
            errors={@errors}
            :let={f}
            {@rest}
          >
            <CoreComponents.form>
              {render_slot(@inner_block, f)}
            </CoreComponents.form>
          </Phoenix.Component.form>
      """
    },
    %{
      name: :fluid_select,
      delegate: :form,
      patterns: ["%{item: [_ | _]}"],
      extra_slots: ~S"""
        slot :item do
          attr :label, :string
          attr :value, :string
          attr :selected, :boolean
          attr :disabled, :boolean
        end
      """,
      auto_attrs: :form,
      body: ~S"""
          <FormComponents.fluid_select {@component_attrs} {@rest}>
            <.dynamic_tag
              :for={label <- @label_text}
              tag_name={Map.get(label, :tag, "div")}
              slot="label-text"
            >
              {render_slot(label)}
            </.dynamic_tag>
            <.dynamic_tag
              :for={helper <- @helper_text}
              tag_name={Map.get(helper, :tag, "div")}
              slot="helper-text"
            >
              {render_slot(helper)}
            </.dynamic_tag>
            <.dynamic_tag
              :for={message <- @validity_message}
              tag_name={Map.get(message, :tag, "div")}
              slot="validity-message"
            >
              {render_slot(message)}
            </.dynamic_tag>
            <%= for item <- @item do %>
              <CoreComponents.select_item
                label={item[:label]}
                value={item[:value] || item[:label]}
                selected={item[:selected]}
                disabled={item[:disabled]}
              >
                {item[:label] || render_slot(item)}
              </CoreComponents.select_item>
            <% end %>
          </FormComponents.fluid_select>
      """
    },
    %{
      name: :grid,
      delegate: :core,
      patterns: ["%{column: [_ | _]}"],
      prelude: ~S"""
        row_gap_given? =
          assigns
          |> Map.get(:__given__, %{})
          |> Map.has_key?(:row_gap)

        assigns =
          if row_gap_given? do
            assigns
          else
            gap =
              cond do
                assigns[:condensed] -> "gutter"
                assigns[:narrow] -> "05"
                true -> nil
              end

            if gap do
              assign(assigns, :row_gap, gap)
            else
              assigns
            end
          end
      """,
      extra_slots: ~S"""
        slot :column do
          attr :sm, :string
          attr :md, :string
          attr :lg, :string
          attr :span, :string
          attr :attrs, :map
        end
      """,
      auto_attrs: :component,
      body: ~S"""
          <CoreComponents.grid {@component_attrs} {@rest}>
            <%= for column <- @column do %>
              <CoreComponents.column
                sm={column[:sm]}
                md={column[:md]}
                lg={column[:lg]}
                span={column[:span]}
                {column[:attrs] || %{}}
              >
                {render_slot(column)}
              </CoreComponents.column>
            <% end %>
          </CoreComponents.grid>
      """
    },
    %{
      name: :header,
      delegate: :core,
      patterns: ["%{name: [_ | _]}", "%{global: [_ | _]}"],
      extra_slots: ~S"""
        slot :name do
          attr :href, :string
          attr :prefix, :string
          attr :attrs, :map
        end
        slot :global
      """,
      auto_attrs: :component,
      body: ~S"""
          <CoreComponents.header {@component_attrs} {@rest}>
            <%= for name <- @name do %>
              <CoreComponents.header_name
                href={name[:href]}
                prefix={name[:prefix]}
                {name[:attrs] || %{}}
              >
                {render_slot(name)}
              </CoreComponents.header_name>
            <% end %>
            {render_slot(@inner_block)}
            <%= if @global != [] do %>
              <div class="cds--header__global">
                <%= for global <- @global do %>
                  {render_slot(global)}
                <% end %>
              </div>
            <% end %>
          </CoreComponents.header>
      """
    },
    %{
      name: :header_global_action,
      delegate: :core,
      patterns: ["%{icon: [_ | _]}"],
      extra_slots: ~S"""
        slot :icon do
          attr :name, :string
          attr :size, :any
          attr :attrs, :map
        end
      """,
      auto_attrs: :html,
      body: ~S"""
          <cds-header-global-action {@component_attrs} {@rest}>
            <%= for icon <- @icon do %>
              <% size_value =
                case icon[:size] do
                  size when is_integer(size) ->
                    size

                  size when is_binary(size) ->
                    case Integer.parse(size) do
                      {value, _} -> value
                      _ -> 16
                    end

                  _ ->
                    16
                end %>
              <% size_string = Integer.to_string(size_value) %>
              <% icon_attrs = Map.put(icon[:attrs] || %{}, :slot, "icon") %>
              <%= if icon[:name] do %>
                <Graphene.Icons.icon name={icon[:name]} size={size_value} {icon_attrs} />
              <% else %>
                <CoreComponents.icon size={size_string} {icon_attrs}>
                  {render_slot(icon)}
                </CoreComponents.icon>
              <% end %>
            <% end %>
            {render_slot(@inner_block)}
          </cds-header-global-action>
      """
    },
    %{
      name: :icon,
      delegate: :core,
      patterns: ["%{name: name} when not is_nil(name)"],
      extra_attrs: ~S"""
        attr :name, :string, doc: "Carbon icon name"
      """,
      body: ~S"""
          <% icon_rest = if @class, do: Map.put(@rest || %{}, :class, @class), else: (@rest || %{}) %>
          <% size_value =
            case @size do
              size when is_integer(size) ->
                size

              size when is_binary(size) ->
                case Integer.parse(size) do
                  {value, _} -> value
                  _ -> 16
                end

              _ ->
                16
            end %>
          <Graphene.Icons.icon name={@name} size={size_value} {icon_rest} />
      """
    },
    %{
      name: :icon_button,
      delegate: :core,
      patterns: ["%{icon: [_ | _]}"],
      extra_slots: ~S"""
        slot :icon do
          attr :name, :string
          attr :size, :any
          attr :attrs, :map
        end
      """,
      auto_attrs: :component,
      body: ~S"""
          <CoreComponents.icon_button {@component_attrs} {@rest}>
            <%= for icon <- @icon do %>
              <% size_value =
                case icon[:size] do
                  size when is_integer(size) ->
                    size

                  size when is_binary(size) ->
                    case Integer.parse(size) do
                      {value, _} -> value
                      _ -> 16
                    end

                  _ ->
                    16
                end %>
              <% size_string = Integer.to_string(size_value) %>
              <%= if icon[:name] do %>
                <Graphene.Icons.icon name={icon[:name]} size={size_value} {icon[:attrs] || %{}} />
              <% else %>
                <CoreComponents.icon size={size_string} {icon[:attrs] || %{}}>
                  {render_slot(icon)}
                </CoreComponents.icon>
              <% end %>
            <% end %>
            {render_slot(@inner_block)}
          </CoreComponents.icon_button>
      """
    },
    %{
      name: :menu_button,
      delegate: :core,
      patterns: ["%{item: [_ | _]}"],
      extra_slots: ~S"""
        slot :item do
          attr :label, :string
          attr :disabled, :boolean
          attr :kind, :any
          attr :shortcut, :string
          attr :attrs, :map
        end

        slot :group do
          attr :label, :string
          attr :attrs, :map
        end

        slot :divider do
          attr :attrs, :map
        end
      """,
      auto_attrs: :component,
      body: ~S"""
          <CoreComponents.menu_button {@component_attrs} {@rest}>
            <CoreComponents.menu>
              {Graphene.CarbonComponents.Helpers.render_menu_items(assigns)}
            </CoreComponents.menu>
          </CoreComponents.menu_button>
      """
    },
    %{
      name: :ordered_list,
      delegate: :core,
      patterns: ["%{item: [_ | _]}"],
      extra_slots: ~S"""
        slot :item do
          attr :attrs, :map
        end
      """,
      auto_attrs: :component,
      body: ~S"""
          <CoreComponents.ordered_list {@component_attrs} {@rest}>
            <%= for item <- @item do %>
              <CoreComponents.list_item {item[:attrs] || %{}}>
                {render_slot(item)}
              </CoreComponents.list_item>
            <% end %>
            {render_slot(@inner_block)}
          </CoreComponents.ordered_list>
      """
    },
    %{
      name: :unordered_list,
      delegate: :core,
      patterns: ["%{item: [_ | _]}"],
      extra_slots: ~S"""
        slot :item do
          attr :attrs, :map
        end
      """,
      auto_attrs: :component,
      body: ~S"""
          <CoreComponents.unordered_list {@component_attrs} {@rest}>
            <%= for item <- @item do %>
              <CoreComponents.list_item {item[:attrs] || %{}}>
                {render_slot(item)}
              </CoreComponents.list_item>
            <% end %>
            {render_slot(@inner_block)}
          </CoreComponents.unordered_list>
      """
    },
    %{
      name: :modal,
      delegate: :core,
      patterns: [
        "%{body: [_ | _]}",
        "%{footer_button: [_ | _]}",
        "%{label: [_ | _]}",
        "%{heading: [_ | _]}"
      ],
      extra_slots: ~S"""
        slot :label
        slot :heading
        slot :body

        slot :footer_button do
          attr :label, :string
          attr :kind, :string
          attr :disabled, :boolean
          attr :type, :string
          attr :autofocus, :boolean
          attr :attrs, :map
        end
      """,
      auto_attrs: :component,
      body: ~S"""
          <CoreComponents.modal {@component_attrs} {@rest}>
            <CoreComponents.modal_header>
              <%= for label <- @label do %>
                <CoreComponents.modal_label>{render_slot(label)}</CoreComponents.modal_label>
              <% end %>
              <%= for heading <- @heading do %>
                <CoreComponents.modal_heading>{render_slot(heading)}</CoreComponents.modal_heading>
              <% end %>
            </CoreComponents.modal_header>
            <CoreComponents.modal_body :if={@body != []}>
              <CoreComponents.modal_body_content>
                <%= for body <- @body do %>
                  {render_slot(body)}
                <% end %>
              </CoreComponents.modal_body_content>
            </CoreComponents.modal_body>
            <CoreComponents.modal_footer :if={@footer_button != []}>
              <%= for button <- @footer_button do %>
                <CoreComponents.modal_footer_button
                  kind={button[:kind]}
                  disabled={button[:disabled]}
                  type={button[:type]}
                  autofocus={button[:autofocus]}
                  {button[:attrs] || %{}}
                >
                  {button[:label] || render_slot(button)}
                </CoreComponents.modal_footer_button>
              <% end %>
            </CoreComponents.modal_footer>
            {render_slot(@inner_block)}
          </CoreComponents.modal>
      """
    },
    %{
      name: :multi_select,
      delegate: :form,
      patterns: ["%{item: [_ | _]}"],
      extra_slots: ~S"""
        slot :item do
          attr :label, :string
          attr :value, :string
          attr :selected, :boolean
          attr :disabled, :boolean
        end
      """,
      auto_attrs: :form,
      body: ~S"""
          <FormComponents.multi_select {@component_attrs} {@rest}>
            <.dynamic_tag
              :for={title <- @title_text}
              tag_name={Map.get(title, :tag, "div")}
              slot="title-text"
            >
              {render_slot(title)}
            </.dynamic_tag>
            <%= for item <- @item do %>
              <CoreComponents.multi_select_item
                value={item[:value] || item[:label]}
                disabled={item[:disabled]}
              >
                {item[:label] || render_slot(item)}
              </CoreComponents.multi_select_item>
            <% end %>
          </FormComponents.multi_select>
      """
    },
    %{
      name: :overflow_menu,
      delegate: :core,
      patterns: ["%{item: [_ | _]}"],
      extra_slots: ~S"""
        slot :item do
          attr :label, :string
          attr :disabled, :boolean
          attr :danger, :boolean
        end
      """,
      auto_attrs: :component,
      body: ~S"""
          <CoreComponents.overflow_menu {@component_attrs} {@rest}>
            <.dynamic_tag :for={icon <- @icon} tag_name={Map.get(icon, :tag, "span")} slot="icon">
              {render_slot(icon)}
            </.dynamic_tag>
            <.dynamic_tag
              :for={tooltip <- @tooltip_content}
              tag_name={Map.get(tooltip, :tag, "span")}
              slot="tooltip-content"
            >
              {render_slot(tooltip)}
            </.dynamic_tag>
            <CoreComponents.overflow_menu_body>
              <%= for item <- @item do %>
                <CoreComponents.overflow_menu_item disabled={item[:disabled]} danger={item[:danger]}>
                  {item[:label] || render_slot(item)}
                </CoreComponents.overflow_menu_item>
              <% end %>
            </CoreComponents.overflow_menu_body>
          </CoreComponents.overflow_menu>
      """
    },
    %{
      name: :page_header,
      delegate: :core,
      patterns: ["%{breadcrumb_slot: [_ | _]}", "%{breadcrumb: [_ | _]}"],
      extra_slots: ~S"""
        slot :breadcrumb do
          attr :border, :boolean
          attr :content_actions_flush, :boolean
          attr :page_actions_flush, :boolean
          attr :within_grid, :boolean
        end

        slot :breadcrumb_slot do
          attr :border, :boolean
          attr :content_actions_flush, :boolean
          attr :page_actions_flush, :boolean
          attr :within_grid, :boolean
        end

        slot :content do
          attr :title, :string
          attr :within_grid, :boolean
        end

        slot :content_text do
          attr :subtitle, :string
        end
      """,
      auto_attrs: :component,
      body: ~S"""
          <CoreComponents.page_header {@component_attrs} {@rest}>
            <% breadcrumbs = if @breadcrumb_slot != [], do: @breadcrumb_slot, else: @breadcrumb %>
            <%= for breadcrumb <- breadcrumbs do %>
              <CoreComponents.page_header_breadcrumb
                border={Map.get(breadcrumb, :border, true)}
                content_actions_flush={breadcrumb[:content_actions_flush]}
                page_actions_flush={breadcrumb[:page_actions_flush]}
                within_grid={breadcrumb[:within_grid]}
              >
                <%= if breadcrumb.inner_block do %>
                  {render_slot(breadcrumb)}
                <% end %>
              </CoreComponents.page_header_breadcrumb>
            <% end %>
            <%= for content <- @content do %>
              <CoreComponents.page_header_content
                title={content[:title]}
                within_grid={content[:within_grid]}
              >
                <%= if @content_text != [] do %>
                  <%= for text <- @content_text do %>
                    <CoreComponents.page_header_content_text subtitle={text[:subtitle]}>
                      <%= if text.inner_block do %>
                        {render_slot(text)}
                      <% end %>
                    </CoreComponents.page_header_content_text>
                  <% end %>
                <% end %>
                <%= if content.inner_block do %>
                  {render_slot(content)}
                <% end %>
              </CoreComponents.page_header_content>
            <% end %>
            {render_slot(@inner_block)}
          </CoreComponents.page_header>
      """
    },
    %{
      name: :popover,
      delegate: :core,
      patterns: ["%{content: [_ | _]}"],
      extra_slots: ~S"""
        slot :trigger
        slot :content
      """,
      auto_attrs: :component,
      body: ~S"""
          <CoreComponents.popover {@component_attrs} {@rest}>
            <%= for trigger <- @trigger do %>
              {render_slot(trigger)}
            <% end %>
            <%= for content <- @content do %>
              <CoreComponents.popover_content>
                {render_slot(content)}
              </CoreComponents.popover_content>
            <% end %>
            {render_slot(@inner_block)}
          </CoreComponents.popover>
      """
    },
    %{
      name: :progress_indicator,
      delegate: :core,
      patterns: ["%{step: [_ | _]}"],
      extra_slots: ~S"""
        slot :step do
          attr :label, :string
          attr :description, :string
          attr :secondary_label, :string
          attr :secondary_label_text, :string
          attr :complete, :boolean
          attr :current, :boolean
          attr :disabled, :boolean
          attr :invalid, :boolean
          attr :icon_label, :string
          attr :clickable, :boolean
        end
      """,
      auto_attrs: :component,
      body: ~S"""
          <CoreComponents.progress_indicator {@component_attrs} {@rest}>
            <%= for step <- @step do %>
              <CoreComponents.progress_step
                label={step[:label]}
                description={step[:description]}
                secondary_label={step[:secondary_label]}
                complete={step[:complete]}
                current={step[:current]}
                disabled={step[:disabled]}
                invalid={step[:invalid]}
                icon_label={step[:icon_label]}
                clickable={step[:clickable]}
              >
                <%= if step[:secondary_label_text] do %>
                  <span slot="secondary-label-text">{step[:secondary_label_text]}</span>
                <% end %>
              </CoreComponents.progress_step>
            <% end %>
          </CoreComponents.progress_indicator>
      """
    },
    %{
      name: :radio_button_group,
      delegate: :form,
      patterns: ["%{item: [_ | _]}"],
      extra_slots: ~S"""
        slot :item do
          attr :label, :string
          attr :value, :string
          attr :checked, :boolean
          attr :disabled, :boolean
        end
      """,
      auto_attrs: :form,
      body: ~S"""
          <FormComponents.radio_button_group {@component_attrs} {@rest}>
            <%= for item <- @item do %>
              <CoreComponents.radio_button
                label_text={item[:label]}
                value={item[:value]}
                checked={item[:checked]}
                disabled={item[:disabled]}
              />
            <% end %>
          </FormComponents.radio_button_group>
      """
    },
    %{
      name: :select,
      delegate: :form,
      patterns: ["%{item: [_ | _]}"],
      extra_slots: ~S"""
        slot :item do
          attr :label, :string
          attr :value, :string
          attr :selected, :boolean
          attr :disabled, :boolean
        end
      """,
      auto_attrs: :form,
      body: ~S"""
          <FormComponents.select {@component_attrs} {@rest}>
            <.dynamic_tag
              :for={label <- @label_text}
              tag_name={Map.get(label, :tag, "div")}
              slot="label-text"
            >
              {render_slot(label)}
            </.dynamic_tag>
            <.dynamic_tag
              :for={helper <- @helper_text}
              tag_name={Map.get(helper, :tag, "div")}
              slot="helper-text"
            >
              {render_slot(helper)}
            </.dynamic_tag>
            <.dynamic_tag
              :for={message <- @validity_message}
              tag_name={Map.get(message, :tag, "div")}
              slot="validity-message"
            >
              {render_slot(message)}
            </.dynamic_tag>
            <%= for item <- @item do %>
              <CoreComponents.select_item
                label={item[:label]}
                value={item[:value] || item[:label]}
                selected={item[:selected]}
                disabled={item[:disabled]}
              >
                {item[:label] || render_slot(item)}
              </CoreComponents.select_item>
            <% end %>
          </FormComponents.select>
      """
    },
    %{
      name: :structured_list,
      delegate: :core,
      patterns: ["%{rows: rows, col: [_ | _]} when is_list(rows)"],
      extra_attrs: ~S"""
        attr :rows, :list, default: nil
        attr :row_id, :any, default: nil
        attr :selected_ids, :list, default: nil
      """,
      extra_slots: ~S"""
        slot :col do
          attr :label, :any
        end
      """,
      prelude: ~S"""
          assigns =
            assigns
            |> assign(:selected_set, MapSet.new(Enum.map(assigns.selected_ids || [], &to_string/1)))
      """,
      auto_attrs: :component,
      body: ~S"""
          <CoreComponents.structured_list {@component_attrs} {@rest}>
            <CoreComponents.structured_list_head>
              <CoreComponents.structured_list_header_row selection_name={@selection_name}>
                <CoreComponents.structured_list_header_cell :for={col <- @col}>
                  {Graphene.CarbonComponents.Helpers.render_column_label(col[:label])}
                </CoreComponents.structured_list_header_cell>
              </CoreComponents.structured_list_header_row>
            </CoreComponents.structured_list_head>
            <CoreComponents.structured_list_body>
              <%= for {row, index} <- Enum.with_index(@rows) do %>
                <CoreComponents.structured_list_row
                  selection_name={@selection_name}
                  selection_value={Graphene.CarbonComponents.Helpers.structured_list_row_id(@row_id, row, index)}
                  selected={Graphene.CarbonComponents.Helpers.structured_list_selected?(@selected_set, @row_id, row, index)}
                >
                  <CoreComponents.structured_list_cell :for={col <- @col}>
                    {render_slot(col, row)}
                  </CoreComponents.structured_list_cell>
                </CoreComponents.structured_list_row>
              <% end %>
            </CoreComponents.structured_list_body>
          </CoreComponents.structured_list>
      """
    },
    %{
      name: :tabs,
      delegate: :core,
      patterns: ["%{tab: [_ | _]}"],
      extra_slots: ~S"""
        slot :tab do
          attr :title, :string
          attr :target, :string
          attr :disabled, :boolean
          attr :value, :string
        end
      """,
      auto_attrs: :component,
      body: ~S"""
          <CoreComponents.tabs {@component_attrs} {@rest}>
            <%= for tab <- @tab do %>
              <CoreComponents.tab
                tab_title={tab[:title]}
                target={tab[:target]}
                disabled={tab[:disabled]}
                value={tab[:value]}
              >
                {render_slot(tab)}
              </CoreComponents.tab>
            <% end %>
          </CoreComponents.tabs>
      """
    },
    %{
      name: :time_picker,
      delegate: :form,
      patterns: ["%{select_item: [_ | _]}"],
      extra_slots: ~S"""
        slot :select_item do
          attr :label, :string
          attr :value, :string
          attr :selected, :boolean
          attr :disabled, :boolean
        end
      """,
      auto_attrs: :form,
      body: ~S"""
          <FormComponents.time_picker {@component_attrs} {@rest}>
            <.dynamic_tag
              :for={label <- @label_text}
              tag_name={Map.get(label, :tag, "div")}
              slot="label-text"
            >
              {render_slot(label)}
            </.dynamic_tag>
            <.dynamic_tag
              :for={message <- @validity_message}
              tag_name={Map.get(message, :tag, "div")}
              slot="validity-message"
            >
              {render_slot(message)}
            </.dynamic_tag>
            <CoreComponents.time_picker_select>
            <%= for item <- @select_item do %>
              <CoreComponents.select_item
                label={item[:label]}
                value={item[:value] || item[:label]}
                selected={item[:selected]}
                disabled={item[:disabled]}
              >
                {item[:label] || render_slot(item)}
              </CoreComponents.select_item>
            <% end %>
            </CoreComponents.time_picker_select>
          </FormComponents.time_picker>
      """
    },
    %{
      name: :toggletip,
      delegate: :core,
      patterns: ["%{action: [_ | _]}", "%{actions: [_ | _]}"],
      extra_slots: ~S"""
        slot :action do
          attr :tag, :string
        end
      """,
      auto_attrs: :component,
      body: ~S"""
          <CoreComponents.toggletip {@component_attrs} {@rest}>
            {render_slot(@inner_block)}
            <.dynamic_tag
              :for={s <- @body_text}
              tag_name={Map.get(s, :tag, "div")}
              slot="body-text"
            >
              {render_slot(s)}
            </.dynamic_tag>
            <.dynamic_tag
              :for={s <- @actions ++ @action}
              tag_name={Map.get(s, :tag, "div")}
              slot="actions"
            >
              {render_slot(s)}
            </.dynamic_tag>
          </CoreComponents.toggletip>
      """
    },
    %{
      name: :tooltip,
      delegate: :core,
      patterns: ["%{content: [_ | _]}"],
      extra_slots: ~S"""
        slot :trigger
        slot :content do
          attr :id, :string
          attr :attrs, :map
        end
      """,
      auto_attrs: :component,
      body: ~S"""
          <CoreComponents.tooltip {@component_attrs} {@rest}>
            <%= for trigger <- @trigger do %>
              {render_slot(trigger)}
            <% end %>
            <%= for content <- @content do %>
              <CoreComponents.tooltip_content
                id={content[:id]}
                {content[:attrs] || %{}}
              >
                {render_slot(content)}
              </CoreComponents.tooltip_content>
            <% end %>
            {render_slot(@inner_block)}
          </CoreComponents.tooltip>
      """
    },
    %{
      name: :tree_view,
      delegate: :core,
      patterns: ["%{node: [_ | _]}"],
      extra_slots: ~S"""
        slot :node do
          attr :label, :string
          attr :active, :boolean
          attr :disabled, :boolean
          attr :href, :string
          attr :id, :string
          attr :is_expanded, :boolean
          attr :selected, :boolean
          attr :on_click, :any
        end
      """,
      auto_attrs: :component,
      body: ~S"""
          <CoreComponents.tree_view {@component_attrs} {@rest}>
            <%= for node <- @node do %>
              <CoreComponents.tree_node
                label={node[:label]}
                active={node[:active]}
                disabled={node[:disabled]}
                href={node[:href]}
                id={node[:id]}
                is_expanded={node[:is_expanded]}
                selected={node[:selected]}
                on_click={node[:on_click]}
              >
                <%= if node.inner_block do %>
                  {render_slot(node)}
                <% end %>
              </CoreComponents.tree_node>
            <% end %>
          </CoreComponents.tree_view>
      """
    }
  ]

  def recipes do
    @recipe_sources
    |> Enum.map(&normalize_recipe/1)
  end
end
