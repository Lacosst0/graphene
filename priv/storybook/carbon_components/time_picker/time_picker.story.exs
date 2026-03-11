defmodule Storybook.CarbonComponents.TimePicker do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.time_picker/1

  def doc do
    Storybook.Doc.markdown("""
Time pickers help users select a time value. Use them for scheduling or time
settings.

Pair .time_picker with .date_picker for date-time workflows and keep it within a
.form for validation.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{name: "time-picker-default", value: "12:00"},
        slots: [
          ~S|<:label_text>Start time</:label_text>
<:select_item value="UTC" selected>UTC</:select_item>
<:select_item value="PST">PST</:select_item>|
        ]
      },
      %Variation{
        id: :with_timezone,
        attributes: %{name: "time-picker-timezone", value: "09:30"},
        slots: [
          ~S|<:label_text>Meeting time</:label_text>
<:select_item value="UTC" selected>UTC</:select_item>
<:select_item value="CET">CET</:select_item>|
        ]
      },
      %Variation{
        id: :invalid,
        attributes: %{name: "time-picker-invalid", value: "", invalid: true, invalid_text: "Enter a time"},
        slots: [
          ~S|<:label_text>Start time</:label_text>
<:select_item value="UTC" selected>UTC</:select_item>|
        ]
      }
    ]
  end
end
