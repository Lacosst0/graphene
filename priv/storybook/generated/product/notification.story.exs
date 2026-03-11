defmodule Storybook.CodeGen.ProductComponents.Notification do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.notification/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :notification
end
