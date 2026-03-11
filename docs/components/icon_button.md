# `icon_button`

### ghost

```heex
<.icon_button kind="ghost" tooltip_text="Settings">
  <:icon name="3d-cursor" size="16" />
</.icon_button>
```

```html
<cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="md" tab-index="0" tooltip-alignment="" tooltip-position="top" tooltip-text="Settings" type="button" id="icon-button-single-ghost">
  
  
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16px" height="16px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M13 4 4 4 4 13.01 6 13.01 6 6 13 6 13 4z"/><path d="M29.49,13.12l-9-5a1,1,0,0,0-1,0l-9,5A1,1,0,0,0,10,14V24a1,1,0,0,0,.52.87l9,5A1,1,0,0,0,20,30a1.05,1.05,0,0,0,.49-.13l9-5A1,1,0,0,0,30,24V14A1,1,0,0,0,29.49,13.12ZM19,27.3l-7-3.89V15.69l7,3.89Zm1-9.45L13.06,14,20,10.14,26.94,14Zm8,5.56L21,27.3V19.58l7-3.89Z"/>

</svg>
    
  
  
  

  
</cds-icon-button>
```

### primary

```heex
<.icon_button kind="primary" tooltip_text="Notifications">
  <:icon size="16">
    <svg width="16" height="16" viewBox="0 0 16 16">
      <rect x="2" y="2" width="12" height="12" fill="currentColor" />
    </svg>
  </:icon>
</.icon_button>
```

```html
<cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" tooltip-alignment="" tooltip-position="top" tooltip-text="Notifications" type="button" id="icon-button-single-primary">
  
  
    
    
    
      <cds-icon class="" size="16">
  
        
  <svg width="16" height="16" viewBox="0 0 16 16">
    <rect x="2" y="2" width="12" height="12" fill="currentColor"></rect>
  </svg>

      
</cds-icon>
    
  
  
  

  
</cds-icon-button>
```

### danger

```heex
<.icon_button kind="danger" tooltip_text="Delete">
  <:icon size="16">
    <svg width="16" height="16" viewBox="0 0 16 16">
      <polygon points="8,2 14,14 2,14" fill="currentColor" />
    </svg>
  </:icon>
</.icon_button>
```

```html
<cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="danger" leave-delay-ms="100" link-role="button" size="md" tab-index="0" tooltip-alignment="" tooltip-position="top" tooltip-text="Delete" type="button" id="icon-button-single-danger">
  
  
    
    
    
      <cds-icon class="" size="16">
  
        
  <svg width="16" height="16" viewBox="0 0 16 16">
    <polygon points="8,2 14,14 2,14" fill="currentColor"></polygon>
  </svg>

      
</cds-icon>
    
  
  
  

  
</cds-icon-button>
```
