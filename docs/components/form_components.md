# `form_components`

### example

```heex
<div style="display: grid; gap: 2rem;">
      <div id="form-components-demo">
        <form id="form-components-form" phx-change="form_change" phx-submit="form_submit">
          <div style="display: grid; gap: 1.5rem;">
            <div style="display: grid; gap: 0.75rem;">
              <h3>Boolean inputs</h3>
              <Graphene.CarbonComponents.checkbox field={@form[:subscribe]} label_text="Receive updates" />
              <Graphene.CarbonComponents.toggle field={@form[:feature]} label_a="On" label_b="Off">
                <:label_text>Enable feature</:label_text>
              </Graphene.CarbonComponents.toggle>
            </div>

            <div style="display: grid; gap: 0.75rem;">
              <h3>Radio group</h3>
              <Graphene.CarbonComponents.radio_button_group field={@form[:plan]} legend_text="Choose a plan">
                <Graphene.CarbonComponents.radio_button value="starter" label_text="Starter" />
                <Graphene.CarbonComponents.radio_button value="pro" label_text="Pro" />
                <Graphene.CarbonComponents.radio_button value="enterprise" label_text="Enterprise" />
              </Graphene.CarbonComponents.radio_button_group>
            </div>

            <div style="display: grid; gap: 0.75rem;">
              <h3>Numbers</h3>
              <Graphene.CarbonComponents.number_input field={@form[:quantity]} min="0" max="Infinity">
                <:label_text>Quantity</:label_text>
              </Graphene.CarbonComponents.number_input>
              <Graphene.CarbonComponents.fluid_number_input field={@form[:fluid_quantity]} min="0" max="Infinity">
                <:label_text>Fluid quantity</:label_text>
              </Graphene.CarbonComponents.fluid_number_input>
              <Graphene.CarbonComponents.slider
                field={@form[:slo]}
                id={@form[:slo].id}
                name={@form[:slo].name}
                value={@form[:slo].value}
                min="0"
                max="100"
                step="5"
              >
                <:label_text>Utilization target</:label_text>
              </Graphene.CarbonComponents.slider>
            </div>

            <div style="display: grid; gap: 0.75rem;">
              <h3>Text</h3>
              <Graphene.CarbonComponents.text_input field={@form[:name]} label="Name" />
              <Graphene.CarbonComponents.fluid_text_input field={@form[:title]} label="Title" />
              <Graphene.CarbonComponents.password_input field={@form[:password]} label="Password" />
              <Graphene.CarbonComponents.textarea field={@form[:bio]} label="Bio" />
              <Graphene.CarbonComponents.fluid_textarea field={@form[:notes]} label="Notes" />
            </div>

            <div style="display: grid; gap: 0.75rem;">
              <h3>Search</h3>
              <Graphene.CarbonComponents.search field={@form[:search]} label_text="Search" />
              <Graphene.CarbonComponents.fluid_search field={@form[:fluid_search]} label_text="Fluid search" />
            </div>

            <div style="display: grid; gap: 0.75rem;">
              <h3>Selects</h3>
              <Graphene.CarbonComponents.select field={@form[:select]}>
                <:label_text>Select option</:label_text>
                <:item value="option-1">Option 1</:item>
                <:item value="option-2">Option 2</:item>
                <:item value="option-3">Option 3</:item>
              </Graphene.CarbonComponents.select>
              <Graphene.CarbonComponents.fluid_select field={@form[:fluid_select]}>
                <:label_text>Fluid select</:label_text>
                <:item value="option-1">Option 1</:item>
                <:item value="option-2">Option 2</:item>
                <:item value="option-3">Option 3</:item>
              </Graphene.CarbonComponents.fluid_select>
              <Graphene.CarbonComponents.dropdown field={@form[:dropdown]} label="Dropdown">
                <:item value="option-1">Option 1</:item>
                <:item value="option-2">Option 2</:item>
                <:item value="option-3">Option 3</:item>
              </Graphene.CarbonComponents.dropdown>
              <Graphene.CarbonComponents.combo_box field={@form[:combo]} label="Combo box">
                <:item value="option-1">Option 1</:item>
                <:item value="option-2">Option 2</:item>
                <:item value="option-3">Option 3</:item>
              </Graphene.CarbonComponents.combo_box>
              <Graphene.CarbonComponents.multi_select field={@form[:multi]} label="Multi select">
                <:item value="option-1">Option 1</:item>
                <:item value="option-2">Option 2</:item>
                <:item value="option-3">Option 3</:item>
              </Graphene.CarbonComponents.multi_select>
            </div>

            <div style="display: grid; gap: 0.75rem;">
              <h3>Date & time</h3>
              <Graphene.CarbonComponents.date_picker field={@form[:date]}>
                <Graphene.CarbonComponents.date_picker_input
                  label_text="Start date"
                  placeholder="mm/dd/yyyy"
                  kind="single"
                />
              </Graphene.CarbonComponents.date_picker>
              <Graphene.CarbonComponents.time_picker field={@form[:time]}>
                <:label_text>Select time</:label_text>
              </Graphene.CarbonComponents.time_picker>
            </div>

            <div style="display: grid; gap: 0.75rem;">
              <h3>File upload</h3>
              <Graphene.CarbonComponents.file_uploader field={@form[:attachments]} label_title="Upload evidence">
                <:button label="Add files" />
                <:item state="complete">audit-report.pdf</:item>
              </Graphene.CarbonComponents.file_uploader>
            </div>
          </div>

          <div style="margin-top: 1.5rem;">
            <Graphene.CarbonComponents.button
              type="button"
              phx-click={JS.dispatch("submit", to: "#form-components-form")}
            >
              Send form state
            </Graphene.CarbonComponents.button>
          </div>
        </form>
      </div>

      <div style="display: grid; gap: 1.5rem;">
        <.event_panel
          title="Form params (phx-change)"
          state={@form_state}
          last_event={@change_event}
          pretty={true}
        />
        <.event_panel
          title="Submitted params (phx-submit)"
          state={@submitted_state}
          last_event={@submit_event}
          pretty={true}
        />
      </div>
    </div>
```

