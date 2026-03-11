# `feature_flags`

## toggle/feature_flag

### single

```heex
<.feature_flags >
  <Graphene.CarbonComponents.toggle name="feature-flag-single" label_a="On" label_b="Off" toggled={true}>
    <:label_text>Label</:label_text>
  </Graphene.CarbonComponents.toggle>
</.feature_flags>
```

```html
<feature-flags id="feature-flag-single-single">
  
  <input type="hidden" id="checkbox-input" name="feature-flag-single" value="true">
<cds-toggle checked id="checkbox" label-a="On" label-b="Off" name="feature-flag-single" size="" toggled id="checkbox" data-form-detail="toggled" data-form-event="cds-toggle-changed" data-form-input="checkbox-input" data-form-mode="boolean" phx-hook="GrapheneFormBridge">
  
  
  
  <div slot="label-text">
    Label
  </div>
  
</cds-toggle>


</feature-flags>
```

### multiple

```heex
<.feature_flags >
  <Graphene.CarbonComponents.toggle name="feature-flag-a" label_a="On" label_b="Off" toggled={true}>
    <:label_text>Feature A</:label_text>
  </Graphene.CarbonComponents.toggle>
  <Graphene.CarbonComponents.toggle name="feature-flag-b" label_a="On" label_b="Off">
    <:label_text>Feature B</:label_text>
  </Graphene.CarbonComponents.toggle>
</.feature_flags>
```

```html
<feature-flags id="feature-flag-single-multiple">
  
  <input type="hidden" id="checkbox-input" name="feature-flag-a" value="true">
<cds-toggle checked id="checkbox" label-a="On" label-b="Off" name="feature-flag-a" size="" toggled id="checkbox" data-form-detail="toggled" data-form-event="cds-toggle-changed" data-form-input="checkbox-input" data-form-mode="boolean" phx-hook="GrapheneFormBridge">
  
  
  
  <div slot="label-text">
    Feature A
  </div>
  
</cds-toggle>

<input type="hidden" id="checkbox-input" name="feature-flag-b" value="false">
<cds-toggle id="checkbox" label-a="On" label-b="Off" name="feature-flag-b" size="" id="checkbox" data-form-detail="toggled" data-form-event="cds-toggle-changed" data-form-input="checkbox-input" data-form-mode="boolean" phx-hook="GrapheneFormBridge">
  
  
  
  <div slot="label-text">
    Feature B
  </div>
  
</cds-toggle>


</feature-flags>
```

### disabled

```heex
<.feature_flags >
  <Graphene.CarbonComponents.toggle name="feature-flag-disabled" label_a="On" label_b="Off" disabled={true}>
    <:label_text>Disabled</:label_text>
  </Graphene.CarbonComponents.toggle>
</.feature_flags>
```

```html
<feature-flags id="feature-flag-single-disabled">
  
  <input type="hidden" id="checkbox-input" name="feature-flag-disabled" value="false">
<cds-toggle disabled id="checkbox" label-a="On" label-b="Off" name="feature-flag-disabled" size="" id="checkbox" data-form-detail="toggled" data-form-event="cds-toggle-changed" data-form-input="checkbox-input" data-form-mode="boolean" phx-hook="GrapheneFormBridge">
  
  
  
  <div slot="label-text">
    Disabled
  </div>
  
</cds-toggle>


</feature-flags>
```
