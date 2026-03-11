defmodule Storybook.CodeGen.ProductComponents.Pageheadercontenttext do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.page_header_content_text/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :page_header_content_text
end
