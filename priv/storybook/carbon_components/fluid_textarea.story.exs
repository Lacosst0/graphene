defmodule Storybook.CarbonComponents.FluidTextarea do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.fluid_textarea/1

  def doc do
    Storybook.Doc.markdown("""
Fluid textareas provide full-width multi-line input. Use them for longer
responses in fluid forms or panels.

Combine .fluid_textarea with .form and helper text, and use .textarea for
compact layouts.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{name: "fluid-textarea-default", rows: "3"},
        slots: [
          ~S|<:label_text>Notes</:label_text>|
        ]
      },
      %Variation{
        id: :helper_text,
        attributes: %{name: "fluid-textarea-helper", rows: "4"},
        slots: [
          ~S|<:label_text>Description</:label_text>
<:helper_text>Max 300 characters</:helper_text>|
        ]
      },
      %Variation{
        id: :invalid,
        attributes: %{name: "fluid-textarea-invalid", rows: "3"},
        slots: [
          ~S|<:label_text>Reason</:label_text>
<:validity_message>Required</:validity_message>|
        ]
      }
    ]
  end
end
