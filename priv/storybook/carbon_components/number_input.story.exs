defmodule Storybook.CarbonComponents.NumberInput do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.number_input/1

  def doc do
    Storybook.Doc.markdown("""
Number inputs collect numeric values and include stepper controls. Use them when
precision matters or when users adjust values in small increments.

Pair .number_input with .form validation and consider .slider for approximate
ranges.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{name: "number-input-default", value: "10"},
        slots: [
          ~S|<:label_text>Quantity</:label_text>|
        ]
      },
      %Variation{
        id: :helper_text,
        attributes: %{name: "number-input-helper", value: "2"},
        slots: [
          ~S|<:label_text>Seats</:label_text>
<:helper_text>Available seats</:helper_text>|
        ]
      },
      %Variation{
        id: :invalid,
        attributes: %{name: "number-input-invalid", value: "0", invalid: true, invalid_text: "Minimum is 1"},
        slots: [
          ~S|<:label_text>Licenses</:label_text>|
        ]
      }
    ]
  end
end
