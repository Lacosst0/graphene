import "./chunk-63DGZXAG.js";
import "./chunk-LNZKRNEJ.js";
import "./chunk-IQV2XA2Y.js";
import "./chunk-V44MMTX2.js";
import "./chunk-WCCOZML7.js";
import "./chunk-D2ITTM54.js";
import "./chunk-HPDZLYLI.js";
import "./chunk-F6EIPXKQ.js";
import "./chunk-LSZ2PVLU.js";
import "./chunk-X7WRA7XG.js";
import "./chunk-HFGTZQQE.js";
import "./chunk-SMM5AFXN.js";
import "./chunk-MU62I7LL.js";
import "./chunk-DFLJB7UB.js";
import "./chunk-GPZZH3QI.js";
import "./chunk-IGHLRMAE.js";
import "./chunk-JYACJRIF.js";
import {
  HostListener
} from "./chunk-5HWAKYGL.js";
import {
  HostListenerMixin
} from "./chunk-TGGEFEEZ.js";
import "./chunk-ML2VKJHQ.js";
import "./chunk-TRPNDHDH.js";
import "./chunk-LDCWSK5M.js";
import "./chunk-TEMKX2NW.js";
import "./chunk-DAFPBEYU.js";
import "./chunk-73FE5HOG.js";
import "./chunk-YOLTZNLE.js";
import "./chunk-M2VBID3H.js";
import {
  e,
  n,
  o,
  r
} from "./chunk-V6ENGPT2.js";
import {
  prefix,
  selectorTabbable
} from "./chunk-ITCMO2MJ.js";
import {
  carbonElement
} from "./chunk-D5HOJOMG.js";
import {
  __decorate,
  b,
  i2 as i
} from "./chunk-3GZFZEMV.js";
import "./chunk-G6EI4S4W.js";

// node_modules/@carbon/web-components/es/components/tearsheet/defs.js
var TEARSHEET_INFLUENCER_PLACEMENT;
(function(TEARSHEET_INFLUENCER_PLACEMENT2) {
  TEARSHEET_INFLUENCER_PLACEMENT2["RIGHT"] = "right";
  TEARSHEET_INFLUENCER_PLACEMENT2["LEFT"] = "left";
})(TEARSHEET_INFLUENCER_PLACEMENT || (TEARSHEET_INFLUENCER_PLACEMENT = {}));
var TEARSHEET_INFLUENCER_WIDTH;
(function(TEARSHEET_INFLUENCER_WIDTH2) {
  TEARSHEET_INFLUENCER_WIDTH2["NARROW"] = "narrow";
  TEARSHEET_INFLUENCER_WIDTH2["WIDE"] = "wide";
})(TEARSHEET_INFLUENCER_WIDTH || (TEARSHEET_INFLUENCER_WIDTH = {}));
var TEARSHEET_WIDTH;
(function(TEARSHEET_WIDTH2) {
  TEARSHEET_WIDTH2["NARROW"] = "narrow";
  TEARSHEET_WIDTH2["WIDE"] = "wide";
})(TEARSHEET_WIDTH || (TEARSHEET_WIDTH = {}));

