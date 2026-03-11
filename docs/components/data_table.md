# `data_table`

## ai_label

### row_labels

```heex
<.data_table
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
  selectable
  expandable
  batch_expansion
  with_row_ai_labels
>
  <:title>DataTable</:title>
  <:description>AI labels</:description>
  <:row_decorator :let={row}>
    <%= if rem(row.id, 2) == 0 do %>
      <Storybook.CarbonComponents.DataTable.Shared.ai_label />
    <% end %>
  </:row_decorator>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
</.data_table>
```

```html
<div id="ai-label-single-row-labels-component">
  <cds-table batch-expansion expandable headerCount="0" is-selectable locale="en" size="lg" use-zebra-styles with-row-ai-labels id="ai-label-single-row-labels" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row batch-expansion selection-label="Select all">
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="ai-label-single-row-labelsbody">
  
      
        <cds-table-row batch-expansion selection-label="Select row" selection-value="1" id="1" data-row-id="1">
  
          
            
  

          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion selection-label="Select row" selection-value="2" id="2" data-row-id="2">
  
          
            
  
    <cds-ai-label ai-text="AI" alignment="bottom-left" alignment-axis-offset="0" button-label="Show information" kind="" revert-label="Revert to AI input" size="xs" slot="ai-label">
  
  
  
  
  
  <div slot="body-text">
    <p class="secondary">AI Explained</p>
    <h2 class="ai-label-heading">84%</h2>
    <p class="secondary bold">Confidence score</p>
    <p class="secondary">
      Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
    </p>
    <hr>
    <p class="secondary">Model type</p>
    <p class="bold">Foundation model</p>
  </div>

  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M15.5,7.8C14.3,4.7,11.3,2.6,8,2.5C4.7,2.6,1.7,4.7,0.5,7.8c0,0.1,0,0.2,0,0.3c1.2,3.1,4.1,5.2,7.5,5.3	c3.3-0.1,6.3-2.2,7.5-5.3C15.5,8.1,15.5,7.9,15.5,7.8z M8,12.5c-2.7,0-5.4-2-6.5-4.5c1-2.5,3.8-4.5,6.5-4.5s5.4,2,6.5,4.5	C13.4,10.5,10.6,12.5,8,12.5z"></path><path d="M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.3,3-3S9.7,5,8,5z M8,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,10,8,10z"></path>
    </svg>
    
  <span slot="tooltip-content">
    View
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M28,8H20.8284L17.4143,4.5859A2,2,0,0,0,16,4H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10A2,2,0,0,0,28,8ZM8,26V14h8v6.17l-2.59-2.58L12,19l5,5,5-5-1.41-1.41L18,20.17V14a2.0025,2.0025,0,0,0-2-2H8a2.0025,2.0025,0,0,0-2,2V26H4V6H16l4,4h8v2H22v2h6V26Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Open folder
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M26,28H6a2.0021,2.0021,0,0,1-2-2V11A2.0021,2.0021,0,0,1,6,9h5.6665a2.0119,2.0119,0,0,1,1.2007.4L16.3335,12H26a2.0021,2.0021,0,0,1,2,2V26A2.0021,2.0021,0,0,1,26,28ZM11.6665,11H5.9985L6,26H26V14H15.6665Z"></path><path d="M28,9H17.6665l-4-3H6V4h7.6665a2.0119,2.0119,0,0,1,1.2007.4L18.3335,7H28Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Folders
  </span>
</cds-icon-button>
  <cds-ai-label-action-button kind="primary" link-role="button" size="lg" slot="actions" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  View Literature
</cds-ai-label-action-button>


  
  
</cds-ai-label>
  

          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion selection-label="Select row" selection-value="3" id="3" data-row-id="3">
  
          
            
  

          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion selection-label="Select row" selection-value="4" id="4" data-row-id="4">
  
          
            
  
    <cds-ai-label ai-text="AI" alignment="bottom-left" alignment-axis-offset="0" button-label="Show information" kind="" revert-label="Revert to AI input" size="xs" slot="ai-label">
  
  
  
  
  
  <div slot="body-text">
    <p class="secondary">AI Explained</p>
    <h2 class="ai-label-heading">84%</h2>
    <p class="secondary bold">Confidence score</p>
    <p class="secondary">
      Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
    </p>
    <hr>
    <p class="secondary">Model type</p>
    <p class="bold">Foundation model</p>
  </div>

  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M15.5,7.8C14.3,4.7,11.3,2.6,8,2.5C4.7,2.6,1.7,4.7,0.5,7.8c0,0.1,0,0.2,0,0.3c1.2,3.1,4.1,5.2,7.5,5.3	c3.3-0.1,6.3-2.2,7.5-5.3C15.5,8.1,15.5,7.9,15.5,7.8z M8,12.5c-2.7,0-5.4-2-6.5-4.5c1-2.5,3.8-4.5,6.5-4.5s5.4,2,6.5,4.5	C13.4,10.5,10.6,12.5,8,12.5z"></path><path d="M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.3,3-3S9.7,5,8,5z M8,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,10,8,10z"></path>
    </svg>
    
  <span slot="tooltip-content">
    View
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M28,8H20.8284L17.4143,4.5859A2,2,0,0,0,16,4H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10A2,2,0,0,0,28,8ZM8,26V14h8v6.17l-2.59-2.58L12,19l5,5,5-5-1.41-1.41L18,20.17V14a2.0025,2.0025,0,0,0-2-2H8a2.0025,2.0025,0,0,0-2,2V26H4V6H16l4,4h8v2H22v2h6V26Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Open folder
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M26,28H6a2.0021,2.0021,0,0,1-2-2V11A2.0021,2.0021,0,0,1,6,9h5.6665a2.0119,2.0119,0,0,1,1.2007.4L16.3335,12H26a2.0021,2.0021,0,0,1,2,2V26A2.0021,2.0021,0,0,1,26,28ZM11.6665,11H5.9985L6,26H26V14H15.6665Z"></path><path d="M28,9H17.6665l-4-3H6V4h7.6665a2.0119,2.0119,0,0,1,1.2007.4L18.3335,7H28Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Folders
  </span>
</cds-icon-button>
  <cds-ai-label-action-button kind="primary" link-role="button" size="lg" slot="actions" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  View Literature
</cds-ai-label-action-button>


  
  
</cds-ai-label>
  

          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion selection-label="Select row" selection-value="5" id="5" data-row-id="5">
  
          
            
  

          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion selection-label="Select row" selection-value="6" id="6" data-row-id="6">
  
          
            
  
    <cds-ai-label ai-text="AI" alignment="bottom-left" alignment-axis-offset="0" button-label="Show information" kind="" revert-label="Revert to AI input" size="xs" slot="ai-label">
  
  
  
  
  
  <div slot="body-text">
    <p class="secondary">AI Explained</p>
    <h2 class="ai-label-heading">84%</h2>
    <p class="secondary bold">Confidence score</p>
    <p class="secondary">
      Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
    </p>
    <hr>
    <p class="secondary">Model type</p>
    <p class="bold">Foundation model</p>
  </div>

  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M15.5,7.8C14.3,4.7,11.3,2.6,8,2.5C4.7,2.6,1.7,4.7,0.5,7.8c0,0.1,0,0.2,0,0.3c1.2,3.1,4.1,5.2,7.5,5.3	c3.3-0.1,6.3-2.2,7.5-5.3C15.5,8.1,15.5,7.9,15.5,7.8z M8,12.5c-2.7,0-5.4-2-6.5-4.5c1-2.5,3.8-4.5,6.5-4.5s5.4,2,6.5,4.5	C13.4,10.5,10.6,12.5,8,12.5z"></path><path d="M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.3,3-3S9.7,5,8,5z M8,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,10,8,10z"></path>
    </svg>
    
  <span slot="tooltip-content">
    View
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M28,8H20.8284L17.4143,4.5859A2,2,0,0,0,16,4H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10A2,2,0,0,0,28,8ZM8,26V14h8v6.17l-2.59-2.58L12,19l5,5,5-5-1.41-1.41L18,20.17V14a2.0025,2.0025,0,0,0-2-2H8a2.0025,2.0025,0,0,0-2,2V26H4V6H16l4,4h8v2H22v2h6V26Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Open folder
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M26,28H6a2.0021,2.0021,0,0,1-2-2V11A2.0021,2.0021,0,0,1,6,9h5.6665a2.0119,2.0119,0,0,1,1.2007.4L16.3335,12H26a2.0021,2.0021,0,0,1,2,2V26A2.0021,2.0021,0,0,1,26,28ZM11.6665,11H5.9985L6,26H26V14H15.6665Z"></path><path d="M28,9H17.6665l-4-3H6V4h7.6665a2.0119,2.0119,0,0,1,1.2007.4L18.3335,7H28Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Folders
  </span>
</cds-icon-button>
  <cds-ai-label-action-button kind="primary" link-role="button" size="lg" slot="actions" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  View Literature
</cds-ai-label-action-button>


  
  
</cds-ai-label>
  

          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
        
</cds-table-expanded-row>
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        AI labels
      
</cds-table-header-description>
    
  </div>
  
</cds-table>
</div>
```

### compact

```heex
<.data_table
  size="sm"
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
  selectable
  expandable
  batch_expansion
  with_row_ai_labels
>
  <:title>DataTable</:title>
  <:description>Compact AI labels</:description>
  <:row_decorator :let={row}>
    <%= if rem(row.id, 2) == 0 do %>
      <Storybook.CarbonComponents.DataTable.Shared.ai_label />
    <% end %>
  </:row_decorator>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
</.data_table>
```

