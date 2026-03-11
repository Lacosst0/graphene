import {
  iconLoader
} from "./chunk-TRPNDHDH.js";
import "./chunk-LDCWSK5M.js";
import "./chunk-TEMKX2NW.js";
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
  i,
  i2
} from "./chunk-3GZFZEMV.js";
import "./chunk-G6EI4S4W.js";

// node_modules/@carbon/web-components/es/components/shape-indicator/shape-indicator.scss.js
var styles = i(['.cds--shape-indicator,:host(cds-shape-indicator){color:var(--cds-text-secondary,#525252);display:flex;font-size:var(--cds-helper-text-01-font-size,.75rem);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333)}.cds--shape-indicator svg,:host(cds-shape-indicator) svg{align-self:center;margin-inline-end:.5rem}.cds--shape-indicator--14,:host(cds-shape-indicator[text-size="14"]){font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--shape-indicator--failed,:host(cds-shape-indicator[kind=failed]) svg{fill:var(--cds-status-red,#da1e28)}.cds--shape-indicator--critical,:host(cds-shape-indicator[kind=critical]) svg{fill:var(--cds-status-red,#da1e28)}.cds--shape-indicator--high,:host(cds-shape-indicator[kind=high]) svg{fill:var(--cds-status-red,#da1e28)}.cds--shape-indicator--medium,:host(cds-shape-indicator[kind=medium]) svg{fill:var(--cds-status-orange,#ff832b)}.cds--shape-indicator--medium path:first-of-type,:host(cds-shape-indicator[kind=medium]) svg path:first-of-type{fill:var(--cds-status-orange-outline,#ba4e00)}.cds--shape-indicator--low,:host(cds-shape-indicator[kind=low]) svg{fill:var(--cds-status-yellow,#f1c21b)}.cds--shape-indicator--low path:nth-of-type(2),:host(cds-shape-indicator[kind=low]) svg path:nth-of-type(2){fill:var(--cds-status-yellow-outline,#8e6a00)}.cds--shape-indicator--cautious,:host(cds-shape-indicator[kind=cautious]) svg{fill:var(--cds-status-yellow,#f1c21b)}.cds--shape-indicator--cautious path:first-of-type,:host(cds-shape-indicator[kind=cautious]) svg path:first-of-type{fill:var(--cds-status-yellow-outline,#8e6a00)}.cds--shape-indicator--undefined,:host(cds-shape-indicator[kind=undefined]) svg{fill:var(--cds-status-purple,#8a3ffc)}.cds--shape-indicator--stable,:host(cds-shape-indicator[kind=stable]) svg{fill:var(--cds-status-green,#24a148)}.cds--shape-indicator--informative,:host(cds-shape-indicator[kind=informative]) svg{fill:var(--cds-status-blue,#0043ce)}.cds--shape-indicator--incomplete path:nth-of-type(2),:host(cds-shape-indicator[kind=incomplete]) svg path:nth-of-type(2){fill:var(--cds-status-blue,#0043ce)}.cds--shape-indicator--draft,:host(cds-shape-indicator[kind=draft]) svg{fill:var(--cds-status-gray,#6f6f6f)}']);

// node_modules/@carbon/icons/es/critical/index.js
var index = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 16 16",
    "fill": "currentColor",
    "width": "16",
    "height": "16"
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M12.887,11.4727a5.9936,5.9936,0,0,0-8.36-8.3594Z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M3.113,4.5273a5.9936,5.9936,0,0,0,8.36,8.3594Z"
    }
  }],
  "name": "critical",
  "size": "glyph"
};

// node_modules/@carbon/icons/es/critical-severity/index.js
var index2 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 16 16",
    "fill": "currentColor",
    "width": "16",
    "height": "16"
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M13 13 3 13 3 3 13 13z"
    }
  }],
  "name": "critical-severity",
  "size": "glyph"
};

// node_modules/@carbon/icons/es/diamond-fill/index.js
var index3 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 16 16",
    "fill": "currentColor",
    "width": "16",
    "height": "16"
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M8,2.4142,13.5858,8,8,13.5858,2.4142,8,8,2.4142M8,1,1,8l7,7,7-7L8,1Z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M8,2.4142,13.5858,8,8,13.5858,2.4142,8,8,2.4142"
    }
  }],
  "name": "diamond-fill",
  "size": "glyph"
};

// node_modules/@carbon/icons/es/low-severity/index.js
var index4 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 16 16",
    "fill": "currentColor",
    "width": "16",
    "height": "16"
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M4 4H12V12H4z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M12,4v8H4V4h8m1-1H3V13H13V3Z"
    }
  }],
  "name": "low-severity",
  "size": "glyph"
};

