import {
  carbonPrefix,
  prefix
} from "./chunk-6BPMK2Y2.js";
import "./chunk-5KAZEYVJ.js";
import "./chunk-SO7P7U55.js";
import {
  o
} from "./chunk-OYHNH2VO.js";
import "./chunk-LSZ2PVLU.js";
import "./chunk-X7WRA7XG.js";
import "./chunk-HFGTZQQE.js";
import "./chunk-DFLJB7UB.js";
import "./chunk-GPZZH3QI.js";
import "./chunk-IGHLRMAE.js";
import "./chunk-JYACJRIF.js";
import "./chunk-5HWAKYGL.js";
import "./chunk-TGGEFEEZ.js";
import "./chunk-ML2VKJHQ.js";
import "./chunk-WPLJTCHR.js";
import "./chunk-DAFPBEYU.js";
import "./chunk-73FE5HOG.js";
import {
  e as e2
} from "./chunk-YOLTZNLE.js";
import "./chunk-M2VBID3H.js";
import {
  e,
  n,
  r
} from "./chunk-V6ENGPT2.js";
import "./chunk-ITCMO2MJ.js";
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

// node_modules/@carbon/ibm-products-web-components/es/components/truncated-text/truncated-text.scss.js
var styles = i(["@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--assistive-text,.cds--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.c4p--truncated-text_button-collapse,.c4p--truncated-text_button-expand{border:none;cursor:pointer;font:inherit;line-height:inherit}:host(c4p-truncated-text){display:block;inline-size:100%}@media (prefers-reduced-motion:no-preference){:host(c4p-truncated-text) .c4p--truncated-text_transition{transition:max-height .11s cubic-bezier(.2,0,.38,.9)}}:host(c4p-truncated-text) .c4p--truncated-text_content{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:var(--line-clamp,0);text-overflow:clip;white-space:normal}:host(c4p-truncated-text) .c4p--truncated-text_content:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(c4p-truncated-text) .c4p--truncated-text_content:focus{outline-style:dotted}}:host(c4p-truncated-text) .c4p--truncated-text_content--closing{-webkit-line-clamp:none}:host(c4p-truncated-text) cds-tooltip{display:inline-flex}:host(c4p-truncated-text) .c4p--truncated-text_button-collapse:focus,:host(c4p-truncated-text) .c4p--truncated-text_button-expand:focus,:host(c4p-truncated-text) button:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(c4p-truncated-text) .c4p--truncated-text_button-collapse:focus,:host(c4p-truncated-text) .c4p--truncated-text_button-expand:focus,:host(c4p-truncated-text) button:focus{outline-style:dotted}}.c4p--truncated-text_button-collapse,.c4p--truncated-text_button-expand{color:var(--cds-link-primary,#0f62fe);padding:0 .125rem}.c4p--truncated-text_button-collapse.c4p--truncated-text_button-hide,.c4p--truncated-text_button-expand.c4p--truncated-text_button-hide{display:none}.c4p--truncated-text_button-expand.c4p--truncated-text_button-layered{background-color:var(--cds-layer)}.c4p--truncated-text_button-expand:dir(ltr):before{background:linear-gradient(90deg,hsla(0,0%,100%,0) 0,var(--cds-background,#fff) 0)}.c4p--truncated-text_button-expand.c4p--truncated-text_button-layered:dir(ltr):before{background:linear-gradient(90deg,hsla(0,0%,100%,0) 0,var(--cds-layer) 0)}.c4p--truncated-text_button-expand:dir(rtl):before{background:linear-gradient(270deg,hsla(0,0%,100%,0) 0,var(--cds-background,#fff) 0)}.c4p--truncated-text_button-expand.c4p--truncated-text_button-layered:dir(rtl):before{background:linear-gradient(270deg,hsla(0,0%,100%,0) 0,var(--cds-layer) 0)}.c4p--truncated-text_button-collapse{background-color:transparent}"]);

