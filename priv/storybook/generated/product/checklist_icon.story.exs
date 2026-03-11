defmodule Storybook.CodeGen.ProductComponents.Checklisticon do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.checklist_icon/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :checklist_icon
end
