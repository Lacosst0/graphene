import {
  prefix
} from "./chunk-6BPMK2Y2.js";
import "./chunk-GVBT3ZOB.js";
import "./chunk-63DGZXAG.js";
import {
  _20
} from "./chunk-AECI6ME5.js";
import "./chunk-KQC2PJHA.js";
import "./chunk-SMM5AFXN.js";
import "./chunk-MU62I7LL.js";
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
import {
  e
} from "./chunk-YOLTZNLE.js";
import "./chunk-M2VBID3H.js";
import {
  n,
  r
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

// node_modules/@carbon/ibm-products-web-components/es/components/options-tile/options-tile.scss.js
var styles = i(['a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font:inherit;font-feature-settings:"liga" 1;font-size:100%;margin:0;padding:0;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background,#fff);color:var(--cds-text-primary,#161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}html{font-size:100%}body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size,2.625rem);font-weight:var(--cds-heading-06-font-weight,300);letter-spacing:var(--cds-heading-06-letter-spacing,0);line-height:var(--cds-heading-06-line-height,1.199)}h2{font-size:var(--cds-heading-05-font-size,2rem);font-weight:var(--cds-heading-05-font-weight,400);letter-spacing:var(--cds-heading-05-letter-spacing,0);line-height:var(--cds-heading-05-line-height,1.25)}h3{font-size:var(--cds-heading-04-font-size,1.75rem);font-weight:var(--cds-heading-04-font-weight,400);letter-spacing:var(--cds-heading-04-letter-spacing,0);line-height:var(--cds-heading-04-line-height,1.28572)}h4{font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4)}h5{font-size:var(--cds-heading-02-font-size,1rem);font-weight:var(--cds-heading-02-font-weight,600);letter-spacing:var(--cds-heading-02-letter-spacing,0);line-height:var(--cds-heading-02-line-height,1.5)}h6{font-size:var(--cds-heading-01-font-size,.875rem);font-weight:var(--cds-heading-01-font-weight,600);letter-spacing:var(--cds-heading-01-letter-spacing,.16px);line-height:var(--cds-heading-01-line-height,1.42857)}p{font-size:var(--cds-body-02-font-size,1rem);font-weight:var(--cds-body-02-font-weight,400);letter-spacing:var(--cds-body-02-letter-spacing,0);line-height:var(--cds-body-02-line-height,1.5)}a{color:var(--cds-link-primary,#0062fe)}em{font-style:italic}:host(c4p-options-tile) .c4p--options-tile{background:var(--cds-layer-01,#f4f4f4);border-block-end:1px solid var(--cds-border-subtle-01,#c6c6c6)}:host(c4p-options-tile) .c4p--options-tile ::-webkit-details-marker,:host(c4p-options-tile) .c4p--options-tile ::marker{content:"";display:none}:host(c4p-options-tile) .c4p--options-tile__header{align-items:center;block-size:3rem;cursor:pointer;display:flex;justify-content:space-between;padding-inline:1rem;padding-inline-end:1rem}:host(c4p-options-tile) .c4p--options-tile__header:hover{background:var(--cds-background-hover,hsla(0,0%,55%,.12))}:host(c4p-options-tile) .c4p--options-tile__header:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}:host(c4p-options-tile) .c4p--options-tile__header-left{align-items:center;display:flex}:host(c4p-options-tile) .c4p--options-tile__header-right{align-items:center;display:flex}:host(c4p-options-tile) .c4p--options-tile__title{font-size:var(--cds-heading-compact-01-font-size,.875rem);font-weight:var(--cds-heading-compact-01-font-weight,600);letter-spacing:var(--cds-heading-compact-01-letter-spacing,.16px);line-height:var(--cds-heading-compact-01-line-height,1.28572)}:host(c4p-options-tile) .c4p--options-tile__title-block{margin-inline-end:1rem;margin-inline-start:1rem}:host(c4p-options-tile) .c4p--options-tile__summary{color:var(--cds-text-secondary,#525252);font-size:var(--cds-helper-text-01-font-size,.75rem);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333)}:host(c4p-options-tile) .c4p--options-tile__body{padding-block-end:1.5rem;padding-block-start:.5rem;padding-inline:1rem;padding-inline-start:3rem}:host(c4p-options-tile) .c4p--options-tile--xl .c4p--options-tile__header{block-size:4rem}:host(c4p-options-tile) .c4p--options-tile--xl .c4p--options-tile__summary{margin-block-start:.125rem}:host(c4p-options-tile) .c4p--options-tile--open .c4p--options-tile__chevron{transform:rotate(-180deg)}:host(c4p-options-tile) .c4p--options-tile--open .c4p--options-tile__summary{display:none}']);

// node_modules/@carbon/ibm-products-web-components/es/components/options-tile/options-tile.js
var blockClass = `${prefix}--options-tile`;
var blockEvent = `${prefix}-options-tile`;
var CDSOptionsTile = class CDSOptionsTile2 extends HostListenerMixin(i2) {
  constructor() {
    super(...arguments);
    this.defaultOpen = false;
    this.size = "lg";
    this.titleId = "";
    this.titleText = "";
    this._open = false;
  }
  static get eventOpen() {
    return `${blockEvent}-open`;
  }
  static get eventClose() {
    return `${blockEvent}-close`;
  }
  _toggle(evt) {
    const { newState } = evt;
    this._open = newState === "open";
    this._open ? this._handleOpen() : this._handleClose();
  }
  _handleOpen() {
    const init = {
      bubbles: true,
      composed: true,
      detail: {
        open: this._open
      }
    };
    this.dispatchEvent(new CustomEvent(this.constructor.eventOpen, init));
  }
  _handleClose() {
    const init = {
      bubbles: true,
      composed: true,
      detail: {
        open: this._open
      }
    };
    this.dispatchEvent(new CustomEvent(this.constructor.eventClose, init));
  }
  render() {
    const { _open, defaultOpen, size, titleId, titleText } = this;
    const classes = e({
      [`${blockClass}`]: true,
      [`${blockClass}--xl`]: size === "xl",
      [`${blockClass}--open`]: _open
    });
    return b`
      <details
        @toggle=${this._toggle}
        class="${classes}"
        part="options-tile"
        open=${defaultOpen || A}
      >
        <summary class="${blockClass}__header">
          <div class="${blockClass}__header-left">
            ${iconLoader(_20, {
      slot: "icon",
      class: `${blockClass}__chevron`
    })}
            <div class="${blockClass}__title-block">
              <p class="${blockClass}__title" id="${titleId}">${titleText}</p>
              <div class="${blockClass}__summary">
                <slot name="summary"></slot>
              </div>
            </div>
          </div>
          <div class="${blockClass}__header-right">
            <slot name="toggle"></slot>
          </div>
        </summary>
        <div class="${blockClass}__body">
          <cds-layer level="1">
            <slot name="body"></slot>
          </cds-layer>
        </div>
      </details>
    `;
  }
};
CDSOptionsTile.styles = styles;
__decorate([
  n({ type: Boolean, reflect: true })
], CDSOptionsTile.prototype, "defaultOpen", void 0);
__decorate([
  n({ type: String, reflect: true })
], CDSOptionsTile.prototype, "size", void 0);
__decorate([
  n({ type: String, reflect: true })
], CDSOptionsTile.prototype, "titleId", void 0);
__decorate([
  n({ type: String, reflect: true })
], CDSOptionsTile.prototype, "titleText", void 0);
__decorate([
  r()
], CDSOptionsTile.prototype, "_open", void 0);
CDSOptionsTile = __decorate([
  carbonElement(`${prefix}-options-tile`)
], CDSOptionsTile);
/*! Bundled license information:

@carbon/ibm-products-web-components/es/components/options-tile/options-tile.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
