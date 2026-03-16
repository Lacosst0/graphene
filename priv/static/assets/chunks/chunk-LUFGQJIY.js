import {
  styles
} from "./chunk-FTUPT4PI.js";
import {
  CDSTextInput$1
} from "./chunk-UBPLMH62.js";
import {
  prefix
} from "./chunk-ITCMO2MJ.js";
import {
  carbonElement
} from "./chunk-D5HOJOMG.js";
import {
  __decorate,
  b
} from "./chunk-3GZFZEMV.js";

// node_modules/@carbon/web-components/es/components/fluid-text-input/fluid-text-input.js
var CDSFluidTextInput = class CDSFluidTextInput2 extends CDSTextInput$1 {
  connectedCallback() {
    this.setAttribute("isFluid", "true");
    super.connectedCallback();
  }
  updated() {
    var _a;
    const formItem = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`.${prefix}--form-item`);
    if (formItem) {
      formItem.classList.add(`${prefix}--text-input--fluid`);
    }
  }
  render() {
    return b` ${super.render()} `;
  }
};
CDSFluidTextInput.styles = [CDSTextInput$1.styles, styles];
CDSFluidTextInput = __decorate([
  carbonElement(`${prefix}-fluid-text-input`)
], CDSFluidTextInput);
var CDSFluidTextInput$1 = CDSFluidTextInput;

export {
  CDSFluidTextInput$1
};
