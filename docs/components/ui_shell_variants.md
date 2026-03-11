# `ui_shell_variants`

## fixed_side_nav

### example

```heex
<Graphene.CarbonComponents.side_nav
      is_not_child_of_header
      usage_mode="regular"
      aria-label="Side navigation"
      collapse_mode="fixed"
      expanded
    >
      <Graphene.CarbonComponents.side_nav_items>
        <Graphene.CarbonComponents.side_nav_menu title="L0 menu">
          <Graphene.CarbonComponents.side_nav_menu_item href="#">L0 menu item</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">L0 menu item</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">L0 menu item</Graphene.CarbonComponents.side_nav_menu_item>
        </Graphene.CarbonComponents.side_nav_menu>
        <Graphene.CarbonComponents.side_nav_menu title="L0 menu">
          <Graphene.CarbonComponents.side_nav_menu_item href="#">L0 menu item</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#" active aria_current="page" target="_blank">
            L0 menu item
          </Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">L0 menu item</Graphene.CarbonComponents.side_nav_menu_item>
        </Graphene.CarbonComponents.side_nav_menu>
        <Graphene.CarbonComponents.side_nav_menu title="L0 menu">
          <Graphene.CarbonComponents.side_nav_menu_item href="#">L0 menu item</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">L0 menu item</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">L0 menu item</Graphene.CarbonComponents.side_nav_menu_item>
        </Graphene.CarbonComponents.side_nav_menu>
        <Graphene.CarbonComponents.side_nav_link href="#">L0 link</Graphene.CarbonComponents.side_nav_link>
        <Graphene.CarbonComponents.side_nav_link href="#">L0 link</Graphene.CarbonComponents.side_nav_link>
      </Graphene.CarbonComponents.side_nav_items>
    </Graphene.CarbonComponents.side_nav>
    <Helpers.story_content responsive_offset={false} />
```

```html
<cds-side-nav collapse-mode="fixed" expanded is-not-child-of-header usage-mode="regular" class="cds--side-nav cds--side-nav--expanded" aria-label="Side navigation">
  
  <cds-side-nav-items>
  
    <cds-side-nav-menu title="L0 menu">
  
      <cds-side-nav-menu-item href="#">
  L0 menu item
</cds-side-nav-menu-item>
      <cds-side-nav-menu-item href="#">
  L0 menu item
</cds-side-nav-menu-item>
      <cds-side-nav-menu-item href="#">
  L0 menu item
</cds-side-nav-menu-item>
    
  
</cds-side-nav-menu>
    <cds-side-nav-menu title="L0 menu">
  
      <cds-side-nav-menu-item href="#">
  L0 menu item
</cds-side-nav-menu-item>
      <cds-side-nav-menu-item active href="#" target="_blank" aria_current="page">
  
        L0 menu item
      
</cds-side-nav-menu-item>
      <cds-side-nav-menu-item href="#">
  L0 menu item
</cds-side-nav-menu-item>
    
  
</cds-side-nav-menu>
    <cds-side-nav-menu title="L0 menu">
  
      <cds-side-nav-menu-item href="#">
  L0 menu item
</cds-side-nav-menu-item>
      <cds-side-nav-menu-item href="#">
  L0 menu item
</cds-side-nav-menu-item>
      <cds-side-nav-menu-item href="#">
  L0 menu item
</cds-side-nav-menu-item>
    
  
</cds-side-nav-menu>
    <cds-side-nav-link href="#">
  L0 link
  
  
  
</cds-side-nav-link>
    <cds-side-nav-link href="#">
  L0 link
  
  
  
</cds-side-nav-link>
  
</cds-side-nav-items>

</cds-side-nav>
<main class="cds--content cds-ce-demo-devenv--ui-shell-content">
  <div class="cds--grid">
    <div class="cds--row">
      <div class="cds--col-lg-13 ">
        <h2 style="margin: 0 0 30px">Purpose and function</h2>
        <p>
          The shell is perhaps the most crucial piece of any UI built with
          <a href="https://www.carbondesignsystem.com">Carbon</a>. It contains the shared
          navigation framework for the entire design system and ties the products in IBM's
          portfolio together in a cohesive and elegant way. The shell is the home of the
          topmost navigation, where users can quickly and dependably gain their bearings and
          move between pages.
          <br>
          <br>
          The shell was designed with maximum flexibility built in, to serve the needs of a
          broad range of products and users. Adopting the shell ensures compliance with IBM
          design standards, simplifies development efforts, and provides great user
          experiences. All IBM products built with Carbon are required to use the shell's
          header.
          <br>
          <br>
          To better understand the purpose and function of the UI shell, consider the "shell"
          of macOS, which contains the Apple menu, top-level navigation, and universal,
          OS-level controls at the top of the screen, as well as a universal dock along the
          bottom or side of the screen. The Carbon UI shell is roughly analogous in function
          to these parts of the Mac UI. For example, the app switcher portion of the shell can
          be compared to the dock in macOS.
        </p>
        <h2 style="margin: 30px 0px">Header responsive behavior</h2>
        <p>
          As a header scales down to fit smaller screen sizes, headers with persistent side
          nav menus should have the side nav collapse into "hamburger" menu. See the example
          to better understand responsive behavior of the header.
        </p>
        <h2 style="margin: 30px 0px">Secondary navigation</h2>
        <p>
          The side-nav contains secondary navigation and fits below the header. It can be
          configured to be either fixed-width or flexible, with only one level of nested
          items allowed. Both links and category lists can be used in the side-nav and may be
          mixed together. There are several configurations of the side-nav, but only one
          configuration should be used per product section. If tabs are needed on a page when
          using a side-nav, then the tabs are secondary in hierarchy to the side-nav.
        </p>
        <cds-modal>
          <cds-modal-header>
            <cds-modal-close-button></cds-modal-close-button>
            <cds-modal-label>Account resources</cds-modal-label>
            <cds-modal-heading>Add a custom domain</cds-modal-heading>
          </cds-modal-header>
          <cds-modal-body>
            <cds-modal-body-content description>
              Custom domains direct requests for your apps in this Cloud Foundry organization
              to a URL that you own. A custom domain can be a shared domain, a shared subdomain,
              or a shared domain and host.
            </cds-modal-body-content>
          </cds-modal-body>
          <cds-modal-footer>
            <cds-modal-footer-button kind="secondary" data-modal-close>
              Cancel
            </cds-modal-footer-button>
            <cds-modal-footer-button kind="primary">Add</cds-modal-footer-button>
          </cds-modal-footer>
        </cds-modal>
        <cds-button kind="primary">Launch modal</cds-button>
      </div>
    </div>
  </div>
</main>
```


## fixed_side_nav_divider

### example

```heex
<Graphene.CarbonComponents.side_nav
      is_not_child_of_header
      usage_mode="regular"
      aria-label="Side navigation"
      collapse_mode="fixed"
      expanded
    >
      <Graphene.CarbonComponents.side_nav_items>
        <Graphene.CarbonComponents.side_nav_menu title="L0 menu">
          <Graphene.CarbonComponents.side_nav_menu_item href="#">L0 menu item</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">L0 menu item</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">L0 menu item</Graphene.CarbonComponents.side_nav_menu_item>
        </Graphene.CarbonComponents.side_nav_menu>
        <Graphene.CarbonComponents.side_nav_menu title="L0 menu">
          <Graphene.CarbonComponents.side_nav_menu_item href="#">L0 menu item</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#" active aria_current="page">L0 menu item</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">L0 menu item</Graphene.CarbonComponents.side_nav_menu_item>
        </Graphene.CarbonComponents.side_nav_menu>
        <Graphene.CarbonComponents.side_nav_menu title="L0 menu">
          <Graphene.CarbonComponents.side_nav_menu_item href="#">L0 menu item</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">L0 menu item</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">L0 menu item</Graphene.CarbonComponents.side_nav_menu_item>
        </Graphene.CarbonComponents.side_nav_menu>
        <Graphene.CarbonComponents.side_nav_link href="#">L0 link</Graphene.CarbonComponents.side_nav_link>
        <Graphene.CarbonComponents.side_nav_link href="#">L0 link</Graphene.CarbonComponents.side_nav_link>
      </Graphene.CarbonComponents.side_nav_items>
    </Graphene.CarbonComponents.side_nav>
    <Helpers.story_content responsive_offset={false} />
```

```html
<cds-side-nav collapse-mode="fixed" expanded is-not-child-of-header usage-mode="regular" class="cds--side-nav cds--side-nav--expanded" aria-label="Side navigation">
  
  <cds-side-nav-items>
  
    <cds-side-nav-menu title="L0 menu">
  
      <cds-side-nav-menu-item href="#">
  L0 menu item
</cds-side-nav-menu-item>
      <cds-side-nav-menu-item href="#">
  L0 menu item
</cds-side-nav-menu-item>
      <cds-side-nav-menu-item href="#">
  L0 menu item
</cds-side-nav-menu-item>
    
  
</cds-side-nav-menu>
    <cds-side-nav-menu title="L0 menu">
  
      <cds-side-nav-menu-item href="#">
  L0 menu item
</cds-side-nav-menu-item>
      <cds-side-nav-menu-item active href="#" aria_current="page">
  L0 menu item
</cds-side-nav-menu-item>
      <cds-side-nav-menu-item href="#">
  L0 menu item
</cds-side-nav-menu-item>
    
  
</cds-side-nav-menu>
    <cds-side-nav-menu title="L0 menu">
  
      <cds-side-nav-menu-item href="#">
  L0 menu item
</cds-side-nav-menu-item>
      <cds-side-nav-menu-item href="#">
  L0 menu item
</cds-side-nav-menu-item>
      <cds-side-nav-menu-item href="#">
  L0 menu item
</cds-side-nav-menu-item>
    
  
</cds-side-nav-menu>
    <cds-side-nav-link href="#">
  L0 link
  
  
  
</cds-side-nav-link>
    <cds-side-nav-link href="#">
  L0 link
  
  
  
</cds-side-nav-link>
  
</cds-side-nav-items>

</cds-side-nav>
<main class="cds--content cds-ce-demo-devenv--ui-shell-content">
  <div class="cds--grid">
    <div class="cds--row">
      <div class="cds--col-lg-13 ">
        <h2 style="margin: 0 0 30px">Purpose and function</h2>
        <p>
          The shell is perhaps the most crucial piece of any UI built with
          <a href="https://www.carbondesignsystem.com">Carbon</a>. It contains the shared
          navigation framework for the entire design system and ties the products in IBM's
          portfolio together in a cohesive and elegant way. The shell is the home of the
          topmost navigation, where users can quickly and dependably gain their bearings and
          move between pages.
          <br>
          <br>
          The shell was designed with maximum flexibility built in, to serve the needs of a
          broad range of products and users. Adopting the shell ensures compliance with IBM
          design standards, simplifies development efforts, and provides great user
          experiences. All IBM products built with Carbon are required to use the shell's
          header.
          <br>
          <br>
          To better understand the purpose and function of the UI shell, consider the "shell"
          of macOS, which contains the Apple menu, top-level navigation, and universal,
          OS-level controls at the top of the screen, as well as a universal dock along the
          bottom or side of the screen. The Carbon UI shell is roughly analogous in function
          to these parts of the Mac UI. For example, the app switcher portion of the shell can
          be compared to the dock in macOS.
        </p>
        <h2 style="margin: 30px 0px">Header responsive behavior</h2>
        <p>
          As a header scales down to fit smaller screen sizes, headers with persistent side
          nav menus should have the side nav collapse into "hamburger" menu. See the example
          to better understand responsive behavior of the header.
        </p>
        <h2 style="margin: 30px 0px">Secondary navigation</h2>
        <p>
          The side-nav contains secondary navigation and fits below the header. It can be
          configured to be either fixed-width or flexible, with only one level of nested
          items allowed. Both links and category lists can be used in the side-nav and may be
          mixed together. There are several configurations of the side-nav, but only one
          configuration should be used per product section. If tabs are needed on a page when
          using a side-nav, then the tabs are secondary in hierarchy to the side-nav.
        </p>
        <cds-modal>
          <cds-modal-header>
            <cds-modal-close-button></cds-modal-close-button>
            <cds-modal-label>Account resources</cds-modal-label>
            <cds-modal-heading>Add a custom domain</cds-modal-heading>
          </cds-modal-header>
          <cds-modal-body>
            <cds-modal-body-content description>
              Custom domains direct requests for your apps in this Cloud Foundry organization
              to a URL that you own. A custom domain can be a shared domain, a shared subdomain,
              or a shared domain and host.
            </cds-modal-body-content>
          </cds-modal-body>
          <cds-modal-footer>
            <cds-modal-footer-button kind="secondary" data-modal-close>
              Cancel
            </cds-modal-footer-button>
            <cds-modal-footer-button kind="primary">Add</cds-modal-footer-button>
          </cds-modal-footer>
        </cds-modal>
        <cds-button kind="primary">Launch modal</cds-button>
      </div>
    </div>
  </div>
</main>
```


