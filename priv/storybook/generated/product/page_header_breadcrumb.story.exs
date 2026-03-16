defmodule Storybook.CodeGen.ProductComponents.Pageheaderbreadcrumb do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.page_header_breadcrumb/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :page_header_breadcrumb
end
