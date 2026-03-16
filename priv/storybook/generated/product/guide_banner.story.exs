defmodule Storybook.CodeGen.ProductComponents.Guidebanner do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.guide_banner/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :guide_banner
end