## fixed_side_nav_icons

### example

```heex
<Graphene.CarbonComponents.side_nav is_not_child_of_header aria-label="Side navigation" collapse_mode="fixed" expanded>
      <Graphene.CarbonComponents.side_nav_items>
        <Graphene.CarbonComponents.side_nav_menu title="Category title">
          <:title_icon><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
        </Graphene.CarbonComponents.side_nav_menu>
        <Graphene.CarbonComponents.side_nav_menu title="Category title">
          <:title_icon><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#" active aria_current="page">Link</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
        </Graphene.CarbonComponents.side_nav_menu>
        <Graphene.CarbonComponents.side_nav_menu title="Category title">
          <:title_icon><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
        </Graphene.CarbonComponents.side_nav_menu>
        <Graphene.CarbonComponents.side_nav_link href="#">
          <:title_icon_container><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon_container>
          Link
        </Graphene.CarbonComponents.side_nav_link>
        <Graphene.CarbonComponents.side_nav_link href="#">
          <:title_icon_container><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon_container>
          Link
        </Graphene.CarbonComponents.side_nav_link>
      </Graphene.CarbonComponents.side_nav_items>
    </Graphene.CarbonComponents.side_nav>
    <Helpers.story_content responsive_offset={false} />
```

```html
<cds-side-nav collapse-mode="fixed" expanded is-not-child-of-header class="cds--side-nav cds--side-nav--expanded" aria-label="Side navigation">
  
  <cds-side-nav-items>
  
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
  
  
  <path d="M4,2H2V28a2,2,0,0,0,2,2H30V28H4Z"/><path d="M30,9H23v2h3.59L19,18.59l-4.29-4.3a1,1,0,0,0-1.42,0L6,21.59,7.41,23,14,16.41l4.29,4.3a1,1,0,0,0,1.42,0L28,12.41V16h2Z"/>

</svg>
  </div>
</cds-side-nav-menu>
    <cds-side-nav-menu title="Category title">
  
      <cds-side-nav-menu-item href="#">
  Link
</cds-side-nav-menu-item>
      <cds-side-nav-menu-item active href="#" aria_current="page">
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
  
  
  <path d="M4,2H2V28a2,2,0,0,0,2,2H30V28H4Z"/><path d="M30,9H23v2h3.59L19,18.59l-4.29-4.3a1,1,0,0,0-1.42,0L6,21.59,7.41,23,14,16.41l4.29,4.3a1,1,0,0,0,1.42,0L28,12.41V16h2Z"/>

</svg>
  </div>
</cds-side-nav-menu>
    <cds-side-nav-link href="#">
  
      Link
    
  
  
  <div slot="title-icon-container">
    

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16px" height="16px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M4,2H2V28a2,2,0,0,0,2,2H30V28H4Z"/><path d="M30,9H23v2h3.59L19,18.59l-4.29-4.3a1,1,0,0,0-1.42,0L6,21.59,7.41,23,14,16.41l4.29,4.3a1,1,0,0,0,1.42,0L28,12.41V16h2Z"/>

</svg>
  </div>
</cds-side-nav-link>
    <cds-side-nav-link href="#">
  
      Link
    
  
  
  <div slot="title-icon-container">
    

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16px" height="16px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M4,2H2V28a2,2,0,0,0,2,2H30V28H4Z"/><path d="M30,9H23v2h3.59L19,18.59l-4.29-4.3a1,1,0,0,0-1.42,0L6,21.59,7.41,23,14,16.41l4.29,4.3a1,1,0,0,0,1.42,0L28,12.41V16h2Z"/>

</svg>
  </div>
</cds-side-nav-link>
  
</cds-side-nav-items>

</cds-side-nav>
<main class="cds--content cds-ce-demo-devenv--ui-shell-content">
  <div class="cds--grid">
    <div class="cds--row">
      <div class="cds--col-lg-13 ">
        <h2 style="margin: 0 0 30px">Purpose and function</h2>
        <p>
          The shell is perhaps the most crucial piece of any UI built with
          <a href="https://www.carbondesignsystem.com">Carbon</a>. It contains the shared
          navigation framework for the entire design system and ties the products in IBM's
          portfolio together in a cohesive and elegant way. The shell is the home of the
          topmost navigation, where users can quickly and dependably gain their bearings and
          move between pages.
          <br>
          <br>
          The shell was designed with maximum flexibility built in, to serve the needs of a
          broad range of products and users. Adopting the shell ensures compliance with IBM
          design standards, simplifies development efforts, and provides great user
          experiences. All IBM products built with Carbon are required to use the shell's
          header.
          <br>
          <br>
          To better understand the purpose and function of the UI shell, consider the "shell"
          of macOS, which contains the Apple menu, top-level navigation, and universal,
          OS-level controls at the top of the screen, as well as a universal dock along the
          bottom or side of the screen. The Carbon UI shell is roughly analogous in function
          to these parts of the Mac UI. For example, the app switcher portion of the shell can
          be compared to the dock in macOS.
        </p>
        <h2 style="margin: 30px 0px">Header responsive behavior</h2>
        <p>
          As a header scales down to fit smaller screen sizes, headers with persistent side
          nav menus should have the side nav collapse into "hamburger" menu. See the example
          to better understand responsive behavior of the header.
        </p>
        <h2 style="margin: 30px 0px">Secondary navigation</h2>
        <p>
          The side-nav contains secondary navigation and fits below the header. It can be
          configured to be either fixed-width or flexible, with only one level of nested
          items allowed. Both links and category lists can be used in the side-nav and may be
          mixed together. There are several configurations of the side-nav, but only one
          configuration should be used per product section. If tabs are needed on a page when
          using a side-nav, then the tabs are secondary in hierarchy to the side-nav.
        </p>
        <cds-modal>
          <cds-modal-header>
            <cds-modal-close-button></cds-modal-close-button>
            <cds-modal-label>Account resources</cds-modal-label>
            <cds-modal-heading>Add a custom domain</cds-modal-heading>
          </cds-modal-header>
          <cds-modal-body>
            <cds-modal-body-content description>
              Custom domains direct requests for your apps in this Cloud Foundry organization
              to a URL that you own. A custom domain can be a shared domain, a shared subdomain,
              or a shared domain and host.
            </cds-modal-body-content>
          </cds-modal-body>
          <cds-modal-footer>
            <cds-modal-footer-button kind="secondary" data-modal-close>
              Cancel
            </cds-modal-footer-button>
            <cds-modal-footer-button kind="primary">Add</cds-modal-footer-button>
          </cds-modal-footer>
        </cds-modal>
        <cds-button kind="primary">Launch modal</cds-button>
      </div>
    </div>
  </div>
</main>
```


## header_base

### example

```heex
<Graphene.CarbonComponents.header aria-label="IBM Platform Name">
      <Graphene.CarbonComponents.header_name href="#" prefix="IBM">[Platform]</Graphene.CarbonComponents.header_name>
    </Graphene.CarbonComponents.header>
```

```html
<cds-header class="cds--header" aria-label="IBM Platform Name">
  
  <cds-header-name href="#" prefix="IBM">
  [Platform]
</cds-header-name>

</cds-header>
```


## header_base_actions

### example

```heex
<Graphene.CarbonComponents.header aria-label="IBM Platform Name">
      <Graphene.CarbonComponents.header_name href="#" prefix="IBM">[Platform]</Graphene.CarbonComponents.header_name>
      <:global>
        <Graphene.CarbonComponents.header_global_action button_label_inactive="Search" tooltip_text="Search">
          <:icon name="search" size={20} />
        </Graphene.CarbonComponents.header_global_action>
        <Graphene.CarbonComponents.header_global_action button_label_inactive="Notification" tooltip_text="Notification">
          <:icon name="notification" size={20} />
        </Graphene.CarbonComponents.header_global_action>
        <Graphene.CarbonComponents.header_global_action
          button_label_inactive="App Switcher"
          tooltip_text="App Switcher"
          tooltip_alignment="right"
        >
          <:icon name="switcher" size={20} />
        </Graphene.CarbonComponents.header_global_action>
      </:global>
    </Graphene.CarbonComponents.header>
```

```html
<cds-header class="cds--header" aria-label="IBM Platform Name">
  
  
  
  <cds-header-name href="#" prefix="IBM">
  [Platform]
</cds-header-name>
  
  
    <div class="cds--header__global">
      
        
    <cds-header-global-action button-label-inactive="Search" kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" tooltip-text="Search" type="button">
  
    
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" slot="icon" width="20px" height="20px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z"/>

</svg>
    
  
  
      
</cds-header-global-action>
    <cds-header-global-action button-label-inactive="Notification" kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" tooltip-text="Notification" type="button">
  
    
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" slot="icon" width="20px" height="20px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M28.7071,19.293,26,16.5859V13a10.0136,10.0136,0,0,0-9-9.9492V1H15V3.0508A10.0136,10.0136,0,0,0,6,13v3.5859L3.2929,19.293A1,1,0,0,0,3,20v3a1,1,0,0,0,1,1h7v.7768a5.152,5.152,0,0,0,4.5,5.1987A5.0057,5.0057,0,0,0,21,25V24h7a1,1,0,0,0,1-1V20A1,1,0,0,0,28.7071,19.293ZM19,25a3,3,0,0,1-6,0V24h6Zm8-3H5V20.4141L7.707,17.707A1,1,0,0,0,8,17V13a8,8,0,0,1,16,0v4a1,1,0,0,0,.293.707L27,20.4141Z"/>

</svg>
    
  
  
      
</cds-header-global-action>
    <cds-header-global-action button-label-inactive="App Switcher" kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="right" tooltip-position="top" tooltip-text="App Switcher" type="button">
  
    
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" slot="icon" width="20px" height="20px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M14 4H18V8H14z"/><path d="M4 4H8V8H4z"/><path d="M24 4H28V8H24z"/><path d="M14 14H18V18H14z"/><path d="M4 14H8V18H4z"/><path d="M24 14H28V18H24z"/><path d="M14 24H18V28H14z"/><path d="M4 24H8V28H4z"/><path d="M24 24H28V28H24z"/>

</svg>
    
  
  
      
</cds-header-global-action>
  
      
    </div>
  

</cds-header>
```


