defmodule Storybook.ProductComponents.PageHeader do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.ProductComponents.page_header/1

  def doc do
    Storybook.Doc.markdown("""
Page headers combine breadcrumb, content, and tabs for product pages.
Use content and breadcrumb actions to surface primary and secondary commands.
""")
  end

  def variations do
    [
      %Variation{
        id: :default,
        slots: [
          ~S|<Graphene.ProductComponents.page_header_breadcrumb border={true}>
  <:icon><Graphene.CarbonComponents.icon name="bee" size={16} /></:icon>
  <Graphene.CarbonComponents.breadcrumb>
    <Graphene.CarbonComponents.breadcrumb_item>
      <Graphene.CarbonComponents.breadcrumb_link href="#">Breadcrumb 1</Graphene.CarbonComponents.breadcrumb_link>
    </Graphene.CarbonComponents.breadcrumb_item>
    <Graphene.CarbonComponents.breadcrumb_item>
      <Graphene.CarbonComponents.breadcrumb_link href="#">Breadcrumb 2</Graphene.CarbonComponents.breadcrumb_link>
    </Graphene.CarbonComponents.breadcrumb_item>
  </Graphene.CarbonComponents.breadcrumb>
  <:content_actions>
    <Graphene.CarbonComponents.button size="md">
      Primary action
      <:icon>
        <Graphene.CarbonComponents.icon name="add" size={16} />
      </:icon>
    </Graphene.CarbonComponents.button>
  </:content_actions>
  <:page_actions>
    <Graphene.CarbonComponents.icon_button kind="ghost" size="md" tooltip_text="Action 1">
      <:icon name="activity" size={16} />
    </Graphene.CarbonComponents.icon_button>
    <Graphene.CarbonComponents.icon_button kind="ghost" size="md" tooltip_text="Action 2">
      <:icon name="ai-generate" size={16} />
    </Graphene.CarbonComponents.icon_button>
    <Graphene.CarbonComponents.icon_button kind="ghost" size="md" tooltip_text="Action 3">
      <:icon name="cloud-foundry--1" size={16} />
    </Graphene.CarbonComponents.icon_button>
  </:page_actions>
</Graphene.ProductComponents.page_header_breadcrumb>
<Graphene.ProductComponents.page_header_content title="Virtual-Machine-DAL-really-long-title-example">
  <Graphene.ProductComponents.page_header_content_text subtitle="Subtitle">
    Built for modern teams, our technology platform simplifies complexity with
    powerful APIs, real-time collaboration tools, and seamless integration.
  </Graphene.ProductComponents.page_header_content_text>
  <:page_actions>
    <Graphene.CarbonComponents.button size="md">
      Primary action
      <:icon>
        <Graphene.CarbonComponents.icon name="add" size={16} />
      </:icon>
    </Graphene.CarbonComponents.button>
  </:page_actions>
</Graphene.ProductComponents.page_header_content>
<Graphene.ProductComponents.page_header_tabs>
  <:scroller>
    <Graphene.ProductComponents.page_header_scroller>
      <:tooltip_content>Scroll tabs</:tooltip_content>
    </Graphene.ProductComponents.page_header_scroller>
  </:scroller>
  <Graphene.CarbonComponents.tabs value="tab-1">
    <Graphene.CarbonComponents.tab id="tab-1" target="tab-panel-1" value="tab-1">Tab 1</Graphene.CarbonComponents.tab>
    <Graphene.CarbonComponents.tab id="tab-2" target="tab-panel-2" value="tab-2">Tab 2</Graphene.CarbonComponents.tab>
    <Graphene.CarbonComponents.tab id="tab-3" target="tab-panel-3" value="tab-3">Tab 3</Graphene.CarbonComponents.tab>
    <Graphene.CarbonComponents.tab id="tab-4" target="tab-panel-4" value="tab-4">Tab 4</Graphene.CarbonComponents.tab>
    <Graphene.CarbonComponents.tab id="tab-5" target="tab-panel-5" value="tab-5">Tab 5</Graphene.CarbonComponents.tab>
  </Graphene.CarbonComponents.tabs>
</Graphene.ProductComponents.page_header_tabs>|
        ]
      },
      %Variation{
        id: :content_with_contextual_actions,
        slots: [
          ~S|<Graphene.ProductComponents.page_header_breadcrumb>
  <:icon><Graphene.CarbonComponents.icon name="bee" size={16} /></:icon>
  <Graphene.CarbonComponents.breadcrumb>
    <Graphene.CarbonComponents.breadcrumb_item>
      <Graphene.CarbonComponents.breadcrumb_link href="#">Breadcrumb 1</Graphene.CarbonComponents.breadcrumb_link>
    </Graphene.CarbonComponents.breadcrumb_item>
    <Graphene.CarbonComponents.breadcrumb_item>
      <Graphene.CarbonComponents.breadcrumb_link href="#">Breadcrumb 2</Graphene.CarbonComponents.breadcrumb_link>
    </Graphene.CarbonComponents.breadcrumb_item>
  </Graphene.CarbonComponents.breadcrumb>
</Graphene.ProductComponents.page_header_breadcrumb>
<Graphene.ProductComponents.page_header_content title="Contextual actions example">
  <Graphene.ProductComponents.page_header_content_text subtitle="Subtitle">
    Add contextual actions for in-page tasks that are scoped to the content.
  </Graphene.ProductComponents.page_header_content_text>
  <:contextual_actions>
    <Graphene.CarbonComponents.button kind="secondary" size="md">Edit</Graphene.CarbonComponents.button>
    <Graphene.CarbonComponents.button kind="tertiary" size="md">Duplicate</Graphene.CarbonComponents.button>
  </:contextual_actions>
</Graphene.ProductComponents.page_header_content>|
        ]
      },
      %Variation{
        id: :content_with_contextual_actions_and_page_actions,
        slots: [
          ~S|<Graphene.ProductComponents.page_header_breadcrumb>
  <:icon><Graphene.CarbonComponents.icon name="bee" size={16} /></:icon>
  <Graphene.CarbonComponents.breadcrumb>
    <Graphene.CarbonComponents.breadcrumb_item>
      <Graphene.CarbonComponents.breadcrumb_link href="#">Breadcrumb 1</Graphene.CarbonComponents.breadcrumb_link>
    </Graphene.CarbonComponents.breadcrumb_item>
    <Graphene.CarbonComponents.breadcrumb_item>
      <Graphene.CarbonComponents.breadcrumb_link href="#">Breadcrumb 2</Graphene.CarbonComponents.breadcrumb_link>
    </Graphene.CarbonComponents.breadcrumb_item>
  </Graphene.CarbonComponents.breadcrumb>
  <:page_actions>
    <Graphene.CarbonComponents.icon_button kind="ghost" size="md" tooltip_text="Action 1">
      <:icon name="activity" size={16} />
    </Graphene.CarbonComponents.icon_button>
    <Graphene.CarbonComponents.icon_button kind="ghost" size="md" tooltip_text="Action 2">
      <:icon name="ai-generate" size={16} />
    </Graphene.CarbonComponents.icon_button>
  </:page_actions>
</Graphene.ProductComponents.page_header_breadcrumb>
<Graphene.ProductComponents.page_header_content title="Contextual + page actions">
  <Graphene.ProductComponents.page_header_content_text subtitle="Subtitle">
    Combine contextual actions in the content area with page actions in the
    breadcrumb row.
  </Graphene.ProductComponents.page_header_content_text>
  <:contextual_actions>
    <Graphene.CarbonComponents.button kind="secondary" size="md">Edit</Graphene.CarbonComponents.button>
    <Graphene.CarbonComponents.button kind="tertiary" size="md">Duplicate</Graphene.CarbonComponents.button>
  </:contextual_actions>
  <:page_actions>
    <Graphene.CarbonComponents.button size="md">Primary action</Graphene.CarbonComponents.button>
  </:page_actions>
</Graphene.ProductComponents.page_header_content>|
        ]
      },
      %Variation{
        id: :content_with_hero_image,
        slots: [
          ~S|<Graphene.ProductComponents.page_header_hero_image>
  <img
    src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='640' height='320' viewBox='0 0 640 320'><defs><linearGradient id='g' x1='0' x2='1'><stop offset='0%' stop-color='%23dfe6e9'/><stop offset='100%' stop-color='%23b2bec3'/></linearGradient></defs><rect width='640' height='320' fill='url(%23g)'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23444' font-size='24' font-family='Arial'>Hero image</text></svg>"
    alt="Hero"
    style="width: 100%; display: block;"
  />
</Graphene.ProductComponents.page_header_hero_image>
<Graphene.ProductComponents.page_header_breadcrumb within_grid={true}>
  <Graphene.CarbonComponents.breadcrumb>
    <Graphene.CarbonComponents.breadcrumb_item>
      <Graphene.CarbonComponents.breadcrumb_link href="#">Breadcrumb 1</Graphene.CarbonComponents.breadcrumb_link>
    </Graphene.CarbonComponents.breadcrumb_item>
    <Graphene.CarbonComponents.breadcrumb_item>
      <Graphene.CarbonComponents.breadcrumb_link href="#">Breadcrumb 2</Graphene.CarbonComponents.breadcrumb_link>
    </Graphene.CarbonComponents.breadcrumb_item>
  </Graphene.CarbonComponents.breadcrumb>
</Graphene.ProductComponents.page_header_breadcrumb>
<Graphene.ProductComponents.page_header_content
  title="Hero image headline"
  within_grid={true}
>
  <Graphene.ProductComponents.page_header_content_text subtitle="Subtitle">
    Use hero imagery for marketing or key contextual moments.
  </Graphene.ProductComponents.page_header_content_text>
</Graphene.ProductComponents.page_header_content>|
        ]
      },
      %Variation{
        id: :content_with_icon,
        slots: [
          ~S|<Graphene.ProductComponents.page_header_content title="Content with icon">
  <:icon>
    <Graphene.CarbonComponents.icon name="bee" size={32} />
  </:icon>
  <Graphene.ProductComponents.page_header_content_text subtitle="Subtitle">
    Add a leading icon to reinforce the page purpose or product area.
  </Graphene.ProductComponents.page_header_content_text>
</Graphene.ProductComponents.page_header_content>|
        ]
      },
      %Variation{
        id: :tab_bar_with_tabs_and_tags,
        slots: [
          ~S|<Graphene.ProductComponents.page_header_tabs>
  <:tags>
    <Graphene.CarbonComponents.tag type="cool-gray">Draft</Graphene.CarbonComponents.tag>
    <Graphene.CarbonComponents.tag type="green">Active</Graphene.CarbonComponents.tag>
  </:tags>
  <:scroller>
    <Graphene.ProductComponents.page_header_scroller>
      <:tooltip_content>Scroll tabs</:tooltip_content>
    </Graphene.ProductComponents.page_header_scroller>
  </:scroller>
  <Graphene.CarbonComponents.tabs value="tab-1">
    <Graphene.CarbonComponents.tab id="tab-1" target="tab-panel-1" value="tab-1">Overview</Graphene.CarbonComponents.tab>
    <Graphene.CarbonComponents.tab id="tab-2" target="tab-panel-2" value="tab-2">Details</Graphene.CarbonComponents.tab>
    <Graphene.CarbonComponents.tab id="tab-3" target="tab-panel-3" value="tab-3">Assets</Graphene.CarbonComponents.tab>
    <Graphene.CarbonComponents.tab id="tab-4" target="tab-panel-4" value="tab-4">Settings</Graphene.CarbonComponents.tab>
  </Graphene.CarbonComponents.tabs>
</Graphene.ProductComponents.page_header_tabs>|
        ]
      }
    ]
  end
end
