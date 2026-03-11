# `expandable_tile`

### default

```heex
<.expandable_tile >
    <:above_the_fold_content>
      <div>Above the fold content here</div>
    </:above_the_fold_content>
    <Graphene.CarbonComponents.tile_below_the_fold_content>
      <div>Below the fold content here</div>
    </Graphene.CarbonComponents.tile_below_the_fold_content>
  </.expandable_tile>
```

```html
<cds-expandable-tile color-scheme="" id="expandable-tile-single-default">
  
  <cds-tile-below-the-fold-content>
  
  <div>Below the fold content here</div>

</cds-tile-below-the-fold-content>

  <div slot="above-the-fold-content">
    
  <div>Above the fold content here</div>

  </div>
</cds-expandable-tile>
```

### with_interactive

```heex
<.expandable_tile with_interactive>
    <:above_the_fold_content>
      <div style="width: 100%;">
        <Graphene.CarbonComponents.heading>Usage limits</Graphene.CarbonComponents.heading>
        <p>Summarize the key status in the collapsed view.</p>
        <Graphene.CarbonComponents.button kind="ghost" size="sm">Manage</Graphene.CarbonComponents.button>
      </div>
    </:above_the_fold_content>
    <Graphene.CarbonComponents.tile_below_the_fold_content>
      <div style="width: 100%;">
        <Graphene.CarbonComponents.stack orientation="vertical" gap="2">
          <Graphene.CarbonComponents.link href="#">View details</Graphene.CarbonComponents.link>
          <Graphene.CarbonComponents.link href="#">See pricing</Graphene.CarbonComponents.link>
        </Graphene.CarbonComponents.stack>
      </div>
    </Graphene.CarbonComponents.tile_below_the_fold_content>
  </.expandable_tile>
```

```html
<cds-expandable-tile color-scheme="" with-interactive id="expandable-tile-single-with-interactive">
  
  <cds-tile-below-the-fold-content>
  
  <div style="width: 100%;">
    <cds-stack gap="2" orientation="vertical">
  
      <cds-link href="#" size="MEDIUM">
  View details
</cds-link>
      <cds-link href="#" size="MEDIUM">
  See pricing
</cds-link>
    
</cds-stack>
  </div>

</cds-tile-below-the-fold-content>

  <div slot="above-the-fold-content">
    
  <div style="width: 100%;">
    <cds-heading>
  Usage limits
</cds-heading>
    <p>Summarize the key status in the collapsed view.</p>
    <cds-button kind="ghost" link-role="button" size="sm" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Manage
  
</cds-button>
  </div>

  </div>
</cds-expandable-tile>
```

### narrow_content

```heex
<.expandable_tile with_interactive expanded>
    <:above_the_fold_content>
      <div style="width: 100%;">
        <div style="max-width: 12rem;">
          <Graphene.CarbonComponents.heading>Starter plan</Graphene.CarbonComponents.heading>
          <p>Compact summary copy.</p>
        </div>
      </div>
    </:above_the_fold_content>
    <Graphene.CarbonComponents.tile_below_the_fold_content>
      <div style="width: 100%;">
        <div style="max-width: 12rem;">
          <p>Expanded details stay narrow but the tile remains full width.</p>
        </div>
      </div>
    </Graphene.CarbonComponents.tile_below_the_fold_content>
  </.expandable_tile>
```

```html
<cds-expandable-tile color-scheme="" expanded with-interactive id="expandable-tile-single-narrow-content">
  
  <cds-tile-below-the-fold-content>
  
  <div style="width: 100%;">
    <div style="max-width: 12rem;">
      <p>Expanded details stay narrow but the tile remains full width.</p>
    </div>
  </div>

</cds-tile-below-the-fold-content>

  <div slot="above-the-fold-content">
    
  <div style="width: 100%;">
    <div style="max-width: 12rem;">
      <cds-heading>
  Starter plan
</cds-heading>
      <p>Compact summary copy.</p>
    </div>
  </div>

  </div>
</cds-expandable-tile>
```
