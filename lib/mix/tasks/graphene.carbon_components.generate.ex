if Mix.env() == :dev do
  defmodule Mix.Tasks.Graphene.CarbonComponents.Generate do
    use Mix.Task
    require Logger
    alias Graphene.CarbonComponents.Custom.ComponentRecipes.{AttrSpec, SlotAttrSpec, SlotSpec}

    defp template(:src) do
      Path.join(["assets", "eex", "graphene_carbon_components.ex"])
    end

    defp template(:dst) do
      Path.join(["lib", "graphene", "carbon_components.ex"])
    end

    defp template(:group_src) do
      Path.join(["assets", "eex", "graphene_carbon_components_group.ex"])
    end

    defp template(:group_dst, group) do
      Path.join(["lib", "graphene", "carbon_components", "#{group}.ex"])
    end

    defp module_name do
      "Graphene.CarbonComponents"
    end

    defp components_list do
      Graphene.CodeGen.Metadata.components()
    end

    defp components_map(components) do
      Map.new(components, fn component ->
        {String.to_atom(component.componentname), component}
      end)
    end

    defp carbon_component_overrides do
      Graphene.CarbonComponents.Custom.ComponentRecipes.overrides()
    end

    defp carbon_component_recipes do
      Graphene.CarbonComponents.Custom.ComponentRecipes.recipes()
    end

    defp form_delegate_names do
      if Code.ensure_loaded?(Graphene.Internal.FormComponents) do
        core_names =
          components_list()
          |> components_map()
          |> Map.keys()
          |> MapSet.new()

        Graphene.Internal.FormComponents.__info__(:functions)
        |> Enum.filter(fn {_name, arity} -> arity == 1 end)
        |> Enum.map(&elem(&1, 0))
        |> MapSet.new()
        |> MapSet.intersection(core_names)
      else
        MapSet.new()
      end
    end

    defp docs_map(components) do
      for component <- components, into: %{} do
        {String.to_atom(component.componentname), component.docs}
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

    defp atom_name(atom) when is_atom(atom) do
      atom |> Atom.to_string() |> atom_name()
    end

    defp atom_name(name) when is_binary(name) do
      if Regex.match?(~r/^[a-z_][a-zA-Z0-9_]*$/, name) do
        ":#{name}"
      else
        ":\"#{name}\""
      end
    end

    defp build_attr(attr) do
      opts =
        []
        |> maybe_add_opt(:default, Keyword.get(attr.opts, :default))
        |> maybe_add_opt(:values, Keyword.get(attr.opts, :values))
        |> maybe_add_opt(:required, Map.get(attr, :required, false))
        |> maybe_add_opt(:doc, Keyword.get(attr.opts, :doc))

      opt_str = opt_string(opts)
      name = attr.atomname

      if opt_str do
        "  attr #{name}, :#{attr.type}, #{opt_str}\n"
      else
        "  attr #{name}, :#{attr.type}\n"
      end
    end

    defp build_slot(slot) do
      slot_opts =
        []
        |> maybe_add_opt(:required, Map.get(slot, :required, false))
        |> maybe_add_opt(:doc, Keyword.get(slot.opts, :doc))

      slot_opt_str = opt_string(slot_opts)
      name = slot.atomname

      header =
        if slot_opt_str do
          "  slot #{name}, #{slot_opt_str}"
        else
          "  slot #{name}"
        end

      slot_attrs = Map.get(slot, :attrs, [])

      if slot_attrs == [] do
        header <> "\n"
      else
        attrs =
          slot_attrs
          |> Enum.map(fn attr ->
            opts =
              []
              |> maybe_add_opt(:values, Keyword.get(attr.opts, :values))
              |> maybe_add_opt(:required, Map.get(attr, :required, false))
              |> maybe_add_opt(:doc, Keyword.get(attr.opts, :doc))

            opt_str = opt_string(opts)
            attr_name = attr.atomname

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

    defp build_extra_attrs(extra_attrs) when is_list(extra_attrs) do
      extra_attrs
      |> Enum.map(&build_recipe_attr/1)
      |> Enum.join("")
    end

    defp build_extra_attrs(_extra_attrs), do: ""

    defp build_recipe_attr(%AttrSpec{name: name, type: type, opts: opts}) do
      build_manual_attr(name, type, opts || [])
    end

    defp build_extra_slots(extra_slots) when is_list(extra_slots) do
      extra_slots
      |> Enum.map(&build_recipe_slot/1)
      |> Enum.join("")
    end

    defp build_extra_slots(_extra_slots), do: ""

    defp build_recipe_slot(%SlotSpec{name: name, opts: opts, attrs: attrs}) do
      slot_opts =
        []
        |> maybe_add_opt(:required, Keyword.get(opts || [], :required, false))
        |> maybe_add_opt(:doc, Keyword.get(opts || [], :doc))

      slot_opt_str = opt_string(slot_opts)
      name = atom_name(name)

      header =
        if slot_opt_str do
          "  slot #{name}, #{slot_opt_str}"
        else
          "  slot #{name}"
        end

      if attrs == [] do
        header <> "\n"
      else
        attrs =
          attrs
          |> Enum.map(&build_recipe_slot_attr/1)
          |> Enum.join("")

        header <> " do\n" <> attrs <> "  end\n"
      end
    end

    defp build_recipe_slot_attr(%SlotAttrSpec{name: name, type: type, opts: opts}) do
      opts =
        []
        |> maybe_add_opt(:values, Keyword.get(opts || [], :values))
        |> maybe_add_opt(:required, Keyword.get(opts || [], :required, false))
        |> maybe_add_opt(:doc, Keyword.get(opts || [], :doc))

      opt_str = opt_string(opts)
      attr_name = atom_name(name)

      type =
        case type do
          atom when is_atom(atom) -> ":#{atom}"
          other -> to_string(other)
        end

      if opt_str do
        "    attr #{attr_name}, #{type}, #{opt_str}\n"
      else
        "    attr #{attr_name}, #{type}\n"
      end
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

    defp render_component(name, component, doc, recipe, form_delegates) do
      if recipe do
        render_recipe_component(name, component, doc, recipe)
      else
        delegate =
          if MapSet.member?(form_delegates, name) do
            :form
          else
            :core
          end

        render_simple_component(name, component, doc, delegate)
      end
    end

    defp render_simple_component(name, component, doc, delegate) do
      doc_str =
        if is_binary(doc) do
          "  @doc \"\"\"\n" <> indent_doc(doc) <> "\n  \"\"\"\n"
        else
          "  @doc \"See base component.\"\n"
        end

      attrs =
        component.attrs
        |> Enum.map(&build_attr/1)
        |> Enum.join("")
        |> Kernel.<>(events_attr(component))
        |> Kernel.<>(form_delegate_attrs(component, delegate))
        |> Kernel.<>(rest_attr())

      slots =
        component.slots
        |> Enum.map(&build_slot/1)
        |> Enum.join("")
        |> Kernel.<>(inner_block_slot(component.slots))

      delegate_call =
        case delegate do
          :form -> "    FormComponents.#{name}(assigns)\n"
          _ -> "    CoreComponents.#{name}(assigns)\n"
        end

      doc_str <>
        attrs <>
        slots <>
        "  def #{name}(assigns) do\n" <>
        delegate_call <>
        "  end\n\n"
    end

    defp render_recipe_component(name, component, doc, recipe) do
      doc_str =
        if is_binary(doc) do
          "  @doc \"\"\"\n" <> indent_doc(doc) <> "\n  \"\"\"\n"
        else
          "  @doc \"See base component.\"\n"
        end

      delegate = Map.get(recipe, :delegate) || :core
      delegate_to = Map.get(recipe, :delegate_to) || name

      extra_attrs = Map.get(recipe, :extra_attrs, [])
      extra_slots = Map.get(recipe, :extra_slots, [])

      attrs =
        component.attrs
        |> Enum.map(&build_attr/1)
        |> Enum.join("")
        |> Kernel.<>(events_attr(component))
        |> Kernel.<>(form_delegate_attrs(component, delegate))
        |> Kernel.<>(build_extra_attrs(extra_attrs))
        |> Kernel.<>(rest_attr(extra_attrs))

      slots =
        component.slots
        |> Enum.map(&build_slot/1)
        |> Enum.join("")
        |> Kernel.<>(build_extra_slots(extra_slots))
        |> Kernel.<>(inner_block_slot(component.slots, extra_slots))

      patterns = Map.get(recipe, :patterns, [])
      attrs_prelude = auto_attrs_prelude(Map.get(recipe, :auto_attrs), component)

      prelude =
        assign_defaults_prelude(component.attrs)
        |> merge_prelude(Map.get(recipe, :prelude))
        |> merge_prelude(attrs_prelude)

      body = Map.get(recipe, :body, "")

      clauses =
        patterns
        |> Enum.map(fn pattern -> render_recipe_clause(name, pattern, prelude, body) end)
        |> Enum.join("\n")

      fallback = render_recipe_fallback(name, delegate, delegate_to)

      doc_str <> attrs <> slots <> clauses <> fallback
    end

    defp assign_defaults_prelude(attrs) do
      attrs =
        Enum.filter(attrs, fn attr ->
          default = Keyword.get(attr.opts, :default, :__missing__)
          required = Map.get(attr, :required, false)
          not required and default in [nil, false]
        end)

      case attrs do
        [] ->
          nil

        _ ->
          assigns =
            attrs
            |> Enum.map(fn attr ->
              name = attr.atomname

              default =
                cond do
                  name == ":rest" -> "%{}"
                  Keyword.get(attr.opts, :default, :__missing__) == false -> "false"
                  true -> "nil"
                end

              "      |> assign_new(#{name}, fn -> #{default} end)\n"
            end)
            |> Enum.join("")

          "    assigns =\n      assigns\n" <> assigns <> "\n"
      end
    end

    defp auto_attrs_prelude(nil, _component), do: nil

    defp auto_attrs_prelude(:component, component) do
      keys = component_attr_keys(component)

      "    component_attrs =\n" <>
        "      Graphene.CodeGen.ComponentAttrs.build_component_attrs(assigns, #{inspect(keys)})\n" <>
        "    assigns = assign(assigns, :component_attrs, component_attrs)\n"
    end

    defp auto_attrs_prelude(:html, component) do
      bindings = component_attr_bindings(component)

      "    component_attrs =\n" <>
        "      Graphene.CodeGen.ComponentAttrs.build_html_attrs(assigns, #{inspect(bindings)})\n" <>
        "    assigns = assign(assigns, :component_attrs, component_attrs)\n"
    end

    defp auto_attrs_prelude(:form, component) do
      keys = component_attr_keys(component) ++ [:field, :form, :form_event]

      "    component_attrs =\n" <>
        "      Graphene.CodeGen.ComponentAttrs.build_component_attrs(assigns, #{inspect(keys)})\n" <>
        "    assigns = assign(assigns, :component_attrs, component_attrs)\n"
    end

    defp auto_attrs_prelude(_mode, _component), do: nil

    defp component_attr_keys(component) do
      Enum.map(component.attrs, &attr_atom/1)
    end

    defp component_attr_bindings(component) do
      Enum.map(component.attrs, fn attr -> {attr.htmlname, attr_atom(attr)} end)
    end

    defp attr_atom(attr) do
      Code.string_to_quoted!(attr.atomname)
    end

    defp merge_prelude(nil, nil), do: nil
    defp merge_prelude(prelude, nil), do: prelude
    defp merge_prelude(nil, prelude), do: prelude
    defp merge_prelude(prelude, extra), do: prelude <> "\n" <> extra

    defp inner_block_slot(slots, extra_slots \\ []) do
      has_inner_block =
        Enum.any?(slots, fn slot ->
          slot.atomname == ":inner_block" or slot.htmlname == "inner-block" or
            slot.name == "inner_block"
        end) or extra_slot_inner_block?(extra_slots)

      if has_inner_block do
        ""
      else
        "  slot :inner_block\n"
      end
    end

    defp extra_slot_inner_block?(extra_slots) when is_list(extra_slots) do
      Enum.any?(extra_slots, fn
        %SlotSpec{name: :inner_block} -> true
        %SlotSpec{name: :"inner-block"} -> true
        %SlotSpec{name: "inner_block"} -> true
        _ -> false
      end)
    end

    defp extra_slot_inner_block?(extra_slots) when is_binary(extra_slots) do
      String.contains?(extra_slots, "slot :inner_block")
    end

    defp extra_slot_inner_block?(_extra_slots), do: false

    defp rest_attr(extra_attrs \\ [])

    defp rest_attr(extra_attrs) when is_list(extra_attrs) do
      if Enum.any?(extra_attrs, fn
           %AttrSpec{name: :rest} -> true
           %AttrSpec{name: "rest"} -> true
           _ -> false
         end) do
        ""
      else
        "  attr :rest, :global\n"
      end
    end

    defp rest_attr(extra_attrs) when is_binary(extra_attrs) do
      if String.contains?(extra_attrs, "attr :rest") do
        ""
      else
        "  attr :rest, :global\n"
      end
    end

    defp rest_attr(_extra_attrs), do: "  attr :rest, :global\n"

    defp events_attr(component) do
      existing = MapSet.new(Enum.map(component.attrs, & &1.name))

      if MapSet.member?(existing, :events) or MapSet.member?(existing, "events") do
        ""
      else
        build_manual_attr(:events, :any,
          default: nil,
          doc: "custom events passed to Graphene.JS.events/1"
        )
      end
    end

    defp render_recipe_clause(name, pattern, prelude, body) do
      {pattern, guard} = split_pattern(pattern)

      head =
        if guard do
          "  def #{name}(#{pattern} = assigns) when #{guard} do\n"
        else
          "  def #{name}(#{pattern} = assigns) do\n"
        end

      prelude = ensure_trailing_newline(prelude)

      head <>
        prelude <>
        "    ~H\"\"\"\n" <>
        body <>
        "    \"\"\"\n" <>
        "  end\n"
    end

    defp render_recipe_fallback(name, delegate, delegate_to) do
      call =
        case delegate do
          :form -> "    FormComponents.#{delegate_to}(assigns)\n"
          _ -> "    CoreComponents.#{delegate_to}(assigns)\n"
        end

      "  def #{name}(assigns) do\n" <> call <> "  end\n\n"
    end

    defp split_pattern(pattern) do
      case String.split(pattern, " when ", parts: 2) do
        [head, guard] -> {head, guard}
        [head] -> {head, nil}
      end
    end

    defp form_delegate_attrs(component, :form) do
      existing = MapSet.new(Enum.map(component.attrs, & &1.name))

      [
        {:field, "Phoenix.HTML.FormField",
         [doc: "a form field struct, for example: @form[:email]"]},
        {:form, :string, [default: nil, doc: "the form attribute for the form-associated element"]},
        {:form_event, :string,
         [
           default: nil,
           doc: "override the custom event used to sync form values (passed as `form-event`)"
         ]}
      ]
      |> Enum.reject(fn {name, _type, _opts} -> MapSet.member?(existing, name) end)
      |> Enum.map(fn {name, type, opts} -> build_manual_attr(name, type, opts) end)
      |> Enum.join("")
    end

    defp form_delegate_attrs(_component, _delegate), do: ""

    defp build_manual_attr(name, type, opts) do
      opt_str = opt_string(opts)
      name = atom_name(name)

      type =
        case type do
          atom when is_atom(atom) -> ":#{atom}"
          other -> to_string(other)
        end

      if opt_str do
        "  attr #{name}, #{type}, #{opt_str}\n"
      else
        "  attr #{name}, #{type}\n"
      end
    end

    defp ensure_trailing_newline(nil), do: ""

    defp ensure_trailing_newline(content) when is_binary(content) do
      if String.ends_with?(content, "\n"), do: content, else: content <> "\n"
    end

    defp custom_component_exports do
      Graphene.CarbonComponents.Custom.Exports.import_list()
    end

    defp custom_component_delegates do
      Graphene.CarbonComponents.Custom.Exports.exports()
      |> Enum.map(fn %{name: name, module: mod} ->
        "  defdelegate #{name}(assigns), to: #{inspect(mod)}\n"
      end)
      |> Enum.join("")
    end

    defp prefix_counts(names) do
      Enum.reduce(names, %{}, fn name, acc ->
        tokens = Atom.to_string(name) |> String.split("_")

        tokens
        |> Enum.with_index(1)
        |> Enum.reduce(acc, fn {_token, idx}, acc ->
          prefix = tokens |> Enum.take(idx) |> Enum.join("_")
          Map.update(acc, prefix, 1, &(&1 + 1))
        end)
      end)
    end

    defp group_prefix(name, counts) do
      tokens = Atom.to_string(name) |> String.split("_")

      prefixes =
        tokens
        |> Enum.with_index(1)
        |> Enum.map(fn {_token, idx} -> tokens |> Enum.take(idx) |> Enum.join("_") end)

      case Enum.filter(prefixes, fn prefix -> Map.get(counts, prefix, 0) >= 2 end) do
        [] -> Atom.to_string(name)
        matches -> List.last(matches)
      end
    end

    defp group_prefix_map(names) do
      counts = prefix_counts(names)

      Enum.reduce(names, %{}, fn name, acc ->
        Map.put(acc, name, group_prefix(name, counts))
      end)
    end

    defp group_module_name(prefix) do
      "Graphene.CarbonComponents." <> Macro.camelize(prefix)
    end

    defp render_wrappers(names, components, docs, recipes, form_delegates) do
      names
      |> Enum.sort()
      |> Enum.map(fn name ->
        component = Map.fetch!(components, name)
        doc = Map.get(docs, name)
        recipe = Map.get(recipes, name)
        render_component(name, component, doc, recipe, form_delegates)
      end)
      |> Enum.join("\n")
    end

    defp render_delegates(names, group_map) do
      names
      |> Enum.sort()
      |> Enum.map(fn name ->
        module = group_module_name(Map.fetch!(group_map, name))

        "  @doc false\n" <>
          "  defdelegate #{name}(assigns), to: #{module}\n"
      end)
      |> Enum.join("\n")
    end

    defp render_imports(groups) do
      groups
      |> Enum.sort()
      |> Enum.map(fn group ->
        "      import #{group_module_name(group)}"
      end)
      |> Enum.join("\n")
    end

    defp render_aliases(wrappers) do
      aliases =
        []
        |> maybe_add_alias(
          String.contains?(wrappers, "CoreComponents."),
          "  alias Graphene.Internal.CoreComponents"
        )
        |> maybe_add_alias(
          String.contains?(wrappers, "FormComponents."),
          "  alias Graphene.Internal.FormComponents"
        )

      Enum.join(aliases, "\n")
    end

    defp maybe_add_alias(list, true, alias_line), do: list ++ [alias_line]
    defp maybe_add_alias(list, false, _alias_line), do: list

    defp cleanup_generated_groups!(group_paths) do
      manual =
        MapSet.new([
          Path.join(["lib", "graphene", "carbon_components", "data_table_component.ex"]),
          Path.join(["lib", "graphene", "carbon_components", "data_table.ex"]),
          Path.join(["lib", "graphene", "carbon_components", "helpers.ex"])
        ])

      keep = MapSet.union(MapSet.new(group_paths), manual)

      Path.join(["lib", "graphene", "carbon_components", "*.ex"])
      |> Path.wildcard()
      |> Enum.each(fn path ->
        if not MapSet.member?(keep, path) do
          File.rm!(path)
        end
      end)
    end

    @impl true
    def run(_args \\ []) do
      Logger.debug("Running #{__MODULE__}")

      components = components_list()
      components_map = components_map(components)
      docs = docs_map(components)
      recipes = carbon_component_recipes() |> Map.new(&{&1.name, &1})
      overrides = carbon_component_overrides()
      form_delegates = form_delegate_names()

      names =
        components
        |> Enum.map(&String.to_atom(&1.componentname))

      group_map = group_prefix_map(names)

      render_names =
        names
        |> Enum.reject(&MapSet.member?(overrides, &1))

      grouped =
        render_names
        |> Enum.group_by(&Map.fetch!(group_map, &1))

      group_names = Map.keys(grouped)

      delegates = render_delegates(render_names, group_map)
      imports = render_imports(group_names)

      custom_imports =
        "      import Graphene.CarbonComponents, only: #{inspect(custom_component_exports())}"

      custom_delegates = custom_component_delegates()

      tmp_dir =
        Path.join(System.tmp_dir!(), "graphene-carbon-#{System.unique_integer([:positive])}")

      File.mkdir_p!(tmp_dir)

      group_paths =
        group_names
        |> Enum.map(&template(:group_dst, &1))

      cleanup_generated_groups!(group_paths)

      for {group, group_components} <- grouped do
        wrappers =
          render_wrappers(group_components, components_map, docs, recipes, form_delegates)

        wrappers =
          [wrappers]
          |> Enum.reject(&(&1 == ""))
          |> Enum.join("\n")

        aliases = render_aliases(wrappers)

        assigns = [
          module: group_module_name(group),
          wrappers: wrappers,
          aliases: aliases
        ]

        tmp_out = Path.join(tmp_dir, "#{group}.ex")
        File.write!(tmp_out, render_template(template(:group_src), assigns))

        Mix.Task.reenable("format")
        Mix.Task.run("format", [tmp_out])

        compile_generated!(tmp_out, group_module_name(group))

        dst = template(:group_dst, group)
        File.mkdir_p!(Path.dirname(dst))
        File.cp!(tmp_out, dst)
      end

      assigns = [
        module: module_name(),
        delegates: delegates,
        custom_imports: custom_imports,
        imports: imports,
        custom_delegates: custom_delegates
      ]

      tmp_out = Path.join(tmp_dir, "carbon_components.ex")
      File.write!(tmp_out, render_template(template(:src), assigns))

      Mix.Task.reenable("format")
      Mix.Task.run("format", [tmp_out])

      compile_generated!(tmp_out, module_name())

      File.mkdir_p!(Path.dirname(template(:dst)))
      File.cp!(tmp_out, template(:dst))

      Logger.debug("Added #{length(components)} components")
    end
  end
end
