import {
  styles
} from "./chunk-O53MYWX4.js";
import {
  CDSDropdownItem$1
} from "./chunk-3L4UVYYW.js";
import "./chunk-LH5C5YXH.js";
import "./chunk-XKCQS753.js";
import "./chunk-MCK3EHK6.js";
import "./chunk-7W25EMFW.js";
import "./chunk-FB454AWH.js";
import "./chunk-MNFEJBUN.js";
import "./chunk-BVJDLJUP.js";
import "./chunk-357XJSHN.js";
import "./chunk-MZGBQGXZ.js";
import "./chunk-KDBKJKDV.js";
import "./chunk-3QPROXNA.js";
import "./chunk-YGK4BVA2.js";
import "./chunk-4NCRUXEY.js";
import "./chunk-5HWAKYGL.js";
import "./chunk-TGGEFEEZ.js";
import "./chunk-ML2VKJHQ.js";
import "./chunk-PBKNMGYX.js";
import "./chunk-OZCPNA5T.js";
import "./chunk-Z4SJF7V6.js";
import {
  o
} from "./chunk-NZEGYYG7.js";
import "./chunk-73FE5HOG.js";
import "./chunk-DT7CIZC4.js";
import "./chunk-M2VBID3H.js";
import {
  n
} from "./chunk-4GPN2FR3.js";
import {
  prefix
} from "./chunk-ITCMO2MJ.js";
import {
  carbonElement
} from "./chunk-D5HOJOMG.js";
import {
  __decorate,
  b
} from "./chunk-XGWNKZOA.js";
import "./chunk-WHMSFNPJ.js";

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
