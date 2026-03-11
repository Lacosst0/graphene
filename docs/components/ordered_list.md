# `ordered_list`

## list/ordered

### default

```heex
<.ordered_list >
  <:item>First item</:item>
  <:item>Second item</:item>
  <:item>Third item</:item>
</.ordered_list>
```

```html
<cds-ordered-list id="ordered-single-default">
  
  
    <cds-list-item>
  
      First item
    
  
</cds-list-item>
  
    <cds-list-item>
  
      Second item
    
  
</cds-list-item>
  
    <cds-list-item>
  
      Third item
    
  
</cds-list-item>
  
  
  

</cds-ordered-list>
```

### native

```heex
<.ordered_list native>
  <:item>Step one</:item>
  <:item>Step two</:item>
</.ordered_list>
```

```html
<cds-ordered-list native id="ordered-single-native">
  
  
    <cds-list-item>
  
      Step one
    
  
</cds-list-item>
  
    <cds-list-item>
  
      Step two
    
  
</cds-list-item>
  
  
  

</cds-ordered-list>
```

### expressive

```heex
<.ordered_list is_expressive>
  <:item>Expressive one</:item>
  <:item>Expressive two</:item>
</.ordered_list>
```

```html
<cds-ordered-list is-expressive id="ordered-single-expressive">
  
  
    <cds-list-item>
  
      Expressive one
    
  
</cds-list-item>
  
    <cds-list-item>
  
      Expressive two
    
  
</cds-list-item>
  
  
  

</cds-ordered-list>
```
