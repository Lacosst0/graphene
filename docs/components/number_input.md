# `number_input`

### default

```heex
<.number_input name="number-input-default" value="10">
  <:label_text>Quantity</:label_text>
</.number_input>
```

```html
<input type="hidden" id="number-input-default-input" name="number-input-default" value="10">
<cds-number-input decrement-button-assistive-text="decrease number input" hidePasswordLabel="Hide password" increment-button-assistive-text="increase number input" max="Infty" min="-Infty" name="number-input-default" required-validity-message="Please fill out this field." showPasswordLabel="Show password" size="md" step="1" tooltipAlignment="center" tooltipDirection="bottom" type="text" value="10" id="number-input-single-default" data-form-detail="checked" data-form-event="cds-number-input" data-form-input="number-input-default-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
  <div slot="label-text">
    Quantity
  </div>
  
</cds-number-input>
```

### helper_text

```heex
<.number_input name="number-input-helper" value="2">
  <:label_text>Seats</:label_text>
  <:helper_text>Available seats</:helper_text>
</.number_input>
```

```html
<input type="hidden" id="number-input-helper-input" name="number-input-helper" value="2">
<cds-number-input decrement-button-assistive-text="decrease number input" hidePasswordLabel="Hide password" increment-button-assistive-text="increase number input" max="Infty" min="-Infty" name="number-input-helper" required-validity-message="Please fill out this field." showPasswordLabel="Show password" size="md" step="1" tooltipAlignment="center" tooltipDirection="bottom" type="text" value="2" id="number-input-single-helper-text" data-form-detail="checked" data-form-event="cds-number-input" data-form-input="number-input-helper-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="helper-text">
    Available seats
  </div>
  <div slot="label-text">
    Seats
  </div>
  
</cds-number-input>
```

### invalid

```heex
<.number_input invalid name="number-input-invalid" value="0" invalid_text="Minimum is 1">
  <:label_text>Licenses</:label_text>
</.number_input>
```

```html
<input type="hidden" id="number-input-invalid-input" name="number-input-invalid" value="0">
<cds-number-input decrement-button-assistive-text="decrease number input" hidePasswordLabel="Hide password" increment-button-assistive-text="increase number input" invalid invalid-text="Minimum is 1" max="Infty" min="-Infty" name="number-input-invalid" required-validity-message="Please fill out this field." showPasswordLabel="Show password" size="md" step="1" tooltipAlignment="center" tooltipDirection="bottom" type="text" value="0" id="number-input-single-invalid" data-form-detail="checked" data-form-event="cds-number-input" data-form-input="number-input-invalid-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
  <div slot="label-text">
    Licenses
  </div>
  
</cds-number-input>
```
