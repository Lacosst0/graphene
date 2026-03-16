defmodule Storybook.CarbonComponents.FluidSelect do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.fluid_select/1

  def doc do
    Storybook.Doc.markdown("""
Fluid selects fill the container width for fluid layout patterns. Use them when
forms align to the grid edges or within panels.

Combine .fluid_select with .form validation and use .select for compact layouts.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{name: "fluid-select-default"},
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
        attributes: %{name: "fluid-select-inline", inline: true},
        slots: [
          ~S|<:label_text>Inline</:label_text>
<:item value="alpha">Alpha</:item>
<:item value="beta">Beta</:item>|
        ]
      },
      %Variation{
        id: :invalid,
        attributes: %{name: "fluid-select-invalid", invalid: true, invalid_text: "Pick a value"},
        slots: [
          ~S|<:label_text>Required</:label_text>
<:item value="one">One</:item>
<:item value="two">Two</:item>|
        ]
      }
    ]
  end
end
