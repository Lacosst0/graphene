defmodule Storybook.CodeGen.ProductComponents.Notificationpanel do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.notification_panel/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :notification_panel
end
