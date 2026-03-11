defmodule Storybook.CarbonComponents.Checkbox do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.checkbox_group/1

  def doc do
    Storybook.Doc.markdown("""
Checkbox groups support multiple selections where options are independent. Use
them for filters, preferences, or consent, and use .radio_button when only one
option is allowed.

Combine .checkbox_group with .form_group and validation text, and use within
.data_table for batch selection scenarios.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{legend_text: "Notifications"},
        slots: [
          ~S|<:item label="Email" value="email" />
<:item label="SMS" value="sms" />|
        ]
      },
      %Variation{
        id: :with_checked,
        attributes: %{legend_text: "Status"},
        slots: [
          ~S|<:item label="Active" value="active" checked={true} />
<:item label="Paused" value="paused" />|
        ]
      },
      %Variation{
        id: :invalid,
        attributes: %{
          legend_text: "Required",
          invalid: true,
          invalid_text: "Select at least one"
        },
        slots: [
          ~S|<:item label="Option A" value="a" />
<:item label="Option B" value="b" />|
        ]
      }
    ]
  end
end
