defmodule Storybook.CarbonComponents.ExpandableTile do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.expandable_tile/1

  def doc do
    Storybook.Doc.markdown("""
Expandable tiles reveal details on demand while keeping a concise summary in view.
Use them for secondary information, not for content users must read every time.

- Put summary content in <:above_the_fold_content> and details in
  .tile_below_the_fold_content.
- Add with_interactive when the content includes buttons, inputs, or links.
- If your content is narrow, wrap it in a full-width container to keep the
  click target and chevron aligned with the tile width.
""")
  end

  def template do
    """
      <.psb-variation/>
    """
  end

  def variations do
    [
      %Variation{
        id: :default,
        slots: [
          ~S|<:above_the_fold_content>
  <div>Above the fold content here</div>
</:above_the_fold_content>
<Graphene.CarbonComponents.tile_below_the_fold_content>
  <div>Below the fold content here</div>
</Graphene.CarbonComponents.tile_below_the_fold_content>|
        ]
      },
      %Variation{
        id: :with_interactive,
        attributes: %{with_interactive: true},
        slots: [
          ~S|<:above_the_fold_content>
  <div style="width: 100%;">
    <Graphene.CarbonComponents.heading>Usage limits</Graphene.CarbonComponents.heading>
    <p>Summarize the key status in the collapsed view.</p>
    <Graphene.CarbonComponents.button kind="ghost" size="sm">Manage</Graphene.CarbonComponents.button>
  </div>
</:above_the_fold_content>
<Graphene.CarbonComponents.tile_below_the_fold_content>
  <div style="width: 100%;">
    <Graphene.CarbonComponents.stack orientation="vertical" gap="2">
      <Graphene.CarbonComponents.link href="#">View details</Graphene.CarbonComponents.link>
      <Graphene.CarbonComponents.link href="#">See pricing</Graphene.CarbonComponents.link>
    </Graphene.CarbonComponents.stack>
  </div>
</Graphene.CarbonComponents.tile_below_the_fold_content>|
        ]
      },
      %Variation{
        id: :narrow_content,
        attributes: %{with_interactive: true, expanded: true},
        slots: [
          ~S|<:above_the_fold_content>
  <div style="width: 100%;">
    <div style="max-width: 12rem;">
      <Graphene.CarbonComponents.heading>Starter plan</Graphene.CarbonComponents.heading>
      <p>Compact summary copy.</p>
    </div>
  </div>
</:above_the_fold_content>
<Graphene.CarbonComponents.tile_below_the_fold_content>
  <div style="width: 100%;">
    <div style="max-width: 12rem;">
      <p>Expanded details stay narrow but the tile remains full width.</p>
    </div>
  </div>
</Graphene.CarbonComponents.tile_below_the_fold_content>|
        ]
      }
    ]
  end
end
