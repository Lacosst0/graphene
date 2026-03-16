# `layer`

### base

```heex
<.layer level="0">
  <div style="padding: 1rem; border: 1px solid #e0e0e0;">Base layer</div>
</.layer>
```

```html
<cds-layer level="0" id="layer-single-base">
  
  <div style="padding: 1rem; border: 1px solid #e0e0e0;">Base layer</div>

  
</cds-layer>
```

### nested

```heex
<.layer level="0">
  <div style="padding: 1rem; border: 1px solid #e0e0e0;">
    Base layer
    <Graphene.CarbonComponents.layer level="1">
      <div style="margin-top: 0.5rem; padding: 1rem; border: 1px dashed #8d8d8d;">
        Nested layer
      </div>
    </Graphene.CarbonComponents.layer>
  </div>
</.layer>
```

```html
<cds-layer level="0" id="layer-single-nested">
  
  <div style="padding: 1rem; border: 1px solid #e0e0e0;">
  Base layer
  <cds-layer level="1">
  
    <div style="margin-top: 0.5rem; padding: 1rem; border: 1px dashed #8d8d8d;">
      Nested layer
    </div>
  
  
</cds-layer>
</div>

  
</cds-layer>
```

### deep

```heex
<.layer level="0">
  <div style="padding: 1rem; border: 1px solid #e0e0e0;">
    Level 0
    <Graphene.CarbonComponents.layer level="1">
      <div style="margin-top: 0.5rem; padding: 1rem; border: 1px dashed #8d8d8d;">
        Level 1
        <Graphene.CarbonComponents.layer level="2">
          <div style="margin-top: 0.5rem; padding: 1rem; border: 1px dotted #525252;">
            Level 2
          </div>
        </Graphene.CarbonComponents.layer>
      </div>
    </Graphene.CarbonComponents.layer>
  </div>
</.layer>
```

```html
<cds-layer level="0" id="layer-single-deep">
  
  <div style="padding: 1rem; border: 1px solid #e0e0e0;">
  Level 0
  <cds-layer level="1">
  
    <div style="margin-top: 0.5rem; padding: 1rem; border: 1px dashed #8d8d8d;">
      Level 1
      <cds-layer level="2">
  
        <div style="margin-top: 0.5rem; padding: 1rem; border: 1px dotted #525252;">
          Level 2
        </div>
      
  
</cds-layer>
    </div>
  
  
</cds-layer>
</div>

  
</cds-layer>
```
