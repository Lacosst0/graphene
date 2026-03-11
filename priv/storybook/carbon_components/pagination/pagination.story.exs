defmodule Storybook.CarbonComponents.Pagination do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.pagination/1

  def doc do
    Storybook.Doc.markdown("""
Pagination splits long datasets into pages. Use it when loading all items at
once would be slow or overwhelming.

Pair .pagination with .data_table or list views and provide a page-size .select
when users need control.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{total_items: "105", page_size: "10"}
      },
      %Variation{
        id: :small,
        attributes: %{total_items: "42", page_size: "5", size: "sm"}
      },
      %Variation{
        id: :unknown,
        attributes: %{pages_unknown: true, page_size: "10", total_items: ""}
      }
    ]
  end
end
