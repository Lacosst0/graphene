import {
  styles
} from "./chunk-4YGFFXOV.js";
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

// node_modules/@carbon/web-components/es/components/textarea/textarea-skeleton.js
var CDSTextareaSkeleton = class CDSTextareaSkeleton2 extends i {
  constructor() {
    super(...arguments);
    this.hideLabel = false;
  }
  render() {
    const { hideLabel } = this;
    return b`
      ${hideLabel ? "" : b`<span class="${prefix}--label ${prefix}--skeleton"></span>`}
      <div class="${prefix}--skeleton ${prefix}--text-area"></div>
    `;
  }
};
CDSTextareaSkeleton.styles = styles;
__decorate([
  n({ type: Boolean, reflect: true, attribute: "hide-label" })
], CDSTextareaSkeleton.prototype, "hideLabel", void 0);
CDSTextareaSkeleton = __decorate([
  carbonElement(`${prefix}-textarea-skeleton`)
], CDSTextareaSkeleton);
var CDSTextareaSkeleton$1 = CDSTextareaSkeleton;

export {
  CDSTextareaSkeleton$1
};
