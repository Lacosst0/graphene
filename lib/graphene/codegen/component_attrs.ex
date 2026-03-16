defmodule Graphene.CodeGen.ComponentAttrs do
  @moduledoc false

  def build_component_attrs(assigns, keys) do
    Enum.reduce(keys, %{}, fn key, acc ->
      Map.put(acc, key, Map.get(assigns, key))
    end)
  end

  def build_html_attrs(assigns, keys) do
    Enum.reduce(keys, %{}, fn {html, key}, acc ->
      Map.put(acc, html, Map.get(assigns, key))
    end)
  end
end
