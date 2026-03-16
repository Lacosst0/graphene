import {
  DROPDOWN_SIZE,
  styles
} from "./chunk-HB2Z2XIQ.js";
import {
  _16
} from "./chunk-XKCQS753.js";
import {
  iconLoader
} from "./chunk-TRPNDHDH.js";
import {
  n,
  r
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

// node_modules/@carbon/web-components/es/components/dropdown/dropdown-item.js
var CDSDropdownItem = class CDSDropdownItem2 extends i {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.highlighted = false;
    this.selected = false;
    this.size = DROPDOWN_SIZE.MEDIUM;
    this.value = "";
    this._hasEllipsisApplied = false;
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "option");
    }
    if (!this.hasAttribute("id")) {
      this.setAttribute("id", `${prefix}-dropdown-item-${this.constructor.id++}`);
    }
    this.setAttribute("aria-selected", String(this.selected));
  }
  /**
   * Handles `slotchange` event.
   *
   * Adds the `title` property to its parent element so the native
   * browser tooltip appears for menu items that result in ellipsis
   */
  _handleSlotChange({ target }) {
    var _a;
    const text = target.assignedNodes().filter(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- https://github.com/carbon-design-system/carbon/issues/20452
      (node) => node.nodeType !== Node.TEXT_NODE || node.textContent.trim()
    );
    const textContainer = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`.${prefix}--list-box__menu-item__option`);
    if (!textContainer || this._hasEllipsisApplied === true)
      return;
    const observer = new ResizeObserver(() => {
      var _a2;
      this._hasEllipsisApplied = textContainer.scrollWidth > textContainer.clientWidth;
      if (this._hasEllipsisApplied) {
        textContainer.setAttribute("title", (_a2 = text[0].textContent) !== null && _a2 !== void 0 ? _a2 : "");
      }
    });
    observer.observe(textContainer);
  }
  render() {
    const { selected, _handleSlotChange: handleSlotChange } = this;
    return b`
      <div class="${prefix}--list-box__menu-item__option" part="menu-item">
        <slot @slotchange=${handleSlotChange}></slot>
        ${!selected ? void 0 : iconLoader(_16, {
      part: "selected-icon",
      class: `${prefix}--list-box__menu-item__selected-icon`
    })}
      </div>
    `;
  }
};
CDSDropdownItem.id = 0;
CDSDropdownItem.styles = styles;
__decorate([
  n({ type: Boolean, reflect: true })
], CDSDropdownItem.prototype, "disabled", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSDropdownItem.prototype, "highlighted", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSDropdownItem.prototype, "selected", void 0);
__decorate([
  n({ reflect: true })
], CDSDropdownItem.prototype, "size", void 0);
__decorate([
  n()
], CDSDropdownItem.prototype, "value", void 0);
__decorate([
  r()
], CDSDropdownItem.prototype, "_hasEllipsisApplied", void 0);
CDSDropdownItem = __decorate([
  carbonElement(`${prefix}-dropdown-item`)
], CDSDropdownItem);
var CDSDropdownItem$1 = CDSDropdownItem;

export {
  CDSDropdownItem$1
};
