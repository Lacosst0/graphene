import {
  e,
  r
} from "./chunk-ZOABJKJF.js";
import {
  prefix
} from "./chunk-6BPMK2Y2.js";
import "./chunk-RT5DNU7V.js";
import "./chunk-KQC2PJHA.js";
import "./chunk-HFGTZQQE.js";
import "./chunk-SMM5AFXN.js";
import "./chunk-MU62I7LL.js";
import {
  _16
} from "./chunk-YGK4BVA2.js";
import "./chunk-DFLJB7UB.js";
import {
  POPOVER_ALIGNMENT
} from "./chunk-GPZZH3QI.js";
import "./chunk-IGHLRMAE.js";
import "./chunk-JYACJRIF.js";
import "./chunk-5HWAKYGL.js";
import {
  HostListenerMixin
} from "./chunk-TGGEFEEZ.js";
import "./chunk-ML2VKJHQ.js";
import {
  iconLoader
} from "./chunk-TRPNDHDH.js";
import "./chunk-LDCWSK5M.js";
import "./chunk-TEMKX2NW.js";
import "./chunk-DAFPBEYU.js";
import "./chunk-73FE5HOG.js";
import "./chunk-YOLTZNLE.js";
import "./chunk-M2VBID3H.js";
import {
  n
} from "./chunk-V6ENGPT2.js";
import "./chunk-ITCMO2MJ.js";
import {
  carbonElement
} from "./chunk-D5HOJOMG.js";
import {
  A,
  __decorate,
  b,
  i,
  i2
} from "./chunk-3GZFZEMV.js";
import "./chunk-G6EI4S4W.js";

// node_modules/@carbon/ibm-products-web-components/es/components/coachmark/coachmark.scss.js
var styles = i(['.c4p--coachmark-beacon{position:relative}.c4p--coachmark-beacon-default .c4p--coachmark-beacon__target:before{display:none}.c4p--coachmark-beacon-default .c4p--coachmark-beacon__target:after{background-color:#4589ff;block-size:.75rem;border-radius:50%;content:"";inline-size:.75rem;inset-block-start:.625rem;inset-inline-start:.625rem;position:absolute}.c4p--coachmark-beacon-default .c4p--coachmark-beacon__target:focus{outline:transparent}.c4p--coachmark-beacon-default .c4p--coachmark-beacon__target:focus:before{block-size:18px;border-radius:100%;content:"";display:block;inline-size:18px;inset-block-start:7px;inset-inline-start:7px;outline:.125rem var(--cds-focus,#0f62fe) solid;position:absolute}.c4p--coachmark-beacon .c4p--coachmark-beacon__target{background-color:transparent;block-size:2rem;border:none;border-radius:50%;cursor:pointer;display:flex;inline-size:2rem;padding:0}.c4p--coachmark-beacon .c4p--coachmark-beacon__target[aria-expanded=true] circle{animation:none}.c4p--coachmark-beacon__center{block-size:5rem;inline-size:5rem;inset-block-start:-1.375rem;inset-inline-start:-1.375rem;pointer-events:none;position:absolute;z-index:6900}.c4p--coachmark-beacon__center circle{animation:ripple 2s infinite;fill:var(--cds-support-info,#0043ce);fill-opacity:0;-webkit-mask-image:none;mask-image:none;stroke:var(--cds-support-info,#0043ce);stroke-opacity:0;stroke-width:1px;transition-timing-function:motion exit,productive}@media (prefers-reduced-motion){.c4p--coachmark-beacon__center circle{animation:none}}@keyframes ripple{0%{fill-opacity:0;r:1px;stroke-opacity:0;transition-timing-function:cubic-bezier(0,0,.38,.9)}31%{fill-opacity:.2;stroke-opacity:1}62%{fill-opacity:0;r:32px;stroke-opacity:0}to{fill-opacity:0;r:32px;stroke-opacity:0}}@keyframes ring-ripple{0%{fill-opacity:0;r:12px;stroke-opacity:0;transition-timing-function:cubic-bezier(0,0,.38,.9)}31%{fill-opacity:.2;stroke-opacity:1}62%{fill-opacity:0;r:32px;stroke-opacity:0}to{fill-opacity:0;r:32px;stroke-opacity:0}}:host{display:inline-block}.c4p--coachmark--popover{position:fixed}.c4p--coachmark--popover cds-popover-content.is-dragging::part(content){border-radius:0;box-shadow:0 0 0 .125rem var(--cds-icon-inverse,#fff),0 0 0 .25rem var(--cds-background-inverse,#393939)}']);

