defmodule Graphene do
  @moduledoc """
  Public Graphene facade.

  Usage:

      use Graphene, :html
      use Graphene, :live
      use Graphene, [:html, :live]

  <!-- STORYBOOK_DOCS:START -->

  ## Carbon Components Examples

  ### `accordion`

  ##### default

  ```heex
  <.accordion alignment="start">
    <:item title="Section 1" open={true}>
      This is the first section content.
    </:item>
    <:item title="Section 2">This is the second section content.</:item>
    <:item title="Disabled section" disabled={true}>
      This section is disabled but still visible for layout context.
    </:item>
  </.accordion>
  ```

  ##### flush

  ```heex
  <.accordion is_flush>
    <:item title="Overview" open={true}>Summary content.</:item>
    <:item title="Details">More details about the section.</:item>
  </.accordion>
  ```

  ##### group: sizes

  ```heex
  <.accordion size="sm">
    <:item title="First">Small content.</:item>
    <:item title="Second">More content.</:item>
  </.accordion>
  <.accordion size="md">
    <:item title="First">Small content.</:item>
    <:item title="Second">More content.</:item>
  </.accordion>
  <.accordion size="lg">
    <:item title="First">Small content.</:item>
    <:item title="Second">More content.</:item>
  </.accordion>
  ```


  ### `actionable_notification`

  #### notification/actionable

  ##### default

  ```heex
  <.actionable_notification action_button_label="View report">
    <:title>Backup completed</:title>
    <:subtitle>View the report for details</:subtitle>
  </.actionable_notification>
  ```

  ##### warning

  ```heex
  <.actionable_notification kind="warning" action_button_label="Manage">
    <:title>Storage almost full</:title>
    <:subtitle>Upgrade or remove files</:subtitle>
  </.actionable_notification>
  ```

  ##### error

  ```heex
  <.actionable_notification kind="error" action_button_label="Retry">
    <:title>Sync failed</:title>
    <:subtitle>Retry the sync</:subtitle>
  </.actionable_notification>
  ```


  ### `ai_label`

  ##### default

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

  ##### inline

  ```heex
  <.ai_label kind="inline" ai_text="AI-generated" ai_text_label="Status">
    <:body_text>
      <p class="secondary">Inline AI summary</p>
      <p class="secondary">Updated 2 mins ago</p>
    </:body_text>
    <:action_button>Review</:action_button>
  </.ai_label>
  ```

  ##### group: sizes

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


  ### `ai_skeleton_icon`

  #### ai_skeleton/icon

  ##### small

  ```heex
  <.ai_skeleton_icon custom_styles="width: 16px; height: 16px;"/>
  ```

  ##### medium

  ```heex
  <.ai_skeleton_icon custom_styles="width: 24px; height: 24px;"/>
  ```

  ##### large

  ```heex
  <.ai_skeleton_icon custom_styles="width: 32px; height: 32px;"/>
  ```


  ### `ai_skeleton_placeholder`

  #### ai_skeleton/placeholder

  ##### small

  ```heex
  <.ai_skeleton_placeholder style="width: 120px; height: 16px;"/>
  ```

  ##### medium

  ```heex
  <.ai_skeleton_placeholder style="width: 200px; height: 24px;"/>
  ```

  ##### large

  ```heex
  <.ai_skeleton_placeholder style="width: 280px; height: 32px;"/>
  ```


  ### `ai_skeleton_text`

  #### ai_skeleton/text

  ##### single

  ```heex
  <.ai_skeleton_text width="60%"/>
  ```

  ##### paragraph

  ```heex
  <.ai_skeleton_text paragraph line_count="4"/>
  ```

  ##### heading

  ```heex
  <.ai_skeleton_text width="40%" heading/>
  ```


  ### `breadcrumb`

  ##### default

  ```heex
  <.breadcrumb >
    <:item href="#">Home</:item>
    <:item href="#">Catalog</:item>
    <:item current>Current page</:item>
  </.breadcrumb>
  ```

  ##### no_trailing_slash

  ```heex
  <.breadcrumb no_trailing_slash>
    <:item href="#">Home</:item>
    <:item href="#">Library</:item>
    <:item current>Components</:item>
  </.breadcrumb>
  ```

  ##### small

  ```heex
  <.breadcrumb size="sm">
    <:item href="#">Home</:item>
    <:item href="#">Docs</:item>
    <:item current>Breadcrumb</:item>
  </.breadcrumb>
  ```


  ### `button`

  ##### primary

  ```heex
  <.button >
    Primary
  </.button>
  ```

  ##### group: kinds

  ```heex
  <.button kind="secondary">
    Secondary
  </.button>
  <.button kind="tertiary">
    Tertiary
  </.button>
  <.button kind="ghost">
    Ghost
  </.button>
  <.button kind="danger">
    Danger
  </.button>
  ```

  ##### group: sizes

  ```heex
  <.button size="sm">
    Size sm
  </.button>
  <.button size="md">
    Size md
  </.button>
  <.button size="lg">
    Size lg
  </.button>
  ```

  ##### disabled

  ```heex
  <.button disabled>
    Disabled
  </.button>
  ```


  ### `callout_notification`

  #### notification/callout

  ##### warning

  ```heex
  <.callout_notification kind="warning">
    <:title>Plan limit reached</:title>
    <:subtitle>Upgrade to continue</:subtitle>
  </.callout_notification>
  ```

  ##### success

  ```heex
  <.callout_notification kind="success">
    <:title>Payment received</:title>
    <:subtitle>Your invoice is paid</:subtitle>
  </.callout_notification>
  ```

  ##### error

  ```heex
  <.callout_notification kind="error">
    <:title>Payment failed</:title>
    <:subtitle>Update your card</:subtitle>
  </.callout_notification>
  ```


  ### `carbon_link`

  #### link

  ##### inline

  ```heex
  <.carbon_link href="#">
    Inline link
  </.carbon_link>
  ```

  ##### external

  ```heex
  <.carbon_link target="_blank" rel="noreferrer" href="#">
    External link
  </.carbon_link>
  ```

  ##### disabled

  ```heex
  <.carbon_link disabled href="#">
    Disabled link
  </.carbon_link>
  ```


  ### `chat_button`

  ##### default

  ```heex
  <.chat_button >
    Start chat
  </.chat_button>
  ```

  ##### quick_action

  ```heex
  <.chat_button is_quick_action>
    Quick action
  </.chat_button>
  ```

  ##### selected

  ```heex
  <.chat_button is_quick_action is_selected>
    Selected
  </.chat_button>
  ```

  ##### group: sizes

  ```heex
  <.chat_button size="sm">
    Chat button
  </.chat_button>
  <.chat_button size="md">
    Chat button
  </.chat_button>
  <.chat_button size="lg">
    Chat button
  </.chat_button>
  ```


  ### `checkbox_group`

  #### checkbox

  ##### default

  ```heex
  <.checkbox_group legend_text="Notifications">
    <:item label="Email" value="email" />
    <:item label="SMS" value="sms" />
  </.checkbox_group>
  ```

  ##### with_checked

  ```heex
  <.checkbox_group legend_text="Status">
    <:item label="Active" value="active" checked={true} />
    <:item label="Paused" value="paused" />
  </.checkbox_group>
  ```

  ##### invalid

  ```heex
  <.checkbox_group invalid legend_text="Required" invalid_text="Select at least one">
    <:item label="Option A" value="a" />
    <:item label="Option B" value="b" />
  </.checkbox_group>
  ```


  ### `code_snippet`

  ##### single

  ```heex
  <.code_snippet type="single">
    npm install graphene
  </.code_snippet>
  ```

  ##### inline

  ```heex
  <.code_snippet type="inline">
    mix test
  </.code_snippet>
  ```

  ##### multi

  ```heex
  <.code_snippet type="multi">
    mix graphene.generate
  </.code_snippet>
  ```

  ##### wrapped

  ```heex
  <.code_snippet type="single" wrap_text>
    npm install graphene --save
  </.code_snippet>
  ```


  ### `combo_box`

  ##### default

  ```heex
  <.combo_box label="Combo box" name="combo-box-default" title_text="Choose an option">
    <:item value="all">All</:item>
    <:item value="cloud">Cloud</:item>
    <:item value="edge">Edge</:item>
  </.combo_box>
  ```

  ##### inline

  ```heex
  <.combo_box label="Inline" name="combo-box-inline" type="inline" title_text="Inline combo">
    <:item value="ibm">IBM</:item>
    <:item value="redhat">Red Hat</:item>
    <:item value="hashicorp">HashiCorp</:item>
  </.combo_box>
  ```

  ##### group: sizes

  ```heex
  <.combo_box label="SM" name="combo-box-sm" size="sm" title_text="Size sm">
    <:item value="one">One</:item>
    <:item value="two">Two</:item>
  </.combo_box>
  <.combo_box label="MD" name="combo-box-md" size="md" title_text="Size md">
    <:item value="one">One</:item>
    <:item value="two">Two</:item>
  </.combo_box>
  <.combo_box label="LG" name="combo-box-lg" size="lg" title_text="Size lg">
    <:item value="one">One</:item>
    <:item value="two">Two</:item>
  </.combo_box>
  ```


  ### `combo_button`

  ##### default

  ```heex
  <.combo_button label="Primary action" size="lg">
    <:item label="Second action" />
    <:item label="Third action" />
    <:item label="Danger action" divider kind="danger" />
  </.combo_button>
  ```

  ##### small

  ```heex
  <.combo_button label="Small combo" size="sm">
    <:item label="Secondary" />
    <:item label="Tertiary" />
  </.combo_button>
  ```

  ##### disabled

  ```heex
  <.combo_button disabled label="Disabled">
    <:item label="Secondary" />
    <:item label="Tertiary" />
  </.combo_button>
  ```


  ### `contained_list`

  ##### default

  ```heex
  <.contained_list >
    <:label>Contained list</:label>
    <:item>First item</:item>
    <:item>Second item</:item>
    <:item>Third item</:item>
  </.contained_list>
  ```

  ##### interactive

  ```heex
  <.contained_list >
    <:label>Clickable list</:label>
    <:item clickable={true}>Clickable item</:item>
    <:item clickable={true}>Another action</:item>
    <:item disabled={true}>Disabled</:item>
  </.contained_list>
  ```

  ##### group: sizes

  ```heex
  <.contained_list size="sm">
    <:label>Size sm</:label>
    <:item>Alpha</:item>
    <:item>Beta</:item>
  </.contained_list>
  <.contained_list size="md">
    <:label>Size md</:label>
    <:item>Alpha</:item>
    <:item>Beta</:item>
  </.contained_list>
  <.contained_list size="lg">
    <:label>Size lg</:label>
    <:item>Alpha</:item>
    <:item>Beta</:item>
  </.contained_list>
  ```


  ### `content_switcher`

  ##### default

  ```heex
  <.content_switcher value="files">
    <:item value="files">Files</:item>
    <:item value="settings">Settings</:item>
  </.content_switcher>
  ```

  ##### low_contrast

  ```heex
  <.content_switcher value="tasks" low_contrast>
    <:item value="tasks">Tasks</:item>
    <:item value="insights">Insights</:item>
    <:item value="team">Team</:item>
  </.content_switcher>
  ```

  ##### group: sizes

  ```heex
  <.content_switcher size="sm" value="one">
    <:item value="one">One</:item>
    <:item value="two">Two</:item>
  </.content_switcher>
  <.content_switcher size="md" value="one">
    <:item value="one">One</:item>
    <:item value="two">Two</:item>
  </.content_switcher>
  <.content_switcher size="lg" value="one">
    <:item value="one">One</:item>
    <:item value="two">Two</:item>
  </.content_switcher>
  <.content_switcher size="xl" value="one">
    <:item value="one">One</:item>
    <:item value="two">Two</:item>
  </.content_switcher>
  ```


  ### `copy_button`

  ##### default

  ```heex
  <.copy_button >
    Copy
  </.copy_button>
  ```

  ##### top_align

  ```heex
  <.copy_button align="top">
    Copy
  </.copy_button>
  ```

  ##### disabled

  ```heex
  <.copy_button disabled feedback="Copied">
    Copy
  </.copy_button>
  ```


  ### `data_table`

  #### ai_label

  ##### row_labels

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

  ##### compact

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


  #### ai_label_expansion

  ##### ai_expand

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

  ##### compact

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


  #### ai_label_sort

  ##### sorting

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

  ##### compact

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


  #### basic

  ##### default

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

  ##### compact

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


  #### batch_actions

  ##### batch_actions

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

  ##### compact

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


  #### batch_expansion

  ##### batch_expansion

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

  ##### expandable_only

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


  #### dynamic

  ##### example

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


  #### expansion

  ##### expandable

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

  ##### compact

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


  #### filtering

  ##### persistent

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

  ##### compact

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


  #### interactivity

  ##### example

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


  #### overflow_menu_small

  ##### small

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

  ##### extra_small

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


  #### selection

  ##### checkboxes

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

  ##### preselected

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


  #### selection_radio

  ##### radio

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

  ##### radio_selected

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


  #### selection_radio_sorting

  ##### radio_sorting

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

  ##### compact

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


  #### sorting

  ##### sorting

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

  ##### compact

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


  #### toolbar

  ##### actions

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

  ##### compact

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


  #### toolbar_persistent

  ##### persistent

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

  ##### compact

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


  #### toolbar_persistent_small

  ##### small

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

  ##### extra_small

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


  ### `date_picker`

  ##### single

  ```heex
  <.date_picker name="date-picker-single" date_format="d/m/Y">
    <:input label="Start date" placeholder="dd/mm/yyyy" />
  </.date_picker>
  ```

  ##### range

  ```heex
  <.date_picker name="date-picker-range" value="2024-01-10/2024-01-14" date_format="d/m/Y">
    <:input label="Start" placeholder="dd/mm/yyyy" />
    <:input label="End" placeholder="dd/mm/yyyy" />
  </.date_picker>
  ```

  ##### disabled

  ```heex
  <.date_picker disabled name="date-picker-disabled" date_format="d/m/Y">
    <:input label="Disabled" placeholder="dd/mm/yyyy" disabled={true} />
  </.date_picker>
  ```


  ### `definition_tooltip`

  #### tooltip/definition

  ##### default

  ```heex
  <.definition_tooltip >
    Tooltip
  </.definition_tooltip>
  ```

  ##### short

  ```heex
  <.definition_tooltip >
    AI
  </.definition_tooltip>
  ```

  ##### long

  ```heex
  <.definition_tooltip >
    Confidence score
  </.definition_tooltip>
  ```


  ### `dropdown`

  ##### default

  ```heex
  <.dropdown name="dropdown-default" value="all">
    <:title_text>Dropdown</:title_text>
    <:item value="all">All</:item>
    <:item value="cloud">Cloud</:item>
    <:item value="edge">Edge</:item>
  </.dropdown>
  ```

  ##### inline

  ```heex
  <.dropdown name="dropdown-inline" type="inline" value="alpha">
    <:title_text>Inline</:title_text>
    <:item value="alpha">Alpha</:item>
    <:item value="beta">Beta</:item>
    <:item value="gamma">Gamma</:item>
  </.dropdown>
  ```

  ##### group: sizes

  ```heex
  <.dropdown name="dropdown-sm" size="sm" value="one">
    <:title_text>Size sm</:title_text>
    <:item value="one">One</:item>
    <:item value="two">Two</:item>
  </.dropdown>
  <.dropdown name="dropdown-md" size="md" value="one">
    <:title_text>Size md</:title_text>
    <:item value="one">One</:item>
    <:item value="two">Two</:item>
  </.dropdown>
  <.dropdown name="dropdown-lg" size="lg" value="one">
    <:title_text>Size lg</:title_text>
    <:item value="one">One</:item>
    <:item value="two">Two</:item>
  </.dropdown>
  ```


  ### `expandable_tile`

  ##### default

  ```heex
  <.expandable_tile >
      <:above_the_fold_content>
        <div>Above the fold content here</div>
      </:above_the_fold_content>
      <Graphene.CarbonComponents.tile_below_the_fold_content>
        <div>Below the fold content here</div>
      </Graphene.CarbonComponents.tile_below_the_fold_content>
    </.expandable_tile>
  ```

  ##### with_interactive

  ```heex
  <.expandable_tile with_interactive>
      <:above_the_fold_content>
        <div style="width: 100%;">
          <Graphene.CarbonComponents.heading>Usage limits</Graphene.CarbonComponents.heading>
          <p>Summarize the key status in the collapsed view.</p>
          <Graphene.CarbonComponents.button kind="ghost" size="sm">Manage</Graphene.CarbonComponents.button>
        </div>
      </:above_the_fold_content>
      <Graphene.CarbonComponents.tile_below_the_fold_content>
        <div style="width: 100%;">
          <Graphene.CarbonComponents.stack orientation="vertical" gap="2">
            <Graphene.CarbonComponents.link href="#">View details</Graphene.CarbonComponents.link>
            <Graphene.CarbonComponents.link href="#">See pricing</Graphene.CarbonComponents.link>
          </Graphene.CarbonComponents.stack>
        </div>
      </Graphene.CarbonComponents.tile_below_the_fold_content>
    </.expandable_tile>
  ```

  ##### narrow_content

  ```heex
  <.expandable_tile with_interactive expanded>
      <:above_the_fold_content>
        <div style="width: 100%;">
          <div style="max-width: 12rem;">
            <Graphene.CarbonComponents.heading>Starter plan</Graphene.CarbonComponents.heading>
            <p>Compact summary copy.</p>
          </div>
        </div>
      </:above_the_fold_content>
      <Graphene.CarbonComponents.tile_below_the_fold_content>
        <div style="width: 100%;">
          <div style="max-width: 12rem;">
            <p>Expanded details stay narrow but the tile remains full width.</p>
          </div>
        </div>
      </Graphene.CarbonComponents.tile_below_the_fold_content>
    </.expandable_tile>
  ```


  ### `feature_flags`

  #### toggle/feature_flag

  ##### single

  ```heex
  <.feature_flags >
    <Graphene.CarbonComponents.toggle name="feature-flag-single" label_a="On" label_b="Off" toggled={true}>
      <:label_text>Label</:label_text>
    </Graphene.CarbonComponents.toggle>
  </.feature_flags>
  ```

  ##### multiple

  ```heex
  <.feature_flags >
    <Graphene.CarbonComponents.toggle name="feature-flag-a" label_a="On" label_b="Off" toggled={true}>
      <:label_text>Feature A</:label_text>
    </Graphene.CarbonComponents.toggle>
    <Graphene.CarbonComponents.toggle name="feature-flag-b" label_a="On" label_b="Off">
      <:label_text>Feature B</:label_text>
    </Graphene.CarbonComponents.toggle>
  </.feature_flags>
  ```

  ##### disabled

  ```heex
  <.feature_flags >
    <Graphene.CarbonComponents.toggle name="feature-flag-disabled" label_a="On" label_b="Off" disabled={true}>
      <:label_text>Disabled</:label_text>
    </Graphene.CarbonComponents.toggle>
  </.feature_flags>
  ```


  ### `file_uploader`

  #### basic

  ##### default

  ```heex
  <.file_uploader
    id="basic-single-default"
    name="file_uploader_default"
    label_description="Max file size 500mb"
    label_title="Upload files"
  >
    <:button>Upload</:button>
    <:item state="complete">report.pdf</:item>
  </.file_uploader>
  ```

  ##### multiple

  ```heex
  <.file_uploader
    id="basic-single-multiple"
    name="file_uploader_multiple"
    label_description="PNG or SVG"
    label_title="Upload assets"
  >
    <:button accept=".png .svg" multiple={true}>Add files</:button>
    <:item state="uploading">logo.svg</:item>
    <:item state="edit">banner.png</:item>
  </.file_uploader>
  ```

  ##### disabled

  ```heex
  <.file_uploader
    disabled
    id="basic-single-disabled"
    name="file_uploader_disabled"
    label_description="Uploads disabled"
    label_title="Disabled"
  >
    <:button disabled={true}>Upload</:button>
  </.file_uploader>
  ```


  #### upload

  ##### example

  ```heex
  <div style="display: grid; gap: 1.5rem; max-width: 36rem; position: relative;">
          <div
            id="file-uploader-bridge"
            phx-hook={"\#{inspect(__MODULE__)}.CarbonFileUploaderBridge"}
            data-accept=".pdf .png .txt"
          >
            <Graphene.CarbonComponents.file_uploader
              id="file-uploader"
              name="file_uploader_upload"
              label_title="Upload evidence"
              label_description="PDF, PNG, or TXT (max 5 MB)"
            >
              <:button>Select files</:button>

            <%= for entry <- @selected_files do %>
              <Graphene.CarbonComponents.file_uploader_item
                id={"file-upload-entry-\#{entry.id}"}
                data-file-id={entry.id}
                state="edit"
              >
                {entry.name} ({format_size(entry.size)})
              </Graphene.CarbonComponents.file_uploader_item>
            <% end %>

            <%= for file <- @uploaded_files do %>
              <Graphene.CarbonComponents.file_uploader_item
                id={"file-upload-complete-\#{file.id}"}
                data-file-id={file.id}
                state="complete"
              >
                {file.name} ({format_size(file.size)}) —
                <code data-testid="carbon-file-upload-hash">{file.hash}</code>
              </Graphene.CarbonComponents.file_uploader_item>
            <% end %>
            </Graphene.CarbonComponents.file_uploader>
          </div>

          <.file_uploader_bridge_hook />

          <div style="display: flex; gap: 0.75rem; margin-top: 0.75rem;">
            <Graphene.CarbonComponents.button kind="secondary" type="button" phx-click="clear_uploads">
              Clear
            </Graphene.CarbonComponents.button>
            <Graphene.CarbonComponents.button
              kind="primary"
              type="button"
              phx-click="upload_submit"
              data-testid="carbon-file-upload-submit"
              disabled={@selected_files == []}
            >
              Upload & compute hash
            </Graphene.CarbonComponents.button>
          </div>

      </div>
  ```


  ### `fluid_number_input`

  ##### default

  ```heex
  <.fluid_number_input name="fluid-number-default" value="10">
    <:label_text>Quantity</:label_text>
  </.fluid_number_input>
  ```

  ##### helper_text

  ```heex
  <.fluid_number_input name="fluid-number-helper" value="2">
    <:label_text>Seats</:label_text>
    <:helper_text>Available seats</:helper_text>
  </.fluid_number_input>
  ```

  ##### invalid

  ```heex
  <.fluid_number_input name="fluid-number-invalid" value="0">
    <:label_text>Licenses</:label_text>
    <:validity_message>Minimum is 1</:validity_message>
  </.fluid_number_input>
  ```


  ### `fluid_search`

  ##### default

  ```heex
  <.fluid_search name="fluid-search-default" placeholder="Search" label_text="Search"/>
  ```

  ##### expandable

  ```heex
  <.fluid_search name="fluid-search-expandable" expandable expanded label_text="Search"/>
  ```

  ##### disabled

  ```heex
  <.fluid_search disabled name="fluid-search-disabled" label_text="Search"/>
  ```

  ##### group: sizes

  ```heex
  <.fluid_search name="fluid-search-sm" size="sm" label_text="Size sm"/>
  <.fluid_search name="fluid-search-md" size="md" label_text="Size md"/>
  <.fluid_search name="fluid-search-lg" size="lg" label_text="Size lg"/>
  ```


  ### `fluid_select`

  ##### default

  ```heex
  <.fluid_select name="fluid-select-default">
    <:label_text>Select an option</:label_text>
    <:item value="">Choose one</:item>
    <:item value="option-1">Option 1</:item>
    <:item value="option-2">Option 2</:item>
    <:item value="option-3">Option 3</:item>
  </.fluid_select>
  ```

  ##### inline

  ```heex
  <.fluid_select name="fluid-select-inline" inline>
    <:label_text>Inline</:label_text>
    <:item value="alpha">Alpha</:item>
    <:item value="beta">Beta</:item>
  </.fluid_select>
  ```

  ##### invalid

  ```heex
  <.fluid_select invalid name="fluid-select-invalid" invalid_text="Pick a value">
    <:label_text>Required</:label_text>
    <:item value="one">One</:item>
    <:item value="two">Two</:item>
  </.fluid_select>
  ```


  ### `fluid_text_input`

  ##### default

  ```heex
  <.fluid_text_input name="fluid-text-input-default" value="">
    <:label_text>First name</:label_text>
  </.fluid_text_input>
  ```

  ##### helper_text

  ```heex
  <.fluid_text_input name="fluid-text-input-helper" value="Ada">
    <:label_text>Name</:label_text>
    <:helper_text>As shown on your ID</:helper_text>
  </.fluid_text_input>
  ```

  ##### invalid

  ```heex
  <.fluid_text_input name="fluid-text-input-invalid" value="">
    <:label_text>Username</:label_text>
    <:validity_message>Required</:validity_message>
  </.fluid_text_input>
  ```


  ### `fluid_textarea`

  ##### default

  ```heex
  <.fluid_textarea name="fluid-textarea-default" rows="3">
    <:label_text>Notes</:label_text>
  </.fluid_textarea>
  ```

  ##### helper_text

  ```heex
  <.fluid_textarea name="fluid-textarea-helper" rows="4">
    <:label_text>Description</:label_text>
    <:helper_text>Max 300 characters</:helper_text>
  </.fluid_textarea>
  ```

  ##### invalid

  ```heex
  <.fluid_textarea name="fluid-textarea-invalid" rows="3">
    <:label_text>Reason</:label_text>
    <:validity_message>Required</:validity_message>
  </.fluid_textarea>
  ```


  ### `form`

  ##### example

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


  ### `form_components`

  ##### example

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


  ### `form_group`

  ##### default

  ```heex
  <.form_group legend_text="Notification settings">
    <Graphene.CarbonComponents.checkbox id="form-group-email" label_text="Email" />
    <Graphene.CarbonComponents.checkbox id="form-group-sms" label_text="SMS" />
  </.form_group>
  ```

  ##### with_message

  ```heex
  <.form_group message legend_text="Alerts" message_text="Pick at least one">
    <Graphene.CarbonComponents.checkbox id="form-group-product" label_text="Product updates" />
    <Graphene.CarbonComponents.checkbox id="form-group-security" label_text="Security" />
  </.form_group>
  ```

  ##### invalid

  ```heex
  <.form_group invalid message legend_text="Required" message_text="Select one option">
    <Graphene.CarbonComponents.checkbox id="form-group-a" label_text="Option A" />
    <Graphene.CarbonComponents.checkbox id="form-group-b" label_text="Option B" />
  </.form_group>
  ```


  ### `grid`

  ##### default

  ```heex
  <.grid >
    <:column sm="2">Column 1</:column>
    <:column sm="2">Column 2</:column>
    <:column sm="2">Column 3</:column>
  </.grid>
  ```

  ##### condensed

  ```heex
  <.grid condensed>
    <:column sm="1">One</:column>
    <:column sm="1">Two</:column>
    <:column sm="1">Three</:column>
    <:column sm="1">Four</:column>
  </.grid>
  ```

  ##### full_width

  ```heex
  <.grid full_width>
    <:column sm="2">Wide 1</:column>
    <:column sm="2">Wide 2</:column>
    <:column sm="2">Wide 3</:column>
  </.grid>
  ```


  ### `heading`

  ##### default

  ```heex
  <.heading >
    Section heading
  </.heading>
  ```

  ##### short

  ```heex
  <.heading >
    Overview
  </.heading>
  ```

  ##### long

  ```heex
  <.heading >
    Project timeline and deliverables
  </.heading>
  ```


  ### `icon`

  ##### cursor_16

  ```heex
  <.icon name="3d-cursor" size="16"/>
  ```

  ##### add_20

  ```heex
  <.icon name="add" size="20"/>
  ```

  ##### account_32

  ```heex
  <.icon name="account" size="32"/>
  ```


  ### `icon_button`

  ##### ghost

  ```heex
  <.icon_button kind="ghost" tooltip_text="Settings">
    <:icon name="3d-cursor" size="16" />
  </.icon_button>
  ```

  ##### primary

  ```heex
  <.icon_button kind="primary" tooltip_text="Notifications">
    <:icon size="16">
      <svg width="16" height="16" viewBox="0 0 16 16">
        <rect x="2" y="2" width="12" height="12" fill="currentColor" />
      </svg>
    </:icon>
  </.icon_button>
  ```

  ##### danger

  ```heex
  <.icon_button kind="danger" tooltip_text="Delete">
    <:icon size="16">
      <svg width="16" height="16" viewBox="0 0 16 16">
        <polygon points="8,2 14,14 2,14" fill="currentColor" />
      </svg>
    </:icon>
  </.icon_button>
  ```


  ### `icon_indicator`

  ##### failed

  ```heex
  <.icon_indicator label="Failed" kind="failed"/>
  ```

  ##### succeeded

  ```heex
  <.icon_indicator label="Succeeded" kind="succeeded"/>
  ```

  ##### informative

  ```heex
  <.icon_indicator label="Informative" kind="informative"/>
  ```

  ##### large

  ```heex
  <.icon_indicator label="Large" size="20" kind="succeeded"/>
  ```


  ### `inline_loading`

  ##### active

  ```heex
  <.inline_loading status="active">
    Loading...
  </.inline_loading>
  ```

  ##### finished

  ```heex
  <.inline_loading status="finished">
    Complete
  </.inline_loading>
  ```

  ##### error

  ```heex
  <.inline_loading status="error">
    Failed
  </.inline_loading>
  ```


  ### `inline_notification`

  #### notification/inline

  ##### info

  ```heex
  <.inline_notification kind="info">
    <:title>Updates available</:title>
    <:subtitle>Refresh to install the latest changes</:subtitle>
  </.inline_notification>
  ```

  ##### warning

  ```heex
  <.inline_notification kind="warning">
    <:title>Storage almost full</:title>
    <:subtitle>Clean up old files</:subtitle>
  </.inline_notification>
  ```

  ##### success

  ```heex
  <.inline_notification kind="success">
    <:title>Saved</:title>
    <:subtitle>Your changes were saved</:subtitle>
  </.inline_notification>
  ```


  ### `layer`

  ##### base

  ```heex
  <.layer level="0">
    <div style="padding: 1rem; border: 1px solid #e0e0e0;">Base layer</div>
  </.layer>
  ```

  ##### nested

  ```heex
  <.layer level="0">
    <div style="padding: 1rem; border: 1px solid #e0e0e0;">
      Base layer
      <Graphene.CarbonComponents.layer level="1">
        <div style="margin-top: 0.5rem; padding: 1rem; border: 1px dashed #8d8d8d;">
          Nested layer
        </div>
      </Graphene.CarbonComponents.layer>
    </div>
  </.layer>
  ```

  ##### deep

  ```heex
  <.layer level="0">
    <div style="padding: 1rem; border: 1px solid #e0e0e0;">
      Level 0
      <Graphene.CarbonComponents.layer level="1">
        <div style="margin-top: 0.5rem; padding: 1rem; border: 1px dashed #8d8d8d;">
          Level 1
          <Graphene.CarbonComponents.layer level="2">
            <div style="margin-top: 0.5rem; padding: 1rem; border: 1px dotted #525252;">
              Level 2
            </div>
          </Graphene.CarbonComponents.layer>
        </div>
      </Graphene.CarbonComponents.layer>
    </div>
  </.layer>
  ```


  ### `loading`

  ##### active

  ```heex
  <.loading active description="Loading"/>
  ```

  ##### inactive

  ```heex
  <.loading description="Idle"/>
  ```

  ##### small

  ```heex
  <.loading active size="sm" description="Loading"/>
  ```


  ### `menu`

  ##### default

  ```heex
  <div class="psb" style="position: relative; min-height: 240px;">
    <.menu label="Actions" open size="lg" y={140} x={200}>
      <Graphene.CarbonComponents.menu_item label="First action" />
      <Graphene.CarbonComponents.menu_item label="Second action" />
      <Graphene.CarbonComponents.menu_item_divider />
      <Graphene.CarbonComponents.menu_item kind="danger" label="Danger action" />
    </.menu>
  </div>
  ```

  ##### secondary

  ```heex
  <div class="psb" style="position: relative; min-height: 240px;">
    <.menu label="More" open size="md" y={140} x={520}>
      <Graphene.CarbonComponents.menu_item label="Edit" />
      <Graphene.CarbonComponents.menu_item label="Duplicate" />
    </.menu>
  </div>
  ```

  ##### group: sizes

  ```heex
  <div class="psb" style="position: relative; min-height: 240px;">
    <.menu label="Menu" open size="sm" y={360} x={200}>
      <Graphene.CarbonComponents.menu_item label="Item A" />
      <Graphene.CarbonComponents.menu_item label="Item B" />
    </.menu>
  </div>

  <div class="psb" style="position: relative; min-height: 240px;">
    <.menu label="Menu" open size="md" y={360} x={420}>
      <Graphene.CarbonComponents.menu_item label="Item A" />
      <Graphene.CarbonComponents.menu_item label="Item B" />
    </.menu>
  </div>

  <div class="psb" style="position: relative; min-height: 240px;">
    <.menu label="Menu" open size="lg" y={360} x={640}>
      <Graphene.CarbonComponents.menu_item label="Item A" />
      <Graphene.CarbonComponents.menu_item label="Item B" />
    </.menu>
  </div>

  <div class="psb" style="position: relative; min-height: 240px;">
    <.menu label="Menu" open size="xl" y={360} x={860}>
      <Graphene.CarbonComponents.menu_item label="Item A" />
      <Graphene.CarbonComponents.menu_item label="Item B" />
    </.menu>
  </div>
  ```


  ### `menu_button`

  ##### default

  ```heex
  <.menu_button label="Actions" size="lg" kind="primary">
    <:item label="First action" />
    <:item label="Second action" />
    <:item label="Third action" disabled />
  </.menu_button>
  ```

  ##### ghost

  ```heex
  <.menu_button label="Menu" size="md" kind="ghost">
    <:item label="Edit" />
    <:item label="Delete" kind="danger" />
  </.menu_button>
  ```

  ##### group: sizes

  ```heex
  <.menu_button label="Menu" size="sm">
    <:item label="Item A" />
    <:item label="Item B" />
  </.menu_button>
  <.menu_button label="Menu" size="md">
    <:item label="Item A" />
    <:item label="Item B" />
  </.menu_button>
  <.menu_button label="Menu" size="lg">
    <:item label="Item A" />
    <:item label="Item B" />
  </.menu_button>
  ```


  ### `modal`

  ##### example

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


  ### `multi_select`

  ##### default

  ```heex
  <.multi_select name="multi-select-default" style="min-width: 20rem;">
    <:title_text>Choose multiple</:title_text>
    <:item value="one">Option 1</:item>
    <:item value="two">Option 2</:item>
    <:item value="three">Option 3</:item>
  </.multi_select>
  ```

  ##### inline

  ```heex
  <.multi_select name="multi-select-inline" type="inline" style="min-width: 20rem;">
    <:title_text>Inline</:title_text>
    <:item value="alpha">Alpha</:item>
    <:item value="beta">Beta</:item>
  </.multi_select>
  ```

  ##### disabled

  ```heex
  <.multi_select disabled name="multi-select-disabled" style="min-width: 20rem;">
    <:title_text>Disabled</:title_text>
    <:item value="one">Option 1</:item>
    <:item value="two">Option 2</:item>
  </.multi_select>
  ```


  ### `number_input`

  ##### default

  ```heex
  <.number_input name="number-input-default" value="10">
    <:label_text>Quantity</:label_text>
  </.number_input>
  ```

  ##### helper_text

  ```heex
  <.number_input name="number-input-helper" value="2">
    <:label_text>Seats</:label_text>
    <:helper_text>Available seats</:helper_text>
  </.number_input>
  ```

  ##### invalid

  ```heex
  <.number_input invalid name="number-input-invalid" value="0" invalid_text="Minimum is 1">
    <:label_text>Licenses</:label_text>
  </.number_input>
  ```


  ### `ordered_list`

  #### list/ordered

  ##### default

  ```heex
  <.ordered_list >
    <:item>First item</:item>
    <:item>Second item</:item>
    <:item>Third item</:item>
  </.ordered_list>
  ```

  ##### native

  ```heex
  <.ordered_list native>
    <:item>Step one</:item>
    <:item>Step two</:item>
  </.ordered_list>
  ```

  ##### expressive

  ```heex
  <.ordered_list is_expressive>
    <:item>Expressive one</:item>
    <:item>Expressive two</:item>
  </.ordered_list>
  ```


  ### `overflow_menu`

  ##### default

  ```heex
  <.overflow_menu >
    <:icon>
      <Graphene.Icons.icon fit="width" name="overflow-menu--horizontal" />
    </:icon>
    <:tooltip_content>Options</:tooltip_content>
    <:item>Action 1</:item>
    <:item>Action 2</:item>
    <:item danger>Delete</:item>
  </.overflow_menu>
  ```

  ##### autoalign

  ```heex
  <.overflow_menu autoalign>
    <:icon>
      <Graphene.Icons.icon fit="width" name="overflow-menu--horizontal" />
    </:icon>
    <:tooltip_content>Auto align</:tooltip_content>
    <:item>Edit</:item>
    <:item>Duplicate</:item>
  </.overflow_menu>
  ```

  ##### disabled

  ```heex
  <.overflow_menu disabled>
    <:icon>
      <Graphene.Icons.icon fit="width" name="overflow-menu--horizontal" />
    </:icon>
    <:tooltip_content>Disabled</:tooltip_content>
    <:item>Action 1</:item>
  </.overflow_menu>
  ```


  ### `page_header`

  ##### default

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

  ##### with_actions

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

  ##### compact

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


  ### `pagination`

  ##### default

  ```heex
  <.pagination total_items="105" page_size="10"/>
  ```

  ##### small

  ```heex
  <.pagination size="sm" total_items="42" page_size="5"/>
  ```

  ##### unknown

  ```heex
  <.pagination total_items="" page_size="10" pages_unknown/>
  ```


  ### `password_input`

  ##### default

  ```heex
  <.password_input name="password-input-default">
    <:label_text>Password</:label_text>
  </.password_input>
  ```

  ##### helper_text

  ```heex
  <.password_input name="password-input-helper">
    <:label_text>New password</:label_text>
    <:helper_text>Minimum 8 characters</:helper_text>
  </.password_input>
  ```

  ##### invalid

  ```heex
  <.password_input invalid name="password-input-invalid" invalid_text="Required">
    <:label_text>Password</:label_text>
  </.password_input>
  ```


  ### `popover`

  #### autoalign

  ##### default

  ```heex
  <.popover autoalign alignment_axis_offset="8">
    <:trigger>
      <Graphene.CarbonComponents.button kind="secondary">Auto align popover</Graphene.CarbonComponents.button>
    </:trigger>
    <:content>
      <p>Auto-aligned popover content.</p>
    </:content>
  </.popover>
  ```

  ##### offset_16

  ```heex
  <.popover autoalign alignment_axis_offset="16">
    <:trigger>
      <Graphene.CarbonComponents.button kind="secondary">Offset 16</Graphene.CarbonComponents.button>
    </:trigger>
    <:content>
      <p>Offset axis example.</p>
    </:content>
  </.popover>
  ```

  ##### with_caret

  ```heex
  <.popover autoalign caret border>
    <:trigger>
      <Graphene.CarbonComponents.button kind="secondary">Caret popover</Graphene.CarbonComponents.button>
    </:trigger>
    <:content>
      <p>Auto align with caret.</p>
    </:content>
  </.popover>
  ```


  #### basic

  ##### bottom

  ```heex
  <.popover align="bottom">
    <:trigger>
      <Graphene.CarbonComponents.button kind="secondary">Open popover</Graphene.CarbonComponents.button>
    </:trigger>
    <:content>
      <p>Popover content goes here.</p>
    </:content>
  </.popover>
  ```

  ##### top

  ```heex
  <.popover align="top">
    <:trigger>
      <Graphene.CarbonComponents.button kind="secondary">Top popover</Graphene.CarbonComponents.button>
    </:trigger>
    <:content>
      <p>Top aligned content.</p>
    </:content>
  </.popover>
  ```

  ##### right

  ```heex
  <.popover align="right">
    <:trigger>
      <Graphene.CarbonComponents.button kind="secondary">Right popover</Graphene.CarbonComponents.button>
    </:trigger>
    <:content>
      <p>Right aligned content.</p>
    </:content>
  </.popover>
  ```


  ### `progress_bar`

  ##### quarter

  ```heex
  <.progress_bar max="100" value="25"/>
  ```

  ##### half

  ```heex
  <.progress_bar max="100" value="50"/>
  ```

  ##### complete

  ```heex
  <.progress_bar max="100" value="100"/>
  ```


  ### `progress_indicator`

  ##### default

  ```heex
  <.progress_indicator current_index="1">
    <:step label="First" complete />
    <:step label="Second" current />
    <:step label="Third" />
  </.progress_indicator>
  ```

  ##### vertical

  ```heex
  <.progress_indicator vertical current_index="2">
    <:step label="Plan" complete />
    <:step label="Build" complete />
    <:step label="Launch" current />
    <:step label="Iterate" />
  </.progress_indicator>
  ```

  ##### spaced

  ```heex
  <.progress_indicator current_index="0" space_equally>
    <:step label="Step one" current />
    <:step label="Step two" />
    <:step label="Step three" />
  </.progress_indicator>
  ```


  ### `radio_button_group`

  #### radio_button

  ##### default

  ```heex
  <.radio_button_group name="choices" legend_text="Choose one">
    <:item value="a" label="Option A" />
    <:item value="b" label="Option B" />
  </.radio_button_group>
  ```

  ##### disabled

  ```heex
  <.radio_button_group disabled name="choices-disabled" legend_text="Disabled">
    <:item value="a" label="Option A" />
    <:item value="b" label="Option B" />
  </.radio_button_group>
  ```

  ##### with_helper

  ```heex
  <.radio_button_group name="choices-help" legend_text="Select one" helper_text="Pick a single option">
    <:item value="a" label="Alpha" />
    <:item value="b" label="Beta" />
  </.radio_button_group>
  ```


  ### `search`

  ##### default

  ```heex
  <.search name="search-default" placeholder="Search" label_text="Search"/>
  ```

  ##### expandable

  ```heex
  <.search name="search-expandable" expandable expanded label_text="Search"/>
  ```

  ##### group: sizes

  ```heex
  <.search name="search-sm" size="sm" label_text="Size sm"/>
  <.search name="search-md" size="md" label_text="Size md"/>
  <.search name="search-lg" size="lg" label_text="Size lg"/>
  ```


  ### `select`

  ##### default

  ```heex
  <.select name="select-default">
    <:label_text>Select an option</:label_text>
    <:item value="">Choose one</:item>
    <:item value="option-1">Option 1</:item>
    <:item value="option-2">Option 2</:item>
    <:item value="option-3">Option 3</:item>
  </.select>
  ```

  ##### inline

  ```heex
  <.select name="select-inline" inline>
    <:label_text>Inline</:label_text>
    <:item value="alpha">Alpha</:item>
    <:item value="beta">Beta</:item>
  </.select>
  ```

  ##### invalid

  ```heex
  <.select invalid name="select-invalid" invalid_text="Pick a value">
    <:label_text>Required</:label_text>
    <:item value="one">One</:item>
    <:item value="two">Two</:item>
  </.select>
  ```


  ### `shape_indicator`

  ##### success

  ```heex
  <.shape_indicator label="Success" kind="success"/>
  ```

  ##### failed

  ```heex
  <.shape_indicator label="Failed" kind="failed"/>
  ```

  ##### warning

  ```heex
  <.shape_indicator label="Warning" kind="warning"/>
  ```


  ### `skeleton_icon`

  #### skeleton/icon

  ##### small

  ```heex
  <.skeleton_icon style="width: 16px; height: 16px;"/>
  ```

  ##### medium

  ```heex
  <.skeleton_icon style="width: 24px; height: 24px;"/>
  ```

  ##### large

  ```heex
  <.skeleton_icon style="width: 32px; height: 32px;"/>
  ```


  ### `skeleton_placeholder`

  #### skeleton/placeholder

  ##### small

  ```heex
  <.skeleton_placeholder style="width: 120px; height: 16px;"/>
  ```

  ##### medium

  ```heex
  <.skeleton_placeholder style="width: 200px; height: 24px;"/>
  ```

  ##### large

  ```heex
  <.skeleton_placeholder style="width: 280px; height: 32px;"/>
  ```


  ### `skeleton_text`

  #### skeleton/text

  ##### single

  ```heex
  <.skeleton_text width="60%"/>
  ```

  ##### paragraph

  ```heex
  <.skeleton_text paragraph line_count="4"/>
  ```

  ##### heading

  ```heex
  <.skeleton_text width="40%" heading/>
  ```


  ### `slider`

  ##### default

  ```heex
  <.slider max="100" min="0" name="slider-default" value="50">
    <:label_text>Slider</:label_text>
  </.slider>
  ```

  ##### stepped

  ```heex
  <.slider max="10" min="0" name="slider-stepped" value="3" step="1">
    <:label_text>Step</:label_text>
  </.slider>
  ```

  ##### disabled

  ```heex
  <.slider disabled max="100" min="0" name="slider-disabled" value="40">
    <:label_text>Disabled</:label_text>
  </.slider>
  ```


  ### `stack`

  ##### horizontal

  ```heex
  <.stack orientation="horizontal" gap="4">
    <Graphene.CarbonComponents.tag type="green">One</Graphene.CarbonComponents.tag>
    <Graphene.CarbonComponents.tag type="blue">Two</Graphene.CarbonComponents.tag>
    <Graphene.CarbonComponents.tag type="red">Three</Graphene.CarbonComponents.tag>
  </.stack>
  ```

  ##### vertical

  ```heex
  <.stack orientation="vertical" gap="3">
    <Graphene.CarbonComponents.tag type="purple">Alpha</Graphene.CarbonComponents.tag>
    <Graphene.CarbonComponents.tag type="cool-gray">Beta</Graphene.CarbonComponents.tag>
  </.stack>
  ```

  ##### tight

  ```heex
  <.stack orientation="horizontal" gap="2">
    <Graphene.CarbonComponents.tag type="magenta">A</Graphene.CarbonComponents.tag>
    <Graphene.CarbonComponents.tag type="cyan">B</Graphene.CarbonComponents.tag>
    <Graphene.CarbonComponents.tag type="teal">C</Graphene.CarbonComponents.tag>
  </.stack>
  ```


  ### `structured_list`

  ##### default

  ```heex
  <.structured_list
    rows={[%{id: "1", name: "Load Balancer 1", status: "Active"}, %{id: "2", name: "Load Balancer 2", status: "Disabled"}, %{id: "3", name: "Gateway", status: "Active"}]}
  >
    <:col :let={row} label="Name"><%= row.name %></:col>
    <:col :let={row} label="Status"><%= row.status %></:col>
  </.structured_list>
  ```

  ##### condensed

  ```heex
  <.structured_list
    rows={[%{id: "1", name: "Load Balancer 1", status: "Active"}, %{id: "2", name: "Load Balancer 2", status: "Disabled"}, %{id: "3", name: "Gateway", status: "Active"}]}
    condensed
  >
    <:col :let={row} label="Service"><%= row.name %></:col>
    <:col :let={row} label="State"><%= row.status %></:col>
  </.structured_list>
  ```

  ##### selectable

  ```heex
  <.structured_list
    rows={[%{id: "1", name: "Load Balancer 1", status: "Active"}, %{id: "2", name: "Load Balancer 2", status: "Disabled"}, %{id: "3", name: "Gateway", status: "Active"}]}
    row_id={#Function<0.109126383/1 in Storybook.CarbonComponents.StructuredList.row_id>}
    selection_name="structured-list"
    selected_ids={["1"]}
  >
    <:col :let={row} label="Name"><%= row.name %></:col>
    <:col :let={row} label="Status"><%= row.status %></:col>
  </.structured_list>
  ```


  ### `table_skeleton`

  #### data_table/skeleton

  ##### default

  ```heex
  <.table_skeleton column_count="6" row_count="5" show_header show_toolbar/>
  ```

  ##### compact

  ```heex
  <.table_skeleton column_count="4" row_count="3" show_header/>
  ```

  ##### large

  ```heex
  <.table_skeleton column_count="8" row_count="8" show_header show_toolbar/>
  ```


  ### `tabs`

  ##### default

  ```heex
  <.tabs >
    <:tab target="tab-panel-1" title="First">First</:tab>
    <:tab target="tab-panel-2" title="Second">Second</:tab>
  </.tabs>
  ```

  ##### contained

  ```heex
  <.tabs type="contained">
    <:tab target="tab-panel-a" title="Overview">Overview</:tab>
    <:tab target="tab-panel-b" title="Details">Details</:tab>
    <:tab target="tab-panel-c" title="Activity">Activity</:tab>
  </.tabs>
  ```

  ##### group: sizes

  ```heex
  <.tabs size="sm">
    <:tab target="tab-panel-one" title="One">One</:tab>
    <:tab target="tab-panel-two" title="Two">Two</:tab>
  </.tabs>
  <.tabs size="md">
    <:tab target="tab-panel-one" title="One">One</:tab>
    <:tab target="tab-panel-two" title="Two">Two</:tab>
  </.tabs>
  <.tabs size="lg">
    <:tab target="tab-panel-one" title="One">One</:tab>
    <:tab target="tab-panel-two" title="Two">Two</:tab>
  </.tabs>
  <.tabs size="xl">
    <:tab target="tab-panel-one" title="One">One</:tab>
    <:tab target="tab-panel-two" title="Two">Two</:tab>
  </.tabs>
  ```


  ### `tag`

  ##### blue

  ```heex
  <.tag type="blue">
    Blue
  </.tag>
  ```

  ##### green

  ```heex
  <.tag type="green">
    Green
  </.tag>
  ```

  ##### filter

  ```heex
  <.tag type="teal" filter>
    Filter
  </.tag>
  ```

  ##### group: sizes

  ```heex
  <.tag size="sm" type="cool-gray">
    SM
  </.tag>
  <.tag size="md" type="cool-gray">
    MD
  </.tag>
  <.tag size="lg" type="cool-gray">
    LG
  </.tag>
  ```


  ### `text_input`

  ##### default

  ```heex
  <.text_input name="text-input-default" value="Ada">
    <:label_text>First name</:label_text>
  </.text_input>
  ```

  ##### helper_text

  ```heex
  <.text_input name="text-input-helper" value="Lovelace">
    <:label_text>Last name</:label_text>
    <:helper_text>As shown on your ID</:helper_text>
  </.text_input>
  ```

  ##### invalid

  ```heex
  <.text_input invalid name="text-input-invalid" value="" invalid_text="Required">
    <:label_text>Username</:label_text>
  </.text_input>
  ```


  ### `textarea`

  ##### default

  ```heex
  <.textarea name="textarea-default" rows="3">
    <:label_text>Notes</:label_text>
  </.textarea>
  ```

  ##### helper_text

  ```heex
  <.textarea name="textarea-helper" rows="4">
    <:label_text>Description</:label_text>
    <:helper_text>Max 300 characters</:helper_text>
  </.textarea>
  ```

  ##### invalid

  ```heex
  <.textarea invalid name="textarea-invalid" rows="3" invalid_text="Required">
    <:label_text>Reason</:label_text>
  </.textarea>
  ```


  ### `tile`

  ##### default

  ```heex
  <.tile >
    Basic tile
  </.tile>
  ```

  ##### light

  ```heex
  <.tile color_scheme="light">
    Light tile
  </.tile>
  ```

  ##### rounded

  ```heex
  <.tile has_rounded_corners>
    Rounded corners
  </.tile>
  ```

  ##### content_layout

  ```heex
  <.tile >
    <Graphene.CarbonComponents.stack orientation="vertical" gap="3">
      <Graphene.CarbonComponents.heading>Plan overview</Graphene.CarbonComponents.heading>
      <p>Keep content concise and use stack for spacing instead of extra padding wrappers.</p>
      <Graphene.CarbonComponents.stack orientation="horizontal" gap="2">
        <Graphene.CarbonComponents.tag type="cool-gray">Draft</Graphene.CarbonComponents.tag>
        <Graphene.CarbonComponents.button kind="secondary" size="sm">Review</Graphene.CarbonComponents.button>
      </Graphene.CarbonComponents.stack>
    </Graphene.CarbonComponents.stack>
  </.tile>
  ```

  ##### group: scrollable_collection

  ```heex
  <div style="max-height: 16rem; overflow-y: auto; padding-right: 0.25rem;">
    <.tile >
      Alpha
    </.tile>
    <.tile >
      Beta
    </.tile>
    <.tile >
      Gamma
    </.tile>
    <.tile >
      Delta
    </.tile>
    <.tile >
      Epsilon
    </.tile>
  </div>
  ```


  ### `time_picker`

  ##### default

  ```heex
  <.time_picker name="time-picker-default" value="12:00">
    <:label_text>Start time</:label_text>
    <:select_item value="UTC" selected>UTC</:select_item>
    <:select_item value="PST">PST</:select_item>
  </.time_picker>
  ```

  ##### with_timezone

  ```heex
  <.time_picker name="time-picker-timezone" value="09:30">
    <:label_text>Meeting time</:label_text>
    <:select_item value="UTC" selected>UTC</:select_item>
    <:select_item value="CET">CET</:select_item>
  </.time_picker>
  ```

  ##### invalid

  ```heex
  <.time_picker invalid name="time-picker-invalid" value="" invalid_text="Enter a time">
    <:label_text>Start time</:label_text>
    <:select_item value="UTC" selected>UTC</:select_item>
  </.time_picker>
  ```


  ### `toast_notification`

  #### notification/toast

  ##### success

  ```heex
  <.toast_notification timeout="3000" kind="success">
    <:title>Saved</:title>
    <:subtitle>Your changes were saved</:subtitle>
  </.toast_notification>
  ```

  ##### info

  ```heex
  <.toast_notification timeout="5000" kind="info">
    <:title>New message</:title>
    <:subtitle>You have unread messages</:subtitle>
  </.toast_notification>
  ```

  ##### error

  ```heex
  <.toast_notification timeout="3000" kind="error">
    <:title>Failed</:title>
    <:subtitle>Try again</:subtitle>
  </.toast_notification>
  ```


  ### `toggle`

  #### basic

  ##### on

  ```heex
  <.toggle name="toggle-on" label_b="Off" label_a="On" toggled>
    <:label_text>Notifications</:label_text>
  </.toggle>
  ```

  ##### off

  ```heex
  <.toggle name="toggle-off" label_b="Off" label_a="On">
    <:label_text>Notifications</:label_text>
  </.toggle>
  ```

  ##### disabled

  ```heex
  <.toggle disabled name="toggle-disabled" label_b="Off" label_a="On">
    <:label_text>Disabled</:label_text>
  </.toggle>
  ```


  ### `toggletip`

  ##### default

  ```heex
  <.toggletip alignment="bottom" default_open>
    Toggletip label
    <:body_text>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </:body_text>
    <:action>
      <Graphene.CarbonComponents.link href="#">Link action</Graphene.CarbonComponents.link>
    </:action>
    <:action>
      <Graphene.CarbonComponents.button size="sm">Button</Graphene.CarbonComponents.button>
    </:action>
  </.toggletip>
  ```

  ##### top

  ```heex
  <.toggletip alignment="top">
    Info
    <:body_text>
      <p>More details about this option.</p>
    </:body_text>
  </.toggletip>
  ```

  ##### right

  ```heex
  <.toggletip alignment="right">
    Help
    <:body_text>
      <p>Short description goes here.</p>
    </:body_text>
    <:action>
      <Graphene.CarbonComponents.button size="sm">Got it</Graphene.CarbonComponents.button>
    </:action>
  </.toggletip>
  ```


  ### `tooltip`

  #### basic

  ##### bottom

  ```heex
  <.tooltip align="bottom">
    <:trigger>
      <Graphene.CarbonComponents.button kind="ghost" aria-labelledby="tooltip-content">Hover me</Graphene.CarbonComponents.button>
    </:trigger>
    <:content id="tooltip-content">Tooltip content</:content>
  </.tooltip>
  ```

  ##### top

  ```heex
  <.tooltip align="top">
    <:trigger>
      <Graphene.CarbonComponents.button kind="ghost" aria-labelledby="tooltip-top">Top tooltip</Graphene.CarbonComponents.button>
    </:trigger>
    <:content id="tooltip-top">Top content</:content>
  </.tooltip>
  ```

  ##### right

  ```heex
  <.tooltip align="right">
    <:trigger>
      <Graphene.CarbonComponents.button kind="ghost" aria-labelledby="tooltip-right">Right tooltip</Graphene.CarbonComponents.button>
    </:trigger>
    <:content id="tooltip-right">Right content</:content>
  </.tooltip>
  ```


  ### `tree_view`

  ##### default

  ```heex
  <.tree_view label="Primary navigation">
    <Graphene.CarbonComponents.tree_node label="Products" is_expanded={true} id="products">
      <Graphene.CarbonComponents.tree_node label="Catalog" id="catalog" />
      <Graphene.CarbonComponents.tree_node label="Pricing" id="pricing" />
      <Graphene.CarbonComponents.tree_node label="Releases" id="releases" />
    </Graphene.CarbonComponents.tree_node>
    <Graphene.CarbonComponents.tree_node label="Teams" is_expanded={true} id="teams">
      <Graphene.CarbonComponents.tree_node label="Design" id="design" />
      <Graphene.CarbonComponents.tree_node label="Engineering" id="engineering" selected />
      <Graphene.CarbonComponents.tree_node label="Marketing" id="marketing" disabled />
    </Graphene.CarbonComponents.tree_node>
    <Graphene.CarbonComponents.tree_node label="Settings" id="settings" active />
  </.tree_view>
  ```

  ##### nested

  ```heex
  <.tree_view label="Workspace navigation">
    <Graphene.CarbonComponents.tree_node label="Projects" is_expanded={true} id="projects">
      <Graphene.CarbonComponents.tree_node label="Alpha" id="alpha" />
      <Graphene.CarbonComponents.tree_node label="Beta" id="beta" />
      <Graphene.CarbonComponents.tree_node label="Gamma" id="gamma" />
    </Graphene.CarbonComponents.tree_node>
    <Graphene.CarbonComponents.tree_node label="Analytics" is_expanded={true} id="analytics">
      <Graphene.CarbonComponents.tree_node label="Dashboards" id="dashboards" />
      <Graphene.CarbonComponents.tree_node label="Reports" id="reports" />
    </Graphene.CarbonComponents.tree_node>
    <Graphene.CarbonComponents.tree_node label="Settings" id="settings" />
  </.tree_view>
  ```

  ##### sizes

  ```heex
  <.tree_view label="Small tree" size="sm">
    <Graphene.CarbonComponents.tree_node label="Favorites" is_expanded={true} id="favorites">
      <Graphene.CarbonComponents.tree_node label="Overview" id="overview" />
      <Graphene.CarbonComponents.tree_node label="Recently viewed" id="recent" />
    </Graphene.CarbonComponents.tree_node>
    <Graphene.CarbonComponents.tree_node label="Archive" id="archive" />
  </.tree_view>
  ```


  ### `ui_shell`

  ##### example

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


  ### `ui_shell_variants`

  #### fixed_side_nav

  ##### example

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


  #### fixed_side_nav_divider

  ##### example

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


  #### fixed_side_nav_icons

  ##### example

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


  #### header_base

  ##### example

  ```heex
  <Graphene.CarbonComponents.header aria-label="IBM Platform Name">
        <Graphene.CarbonComponents.header_name href="#" prefix="IBM">[Platform]</Graphene.CarbonComponents.header_name>
      </Graphene.CarbonComponents.header>
  ```


  #### header_base_actions

  ##### example

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


  #### header_base_actions_right_panel

  ##### example

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


  #### header_base_actions_switcher

  ##### example

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


  #### header_base_navigation

  ##### example

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


  #### header_base_navigation_actions

  ##### example

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


  #### header_base_navigation_actions_side_nav

  ##### example

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


  #### header_base_side_nav

  ##### example

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


  #### header_base_skip_to_content

  ##### example

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


  #### side_nav_large_items

  ##### example

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


  #### side_nav_rail

  ##### example

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


  #### side_nav_rail_header

  ##### example

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


  ### `unordered_list`

  #### list/unordered

  ##### default

  ```heex
  <.unordered_list >
    <:item>First item</:item>
    <:item>Second item</:item>
    <:item>Third item</:item>
  </.unordered_list>
  ```

  ##### nested

  ```heex
  <.unordered_list nested>
    <:item>Outer item</:item>
    <:item>Another item</:item>
  </.unordered_list>
  ```

  ##### expressive

  ```heex
  <.unordered_list is_expressive>
    <:item>Expressive one</:item>
    <:item>Expressive two</:item>
  </.unordered_list>
  ```

  <!-- STORYBOOK_DOCS:END -->
  """

  defmacro __using__(opts \\ :html) do
    opts =
      case opts do
        list when is_list(list) -> list
        atom when is_atom(atom) -> [atom]
        _ -> [opts]
      end

    include_html? = :html in opts
    include_live? = :live in opts

    basic_ast =
      cond do
        include_html? and include_live? ->
          quote do
            import Graphene.BasicComponents
          end

        include_html? ->
          quote do
            import Graphene.BasicComponents, except: [table_live: 1]
          end

        include_live? ->
          quote do
            import Graphene.BasicComponents, only: [table_live: 1]
          end

        true ->
          nil
      end

    quote do
      unquote(if include_html?, do: html_ast(), else: nil)
      unquote(if include_live?, do: live_ast(), else: nil)
      unquote(basic_ast)
    end
  end

  defp html_ast do
    quote do
      use Phoenix.Component
      import Phoenix.Component, except: [form: 1, form: 2, link: 1, link: 2]

      import Graphene.CarbonComponents,
        except: [
          button: 1,
          header: 1,
          icon: 1,
          modal: 1,
          table: 1,
          table_live: 1
        ]
    end
  end

  defp live_ast do
    quote do
    end
  end
end
