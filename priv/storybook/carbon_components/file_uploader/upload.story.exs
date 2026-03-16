defmodule Storybook.CarbonComponents.FileUploader.Upload do
  use PhoenixStorybook.Story, :example
  import Graphene.CarbonComponents
  def doc do
    """
This example shows a file upload flow that returns server-computed metadata.
Use it when you need to validate uploads or display hashes, sizes, or previews.

Pair .file_uploader with .button actions for submit and clear, and use
.inline_notification or .toast_notification to confirm completion.
"""
  end

  @impl true
  def mount(_params, _session, socket) do
    socket =
      socket
      |> assign(:selected_files, [])
      |> assign(:uploaded_files, [])

    {:ok, socket}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1.5rem; max-width: 36rem; position: relative;">
        <div
          id="file-uploader-bridge"
          phx-hook={"#{inspect(__MODULE__)}.CarbonFileUploaderBridge"}
          data-accept=".pdf .png .txt"
        >
          <Graphene.CarbonComponents.file_uploader
            id="file-uploader"
            name="file_uploader_upload"
            label_title="Upload evidence"
            label_description="PDF, PNG, or TXT (max 5 MB)"
          >
            <:button>Select files</:button>

          <%= for entry <- @selected_files do %>
            <Graphene.CarbonComponents.file_uploader_item
              id={"file-upload-entry-#{entry.id}"}
              data-file-id={entry.id}
              state="edit"
            >
              {entry.name} ({format_size(entry.size)})
            </Graphene.CarbonComponents.file_uploader_item>
          <% end %>

          <%= for file <- @uploaded_files do %>
            <Graphene.CarbonComponents.file_uploader_item
              id={"file-upload-complete-#{file.id}"}
              data-file-id={file.id}
              state="complete"
            >
              {file.name} ({format_size(file.size)}) —
              <code data-testid="carbon-file-upload-hash">{file.hash}</code>
            </Graphene.CarbonComponents.file_uploader_item>
          <% end %>
          </Graphene.CarbonComponents.file_uploader>
        </div>

        <.file_uploader_bridge_hook />

        <div style="display: flex; gap: 0.75rem; margin-top: 0.75rem;">
          <Graphene.CarbonComponents.button kind="secondary" type="button" phx-click="clear_uploads">
            Clear
          </Graphene.CarbonComponents.button>
          <Graphene.CarbonComponents.button
            kind="primary"
            type="button"
            phx-click="upload_submit"
            data-testid="carbon-file-upload-submit"
            disabled={@selected_files == []}
          >
            Upload & compute hash
          </Graphene.CarbonComponents.button>
        </div>

    </div>
    """
  end

  @impl true
  def handle_event("file_uploader_selected", %{"files" => files}, socket) do
    selected =
      Enum.map(files, fn %{"content" => content, "id" => id, "name" => name} ->
        binary = Base.decode64!(content)
        hash = :crypto.hash(:sha256, binary) |> Base.encode16(case: :lower)

        %{
          id: id,
          name: name,
          size: byte_size(binary),
          hash: hash
        }
      end)

    {:noreply, update(socket, :selected_files, fn items -> items ++ selected end)}
  end

  @impl true
  def handle_event("upload_submit", _params, socket) do
    socket =
      socket
      |> update(:uploaded_files, fn items -> items ++ socket.assigns.selected_files end)
      |> assign(:selected_files, [])

    {:noreply, socket}
  end

  @impl true
  def handle_event("clear_uploads", _params, socket) do
    {:noreply, assign(socket, selected_files: [], uploaded_files: [])}
  end

  @impl true
  def handle_event("file_uploader_deleted", %{"id" => id}, socket) do
    socket =
      socket
      |> update(:selected_files, fn files -> Enum.reject(files, &(&1.id == id)) end)
      |> update(:uploaded_files, fn files -> Enum.reject(files, &(&1.id == id)) end)

    {:noreply, socket}
  end

  defp file_uploader_bridge_hook(assigns) do
    ~H"""
    <script :type={Phoenix.LiveView.ColocatedHook} name=".CarbonFileUploaderBridge" runtime>
      {
        mounted() {
        
          this.el.dataset.bridgeReady = "true";
          this._handleFileChange = async (event) => {
            const files = event?.detail?.addedFiles;
            if (!files || files.length === 0) return;

            const accept = (this.el.dataset.accept || "").split(" ").filter(Boolean);
            const accepted = accept.length === 0
              ? Array.from(files)
              : Array.from(files).filter((file) => {
                  if (accept.includes(file.type)) return true;
                  return accept.some((ext) => file.name && file.name.endsWith(ext));
                });

            const payloadFiles = await Promise.all(
              accepted.map(async (file) => {
                const buffer = await file.arrayBuffer();
                const bytes = new Uint8Array(buffer);
                const chunk = 0x8000;
                let binary = "";
                for (let i = 0; i < bytes.length; i += chunk) {
                  binary += String.fromCharCode.apply(
                    null,
                    bytes.subarray(i, i + chunk)
                  );
                }
                const content = btoa(binary);
                const id = (crypto && crypto.randomUUID)
                  ? crypto.randomUUID()
                  : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
                return { id, name: file.name, content };
              })
            );

            if (payloadFiles.length > 0) {
              this.pushEvent("file_uploader_selected", { files: payloadFiles });
            }
          };

          this._handleDelete = (event) => {
            const id = event?.target?.dataset?.fileId;
            if (id) {
              this.pushEvent("file_uploader_deleted", { id });
            }
          };

          this.el.addEventListener(
            "cds-file-uploader-button-changed",
            this._handleFileChange
          );
          this.el.addEventListener(
            "cds-file-uploader-drop-container-changed",
            this._handleFileChange
          );
          this.el.addEventListener(
            "cds-file-uploader-item-deleted",
            this._handleDelete
          );
        },

        destroyed() {
          if (this._handleFileChange) {
            this.el.removeEventListener(
              "cds-file-uploader-button-changed",
              this._handleFileChange
            );
            this.el.removeEventListener(
              "cds-file-uploader-drop-container-changed",
              this._handleFileChange
            );
          }
          if (this._handleDelete) {
            this.el.removeEventListener(
              "cds-file-uploader-item-deleted",
              this._handleDelete
            );
          }
          delete this.el.dataset.bridgeReady;
        }
      }
    </script>
    """
  end

  defp format_size(bytes) when is_integer(bytes) and bytes >= 1_000_000 do
    "#{Float.round(bytes / 1_000_000, 2)} MB"
  end

  defp format_size(bytes) when is_integer(bytes) and bytes >= 1_000 do
    "#{Float.round(bytes / 1_000, 1)} KB"
  end

  defp format_size(bytes) when is_integer(bytes) do
    "#{bytes} B"
  end

end
