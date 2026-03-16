import {
  createIconTemplate
} from "./chunk-LDCWSK5M.js";
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
