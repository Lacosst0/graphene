defmodule Storybook.ProductComponents.StoryAssets.SetOfTags do
  use PhoenixStorybook.Story, :example
  use Graphene, [:html, :live]
  alias Graphene.CarbonComponents, as: Carbon

  def doc do
    """
Story-only helper used by IBM Products examples to show tag sets.
Use Carbon tags directly when composing product components.
"""
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
      <Carbon.tag type="cool-gray">Draft</Carbon.tag>
      <Carbon.tag type="green">Active</Carbon.tag>
      <Carbon.tag type="blue">In review</Carbon.tag>
      <Carbon.tag type="magenta">Needs attention</Carbon.tag>
      <Carbon.tag type="gray">Archived</Carbon.tag>
    </div>
    """
  end
end
