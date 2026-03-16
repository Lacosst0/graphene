import {
  styles
} from "./chunk-XJGTH7Z6.js";
import "./chunk-UBPLMH62.js";
import "./chunk-2G6ZGNK6.js";
import "./chunk-MCK3EHK6.js";
import "./chunk-MNFEJBUN.js";
import "./chunk-BVJDLJUP.js";
import "./chunk-357XJSHN.js";
import "./chunk-KDBKJKDV.js";
import "./chunk-LSZ2PVLU.js";
import "./chunk-X7WRA7XG.js";
import "./chunk-HFGTZQQE.js";
import "./chunk-DFLJB7UB.js";
import "./chunk-GPZZH3QI.js";
import "./chunk-IGHLRMAE.js";
import "./chunk-5HWAKYGL.js";
import "./chunk-TGGEFEEZ.js";
import "./chunk-ML2VKJHQ.js";
import "./chunk-TRPNDHDH.js";
import "./chunk-LDCWSK5M.js";
import "./chunk-TEMKX2NW.js";
import "./chunk-DAFPBEYU.js";
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
  b,
  i2 as i
} from "./chunk-3GZFZEMV.js";
import "./chunk-G6EI4S4W.js";

// node_modules/@carbon/web-components/es/components/password-input/password-input-skeleton.js
var CDSPasswordInputSkeleton = class CDSPasswordInputSkeleton2 extends i {
  constructor() {
    super(...arguments);
    this.hideLabel = false;
  }
  render() {
    const { hideLabel } = this;
    return b`
      ${!hideLabel && b` <span class="${prefix}--label ${prefix}--skeleton"></span> `}
      <div class="${prefix}--text-input ${prefix}--skeleton"></div>
    `;
  }
};
CDSPasswordInputSkeleton.styles = styles;
__decorate([
  n({ type: Boolean, reflect: true, attribute: "hide-label" })
], CDSPasswordInputSkeleton.prototype, "hideLabel", void 0);
CDSPasswordInputSkeleton = __decorate([
  carbonElement(`${prefix}-password-input-skeleton`)
], CDSPasswordInputSkeleton);
