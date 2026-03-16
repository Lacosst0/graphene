defmodule Storybook.CarbonComponents.TextInput do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.text_input/1

  def doc do
    Storybook.Doc.markdown("""
Text inputs collect free-form text. Use them when the value cannot be predicted
or selected from a list.

Pair .text_input with .form validation and helper text, and use .textarea for
multi-line input.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{name: "text-input-default", value: "Ada"},
        slots: [
          ~S|<:label_text>First name</:label_text>|
        ]
      },
      %Variation{
        id: :helper_text,
        attributes: %{name: "text-input-helper", value: "Lovelace"},
        slots: [
          ~S|<:label_text>Last name</:label_text>
<:helper_text>As shown on your ID</:helper_text>|
        ]
      },
      %Variation{
        id: :invalid,
        attributes: %{name: "text-input-invalid", value: "", invalid: true, invalid_text: "Required"},
        slots: [
          ~S|<:label_text>Username</:label_text>|
        ]
      }
    ]
  end
end
