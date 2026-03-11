import {
  styles
} from "./chunk-KVC6R5GK.js";
import {
  POPOVER_ALIGNMENT
} from "./chunk-GPZZH3QI.js";
import {
  iconLoader
} from "./chunk-TRPNDHDH.js";
import {
  FocusMixin
} from "./chunk-73FE5HOG.js";
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

// node_modules/@carbon/icons/es/copy/16.js
var _16 = {
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
      "d": "M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"
    }
  }],
  "name": "copy",
  "size": 16
};

// node_modules/@carbon/web-components/es/components/copy-button/copy-button.js
var CDSCopyButton = class CDSCopyButton2 extends FocusMixin(i) {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.feedback = "Copied!";
    this.align = POPOVER_ALIGNMENT.BOTTOM;
    this.autoAlign = false;
    this.feedbackTimeout = 2e3;
  }
  render() {
    const { buttonClassName, disabled, feedback, feedbackTimeout, align, autoAlign } = this;
    let classes = `${prefix}--copy-btn`;
    if (buttonClassName) {
      classes += ` ${buttonClassName}`;
    }
    return b`
      <cds-copy
        ?disabled=${disabled}
        ?autoalign=${autoAlign}
        feedback=${feedback}
        feedback-timeout=${feedbackTimeout}
        button-class-name=${classes}
        exportparts="button"
        align=${align}>
        ${iconLoader(_16, {
      slot: "icon",
      class: `${prefix}--snippet__icon`
    })}
        <slot slot="tooltip-content"></slot>
      </cds-copy>
    `;
  }
};
CDSCopyButton.styles = styles;
__decorate([
  n({ reflect: true, attribute: "button-class-name" })
], CDSCopyButton.prototype, "buttonClassName", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSCopyButton.prototype, "disabled", void 0);
__decorate([
  n()
], CDSCopyButton.prototype, "feedback", void 0);
__decorate([
  n({ reflect: true })
], CDSCopyButton.prototype, "align", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSCopyButton.prototype, "autoAlign", void 0);
__decorate([
  n({ type: Number, attribute: "feedback-timeout" })
], CDSCopyButton.prototype, "feedbackTimeout", void 0);
CDSCopyButton = __decorate([
  carbonElement(`${prefix}-copy-button`)
], CDSCopyButton);
