defmodule Storybook.CarbonComponents.FileUploader.Interactivity do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon

  def doc do
    """
    Interactive file uploader with button and drop-container events wired.
    Use it to validate file selection payloads.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, event_log: [])}
  end

  @impl true
  def handle_event("file_uploader:event", payload, socket) do
    {:noreply, log_event(socket, payload)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1.5rem;">
      <Carbon.file_uploader
        id="file-uploader-events"
        name="file_uploader_events"
        label_title="Upload files"
        label_description="Drag files or use the upload button"
      >
        <:drop_container
          accept=".pdf,.png,.svg"
          multiple={true}
          attrs={
            Graphene.JS.events(
              id: "file-uploader-drop",
              on: %{
                "cds-file-uploader-drop-container-changed" => [
                  push: "file_uploader:event",
                  payload: event_payload("cds-file-uploader-drop-container-changed")
                ]
              }
            )
          }
        >
          Drop files here
        </:drop_container>
        <:button
          accept=".pdf,.png,.svg"
          multiple={true}
          attrs={
            Graphene.JS.events(
              id: "file-uploader-button",
              on: %{
                "cds-file-uploader-button-changed" => [
                  push: "file_uploader:event",
                  payload: event_payload("cds-file-uploader-button-changed")
                ]
              }
            )
          }
        >
          Upload
        </:button>
        <:item state="complete">report.pdf</:item>
      </Carbon.file_uploader>

      <.event_log logs={@event_log} />
    </div>
    """
  end

  defp event_payload(event, extra \\ %{}) do
    %{merge: [:detail, :target], static: Map.merge(%{event: event}, extra)}
  end

  defp log_event(socket, payload) do
    update(socket, :event_log, fn logs ->
      [%{event: payload["event"] || "event", payload: payload} | Enum.take(logs, 19)]
    end)
  end

  attr :logs, :list, default: []

  defp event_log(assigns) do
    ~H"""
    <div>
      <h4>Event payloads</h4>
      <pre>
    <%= for log <- Enum.reverse(@logs) do %>
    [<%= log.event %>] <%= Jason.encode!(log.payload) %>
    <% end %>
      </pre>
    </div>
    """
  end
end
