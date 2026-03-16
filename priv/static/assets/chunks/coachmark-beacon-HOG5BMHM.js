import {
  prefix
} from "./chunk-6BPMK2Y2.js";
import "./chunk-JYACJRIF.js";
import "./chunk-5HWAKYGL.js";
import {
  HostListenerMixin
} from "./chunk-TGGEFEEZ.js";
import "./chunk-ML2VKJHQ.js";
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
  __decorate,
  b,
  i,
  i2
} from "./chunk-3GZFZEMV.js";
import "./chunk-G6EI4S4W.js";

// node_modules/@carbon/ibm-products-web-components/es/components/coachmark/coachmark-beacon/coachmark-beacon.scss.js
var styles = i(['.c4p--coachmark-beacon{position:relative}.c4p--coachmark-beacon-default .c4p--coachmark-beacon__target:before{display:none}.c4p--coachmark-beacon-default .c4p--coachmark-beacon__target:after{background-color:#4589ff;block-size:.75rem;border-radius:50%;content:"";inline-size:.75rem;inset-block-start:.625rem;inset-inline-start:.625rem;position:absolute}.c4p--coachmark-beacon-default .c4p--coachmark-beacon__target:focus{outline:transparent}.c4p--coachmark-beacon-default .c4p--coachmark-beacon__target:focus:before{block-size:18px;border-radius:100%;content:"";display:block;inline-size:18px;inset-block-start:7px;inset-inline-start:7px;outline:.125rem var(--cds-focus,#0f62fe) solid;position:absolute}.c4p--coachmark-beacon .c4p--coachmark-beacon__target{background-color:transparent;block-size:2rem;border:none;border-radius:50%;cursor:pointer;display:flex;inline-size:2rem;padding:0}.c4p--coachmark-beacon .c4p--coachmark-beacon__target[aria-expanded=true] circle{animation:none}.c4p--coachmark-beacon__center{block-size:5rem;inline-size:5rem;inset-block-start:-1.375rem;inset-inline-start:-1.375rem;pointer-events:none;position:absolute;z-index:6900}.c4p--coachmark-beacon__center circle{animation:ripple 2s infinite;fill:var(--cds-support-info,#0043ce);fill-opacity:0;-webkit-mask-image:none;mask-image:none;stroke:var(--cds-support-info,#0043ce);stroke-opacity:0;stroke-width:1px;transition-timing-function:motion exit,productive}@media (prefers-reduced-motion){.c4p--coachmark-beacon__center circle{animation:none}}@keyframes ripple{0%{fill-opacity:0;r:1px;stroke-opacity:0;transition-timing-function:cubic-bezier(0,0,.38,.9)}31%{fill-opacity:.2;stroke-opacity:1}62%{fill-opacity:0;r:32px;stroke-opacity:0}to{fill-opacity:0;r:32px;stroke-opacity:0}}@keyframes ring-ripple{0%{fill-opacity:0;r:12px;stroke-opacity:0;transition-timing-function:cubic-bezier(0,0,.38,.9)}31%{fill-opacity:.2;stroke-opacity:1}62%{fill-opacity:0;r:32px;stroke-opacity:0}to{fill-opacity:0;r:32px;stroke-opacity:0}}:host(c4p-coachmark-beacon){position:relative}:host(.c4p--coachmark-beacon-default) .c4p--coachmark-beacon__target:before{display:none}:host(.c4p--coachmark-beacon-default) .c4p--coachmark-beacon__target:after{background-color:#4589ff;block-size:.75rem;border-radius:50%;content:"";inline-size:.75rem;inset-block-start:.625rem;inset-inline-start:.625rem;position:absolute}:host(.c4p--coachmark-beacon-default) .c4p--coachmark-beacon__target:focus{outline:transparent}:host(.c4p--coachmark-beacon-default) .c4p--coachmark-beacon__target:focus:before{block-size:18px;border-radius:100%;content:"";display:block;inline-size:18px;inset-block-start:7px;inset-inline-start:7px;outline:.125rem var(--cds-focus,#0f62fe) solid;position:absolute}:host(.c4p--coachmark-beacon-default) .c4p--coachmark-beacon__target{background-color:transparent;block-size:2rem;border:none;border-radius:50%;box-shadow:none;cursor:pointer;display:flex;inline-size:2rem;padding:0}:host(.c4p--coachmark-beacon-default) .c4p--coachmark-beacon__target[aria-expanded=true] circle{animation:none}:host(.c4p--coachmark-beacon-default) .c4p--coachmark-beacon__target::part(button){background-color:transparent;box-shadow:none;max-block-size:0;min-block-size:0;padding-inline:0}:host(.c4p--coachmark-beacon-default) .c4p--coachmark-beacon__target::part(button):focus{border-color:transparent;box-shadow:none}']);

