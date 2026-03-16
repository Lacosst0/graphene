# `textarea`

### default

```heex
<.textarea name="textarea-default" rows="3">
  <:label_text>Notes</:label_text>
</.textarea>
```

```html
<input type="hidden" id="textarea-single-default-input" name="textarea-default" value="">
<cds-textarea hidePasswordLabel="Hide password" id="textarea-single-default" name="textarea-default" required-validity-message="Please fill out this field." rows="3" showPasswordLabel="Show password" size="md" tooltipAlignment="center" tooltipDirection="bottom" type="text" id="textarea-single-default" data-form-detail="checked" data-form-event="input" data-form-input="textarea-single-default-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
  <div slot="label-text">
    Notes
  </div>
  
</cds-textarea>
```

### helper_text

```heex
<.textarea name="textarea-helper" rows="4">
  <:label_text>Description</:label_text>
  <:helper_text>Max 300 characters</:helper_text>
</.textarea>
```

```html
<input type="hidden" id="textarea-single-helper-text-input" name="textarea-helper" value="">
<cds-textarea hidePasswordLabel="Hide password" id="textarea-single-helper-text" name="textarea-helper" required-validity-message="Please fill out this field." rows="4" showPasswordLabel="Show password" size="md" tooltipAlignment="center" tooltipDirection="bottom" type="text" id="textarea-single-helper-text" data-form-detail="checked" data-form-event="input" data-form-input="textarea-single-helper-text-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="helper-text">
    Max 300 characters
  </div>
  <div slot="label-text">
    Description
  </div>
  
</cds-textarea>
```

### invalid

```heex
<.textarea invalid name="textarea-invalid" rows="3" invalid_text="Required">
  <:label_text>Reason</:label_text>
</.textarea>
```

```html
<input type="hidden" id="textarea-single-invalid-input" name="textarea-invalid" value="">
<cds-textarea hidePasswordLabel="Hide password" id="textarea-single-invalid" invalid invalid-text="Required" name="textarea-invalid" required-validity-message="Please fill out this field." rows="3" showPasswordLabel="Show password" size="md" tooltipAlignment="center" tooltipDirection="bottom" type="text" id="textarea-single-invalid" data-form-detail="checked" data-form-event="input" data-form-input="textarea-single-invalid-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
  <div slot="label-text">
    Reason
  </div>
  
</cds-textarea>
```
