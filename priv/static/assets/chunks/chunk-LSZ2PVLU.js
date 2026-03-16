import {
  tooltipStyles
<<<<<<<< HEAD:priv/static/assets/chunks/chunk-S4VSMAQ5.js
} from "./chunk-IKN5OYO4.js";
import {
  popoverStyles
} from "./chunk-Z4HIH6RI.js";
========
} from "./chunk-X7WRA7XG.js";
import {
  popoverStyles
} from "./chunk-DFLJB7UB.js";
>>>>>>>> 8ec8e62f80de45f4d42992fbfd1d4576ecc905a2:priv/static/assets/chunks/chunk-LSZ2PVLU.js
import {
  POPOVER_ALIGNMENT
} from "./chunk-GPZZH3QI.js";
import {
  n,
  r
<<<<<<<< HEAD:priv/static/assets/chunks/chunk-S4VSMAQ5.js
} from "./chunk-4GPN2FR3.js";
========
} from "./chunk-V6ENGPT2.js";
>>>>>>>> 8ec8e62f80de45f4d42992fbfd1d4576ecc905a2:priv/static/assets/chunks/chunk-LSZ2PVLU.js
import {
  prefix
} from "./chunk-ITCMO2MJ.js";
import {
  carbonElement
} from "./chunk-D5HOJOMG.js";
import {
  S,
  __decorate,
  b,
  i2 as i
<<<<<<<< HEAD:priv/static/assets/chunks/chunk-S4VSMAQ5.js
} from "./chunk-XGWNKZOA.js";
========
} from "./chunk-3GZFZEMV.js";
>>>>>>>> 8ec8e62f80de45f4d42992fbfd1d4576ecc905a2:priv/static/assets/chunks/chunk-LSZ2PVLU.js

// node_modules/@carbon/web-components/es/components/tooltip/definition-tooltip.js
var CDSDefinitionTooltip = class CDSDefinitionTooltip2 extends i {
  constructor() {
    super(...arguments);
    this.align = "bottom";
    this.autoalign = false;
    this.defaultOpen = false;
    this.openOnHover = false;
    this.open = false;
  }
  connectedCallback() {
    super.connectedCallback();
    S(this.renderRoot, [popoverStyles, tooltipStyles]);
    if (this.hasAttribute("default-open")) {
      this.open = true;
    }
  }
  _handleBlur() {
    this.open = false;
  }
  _handleMouseDown() {
    this.open = !this.open;
  }
  _handleKeyDown(event) {
    const { key } = event;
    if (this.open && (key === "Esc" || key === "Escape")) {
      event.stopPropagation();
      this.open = false;
    }
  }
  _handleHover() {
    if (this.openOnHover && !this.open) {
      this.open = true;
    } else {
      this.open = false;
    }
  }
  _handleFocus() {
    this.open = true;
  }
  render() {
    const { align, open } = this;
    return b`
      <cds-popover
        @mouseenter=${this._handleHover}
        @mouseleave=${this._handleHover}
        highContrast
        dropShadow=${false}
        align=${align}
        .open=${open}>
        <button
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
          @mousedown=${this._handleMouseDown}
          @keydown=${this._handleKeyDown}
          aria-expanded=${open}
          part="definition-term"
          class="${prefix}--definition-term">
          <slot></slot>
        </button>
        <cds-popover-content>
          <slot name="definition"></slot>
        </cds-popover-content>
      </cds-popover>
    `;
  }
};
CDSDefinitionTooltip.styles = tooltipStyles;
__decorate([
  n({ reflect: true, type: POPOVER_ALIGNMENT })
], CDSDefinitionTooltip.prototype, "align", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSDefinitionTooltip.prototype, "autoalign", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "default-open" })
], CDSDefinitionTooltip.prototype, "defaultOpen", void 0);
__decorate([
  n({ reflect: true, type: Boolean, attribute: "open-on-hover" })
], CDSDefinitionTooltip.prototype, "openOnHover", void 0);
__decorate([
  r()
], CDSDefinitionTooltip.prototype, "open", void 0);
CDSDefinitionTooltip = __decorate([
  carbonElement(`${prefix}-definition-tooltip`)
], CDSDefinitionTooltip);
