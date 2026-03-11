defmodule Graphene.FormComponentsTest do
  use ExUnit.Case, async: true

  import Phoenix.LiveViewTest

  test "text_input renders form-associated tag" do
    html = render_component(&Graphene.Internal.FormComponents.text_input/1, %{id: "name", name: "name"})

    assert html =~ "<cds-text-input-form"
    refute html =~ "type=\"hidden\""
  end

  test "checkbox renders form-associated tag" do
    html =
      render_component(&Graphene.Internal.FormComponents.checkbox/1, %{id: "terms", name: "terms"})

    assert html =~ "<cds-checkbox-form"
    refute html =~ "type=\"hidden\""
  end
end
