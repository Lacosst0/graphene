defmodule Storybook.ProductComponents.Checklist do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.ProductComponents.checklist/1

  def doc do
    Storybook.Doc.markdown("""
Checklists show task progress with grouped steps and status indicators.
Use the header slots for custom progress visuals and long titles.
""")
  end

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{
          title: "Setup checklist",
          chart_label: "15% complete",
          chart_value: "0.15",
          toggle_label: "Toggle",
          toggle_label_align: "top",
          toggle_aria_label: "Checklist toggle",
          view_all_label: "View all (5)",
          open: true
        },
        slots: [
          ~S|<Graphene.ProductComponents.checklist_group title="Section label">
  <:item label="Create workspace" status="completed" />
  <:item label="Invite collaborators" status="error" clickable />
  <:item label="Connect data" status="in progress" clickable />
  <:item label="Configure alerts" status="not started" clickable />
  <:item label="Review policies" status="disabled" />
</Graphene.ProductComponents.checklist_group>|
        ]
      },
      %Variation{
        id: :with_custom_header,
        attributes: %{
          chart_value: "0.6",
          toggle_label: "Toggle",
          toggle_label_align: "top",
          toggle_aria_label: "Checklist toggle",
          view_all_label: "View all (8)",
          open: true
        },
        slots: [
          ~S|<:header_chart>
  <Graphene.CarbonComponents.icon name="list--checked" size={32} />
</:header_chart>
<:header_title>
  <Graphene.ProductComponents.truncated_text
    value="A longer header title to demonstrate truncation and tooltip"
    lines="2"
    type="tooltip"
    align="bottom"
  />
</:header_title>
<:header_chart_label>
  <Graphene.ProductComponents.truncated_text
    value="60% complete with a longer label for overflow"
    lines="2"
    type="tooltip"
    align="bottom"
  />
</:header_chart_label>
<Graphene.ProductComponents.checklist_group title="Section label">
  <:item label="Create workspace" status="completed" />
  <:item label="Invite collaborators" status="error" clickable />
  <:item label="Connect data" status="in progress" clickable />
  <:item label="Configure alerts" status="not started" clickable />
</Graphene.ProductComponents.checklist_group>
<Graphene.ProductComponents.checklist_group title="Next steps">
  <:item label="Enable backups" status="not started" clickable />
  <:item label="Set retention" status="not started" clickable />
  <:item label="Share dashboard" status="not started" clickable />
</Graphene.ProductComponents.checklist_group>|
        ]
      },
      %Variation{
        id: :closed_with_view_all,
        attributes: %{
          title: "Setup checklist",
          chart_label: "15% complete",
          chart_value: "0.15",
          toggle_label: "Toggle",
          toggle_label_align: "top",
          toggle_aria_label: "Checklist toggle",
          view_all_label: "View all (5)",
          open: false
        },
        slots: [
          ~S|<Graphene.ProductComponents.checklist_group title="Section label">
  <:item label="Create workspace" status="completed" />
  <:item label="Invite collaborators" status="error" clickable />
  <:item label="Connect data" status="in progress" clickable />
  <:item label="Configure alerts" status="not started" clickable />
  <:item label="Review policies" status="disabled" />
</Graphene.ProductComponents.checklist_group>|
        ]
      },
      %Variation{
        id: :closed_with_footer_action,
        attributes: %{
          title: "Setup checklist",
          chart_label: "15% complete",
          chart_value: "0.15",
          toggle_label: "Toggle",
          toggle_label_align: "top",
          toggle_aria_label: "Checklist toggle",
          open: false
        },
        slots: [
          ~S|<:checklist_footer>
  <Graphene.CarbonComponents.button kind="ghost" href="#">View all (5)</Graphene.CarbonComponents.button>
</:checklist_footer>
<Graphene.ProductComponents.checklist_group title="Section label">
  <:item label="Create workspace" status="completed" />
  <:item label="Invite collaborators" status="error" clickable />
  <:item label="Connect data" status="in progress" clickable />
  <:item label="Configure alerts" status="not started" clickable />
  <:item label="Review policies" status="disabled" />
</Graphene.ProductComponents.checklist_group>|
        ]
      }
    ]
  end
end
