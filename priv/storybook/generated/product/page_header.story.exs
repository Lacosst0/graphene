defmodule Storybook.CodeGen.ProductComponents.Pageheader do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.page_header/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :page_header
end
