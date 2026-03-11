defmodule Storybook.CodeGen.ProductComponents.Checklistchart do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.checklist_chart/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :checklist_chart
end
