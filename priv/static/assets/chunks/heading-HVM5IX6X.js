import {
  o
} from "./chunk-TEMKX2NW.js";
import "./chunk-M2VBID3H.js";
import {
  n,
  t
} from "./chunk-V6ENGPT2.js";
import {
  prefix
} from "./chunk-ITCMO2MJ.js";
import {
  __decorate,
  b,
  i,
  i2
} from "./chunk-3GZFZEMV.js";
import "./chunk-G6EI4S4W.js";

// node_modules/@carbon/web-components/es/components/heading/heading.scss.js
var styles = i([":host(cds-heading){display:block}:host(cds-heading) h1,:host(cds-heading) h2,:host(cds-heading) h3,:host(cds-heading) h4,:host(cds-heading) h5,:host(cds-heading) h6{margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;unicode-bidi:-webkit-isolate;unicode-bidi:-moz-isolate;unicode-bidi:isolate}:host(cds-heading) h1{font-size:var(--cds-heading-06-font-size,2.625rem);font-weight:var(--cds-heading-06-font-weight,300);letter-spacing:var(--cds-heading-06-letter-spacing,0);line-height:var(--cds-heading-06-line-height,1.199)}:host(cds-heading) h2{font-size:var(--cds-heading-05-font-size,2rem);font-weight:var(--cds-heading-05-font-weight,400);letter-spacing:var(--cds-heading-05-letter-spacing,0);line-height:var(--cds-heading-05-line-height,1.25)}:host(cds-heading) h3{font-size:var(--cds-heading-04-font-size,1.75rem);font-weight:var(--cds-heading-04-font-weight,400);letter-spacing:var(--cds-heading-04-letter-spacing,0);line-height:var(--cds-heading-04-line-height,1.28572)}:host(cds-heading) h4{font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4)}:host(cds-heading) h5{font-size:var(--cds-heading-02-font-size,1rem);font-weight:var(--cds-heading-02-font-weight,600);letter-spacing:var(--cds-heading-02-letter-spacing,0);line-height:var(--cds-heading-02-line-height,1.5)}:host(cds-heading) h6{font-size:var(--cds-heading-01-font-size,.875rem);font-weight:var(--cds-heading-01-font-weight,600);letter-spacing:var(--cds-heading-01-letter-spacing,.16px);line-height:var(--cds-heading-01-line-height,1.42857)}"]);

// node_modules/@carbon/web-components/es/components/heading/heading.js
var CDSSection = class CDSSection2 extends i2 {
  constructor() {
    super(...arguments);
    this._currentLevel = 1;
  }
  getParentLevel() {
    var _a;
    const parentSection = (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.closest(`${prefix}-section`);
    return parentSection ? parentSection.getCurrentLevel() : 1;
  }
  connectedCallback() {
    var _a;
    super.connectedCallback();
    const parentLevel = this.getParentLevel();
    this._currentLevel = (_a = this.level) !== null && _a !== void 0 ? _a : Math.min(parentLevel + 1, 6);
  }
  getCurrentLevel() {
    return this._currentLevel;
  }
  render() {
    return b`<slot></slot>`;
  }
};
__decorate([
  n({ type: Number })
], CDSSection.prototype, "level", void 0);
CDSSection = __decorate([
  t(`${prefix}-section`)
], CDSSection);
var CDSHeading = class CDSHeading2 extends i2 {
  constructor() {
    super(...arguments);
    this._level = 1;
  }
  connectedCallback() {
    super.connectedCallback();
    const section = this.closest(`${prefix}-section`);
    this._level = section ? section.getCurrentLevel() : 1;
  }
  render() {
    const headingElement = `
      <h${this._level}>
        <slot></slot>
      </h${this._level}>
    `;
    return b`${o(headingElement)}`;
  }
};
CDSHeading.styles = styles;
CDSHeading = __decorate([
  t(`${prefix}-heading`)
], CDSHeading);
