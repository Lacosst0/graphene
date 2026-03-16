# `combo_button`

### default

```heex
<.combo_button label="Primary action" size="lg">
  <:item label="Second action" />
  <:item label="Third action" />
  <:item label="Danger action" divider kind="danger" />
</.combo_button>
```

```html
<cds-combo-button label="Primary action" menu-alignment="top" size="lg" tooltip-alignment="top" tooltip-content="Additional actions" id="combo-button-single-default">
  
  <cds-menu>
  
    

  
  <cds-menu-item danger-description="danger" label="Second action">
  
    
  
  
</cds-menu-item>

  
  <cds-menu-item danger-description="danger" label="Third action">
  
    
  
  
</cds-menu-item>

  
    <cds-menu-item-divider>
  
</cds-menu-item-divider>
  
  <cds-menu-item danger-description="danger" kind="danger" label="Danger action">
  
    
  
  
</cds-menu-item>


  
</cds-menu>

</cds-combo-button>
```

### small

```heex
<.combo_button label="Small combo" size="sm">
  <:item label="Secondary" />
  <:item label="Tertiary" />
</.combo_button>
```

```html
<cds-combo-button label="Small combo" menu-alignment="top" size="sm" tooltip-alignment="top" tooltip-content="Additional actions" id="combo-button-single-small">
  
  <cds-menu>
  
    

  
  <cds-menu-item danger-description="danger" label="Secondary">
  
    
  
  
</cds-menu-item>

  
  <cds-menu-item danger-description="danger" label="Tertiary">
  
    
  
  
</cds-menu-item>


  
</cds-menu>

</cds-combo-button>
```

### disabled

```heex
<.combo_button disabled label="Disabled">
  <:item label="Secondary" />
  <:item label="Tertiary" />
</.combo_button>
```

```html
<cds-combo-button disabled label="Disabled" menu-alignment="top" size="lg" tooltip-alignment="top" tooltip-content="Additional actions" id="combo-button-single-disabled">
  
  <cds-menu>
  
    

  
  <cds-menu-item danger-description="danger" label="Secondary">
  
    
  
  
</cds-menu-item>

  
  <cds-menu-item danger-description="danger" label="Tertiary">
  
    
  
  
</cds-menu-item>


  
</cds-menu>

</cds-combo-button>
```
