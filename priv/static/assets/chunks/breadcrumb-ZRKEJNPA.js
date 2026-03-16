import {
  styles
} from "./chunk-UHHNWSPY.js";
import {
  CDSLink$1
} from "./chunk-WPLJTCHR.js";
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
  __decorate,
  b,
  i2 as i
} from "./chunk-3GZFZEMV.js";
import "./chunk-G6EI4S4W.js";

// node_modules/@carbon/web-components/es/components/breadcrumb/defs.js
var BREADCRUMB_SIZE;
(function(BREADCRUMB_SIZE2) {
  BREADCRUMB_SIZE2["SMALL"] = "sm";
  BREADCRUMB_SIZE2["MEDIUM"] = "md";
})(BREADCRUMB_SIZE || (BREADCRUMB_SIZE = {}));

// node_modules/@carbon/web-components/es/components/breadcrumb/breadcrumb.js
var CDSBreadcrumb = class CDSBreadcrumb2 extends i {
  constructor() {
    super(...arguments);
    this.noTrailingSlash = false;
    this.size = BREADCRUMB_SIZE.MEDIUM;
  }
  /**
   * Handles `slotchange` event.
   */
  _handleSlotChange({ target }) {
    const items = target.assignedNodes().filter(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- https://github.com/carbon-design-system/carbon/issues/20452
      (node) => node.nodeType !== Node.TEXT_NODE || node.textContent.trim()
    );
    items.forEach((item) => {
      item.setAttribute("size", this.size);
    });
  }
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "navigation");
    }
    if (!this.hasAttribute("aria-label")) {
      this.setAttribute("aria-label", "Breadcrumb");
    }
    super.connectedCallback();
  }
  updated(changedProperties) {
    if (changedProperties.has("size")) {
      const items = this.querySelectorAll(`${prefix}-breadcrumb-item`);
      items === null || items === void 0 ? void 0 : items.forEach((item) => {
        const link = item.querySelector(`${prefix}-breadcrumb-link`);
        link === null || link === void 0 ? void 0 : link.setAttribute("size", this.size);
      });
    }
  }
  render() {
    const classes = e({
      [`${prefix}--breadcrumb`]: true,
      [`${prefix}--breadcrumb--no-trailing-slash`]: this.noTrailingSlash,
      [`${prefix}--breadcrumb--sm`]: this.size === BREADCRUMB_SIZE.SMALL
    });
    return b`
      <ol class="${classes}">
        <slot @slotchange="${this._handleSlotChange}"></slot>
      </ol>
    `;
  }
};
CDSBreadcrumb.styles = styles;
__decorate([
  n({ type: Boolean, reflect: true, attribute: "no-trailing-slash" })
], CDSBreadcrumb.prototype, "noTrailingSlash", void 0);
__decorate([
  n({ type: BREADCRUMB_SIZE, reflect: true })
], CDSBreadcrumb.prototype, "size", void 0);
CDSBreadcrumb = __decorate([
  carbonElement(`${prefix}-breadcrumb`)
], CDSBreadcrumb);

// node_modules/@carbon/web-components/es/components/breadcrumb/breadcrumb-link.js
var CDSBreadcrumbLink = class CDSBreadcrumbLink2 extends CDSLink$1 {
  constructor() {
    super(...arguments);
    this.isCurrentPage = false;
  }
  render() {
    const { ariaCurrent, isCurrentPage } = this;
    const linkClass = e({
      [`${prefix}--link`]: true,
      [`${prefix}--breadcrumb-item--current`]: isCurrentPage && ariaCurrent !== "page"
    });
    return b`
      ${this.href ? super.render() : b`<span
            class="${linkClass}"
            aria-current="${ariaCurrent || isCurrentPage}"
            ><slot></slot
          ></span>`}
    `;
  }
};
CDSBreadcrumbLink.styles = styles;
__decorate([
  n({ type: String, attribute: "aria-current" })
], CDSBreadcrumbLink.prototype, "ariaCurrent", void 0);
__decorate([
  n({ type: Boolean, attribute: "is-currentpage" })
], CDSBreadcrumbLink.prototype, "isCurrentPage", void 0);
CDSBreadcrumbLink = __decorate([
  carbonElement(`${prefix}-breadcrumb-link`)
], CDSBreadcrumbLink);

// node_modules/@carbon/web-components/es/components/breadcrumb/breadcrumb-skeleton.js
var renderItem = () => {
  return b`
    <div class="${prefix}--breadcrumb-item">
      <span class="${prefix}--link">&nbsp;</span>
    </div>
  `;
};
var CDSBreadcrumbSkeleton = class CDSBreadcrumbSkeleton2 extends i {
  constructor() {
    super(...arguments);
    this.items = 3;
    this.noTrailingSlash = false;
    this.size = BREADCRUMB_SIZE.MEDIUM;
  }
  render() {
    const classes = e({
      [`${prefix}--breadcrumb`]: true,
      [`${prefix}--skeleton`]: true,
      [`${prefix}--breadcrumb--no-trailing-slash`]: this.noTrailingSlash,
      [`${prefix}--breadcrumb--sm`]: this.size === BREADCRUMB_SIZE.SMALL
    });
    return b`
      <div class="${classes}">
        ${[...Array(this.items)].map(() => renderItem())}
      </div>
    `;
  }
};
CDSBreadcrumbSkeleton.styles = styles;
__decorate([
  n({ type: Number, reflect: true })
], CDSBreadcrumbSkeleton.prototype, "items", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "no-trailing-slash" })
], CDSBreadcrumbSkeleton.prototype, "noTrailingSlash", void 0);
__decorate([
  n({ type: BREADCRUMB_SIZE, reflect: true })
], CDSBreadcrumbSkeleton.prototype, "size", void 0);
CDSBreadcrumbSkeleton = __decorate([
  carbonElement(`${prefix}-breadcrumb-skeleton`)
], CDSBreadcrumbSkeleton);
