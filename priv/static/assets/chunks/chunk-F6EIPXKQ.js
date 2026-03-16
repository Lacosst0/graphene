import {
  tooltipStyles
} from "./chunk-X7WRA7XG.js";
import {
  CDSButton$1,
  buttonStyles
} from "./chunk-JYACJRIF.js";
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
  S,
  __decorate,
  b,
  i
} from "./chunk-3GZFZEMV.js";

// node_modules/@carbon/web-components/es/components/icon-button/defs.js
var ICON_BUTTON_SIZE;
(function(ICON_BUTTON_SIZE2) {
  ICON_BUTTON_SIZE2["SMALL"] = "sm";
  ICON_BUTTON_SIZE2["MEDIUM"] = "md";
  ICON_BUTTON_SIZE2["LARGE"] = "lg";
})(ICON_BUTTON_SIZE || (ICON_BUTTON_SIZE = {}));
var ICON_BUTTON_TOOLTIP_ALIGNMENT;
(function(ICON_BUTTON_TOOLTIP_ALIGNMENT2) {
  ICON_BUTTON_TOOLTIP_ALIGNMENT2["TOP"] = "top";
  ICON_BUTTON_TOOLTIP_ALIGNMENT2["TOP_LEFT"] = "top-left";
  ICON_BUTTON_TOOLTIP_ALIGNMENT2["TOP_RIGHT"] = "top-right";
  ICON_BUTTON_TOOLTIP_ALIGNMENT2["BOTTOM"] = "bottom";
  ICON_BUTTON_TOOLTIP_ALIGNMENT2["BOTTOM_LEFT"] = "bottom-left";
  ICON_BUTTON_TOOLTIP_ALIGNMENT2["BOTTOM_RIGHT"] = "bottom-right";
  ICON_BUTTON_TOOLTIP_ALIGNMENT2["LEFT"] = "left";
  ICON_BUTTON_TOOLTIP_ALIGNMENT2["RIGHT"] = "right";
})(ICON_BUTTON_TOOLTIP_ALIGNMENT || (ICON_BUTTON_TOOLTIP_ALIGNMENT = {}));

// node_modules/@carbon/web-components/es/components/icon-button/icon-button.scss.js
var iconButtonStyles = i(["@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--assistive-text,.cds--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}:host(cds-icon-button){--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}:host(cds-icon-button[kind=ghost]) ::slotted([slot=icon]){color:var(--cds-icon-primary,#161616)}"]);

// node_modules/@carbon/web-components/es/components/icon-button/icon-button.js
var CDSIconButton = class CDSIconButton2 extends CDSButton$1 {
  constructor() {
    super(...arguments);
    this.align = "top";
    this.autoalign = false;
    this.closeOnActivation = true;
    this.defaultOpen = false;
    this.enterDelayMs = 100;
    this.leaveDelayMs = 100;
    this.size = "md";
  }
  connectedCallback() {
    super.connectedCallback();
    S(this.renderRoot, [
      tooltipStyles,
      buttonStyles,
      iconButtonStyles
    ]);
  }
  updated(changedProperties) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    (_a = super.updated) === null || _a === void 0 ? void 0 : _a.call(this, changedProperties);
    if (changedProperties) {
      (_e = (_d = (_c = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(`${prefix}-tooltip`)) === null || _c === void 0 ? void 0 : _c.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector(`.${prefix}--tooltip`)) === null || _e === void 0 ? void 0 : _e.classList.add(`${prefix}--icon-tooltip`);
      const tooltipContent = (_f = this.querySelector("[slot=tooltip-content]")) === null || _f === void 0 ? void 0 : _f.textContent;
      (_j = (_h = (_g = this.shadowRoot) === null || _g === void 0 ? void 0 : _g.querySelector(`${prefix}-tooltip`)) === null || _h === void 0 ? void 0 : _h.querySelector(`button`)) === null || _j === void 0 ? void 0 : _j.setAttribute("aria-label", String(tooltipContent));
    }
  }
  _renderTooltipContent() {
    return b`
      <cds-tooltip-content ?hidden=${this.disabled}>
        <slot name="tooltip-content"></slot>
      </cds-tooltip-content>
    `;
  }
  render() {
    const { align, autoalign, closeOnActivation, defaultOpen, enterDelayMs, leaveDelayMs } = this;
    return b`
      <cds-tooltip
        ?autoalign=${autoalign}
        align=${align}
        ?defaultOpen=${defaultOpen}
        ?closeOnActivation=${closeOnActivation}
        enter-delay-ms=${enterDelayMs}
        leave-delay-ms=${leaveDelayMs}
        .dropShadow=${false}>
        ${super.render()} ${this._renderTooltipContent()}
      </cds-tooltip>
    `;
  }
};
__decorate([
  n({ reflect: true, type: String })
], CDSIconButton.prototype, "align", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSIconButton.prototype, "autoalign", void 0);
__decorate([
  n({ attribute: "close-on-activation", reflect: true, type: Boolean })
], CDSIconButton.prototype, "closeOnActivation", void 0);
__decorate([
  n({ reflect: true, type: Boolean })
], CDSIconButton.prototype, "defaultOpen", void 0);
__decorate([
  n({ attribute: "enter-delay-ms", type: Number })
], CDSIconButton.prototype, "enterDelayMs", void 0);
__decorate([
  n({ attribute: "leave-delay-ms", type: Number })
], CDSIconButton.prototype, "leaveDelayMs", void 0);
__decorate([
  n({ reflect: true })
], CDSIconButton.prototype, "size", void 0);
CDSIconButton = __decorate([
  carbonElement(`${prefix}-icon-button`)
], CDSIconButton);
var CDSIconButton$1 = CDSIconButton;

export {
  ICON_BUTTON_TOOLTIP_ALIGNMENT,
  iconButtonStyles,
  CDSIconButton$1
};
