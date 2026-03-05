defmodule Storybook.Generated.CoreComponentsIndex do
  use PhoenixStorybook.Index

  def folder_name, do: "Internal Core Components"
  def folder_icon, do: {:fa, "lock", :light, "psb-mr-1"}
  def folder_open?, do: false
  def folder_index, do: 999
end
