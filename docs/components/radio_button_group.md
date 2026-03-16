# `radio_button_group`

## radio_button

### default

```heex
<.radio_button_group name="choices" legend_text="Choose one">
  <:item value="a" label="Option A" />
  <:item value="b" label="Option B" />
</.radio_button_group>
```

```html
<input type="hidden" id="choices-input" name="choices" value="">
<cds-radio-button-group label-position="right" legend-text="Choose one" name="choices" orientation="horizontal" id="radio-button-single-default" data-form-detail="checked" data-form-event="cds-radio-button-group-changed" data-form-input="choices-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
    <cds-radio-button label-position="right" label-text="Option A" orientation="horizontal" value="a">
  
  
</cds-radio-button>
  
    <cds-radio-button label-position="right" label-text="Option B" orientation="horizontal" value="b">
  
  
</cds-radio-button>
  

</cds-radio-button-group>
```

### disabled

```heex
<.radio_button_group disabled name="choices-disabled" legend_text="Disabled">
  <:item value="a" label="Option A" />
  <:item value="b" label="Option B" />
</.radio_button_group>
```

```html
<input type="hidden" id="choices-disabled-input" name="choices-disabled" value="">
<cds-radio-button-group disabled label-position="right" legend-text="Disabled" name="choices-disabled" orientation="horizontal" id="radio-button-single-disabled" data-form-detail="checked" data-form-event="cds-radio-button-group-changed" data-form-input="choices-disabled-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
    <cds-radio-button label-position="right" label-text="Option A" orientation="horizontal" value="a">
  
  
</cds-radio-button>
  
    <cds-radio-button label-position="right" label-text="Option B" orientation="horizontal" value="b">
  
  
</cds-radio-button>
  

</cds-radio-button-group>
```

### with_helper

```heex
<.radio_button_group name="choices-help" legend_text="Select one" helper_text="Pick a single option">
  <:item value="a" label="Alpha" />
  <:item value="b" label="Beta" />
</.radio_button_group>
```

```html
<input type="hidden" id="choices-help-input" name="choices-help" value="">
<cds-radio-button-group helper-text="Pick a single option" label-position="right" legend-text="Select one" name="choices-help" orientation="horizontal" id="radio-button-single-with-helper" data-form-detail="checked" data-form-event="cds-radio-button-group-changed" data-form-input="choices-help-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
    <cds-radio-button label-position="right" label-text="Alpha" orientation="horizontal" value="a">
  
  
</cds-radio-button>
  
    <cds-radio-button label-position="right" label-text="Beta" orientation="horizontal" value="b">
  
  
</cds-radio-button>
  

</cds-radio-button-group>
```
