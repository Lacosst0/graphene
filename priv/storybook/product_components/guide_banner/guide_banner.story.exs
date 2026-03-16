defmodule Storybook.ProductComponents.GuideBanner do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.ProductComponents.guide_banner/1

  def doc do
    Storybook.Doc.markdown("""
Guide banners highlight onboarding content or next steps.
Use guide banner elements to create scrollable, bite-sized guidance.
""")
  end

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{
          open: true,
          title_text: "Page-related heading that can stand on its own",
          expand_text: "Read more",
          collapse_text: "Read less"
        },
        slots: [
          ~S|<:icon>
  <Graphene.CarbonComponents.icon name="information" size={20} />
</:icon>
<:body>
  <div style="display: grid; gap: 1rem;">
    <Graphene.ProductComponents.guide_banner_element>
      <:title>Title text 1</:title>
      <:description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices
        erat ut cursus porta.
      </:description>
      <Graphene.CarbonComponents.button kind="ghost">Read more</Graphene.CarbonComponents.button>
    </Graphene.ProductComponents.guide_banner_element>
    <Graphene.ProductComponents.guide_banner_element>
      <:title>Title text 2</:title>
      <:description>
        Cras id sapien justo. Pellentesque consequat mollis ex sit amet aliquet.
      </:description>
      <Graphene.CarbonComponents.button kind="ghost">Read more</Graphene.CarbonComponents.button>
    </Graphene.ProductComponents.guide_banner_element>
    <Graphene.ProductComponents.guide_banner_element>
      <:title>Title text 3</:title>
      <:description>
        Curabitur non urna ut erat tincidunt ullamcorper. Maecenas gravida
        commodo urna.
      </:description>
      <Graphene.CarbonComponents.button kind="ghost">Read more</Graphene.CarbonComponents.button>
    </Graphene.ProductComponents.guide_banner_element>
  </div>
</:body>
<:footer>
  <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem;">
    <Graphene.CarbonComponents.button kind="ghost">Read less</Graphene.CarbonComponents.button>
    <div style="display: flex; gap: 0.5rem;">
      <Graphene.CarbonComponents.button kind="ghost" aria-label="Previous">
        <:icon>
          <Graphene.CarbonComponents.icon name="chevron--left" size={16} />
        </:icon>
      </Graphene.CarbonComponents.button>
      <Graphene.CarbonComponents.button kind="ghost" aria-label="Next">
        <:icon>
          <Graphene.CarbonComponents.icon name="chevron--right" size={16} />
        </:icon>
      </Graphene.CarbonComponents.button>
    </div>
  </div>
</:footer>|
        ]
      }
    ]
  end
end