## header_base_actions_right_panel

### example

```heex
<Graphene.CarbonComponents.header aria-label="IBM Platform Name">
      <Graphene.CarbonComponents.header_name href="#" prefix="IBM">[Platform]</Graphene.CarbonComponents.header_name>
      <:global>
        <Graphene.CarbonComponents.header_global_action button_label_inactive="Search" tooltip_text="Search">
          <:icon name="search" size={20} />
        </Graphene.CarbonComponents.header_global_action>
        <Graphene.CarbonComponents.header_global_action
          panel_id="notification-panel"
          button_label_inactive="Notification"
          tooltip_text="Notification"
        >
          <:icon name="notification" size={20} />
          <Graphene.CarbonComponents.badge_indicator count={4} />
        </Graphene.CarbonComponents.header_global_action>
        <Graphene.CarbonComponents.header_global_action
          button_label_inactive="App Switcher"
          tooltip_text="App Switcher"
          tooltip_alignment="right"
        >
          <:icon name="switcher" size={20} />
        </Graphene.CarbonComponents.header_global_action>
      </:global>
      <Graphene.CarbonComponents.header_panel id="notification-panel" aria-label="Header Panel" />
    </Graphene.CarbonComponents.header>
```

```html
<cds-header class="cds--header" aria-label="IBM Platform Name">
  
  
  
  <cds-header-name href="#" prefix="IBM">
  [Platform]
</cds-header-name>
  <cds-header-panel id="notification-panel" aria-label="Header Panel">
  
</cds-header-panel>

  
    <div class="cds--header__global">
      
        
    <cds-header-global-action button-label-inactive="Search" kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" tooltip-text="Search" type="button">
  
    
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" slot="icon" width="20px" height="20px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z"/>

</svg>
    
  
  
      
</cds-header-global-action>
    <cds-header-global-action button-label-inactive="Notification" kind="primary" link-role="button" panel-id="notification-panel" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" tooltip-text="Notification" type="button">
  
    
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" slot="icon" width="20px" height="20px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M28.7071,19.293,26,16.5859V13a10.0136,10.0136,0,0,0-9-9.9492V1H15V3.0508A10.0136,10.0136,0,0,0,6,13v3.5859L3.2929,19.293A1,1,0,0,0,3,20v3a1,1,0,0,0,1,1h7v.7768a5.152,5.152,0,0,0,4.5,5.1987A5.0057,5.0057,0,0,0,21,25V24h7a1,1,0,0,0,1-1V20A1,1,0,0,0,28.7071,19.293ZM19,25a3,3,0,0,1-6,0V24h6Zm8-3H5V20.4141L7.707,17.707A1,1,0,0,0,8,17V13a8,8,0,0,1,16,0v4a1,1,0,0,0,.293.707L27,20.4141Z"/>

</svg>
    
  
  
      <cds-badge-indicator count="4" slot="badge-indicator">
  
</cds-badge-indicator>
    
</cds-header-global-action>
    <cds-header-global-action button-label-inactive="App Switcher" kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="right" tooltip-position="top" tooltip-text="App Switcher" type="button">
  
    
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" slot="icon" width="20px" height="20px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M14 4H18V8H14z"/><path d="M4 4H8V8H4z"/><path d="M24 4H28V8H24z"/><path d="M14 14H18V18H14z"/><path d="M4 14H8V18H4z"/><path d="M24 14H28V18H24z"/><path d="M14 24H18V28H14z"/><path d="M4 24H8V28H4z"/><path d="M24 24H28V28H24z"/>

</svg>
    
  
  
      
</cds-header-global-action>
  
      
    </div>
  

</cds-header>
```


## header_base_actions_switcher

### example

```heex
<Graphene.CarbonComponents.header aria-label="IBM Platform Name">
      <Graphene.CarbonComponents.header_name href="#" prefix="IBM">[Platform]</Graphene.CarbonComponents.header_name>
      <:global>
        <Graphene.CarbonComponents.header_global_action button_label_inactive="Search" tooltip_text="Search">
          <:icon name="search" size={20} />
        </Graphene.CarbonComponents.header_global_action>
        <Graphene.CarbonComponents.header_global_action button_label_inactive="Notification" tooltip_text="Notification">
          <:icon name="notification" size={20} />
        </Graphene.CarbonComponents.header_global_action>
        <Graphene.CarbonComponents.header_global_action
          button_label_active="Close switcher"
          button_label_inactive="Open switcher"
          tooltip_text="Open switcher"
          panel_id="switcher-panel"
          tooltip_alignment="right"
        >
          <:icon name="switcher" size={20} />
        </Graphene.CarbonComponents.header_global_action>
      </:global>
      <Graphene.CarbonComponents.header_panel id="switcher-panel" aria-label="Header Panel">
        <Graphene.CarbonComponents.switcher aria-label="Switcher Container">
          <Graphene.CarbonComponents.switcher_item aria-label="Link 1" href="#">Link 1</Graphene.CarbonComponents.switcher_item>
          <Graphene.CarbonComponents.switcher_divider />
          <Graphene.CarbonComponents.switcher_item aria-label="Link 2" href="#">Link 2</Graphene.CarbonComponents.switcher_item>
          <Graphene.CarbonComponents.switcher_item aria-label="Link 3" href="#">Link 3</Graphene.CarbonComponents.switcher_item>
          <Graphene.CarbonComponents.switcher_item aria-label="Link 4" href="#">Link 4</Graphene.CarbonComponents.switcher_item>
          <Graphene.CarbonComponents.switcher_item aria-label="Link 5" href="#">Link 5</Graphene.CarbonComponents.switcher_item>
          <Graphene.CarbonComponents.switcher_divider />
          <Graphene.CarbonComponents.switcher_item aria-label="Link 6" href="#">Link 6</Graphene.CarbonComponents.switcher_item>
        </Graphene.CarbonComponents.switcher>
      </Graphene.CarbonComponents.header_panel>
    </Graphene.CarbonComponents.header>
    <Helpers.story_content />
```

```html
<cds-header class="cds--header" aria-label="IBM Platform Name">
  
  
  
  <cds-header-name href="#" prefix="IBM">
  [Platform]
</cds-header-name>
  <cds-header-panel id="switcher-panel" aria-label="Header Panel">
  
    <cds-switcher aria-label="Switcher Container">
  
      <cds-switcher-item href="#" tab-index="0" aria-label="Link 1">
  Link 1
</cds-switcher-item>
      <cds-switcher-divider>
  
</cds-switcher-divider>
      <cds-switcher-item href="#" tab-index="0" aria-label="Link 2">
  Link 2
</cds-switcher-item>
      <cds-switcher-item href="#" tab-index="0" aria-label="Link 3">
  Link 3
</cds-switcher-item>
      <cds-switcher-item href="#" tab-index="0" aria-label="Link 4">
  Link 4
</cds-switcher-item>
      <cds-switcher-item href="#" tab-index="0" aria-label="Link 5">
  Link 5
</cds-switcher-item>
      <cds-switcher-divider>
  
</cds-switcher-divider>
      <cds-switcher-item href="#" tab-index="0" aria-label="Link 6">
  Link 6
</cds-switcher-item>
    
</cds-switcher>
  
</cds-header-panel>

  
    <div class="cds--header__global">
      
        
    <cds-header-global-action button-label-inactive="Search" kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" tooltip-text="Search" type="button">
  
    
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" slot="icon" width="20px" height="20px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z"/>

</svg>
    
  
  
      
</cds-header-global-action>
    <cds-header-global-action button-label-inactive="Notification" kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" tooltip-text="Notification" type="button">
  
    
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" slot="icon" width="20px" height="20px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M28.7071,19.293,26,16.5859V13a10.0136,10.0136,0,0,0-9-9.9492V1H15V3.0508A10.0136,10.0136,0,0,0,6,13v3.5859L3.2929,19.293A1,1,0,0,0,3,20v3a1,1,0,0,0,1,1h7v.7768a5.152,5.152,0,0,0,4.5,5.1987A5.0057,5.0057,0,0,0,21,25V24h7a1,1,0,0,0,1-1V20A1,1,0,0,0,28.7071,19.293ZM19,25a3,3,0,0,1-6,0V24h6Zm8-3H5V20.4141L7.707,17.707A1,1,0,0,0,8,17V13a8,8,0,0,1,16,0v4a1,1,0,0,0,.293.707L27,20.4141Z"/>

</svg>
    
  
  
      
</cds-header-global-action>
    <cds-header-global-action button-label-active="Close switcher" button-label-inactive="Open switcher" kind="primary" link-role="button" panel-id="switcher-panel" size="lg" tab-index="0" tooltip-alignment="right" tooltip-position="top" tooltip-text="Open switcher" type="button">
  
    
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" slot="icon" width="20px" height="20px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M14 4H18V8H14z"/><path d="M4 4H8V8H4z"/><path d="M24 4H28V8H24z"/><path d="M14 14H18V18H14z"/><path d="M4 14H8V18H4z"/><path d="M24 14H28V18H24z"/><path d="M14 24H18V28H14z"/><path d="M4 24H8V28H4z"/><path d="M24 24H28V28H24z"/>

</svg>
    
  
  
      
</cds-header-global-action>
  
      
    </div>
  

</cds-header>
<main class="cds--content cds-ce-demo-devenv--ui-shell-content">
  <div class="cds--grid">
    <div class="cds--row">
      <div class="cds--col-lg-13 cds--offset-lg-3">
        <h2 style="margin: 0 0 30px">Purpose and function</h2>
        <p>
          The shell is perhaps the most crucial piece of any UI built with
          <a href="https://www.carbondesignsystem.com">Carbon</a>. It contains the shared
          navigation framework for the entire design system and ties the products in IBM's
          portfolio together in a cohesive and elegant way. The shell is the home of the
          topmost navigation, where users can quickly and dependably gain their bearings and
          move between pages.
          <br>
          <br>
          The shell was designed with maximum flexibility built in, to serve the needs of a
          broad range of products and users. Adopting the shell ensures compliance with IBM
          design standards, simplifies development efforts, and provides great user
          experiences. All IBM products built with Carbon are required to use the shell's
          header.
          <br>
          <br>
          To better understand the purpose and function of the UI shell, consider the "shell"
          of macOS, which contains the Apple menu, top-level navigation, and universal,
          OS-level controls at the top of the screen, as well as a universal dock along the
          bottom or side of the screen. The Carbon UI shell is roughly analogous in function
          to these parts of the Mac UI. For example, the app switcher portion of the shell can
          be compared to the dock in macOS.
        </p>
        <h2 style="margin: 30px 0px">Header responsive behavior</h2>
        <p>
          As a header scales down to fit smaller screen sizes, headers with persistent side
          nav menus should have the side nav collapse into "hamburger" menu. See the example
          to better understand responsive behavior of the header.
        </p>
        <h2 style="margin: 30px 0px">Secondary navigation</h2>
        <p>
          The side-nav contains secondary navigation and fits below the header. It can be
          configured to be either fixed-width or flexible, with only one level of nested
          items allowed. Both links and category lists can be used in the side-nav and may be
          mixed together. There are several configurations of the side-nav, but only one
          configuration should be used per product section. If tabs are needed on a page when
          using a side-nav, then the tabs are secondary in hierarchy to the side-nav.
        </p>
        <cds-modal>
          <cds-modal-header>
            <cds-modal-close-button></cds-modal-close-button>
            <cds-modal-label>Account resources</cds-modal-label>
            <cds-modal-heading>Add a custom domain</cds-modal-heading>
          </cds-modal-header>
          <cds-modal-body>
            <cds-modal-body-content description>
              Custom domains direct requests for your apps in this Cloud Foundry organization
              to a URL that you own. A custom domain can be a shared domain, a shared subdomain,
              or a shared domain and host.
            </cds-modal-body-content>
          </cds-modal-body>
          <cds-modal-footer>
            <cds-modal-footer-button kind="secondary" data-modal-close>
              Cancel
            </cds-modal-footer-button>
            <cds-modal-footer-button kind="primary">Add</cds-modal-footer-button>
          </cds-modal-footer>
        </cds-modal>
        <cds-button kind="primary">Launch modal</cds-button>
      </div>
    </div>
  </div>
</main>
```


