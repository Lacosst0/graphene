import {
  popoverStyles
} from "./chunk-DFLJB7UB.js";
import {
  POPOVER_BACKGROUND_TOKEN
} from "./chunk-GPZZH3QI.js";
import {
  FloatingController
} from "./chunk-IGHLRMAE.js";
import {
  HostListener
} from "./chunk-5HWAKYGL.js";
import {
  HostListenerMixin
} from "./chunk-TGGEFEEZ.js";
import {
  e as e2
} from "./chunk-YOLTZNLE.js";
import {
  e,
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

// node_modules/@carbon/web-components/es/components/popover/popover.js
var CDSPopover_1;
var CDSPopover = CDSPopover_1 = class CDSPopover2 extends HostListenerMixin(i) {
  /**
   * Handles `slotchange` event.
   */
  _handleSlotChange({ target }) {
    var _a;
    if (this.tabTip) {
      const component = target.assignedNodes().filter((node) => node.nodeType === Node.ELEMENT_NODE && node.tagName === "BUTTON");
      (_a = component[0]) === null || _a === void 0 ? void 0 : _a.classList.add(`${prefix}--popover--tab-tip__button`);
    }
    this.requestUpdate?.();
  }
  _handleMouseDown(event) {
    const path = event.composedPath();
    const contentEl = this._contentSlotNode.assignedElements()[0];
    this._lastClickWasInsidePopoverContent = contentEl && path.includes(contentEl);
    if (this._lastClickWasInsidePopoverContent) {
      setTimeout(() => {
        this._lastClickWasInsidePopoverContent = false;
      }, 0);
    }
  }
  _handleFocusOut(event) {
    const relatedTarget = event.relatedTarget;
    const path = event.composedPath();
    const triggerEl = this._triggerSlotNode.assignedElements({
      flatten: true
    })[0];
    if (this._lastClickWasInsidePopoverContent) {
      this._lastClickWasInsidePopoverContent = false;
      return;
    }
    if (relatedTarget && triggerEl && (path.includes(triggerEl) || triggerEl === relatedTarget || triggerEl.contains(relatedTarget))) {
      return;
    }
    if (!this.contains(relatedTarget)) {
      const wasOpen = this.open;
      this.open = false;
      if (wasOpen) {
        this.dispatchEvent(new CustomEvent(this.constructor.eventOnClose, {
          bubbles: true,
          composed: true
        }));
      }
    }
  }
  _handleOutsideClick(event) {
    var _a, _b, _c;
    const path = event.composedPath();
    if (path.includes(this._triggerSlotNode.assignedElements()[0]))
      return;
    const popoverContent = (_b = (_a = this.querySelector(this.constructor.selectorPopoverContent)) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(this.constructor.selectorPopoverContentClass);
    if (path.includes(popoverContent))
      return;
    const target = event.target;
    const composedTarget = (_c = event.composedPath) === null || _c === void 0 ? void 0 : _c.call(event)[0];
    if (this.open && target && !this.contains(target) && !this.contains(composedTarget)) {
      this.open = false;
      this.dispatchEvent(new CustomEvent(this.constructor.eventOnClose, {
        bubbles: true,
        composed: true
      }));
    }
  }
  constructor() {
    super();
    this.popoverController = new FloatingController(this);
    this.align = "";
    this.autoalign = false;
    this.caret = true;
    this.dropShadow = true;
    this.border = false;
    this.highContrast = false;
    this.open = false;
    this.tabTip = false;
    this.backgroundToken = POPOVER_BACKGROUND_TOKEN.LAYER;
    this._lastClickWasInsidePopoverContent = false;
    this._handleOutsideClick = this._handleOutsideClick.bind(this);
  }
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("click", this._handleOutsideClick);
  }
  disconnectedCallback() {
    document.removeEventListener("click", this._handleOutsideClick);
  }
  /**
   * This function resolves the string passed in for `autoAlignBoundary` to either:
   * "clippingAncestors"
   * An element (found via #id)
   * An array of elements (found via #id1, #id2, #id3, separated by ",")
   * A rect, input format should be 'rect(x,y,width,height)'
   */
  _resolveAutoAlignBoundary() {
    var _a;
    const raw = ((_a = this.autoAlignBoundary) !== null && _a !== void 0 ? _a : "").trim();
    if (!raw)
      return "clippingAncestors";
    if (raw === "clippingAncestors")
      return "clippingAncestors";
    const rectMatch = /^rect\(\s*([-\d.]+)\s*,\s*([-\d.]+)\s*,\s*([-\d.]+)\s*,\s*([-\d.]+)\s*\)$/i.exec(raw);
    if (rectMatch) {
      const [, x, y, w, h] = rectMatch;
      const rect = { x: +x, y: +y, width: +w, height: +h };
      return rect;
    }
    const ids = raw.split(",").map((s) => s.trim()).filter((s) => s.length > 1 && s.startsWith("#")).map((s) => s.slice(1).trim()).filter(Boolean);
    if (ids.length > 0) {
      const elements = [];
      const inputted_ids = /* @__PURE__ */ new Set();
      for (const id of ids) {
        if (inputted_ids.has(id))
          continue;
        inputted_ids.add(id);
        const el = document.getElementById(id);
        if (el)
          elements.push(el);
      }
      return elements.length === 1 ? elements[0] : elements;
    }
    return "clippingAncestors";
  }
  updated(changedProperties) {
    var _a, _b, _c;
    const { selectorPopoverContent } = this.constructor;
    [
      "open",
      "align",
      "autoalign",
      "caret",
      "dropShadow",
      "border",
      "tabTip",
      "highContrast",
      "backgroundToken"
    ].forEach((name) => {
      if (changedProperties.has(name)) {
        const { [name]: value } = this;
        if (this.querySelector(selectorPopoverContent)) {
          this.querySelector(selectorPopoverContent)[name] = value;
        }
      }
    });
    if (this.autoalign && this.open) {
      const button = this._triggerSlotNode.assignedElements()[0];
      const content = this._contentSlotNode.assignedElements()[0];
      const tooltip = (_a = content === null || content === void 0 ? void 0 : content.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(CDSPopover_1.selectorPopoverContentClass);
      const arrowElement = (_b = content === null || content === void 0 ? void 0 : content.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(CDSPopover_1.selectorPopoverCaret);
      if (button && tooltip) {
        (_c = this.popoverController) === null || _c === void 0 ? void 0 : _c.setPlacement({
          trigger: button,
          target: tooltip,
          arrowElement: this.caret && arrowElement ? arrowElement : void 0,
          caret: this.caret,
          flipArguments: { fallbackAxisSideDirection: "start" },
          alignment: this.align,
          open: this.open,
          alignmentAxisOffset: this.alignmentAxisOffset,
          autoAlignBoundary: this._resolveAutoAlignBoundary(),
          isTabTip: this.tabTip
        });
      }
    }
  }
  render() {
    const { dropShadow, border, highContrast, open, tabTip, _handleSlotChange: handleSlotChange } = this;
    if (tabTip) {
      this.caret = !tabTip;
    }
    if (!this.autoalign) {
      this.align = this.align ? this.align : tabTip ? "bottom-start" : "bottom";
    }
    if (tabTip) {
      const tabTipAlignments = [
        "bottom-start",
        "bottom-end",
        "bottom-left",
        // remove in v12
        "bottom-right"
        // remove in v12
      ];
      if (!tabTipAlignments.includes(this.align)) {
        this.align = "bottom-start";
      }
    }
    const classes = e2({
      [`${prefix}--popover-container`]: true,
      [`${prefix}--popover--caret`]: this.caret,
      [`${prefix}--popover--drop-shadow`]: dropShadow,
      [`${prefix}--popover--border`]: border,
      [`${prefix}--popover--high-contrast`]: highContrast,
      [`${prefix}--popover--open`]: open,
      [`${prefix}--popover--${this.align}`]: true,
      [`${prefix}--popover--tab-tip`]: tabTip,
      [`${prefix}--popover--background-token__background`]: this.backgroundToken === POPOVER_BACKGROUND_TOKEN.BACKGROUND && !highContrast
    });
    return b`
      <span class="${classes}" part="popover-container">
        <slot @slotchange="${handleSlotChange}"></slot>
        <slot name="content"></slot>
      </span>
    `;
  }
  /**
   * A selector that will return popover content element within
   * CDSPopoverContent's shadowRoot.
   */
  static get selectorPopoverContentClass() {
    return `.${prefix}--popover-content`;
  }
  /**
   * A selector that will return popover caret element within
   * CDSPopoverContent's shadowRoot.
   */
  static get selectorPopoverCaret() {
    return `.${prefix}--popover-caret`;
  }
  /**
   * A selector that will return the CDSPopoverContent.
   */
  static get selectorPopoverContent() {
    return `${prefix}-popover-content`;
  }
  /**
   * The name of the custom event fired when the popover closes via focusout/outsideclick
   */
  static get eventOnClose() {
    return `${prefix}-popover-closed`;
  }
};
CDSPopover.styles = popoverStyles;
__decorate([
  e("slot")
], CDSPopover.prototype, "_triggerSlotNode", void 0);
__decorate([
  e('slot[name="content"]')
], CDSPopover.prototype, "_contentSlotNode", void 0);
__decorate([
  n({ reflect: true, type: String })
], CDSPopover.prototype, "align", void 0);
__decorate([
  n({ type: Number, reflect: true, attribute: "alignment-axis-offset" })
], CDSPopover.prototype, "alignmentAxisOffset", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSPopover.prototype, "autoalign", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSPopover.prototype, "caret", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSPopover.prototype, "dropShadow", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSPopover.prototype, "border", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSPopover.prototype, "highContrast", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSPopover.prototype, "open", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSPopover.prototype, "tabTip", void 0);
__decorate([
  n({ reflect: true, type: String })
], CDSPopover.prototype, "backgroundToken", void 0);
__decorate([
  n({ type: String, reflect: true, attribute: "autoalign-boundary" })
], CDSPopover.prototype, "autoAlignBoundary", void 0);
__decorate([
  HostListener("mousedown")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore
], CDSPopover.prototype, "_handleMouseDown", null);
__decorate([
  HostListener("focusout")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore
], CDSPopover.prototype, "_handleFocusOut", null);
CDSPopover = CDSPopover_1 = __decorate([
  carbonElement(`${prefix}-popover`)
], CDSPopover);
var CDSPopover$1 = CDSPopover;

// node_modules/@carbon/web-components/es/components/popover/popover-content.js
var CDSPopoverContent = class CDSPopoverContent2 extends i {
  constructor() {
    super(...arguments);
    this.align = "";
    this.autoalign = false;
    this.dropShadow = true;
    this.border = false;
    this.highContrast = false;
    this.open = false;
    this.tabTip = false;
    this.backgroundToken = POPOVER_BACKGROUND_TOKEN.LAYER;
    this.slot = "content";
  }
  render() {
    return b`
      <span class="${prefix}--popover">
        <span class="${prefix}--popover-content" part="content" tabindex="-1">
          <slot> </slot>
          ${this.autoalign ? b`<span
                class="${prefix}--popover-caret ${prefix}--popover--auto-align"></span>` : null}
        </span>
        ${!this.autoalign ? b`<span class="${prefix}--popover-caret"></span>` : null}
      </span>
    `;
  }
};
CDSPopoverContent.styles = popoverStyles;
__decorate([
  n({ reflect: true, type: String })
], CDSPopoverContent.prototype, "align", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSPopoverContent.prototype, "autoalign", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSPopoverContent.prototype, "caret", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSPopoverContent.prototype, "dropShadow", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSPopoverContent.prototype, "border", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSPopoverContent.prototype, "highContrast", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSPopoverContent.prototype, "open", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSPopoverContent.prototype, "tabTip", void 0);
__decorate([
  n({ reflect: true, type: String })
], CDSPopoverContent.prototype, "backgroundToken", void 0);
__decorate([
  n({ reflect: true })
], CDSPopoverContent.prototype, "slot", void 0);
CDSPopoverContent = __decorate([
  carbonElement(`${prefix}-popover-content`)
], CDSPopoverContent);
var CDSPopoverContent$1 = CDSPopoverContent;

export {
  CDSPopover$1,
  CDSPopoverContent$1
};
