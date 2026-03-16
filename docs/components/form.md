# `form`

### example

```heex
<div style="display: grid; gap: 2rem;">
      <Graphene.CarbonComponents.form>
        <Graphene.CarbonComponents.text_input id="form-name" name="name" value="Ada Lovelace">
          <:label_text>Name</:label_text>
        </Graphene.CarbonComponents.text_input>
        <Graphene.CarbonComponents.text_input id="form-role" name="role" value="Engineer">
          <:label_text>Role</:label_text>
        </Graphene.CarbonComponents.text_input>
        <Graphene.CarbonComponents.button type="submit">Submit</Graphene.CarbonComponents.button>
      </Graphene.CarbonComponents.form>

      <Graphene.CarbonComponents.form>
        <Graphene.CarbonComponents.text_input id="form-email" name="email" value="ada@graphene.dev" type="email">
          <:label_text>Email</:label_text>
        </Graphene.CarbonComponents.text_input>
        <Graphene.CarbonComponents.password_input id="form-password" name="password" value="password">
          <:label_text>Password</:label_text>
        </Graphene.CarbonComponents.password_input>
        <Graphene.CarbonComponents.button kind="secondary" type="submit">Create account</Graphene.CarbonComponents.button>
      </Graphene.CarbonComponents.form>
    </div>
```

```html
<div style="display: grid; gap: 2rem;">
  <form>
  
  
  
  <cds-form>
  
    
    <input type="hidden" id="name-input" name="name" value="Ada Lovelace">
<cds-text-input hidePasswordLabel="Hide password" name="name" required-validity-message="Please fill out this field." showPasswordLabel="Show password" size="md" tooltipAlignment="center" tooltipDirection="bottom" type="text" value="Ada Lovelace" id="form-name" data-form-detail="checked" data-form-event="input" data-form-input="name-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
      
  
  <div slot="label-text">
    Name
  </div>
  
</cds-text-input>

    <input type="hidden" id="role-input" name="role" value="Engineer">
<cds-text-input hidePasswordLabel="Hide password" name="role" required-validity-message="Please fill out this field." showPasswordLabel="Show password" size="md" tooltipAlignment="center" tooltipDirection="bottom" type="text" value="Engineer" id="form-role" data-form-detail="checked" data-form-event="input" data-form-input="role-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
      
  
  <div slot="label-text">
    Role
  </div>
  
</cds-text-input>

    <cds-button kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="submit">
  Submit
  
</cds-button>
  
  
</cds-form>

</form>

  <form>
  
  
  
  <cds-form>
  
    
    <input type="hidden" id="email-input" name="email" value="ada@graphene.dev">
<cds-text-input hidePasswordLabel="Hide password" name="email" required-validity-message="Please fill out this field." showPasswordLabel="Show password" size="md" tooltipAlignment="center" tooltipDirection="bottom" type="email" value="ada@graphene.dev" id="form-email" data-form-detail="checked" data-form-event="input" data-form-input="email-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
      
  
  <div slot="label-text">
    Email
  </div>
  
</cds-text-input>

    <input type="hidden" id="password-input" name="password" value="password">
<cds-password-input hide-password-label="Hide password" name="password" required-validity-message="Please fill out this field." show-password-label="Show password" size="md" tooltip-alignment="center" tooltip-position="bottom" type="password" value="password" id="form-password" data-form-detail="checked" data-form-event="input" data-form-input="password-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
      
  
  <div slot="label-text">
    Password
  </div>
  
</cds-password-input>

    <cds-button kind="secondary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="submit">
  Create account
  
</cds-button>
  
  
</cds-form>

</form>
</div>
```