## header_base_navigation

### example

```heex
<Graphene.CarbonComponents.header aria-label="IBM Platform Name">
      <Graphene.CarbonComponents.header_menu_button button_label_active="Close menu" button_label_inactive="Open menu" />
      <Graphene.CarbonComponents.header_name href="#" prefix="IBM">[Platform]</Graphene.CarbonComponents.header_name>
      <Graphene.CarbonComponents.header_nav menu_bar_label="IBM [Platform]">
        <Graphene.CarbonComponents.header_nav_item href="#">Link 1</Graphene.CarbonComponents.header_nav_item>
        <Graphene.CarbonComponents.header_nav_item href="#">Link 2</Graphene.CarbonComponents.header_nav_item>
        <Graphene.CarbonComponents.header_nav_item href="#">Link 3</Graphene.CarbonComponents.header_nav_item>
        <Graphene.CarbonComponents.header_menu menu_label="Link 4" trigger_content="Link 4">
          <Graphene.CarbonComponents.header_menu_item href="#">Sub-link 1</Graphene.CarbonComponents.header_menu_item>
          <Graphene.CarbonComponents.header_menu_item is_active href="#">Sub-link 2</Graphene.CarbonComponents.header_menu_item>
          <Graphene.CarbonComponents.header_menu_item href="#">Sub-link 3</Graphene.CarbonComponents.header_menu_item>
        </Graphene.CarbonComponents.header_menu>
      </Graphene.CarbonComponents.header_nav>
      <Graphene.CarbonComponents.side_nav is_not_persistent aria-label="Side navigation" collapse_mode="responsive">
        <Graphene.CarbonComponents.side_nav_items>
          <Graphene.CarbonComponents.side_nav_link href="#">Link 1</Graphene.CarbonComponents.side_nav_link>
          <Graphene.CarbonComponents.side_nav_link href="#">Link 2</Graphene.CarbonComponents.side_nav_link>
          <Graphene.CarbonComponents.side_nav_link href="#">Link 3</Graphene.CarbonComponents.side_nav_link>
          <Graphene.CarbonComponents.side_nav_menu title="Link 4">
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Sub-link 1</Graphene.CarbonComponents.side_nav_menu_item>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Sub-link 2</Graphene.CarbonComponents.side_nav_menu_item>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Sub-link 3</Graphene.CarbonComponents.side_nav_menu_item>
          </Graphene.CarbonComponents.side_nav_menu>
        </Graphene.CarbonComponents.side_nav_items>
      </Graphene.CarbonComponents.side_nav>
    </Graphene.CarbonComponents.header>
```

```html
<cds-header class="cds--header" aria-label="IBM Platform Name">
  
  <cds-header-menu-button button-label-active="Close menu" button-label-inactive="Open menu" collapse-mode="responsive">
  
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
      <cds-header-menu-item href="#" is-active role="listitem">
  Sub-link 2
</cds-header-menu-item>
      <cds-header-menu-item href="#" role="listitem">
  Sub-link 3
</cds-header-menu-item>
    
</cds-header-menu>
  
</cds-header-nav>
  <cds-side-nav collapse-mode="responsive" is-not-persistent class="cds--side-nav" aria-label="Side navigation">
  
    <cds-side-nav-items>
  
      <cds-side-nav-link href="#">
  Link 1
  
  
  
</cds-side-nav-link>
      <cds-side-nav-link href="#">
  Link 2
  
  
  
</cds-side-nav-link>
      <cds-side-nav-link href="#">
  Link 3
  
  
  
</cds-side-nav-link>
      <cds-side-nav-menu title="Link 4">
  
        <cds-side-nav-menu-item href="#">
  Sub-link 1
</cds-side-nav-menu-item>
        <cds-side-nav-menu-item href="#">
  Sub-link 2
</cds-side-nav-menu-item>
        <cds-side-nav-menu-item href="#">
  Sub-link 3
</cds-side-nav-menu-item>
      
  
</cds-side-nav-menu>
    
</cds-side-nav-items>
  
</cds-side-nav>

</cds-header>
```


## header_base_navigation_actions

### example

```heex
<Graphene.CarbonComponents.header aria-label="IBM Platform Name">
      <Graphene.CarbonComponents.header_menu_button button_label_active="Close menu" button_label_inactive="Open menu" />
      <Graphene.CarbonComponents.header_name href="#" prefix="IBM">[Platform]</Graphene.CarbonComponents.header_name>
      <Graphene.CarbonComponents.header_nav menu_bar_label="IBM [Platform]">
        <Graphene.CarbonComponents.header_nav_item href="#">Link 1</Graphene.CarbonComponents.header_nav_item>
        <Graphene.CarbonComponents.header_nav_item href="#">Link 2</Graphene.CarbonComponents.header_nav_item>
        <Graphene.CarbonComponents.header_nav_item href="#">Link 3</Graphene.CarbonComponents.header_nav_item>
        <Graphene.CarbonComponents.header_menu is_active menu_label="Link 4" trigger_content="Link 4">
          <Graphene.CarbonComponents.header_menu_item href="#">Sub-link 1</Graphene.CarbonComponents.header_menu_item>
          <Graphene.CarbonComponents.header_menu_item href="#">Sub-link 2</Graphene.CarbonComponents.header_menu_item>
          <Graphene.CarbonComponents.header_menu_item href="#">Sub-link 3</Graphene.CarbonComponents.header_menu_item>
        </Graphene.CarbonComponents.header_menu>
      </Graphene.CarbonComponents.header_nav>
      <:global>
        <Graphene.CarbonComponents.header_global_action button_label_inactive="Search" tooltip_text="Search">
          <:icon name="search" size={20} />
        </Graphene.CarbonComponents.header_global_action>
        <Graphene.CarbonComponents.header_global_action button_label_inactive="Notification" tooltip_text="Notification">
          <:icon name="notification" size={20} />
        </Graphene.CarbonComponents.header_global_action>
        <Graphene.CarbonComponents.header_global_action
          button_label_inactive="App Switcher"
          tooltip_text="App Switcher"
          tooltip_alignment="right"
        >
          <:icon name="switcher" size={20} />
        </Graphene.CarbonComponents.header_global_action>
      </:global>
      <Graphene.CarbonComponents.side_nav is_not_persistent aria-label="Side navigation" collapse_mode="responsive">
        <Graphene.CarbonComponents.side_nav_items>
          <Graphene.CarbonComponents.side_nav_link href="#">Link 1</Graphene.CarbonComponents.side_nav_link>
          <Graphene.CarbonComponents.side_nav_link href="#">Link 2</Graphene.CarbonComponents.side_nav_link>
          <Graphene.CarbonComponents.side_nav_link href="#">Link 3</Graphene.CarbonComponents.side_nav_link>
          <Graphene.CarbonComponents.side_nav_menu title="Link 4">
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Sub-link 1</Graphene.CarbonComponents.side_nav_menu_item>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Sub-link 2</Graphene.CarbonComponents.side_nav_menu_item>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Sub-link 3</Graphene.CarbonComponents.side_nav_menu_item>
          </Graphene.CarbonComponents.side_nav_menu>
        </Graphene.CarbonComponents.side_nav_items>
      </Graphene.CarbonComponents.side_nav>
    </Graphene.CarbonComponents.header>
```

```html
<cds-header class="cds--header" aria-label="IBM Platform Name">
  
  
  
  <cds-header-menu-button button-label-active="Close menu" button-label-inactive="Open menu" collapse-mode="responsive">
  
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
    <cds-header-menu is-active menu-label="Link 4" trigger-content="Link 4">
  
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
  <cds-side-nav collapse-mode="responsive" is-not-persistent class="cds--side-nav" aria-label="Side navigation">
  
    <cds-side-nav-items>
  
      <cds-side-nav-link href="#">
  Link 1
  
  
  
</cds-side-nav-link>
      <cds-side-nav-link href="#">
  Link 2
  
  
  
</cds-side-nav-link>
      <cds-side-nav-link href="#">
  Link 3
  
  
  
</cds-side-nav-link>
      <cds-side-nav-menu title="Link 4">
  
        <cds-side-nav-menu-item href="#">
  Sub-link 1
</cds-side-nav-menu-item>
        <cds-side-nav-menu-item href="#">
  Sub-link 2
</cds-side-nav-menu-item>
        <cds-side-nav-menu-item href="#">
  Sub-link 3
</cds-side-nav-menu-item>
      
  
</cds-side-nav-menu>
    
</cds-side-nav-items>
  
</cds-side-nav>

  
    <div class="cds--header__global">
      
        
    <cds-header-global-action button-label-inactive="Search" kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" tooltip-text="Search" type="button">
  
    
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" slot="icon" width="20px" height="20px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z"/>

</svg>
    
  
  
      
</cds-header-global-action>
    <cds-header-global-action button-label-inactive="Notification" kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" tooltip-text="Notification" type="button">
  
    
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" slot="icon" width="20px" height="20px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M28.7071,19.293,26,16.5859V13a10.0136,10.0136,0,0,0-9-9.9492V1H15V3.0508A10.0136,10.0136,0,0,0,6,13v3.5859L3.2929,19.293A1,1,0,0,0,3,20v3a1,1,0,0,0,1,1h7v.7768a5.152,5.152,0,0,0,4.5,5.1987A5.0057,5.0057,0,0,0,21,25V24h7a1,1,0,0,0,1-1V20A1,1,0,0,0,28.7071,19.293ZM19,25a3,3,0,0,1-6,0V24h6Zm8-3H5V20.4141L7.707,17.707A1,1,0,0,0,8,17V13a8,8,0,0,1,16,0v4a1,1,0,0,0,.293.707L27,20.4141Z"/>

</svg>
    
  
  
      
</cds-header-global-action>
    <cds-header-global-action button-label-inactive="App Switcher" kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="right" tooltip-position="top" tooltip-text="App Switcher" type="button">
  
    
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" slot="icon" width="20px" height="20px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M14 4H18V8H14z"/><path d="M4 4H8V8H4z"/><path d="M24 4H28V8H24z"/><path d="M14 14H18V18H14z"/><path d="M4 14H8V18H4z"/><path d="M24 14H28V18H24z"/><path d="M14 24H18V28H14z"/><path d="M4 24H8V28H4z"/><path d="M24 24H28V28H24z"/>

</svg>
    
  
  
      
</cds-header-global-action>
  
      
    </div>
  

</cds-header>
```


## header_base_navigation_actions_side_nav

### example

