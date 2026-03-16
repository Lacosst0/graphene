import {
  LOADING_TYPE
} from "./chunk-XKPQ6AHK.js";
import "./chunk-D2ITTM54.js";
import {
  styles
} from "./chunk-RS6TKUPR.js";
import {
  ifNonEmpty
} from "./chunk-2G6ZGNK6.js";
import {
  _16 as _162
} from "./chunk-357XJSHN.js";
import {
  _16 as _163
} from "./chunk-HPDZLYLI.js";
import "./chunk-KDBKJKDV.js";
import "./chunk-MU62I7LL.js";
import {
  _16
} from "./chunk-YGK4BVA2.js";
import {
  BUTTON_KIND,
  BUTTON_SIZE
} from "./chunk-JYACJRIF.js";
import {
  HostListener
} from "./chunk-5HWAKYGL.js";
import {
  HostListenerMixin
} from "./chunk-TGGEFEEZ.js";
import "./chunk-ML2VKJHQ.js";
import {
  iconLoader
} from "./chunk-TRPNDHDH.js";
import "./chunk-LDCWSK5M.js";
import "./chunk-TEMKX2NW.js";
import {
  SKELETON_TEXT_TYPE
} from "./chunk-BZXZJ7DW.js";
import "./chunk-DAFPBEYU.js";
import "./chunk-73FE5HOG.js";
import {
  e
} from "./chunk-YOLTZNLE.js";
import "./chunk-M2VBID3H.js";
import {
  n
} from "./chunk-V6ENGPT2.js";
import {
  prefix
} from "./chunk-ITCMO2MJ.js";
import {
  carbonElement
} from "./chunk-D5HOJOMG.js";
import {
  __decorate,
  b,
  i2 as i
} from "./chunk-3GZFZEMV.js";
import "./chunk-G6EI4S4W.js";

// node_modules/@carbon/web-components/es/components/file-uploader/defs.js
var FILE_UPLOADER_ITEM_STATE;
(function(FILE_UPLOADER_ITEM_STATE2) {
  FILE_UPLOADER_ITEM_STATE2["UPLOADING"] = "uploading";
  FILE_UPLOADER_ITEM_STATE2["COMPLETE"] = "complete";
  FILE_UPLOADER_ITEM_STATE2["EDIT"] = "edit";
})(FILE_UPLOADER_ITEM_STATE || (FILE_UPLOADER_ITEM_STATE = {}));
var FILE_UPLOADER_ITEM_SIZE;
(function(FILE_UPLOADER_ITEM_SIZE2) {
  FILE_UPLOADER_ITEM_SIZE2["SMALL"] = "sm";
  FILE_UPLOADER_ITEM_SIZE2["MEDIUM"] = "md";
  FILE_UPLOADER_ITEM_SIZE2["LARGE"] = "lg";
})(FILE_UPLOADER_ITEM_SIZE || (FILE_UPLOADER_ITEM_SIZE = {}));

