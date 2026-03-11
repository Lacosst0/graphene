defmodule Graphene.CodeGen.Component.Attr do
  @enforce_keys [:name, :htmlname, :atomname]
  defstruct [:name, :htmlname, :atomname, type: :any, opts: [], deprecated: false]
  alias Graphene.CodeGen.Util
  alias Graphene.CodeGen.Component.AttrType

  @doc """
  Works with the follwing json structure

  ```json
  {
      "name": "size",
      "description": "Accordion size should be sm, md, lg.",
      "type": "ACCORDION_SIZE",
      "default": "\"md\""
  }
  ```
  """
  def parse(%{"name" => name} = data, opts \\ []) do
    attr_type_module = Keyword.get(opts, :attr_type_module, AttrType)
    type = extract_type(data, attr_type_module)
    htmlname = extract_htmlname(data)
    atomname = extract_atomname(data)
    opts = extract_type_opts(data, type)
    doc_opts = extract_doc_opts(data)

    struct(
      __MODULE__,
      name: name,
      atomname: atomname,
      htmlname: htmlname,
      opts: opts ++ doc_opts,
      type: type.kind
    )
  end

  defp extract_htmlname(data) do
    case data do
      %{"attribute" => attrname} -> attrname
      %{"name" => name} -> name
    end
  end

  defp extract_atomname(%{"name" => name}) do
    Util.camel2snake(name)
    |> String.replace("-", "_")
    |> Util.atom_repr()
  end

  defp extract_type(data, attr_type_module) do
    Map.get(data, "type") |> attr_type_module.new()
  end

  defp extract_doc_opts(%{"description" => doc}), do: [doc: doc]
  defp extract_doc_opts(_data), do: []

  defp extract_type_opts(%{"default" => ~S|""|}, %{kind: :string, values: nil}) do
    [default: nil]
  end

  defp extract_type_opts(%{"default" => default}, %{kind: :string, values: nil}) do
    [default: default |> String.trim("\"")]
  end

  defp extract_type_opts(%{"default" => default}, %{kind: :string, values: options})
       when is_list(options) do
    default = default |> String.trim("\"")

    if Enum.member?(options, default) do
      [default: default, values: options]
    else
      [default: nil, values: [nil | options]]
    end
  end

  defp extract_type_opts(_, %{kind: :string, values: options})
       when is_list(options) do
    [default: nil, values: [nil | options]]
  end

  defp extract_type_opts(%{"default" => default}, %{kind: :boolean}) do
    [default: default == "true"]
  end

  defp extract_type_opts(_, _) do
    [default: nil]
  end

  @doc """
  Attr representation as a string when used within the Phoenix.Component module
  """
  def display_def(attr, opts \\ []) do
    template =
      ~S|attr <%= @attr.atomname %>, <%= inspect(@attr.type) %><%= for {name, opt} <- @attr.opts do %>, <%= to_string(name) %>: <%= inspect(opt, binaries: :as_strings) %><% end %>|

    EEx.eval_string(template, [assigns: [attr: attr]], opts)
  end

  @doc """
  Attr representation as a string when used within the HEEx Template
  """
  def display_use(attr, opts \\ []) do
    template = ~S|<%= @attr.htmlname %>={assigns[<%= @attr.atomname %>]}|
    EEx.eval_string(template, [assigns: [attr: attr]], opts)
  end
end
