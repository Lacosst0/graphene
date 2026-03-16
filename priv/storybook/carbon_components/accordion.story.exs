defmodule Storybook.CarbonComponents.Accordion do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.accordion/1

  def doc do
    Storybook.Doc.markdown("""
Accordions reveal or hide related content to reduce scrolling and support
progressive disclosure. Use them for grouped, non-critical content and avoid
them when users must read everything or when content is deeply nested.

Combine .accordion with .heading, .link, and .button inside panels, and prefer
one item open by default to keep scanning easy.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{alignment: "start"},
        slots: [
          ~S|<:item title="Section 1" open={true}>
  This is the first section content.
</:item>
<:item title="Section 2">This is the second section content.</:item>
<:item title="Disabled section" disabled={true}>
  This section is disabled but still visible for layout context.
</:item>|
        ]
      },
      %Variation{
        id: :flush,
        attributes: %{is_flush: true},
        slots: [
          ~S|<:item title="Overview" open={true}>Summary content.</:item>
<:item title="Details">More details about the section.</:item>|
        ]
      },
      %VariationGroup{
        id: :sizes,
        description: "Density sizes",
        note: "Use sm for tight panels, md for default, and lg for spacious content.",
        variations:
          for size <- ~w(sm md lg) do
            %Variation{
              id: String.to_atom(size),
              attributes: %{size: size},
              slots: [
                ~S|<:item title="First">Small content.</:item>
<:item title="Second">More content.</:item>|
              ]
            }
          end
      }
    ]
  end
end
