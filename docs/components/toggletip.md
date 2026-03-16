# `toggletip`

### default

```heex
<.toggletip alignment="bottom" default_open>
  Toggletip label
  <:body_text>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </:body_text>
  <:action>
    <Graphene.CarbonComponents.link href="#">Link action</Graphene.CarbonComponents.link>
  </:action>
  <:action>
    <Graphene.CarbonComponents.button size="sm">Button</Graphene.CarbonComponents.button>
  </:action>
</.toggletip>
```

```html
<cds-toggletip alignment="bottom" alignment-axis-offset="0" button-label="Show information" default-open id="toggletip-single-default">
  
  
  Toggletip label

  <div slot="body-text">
    
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

  </div>
  <div slot="actions">
    
  <cds-link href="#" size="MEDIUM">
  Link action
</cds-link>

  </div><div slot="actions">
    
  <cds-button kind="primary" link-role="button" size="sm" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Button
  
</cds-button>

  </div>

  
  
</cds-toggletip>
```

### top

```heex
<.toggletip alignment="top">
  Info
  <:body_text>
    <p>More details about this option.</p>
  </:body_text>
</.toggletip>
```

```html
<cds-toggletip alignment="top" alignment-axis-offset="0" button-label="Show information" id="toggletip-single-top">
  
  Info

  <div slot="body-text">
    
  <p>More details about this option.</p>

  </div>
  
</cds-toggletip>
```

### right

```heex
<.toggletip alignment="right">
  Help
  <:body_text>
    <p>Short description goes here.</p>
  </:body_text>
  <:action>
    <Graphene.CarbonComponents.button size="sm">Got it</Graphene.CarbonComponents.button>
  </:action>
</.toggletip>
```

```html
<cds-toggletip alignment="right" alignment-axis-offset="0" button-label="Show information" id="toggletip-single-right">
  
  
  Help

  <div slot="body-text">
    
  <p>Short description goes here.</p>

  </div>
  <div slot="actions">
    
  <cds-button kind="primary" link-role="button" size="sm" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Got it
  
</cds-button>

  </div>

  
  
</cds-toggletip>
```