```heex
<Graphene.CarbonComponents.header aria-label="IBM Platform Name">
      <Graphene.CarbonComponents.header_menu_button button_label_active="Close menu" button_label_inactive="Open menu" />
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
        <Graphene.CarbonComponents.header_global_action button_label_inactive="Search" tooltip_text="Search">
          <:icon name="search" size={20} />
        </Graphene.CarbonComponents.header_global_action>
        <Graphene.CarbonComponents.header_global_action button_label_inactive="Notification" tooltip_text="Notification">
          <:icon name="notification" size={20} />
        </Graphene.CarbonComponents.header_global_action>
        <Graphene.CarbonComponents.header_global_action
          button_label_inactive="App Switcher"
          tooltip_text="App Switcher"
          tooltip_alignment="right"
        >
          <:icon name="switcher" size={20} />
        </Graphene.CarbonComponents.header_global_action>
      </:global>
      <Graphene.CarbonComponents.side_nav aria-label="Side navigation" collapse_mode="responsive">
        <Graphene.CarbonComponents.side_nav_items>
          <Graphene.CarbonComponents.header_side_nav_items has_divider>
            <Graphene.CarbonComponents.side_nav_link href="#">Link 1</Graphene.CarbonComponents.side_nav_link>
            <Graphene.CarbonComponents.side_nav_link href="#">Link 2</Graphene.CarbonComponents.side_nav_link>
            <Graphene.CarbonComponents.side_nav_link href="#">Link 3</Graphene.CarbonComponents.side_nav_link>
            <Graphene.CarbonComponents.side_nav_menu title="Link 4">
              <Graphene.CarbonComponents.side_nav_menu_item href="#">Sub-link 1</Graphene.CarbonComponents.side_nav_menu_item>
              <Graphene.CarbonComponents.side_nav_menu_item href="#">Sub-link 2</Graphene.CarbonComponents.side_nav_menu_item>
              <Graphene.CarbonComponents.side_nav_menu_item href="#">Sub-link 3</Graphene.CarbonComponents.side_nav_menu_item>
            </Graphene.CarbonComponents.side_nav_menu>
          </Graphene.CarbonComponents.header_side_nav_items>
          <Graphene.CarbonComponents.side_nav_menu title="Category title">
            <:title_icon><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
          </Graphene.CarbonComponents.side_nav_menu>
          <Graphene.CarbonComponents.side_nav_menu title="Category title">
            <:title_icon><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
            <Graphene.CarbonComponents.side_nav_menu_item aria_current="page" href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
          </Graphene.CarbonComponents.side_nav_menu>
          <Graphene.CarbonComponents.side_nav_menu title="Category title">
            <:title_icon><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
            <Graphene.CarbonComponents.side_nav_menu_item href="#" active>Link</Graphene.CarbonComponents.side_nav_menu_item>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
          </Graphene.CarbonComponents.side_nav_menu>
          <Graphene.CarbonComponents.side_nav_link href="#">
            <:title_icon_container><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon_container>
            Link
          </Graphene.CarbonComponents.side_nav_link>
          <Graphene.CarbonComponents.side_nav_link href="#">
            <:title_icon_container><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon_container>
            Link
          </Graphene.CarbonComponents.side_nav_link>
        </Graphene.CarbonComponents.side_nav_items>
      </Graphene.CarbonComponents.side_nav>
    </Graphene.CarbonComponents.header>
    <Helpers.story_content />
```

```html
<cds-header class="cds--header" aria-label="IBM Platform Name">
  
  
  
  <cds-header-menu-button button-label-active="Close menu" button-label-inactive="Open menu" collapse-mode="responsive">
  
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
  <cds-side-nav collapse-mode="responsive" class="cds--side-nav" aria-label="Side navigation">
  
    <cds-side-nav-items>
  
      <cds-header-side-nav-items has-divider>
  
        <cds-side-nav-link href="#">
  Link 1
  
  
  
</cds-side-nav-link>
        <cds-side-nav-link href="#">
  Link 2
  
  
  
</cds-side-nav-link>
        <cds-side-nav-link href="#">
  Link 3
  
  
  
</cds-side-nav-link>
        <cds-side-nav-menu title="Link 4">
  
          <cds-side-nav-menu-item href="#">
  Sub-link 1
</cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="#">
  Sub-link 2
</cds-side-nav-menu-item>
          <cds-side-nav-menu-item href="#">
  Sub-link 3
</cds-side-nav-menu-item>
        
  
</cds-side-nav-menu>
      
</cds-header-side-nav-items>
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
  
  
  <path d="M4,2H2V28a2,2,0,0,0,2,2H30V28H4Z"/><path d="M30,9H23v2h3.59L19,18.59l-4.29-4.3a1,1,0,0,0-1.42,0L6,21.59,7.41,23,14,16.41l4.29,4.3a1,1,0,0,0,1.42,0L28,12.41V16h2Z"/>

</svg>
  </div>
</cds-side-nav-menu>
      <cds-side-nav-menu title="Category title">
  
        <cds-side-nav-menu-item href="#">
  Link
</cds-side-nav-menu-item>
        <cds-side-nav-menu-item href="#" aria_current="page">
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
      <cds-side-nav-link href="#">
  
        Link
      
  
  
  <div slot="title-icon-container">
    

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16px" height="16px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M4,2H2V28a2,2,0,0,0,2,2H30V28H4Z"/><path d="M30,9H23v2h3.59L19,18.59l-4.29-4.3a1,1,0,0,0-1.42,0L6,21.59,7.41,23,14,16.41l4.29,4.3a1,1,0,0,0,1.42,0L28,12.41V16h2Z"/>

</svg>
  </div>
</cds-side-nav-link>
      <cds-side-nav-link href="#">
  
        Link
      
  
  
  <div slot="title-icon-container">
    

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16px" height="16px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M4,2H2V28a2,2,0,0,0,2,2H30V28H4Z"/><path d="M30,9H23v2h3.59L19,18.59l-4.29-4.3a1,1,0,0,0-1.42,0L6,21.59,7.41,23,14,16.41l4.29,4.3a1,1,0,0,0,1.42,0L28,12.41V16h2Z"/>

</svg>
  </div>
</cds-side-nav-link>
    
</cds-side-nav-items>
  
</cds-side-nav>

  
    <div class="cds--header__global">
      
        
    <cds-header-global-action button-label-inactive="Search" kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" tooltip-text="Search" type="button">
  
    
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" slot="icon" width="20px" height="20px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z"/>

</svg>
    
  
  
      
</cds-header-global-action>
    <cds-header-global-action button-label-inactive="Notification" kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" tooltip-text="Notification" type="button">
  
    
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" slot="icon" width="20px" height="20px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M28.7071,19.293,26,16.5859V13a10.0136,10.0136,0,0,0-9-9.9492V1H15V3.0508A10.0136,10.0136,0,0,0,6,13v3.5859L3.2929,19.293A1,1,0,0,0,3,20v3a1,1,0,0,0,1,1h7v.7768a5.152,5.152,0,0,0,4.5,5.1987A5.0057,5.0057,0,0,0,21,25V24h7a1,1,0,0,0,1-1V20A1,1,0,0,0,28.7071,19.293ZM19,25a3,3,0,0,1-6,0V24h6Zm8-3H5V20.4141L7.707,17.707A1,1,0,0,0,8,17V13a8,8,0,0,1,16,0v4a1,1,0,0,0,.293.707L27,20.4141Z"/>

</svg>
    
  
  
      
</cds-header-global-action>
    <cds-header-global-action button-label-inactive="App Switcher" kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="right" tooltip-position="top" tooltip-text="App Switcher" type="button">
  
    
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" slot="icon" width="20px" height="20px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M14 4H18V8H14z"/><path d="M4 4H8V8H4z"/><path d="M24 4H28V8H24z"/><path d="M14 14H18V18H14z"/><path d="M4 14H8V18H4z"/><path d="M24 14H28V18H24z"/><path d="M14 24H18V28H14z"/><path d="M4 24H8V28H4z"/><path d="M24 24H28V28H24z"/>

</svg>
    
  
  
      
</cds-header-global-action>
  
      
    </div>
  

</cds-header>
<main class="cds--content cds-ce-demo-devenv--ui-shell-content">
  <div class="cds--grid">
    <div class="cds--row">
      <div class="cds--col-lg-13 cds--offset-lg-3">
        <h2 style="margin: 0 0 30px">Purpose and function</h2>
        <p>
          The shell is perhaps the most crucial piece of any UI built with
          <a href="https://www.carbondesignsystem.com">Carbon</a>. It contains the shared
          navigation framework for the entire design system and ties the products in IBM's
          portfolio together in a cohesive and elegant way. The shell is the home of the
          topmost navigation, where users can quickly and dependably gain their bearings and
          move between pages.
          <br>
          <br>
          The shell was designed with maximum flexibility built in, to serve the needs of a
          broad range of products and users. Adopting the shell ensures compliance with IBM
          design standards, simplifies development efforts, and provides great user
          experiences. All IBM products built with Carbon are required to use the shell's
          header.
          <br>
          <br>
          To better understand the purpose and function of the UI shell, consider the "shell"
          of macOS, which contains the Apple menu, top-level navigation, and universal,
          OS-level controls at the top of the screen, as well as a universal dock along the
          bottom or side of the screen. The Carbon UI shell is roughly analogous in function
          to these parts of the Mac UI. For example, the app switcher portion of the shell can
          be compared to the dock in macOS.
        </p>
        <h2 style="margin: 30px 0px">Header responsive behavior</h2>
        <p>
          As a header scales down to fit smaller screen sizes, headers with persistent side
          nav menus should have the side nav collapse into "hamburger" menu. See the example
          to better understand responsive behavior of the header.
        </p>
        <h2 style="margin: 30px 0px">Secondary navigation</h2>
        <p>
          The side-nav contains secondary navigation and fits below the header. It can be
          configured to be either fixed-width or flexible, with only one level of nested
          items allowed. Both links and category lists can be used in the side-nav and may be
          mixed together. There are several configurations of the side-nav, but only one
          configuration should be used per product section. If tabs are needed on a page when
          using a side-nav, then the tabs are secondary in hierarchy to the side-nav.
        </p>
        <cds-modal>
          <cds-modal-header>
            <cds-modal-close-button></cds-modal-close-button>
            <cds-modal-label>Account resources</cds-modal-label>
            <cds-modal-heading>Add a custom domain</cds-modal-heading>
          </cds-modal-header>
          <cds-modal-body>
            <cds-modal-body-content description>
              Custom domains direct requests for your apps in this Cloud Foundry organization
              to a URL that you own. A custom domain can be a shared domain, a shared subdomain,
              or a shared domain and host.
            </cds-modal-body-content>
          </cds-modal-body>
          <cds-modal-footer>
            <cds-modal-footer-button kind="secondary" data-modal-close>
              Cancel
            </cds-modal-footer-button>
            <cds-modal-footer-button kind="primary">Add</cds-modal-footer-button>
          </cds-modal-footer>
        </cds-modal>
        <cds-button kind="primary">Launch modal</cds-button>
      </div>
    </div>
  </div>
</main>
```


## header_base_side_nav

### example

```heex
<Graphene.CarbonComponents.header aria-label="IBM Platform Name">
      <Graphene.CarbonComponents.header_menu_button button_label_active="Close menu" button_label_inactive="Open menu" />
      <Graphene.CarbonComponents.header_name href="#" prefix="IBM">[Platform]</Graphene.CarbonComponents.header_name>
      <Graphene.CarbonComponents.side_nav aria-label="Side navigation" collapse_mode="responsive">
        <Graphene.CarbonComponents.side_nav_items>
          <Graphene.CarbonComponents.side_nav_menu title="Category title">
            <:title_icon><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
          </Graphene.CarbonComponents.side_nav_menu>
          <Graphene.CarbonComponents.side_nav_menu title="Category title">
            <:title_icon><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
            <Graphene.CarbonComponents.side_nav_menu_item href="#" active aria_current="page">Link</Graphene.CarbonComponents.side_nav_menu_item>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
          </Graphene.CarbonComponents.side_nav_menu>
          <Graphene.CarbonComponents.side_nav_menu title="Category title">
            <:title_icon><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
          </Graphene.CarbonComponents.side_nav_menu>
          <Graphene.CarbonComponents.side_nav_link href="#">
            <:title_icon_container><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon_container>
            Link
          </Graphene.CarbonComponents.side_nav_link>
          <Graphene.CarbonComponents.side_nav_link href="#">
            <:title_icon_container><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon_container>
            Link
          </Graphene.CarbonComponents.side_nav_link>
        </Graphene.CarbonComponents.side_nav_items>
      </Graphene.CarbonComponents.side_nav>
    </Graphene.CarbonComponents.header>
    <Helpers.story_content />
```

