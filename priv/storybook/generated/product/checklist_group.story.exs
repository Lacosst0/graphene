defmodule Storybook.CodeGen.ProductComponents.Checklistgroup do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.checklist_group/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :checklist_group
end
