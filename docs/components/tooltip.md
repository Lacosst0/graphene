# `tooltip`

## basic

### bottom

```heex
<.tooltip align="bottom">
  <:trigger>
    <Graphene.CarbonComponents.button kind="ghost" aria-labelledby="tooltip-content">Hover me</Graphene.CarbonComponents.button>
  </:trigger>
  <:content id="tooltip-content">Tooltip content</:content>
</.tooltip>
```

```html
<cds-tooltip align="bottom" backgroundToken="layer" caret dropShadow enter-delay-ms="100" leave-delay-ms="300" timeoutId="0" id="basic-single-bottom">
  
  
    
  <cds-button kind="ghost" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" aria-labelledby="tooltip-content">
  Hover me
  
</cds-button>

  
  
    <cds-tooltip-content backgroundToken="layer" dropShadow slot="content" id="tooltip-content">
  
      Tooltip content
    
</cds-tooltip-content>
  
  
  

</cds-tooltip>
```

### top

```heex
<.tooltip align="top">
  <:trigger>
    <Graphene.CarbonComponents.button kind="ghost" aria-labelledby="tooltip-top">Top tooltip</Graphene.CarbonComponents.button>
  </:trigger>
  <:content id="tooltip-top">Top content</:content>
</.tooltip>
```

```html
<cds-tooltip align="top" backgroundToken="layer" caret dropShadow enter-delay-ms="100" leave-delay-ms="300" timeoutId="0" id="basic-single-top">
  
  
    
  <cds-button kind="ghost" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" aria-labelledby="tooltip-top">
  Top tooltip
  
</cds-button>

  
  
    <cds-tooltip-content backgroundToken="layer" dropShadow slot="content" id="tooltip-top">
  
      Top content
    
</cds-tooltip-content>
  
  
  

</cds-tooltip>
```

### right

```heex
<.tooltip align="right">
  <:trigger>
    <Graphene.CarbonComponents.button kind="ghost" aria-labelledby="tooltip-right">Right tooltip</Graphene.CarbonComponents.button>
  </:trigger>
  <:content id="tooltip-right">Right content</:content>
</.tooltip>
```

```html
<cds-tooltip align="right" backgroundToken="layer" caret dropShadow enter-delay-ms="100" leave-delay-ms="300" timeoutId="0" id="basic-single-right">
  
  
    
  <cds-button kind="ghost" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" aria-labelledby="tooltip-right">
  Right tooltip
  
</cds-button>

  
  
    <cds-tooltip-content backgroundToken="layer" dropShadow slot="content" id="tooltip-right">
  
      Right content
    
</cds-tooltip-content>
  
  
  

</cds-tooltip>
```