// node_modules/@carbon/web-components/es/components/file-uploader/file-uploader-item.js
var CDSFileUploaderItem = class CDSFileUploaderItem2 extends i {
  constructor() {
    super(...arguments);
    this.iconDescription = "Delete this file";
    this.invalid = false;
    this.size = FILE_UPLOADER_ITEM_SIZE.MEDIUM;
    this.state = FILE_UPLOADER_ITEM_STATE.UPLOADING;
    this.errorSubject = "";
    this.errorBody = "";
  }
  /**
   * Handles `click` event on the delete button.
   */
  _handleClickDeleteButton() {
    const init = {
      bubbles: true,
      cancelable: true,
      composed: true
    };
    const { eventBeforeDelete, eventDelete } = this.constructor;
    if (this.dispatchEvent(new CustomEvent(eventBeforeDelete, init))) {
      this.dispatchEvent(new CustomEvent(eventDelete, init));
    }
  }
  /**
   * @returns The content showing the editing UI of this file uploader item.
   */
  _renderEditing() {
    const { iconDescription, invalid, _handleClickDeleteButton: handleClickDeleteButton } = this;
    return b`
      ${!invalid ? void 0 : iconLoader(_162, { class: `${prefix}--file-invalid` })}
      <button
        type="button"
        aria-label="${iconDescription}"
        class="${prefix}--file-close"
        @click="${handleClickDeleteButton}">
        ${iconLoader(_16)}
      </button>
    `;
  }
  /**
   * @returns The content showing this file uploader's file uploading status as in progress.
   */
  _renderUploading() {
    const { iconDescription } = this;
    return b`
      <cds-loading
        assistive-text="${iconDescription}"
        type="${LOADING_TYPE.SMALL}"></cds-loading>
    `;
  }
  /**
   * @returns The content showing this file uploader's file uploading status as complete.
   */
  _renderUploaded() {
    const { iconDescription } = this;
    return iconLoader(_163, {
      class: `${prefix}--file-complete`,
      "aria-label": iconDescription
    });
  }
  /**
   * @returns The content showing this file uploader's status.
   */
  _renderStatus() {
    const { state } = this;
    switch (state) {
      case FILE_UPLOADER_ITEM_STATE.EDIT:
        return this._renderEditing();
      case FILE_UPLOADER_ITEM_STATE.UPLOADING:
        return this._renderUploading();
      case FILE_UPLOADER_ITEM_STATE.COMPLETE:
        return this._renderUploaded();
      default:
        return void 0;
    }
  }
  render() {
    const { invalid, errorSubject, errorBody } = this;
    return b` <p class="${prefix}--file-filename"><slot></slot></p>
      <span class="${prefix}--file__state-container"
        >${this._renderStatus()}</span
      >
      <div
        class="${prefix}--form-requirement"
        ?hidden="${!invalid && !errorSubject}">
        <div class="${prefix}--form-requirement__title">${errorSubject}</div>
        <p
          class="${prefix}--form-requirement__supplement"
          ?hidden="${!errorBody}">
          ${errorBody}
        </p>
      </div>`;
  }
  /**
   * The name of the custom event fired before this file uplodaer item is being deleted upon a user gesture.
   * Cancellation of this event stops the user-initiated action of deleting this file uploader item.
   */
  static get eventBeforeDelete() {
    return `${prefix}-file-uploader-item-beingdeleted`;
  }
  /**
   * The name of the custom event fired after this file uplodaer item is deleted upon a user gesture.
   */
  static get eventDelete() {
    return `${prefix}-file-uploader-item-deleted`;
  }
};
CDSFileUploaderItem.styles = styles;
__decorate([
  n({ attribute: "icon-description" })
], CDSFileUploaderItem.prototype, "iconDescription", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSFileUploaderItem.prototype, "invalid", void 0);
__decorate([
  n({ reflect: true })
], CDSFileUploaderItem.prototype, "size", void 0);
__decorate([
  n({ reflect: true })
], CDSFileUploaderItem.prototype, "state", void 0);
__decorate([
  n({ attribute: "error-subject" })
], CDSFileUploaderItem.prototype, "errorSubject", void 0);
__decorate([
  n({ attribute: "error-body" })
], CDSFileUploaderItem.prototype, "errorBody", void 0);
CDSFileUploaderItem = __decorate([
  carbonElement(`${prefix}-file-uploader-item`)
], CDSFileUploaderItem);

