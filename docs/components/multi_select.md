# `multi_select`

### default

```heex
<.multi_select name="multi-select-default" style="min-width: 20rem;">
  <:title_text>Choose multiple</:title_text>
  <:item value="one">Option 1</:item>
  <:item value="two">Option 2</:item>
  <:item value="three">Option 3</:item>
</.multi_select>
```

```html
<input type="hidden" id="multi-select-default-input" name="multi-select-default" value="">
<cds-multi-select clear-selection-description="Total items selected: " clear-selection-text="To clear selection, press Delete or Backspace." direction="bottom" locale="en" name="multi-select-default" required-validity-message="Please fill out this field." selection-feedback="top-after-reopen" size="md" type="" id="multi-select-single-default" style="min-width: 20rem;" data-form-detail="checked" data-form-event="cds-multi-select-selected" data-form-input="multi-select-default-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="title-text">
    Choose multiple
  </div>
  
    <cds-multi-select-item size="md" value="one">
  
      Option 1
    
</cds-multi-select-item>
  
    <cds-multi-select-item size="md" value="two">
  
      Option 2
    
</cds-multi-select-item>
  
    <cds-multi-select-item size="md" value="three">
  
      Option 3
    
</cds-multi-select-item>
  

  
  

  
</cds-multi-select>
```

### inline

```heex
<.multi_select name="multi-select-inline" type="inline" style="min-width: 20rem;">
  <:title_text>Inline</:title_text>
  <:item value="alpha">Alpha</:item>
  <:item value="beta">Beta</:item>
</.multi_select>
```

```html
<input type="hidden" id="multi-select-inline-input" name="multi-select-inline" value="">
<cds-multi-select clear-selection-description="Total items selected: " clear-selection-text="To clear selection, press Delete or Backspace." direction="bottom" locale="en" name="multi-select-inline" required-validity-message="Please fill out this field." selection-feedback="top-after-reopen" size="md" type="inline" id="multi-select-single-inline" style="min-width: 20rem;" data-form-detail="checked" data-form-event="cds-multi-select-selected" data-form-input="multi-select-inline-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="title-text">
    Inline
  </div>
  
    <cds-multi-select-item size="md" value="alpha">
  
      Alpha
    
</cds-multi-select-item>
  
    <cds-multi-select-item size="md" value="beta">
  
      Beta
    
</cds-multi-select-item>
  

  
  

  
</cds-multi-select>
```

### disabled

```heex
<.multi_select disabled name="multi-select-disabled" style="min-width: 20rem;">
  <:title_text>Disabled</:title_text>
  <:item value="one">Option 1</:item>
  <:item value="two">Option 2</:item>
</.multi_select>
```

```html
<input type="hidden" id="multi-select-disabled-input" name="multi-select-disabled" value="">
<cds-multi-select clear-selection-description="Total items selected: " clear-selection-text="To clear selection, press Delete or Backspace." direction="bottom" disabled locale="en" name="multi-select-disabled" required-validity-message="Please fill out this field." selection-feedback="top-after-reopen" size="md" type="" id="multi-select-single-disabled" style="min-width: 20rem;" data-form-detail="checked" data-form-event="cds-multi-select-selected" data-form-input="multi-select-disabled-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="title-text">
    Disabled
  </div>
  
    <cds-multi-select-item size="md" value="one">
  
      Option 1
    
</cds-multi-select-item>
  
    <cds-multi-select-item size="md" value="two">
  
      Option 2
    
</cds-multi-select-item>
  

  
  

  
</cds-multi-select>
```
