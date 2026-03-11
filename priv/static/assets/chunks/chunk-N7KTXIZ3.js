import {
  styles
} from "./chunk-UBPLMH62.js";
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

// node_modules/@carbon/web-components/es/components/text-input/text-input-skeleton.js
var CDSTextInputSkeleton = class CDSTextInputSkeleton2 extends i {
  constructor() {
    super(...arguments);
    this.hideLabel = false;
  }
  render() {
    const { hideLabel } = this;
    return b`
      ${hideLabel ? "" : b`<span class="${prefix}--label ${prefix}--skeleton"></span>`}
      <div class="${prefix}--text-input ${prefix}--skeleton"></div>
    `;
  }
};
CDSTextInputSkeleton.styles = styles;
__decorate([
  n({ type: Boolean, reflect: true, attribute: "hide-label" })
], CDSTextInputSkeleton.prototype, "hideLabel", void 0);
CDSTextInputSkeleton = __decorate([
  carbonElement(`${prefix}-text-input-skeleton`)
], CDSTextInputSkeleton);
var CDSTextInputSkeleton$1 = CDSTextInputSkeleton;

export {
  CDSTextInputSkeleton$1
};
