import {
  styles
} from "./chunk-K2C2EPEG.js";
import {
  CDSDropdownItem$1
} from "./chunk-4CFEDWQ4.js";
import "./chunk-HB2Z2XIQ.js";
import "./chunk-XKCQS753.js";
import "./chunk-MCK3EHK6.js";
import "./chunk-KIDXGIQH.js";
import "./chunk-K2SMH2Z3.js";
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
import {
  o
} from "./chunk-DAFPBEYU.js";
import "./chunk-73FE5HOG.js";
import "./chunk-YOLTZNLE.js";
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
  b
} from "./chunk-3GZFZEMV.js";
import "./chunk-G6EI4S4W.js";

// node_modules/@carbon/web-components/es/components/multi-select/multi-select-item.js
var CDSMultiSelectItem = class CDSMultiSelectItem2 extends CDSDropdownItem$1 {
  constructor() {
    super(...arguments);
    this.isSelectAll = false;
    this.indeterminate = false;
    this.selectionName = "";
  }
  render() {
    const { disabled, selected, selectionName, value, indeterminate } = this;
    return b`
      <div class="${prefix}--list-box__menu-item__option">
        <cds-checkbox
          tabindex="-1"
          class="${prefix}--form-item ${prefix}--checkbox-wrapper"
          .checked=${selected}
          .indeterminate=${indeterminate}
          ?disabled=${disabled}
          name=${o(selectionName || void 0)}
          value=${value}>
          <slot></slot>
        </cds-checkbox>
      </div>
    `;
  }
  /**
   * A selector that will return multi select.
   */
  static get selectorList() {
    return `${prefix}-multi-select`;
  }
};
CDSMultiSelectItem.styles = styles;
__decorate([
  n({ type: Boolean })
], CDSMultiSelectItem.prototype, "filtered", void 0);
__decorate([
  n({ type: Boolean, attribute: "is-select-all", reflect: true })
], CDSMultiSelectItem.prototype, "isSelectAll", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSMultiSelectItem.prototype, "indeterminate", void 0);
__decorate([
  n({ attribute: "selection-name" })
], CDSMultiSelectItem.prototype, "selectionName", void 0);
CDSMultiSelectItem = __decorate([
  carbonElement(`${prefix}-multi-select-item`)
], CDSMultiSelectItem);