```html
<cds-header class="cds--header" aria-label="IBM Platform Name">
  
  <cds-header-menu-button button-label-active="Close menu" button-label-inactive="Open menu" collapse-mode="responsive">
  
</cds-header-menu-button>
  <cds-header-name href="#" prefix="IBM">
  [Platform]
</cds-header-name>
  <cds-side-nav collapse-mode="responsive" class="cds--side-nav" aria-label="Side navigation">
  
    <cds-side-nav-items>
  
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
  
  
  <path d="M4,2H2V28a2,2,0,0,0,2,2H30V28H4Z"/><path d="M30,9H23v2h3.59L19,18.59l-4.29-4.3a1,1,0,0,0-1.42,0L6,21.59,7.41,23,14,16.41l4.29,4.3a1,1,0,0,0,1.42,0L28,12.41V16h2Z"/>

</svg>
  </div>
</cds-side-nav-menu>
      <cds-side-nav-menu title="Category title">
  
        <cds-side-nav-menu-item href="#">
  Link
</cds-side-nav-menu-item>
        <cds-side-nav-menu-item active href="#" aria_current="page">
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
  
  
  <path d="M4,2H2V28a2,2,0,0,0,2,2H30V28H4Z"/><path d="M30,9H23v2h3.59L19,18.59l-4.29-4.3a1,1,0,0,0-1.42,0L6,21.59,7.41,23,14,16.41l4.29,4.3a1,1,0,0,0,1.42,0L28,12.41V16h2Z"/>

</svg>
  </div>
</cds-side-nav-menu>
      <cds-side-nav-link href="#">
  
        Link
      
  
  
  <div slot="title-icon-container">
    

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16px" height="16px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M4,2H2V28a2,2,0,0,0,2,2H30V28H4Z"/><path d="M30,9H23v2h3.59L19,18.59l-4.29-4.3a1,1,0,0,0-1.42,0L6,21.59,7.41,23,14,16.41l4.29,4.3a1,1,0,0,0,1.42,0L28,12.41V16h2Z"/>

</svg>
  </div>
</cds-side-nav-link>
      <cds-side-nav-link href="#">
  
        Link
      
  
  
  <div slot="title-icon-container">
    

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16px" height="16px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M4,2H2V28a2,2,0,0,0,2,2H30V28H4Z"/><path d="M30,9H23v2h3.59L19,18.59l-4.29-4.3a1,1,0,0,0-1.42,0L6,21.59,7.41,23,14,16.41l4.29,4.3a1,1,0,0,0,1.42,0L28,12.41V16h2Z"/>

</svg>
  </div>
</cds-side-nav-link>
    
</cds-side-nav-items>
  
</cds-side-nav>

</cds-header>
<main class="cds--content cds-ce-demo-devenv--ui-shell-content">
  <div class="cds--grid">
    <div class="cds--row">
      <div class="cds--col-lg-13 cds--offset-lg-3">
        <h2 style="margin: 0 0 30px">Purpose and function</h2>
        <p>
          The shell is perhaps the most crucial piece of any UI built with
          <a href="https://www.carbondesignsystem.com">Carbon</a>. It contains the shared
          navigation framework for the entire design system and ties the products in IBM's
          portfolio together in a cohesive and elegant way. The shell is the home of the
          topmost navigation, where users can quickly and dependably gain their bearings and
          move between pages.
          <br>
          <br>
          The shell was designed with maximum flexibility built in, to serve the needs of a
          broad range of products and users. Adopting the shell ensures compliance with IBM
          design standards, simplifies development efforts, and provides great user
          experiences. All IBM products built with Carbon are required to use the shell's
          header.
          <br>
          <br>
          To better understand the purpose and function of the UI shell, consider the "shell"
          of macOS, which contains the Apple menu, top-level navigation, and universal,
          OS-level controls at the top of the screen, as well as a universal dock along the
          bottom or side of the screen. The Carbon UI shell is roughly analogous in function
          to these parts of the Mac UI. For example, the app switcher portion of the shell can
          be compared to the dock in macOS.
        </p>
        <h2 style="margin: 30px 0px">Header responsive behavior</h2>
        <p>
          As a header scales down to fit smaller screen sizes, headers with persistent side
          nav menus should have the side nav collapse into "hamburger" menu. See the example
          to better understand responsive behavior of the header.
        </p>
        <h2 style="margin: 30px 0px">Secondary navigation</h2>
        <p>
          The side-nav contains secondary navigation and fits below the header. It can be
          configured to be either fixed-width or flexible, with only one level of nested
          items allowed. Both links and category lists can be used in the side-nav and may be
          mixed together. There are several configurations of the side-nav, but only one
          configuration should be used per product section. If tabs are needed on a page when
          using a side-nav, then the tabs are secondary in hierarchy to the side-nav.
        </p>
        <cds-modal>
          <cds-modal-header>
            <cds-modal-close-button></cds-modal-close-button>
            <cds-modal-label>Account resources</cds-modal-label>
            <cds-modal-heading>Add a custom domain</cds-modal-heading>
          </cds-modal-header>
          <cds-modal-body>
            <cds-modal-body-content description>
              Custom domains direct requests for your apps in this Cloud Foundry organization
              to a URL that you own. A custom domain can be a shared domain, a shared subdomain,
              or a shared domain and host.
            </cds-modal-body-content>
          </cds-modal-body>
          <cds-modal-footer>
            <cds-modal-footer-button kind="secondary" data-modal-close>
              Cancel
            </cds-modal-footer-button>
            <cds-modal-footer-button kind="primary">Add</cds-modal-footer-button>
          </cds-modal-footer>
        </cds-modal>
        <cds-button kind="primary">Launch modal</cds-button>
      </div>
    </div>
  </div>
</main>
```


## header_base_skip_to_content

### example

```heex
<Graphene.CarbonComponents.header aria-label="IBM Platform Name">
      <Graphene.CarbonComponents.skip_to_content />
      <Graphene.CarbonComponents.header_name href="#" prefix="IBM">[Platform]</Graphene.CarbonComponents.header_name>
      <:global>
        <Graphene.CarbonComponents.header_global_action button_label_inactive="Search" tooltip_text="Search">
          <:icon name="search" size={20} />
        </Graphene.CarbonComponents.header_global_action>
        <Graphene.CarbonComponents.header_global_action button_label_inactive="Notification" tooltip_text="Notification">
          <:icon name="notification" size={20} />
        </Graphene.CarbonComponents.header_global_action>
        <Graphene.CarbonComponents.header_global_action
          button_label_inactive="App Switcher"
          tooltip_text="App Switcher"
          tooltip_alignment="right"
        >
          <:icon name="switcher" size={20} />
        </Graphene.CarbonComponents.header_global_action>
      </:global>
    </Graphene.CarbonComponents.header>
    <Helpers.story_content />
```

```html
<cds-header class="cds--header" aria-label="IBM Platform Name">
  
  
  
  <cds-skip-to-content link-assistive-text="Skip to main content">
  
</cds-skip-to-content>
  <cds-header-name href="#" prefix="IBM">
  [Platform]
</cds-header-name>
  
  
    <div class="cds--header__global">
      
        
    <cds-header-global-action button-label-inactive="Search" kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" tooltip-text="Search" type="button">
  
    
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" slot="icon" width="20px" height="20px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z"/>

</svg>
    
  
  
      
</cds-header-global-action>
    <cds-header-global-action button-label-inactive="Notification" kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" tooltip-text="Notification" type="button">
  
    
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" slot="icon" width="20px" height="20px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M28.7071,19.293,26,16.5859V13a10.0136,10.0136,0,0,0-9-9.9492V1H15V3.0508A10.0136,10.0136,0,0,0,6,13v3.5859L3.2929,19.293A1,1,0,0,0,3,20v3a1,1,0,0,0,1,1h7v.7768a5.152,5.152,0,0,0,4.5,5.1987A5.0057,5.0057,0,0,0,21,25V24h7a1,1,0,0,0,1-1V20A1,1,0,0,0,28.7071,19.293ZM19,25a3,3,0,0,1-6,0V24h6Zm8-3H5V20.4141L7.707,17.707A1,1,0,0,0,8,17V13a8,8,0,0,1,16,0v4a1,1,0,0,0,.293.707L27,20.4141Z"/>

</svg>
    
  
  
      
</cds-header-global-action>
    <cds-header-global-action button-label-inactive="App Switcher" kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="right" tooltip-position="top" tooltip-text="App Switcher" type="button">
  
    
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" slot="icon" width="20px" height="20px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M14 4H18V8H14z"/><path d="M4 4H8V8H4z"/><path d="M24 4H28V8H24z"/><path d="M14 14H18V18H14z"/><path d="M4 14H8V18H4z"/><path d="M24 14H28V18H24z"/><path d="M14 24H18V28H14z"/><path d="M4 24H8V28H4z"/><path d="M24 24H28V28H24z"/>

</svg>
    
  
  
      
</cds-header-global-action>
  
      
    </div>
  

</cds-header>
<main class="cds--content cds-ce-demo-devenv--ui-shell-content">
  <div class="cds--grid">
    <div class="cds--row">
      <div class="cds--col-lg-13 cds--offset-lg-3">
        <h2 style="margin: 0 0 30px">Purpose and function</h2>
        <p>
          The shell is perhaps the most crucial piece of any UI built with
          <a href="https://www.carbondesignsystem.com">Carbon</a>. It contains the shared
          navigation framework for the entire design system and ties the products in IBM's
          portfolio together in a cohesive and elegant way. The shell is the home of the
          topmost navigation, where users can quickly and dependably gain their bearings and
          move between pages.
          <br>
          <br>
          The shell was designed with maximum flexibility built in, to serve the needs of a
          broad range of products and users. Adopting the shell ensures compliance with IBM
          design standards, simplifies development efforts, and provides great user
          experiences. All IBM products built with Carbon are required to use the shell's
          header.
          <br>
          <br>
          To better understand the purpose and function of the UI shell, consider the "shell"
          of macOS, which contains the Apple menu, top-level navigation, and universal,
          OS-level controls at the top of the screen, as well as a universal dock along the
          bottom or side of the screen. The Carbon UI shell is roughly analogous in function
          to these parts of the Mac UI. For example, the app switcher portion of the shell can
          be compared to the dock in macOS.
        </p>
        <h2 style="margin: 30px 0px">Header responsive behavior</h2>
        <p>
          As a header scales down to fit smaller screen sizes, headers with persistent side
          nav menus should have the side nav collapse into "hamburger" menu. See the example
          to better understand responsive behavior of the header.
        </p>
        <h2 style="margin: 30px 0px">Secondary navigation</h2>
        <p>
          The side-nav contains secondary navigation and fits below the header. It can be
          configured to be either fixed-width or flexible, with only one level of nested
          items allowed. Both links and category lists can be used in the side-nav and may be
          mixed together. There are several configurations of the side-nav, but only one
          configuration should be used per product section. If tabs are needed on a page when
          using a side-nav, then the tabs are secondary in hierarchy to the side-nav.
        </p>
        <cds-modal>
          <cds-modal-header>
            <cds-modal-close-button></cds-modal-close-button>
            <cds-modal-label>Account resources</cds-modal-label>
            <cds-modal-heading>Add a custom domain</cds-modal-heading>
          </cds-modal-header>
          <cds-modal-body>
            <cds-modal-body-content description>
              Custom domains direct requests for your apps in this Cloud Foundry organization
              to a URL that you own. A custom domain can be a shared domain, a shared subdomain,
              or a shared domain and host.
            </cds-modal-body-content>
          </cds-modal-body>
          <cds-modal-footer>
            <cds-modal-footer-button kind="secondary" data-modal-close>
              Cancel
            </cds-modal-footer-button>
            <cds-modal-footer-button kind="primary">Add</cds-modal-footer-button>
          </cds-modal-footer>
        </cds-modal>
        <cds-button kind="primary">Launch modal</cds-button>
      </div>
    </div>
  </div>
</main>
```