// node_modules/@carbon/icons/es/caution/index.js
var index5 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 16 16",
    "fill": "currentColor",
    "width": "16",
    "height": "16"
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M12.3154,12H3.6846L8,4.0884,12.3154,12M14,13,8,2,2,13Z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M12.315 12 3.685 12 8 4.088 12.315 12z"
    }
  }],
  "name": "caution",
  "size": "glyph"
};

// node_modules/@carbon/icons/es/circle-fill/index.js
var index6 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 16 16",
    "fill": "currentColor",
    "width": "16",
    "height": "16"
  },
  "content": [{
    "elem": "circle",
    "attrs": {
      "cx": "8",
      "cy": "8",
      "r": "6"
    }
  }],
  "name": "circle-fill",
  "size": "glyph"
};

// node_modules/@carbon/icons/es/circle-stroke/index.js
var index7 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 16 16",
    "fill": "currentColor",
    "width": "16",
    "height": "16"
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M8,4A4,4,0,1,1,4,8,4.0045,4.0045,0,0,1,8,4M8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z"
    }
  }],
  "name": "circle-stroke",
  "size": "glyph"
};

// node_modules/@carbon/web-components/es/components/shape-indicator/defs.js
var SHAPE_INDICATOR_KIND;
(function(SHAPE_INDICATOR_KIND2) {
  SHAPE_INDICATOR_KIND2["FAILED"] = "failed";
  SHAPE_INDICATOR_KIND2["CRITICAL"] = "critical";
  SHAPE_INDICATOR_KIND2["HIGH"] = "high";
  SHAPE_INDICATOR_KIND2["MEDIUM"] = "medium";
  SHAPE_INDICATOR_KIND2["LOW"] = "low";
  SHAPE_INDICATOR_KIND2["CAUTIOUS"] = "cautious";
  SHAPE_INDICATOR_KIND2["UNDEFINED"] = "undefined";
  SHAPE_INDICATOR_KIND2["STABLE"] = "stable";
  SHAPE_INDICATOR_KIND2["INFORMATIVE"] = "informative";
  SHAPE_INDICATOR_KIND2["INCOMPLETE"] = "incomplete";
  SHAPE_INDICATOR_KIND2["DRAFT"] = "draft";
})(SHAPE_INDICATOR_KIND || (SHAPE_INDICATOR_KIND = {}));

// node_modules/@carbon/web-components/es/components/shape-indicator/shape-indicator.js
var IncompleteIcon = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="none"
  aria-hidden="true">
  <path
    fill="#fff"
    fillOpacity="0.01"
    d="M0 0h16v16H0z"
    style="mix-blend-mode: multiply;" />
  <path
    fill="#161616"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2Zm0 2a4.004 4.004 0 0 1 4 4H4a4.004 4.004 0 0 1 4-4Z" />
</svg>`;
var shapeMap = {
  [SHAPE_INDICATOR_KIND.FAILED]: index,
  [SHAPE_INDICATOR_KIND.CRITICAL]: index2,
  [SHAPE_INDICATOR_KIND.HIGH]: index5,
  [SHAPE_INDICATOR_KIND.MEDIUM]: index3,
  [SHAPE_INDICATOR_KIND.LOW]: index4,
  [SHAPE_INDICATOR_KIND.CAUTIOUS]: index5,
  [SHAPE_INDICATOR_KIND.UNDEFINED]: index3,
  [SHAPE_INDICATOR_KIND.STABLE]: index6,
  [SHAPE_INDICATOR_KIND.INFORMATIVE]: index4,
  [SHAPE_INDICATOR_KIND.INCOMPLETE]: IncompleteIcon,
  [SHAPE_INDICATOR_KIND.DRAFT]: index7
};
var CDSShapeIndicator = class CDSShapeIndicator2 extends i2 {
  constructor() {
    super(...arguments);
    this.textSize = 12;
  }
  render() {
    const shape = shapeMap[this.kind];
    if (!shape) {
      return null;
    }
    if (typeof shape === "string") {
      return b` ${iconLoader(null, {}, shape)} ${this.label} `;
    }
    return b` ${iconLoader(shape)} ${this.label} `;
  }
};
CDSShapeIndicator.styles = styles;
__decorate([
  n({ attribute: "text-size" })
], CDSShapeIndicator.prototype, "textSize", void 0);
__decorate([
  n()
], CDSShapeIndicator.prototype, "label", void 0);
__decorate([
  n()
], CDSShapeIndicator.prototype, "kind", void 0);
CDSShapeIndicator = __decorate([
  carbonElement(`${prefix}-shape-indicator`)
], CDSShapeIndicator);