```html
<div id="ai-label-single-compact-component">
  <cds-table batch-expansion expandable headerCount="0" is-selectable locale="en" size="sm" use-zebra-styles with-row-ai-labels id="ai-label-single-compact" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row batch-expansion selection-label="Select all">
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="ai-label-single-compactbody">
  
      
        <cds-table-row batch-expansion selection-label="Select row" selection-value="1" id="1" data-row-id="1">
  
          
            
  

          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion selection-label="Select row" selection-value="2" id="2" data-row-id="2">
  
          
            
  
    <cds-ai-label ai-text="AI" alignment="bottom-left" alignment-axis-offset="0" button-label="Show information" kind="" revert-label="Revert to AI input" size="xs" slot="ai-label">
  
  
  
  
  
  <div slot="body-text">
    <p class="secondary">AI Explained</p>
    <h2 class="ai-label-heading">84%</h2>
    <p class="secondary bold">Confidence score</p>
    <p class="secondary">
      Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
    </p>
    <hr>
    <p class="secondary">Model type</p>
    <p class="bold">Foundation model</p>
  </div>

  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M15.5,7.8C14.3,4.7,11.3,2.6,8,2.5C4.7,2.6,1.7,4.7,0.5,7.8c0,0.1,0,0.2,0,0.3c1.2,3.1,4.1,5.2,7.5,5.3	c3.3-0.1,6.3-2.2,7.5-5.3C15.5,8.1,15.5,7.9,15.5,7.8z M8,12.5c-2.7,0-5.4-2-6.5-4.5c1-2.5,3.8-4.5,6.5-4.5s5.4,2,6.5,4.5	C13.4,10.5,10.6,12.5,8,12.5z"></path><path d="M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.3,3-3S9.7,5,8,5z M8,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,10,8,10z"></path>
    </svg>
    
  <span slot="tooltip-content">
    View
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M28,8H20.8284L17.4143,4.5859A2,2,0,0,0,16,4H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10A2,2,0,0,0,28,8ZM8,26V14h8v6.17l-2.59-2.58L12,19l5,5,5-5-1.41-1.41L18,20.17V14a2.0025,2.0025,0,0,0-2-2H8a2.0025,2.0025,0,0,0-2,2V26H4V6H16l4,4h8v2H22v2h6V26Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Open folder
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M26,28H6a2.0021,2.0021,0,0,1-2-2V11A2.0021,2.0021,0,0,1,6,9h5.6665a2.0119,2.0119,0,0,1,1.2007.4L16.3335,12H26a2.0021,2.0021,0,0,1,2,2V26A2.0021,2.0021,0,0,1,26,28ZM11.6665,11H5.9985L6,26H26V14H15.6665Z"></path><path d="M28,9H17.6665l-4-3H6V4h7.6665a2.0119,2.0119,0,0,1,1.2007.4L18.3335,7H28Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Folders
  </span>
</cds-icon-button>
  <cds-ai-label-action-button kind="primary" link-role="button" size="lg" slot="actions" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  View Literature
</cds-ai-label-action-button>


  
  
</cds-ai-label>
  

          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion selection-label="Select row" selection-value="3" id="3" data-row-id="3">
  
          
            
  

          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion selection-label="Select row" selection-value="4" id="4" data-row-id="4">
  
          
            
  
    <cds-ai-label ai-text="AI" alignment="bottom-left" alignment-axis-offset="0" button-label="Show information" kind="" revert-label="Revert to AI input" size="xs" slot="ai-label">
  
  
  
  
  
  <div slot="body-text">
    <p class="secondary">AI Explained</p>
    <h2 class="ai-label-heading">84%</h2>
    <p class="secondary bold">Confidence score</p>
    <p class="secondary">
      Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
    </p>
    <hr>
    <p class="secondary">Model type</p>
    <p class="bold">Foundation model</p>
  </div>

  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M15.5,7.8C14.3,4.7,11.3,2.6,8,2.5C4.7,2.6,1.7,4.7,0.5,7.8c0,0.1,0,0.2,0,0.3c1.2,3.1,4.1,5.2,7.5,5.3	c3.3-0.1,6.3-2.2,7.5-5.3C15.5,8.1,15.5,7.9,15.5,7.8z M8,12.5c-2.7,0-5.4-2-6.5-4.5c1-2.5,3.8-4.5,6.5-4.5s5.4,2,6.5,4.5	C13.4,10.5,10.6,12.5,8,12.5z"></path><path d="M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.3,3-3S9.7,5,8,5z M8,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,10,8,10z"></path>
    </svg>
    
  <span slot="tooltip-content">
    View
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M28,8H20.8284L17.4143,4.5859A2,2,0,0,0,16,4H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10A2,2,0,0,0,28,8ZM8,26V14h8v6.17l-2.59-2.58L12,19l5,5,5-5-1.41-1.41L18,20.17V14a2.0025,2.0025,0,0,0-2-2H8a2.0025,2.0025,0,0,0-2,2V26H4V6H16l4,4h8v2H22v2h6V26Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Open folder
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M26,28H6a2.0021,2.0021,0,0,1-2-2V11A2.0021,2.0021,0,0,1,6,9h5.6665a2.0119,2.0119,0,0,1,1.2007.4L16.3335,12H26a2.0021,2.0021,0,0,1,2,2V26A2.0021,2.0021,0,0,1,26,28ZM11.6665,11H5.9985L6,26H26V14H15.6665Z"></path><path d="M28,9H17.6665l-4-3H6V4h7.6665a2.0119,2.0119,0,0,1,1.2007.4L18.3335,7H28Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Folders
  </span>
</cds-icon-button>
  <cds-ai-label-action-button kind="primary" link-role="button" size="lg" slot="actions" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  View Literature
</cds-ai-label-action-button>


  
  
</cds-ai-label>
  

          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion selection-label="Select row" selection-value="5" id="5" data-row-id="5">
  
          
            
  

          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion selection-label="Select row" selection-value="6" id="6" data-row-id="6">
  
          
            
  
    <cds-ai-label ai-text="AI" alignment="bottom-left" alignment-axis-offset="0" button-label="Show information" kind="" revert-label="Revert to AI input" size="xs" slot="ai-label">
  
  
  
  
  
  <div slot="body-text">
    <p class="secondary">AI Explained</p>
    <h2 class="ai-label-heading">84%</h2>
    <p class="secondary bold">Confidence score</p>
    <p class="secondary">
      Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
    </p>
    <hr>
    <p class="secondary">Model type</p>
    <p class="bold">Foundation model</p>
  </div>

  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M15.5,7.8C14.3,4.7,11.3,2.6,8,2.5C4.7,2.6,1.7,4.7,0.5,7.8c0,0.1,0,0.2,0,0.3c1.2,3.1,4.1,5.2,7.5,5.3	c3.3-0.1,6.3-2.2,7.5-5.3C15.5,8.1,15.5,7.9,15.5,7.8z M8,12.5c-2.7,0-5.4-2-6.5-4.5c1-2.5,3.8-4.5,6.5-4.5s5.4,2,6.5,4.5	C13.4,10.5,10.6,12.5,8,12.5z"></path><path d="M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.3,3-3S9.7,5,8,5z M8,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,10,8,10z"></path>
    </svg>
    
  <span slot="tooltip-content">
    View
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M28,8H20.8284L17.4143,4.5859A2,2,0,0,0,16,4H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10A2,2,0,0,0,28,8ZM8,26V14h8v6.17l-2.59-2.58L12,19l5,5,5-5-1.41-1.41L18,20.17V14a2.0025,2.0025,0,0,0-2-2H8a2.0025,2.0025,0,0,0-2,2V26H4V6H16l4,4h8v2H22v2h6V26Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Open folder
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M26,28H6a2.0021,2.0021,0,0,1-2-2V11A2.0021,2.0021,0,0,1,6,9h5.6665a2.0119,2.0119,0,0,1,1.2007.4L16.3335,12H26a2.0021,2.0021,0,0,1,2,2V26A2.0021,2.0021,0,0,1,26,28ZM11.6665,11H5.9985L6,26H26V14H15.6665Z"></path><path d="M28,9H17.6665l-4-3H6V4h7.6665a2.0119,2.0119,0,0,1,1.2007.4L18.3335,7H28Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Folders
  </span>
</cds-icon-button>
  <cds-ai-label-action-button kind="primary" link-role="button" size="lg" slot="actions" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  View Literature
</cds-ai-label-action-button>


  
  
</cds-ai-label>
  

          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
        
</cds-table-expanded-row>
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Compact AI labels
      
</cds-table-header-description>
    
  </div>
  
</cds-table>
</div>
```


## ai_label_expansion

### ai_expand

```heex
<.data_table
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
  expandable
  batch_expansion
  with_row_ai_labels
>
  <:title>DataTable</:title>
  <:description>AI labels with expansion</:description>
  <:row_decorator :let={row}>
    <%= if rem(row.id, 2) == 0 do %>
      <Storybook.CarbonComponents.DataTable.Shared.ai_label />
    <% end %>
  </:row_decorator>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
  <:expanded_row :let={row}>
    <h6>Expandable row content</h6>
    <div><%= Storybook.CarbonComponents.DataTable.Shared.expanded_content(row) %></div>
  </:expanded_row>
</.data_table>
```

```html
<div id="ai-label-expansion-single-ai-expand-component">
  <cds-table batch-expansion expandable headerCount="0" locale="en" size="lg" use-zebra-styles with-row-ai-labels id="ai-label-expansion-single-ai-expand" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row batch-expansion>
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="ai-label-expansion-single-ai-expandbody">
  
      
        <cds-table-row batch-expansion id="1" data-row-id="1">
  
          
            
  

          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Expandable row content</h6>
  <div>Expandable content for Load Balancer 3</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion id="2" data-row-id="2">
  
          
            
  
    <cds-ai-label ai-text="AI" alignment="bottom-left" alignment-axis-offset="0" button-label="Show information" kind="" revert-label="Revert to AI input" size="xs" slot="ai-label">
  
  
  
  
  
  <div slot="body-text">
    <p class="secondary">AI Explained</p>
    <h2 class="ai-label-heading">84%</h2>
    <p class="secondary bold">Confidence score</p>
    <p class="secondary">
      Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
    </p>
    <hr>
    <p class="secondary">Model type</p>
    <p class="bold">Foundation model</p>
  </div>

  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M15.5,7.8C14.3,4.7,11.3,2.6,8,2.5C4.7,2.6,1.7,4.7,0.5,7.8c0,0.1,0,0.2,0,0.3c1.2,3.1,4.1,5.2,7.5,5.3	c3.3-0.1,6.3-2.2,7.5-5.3C15.5,8.1,15.5,7.9,15.5,7.8z M8,12.5c-2.7,0-5.4-2-6.5-4.5c1-2.5,3.8-4.5,6.5-4.5s5.4,2,6.5,4.5	C13.4,10.5,10.6,12.5,8,12.5z"></path><path d="M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.3,3-3S9.7,5,8,5z M8,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,10,8,10z"></path>
    </svg>
    
  <span slot="tooltip-content">
    View
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M28,8H20.8284L17.4143,4.5859A2,2,0,0,0,16,4H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10A2,2,0,0,0,28,8ZM8,26V14h8v6.17l-2.59-2.58L12,19l5,5,5-5-1.41-1.41L18,20.17V14a2.0025,2.0025,0,0,0-2-2H8a2.0025,2.0025,0,0,0-2,2V26H4V6H16l4,4h8v2H22v2h6V26Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Open folder
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M26,28H6a2.0021,2.0021,0,0,1-2-2V11A2.0021,2.0021,0,0,1,6,9h5.6665a2.0119,2.0119,0,0,1,1.2007.4L16.3335,12H26a2.0021,2.0021,0,0,1,2,2V26A2.0021,2.0021,0,0,1,26,28ZM11.6665,11H5.9985L6,26H26V14H15.6665Z"></path><path d="M28,9H17.6665l-4-3H6V4h7.6665a2.0119,2.0119,0,0,1,1.2007.4L18.3335,7H28Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Folders
  </span>
</cds-icon-button>
  <cds-ai-label-action-button kind="primary" link-role="button" size="lg" slot="actions" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  View Literature
</cds-ai-label-action-button>


  
  
</cds-ai-label>
  

          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Expandable row content</h6>
  <div>Expandable content for Load Balancer 1</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion id="3" data-row-id="3">
  
          
            
  

          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Expandable row content</h6>
  <div>Expandable content for Load Balancer 2</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion id="4" data-row-id="4">
  
          
            
  
    <cds-ai-label ai-text="AI" alignment="bottom-left" alignment-axis-offset="0" button-label="Show information" kind="" revert-label="Revert to AI input" size="xs" slot="ai-label">
  
  
  
  
  
  <div slot="body-text">
    <p class="secondary">AI Explained</p>
    <h2 class="ai-label-heading">84%</h2>
    <p class="secondary bold">Confidence score</p>
    <p class="secondary">
      Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
    </p>
    <hr>
    <p class="secondary">Model type</p>
    <p class="bold">Foundation model</p>
  </div>

  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M15.5,7.8C14.3,4.7,11.3,2.6,8,2.5C4.7,2.6,1.7,4.7,0.5,7.8c0,0.1,0,0.2,0,0.3c1.2,3.1,4.1,5.2,7.5,5.3	c3.3-0.1,6.3-2.2,7.5-5.3C15.5,8.1,15.5,7.9,15.5,7.8z M8,12.5c-2.7,0-5.4-2-6.5-4.5c1-2.5,3.8-4.5,6.5-4.5s5.4,2,6.5,4.5	C13.4,10.5,10.6,12.5,8,12.5z"></path><path d="M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.3,3-3S9.7,5,8,5z M8,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,10,8,10z"></path>
    </svg>
    
  <span slot="tooltip-content">
    View
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M28,8H20.8284L17.4143,4.5859A2,2,0,0,0,16,4H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10A2,2,0,0,0,28,8ZM8,26V14h8v6.17l-2.59-2.58L12,19l5,5,5-5-1.41-1.41L18,20.17V14a2.0025,2.0025,0,0,0-2-2H8a2.0025,2.0025,0,0,0-2,2V26H4V6H16l4,4h8v2H22v2h6V26Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Open folder
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M26,28H6a2.0021,2.0021,0,0,1-2-2V11A2.0021,2.0021,0,0,1,6,9h5.6665a2.0119,2.0119,0,0,1,1.2007.4L16.3335,12H26a2.0021,2.0021,0,0,1,2,2V26A2.0021,2.0021,0,0,1,26,28ZM11.6665,11H5.9985L6,26H26V14H15.6665Z"></path><path d="M28,9H17.6665l-4-3H6V4h7.6665a2.0119,2.0119,0,0,1,1.2007.4L18.3335,7H28Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Folders
  </span>
</cds-icon-button>
  <cds-ai-label-action-button kind="primary" link-role="button" size="lg" slot="actions" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  View Literature
</cds-ai-label-action-button>


  
  
</cds-ai-label>
  

          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Expandable row content</h6>
  <div>Expandable content for Load Balancer 6</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion id="5" data-row-id="5">
  
          
            
  

          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Expandable row content</h6>
  <div>Expandable content for Load Balancer 4</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion id="6" data-row-id="6">
  
          
            
  
    <cds-ai-label ai-text="AI" alignment="bottom-left" alignment-axis-offset="0" button-label="Show information" kind="" revert-label="Revert to AI input" size="xs" slot="ai-label">
  
  
  
  
  
  <div slot="body-text">
    <p class="secondary">AI Explained</p>
    <h2 class="ai-label-heading">84%</h2>
    <p class="secondary bold">Confidence score</p>
    <p class="secondary">
      Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
    </p>
    <hr>
    <p class="secondary">Model type</p>
    <p class="bold">Foundation model</p>
  </div>

  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M15.5,7.8C14.3,4.7,11.3,2.6,8,2.5C4.7,2.6,1.7,4.7,0.5,7.8c0,0.1,0,0.2,0,0.3c1.2,3.1,4.1,5.2,7.5,5.3	c3.3-0.1,6.3-2.2,7.5-5.3C15.5,8.1,15.5,7.9,15.5,7.8z M8,12.5c-2.7,0-5.4-2-6.5-4.5c1-2.5,3.8-4.5,6.5-4.5s5.4,2,6.5,4.5	C13.4,10.5,10.6,12.5,8,12.5z"></path><path d="M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.3,3-3S9.7,5,8,5z M8,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,10,8,10z"></path>
    </svg>
    
  <span slot="tooltip-content">
    View
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M28,8H20.8284L17.4143,4.5859A2,2,0,0,0,16,4H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10A2,2,0,0,0,28,8ZM8,26V14h8v6.17l-2.59-2.58L12,19l5,5,5-5-1.41-1.41L18,20.17V14a2.0025,2.0025,0,0,0-2-2H8a2.0025,2.0025,0,0,0-2,2V26H4V6H16l4,4h8v2H22v2h6V26Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Open folder
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M26,28H6a2.0021,2.0021,0,0,1-2-2V11A2.0021,2.0021,0,0,1,6,9h5.6665a2.0119,2.0119,0,0,1,1.2007.4L16.3335,12H26a2.0021,2.0021,0,0,1,2,2V26A2.0021,2.0021,0,0,1,26,28ZM11.6665,11H5.9985L6,26H26V14H15.6665Z"></path><path d="M28,9H17.6665l-4-3H6V4h7.6665a2.0119,2.0119,0,0,1,1.2007.4L18.3335,7H28Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Folders
  </span>
</cds-icon-button>
  <cds-ai-label-action-button kind="primary" link-role="button" size="lg" slot="actions" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  View Literature
</cds-ai-label-action-button>


  
  
</cds-ai-label>
  

          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Expandable row content</h6>
  <div>Expandable content for Load Balancer 5</div>

          
        
</cds-table-expanded-row>
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        AI labels with expansion
      
</cds-table-header-description>
    
  </div>
  
</cds-table>
</div>
```

