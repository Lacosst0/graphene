defmodule Storybook.CodeGen.ProductComponents.Optionstile do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.options_tile/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :options_tile
end
