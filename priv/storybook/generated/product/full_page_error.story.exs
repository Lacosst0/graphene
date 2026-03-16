defmodule Storybook.CodeGen.ProductComponents.Fullpageerror do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.full_page_error/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :full_page_error
end
