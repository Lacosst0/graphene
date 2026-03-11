# `structured_list`

### default

```heex
<.structured_list
  rows={[%{id: "1", name: "Load Balancer 1", status: "Active"}, %{id: "2", name: "Load Balancer 2", status: "Disabled"}, %{id: "3", name: "Gateway", status: "Active"}]}
>
  <:col :let={row} label="Name"><%= row.name %></:col>
  <:col :let={row} label="Status"><%= row.status %></:col>
</.structured_list>
```

```html
<cds-structured-list id="structured-list-single-default">
  
  <cds-structured-list-head>
  
    <cds-structured-list-header-row>
  
      <cds-structured-list-header-cell>
  
        Name
      
</cds-structured-list-header-cell><cds-structured-list-header-cell>
  
        Status
      
</cds-structured-list-header-cell>
    
</cds-structured-list-header-row>
  
</cds-structured-list-head>
  <cds-structured-list-body>
  
    
      <cds-structured-list-row selection-value="0">
  
        <cds-structured-list-cell>
  
          Load Balancer 1
        
</cds-structured-list-cell><cds-structured-list-cell>
  
          Active
        
</cds-structured-list-cell>
      
</cds-structured-list-row>
    
      <cds-structured-list-row selection-value="1">
  
        <cds-structured-list-cell>
  
          Load Balancer 2
        
</cds-structured-list-cell><cds-structured-list-cell>
  
          Disabled
        
</cds-structured-list-cell>
      
</cds-structured-list-row>
    
      <cds-structured-list-row selection-value="2">
  
        <cds-structured-list-cell>
  
          Gateway
        
</cds-structured-list-cell><cds-structured-list-cell>
  
          Active
        
</cds-structured-list-cell>
      
</cds-structured-list-row>
    
  
</cds-structured-list-body>

</cds-structured-list>
```

### condensed

```heex
<.structured_list
  rows={[%{id: "1", name: "Load Balancer 1", status: "Active"}, %{id: "2", name: "Load Balancer 2", status: "Disabled"}, %{id: "3", name: "Gateway", status: "Active"}]}
  condensed
>
  <:col :let={row} label="Service"><%= row.name %></:col>
  <:col :let={row} label="State"><%= row.status %></:col>
</.structured_list>
```

```html
<cds-structured-list condensed id="structured-list-single-condensed">
  
  <cds-structured-list-head>
  
    <cds-structured-list-header-row>
  
      <cds-structured-list-header-cell>
  
        Service
      
</cds-structured-list-header-cell><cds-structured-list-header-cell>
  
        State
      
</cds-structured-list-header-cell>
    
</cds-structured-list-header-row>
  
</cds-structured-list-head>
  <cds-structured-list-body>
  
    
      <cds-structured-list-row selection-value="0">
  
        <cds-structured-list-cell>
  
          Load Balancer 1
        
</cds-structured-list-cell><cds-structured-list-cell>
  
          Active
        
</cds-structured-list-cell>
      
</cds-structured-list-row>
    
      <cds-structured-list-row selection-value="1">
  
        <cds-structured-list-cell>
  
          Load Balancer 2
        
</cds-structured-list-cell><cds-structured-list-cell>
  
          Disabled
        
</cds-structured-list-cell>
      
</cds-structured-list-row>
    
      <cds-structured-list-row selection-value="2">
  
        <cds-structured-list-cell>
  
          Gateway
        
</cds-structured-list-cell><cds-structured-list-cell>
  
          Active
        
</cds-structured-list-cell>
      
</cds-structured-list-row>
    
  
</cds-structured-list-body>

</cds-structured-list>
```

### selectable

```heex
<.structured_list
  rows={[%{id: "1", name: "Load Balancer 1", status: "Active"}, %{id: "2", name: "Load Balancer 2", status: "Disabled"}, %{id: "3", name: "Gateway", status: "Active"}]}
  row_id={#Function<0.109126383/1 in Storybook.CarbonComponents.StructuredList.row_id>}
  selection_name="structured-list"
  selected_ids={["1"]}
>
  <:col :let={row} label="Name"><%= row.name %></:col>
  <:col :let={row} label="Status"><%= row.status %></:col>
</.structured_list>
```

```html
<cds-structured-list selection-name="structured-list" id="structured-list-single-selectable">
  
  <cds-structured-list-head>
  
    <cds-structured-list-header-row selection-name="structured-list">
  
      <cds-structured-list-header-cell>
  
        Name
      
</cds-structured-list-header-cell><cds-structured-list-header-cell>
  
        Status
      
</cds-structured-list-header-cell>
    
</cds-structured-list-header-row>
  
</cds-structured-list-head>
  <cds-structured-list-body>
  
    
      <cds-structured-list-row selection-name="structured-list" selection-value="0">
  
        <cds-structured-list-cell>
  
          Load Balancer 1
        
</cds-structured-list-cell><cds-structured-list-cell>
  
          Active
        
</cds-structured-list-cell>
      
</cds-structured-list-row>
    
      <cds-structured-list-row selected selection-name="structured-list" selection-value="1">
  
        <cds-structured-list-cell>
  
          Load Balancer 2
        
</cds-structured-list-cell><cds-structured-list-cell>
  
          Disabled
        
</cds-structured-list-cell>
      
</cds-structured-list-row>
    
      <cds-structured-list-row selection-name="structured-list" selection-value="2">
  
        <cds-structured-list-cell>
  
          Gateway
        
</cds-structured-list-cell><cds-structured-list-cell>
  
          Active
        
</cds-structured-list-cell>
      
</cds-structured-list-row>
    
  
</cds-structured-list-body>

</cds-structured-list>
```
