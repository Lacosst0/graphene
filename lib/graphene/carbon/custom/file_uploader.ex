defmodule Graphene.CarbonComponents.Custom.FileUploader do
  @moduledoc false

  use Phoenix.Component

  alias Graphene.Internal.FormComponents

  @doc """
  File uploader wrapper for Carbon web components.
  """
  attr :field, Phoenix.HTML.FormField, default: nil
  attr :form, :string, default: nil
  attr :id, :string, default: nil
  attr :name, :string, default: nil
  attr :value, :any, default: nil
  attr :disabled, :boolean, default: false
  attr :label_description, :string, default: nil
  attr :label_title, :string, default: nil
  attr :file_input_name, :string, default: nil
  attr :form_event, :string, default: nil
  attr :rest, :global

  slot :button do
    attr :label, :string
    attr :accept, :string
    attr :button_kind, :string
    attr :disabled, :boolean
    attr :multiple, :boolean
    attr :name, :string
    attr :size, :string
    attr :attrs, :map
  end

  slot :drop_container do
    attr :accept, :string
    attr :disabled, :boolean
    attr :multiple, :boolean
    attr :name, :string
    attr :attrs, :map
  end

  slot :item do
    attr :state, :string
    attr :invalid, :boolean
    attr :icon_description, :string
    attr :attrs, :map
  end

  slot :inner_block

  def file_uploader(assigns) do
    FormComponents.file_uploader(assigns)
  end
end
