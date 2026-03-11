defmodule Storybook.CarbonComponents.InlineLoading do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.inline_loading/1

  def doc do
    Storybook.Doc.markdown("""
Inline loading provides feedback for localized actions. Use it for small tasks
like refreshing a table row or saving a form section.

Pair .inline_loading with the triggering .button and use skeletons for long or
full-page loads.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :active,
        attributes: %{status: "active"},
        slots: ["Loading..."]
      },
      %Variation{
        id: :finished,
        attributes: %{status: "finished"},
        slots: ["Complete"]
      },
      %Variation{
        id: :error,
        attributes: %{status: "error"},
        slots: ["Failed"]
      }
    ]
  end
end
