defmodule Storybook.CodeGen.ProductComponents.Checklistitem do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.checklist_item/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :checklist_item
end
