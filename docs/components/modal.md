# `modal`

### example

```heex
<div style="display: grid; gap: 1rem;">
      <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
        <Graphene.CarbonComponents.button kind="primary" phx-click="open_modal" phx-value-id="small">
          Open small modal
        </Graphene.CarbonComponents.button>
        <Graphene.CarbonComponents.button kind="secondary" phx-click="open_modal" phx-value-id="large">
          Open large modal
        </Graphene.CarbonComponents.button>
        <Graphene.CarbonComponents.button kind="danger--tertiary" phx-click="open_modal" phx-value-id="danger">
          Open danger modal
        </Graphene.CarbonComponents.button>
      </div>

      <Graphene.CarbonComponents.modal open={@open_modal == "small"} size="sm">
        <:label>Optional label</:label>
        <:heading>Modal heading</:heading>
        <:body>Add your modal content here. Use descriptive text to explain next steps.</:body>
        <:footer_button kind="secondary" attrs={%{"phx-click" => "close_modal"}}>Cancel</:footer_button>
        <:footer_button kind="primary" attrs={%{"phx-click" => "close_modal"}}>Submit</:footer_button>
      </Graphene.CarbonComponents.modal>

      <Graphene.CarbonComponents.modal open={@open_modal == "large"} size="lg">
        <:label>Large modal</:label>
        <:heading>Modal heading</:heading>
        <:body>Large modal content with additional context.</:body>
        <:footer_button kind="secondary" attrs={%{"phx-click" => "close_modal"}}>Back</:footer_button>
        <:footer_button kind="primary" attrs={%{"phx-click" => "close_modal"}}>Continue</:footer_button>
      </Graphene.CarbonComponents.modal>

      <Graphene.CarbonComponents.modal open={@open_modal == "danger"} size="sm">
        <:label>Danger</:label>
        <:heading>Delete item</:heading>
        <:body>Are you sure you want to delete this item?</:body>
        <:footer_button kind="secondary" attrs={%{"phx-click" => "close_modal"}}>Cancel</:footer_button>
        <:footer_button kind="danger" attrs={%{"phx-click" => "close_modal"}}>Delete</:footer_button>
      </Graphene.CarbonComponents.modal>
    </div>
```

```html
<div style="display: grid; gap: 1rem;">
  <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
    <cds-button kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" phx-click="open_modal" phx-value-id="small">
  
      Open small modal
    
  
</cds-button>
    <cds-button kind="secondary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" phx-click="open_modal" phx-value-id="large">
  
      Open large modal
    
  
</cds-button>
    <cds-button kind="danger--tertiary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" phx-click="open_modal" phx-value-id="danger">
  
      Open danger modal
    
  
</cds-button>
  </div>

  <cds-modal loading-icon-description="Loading" loading-success-delay="1500" size="sm">
  
  <cds-modal-header>
  
    
      <cds-modal-label>
  Optional label
</cds-modal-label>
    
    
      <cds-modal-heading>
  Modal heading
</cds-modal-heading>
    
  
</cds-modal-header>
  <cds-modal-body>
  
    <cds-modal-body-content>
  
      
        Add your modal content here. Use descriptive text to explain next steps.
      
    
</cds-modal-body-content>
  
</cds-modal-body>
  <cds-modal-footer>
  
    
      <cds-modal-footer-button kind="secondary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" phx-click="close_modal">
  
        Cancel
      
</cds-modal-footer-button>
    
      <cds-modal-footer-button kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" phx-click="close_modal">
  
        Submit
      
</cds-modal-footer-button>
    
  
</cds-modal-footer>
  
    

</cds-modal>

  <cds-modal loading-icon-description="Loading" loading-success-delay="1500" size="lg">
  
  <cds-modal-header>
  
    
      <cds-modal-label>
  Large modal
</cds-modal-label>
    
    
      <cds-modal-heading>
  Modal heading
</cds-modal-heading>
    
  
</cds-modal-header>
  <cds-modal-body>
  
    <cds-modal-body-content>
  
      
        Large modal content with additional context.
      
    
</cds-modal-body-content>
  
</cds-modal-body>
  <cds-modal-footer>
  
    
      <cds-modal-footer-button kind="secondary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" phx-click="close_modal">
  
        Back
      
</cds-modal-footer-button>
    
      <cds-modal-footer-button kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" phx-click="close_modal">
  
        Continue
      
</cds-modal-footer-button>
    
  
</cds-modal-footer>
  
    

</cds-modal>

  <cds-modal loading-icon-description="Loading" loading-success-delay="1500" size="sm">
  
  <cds-modal-header>
  
    
      <cds-modal-label>
  Danger
</cds-modal-label>
    
    
      <cds-modal-heading>
  Delete item
</cds-modal-heading>
    
  
</cds-modal-header>
  <cds-modal-body>
  
    <cds-modal-body-content>
  
      
        Are you sure you want to delete this item?
      
    
</cds-modal-body-content>
  
</cds-modal-body>
  <cds-modal-footer>
  
    
      <cds-modal-footer-button kind="secondary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" phx-click="close_modal">
  
        Cancel
      
</cds-modal-footer-button>
    
      <cds-modal-footer-button kind="danger" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" phx-click="close_modal">
  
        Delete
      
</cds-modal-footer-button>
    
  
</cds-modal-footer>
  
    

</cds-modal>
</div>
```
