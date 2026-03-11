# `content_switcher`

### default

```heex
<.content_switcher value="files">
  <:item value="files">Files</:item>
  <:item value="settings">Settings</:item>
</.content_switcher>
```

```html
<cds-content-switcher selected-index="0" selection-mode="automatic" value="files" id="content-switcher-single-default">
  
  
    <cds-content-switcher-item align="top" close-on-activation value="files">
  
      Files
    
  
</cds-content-switcher-item>
  
    <cds-content-switcher-item align="top" close-on-activation value="settings">
  
      Settings
    
  
</cds-content-switcher-item>
  

</cds-content-switcher>
```

### low_contrast

```heex
<.content_switcher value="tasks" low_contrast>
  <:item value="tasks">Tasks</:item>
  <:item value="insights">Insights</:item>
  <:item value="team">Team</:item>
</.content_switcher>
```

```html
<cds-content-switcher low-contrast selected-index="0" selection-mode="automatic" value="tasks" id="content-switcher-single-low-contrast">
  
  
    <cds-content-switcher-item align="top" close-on-activation value="tasks">
  
      Tasks
    
  
</cds-content-switcher-item>
  
    <cds-content-switcher-item align="top" close-on-activation value="insights">
  
      Insights
    
  
</cds-content-switcher-item>
  
    <cds-content-switcher-item align="top" close-on-activation value="team">
  
      Team
    
  
</cds-content-switcher-item>
  

</cds-content-switcher>
```

### group: sizes

```heex
<.content_switcher size="sm" value="one">
  <:item value="one">One</:item>
  <:item value="two">Two</:item>
</.content_switcher>
<.content_switcher size="md" value="one">
  <:item value="one">One</:item>
  <:item value="two">Two</:item>
</.content_switcher>
<.content_switcher size="lg" value="one">
  <:item value="one">One</:item>
  <:item value="two">Two</:item>
</.content_switcher>
<.content_switcher size="xl" value="one">
  <:item value="one">One</:item>
  <:item value="two">Two</:item>
</.content_switcher>
```

```html
<cds-content-switcher selected-index="0" selection-mode="automatic" size="sm" value="one" id="content-switcher-sizes-sm">
  
  
    <cds-content-switcher-item align="top" close-on-activation value="one">
  
      One
    
  
</cds-content-switcher-item>
  
    <cds-content-switcher-item align="top" close-on-activation value="two">
  
      Two
    
  
</cds-content-switcher-item>
  

</cds-content-switcher>
<cds-content-switcher selected-index="0" selection-mode="automatic" size="md" value="one" id="content-switcher-sizes-md">
  
  
    <cds-content-switcher-item align="top" close-on-activation value="one">
  
      One
    
  
</cds-content-switcher-item>
  
    <cds-content-switcher-item align="top" close-on-activation value="two">
  
      Two
    
  
</cds-content-switcher-item>
  

</cds-content-switcher>
<cds-content-switcher selected-index="0" selection-mode="automatic" size="lg" value="one" id="content-switcher-sizes-lg">
  
  
    <cds-content-switcher-item align="top" close-on-activation value="one">
  
      One
    
  
</cds-content-switcher-item>
  
    <cds-content-switcher-item align="top" close-on-activation value="two">
  
      Two
    
  
</cds-content-switcher-item>
  

</cds-content-switcher>
<cds-content-switcher selected-index="0" selection-mode="automatic" size="xl" value="one" id="content-switcher-sizes-xl">
  
  
    <cds-content-switcher-item align="top" close-on-activation value="one">
  
      One
    
  
</cds-content-switcher-item>
  
    <cds-content-switcher-item align="top" close-on-activation value="two">
  
      Two
    
  
</cds-content-switcher-item>
  

</cds-content-switcher>
```
