defmodule Storybook.CodeGen.ProductComponents.Aboutmodal do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.about_modal/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :about_modal
end
