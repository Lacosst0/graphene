# `toggle`

## basic

### on

```heex
<.toggle name="toggle-on" label_b="Off" label_a="On" toggled>
  <:label_text>Notifications</:label_text>
</.toggle>
```

```html
<input type="hidden" id="basic-single-on-input" name="toggle-on" value="true">
<cds-toggle checked id="basic-single-on" label-a="On" label-b="Off" name="toggle-on" size="" toggled id="basic-single-on" data-form-detail="toggled" data-form-event="cds-toggle-changed" data-form-input="basic-single-on-input" data-form-mode="boolean" phx-hook="GrapheneFormBridge">
  
  
  
  <div slot="label-text">
    Notifications
  </div>
  
</cds-toggle>
```

### off

```heex
<.toggle name="toggle-off" label_b="Off" label_a="On">
  <:label_text>Notifications</:label_text>
</.toggle>
```

```html
<input type="hidden" id="basic-single-off-input" name="toggle-off" value="false">
<cds-toggle id="basic-single-off" label-a="On" label-b="Off" name="toggle-off" size="" id="basic-single-off" data-form-detail="toggled" data-form-event="cds-toggle-changed" data-form-input="basic-single-off-input" data-form-mode="boolean" phx-hook="GrapheneFormBridge">
  
  
  
  <div slot="label-text">
    Notifications
  </div>
  
</cds-toggle>
```

### disabled

```heex
<.toggle disabled name="toggle-disabled" label_b="Off" label_a="On">
  <:label_text>Disabled</:label_text>
</.toggle>
```

```html
<input type="hidden" id="basic-single-disabled-input" name="toggle-disabled" value="false">
<cds-toggle disabled id="basic-single-disabled" label-a="On" label-b="Off" name="toggle-disabled" size="" id="basic-single-disabled" data-form-detail="toggled" data-form-event="cds-toggle-changed" data-form-input="basic-single-disabled-input" data-form-mode="boolean" phx-hook="GrapheneFormBridge">
  
  
  
  <div slot="label-text">
    Disabled
  </div>
  
</cds-toggle>
```
