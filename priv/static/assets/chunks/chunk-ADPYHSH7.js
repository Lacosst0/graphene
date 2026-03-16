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
  i2 as i
} from "./chunk-3GZFZEMV.js";

// node_modules/@carbon/web-components/es/components/select/select-item.js
var CDSSelectItem = class CDSSelectItem2 extends i {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.label = "";
    this.selected = false;
    this.value = "";
  }
};
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSelectItem.prototype, "disabled", void 0);
__decorate([
  n({ reflect: true })
], CDSSelectItem.prototype, "label", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSelectItem.prototype, "selected", void 0);
__decorate([
  n({ reflect: true })
], CDSSelectItem.prototype, "value", void 0);
CDSSelectItem = __decorate([
  carbonElement(`${prefix}-select-item`)
], CDSSelectItem);
