import {
  _16 as _162
} from "./chunk-WCCOZML7.js";
import {
  getLoadingIcon
} from "./chunk-D2ITTM54.js";
import {
  _16
} from "./chunk-HPDZLYLI.js";
import {
  iconLoader
} from "./chunk-TRPNDHDH.js";
import {
  e
} from "./chunk-YOLTZNLE.js";
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

// node_modules/@carbon/web-components/es/components/inline-loading/defs.js
var INLINE_LOADING_STATE;
(function(INLINE_LOADING_STATE2) {
  INLINE_LOADING_STATE2["INACTIVE"] = "inactive";
  INLINE_LOADING_STATE2["ACTIVE"] = "active";
  INLINE_LOADING_STATE2["FINISHED"] = "finished";
  INLINE_LOADING_STATE2["ERROR"] = "error";
})(INLINE_LOADING_STATE || (INLINE_LOADING_STATE = {}));

// node_modules/@carbon/web-components/es/components/inline-loading/inline-loading.scss.js
var styles = i([".cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-background:var(--cds-layer-background-01,#fff);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-background:var(--cds-layer-background-02,#f4f4f4);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-background:var(--cds-layer-background-03,#fff);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}.cds--layer-one.cds--layer__with-background,.cds--layer-three.cds--layer__with-background,.cds--layer-two.cds--layer__with-background{background-color:var(--cds-layer-background)}.cds--loading{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--loading *,.cds--loading :after,.cds--loading :before{box-sizing:inherit}.cds--loading{animation-duration:.69s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:cds--rotate;animation-timing-function:linear}.cds--loading svg circle{animation-duration:10ms;animation-name:cds--init-stroke;animation-timing-function:cubic-bezier(.5,0,.1,1)}@media screen and (prefers-reduced-motion:reduce){.cds--loading svg circle{animation:none}}.cds--loading{block-size:5.5rem;inline-size:5.5rem}.cds--loading__svg{fill:transparent}.cds--loading__svg circle{stroke-dasharray:276.4608 276.4608;stroke-linecap:butt;stroke-width:10}.cds--loading__stroke{stroke:var(--cds-interactive,#0f62fe);stroke-dashoffset:52.527552}.cds--loading--small .cds--loading__stroke{stroke-dashoffset:143.759616}.cds--loading--stop{animation:cds--rotate-end-p1 .7s cubic-bezier(0,0,.25,1) forwards,cds--rotate-end-p2 .7s cubic-bezier(0,0,.25,1) .7s forwards}.cds--loading--stop svg circle{animation-delay:.7s;animation-duration:.7s;animation-fill-mode:forwards;animation-name:cds--stroke-end;animation-timing-function:cubic-bezier(0,0,.25,1)}@media screen and (prefers-reduced-motion:reduce){.cds--loading--stop svg circle{animation:none}}.cds--loading--small{block-size:1rem;inline-size:1rem;line-height:1rem}.cds--loading--small circle{stroke-width:16}.cds--loading--small .cds--loading__svg{stroke:var(--cds-interactive,#0f62fe)}.cds--loading__background{stroke:var(--cds-layer-accent);stroke-dashoffset:-22}@supports (hanging-punctuation:first) and (font:-apple-system-body) and (-webkit-appearance:none){circle.cds--loading__background{stroke-dasharray:265;stroke-dashoffset:0}}.cds--loading-overlay{align-items:center;background-color:var(--cds-overlay,rgba(0,0,0,.6));block-size:100%;display:flex;inline-size:100%;inset-block-start:0;inset-inline-start:0;justify-content:center;position:fixed;transition:background-color .7s cubic-bezier(.4,.14,.3,1);z-index:6000}.cds--loading-overlay--stop{display:none}@keyframes cds--rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes cds--rotate-end-p1{to{transform:rotate(1turn)}}@keyframes cds--rotate-end-p2{to{transform:rotate(-1turn)}}@keyframes cds--init-stroke{0%{stroke-dashoffset:276.4608}to{stroke-dashoffset:52.527552}}@keyframes cds--stroke-end{0%{stroke-dashoffset:52.527552}to{stroke-dashoffset:276.4608}}@keyframes prefix--stroke{to{stroke-dashoffset:0}}.cds--inline-loading,:host(cds-inline-loading){align-items:center;color:var(--cds-text-secondary,#525252);display:flex;inline-size:100%;min-block-size:2rem}.cds--inline-loading__text{font-size:var(--cds-label-02-font-size,.875rem);font-weight:var(--cds-label-02-font-weight,400);letter-spacing:var(--cds-label-02-letter-spacing,.16px);line-height:var(--cds-label-02-line-height,1.28572)}.cds--inline-loading__animation{align-items:center;display:flex;justify-content:center;margin-inline-end:.5rem;position:relative}.cds--inline-loading__checkmark-container{fill:var(--cds-support-success,#24a148)}.cds--inline-loading__checkmark-container.cds--inline-loading__svg{inline-size:.75rem;inset-block-start:.75rem;position:absolute}.cds--inline-loading__checkmark-container[hidden]{display:none}.cds--inline-loading__checkmark{animation-duration:.25s;animation-fill-mode:forwards;animation-name:cds--stroke;fill:none;stroke:var(--cds-interactive,#0f62fe);stroke-dasharray:12;stroke-dashoffset:12;stroke-width:1.8;transform-origin:50% 50%}.cds--inline-loading--error{block-size:1rem;fill:var(--cds-support-error,#da1e28);inline-size:1rem}.cds--inline-loading--error[hidden]{display:none}.cds--loading--small .cds--inline-loading__svg{stroke:var(--cds-interactive,#0f62fe)}.cds--btn .cds--inline-loading--btn{min-block-size:0}.cds--btn .cds--inline-loading--btn .cds--inline-loading__text{font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);line-height:var(--cds-body-short-01-line-height,1.28572)}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){.cds--inline-loading__checkmark-container{inset-block-start:1px;inset-inline-end:.5rem}.cds--inline-loading__checkmark{animation:none;stroke-dasharray:0;stroke-dashoffset:0}}"]);

