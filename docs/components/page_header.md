# `page_header`

### default

```heex
<.page_header >
  <:breadcrumb_slot>
    <Graphene.CarbonComponents.breadcrumb>
      <:item href="#">Home</:item>
      <:item current>Page</:item>
    </Graphene.CarbonComponents.breadcrumb>
  </:breadcrumb_slot>
  <:content title="Page title" />
  <:content_text subtitle="Optional subtitle">
    This is a short supporting description for the page header.
  </:content_text>
</.page_header>
```

```html
<cds-page-header id="page-header-single-default">
  
  
  
    <cds-page-header-breadcrumb border>
  
      
        
  <cds-breadcrumb size="md">
  
  
    <cds-breadcrumb-item>
  
      
        <cds-breadcrumb-link href="#" size="MEDIUM">
  
          Home
        
</cds-breadcrumb-link>
      
    
</cds-breadcrumb-item>
  
    <cds-breadcrumb-item>
  
      
        Page
      
    
</cds-breadcrumb-item>
  

</cds-breadcrumb>

      
    
  
  
</cds-page-header-breadcrumb>
  
  
    <cds-page-header-content title="Page title">
  
      
        
          <cds-page-header-content-text subtitle="Optional subtitle">
  
            
              
  This is a short supporting description for the page header.

            
          
</cds-page-header-content-text>
        
      
      
    
  
  
</cds-page-header-content>
  
  
  

</cds-page-header>
```

### with_actions

```heex
<.page_header >
  <:breadcrumb_slot>
    <Graphene.CarbonComponents.breadcrumb>
      <:item href="#">Home</:item>
      <:item href="#">Workspace</:item>
      <:item current>Projects</:item>
    </Graphene.CarbonComponents.breadcrumb>
  </:breadcrumb_slot>
  <:content title="Projects">
    <Graphene.CarbonComponents.button kind="ghost">New project</Graphene.CarbonComponents.button>
  </:content>
  <:content_text subtitle="Team projects">
    Manage shared initiatives for your team.
  </:content_text>
</.page_header>
```

```html
<cds-page-header id="page-header-single-with-actions">
  
  
  
    <cds-page-header-breadcrumb border>
  
      
        
  <cds-breadcrumb size="md">
  
  
    <cds-breadcrumb-item>
  
      
        <cds-breadcrumb-link href="#" size="MEDIUM">
  
          Home
        
</cds-breadcrumb-link>
      
    
</cds-breadcrumb-item>
  
    <cds-breadcrumb-item>
  
      
        <cds-breadcrumb-link href="#" size="MEDIUM">
  
          Workspace
        
</cds-breadcrumb-link>
      
    
</cds-breadcrumb-item>
  
    <cds-breadcrumb-item>
  
      
        Projects
      
    
</cds-breadcrumb-item>
  

</cds-breadcrumb>

      
    
  
  
</cds-page-header-breadcrumb>
  
  
    <cds-page-header-content title="Projects">
  
      
        
          <cds-page-header-content-text subtitle="Team projects">
  
            
              
  Manage shared initiatives for your team.

            
          
</cds-page-header-content-text>
        
      
      
        
  <cds-button kind="ghost" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  New project
  
</cds-button>

      
    
  
  
</cds-page-header-content>
  
  
  

</cds-page-header>
```

### compact

```heex
<.page_header >
  <:breadcrumb_slot border={false}>
    <Graphene.CarbonComponents.breadcrumb>
      <:item href="#">Home</:item>
      <:item current>Settings</:item>
    </Graphene.CarbonComponents.breadcrumb>
  </:breadcrumb_slot>
  <:content title="Settings" />
  <:content_text subtitle="Account">
    Update profile and security preferences.
  </:content_text>
</.page_header>
```

```html
<cds-page-header id="page-header-single-compact">
  
  
  
    <cds-page-header-breadcrumb>
  
      
        
  <cds-breadcrumb size="md">
  
  
    <cds-breadcrumb-item>
  
      
        <cds-breadcrumb-link href="#" size="MEDIUM">
  
          Home
        
</cds-breadcrumb-link>
      
    
</cds-breadcrumb-item>
  
    <cds-breadcrumb-item>
  
      
        Settings
      
    
</cds-breadcrumb-item>
  

</cds-breadcrumb>

      
    
  
  
</cds-page-header-breadcrumb>
  
  
    <cds-page-header-content title="Settings">
  
      
        
          <cds-page-header-content-text subtitle="Account">
  
            
              
  Update profile and security preferences.

            
          
</cds-page-header-content-text>
        
      
      
    
  
  
</cds-page-header-content>
  
  
  

</cds-page-header>
```
