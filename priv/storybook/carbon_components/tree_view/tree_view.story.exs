defmodule Storybook.CarbonComponents.TreeView do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.tree_view/1

  def doc do
    Storybook.Doc.markdown("""
Tree views provide hierarchical navigation with expandable nodes. Use them for
nested structures like folders or settings.

Combine .tree_view with .search or filter controls when the tree is large, and
use icons to reinforce hierarchy.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{label: "Primary navigation"},
        slots: [
          ~S|<Graphene.CarbonComponents.tree_node label="Products" is_expanded={true} id="products">
  <Graphene.CarbonComponents.tree_node label="Catalog" id="catalog" />
  <Graphene.CarbonComponents.tree_node label="Pricing" id="pricing" />
  <Graphene.CarbonComponents.tree_node label="Releases" id="releases" />
</Graphene.CarbonComponents.tree_node>
<Graphene.CarbonComponents.tree_node label="Teams" is_expanded={true} id="teams">
  <Graphene.CarbonComponents.tree_node label="Design" id="design" />
  <Graphene.CarbonComponents.tree_node label="Engineering" id="engineering" selected />
  <Graphene.CarbonComponents.tree_node label="Marketing" id="marketing" disabled />
</Graphene.CarbonComponents.tree_node>
<Graphene.CarbonComponents.tree_node label="Settings" id="settings" active />|
        ]
      },
      %Variation{
        id: :nested,
        attributes: %{label: "Workspace navigation"},
        slots: [
          ~S|<Graphene.CarbonComponents.tree_node label="Projects" is_expanded={true} id="projects">
  <Graphene.CarbonComponents.tree_node label="Alpha" id="alpha" />
  <Graphene.CarbonComponents.tree_node label="Beta" id="beta" />
  <Graphene.CarbonComponents.tree_node label="Gamma" id="gamma" />
</Graphene.CarbonComponents.tree_node>
<Graphene.CarbonComponents.tree_node label="Analytics" is_expanded={true} id="analytics">
  <Graphene.CarbonComponents.tree_node label="Dashboards" id="dashboards" />
  <Graphene.CarbonComponents.tree_node label="Reports" id="reports" />
</Graphene.CarbonComponents.tree_node>
<Graphene.CarbonComponents.tree_node label="Settings" id="settings" />|
        ]
      },
      %Variation{
        id: :sizes,
        attributes: %{label: "Small tree", size: "sm"},
        slots: [
          ~S|<Graphene.CarbonComponents.tree_node label="Favorites" is_expanded={true} id="favorites">
  <Graphene.CarbonComponents.tree_node label="Overview" id="overview" />
  <Graphene.CarbonComponents.tree_node label="Recently viewed" id="recent" />
</Graphene.CarbonComponents.tree_node>
<Graphene.CarbonComponents.tree_node label="Archive" id="archive" />|
        ]
      }
    ]
  end
end
