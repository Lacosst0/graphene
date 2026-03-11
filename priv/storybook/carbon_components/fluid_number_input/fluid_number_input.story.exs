defmodule Storybook.CarbonComponents.FluidNumberInput do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.fluid_number_input/1

  def doc do
    Storybook.Doc.markdown("""
Fluid number inputs stretch to the container width for fluid layouts. Use them
in full-width forms or side panels where alignment is edge-to-edge.

Pair .fluid_number_input with .form and .grid, and fall back to .number_input
for compact, dense layouts.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{name: "fluid-number-default", value: "10"},
        slots: [
          ~S|<:label_text>Quantity</:label_text>|
        ]
      },
      %Variation{
        id: :helper_text,
        attributes: %{name: "fluid-number-helper", value: "2"},
        slots: [
          ~S|<:label_text>Seats</:label_text>
<:helper_text>Available seats</:helper_text>|
        ]
      },
      %Variation{
        id: :invalid,
        attributes: %{name: "fluid-number-invalid", value: "0"},
        slots: [
          ~S|<:label_text>Licenses</:label_text>
<:validity_message>Minimum is 1</:validity_message>|
        ]
      }
    ]
  end
end
