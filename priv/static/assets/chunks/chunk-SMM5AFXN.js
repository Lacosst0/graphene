import {
  BUTTON_KIND,
  buttonStyles
} from "./chunk-JYACJRIF.js";
import {
  e
} from "./chunk-YOLTZNLE.js";
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

// node_modules/@carbon/web-components/es/components/button/button-set-base.js
var CDSButtonSetBase = class CDSButtonSetBase2 extends i {
  render() {
    return b`<slot></slot>`;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "list");
  }
};
CDSButtonSetBase.styles = buttonStyles;
CDSButtonSetBase = __decorate([
  carbonElement(`${prefix}-button-set-base`)
], CDSButtonSetBase);
var CDSButtonSetBase$1 = CDSButtonSetBase;

// node_modules/@carbon/web-components/es/components/button/button-set.js
var CDSButtonSet = class CDSButtonSet2 extends CDSButtonSetBase$1 {
  constructor() {
    super(...arguments);
    this.stacked = false;
    this._hideSiblingMargin = () => {
      var _a;
      const slot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("slot");
      if (!slot)
        return;
      const items = slot.assignedElements().filter((el) => el.tagName.toLowerCase() === `${prefix}-button`);
      const focusedIndex = items.findIndex((el) => el.matches(":focus-within"));
      items.forEach((el, idx) => {
        const shouldHide = focusedIndex >= 0 && (idx === focusedIndex || idx === focusedIndex + 1);
        el.toggleAttribute("hide-margin", shouldHide);
      });
    };
  }
  /**
   * Handler for @slotchange, set the first cds-button to kind secondary and primary for the remaining ones
   *
   * @private
   */
  _handleSlotChange(event) {
    const childItems = event.target.assignedNodes().filter((elem) => elem.matches !== void 0 ? elem.matches(this.constructor.selectorItem) : false);
    childItems.forEach((elem, index) => {
      elem.setAttribute("kind", index === 0 ? BUTTON_KIND.SECONDARY : BUTTON_KIND.PRIMARY);
    });
    const update = new CustomEvent(`${prefix}-btn-set-update`, {
      bubbles: true,
      cancelable: true,
      composed: true
    });
    this.dispatchEvent(update);
  }
  connectedCallback() {
    var _a;
    (_a = super.connectedCallback) === null || _a === void 0 ? void 0 : _a.call(this);
    this.addEventListener("focusin", this._hideSiblingMargin);
    this.addEventListener("focusout", this._hideSiblingMargin);
  }
  render() {
    const { stacked } = this;
    const defaultClasses = {
      [`${prefix}--btn-set--stacked`]: stacked,
      [`${prefix}--btn-set`]: true
    };
    const classes = e(defaultClasses);
    return b`<slot class="${classes} @slotchange="${this._handleSlotChange}"></slot>`;
  }
  /**
   * A selector that will return the child items.
   */
  static get selectorItem() {
    return `${prefix}-button`;
  }
};
CDSButtonSet.styles = buttonStyles;
__decorate([
  n({ type: Boolean, reflect: true })
], CDSButtonSet.prototype, "stacked", void 0);
CDSButtonSet = __decorate([
  carbonElement(`${prefix}-button-set`)
], CDSButtonSet);
