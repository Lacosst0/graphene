defmodule Storybook.CodeGen.ProductComponents.Pageheadertabs do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.page_header_tabs/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :page_header_tabs
end
