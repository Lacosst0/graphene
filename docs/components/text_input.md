# `text_input`

### default

```heex
<.text_input name="text-input-default" value="Ada">
  <:label_text>First name</:label_text>
</.text_input>
```

```html
<input type="hidden" id="text-input-default-input" name="text-input-default" value="Ada">
<cds-text-input hidePasswordLabel="Hide password" name="text-input-default" required-validity-message="Please fill out this field." showPasswordLabel="Show password" size="md" tooltipAlignment="center" tooltipDirection="bottom" type="text" value="Ada" id="text-input-single-default" data-form-detail="checked" data-form-event="input" data-form-input="text-input-default-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
  <div slot="label-text">
    First name
  </div>
  
</cds-text-input>
```

### helper_text

```heex
<.text_input name="text-input-helper" value="Lovelace">
  <:label_text>Last name</:label_text>
  <:helper_text>As shown on your ID</:helper_text>
</.text_input>
```

```html
<input type="hidden" id="text-input-helper-input" name="text-input-helper" value="Lovelace">
<cds-text-input hidePasswordLabel="Hide password" name="text-input-helper" required-validity-message="Please fill out this field." showPasswordLabel="Show password" size="md" tooltipAlignment="center" tooltipDirection="bottom" type="text" value="Lovelace" id="text-input-single-helper-text" data-form-detail="checked" data-form-event="input" data-form-input="text-input-helper-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="helper-text">
    As shown on your ID
  </div>
  <div slot="label-text">
    Last name
  </div>
  
</cds-text-input>
```

### invalid

```heex
<.text_input invalid name="text-input-invalid" value="" invalid_text="Required">
  <:label_text>Username</:label_text>
</.text_input>
```

```html
<input type="hidden" id="text-input-invalid-input" name="text-input-invalid" value="">
<cds-text-input hidePasswordLabel="Hide password" invalid invalid-text="Required" name="text-input-invalid" required-validity-message="Please fill out this field." showPasswordLabel="Show password" size="md" tooltipAlignment="center" tooltipDirection="bottom" type="text" value="" id="text-input-single-invalid" data-form-detail="checked" data-form-event="input" data-form-input="text-input-invalid-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
  <div slot="label-text">
    Username
  </div>
  
</cds-text-input>
```
