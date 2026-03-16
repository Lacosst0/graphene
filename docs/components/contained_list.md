# `contained_list`

### default

```heex
<.contained_list >
  <:label>Contained list</:label>
  <:item>First item</:item>
  <:item>Second item</:item>
  <:item>Third item</:item>
</.contained_list>
```

```html
<cds-contained-list id="contained-list-single-default">
  
  <div slot="label">
    Contained list
  </div>
  
  
    <cds-contained-list-item>
  
      First item
    
  
  
</cds-contained-list-item>
  
    <cds-contained-list-item>
  
      Second item
    
  
  
</cds-contained-list-item>
  
    <cds-contained-list-item>
  
      Third item
    
  
  
</cds-contained-list-item>
  

  
  
</cds-contained-list>
```

### interactive

```heex
<.contained_list >
  <:label>Clickable list</:label>
  <:item clickable={true}>Clickable item</:item>
  <:item clickable={true}>Another action</:item>
  <:item disabled={true}>Disabled</:item>
</.contained_list>
```

```html
<cds-contained-list id="contained-list-single-interactive">
  
  <div slot="label">
    Clickable list
  </div>
  
  
    <cds-contained-list-item clickable>
  
      Clickable item
    
  
  
</cds-contained-list-item>
  
    <cds-contained-list-item clickable>
  
      Another action
    
  
  
</cds-contained-list-item>
  
    <cds-contained-list-item disabled>
  
      Disabled
    
  
  
</cds-contained-list-item>
  

  
  
</cds-contained-list>
```

### group: sizes

```heex
<.contained_list size="sm">
  <:label>Size sm</:label>
  <:item>Alpha</:item>
  <:item>Beta</:item>
</.contained_list>
<.contained_list size="md">
  <:label>Size md</:label>
  <:item>Alpha</:item>
  <:item>Beta</:item>
</.contained_list>
<.contained_list size="lg">
  <:label>Size lg</:label>
  <:item>Alpha</:item>
  <:item>Beta</:item>
</.contained_list>
```

```html
<cds-contained-list size="sm" id="contained-list-sizes-sm">
  
  <div slot="label">
    Size sm
  </div>
  
  
    <cds-contained-list-item>
  
      Alpha
    
  
  
</cds-contained-list-item>
  
    <cds-contained-list-item>
  
      Beta
    
  
  
</cds-contained-list-item>
  

  
  
</cds-contained-list>
<cds-contained-list size="md" id="contained-list-sizes-md">
  
  <div slot="label">
    Size md
  </div>
  
  
    <cds-contained-list-item>
  
      Alpha
    
  
  
</cds-contained-list-item>
  
    <cds-contained-list-item>
  
      Beta
    
  
  
</cds-contained-list-item>
  

  
  
</cds-contained-list>
<cds-contained-list size="lg" id="contained-list-sizes-lg">
  
  <div slot="label">
    Size lg
  </div>
  
  
    <cds-contained-list-item>
  
      Alpha
    
  
  
</cds-contained-list-item>
  
    <cds-contained-list-item>
  
      Beta
    
  
  
</cds-contained-list-item>
  

  
  
</cds-contained-list>
```
