defmodule Graphene.CarbonComponents.Custom.UiShell do
  @moduledoc false

  use Phoenix.Component

  @doc """
  UI shell layout that renders header, side nav, and content slots.
  """
  attr :rest, :global
  attr :content_class, :string, default: nil
  slot :skip_to_content
  slot :header
  slot :side_nav
  slot :content

  def ui_shell(assigns) do
    content_class =
      case assigns[:content_class] do
        nil ->
          "cds--content"

        "" ->
          "cds--content"

        class when is_binary(class) ->
          if String.contains?(class, "cds--content") do
            class
          else
            class <> " cds--content"
          end
      end

    assigns = assign(assigns, :content_class, content_class)

    ~H"""
    <div {@rest}>
      {render_slot(@skip_to_content)}
      {render_slot(@header)}
      {render_slot(@side_nav)}
      <main class={@content_class}>
        {render_slot(@content)}
      </main>
    </div>
    """
  end
end
