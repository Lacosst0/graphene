# `breadcrumb`

### default

```heex
<.breadcrumb >
  <:item href="#">Home</:item>
  <:item href="#">Catalog</:item>
  <:item current>Current page</:item>
</.breadcrumb>
```

```html
<cds-breadcrumb size="md" id="breadcrumb-single-default">
  
  
    <cds-breadcrumb-item>
  
      
        <cds-breadcrumb-link href="#" size="MEDIUM">
  
          Home
        
</cds-breadcrumb-link>
      
    
</cds-breadcrumb-item>
  
    <cds-breadcrumb-item>
  
      
        <cds-breadcrumb-link href="#" size="MEDIUM">
  
          Catalog
        
</cds-breadcrumb-link>
      
    
</cds-breadcrumb-item>
  
    <cds-breadcrumb-item>
  
      
        Current page
      
    
</cds-breadcrumb-item>
  

</cds-breadcrumb>
```

### no_trailing_slash

```heex
<.breadcrumb no_trailing_slash>
  <:item href="#">Home</:item>
  <:item href="#">Library</:item>
  <:item current>Components</:item>
</.breadcrumb>
```

```html
<cds-breadcrumb no-trailing-slash size="md" id="breadcrumb-single-no-trailing-slash">
  
  
    <cds-breadcrumb-item>
  
      
        <cds-breadcrumb-link href="#" size="MEDIUM">
  
          Home
        
</cds-breadcrumb-link>
      
    
</cds-breadcrumb-item>
  
    <cds-breadcrumb-item>
  
      
        <cds-breadcrumb-link href="#" size="MEDIUM">
  
          Library
        
</cds-breadcrumb-link>
      
    
</cds-breadcrumb-item>
  
    <cds-breadcrumb-item>
  
      
        Components
      
    
</cds-breadcrumb-item>
  

</cds-breadcrumb>
```

### small

```heex
<.breadcrumb size="sm">
  <:item href="#">Home</:item>
  <:item href="#">Docs</:item>
  <:item current>Breadcrumb</:item>
</.breadcrumb>
```

```html
<cds-breadcrumb size="sm" id="breadcrumb-single-small">
  
  
    <cds-breadcrumb-item>
  
      
        <cds-breadcrumb-link href="#" size="MEDIUM">
  
          Home
        
</cds-breadcrumb-link>
      
    
</cds-breadcrumb-item>
  
    <cds-breadcrumb-item>
  
      
        <cds-breadcrumb-link href="#" size="MEDIUM">
  
          Docs
        
</cds-breadcrumb-link>
      
    
</cds-breadcrumb-item>
  
    <cds-breadcrumb-item>
  
      
        Breadcrumb
      
    
</cds-breadcrumb-item>
  

</cds-breadcrumb>
```
