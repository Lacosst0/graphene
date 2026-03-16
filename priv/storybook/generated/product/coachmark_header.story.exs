defmodule Storybook.CodeGen.ProductComponents.Coachmarkheader do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.coachmark_header/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :coachmark_header
end
