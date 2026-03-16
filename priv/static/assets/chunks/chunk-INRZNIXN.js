import {
  styles
<<<<<<<< HEAD:priv/static/assets/chunks/chunk-INWQE66X.js
} from "./chunk-OVXR64ID.js";
import {
  INPUT_SIZE
} from "./chunk-YX5YHKY5.js";
import {
  n
} from "./chunk-4GPN2FR3.js";
========
} from "./chunk-M2QWFF2O.js";
import {
  INPUT_SIZE
} from "./chunk-UBPLMH62.js";
import {
  n
} from "./chunk-V6ENGPT2.js";
>>>>>>>> 8ec8e62f80de45f4d42992fbfd1d4576ecc905a2:priv/static/assets/chunks/chunk-INRZNIXN.js
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
<<<<<<<< HEAD:priv/static/assets/chunks/chunk-INWQE66X.js
} from "./chunk-XGWNKZOA.js";
========
} from "./chunk-3GZFZEMV.js";
>>>>>>>> 8ec8e62f80de45f4d42992fbfd1d4576ecc905a2:priv/static/assets/chunks/chunk-INRZNIXN.js

// node_modules/@carbon/web-components/es/components/search/search-skeleton.js
var CDSSearchSkeleton = class CDSSearchSkeleton2 extends i {
  constructor() {
    super(...arguments);
    this.size = INPUT_SIZE.MEDIUM;
  }
  render() {
    return b`
      <span class="${prefix}--label ${prefix}--skeleton"></span>
      <div class="${prefix}--text-input ${prefix}--skeleton"></div>
    `;
  }
};
CDSSearchSkeleton.styles = styles;
__decorate([
  n({ reflect: true })
], CDSSearchSkeleton.prototype, "size", void 0);
CDSSearchSkeleton = __decorate([
  carbonElement(`${prefix}-search-skeleton`)
], CDSSearchSkeleton);
var CDSSearchSkeleton$1 = CDSSearchSkeleton;

export {
  CDSSearchSkeleton$1
};
