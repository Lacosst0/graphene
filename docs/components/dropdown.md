# `dropdown`

### default

```heex
<.dropdown name="dropdown-default" value="all">
  <:title_text>Dropdown</:title_text>
  <:item value="all">All</:item>
  <:item value="cloud">Cloud</:item>
  <:item value="edge">Edge</:item>
</.dropdown>
```

```html
<input type="hidden" id="dropdown-default-input" name="dropdown-default" value="all">
<cds-dropdown direction="bottom" name="dropdown-default" required-validity-message="Please fill out this field." size="md" type="" value="all" id="dropdown-single-default" data-form-detail="checked" data-form-event="cds-dropdown-selected" data-form-input="dropdown-default-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="title-text">
    Dropdown
  </div>
  
    <cds-dropdown-item size="md" value="all">
  
      All
    
</cds-dropdown-item>
  
    <cds-dropdown-item size="md" value="cloud">
  
      Cloud
    
</cds-dropdown-item>
  
    <cds-dropdown-item size="md" value="edge">
  
      Edge
    
</cds-dropdown-item>
  

  
  

  
</cds-dropdown>
```

### inline

```heex
<.dropdown name="dropdown-inline" type="inline" value="alpha">
  <:title_text>Inline</:title_text>
  <:item value="alpha">Alpha</:item>
  <:item value="beta">Beta</:item>
  <:item value="gamma">Gamma</:item>
</.dropdown>
```

```html
<input type="hidden" id="dropdown-inline-input" name="dropdown-inline" value="alpha">
<cds-dropdown direction="bottom" name="dropdown-inline" required-validity-message="Please fill out this field." size="md" type="inline" value="alpha" id="dropdown-single-inline" data-form-detail="checked" data-form-event="cds-dropdown-selected" data-form-input="dropdown-inline-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="title-text">
    Inline
  </div>
  
    <cds-dropdown-item size="md" value="alpha">
  
      Alpha
    
</cds-dropdown-item>
  
    <cds-dropdown-item size="md" value="beta">
  
      Beta
    
</cds-dropdown-item>
  
    <cds-dropdown-item size="md" value="gamma">
  
      Gamma
    
</cds-dropdown-item>
  

  
  

  
</cds-dropdown>
```

### group: sizes

```heex
<.dropdown name="dropdown-sm" size="sm" value="one">
  <:title_text>Size sm</:title_text>
  <:item value="one">One</:item>
  <:item value="two">Two</:item>
</.dropdown>
<.dropdown name="dropdown-md" size="md" value="one">
  <:title_text>Size md</:title_text>
  <:item value="one">One</:item>
  <:item value="two">Two</:item>
</.dropdown>
<.dropdown name="dropdown-lg" size="lg" value="one">
  <:title_text>Size lg</:title_text>
  <:item value="one">One</:item>
  <:item value="two">Two</:item>
</.dropdown>
```

```html
<input type="hidden" id="dropdown-sm-input" name="dropdown-sm" value="one">
<cds-dropdown direction="bottom" name="dropdown-sm" required-validity-message="Please fill out this field." size="sm" type="" value="one" id="dropdown-sizes-sm" data-form-detail="checked" data-form-event="cds-dropdown-selected" data-form-input="dropdown-sm-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="title-text">
    Size sm
  </div>
  
    <cds-dropdown-item size="md" value="one">
  
      One
    
</cds-dropdown-item>
  
    <cds-dropdown-item size="md" value="two">
  
      Two
    
</cds-dropdown-item>
  

  
  

  
</cds-dropdown>

<input type="hidden" id="dropdown-md-input" name="dropdown-md" value="one">
<cds-dropdown direction="bottom" name="dropdown-md" required-validity-message="Please fill out this field." size="md" type="" value="one" id="dropdown-sizes-md" data-form-detail="checked" data-form-event="cds-dropdown-selected" data-form-input="dropdown-md-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="title-text">
    Size md
  </div>
  
    <cds-dropdown-item size="md" value="one">
  
      One
    
</cds-dropdown-item>
  
    <cds-dropdown-item size="md" value="two">
  
      Two
    
</cds-dropdown-item>
  

  
  

  
</cds-dropdown>

<input type="hidden" id="dropdown-lg-input" name="dropdown-lg" value="one">
<cds-dropdown direction="bottom" name="dropdown-lg" required-validity-message="Please fill out this field." size="lg" type="" value="one" id="dropdown-sizes-lg" data-form-detail="checked" data-form-event="cds-dropdown-selected" data-form-input="dropdown-lg-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="title-text">
    Size lg
  </div>
  
    <cds-dropdown-item size="md" value="one">
  
      One
    
</cds-dropdown-item>
  
    <cds-dropdown-item size="md" value="two">
  
      Two
    
</cds-dropdown-item>
  

  
  

  
</cds-dropdown>
```