### compact

```heex
<.data_table
  size="sm"
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
  expandable
  batch_expansion
  with_row_ai_labels
>
  <:title>DataTable</:title>
  <:description>Compact AI expansion</:description>
  <:row_decorator :let={row}>
    <%= if rem(row.id, 2) == 0 do %>
      <Storybook.CarbonComponents.DataTable.Shared.ai_label />
    <% end %>
  </:row_decorator>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
  <:expanded_row :let={row}>
    <h6>Details</h6>
    <div><%= Storybook.CarbonComponents.DataTable.Shared.expanded_content(row) %></div>
  </:expanded_row>
</.data_table>
```

```html
<div id="ai-label-expansion-single-compact-component">
  <cds-table batch-expansion expandable headerCount="0" locale="en" size="sm" use-zebra-styles with-row-ai-labels id="ai-label-expansion-single-compact" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row batch-expansion>
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="ai-label-expansion-single-compactbody">
  
      
        <cds-table-row batch-expansion id="1" data-row-id="1">
  
          
            
  

          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Details</h6>
  <div>Expandable content for Load Balancer 3</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion id="2" data-row-id="2">
  
          
            
  
    <cds-ai-label ai-text="AI" alignment="bottom-left" alignment-axis-offset="0" button-label="Show information" kind="" revert-label="Revert to AI input" size="xs" slot="ai-label">
  
  
  
  
  
  <div slot="body-text">
    <p class="secondary">AI Explained</p>
    <h2 class="ai-label-heading">84%</h2>
    <p class="secondary bold">Confidence score</p>
    <p class="secondary">
      Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
    </p>
    <hr>
    <p class="secondary">Model type</p>
    <p class="bold">Foundation model</p>
  </div>

  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M15.5,7.8C14.3,4.7,11.3,2.6,8,2.5C4.7,2.6,1.7,4.7,0.5,7.8c0,0.1,0,0.2,0,0.3c1.2,3.1,4.1,5.2,7.5,5.3	c3.3-0.1,6.3-2.2,7.5-5.3C15.5,8.1,15.5,7.9,15.5,7.8z M8,12.5c-2.7,0-5.4-2-6.5-4.5c1-2.5,3.8-4.5,6.5-4.5s5.4,2,6.5,4.5	C13.4,10.5,10.6,12.5,8,12.5z"></path><path d="M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.3,3-3S9.7,5,8,5z M8,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,10,8,10z"></path>
    </svg>
    
  <span slot="tooltip-content">
    View
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M28,8H20.8284L17.4143,4.5859A2,2,0,0,0,16,4H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10A2,2,0,0,0,28,8ZM8,26V14h8v6.17l-2.59-2.58L12,19l5,5,5-5-1.41-1.41L18,20.17V14a2.0025,2.0025,0,0,0-2-2H8a2.0025,2.0025,0,0,0-2,2V26H4V6H16l4,4h8v2H22v2h6V26Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Open folder
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M26,28H6a2.0021,2.0021,0,0,1-2-2V11A2.0021,2.0021,0,0,1,6,9h5.6665a2.0119,2.0119,0,0,1,1.2007.4L16.3335,12H26a2.0021,2.0021,0,0,1,2,2V26A2.0021,2.0021,0,0,1,26,28ZM11.6665,11H5.9985L6,26H26V14H15.6665Z"></path><path d="M28,9H17.6665l-4-3H6V4h7.6665a2.0119,2.0119,0,0,1,1.2007.4L18.3335,7H28Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Folders
  </span>
</cds-icon-button>
  <cds-ai-label-action-button kind="primary" link-role="button" size="lg" slot="actions" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  View Literature
</cds-ai-label-action-button>


  
  
</cds-ai-label>
  

          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Details</h6>
  <div>Expandable content for Load Balancer 1</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion id="3" data-row-id="3">
  
          
            
  

          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Details</h6>
  <div>Expandable content for Load Balancer 2</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion id="4" data-row-id="4">
  
          
            
  
    <cds-ai-label ai-text="AI" alignment="bottom-left" alignment-axis-offset="0" button-label="Show information" kind="" revert-label="Revert to AI input" size="xs" slot="ai-label">
  
  
  
  
  
  <div slot="body-text">
    <p class="secondary">AI Explained</p>
    <h2 class="ai-label-heading">84%</h2>
    <p class="secondary bold">Confidence score</p>
    <p class="secondary">
      Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
    </p>
    <hr>
    <p class="secondary">Model type</p>
    <p class="bold">Foundation model</p>
  </div>

  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M15.5,7.8C14.3,4.7,11.3,2.6,8,2.5C4.7,2.6,1.7,4.7,0.5,7.8c0,0.1,0,0.2,0,0.3c1.2,3.1,4.1,5.2,7.5,5.3	c3.3-0.1,6.3-2.2,7.5-5.3C15.5,8.1,15.5,7.9,15.5,7.8z M8,12.5c-2.7,0-5.4-2-6.5-4.5c1-2.5,3.8-4.5,6.5-4.5s5.4,2,6.5,4.5	C13.4,10.5,10.6,12.5,8,12.5z"></path><path d="M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.3,3-3S9.7,5,8,5z M8,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,10,8,10z"></path>
    </svg>
    
  <span slot="tooltip-content">
    View
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M28,8H20.8284L17.4143,4.5859A2,2,0,0,0,16,4H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10A2,2,0,0,0,28,8ZM8,26V14h8v6.17l-2.59-2.58L12,19l5,5,5-5-1.41-1.41L18,20.17V14a2.0025,2.0025,0,0,0-2-2H8a2.0025,2.0025,0,0,0-2,2V26H4V6H16l4,4h8v2H22v2h6V26Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Open folder
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M26,28H6a2.0021,2.0021,0,0,1-2-2V11A2.0021,2.0021,0,0,1,6,9h5.6665a2.0119,2.0119,0,0,1,1.2007.4L16.3335,12H26a2.0021,2.0021,0,0,1,2,2V26A2.0021,2.0021,0,0,1,26,28ZM11.6665,11H5.9985L6,26H26V14H15.6665Z"></path><path d="M28,9H17.6665l-4-3H6V4h7.6665a2.0119,2.0119,0,0,1,1.2007.4L18.3335,7H28Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Folders
  </span>
</cds-icon-button>
  <cds-ai-label-action-button kind="primary" link-role="button" size="lg" slot="actions" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  View Literature
</cds-ai-label-action-button>


  
  
</cds-ai-label>
  

          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Details</h6>
  <div>Expandable content for Load Balancer 6</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion id="5" data-row-id="5">
  
          
            
  

          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Details</h6>
  <div>Expandable content for Load Balancer 4</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion id="6" data-row-id="6">
  
          
            
  
    <cds-ai-label ai-text="AI" alignment="bottom-left" alignment-axis-offset="0" button-label="Show information" kind="" revert-label="Revert to AI input" size="xs" slot="ai-label">
  
  
  
  
  
  <div slot="body-text">
    <p class="secondary">AI Explained</p>
    <h2 class="ai-label-heading">84%</h2>
    <p class="secondary bold">Confidence score</p>
    <p class="secondary">
      Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
    </p>
    <hr>
    <p class="secondary">Model type</p>
    <p class="bold">Foundation model</p>
  </div>

  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M15.5,7.8C14.3,4.7,11.3,2.6,8,2.5C4.7,2.6,1.7,4.7,0.5,7.8c0,0.1,0,0.2,0,0.3c1.2,3.1,4.1,5.2,7.5,5.3	c3.3-0.1,6.3-2.2,7.5-5.3C15.5,8.1,15.5,7.9,15.5,7.8z M8,12.5c-2.7,0-5.4-2-6.5-4.5c1-2.5,3.8-4.5,6.5-4.5s5.4,2,6.5,4.5	C13.4,10.5,10.6,12.5,8,12.5z"></path><path d="M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.3,3-3S9.7,5,8,5z M8,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,10,8,10z"></path>
    </svg>
    
  <span slot="tooltip-content">
    View
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M28,8H20.8284L17.4143,4.5859A2,2,0,0,0,16,4H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10A2,2,0,0,0,28,8ZM8,26V14h8v6.17l-2.59-2.58L12,19l5,5,5-5-1.41-1.41L18,20.17V14a2.0025,2.0025,0,0,0-2-2H8a2.0025,2.0025,0,0,0-2,2V26H4V6H16l4,4h8v2H22v2h6V26Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Open folder
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M26,28H6a2.0021,2.0021,0,0,1-2-2V11A2.0021,2.0021,0,0,1,6,9h5.6665a2.0119,2.0119,0,0,1,1.2007.4L16.3335,12H26a2.0021,2.0021,0,0,1,2,2V26A2.0021,2.0021,0,0,1,26,28ZM11.6665,11H5.9985L6,26H26V14H15.6665Z"></path><path d="M28,9H17.6665l-4-3H6V4h7.6665a2.0119,2.0119,0,0,1,1.2007.4L18.3335,7H28Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Folders
  </span>
</cds-icon-button>
  <cds-ai-label-action-button kind="primary" link-role="button" size="lg" slot="actions" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  View Literature
</cds-ai-label-action-button>


  
  
</cds-ai-label>
  

          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Details</h6>
  <div>Expandable content for Load Balancer 5</div>

          
        
</cds-table-expanded-row>
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Compact AI expansion
      
</cds-table-header-description>
    
  </div>
  
</cds-table>
</div>
```


## ai_label_sort

### sorting

```heex
<.data_table
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
  sortable
>
  <:title>DataTable</:title>
  <:description>AI label in header with sorting</:description>
  <:col label="Name" :let={row}><%= row.name %></:col>
  <:col label="Protocol" :let={row}><%= row.protocol %></:col>
  <:col label="Port" :let={row}><%= row.port %></:col>
  <:col label="Rule" :let={row}><%= row.rule %></:col>
  <:col label={fn -> Storybook.CarbonComponents.DataTable.Shared.ai_label_header(%{}) end} :let={row}><%= row.group %></:col>
  <:col label="Status" :let={row}><%= row.status %></:col>
</.data_table>
```

```html
<div id="ai-label-sort-single-sorting-component">
  <cds-table headerCount="0" is-sortable locale="en" size="lg" use-zebra-styles id="ai-label-sort-single-sorting" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row>
  
        <cds-table-header-cell is-sortable data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="4">
  
          <span>Attached groups</span>
<cds-ai-label ai-text="AI" alignment="bottom-start" alignment-axis-offset="0" button-label="Show information" kind="inline" revert-label="Revert to AI input" size="xs" slot="ai-label">
  
  <div slot="body-text">
    
    <p class="secondary">AI Explained</p>
    <p class="secondary">Sorting guidance</p>
  
  </div>
  
  
    <cds-ai-label-action-button kind="primary" link-role="button" size="lg" slot="actions" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  
      View details
    
</cds-ai-label-action-button>
  
  
  

  
  
</cds-ai-label>
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="ai-label-sort-single-sortingbody">
  
      
        <cds-table-row id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              Load Balancer 3
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              HTTP
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              3000
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Round robin
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Kevin&#39;s VM Groups
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Disabled
            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              Load Balancer 1
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              HTTP
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              443
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Round robin
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Maureen&#39;s VM Groups
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Starting
            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              Load Balancer 2
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              HTTP
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              80
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              DNS delegation
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Andrew&#39;s VM Groups
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Active
            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              Load Balancer 6
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              HTTP
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              3000
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Round robin
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Marc&#39;s VM Groups
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Disabled
            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              Load Balancer 4
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              HTTP
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              443
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Round robin
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Mel&#39;s VM Groups
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Starting
            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              Load Balancer 5
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              HTTP
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              80
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              DNS delegation
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Ronja&#39;s VM Groups
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Active
            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        AI label in header with sorting
      
</cds-table-header-description>
    
  </div>
  
</cds-table>
</div>
```

### compact

```heex
<.data_table
  size="sm"
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
  sortable
>
  <:title>DataTable</:title>
  <:description>Compact AI label header</:description>
  <:col label="Name" :let={row}><%= row.name %></:col>
  <:col label="Protocol" :let={row}><%= row.protocol %></:col>
  <:col label="Port" :let={row}><%= row.port %></:col>
  <:col label="Rule" :let={row}><%= row.rule %></:col>
  <:col label={fn -> Storybook.CarbonComponents.DataTable.Shared.ai_label_header(%{}) end} :let={row}><%= row.group %></:col>
  <:col label="Status" :let={row}><%= row.status %></:col>
</.data_table>
```

