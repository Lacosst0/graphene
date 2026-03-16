# `popover`

## autoalign

### default

```heex
<.popover autoalign alignment_axis_offset="8">
  <:trigger>
    <Graphene.CarbonComponents.button kind="secondary">Auto align popover</Graphene.CarbonComponents.button>
  </:trigger>
  <:content>
    <p>Auto-aligned popover content.</p>
  </:content>
</.popover>
```

```html
<cds-popover alignment-axis-offset="8" autoalign backgroundToken="layer" caret dropShadow id="auto-align-single-default">
  
  
    
  <cds-button kind="secondary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Auto align popover
  
</cds-button>

  
  
    <cds-popover-content backgroundToken="layer" dropShadow slot="content">
  
      
  <p>Auto-aligned popover content.</p>

    
</cds-popover-content>
  
  
  

</cds-popover>
```

### offset_16

```heex
<.popover autoalign alignment_axis_offset="16">
  <:trigger>
    <Graphene.CarbonComponents.button kind="secondary">Offset 16</Graphene.CarbonComponents.button>
  </:trigger>
  <:content>
    <p>Offset axis example.</p>
  </:content>
</.popover>
```

```html
<cds-popover alignment-axis-offset="16" autoalign backgroundToken="layer" caret dropShadow id="auto-align-single-offset-16">
  
  
    
  <cds-button kind="secondary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Offset 16
  
</cds-button>

  
  
    <cds-popover-content backgroundToken="layer" dropShadow slot="content">
  
      
  <p>Offset axis example.</p>

    
</cds-popover-content>
  
  
  

</cds-popover>
```

### with_caret

```heex
<.popover autoalign caret border>
  <:trigger>
    <Graphene.CarbonComponents.button kind="secondary">Caret popover</Graphene.CarbonComponents.button>
  </:trigger>
  <:content>
    <p>Auto align with caret.</p>
  </:content>
</.popover>
```

```html
<cds-popover autoalign backgroundToken="layer" border caret dropShadow id="auto-align-single-with-caret">
  
  
    
  <cds-button kind="secondary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Caret popover
  
</cds-button>

  
  
    <cds-popover-content backgroundToken="layer" dropShadow slot="content">
  
      
  <p>Auto align with caret.</p>

    
</cds-popover-content>
  
  
  

</cds-popover>
```


## basic

### bottom

```heex
<.popover align="bottom">
  <:trigger>
    <Graphene.CarbonComponents.button kind="secondary">Open popover</Graphene.CarbonComponents.button>
  </:trigger>
  <:content>
    <p>Popover content goes here.</p>
  </:content>
</.popover>
```

```html
<cds-popover align="bottom" backgroundToken="layer" caret dropShadow id="basic-single-bottom">
  
  
    
  <cds-button kind="secondary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Open popover
  
</cds-button>

  
  
    <cds-popover-content backgroundToken="layer" dropShadow slot="content">
  
      
  <p>Popover content goes here.</p>

    
</cds-popover-content>
  
  
  

</cds-popover>
```

### top

```heex
<.popover align="top">
  <:trigger>
    <Graphene.CarbonComponents.button kind="secondary">Top popover</Graphene.CarbonComponents.button>
  </:trigger>
  <:content>
    <p>Top aligned content.</p>
  </:content>
</.popover>
```

```html
<cds-popover align="top" backgroundToken="layer" caret dropShadow id="basic-single-top">
  
  
    
  <cds-button kind="secondary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Top popover
  
</cds-button>

  
  
    <cds-popover-content backgroundToken="layer" dropShadow slot="content">
  
      
  <p>Top aligned content.</p>

    
</cds-popover-content>
  
  
  

</cds-popover>
```

### right

```heex
<.popover align="right">
  <:trigger>
    <Graphene.CarbonComponents.button kind="secondary">Right popover</Graphene.CarbonComponents.button>
  </:trigger>
  <:content>
    <p>Right aligned content.</p>
  </:content>
</.popover>
```

```html
<cds-popover align="right" backgroundToken="layer" caret dropShadow id="basic-single-right">
  
  
    
  <cds-button kind="secondary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Right popover
  
</cds-button>

  
  
    <cds-popover-content backgroundToken="layer" dropShadow slot="content">
  
      
  <p>Right aligned content.</p>

    
</cds-popover-content>
  
  
  

</cds-popover>
```
