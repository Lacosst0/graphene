defmodule Storybook.CodeGen.ProductComponents.Coachmarkbeacon do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.coachmark_beacon/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :coachmark_beacon
end
