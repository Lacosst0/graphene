defmodule Storybook.CodeGen.ProductComponents.Bignumberskeleton do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.big_number_skeleton/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :big_number_skeleton
end
