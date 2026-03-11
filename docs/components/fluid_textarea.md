# `fluid_textarea`

### default

```heex
<.fluid_textarea name="fluid-textarea-default" rows="3">
  <:label_text>Notes</:label_text>
</.fluid_textarea>
```

```html
<input type="hidden" id="fluid-textarea-single-default-input" name="fluid-textarea-default" value="">
<cds-fluid-textarea hidePasswordLabel="Hide password" id="fluid-textarea-single-default" name="fluid-textarea-default" required-validity-message="Please fill out this field." rows="3" showPasswordLabel="Show password" size="md" tooltipAlignment="center" tooltipDirection="bottom" type="text" id="fluid-textarea-single-default" data-form-detail="checked" data-form-event="input" data-form-input="fluid-textarea-single-default-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
  <div slot="label-text">
    Notes
  </div>
  
</cds-fluid-textarea>
```

### helper_text

```heex
<.fluid_textarea name="fluid-textarea-helper" rows="4">
  <:label_text>Description</:label_text>
  <:helper_text>Max 300 characters</:helper_text>
</.fluid_textarea>
```

```html
<input type="hidden" id="fluid-textarea-single-helper-text-input" name="fluid-textarea-helper" value="">
<cds-fluid-textarea hidePasswordLabel="Hide password" id="fluid-textarea-single-helper-text" name="fluid-textarea-helper" required-validity-message="Please fill out this field." rows="4" showPasswordLabel="Show password" size="md" tooltipAlignment="center" tooltipDirection="bottom" type="text" id="fluid-textarea-single-helper-text" data-form-detail="checked" data-form-event="input" data-form-input="fluid-textarea-single-helper-text-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="helper-text">
    Max 300 characters
  </div>
  <div slot="label-text">
    Description
  </div>
  
</cds-fluid-textarea>
```

### invalid

```heex
<.fluid_textarea name="fluid-textarea-invalid" rows="3">
  <:label_text>Reason</:label_text>
  <:validity_message>Required</:validity_message>
</.fluid_textarea>
```

```html
<input type="hidden" id="fluid-textarea-single-invalid-input" name="fluid-textarea-invalid" value="">
<cds-fluid-textarea hidePasswordLabel="Hide password" id="fluid-textarea-single-invalid" name="fluid-textarea-invalid" required-validity-message="Please fill out this field." rows="3" showPasswordLabel="Show password" size="md" tooltipAlignment="center" tooltipDirection="bottom" type="text" id="fluid-textarea-single-invalid" data-form-detail="checked" data-form-event="input" data-form-input="fluid-textarea-single-invalid-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
  <div slot="label-text">
    Reason
  </div>
  <div slot="validity-message">
    Required
  </div>
</cds-fluid-textarea>
```