// node_modules/@carbon/web-components/es/components/tearsheet/tearsheet.js
var CDSTearsheet_1;
var maxStackDepth = 3;
var PRECEDING = Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINS;
var FOLLOWING = Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY;
var blockClass = `${prefix}--tearsheet`;
var blockClassModalHeader = `${prefix}--modal-header`;
var blockClassActionSet = `${prefix}--action-set`;
function tryFocusElems(elems, reverse) {
  {
    for (let i2 = elems.length - 1; i2 >= 0; --i2) {
      const elem = elems[i2];
      elem.focus();
      if (elem.ownerDocument.activeElement === elem) {
        return true;
      }
    }
  }
  return false;
}
var CDSTearsheet = CDSTearsheet_1 = class CDSTearsheet2 extends HostListenerMixin(i) {
  constructor() {
    super(...arguments);
    this._launcher = null;
    this._actionsCount = 0;
    this._hasHeaderActions = false;
    this._hasLabel = false;
    this._hasSlug = false;
    this._hasTitle = false;
    this._hasDescription = false;
    this._hasInfluencerLeft = false;
    this._hasInfluencerRight = false;
    this._isOpen = false;
    this._hasHeaderNavigation = false;
    this._handleClick = (event) => {
      if (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- https://github.com/carbon-design-system/carbon/issues/20452
        event.composedPath().indexOf(this.shadowRoot) < 0 && !this.preventCloseOnClickOutside
      ) {
        this._handleUserInitiatedClose(event.target);
      }
    };
    this._handleBlur = async ({ target, relatedTarget }) => {
      var _a;
      if (!this._topOfStack()) {
        return;
      }
      const {
        // condensedActions,
        open,
        _startSentinelNode: startSentinelNode,
        _endSentinelNode: endSentinelNode
      } = this;
      const oldContains = target !== this && this.contains(target);
      const currentContains = relatedTarget !== this && (this.contains(relatedTarget) || ((_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.contains(relatedTarget)) && relatedTarget !== startSentinelNode && relatedTarget !== endSentinelNode);
      const { selectorTabbable: selectorTabbableForTearsheet } = this.constructor;
      if (open && relatedTarget && oldContains && !currentContains) {
        const comparisonResult = target.compareDocumentPosition(relatedTarget);
        if (relatedTarget === startSentinelNode || comparisonResult & PRECEDING) {
          await this.constructor._delay();
          if (!tryFocusElems(this.querySelectorAll(selectorTabbableForTearsheet)) && relatedTarget !== this) {
            this.focus();
          }
        } else if (relatedTarget === endSentinelNode || comparisonResult & FOLLOWING) {
          await this.constructor._delay();
          if (!tryFocusElems(this.querySelectorAll(selectorTabbableForTearsheet))) {
            this.focus();
          }
        }
      }
    };
    this._handleKeydown = ({ key, target }) => {
      if ((key === "Esc" || key === "Escape") && this._topOfStack()) {
        this._handleUserInitiatedClose(target);
      }
    };
    this.ariaLabel = "";
    this.closeIconDescription = "Close";
    this.hasCloseIcon = false;
    this.influencerPlacement = TEARSHEET_INFLUENCER_PLACEMENT.RIGHT;
    this.influencerWidth = TEARSHEET_INFLUENCER_WIDTH.NARROW;
    this.open = false;
    this.preventCloseOnClickOutside = false;
    this.width = TEARSHEET_WIDTH.NARROW;
    this._checkUpdateActionSizes = () => {
      if (this._actions) {
        for (let i2 = 0; i2 < this._actions.length; i2++) {
          this._actions[i2].setAttribute("size", this.width === "wide" ? "2xl" : "xl");
        }
      }
    };
    this._maxActions = 4;
    this._stackDepth = -1;
    this._stackPosition = -1;
    this._topOfStack = () => {
      return this._stackDepth === this._stackPosition;
    };
    this._notifyStack = () => {
      CDSTearsheet_1._stack.all.forEach((handler) => {
        handler(Math.min(CDSTearsheet_1._stack.open.length, maxStackDepth), CDSTearsheet_1._stack.open.indexOf(handler) + 1);
      });
    };
    this._handleStackChange = (newDepth, newPosition) => {
      this._stackDepth = newDepth;
      this._stackPosition = newPosition;
      if (this._stackDepth > 1 && this._stackPosition > 0) {
        this.setAttribute("stack-position", `${newPosition}`);
        this.setAttribute("stack-depth", `${this._stackDepth}`);
      } else {
        this.removeAttribute("stack-position");
        this.removeAttribute("stack-depth");
      }
    };
    this._updateStack = () => {
      if (this.open) {
        CDSTearsheet_1._stack.open.push(this._handleStackChange);
      } else {
        const indexOpen = CDSTearsheet_1._stack.open.indexOf(this._handleStackChange);
        if (indexOpen >= 0) {
          CDSTearsheet_1._stack.open.splice(indexOpen, 1);
        }
      }
      this._notifyStack();
    };
    this.actionsMultiple = ["", "single", "double", "triple"][this._actionsCount];
    this._checkSetOpen = () => {
      const { _tearsheet: tearsheet } = this;
      if (tearsheet && this._isOpen) {
        tearsheet.addEventListener("transitionend", () => {
          this._isOpen = false;
        });
      } else {
        window.requestAnimationFrame(() => {
          this._isOpen = this.open;
        });
      }
    };
  }
  _checkSetHasSlot(e2) {
    var _a, _b;
    const t = e2.target;
    const dataPostfix = t.getAttribute("data-postfix");
    const postfix = dataPostfix ? `-${dataPostfix}` : "";
    const hasName = `_has-${t.name}${postfix}`.replace(/-./g, (c) => c[1].toUpperCase());
    this[hasName] = ((_b = (_a = t === null || t === void 0 ? void 0 : t.assignedElements()) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0;
  }
  /**
   * Handles `click` event on the modal container.
   *
   * @param event The event.
   */
  _handleClickContainer(event) {
    if (event.target.matches(this.constructor.selectorCloseButton)) {
      this._handleUserInitiatedClose(event.target);
    }
  }
  /**
   * Handles user-initiated close request of this tearsheet.
   *
   * @param triggeredBy The element that triggered this close request.
   */
  _handleUserInitiatedClose(triggeredBy) {
    if (this.open) {
      const init = {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: {
          triggeredBy
        }
      };
      if (this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeClose, init))) {
        this.open = false;
        this.dispatchEvent(new CustomEvent(this.constructor.eventClose, init));
      }
    }
  }
  _handleSlugChange(e2) {
    const childItems = e2.target.assignedElements();
    this._hasSlug = childItems.length > 0;
    if (this._hasSlug) {
      childItems[0].setAttribute("size", "lg");
      this.setAttribute("slug", "");
    } else {
      this.removeAttribute("slug");
    }
  }
  _handleActionsChange(e2) {
    var _a;
    const target = e2.target;
    const actions = target === null || target === void 0 ? void 0 : target.assignedElements();
    const actionsCount = (_a = actions === null || actions === void 0 ? void 0 : actions.length) !== null && _a !== void 0 ? _a : 0;
    if (actionsCount > this._maxActions) {
      this._actionsCount = this._maxActions;
      console.error(`Too many tearsheet actions, max ${this._maxActions}.`);
    } else {
      this._actionsCount = actionsCount;
    }
    for (let i2 = 0; i2 < (actions === null || actions === void 0 ? void 0 : actions.length); i2++) {
      if (i2 + 1 > this._maxActions) {
        actions[i2].setAttribute("hidden", "true");
        actions[i2].setAttribute(`data-actions-limit-${this._maxActions}-exceeded`, `${actions.length}`);
      } else {
        actions[i2].classList.add(`${blockClassActionSet}__action-button`);
      }
    }
    this._checkUpdateActionSizes();
  }
  connectedCallback() {
    super.connectedCallback();
    CDSTearsheet_1._stack.all.push(this._handleStackChange);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    const indexAll = CDSTearsheet_1._stack.all.indexOf(this._handleStackChange);
    CDSTearsheet_1._stack.all.splice(indexAll, 1);
    const indexOpen = CDSTearsheet_1._stack.all.indexOf(this._handleStackChange);
    CDSTearsheet_1._stack.open.splice(indexOpen, 1);
  }
  render() {
    const { closeIconDescription, influencerPlacement, influencerWidth, open, width } = this;
    const actionsMultiple = ["", "single", "double", "triple"][this._actionsCount];
    const headerFieldsTemplate = b`<div
      class=${`${blockClass}__header-fields`}>
      <h2 class=${`${blockClassModalHeader}__label`} ?hidden=${!this._hasLabel}>
        <slot name="label" @slotchange=${this._checkSetHasSlot}></slot>
      </h2>
      <h3
        class=${`${blockClassModalHeader}__heading ${blockClass}__heading`}
        ?hidden=${!this._hasTitle}>
        <slot name="title" @slotchange=${this._checkSetHasSlot}></slot>
      </h3>
      <div
        class=${`${blockClass}__header-description`}
        ?hidden=${!this._hasDescription}>
        <slot name="description" @slotchange=${this._checkSetHasSlot}></slot>
      </div>
    </div>`;
    const headerActionsTemplate = b` <div
      class=${`${blockClass}__header-actions`}
      ?hidden=${!this._hasHeaderActions || this.width === "narrow"}>
      <slot name="header-actions" @slotchange=${this._checkSetHasSlot}></slot>
    </div>`;
    const headerTemplate = b` <cds-modal-header
      class=${`${blockClass}__header`}
      ?has-close-icon=${this.hasCloseIcon || (this === null || this === void 0 ? void 0 : this._actionsCount) === 0}
      ?has-navigation=${this._hasHeaderNavigation && this.width === "wide"}
      ?has-header-actions=${this._hasHeaderActions && this.width === "wide"}
      ?has-actions=${(this === null || this === void 0 ? void 0 : this._actionsCount) > 0}
      ?has-slug=${this === null || this === void 0 ? void 0 : this._hasSlug}
      width=${width}>
      ${this.width === TEARSHEET_WIDTH.WIDE ? b`<cds-layer level="1" class=${`${blockClass}__header-content`}
            >${headerFieldsTemplate}${headerActionsTemplate}</cds-layer
          >` : b`<div>${headerFieldsTemplate}${headerActionsTemplate}</div>`}

      <div
        class=${`${blockClass}__header-navigation`}
        ?hidden=${!this._hasHeaderNavigation || this.width === "narrow"}>
        <slot
          name="header-navigation"
          @slotchange=${this._checkSetHasSlot}></slot>
      </div>
      <slot name="slug" @slotchange=${this._handleSlugChange}></slot>
      ${this.hasCloseIcon || (this === null || this === void 0 ? void 0 : this._actionsCount) === 0 ? b`<cds-modal-close-button
            close-button-label=${closeIconDescription}
            @click=${this._handleUserInitiatedClose}></cds-modal-close-button>` : ""}
    </cds-modal-header>`;
    return b`
      <a
        id="start-sentinel"
        class="${prefix}--visually-hidden"
        href="javascript:void 0"
        role="navigation"></a>
      <div
        aria-label=${this.ariaLabel}
        class=${`${blockClass}__container ${prefix}--modal-container ${prefix}--modal-container--sm`}
        part="dialog"
        role="complementary"
        ?open=${this._isOpen}
        ?opening=${open && !this._isOpen}
        ?closing=${!open && this._isOpen}
        width=${width}
        stack-position=${this._stackPosition}
        stack-depth=${this._stackDepth}
        @click=${this._handleClickContainer}>
        <!-- Header -->
        ${headerTemplate}

        <!-- Body  -->
        <cds-modal-body class=${`${blockClass}__body`} width=${width}>
          <!-- Influencer when on left -->
          ${influencerPlacement !== TEARSHEET_INFLUENCER_PLACEMENT.RIGHT ? b`<div
                class=${`${blockClass}__influencer`}
                ?wide=${influencerWidth === "wide"}
                ?hidden=${!this._hasInfluencerLeft || this.width === TEARSHEET_WIDTH.NARROW}>
                <slot
                  name="influencer"
                  data-postfix="left"
                  @slotchange=${this._checkSetHasSlot}></slot>
              </div>` : ""}

          <div class=${`${blockClass}__right`}>
            <div class=${`${blockClass}__main`}>
              <div class=${`${blockClass}__content`}>
                <cds-layer level="0">
                  <slot></slot>
                </cds-layer>
              </div>

              <!-- Influencer when on right -->
              ${influencerPlacement === TEARSHEET_INFLUENCER_PLACEMENT.RIGHT ? b`<div
                    class=${`${blockClass}__influencer`}
                    ?wide=${influencerWidth}
                    ?hidden=${!this._hasInfluencerRight || this.width === TEARSHEET_WIDTH.NARROW}>
                    <slot
                      name="influencer"
                      data-postfix="right"
                      @slotchange=${this._checkSetHasSlot}></slot>
                  </div>` : ""}
            </div>
            <!-- Action buttons -->
            <cds-button-set-base
              class=${`${blockClass}__buttons ${blockClass}__button-container`}
              actions-multiple=${actionsMultiple}
              ?tearsheet-wide=${width === "wide"}
              ?hidden=${this._actionsCount === 0}>
              <slot
                name="actions"
                @slotchange=${this._handleActionsChange}></slot>
            </cds-button-set-base>
          </div>
        </cds-modal-body>
      </div>
      <a
        id="end-sentinel"
        class="${prefix}--visually-hidden"
        href="javascript:void 0"
        role="navigation"></a>
    `;
  }
  async updated(changedProperties) {
    if (changedProperties.has("width")) {
      this._checkUpdateActionSizes();
    }
    if (changedProperties.has("width") || changedProperties.has("_hasHeaderNavigation") || changedProperties.has("_hasInfluencerLeft") || changedProperties.has("_hasInfluencerRight") || changedProperties.has("_hasHeaderActions")) {
      if (this.width === "narrow") {
        if (this._hasHeaderNavigation) {
          console.error(`Header navigation is not permitted in narrow Tearsheet.`);
        }
        if (this._hasInfluencerLeft || this._hasInfluencerRight) {
          console.error(`Influencer is not permitted in narrow Tearsheet.`);
        }
        if (this._hasHeaderActions) {
          console.error(`Header actions are not permitted in narrow Tearsheet.`);
        }
      }
    }
    if (changedProperties.has("open")) {
      this._updateStack();
      this._checkSetOpen();
      if (this.open) {
        this._launcher = this.ownerDocument.activeElement;
        const focusNode = this.selectorInitialFocus && this.querySelector(this.selectorInitialFocus);
        await this.constructor._delay();
        if (focusNode) {
          focusNode.focus();
        } else if (!tryFocusElems(this.querySelectorAll(this.constructor.selectorTabbable))) {
          this.focus();
        }
      } else if (this._launcher && typeof this._launcher.focus === "function") {
        this._launcher.focus();
        this._launcher = null;
      }
    }
  }
  /**
   * @param ms The number of milliseconds.
   * @returns A promise that is resolves after the given milliseconds.
   */
  static _delay(ms = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  /**
   * A selector selecting buttons that should close this modal.
   */
  static get selectorCloseButton() {
    return `[data-modal-close],${prefix}-modal-close-button`;
  }
  /**
   * A selector selecting tabbable nodes.
   */
  static get selectorTabbable() {
    return selectorTabbable;
  }
  /**
   * The name of the custom event fired before this tearsheet is being closed upon a user gesture.
   * Cancellation of this event stops the user-initiated action of closing this tearsheet.
   */
  static get eventBeforeClose() {
    return `${prefix}-tearsheet-beingclosed`;
  }
  /**
   * The name of the custom event fired after this tearsheet is closed upon a user gesture.
   */
  static get eventClose() {
    return `${prefix}-tearsheet-closed`;
  }
  /**
   * The name of the custom event fired on clicking the navigate back button
   */
  static get eventNavigateBack() {
    return `${prefix}-tearsheet-header-navigate-back`;
  }
};
CDSTearsheet._stack = {
  open: [],
  all: []
};
__decorate([
  e("#start-sentinel")
], CDSTearsheet.prototype, "_startSentinelNode", void 0);
__decorate([
  e("#end-sentinel")
], CDSTearsheet.prototype, "_endSentinelNode", void 0);
__decorate([
  e(`.${blockClass}__container`)
], CDSTearsheet.prototype, "_tearsheet", void 0);
__decorate([
  o({ slot: "actions", selector: `${prefix}-button` })
], CDSTearsheet.prototype, "_actions", void 0);
__decorate([
  r()
], CDSTearsheet.prototype, "_actionsCount", void 0);
__decorate([
  r()
], CDSTearsheet.prototype, "_hasHeaderActions", void 0);
__decorate([
  r()
], CDSTearsheet.prototype, "_hasLabel", void 0);
__decorate([
  r()
], CDSTearsheet.prototype, "_hasSlug", void 0);
__decorate([
  r()
], CDSTearsheet.prototype, "_hasTitle", void 0);
__decorate([
  r()
], CDSTearsheet.prototype, "_hasDescription", void 0);
__decorate([
  r()
], CDSTearsheet.prototype, "_hasInfluencerLeft", void 0);
__decorate([
  r()
], CDSTearsheet.prototype, "_hasInfluencerRight", void 0);
__decorate([
  r()
], CDSTearsheet.prototype, "_isOpen", void 0);
__decorate([
  r()
], CDSTearsheet.prototype, "_hasHeaderNavigation", void 0);
__decorate([
  HostListener("click")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSTearsheet.prototype, "_handleClick", void 0);
__decorate([
  HostListener("shadowRoot:focusout")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSTearsheet.prototype, "_handleBlur", void 0);
__decorate([
  HostListener("document:keydown")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSTearsheet.prototype, "_handleKeydown", void 0);
__decorate([
  n({ reflect: true, attribute: "aria-label" })
], CDSTearsheet.prototype, "ariaLabel", void 0);
__decorate([
  n({ reflect: true, attribute: "close-icon-description" })
], CDSTearsheet.prototype, "closeIconDescription", void 0);
__decorate([
  n({ reflect: true, type: Boolean, attribute: "has-close-icon" })
], CDSTearsheet.prototype, "hasCloseIcon", void 0);
__decorate([
  n({ reflect: true, attribute: "influencer-placement" })
], CDSTearsheet.prototype, "influencerPlacement", void 0);
__decorate([
  n({ reflect: true, attribute: "influencer-width" })
], CDSTearsheet.prototype, "influencerWidth", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTearsheet.prototype, "open", void 0);
__decorate([
  n({ type: Boolean, attribute: "prevent-close-on-click-outside" })
], CDSTearsheet.prototype, "preventCloseOnClickOutside", void 0);
__decorate([
  n({
    reflect: true,
    attribute: "selector-initial-focus",
    type: String
  })
], CDSTearsheet.prototype, "selectorInitialFocus", void 0);
__decorate([
  n({ reflect: true, attribute: "width" })
], CDSTearsheet.prototype, "width", void 0);
__decorate([
  r()
], CDSTearsheet.prototype, "_stackDepth", void 0);
__decorate([
  r()
], CDSTearsheet.prototype, "_stackPosition", void 0);
CDSTearsheet = CDSTearsheet_1 = __decorate([
  carbonElement(`${prefix}-tearsheet`)
], CDSTearsheet);
