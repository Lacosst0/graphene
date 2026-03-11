# `menu_button`

### default

```heex
<.menu_button label="Actions" size="lg" kind="primary">
  <:item label="First action" />
  <:item label="Second action" />
  <:item label="Third action" disabled />
</.menu_button>
```

```html
<cds-menu-button kind="primary" label="Actions" menu-alignment="bottom" menu-background-token="layer" size="lg" tab-index="0" id="menu-button-single-default">
  
  <cds-menu>
  
    

  
  <cds-menu-item danger-description="danger" label="First action">
  
    
  
  
</cds-menu-item>

  
  <cds-menu-item danger-description="danger" label="Second action">
  
    
  
  
</cds-menu-item>

  
  <cds-menu-item danger-description="danger" disabled label="Third action">
  
    
  
  
</cds-menu-item>


  
</cds-menu>

</cds-menu-button>
```

### ghost

```heex
<.menu_button label="Menu" size="md" kind="ghost">
  <:item label="Edit" />
  <:item label="Delete" kind="danger" />
</.menu_button>
```

```html
<cds-menu-button kind="ghost" label="Menu" menu-alignment="bottom" menu-background-token="layer" size="md" tab-index="0" id="menu-button-single-ghost">
  
  <cds-menu>
  
    

  
  <cds-menu-item danger-description="danger" label="Edit">
  
    
  
  
</cds-menu-item>

  
  <cds-menu-item danger-description="danger" kind="danger" label="Delete">
  
    
  
  
</cds-menu-item>


  
</cds-menu>

</cds-menu-button>
```

### group: sizes

```heex
<.menu_button label="Menu" size="sm">
  <:item label="Item A" />
  <:item label="Item B" />
</.menu_button>
<.menu_button label="Menu" size="md">
  <:item label="Item A" />
  <:item label="Item B" />
</.menu_button>
<.menu_button label="Menu" size="lg">
  <:item label="Item A" />
  <:item label="Item B" />
</.menu_button>
```

```html
<cds-menu-button kind="primary" label="Menu" menu-alignment="bottom" menu-background-token="layer" size="sm" tab-index="0" id="menu-button-sizes-sm">
  
  <cds-menu>
  
    

  
  <cds-menu-item danger-description="danger" label="Item A">
  
    
  
  
</cds-menu-item>

  
  <cds-menu-item danger-description="danger" label="Item B">
  
    
  
  
</cds-menu-item>


  
</cds-menu>

</cds-menu-button>
<cds-menu-button kind="primary" label="Menu" menu-alignment="bottom" menu-background-token="layer" size="md" tab-index="0" id="menu-button-sizes-md">
  
  <cds-menu>
  
    

  
  <cds-menu-item danger-description="danger" label="Item A">
  
    
  
  
</cds-menu-item>

  
  <cds-menu-item danger-description="danger" label="Item B">
  
    
  
  
</cds-menu-item>


  
</cds-menu>

</cds-menu-button>
<cds-menu-button kind="primary" label="Menu" menu-alignment="bottom" menu-background-token="layer" size="lg" tab-index="0" id="menu-button-sizes-lg">
  
  <cds-menu>
  
    

  
  <cds-menu-item danger-description="danger" label="Item A">
  
    
  
  
</cds-menu-item>

  
  <cds-menu-item danger-description="danger" label="Item B">
  
    
  
  
</cds-menu-item>


  
</cds-menu>

</cds-menu-button>
```
