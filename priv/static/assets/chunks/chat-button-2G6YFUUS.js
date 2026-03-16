import {
  buttonStyles
} from "./chunk-JYACJRIF.js";
import "./chunk-5HWAKYGL.js";
import "./chunk-TGGEFEEZ.js";
import "./chunk-ML2VKJHQ.js";
import "./chunk-DAFPBEYU.js";
import "./chunk-73FE5HOG.js";
import {
  e
} from "./chunk-YOLTZNLE.js";
import "./chunk-M2VBID3H.js";
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
  i,
  i2
} from "./chunk-3GZFZEMV.js";
import "./chunk-G6EI4S4W.js";

// node_modules/@carbon/web-components/es/components/chat-button/defs.js
var CHAT_BUTTON_SIZE;
(function(CHAT_BUTTON_SIZE2) {
  CHAT_BUTTON_SIZE2["SMALL"] = "sm";
  CHAT_BUTTON_SIZE2["MEDIUM"] = "md";
  CHAT_BUTTON_SIZE2["LARGE"] = "lg";
})(CHAT_BUTTON_SIZE || (CHAT_BUTTON_SIZE = {}));
var CHAT_BUTTON_KIND;
(function(CHAT_BUTTON_KIND2) {
  CHAT_BUTTON_KIND2["PRIMARY"] = "primary";
  CHAT_BUTTON_KIND2["SECONDARY"] = "secondary";
  CHAT_BUTTON_KIND2["TERTIARY"] = "tertiary";
  CHAT_BUTTON_KIND2["GHOST"] = "ghost";
  CHAT_BUTTON_KIND2["DANGER"] = "danger";
})(CHAT_BUTTON_KIND || (CHAT_BUTTON_KIND = {}));

// node_modules/@carbon/web-components/es/components/chat-button/chat-button.scss.js
var styles = i([".cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}:host(cds-chat-button-skeleton){--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}"]);

// node_modules/@carbon/web-components/es/components/chat-button/chat-button.js
var CDSChatButton = class CDSChatButton2 extends i2 {
  constructor() {
    super(...arguments);
    this._hasIcon = false;
    this.disabled = false;
    this.kind = CHAT_BUTTON_KIND.PRIMARY;
    this.size = CHAT_BUTTON_SIZE.LARGE;
    this.isQuickAction = false;
    this.isSelected = false;
  }
  /**
   * Handles `slotchange` event.
   */
  _handleSlotChange({ target }) {
    this._hasIcon = target.assignedNodes().some(
      (node) => node.nodeType !== Node.TEXT_NODE || node.textContent.trim()
      // eslint-disable-line @typescript-eslint/no-non-null-assertion -- https://github.com/carbon-design-system/carbon/issues/20452
    );
    this.requestUpdate?.();
  }
  connectedCallback() {
    super.connectedCallback();
    S(this.renderRoot, [buttonStyles, styles]);
  }
  render() {
    const allowedSizes = [
      CHAT_BUTTON_SIZE.SMALL,
      CHAT_BUTTON_SIZE.MEDIUM,
      CHAT_BUTTON_SIZE.LARGE
    ];
    if (this.isQuickAction) {
      this.kind = CHAT_BUTTON_KIND.GHOST;
      this.size = CHAT_BUTTON_SIZE.SMALL;
    } else {
      this.size = allowedSizes.includes(this.size) ? this.size : CHAT_BUTTON_SIZE.LARGE;
    }
    let classes = `${prefix}--chat-btn`;
    classes += this._hasIcon ? ` ${prefix}--chat-btn--with-icon` : "";
    classes += this.isQuickAction ? ` ${prefix}--chat-btn--quick-action` : "";
    classes += this.isSelected ? ` ${prefix}--chat-btn--quick-action--selected` : "";
    return b`
      <cds-button
        button-class-name="${classes}"
        size="${this.size}"
        kind="${this.kind}"
        ?disabled="${this.disabled}">
        <slot></slot
        ><slot
          name="icon"
          slot="icon"
          @slotchange="${this._handleSlotChange}"></slot>
      </cds-button>
    `;
  }
};
__decorate([
  n({ type: Boolean, reflect: true })
], CDSChatButton.prototype, "disabled", void 0);
__decorate([
  n({ reflect: true })
], CDSChatButton.prototype, "kind", void 0);
__decorate([
  n({ reflect: true })
], CDSChatButton.prototype, "size", void 0);
__decorate([
  n({ attribute: "is-quick-action", type: Boolean })
], CDSChatButton.prototype, "isQuickAction", void 0);
__decorate([
  n({ attribute: "is-selected", type: Boolean })
], CDSChatButton.prototype, "isSelected", void 0);
CDSChatButton = __decorate([
  carbonElement(`${prefix}-chat-button`)
], CDSChatButton);

// node_modules/@carbon/web-components/es/components/chat-button/chat-button-skeleton.js
var CDSChatButtonSkeleton = class CDSChatButtonSkeleton2 extends i2 {
  constructor() {
    super(...arguments);
    this.size = CHAT_BUTTON_SIZE.LARGE;
  }
  connectedCallback() {
    super.connectedCallback();
    S(this.renderRoot, [buttonStyles, styles]);
  }
  render() {
    const skeletonClasses = e({
      [`${prefix}--skeleton`]: true,
      [`${prefix}--btn`]: true,
      [`${prefix}--chat-btn`]: true,
      [`${prefix}--layout--size-${this.size}`]: this.size
    });
    return b` <div class="${skeletonClasses}"></div> `;
  }
};
__decorate([
  n({ reflect: true })
], CDSChatButtonSkeleton.prototype, "size", void 0);
CDSChatButtonSkeleton = __decorate([
  carbonElement(`${prefix}-chat-button-skeleton`)
], CDSChatButtonSkeleton);
