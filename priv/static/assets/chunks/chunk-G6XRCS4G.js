import {
  RADIO_BUTTON_LABEL_POSITION,
  RADIO_BUTTON_ORIENTATION,
  styles
} from "./chunk-EZLN5Q4T.js";
import {
  NAVIGATION_DIRECTION,
  RadioGroupManager
} from "./chunk-XALNULML.js";
import {
  HostListener
} from "./chunk-5HWAKYGL.js";
import {
  HostListenerMixin
} from "./chunk-TGGEFEEZ.js";
import {
  o
} from "./chunk-DAFPBEYU.js";
import {
  FocusMixin
} from "./chunk-73FE5HOG.js";
import {
  e as e2
} from "./chunk-YOLTZNLE.js";
import {
  e,
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

// node_modules/@carbon/web-components/es/components/radio-button/radio-button.js
var navigationDirectionForKeyHorizontal = {
  ArrowLeft: NAVIGATION_DIRECTION.BACKWARD,
  Left: NAVIGATION_DIRECTION.BACKWARD,
  // IE
  ArrowRight: NAVIGATION_DIRECTION.FORWARD,
  Right: NAVIGATION_DIRECTION.FORWARD
  // IE
};
var navigationDirectionForKeyVertical = {
  ArrowUp: NAVIGATION_DIRECTION.BACKWARD,
  Up: NAVIGATION_DIRECTION.BACKWARD,
  // IE
  ArrowDown: NAVIGATION_DIRECTION.FORWARD,
  Down: NAVIGATION_DIRECTION.FORWARD
  // IE
};
var RadioButtonDelegate = class {
  constructor(radio) {
    this._radio = radio;
  }
  get checked() {
    return this._radio.checked;
  }
  set checked(checked) {
    const { host } = this._radio.getRootNode();
    const { eventChange } = host.constructor;
    host.checked = checked;
    this._radio.tabIndex = checked ? 0 : -1;
    host.dispatchEvent(new CustomEvent(eventChange, {
      bubbles: true,
      composed: true,
      detail: {
        checked,
        value: this._radio.value,
        name: this._radio.name
      }
    }));
  }
  get tabIndex() {
    return this._radio.tabIndex;
  }
  set tabIndex(tabIndex) {
    this._radio.tabIndex = tabIndex;
  }
  get name() {
    return this._radio.name;
  }
  get disabled() {
    return this._radio.disabled;
  }
  compareDocumentPosition(other) {
    return this._radio.compareDocumentPosition(other._radio);
  }
  focus() {
    this._radio.focus();
  }
};
var CDSRadioButton = class CDSRadioButton2 extends HostListenerMixin(FocusMixin(i)) {
  constructor() {
    super(...arguments);
    this._manager = null;
    this._handleClick = (event) => {
      var _a, _b;
      if (!event.target.matches((_a = this.constructor) === null || _a === void 0 ? void 0 : _a.aiLabelItem) && !event.target.matches((_b = this.constructor) === null || _b === void 0 ? void 0 : _b.slugItem)) {
        const { disabled, _radioButtonDelegate: radioButtonDelegate, readOnly } = this;
        if (readOnly) {
          event.preventDefault();
          return;
        }
        if (radioButtonDelegate && !disabled && !this.disabledItem) {
          this.checked = true;
          if (this._manager) {
            this._manager.select(radioButtonDelegate, this.readOnly);
          }
          this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
            bubbles: true,
            composed: true,
            detail: {
              checked: this.checked,
              value: this.value,
              name: this.name,
              event
            }
          }));
        }
        this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
          bubbles: true,
          composed: true,
          detail: {
            checked: this.checked,
            value: this.value,
            name: this.name,
            event
          }
        }));
      }
    };
    this._handleKeydown = (event) => {
      var _a, _b;
      if (!event.target.matches((_a = this.constructor) === null || _a === void 0 ? void 0 : _a.aiLabelItem) && !event.target.matches((_b = this.constructor) === null || _b === void 0 ? void 0 : _b.slugItem)) {
        const { orientation, _radioButtonDelegate: radioButtonDelegate, disabled, disabledItem, readOnly } = this;
        const manager = this._manager;
        if (readOnly) {
          event.preventDefault();
          return;
        }
        if (radioButtonDelegate && manager && !disabled && !disabledItem) {
          const navigationDirectionForKey = orientation === RADIO_BUTTON_ORIENTATION.HORIZONTAL ? navigationDirectionForKeyHorizontal : navigationDirectionForKeyVertical;
          const navigationDirection = navigationDirectionForKey[event.key];
          if (navigationDirection) {
            manager.select(manager.navigate(radioButtonDelegate, navigationDirection), this.readOnly);
          }
          if (event.key === " " || event.key === "Enter") {
            manager.select(radioButtonDelegate, this.readOnly);
          }
        }
      }
    };
    this._hasAILabel = false;
    this.checked = false;
    this.dataTable = false;
    this.defaultChecked = false;
    this.disabledItem = false;
    this.disabled = false;
    this.hideLabel = false;
    this.invalid = false;
    this.warn = false;
    this.warnText = "";
    this.labelPosition = RADIO_BUTTON_LABEL_POSITION.RIGHT;
    this.labelText = "";
    this.orientation = RADIO_BUTTON_ORIENTATION.HORIZONTAL;
    this.readOnly = false;
    this.required = false;
  }
  /**
   * Handles `slotchange` event.
   */
  _handleSlotChange({ target }) {
    const hasContent = target.assignedNodes().filter((elem) => elem.matches !== void 0 ? elem.matches(this.constructor.aiLabelItem) || // remove reference to slug in v12
    elem.matches(this.constructor.slugItem) : false);
    this._hasAILabel = Boolean(hasContent);
    const type = hasContent[0].getAttribute("kind");
    hasContent[0].setAttribute("size", type === "inline" ? "md" : "mini");
    this.requestUpdate?.();
  }
  disconnectedCallback() {
    if (this._manager) {
      this._manager.delete(this._radioButtonDelegate);
    }
    super.disconnectedCallback();
  }
  firstUpdated() {
    this._radioButtonDelegate = new RadioButtonDelegate(this._inputNode);
    if (this.defaultChecked && this.checked === false) {
      this.checked = true;
    }
  }
  updated(changedProperties) {
    const { _hasAILabel: hasAILabel, _inputNode: inputNode, _radioButtonDelegate: radioButtonDelegate, name, disabled, disabledItem, readOnly, invalid, warn } = this;
    const normalizedProps = {
      invalid: !readOnly && !disabled && !disabledItem && invalid,
      warn: !readOnly && !disabled && !disabledItem && !invalid && warn
    };
    if (changedProperties.has("checked") || changedProperties.has("name")) {
      if (!this._manager) {
        this._manager = RadioGroupManager.get(this.getRootNode({ composed: true }));
      }
      const { _manager: manager } = this;
      if (changedProperties.has("name")) {
        manager.delete(radioButtonDelegate, changedProperties.get("name"));
        if (name) {
          manager.add(radioButtonDelegate);
        }
      }
      inputNode.setAttribute("tabindex", !name || !manager || this.disabled || this.disabledItem || !manager.shouldBeFocusable(radioButtonDelegate) ? "-1" : "0");
    }
    if (changedProperties.has("invalid") || changedProperties.has("warn") || changedProperties.has("disabled") || changedProperties.has("disabledItem") || changedProperties.has("readOnly")) {
      if (normalizedProps.invalid) {
        this.setAttribute("invalid", "");
        this.removeAttribute("warn");
      } else if (normalizedProps.warn) {
        this.setAttribute("warn", "");
        this.removeAttribute("invalid");
      } else {
        this.removeAttribute("invalid");
        this.removeAttribute("warn");
      }
    }
    if (hasAILabel) {
      this.setAttribute("ai-label", "");
    } else {
      this.removeAttribute("ai-label");
    }
  }
  render() {
    const { checked, hideLabel, labelText, name, value, disabled, disabledItem, readOnly, invalid, warn } = this;
    const normalizedProps = {
      invalid: !readOnly && !disabled && !disabledItem && invalid,
      warn: !readOnly && !disabled && !disabledItem && !invalid && warn
    };
    const innerLabelClasses = e2({
      [`${prefix}--radio-button__label-text`]: true,
      [`${prefix}--visually-hidden`]: hideLabel
    });
    return b`
      <input
        id="radio"
        type="radio"
        class="${prefix}--radio-button"
        .checked=${checked}
        ?disabled="${disabledItem || disabled}"
        ?required=${this.required}
        aria-readonly="${String(Boolean(readOnly))}"
        name=${o(name)}
        value=${o(value)} />
      <label
        for="input"
        class="${prefix}--radio-button__label ${normalizedProps.invalid ? `${prefix}--radio-button__label--invalid` : ""} ${normalizedProps.warn ? `${prefix}--radio-button__label--warn` : ""}">
        <span class="${prefix}--radio-button__appearance"></span>
        <span class="${innerLabelClasses}">
          <slot> ${labelText} </slot>
          <slot name="ai-label" @slotchange="${this._handleSlotChange}"></slot>
          <slot name="slug" @slotchange="${this._handleSlotChange}"></slot
        ></span>
      </label>
    `;
  }
  /**
   * A selector that will return the slug item.
   *
   * remove in v12
   */
  static get slugItem() {
    return `${prefix}-slug`;
  }
  /**
   * A selector that will return the AI Label item.
   */
  static get aiLabelItem() {
    return `${prefix}-ai-label`;
  }
  /**
   * The name of the custom event fired after this radio button changes its checked state.
   */
  static get eventChange() {
    return `${prefix}-radio-button-changed`;
  }
};
CDSRadioButton.shadowRootOptions = Object.assign(Object.assign({}, i.shadowRootOptions), { delegatesFocus: true });
CDSRadioButton.styles = styles;
__decorate([
  e("input")
], CDSRadioButton.prototype, "_inputNode", void 0);
__decorate([
  HostListener("click")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSRadioButton.prototype, "_handleClick", void 0);
__decorate([
  HostListener("keydown")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSRadioButton.prototype, "_handleKeydown", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSRadioButton.prototype, "checked", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "data-table" })
], CDSRadioButton.prototype, "dataTable", void 0);
__decorate([
  n({ type: Boolean, attribute: "default-checked" })
], CDSRadioButton.prototype, "defaultChecked", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSRadioButton.prototype, "disabledItem", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSRadioButton.prototype, "disabled", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "hide-label" })
], CDSRadioButton.prototype, "hideLabel", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSRadioButton.prototype, "invalid", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSRadioButton.prototype, "warn", void 0);
__decorate([
  n({ attribute: "warn-text" })
], CDSRadioButton.prototype, "warnText", void 0);
__decorate([
  n({ reflect: true, attribute: "label-position" })
], CDSRadioButton.prototype, "labelPosition", void 0);
__decorate([
  n({ attribute: "label-text" })
], CDSRadioButton.prototype, "labelText", void 0);
__decorate([
  n()
], CDSRadioButton.prototype, "name", void 0);
__decorate([
  n({ reflect: true })
], CDSRadioButton.prototype, "orientation", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSRadioButton.prototype, "readOnly", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSRadioButton.prototype, "required", void 0);
__decorate([
  n()
], CDSRadioButton.prototype, "value", void 0);
CDSRadioButton = __decorate([
  carbonElement(`${prefix}-radio-button`)
], CDSRadioButton);

// node_modules/@carbon/web-components/es/components/radio-button/radio-button-skeleton.js
var CDSRadioButtonSkeleton = class CDSRadioButtonSkeleton2 extends i {
  render() {
    return b`
      <div class="${prefix}--radio-button ${prefix}--skeleton"></div>
      <span class="${prefix}--radio-button__label ${prefix}--skeleton"></span>
    `;
  }
};
CDSRadioButtonSkeleton.styles = styles;
CDSRadioButtonSkeleton = __decorate([
  carbonElement(`${prefix}-radio-button-skeleton`)
], CDSRadioButtonSkeleton);