```html
<div style="display: grid; gap: 2rem;">
  <div id="form-components-demo">
    <form id="form-components-form" phx-change="form_change" phx-submit="form_submit">
      <div style="display: grid; gap: 1.5rem;">
        <div style="display: grid; gap: 0.75rem;">
          <h3>Boolean inputs</h3>
          <input type="hidden" id="form_subscribe-input" name="form[subscribe]" value="true">
<cds-checkbox checked id="form_subscribe" label-text="Receive updates" name="form[subscribe]" value id="form_subscribe" data-form-detail="checked" data-form-event="cds-checkbox-changed" data-form-input="form_subscribe-input" data-form-mode="boolean" phx-hook="GrapheneFormBridge">
  
</cds-checkbox>

          <input type="hidden" id="form_feature-input" name="form[feature]" value="false">
<cds-toggle id="form_feature" label-a="On" label-b="Off" name="form[feature]" size="" id="form_feature" data-form-detail="toggled" data-form-event="cds-toggle-changed" data-form-input="form_feature-input" data-form-mode="boolean" phx-hook="GrapheneFormBridge">
  
            
  
  <div slot="label-text">
    Enable feature
  </div>
  
</cds-toggle>

        </div>

        <div style="display: grid; gap: 0.75rem;">
          <h3>Radio group</h3>
          <input type="hidden" id="form_plan-input" name="form[plan]" value="starter">
<cds-radio-button-group label-position="right" legend-text="Choose a plan" name="form[plan]" orientation="horizontal" value="starter" id="form_plan" data-form-detail="checked" data-form-event="cds-radio-button-group-changed" data-form-input="form_plan-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
            <cds-radio-button label-position="right" label-text="Starter" orientation="horizontal" value="starter">
  
  
</cds-radio-button>
            <cds-radio-button label-position="right" label-text="Pro" orientation="horizontal" value="pro">
  
  
</cds-radio-button>
            <cds-radio-button label-position="right" label-text="Enterprise" orientation="horizontal" value="enterprise">
  
  
</cds-radio-button>
          
</cds-radio-button-group>

        </div>

        <div style="display: grid; gap: 0.75rem;">
          <h3>Numbers</h3>
          <input type="hidden" id="form_quantity-input" name="form[quantity]" value="2">
<cds-number-input decrement-button-assistive-text="decrease number input" hidePasswordLabel="Hide password" increment-button-assistive-text="increase number input" max="Infinity" min="0" name="form[quantity]" required-validity-message="Please fill out this field." showPasswordLabel="Show password" size="md" step="1" tooltipAlignment="center" tooltipDirection="bottom" type="text" value="2" id="form_quantity" data-form-detail="checked" data-form-event="cds-number-input" data-form-input="form_quantity-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
            
  
  <div slot="label-text">
    Quantity
  </div>
  
</cds-number-input>

          <input type="hidden" id="form_fluid_quantity-input" name="form[fluid_quantity]" value="4">
<cds-fluid-number-input decrement-button-assistive-text="decrease number input" hidePasswordLabel="Hide password" increment-button-assistive-text="increase number input" max="Infinity" min="0" name="form[fluid_quantity]" required-validity-message="Please fill out this field." showPasswordLabel="Show password" size="md" step="1" tooltipAlignment="center" tooltipDirection="bottom" type="text" value="4" id="form_fluid_quantity" data-form-detail="checked" data-form-event="cds-number-input" data-form-input="form_fluid_quantity-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
            
  
  <div slot="label-text">
    Fluid quantity
  </div>
  
</cds-fluid-number-input>

          <input type="hidden" id="form_slo-input" name="form[slo]" value="65">
<cds-slider max="100" min="0" name="form[slo]" step="5" step-multiplier="4" value="65" id="form_slo" data-form-detail="checked" data-form-event="cds-slider-changed" data-form-input="form_slo-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
            
  <div slot="label-text">
    Utilization target
  </div>
  
  
  
</cds-slider>

        </div>

        <div style="display: grid; gap: 0.75rem;">
          <h3>Text</h3>
          <input type="hidden" id="form_name-input" name="form[name]" value="Ada Lovelace">
<cds-text-input hidePasswordLabel="Hide password" label="Name" name="form[name]" required-validity-message="Please fill out this field." showPasswordLabel="Show password" size="md" tooltipAlignment="center" tooltipDirection="bottom" type="text" value="Ada Lovelace" id="form_name" data-form-detail="checked" data-form-event="input" data-form-input="form_name-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
  
</cds-text-input>

          <input type="hidden" id="form_title-input" name="form[title]" value="Engineer">
<cds-fluid-text-input hidePasswordLabel="Hide password" label="Title" name="form[title]" required-validity-message="Please fill out this field." showPasswordLabel="Show password" size="md" tooltipAlignment="center" tooltipDirection="bottom" type="text" value="Engineer" id="form_title" data-form-detail="checked" data-form-event="input" data-form-input="form_title-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
  
</cds-fluid-text-input>

          <input type="hidden" id="form_password-input" name="form[password]" value="password">
<cds-password-input hide-password-label="Hide password" label="Password" name="form[password]" required-validity-message="Please fill out this field." show-password-label="Show password" size="md" tooltip-alignment="center" tooltip-position="bottom" type="password" value="password" id="form_password" data-form-detail="checked" data-form-event="input" data-form-input="form_password-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
  
</cds-password-input>

          <input type="hidden" id="form_bio-input" name="form[bio]" value="Inventor of the first algorithm.">
<cds-textarea hidePasswordLabel="Hide password" id="form_bio" label="Bio" name="form[bio]" required-validity-message="Please fill out this field." rows="4" showPasswordLabel="Show password" size="md" tooltipAlignment="center" tooltipDirection="bottom" type="text" value="Inventor of the first algorithm." id="form_bio" data-form-detail="checked" data-form-event="input" data-form-input="form_bio-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
  
</cds-textarea>

          <input type="hidden" id="form_notes-input" name="form[notes]" value="Prefers a concise summary.">
<cds-fluid-textarea hidePasswordLabel="Hide password" id="form_notes" label="Notes" name="form[notes]" required-validity-message="Please fill out this field." rows="4" showPasswordLabel="Show password" size="md" tooltipAlignment="center" tooltipDirection="bottom" type="text" value="Prefers a concise summary." id="form_notes" data-form-detail="checked" data-form-event="input" data-form-input="form_notes-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
  
</cds-fluid-textarea>

        </div>

        <div style="display: grid; gap: 0.75rem;">
          <h3>Search</h3>
          <input type="hidden" id="form_search-input" name="form[search]" value="Ada">
<cds-search autocomplete="off" label-text="Search" name="form[search]" placeholder="Search" size="md" value="Ada" id="form_search" data-form-detail="checked" data-form-event="cds-search-input" data-form-input="form_search-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
</cds-search>

          <input type="hidden" id="form_fluid_search-input" name="form[fluid_search]" value="">
<cds-fluid-search autocomplete="off" label-text="Fluid search" name="form[fluid_search]" placeholder="Search" size="md" value="" id="form_fluid_search" data-form-detail="checked" data-form-event="cds-search-input" data-form-input="form_fluid_search-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
</cds-fluid-search>

        </div>

        <div style="display: grid; gap: 0.75rem;">
          <h3>Selects</h3>
          <input type="hidden" id="form_select-input" name="form[select]" value="option-1">
<cds-select name="form[select]" required-validity-message="Please fill out this field." size="md" value="option-1" id="form_select" data-form-detail="checked" data-form-event="cds-select-selected" data-form-input="form_select-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="label-text">
    Select option
  </div>
  
  
  
    <cds-select-item value="option-1">
  
      Option 1
    
</cds-select-item>
  
    <cds-select-item value="option-2">
  
      Option 2
    
</cds-select-item>
  
    <cds-select-item value="option-3">
  
      Option 3
    
</cds-select-item>
  

  
  
  
  

  
  
  
</cds-select>

          <input type="hidden" id="form_fluid_select-input" name="form[fluid_select]" value="option-2">
<cds-fluid-select name="form[fluid_select]" required-validity-message="Please fill out this field." size="md" value="option-2" id="form_fluid_select" data-form-detail="checked" data-form-event="cds-select-selected" data-form-input="form_fluid_select-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  <div slot="label-text">
    Fluid select
  </div>
  
  
  
    <cds-select-item value="option-1">
  
      Option 1
    
</cds-select-item>
  
    <cds-select-item value="option-2">
  
      Option 2
    
</cds-select-item>
  
    <cds-select-item value="option-3">
  
      Option 3
    
</cds-select-item>
  

  
  
  
  

  
  
  
</cds-fluid-select>

          <input type="hidden" id="form_dropdown-input" name="form[dropdown]" value="option-1">
<cds-dropdown direction="bottom" label="Dropdown" name="form[dropdown]" required-validity-message="Please fill out this field." size="md" type="" value="option-1" id="form_dropdown" data-form-detail="checked" data-form-event="cds-dropdown-selected" data-form-input="form_dropdown-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
  
    <cds-dropdown-item size="md" value="option-1">
  
      Option 1
    
</cds-dropdown-item>
  
    <cds-dropdown-item size="md" value="option-2">
  
      Option 2
    
</cds-dropdown-item>
  
    <cds-dropdown-item size="md" value="option-3">
  
      Option 3
    
</cds-dropdown-item>
  

  
  

  
</cds-dropdown>

          <input type="hidden" id="form_combo-input" name="form[combo]" value="option-2">
<cds-combo-box clear-selection-label="Clear selection" direction="bottom" label="Combo box" name="form[combo]" required-validity-message="Please fill out this field." size="md" type="" value="option-2" id="form_combo" data-form-detail="checked" data-form-event="cds-combo-box-selected" data-form-input="form_combo-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
    <cds-combo-box-item size="md" value="option-1">
  
      Option 1
    
</cds-combo-box-item>
  
    <cds-combo-box-item size="md" value="option-2">
  
      Option 2
    
</cds-combo-box-item>
  
    <cds-combo-box-item size="md" value="option-3">
  
      Option 3
    
</cds-combo-box-item>
  

  

</cds-combo-box>

          <input type="hidden" id="form_multi-input" name="form[multi]" value="option-1">
<cds-multi-select clear-selection-description="Total items selected: " clear-selection-text="To clear selection, press Delete or Backspace." direction="bottom" label="Multi select" locale="en" name="form[multi]" required-validity-message="Please fill out this field." selection-feedback="top-after-reopen" size="md" type="" value="option-1" id="form_multi" data-form-detail="checked" data-form-event="cds-multi-select-selected" data-form-input="form_multi-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
  
    <cds-multi-select-item size="md" value="option-1">
  
      Option 1
    
</cds-multi-select-item>
  
    <cds-multi-select-item size="md" value="option-2">
  
      Option 2
    
</cds-multi-select-item>
  
    <cds-multi-select-item size="md" value="option-3">
  
      Option 3
    
</cds-multi-select-item>
  

  
  

  
</cds-multi-select>

        </div>

        <div style="display: grid; gap: 0.75rem;">
          <h3>Date & time</h3>
          <input type="hidden" id="form_date-input" name="form[date]" value="2024-01-10">
<cds-date-picker allow-input close-on-select name="form[date]" value="2024-01-10" id="form_date" data-form-detail="checked" data-form-event="cds-date-picker-changed" data-form-input="form_date-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
            <cds-date-picker-input color-scheme="" kind="single" label-text="Start date" placeholder="mm/dd/yyyy" size="md">
  
</cds-date-picker-input>
          
</cds-date-picker>

          <input type="hidden" id="form_time-input" name="form[time]" value="09:30">
<cds-time-picker invalid-text="Invalid time format." max-length="5" name="form[time]" pattern="(1[012]|[1-9]):[0-5][0-9](\\s)?" placeholder="hh:mm" required-validity-message="Please fill out this field." size="md" type="text" value="09:30" warning-text="Warning message." id="form_time" data-form-detail="checked" data-form-event="change" data-form-input="form_time-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
            
  <div slot="label-text">
    Select time
  </div>
  
  
</cds-time-picker>

        </div>

        <div style="display: grid; gap: 0.75rem;">
          <h3>File upload</h3>
          <input type="hidden" id="form_attachments-input" name="form[attachments]" value="">
<cds-file-uploader label-title="Upload evidence" id="form_attachments" data-form-detail="checked" data-form-event="cds-file-uploader-button-changed" data-form-input="form_attachments-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
    <cds-file-uploader-button slot="drop-container">
  
      Add files
    
</cds-file-uploader-button>
  
  
    <cds-file-uploader-item size="md" state="complete">
  
      audit-report.pdf
    
  
  
</cds-file-uploader-item>
  
  
            

</cds-file-uploader>

        </div>
      </div>

      <div style="margin-top: 1.5rem;">
        <cds-button kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" phx-click="[[&quot;dispatch&quot;,{&quot;to&quot;:&quot;#form-components-form&quot;,&quot;event&quot;:&quot;submit&quot;}]]">
  
          Send form state
        
  
</cds-button>
      </div>
    </form>
  </div>

  <div style="display: grid; gap: 1.5rem;">
    <div class="psb-interactivity-panel">
  <h4>Form params (phx-change)</h4>
  <pre class="psb-event-state">%{}</pre>
  
</div>
    <div class="psb-interactivity-panel">
  <h4>Submitted params (phx-submit)</h4>
  <pre class="psb-event-state">%{}</pre>
  
</div>
  </div>
</div>
```
