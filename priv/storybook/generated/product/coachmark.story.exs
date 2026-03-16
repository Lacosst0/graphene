defmodule Storybook.CodeGen.ProductComponents.Coachmark do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.coachmark/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :coachmark
end