// node_modules/@carbon/ibm-products-web-components/es/components/coachmark/coachmark-beacon/defs.js
var BEACON_KIND;
(function(BEACON_KIND2) {
  BEACON_KIND2["DEFAULT"] = "default";
})(BEACON_KIND || (BEACON_KIND = {}));

// node_modules/@carbon/ibm-products-web-components/es/components/coachmark/coachmark-beacon/coachmark-beacon.js
var blockClass = `${prefix}--coachmark-beacon`;
var CDSCoachmarkBeacon = class CDSCoachmarkBeacon2 extends HostListenerMixin(i2) {
  constructor() {
    super(...arguments);
    this.kind = BEACON_KIND.DEFAULT;
    this.label = "Show information";
    this.id = crypto.randomUUID();
    this.expanded = false;
    this.handleOutsideClick = (event) => {
      if (!this.contains(event.target)) {
        this.expanded = false;
        document.removeEventListener("click", this.handleOutsideClick);
      }
    };
  }
  firstUpdated() {
    this.classList.add(blockClass);
    if (this.kind) {
      this.classList.add(`${blockClass}-${this.kind}`);
    }
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.expanded) {
      document.addEventListener("click", this.handleOutsideClick);
    }
  }
  _handleClick() {
    this.expanded = !this.expanded;
    if (this.expanded) {
      document.addEventListener("click", this.handleOutsideClick);
    } else {
      document.removeEventListener("click", this.handleOutsideClick);
    }
    this.dispatchEvent(new CustomEvent(this.constructor.beaconClicked, {
      detail: { expanded: this.expanded },
      bubbles: true,
      composed: true
    }));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this.handleOutsideClick);
  }
  render() {
    return b`
      <cds-button
        class="${blockClass}__target"
        type="button"
        id=${this.id}
        aria-expanded="${String(this.expanded)}"
        @click=${this._handleClick}
      >
        <slot name="icon">
          <svg
            class="${blockClass}__center"
            aria-label=${this.label}
            width="76"
            height="76"
            viewBox="0 0 76 76"
          >
            <title>${this.label}</title>
            <circle r="1" cx="36" cy="36"></circle>
          </svg>
        </slot>
      </cds-button>
    `;
  }
  static get beaconClicked() {
    return `${prefix}-coachmark-beacon-clicked`;
  }
};
CDSCoachmarkBeacon.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSCoachmarkBeacon.styles = styles;
__decorate([
  n({ reflect: true })
], CDSCoachmarkBeacon.prototype, "kind", void 0);
__decorate([
  n({ type: String, reflect: true })
], CDSCoachmarkBeacon.prototype, "label", void 0);
__decorate([
  n({ type: String, reflect: true })
], CDSCoachmarkBeacon.prototype, "id", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSCoachmarkBeacon.prototype, "expanded", void 0);
CDSCoachmarkBeacon = __decorate([
  carbonElement(`${prefix}-coachmark-beacon`)
], CDSCoachmarkBeacon);
/*! Bundled license information:

@carbon/ibm-products-web-components/es/components/coachmark/coachmark-beacon/defs.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2023, 2024
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon/ibm-products-web-components/es/components/coachmark/coachmark-beacon/coachmark-beacon.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
