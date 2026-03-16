# `ai_label`

### default

```heex
<.ai_label alignment="bottom-start">
  <:body_text>
    <p class="secondary">AI Explained</p>
    <h2 class="ai-label-heading">84%</h2>
    <p class="secondary bold">Confidence score</p>
    <p class="secondary">Model type: Foundation</p>
  </:body_text>
  <:action_button>View details</:action_button>
</.ai_label>
```

```html
<cds-ai-label ai-text="AI" alignment="bottom-start" alignment-axis-offset="0" button-label="Show information" kind="" revert-label="Revert to AI input" size="xs" slot="ai-label" id="ai-label-single-default">
  
  <div slot="body-text">
    
  <p class="secondary">AI Explained</p>
  <h2 class="ai-label-heading">84%</h2>
  <p class="secondary bold">Confidence score</p>
  <p class="secondary">Model type: Foundation</p>

  </div>
  
  
    <cds-ai-label-action-button kind="primary" link-role="button" size="lg" slot="actions" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  
      View details
    
</cds-ai-label-action-button>
  
  
  

  
  
</cds-ai-label>
```

### inline

```heex
<.ai_label kind="inline" ai_text="AI-generated" ai_text_label="Status">
  <:body_text>
    <p class="secondary">Inline AI summary</p>
    <p class="secondary">Updated 2 mins ago</p>
  </:body_text>
  <:action_button>Review</:action_button>
</.ai_label>
```

```html
<cds-ai-label ai-text="AI-generated" ai-text-label="Status" alignment="top" alignment-axis-offset="0" button-label="Show information" kind="inline" revert-label="Revert to AI input" size="xs" slot="ai-label" id="ai-label-single-inline">
  
  <div slot="body-text">
    
  <p class="secondary">Inline AI summary</p>
  <p class="secondary">Updated 2 mins ago</p>

  </div>
  
  
    <cds-ai-label-action-button kind="primary" link-role="button" size="lg" slot="actions" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  
      Review
    
</cds-ai-label-action-button>
  
  
  

  
  
</cds-ai-label>
```

### group: sizes

```heex
<.ai_label size="sm" alignment="bottom-start">
  <:body_text>
    <p class="secondary">Model summary</p>
    <h2 class="ai-label-heading">76%</h2>
    <p class="secondary bold">Confidence</p>
  </:body_text>
  <:action_button>Open</:action_button>
</.ai_label>
<.ai_label size="md" alignment="bottom-start">
  <:body_text>
    <p class="secondary">Model summary</p>
    <h2 class="ai-label-heading">76%</h2>
    <p class="secondary bold">Confidence</p>
  </:body_text>
  <:action_button>Open</:action_button>
</.ai_label>
<.ai_label size="lg" alignment="bottom-start">
  <:body_text>
    <p class="secondary">Model summary</p>
    <h2 class="ai-label-heading">76%</h2>
    <p class="secondary bold">Confidence</p>
  </:body_text>
  <:action_button>Open</:action_button>
</.ai_label>
```

```html
<cds-ai-label ai-text="AI" alignment="bottom-start" alignment-axis-offset="0" button-label="Show information" kind="" revert-label="Revert to AI input" size="sm" slot="ai-label" id="ai-label-sizes-sm">
  
  <div slot="body-text">
    
  <p class="secondary">Model summary</p>
  <h2 class="ai-label-heading">76%</h2>
  <p class="secondary bold">Confidence</p>

  </div>
  
  
    <cds-ai-label-action-button kind="primary" link-role="button" size="lg" slot="actions" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  
      Open
    
</cds-ai-label-action-button>
  
  
  

  
  
</cds-ai-label>
<cds-ai-label ai-text="AI" alignment="bottom-start" alignment-axis-offset="0" button-label="Show information" kind="" revert-label="Revert to AI input" size="md" slot="ai-label" id="ai-label-sizes-md">
  
  <div slot="body-text">
    
  <p class="secondary">Model summary</p>
  <h2 class="ai-label-heading">76%</h2>
  <p class="secondary bold">Confidence</p>

  </div>
  
  
    <cds-ai-label-action-button kind="primary" link-role="button" size="lg" slot="actions" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  
      Open
    
</cds-ai-label-action-button>
  
  
  

  
  
</cds-ai-label>
<cds-ai-label ai-text="AI" alignment="bottom-start" alignment-axis-offset="0" button-label="Show information" kind="" revert-label="Revert to AI input" size="lg" slot="ai-label" id="ai-label-sizes-lg">
  
  <div slot="body-text">
    
  <p class="secondary">Model summary</p>
  <h2 class="ai-label-heading">76%</h2>
  <p class="secondary bold">Confidence</p>

  </div>
  
  
    <cds-ai-label-action-button kind="primary" link-role="button" size="lg" slot="actions" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button">
  
      Open
    
</cds-ai-label-action-button>
  
  
  

  
  
</cds-ai-label>
```