// node_modules/@carbon/ibm-products-web-components/es/utilities/makeDraggable/makeDraggable.js
var makeDraggable = ({ el, dragHandle, focusableDragHandle, dragStep, shiftDragStep }) => {
  if (dragHandle) {
    dragHandle.style.cursor = "move";
    el.style.cursor = "default";
  } else {
    el.style.cursor = "move";
  }
  let isDragging = false;
  let currentX = 0;
  let currentY = 0;
  let initialMouseX = 0;
  let initialMouseY = 0;
  const dispatch = (type, detail) => {
    const eventInit = {
      detail,
      bubbles: true
    };
    el.dispatchEvent(new CustomEvent(type, eventInit));
  };
  const onKeyDown = (e2) => {
    if (e2.key === "Enter") {
      isDragging = !isDragging;
    }
    if (isDragging) {
      dispatch("dragstart", { keyboard: true });
    } else {
      dispatch("dragend", { keyboard: true });
    }
    if (!isDragging) {
      return;
    }
    const distance = e2.shiftKey ? shiftDragStep !== null && shiftDragStep !== void 0 ? shiftDragStep : 32 : dragStep !== null && dragStep !== void 0 ? dragStep : 8;
    switch (e2.key) {
      case "Enter":
      case " ":
        e2.preventDefault();
        break;
      case "ArrowLeft":
        el.style.left = `${el.offsetLeft - distance}px`;
        break;
      case "ArrowRight":
        el.style.left = `${el.offsetLeft + distance}px`;
        break;
      case "ArrowUp":
        el.style.top = `${el.offsetTop - distance}px`;
        break;
      case "ArrowDown":
        el.style.top = `${el.offsetTop + distance}px`;
        break;
    }
  };
  const onMouseDown = (e2) => {
    const target = e2.target;
    if (!(target instanceof Node)) {
      return;
    }
    const isTargetInHandle = dragHandle ? dragHandle.contains(target) : el.contains(target);
    if (!isTargetInHandle) {
      return;
    }
    const style = window.getComputedStyle(el);
    const matrix = new DOMMatrix(style.transform);
    currentX = matrix.m41;
    currentY = matrix.m42;
    initialMouseX = e2.clientX;
    initialMouseY = e2.clientY;
    isDragging = true;
    dispatch("dragstart", { mouse: true });
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp, { once: true });
  };
  const onMouseMove = (e2) => {
    if (!isDragging) {
      return;
    }
    const dx = e2.clientX - initialMouseX;
    const dy = e2.clientY - initialMouseY;
    el.style.transform = `translate(${currentX + dx}px, ${currentY + dy}px)`;
  };
  const onMouseUp = () => {
    if (!isDragging) {
      return;
    }
    isDragging = false;
    dispatch("dragend", { mouse: true });
    document.removeEventListener("mousemove", onMouseMove);
  };
  if (dragHandle) {
    dragHandle.addEventListener("mousedown", onMouseDown);
  } else {
    el.addEventListener("mousedown", onMouseDown);
  }
  focusableDragHandle === null || focusableDragHandle === void 0 ? void 0 : focusableDragHandle.addEventListener("keydown", onKeyDown);
  const draggableCleanup = () => {
    if (dragHandle) {
      dragHandle.removeEventListener("mousedown", onMouseDown);
    } else {
      el.removeEventListener("mousedown", onMouseDown);
    }
    focusableDragHandle === null || focusableDragHandle === void 0 ? void 0 : focusableDragHandle.removeEventListener("keydown", onKeyDown);
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };
  return {
    cleanup: draggableCleanup
  };
};

// node_modules/@carbon/ibm-products-web-components/es/components/coachmark/coachmark-context.js
var coachmarkDetailsSignal = r({
  open: false,
  floating: false
});
var resetCoachmarkDetailsSignal = () => {
  coachmarkDetailsSignal.set({
    open: false,
    floating: false
  });
};
var updateCoachmarkDetailsSignal = ({ name, detail }) => {
  const currentValue = coachmarkDetailsSignal.get();
  if (currentValue[name] !== detail) {
    const newValue = Object.assign(Object.assign({}, currentValue), { [name]: detail });
    coachmarkDetailsSignal.set(newValue);
  }
};