```html
<div id="ai-label-sort-single-compact-component">
  <cds-table headerCount="0" is-sortable locale="en" size="sm" use-zebra-styles id="ai-label-sort-single-compact" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row>
  
        <cds-table-header-cell is-sortable data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="4">
  
          <span>Attached groups</span>
<cds-ai-label ai-text="AI" alignment="bottom-start" alignment-axis-offset="0" button-label="Show information" kind="inline" revert-label="Revert to AI input" size="xs" slot="ai-label">
  
  <div slot="body-text">
    
    <p class="secondary">AI Explained</p>
    <p class="secondary">Sorting guidance</p>
  
  </div>
  
  
    <cds-ai-label-action-button kind="primary" link-role="button" size="lg" slot="actions" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  
      View details
    
</cds-ai-label-action-button>
  
  
  

  
  
</cds-ai-label>
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="ai-label-sort-single-compactbody">
  
      
        <cds-table-row id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              Load Balancer 3
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              HTTP
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              3000
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Round robin
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Kevin&#39;s VM Groups
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Disabled
            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              Load Balancer 1
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              HTTP
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              443
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Round robin
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Maureen&#39;s VM Groups
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Starting
            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              Load Balancer 2
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              HTTP
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              80
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              DNS delegation
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Andrew&#39;s VM Groups
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Active
            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              Load Balancer 6
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              HTTP
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              3000
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Round robin
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Marc&#39;s VM Groups
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Disabled
            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              Load Balancer 4
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              HTTP
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              443
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Round robin
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Mel&#39;s VM Groups
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Starting
            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              Load Balancer 5
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              HTTP
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              80
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              DNS delegation
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Ronja&#39;s VM Groups
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              Active
            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Compact AI label header
      
</cds-table-header-description>
    
  </div>
  
</cds-table>
</div>
```


## basic

### default

```heex
<.data_table
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
>
  <:title>DataTable</:title>
  <:description>Basic</:description>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
</.data_table>
```

```html
<div id="basic-single-default-component">
  <cds-table headerCount="0" locale="en" size="lg" use-zebra-styles id="basic-single-default" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row>
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="basic-single-defaultbody">
  
      
        <cds-table-row id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Basic
      
</cds-table-header-description>
    
  </div>
  
</cds-table>
</div>
```

### compact

```heex
<.data_table
  size="sm"
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
>
  <:title>DataTable</:title>
  <:description>Compact</:description>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
</.data_table>
```

```html
<div id="basic-single-compact-component">
  <cds-table headerCount="0" locale="en" size="sm" id="basic-single-compact" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row>
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="basic-single-compactbody">
  
      
        <cds-table-row id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Compact
      
</cds-table-header-description>
    
  </div>
  
</cds-table>
</div>
```


## batch_actions

### batch_actions

```heex
<.data_table
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
  selectable
  selection_name="carbon-batch-actions"
>
  <:title>DataTable</:title>
  <:description>With batch actions</:description>
  <:toolbar>
    <Graphene.CarbonComponents.table_toolbar>
      <Graphene.CarbonComponents.table_batch_actions total_rows_count="6">
        <Graphene.CarbonComponents.button kind="ghost">Delete</Graphene.CarbonComponents.button>
        <Graphene.CarbonComponents.button kind="ghost">Save</Graphene.CarbonComponents.button>
        <Graphene.CarbonComponents.button kind="ghost" href="#">Download</Graphene.CarbonComponents.button>
      </Graphene.CarbonComponents.table_batch_actions>
      <Graphene.CarbonComponents.table_toolbar_content has_batch_actions>
        <Graphene.CarbonComponents.table_toolbar_search placeholder="Filter table" />
        <Graphene.CarbonComponents.overflow_menu toolbar_action>
          <:icon>
            <Storybook.CarbonComponents.DataTable.Shared.overflow_icon />
          </:icon>
          <:tooltip_content>Settings</:tooltip_content>
          <:item>Action 1</:item>
          <:item>Action 2</:item>
          <:item>Action 3</:item>
        </Graphene.CarbonComponents.overflow_menu>
        <Graphene.CarbonComponents.button>Add new</Graphene.CarbonComponents.button>
      </Graphene.CarbonComponents.table_toolbar_content>
    </Graphene.CarbonComponents.table_toolbar>
  </:toolbar>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
</.data_table>
```

```html
<div id="batch-actions-single-batch-actions-component">
  <cds-table headerCount="0" is-selectable locale="en" size="lg" use-zebra-styles id="batch-actions-single-batch-actions" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row selection-label="Select all" selection-name="carbon-batch-actions">
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="batch-actions-single-batch-actionsbody">
  
      
        <cds-table-row selection-label="Select row" selection-name="carbon-batch-actions" selection-value="1" id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-batch-actions" selection-value="2" id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-batch-actions" selection-value="3" id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-batch-actions" selection-value="4" id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-batch-actions" selection-value="5" id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-batch-actions" selection-value="6" id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        With batch actions
      
</cds-table-header-description>
    
  </div>
  <div slot="toolbar">
    
  <cds-table-toolbar>
  
    <cds-table-batch-actions selected-rows-count="0" size="lg" total-rows-count="6">
  
      <cds-button kind="ghost" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Delete
  
</cds-button>
      <cds-button kind="ghost" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Save
  
</cds-button>
      <cds-button href="#" kind="ghost" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Download
  
</cds-button>
    
</cds-table-batch-actions>
    <cds-table-toolbar-content has-batch-actions>
  
      <cds-table-toolbar-search autocomplete="off" placeholder="Filter table" size="lg">
  
</cds-table-toolbar-search>
      <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
        
  </span>
  <span slot="tooltip-content">
    Settings
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Action 1
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Action 2
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Action 3
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>
      <cds-button kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Add new
  
</cds-button>
    
</cds-table-toolbar-content>
  
</cds-table-toolbar>

  </div>
</cds-table>
</div>
```

### compact

```heex
<.data_table
  size="sm"
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
  selectable
  selection_name="carbon-batch-actions"
>
  <:title>DataTable</:title>
  <:description>Compact batch actions</:description>
  <:toolbar>
    <Graphene.CarbonComponents.table_toolbar>
      <Graphene.CarbonComponents.table_batch_actions total_rows_count="6">
        <Graphene.CarbonComponents.button kind="ghost">Delete</Graphene.CarbonComponents.button>
        <Graphene.CarbonComponents.button kind="ghost">Save</Graphene.CarbonComponents.button>
      </Graphene.CarbonComponents.table_batch_actions>
      <Graphene.CarbonComponents.table_toolbar_content has_batch_actions>
        <Graphene.CarbonComponents.table_toolbar_search placeholder="Filter table" />
        <Graphene.CarbonComponents.overflow_menu toolbar_action>
          <:icon>
            <Storybook.CarbonComponents.DataTable.Shared.overflow_icon />
          </:icon>
          <:tooltip_content>Settings</:tooltip_content>
          <:item>Action 1</:item>
          <:item>Action 2</:item>
        </Graphene.CarbonComponents.overflow_menu>
      </Graphene.CarbonComponents.table_toolbar_content>
    </Graphene.CarbonComponents.table_toolbar>
  </:toolbar>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
</.data_table>
```

```html
<div id="batch-actions-single-compact-component">
  <cds-table headerCount="0" is-selectable locale="en" size="sm" use-zebra-styles id="batch-actions-single-compact" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row selection-label="Select all" selection-name="carbon-batch-actions">
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="batch-actions-single-compactbody">
  
      
        <cds-table-row selection-label="Select row" selection-name="carbon-batch-actions" selection-value="1" id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-batch-actions" selection-value="2" id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-batch-actions" selection-value="3" id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-batch-actions" selection-value="4" id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-batch-actions" selection-value="5" id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-batch-actions" selection-value="6" id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Compact batch actions
      
</cds-table-header-description>
    
  </div>
  <div slot="toolbar">
    
  <cds-table-toolbar>
  
    <cds-table-batch-actions selected-rows-count="0" size="lg" total-rows-count="6">
  
      <cds-button kind="ghost" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Delete
  
</cds-button>
      <cds-button kind="ghost" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Save
  
</cds-button>
    
</cds-table-batch-actions>
    <cds-table-toolbar-content has-batch-actions>
  
      <cds-table-toolbar-search autocomplete="off" placeholder="Filter table" size="lg">
  
</cds-table-toolbar-search>
      <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
        
  </span>
  <span slot="tooltip-content">
    Settings
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Action 1
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Action 2
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>
    
</cds-table-toolbar-content>
  
</cds-table-toolbar>

  </div>
</cds-table>
</div>
```


## batch_expansion

### batch_expansion

```heex
<.data_table
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
  expandable
  batch_expansion
>
  <:title>DataTable</:title>
  <:description>Batch expansion</:description>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
  <:expanded_row :let={row}>
    <h6>Expandable row content</h6>
    <div><%= Storybook.CarbonComponents.DataTable.Shared.expanded_content(row) %></div>
  </:expanded_row>
</.data_table>
```

```html
<div id="batch-expansion-single-batch-expansion-component">
  <cds-table batch-expansion expandable headerCount="0" locale="en" size="lg" use-zebra-styles id="batch-expansion-single-batch-expansion" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row batch-expansion>
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="batch-expansion-single-batch-expansionbody">
  
      
        <cds-table-row batch-expansion id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Expandable row content</h6>
  <div>Expandable content for Load Balancer 3</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Expandable row content</h6>
  <div>Expandable content for Load Balancer 1</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Expandable row content</h6>
  <div>Expandable content for Load Balancer 2</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Expandable row content</h6>
  <div>Expandable content for Load Balancer 6</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Expandable row content</h6>
  <div>Expandable content for Load Balancer 4</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Expandable row content</h6>
  <div>Expandable content for Load Balancer 5</div>

          
        
</cds-table-expanded-row>
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Batch expansion
      
</cds-table-header-description>
    
  </div>
  
</cds-table>
</div>
```

### expandable_only

```heex
<.data_table
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
  expandable
>
  <:title>DataTable</:title>
  <:description>Expandable rows</:description>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
  <:expanded_row :let={row}>
    <h6>Details</h6>
    <div><%= Storybook.CarbonComponents.DataTable.Shared.expanded_content(row) %></div>
  </:expanded_row>
</.data_table>
```

```html
<div id="batch-expansion-single-expandable-only-component">
  <cds-table expandable headerCount="0" locale="en" size="lg" use-zebra-styles id="batch-expansion-single-expandable-only" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row>
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="batch-expansion-single-expandable-onlybody">
  
      
        <cds-table-row id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Details</h6>
  <div>Expandable content for Load Balancer 3</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Details</h6>
  <div>Expandable content for Load Balancer 1</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Details</h6>
  <div>Expandable content for Load Balancer 2</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Details</h6>
  <div>Expandable content for Load Balancer 6</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Details</h6>
  <div>Expandable content for Load Balancer 4</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Details</h6>
  <div>Expandable content for Load Balancer 5</div>

          
        
</cds-table-expanded-row>
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Expandable rows
      
</cds-table-header-description>
    
  </div>
  
</cds-table>
</div>
```


## dynamic

### example

```heex
<div class="psb-sandbox">
      <Graphene.CarbonComponents.button phx-click="add-row">Add row</Graphene.CarbonComponents.button>
    </div>

    <Graphene.CarbonComponents.data_table
      id="carbon-dynamic-table"
      rows={@rows}
      row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
      phx_update={false}
    >
      <:title>DataTable</:title>
      <:description>Dynamic rows</:description>

      <:col :for={col <- @columns} :let={row} label={col.label}>
        <%= Map.get(row, col.key) %>
      </:col>
    </Graphene.CarbonComponents.data_table>
```

```html
<div class="psb-sandbox">
  <cds-button kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" phx-click="add-row">
  Add row
  
</cds-button>
</div>

<div id="carbon-dynamic-table-component">
  <cds-table headerCount="0" locale="en" size="lg" use-zebra-styles id="carbon-dynamic-table" phx-hook="BasicComponentsTable" phx-target="1">
  
    <cds-table-head>
  
      <cds-table-header-row>
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="carbon-dynamic-tablebody">
  
      
        <cds-table-row id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Load Balancer 3
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    HTTP
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    3000
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Round robin
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Kevin&#39;s VM Groups
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Disabled
  
            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Load Balancer 1
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    HTTP
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    443
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Round robin
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Maureen&#39;s VM Groups
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Starting
  
            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Load Balancer 2
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    HTTP
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    80
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    DNS delegation
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Andrew&#39;s VM Groups
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Active
  
            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Dynamic rows
      
</cds-table-header-description>
    
  </div>
  
</cds-table>
</div>
```


## expansion

### expandable

```heex
<.data_table
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
  expandable
>
  <:title>DataTable</:title>
  <:description>Expandable rows</:description>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
  <:expanded_row :let={row}>
    <h6>Expandable row content</h6>
    <div><%= Storybook.CarbonComponents.DataTable.Shared.expanded_content(row) %></div>
  </:expanded_row>
</.data_table>
```

```html
<div id="expansion-single-expandable-component">
  <cds-table expandable headerCount="0" locale="en" size="lg" use-zebra-styles id="expansion-single-expandable" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row>
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="expansion-single-expandablebody">
  
      
        <cds-table-row id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Expandable row content</h6>
  <div>Expandable content for Load Balancer 3</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Expandable row content</h6>
  <div>Expandable content for Load Balancer 1</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Expandable row content</h6>
  <div>Expandable content for Load Balancer 2</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Expandable row content</h6>
  <div>Expandable content for Load Balancer 6</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Expandable row content</h6>
  <div>Expandable content for Load Balancer 4</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Expandable row content</h6>
  <div>Expandable content for Load Balancer 5</div>

          
        
</cds-table-expanded-row>
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Expandable rows
      
</cds-table-header-description>
    
  </div>
  
</cds-table>
</div>
```

### compact

```heex
<.data_table
  size="sm"
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
  expandable
>
  <:title>DataTable</:title>
  <:description>Compact expandable</:description>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
  <:expanded_row :let={row}>
    <h6>Details</h6>
    <div><%= Storybook.CarbonComponents.DataTable.Shared.expanded_content(row) %></div>
  </:expanded_row>
</.data_table>
```

