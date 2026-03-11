defmodule Storybook.CodeGen.ProductComponents.Pageheadercontent do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.page_header_content/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :page_header_content
end