## side_nav_large_items

### example

```heex
<Graphene.CarbonComponents.side_nav is_not_child_of_header aria-label="Side navigation" collapse_mode="fixed" expanded>
      <Graphene.CarbonComponents.side_nav_items>
        <Graphene.CarbonComponents.side_nav_menu large title="Large menu">
          <Graphene.CarbonComponents.side_nav_menu_item href="#">Menu 1</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">Menu 2</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">Menu 3</Graphene.CarbonComponents.side_nav_menu_item>
        </Graphene.CarbonComponents.side_nav_menu>
        <Graphene.CarbonComponents.side_nav_link large href="#">Large link</Graphene.CarbonComponents.side_nav_link>
        <Graphene.CarbonComponents.side_nav_menu large title="Large menu w/icon">
          <:title_icon><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">Menu 1</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">Menu 2</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">Menu 3</Graphene.CarbonComponents.side_nav_menu_item>
        </Graphene.CarbonComponents.side_nav_menu>
        <Graphene.CarbonComponents.side_nav_link large href="#">
          <:title_icon_container><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon_container>
          Large link w/icon
        </Graphene.CarbonComponents.side_nav_link>
      </Graphene.CarbonComponents.side_nav_items>
    </Graphene.CarbonComponents.side_nav>
    <Helpers.story_content />
```

```html
<cds-side-nav collapse-mode="fixed" expanded is-not-child-of-header class="cds--side-nav cds--side-nav--expanded" aria-label="Side navigation">
  
  <cds-side-nav-items>
  
    <cds-side-nav-menu large title="Large menu">
  
      <cds-side-nav-menu-item href="#">
  Menu 1
</cds-side-nav-menu-item>
      <cds-side-nav-menu-item href="#">
  Menu 2
</cds-side-nav-menu-item>
      <cds-side-nav-menu-item href="#">
  Menu 3
</cds-side-nav-menu-item>
    
  
</cds-side-nav-menu>
    <cds-side-nav-link href="#" large>
  Large link
  
  
  
</cds-side-nav-link>
    <cds-side-nav-menu large title="Large menu w/icon">
  
      <cds-side-nav-menu-item href="#">
  Menu 1
</cds-side-nav-menu-item>
      <cds-side-nav-menu-item href="#">
  Menu 2
</cds-side-nav-menu-item>
      <cds-side-nav-menu-item href="#">
  Menu 3
</cds-side-nav-menu-item>
    
  <div slot="title-icon">
    

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16px" height="16px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M4,2H2V28a2,2,0,0,0,2,2H30V28H4Z"/><path d="M30,9H23v2h3.59L19,18.59l-4.29-4.3a1,1,0,0,0-1.42,0L6,21.59,7.41,23,14,16.41l4.29,4.3a1,1,0,0,0,1.42,0L28,12.41V16h2Z"/>

</svg>
  </div>
</cds-side-nav-menu>
    <cds-side-nav-link href="#" large>
  
      Large link w/icon
    
  
  
  <div slot="title-icon-container">
    

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16px" height="16px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M4,2H2V28a2,2,0,0,0,2,2H30V28H4Z"/><path d="M30,9H23v2h3.59L19,18.59l-4.29-4.3a1,1,0,0,0-1.42,0L6,21.59,7.41,23,14,16.41l4.29,4.3a1,1,0,0,0,1.42,0L28,12.41V16h2Z"/>

</svg>
  </div>
</cds-side-nav-link>
  
</cds-side-nav-items>

</cds-side-nav>
<main class="cds--content cds-ce-demo-devenv--ui-shell-content">
  <div class="cds--grid">
    <div class="cds--row">
      <div class="cds--col-lg-13 cds--offset-lg-3">
        <h2 style="margin: 0 0 30px">Purpose and function</h2>
        <p>
          The shell is perhaps the most crucial piece of any UI built with
          <a href="https://www.carbondesignsystem.com">Carbon</a>. It contains the shared
          navigation framework for the entire design system and ties the products in IBM's
          portfolio together in a cohesive and elegant way. The shell is the home of the
          topmost navigation, where users can quickly and dependably gain their bearings and
          move between pages.
          <br>
          <br>
          The shell was designed with maximum flexibility built in, to serve the needs of a
          broad range of products and users. Adopting the shell ensures compliance with IBM
          design standards, simplifies development efforts, and provides great user
          experiences. All IBM products built with Carbon are required to use the shell's
          header.
          <br>
          <br>
          To better understand the purpose and function of the UI shell, consider the "shell"
          of macOS, which contains the Apple menu, top-level navigation, and universal,
          OS-level controls at the top of the screen, as well as a universal dock along the
          bottom or side of the screen. The Carbon UI shell is roughly analogous in function
          to these parts of the Mac UI. For example, the app switcher portion of the shell can
          be compared to the dock in macOS.
        </p>
        <h2 style="margin: 30px 0px">Header responsive behavior</h2>
        <p>
          As a header scales down to fit smaller screen sizes, headers with persistent side
          nav menus should have the side nav collapse into "hamburger" menu. See the example
          to better understand responsive behavior of the header.
        </p>
        <h2 style="margin: 30px 0px">Secondary navigation</h2>
        <p>
          The side-nav contains secondary navigation and fits below the header. It can be
          configured to be either fixed-width or flexible, with only one level of nested
          items allowed. Both links and category lists can be used in the side-nav and may be
          mixed together. There are several configurations of the side-nav, but only one
          configuration should be used per product section. If tabs are needed on a page when
          using a side-nav, then the tabs are secondary in hierarchy to the side-nav.
        </p>
        <cds-modal>
          <cds-modal-header>
            <cds-modal-close-button></cds-modal-close-button>
            <cds-modal-label>Account resources</cds-modal-label>
            <cds-modal-heading>Add a custom domain</cds-modal-heading>
          </cds-modal-header>
          <cds-modal-body>
            <cds-modal-body-content description>
              Custom domains direct requests for your apps in this Cloud Foundry organization
              to a URL that you own. A custom domain can be a shared domain, a shared subdomain,
              or a shared domain and host.
            </cds-modal-body-content>
          </cds-modal-body>
          <cds-modal-footer>
            <cds-modal-footer-button kind="secondary" data-modal-close>
              Cancel
            </cds-modal-footer-button>
            <cds-modal-footer-button kind="primary">Add</cds-modal-footer-button>
          </cds-modal-footer>
        </cds-modal>
        <cds-button kind="primary">Launch modal</cds-button>
      </div>
    </div>
  </div>
</main>
```


## side_nav_rail

### example

```heex
<Graphene.CarbonComponents.side_nav aria-label="Side navigation" collapse_mode="rail">
      <Graphene.CarbonComponents.side_nav_items>
        <Graphene.CarbonComponents.side_nav_menu title="Category title">
          <:title_icon><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#" active aria_current="page">Link</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
        </Graphene.CarbonComponents.side_nav_menu>
        <Graphene.CarbonComponents.side_nav_menu title="Category title">
          <:title_icon><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
        </Graphene.CarbonComponents.side_nav_menu>
        <Graphene.CarbonComponents.side_nav_menu title="Category title">
          <:title_icon><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
          <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
        </Graphene.CarbonComponents.side_nav_menu>
        <Graphene.CarbonComponents.side_nav_link href="#">
          <:title_icon_container><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon_container>
          Link
        </Graphene.CarbonComponents.side_nav_link>
        <Graphene.CarbonComponents.side_nav_link href="#">
          <:title_icon_container><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon_container>
          Link
        </Graphene.CarbonComponents.side_nav_link>
      </Graphene.CarbonComponents.side_nav_items>
    </Graphene.CarbonComponents.side_nav>
    <Helpers.story_content />
```

```html
<cds-side-nav collapse-mode="rail" class="cds--side-nav" aria-label="Side navigation">
  
  <cds-side-nav-items>
  
    <cds-side-nav-menu title="Category title">
  
      <cds-side-nav-menu-item href="#">
  Link
</cds-side-nav-menu-item>
      <cds-side-nav-menu-item active href="#" aria_current="page">
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
  
  
  <path d="M4,2H2V28a2,2,0,0,0,2,2H30V28H4Z"/><path d="M30,9H23v2h3.59L19,18.59l-4.29-4.3a1,1,0,0,0-1.42,0L6,21.59,7.41,23,14,16.41l4.29,4.3a1,1,0,0,0,1.42,0L28,12.41V16h2Z"/>

</svg>
  </div>
</cds-side-nav-menu>
    <cds-side-nav-link href="#">
  
      Link
    
  
  
  <div slot="title-icon-container">
    

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16px" height="16px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M4,2H2V28a2,2,0,0,0,2,2H30V28H4Z"/><path d="M30,9H23v2h3.59L19,18.59l-4.29-4.3a1,1,0,0,0-1.42,0L6,21.59,7.41,23,14,16.41l4.29,4.3a1,1,0,0,0,1.42,0L28,12.41V16h2Z"/>

</svg>
  </div>
</cds-side-nav-link>
    <cds-side-nav-link href="#">
  
      Link
    
  
  
  <div slot="title-icon-container">
    

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16px" height="16px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M4,2H2V28a2,2,0,0,0,2,2H30V28H4Z"/><path d="M30,9H23v2h3.59L19,18.59l-4.29-4.3a1,1,0,0,0-1.42,0L6,21.59,7.41,23,14,16.41l4.29,4.3a1,1,0,0,0,1.42,0L28,12.41V16h2Z"/>

</svg>
  </div>
</cds-side-nav-link>
  
</cds-side-nav-items>

</cds-side-nav>
<main class="cds--content cds-ce-demo-devenv--ui-shell-content">
  <div class="cds--grid">
    <div class="cds--row">
      <div class="cds--col-lg-13 cds--offset-lg-3">
        <h2 style="margin: 0 0 30px">Purpose and function</h2>
        <p>
          The shell is perhaps the most crucial piece of any UI built with
          <a href="https://www.carbondesignsystem.com">Carbon</a>. It contains the shared
          navigation framework for the entire design system and ties the products in IBM's
          portfolio together in a cohesive and elegant way. The shell is the home of the
          topmost navigation, where users can quickly and dependably gain their bearings and
          move between pages.
          <br>
          <br>
          The shell was designed with maximum flexibility built in, to serve the needs of a
          broad range of products and users. Adopting the shell ensures compliance with IBM
          design standards, simplifies development efforts, and provides great user
          experiences. All IBM products built with Carbon are required to use the shell's
          header.
          <br>
          <br>
          To better understand the purpose and function of the UI shell, consider the "shell"
          of macOS, which contains the Apple menu, top-level navigation, and universal,
          OS-level controls at the top of the screen, as well as a universal dock along the
          bottom or side of the screen. The Carbon UI shell is roughly analogous in function
          to these parts of the Mac UI. For example, the app switcher portion of the shell can
          be compared to the dock in macOS.
        </p>
        <h2 style="margin: 30px 0px">Header responsive behavior</h2>
        <p>
          As a header scales down to fit smaller screen sizes, headers with persistent side
          nav menus should have the side nav collapse into "hamburger" menu. See the example
          to better understand responsive behavior of the header.
        </p>
        <h2 style="margin: 30px 0px">Secondary navigation</h2>
        <p>
          The side-nav contains secondary navigation and fits below the header. It can be
          configured to be either fixed-width or flexible, with only one level of nested
          items allowed. Both links and category lists can be used in the side-nav and may be
          mixed together. There are several configurations of the side-nav, but only one
          configuration should be used per product section. If tabs are needed on a page when
          using a side-nav, then the tabs are secondary in hierarchy to the side-nav.
        </p>
        <cds-modal>
          <cds-modal-header>
            <cds-modal-close-button></cds-modal-close-button>
            <cds-modal-label>Account resources</cds-modal-label>
            <cds-modal-heading>Add a custom domain</cds-modal-heading>
          </cds-modal-header>
          <cds-modal-body>
            <cds-modal-body-content description>
              Custom domains direct requests for your apps in this Cloud Foundry organization
              to a URL that you own. A custom domain can be a shared domain, a shared subdomain,
              or a shared domain and host.
            </cds-modal-body-content>
          </cds-modal-body>
          <cds-modal-footer>
            <cds-modal-footer-button kind="secondary" data-modal-close>
              Cancel
            </cds-modal-footer-button>
            <cds-modal-footer-button kind="primary">Add</cds-modal-footer-button>
          </cds-modal-footer>
        </cds-modal>
        <cds-button kind="primary">Launch modal</cds-button>
      </div>
    </div>
  </div>
</main>
```


