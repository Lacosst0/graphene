defmodule Storybook.CodeGen.ProductComponents.Sidepanel do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.side_panel/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :side_panel
end
