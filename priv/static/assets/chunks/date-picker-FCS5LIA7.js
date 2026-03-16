import {
  DATE_PICKER_INPUT_KIND,
  styles
} from "./chunk-CFU7H4CK.js";
import "./chunk-OH5SS7XC.js";
import "./chunk-YX5YHKY5.js";
import "./chunk-7WTC3Q2E.js";
import "./chunk-MCK3EHK6.js";
import "./chunk-MNFEJBUN.js";
import "./chunk-BVJDLJUP.js";
import "./chunk-357XJSHN.js";
import "./chunk-KDBKJKDV.js";
import "./chunk-ZXB2XXTS.js";
import "./chunk-3QPROXNA.js";
import "./chunk-5HWAKYGL.js";
import "./chunk-TGGEFEEZ.js";
import "./chunk-ML2VKJHQ.js";
import "./chunk-PBKNMGYX.js";
import "./chunk-OZCPNA5T.js";
import "./chunk-Z4SJF7V6.js";
import "./chunk-NZEGYYG7.js";
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
  b,
  i2 as i
} from "./chunk-XGWNKZOA.js";
import "./chunk-WHMSFNPJ.js";

// node_modules/@carbon/web-components/es/components/date-picker/date-picker-input-skeleton.js
var CDSDatePickerInputSkeleton = class CDSDatePickerInputSkeleton2 extends i {
  constructor() {
    super(...arguments);
    this.hideLabel = false;
    this.kind = DATE_PICKER_INPUT_KIND.SIMPLE;
    this.range = false;
  }
  render() {
    const { hideLabel, range } = this;
    return b`
      <div class="${prefix}--date-picker-input-skeleton-container">
        ${!hideLabel ? b`<span class="${prefix}--label"></span>` : null}
        <div class="${prefix}--date-picker__input ${prefix}--skeleton"></div>
      </div>
      ${range ? b`
            <div class="${prefix}--date-picker-input-skeleton-container">
              ${!hideLabel ? b`<span class="${prefix}--label"></span>` : null}
              <div
                class="${prefix}--date-picker__input ${prefix}--skeleton"></div>
            </div>
          ` : null}
    `;
  }
};
CDSDatePickerInputSkeleton.styles = styles;
__decorate([
  n({ type: Boolean, reflect: true, attribute: "hide-label" })
], CDSDatePickerInputSkeleton.prototype, "hideLabel", void 0);
__decorate([
  n({ reflect: true })
], CDSDatePickerInputSkeleton.prototype, "kind", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "range" })
], CDSDatePickerInputSkeleton.prototype, "range", void 0);
CDSDatePickerInputSkeleton = __decorate([
  carbonElement(`${prefix}-date-picker-input-skeleton`)
], CDSDatePickerInputSkeleton);
