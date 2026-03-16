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
import "./chunk-G6EI4S4W.js";

// node_modules/@carbon/web-components/es/components/badge-indicator/badge-indicator.scss.js
var styles = i([".cds--badge-indicator,:host(cds-badge-indicator){background:var(--cds-support-error,#da1e28);border-radius:100px;color:var(--cds-text-on-color,#fff);display:flex;font-size:var(--cds-helper-text-01-font-size,.75rem);inset-block-start:0;inset-inline-end:0;letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333);margin-block-start:.5rem;margin-inline-end:.5rem;max-block-size:1rem;min-block-size:.5rem;min-inline-size:.5rem;padding:0 .25rem .125rem;position:absolute}.cds--badge-indicator--count,:host(cds-badge-indicator[count]){margin-block-start:.25rem;margin-inline-end:.25rem}"]);

// node_modules/@carbon/web-components/es/components/badge-indicator/badge-indicator.js
var CDSBadgeIndicator = class CDSBadgeIndicator2 extends i2 {
  constructor() {
    super(...arguments);
    this.slot = "badge-indicator";
  }
  render() {
    const displayCount = this.count && this.count > 999 ? "999+" : this.count;
    return b`${displayCount}`;
  }
};
CDSBadgeIndicator.styles = styles;
__decorate([
  n({ type: Number })
], CDSBadgeIndicator.prototype, "count", void 0);
__decorate([
  n({ reflect: true })
], CDSBadgeIndicator.prototype, "slot", void 0);
CDSBadgeIndicator = __decorate([
  carbonElement(`${prefix}-badge-indicator`)
], CDSBadgeIndicator);
