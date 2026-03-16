import {
  getLoadingIcon
} from "./chunk-D2ITTM54.js";
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

// node_modules/@carbon/web-components/es/components/loading/defs.js
var LOADING_TYPE;
(function(LOADING_TYPE2) {
  LOADING_TYPE2["REGULAR"] = "regular";
  LOADING_TYPE2["SMALL"] = "small";
})(LOADING_TYPE || (LOADING_TYPE = {}));

// node_modules/@carbon/web-components/es/components/loading/loading.scss.js
var styles = i([".cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-background:var(--cds-layer-background-01,#fff);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-background:var(--cds-layer-background-02,#f4f4f4);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-background:var(--cds-layer-background-03,#fff);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}.cds--layer-one.cds--layer__with-background,.cds--layer-three.cds--layer__with-background,.cds--layer-two.cds--layer__with-background{background-color:var(--cds-layer-background)}.cds--loading,:host(cds-loading){border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--loading *,.cds--loading :after,.cds--loading :before,:host(cds-loading) *,:host(cds-loading) :after,:host(cds-loading) :before{box-sizing:inherit}.cds--loading,:host(cds-loading){animation-duration:.69s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:cds--rotate;animation-timing-function:linear}.cds--loading svg circle,:host(cds-loading) svg circle{animation-duration:10ms;animation-name:cds--init-stroke;animation-timing-function:cubic-bezier(.5,0,.1,1)}@media screen and (prefers-reduced-motion:reduce){.cds--loading svg circle,:host(cds-loading) svg circle{animation:none}}.cds--loading,:host(cds-loading){block-size:5.5rem;inline-size:5.5rem}.cds--loading__svg{fill:transparent}.cds--loading__svg circle{stroke-dasharray:276.4608 276.4608;stroke-linecap:butt;stroke-width:10}.cds--loading__stroke{stroke:var(--cds-interactive,#0f62fe);stroke-dashoffset:52.527552}.cds--loading--small .cds--loading__stroke,:host(cds-loading[small]) .cds--loading__stroke{stroke-dashoffset:143.759616}.cds--loading--stop,:host(cds-loading:not([active])){animation:cds--rotate-end-p1 .7s cubic-bezier(0,0,.25,1) forwards,cds--rotate-end-p2 .7s cubic-bezier(0,0,.25,1) .7s forwards}.cds--loading--stop svg circle,:host(cds-loading:not([active])) svg circle{animation-delay:.7s;animation-duration:.7s;animation-fill-mode:forwards;animation-name:cds--stroke-end;animation-timing-function:cubic-bezier(0,0,.25,1)}@media screen and (prefers-reduced-motion:reduce){.cds--loading--stop svg circle,:host(cds-loading:not([active])) svg circle{animation:none}}.cds--loading--small,:host(cds-loading[small]){block-size:1rem;inline-size:1rem;line-height:1rem}.cds--loading--small circle,:host(cds-loading[small]) circle{stroke-width:16}.cds--loading--small .cds--loading__svg,:host(cds-loading[small]) .cds--loading__svg{stroke:var(--cds-interactive,#0f62fe)}.cds--loading__background{stroke:var(--cds-layer-accent);stroke-dashoffset:-22}@supports (hanging-punctuation:first) and (font:-apple-system-body) and (-webkit-appearance:none){circle.cds--loading__background{stroke-dasharray:265;stroke-dashoffset:0}}.cds--loading-overlay,:host(cds-loading[overlay]){align-items:center;background-color:var(--cds-overlay,rgba(0,0,0,.6));block-size:100%;display:flex;inline-size:100%;inset-block-start:0;inset-inline-start:0;justify-content:center;position:fixed;transition:background-color .7s cubic-bezier(.4,.14,.3,1);z-index:6000}.cds--loading-overlay--stop{display:none}@keyframes cds--rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes cds--rotate-end-p1{to{transform:rotate(1turn)}}@keyframes cds--rotate-end-p2{to{transform:rotate(-1turn)}}@keyframes cds--init-stroke{0%{stroke-dashoffset:276.4608}to{stroke-dashoffset:52.527552}}@keyframes cds--stroke-end{0%{stroke-dashoffset:52.527552}to{stroke-dashoffset:276.4608}}:host(cds-loading){display:block}:host(cds-loading[overlay]){animation:none}.cds--loading__background[hidden]{display:none}"]);

// node_modules/@carbon/web-components/es/components/loading/loading.js
var CDSLoading = class CDSLoading2 extends i2 {
  constructor() {
    super(...arguments);
    this.description = "Loading";
    this.small = false;
    this.overlay = false;
    this.active = false;
  }
  /**
   * @deprecated
   * The 'assistive-text' property will be deprecated in the next major release. Please use `description` instead.
   */
  get assistiveText() {
    return this.description;
  }
  set assistiveText(value) {
    this.description = value;
  }
  /**
   *
   * @deprecated The 'type' property will be deprecated in the next major release. Please use `small` instead.
   */
  get type() {
    return this.small ? LOADING_TYPE.SMALL : LOADING_TYPE.REGULAR;
  }
  set type(value) {
    this.small = value == LOADING_TYPE.SMALL;
  }
  /**
   *
   * @deprecated
   * The 'inactive' property will be deprecated in the next major release. Please use `active` instead.
   */
  get inactive() {
    return !this.active;
  }
  set inactive(value) {
    this.active = !value;
  }
  render() {
    const { active, description, small, overlay } = this;
    const innerClasses = e({
      [`${prefix}--loading`]: true,
      [`${prefix}--loading--stop`]: !active,
      [`${prefix}--loading--small`]: small
    });
    const icon = getLoadingIcon({ description, small });
    return overlay ? b`<div class="${innerClasses}">${icon}</div>` : icon;
  }
};
CDSLoading.styles = styles;
__decorate([
  n({ attribute: "assistive-text" })
], CDSLoading.prototype, "assistiveText", null);
__decorate([
  n({ reflect: true })
], CDSLoading.prototype, "description", void 0);
__decorate([
  n()
], CDSLoading.prototype, "type", null);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSLoading.prototype, "small", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSLoading.prototype, "overlay", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSLoading.prototype, "inactive", null);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSLoading.prototype, "active", void 0);
CDSLoading = __decorate([
  carbonElement(`${prefix}-loading`)
], CDSLoading);

export {
  LOADING_TYPE
};
