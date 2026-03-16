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
  i,
  i2
} from "./chunk-3GZFZEMV.js";
import "./chunk-G6EI4S4W.js";

// node_modules/@carbon/web-components/es/components/stack/stack.scss.js
var styles = i([".cds--stack-horizontal,:host(cds-stack[orientation=horizontal]) div{-moz-column-gap:var(--cds-stack-gap,0);column-gap:var(--cds-stack-gap,0);display:inline-grid;grid-auto-flow:column}.cds--stack-vertical,:host(cds-stack[orientation=vertical]) div{display:grid;grid-auto-flow:row;row-gap:var(--cds-stack-gap,0)}.cds--stack-scale-1{--cds-stack-gap:0.125rem}.cds--stack-scale-2{--cds-stack-gap:0.25rem}.cds--stack-scale-3{--cds-stack-gap:0.5rem}.cds--stack-scale-4{--cds-stack-gap:0.75rem}.cds--stack-scale-5{--cds-stack-gap:1rem}.cds--stack-scale-6{--cds-stack-gap:1.5rem}.cds--stack-scale-7{--cds-stack-gap:2rem}.cds--stack-scale-8{--cds-stack-gap:2.5rem}.cds--stack-scale-9{--cds-stack-gap:3rem}.cds--stack-scale-10{--cds-stack-gap:4rem}.cds--stack-scale-11{--cds-stack-gap:5rem}.cds--stack-scale-12{--cds-stack-gap:6rem}.cds--stack-scale-13{--cds-stack-gap:10rem}:host(cds-stack) .cds--stack-scale-1{--cds-stack-gap:0.125rem}:host(cds-stack) .cds--stack-scale-2{--cds-stack-gap:0.25rem}:host(cds-stack) .cds--stack-scale-3{--cds-stack-gap:0.5rem}:host(cds-stack) .cds--stack-scale-4{--cds-stack-gap:0.75rem}:host(cds-stack) .cds--stack-scale-5{--cds-stack-gap:1rem}:host(cds-stack) .cds--stack-scale-6{--cds-stack-gap:1.5rem}:host(cds-stack) .cds--stack-scale-7{--cds-stack-gap:2rem}:host(cds-stack) .cds--stack-scale-8{--cds-stack-gap:2.5rem}:host(cds-stack) .cds--stack-scale-9{--cds-stack-gap:3rem}:host(cds-stack) .cds--stack-scale-10{--cds-stack-gap:4rem}:host(cds-stack) .cds--stack-scale-11{--cds-stack-gap:5rem}:host(cds-stack) .cds--stack-scale-12{--cds-stack-gap:6rem}:host(cds-stack) .cds--stack-scale-13{--cds-stack-gap:10rem}"]);

// node_modules/@carbon/layout/es/index.js
var baseFontSize = 16;
function rem(px) {
  return "".concat(px / baseFontSize, "rem");
}
var breakpoints = {
  sm: {
    width: rem(320),
    columns: 4,
    margin: "0"
  },
  md: {
    width: rem(672),
    columns: 8,
    margin: rem(16)
  },
  lg: {
    width: rem(1056),
    columns: 16,
    margin: rem(16)
  },
  xlg: {
    width: rem(1312),
    columns: 16,
    margin: rem(16)
  },
  max: {
    width: rem(1584),
    columns: 16,
    margin: rem(24)
  }
};
var miniUnit = 8;
function miniUnits(count) {
  return rem(miniUnit * count);
}
var spacing01 = miniUnits(0.25);
var spacing02 = miniUnits(0.5);
var spacing03 = miniUnits(1);
var spacing04 = miniUnits(1.5);
var spacing05 = miniUnits(2);
var spacing06 = miniUnits(3);
var spacing07 = miniUnits(4);
var spacing08 = miniUnits(5);
var spacing09 = miniUnits(6);
var spacing10 = miniUnits(8);
var spacing11 = miniUnits(10);
var spacing12 = miniUnits(12);
var spacing13 = miniUnits(20);
var spacing = [spacing01, spacing02, spacing03, spacing04, spacing05, spacing06, spacing07, spacing08, spacing09, spacing10, spacing11, spacing12, spacing13];
var layout01 = miniUnits(2);
var layout02 = miniUnits(3);
var layout03 = miniUnits(4);
var layout04 = miniUnits(6);
var layout05 = miniUnits(8);
var layout06 = miniUnits(12);
var layout07 = miniUnits(20);
var container01 = miniUnits(3);
var container02 = miniUnits(4);
var container03 = miniUnits(5);
var container04 = miniUnits(6);
var container05 = miniUnits(8);
var sizeXSmall = rem(24);
var sizeSmall = rem(32);
var sizeMedium = rem(40);
var sizeLarge = rem(48);
var sizeXLarge = rem(64);
var size2XLarge = rem(80);

// node_modules/@carbon/web-components/es/components/stack/defs.js
var STACK_ORIENTATION;
(function(STACK_ORIENTATION2) {
  STACK_ORIENTATION2["VERTICAL"] = "vertical";
  STACK_ORIENTATION2["HORIZONTAL"] = "horizontal";
})(STACK_ORIENTATION || (STACK_ORIENTATION = {}));
var SPACING_STEPS = Array.from({ length: spacing.length - 1 }).map((_, step) => {
  return step + 1;
});

// node_modules/@carbon/web-components/es/components/stack/stack.js
var CDSStack = class CDSStack2 extends i2 {
  constructor() {
    super(...arguments);
    this.orientation = STACK_ORIENTATION.VERTICAL;
    this.useCustomGapValue = false;
  }
  updated(changedProperties) {
    var _a, _b, _c, _d;
    if (changedProperties.has("gap")) {
      if (this.useCustomGapValue) {
        this.style.setProperty(`--${prefix}-stack-gap`, `${this.gap}`);
      } else {
        const oldGapValue = changedProperties.get("gap");
        (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("div")) === null || _b === void 0 ? void 0 : _b.classList.remove(`${prefix}--stack-scale-${oldGapValue}`);
        (_d = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector("div")) === null || _d === void 0 ? void 0 : _d.classList.add(`${prefix}--stack-scale-${this.gap}`);
      }
    }
  }
  render() {
    return b`<div><slot></slot></div>`;
  }
};
CDSStack.styles = styles;
__decorate([
  n({ type: String, reflect: true })
], CDSStack.prototype, "orientation", void 0);
__decorate([
  n({ type: SPACING_STEPS || String, reflect: true })
], CDSStack.prototype, "gap", void 0);
__decorate([
  n({ type: Boolean, attribute: "use-custom-gap-value" })
], CDSStack.prototype, "useCustomGapValue", void 0);
CDSStack = __decorate([
  carbonElement(`${prefix}-stack`)
], CDSStack);