## side_nav_rail_header

### example

```heex
<Graphene.CarbonComponents.header aria-label="IBM Platform Name">
      <Graphene.CarbonComponents.header_menu_button button_label_active="Close menu" button_label_inactive="Open menu" />
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
        <Graphene.CarbonComponents.header_global_action button_label_inactive="Search" tooltip_text="Search">
          <:icon name="search" size={20} />
        </Graphene.CarbonComponents.header_global_action>
        <Graphene.CarbonComponents.header_global_action button_label_inactive="Notification" tooltip_text="Notification">
          <:icon name="notification" size={20} />
        </Graphene.CarbonComponents.header_global_action>
        <Graphene.CarbonComponents.header_global_action
          button_label_inactive="App Switcher"
          tooltip_text="App Switcher"
          tooltip_alignment="right"
        >
          <:icon name="switcher" size={20} />
        </Graphene.CarbonComponents.header_global_action>
      </:global>
      <Graphene.CarbonComponents.side_nav aria-label="Side navigation" collapse_mode="rail">
        <Graphene.CarbonComponents.side_nav_items>
          <Graphene.CarbonComponents.side_nav_menu title="Category title">
            <:title_icon><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
            <Graphene.CarbonComponents.side_nav_menu_item href="#" active aria_current="page">Link</Graphene.CarbonComponents.side_nav_menu_item>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
          </Graphene.CarbonComponents.side_nav_menu>
          <Graphene.CarbonComponents.side_nav_menu title="Category title">
            <:title_icon><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
          </Graphene.CarbonComponents.side_nav_menu>
          <Graphene.CarbonComponents.side_nav_menu title="Category title">
            <:title_icon><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
            <Graphene.CarbonComponents.side_nav_menu_item href="#">Link</Graphene.CarbonComponents.side_nav_menu_item>
          </Graphene.CarbonComponents.side_nav_menu>
          <Graphene.CarbonComponents.side_nav_link href="#">
            <:title_icon_container><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon_container>
            Link
          </Graphene.CarbonComponents.side_nav_link>
          <Graphene.CarbonComponents.side_nav_link href="#">
            <:title_icon_container><Graphene.CarbonComponents.icon name="analytics" size={16} /></:title_icon_container>
            Link
          </Graphene.CarbonComponents.side_nav_link>
        </Graphene.CarbonComponents.side_nav_items>
      </Graphene.CarbonComponents.side_nav>
    </Graphene.CarbonComponents.header>
    <Helpers.story_content />
```

```html
<cds-header class="cds--header" aria-label="IBM Platform Name">
  
  
  
  <cds-header-menu-button button-label-active="Close menu" button-label-inactive="Open menu" collapse-mode="responsive">
  
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
  <cds-side-nav collapse-mode="rail" class="cds--side-nav" aria-label="Side navigation">
  
    <cds-side-nav-items>
  
      <cds-side-nav-menu title="Category title">
  
        <cds-side-nav-menu-item href="#">
  Link
</cds-side-nav-menu-item>
        <cds-side-nav-menu-item active href="#" aria_current="page">
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
  
  
  <path d="M4,2H2V28a2,2,0,0,0,2,2H30V28H4Z"/><path d="M30,9H23v2h3.59L19,18.59l-4.29-4.3a1,1,0,0,0-1.42,0L6,21.59,7.41,23,14,16.41l4.29,4.3a1,1,0,0,0,1.42,0L28,12.41V16h2Z"/>

</svg>
  </div>
</cds-side-nav-menu>
      <cds-side-nav-link href="#">
  
        Link
      
  
  
  <div slot="title-icon-container">
    

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16px" height="16px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M4,2H2V28a2,2,0,0,0,2,2H30V28H4Z"/><path d="M30,9H23v2h3.59L19,18.59l-4.29-4.3a1,1,0,0,0-1.42,0L6,21.59,7.41,23,14,16.41l4.29,4.3a1,1,0,0,0,1.42,0L28,12.41V16h2Z"/>

</svg>
  </div>
</cds-side-nav-link>
      <cds-side-nav-link href="#">
  
        Link
      
  
  
  <div slot="title-icon-container">
    

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16px" height="16px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M4,2H2V28a2,2,0,0,0,2,2H30V28H4Z"/><path d="M30,9H23v2h3.59L19,18.59l-4.29-4.3a1,1,0,0,0-1.42,0L6,21.59,7.41,23,14,16.41l4.29,4.3a1,1,0,0,0,1.42,0L28,12.41V16h2Z"/>

</svg>
  </div>
</cds-side-nav-link>
    
</cds-side-nav-items>
  
</cds-side-nav>

  
    <div class="cds--header__global">
      
        
    <cds-header-global-action button-label-inactive="Search" kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" tooltip-text="Search" type="button">
  
    
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" slot="icon" width="20px" height="20px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z"/>

</svg>
    
  
  
      
</cds-header-global-action>
    <cds-header-global-action button-label-inactive="Notification" kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" tooltip-text="Notification" type="button">
  
    
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" slot="icon" width="20px" height="20px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M28.7071,19.293,26,16.5859V13a10.0136,10.0136,0,0,0-9-9.9492V1H15V3.0508A10.0136,10.0136,0,0,0,6,13v3.5859L3.2929,19.293A1,1,0,0,0,3,20v3a1,1,0,0,0,1,1h7v.7768a5.152,5.152,0,0,0,4.5,5.1987A5.0057,5.0057,0,0,0,21,25V24h7a1,1,0,0,0,1-1V20A1,1,0,0,0,28.7071,19.293ZM19,25a3,3,0,0,1-6,0V24h6Zm8-3H5V20.4141L7.707,17.707A1,1,0,0,0,8,17V13a8,8,0,0,1,16,0v4a1,1,0,0,0,.293.707L27,20.4141Z"/>

</svg>
    
  
  
      
</cds-header-global-action>
    <cds-header-global-action button-label-inactive="App Switcher" kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="right" tooltip-position="top" tooltip-text="App Switcher" type="button">
  
    
    
    
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" slot="icon" width="20px" height="20px" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <path d="M14 4H18V8H14z"/><path d="M4 4H8V8H4z"/><path d="M24 4H28V8H24z"/><path d="M14 14H18V18H14z"/><path d="M4 14H8V18H4z"/><path d="M24 14H28V18H24z"/><path d="M14 24H18V28H14z"/><path d="M4 24H8V28H4z"/><path d="M24 24H28V28H24z"/>

</svg>
    
  
  
      
</cds-header-global-action>
  
      
    </div>
  

</cds-header>
<main class="cds--content cds-ce-demo-devenv--ui-shell-content">
  <div class="cds--grid">
    <div class="cds--row">
      <div class="cds--col-lg-13 cds--offset-lg-3">
        <h2 style="margin: 0 0 30px">Purpose and function</h2>
        <p>
          The shell is perhaps the most crucial piece of any UI built with
          <a href="https://www.carbondesignsystem.com">Carbon</a>. It contains the shared
          navigation framework for the entire design system and ties the products in IBM's
          portfolio together in a cohesive and elegant way. The shell is the home of the
          topmost navigation, where users can quickly and dependably gain their bearings and
          move between pages.
          <br>
          <br>
          The shell was designed with maximum flexibility built in, to serve the needs of a
          broad range of products and users. Adopting the shell ensures compliance with IBM
          design standards, simplifies development efforts, and provides great user
          experiences. All IBM products built with Carbon are required to use the shell's
          header.
          <br>
          <br>
          To better understand the purpose and function of the UI shell, consider the "shell"
          of macOS, which contains the Apple menu, top-level navigation, and universal,
          OS-level controls at the top of the screen, as well as a universal dock along the
          bottom or side of the screen. The Carbon UI shell is roughly analogous in function
          to these parts of the Mac UI. For example, the app switcher portion of the shell can
          be compared to the dock in macOS.
        </p>
        <h2 style="margin: 30px 0px">Header responsive behavior</h2>
        <p>
          As a header scales down to fit smaller screen sizes, headers with persistent side
          nav menus should have the side nav collapse into "hamburger" menu. See the example
          to better understand responsive behavior of the header.
        </p>
        <h2 style="margin: 30px 0px">Secondary navigation</h2>
        <p>
          The side-nav contains secondary navigation and fits below the header. It can be
          configured to be either fixed-width or flexible, with only one level of nested
          items allowed. Both links and category lists can be used in the side-nav and may be
          mixed together. There are several configurations of the side-nav, but only one
          configuration should be used per product section. If tabs are needed on a page when
          using a side-nav, then the tabs are secondary in hierarchy to the side-nav.
        </p>
        <cds-modal>
          <cds-modal-header>
            <cds-modal-close-button></cds-modal-close-button>
            <cds-modal-label>Account resources</cds-modal-label>
            <cds-modal-heading>Add a custom domain</cds-modal-heading>
          </cds-modal-header>
          <cds-modal-body>
            <cds-modal-body-content description>
              Custom domains direct requests for your apps in this Cloud Foundry organization
              to a URL that you own. A custom domain can be a shared domain, a shared subdomain,
              or a shared domain and host.
            </cds-modal-body-content>
          </cds-modal-body>
          <cds-modal-footer>
            <cds-modal-footer-button kind="secondary" data-modal-close>
              Cancel
            </cds-modal-footer-button>
            <cds-modal-footer-button kind="primary">Add</cds-modal-footer-button>
          </cds-modal-footer>
        </cds-modal>
        <cds-button kind="primary">Launch modal</cds-button>
      </div>
    </div>
  </div>
</main>
```
