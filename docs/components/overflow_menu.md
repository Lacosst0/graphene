# `overflow_menu`

### default

```heex
<.overflow_menu >
  <:icon>
    <Graphene.Icons.icon fit="width" name="overflow-menu--horizontal" />
  </:icon>
  <:tooltip_content>Options</:tooltip_content>
  <:item>Action 1</:item>
  <:item>Action 2</:item>
  <:item danger>Delete</:item>
</.overflow_menu>
```

```html
<cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" id="overflow-menu-single-default">
  
  <span slot="icon">
    
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>

  </span>
  <span slot="tooltip-content">
    Options
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Action 1
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Action 2
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item danger size="md">
  
        Delete
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>
```

### autoalign

```heex
<.overflow_menu autoalign>
  <:icon>
    <Graphene.Icons.icon fit="width" name="overflow-menu--horizontal" />
  </:icon>
  <:tooltip_content>Auto align</:tooltip_content>
  <:item>Edit</:item>
  <:item>Duplicate</:item>
</.overflow_menu>
```

```html
<cds-overflow-menu align="top" autoalign close-on-activation enter-delay-ms="100" index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" id="overflow-menu-single-autoalign">
  
  <span slot="icon">
    
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>

  </span>
  <span slot="tooltip-content">
    Auto align
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Edit
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Duplicate
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>
```

### disabled

```heex
<.overflow_menu disabled>
  <:icon>
    <Graphene.Icons.icon fit="width" name="overflow-menu--horizontal" />
  </:icon>
  <:tooltip_content>Disabled</:tooltip_content>
  <:item>Action 1</:item>
</.overflow_menu>
```

```html
<cds-overflow-menu align="top" close-on-activation disabled enter-delay-ms="100" index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" id="overflow-menu-single-disabled">
  
  <span slot="icon">
    
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>

  </span>
  <span slot="tooltip-content">
    Disabled
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Action 1
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>
```
