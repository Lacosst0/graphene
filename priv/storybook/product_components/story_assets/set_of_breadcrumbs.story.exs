defmodule Storybook.ProductComponents.StoryAssets.SetOfBreadcrumbs do
  use PhoenixStorybook.Story, :example
  use Graphene, [:html, :live]
  alias Graphene.CarbonComponents, as: Carbon

  def doc do
    """
Story-only helper used by IBM Products examples to show breadcrumb sets.
Compose breadcrumbs directly with Carbon components.
"""
  end

  @impl true
  def render(assigns) do
    ~H"""
    <Carbon.breadcrumb>
      <Carbon.breadcrumb_item>
        <Carbon.breadcrumb_link href="#">Home</Carbon.breadcrumb_link>
      </Carbon.breadcrumb_item>
      <Carbon.breadcrumb_item>
        <Carbon.breadcrumb_link href="#">Projects</Carbon.breadcrumb_link>
      </Carbon.breadcrumb_item>
      <Carbon.breadcrumb_item>
        <Carbon.breadcrumb_link href="#" is_currentpage>Current project</Carbon.breadcrumb_link>
      </Carbon.breadcrumb_item>
    </Carbon.breadcrumb>
    """
  end
end
