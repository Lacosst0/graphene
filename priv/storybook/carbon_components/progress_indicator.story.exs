defmodule Storybook.CarbonComponents.ProgressIndicator do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.progress_indicator/1

  def doc do
    Storybook.Doc.markdown("""
Progress indicators show a user's position in a multi-step flow. Use them for
wizards, onboarding, or long forms.

Pair .progress_indicator with step content and .button actions for Next and Back
navigation.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{current_index: "1"},
        slots: [
          ~S|<:step label="First" complete />
<:step label="Second" current />
<:step label="Third" />|
        ]
      },
      %Variation{
        id: :vertical,
        attributes: %{current_index: "2", vertical: true},
        slots: [
          ~S|<:step label="Plan" complete />
<:step label="Build" complete />
<:step label="Launch" current />
<:step label="Iterate" />|
        ]
      },
      %Variation{
        id: :spaced,
        attributes: %{current_index: "0", space_equally: true},
        slots: [
          ~S|<:step label="Step one" current />
<:step label="Step two" />
<:step label="Step three" />|
        ]
      }
    ]
  end
end
