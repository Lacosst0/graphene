import {
  createIconTemplate
<<<<<<<< HEAD:priv/static/assets/chunks/chunk-7MUAAP5K.js
} from "./chunk-OZCPNA5T.js";
import {
  n
} from "./chunk-4GPN2FR3.js";
========
} from "./chunk-LDCWSK5M.js";
import {
  n
} from "./chunk-V6ENGPT2.js";
>>>>>>>> 8ec8e62f80de45f4d42992fbfd1d4576ecc905a2:priv/static/assets/chunks/chunk-7TWDVSG2.js
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
<<<<<<<< HEAD:priv/static/assets/chunks/chunk-7MUAAP5K.js
} from "./chunk-XGWNKZOA.js";
========
} from "./chunk-3GZFZEMV.js";
>>>>>>>> 8ec8e62f80de45f4d42992fbfd1d4576ecc905a2:priv/static/assets/chunks/chunk-7TWDVSG2.js

// node_modules/@carbon/web-components/es/components/icon/icon.js
var CDSIcon = class CDSIcon2 extends i {
  constructor() {
    super(...arguments);
    this.size = 16;
    this.ariaLabel = null;
  }
  render() {
    const { icon, size, class: className, ariaLabel } = this;
    if (icon) {
      const iconTemplate = createIconTemplate(icon);
      return iconTemplate({
        class: className || "",
        "aria-label": ariaLabel || "",
        "aria-hidden": !ariaLabel ? "true" : "false",
        width: size,
        height: size
      });
    }
    return b`<slot></slot>`;
  }
};
__decorate([
  n({ type: Object })
], CDSIcon.prototype, "icon", void 0);
__decorate([
  n({ type: Number })
], CDSIcon.prototype, "size", void 0);
__decorate([
  n({ type: String })
], CDSIcon.prototype, "class", void 0);
__decorate([
  n({ type: String, attribute: "aria-label" })
], CDSIcon.prototype, "ariaLabel", void 0);
CDSIcon = __decorate([
  carbonElement(`${prefix}-icon`)
], CDSIcon);
