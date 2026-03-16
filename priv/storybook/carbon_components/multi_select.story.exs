defmodule Storybook.CarbonComponents.MultiSelect do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.multi_select/1

  def doc do
    Storybook.Doc.markdown("""
Multi-select lets users choose multiple options from a list. Use it for large
option sets; for small sets, prefer checkboxes.

Combine .multi_select with .form and show selected items clearly, especially in
dense filter panels.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{
          name: "multi-select-default",
          style: "min-width: 20rem;"
        },
        slots: [
          ~S|<:title_text>Choose multiple</:title_text>
<:item value="one">Option 1</:item>
<:item value="two">Option 2</:item>
<:item value="three">Option 3</:item>|
        ]
      },
      %Variation{
        id: :inline,
        attributes: %{
          name: "multi-select-inline",
          type: "inline",
          style: "min-width: 20rem;"
        },
        slots: [
          ~S|<:title_text>Inline</:title_text>
<:item value="alpha">Alpha</:item>
<:item value="beta">Beta</:item>|
        ]
      },
      %Variation{
        id: :disabled,
        attributes: %{
          name: "multi-select-disabled",
          disabled: true,
          style: "min-width: 20rem;"
        },
        slots: [
          ~S|<:title_text>Disabled</:title_text>
<:item value="one">Option 1</:item>
<:item value="two">Option 2</:item>|
        ]
      }
    ]
  end
end
