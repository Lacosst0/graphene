# `fluid_select`

### default

```heex
<.fluid_select name="fluid-select-default">
  <:label_text>Select an option</:label_text>
  <:item value="">Choose one</:item>
  <:item value="option-1">Option 1</:item>
  <:item value="option-2">Option 2</:item>
  <:item value="option-3">Option 3</:item>
</.fluid_select>
```

```html
<input type="hidden" id="fluid-select-single-default-input" name="fluid-select-default" value="">
<cds-fluid-select name="fluid-select-default" required-validity-message="Please fill out this field." size="md" id="fluid-select-single-default" data-form-detail="checked" data-form-event="cds-select-selected" data-form-input="fluid-select-single-default-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="label-text">
    Select an option
  </div>
  
  
  
    <cds-select-item value="">
  
      Choose one
    
</cds-select-item>
  
    <cds-select-item value="option-1">
  
      Option 1
    
</cds-select-item>
  
    <cds-select-item value="option-2">
  
      Option 2
    
</cds-select-item>
  
    <cds-select-item value="option-3">
  
      Option 3
    
</cds-select-item>
  

  
  
  
  

  
  
  
</cds-fluid-select>
```

### inline

```heex
<.fluid_select name="fluid-select-inline" inline>
  <:label_text>Inline</:label_text>
  <:item value="alpha">Alpha</:item>
  <:item value="beta">Beta</:item>
</.fluid_select>
```

```html
<input type="hidden" id="fluid-select-single-inline-input" name="fluid-select-inline" value="">
<cds-fluid-select inline name="fluid-select-inline" required-validity-message="Please fill out this field." size="md" id="fluid-select-single-inline" data-form-detail="checked" data-form-event="cds-select-selected" data-form-input="fluid-select-single-inline-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="label-text">
    Inline
  </div>
  
  
  
    <cds-select-item value="alpha">
  
      Alpha
    
</cds-select-item>
  
    <cds-select-item value="beta">
  
      Beta
    
</cds-select-item>
  

  
  
  
  

  
  
  
</cds-fluid-select>
```

### invalid

```heex
<.fluid_select invalid name="fluid-select-invalid" invalid_text="Pick a value">
  <:label_text>Required</:label_text>
  <:item value="one">One</:item>
  <:item value="two">Two</:item>
</.fluid_select>
```

```html
<input type="hidden" id="fluid-select-single-invalid-input" name="fluid-select-invalid" value="">
<cds-fluid-select invalid invalid-text="Pick a value" name="fluid-select-invalid" required-validity-message="Please fill out this field." size="md" id="fluid-select-single-invalid" data-form-detail="checked" data-form-event="cds-select-selected" data-form-input="fluid-select-single-invalid-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="label-text">
    Required
  </div>
  
  
  
    <cds-select-item value="one">
  
      One
    
</cds-select-item>
  
    <cds-select-item value="two">
  
      Two
    
</cds-select-item>
  

  
  
  
  

  
  
  
</cds-fluid-select>
```