// node_modules/@carbon/web-components/es/components/inline-loading/inline-loading.js
var CDSInlineLoading = class CDSInlineLoading2 extends i2 {
  constructor() {
    super(...arguments);
    this.iconDescription = "Loading";
    this.successDelay = 1500;
    this.status = INLINE_LOADING_STATE.ACTIVE;
  }
  /**
   * @deprecated The 'assistive-text' property will be deprecated in the next major release. Please use `icon-description` instead.
   */
  get assistiveText() {
    return this.iconDescription;
  }
  set assistiveText(value) {
    this.iconDescription = value;
  }
  /**
   * @returns The template for the status icon.
   */
  _renderIcon() {
    const { iconDescription, status } = this;
    if (status === INLINE_LOADING_STATE.ERROR) {
      return iconLoader(_162, {
        class: `${prefix}--inline-loading--error`,
        "aria-label": iconDescription
      });
    }
    const init = {
      bubbles: true,
      cancelable: true,
      composed: true
    };
    if (status === INLINE_LOADING_STATE.FINISHED) {
      setTimeout(() => {
        this.dispatchEvent(new CustomEvent(this.constructor.eventOnSuccess, init));
      }, this.successDelay);
      return iconLoader(_16, {
        class: `${prefix}--inline-loading__checkmark-container`,
        "aria-label": iconDescription
      });
    }
    if (status === INLINE_LOADING_STATE.INACTIVE || status === INLINE_LOADING_STATE.ACTIVE) {
      const classes = e({
        [`${prefix}--loading`]: true,
        [`${prefix}--loading--small`]: true,
        [`${prefix}--loading--stop`]: status === INLINE_LOADING_STATE.INACTIVE
      });
      return b`
        <div class="${classes}">
          ${getLoadingIcon({ description: iconDescription, small: true })}
        </div>
      `;
    }
    return void 0;
  }
  static get eventOnSuccess() {
    return `${prefix}-inline-loading-onsuccess`;
  }
  connectedCallback() {
    if (!this.hasAttribute("aria-live")) {
      this.setAttribute("aria-live", "assertive");
    }
    super.connectedCallback();
  }
  render() {
    const statusIconResult = this._renderIcon();
    const statusIconWrapperResult = !statusIconResult ? void 0 : b`
          <div class="${prefix}--inline-loading__animation">
            ${statusIconResult}
          </div>
        `;
    return b`
      ${statusIconWrapperResult}
      <div class="${prefix}--inline-loading__text"><slot></slot></div>
    `;
  }
};
CDSInlineLoading.styles = styles;
__decorate([
  n({ attribute: "assistive-text" })
], CDSInlineLoading.prototype, "assistiveText", null);
__decorate([
  n({ attribute: "icon-description" })
], CDSInlineLoading.prototype, "iconDescription", void 0);
__decorate([
  n({ attribute: "success-delay" })
], CDSInlineLoading.prototype, "successDelay", void 0);
__decorate([
  n({ reflect: true })
], CDSInlineLoading.prototype, "status", void 0);
CDSInlineLoading = __decorate([
  carbonElement(`${prefix}-inline-loading`)
], CDSInlineLoading);
