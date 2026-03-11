defmodule Storybook.ProductComponents.TruncatedText do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.ProductComponents.truncated_text/1

  def doc do
    Storybook.Doc.markdown("""
Truncated text keeps dense copy readable with tooltip or expandable content.
Use tooltip for short hints and expand for longer inline content.
""")
  end

  def variations do
    long_text =
      "Buttons are used to initialize an action, either in the background or " <>
        "foreground of an experience. Primary buttons should be used for the " <>
        "principle call to action on the page. Secondary buttons should be used " <>
        "for secondary actions on each page."

    [
      %Variation{
        id: :default,
        attributes: %{
          value: long_text,
          lines: "3",
          type: "tooltip",
          align: "top",
          expand_label: "View more",
          collapse_label: "View less"
        }
      },
      %Variation{
        id: :expand,
        attributes: %{
          value: long_text,
          lines: "2",
          type: "expand",
          align: "top",
          expand_label: "View more",
          collapse_label: "View less"
        }
      }
    ]
  end
end
