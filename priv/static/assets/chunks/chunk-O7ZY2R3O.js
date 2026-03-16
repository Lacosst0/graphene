import {
  styles
} from "./chunk-D2ZRUUZ2.js";
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

// node_modules/@carbon/web-components/es/components/number-input/number-input-skeleton.js
var CDSNumberInputSkeleton = class CDSNumberInputSkeleton2 extends i {
  constructor() {
    super(...arguments);
    this.hideLabel = false;
  }
  render() {
    const { hideLabel } = this;
    return b`
      ${!hideLabel && b` <span class="${prefix}--label ${prefix}--skeleton"></span> `}
      <div class="${prefix}--number ${prefix}--skeleton"></div>
    `;
  }
};
CDSNumberInputSkeleton.styles = styles;
__decorate([
  n({ type: Boolean, reflect: true, attribute: "hide-label" })
], CDSNumberInputSkeleton.prototype, "hideLabel", void 0);
CDSNumberInputSkeleton = __decorate([
  carbonElement(`${prefix}-number-input-skeleton`)
], CDSNumberInputSkeleton);
var CDSNumberInputSkeleton$1 = CDSNumberInputSkeleton;

export {
  CDSNumberInputSkeleton$1
};
