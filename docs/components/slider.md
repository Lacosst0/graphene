# `slider`

### default

```heex
<.slider max="100" min="0" name="slider-default" value="50">
  <:label_text>Slider</:label_text>
</.slider>
```

```html
<input type="hidden" id="slider-default-input" name="slider-default" value="50">
<cds-slider max="100" min="0" name="slider-default" step="1" step-multiplier="4" value="50" id="slider-single-default" data-form-detail="checked" data-form-event="cds-slider-changed" data-form-input="slider-default-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="label-text">
    Slider
  </div>
  
  
  
</cds-slider>
```

### stepped

```heex
<.slider max="10" min="0" name="slider-stepped" value="3" step="1">
  <:label_text>Step</:label_text>
</.slider>
```

```html
<input type="hidden" id="slider-stepped-input" name="slider-stepped" value="3">
<cds-slider max="10" min="0" name="slider-stepped" step="1" step-multiplier="4" value="3" id="slider-single-stepped" data-form-detail="checked" data-form-event="cds-slider-changed" data-form-input="slider-stepped-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="label-text">
    Step
  </div>
  
  
  
</cds-slider>
```

### disabled

```heex
<.slider disabled max="100" min="0" name="slider-disabled" value="40">
  <:label_text>Disabled</:label_text>
</.slider>
```

```html
<input type="hidden" id="slider-disabled-input" name="slider-disabled" value="40">
<cds-slider disabled max="100" min="0" name="slider-disabled" step="1" step-multiplier="4" value="40" id="slider-single-disabled" data-form-detail="checked" data-form-event="cds-slider-changed" data-form-input="slider-disabled-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="label-text">
    Disabled
  </div>
  
  
  
</cds-slider>
```
