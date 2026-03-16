defmodule Storybook.CarbonComponents.RadioButton do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.radio_button_group/1

  def doc do
    Storybook.Doc.markdown("""
Radio groups support single selection from a set of options. Use them when
options are few and mutually exclusive.

Pair .radio_button_group with .form_group and use .select when the list is long.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{legend_text: "Choose one", name: "choices"},
        slots: [
          ~S|<:item value="a" label="Option A" />
<:item value="b" label="Option B" />|
        ]
      },
      %Variation{
        id: :disabled,
        attributes: %{legend_text: "Disabled", name: "choices-disabled", disabled: true},
        slots: [
          ~S|<:item value="a" label="Option A" />
<:item value="b" label="Option B" />|
        ]
      },
      %Variation{
        id: :with_helper,
        attributes: %{legend_text: "Select one", name: "choices-help", helper_text: "Pick a single option"},
        slots: [
          ~S|<:item value="a" label="Alpha" />
<:item value="b" label="Beta" />|
        ]
      }
    ]
  end
end
