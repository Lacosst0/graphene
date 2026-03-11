defmodule Storybook.CodeGen.ProductComponents.Tearsheet do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.tearsheet/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :tearsheet
end
