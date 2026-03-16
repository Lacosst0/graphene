import {
  prefix
} from "./chunk-6BPMK2Y2.js";
import {
  _16
} from "./chunk-YGK4BVA2.js";
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
  __decorate,
  b,
  i,
  i2
} from "./chunk-3GZFZEMV.js";
import "./chunk-G6EI4S4W.js";

// node_modules/@carbon/ibm-products-web-components/es/components/coachmark/coachmark-tagline/coachmark-tagline.scss.js
var styles = i(['.c4p--coachmark-tagline{background:#6929c4;background-image:linear-gradient(90deg,#001d6c,#6929c4);border-radius:.125rem .125rem 0 0;color:#fff!important;display:grid;grid-template-columns:[cta-col] auto [close-btn-col] 2.5rem;inline-size:18rem;inset-block-end:0;inset-inline-end:1rem;opacity:1;overflow:hidden;position:fixed;transition:opacity .24s cubic-bezier(.2,0,1,.9) .3s;transition-delay:.24s;z-index:1000}@media (prefers-reduced-motion){.c4p--coachmark-tagline{transition:none}}.c4p--coachmark-tagline:before{background:linear-gradient(90deg,#0043ce,#6929c4);content:"";inset:0;opacity:0;position:absolute;transition:opacity .24s cubic-bezier(.2,0,1,.9);z-index:-1}@media (prefers-reduced-motion){.c4p--coachmark-tagline:before{transition:none}}.c4p--coachmark-tagline:hover:before{opacity:1}.c4p--coachmark-tagline--is-open{background:#fff;opacity:0}.c4p--coachmark-tagline--is-open c4p--coachmark-tagline__cta{opacity:0}.c4p--coachmark-tagline--is-open c4p--coachmark-tagline--close-btn{display:none}.c4p--coachmark-tagline--is-open:before{background:#fff}.c4p--coachmark-tagline__cta{background:transparent;border:none;color:#fff!important;display:grid;font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);grid-template-columns:[icon-col] 2rem [body-col] auto;letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);line-height:var(--cds-body-short-01-line-height,1.28572);padding:.5rem 0;text-align:start}.c4p--coachmark-tagline__cta:focus{box-shadow:inset 0 0 0 3px #6929c4,inset 0 0 0 .25rem #fff;outline:1px solid transparent}.c4p--coachmark-tagline__cta:hover{cursor:pointer!important}.c4p--coachmark-tagline__cta .c4p--coachmark-tagline__idea{justify-self:center}.c4p--coachmark-tagline--close-btn-container{block-size:2rem;inline-size:2rem;margin-inline-start:auto}.c4p--coachmark-tagline--close-btn{block-size:2rem;border-color:transparent!important;border-radius:0;color:#fff;inline-size:2rem;margin-inline-start:auto!important;outline:1px solid transparent}.c4p--coachmark-tagline--close-btn:active{background-color:var(--cds-button-secondary-active,#6f6f6f)}.c4p--coachmark-tagline--close-btn:focus{box-shadow:inset 0 0 0 1px var(--cds-background-inverse,#393939),inset 0 0 0 .125rem #fff!important}.c4p--coachmark-tagline--close-btn svg>path{margin:0;fill:#fff!important}.c4p--coachmark-tagline--close-btn:hover{background-color:#7c3dd6!important}.c4p--coachmark-tagline__cta svg{justify-self:center}']);

// node_modules/@carbon/icons/es/idea/16.js
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
      "d": "M11 24H21V26H11z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M13 28H19V30H13z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M16,2A10,10,0,0,0,6,12a9.19,9.19,0,0,0,3.46,7.62c1,.93,1.54,1.46,1.54,2.38h2c0-1.84-1.11-2.87-2.19-3.86A7.2,7.2,0,0,1,8,12a8,8,0,0,1,16,0,7.2,7.2,0,0,1-2.82,6.14c-1.07,1-2.18,2-2.18,3.86h2c0-.92.53-1.45,1.54-2.39A9.18,9.18,0,0,0,26,12,10,10,0,0,0,16,2Z"
    }
  }],
  "name": "idea",
  "size": 16
};

// node_modules/@carbon/ibm-products-web-components/es/components/coachmark/coachmark-tagline/coachmark-tagline.js
var blockClass = `${prefix}--coachmark-tagline`;
var CDSCoachmarkTagline = class CDSCoachmarkTagline2 extends HostListenerMixin(i2) {
  constructor() {
    super(...arguments);
    this.closeIconDescription = "Close";
    this.title = "";
    this.open = false;
  }
  firstUpdated() {
    this.classList.add(blockClass);
    if (this.open) {
      this.classList.add(`${blockClass}--open`);
    }
  }
  /**
   * Handles the close button click event.
   */
  _handleClose() {
    const closeEvent = new CustomEvent(`${prefix}-coachmark-tagline-close`, {
      bubbles: true,
      composed: true,
      detail: {}
    });
    this.dispatchEvent(closeEvent);
  }
  /**
   * Handles the CTA button click event.
   */
  _handleCtaClick(event) {
    const ctaClickEvent = new CustomEvent(`${prefix}-coachmark-tagline-cta-click`, {
      bubbles: true,
      composed: true,
      detail: { originalEvent: event }
    });
    this.dispatchEvent(ctaClickEvent);
  }
  /**
   * Handles the CTA button double click event.
   */
  _handleCtaDoubleClick(event) {
    const ctaDoubleClickEvent = new CustomEvent(`${prefix}-coachmark-tagline-cta-dblclick`, {
      bubbles: true,
      composed: true,
      detail: { originalEvent: event }
    });
    this.dispatchEvent(ctaDoubleClickEvent);
  }
  render() {
    return b`
      <button
        class="${blockClass}__cta"
        @click="${this._handleCtaClick}"
        @dblclick="${this._handleCtaDoubleClick}"
      >
        ${iconLoader(_162, { slot: "icon" })} ${this.title}
      </button>
      <div class="${blockClass}--close-btn-container">
        <cds-button
          kind="ghost"
          size="sm"
          tooltip-text="${this.closeIconDescription}"
          has-icon-only
          class="${blockClass}--close-btn"
          @click="${this._handleClose}"
        >
          ${iconLoader(_16, { slot: "icon" })}
        </cds-button>
      </div>
    `;
  }
};
CDSCoachmarkTagline.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSCoachmarkTagline.styles = styles;
__decorate([
  n({ type: String, attribute: "close-icon-description" })
], CDSCoachmarkTagline.prototype, "closeIconDescription", void 0);
__decorate([
  n({ type: String })
], CDSCoachmarkTagline.prototype, "title", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "open" })
], CDSCoachmarkTagline.prototype, "open", void 0);
CDSCoachmarkTagline = __decorate([
  carbonElement(`${prefix}-coachmark-tagline`)
], CDSCoachmarkTagline);
/*! Bundled license information:

@carbon/ibm-products-web-components/es/components/coachmark/coachmark-tagline/coachmark-tagline.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2026
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
