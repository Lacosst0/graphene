if Mix.env() == :dev do
  defmodule Mix.Tasks.Graphene.FormComponents.Generate do
    use Mix.Task
    require Logger

    defp template(:src) do
      Path.join(["assets", "eex", "graphene_form_components.ex"])
    end

    defp template(:dst) do
      Path.join(["lib", "graphene", "internal", "form_components.ex"])
    end

    defp helpers_template(:src) do
      Path.join(["assets", "eex", "graphene_form_components_custom.ex"])
    end

    defp module_name do
      "Graphene.Internal.FormComponents"
    end

    defp components do
      Graphene.CodeGen.Metadata.components()
      |> Map.new(fn component ->
        {String.to_atom(component.componentname), component}
      end)
    end

    defp docs_map do
      case Code.fetch_docs(Graphene.Internal.CoreComponents) do
        {:docs_v1, _, _, _, _, _, docs} ->
          for {{:function, name, 1}, _, _, doc, _} <- docs, into: %{} do
            doc_text =
              case doc do
                %{"en" => text} when is_binary(text) -> text
                :hidden -> nil
                :none -> nil
                _ -> nil
              end

            {name, doc_text}
          end

        _ ->
          %{}
      end
    end

    defp form_component_specs do
      [
        %{name: :checkbox, mode: :boolean, checked_attr: :checked, event: "cds-checkbox-changed"},
        %{
          name: :toggle,
          mode: :boolean,
          checked_attr: :toggled,
          detail_key: "toggled",
          event: "cds-toggle-changed"
        },
        %{name: :radio_button_group, mode: :value, event: "cds-radio-button-group-changed"},
        %{
          name: :number_input,
          mode: :value,
          value_attr: :value,
          event: "cds-number-input"
        },
        %{
          name: :fluid_number_input,
          mode: :value,
          value_attr: :value,
          event: "cds-number-input"
        },
        %{name: :text_input, mode: :value, event: "input"},
        %{name: :fluid_text_input, mode: :value, event: "input"},
        %{name: :password_input, mode: :value, event: "input"},
        %{name: :textarea, mode: :value, event: "input"},
        %{name: :fluid_textarea, mode: :value, event: "input"},
        %{name: :search, mode: :value, event: "cds-search-input"},
        %{name: :fluid_search, mode: :value, event: "cds-search-input"},
        %{name: :select, mode: :value, event: "cds-select-selected"},
        %{name: :fluid_select, mode: :value, event: "cds-select-selected"},
        %{name: :dropdown, mode: :value, event: "cds-dropdown-selected"},
        %{name: :combo_box, mode: :value, event: "cds-combo-box-selected"},
        %{name: :multi_select, mode: :value, event: "cds-multi-select-selected"},
        %{name: :date_picker, mode: :value, event: "cds-date-picker-changed"},
        %{name: :time_picker, mode: :value, event: "change"},
        %{name: :slider, mode: :value, event: "cds-slider-changed"}
      ]
    end

    @item_component_configs %{
      select: %{
        item_component: :select_item,
        slot_attrs: [label: :string, value: :string, selected: :boolean, disabled: :boolean],
        component_attrs: [label: :string, value: :string, selected: :boolean, disabled: :boolean]
      },
      fluid_select: %{
        item_component: :select_item,
        slot_attrs: [label: :string, value: :string, selected: :boolean, disabled: :boolean],
        component_attrs: [label: :string, value: :string, selected: :boolean, disabled: :boolean]
      },
      dropdown: %{
        item_component: :dropdown_item,
        slot_attrs: [label: :string, value: :string, disabled: :boolean],
        component_attrs: [value: :string, disabled: :boolean]
      },
      combo_box: %{
        item_component: :combo_box_item,
        slot_attrs: [label: :string, value: :string, disabled: :boolean],
        component_attrs: [value: :string, disabled: :boolean]
      },
      multi_select: %{
        item_component: :multi_select_item,
        slot_attrs: [label: :string, value: :string, disabled: :boolean],
        component_attrs: [value: :string, disabled: :boolean]
      }
    }

    defp item_component_config(name) do
      Map.get(@item_component_configs, name)
    end

    defp item_slot_defs(config) do
      attrs =
        config.slot_attrs
        |> Enum.map(fn {name, type} -> "    attr :#{name}, :#{type}\n" end)
        |> Enum.join("")

      "  slot :item do\n" <> attrs <> "  end\n"
    end

    defp item_component_attr_lines(config) do
      config.component_attrs
      |> Enum.map(fn
        {:value, _} -> "          value={item[:value] || item[:label]}\n"
        {:label, _} -> "          label={item[:label]}\n"
        {:selected, _} -> "          selected={item[:selected]}\n"
        {:disabled, _} -> "          disabled={item[:disabled]}\n"
        {name, _} -> "          #{name}={item[:#{name}]}\n"
      end)
      |> Enum.join("")
    end

    defp render_slot_uses(component) do
      component.slots
      |> Enum.reject(&(slot_atom(&1) in [:item, :inner_block]))
      |> Enum.map(fn slot ->
        slot_name = slot_assigns_key(slot)
        htmlname = slot_htmlname(slot)

        [
          "      <.dynamic_tag",
          "        :for={s <- assigns[:#{slot_name}]}",
          "        tag_name={Map.get(s, :tag, \"div\")}",
          "        slot=\"#{htmlname}\"",
          "      >",
          "        {render_slot(s)}",
          "      </.dynamic_tag>"
        ]
        |> Enum.join("\n")
      end)
      |> case do
        [] -> ""
        slots -> Enum.join(slots, "\n") <> "\n"
      end
    end

    defp slot_assigns_key(slot) do
      slot_atom(slot)
      |> Atom.to_string()
    end

    defp slot_atom(%{atomname: atomname}) when is_binary(atomname) do
      Code.string_to_quoted!(atomname)
    end

    defp slot_atom(%{name: name}) when is_atom(name), do: name

    defp slot_atom(%{name: name}) when is_binary(name) do
      name
      |> Graphene.CodeGen.Util.kebab2snake()
      |> String.to_atom()
    end

    defp slot_htmlname(%{htmlname: htmlname}) when is_binary(htmlname), do: htmlname

    defp slot_htmlname(%{name: name}) when is_binary(name), do: name

    defp slot_htmlname(%{name: name}) when is_atom(name) do
      name
      |> Atom.to_string()
      |> Graphene.CodeGen.Util.snake2kebab()
    end

    defp form_tag(component) do
      component.htmltag <> "-form"
    end

    defp attr_atom(attr) do
      Code.string_to_quoted!(attr.atomname)
    end

    defp component_attr_bindings(component) do
      Enum.map(component.attrs, fn attr -> {attr.htmlname, attr_atom(attr)} end)
    end

    defp form_component_attr_bindings(component) do
      bindings = component_attr_bindings(component)
      names = MapSet.new(Enum.map(bindings, fn {name, _} -> name end))

      bindings =
        if MapSet.member?(names, "form"), do: bindings, else: bindings ++ [{"form", :form}]

      bindings =
        if MapSet.member?(names, "id"), do: bindings, else: bindings ++ [{"id", :id}]

      bindings =
        if MapSet.member?(names, "name") do
          bindings
        else
          bindings ++ [{"name", :name}]
        end

      if MapSet.member?(names, "form-event") do
        bindings
      else
        bindings ++ [{"form-event", :form_event}]
      end
    end

    defp render_item_body(name, opts, config, component) do
      item_attrs = item_component_attr_lines(config)
      item_component = config.item_component
      slot_uses = render_slot_uses(component)
      tag = form_tag(component)
      bindings = form_component_attr_bindings(component)

      "  def #{name}(assigns) do\n" <>
        "    assigns = form_input_assigns(assigns, #{opts})\n" <>
        "    component_attrs =\n" <>
        "      Graphene.CodeGen.ComponentAttrs.build_html_attrs(assigns, #{inspect(bindings)})\n" <>
        "    assigns = assign(assigns, :component_attrs, component_attrs)\n" <>
        "    ~H\"\"\"\n" <>
        "    <#{tag} {@component_attrs} {@rest}>\n" <>
        "      {render_slot(@inner_block)}\n" <>
        slot_uses <>
        "      <%= for item <- @item do %>\n" <>
        "        <CoreComponents.#{item_component}\n" <>
        item_attrs <>
        "        >\n" <>
        "          {item[:label] || render_slot(item)}\n" <>
        "        </CoreComponents.#{item_component}>\n" <>
        "      <% end %>\n" <>
        "    </#{tag}>\n" <>
        "    \"\"\"\n" <>
        "  end\n\n"
    end

    defp ensure_inner_block(slots, component) do
      has_inner_block = Enum.any?(component.slots, fn slot -> slot_atom(slot) == :inner_block end)

      if has_inner_block do
        slots
      else
        slots <> "  slot :inner_block\n"
      end
    end

    defp render_template(path, assigns) do
      EEx.eval_file(path, assigns: assigns)
    end

    defp compile_generated!(path, mod) do
      content = File.read!(path)
      module_decl = "defmodule #{mod} do"
      check_module = "#{mod}.GeneratedCheck"

      content =
        if String.contains?(content, module_decl) do
          String.replace(content, module_decl, "defmodule #{check_module} do", global: false)
        else
          raise "Expected #{module_decl} in generated output"
        end

      Code.compile_string(content, path)
      :ok
    end

    defp opt_string([]), do: nil

    defp opt_string(opts) do
      opts
      |> Enum.map(fn {k, v} ->
        value = inspect(v, pretty: true, limit: :infinity)
        "#{k}: #{value}"
      end)
      |> Enum.join(", ")
    end

    defp atom_name(atom) do
      name = Atom.to_string(atom)

      if Regex.match?(~r/^[a-z_][a-zA-Z0-9_]*$/, name) do
        ":#{name}"
      else
        ":\"#{name}\""
      end
    end

    defp build_attr(attr) do
      cond do
        match?(%Graphene.CodeGen.Component.Attr{}, attr) ->
          Graphene.CodeGen.Component.Attr.display_def(attr) <> "\n"

        true ->
      opts =
        []
        |> maybe_add_opt(:default, Keyword.get(attr.opts, :default))
        |> maybe_add_opt(:values, Keyword.get(attr.opts, :values))
        |> maybe_add_opt(:required, attr.required)
        |> maybe_add_opt(:doc, attr.doc)

      opt_str = opt_string(opts)
      name = atom_name(attr.name)

      if opt_str do
        "  attr #{name}, :#{attr.type}, #{opt_str}\n"
      else
        "  attr #{name}, :#{attr.type}\n"
      end
      end
    end

    defp build_slot(slot) do
      if match?(%Graphene.CodeGen.Component.Slot{}, slot) do
        Graphene.CodeGen.Component.Slot.display_def(slot) <> "\n"
      else
      slot_opts =
        []
        |> maybe_add_opt(:required, slot.required)
        |> maybe_add_opt(:doc, slot.doc)

      slot_opt_str = opt_string(slot_opts)
      name = atom_name(slot.name)

      header =
        if slot_opt_str do
          "  slot #{name}, #{slot_opt_str}"
        else
          "  slot #{name}"
        end

      if slot.attrs == [] do
        header <> "\n"
      else
        attrs =
          slot.attrs
          |> Enum.map(fn attr ->
            opts =
              []
              |> maybe_add_opt(:values, Keyword.get(attr.opts, :values))
              |> maybe_add_opt(:required, attr.required)
              |> maybe_add_opt(:doc, attr.doc)

            opt_str = opt_string(opts)
            attr_name = atom_name(attr.name)

            if opt_str do
              "    attr #{attr_name}, :#{attr.type}, #{opt_str}\n"
            else
              "    attr #{attr_name}, :#{attr.type}\n"
            end
          end)
          |> Enum.join("")

        header <> " do\n" <> attrs <> "  end\n"
      end
      end
    end

    defp build_extra_attrs(component) do
      names = MapSet.new(Enum.map(component.attrs, &attr_key/1))
      extras = []

      extras =
        if MapSet.member?(names, :field) do
          extras
        else
          extras ++
            [
              "  attr :field, Phoenix.HTML.FormField,\n" <>
                "    doc: \"a form field struct, for example: @form[:email]\"\n"
            ]
        end

      extras =
        if MapSet.member?(names, :form) do
          extras
        else
          extras ++
            [
              "  attr :form, :string,\n" <>
                "    default: nil,\n" <>
                "    doc: \"the form attribute for the form-associated element\"\n"
            ]
        end

      extras =
        if MapSet.member?(names, :form_event) do
          extras
        else
          extras ++
            [
              "  attr :form_event, :string,\n" <>
                "    default: nil,\n" <>
                "    doc: \"override the custom event used to sync form values (passed as `form-event`)\"\n"
            ]
        end

      if MapSet.member?(names, :events) do
        extras
      else
        extras ++
          [
            "  attr :events, :any,\n" <>
              "    default: nil,\n" <>
              "    doc: \"custom events passed to Graphene.JS.events/1\"\n"
          ]
      end
    end

    defp attr_key(%{atomname: atomname}) when is_binary(atomname) do
      Code.string_to_quoted!(atomname)
    end

    defp attr_key(%{name: name}) when is_atom(name), do: name

    defp attr_key(%{name: name}) when is_binary(name) do
      name
      |> Graphene.CodeGen.Util.camel2snake()
      |> String.to_atom()
    end

    defp maybe_add_opt(opts, _key, nil), do: opts
    defp maybe_add_opt(opts, _key, false), do: opts
    defp maybe_add_opt(opts, _key, []), do: opts
    defp maybe_add_opt(opts, key, value), do: Keyword.put(opts, key, value)

    defp indent_doc(doc) do
      doc
      |> String.split("\n")
      |> Enum.map(&"  #{&1}")
      |> Enum.join("\n")
    end

    defp render_doc(name, doc) do
      if is_binary(doc) do
        "  @doc \"\"\"\n" <> indent_doc(doc) <> "\n\n  Form-aware wrapper.\n  \"\"\"\n"
      else
        "  @doc \"\"\"\n  Form-aware wrapper for Graphene.Internal.CoreComponents.#{name}/1.\n  \"\"\"\n"
      end
    end

    defp render_form_component(name, component, doc, spec) do
      doc_str = render_doc(name, doc)

      attrs =
        component.attrs
        |> Enum.map(&build_attr/1)
        |> Enum.join("")

      extras = build_extra_attrs(component) |> Enum.join("")

      slots =
        component.slots
        |> Enum.map(&build_slot/1)
        |> Enum.join("")

      opts =
        spec
        |> Enum.reject(fn {_, value} -> is_nil(value) end)
        |> Enum.map(fn {key, value} -> "#{key}: #{inspect(value)}" end)
        |> Enum.join(", ")

      {slots, body} =
        case item_component_config(name) do
          nil ->
            slots = ensure_inner_block(slots, component)
            tag = form_tag(component)
            bindings = form_component_attr_bindings(component)
            slot_uses = render_slot_uses(component)

            body =
              "  def #{name}(assigns) do\n" <>
                "    assigns = form_input_assigns(assigns, #{opts})\n" <>
                "    component_attrs =\n" <>
                "      Graphene.CodeGen.ComponentAttrs.build_html_attrs(assigns, #{inspect(bindings)})\n" <>
                "    assigns = assign(assigns, :component_attrs, component_attrs)\n" <>
                "    ~H\"\"\"\n" <>
                "    <#{tag} {@component_attrs} {@rest}>\n" <>
                "      {render_slot(@inner_block)}\n" <>
                slot_uses <>
                "    </#{tag}>\n" <>
                "    \"\"\"\n" <>
                "  end\n\n"

            {slots, body}

          config ->
            slots = slots <> item_slot_defs(config)
            slots = ensure_inner_block(slots, component)
            {slots, render_item_body(name, opts, config, component)}
        end

      doc_str <> extras <> attrs <> slots <> body
    end

    defp render_wrappers do
      docs = docs_map()
      components = components()

      form_component_specs()
      |> Enum.map(fn spec ->
        name = spec.name
        component = Map.get(components, name)

        if component do
          render_form_component(name, component, Map.get(docs, name), spec)
        else
          nil
        end
      end)
      |> Enum.reject(&is_nil/1)
      |> Enum.join("\n")
    end

    @impl true
    def run(_args \\ []) do
      Logger.debug("Running #{__MODULE__}")

      wrappers = render_wrappers()
      helpers = File.read!(helpers_template(:src))

      assigns = [module: module_name(), wrappers: wrappers, helpers: helpers]

      tmp_dir =
        Path.join(System.tmp_dir!(), "graphene-form-#{System.unique_integer([:positive])}")

      File.mkdir_p!(tmp_dir)
      tmp_out = Path.join(tmp_dir, "form_components.ex")

      File.write!(tmp_out, render_template(template(:src), assigns))

      Mix.Task.reenable("format")
      Mix.Task.run("format", [tmp_out])

      compile_generated!(tmp_out, module_name())

      File.mkdir_p!(Path.dirname(template(:dst)))
      File.cp!(tmp_out, template(:dst))

      Logger.debug("Added #{length(form_component_specs())} form components")
    end
  end
end
