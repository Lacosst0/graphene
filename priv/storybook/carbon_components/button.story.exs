defmodule Storybook.CarbonComponents.Button do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.button/1

  def doc do
    Storybook.Doc.markdown("""
Buttons trigger actions and should use clear, verb-based labels. Keep one
primary action per view and use secondary, tertiary, or ghost for supporting
actions.

Use .button with .form for submits, or combine with .overflow_menu or
.menu_button to group less frequent actions.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :primary,
        slots: ["Primary"]
      },
      %VariationGroup{
        id: :kinds,
        description: "Action hierarchy",
        note: "Use one primary action per view and lower emphasis for secondary actions.",
        variations:
          for kind <- ~w(secondary tertiary ghost danger) do
            %Variation{
              id: String.to_atom(kind),
              attributes: %{kind: kind},
              slots: [String.capitalize(kind)]
            }
          end
      },
      %VariationGroup{
        id: :sizes,
        description: "Size and density",
        note: "Use sm in dense toolbars, md for default, and lg for primary calls to action.",
        variations:
          for size <- ~w(sm md lg) do
            %Variation{
              id: String.to_atom(size),
              attributes: %{size: size},
              slots: ["Size #{size}"]
            }
          end
      },
      %Variation{
        id: :disabled,
        attributes: %{disabled: true},
        slots: ["Disabled"]
      }
    ]
  end
end
