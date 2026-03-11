defmodule Storybook.CarbonComponents.Tabs do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.tabs/1

  def doc do
    Storybook.Doc.markdown("""
Tabs let users switch between related views in the same context. Use them to
reduce cognitive load and keep content organized.

Pair .tabs with .page_header for context and keep tab labels short and clear.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        slots: [
          ~S|<:tab target="tab-panel-1" title="First">First</:tab>
<:tab target="tab-panel-2" title="Second">Second</:tab>|
        ]
      },
      %Variation{
        id: :contained,
        attributes: %{type: "contained"},
        slots: [
          ~S|<:tab target="tab-panel-a" title="Overview">Overview</:tab>
<:tab target="tab-panel-b" title="Details">Details</:tab>
<:tab target="tab-panel-c" title="Activity">Activity</:tab>|
        ]
      },
      %VariationGroup{
        id: :sizes,
        description: "Size variants",
        note: "Match tab size to layout density; md is the default.",
        variations:
          for size <- ~w(sm md lg xl) do
            %Variation{
              id: String.to_atom(size),
              attributes: %{size: size},
              slots: [
                ~S|<:tab target="tab-panel-one" title="One">One</:tab>
<:tab target="tab-panel-two" title="Two">Two</:tab>|
              ]
            }
          end
      }
    ]
  end
end
