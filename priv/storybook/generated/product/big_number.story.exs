defmodule Storybook.CodeGen.ProductComponents.Bignumber do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.big_number/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :big_number
end
