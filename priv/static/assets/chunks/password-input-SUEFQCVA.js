import {
  styles
} from "./chunk-BUPCNGZP.js";
import "./chunk-YX5YHKY5.js";
import "./chunk-7WTC3Q2E.js";
import "./chunk-MCK3EHK6.js";
import "./chunk-MNFEJBUN.js";
import "./chunk-BVJDLJUP.js";
import "./chunk-357XJSHN.js";
import "./chunk-KDBKJKDV.js";
import "./chunk-S4VSMAQ5.js";
import "./chunk-IKN5OYO4.js";
import "./chunk-BVIX3CGA.js";
import "./chunk-Z4HIH6RI.js";
import "./chunk-GPZZH3QI.js";
import "./chunk-4NCRUXEY.js";
import "./chunk-5HWAKYGL.js";
import "./chunk-TGGEFEEZ.js";
import "./chunk-ML2VKJHQ.js";
import "./chunk-PBKNMGYX.js";
import "./chunk-OZCPNA5T.js";
import "./chunk-Z4SJF7V6.js";
import "./chunk-NZEGYYG7.js";
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
  b,
  i2 as i
} from "./chunk-XGWNKZOA.js";
import "./chunk-WHMSFNPJ.js";

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
