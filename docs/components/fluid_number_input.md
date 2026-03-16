# `fluid_number_input`

### default

```heex
<.fluid_number_input name="fluid-number-default" value="10">
  <:label_text>Quantity</:label_text>
</.fluid_number_input>
```

```html
<input type="hidden" id="fluid-number-default-input" name="fluid-number-default" value="10">
<cds-fluid-number-input decrement-button-assistive-text="decrease number input" hidePasswordLabel="Hide password" increment-button-assistive-text="increase number input" max="Infty" min="-Infty" name="fluid-number-default" required-validity-message="Please fill out this field." showPasswordLabel="Show password" size="md" step="1" tooltipAlignment="center" tooltipDirection="bottom" type="text" value="10" id="fluid-number-input-single-default" data-form-detail="checked" data-form-event="cds-number-input" data-form-input="fluid-number-default-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
  <div slot="label-text">
    Quantity
  </div>
  
</cds-fluid-number-input>
```

### helper_text

```heex
<.fluid_number_input name="fluid-number-helper" value="2">
  <:label_text>Seats</:label_text>
  <:helper_text>Available seats</:helper_text>
</.fluid_number_input>
```

```html
<input type="hidden" id="fluid-number-helper-input" name="fluid-number-helper" value="2">
<cds-fluid-number-input decrement-button-assistive-text="decrease number input" hidePasswordLabel="Hide password" increment-button-assistive-text="increase number input" max="Infty" min="-Infty" name="fluid-number-helper" required-validity-message="Please fill out this field." showPasswordLabel="Show password" size="md" step="1" tooltipAlignment="center" tooltipDirection="bottom" type="text" value="2" id="fluid-number-input-single-helper-text" data-form-detail="checked" data-form-event="cds-number-input" data-form-input="fluid-number-helper-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="helper-text">
    Available seats
  </div>
  <div slot="label-text">
    Seats
  </div>
  
</cds-fluid-number-input>
```

### invalid

```heex
<.fluid_number_input name="fluid-number-invalid" value="0">
  <:label_text>Licenses</:label_text>
  <:validity_message>Minimum is 1</:validity_message>
</.fluid_number_input>
```

```html
<input type="hidden" id="fluid-number-invalid-input" name="fluid-number-invalid" value="0">
<cds-fluid-number-input decrement-button-assistive-text="decrease number input" hidePasswordLabel="Hide password" increment-button-assistive-text="increase number input" max="Infty" min="-Infty" name="fluid-number-invalid" required-validity-message="Please fill out this field." showPasswordLabel="Show password" size="md" step="1" tooltipAlignment="center" tooltipDirection="bottom" type="text" value="0" id="fluid-number-input-single-invalid" data-form-detail="checked" data-form-event="cds-number-input" data-form-input="fluid-number-invalid-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
  <div slot="label-text">
    Licenses
  </div>
  <div slot="validity-message">
    Minimum is 1
  </div>
</cds-fluid-number-input>
```