```html
<div id="expansion-single-compact-component">
  <cds-table expandable headerCount="0" locale="en" size="sm" id="expansion-single-compact" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row>
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="expansion-single-compactbody">
  
      
        <cds-table-row id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Details</h6>
  <div>Expandable content for Load Balancer 3</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Details</h6>
  <div>Expandable content for Load Balancer 1</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Details</h6>
  <div>Expandable content for Load Balancer 2</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Details</h6>
  <div>Expandable content for Load Balancer 6</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Details</h6>
  <div>Expandable content for Load Balancer 4</div>

          
        
</cds-table-expanded-row>
      
        <cds-table-row id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
  <h6>Details</h6>
  <div>Expandable content for Load Balancer 5</div>

          
        
</cds-table-expanded-row>
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Compact expandable
      
</cds-table-header-description>
    
  </div>
  
</cds-table>
</div>
```


## filtering

### persistent

```heex
<.data_table
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
>
  <:title>DataTable</:title>
  <:description>With filtering</:description>
  <:toolbar>
    <Graphene.CarbonComponents.table_toolbar>
      <Graphene.CarbonComponents.table_toolbar_content>
        <Graphene.CarbonComponents.table_toolbar_search placeholder="Filter table" persistent={true} />
        <Graphene.CarbonComponents.overflow_menu toolbar_action>
          <:icon>
            <Storybook.CarbonComponents.DataTable.Shared.overflow_icon />
          </:icon>
          <:tooltip_content>Settings</:tooltip_content>
          <:item>Action 1</:item>
          <:item>Action 2</:item>
          <:item>Action 3</:item>
        </Graphene.CarbonComponents.overflow_menu>
        <Graphene.CarbonComponents.button>Primary button</Graphene.CarbonComponents.button>
      </Graphene.CarbonComponents.table_toolbar_content>
    </Graphene.CarbonComponents.table_toolbar>
  </:toolbar>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
</.data_table>
```

```html
<div id="filtering-single-persistent-component">
  <cds-table headerCount="0" locale="en" size="lg" use-zebra-styles id="filtering-single-persistent" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row>
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="filtering-single-persistentbody">
  
      
        <cds-table-row id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        With filtering
      
</cds-table-header-description>
    
  </div>
  <div slot="toolbar">
    
  <cds-table-toolbar>
  
    <cds-table-toolbar-content>
  
      <cds-table-toolbar-search autocomplete="off" persistent placeholder="Filter table" size="lg">
  
</cds-table-toolbar-search>
      <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
        
  </span>
  <span slot="tooltip-content">
    Settings
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Action 1
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Action 2
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Action 3
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>
      <cds-button kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Primary button
  
</cds-button>
    
</cds-table-toolbar-content>
  
</cds-table-toolbar>

  </div>
</cds-table>
</div>
```

### compact

```heex
<.data_table
  size="sm"
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
>
  <:title>DataTable</:title>
  <:description>Compact filter</:description>
  <:toolbar>
    <Graphene.CarbonComponents.table_toolbar>
      <Graphene.CarbonComponents.table_toolbar_content>
        <Graphene.CarbonComponents.table_toolbar_search placeholder="Filter table" persistent={true} />
        <Graphene.CarbonComponents.overflow_menu toolbar_action>
          <:icon>
            <Storybook.CarbonComponents.DataTable.Shared.overflow_icon />
          </:icon>
          <:tooltip_content>Settings</:tooltip_content>
          <:item>Action 1</:item>
          <:item>Action 2</:item>
        </Graphene.CarbonComponents.overflow_menu>
      </Graphene.CarbonComponents.table_toolbar_content>
    </Graphene.CarbonComponents.table_toolbar>
  </:toolbar>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
</.data_table>
```

```html
<div id="filtering-single-compact-component">
  <cds-table headerCount="0" locale="en" size="sm" use-zebra-styles id="filtering-single-compact" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row>
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="filtering-single-compactbody">
  
      
        <cds-table-row id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Compact filter
      
</cds-table-header-description>
    
  </div>
  <div slot="toolbar">
    
  <cds-table-toolbar>
  
    <cds-table-toolbar-content>
  
      <cds-table-toolbar-search autocomplete="off" persistent placeholder="Filter table" size="lg">
  
</cds-table-toolbar-search>
      <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
        
  </span>
  <span slot="tooltip-content">
    Settings
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Action 1
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Action 2
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>
    
</cds-table-toolbar-content>
  
</cds-table-toolbar>

  </div>
</cds-table>
</div>
```


## interactivity

### example

```heex
<Graphene.CarbonComponents.data_table
      id="carbon-events-table"
      rows={@rows}
      row_id={&Storybook.CarbonComponents.DataTable.Shared.row_id/1}
      selectable={true}
      sortable={true}
      expandable={true}
      batch_expansion={true}
      selection_name="carbon-events"
      with_row_ai_labels={true}
      on_row_selected={event_handler("row_selected")}
      on_row_all_selected={event_handler("row_all_selected")}
      on_sorted={event_handler("sorted")}
      on_filtered={event_handler("filtered")}
      on_search={event_handler("search")}
      on_batch_cancel={event_handler("batch_cancel")}
    >
      <:title>DataTable</:title>
      <:description>Advanced interactivity with callbacks</:description>
      <:toolbar>
        <Graphene.CarbonComponents.table_toolbar>
          <Graphene.CarbonComponents.table_batch_actions total_rows_count="6">
            <Graphene.CarbonComponents.button kind="ghost">Delete</Graphene.CarbonComponents.button>
            <Graphene.CarbonComponents.button kind="ghost">Save</Graphene.CarbonComponents.button>
            <Graphene.CarbonComponents.button kind="ghost" href="#">Download</Graphene.CarbonComponents.button>
          </Graphene.CarbonComponents.table_batch_actions>
          <Graphene.CarbonComponents.table_toolbar_content has_batch_actions>
            <Graphene.CarbonComponents.table_toolbar_search placeholder="Filter table" />
            <Graphene.CarbonComponents.overflow_menu toolbar_action>
              <:icon>
                <Storybook.CarbonComponents.DataTable.Shared.overflow_icon />
              </:icon>
              <:tooltip_content>Settings</:tooltip_content>
              <:item>Action 1</:item>
              <:item>Action 2</:item>
              <:item>Action 3</:item>
            </Graphene.CarbonComponents.overflow_menu>
            <Graphene.CarbonComponents.button>Add new</Graphene.CarbonComponents.button>
          </Graphene.CarbonComponents.table_toolbar_content>
        </Graphene.CarbonComponents.table_toolbar>
      </:toolbar>

      <:row_decorator :let={row}>
        <%= if rem(row.id, 2) == 0 do %>
          <Storybook.CarbonComponents.DataTable.Shared.ai_label />
        <% end %>
      </:row_decorator>

      <:col :let={row} :for={col <- @columns} label={col.label}>
        {Map.get(row, col.key)}
      </:col>

      <:action :let={_row}>
        <Graphene.CarbonComponents.overflow_menu toolbar_action flipped>
          <:icon>
            <Storybook.CarbonComponents.DataTable.Shared.overflow_icon />
          </:icon>
          <:tooltip_content>Options</:tooltip_content>
          <:item>Stop app</:item>
          <:item>Restart app</:item>
          <:item>Rename</:item>
        </Graphene.CarbonComponents.overflow_menu>
      </:action>

      <:expanded_row :let={row}>
        <h6>Expandable row content</h6>
        <div>{Storybook.CarbonComponents.DataTable.Shared.expanded_content(row)}</div>
      </:expanded_row>
    </Graphene.CarbonComponents.data_table>

    <h4>Event log</h4>
    <pre id="carbon-events-log">
      <%= for log <- Enum.reverse(@logs) do %>
        [<%= log.type %>] <%= inspect(log.payload) %>
      <% end %>
    </pre>

    <h4>Callback controls</h4>
    <p>These buttons dispatch the same events as the built-in controls.</p>
    <div id="carbon-events-simulator">
      <%= for {label, detail} <- simulator_events() do %>
        <Graphene.CarbonComponents.button
          kind="tertiary"
          phx-click={
            JS.dispatch(
              "graphene:table-simulate",
              detail: detail,
              to: "#carbon-events-table"
            )
          }
        >
          {label}
        </Graphene.CarbonComponents.button>
      <% end %>
    </div>
```

