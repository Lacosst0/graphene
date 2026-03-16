defmodule Graphene.CodeGen.ProductComponentPatches do
  @moduledoc """
  Known patches for IBM Products components code generation.
  """

  alias Graphene.CodeGen.Component.Slot
  alias Graphene.CodeGen.Util

  @extra_slots %{
    "c4p-checklist" => [
      %{
        "name" => "header-chart",
        "description" => "Header chart slot for the checklist progress indicator."
      },
      %{
        "name" => "header-title",
        "description" => "Header title slot for the checklist."
      },
      %{
        "name" => "header-chartLabel",
        "htmlname" => "header-chartLabel",
        "description" => "Header chart label slot for the checklist."
      }
    ],
    "c4p-coachmark" => [
      %{"name" => "trigger", "description" => "Trigger element for the coachmark."}
    ],
    "c4p-coachmark-beacon" => [
      %{"name" => "icon", "description" => "Custom icon for the beacon."}
    ],
    "c4p-coachmark-header" => [
      %{"name" => "header", "description" => "Coachmark header content."}
    ],
    "c4p-guide-banner" => [
      %{"name" => "icon", "description" => "Guide banner icon."},
      %{"name" => "header", "description" => "Guide banner header content."},
      %{"name" => "body", "description" => "Guide banner body content."},
      %{"name" => "footer", "description" => "Guide banner footer content."}
    ],
    "c4p-guide-banner-element" => [
      %{"name" => "title", "description" => "Guide banner element title."},
      %{"name" => "description", "description" => "Guide banner element description."}
    ],
    "c4p-interstitial-screen" => [
      %{"name" => "header", "description" => "Interstitial screen header content."},
      %{"name" => "body", "description" => "Interstitial screen body content."},
      %{"name" => "footer", "description" => "Interstitial screen footer content."}
    ],
    "c4p-notification-panel" => [
      %{"name" => "empty-state", "description" => "Empty state content."}
    ],
    "c4p-options-tile" => [
      %{"name" => "summary", "description" => "Summary content for the options tile."},
      %{"name" => "body", "description" => "Body content for the options tile."},
      %{"name" => "toggle", "description" => "Toggle action content for the options tile."}
    ],
    "c4p-page-header-breadcrumb" => [
      %{"name" => "icon", "description" => "Breadcrumb icon slot."},
      %{"name" => "content-actions", "description" => "Content actions slot."},
      %{"name" => "page-actions", "description" => "Page actions slot."}
    ],
    "c4p-page-header-content" => [
      %{"name" => "icon", "description" => "Content icon slot."},
      %{"name" => "contextual-actions", "description" => "Contextual actions slot."},
      %{"name" => "page-actions", "description" => "Page actions slot."}
    ],
    "c4p-page-header-scroller" => [
      %{"name" => "tooltip-content", "description" => "Tooltip content slot."}
    ],
    "c4p-page-header-tabs" => [
      %{"name" => "tags", "description" => "Tags slot for the tab bar."},
      %{"name" => "scroller", "description" => "Scroller slot for the tab bar."}
    ],
    "c4p-side-panel" => [
      %{"name" => "above-title", "description" => "Content above the title."},
      %{"name" => "below-title", "description" => "Content below the title."},
      %{"name" => "slug", "description" => "Slug slot for the side panel header."},
      %{"name" => "subtitle", "description" => "Subtitle slot for the side panel header."},
      %{"name" => "action-toolbar", "description" => "Action toolbar slot."},
      %{"name" => "actions", "description" => "Footer actions slot."}
    ],
    "c4p-tearsheet" => [
      %{"name" => "label", "description" => "Tearsheet label slot."},
      %{"name" => "title", "description" => "Tearsheet title slot."},
      %{"name" => "description", "description" => "Tearsheet description slot."},
      %{"name" => "header-actions", "description" => "Header action buttons slot."},
      %{"name" => "header-navigation", "description" => "Header navigation slot."},
      %{"name" => "decorator", "description" => "Decorator slot."},
      %{"name" => "slug", "description" => "Slug slot."},
      %{"name" => "influencer", "description" => "Influencer content slot."},
      %{"name" => "actions", "description" => "Footer actions slot."}
    ],
    "c4p-user-avatar" => [
      %{"name" => "rendericon", "description" => "Custom icon slot for the avatar."}
    ]
  }

  @manual_components []

  def patch(component) do
    component
    |> add_missing_slots()
    |> drop_default_slot()
    |> resolve_slot_collisions()
  end

  def append_missing_components(components) do
    components ++ @manual_components
  end

  @product_component_recipes [
    %{
      name: :interstitial_screen,
      delegate: :product,
      patterns: ["%{}"],
      auto_attrs: :html,
      prelude: ~S"""
        assigns =
          assigns
          |> assign_new(:events, fn -> nil end)
          |> assign_new(:rest, fn -> %{} end)

        events =
          case assigns[:events] do
            nil ->
              []

            events when is_map(events) ->
              Map.to_list(events)

            events when is_list(events) ->
              if Enum.all?(events, &match?({_, _}, &1)) do
                events
              else
                Enum.map(events, &{&1, []})
              end

            event ->
              [{event, []}]
          end

        assigns =
          if events == [] do
            assigns
          else
            rest = Map.get(assigns, :rest, %{})
            id = Map.get(rest, :id)
            event_attrs = Graphene.JS.events(events: events, id: id)
            assign(assigns, :rest, Map.merge(rest, event_attrs))
          end
      """,
      body: ~S"""
          <c4p-interstitial-screen {@component_attrs} {@rest}>
            {render_slot(@inner_block)}
            <%= for header <- @header do %>
              {render_slot(header)}
            <% end %>
            <%= for body <- @body do %>
              {render_slot(body)}
            <% end %>
            <%= for footer <- @footer do %>
              {render_slot(footer)}
            <% end %>
          </c4p-interstitial-screen>
      """
    },
    %{
      name: :checklist_group,
      delegate: :product,
      patterns: ["%{item: [_ | _]}"],
      auto_attrs: :component,
      extra_slots: ~S"""
        slot :item do
          attr :label, :string
          attr :status, :string
          attr :clickable, :boolean
        end
      """,
      body: ~S"""
          <ProductCoreComponents.checklist_group {@component_attrs} {@rest}>
            <%= for item <- @item do %>
              <ProductCoreComponents.checklist_item
                label={item[:label]}
                status={item[:status]}
                clickable={item[:clickable]}
              >
                <%= if Map.get(item, :inner_block) do %>
                  {render_slot(item)}
                <% end %>
              </ProductCoreComponents.checklist_item>
            <% end %>
          </ProductCoreComponents.checklist_group>
      """
    }
  ]

  def product_component_overrides do
    MapSet.new([])
  end

  def product_component_recipes, do: @product_component_recipes

  defp add_missing_slots(%{htmltag: htmltag} = component) do
    case Map.get(@extra_slots, htmltag) do
      nil -> component
      slots -> Enum.reduce(slots, component, fn slot, component -> ensure_slot(component, slot) end)
    end
  end

  defp drop_default_slot(component) do
    slots =
      component.slots
      |> Enum.reject(fn slot ->
        slot.name == "default" or slot.htmlname == "default" or slot.atomname == :default
      end)

    %{component | slots: slots}
  end

  defp resolve_slot_collisions(component) do
    slot_names =
      component.slots
      |> Enum.map(&Util.kebab2snake(&1.htmlname))
      |> MapSet.new()

    attrs =
      component.attrs
      |> Enum.reject(fn attr ->
        attr_name = Util.kebab2snake(attr.htmlname)
        MapSet.member?(slot_names, attr_name)
      end)

    %{component | attrs: attrs}
  end

  defp ensure_slot(component, %{"name" => name} = slot) do
    existing = Enum.find(component.slots, fn slot -> slot.name == name end)

    if existing do
      component
    else
      %{component | slots: component.slots ++ [build_slot(slot)]}
    end
  end

  defp build_slot(%{"name" => name} = slot) do
    case Map.get(slot, "htmlname") do
      nil ->
        Slot.parse(slot)

      htmlname ->
        opts =
          case Map.get(slot, "description") do
            nil -> []
            doc -> [doc: doc]
          end

        atomname =
          htmlname
          |> Util.camel2snake()
          |> String.replace("-", "_")
          |> Util.atom_repr()

        %Slot{name: name, htmlname: htmlname, atomname: atomname, opts: opts}
    end
  end
end
