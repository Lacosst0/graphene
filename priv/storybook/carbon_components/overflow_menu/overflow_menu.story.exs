defmodule Storybook.CarbonComponents.OverflowMenu do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.overflow_menu/1

  def doc do
    Storybook.Doc.markdown("""
Overflow menus hold additional actions when space is limited. Use them for
secondary actions in toolbars, cards, or tables.

Pair .overflow_menu with .icon_button triggers and keep the menu focused on less
frequent actions.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        slots: [
          ~S|<:icon>
  <Graphene.Icons.icon fit="width" name="overflow-menu--horizontal" />
</:icon>
<:tooltip_content>Options</:tooltip_content>
<:item>Action 1</:item>
<:item>Action 2</:item>
<:item danger>Delete</:item>|
        ]
      },
      %Variation{
        id: :autoalign,
        attributes: %{autoalign: true},
        slots: [
          ~S|<:icon>
  <Graphene.Icons.icon fit="width" name="overflow-menu--horizontal" />
</:icon>
<:tooltip_content>Auto align</:tooltip_content>
<:item>Edit</:item>
<:item>Duplicate</:item>|
        ]
      },
      %Variation{
        id: :disabled,
        attributes: %{disabled: true},
        slots: [
          ~S|<:icon>
  <Graphene.Icons.icon fit="width" name="overflow-menu--horizontal" />
</:icon>
<:tooltip_content>Disabled</:tooltip_content>
<:item>Action 1</:item>|
        ]
      }
    ]
  end
end