// node_modules/@carbon/ibm-products-web-components/es/components/coachmark/coachmark.js
var blockClass = `${prefix}--coachmark`;
var CDSCoachmark = class CDSCoachmark2 extends e(HostListenerMixin(i2)) {
  constructor() {
    super(...arguments);
    this.open = false;
    this.align = POPOVER_ALIGNMENT.TOP;
    this.floating = false;
    this.highContrast = false;
    this.dropShadow = false;
    this.dragCleanup = null;
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.dragCleanup) {
      this.dragCleanup();
    }
    resetCoachmarkDetailsSignal();
  }
  setupDraggable() {
    var _a;
    const popover = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`.${blockClass}--popover`);
    const popoverContent = popover.querySelector("cds-popover-content");
    const wrapper = popoverContent.querySelector(`.${blockClass}--wrapper`);
    const slot = wrapper.querySelector("slot");
    const assignedElements = slot === null || slot === void 0 ? void 0 : slot.assignedElements({ flatten: true });
    const header = assignedElements === null || assignedElements === void 0 ? void 0 : assignedElements.find((el) => el.tagName.toLowerCase() === `${prefix}-coachmark-header`);
    requestAnimationFrame(() => {
      var _a2;
      const dragHandle = (_a2 = header.shadowRoot) === null || _a2 === void 0 ? void 0 : _a2.querySelector(".drag-handle");
      const draggable = makeDraggable({
        el: popoverContent,
        dragHandle: header,
        focusableDragHandle: dragHandle
      });
      const onDragStart = () => {
        popoverContent.classList.add("is-dragging");
        popoverContent.setAttribute("aria-label", "Picked up the draggable popoverContent");
      };
      const onDragEnd = () => {
        popoverContent.classList.remove("is-dragging");
        popoverContent.setAttribute("aria-label", "Draggable popoverContent was dropped");
      };
      popoverContent.addEventListener("dragstart", onDragStart);
      popoverContent.addEventListener("dragend", onDragEnd);
      this.dragCleanup = () => {
        var _a3;
        popoverContent.removeEventListener("dragstart", onDragStart);
        popoverContent.removeEventListener("dragend", onDragEnd);
        (_a3 = draggable.cleanup) === null || _a3 === void 0 ? void 0 : _a3.call(draggable);
      };
    });
  }
  firstUpdated() {
    if (this.floating) {
      this.classList.add(`${blockClass}--floating`);
      this.setupDraggable();
      updateCoachmarkDetailsSignal({
        name: "floating",
        detail: this.floating
      });
    }
  }
  updated(changedProps) {
    var _a;
    if (changedProps.has("position")) {
      const { x = 0, y = 0 } = (_a = this.position) !== null && _a !== void 0 ? _a : {};
      if (x !== 0 || y !== 0) {
        this.style.transform = `translate(${x}px, ${y}px)`;
      }
    }
    if (changedProps.has("open")) {
      const init = {
        bubbles: true,
        composed: true,
        detail: { open: this.open }
      };
      if (this.open) {
        this.dispatchEvent(new CustomEvent(this.constructor.eventOpen, init));
      }
    }
  }
  render() {
    return b`
      <cds-popover
        class="${blockClass}--popover"
        ?open=${this.open}
        .caret=${this.floating === true ? false : true}
        ?highContrast=${this.highContrast}
        align=${this.align}
        ?dropShadow=${this.dropShadow}
      >
        <slot name="trigger"></slot>
        <cds-popover-content>
          <div class="${blockClass}--wrapper">
            <slot></slot>
          </div>
        </cds-popover-content>
      </cds-popover>
    `;
  }
  /**
   * The name of the custom event fired when this coachmark is opened.
   */
  static get eventOpen() {
    return `${prefix}-coachmark-opened`;
  }
};
CDSCoachmark.styles = styles;
__decorate([
  n({ type: Boolean, reflect: true })
], CDSCoachmark.prototype, "open", void 0);
__decorate([
  n({ reflect: true, type: String })
], CDSCoachmark.prototype, "align", void 0);
__decorate([
  n({ type: Object })
], CDSCoachmark.prototype, "position", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSCoachmark.prototype, "floating", void 0);
__decorate([
  n({ reflect: true })
], CDSCoachmark.prototype, "highContrast", void 0);
__decorate([
  n({ reflect: true })
], CDSCoachmark.prototype, "dropShadow", void 0);
CDSCoachmark = __decorate([
  carbonElement(`${prefix}-coachmark`)
], CDSCoachmark);

