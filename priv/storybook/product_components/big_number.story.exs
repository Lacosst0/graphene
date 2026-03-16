defmodule Storybook.ProductComponents.BigNumber do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.ProductComponents.big_number/1

  def doc do
    Storybook.Doc.markdown("""
Big numbers highlight a key metric with optional trend and actions.
Use them to surface a single KPI and pair with contextual actions or tooltips.
""")
  end

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{
          value: "5",
          total: "13",
          fraction_digits: "1",
          locale: "en-US",
          size: "default",
          trending: false,
          truncate: true
        },
        slots: [
          ~S|<:label>Active users</:label>|
        ]
      },
      %Variation{
        id: :with_custom_icons,
        attributes: %{
          value: "78.2",
          total: "100",
          fraction_digits: "1",
          locale: "en-US",
          size: "lg",
          trending: true,
          truncate: true,
          percentage: true
        },
        slots: [
          ~S|<:label>
  Completion rate
  <Graphene.CarbonComponents.icon name="information" size={16} />
</:label>
<:icon_button>
  <Graphene.CarbonComponents.icon_button kind="ghost" label="Edit">
    <:icon name="edit" size={16} />
  </Graphene.CarbonComponents.icon_button>
</:icon_button>
<:trending_icon>
  <Graphene.CarbonComponents.icon name="arrow--down" size={16} />
</:trending_icon>|
        ]
      }
    ]
  end
end
