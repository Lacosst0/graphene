defmodule Demo.FileUploaderFeatureTest do
  use ExUnit.Case, async: false
  use Wallaby.Feature

  import Wallaby.Query, only: [css: 2]

  @moduletag :wallaby

  setup do
    {:ok, session} = Wallaby.start_session()

    on_exit(fn ->
      Wallaby.end_session(session)
    end)

    {:ok, session: session}
  end

  @tag timeout: 120_000
  feature "file uploader computes hash after upload", %{session: session} do
    content = "carbon-file-uploader"
    expected_hash = :crypto.hash(:sha256, content) |> Base.encode16(case: :lower)

    session
    |> visit("/carbon_components/file_uploader/upload")
    |> assert_has(css("#file-uploader-bridge", count: 1))
    |> wait_for_bridge_ready()
    |> dispatch_carbon_upload("upload.txt", content)
    |> wait_for_submit_enabled()
    |> click(css("[data-testid='carbon-file-upload-submit']", []))
    |> wait_for_hash(expected_hash)
  end

  @tag timeout: 120_000
  feature "file uploader computes hash after drop-container event", %{session: session} do
    content = "carbon-file-uploader-drop-container"
    expected_hash = :crypto.hash(:sha256, content) |> Base.encode16(case: :lower)

    session
    |> visit("/carbon_components/file_uploader/upload")
    |> assert_has(css("#file-uploader-bridge", count: 1))
    |> wait_for_bridge_ready()
    |> dispatch_carbon_upload(
      "upload-drop.txt",
      content,
      "cds-file-uploader-drop-container-changed"
    )
    |> wait_for_submit_enabled()
    |> click(css("[data-testid='carbon-file-upload-submit']", []))
    |> wait_for_hash(expected_hash)
  end

  defp dispatch_carbon_upload(
         session,
         filename,
         content,
         event_name \\ "cds-file-uploader-button-changed"
       ) do
    Wallaby.Browser.execute_script(
      session,
      """
      const bridge = document.querySelector("#file-uploader-bridge");
      if (!bridge) return false;
      const file = new File([#{Jason.encode!(content)}], #{Jason.encode!(filename)}, {type: "text/plain"});
      const event = new CustomEvent(#{Jason.encode!(event_name)}, {
        bubbles: true,
        composed: true,
        detail: { addedFiles: [file] }
      });
      bridge.dispatchEvent(event);
      return true;
      """,
      fn _ -> session end
    )
  end

  defp wait_for_bridge_ready(session, attempts \\ 20)

  defp wait_for_bridge_ready(session, 0) do
    assert_has(session, css("#file-uploader-bridge[data-bridge-ready='true']", count: 1))
  end

  defp wait_for_bridge_ready(session, attempts) do
    Wallaby.Browser.execute_script(
      session,
      "return document.querySelector('#file-uploader-bridge')?.dataset.bridgeReady === 'true';",
      fn ready ->
        if ready do
          session
        else
          Process.sleep(250)
          wait_for_bridge_ready(session, attempts - 1)
        end
      end
    )
  end

  defp wait_for_submit_enabled(session, attempts \\ 20)

  defp wait_for_submit_enabled(session, 0) do
    assert_has(
      session,
      css("[data-testid='carbon-file-upload-submit']:not([disabled])", count: 1)
    )
  end

  defp wait_for_submit_enabled(session, attempts) do
    Wallaby.Browser.execute_script(
      session,
      "return document.querySelector('[data-testid=\"carbon-file-upload-submit\"]')?.disabled === false;",
      fn enabled ->
        if enabled do
          session
        else
          Process.sleep(250)
          wait_for_submit_enabled(session, attempts - 1)
        end
      end
    )
  end

  defp wait_for_hash(session, expected_hash, attempts \\ 20)

  defp wait_for_hash(session, expected_hash, 0) do
    assert_has(
      session,
      css("[data-testid='carbon-file-upload-hash']", text: expected_hash, count: 1)
    )
  end

  defp wait_for_hash(session, expected_hash, attempts) do
    Wallaby.Browser.execute_script(
      session,
      "return document.querySelector('[data-testid=\"carbon-file-upload-hash\"]')?.textContent || '';",
      fn text ->
        if text == expected_hash do
          session
        else
          Process.sleep(250)
          wait_for_hash(session, expected_hash, attempts - 1)
        end
      end
    )
  end
end