```html
<div id="carbon-events-table-component">
  <cds-table batch-expansion expandable headerCount="0" is-selectable is-sortable locale="en" size="lg" use-zebra-styles with-row-ai-labels id="carbon-events-table" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row batch-expansion selection-label="Select all" selection-name="carbon-events">
  
        <cds-table-header-cell is-sortable data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        <cds-table-header-cell>
  
          <span class="sr-only">Actions</span>
        
</cds-table-header-cell>
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="carbon-events-tablebody">
  
      
        <cds-table-row batch-expansion selection-label="Select row" selection-name="carbon-events" selection-value="row-1" id="row-1" data-row-id="row-1">
  
          
            
    
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Load Balancer 3
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    HTTP
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    3000
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Round robin
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Kevin&#39;s VM Groups
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Disabled
  
            
</cds-table-cell-content>
          
</cds-table-cell>
          <cds-table-cell>
  
            <div>
              
                
    <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" flipped index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
      
  </span>
  <span slot="tooltip-content">
    Options
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Stop app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Restart app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Rename
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>
  
              
            </div>
          
</cds-table-cell>
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
    <h6>Expandable row content</h6>
    <div>Expandable content for Load Balancer 3</div>
  
          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion selection-label="Select row" selection-name="carbon-events" selection-value="row-2" id="row-2" data-row-id="row-2">
  
          
            
    
      <cds-ai-label ai-text="AI" alignment="bottom-left" alignment-axis-offset="0" button-label="Show information" kind="" revert-label="Revert to AI input" size="xs" slot="ai-label">
  
  
  
  
  
  <div slot="body-text">
    <p class="secondary">AI Explained</p>
    <h2 class="ai-label-heading">84%</h2>
    <p class="secondary bold">Confidence score</p>
    <p class="secondary">
      Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
    </p>
    <hr>
    <p class="secondary">Model type</p>
    <p class="bold">Foundation model</p>
  </div>

  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M15.5,7.8C14.3,4.7,11.3,2.6,8,2.5C4.7,2.6,1.7,4.7,0.5,7.8c0,0.1,0,0.2,0,0.3c1.2,3.1,4.1,5.2,7.5,5.3	c3.3-0.1,6.3-2.2,7.5-5.3C15.5,8.1,15.5,7.9,15.5,7.8z M8,12.5c-2.7,0-5.4-2-6.5-4.5c1-2.5,3.8-4.5,6.5-4.5s5.4,2,6.5,4.5	C13.4,10.5,10.6,12.5,8,12.5z"></path><path d="M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.3,3-3S9.7,5,8,5z M8,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,10,8,10z"></path>
    </svg>
    
  <span slot="tooltip-content">
    View
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M28,8H20.8284L17.4143,4.5859A2,2,0,0,0,16,4H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10A2,2,0,0,0,28,8ZM8,26V14h8v6.17l-2.59-2.58L12,19l5,5,5-5-1.41-1.41L18,20.17V14a2.0025,2.0025,0,0,0-2-2H8a2.0025,2.0025,0,0,0-2,2V26H4V6H16l4,4h8v2H22v2h6V26Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Open folder
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M26,28H6a2.0021,2.0021,0,0,1-2-2V11A2.0021,2.0021,0,0,1,6,9h5.6665a2.0119,2.0119,0,0,1,1.2007.4L16.3335,12H26a2.0021,2.0021,0,0,1,2,2V26A2.0021,2.0021,0,0,1,26,28ZM11.6665,11H5.9985L6,26H26V14H15.6665Z"></path><path d="M28,9H17.6665l-4-3H6V4h7.6665a2.0119,2.0119,0,0,1,1.2007.4L18.3335,7H28Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Folders
  </span>
</cds-icon-button>
  <cds-ai-label-action-button kind="primary" link-role="button" size="lg" slot="actions" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  View Literature
</cds-ai-label-action-button>


  
  
</cds-ai-label>
    
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Load Balancer 1
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    HTTP
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    443
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Round robin
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Maureen&#39;s VM Groups
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Starting
  
            
</cds-table-cell-content>
          
</cds-table-cell>
          <cds-table-cell>
  
            <div>
              
                
    <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" flipped index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
      
  </span>
  <span slot="tooltip-content">
    Options
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Stop app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Restart app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Rename
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>
  
              
            </div>
          
</cds-table-cell>
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
    <h6>Expandable row content</h6>
    <div>Expandable content for Load Balancer 1</div>
  
          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion selection-label="Select row" selection-name="carbon-events" selection-value="row-3" id="row-3" data-row-id="row-3">
  
          
            
    
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Load Balancer 2
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    HTTP
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    80
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    DNS delegation
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Andrew&#39;s VM Groups
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Active
  
            
</cds-table-cell-content>
          
</cds-table-cell>
          <cds-table-cell>
  
            <div>
              
                
    <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" flipped index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
      
  </span>
  <span slot="tooltip-content">
    Options
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Stop app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Restart app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Rename
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>
  
              
            </div>
          
</cds-table-cell>
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
    <h6>Expandable row content</h6>
    <div>Expandable content for Load Balancer 2</div>
  
          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion selection-label="Select row" selection-name="carbon-events" selection-value="row-4" id="row-4" data-row-id="row-4">
  
          
            
    
      <cds-ai-label ai-text="AI" alignment="bottom-left" alignment-axis-offset="0" button-label="Show information" kind="" revert-label="Revert to AI input" size="xs" slot="ai-label">
  
  
  
  
  
  <div slot="body-text">
    <p class="secondary">AI Explained</p>
    <h2 class="ai-label-heading">84%</h2>
    <p class="secondary bold">Confidence score</p>
    <p class="secondary">
      Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
    </p>
    <hr>
    <p class="secondary">Model type</p>
    <p class="bold">Foundation model</p>
  </div>

  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M15.5,7.8C14.3,4.7,11.3,2.6,8,2.5C4.7,2.6,1.7,4.7,0.5,7.8c0,0.1,0,0.2,0,0.3c1.2,3.1,4.1,5.2,7.5,5.3	c3.3-0.1,6.3-2.2,7.5-5.3C15.5,8.1,15.5,7.9,15.5,7.8z M8,12.5c-2.7,0-5.4-2-6.5-4.5c1-2.5,3.8-4.5,6.5-4.5s5.4,2,6.5,4.5	C13.4,10.5,10.6,12.5,8,12.5z"></path><path d="M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.3,3-3S9.7,5,8,5z M8,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,10,8,10z"></path>
    </svg>
    
  <span slot="tooltip-content">
    View
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M28,8H20.8284L17.4143,4.5859A2,2,0,0,0,16,4H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10A2,2,0,0,0,28,8ZM8,26V14h8v6.17l-2.59-2.58L12,19l5,5,5-5-1.41-1.41L18,20.17V14a2.0025,2.0025,0,0,0-2-2H8a2.0025,2.0025,0,0,0-2,2V26H4V6H16l4,4h8v2H22v2h6V26Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Open folder
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M26,28H6a2.0021,2.0021,0,0,1-2-2V11A2.0021,2.0021,0,0,1,6,9h5.6665a2.0119,2.0119,0,0,1,1.2007.4L16.3335,12H26a2.0021,2.0021,0,0,1,2,2V26A2.0021,2.0021,0,0,1,26,28ZM11.6665,11H5.9985L6,26H26V14H15.6665Z"></path><path d="M28,9H17.6665l-4-3H6V4h7.6665a2.0119,2.0119,0,0,1,1.2007.4L18.3335,7H28Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Folders
  </span>
</cds-icon-button>
  <cds-ai-label-action-button kind="primary" link-role="button" size="lg" slot="actions" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  View Literature
</cds-ai-label-action-button>


  
  
</cds-ai-label>
    
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Load Balancer 6
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    HTTP
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    3000
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Round robin
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Marc&#39;s VM Groups
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Disabled
  
            
</cds-table-cell-content>
          
</cds-table-cell>
          <cds-table-cell>
  
            <div>
              
                
    <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" flipped index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
      
  </span>
  <span slot="tooltip-content">
    Options
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Stop app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Restart app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Rename
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>
  
              
            </div>
          
</cds-table-cell>
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
    <h6>Expandable row content</h6>
    <div>Expandable content for Load Balancer 6</div>
  
          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion selection-label="Select row" selection-name="carbon-events" selection-value="row-5" id="row-5" data-row-id="row-5">
  
          
            
    
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Load Balancer 4
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    HTTP
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    443
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Round robin
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Mel&#39;s VM Groups
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Starting
  
            
</cds-table-cell-content>
          
</cds-table-cell>
          <cds-table-cell>
  
            <div>
              
                
    <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" flipped index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
      
  </span>
  <span slot="tooltip-content">
    Options
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Stop app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Restart app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Rename
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>
  
              
            </div>
          
</cds-table-cell>
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
    <h6>Expandable row content</h6>
    <div>Expandable content for Load Balancer 4</div>
  
          
        
</cds-table-expanded-row>
      
        <cds-table-row batch-expansion selection-label="Select row" selection-name="carbon-events" selection-value="row-6" id="row-6" data-row-id="row-6">
  
          
            
    
      <cds-ai-label ai-text="AI" alignment="bottom-left" alignment-axis-offset="0" button-label="Show information" kind="" revert-label="Revert to AI input" size="xs" slot="ai-label">
  
  
  
  
  
  <div slot="body-text">
    <p class="secondary">AI Explained</p>
    <h2 class="ai-label-heading">84%</h2>
    <p class="secondary bold">Confidence score</p>
    <p class="secondary">
      Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
    </p>
    <hr>
    <p class="secondary">Model type</p>
    <p class="bold">Foundation model</p>
  </div>

  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M15.5,7.8C14.3,4.7,11.3,2.6,8,2.5C4.7,2.6,1.7,4.7,0.5,7.8c0,0.1,0,0.2,0,0.3c1.2,3.1,4.1,5.2,7.5,5.3	c3.3-0.1,6.3-2.2,7.5-5.3C15.5,8.1,15.5,7.9,15.5,7.8z M8,12.5c-2.7,0-5.4-2-6.5-4.5c1-2.5,3.8-4.5,6.5-4.5s5.4,2,6.5,4.5	C13.4,10.5,10.6,12.5,8,12.5z"></path><path d="M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.3,3-3S9.7,5,8,5z M8,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,10,8,10z"></path>
    </svg>
    
  <span slot="tooltip-content">
    View
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M28,8H20.8284L17.4143,4.5859A2,2,0,0,0,16,4H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10A2,2,0,0,0,28,8ZM8,26V14h8v6.17l-2.59-2.58L12,19l5,5,5-5-1.41-1.41L18,20.17V14a2.0025,2.0025,0,0,0-2-2H8a2.0025,2.0025,0,0,0-2,2V26H4V6H16l4,4h8v2H22v2h6V26Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Open folder
  </span>
</cds-icon-button>
  <cds-icon-button align="top" close-on-activation enter-delay-ms="100" kind="ghost" leave-delay-ms="100" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" slot="actions">
  
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" slot="icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M26,28H6a2.0021,2.0021,0,0,1-2-2V11A2.0021,2.0021,0,0,1,6,9h5.6665a2.0119,2.0119,0,0,1,1.2007.4L16.3335,12H26a2.0021,2.0021,0,0,1,2,2V26A2.0021,2.0021,0,0,1,26,28ZM11.6665,11H5.9985L6,26H26V14H15.6665Z"></path><path d="M28,9H17.6665l-4-3H6V4h7.6665a2.0119,2.0119,0,0,1,1.2007.4L18.3335,7H28Z"></path>
    </svg>
    
  <span slot="tooltip-content">
    Folders
  </span>
</cds-icon-button>
  <cds-ai-label-action-button kind="primary" link-role="button" size="lg" slot="actions" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  View Literature
</cds-ai-label-action-button>


  
  
</cds-ai-label>
    
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Load Balancer 5
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    HTTP
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    80
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    DNS delegation
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Ronja&#39;s VM Groups
  
            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
    Active
  
            
</cds-table-cell-content>
          
</cds-table-cell>
          <cds-table-cell>
  
            <div>
              
                
    <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" flipped index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
      
  </span>
  <span slot="tooltip-content">
    Options
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Stop app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Restart app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Rename
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>
  
              
            </div>
          
</cds-table-cell>
        
</cds-table-row>
        <cds-table-expanded-row colspan="1">
  
          
            
    <h6>Expandable row content</h6>
    <div>Expandable content for Load Balancer 5</div>
  
          
        
</cds-table-expanded-row>
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Advanced interactivity with callbacks
      
</cds-table-header-description>
    
  </div>
  <div slot="toolbar">
    
    <cds-table-toolbar>
  
      <cds-table-batch-actions selected-rows-count="0" size="lg" total-rows-count="6">
  
        <cds-button kind="ghost" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Delete
  
</cds-button>
        <cds-button kind="ghost" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Save
  
</cds-button>
        <cds-button href="#" kind="ghost" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Download
  
</cds-button>
      
</cds-table-batch-actions>
      <cds-table-toolbar-content has-batch-actions>
  
        <cds-table-toolbar-search autocomplete="off" placeholder="Filter table" size="lg">
  
</cds-table-toolbar-search>
        <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
          
  </span>
  <span slot="tooltip-content">
    Settings
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Action 1
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Action 2
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Action 3
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>
        <cds-button kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Add new
  
</cds-button>
      
</cds-table-toolbar-content>
    
</cds-table-toolbar>
  
  </div>
</cds-table>
</div>

<h4>Event log</h4>
<pre id="carbon-events-log">
  
</pre>

<h4>Callback controls</h4>
<p>These buttons dispatch the same events as the built-in controls.</p>
<div id="carbon-events-simulator">
  
    <cds-button kind="tertiary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" phx-click="[[&quot;dispatch&quot;,{&quot;to&quot;:&quot;#carbon-events-table&quot;,&quot;detail&quot;:{&quot;selected&quot;:true,&quot;action&quot;:&quot;select_row&quot;,&quot;row_id&quot;:&quot;row-2&quot;},&quot;event&quot;:&quot;graphene:table-simulate&quot;}]]">
  
      Select row 2
    
  
</cds-button>
  
    <cds-button kind="tertiary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" phx-click="[[&quot;dispatch&quot;,{&quot;to&quot;:&quot;#carbon-events-table&quot;,&quot;detail&quot;:{&quot;action&quot;:&quot;select_none&quot;},&quot;event&quot;:&quot;graphene:table-simulate&quot;}]]">
  
      Clear selection
    
  
</cds-button>
  
    <cds-button kind="tertiary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" phx-click="[[&quot;dispatch&quot;,{&quot;to&quot;:&quot;#carbon-events-table&quot;,&quot;detail&quot;:{&quot;selected&quot;:true,&quot;action&quot;:&quot;select_all&quot;},&quot;event&quot;:&quot;graphene:table-simulate&quot;}]]">
  
      Select all
    
  
</cds-button>
  
    <cds-button kind="tertiary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" phx-click="[[&quot;dispatch&quot;,{&quot;to&quot;:&quot;#carbon-events-table&quot;,&quot;detail&quot;:{&quot;action&quot;:&quot;sort&quot;,&quot;direction&quot;:&quot;ascending&quot;,&quot;column_index&quot;:0},&quot;event&quot;:&quot;graphene:table-simulate&quot;}]]">
  
      Sort by name (asc)
    
  
</cds-button>
  
    <cds-button kind="tertiary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" phx-click="[[&quot;dispatch&quot;,{&quot;to&quot;:&quot;#carbon-events-table&quot;,&quot;detail&quot;:{&quot;action&quot;:&quot;sort&quot;,&quot;direction&quot;:&quot;descending&quot;,&quot;column_index&quot;:0},&quot;event&quot;:&quot;graphene:table-simulate&quot;}]]">
  
      Sort by name (desc)
    
  
</cds-button>
  
    <cds-button kind="tertiary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" phx-click="[[&quot;dispatch&quot;,{&quot;to&quot;:&quot;#carbon-events-table&quot;,&quot;detail&quot;:{&quot;value&quot;:&quot;Balancer 1&quot;,&quot;action&quot;:&quot;search&quot;},&quot;event&quot;:&quot;graphene:table-simulate&quot;}]]">
  
      Search &#39;Balancer 1&#39;
    
  
</cds-button>
  
    <cds-button kind="tertiary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" phx-click="[[&quot;dispatch&quot;,{&quot;to&quot;:&quot;#carbon-events-table&quot;,&quot;detail&quot;:{&quot;value&quot;:&quot;&quot;,&quot;action&quot;:&quot;search&quot;},&quot;event&quot;:&quot;graphene:table-simulate&quot;}]]">
  
      Clear search
    
  
</cds-button>
  
</div>
```


## overflow_menu_small

### small

```heex
<.data_table
  size="sm"
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
  overflow_menu_on_hover
>
  <:title>DataTable</:title>
  <:description>Small overflow menu</:description>
  <:toolbar>
    <Graphene.CarbonComponents.table_toolbar>
      <Graphene.CarbonComponents.table_toolbar_content>
        <Graphene.CarbonComponents.table_toolbar_search placeholder="Filter table" />
        <Graphene.CarbonComponents.button>Primary button</Graphene.CarbonComponents.button>
      </Graphene.CarbonComponents.table_toolbar_content>
    </Graphene.CarbonComponents.table_toolbar>
  </:toolbar>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
  <:action :let={_row}>
    <Graphene.CarbonComponents.overflow_menu toolbar_action flipped>
      <:icon>
        <Storybook.CarbonComponents.DataTable.Shared.overflow_icon />
      </:icon>
      <:tooltip_content>Options</:tooltip_content>
      <:item>Stop app</:item>
      <:item>Restart app</:item>
      <:item>Rename</:item>
    </Graphene.CarbonComponents.overflow_menu>
  </:action>
</.data_table>
```

