import {
  styles
} from "./chunk-ZWCJ76NN.js";
import {
  e
} from "./chunk-YOLTZNLE.js";
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

// node_modules/@carbon/web-components/es/components/toggle/toggle-skeleton.js
var CDSToggleSkeleton = class CDSToggleSkeleton2 extends i {
  render() {
    const skeletonClasses = e({
      [`${prefix}--toggle`]: true,
      [`${prefix}--toggle--skeleton`]: true
    });
    return b`
      <div class=${skeletonClasses}>
        <div class="${prefix}--toggle__skeleton-circle"></div>
        <div class="${prefix}--toggle__skeleton-rectangle"></div>
      </div>
    `;
  }
};
CDSToggleSkeleton.styles = styles;
CDSToggleSkeleton = __decorate([
  carbonElement(`${prefix}-toggle-skeleton`)
], CDSToggleSkeleton);
