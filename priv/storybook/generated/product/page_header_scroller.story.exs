defmodule Storybook.CodeGen.ProductComponents.Pageheaderscroller do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.page_header_scroller/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :page_header_scroller
end