```html
<div id="overflow-menu-small-single-small-component">
  <cds-table headerCount="0" locale="en" overflow-menu-on-hover size="sm" use-zebra-styles id="overflow-menu-small-single-small" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row>
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        <cds-table-header-cell>
  
          <span class="sr-only">Actions</span>
        
</cds-table-header-cell>
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="overflow-menu-small-single-smallbody">
  
      
        <cds-table-row id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          <cds-table-cell>
  
            <div>
              
                
  <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" flipped index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
    
  </span>
  <span slot="tooltip-content">
    Options
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Stop app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Restart app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Rename
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>

              
            </div>
          
</cds-table-cell>
        
</cds-table-row>
        
      
        <cds-table-row id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          <cds-table-cell>
  
            <div>
              
                
  <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" flipped index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
    
  </span>
  <span slot="tooltip-content">
    Options
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Stop app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Restart app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Rename
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>

              
            </div>
          
</cds-table-cell>
        
</cds-table-row>
        
      
        <cds-table-row id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          <cds-table-cell>
  
            <div>
              
                
  <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" flipped index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
    
  </span>
  <span slot="tooltip-content">
    Options
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Stop app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Restart app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Rename
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>

              
            </div>
          
</cds-table-cell>
        
</cds-table-row>
        
      
        <cds-table-row id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          <cds-table-cell>
  
            <div>
              
                
  <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" flipped index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
    
  </span>
  <span slot="tooltip-content">
    Options
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Stop app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Restart app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Rename
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>

              
            </div>
          
</cds-table-cell>
        
</cds-table-row>
        
      
        <cds-table-row id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          <cds-table-cell>
  
            <div>
              
                
  <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" flipped index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
    
  </span>
  <span slot="tooltip-content">
    Options
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Stop app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Restart app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Rename
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>

              
            </div>
          
</cds-table-cell>
        
</cds-table-row>
        
      
        <cds-table-row id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          <cds-table-cell>
  
            <div>
              
                
  <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" flipped index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
    
  </span>
  <span slot="tooltip-content">
    Options
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Stop app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Restart app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Rename
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>

              
            </div>
          
</cds-table-cell>
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Small overflow menu
      
</cds-table-header-description>
    
  </div>
  <div slot="toolbar">
    
  <cds-table-toolbar>
  
    <cds-table-toolbar-content>
  
      <cds-table-toolbar-search autocomplete="off" placeholder="Filter table" size="lg">
  
</cds-table-toolbar-search>
      <cds-button kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Primary button
  
</cds-button>
    
</cds-table-toolbar-content>
  
</cds-table-toolbar>

  </div>
</cds-table>
</div>
```

### extra_small

```heex
<.data_table
  size="xs"
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
  overflow_menu_on_hover
>
  <:title>DataTable</:title>
  <:description>Extra small overflow</:description>
  <:toolbar>
    <Graphene.CarbonComponents.table_toolbar>
      <Graphene.CarbonComponents.table_toolbar_content>
        <Graphene.CarbonComponents.table_toolbar_search placeholder="Filter table" />
      </Graphene.CarbonComponents.table_toolbar_content>
    </Graphene.CarbonComponents.table_toolbar>
  </:toolbar>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
  <:action :let={_row}>
    <Graphene.CarbonComponents.overflow_menu toolbar_action flipped>
      <:icon>
        <Storybook.CarbonComponents.DataTable.Shared.overflow_icon />
      </:icon>
      <:tooltip_content>Options</:tooltip_content>
      <:item>Stop app</:item>
      <:item>Restart app</:item>
    </Graphene.CarbonComponents.overflow_menu>
  </:action>
</.data_table>
```

```html
<div id="overflow-menu-small-single-extra-small-component">
  <cds-table headerCount="0" locale="en" overflow-menu-on-hover size="xs" use-zebra-styles id="overflow-menu-small-single-extra-small" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row>
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        <cds-table-header-cell>
  
          <span class="sr-only">Actions</span>
        
</cds-table-header-cell>
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="overflow-menu-small-single-extra-smallbody">
  
      
        <cds-table-row id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          <cds-table-cell>
  
            <div>
              
                
  <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" flipped index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
    
  </span>
  <span slot="tooltip-content">
    Options
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Stop app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Restart app
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>

              
            </div>
          
</cds-table-cell>
        
</cds-table-row>
        
      
        <cds-table-row id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          <cds-table-cell>
  
            <div>
              
                
  <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" flipped index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
    
  </span>
  <span slot="tooltip-content">
    Options
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Stop app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Restart app
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>

              
            </div>
          
</cds-table-cell>
        
</cds-table-row>
        
      
        <cds-table-row id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          <cds-table-cell>
  
            <div>
              
                
  <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" flipped index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
    
  </span>
  <span slot="tooltip-content">
    Options
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Stop app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Restart app
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>

              
            </div>
          
</cds-table-cell>
        
</cds-table-row>
        
      
        <cds-table-row id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          <cds-table-cell>
  
            <div>
              
                
  <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" flipped index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
    
  </span>
  <span slot="tooltip-content">
    Options
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Stop app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Restart app
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>

              
            </div>
          
</cds-table-cell>
        
</cds-table-row>
        
      
        <cds-table-row id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          <cds-table-cell>
  
            <div>
              
                
  <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" flipped index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
    
  </span>
  <span slot="tooltip-content">
    Options
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Stop app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Restart app
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>

              
            </div>
          
</cds-table-cell>
        
</cds-table-row>
        
      
        <cds-table-row id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          <cds-table-cell>
  
            <div>
              
                
  <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" flipped index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
    
  </span>
  <span slot="tooltip-content">
    Options
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Stop app
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Restart app
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>

              
            </div>
          
</cds-table-cell>
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Extra small overflow
      
</cds-table-header-description>
    
  </div>
  <div slot="toolbar">
    
  <cds-table-toolbar>
  
    <cds-table-toolbar-content>
  
      <cds-table-toolbar-search autocomplete="off" placeholder="Filter table" size="lg">
  
</cds-table-toolbar-search>
    
</cds-table-toolbar-content>
  
</cds-table-toolbar>

  </div>
</cds-table>
</div>
```


## selection

### checkboxes

```heex
<.data_table
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
  selectable
  selection_name="carbon-selection"
>
  <:title>DataTable</:title>
  <:description>Row selection</:description>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
</.data_table>
```

```html
<div id="selection-single-checkboxes-component">
  <cds-table headerCount="0" is-selectable locale="en" size="lg" use-zebra-styles id="selection-single-checkboxes" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row selection-label="Select all" selection-name="carbon-selection">
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="selection-single-checkboxesbody">
  
      
        <cds-table-row selection-label="Select row" selection-name="carbon-selection" selection-value="1" id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-selection" selection-value="2" id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-selection" selection-value="3" id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-selection" selection-value="4" id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-selection" selection-value="5" id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-selection" selection-value="6" id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Row selection
      
</cds-table-header-description>
    
  </div>
  
</cds-table>
</div>
```

### preselected

```heex
<.data_table
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
  selectable
  selection_name="carbon-selection"
  selected_ids={[2]}
>
  <:title>DataTable</:title>
  <:description>Preselected row</:description>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
</.data_table>
```

```html
<div id="selection-single-preselected-component">
  <cds-table headerCount="0" is-selectable locale="en" size="lg" use-zebra-styles id="selection-single-preselected" phx-hook="BasicComponentsTable" data-selected-ids="2" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row selection-label="Select all" selection-name="carbon-selection">
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="selection-single-preselectedbody">
  
      
        <cds-table-row selection-label="Select row" selection-name="carbon-selection" selection-value="1" id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selected selection-label="Select row" selection-name="carbon-selection" selection-value="2" id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-selection" selection-value="3" id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-selection" selection-value="4" id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-selection" selection-value="5" id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-selection" selection-value="6" id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Preselected row
      
</cds-table-header-description>
    
  </div>
  
</cds-table>
</div>
```


## selection_radio

### radio

```heex
<.data_table
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
  selectable
  selection_name="carbon-radio-selection"
  radio
>
  <:title>DataTable</:title>
  <:description>Radio selection</:description>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
</.data_table>
```

```html
<div id="selection-radio-single-radio-component">
  <cds-table headerCount="0" is-selectable locale="en" radio size="lg" use-zebra-styles id="selection-radio-single-radio" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row hide-checkbox selection-label="Select all" selection-name="carbon-radio-selection">
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="selection-radio-single-radiobody">
  
      
        <cds-table-row selection-label="Select row" selection-name="carbon-radio-selection" selection-value="1" radio id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-radio-selection" selection-value="2" radio id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-radio-selection" selection-value="3" radio id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-radio-selection" selection-value="4" radio id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-radio-selection" selection-value="5" radio id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-radio-selection" selection-value="6" radio id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Radio selection
      
</cds-table-header-description>
    
  </div>
  
</cds-table>
</div>
```

### radio_selected

```heex
<.data_table
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
  selectable
  selection_name="carbon-radio-selection"
  selected_ids={[3]}
  radio
>
  <:title>DataTable</:title>
  <:description>Preselected radio</:description>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
</.data_table>
```

```html
<div id="selection-radio-single-radio-selected-component">
  <cds-table headerCount="0" is-selectable locale="en" radio size="lg" use-zebra-styles id="selection-radio-single-radio-selected" phx-hook="BasicComponentsTable" data-selected-ids="3" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row hide-checkbox selection-label="Select all" selection-name="carbon-radio-selection">
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="selection-radio-single-radio-selectedbody">
  
      
        <cds-table-row selection-label="Select row" selection-name="carbon-radio-selection" selection-value="1" radio id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-radio-selection" selection-value="2" radio id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selected selection-label="Select row" selection-name="carbon-radio-selection" selection-value="3" radio id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-radio-selection" selection-value="4" radio id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-radio-selection" selection-value="5" radio id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-radio-selection" selection-value="6" radio id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Preselected radio
      
</cds-table-header-description>
    
  </div>
  
</cds-table>
</div>
```


## selection_radio_sorting

### radio_sorting

```heex
<.data_table
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
  selectable
  sortable
  selection_name="carbon-radio-sorting"
  radio
>
  <:title>DataTable</:title>
  <:description>Radio selection and sorting</:description>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
</.data_table>
```

```html
<div id="selection-radio-sorting-single-radio-sorting-component">
  <cds-table headerCount="0" is-selectable is-sortable locale="en" radio size="lg" use-zebra-styles id="selection-radio-sorting-single-radio-sorting" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row hide-checkbox selection-label="Select all" selection-name="carbon-radio-sorting">
  
        <cds-table-header-cell is-sortable data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="selection-radio-sorting-single-radio-sortingbody">
  
      
        <cds-table-row selection-label="Select row" selection-name="carbon-radio-sorting" selection-value="1" radio id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-radio-sorting" selection-value="2" radio id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-radio-sorting" selection-value="3" radio id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-radio-sorting" selection-value="4" radio id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-radio-sorting" selection-value="5" radio id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-radio-sorting" selection-value="6" radio id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Radio selection and sorting
      
</cds-table-header-description>
    
  </div>
  
</cds-table>
</div>
```

### compact

```heex
<.data_table
  size="sm"
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
  selectable
  sortable
  selection_name="carbon-radio-sorting"
  radio
>
  <:title>DataTable</:title>
  <:description>Compact sorting</:description>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
</.data_table>
```

```html
<div id="selection-radio-sorting-single-compact-component">
  <cds-table headerCount="0" is-selectable is-sortable locale="en" radio size="sm" use-zebra-styles id="selection-radio-sorting-single-compact" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row hide-checkbox selection-label="Select all" selection-name="carbon-radio-sorting">
  
        <cds-table-header-cell is-sortable data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="selection-radio-sorting-single-compactbody">
  
      
        <cds-table-row selection-label="Select row" selection-name="carbon-radio-sorting" selection-value="1" radio id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-radio-sorting" selection-value="2" radio id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-radio-sorting" selection-value="3" radio id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-radio-sorting" selection-value="4" radio id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-radio-sorting" selection-value="5" radio id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row selection-label="Select row" selection-name="carbon-radio-sorting" selection-value="6" radio id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Compact sorting
      
</cds-table-header-description>
    
  </div>
  
</cds-table>
</div>
```


## sorting

### sorting

```heex
<.data_table
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
  sortable
>
  <:title>DataTable</:title>
  <:description>Sorting enabled</:description>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
</.data_table>
```

```html
<div id="sorting-single-sorting-component">
  <cds-table headerCount="0" is-sortable locale="en" size="lg" use-zebra-styles id="sorting-single-sorting" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row>
  
        <cds-table-header-cell is-sortable data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="sorting-single-sortingbody">
  
      
        <cds-table-row id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Sorting enabled
      
</cds-table-header-description>
    
  </div>
  
</cds-table>
</div>
```

### compact

```heex
<.data_table
  size="sm"
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
  sortable
>
  <:title>DataTable</:title>
  <:description>Compact sorting</:description>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
</.data_table>
```

```html
<div id="sorting-single-compact-component">
  <cds-table headerCount="0" is-sortable locale="en" size="sm" use-zebra-styles id="sorting-single-compact" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row>
  
        <cds-table-header-cell is-sortable data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell is-sortable data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="sorting-single-compactbody">
  
      
        <cds-table-row id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Compact sorting
      
</cds-table-header-description>
    
  </div>
  
</cds-table>
</div>
```


## toolbar

### actions

```heex
<.data_table
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
>
  <:title>DataTable</:title>
  <:description>Toolbar actions</:description>
  <:toolbar>
    <Graphene.CarbonComponents.table_toolbar>
      <Graphene.CarbonComponents.table_toolbar_content>
        <Graphene.CarbonComponents.table_toolbar_search placeholder="Filter table" />
        <Graphene.CarbonComponents.overflow_menu toolbar_action>
          <:icon>
            <Storybook.CarbonComponents.DataTable.Shared.overflow_icon />
          </:icon>
          <:tooltip_content>Settings</:tooltip_content>
          <:item>Action 1</:item>
          <:item>Action 2</:item>
          <:item>Action 3</:item>
        </Graphene.CarbonComponents.overflow_menu>
        <Graphene.CarbonComponents.button>Primary button</Graphene.CarbonComponents.button>
      </Graphene.CarbonComponents.table_toolbar_content>
    </Graphene.CarbonComponents.table_toolbar>
  </:toolbar>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
</.data_table>
```

