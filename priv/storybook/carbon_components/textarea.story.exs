defmodule Storybook.CarbonComponents.Textarea do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.textarea/1

  def doc do
    Storybook.Doc.markdown("""
Textareas are for multi-line input like comments or descriptions. Use them for
longer text where multiple lines are expected.

Combine .textarea with .form and optional character guidance for clarity.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{name: "textarea-default", rows: "3"},
        slots: [
          ~S|<:label_text>Notes</:label_text>|
        ]
      },
      %Variation{
        id: :helper_text,
        attributes: %{name: "textarea-helper", rows: "4"},
        slots: [
          ~S|<:label_text>Description</:label_text>
<:helper_text>Max 300 characters</:helper_text>|
        ]
      },
      %Variation{
        id: :invalid,
        attributes: %{name: "textarea-invalid", rows: "3", invalid: true, invalid_text: "Required"},
        slots: [
          ~S|<:label_text>Reason</:label_text>|
        ]
      }
    ]
  end
end
