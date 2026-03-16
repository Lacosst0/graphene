# `menu`

### default

```heex
<div class="psb" style="position: relative; min-height: 240px;">
  <.menu label="Actions" open size="lg" y={140} x={200}>
    <Graphene.CarbonComponents.menu_item label="First action" />
    <Graphene.CarbonComponents.menu_item label="Second action" />
    <Graphene.CarbonComponents.menu_item_divider />
    <Graphene.CarbonComponents.menu_item kind="danger" label="Danger action" />
  </.menu>
</div>
```

```html
<div class="psb" style="position: relative; min-height: 240px;">
  <cds-menu open size="lg" label="Actions" x="200" y="140" id="menu-single-default">
  
  <cds-menu-item danger-description="danger" kind="default" label="First action">
  
  
</cds-menu-item>
<cds-menu-item danger-description="danger" kind="default" label="Second action">
  
  
</cds-menu-item>
<cds-menu-item-divider>
  
</cds-menu-item-divider>
<cds-menu-item danger-description="danger" kind="danger" label="Danger action">
  
  
</cds-menu-item>

</cds-menu>

</div>
```

### secondary

```heex
<div class="psb" style="position: relative; min-height: 240px;">
  <.menu label="More" open size="md" y={140} x={520}>
    <Graphene.CarbonComponents.menu_item label="Edit" />
    <Graphene.CarbonComponents.menu_item label="Duplicate" />
  </.menu>
</div>
```

```html
<div class="psb" style="position: relative; min-height: 240px;">
  <cds-menu open size="md" label="More" x="520" y="140" id="menu-single-secondary">
  
  <cds-menu-item danger-description="danger" kind="default" label="Edit">
  
  
</cds-menu-item>
<cds-menu-item danger-description="danger" kind="default" label="Duplicate">
  
  
</cds-menu-item>

</cds-menu>

</div>
```

### group: sizes

```heex
<div class="psb" style="position: relative; min-height: 240px;">
  <.menu label="Menu" open size="sm" y={360} x={200}>
    <Graphene.CarbonComponents.menu_item label="Item A" />
    <Graphene.CarbonComponents.menu_item label="Item B" />
  </.menu>
</div>

<div class="psb" style="position: relative; min-height: 240px;">
  <.menu label="Menu" open size="md" y={360} x={420}>
    <Graphene.CarbonComponents.menu_item label="Item A" />
    <Graphene.CarbonComponents.menu_item label="Item B" />
  </.menu>
</div>

<div class="psb" style="position: relative; min-height: 240px;">
  <.menu label="Menu" open size="lg" y={360} x={640}>
    <Graphene.CarbonComponents.menu_item label="Item A" />
    <Graphene.CarbonComponents.menu_item label="Item B" />
  </.menu>
</div>

<div class="psb" style="position: relative; min-height: 240px;">
  <.menu label="Menu" open size="xl" y={360} x={860}>
    <Graphene.CarbonComponents.menu_item label="Item A" />
    <Graphene.CarbonComponents.menu_item label="Item B" />
  </.menu>
</div>
```

```html
<div class="psb" style="position: relative; min-height: 240px;">
  <cds-menu open size="sm" label="Menu" x="200" y="360" id="menu-sizes-sm">
  
  <cds-menu-item danger-description="danger" kind="default" label="Item A">
  
  
</cds-menu-item>
<cds-menu-item danger-description="danger" kind="default" label="Item B">
  
  
</cds-menu-item>

</cds-menu>

</div>
<div class="psb" style="position: relative; min-height: 240px;">
  <cds-menu open size="md" label="Menu" x="420" y="360" id="menu-sizes-md">
  
  <cds-menu-item danger-description="danger" kind="default" label="Item A">
  
  
</cds-menu-item>
<cds-menu-item danger-description="danger" kind="default" label="Item B">
  
  
</cds-menu-item>

</cds-menu>

</div>
<div class="psb" style="position: relative; min-height: 240px;">
  <cds-menu open size="lg" label="Menu" x="640" y="360" id="menu-sizes-lg">
  
  <cds-menu-item danger-description="danger" kind="default" label="Item A">
  
  
</cds-menu-item>
<cds-menu-item danger-description="danger" kind="default" label="Item B">
  
  
</cds-menu-item>

</cds-menu>

</div>
<div class="psb" style="position: relative; min-height: 240px;">
  <cds-menu open size="xl" label="Menu" x="860" y="360" id="menu-sizes-xl">
  
  <cds-menu-item danger-description="danger" kind="default" label="Item A">
  
  
</cds-menu-item>
<cds-menu-item danger-description="danger" kind="default" label="Item B">
  
  
</cds-menu-item>

</cds-menu>

</div>
```
