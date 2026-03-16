# `file_uploader`

## basic

### default

```heex
<.file_uploader
  id="basic-single-default"
  name="file_uploader_default"
  label_description="Max file size 500mb"
  label_title="Upload files"
>
  <:button>Upload</:button>
  <:item state="complete">report.pdf</:item>
</.file_uploader>
```

```html
<input type="hidden" id="basic-single-default-input" name="file_uploader_default" value="">
<cds-file-uploader label-description="Max file size 500mb" label-title="Upload files" id="basic-single-default" data-form-detail="checked" data-form-event="cds-file-uploader-button-changed" data-form-input="basic-single-default-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
    <cds-file-uploader-button slot="drop-container">
  
      Upload
    
</cds-file-uploader-button>
  
  
    <cds-file-uploader-item size="md" state="complete">
  
      report.pdf
    
  
  
</cds-file-uploader-item>
  
  
  

</cds-file-uploader>
```

### multiple

```heex
<.file_uploader
  id="basic-single-multiple"
  name="file_uploader_multiple"
  label_description="PNG or SVG"
  label_title="Upload assets"
>
  <:button accept=".png .svg" multiple={true}>Add files</:button>
  <:item state="uploading">logo.svg</:item>
  <:item state="edit">banner.png</:item>
</.file_uploader>
```

```html
<input type="hidden" id="basic-single-multiple-input" name="file_uploader_multiple" value="">
<cds-file-uploader label-description="PNG or SVG" label-title="Upload assets" id="basic-single-multiple" data-form-detail="checked" data-form-event="cds-file-uploader-button-changed" data-form-input="basic-single-multiple-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
    <cds-file-uploader-button accept=".png .svg" multiple slot="drop-container">
  
      Add files
    
</cds-file-uploader-button>
  
  
    <cds-file-uploader-item size="md" state="uploading">
  
      logo.svg
    
  
  
</cds-file-uploader-item>
  
    <cds-file-uploader-item size="md" state="edit">
  
      banner.png
    
  
  
</cds-file-uploader-item>
  
  
  

</cds-file-uploader>
```

### disabled

```heex
<.file_uploader
  disabled
  id="basic-single-disabled"
  name="file_uploader_disabled"
  label_description="Uploads disabled"
  label_title="Disabled"
>
  <:button disabled={true}>Upload</:button>
</.file_uploader>
```

```html
<input type="hidden" id="basic-single-disabled-input" name="file_uploader_disabled" value="">
<cds-file-uploader disabled label-description="Uploads disabled" label-title="Disabled" id="basic-single-disabled" data-form-detail="checked" data-form-event="cds-file-uploader-button-changed" data-form-input="basic-single-disabled-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
    <cds-file-uploader-button disabled slot="drop-container">
  
      Upload
    
</cds-file-uploader-button>
  
  
  
  

</cds-file-uploader>
```


## upload

### example

```heex
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
```

```html
<div style="display: grid; gap: 1.5rem; max-width: 36rem; position: relative;">
    <div id="file-uploader-bridge" phx-hook="Storybook.CarbonComponents.FileUploader.Upload.CarbonFileUploaderBridge" data-accept=".pdf .png .txt">
      <input type="hidden" id="file-uploader-input" name="file_uploader_upload" value="">
<cds-file-uploader label-description="PDF, PNG, or TXT (max 5 MB)" label-title="Upload evidence" id="file-uploader" data-form-detail="checked" data-form-event="cds-file-uploader-button-changed" data-form-input="file-uploader-input" data-form-mode="value" phx-hook="GrapheneFormBridge">
  
  
  
    <cds-file-uploader-button slot="drop-container">
  
      Select files
    
</cds-file-uploader-button>
  
  
  
        

      
      

</cds-file-uploader>

    </div>

    

    <div style="display: flex; gap: 0.75rem; margin-top: 0.75rem;">
      <cds-button kind="secondary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" phx-click="clear_uploads">
  
        Clear
      
  
</cds-button>
      <cds-button disabled kind="primary" link-role="button" size="lg" tab-index="0" tooltip-alignment="" tooltip-position="top" type="button" phx-click="upload_submit" data-testid="carbon-file-upload-submit">
  
        Upload & compute hash
      
  
</cds-button>
    </div>

</div>
```
