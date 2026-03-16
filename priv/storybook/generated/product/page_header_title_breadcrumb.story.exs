defmodule Storybook.CodeGen.ProductComponents.Pageheadertitlebreadcrumb do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.page_header_title_breadcrumb/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :page_header_title_breadcrumb
end
