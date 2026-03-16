# `ui_shell`

### example

```heex
<Graphene.CarbonComponents.ui_shell content_class="psb-ui-shell-content">
      <:skip_to_content>
        <a href="#main-content">Skip to content</a>
      </:skip_to_content>
      <:header>
        <Graphene.CarbonComponents.header aria-label="IBM Platform Name">
          <Graphene.CarbonComponents.header_menu_button
            button_label_active="Close menu"
            button_label_inactive="Open menu"
            collapse_mode="rail"
          />
          <Graphene.CarbonComponents.header_name href="#" prefix="IBM">[Platform]</Graphene.CarbonComponents.header_name>
          <Graphene.CarbonComponents.header_nav menu_bar_label="IBM [Platform]">
            <Graphene.CarbonComponents.header_nav_item href="#">Link 1</Graphene.CarbonComponents.header_nav_item>
            <Graphene.CarbonComponents.header_nav_item href="#">Link 2</Graphene.CarbonComponents.header_nav_item>
            <Graphene.CarbonComponents.header_nav_item href="#">Link 3</Graphene.CarbonComponents.header_nav_item>
            <Graphene.CarbonComponents.header_menu menu_label="Link 4" trigger_content="Link 4">
              <Graphene.CarbonComponents.header_menu_item href="#">Sub-link 1</Graphene.CarbonComponents.header_menu_item>
              <Graphene.CarbonComponents.header_menu_item href="#">Sub-link 2</Graphene.CarbonComponents.header_menu_item>
              <Graphene.CarbonComponents.header_menu_item href="#">Sub-link 3</Graphene.CarbonComponents.header_menu_item>
            </Graphene.CarbonComponents.header_menu>
          </Graphene.CarbonComponents.header_nav>
          <:global>
            <Graphene.CarbonComponents.header_global_action
              button_label_inactive="Search"
              button_label_active="Search"
              tooltip_text="Search"
            >
              <:icon name="search" size={20} />
            </Graphene.CarbonComponents.header_global_action>
            <Graphene.CarbonComponents.header_global_action
              button_label_inactive="Notifications"
              button_label_active="Notifications"
              tooltip_text="Notifications"
            >
              <:icon name="notification" size={20} />
            </Graphene.CarbonComponents.header_global_action>
            <Graphene.CarbonComponents.header_global_action
              button_label_inactive="App Switcher"
              button_label_active="App Switcher"
              tooltip_text="App Switcher"
              tooltip_alignment="right"
            >
              <:icon name="switcher" size={20} />
            </Graphene.CarbonComponents.header_global_action>
          </:global>
        </Graphene.CarbonComponents.header>
      </:header>
      <:side_nav>
        <Graphene.CarbonComponents.side_nav aria-label="Side navigation" collapse_mode="rail">
          <Graphene.CarbonComponents.side_nav_items>
            <Graphene.CarbonComponents.side_nav_menu title="Category title">
              <:title_icon>
                <Graphene.CarbonComponents.icon name="analytics" size={16} />
              </:title_icon>
              <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
              <Graphene.CarbonComponents.side_nav_menu_item href="#" active>Link</Graphene.CarbonComponents.side_nav_menu_item>
              <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
            </Graphene.CarbonComponents.side_nav_menu>
            <Graphene.CarbonComponents.side_nav_menu title="Category title">
              <:title_icon>
                <Graphene.CarbonComponents.icon name="cloud-services" size={16} />
              </:title_icon>
              <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
              <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
              <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
            </Graphene.CarbonComponents.side_nav_menu>
            <Graphene.CarbonComponents.side_nav_menu title="Category title">
              <:title_icon>
                <Graphene.CarbonComponents.icon name="security" size={16} />
              </:title_icon>
              <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
              <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
              <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
            </Graphene.CarbonComponents.side_nav_menu>
            <Graphene.CarbonComponents.side_nav_link href="#">
              <:title_icon_container>
                <Graphene.CarbonComponents.icon name="catalog" size={16} />
              </:title_icon_container>
              Link
            </Graphene.CarbonComponents.side_nav_link>
            <Graphene.CarbonComponents.side_nav_link href="#">
              <:title_icon_container>
                <Graphene.CarbonComponents.icon name="settings" size={16} />
              </:title_icon_container>
              Link
            </Graphene.CarbonComponents.side_nav_link>
          </Graphene.CarbonComponents.side_nav_items>
        </Graphene.CarbonComponents.side_nav>
      </:side_nav>
      <:content>
        <div id="main-content" style="padding: 1rem;">
          <Graphene.CarbonComponents.button kind="secondary" href="/" size="sm">Return to storybook</Graphene.CarbonComponents.button>
          <div style="margin-top: 1rem;">
            Main content area
          </div>
        </div>
      </:content>
    </Graphene.CarbonComponents.ui_shell>
```