// node_modules/@carbon/web-components/es/components/file-uploader/file-uploader-drop-container.js
var dropEffects = {
  dragover: "copy",
  dragleave: "move"
};
var CDSFileUploaderDropContainer = class CDSFileUploaderDropContainer2 extends HostListenerMixin(i) {
  constructor() {
    super(...arguments);
    this._active = false;
    this.accept = "";
    this.disabled = false;
    this.multiple = false;
    this.name = "";
    this.slot = "drop-container";
  }
  /**
   * Handles user gesture to select files to upload.
   *
   * @param event The event.
   */
  _handleChange(event) {
    var _a, _b;
    const { eventChange, selectorInput } = this.constructor;
    const { files } = (_a = event.type === "drop" ? event.dataTransfer : event.target) !== null && _a !== void 0 ? _a : {};
    const addedFiles = this._getFiles(event, files);
    this.dispatchEvent(new CustomEvent(eventChange, {
      bubbles: true,
      composed: true,
      detail: {
        addedFiles
      }
    }));
    const fileInput = (_b = this === null || this === void 0 ? void 0 : this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(selectorInput);
    if (fileInput) {
      fileInput.value = "";
    }
  }
  /**
   * Handles `dragover`, `dragleave` and `drop` events.
   *
   * @param event The event.
   */
  _handleDrag(event) {
    event.preventDefault();
    if (this.disabled) {
      return;
    }
    const { dataTransfer, type } = event;
    const dropEffect = dropEffects[type];
    if (dataTransfer && dropEffect) {
      dataTransfer.dropEffect = dropEffect;
    }
    this._active = type === "dragover";
    if (type === "drop") {
      this._handleChange(event);
    }
    this.requestUpdate?.();
  }
  /**
   * @param event The event.
   * @returns The list of files user chose to upload.
   */
  _getFiles(event, files) {
    const { accept } = this;
    if (!accept || !/^(change|drop)$/.test(event.type)) {
      return Array.from(files !== null && files !== void 0 ? files : []);
    }
    const acceptedTypes = new Set(accept.split(" "));
    return Array.prototype.filter.call(files, ({ name, type: mimeType = "" }) => {
      var _a;
      const fileExtensionRegExp = /\.[^.]+$/;
      const hasFileExtension = fileExtensionRegExp.test(name);
      const [fileExtension] = !hasFileExtension ? [void 0] : (_a = fileExtensionRegExp.exec(name)) !== null && _a !== void 0 ? _a : [];
      return acceptedTypes.has(mimeType) || fileExtension && acceptedTypes.has(fileExtension);
    });
  }
  render() {
    const { accept, disabled, multiple, name, _active: active, _handleChange: handleChange } = this;
    const labelClasses = e({
      [`${prefix}--file-browse-btn`]: true,
      [`${prefix}--file-browse-btn--disabled`]: disabled
    });
    const dropareaClasses = e({
      [`${prefix}--file__drop-container`]: true,
      [`${prefix}--file__drop-container--drag-over`]: active
    });
    return b`
      <label class="${labelClasses}" for="file" tabindex="0">
        <div class="${dropareaClasses}" role="button">
          <slot></slot>
          <input
            id="file"
            type="file"
            name="${ifNonEmpty(name)}"
            class="${prefix}--file-input"
            tabindex="-1"
            accept="${ifNonEmpty(accept)}"
            ?disabled="${disabled}"
            ?multiple="${multiple}"
            @change="${handleChange}" />
        </div>
      </label>
    `;
  }
  /**
   * The name of the custom event fired when there is a user gesture to select files to upload.
   */
  static get eventChange() {
    return `${prefix}-file-uploader-drop-container-changed`;
  }
  /**
   * A selector that will return the file `input`.
   */
  static get selectorInput() {
    return `.${prefix}--file-input`;
  }
};
CDSFileUploaderDropContainer.styles = styles;
__decorate([
  HostListener("dragover"),
  HostListener("dragleave"),
  HostListener("drop")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSFileUploaderDropContainer.prototype, "_handleDrag", null);
__decorate([
  n()
], CDSFileUploaderDropContainer.prototype, "accept", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSFileUploaderDropContainer.prototype, "disabled", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSFileUploaderDropContainer.prototype, "multiple", void 0);
__decorate([
  n({ reflect: true })
], CDSFileUploaderDropContainer.prototype, "name", void 0);
__decorate([
  n({ reflect: true })
], CDSFileUploaderDropContainer.prototype, "slot", void 0);
CDSFileUploaderDropContainer = __decorate([
  carbonElement(`${prefix}-file-uploader-drop-container`)
], CDSFileUploaderDropContainer);

// node_modules/@carbon/web-components/es/components/file-uploader/file-uploader-button.js
var CDSFileUploaderButton = class CDSFileUploaderButton2 extends HostListenerMixin(i) {
  constructor() {
    super(...arguments);
    this.buttonKind = BUTTON_KIND.PRIMARY;
    this.size = BUTTON_SIZE.MEDIUM;
    this.accept = "";
    this.disabled = false;
    this.multiple = false;
    this.name = "";
    this.slot = "drop-container";
  }
  /**
   * Handles `click` event on the button.
   */
  _handleClick(event) {
    var _a, _b, _c;
    event.target.value = null;
    const { selectorInput } = this.constructor;
    (_b = (_a = this === null || this === void 0 ? void 0 : this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selectorInput)) === null || _b === void 0 ? void 0 : _b.setAttribute("value", "");
    ((_c = this === null || this === void 0 ? void 0 : this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector(selectorInput)).click();
  }
  /**
   * Handles `keydown` event on the button.
   */
  _handleKeyDown(event) {
    var _a, _b, _c;
    const { selectorInput } = this.constructor;
    if (event.key === "Enter" || event.key === "Space") {
      (_b = (_a = this === null || this === void 0 ? void 0 : this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selectorInput)) === null || _b === void 0 ? void 0 : _b.setAttribute("value", "");
      ((_c = this === null || this === void 0 ? void 0 : this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector(selectorInput)).click();
    }
  }
  /**
   * Handles user gesture to select files to upload.
   *
   * @param event The event.
   */
  _handleChange(event) {
    var _a;
    const addedFiles = this._getFiles(event);
    const { eventChange, selectorInput } = this.constructor;
    this.dispatchEvent(new CustomEvent(eventChange, {
      bubbles: true,
      composed: true,
      detail: {
        addedFiles
      }
    }));
    const fileInput = (_a = this === null || this === void 0 ? void 0 : this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selectorInput);
    if (fileInput) {
      fileInput.value = "";
    }
  }
  /**
   * @param event The event.
   * @returns The list of files user chose to upload.
   */
  _getFiles(event) {
    var _a;
    const { files } = (_a = event.type === "drop" ? event.dataTransfer : event.target) !== null && _a !== void 0 ? _a : {};
    const { accept } = this;
    if (!accept || !/^(change|drop)$/.test(event.type)) {
      return Array.from(files !== null && files !== void 0 ? files : []);
    }
    const acceptedTypes = new Set(accept.split(" "));
    return Array.prototype.filter.call(files, ({ name, type: mimeType = "" }) => {
      var _a2;
      const fileExtensionRegExp = /\.[^.]+$/;
      const hasFileExtension = fileExtensionRegExp.test(name);
      const [fileExtension] = !hasFileExtension ? [void 0] : (_a2 = fileExtensionRegExp.exec(name)) !== null && _a2 !== void 0 ? _a2 : [];
      return acceptedTypes.has(mimeType) || fileExtension && acceptedTypes.has(fileExtension);
    });
  }
  render() {
    const { accept, disabled, multiple, name, buttonKind, size, _handleChange: handleChange } = this;
    const labelClasses = e({
      [`${prefix}--file-browse-btn`]: true,
      [`${prefix}--file-browse-btn--disabled`]: disabled
    });
    const buttonClasses = e({
      [`${prefix}--btn`]: true,
      [`${prefix}--btn--${buttonKind}`]: buttonKind,
      [`${prefix}--layout--size-${size}`]: size,
      [`${prefix}--btn--disabled`]: disabled,
      [`${prefix}--btn--${size}`]: size
    });
    return b`
      <button
        type="button"
        class="${buttonClasses}"
        @click="${this._handleClick}"
        @keydown="${this._handleKeyDown}">
        <slot></slot>
      </button>
      <label class="${labelClasses}" for="file"> </label>
      <input
        id="file"
        type="file"
        class="${prefix}--file-input"
        tabindex="-1"
        accept="${ifNonEmpty(accept)}"
        ?disabled="${disabled}"
        ?multiple="${multiple}"
        name="${ifNonEmpty(name)}"
        @change="${handleChange}" />
    `;
  }
  /**
   * The name of the custom event fired when there is a user gesture to select files to upload.
   */
  static get eventChange() {
    return `${prefix}-file-uploader-button-changed`;
  }
  /**
   * A selector that will return the file `input`.
   */
  static get selectorInput() {
    return `.${prefix}--file-input`;
  }
};
CDSFileUploaderButton.styles = styles;
__decorate([
  n({ reflect: true, attribute: "button-kind" })
], CDSFileUploaderButton.prototype, "buttonKind", void 0);
__decorate([
  n({ reflect: true })
], CDSFileUploaderButton.prototype, "size", void 0);
__decorate([
  n()
], CDSFileUploaderButton.prototype, "accept", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSFileUploaderButton.prototype, "disabled", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSFileUploaderButton.prototype, "multiple", void 0);
__decorate([
  n({ reflect: true })
], CDSFileUploaderButton.prototype, "name", void 0);
__decorate([
  n({ reflect: true })
], CDSFileUploaderButton.prototype, "slot", void 0);
CDSFileUploaderButton = __decorate([
  carbonElement(`${prefix}-file-uploader-button`)
], CDSFileUploaderButton);

// node_modules/@carbon/web-components/es/components/file-uploader/file-uploader-skeleton.js
var CDSFileUploaderSkeleton = class CDSFileUploaderSkeleton2 extends i {
  render() {
    return b`
      <cds-skeleton-text
        type="${SKELETON_TEXT_TYPE.HEADING}"
        width="100px"></cds-skeleton-text>
      <cds-skeleton-text width="225px"></cds-skeleton-text>
      <cds-button-skeleton></cds-button-skeleton>
    `;
  }
};
CDSFileUploaderSkeleton = __decorate([
  carbonElement(`${prefix}-file-uploader-skeleton`)
], CDSFileUploaderSkeleton);
