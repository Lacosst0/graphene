# `progress_indicator`

### default

```heex
<.progress_indicator current_index="1">
  <:step label="First" complete />
  <:step label="Second" current />
  <:step label="Third" />
</.progress_indicator>
```

```html
<cds-progress-indicator current-index="1" id="progress-indicator-single-default">
  
  
    <cds-progress-step complete label="First" state="incomplete">
  
      
    
  
</cds-progress-step>
  
    <cds-progress-step current label="Second" state="incomplete">
  
      
    
  
</cds-progress-step>
  
    <cds-progress-step label="Third" state="incomplete">
  
      
    
  
</cds-progress-step>
  

</cds-progress-indicator>
```

### vertical

```heex
<.progress_indicator vertical current_index="2">
  <:step label="Plan" complete />
  <:step label="Build" complete />
  <:step label="Launch" current />
  <:step label="Iterate" />
</.progress_indicator>
```

```html
<cds-progress-indicator current-index="2" vertical id="progress-indicator-single-vertical">
  
  
    <cds-progress-step complete label="Plan" state="incomplete">
  
      
    
  
</cds-progress-step>
  
    <cds-progress-step complete label="Build" state="incomplete">
  
      
    
  
</cds-progress-step>
  
    <cds-progress-step current label="Launch" state="incomplete">
  
      
    
  
</cds-progress-step>
  
    <cds-progress-step label="Iterate" state="incomplete">
  
      
    
  
</cds-progress-step>
  

</cds-progress-indicator>
```

### spaced

```heex
<.progress_indicator current_index="0" space_equally>
  <:step label="Step one" current />
  <:step label="Step two" />
  <:step label="Step three" />
</.progress_indicator>
```

```html
<cds-progress-indicator current-index="0" space-equally id="progress-indicator-single-spaced">
  
  
    <cds-progress-step current label="Step one" state="incomplete">
  
      
    
  
</cds-progress-step>
  
    <cds-progress-step label="Step two" state="incomplete">
  
      
    
  
</cds-progress-step>
  
    <cds-progress-step label="Step three" state="incomplete">
  
      
    
  
</cds-progress-step>
  

</cds-progress-indicator>
```