```html
<div>
  
    <a href="#main-content">Skip to content</a>
  
  
    <cds-header class="cds--header" aria-label="IBM Platform Name">
  
  
  
      <cds-header-menu-button button-label-active="Close menu" button-label-inactive="Open menu" collapse-mode="rail">
  
</cds-header-menu-button>
      <cds-header-name href="#" prefix="IBM">
  [Platform]
</cds-header-name>
      <cds-header-nav menu-bar-label="IBM [Platform]">
  
        <cds-header-nav-item href="#" role="listitem">
  Link 1
</cds-header-nav-item>
        <cds-header-nav-item href="#" role="listitem">
  Link 2
</cds-header-nav-item>
        <cds-header-nav-item href="#" role="listitem">
  Link 3
</cds-header-nav-item>
        <cds-header-menu menu-label="Link 4" trigger-content="Link 4">
  
          <cds-header-menu-item href="#" role="listitem">
  Sub-link 1
</cds-header-menu-item>
          <cds-header-menu-item href="#" role="listitem">
  Sub-link 2
</cds-header-menu-item>
          <cds-header-menu-item href="#" role="listitem">
  Sub-link 3
</cds-header-menu-item>
        
</cds-header-menu>
      
</cds-header-nav>
      
  
    <div class="cds--header__global">
      
        
        <cds-header-global-action button-label-active="Search" button-label-inactive="Search" kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" tooltip-text="Search" type="button">
  
    
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" slot="icon" width="20px" height="20px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z"/>

</svg>
    
  
  
          
</cds-header-global-action>
        <cds-header-global-action button-label-active="Notifications" button-label-inactive="Notifications" kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" tooltip-text="Notifications" type="button">
  
    
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" slot="icon" width="20px" height="20px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M28.7071,19.293,26,16.5859V13a10.0136,10.0136,0,0,0-9-9.9492V1H15V3.0508A10.0136,10.0136,0,0,0,6,13v3.5859L3.2929,19.293A1,1,0,0,0,3,20v3a1,1,0,0,0,1,1h7v.7768a5.152,5.152,0,0,0,4.5,5.1987A5.0057,5.0057,0,0,0,21,25V24h7a1,1,0,0,0,1-1V20A1,1,0,0,0,28.7071,19.293ZM19,25a3,3,0,0,1-6,0V24h6Zm8-3H5V20.4141L7.707,17.707A1,1,0,0,0,8,17V13a8,8,0,0,1,16,0v4a1,1,0,0,0,.293.707L27,20.4141Z"/>

</svg>
    
  
  
          
</cds-header-global-action>
        <cds-header-global-action button-label-active="App Switcher" button-label-inactive="App Switcher" kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="right" tooltip-position="top" tooltip-text="App Switcher" type="button">
  
    
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" slot="icon" width="20px" height="20px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M14 4H18V8H14z"/><path d="M4 4H8V8H4z"/><path d="M24 4H28V8H24z"/><path d="M14 14H18V18H14z"/><path d="M4 14H8V18H4z"/><path d="M24 14H28V18H24z"/><path d="M14 24H18V28H14z"/><path d="M4 24H8V28H4z"/><path d="M24 24H28V28H24z"/>

</svg>
    
  
  
          
</cds-header-global-action>
      
      
    </div>
  

</cds-header>
  
  
    <cds-side-nav collapse-mode="rail" class="cds--side-nav" aria-label="Side navigation">
  
      <cds-side-nav-items>
  
        <cds-side-nav-menu title="Category title">
  
          <cds-side-nav-menu-item href="#">
  Link
</cds-side-nav-menu-item>
          <cds-side-nav-menu-item active href="#">
  Link
</cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="#">
  Link
</cds-side-nav-menu-item>
        
  <div slot="title-icon">
    
            

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16px" height="16px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M4,2H2V28a2,2,0,0,0,2,2H30V28H4Z"/><path d="M30,9H23v2h3.59L19,18.59l-4.29-4.3a1,1,0,0,0-1.42,0L6,21.59,7.41,23,14,16.41l4.29,4.3a1,1,0,0,0,1.42,0L28,12.41V16h2Z"/>

</svg>
          
  </div>
</cds-side-nav-menu>
        <cds-side-nav-menu title="Category title">
  
          <cds-side-nav-menu-item href="#">
  Link
</cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="#">
  Link
</cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="#">
  Link
</cds-side-nav-menu-item>
        
  <div slot="title-icon">
    
            

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16px" height="16px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M25.8218,10.124a9.9991,9.9991,0,0,0-19.6435,0A7.4964,7.4964,0,0,0,7.5,25H8V23H7.5a5.4961,5.4961,0,0,1-.3769-10.9795l.8364-.0571.09-.8335a7.9979,7.9979,0,0,1,15.9013,0l.09.8335.8364.0571A5.4961,5.4961,0,0,1,24.5,23H24v2h.5a7.4964,7.4964,0,0,0,1.3218-14.876Z"/><path d="M23,22V20H20.8989a4.9678,4.9678,0,0,0-.7319-1.7529l1.49-1.49-1.414-1.414-1.49,1.49A4.9678,4.9678,0,0,0,17,16.1011V14H15v2.1011a4.9678,4.9678,0,0,0-1.7529.7319l-1.49-1.49-1.414,1.414,1.49,1.49A4.9678,4.9678,0,0,0,11.1011,20H9v2h2.1011a4.9678,4.9678,0,0,0,.7319,1.7529l-1.49,1.49,1.414,1.414,1.49-1.49A4.9678,4.9678,0,0,0,15,25.8989V28h2V25.8989a4.9678,4.9678,0,0,0,1.7529-.7319l1.49,1.49,1.414-1.414-1.49-1.49A4.9678,4.9678,0,0,0,20.8989,22Zm-7,2a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,16,24Z"/>

</svg>
          
  </div>
</cds-side-nav-menu>
        <cds-side-nav-menu title="Category title">
  
          <cds-side-nav-menu-item href="#">
  Link
</cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="#">
  Link
</cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="#">
  Link
</cds-side-nav-menu-item>
        
  <div slot="title-icon">
    
            

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16px" height="16px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M14 16.59 11.41 14 10 15.41 14 19.41 22 11.41 20.59 10 14 16.59z"/><path d="M16,30,9.8242,26.7071A10.9818,10.9818,0,0,1,4,17V4A2.0021,2.0021,0,0,1,6,2H26a2.0021,2.0021,0,0,1,2,2V17a10.9818,10.9818,0,0,1-5.8242,9.7071ZM6,4V17a8.9852,8.9852,0,0,0,4.7656,7.9423L16,27.7333l5.2344-2.791A8.9852,8.9852,0,0,0,26,17V4Z"/>

</svg>
          
  </div>
</cds-side-nav-menu>
        <cds-side-nav-link href="#">
  
          Link
        
  
  
  <div slot="title-icon-container">
    
            

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16px" height="16px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M26,2H8A2,2,0,0,0,6,4V8H4v2H6v5H4v2H6v5H4v2H6v4a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V4A2,2,0,0,0,26,2Zm0,26H8V24h2V22H8V17h2V15H8V10h2V8H8V4H26Z"/><path d="M14 8H22V10H14z"/><path d="M14 15H22V17H14z"/><path d="M14 22H22V24H14z"/>

</svg>
          
  </div>
</cds-side-nav-link>
        <cds-side-nav-link href="#">
  
          Link
        
  
  
  <div slot="title-icon-container">
    
            

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16px" height="16px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M13.5,8.4c0-0.1,0-0.3,0-0.4c0-0.1,0-0.3,0-0.4l1-0.8c0.4-0.3,0.4-0.9,0.2-1.3l-1.2-2C13.3,3.2,13,3,12.6,3	c-0.1,0-0.2,0-0.3,0.1l-1.2,0.4c-0.2-0.1-0.4-0.3-0.7-0.4l-0.3-1.3C10.1,1.3,9.7,1,9.2,1H6.8c-0.5,0-0.9,0.3-1,0.8L5.6,3.1	C5.3,3.2,5.1,3.3,4.9,3.4L3.7,3C3.6,3,3.5,3,3.4,3C3,3,2.7,3.2,2.5,3.5l-1.2,2C1.1,5.9,1.2,6.4,1.6,6.8l0.9,0.9c0,0.1,0,0.3,0,0.4	c0,0.1,0,0.3,0,0.4L1.6,9.2c-0.4,0.3-0.5,0.9-0.2,1.3l1.2,2C2.7,12.8,3,13,3.4,13c0.1,0,0.2,0,0.3-0.1l1.2-0.4	c0.2,0.1,0.4,0.3,0.7,0.4l0.3,1.3c0.1,0.5,0.5,0.8,1,0.8h2.4c0.5,0,0.9-0.3,1-0.8l0.3-1.3c0.2-0.1,0.4-0.2,0.7-0.4l1.2,0.4	c0.1,0,0.2,0.1,0.3,0.1c0.4,0,0.7-0.2,0.9-0.5l1.1-2c0.2-0.4,0.2-0.9-0.2-1.3L13.5,8.4z M12.6,12l-1.7-0.6c-0.4,0.3-0.9,0.6-1.4,0.8	L9.2,14H6.8l-0.4-1.8c-0.5-0.2-0.9-0.5-1.4-0.8L3.4,12l-1.2-2l1.4-1.2c-0.1-0.5-0.1-1.1,0-1.6L2.2,6l1.2-2l1.7,0.6	C5.5,4.2,6,4,6.5,3.8L6.8,2h2.4l0.4,1.8c0.5,0.2,0.9,0.5,1.4,0.8L12.6,4l1.2,2l-1.4,1.2c0.1,0.5,0.1,1.1,0,1.6l1.4,1.2L12.6,12z"/><path d="M8,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3C11,9.6,9.7,11,8,11C8,11,8,11,8,11z M8,6C6.9,6,6,6.8,6,7.9C6,7.9,6,8,6,8	c0,1.1,0.8,2,1.9,2c0,0,0.1,0,0.1,0c1.1,0,2-0.8,2-1.9c0,0,0-0.1,0-0.1C10,6.9,9.2,6,8,6C8.1,6,8,6,8,6z"/>

</svg>
          
  </div>
</cds-side-nav-link>
      
</cds-side-nav-items>
    
</cds-side-nav>
  
  <main class="psb-ui-shell-content cds--content">
    
    <div id="main-content" style="padding: 1rem;">
      <cds-button href="/" kind="secondary" link-role="button" size="sm" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Return to storybook
  
</cds-button>
      <div style="margin-top: 1rem;">
        Main content area
      </div>
    </div>
  
  </main>
</div>
```
