# `tree_view`

### default

```heex
<.tree_view label="Primary navigation">
  <Graphene.CarbonComponents.tree_node label="Products" is_expanded={true} id="products">
    <Graphene.CarbonComponents.tree_node label="Catalog" id="catalog" />
    <Graphene.CarbonComponents.tree_node label="Pricing" id="pricing" />
    <Graphene.CarbonComponents.tree_node label="Releases" id="releases" />
  </Graphene.CarbonComponents.tree_node>
  <Graphene.CarbonComponents.tree_node label="Teams" is_expanded={true} id="teams">
    <Graphene.CarbonComponents.tree_node label="Design" id="design" />
    <Graphene.CarbonComponents.tree_node label="Engineering" id="engineering" selected />
    <Graphene.CarbonComponents.tree_node label="Marketing" id="marketing" disabled />
  </Graphene.CarbonComponents.tree_node>
  <Graphene.CarbonComponents.tree_node label="Settings" id="settings" active />
</.tree_view>
```

```html
<cds-tree-view label="Primary navigation" size="sm" id="tree-view-single-default">
  
  <cds-tree-node id="products" is-expanded label="Products">
  
  <cds-tree-node id="catalog" label="Catalog">
  
</cds-tree-node>
  <cds-tree-node id="pricing" label="Pricing">
  
</cds-tree-node>
  <cds-tree-node id="releases" label="Releases">
  
</cds-tree-node>

</cds-tree-node>
<cds-tree-node id="teams" is-expanded label="Teams">
  
  <cds-tree-node id="design" label="Design">
  
</cds-tree-node>
  <cds-tree-node id="engineering" label="Engineering" selected>
  
</cds-tree-node>
  <cds-tree-node disabled id="marketing" label="Marketing">
  
</cds-tree-node>

</cds-tree-node>
<cds-tree-node active id="settings" label="Settings">
  
</cds-tree-node>

</cds-tree-view>
```

### nested

```heex
<.tree_view label="Workspace navigation">
  <Graphene.CarbonComponents.tree_node label="Projects" is_expanded={true} id="projects">
    <Graphene.CarbonComponents.tree_node label="Alpha" id="alpha" />
    <Graphene.CarbonComponents.tree_node label="Beta" id="beta" />
    <Graphene.CarbonComponents.tree_node label="Gamma" id="gamma" />
  </Graphene.CarbonComponents.tree_node>
  <Graphene.CarbonComponents.tree_node label="Analytics" is_expanded={true} id="analytics">
    <Graphene.CarbonComponents.tree_node label="Dashboards" id="dashboards" />
    <Graphene.CarbonComponents.tree_node label="Reports" id="reports" />
  </Graphene.CarbonComponents.tree_node>
  <Graphene.CarbonComponents.tree_node label="Settings" id="settings" />
</.tree_view>
```

```html
<cds-tree-view label="Workspace navigation" size="sm" id="tree-view-single-nested">
  
  <cds-tree-node id="projects" is-expanded label="Projects">
  
  <cds-tree-node id="alpha" label="Alpha">
  
</cds-tree-node>
  <cds-tree-node id="beta" label="Beta">
  
</cds-tree-node>
  <cds-tree-node id="gamma" label="Gamma">
  
</cds-tree-node>

</cds-tree-node>
<cds-tree-node id="analytics" is-expanded label="Analytics">
  
  <cds-tree-node id="dashboards" label="Dashboards">
  
</cds-tree-node>
  <cds-tree-node id="reports" label="Reports">
  
</cds-tree-node>

</cds-tree-node>
<cds-tree-node id="settings" label="Settings">
  
</cds-tree-node>

</cds-tree-view>
```

### sizes

```heex
<.tree_view label="Small tree" size="sm">
  <Graphene.CarbonComponents.tree_node label="Favorites" is_expanded={true} id="favorites">
    <Graphene.CarbonComponents.tree_node label="Overview" id="overview" />
    <Graphene.CarbonComponents.tree_node label="Recently viewed" id="recent" />
  </Graphene.CarbonComponents.tree_node>
  <Graphene.CarbonComponents.tree_node label="Archive" id="archive" />
</.tree_view>
```

```html
<cds-tree-view label="Small tree" size="sm" id="tree-view-single-sizes">
  
  <cds-tree-node id="favorites" is-expanded label="Favorites">
  
  <cds-tree-node id="overview" label="Overview">
  
</cds-tree-node>
  <cds-tree-node id="recent" label="Recently viewed">
  
</cds-tree-node>

</cds-tree-node>
<cds-tree-node id="archive" label="Archive">
  
</cds-tree-node>

</cds-tree-view>
```
