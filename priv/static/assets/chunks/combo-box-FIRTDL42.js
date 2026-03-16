import {
  CDSDropdownItem$1
} from "./chunk-4CFEDWQ4.js";
import {
  styles
} from "./chunk-TXIJHUYI.js";
import "./chunk-HB2Z2XIQ.js";
import "./chunk-XKCQS753.js";
import "./chunk-2G6ZGNK6.js";
import "./chunk-MCK3EHK6.js";
import "./chunk-MNFEJBUN.js";
import "./chunk-BVJDLJUP.js";
import "./chunk-357XJSHN.js";
import "./chunk-MZGBQGXZ.js";
import "./chunk-KDBKJKDV.js";
import "./chunk-3QPROXNA.js";
import "./chunk-YGK4BVA2.js";
import "./chunk-IGHLRMAE.js";
import "./chunk-5HWAKYGL.js";
import "./chunk-TGGEFEEZ.js";
import "./chunk-ML2VKJHQ.js";
import "./chunk-TRPNDHDH.js";
import "./chunk-LDCWSK5M.js";
import "./chunk-TEMKX2NW.js";
import "./chunk-DAFPBEYU.js";
import "./chunk-73FE5HOG.js";
import "./chunk-YOLTZNLE.js";
import "./chunk-M2VBID3H.js";
import "./chunk-V6ENGPT2.js";
import {
  prefix
} from "./chunk-ITCMO2MJ.js";
import {
  carbonElement
} from "./chunk-D5HOJOMG.js";
import {
  __decorate
} from "./chunk-3GZFZEMV.js";
import "./chunk-G6EI4S4W.js";

// node_modules/@carbon/web-components/es/components/combo-box/combo-box-item.js
var CDSComboBoxItem = class CDSComboBoxItem2 extends CDSDropdownItem$1 {
  constructor() {
    super(...arguments);
    this._nextSiblingRefs = {
      "hovered-next-sibling": null,
      "highlighted-next-sibling": null,
      "selected-next-sibling": null
    };
    this._handleMouseEnter = () => {
      if (this.hasAttribute("disabled")) {
        return;
      }
      this._syncNextSibling("hovered-next-sibling", true);
    };
    this._handleMouseLeave = () => {
      this._syncNextSibling("hovered-next-sibling", false);
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.classList.add(`${prefix}--list-box__menu-item`);
    this.addEventListener("mouseenter", this._handleMouseEnter);
    this.addEventListener("mouseleave", this._handleMouseLeave);
  }
  disconnectedCallback() {
    this.removeEventListener("mouseenter", this._handleMouseEnter);
    this.removeEventListener("mouseleave", this._handleMouseLeave);
    this._syncNextSibling("hovered-next-sibling", false);
    this._syncNextSibling("highlighted-next-sibling", false);
    this._syncNextSibling("selected-next-sibling", false);
    super.disconnectedCallback();
  }
  _getNextItem() {
    let next = this.nextElementSibling;
    while (next) {
      if (next instanceof HTMLElement && next.tagName.toLowerCase() === `${prefix}-combo-box-item`) {
        return next;
      }
      next = next.nextElementSibling;
    }
    return null;
  }
  _syncNextSibling(attribute, shouldSet) {
    const currentSibling = this._nextSiblingRefs[attribute];
    currentSibling === null || currentSibling === void 0 ? void 0 : currentSibling.removeAttribute(attribute);
    if (shouldSet) {
      const next = this._getNextItem();
      if (next) {
        next.setAttribute(attribute, "");
        this._nextSiblingRefs[attribute] = next;
        return;
      }
    }
    this._nextSiblingRefs[attribute] = null;
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("highlighted")) {
      this._syncNextSibling("highlighted-next-sibling", this.highlighted);
    }
    if (changedProperties.has("selected")) {
      this._syncNextSibling("selected-next-sibling", this.selected);
    }
  }
};
CDSComboBoxItem.styles = styles;
CDSComboBoxItem = __decorate([
  carbonElement(`${prefix}-combo-box-item`)
], CDSComboBoxItem);
