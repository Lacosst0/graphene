defmodule Graphene.FormComponentsFileUploaderTest do
  use ExUnit.Case, async: true

  import Phoenix.Component
  import Phoenix.LiveViewTest

  defp form_event(html) do
    [_, event] = Regex.run(~r/data-form-event="([^"]+)"/, html)
    event
  end

  test "uses button event when button slot is present" do
    assigns = %{}

    html =
      rendered_to_string(~H"""
      <Graphene.CarbonComponents.file_uploader name="attachments">
        <:button label="Add files" />
      </Graphene.CarbonComponents.file_uploader>
      """)

    assert form_event(html) == "cds-file-uploader-button-changed"
  end

  test "uses drop container event when only drop container slot is present" do
    assigns = %{}

    html =
      rendered_to_string(~H"""
      <Graphene.CarbonComponents.file_uploader name="attachments">
        <:drop_container>Drop files here</:drop_container>
      </Graphene.CarbonComponents.file_uploader>
      """)

    assert form_event(html) == "cds-file-uploader-drop-container-changed"
  end

  test "keeps explicit form_event override" do
    assigns = %{}

    html =
      rendered_to_string(~H"""
      <Graphene.CarbonComponents.file_uploader name="attachments" form_event="custom-upload-event">
        <:drop_container>Drop files here</:drop_container>
      </Graphene.CarbonComponents.file_uploader>
      """)

    assert form_event(html) == "custom-upload-event"
  end
end
