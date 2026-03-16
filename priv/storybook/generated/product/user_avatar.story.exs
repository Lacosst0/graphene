defmodule Storybook.CodeGen.ProductComponents.Useravatar do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.user_avatar/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :user_avatar
end