// node_modules/@carbon/ibm-products-web-components/es/components/coachmark/coachmark-header.scss.js
var styles2 = i([":host(c4p-coachmark-header){display:flex;justify-content:flex-end}:host(c4p-coachmark-header) .c4p--coachmark-header-drag-handle{margin-inline-end:auto}:host(c4p-coachmark-header) .c4p--coachmark-header-drag-icon{fill:var(--cds-background,#fff)}:host(c4p-coachmark-header) .c4p--coachmark-header-close-icon{fill:var(--cds-background,#fff)}"]);

// node_modules/@carbon/icons/es/draggable/16.js
var _162 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M10 6H14V10H10z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M18 6H22V10H18z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M10 14H14V18H10z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M18 14H22V18H18z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M10 22H14V26H10z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M18 22H22V26H18z"
    }
  }],
  "name": "draggable",
  "size": 16
};

// node_modules/@carbon/ibm-products-web-components/es/components/coachmark/coachmark-header.js
var CDSCoachmarkHeader = class CDSCoachmarkHeader2 extends e(HostListenerMixin(i2)) {
  constructor() {
    super(...arguments);
    this.closeIconDescription = "";
    this.dragIconDescription = "";
    this._handleClick = () => {
      const coachmark = this.closest(`${prefix}-coachmark`);
      if (coachmark) {
        coachmark.open = false;
      }
      updateCoachmarkDetailsSignal({
        name: "open",
        detail: false
      });
    };
  }
  render() {
    const { floating } = coachmarkDetailsSignal.get();
    return b`
      ${floating ? b`
            <cds-button
              kind="ghost"
              size="sm"
              class="${prefix}--coachmark-header-drag-handle"
              iconDescription="${this.dragIconDescription}"
              hasIconOnly
            >
              ${iconLoader(_162, {
      slot: "icon",
      class: `${prefix}--coachmark-header-drag-icon`
    })}
            </cds-button>
          ` : A}
      <slot name="header"></slot>
      <cds-button
        kind="ghost"
        size="sm"
        iconDescription="${this.closeIconDescription}"
        hasIconOnly
        @click=${this._handleClick}
      >
        ${iconLoader(_16, {
      slot: "icon",
      class: `${prefix}--coachmark-header-close-icon`
    })}
      </cds-button>
    `;
  }
};
CDSCoachmarkHeader.styles = styles2;
__decorate([
  n({ reflect: true })
], CDSCoachmarkHeader.prototype, "closeIconDescription", void 0);
__decorate([
  n({ reflect: true })
], CDSCoachmarkHeader.prototype, "dragIconDescription", void 0);
CDSCoachmarkHeader = __decorate([
  carbonElement(`${prefix}-coachmark-header`)
], CDSCoachmarkHeader);

// node_modules/@carbon/ibm-products-web-components/es/components/coachmark/coachmark-body.scss.js
var styles3 = i([":host(c4p-coachmark-body){display:block;padding:0 1rem 1rem}"]);

// node_modules/@carbon/ibm-products-web-components/es/components/coachmark/coachmark-body.js
var CDSCoachmarkBody = class CDSCoachmarkBody2 extends e(HostListenerMixin(i2)) {
  render() {
    return b` <slot></slot> `;
  }
};
CDSCoachmarkBody.styles = styles3;
CDSCoachmarkBody = __decorate([
  carbonElement(`${prefix}-coachmark-body`)
], CDSCoachmarkBody);
/*! Bundled license information:

@carbon/ibm-products-web-components/es/components/coachmark/coachmark-context.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon/ibm-products-web-components/es/components/coachmark/coachmark.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon/ibm-products-web-components/es/components/coachmark/coachmark-body.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
