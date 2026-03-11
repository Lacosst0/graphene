# `tabs`

### default

```heex
<.tabs >
  <:tab target="tab-panel-1" title="First">First</:tab>
  <:tab target="tab-panel-2" title="Second">Second</:tab>
</.tabs>
```

```html
<cds-tabs selected-index="0" selected-item-assistive-text="Selected an item." selecting-items-assistive-text="Selecting items. Use up and down arrow keys to navigate." selection-mode="automatic" type="" id="tabs-single-default">
  
  
    <cds-tab align="top" close-on-activation tabTitle="First" target="tab-panel-1" type="">
  
      First
    
</cds-tab>
  
    <cds-tab align="top" close-on-activation tabTitle="Second" target="tab-panel-2" type="">
  
      Second
    
</cds-tab>
  

</cds-tabs>
```

### contained

```heex
<.tabs type="contained">
  <:tab target="tab-panel-a" title="Overview">Overview</:tab>
  <:tab target="tab-panel-b" title="Details">Details</:tab>
  <:tab target="tab-panel-c" title="Activity">Activity</:tab>
</.tabs>
```

```html
<cds-tabs selected-index="0" selected-item-assistive-text="Selected an item." selecting-items-assistive-text="Selecting items. Use up and down arrow keys to navigate." selection-mode="automatic" type="contained" id="tabs-single-contained">
  
  
    <cds-tab align="top" close-on-activation tabTitle="Overview" target="tab-panel-a" type="">
  
      Overview
    
</cds-tab>
  
    <cds-tab align="top" close-on-activation tabTitle="Details" target="tab-panel-b" type="">
  
      Details
    
</cds-tab>
  
    <cds-tab align="top" close-on-activation tabTitle="Activity" target="tab-panel-c" type="">
  
      Activity
    
</cds-tab>
  

</cds-tabs>
```

### group: sizes

```heex
<.tabs size="sm">
  <:tab target="tab-panel-one" title="One">One</:tab>
  <:tab target="tab-panel-two" title="Two">Two</:tab>
</.tabs>
<.tabs size="md">
  <:tab target="tab-panel-one" title="One">One</:tab>
  <:tab target="tab-panel-two" title="Two">Two</:tab>
</.tabs>
<.tabs size="lg">
  <:tab target="tab-panel-one" title="One">One</:tab>
  <:tab target="tab-panel-two" title="Two">Two</:tab>
</.tabs>
<.tabs size="xl">
  <:tab target="tab-panel-one" title="One">One</:tab>
  <:tab target="tab-panel-two" title="Two">Two</:tab>
</.tabs>
```

```html
<cds-tabs selected-index="0" selected-item-assistive-text="Selected an item." selecting-items-assistive-text="Selecting items. Use up and down arrow keys to navigate." selection-mode="automatic" size="sm" type="" id="tabs-sizes-sm">
  
  
    <cds-tab align="top" close-on-activation tabTitle="One" target="tab-panel-one" type="">
  
      One
    
</cds-tab>
  
    <cds-tab align="top" close-on-activation tabTitle="Two" target="tab-panel-two" type="">
  
      Two
    
</cds-tab>
  

</cds-tabs>
<cds-tabs selected-index="0" selected-item-assistive-text="Selected an item." selecting-items-assistive-text="Selecting items. Use up and down arrow keys to navigate." selection-mode="automatic" size="md" type="" id="tabs-sizes-md">
  
  
    <cds-tab align="top" close-on-activation tabTitle="One" target="tab-panel-one" type="">
  
      One
    
</cds-tab>
  
    <cds-tab align="top" close-on-activation tabTitle="Two" target="tab-panel-two" type="">
  
      Two
    
</cds-tab>
  

</cds-tabs>
<cds-tabs selected-index="0" selected-item-assistive-text="Selected an item." selecting-items-assistive-text="Selecting items. Use up and down arrow keys to navigate." selection-mode="automatic" size="lg" type="" id="tabs-sizes-lg">
  
  
    <cds-tab align="top" close-on-activation tabTitle="One" target="tab-panel-one" type="">
  
      One
    
</cds-tab>
  
    <cds-tab align="top" close-on-activation tabTitle="Two" target="tab-panel-two" type="">
  
      Two
    
</cds-tab>
  

</cds-tabs>
<cds-tabs selected-index="0" selected-item-assistive-text="Selected an item." selecting-items-assistive-text="Selecting items. Use up and down arrow keys to navigate." selection-mode="automatic" size="xl" type="" id="tabs-sizes-xl">
  
  
    <cds-tab align="top" close-on-activation tabTitle="One" target="tab-panel-one" type="">
  
      One
    
</cds-tab>
  
    <cds-tab align="top" close-on-activation tabTitle="Two" target="tab-panel-two" type="">
  
      Two
    
</cds-tab>
  

</cds-tabs>
```
