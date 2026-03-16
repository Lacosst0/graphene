defmodule Storybook.CodeGen.ProductComponents.Guidebannerelement do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.guide_banner_element/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :guide_banner_element
end
