defmodule Storybook.CarbonComponents.Search do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.search/1

  def doc do
    Storybook.Doc.markdown("""
Search lets users find content without navigating through hierarchy. Use it for
large datasets or global search entry points.

Combine .search with .data_table or list views and offer filters via .dropdown
or .overflow_menu.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{name: "search-default", label_text: "Search", placeholder: "Search"}
      },
      %Variation{
        id: :expandable,
        attributes: %{name: "search-expandable", label_text: "Search", expandable: true, expanded: true}
      },
      %VariationGroup{
        id: :sizes,
        description: "Size variants",
        note: "Match the field size to surrounding inputs.",
        variations:
          for size <- ~w(sm md lg) do
            %Variation{
              id: String.to_atom(size),
              attributes: %{name: "search-#{size}", label_text: "Size #{size}", size: size}
            }
          end
      }
    ]
  end
end
