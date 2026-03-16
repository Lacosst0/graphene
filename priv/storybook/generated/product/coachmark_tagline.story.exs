defmodule Storybook.CodeGen.ProductComponents.Coachmarktagline do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.coachmark_tagline/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :coachmark_tagline
end
