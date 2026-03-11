# `unordered_list`

## list/unordered

### default

```heex
<.unordered_list >
  <:item>First item</:item>
  <:item>Second item</:item>
  <:item>Third item</:item>
</.unordered_list>
```

```html
<cds-unordered-list id="unordered-single-default">
  
  
    <cds-list-item>
  
      First item
    
  
</cds-list-item>
  
    <cds-list-item>
  
      Second item
    
  
</cds-list-item>
  
    <cds-list-item>
  
      Third item
    
  
</cds-list-item>
  
  
  

</cds-unordered-list>
```

### nested

```heex
<.unordered_list nested>
  <:item>Outer item</:item>
  <:item>Another item</:item>
</.unordered_list>
```

```html
<cds-unordered-list nested id="unordered-single-nested">
  
  
    <cds-list-item>
  
      Outer item
    
  
</cds-list-item>
  
    <cds-list-item>
  
      Another item
    
  
</cds-list-item>
  
  
  

</cds-unordered-list>
```

### expressive

```heex
<.unordered_list is_expressive>
  <:item>Expressive one</:item>
  <:item>Expressive two</:item>
</.unordered_list>
```

```html
<cds-unordered-list is-expressive id="unordered-single-expressive">
  
  
    <cds-list-item>
  
      Expressive one
    
  
</cds-list-item>
  
    <cds-list-item>
  
      Expressive two
    
  
</cds-list-item>
  
  
  

</cds-unordered-list>
```
