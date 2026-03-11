import {
  TIME_PICKER_SIZE,
  styles
} from "./chunk-PE33Q6I6.js";
import "./chunk-2G6ZGNK6.js";
import "./chunk-MCK3EHK6.js";
import {
  FormMixin
} from "./chunk-MNFEJBUN.js";
import "./chunk-BVJDLJUP.js";
import "./chunk-357XJSHN.js";
import {
  _16
} from "./chunk-MZGBQGXZ.js";
import "./chunk-KDBKJKDV.js";
import {
  filter
} from "./chunk-3QPROXNA.js";
import "./chunk-ML2VKJHQ.js";
import {
  iconLoader
} from "./chunk-TRPNDHDH.js";
import "./chunk-LDCWSK5M.js";
import "./chunk-TEMKX2NW.js";
import {
  o
} from "./chunk-DAFPBEYU.js";
import {
  e as e2
} from "./chunk-YOLTZNLE.js";
import "./chunk-M2VBID3H.js";
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
import "./chunk-G6EI4S4W.js";

// node_modules/@carbon/web-components/es/components/time-picker/time-picker-select.js
var CDSTimePickerSelect = class CDSTimePickerSelect2 extends FormMixin(i) {
  constructor() {
    super(...arguments);
    this._observerMutation = null;
    this.ariaLabel = "open list of options";
    this.defaultValue = "";
    this.readOnly = false;
    this.disabled = false;
    this.id = "";
    this.name = "";
    this.value = "";
    this.size = TIME_PICKER_SIZE.MEDIUM;
    this._handleMutation = () => {
      this.requestUpdate?.();
    };
  }
  /**
   * Handles `oninput` event on the `<select>`.
   *
   * @param event The event.
   * @param event.target The event target.
   */
  _handleInput(event) {
    const { value } = event.target;
    this.value = value;
    const { eventSelect } = this.constructor;
    this.dispatchEvent(new CustomEvent(eventSelect, {
      bubbles: true,
      composed: true,
      detail: {
        value
      }
    }));
  }
  /**
   * @returns The template containing child `<option>` elements from select items.
   */
  _renderItems() {
    const selectorItem = `${prefix}-select-item`;
    return filter(this.childNodes, (item) => item.nodeType === Node.ELEMENT_NODE && item.matches(selectorItem)).map((item) => {
      const disabled = item.hasAttribute("disabled");
      const label = item.getAttribute("label");
      const selected = item.hasAttribute("selected");
      const value = item.getAttribute("value");
      const { textContent } = item;
      return b`
        <option
          ?disabled="${disabled}"
          label="${o(label)}"
          ?selected="${selected}"
          value="${o(value)}">
          ${textContent}
        </option>
      `;
    });
  }
  _handleFormdata(event) {
    const { formData } = event;
    const { disabled, name, value } = this;
    if (!disabled) {
      formData.append(name, value);
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this._observerMutation = new MutationObserver(this._handleMutation);
    this._observerMutation.observe(this, {
      attributes: true,
      childList: true,
      subtree: true
    });
  }
  disconnectedCallback() {
    if (this._observerMutation) {
      this._observerMutation.disconnect();
      this._observerMutation = null;
    }
    super.disconnectedCallback();
  }
  updated(changedProperties) {
    if (changedProperties.has("defaultValue") && this.defaultValue && !this.value) {
      this.value = this.defaultValue;
    }
    if (changedProperties.has("value")) {
      if (this._selectNode) {
        this._selectNode.value = this.value;
      }
    }
  }
  render() {
    const { ariaLabel, disabled, size, id, value, readOnly, _handleInput: handleInput } = this;
    const inputClasses = e2({
      [`${prefix}--select-input`]: true,
      [`${prefix}--select-input--${size}`]: size
    });
    return b`
      <select
        id="${o(id)}"
        class="${inputClasses}"
        aria-readonly="${String(Boolean(readOnly))}"
        ?disabled="${disabled}"
        aria-label="${o(ariaLabel)}"
        .value="${o(value)}"
        @input="${handleInput}">
        ${this._renderItems()}
      </select>
      ${iconLoader(_16, {
      class: `${prefix}--select__arrow`,
      "aria-hidden": "true"
    })}
    `;
  }
  static get eventSelect() {
    return `${prefix}-select-selected`;
  }
};
CDSTimePickerSelect.shadowRootOptions = Object.assign(Object.assign({}, i.shadowRootOptions), { delegatesFocus: true });
CDSTimePickerSelect.styles = styles;
__decorate([
  e("select")
], CDSTimePickerSelect.prototype, "_selectNode", void 0);
__decorate([
  n({ attribute: "aria-label" })
], CDSTimePickerSelect.prototype, "ariaLabel", void 0);
__decorate([
  n({ attribute: "default-value" })
], CDSTimePickerSelect.prototype, "defaultValue", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTimePickerSelect.prototype, "readOnly", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTimePickerSelect.prototype, "disabled", void 0);
__decorate([
  n({ reflect: true })
], CDSTimePickerSelect.prototype, "id", void 0);
__decorate([
  n()
], CDSTimePickerSelect.prototype, "name", void 0);
__decorate([
  n({ reflect: true })
], CDSTimePickerSelect.prototype, "value", void 0);
__decorate([
  n({ reflect: true })
], CDSTimePickerSelect.prototype, "size", void 0);
CDSTimePickerSelect = __decorate([
  carbonElement(`${prefix}-time-picker-select`)
], CDSTimePickerSelect);
