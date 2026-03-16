# `inline_loading`

### active

```heex
<.inline_loading status="active">
  Loading...
</.inline_loading>
```

```html
<cds-inline-loading icon-description="Loading" status="active" success-delay="1500" id="inline-loading-single-active">
  
  Loading...

</cds-inline-loading>
```

### finished

```heex
<.inline_loading status="finished">
  Complete
</.inline_loading>
```

```html
<cds-inline-loading icon-description="Loading" status="finished" success-delay="1500" id="inline-loading-single-finished">
  
  Complete

</cds-inline-loading>
```

### error

```heex
<.inline_loading status="error">
  Failed
</.inline_loading>
```

```html
<cds-inline-loading icon-description="Loading" status="error" success-delay="1500" id="inline-loading-single-error">
  
  Failed

</cds-inline-loading>
```
