# `checkbox_group`

## checkbox

### default

```heex
<.checkbox_group legend_text="Notifications">
  <:item label="Email" value="email" />
  <:item label="SMS" value="sms" />
</.checkbox_group>
```

```html
<cds-checkbox-group legend-text="Notifications" orientation="vertical" id="checkbox-single-default">
  
  
    <cds-checkbox id="checkbox" label-text="Email" value="email">
  
</cds-checkbox>
  
    <cds-checkbox id="checkbox" label-text="SMS" value="sms">
  
</cds-checkbox>
  

</cds-checkbox-group>
```

### with_checked

```heex
<.checkbox_group legend_text="Status">
  <:item label="Active" value="active" checked={true} />
  <:item label="Paused" value="paused" />
</.checkbox_group>
```

```html
<cds-checkbox-group legend-text="Status" orientation="vertical" id="checkbox-single-with-checked">
  
  
    <cds-checkbox checked id="checkbox" label-text="Active" value="active">
  
</cds-checkbox>
  
    <cds-checkbox id="checkbox" label-text="Paused" value="paused">
  
</cds-checkbox>
  

</cds-checkbox-group>
```

### invalid

```heex
<.checkbox_group invalid legend_text="Required" invalid_text="Select at least one">
  <:item label="Option A" value="a" />
  <:item label="Option B" value="b" />
</.checkbox_group>
```

```html
<cds-checkbox-group invalid invalid-text="Select at least one" legend-text="Required" orientation="vertical" id="checkbox-single-invalid">
  
  
    <cds-checkbox id="checkbox" label-text="Option A" value="a">
  
</cds-checkbox>
  
    <cds-checkbox id="checkbox" label-text="Option B" value="b">
  
</cds-checkbox>
  

</cds-checkbox-group>
```
