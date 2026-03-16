defmodule Storybook.CodeGen.ProductComponents.Coachmarkbody do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.coachmark_body/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :coachmark_body
end
