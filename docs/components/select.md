# `select`

### default

```heex
<.select name="select-default">
  <:label_text>Select an option</:label_text>
  <:item value="">Choose one</:item>
  <:item value="option-1">Option 1</:item>
  <:item value="option-2">Option 2</:item>
  <:item value="option-3">Option 3</:item>
</.select>
```

```html
<input type="hidden" id="select-single-default-input" name="select-default" value="">
<cds-select name="select-default" required-validity-message="Please fill out this field." size="md" id="select-single-default" data-form-detail="checked" data-form-event="cds-select-selected" data-form-input="select-single-default-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
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
  

  
  
  
  

  
  
  
</cds-select>
```

### inline

```heex
<.select name="select-inline" inline>
  <:label_text>Inline</:label_text>
  <:item value="alpha">Alpha</:item>
  <:item value="beta">Beta</:item>
</.select>
```

```html
<input type="hidden" id="select-single-inline-input" name="select-inline" value="">
<cds-select inline name="select-inline" required-validity-message="Please fill out this field." size="md" id="select-single-inline" data-form-detail="checked" data-form-event="cds-select-selected" data-form-input="select-single-inline-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="label-text">
    Inline
  </div>
  
  
  
    <cds-select-item value="alpha">
  
      Alpha
    
</cds-select-item>
  
    <cds-select-item value="beta">
  
      Beta
    
</cds-select-item>
  

  
  
  
  

  
  
  
</cds-select>
```

### invalid

```heex
<.select invalid name="select-invalid" invalid_text="Pick a value">
  <:label_text>Required</:label_text>
  <:item value="one">One</:item>
  <:item value="two">Two</:item>
</.select>
```

```html
<input type="hidden" id="select-single-invalid-input" name="select-invalid" value="">
<cds-select invalid invalid-text="Pick a value" name="select-invalid" required-validity-message="Please fill out this field." size="md" id="select-single-invalid" data-form-detail="checked" data-form-event="cds-select-selected" data-form-input="select-single-invalid-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="label-text">
    Required
  </div>
  
  
  
    <cds-select-item value="one">
  
      One
    
</cds-select-item>
  
    <cds-select-item value="two">
  
      Two
    
</cds-select-item>
  

  
  
  
  

  
  
  
</cds-select>
```
