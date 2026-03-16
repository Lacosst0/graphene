# `time_picker`

### default

```heex
<.time_picker name="time-picker-default" value="12:00">
  <:label_text>Start time</:label_text>
  <:select_item value="UTC" selected>UTC</:select_item>
  <:select_item value="PST">PST</:select_item>
</.time_picker>
```

```html
<input type="hidden" id="time-picker-default-input" name="time-picker-default" value="12:00">
<cds-time-picker invalid-text="Invalid time format." max-length="5" name="time-picker-default" pattern="(1[012]|[1-9]):[0-5][0-9](\\s)?" placeholder="hh:mm" required-validity-message="Please fill out this field." size="md" type="text" value="12:00" warning-text="Warning message." id="time-picker-single-default" data-form-detail="checked" data-form-event="change" data-form-input="time-picker-default-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  <div slot="label-text">
    Start time
  </div>
  
  <cds-time-picker-select size="md">
  
    
      <cds-select-item selected value="UTC">
  
        UTC
      
</cds-select-item>
    
      <cds-select-item value="PST">
  
        PST
      
</cds-select-item>
    
  
</cds-time-picker-select>

  
  
  
</cds-time-picker>
```

### with_timezone

```heex
<.time_picker name="time-picker-timezone" value="09:30">
  <:label_text>Meeting time</:label_text>
  <:select_item value="UTC" selected>UTC</:select_item>
  <:select_item value="CET">CET</:select_item>
</.time_picker>
```

```html
<input type="hidden" id="time-picker-timezone-input" name="time-picker-timezone" value="09:30">
<cds-time-picker invalid-text="Invalid time format." max-length="5" name="time-picker-timezone" pattern="(1[012]|[1-9]):[0-5][0-9](\\s)?" placeholder="hh:mm" required-validity-message="Please fill out this field." size="md" type="text" value="09:30" warning-text="Warning message." id="time-picker-single-with-timezone" data-form-detail="checked" data-form-event="change" data-form-input="time-picker-timezone-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  <div slot="label-text">
    Meeting time
  </div>
  
  <cds-time-picker-select size="md">
  
    
      <cds-select-item selected value="UTC">
  
        UTC
      
</cds-select-item>
    
      <cds-select-item value="CET">
  
        CET
      
</cds-select-item>
    
  
</cds-time-picker-select>

  
  
  
</cds-time-picker>
```

### invalid

```heex
<.time_picker invalid name="time-picker-invalid" value="" invalid_text="Enter a time">
  <:label_text>Start time</:label_text>
  <:select_item value="UTC" selected>UTC</:select_item>
</.time_picker>
```

```html
<input type="hidden" id="time-picker-invalid-input" name="time-picker-invalid" value="">
<cds-time-picker invalid invalid-text="Enter a time" max-length="5" name="time-picker-invalid" pattern="(1[012]|[1-9]):[0-5][0-9](\\s)?" placeholder="hh:mm" required-validity-message="Please fill out this field." size="md" type="text" value="" warning-text="Warning message." id="time-picker-single-invalid" data-form-detail="checked" data-form-event="change" data-form-input="time-picker-invalid-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  <div slot="label-text">
    Start time
  </div>
  
  <cds-time-picker-select size="md">
  
    
      <cds-select-item selected value="UTC">
  
        UTC
      
</cds-select-item>
    
  
</cds-time-picker-select>

  
  
  
</cds-time-picker>
```
