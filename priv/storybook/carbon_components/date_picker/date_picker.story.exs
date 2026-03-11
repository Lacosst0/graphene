defmodule Storybook.CarbonComponents.DatePicker do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.date_picker/1

  def doc do
    Storybook.Doc.markdown("""
Date pickers help users choose a single date or date range. Use them when
precise scheduling or reporting dates are required.

Pair .date_picker with .time_picker for scheduling workflows and keep them in a
.form with validation hints.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :single,
        attributes: %{name: "date-picker-single", date_format: "d/m/Y"},
        slots: [
          ~S|<:input label="Start date" placeholder="dd/mm/yyyy" />|
        ]
      },
      %Variation{
        id: :range,
        attributes: %{name: "date-picker-range", value: "2024-01-10/2024-01-14", date_format: "d/m/Y"},
        slots: [
          ~S|<:input label="Start" placeholder="dd/mm/yyyy" />
<:input label="End" placeholder="dd/mm/yyyy" />|
        ]
      },
      %Variation{
        id: :disabled,
        attributes: %{name: "date-picker-disabled", disabled: true, date_format: "d/m/Y"},
        slots: [
          ~S|<:input label="Disabled" placeholder="dd/mm/yyyy" disabled={true} />|
        ]
      }
    ]
  end
end
