defmodule Graphene.StorybookAliases do
  @moduledoc false

  def core_form(assigns), do: Graphene.Internal.CoreComponents.form(assigns)
  def core_link(assigns), do: Graphene.Internal.CoreComponents.link(assigns)
  def carbon_link(assigns), do: Graphene.CarbonComponents.link(assigns)
end
