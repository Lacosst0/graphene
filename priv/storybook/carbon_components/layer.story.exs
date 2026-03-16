defmodule Storybook.CarbonComponents.Layer do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.layer/1

  def doc do
    Storybook.Doc.markdown("""
Layers adjust background and elevation for nested surfaces. Use them when
stacking panels, cards, or modals so contrast remains consistent.

Combine .layer with .tile or .contained_list and keep layer levels consistent
across the page.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :base,
        attributes: %{level: "0"},
        slots: [
          ~S|<div style="padding: 1rem; border: 1px solid #e0e0e0;">Base layer</div>|
        ]
      },
      %Variation{
        id: :nested,
        attributes: %{level: "0"},
        slots: [
          ~S|<div style="padding: 1rem; border: 1px solid #e0e0e0;">
  Base layer
  <Graphene.CarbonComponents.layer level="1">
    <div style="margin-top: 0.5rem; padding: 1rem; border: 1px dashed #8d8d8d;">
      Nested layer
    </div>
  </Graphene.CarbonComponents.layer>
</div>|
        ]
      },
      %Variation{
        id: :deep,
        attributes: %{level: "0"},
        slots: [
          ~S|<div style="padding: 1rem; border: 1px solid #e0e0e0;">
  Level 0
  <Graphene.CarbonComponents.layer level="1">
    <div style="margin-top: 0.5rem; padding: 1rem; border: 1px dashed #8d8d8d;">
      Level 1
      <Graphene.CarbonComponents.layer level="2">
        <div style="margin-top: 0.5rem; padding: 1rem; border: 1px dotted #525252;">
          Level 2
        </div>
      </Graphene.CarbonComponents.layer>
    </div>
  </Graphene.CarbonComponents.layer>
</div>|
        ]
      }
    ]
  end
end
