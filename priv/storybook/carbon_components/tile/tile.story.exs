defmodule Storybook.CarbonComponents.Tile do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.tile/1

  def doc do
    Storybook.Doc.markdown("""
Tiles group related content and actions in a compact surface and work best when
each tile is a single, scannable unit.

Use .tile for static content, .clickable_tile for navigation, .selectable_tile
or .radio_tile inside .tile_group for choices, and .expandable_tile when
details should be hidden until requested.

- For expandable tiles, place summary content in <:above_the_fold_content> and
  details in .tile_below_the_fold_content. Add with_interactive when the
  content includes buttons, inputs, or links.
- If above/below content is narrower than the tile, wrap it in a full-width
  container (for example, style="width: 100%;") and size inner elements inside
  that wrapper so the toggle affordance and click target stay full width.
- The tile already provides padding. Put headings, text, and actions directly
  inside, or use .stack/.grid to control spacing; avoid extra outer padding
  wrappers that shrink the surface.
- For scrollable collections, make the parent container scroll (fixed height +
  overflow-y: auto) and keep consistent tile widths. For horizontal scrolling,
  use a flex row with gap and overflow-x: auto, and set a min width on each tile.

```heex
<.expandable_tile with_interactive>
  <:above_the_fold_content>
    <div style="width: 100%;">
      <.heading>Plan</.heading>
      <p>Summary copy that fits the collapsed state.</p>
    </div>
  </:above_the_fold_content>
  <.tile_below_the_fold_content>
    <div style="width: 100%;">
      <.stack gap="xs">
        <.link href="#">Details</.link>
        <.button kind="secondary" size="sm">Action</.button>
      </.stack>
    </div>
  </.tile_below_the_fold_content>
</.expandable_tile>
```

```heex
<div style="max-height: 20rem; overflow-y: auto;">
  <.stack gap="sm">
    <.tile>Alpha</.tile>
    <.tile>Beta</.tile>
    <.tile>Gamma</.tile>
  </.stack>
</div>
```
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        slots: ["Basic tile"]
      },
      %Variation{
        id: :light,
        attributes: %{color_scheme: "light"},
        slots: ["Light tile"]
      },
      %Variation{
        id: :rounded,
        attributes: %{has_rounded_corners: true},
        slots: ["Rounded corners"]
      },
      %Variation{
        id: :content_layout,
        slots: [
          ~S|<Graphene.CarbonComponents.stack orientation="vertical" gap="3">
  <Graphene.CarbonComponents.heading>Plan overview</Graphene.CarbonComponents.heading>
  <p>Keep content concise and use stack for spacing instead of extra padding wrappers.</p>
  <Graphene.CarbonComponents.stack orientation="horizontal" gap="2">
    <Graphene.CarbonComponents.tag type="cool-gray">Draft</Graphene.CarbonComponents.tag>
    <Graphene.CarbonComponents.button kind="secondary" size="sm">Review</Graphene.CarbonComponents.button>
  </Graphene.CarbonComponents.stack>
</Graphene.CarbonComponents.stack>|
        ]
      },
      %VariationGroup{
        id: :scrollable_collection,
        description: "Scrollable tile list",
        note: "Make the parent container scroll and keep tile widths consistent.",
        template: ~S"""
        <div style="max-height: 16rem; overflow-y: auto; padding-right: 0.25rem;">
          <.psb-variation-group/>
        </div>
        """,
        variations: [
          %Variation{id: :alpha, slots: ["Alpha"]},
          %Variation{id: :beta, slots: ["Beta"]},
          %Variation{id: :gamma, slots: ["Gamma"]},
          %Variation{id: :delta, slots: ["Delta"]},
          %Variation{id: :epsilon, slots: ["Epsilon"]}
        ]
      }
    ]
  end
end
