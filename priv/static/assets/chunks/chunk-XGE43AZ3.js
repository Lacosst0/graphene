import {
  styles
} from "./chunk-NE2DBVMP.js";
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

// node_modules/@carbon/web-components/es/components/select/select-skeleton.js
var CDSSelectSkeleton = class CDSSelectSkeleton2 extends i {
  constructor() {
    super(...arguments);
    this.hideLabel = false;
  }
  render() {
    const { hideLabel } = this;
    return b`
      ${!hideLabel && b` <span class="${prefix}--label ${prefix}--skeleton"></span> `}
      <div class="${prefix}--select ${prefix}--skeleton"></div>
    `;
  }
};
CDSSelectSkeleton.styles = styles;
__decorate([
  n({ type: Boolean, reflect: true, attribute: "hide-label" })
], CDSSelectSkeleton.prototype, "hideLabel", void 0);
CDSSelectSkeleton = __decorate([
  carbonElement(`${prefix}-select-skeleton`)
], CDSSelectSkeleton);
var CDSSelectSkeleton$1 = CDSSelectSkeleton;

export {
  CDSSelectSkeleton$1
};
