defmodule Storybook.CarbonComponents.FluidSearch do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.fluid_search/1

  def doc do
    Storybook.Doc.markdown("""
Fluid search fields span the full container and suit large, edge-to-edge search
surfaces. Use them in headers, side panels, or filter sections.

Pair .fluid_search with .data_table or list views and consider .inline_loading
for search-as-you-type feedback.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{name: "fluid-search-default", label_text: "Search", placeholder: "Search"}
      },
      %Variation{
        id: :expandable,
        attributes: %{
          name: "fluid-search-expandable",
          label_text: "Search",
          expandable: true,
          expanded: true
        }
      },
      %Variation{
        id: :disabled,
        attributes: %{name: "fluid-search-disabled", label_text: "Search", disabled: true}
      },
      %VariationGroup{
        id: :sizes,
        description: "Size variants",
        note: "Use md as the default and sm in compact headers.",
        variations:
          for size <- ~w(sm md lg) do
            %Variation{
              id: String.to_atom(size),
              attributes: %{name: "fluid-search-#{size}", label_text: "Size #{size}", size: size}
            }
          end
      }
    ]
  end
end
