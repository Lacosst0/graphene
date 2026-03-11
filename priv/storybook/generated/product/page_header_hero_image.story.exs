defmodule Storybook.CodeGen.ProductComponents.Pageheaderheroimage do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.page_header_hero_image/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :page_header_hero_image
end
