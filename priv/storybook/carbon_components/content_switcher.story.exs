defmodule Storybook.CarbonComponents.ContentSwitcher do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.content_switcher/1

  def doc do
    Storybook.Doc.markdown("""
Content switchers toggle between two or more views in the same space. Use them
for small sets of mutually exclusive views, such as list versus grid.

Pair .content_switcher with .data_table or .tile layouts, and use .tabs when
you need navigation across distinct sections.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{value: "files"},
        slots: [
          ~S|<:item value="files">Files</:item>
<:item value="settings">Settings</:item>|
        ]
      },
      %Variation{
        id: :low_contrast,
        attributes: %{value: "tasks", low_contrast: true},
        slots: [
          ~S|<:item value="tasks">Tasks</:item>
<:item value="insights">Insights</:item>
<:item value="team">Team</:item>|
        ]
      },
      %VariationGroup{
        id: :sizes,
        description: "Size variants",
        note: "Match the switcher size to surrounding controls and layout density.",
        variations:
          for size <- ~w(sm md lg xl) do
            %Variation{
              id: String.to_atom(size),
              attributes: %{value: "one", size: size},
              slots: [
                ~S|<:item value="one">One</:item>
<:item value="two">Two</:item>|
              ]
            }
          end
      }
    ]
  end
end
