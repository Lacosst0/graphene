import {
  CDSSelectSkeleton$1
} from "./chunk-RAN6G7ZS.js";
import {
  styles
} from "./chunk-VV6LXBX7.js";
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

// node_modules/@carbon/web-components/es/components/fluid-select/fluid-select-skeleton.js
var CDSFluidSelectSkeleton = class CDSFluidSelectSkeleton2 extends CDSSelectSkeleton$1 {
  render() {
    return b`
      <div class="${prefix}--select--fluid__skeleton">${super.render()}</div>
    `;
  }
};
CDSFluidSelectSkeleton.styles = [CDSSelectSkeleton$1.styles, styles];
CDSFluidSelectSkeleton = __decorate([
  carbonElement(`${prefix}-fluid-select-skeleton`)
], CDSFluidSelectSkeleton);
