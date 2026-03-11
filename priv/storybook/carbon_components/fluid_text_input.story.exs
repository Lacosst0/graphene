defmodule Storybook.CarbonComponents.FluidTextInput do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.fluid_text_input/1

  def doc do
    Storybook.Doc.markdown("""
Fluid text inputs are full-width fields for fluid layout patterns. Use them in
forms that align to the grid edges or in side panels.

Pair .fluid_text_input with .form_group and .inline_notification for validation
feedback.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{name: "fluid-text-input-default", value: ""},
        slots: [
          ~S|<:label_text>First name</:label_text>|
        ]
      },
      %Variation{
        id: :helper_text,
        attributes: %{name: "fluid-text-input-helper", value: "Ada"},
        slots: [
          ~S|<:label_text>Name</:label_text>
<:helper_text>As shown on your ID</:helper_text>|
        ]
      },
      %Variation{
        id: :invalid,
        attributes: %{name: "fluid-text-input-invalid", value: ""},
        slots: [
          ~S|<:label_text>Username</:label_text>
<:validity_message>Required</:validity_message>|
        ]
      }
    ]
  end
end