```html
<div id="toolbar-single-actions-component">
  <cds-table headerCount="0" locale="en" size="lg" use-zebra-styles id="toolbar-single-actions" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row>
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="toolbar-single-actionsbody">
  
      
        <cds-table-row id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Toolbar actions
      
</cds-table-header-description>
    
  </div>
  <div slot="toolbar">
    
  <cds-table-toolbar>
  
    <cds-table-toolbar-content>
  
      <cds-table-toolbar-search autocomplete="off" placeholder="Filter table" size="lg">
  
</cds-table-toolbar-search>
      <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
        
  </span>
  <span slot="tooltip-content">
    Settings
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Action 1
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Action 2
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Action 3
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>
      <cds-button kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Primary button
  
</cds-button>
    
</cds-table-toolbar-content>
  
</cds-table-toolbar>

  </div>
</cds-table>
</div>
```

### compact

```heex
<.data_table
  size="sm"
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
>
  <:title>DataTable</:title>
  <:description>Compact toolbar</:description>
  <:toolbar>
    <Graphene.CarbonComponents.table_toolbar>
      <Graphene.CarbonComponents.table_toolbar_content>
        <Graphene.CarbonComponents.table_toolbar_search placeholder="Filter table" />
        <Graphene.CarbonComponents.overflow_menu toolbar_action>
          <:icon>
            <Storybook.CarbonComponents.DataTable.Shared.overflow_icon />
          </:icon>
          <:tooltip_content>Settings</:tooltip_content>
          <:item>Action 1</:item>
          <:item>Action 2</:item>
        </Graphene.CarbonComponents.overflow_menu>
      </Graphene.CarbonComponents.table_toolbar_content>
    </Graphene.CarbonComponents.table_toolbar>
  </:toolbar>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
</.data_table>
```

```html
<div id="toolbar-single-compact-component">
  <cds-table headerCount="0" locale="en" size="sm" use-zebra-styles id="toolbar-single-compact" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row>
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="toolbar-single-compactbody">
  
      
        <cds-table-row id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Compact toolbar
      
</cds-table-header-description>
    
  </div>
  <div slot="toolbar">
    
  <cds-table-toolbar>
  
    <cds-table-toolbar-content>
  
      <cds-table-toolbar-search autocomplete="off" placeholder="Filter table" size="lg">
  
</cds-table-toolbar-search>
      <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
        
  </span>
  <span slot="tooltip-content">
    Settings
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Action 1
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Action 2
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>
    
</cds-table-toolbar-content>
  
</cds-table-toolbar>

  </div>
</cds-table>
</div>
```


## toolbar_persistent

### persistent

```heex
<.data_table
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
>
  <:title>DataTable</:title>
  <:description>With persistent toolbar</:description>
  <:toolbar>
    <Graphene.CarbonComponents.table_toolbar>
      <Graphene.CarbonComponents.table_toolbar_content>
        <Graphene.CarbonComponents.table_toolbar_search persistent placeholder="Filter table" />
        <Graphene.CarbonComponents.overflow_menu toolbar_action>
          <:icon>
            <Storybook.CarbonComponents.DataTable.Shared.overflow_icon />
          </:icon>
          <:tooltip_content>Settings</:tooltip_content>
          <:item>Action 1</:item>
          <:item>Action 2</:item>
          <:item>Action 3</:item>
        </Graphene.CarbonComponents.overflow_menu>
        <Graphene.CarbonComponents.button>Primary button</Graphene.CarbonComponents.button>
      </Graphene.CarbonComponents.table_toolbar_content>
    </Graphene.CarbonComponents.table_toolbar>
  </:toolbar>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
</.data_table>
```

```html
<div id="toolbar-persistent-single-persistent-component">
  <cds-table headerCount="0" locale="en" size="lg" use-zebra-styles id="toolbar-persistent-single-persistent" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row>
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="toolbar-persistent-single-persistentbody">
  
      
        <cds-table-row id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        With persistent toolbar
      
</cds-table-header-description>
    
  </div>
  <div slot="toolbar">
    
  <cds-table-toolbar>
  
    <cds-table-toolbar-content>
  
      <cds-table-toolbar-search autocomplete="off" persistent placeholder="Filter table" size="lg">
  
</cds-table-toolbar-search>
      <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
        
  </span>
  <span slot="tooltip-content">
    Settings
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Action 1
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Action 2
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Action 3
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>
      <cds-button kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Primary button
  
</cds-button>
    
</cds-table-toolbar-content>
  
</cds-table-toolbar>

  </div>
</cds-table>
</div>
```

### compact

```heex
<.data_table
  size="sm"
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
>
  <:title>DataTable</:title>
  <:description>Compact persistent toolbar</:description>
  <:toolbar>
    <Graphene.CarbonComponents.table_toolbar>
      <Graphene.CarbonComponents.table_toolbar_content>
        <Graphene.CarbonComponents.table_toolbar_search persistent placeholder="Filter table" />
        <Graphene.CarbonComponents.overflow_menu toolbar_action>
          <:icon>
            <Storybook.CarbonComponents.DataTable.Shared.overflow_icon />
          </:icon>
          <:tooltip_content>Settings</:tooltip_content>
          <:item>Action 1</:item>
          <:item>Action 2</:item>
        </Graphene.CarbonComponents.overflow_menu>
      </Graphene.CarbonComponents.table_toolbar_content>
    </Graphene.CarbonComponents.table_toolbar>
  </:toolbar>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
</.data_table>
```

```html
<div id="toolbar-persistent-single-compact-component">
  <cds-table headerCount="0" locale="en" size="sm" use-zebra-styles id="toolbar-persistent-single-compact" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row>
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="toolbar-persistent-single-compactbody">
  
      
        <cds-table-row id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Compact persistent toolbar
      
</cds-table-header-description>
    
  </div>
  <div slot="toolbar">
    
  <cds-table-toolbar>
  
    <cds-table-toolbar-content>
  
      <cds-table-toolbar-search autocomplete="off" persistent placeholder="Filter table" size="lg">
  
</cds-table-toolbar-search>
      <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
        
  </span>
  <span slot="tooltip-content">
    Settings
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Action 1
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Action 2
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>
    
</cds-table-toolbar-content>
  
</cds-table-toolbar>

  </div>
</cds-table>
</div>
```


## toolbar_persistent_small

### small

```heex
<.data_table
  size="sm"
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
>
  <:title>DataTable</:title>
  <:description>Small persistent toolbar</:description>
  <:toolbar>
    <Graphene.CarbonComponents.table_toolbar>
      <Graphene.CarbonComponents.table_toolbar_content>
        <Graphene.CarbonComponents.table_toolbar_search persistent placeholder="Filter table" />
        <Graphene.CarbonComponents.overflow_menu toolbar_action>
          <:icon>
            <Storybook.CarbonComponents.DataTable.Shared.overflow_icon />
          </:icon>
          <:tooltip_content>Settings</:tooltip_content>
          <:item>Action 1</:item>
          <:item>Action 2</:item>
          <:item>Action 3</:item>
        </Graphene.CarbonComponents.overflow_menu>
        <Graphene.CarbonComponents.button>Primary button</Graphene.CarbonComponents.button>
      </Graphene.CarbonComponents.table_toolbar_content>
    </Graphene.CarbonComponents.table_toolbar>
  </:toolbar>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
</.data_table>
```

```html
<div id="toolbar-persistent-small-single-small-component">
  <cds-table headerCount="0" locale="en" size="sm" use-zebra-styles id="toolbar-persistent-small-single-small" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row>
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="toolbar-persistent-small-single-smallbody">
  
      
        <cds-table-row id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Small persistent toolbar
      
</cds-table-header-description>
    
  </div>
  <div slot="toolbar">
    
  <cds-table-toolbar>
  
    <cds-table-toolbar-content>
  
      <cds-table-toolbar-search autocomplete="off" persistent placeholder="Filter table" size="lg">
  
</cds-table-toolbar-search>
      <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
        
  </span>
  <span slot="tooltip-content">
    Settings
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Action 1
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Action 2
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Action 3
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>
      <cds-button kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  Primary button
  
</cds-button>
    
</cds-table-toolbar-content>
  
</cds-table-toolbar>

  </div>
</cds-table>
</div>
```

### extra_small

```heex
<.data_table
  size="xs"
  rows={[%{id: 1, name: "Load Balancer 3", port: "3000", status: "Disabled", protocol: "HTTP", group: "Kevin's VM Groups", rule: "Round robin"}, %{id: 2, name: "Load Balancer 1", port: "443", status: "Starting", protocol: "HTTP", group: "Maureen's VM Groups", rule: "Round robin"}, %{id: 3, name: "Load Balancer 2", port: "80", status: "Active", protocol: "HTTP", group: "Andrew's VM Groups", rule: "DNS delegation"}, %{id: 4, name: "Load Balancer 6", port: "3000", status: "Disabled", protocol: "HTTP", group: "Marc's VM Groups", rule: "Round robin"}, %{id: 5, name: "Load Balancer 4", port: "443", status: "Starting", protocol: "HTTP", group: "Mel's VM Groups", rule: "Round robin"}, %{id: 6, name: "Load Balancer 5", port: "80", status: "Active", protocol: "HTTP", group: "Ronja's VM Groups", rule: "DNS delegation"}]}
  row_id={&Graphene.CarbonComponents.DataTable.Shared.row_id/1}
>
  <:title>DataTable</:title>
  <:description>Extra small</:description>
  <:toolbar>
    <Graphene.CarbonComponents.table_toolbar>
      <Graphene.CarbonComponents.table_toolbar_content>
        <Graphene.CarbonComponents.table_toolbar_search persistent placeholder="Filter table" />
        <Graphene.CarbonComponents.overflow_menu toolbar_action>
          <:icon>
            <Storybook.CarbonComponents.DataTable.Shared.overflow_icon />
          </:icon>
          <:tooltip_content>Settings</:tooltip_content>
          <:item>Action 1</:item>
          <:item>Action 2</:item>
        </Graphene.CarbonComponents.overflow_menu>
      </Graphene.CarbonComponents.table_toolbar_content>
    </Graphene.CarbonComponents.table_toolbar>
  </:toolbar>
  <:col :for={col <- Storybook.CarbonComponents.DataTable.Shared.columns()} :let={row} label={col.label}>
    <%= Map.get(row, col.key) %>
  </:col>
</.data_table>
```

```html
<div id="toolbar-persistent-small-single-extra-small-component">
  <cds-table headerCount="0" locale="en" size="xs" use-zebra-styles id="toolbar-persistent-small-single-extra-small" phx-hook="BasicComponentsTable" phx-target="1" phx-update="ignore">
  
    <cds-table-head>
  
      <cds-table-header-row>
  
        <cds-table-header-cell data-col-index="0">
  
          Name
        
</cds-table-header-cell><cds-table-header-cell data-col-index="1">
  
          Protocol
        
</cds-table-header-cell><cds-table-header-cell data-col-index="2">
  
          Port
        
</cds-table-header-cell><cds-table-header-cell data-col-index="3">
  
          Rule
        
</cds-table-header-cell><cds-table-header-cell data-col-index="4">
  
          Attached groups
        
</cds-table-header-cell><cds-table-header-cell data-col-index="5">
  
          Status
        
</cds-table-header-cell>
        
      
</cds-table-header-row>
    
</cds-table-head>
    <cds-table-body id="toolbar-persistent-small-single-extra-smallbody">
  
      
        <cds-table-row id="1" data-row-id="1">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 3

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Kevin&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="2" data-row-id="2">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 1

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Maureen&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="3" data-row-id="3">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 2

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Andrew&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="4" data-row-id="4">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 6

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  3000

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Marc&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Disabled

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="5" data-row-id="5">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 4

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  443

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Round robin

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Mel&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Starting

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
        <cds-table-row id="6" data-row-id="6">
  
          
          <cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Load Balancer 5

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  HTTP

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  80

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  DNS delegation

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Ronja&#39;s VM Groups

            
</cds-table-cell-content>
          
</cds-table-cell><cds-table-cell>
  
            <cds-table-cell-content>
  
              
  Active

            
</cds-table-cell-content>
          
</cds-table-cell>
          
        
</cds-table-row>
        
      
    
</cds-table-body>
  
  <div slot="title">
    
      <cds-table-header-title>
  
        DataTable
      
</cds-table-header-title>
    
  </div>
  <div slot="description">
    
      <cds-table-header-description>
  
        Extra small
      
</cds-table-header-description>
    
  </div>
  <div slot="toolbar">
    
  <cds-table-toolbar>
  
    <cds-table-toolbar-content>
  
      <cds-table-toolbar-search autocomplete="off" persistent placeholder="Filter table" size="lg">
  
</cds-table-toolbar-search>
      <cds-overflow-menu align="top" close-on-activation enter-delay-ms="100" index="1" kind="primary" leave-delay-ms="100" link-role="button" size="md" tab-index="0" toolbar-action tooltip-alignment="" tooltip-position="top" type="button">
  
  <span slot="icon">
    
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="auto" fill="currentColor" preserveAspectRatio="xMidYMid meet" aria-hidden>
  
  
  <circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="24" cy="16" r="2"/>

</svg>
        
  </span>
  <span slot="tooltip-content">
    Settings
  </span>
  <cds-overflow-menu-body direction="bottom" size="md">
  
    
      <cds-overflow-menu-item size="md">
  
        Action 1
      
</cds-overflow-menu-item>
    
      <cds-overflow-menu-item size="md">
  
        Action 2
      
</cds-overflow-menu-item>
    
  
</cds-overflow-menu-body>

  
  
</cds-overflow-menu>
    
</cds-table-toolbar-content>
  
</cds-table-toolbar>

  </div>
</cds-table>
</div>
```
