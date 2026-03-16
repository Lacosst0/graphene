defmodule Graphene.CodeGen.Component do
  @enforce_keys [:htmltag, :componentname]
  defstruct [
    :htmltag,
    :componentname,
    source: nil,
    docs: "Undocumented",
    attrs: [],
    slots: [],
    import: nil
  ]

  alias Graphene.CodeGen.Component.Slot
  alias Graphene.CodeGen.Component.Attr

  defp extract_docs(%{"name" => name} = meta) do
    template = """
    Component `<<%= @name %>>` from `<%= @path %>`

    <%= @description %>
    <%= if length(@events) > 0 do %>
    ## Events
    <%= for event <- @events do %>
    * `<%= event["name"] %>` - <%= Map.get(event, "description", "Undocumented") %><% end %><% end %>
    """

    EEx.eval_string(
      template,
      assigns: [
        name: name,
        path: meta["path"],
        description: Map.get(meta, "description", "Undocumented"),
        events: Map.get(meta, "events", [])
      ]
    )
  end

  defp extract_slots(meta) do
    Map.get(meta, "slots", [])
    |> Enum.map(&Slot.parse/1)
    |> Enum.reject(&is_nil/1)
    |> Enum.sort(fn a, b -> a.name < b.name end)
  end

  defp extract_attrs(meta, opts) do
    attributes =
      Map.get(meta, "attributes", [])
      |> Enum.map(&Attr.parse(&1, opts))

    known = Enum.map(attributes, & &1.htmlname)

    properties =
      Map.get(meta, "properties", [])
      |> Stream.filter(&Map.has_key?(&1, "attribute"))
      |> Stream.reject(&Enum.member?(known, &1["attribute"]))
      |> Enum.map(&Attr.parse(&1, opts))

    (attributes ++ properties)
    |> Stream.reject(&String.starts_with?(&1.atomname, ":aria_"))
    |> Enum.sort(fn a, b -> a.name < b.name end)
  end

  defp extract_source(%{"path" => path}), do: path

  defp extract_tag(%{"name" => name}), do: name

  defp extract_component_name(%{"name" => name}, prefix) do
    String.replace_prefix(name, prefix, "")
    |> String.replace("-", "_")
    |> String.downcase()
  end

  def parse(meta, prefix \\ "", opts \\ []) do
    struct(
      __MODULE__,
      source: extract_source(meta),
      htmltag: extract_tag(meta),
      componentname: extract_component_name(meta, prefix),
      docs: extract_docs(meta),
      attrs: extract_attrs(meta, opts),
      slots: extract_slots(meta)
    )
  end

  def display(component, opts \\ []) do
    prelude = rest_class_prelude(component)
    prelude = prelude <> "    assigns = apply_events(assigns)\n"

    template = ~S'''
    @doc """
    <%= @component.docs %>
    """
    <%= for attr <- @component.attrs do %>
    <%= Graphene.CodeGen.Component.Attr.display_def attr %><% end %>
    <%= unless Enum.any?(@component.attrs, &(&1.name == "events")) do %>
    attr :events, :any, default: nil, doc: "custom events passed to Graphene.JS.events/1"
    <% end %>
    attr :rest, :global
    <%= for slot <- @component.slots do %>
    <%= Graphene.CodeGen.Component.Slot.display_def slot %><% end %>
    slot :inner_block
    def <%= @component.componentname %>(assigns) do
    <%= @prelude %>
        ~H"""
        <<%= @component.htmltag %><%= for attr <- @component.attrs do %>
         <%= Graphene.CodeGen.Component.Attr.display_use attr, trim: true %><% end %>
         {@rest}>
         <%%= render_slot(@inner_block) %><%= for slot <- @component.slots do %>
         <%= Graphene.CodeGen.Component.Slot.display_use(slot, trim: true)
             |> String.replace("\n", "\n       ")
             |> String.trim() %><% end %>
        </<%= @component.htmltag %>>
        """
    end
    '''

    EEx.eval_string(template, [assigns: [component: component, prelude: prelude]], opts)
  end

  defp rest_class_prelude(%{htmltag: "cds-header"}) do
    "    assigns = merge_rest_class(assigns, \"cds--header\")\n"
  end

  defp rest_class_prelude(%{htmltag: "cds-side-nav"}) do
    "    assigns =\n" <>
      "      assigns\n" <>
      "      |> merge_rest_class(\"cds--side-nav\")\n" <>
      "      |> merge_rest_class_if(assigns[:expanded], \"cds--side-nav--expanded\")\n"
  end

  defp rest_class_prelude(%{htmltag: "cds-grid"}) do
    ~S"""
        assigns =
          case assigns[:row_gap] do
            nil -> assigns
            "gutter" ->
              assign(assigns, :graphene_grid_row_gap, "var(--cds-grid-gutter)")
            row_gap ->
              assign(assigns, :graphene_grid_row_gap, "var(--cds-spacing-#{row_gap})")
          end

        assigns =
          if assigns[:graphene_grid_row_gap] do
            rest = Map.get(assigns, :rest, %{})
            style =
              case Map.get(rest, :style) do
                nil -> ""
                "" -> ""
                existing ->
                  existing = to_string(existing) |> String.trim()
                  if String.ends_with?(existing, ";"), do: existing <> " ", else: existing <> "; "
              end

            style = style <> "--graphene-grid-row-gap: #{assigns.graphene_grid_row_gap};"
            rest = Map.put(rest, :style, style)

            assigns
            |> assign(:row_gap, nil)
            |> assign(:rest, rest)
          else
            assigns
          end
    """
  end

  defp rest_class_prelude(_component), do: ""

  defp index_js(source) do
    (source |> Path.dirname()) <> "/index.js"
  end

  def display_js_map_entry(component, opts \\ []) do
    import_base = Keyword.get(opts, :import_base, "@carbon/web-components/es")
    template = ~S|'<%= @tag %>': () => import("<%= @import %>"),|

    import =
      (component.import || index_js(component.source))
      |> String.replace("./src", import_base)

    EEx.eval_string(template, [assigns: [tag: component.htmltag, import: import]], opts)
  end
end
