defmodule Storybook.CarbonComponents.Slider do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.slider/1

  def doc do
    Storybook.Doc.markdown("""
Sliders let users pick a value or range along a track. Use them when the range
is bounded and approximate selection is acceptable.

Pair .slider with .number_input for precise entry and show min and max labels.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{name: "slider-default", min: "0", max: "100", step: "1", value: "50"},
        slots: [~S|<:label_text>Slider</:label_text>|]
      },
      %Variation{
        id: :stepped,
        attributes: %{name: "slider-stepped", min: "0", max: "10", step: "1", value: "3"},
        slots: [~S|<:label_text>Step</:label_text>|]
      },
      %Variation{
        id: :disabled,
        attributes: %{name: "slider-disabled", min: "0", max: "100", step: "1", value: "40", disabled: true},
        slots: [~S|<:label_text>Disabled</:label_text>|]
      }
    ]
  end
end
