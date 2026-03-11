defmodule Graphene.CodeGen.ProductAttrType do
  @moduledoc false

  alias Graphene.CodeGen.Component.AttrType
  alias Graphene.CodeGen.ProductMetadata

  def new(name) do
    AttrType.new_with_values(name, ProductMetadata.type_values())
  end
end
