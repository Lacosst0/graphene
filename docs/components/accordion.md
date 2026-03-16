# `accordion`

### default

```heex
<.accordion alignment="start">
  <:item title="Section 1" open={true}>
    This is the first section content.
  </:item>
  <:item title="Section 2">This is the second section content.</:item>
  <:item title="Disabled section" disabled={true}>
    This section is disabled but still visible for layout context.
  </:item>
</.accordion>
```

```html
<cds-accordion alignment="start" size="md" id="accordion-single-default">
  
  
    <cds-accordion-item open title="Section 1">
  
      
  This is the first section content.

    
</cds-accordion-item>
  
    <cds-accordion-item title="Section 2">
  
      This is the second section content.
    
</cds-accordion-item>
  
    <cds-accordion-item disabled title="Disabled section">
  
      
  This section is disabled but still visible for layout context.

    
</cds-accordion-item>
  

</cds-accordion>
```

### flush

```heex
<.accordion is_flush>
  <:item title="Overview" open={true}>Summary content.</:item>
  <:item title="Details">More details about the section.</:item>
</.accordion>
```

```html
<cds-accordion isFlush size="md" id="accordion-single-flush">
  
  
    <cds-accordion-item open title="Overview">
  
      Summary content.
    
</cds-accordion-item>
  
    <cds-accordion-item title="Details">
  
      More details about the section.
    
</cds-accordion-item>
  

</cds-accordion>
```

### group: sizes

```heex
<.accordion size="sm">
  <:item title="First">Small content.</:item>
  <:item title="Second">More content.</:item>
</.accordion>
<.accordion size="md">
  <:item title="First">Small content.</:item>
  <:item title="Second">More content.</:item>
</.accordion>
<.accordion size="lg">
  <:item title="First">Small content.</:item>
  <:item title="Second">More content.</:item>
</.accordion>
```

```html
<cds-accordion size="sm" id="accordion-sizes-sm">
  
  
    <cds-accordion-item title="First">
  
      Small content.
    
</cds-accordion-item>
  
    <cds-accordion-item title="Second">
  
      More content.
    
</cds-accordion-item>
  

</cds-accordion>
<cds-accordion size="md" id="accordion-sizes-md">
  
  
    <cds-accordion-item title="First">
  
      Small content.
    
</cds-accordion-item>
  
    <cds-accordion-item title="Second">
  
      More content.
    
</cds-accordion-item>
  

</cds-accordion>
<cds-accordion size="lg" id="accordion-sizes-lg">
  
  
    <cds-accordion-item title="First">
  
      Small content.
    
</cds-accordion-item>
  
    <cds-accordion-item title="Second">
  
      More content.
    
</cds-accordion-item>
  

</cds-accordion>
```
