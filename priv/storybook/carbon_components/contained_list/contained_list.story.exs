defmodule Storybook.CarbonComponents.ContainedList do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.contained_list/1

  def doc do
    Storybook.Doc.markdown("""
Contained lists group related items in a bounded container and can be static or
interactive. Use them in constrained layouts, side panels, or disclosure areas.

Combine .contained_list with .tag, .link, or .button for metadata and actions,
and use status indicators for quick scanning.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        slots: [
          ~S|<:label>Contained list</:label>
<:item>First item</:item>
<:item>Second item</:item>
<:item>Third item</:item>|
        ]
      },
      %Variation{
        id: :interactive,
        slots: [
          ~S|<:label>Clickable list</:label>
<:item clickable={true}>Clickable item</:item>
<:item clickable={true}>Another action</:item>
<:item disabled={true}>Disabled</:item>|
        ]
      },
      %VariationGroup{
        id: :sizes,
        description: "Size variants",
        note: "Use sm for dense lists and lg for comfortable reading.",
        variations:
          for size <- ~w(sm md lg) do
              %Variation{
                id: String.to_atom(size),
                attributes: %{size: size},
                slots: [
                  ~s|<:label>Size #{size}</:label>
<:item>Alpha</:item>
<:item>Beta</:item>|
                ]
              }
          end
      }
    ]
  end
end
