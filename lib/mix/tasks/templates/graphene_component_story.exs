defmodule Storybook.CodeGen.<%= @module %>.<%= Graphene.CodeGen.Util.snake2pascal @component %> do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &<%= @func_module %>.<%= @func_name %>/1,
    component_module: <%= @component_module %>,
    component_name: :<%= @component %>
end
