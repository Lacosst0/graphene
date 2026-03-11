# `fluid_text_input`

### default

```heex
<.fluid_text_input name="fluid-text-input-default" value="">
  <:label_text>First name</:label_text>
</.fluid_text_input>
```

```html
<input type="hidden" id="fluid-text-input-default-input" name="fluid-text-input-default" value="">
<cds-fluid-text-input hidePasswordLabel="Hide password" name="fluid-text-input-default" required-validity-message="Please fill out this field." showPasswordLabel="Show password" size="md" tooltipAlignment="center" tooltipDirection="bottom" type="text" value="" id="fluid-text-input-single-default" data-form-detail="checked" data-form-event="input" data-form-input="fluid-text-input-default-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
  <div slot="label-text">
    First name
  </div>
  
</cds-fluid-text-input>
```

### helper_text

```heex
<.fluid_text_input name="fluid-text-input-helper" value="Ada">
  <:label_text>Name</:label_text>
  <:helper_text>As shown on your ID</:helper_text>
</.fluid_text_input>
```

```html
<input type="hidden" id="fluid-text-input-helper-input" name="fluid-text-input-helper" value="Ada">
<cds-fluid-text-input hidePasswordLabel="Hide password" name="fluid-text-input-helper" required-validity-message="Please fill out this field." showPasswordLabel="Show password" size="md" tooltipAlignment="center" tooltipDirection="bottom" type="text" value="Ada" id="fluid-text-input-single-helper-text" data-form-detail="checked" data-form-event="input" data-form-input="fluid-text-input-helper-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="helper-text">
    As shown on your ID
  </div>
  <div slot="label-text">
    Name
  </div>
  
</cds-fluid-text-input>
```

### invalid

```heex
<.fluid_text_input name="fluid-text-input-invalid" value="">
  <:label_text>Username</:label_text>
  <:validity_message>Required</:validity_message>
</.fluid_text_input>
```

```html
<input type="hidden" id="fluid-text-input-invalid-input" name="fluid-text-input-invalid" value="">
<cds-fluid-text-input hidePasswordLabel="Hide password" name="fluid-text-input-invalid" required-validity-message="Please fill out this field." showPasswordLabel="Show password" size="md" tooltipAlignment="center" tooltipDirection="bottom" type="text" value="" id="fluid-text-input-single-invalid" data-form-detail="checked" data-form-event="input" data-form-input="fluid-text-input-invalid-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
  <div slot="label-text">
    Username
  </div>
  <div slot="validity-message">
    Required
  </div>
</cds-fluid-text-input>
```
