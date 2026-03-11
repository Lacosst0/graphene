defmodule Storybook.CodeGen.ProductComponents.Checklist do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.checklist/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :checklist
end
