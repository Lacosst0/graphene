defmodule Storybook.CarbonComponents.Dropdown do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.dropdown/1

  def doc do
    Storybook.Doc.markdown("""
Dropdowns present a list of options for filtering or sorting. Use them in forms,
toolbars, or side panels when the option list is moderate.

Pair .dropdown with .table_toolbar_search or .form validation, and use inline
type for compact UI.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{name: "dropdown-default", value: "all"},
        slots: [
          ~S|<:title_text>Dropdown</:title_text>
<:item value="all">All</:item>
<:item value="cloud">Cloud</:item>
<:item value="edge">Edge</:item>|
        ]
      },
      %Variation{
        id: :inline,
        attributes: %{name: "dropdown-inline", type: "inline", value: "alpha"},
        slots: [
          ~S|<:title_text>Inline</:title_text>
<:item value="alpha">Alpha</:item>
<:item value="beta">Beta</:item>
<:item value="gamma">Gamma</:item>|
        ]
      },
      %VariationGroup{
        id: :sizes,
        description: "Size variants",
        note: "Keep size consistent within the form or toolbar.",
        variations:
          for size <- ~w(sm md lg) do
            %Variation{
              id: String.to_atom(size),
              attributes: %{name: "dropdown-#{size}", size: size, value: "one"},
              slots: [
                ~s|<:title_text>Size #{size}</:title_text>
<:item value="one">One</:item>
<:item value="two">Two</:item>|
              ]
            }
          end
      }
    ]
  end
end
