defmodule Storybook.CarbonComponents.Tag do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.tag/1

  def doc do
    Storybook.Doc.markdown("""
Tags label, categorize, and filter items. Use them to show metadata, status, or
selected filters.

Combine .tag with .stack or .overflow_menu and limit the number of tags shown at
once.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :blue,
        attributes: %{type: "blue"},
        slots: ["Blue"]
      },
      %Variation{
        id: :green,
        attributes: %{type: "green"},
        slots: ["Green"]
      },
      %Variation{
        id: :filter,
        attributes: %{filter: true, type: "teal"},
        slots: ["Filter"]
      },
      %VariationGroup{
        id: :sizes,
        description: "Size variants",
        note: "Use sm for dense metadata and lg when tags are primary content.",
        variations:
          for size <- ~w(sm md lg) do
            %Variation{
              id: String.to_atom(size),
              attributes: %{size: size, type: "cool-gray"},
              slots: ["#{String.upcase(size)}"]
            }
          end
      }
    ]
  end
end
