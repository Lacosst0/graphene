# `tile`

### default

```heex
<.tile >
  Basic tile
</.tile>
```

```html
<cds-tile color-scheme="" id="tile-single-default">
  
  Basic tile

  
</cds-tile>
```

### light

```heex
<.tile color_scheme="light">
  Light tile
</.tile>
```

```html
<cds-tile color-scheme="light" id="tile-single-light">
  
  Light tile

  
</cds-tile>
```

### rounded

```heex
<.tile has_rounded_corners>
  Rounded corners
</.tile>
```

```html
<cds-tile color-scheme="" has-rounded-corners id="tile-single-rounded">
  
  Rounded corners

  
</cds-tile>
```

### content_layout

```heex
<.tile >
  <Graphene.CarbonComponents.stack orientation="vertical" gap="3">
    <Graphene.CarbonComponents.heading>Plan overview</Graphene.CarbonComponents.heading>
    <p>Keep content concise and use stack for spacing instead of extra padding wrappers.</p>
    <Graphene.CarbonComponents.stack orientation="horizontal" gap="2">
      <Graphene.CarbonComponents.tag type="cool-gray">Draft</Graphene.CarbonComponents.tag>
      <Graphene.CarbonComponents.button kind="secondary" size="sm">Review</Graphene.CarbonComponents.button>
    </Graphene.CarbonComponents.stack>
  </Graphene.CarbonComponents.stack>
</.tile>
```

```html
<cds-tile color-scheme="" id="tile-single-content-layout">
  
  <cds-stack gap="3" orientation="vertical">
  
  <cds-heading>
  Plan overview
</cds-heading>
  <p>Keep content concise and use stack for spacing instead of extra padding wrappers.</p>
  <cds-stack gap="2" orientation="horizontal">
  
    <cds-tag open size="md" title="Clear filter" type="cool-gray">
  Draft
</cds-tag>
    <cds-button kind="secondary" link-role="button" size="sm" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Review
  
</cds-button>
  
</cds-stack>

</cds-stack>

  
</cds-tile>
```

### group: scrollable_collection

```heex
<div style="max-height: 16rem; overflow-y: auto; padding-right: 0.25rem;">
  <.tile >
    Alpha
  </.tile>
  <.tile >
    Beta
  </.tile>
  <.tile >
    Gamma
  </.tile>
  <.tile >
    Delta
  </.tile>
  <.tile >
    Epsilon
  </.tile>
</div>
```

```html
<div style="max-height: 16rem; overflow-y: auto; padding-right: 0.25rem;">
  <cds-tile color-scheme="" id="tile-scrollable-collection-alpha">
  
  Alpha

  
</cds-tile>
<cds-tile color-scheme="" id="tile-scrollable-collection-beta">
  
  Beta

  
</cds-tile>
<cds-tile color-scheme="" id="tile-scrollable-collection-gamma">
  
  Gamma

  
</cds-tile>
<cds-tile color-scheme="" id="tile-scrollable-collection-delta">
  
  Delta

  
</cds-tile>
<cds-tile color-scheme="" id="tile-scrollable-collection-epsilon">
  
  Epsilon

  
</cds-tile>

</div>
```
