defmodule Storybook.CodeGen.ProductComponents.Notificationfooter do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.notification_footer/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :notification_footer
end
