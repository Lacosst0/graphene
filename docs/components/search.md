# `search`

### default

```heex
<.search name="search-default" placeholder="Search" label_text="Search"/>
```

```html
<input type="hidden" id="search-default-input" name="search-default" value="">
<cds-search autocomplete="off" label-text="Search" name="search-default" placeholder="Search" size="md" id="search-single-default" data-form-detail="checked" data-form-event="cds-search-input" data-form-input="search-default-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
</cds-search>
```

### expandable

```heex
<.search name="search-expandable" expandable expanded label_text="Search"/>
```

```html
<input type="hidden" id="search-expandable-input" name="search-expandable" value="">
<cds-search autocomplete="off" expandable expanded label-text="Search" name="search-expandable" placeholder="Search" size="md" id="search-single-expandable" data-form-detail="checked" data-form-event="cds-search-input" data-form-input="search-expandable-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
</cds-search>
```

### group: sizes

```heex
<.search name="search-sm" size="sm" label_text="Size sm"/>
<.search name="search-md" size="md" label_text="Size md"/>
<.search name="search-lg" size="lg" label_text="Size lg"/>
```

```html
<input type="hidden" id="search-sm-input" name="search-sm" value="">
<cds-search autocomplete="off" label-text="Size sm" name="search-sm" placeholder="Search" size="sm" id="search-sizes-sm" data-form-detail="checked" data-form-event="cds-search-input" data-form-input="search-sm-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
</cds-search>

<input type="hidden" id="search-md-input" name="search-md" value="">
<cds-search autocomplete="off" label-text="Size md" name="search-md" placeholder="Search" size="md" id="search-sizes-md" data-form-detail="checked" data-form-event="cds-search-input" data-form-input="search-md-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
</cds-search>

<input type="hidden" id="search-lg-input" name="search-lg" value="">
<cds-search autocomplete="off" label-text="Size lg" name="search-lg" placeholder="Search" size="lg" id="search-sizes-lg" data-form-detail="checked" data-form-event="cds-search-input" data-form-input="search-lg-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
</cds-search>
```
