# `password_input`

### default

```heex
<.password_input name="password-input-default">
  <:label_text>Password</:label_text>
</.password_input>
```

```html
<input type="hidden" id="password-input-default-input" name="password-input-default" value="">
<cds-password-input hide-password-label="Hide password" name="password-input-default" required-validity-message="Please fill out this field." show-password-label="Show password" size="md" tooltip-alignment="center" tooltip-position="bottom" type="password" id="password-input-single-default" data-form-detail="checked" data-form-event="input" data-form-input="password-input-default-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
  <div slot="label-text">
    Password
  </div>
  
</cds-password-input>
```

### helper_text

```heex
<.password_input name="password-input-helper">
  <:label_text>New password</:label_text>
  <:helper_text>Minimum 8 characters</:helper_text>
</.password_input>
```

```html
<input type="hidden" id="password-input-helper-input" name="password-input-helper" value="">
<cds-password-input hide-password-label="Hide password" name="password-input-helper" required-validity-message="Please fill out this field." show-password-label="Show password" size="md" tooltip-alignment="center" tooltip-position="bottom" type="password" id="password-input-single-helper-text" data-form-detail="checked" data-form-event="input" data-form-input="password-input-helper-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="helper-text">
    Minimum 8 characters
  </div>
  <div slot="label-text">
    New password
  </div>
  
</cds-password-input>
```

### invalid

```heex
<.password_input invalid name="password-input-invalid" invalid_text="Required">
  <:label_text>Password</:label_text>
</.password_input>
```

```html
<input type="hidden" id="password-input-invalid-input" name="password-input-invalid" value="">
<cds-password-input hide-password-label="Hide password" invalid invalid-text="Required" name="password-input-invalid" required-validity-message="Please fill out this field." show-password-label="Show password" size="md" tooltip-alignment="center" tooltip-position="bottom" type="password" id="password-input-single-invalid" data-form-detail="checked" data-form-event="input" data-form-input="password-input-invalid-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
  <div slot="label-text">
    Password
  </div>
  
</cds-password-input>
```
