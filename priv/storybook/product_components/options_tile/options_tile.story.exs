defmodule Storybook.ProductComponents.OptionsTile do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.ProductComponents.options_tile/1

  def doc do
    Storybook.Doc.markdown("""
Options tiles reveal additional configuration details on demand.
Use the summary, toggle, and body slots to keep the header concise.
""")
  end

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{
          title_id: "title-01",
          title_text: "Language",
          size: "lg",
          default_open: false
        },
        slots: [
          ~S|<:summary>
  <span>English - Locale: English</span>
</:summary>
<:toggle>
  <Graphene.CarbonComponents.toggle id="language-toggle" size="sm" hide_label />
</:toggle>
<:body>
  <div style="display: grid; gap: 1rem;">
    <p>
      User interface defines the language the application is displayed in.
      Locale sets regional formats for date and currency.
    </p>
    <Graphene.CarbonComponents.dropdown name="language-ui" label="User interface">
      <:title_text>User interface</:title_text>
      <Graphene.CarbonComponents.dropdown_item value="option-0">English</Graphene.CarbonComponents.dropdown_item>
      <Graphene.CarbonComponents.dropdown_item value="option-1">Spanish</Graphene.CarbonComponents.dropdown_item>
    </Graphene.CarbonComponents.dropdown>
    <Graphene.CarbonComponents.dropdown name="language-locale" label="Locale">
      <:title_text>Locale</:title_text>
      <Graphene.CarbonComponents.dropdown_item value="option-0">English</Graphene.CarbonComponents.dropdown_item>
      <Graphene.CarbonComponents.dropdown_item value="option-1">French</Graphene.CarbonComponents.dropdown_item>
    </Graphene.CarbonComponents.dropdown>
  </div>
</:body>|
        ]
      }
    ]
  end
end
