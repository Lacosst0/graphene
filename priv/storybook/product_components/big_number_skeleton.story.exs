defmodule Storybook.ProductComponents.BigNumberSkeleton do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.ProductComponents.big_number_skeleton/1

  def doc do
    Storybook.Doc.markdown("""
Skeleton state for Big Number while metrics are loading.
Use the size variants to match the final layout before data is ready.
""")
  end

  def variations do
    [
      %Variation{id: :default, attributes: %{size: "default"}},
      %Variation{id: :lg, attributes: %{size: "lg"}},
      %Variation{id: :xl, attributes: %{size: "xl"}}
    ]
  end
end
