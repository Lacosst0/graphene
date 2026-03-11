# `form_group`

### default

```heex
<.form_group legend_text="Notification settings">
  <Graphene.CarbonComponents.checkbox id="form-group-email" label_text="Email" />
  <Graphene.CarbonComponents.checkbox id="form-group-sms" label_text="SMS" />
</.form_group>
```

```html
<cds-form-group legend-text="Notification settings" id="form-group-single-default">
  
  <input type="hidden" id="form-group-email-input" value="false">
<cds-checkbox id="form-group-email" label-text="Email" id="form-group-email" data-form-detail="checked" data-form-event="cds-checkbox-changed" data-form-input="form-group-email-input" data-form-mode="boolean" phx-hook="GrapheneFormBridge">
  
</cds-checkbox>

<input type="hidden" id="form-group-sms-input" value="false">
<cds-checkbox id="form-group-sms" label-text="SMS" id="form-group-sms" data-form-detail="checked" data-form-event="cds-checkbox-changed" data-form-input="form-group-sms-input" data-form-mode="boolean" phx-hook="GrapheneFormBridge">
  
</cds-checkbox>


</cds-form-group>
```

### with_message

```heex
<.form_group message legend_text="Alerts" message_text="Pick at least one">
  <Graphene.CarbonComponents.checkbox id="form-group-product" label_text="Product updates" />
  <Graphene.CarbonComponents.checkbox id="form-group-security" label_text="Security" />
</.form_group>
```

```html
<cds-form-group legend-text="Alerts" message message-text="Pick at least one" id="form-group-single-with-message">
  
  <input type="hidden" id="form-group-product-input" value="false">
<cds-checkbox id="form-group-product" label-text="Product updates" id="form-group-product" data-form-detail="checked" data-form-event="cds-checkbox-changed" data-form-input="form-group-product-input" data-form-mode="boolean" phx-hook="GrapheneFormBridge">
  
</cds-checkbox>

<input type="hidden" id="form-group-security-input" value="false">
<cds-checkbox id="form-group-security" label-text="Security" id="form-group-security" data-form-detail="checked" data-form-event="cds-checkbox-changed" data-form-input="form-group-security-input" data-form-mode="boolean" phx-hook="GrapheneFormBridge">
  
</cds-checkbox>


</cds-form-group>
```

### invalid

```heex
<.form_group invalid message legend_text="Required" message_text="Select one option">
  <Graphene.CarbonComponents.checkbox id="form-group-a" label_text="Option A" />
  <Graphene.CarbonComponents.checkbox id="form-group-b" label_text="Option B" />
</.form_group>
```

```html
<cds-form-group invalid legend-text="Required" message message-text="Select one option" id="form-group-single-invalid">
  
  <input type="hidden" id="form-group-a-input" value="false">
<cds-checkbox id="form-group-a" label-text="Option A" id="form-group-a" data-form-detail="checked" data-form-event="cds-checkbox-changed" data-form-input="form-group-a-input" data-form-mode="boolean" phx-hook="GrapheneFormBridge">
  
</cds-checkbox>

<input type="hidden" id="form-group-b-input" value="false">
<cds-checkbox id="form-group-b" label-text="Option B" id="form-group-b" data-form-detail="checked" data-form-event="cds-checkbox-changed" data-form-input="form-group-b-input" data-form-mode="boolean" phx-hook="GrapheneFormBridge">
  
</cds-checkbox>


</cds-form-group>
```
