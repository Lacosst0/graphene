defmodule Storybook.CodeGen.ProductComponents.Truncatedtext do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.truncated_text/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :truncated_text
end