// node_modules/@carbon/ibm-products-web-components/es/components/truncated-text/truncated-text.js
var componentName = "truncated-text";
var blockClass = `${prefix}--${componentName}`;
var elementName = `${prefix}-${componentName}`;
var CDSTruncatedText = class CDSTruncatedText2 extends i2 {
  constructor() {
    super(...arguments);
    this.align = "top";
    this.autoalign = false;
    this.collapseLabel = "";
    this.expandLabel = "";
    this.id = "";
    this.lines = 0;
    this.type = "tooltip";
    this.value = "";
    this._isOverflowing = false;
    this._isExpanded = false;
    this._maxHeight = "none";
    this._lineHeight = 0;
    this._isLayered = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this._isLayered = !!this.closest(`${carbonPrefix}-layer`);
    this.type = this.type || "tooltip";
  }
  disconnectedCallback() {
    var _a;
    (_a = this._resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    super.disconnectedCallback();
  }
  firstUpdated() {
    requestAnimationFrame(() => {
      const computedStyle = getComputedStyle(this._textElement);
      this._lineHeight = parseFloat(computedStyle.lineHeight);
      this._setupResizeObserver();
    });
  }
  updated(changed) {
    if (changed.has("lines") || changed.has("value")) {
      this._updateOverflowStatus();
      this._updateMaxHeight();
    }
  }
  _updateMaxHeight() {
    if (this.type !== "expand") {
      return;
    }
    requestAnimationFrame(() => {
      if (!this._textElement) {
        return;
      }
      this._maxHeight = this.lines > 0 && !this._isExpanded ? `${this.lines * this._lineHeight}px` : `${this._textElement.scrollHeight}px`;
    });
  }
  _setupResizeObserver() {
    if (!this._textElement) {
      return;
    }
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
    }
    this._resizeObserver = new ResizeObserver(() => {
      this._updateOverflowStatus();
    });
    this._resizeObserver.observe(this);
  }
  _updateOverflowStatus() {
    if (!this._textElement || this.lines <= 0) {
      return;
    }
    this._updateMaxHeight();
    const { scrollHeight, clientHeight } = this._textElement;
    const buffer = this._lineHeight / 2;
    const isOverflowing = scrollHeight > clientHeight + buffer;
    if (isOverflowing !== this._isOverflowing) {
      this._isOverflowing = isOverflowing;
    }
  }
  _handleKeydown(evt) {
    const { key } = evt;
    if (key === "Enter" || key === " ") {
      this._toggleExpansion();
    }
  }
  _toggleExpansion() {
    var _a, _b, _c;
    this._isExpanded = !this._isExpanded;
    this._updateMaxHeight();
    (_a = this._textElement) === null || _a === void 0 ? void 0 : _a.classList.add(`${blockClass}_transition`);
    const onTransitionEnd = () => {
      var _a2, _b2, _c2;
      (_b2 = (_a2 = this._textElement) === null || _a2 === void 0 ? void 0 : _a2.querySelector("button")) === null || _b2 === void 0 ? void 0 : _b2.focus();
      (_c2 = this._textElement) === null || _c2 === void 0 ? void 0 : _c2.removeEventListener("transitionend", onTransitionEnd);
    };
    (_b = this._textElement) === null || _b === void 0 ? void 0 : _b.addEventListener("transitionend", onTransitionEnd);
    if (this._isExpanded === false) {
      (_c = this._textElement) === null || _c === void 0 ? void 0 : _c.classList.add(`${blockClass}_content--closing`);
      setTimeout(() => {
        var _a2;
        (_a2 = this._textElement) === null || _a2 === void 0 ? void 0 : _a2.classList.remove(`${blockClass}_content--closing`);
      }, 100);
    }
  }
  _renderToggleButton() {
    const className = e2({
      [`${blockClass}_button-collapse`]: this._isExpanded,
      [`${blockClass}_button-expand`]: !this._isExpanded,
      [`${blockClass}_button-layered`]: this._isLayered,
      [`${blockClass}_button-hide`]: !this._isOverflowing && !this._isExpanded
    });
    const label = this._isExpanded ? this.collapseLabel : this.expandLabel;
    return b`
      <span
        aria-controls=${this.id}
        aria-expanded=${this._isExpanded}
        class=${className}
        @click=${this._toggleExpansion}
        @keydown=${this._handleKeydown}
        role="button"
        tabIndex="0"
      >
        ${label}
      </span>
    `;
  }
  render() {
    const contentStyle = {
      ["--line-clamp"]: this._isExpanded ? "none" : this.lines,
      ["max-block-size"]: this.type === "expand" ? this._maxHeight : "none"
    };
    const valueBody = b`
      <div
        id=${this.id}
        class="${blockClass}_content"
        style=${o(contentStyle)}
      >
        ${this.value}
      </div>
    `;
    const tooltipVariant = b`
      <cds-tooltip
        align=${this.align}
        autoalign=${this.autoalign}
        enter-delay-ms="0"
        leave-delay-ms="0"
      >
        ${valueBody}
        <cds-tooltip-content>${this.value}</cds-tooltip-content>
      </cds-tooltip>
    `;
    const expandVariant = b`${valueBody} ${this._renderToggleButton()}`;
    return this.type === "tooltip" && this._isOverflowing ? tooltipVariant : expandVariant;
  }
};
CDSTruncatedText.styles = styles;
__decorate([
  n({ reflect: true, type: String })
], CDSTruncatedText.prototype, "align", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTruncatedText.prototype, "autoalign", void 0);
__decorate([
  n({ attribute: "collapse-label", type: String, reflect: true })
], CDSTruncatedText.prototype, "collapseLabel", void 0);
__decorate([
  n({ attribute: "expand-label", type: String, reflect: true })
], CDSTruncatedText.prototype, "expandLabel", void 0);
__decorate([
  n({ type: String, reflect: true })
], CDSTruncatedText.prototype, "id", void 0);
__decorate([
  n({ type: Number, reflect: true })
], CDSTruncatedText.prototype, "lines", void 0);
__decorate([
  n({ type: String, reflect: true })
], CDSTruncatedText.prototype, "type", void 0);
__decorate([
  n({ type: String, attribute: "value", reflect: true })
], CDSTruncatedText.prototype, "value", void 0);
__decorate([
  r()
], CDSTruncatedText.prototype, "_isOverflowing", void 0);
__decorate([
  r()
], CDSTruncatedText.prototype, "_isExpanded", void 0);
__decorate([
  r()
], CDSTruncatedText.prototype, "_maxHeight", void 0);
__decorate([
  e(`.${blockClass}_content`)
], CDSTruncatedText.prototype, "_textElement", void 0);
CDSTruncatedText = __decorate([
  carbonElement(elementName)
], CDSTruncatedText);
