defmodule Storybook.CarbonComponents.Select do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.select/1

  def doc do
    Storybook.Doc.markdown("""
Select fields allow one choice from a list and are best for form submissions.
Use them when the list is short and predictable.

Pair .select with .form validation and consider .combo_box for long lists.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{name: "select-default"},
        slots: [
          ~S|<:label_text>Select an option</:label_text>
<:item value="">Choose one</:item>
<:item value="option-1">Option 1</:item>
<:item value="option-2">Option 2</:item>
<:item value="option-3">Option 3</:item>|
        ]
      },
      %Variation{
        id: :inline,
        attributes: %{name: "select-inline", inline: true},
        slots: [
          ~S|<:label_text>Inline</:label_text>
<:item value="alpha">Alpha</:item>
<:item value="beta">Beta</:item>|
        ]
      },
      %Variation{
        id: :invalid,
        attributes: %{name: "select-invalid", invalid: true, invalid_text: "Pick a value"},
        slots: [
          ~S|<:label_text>Required</:label_text>
<:item value="one">One</:item>
<:item value="two">Two</:item>|
        ]
      }
    ]
  end
end
