import {
  styles
} from "./chunk-K2SMH2Z3.js";
import {
  _16 as _162
} from "./chunk-BVJDLJUP.js";
import {
  _16
} from "./chunk-357XJSHN.js";
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
  i2 as i
} from "./chunk-3GZFZEMV.js";

// node_modules/@carbon/web-components/es/components/checkbox/defs.js
var CHECKBOX_ORIENTATION;
(function(CHECKBOX_ORIENTATION2) {
  CHECKBOX_ORIENTATION2["HORIZONTAL"] = "horizontal";
  CHECKBOX_ORIENTATION2["VERTICAL"] = "vertical";
})(CHECKBOX_ORIENTATION || (CHECKBOX_ORIENTATION = {}));

// node_modules/@carbon/web-components/es/components/checkbox/checkbox-group.js
var CDSCheckboxGroup = class CDSCheckboxGroup2 extends i {
  constructor() {
    super(...arguments);
    this.orientation = CHECKBOX_ORIENTATION.VERTICAL;
    this.readonly = false;
    this.warn = false;
    this.warnText = "";
    this._hasAILabel = false;
  }
  /*
   * Handles `slotchange` event.
   */
  _handleSlotChange({ target }) {
    const hasContent = target.assignedNodes().filter((elem) => elem.matches !== void 0 ? elem.matches(this.constructor.aiLabelItem) || // remove slug reference in v12
    elem.matches(this.constructor.slugItem) : false);
    this._hasAILabel = Boolean(hasContent);
    hasContent[0].setAttribute("size", "mini");
    this.requestUpdate?.();
  }
  updated(changedProperties) {
    const { selectorCheckbox } = this.constructor;
    const checkboxes = this.querySelectorAll(selectorCheckbox);
    ["disabled", "readonly", "orientation"].forEach((name) => {
      if (changedProperties.has(name)) {
        const { [name]: value } = this;
        checkboxes.forEach((elem) => {
          elem[name] = value;
        });
      }
    });
    if (changedProperties.has("invalid")) {
      const { invalid } = this;
      checkboxes.forEach((elem) => {
        if (invalid) {
          elem.setAttribute("invalid-group", "");
        } else {
          elem.removeAttribute("invalid-group");
        }
      });
    }
  }
  render() {
    const { ariaLabelledBy, disabled, helperText, invalid, invalidText, legendId, legendText, orientation, readonly, warn, warnText, _hasAILabel: hasAILabel, _handleSlotChange: handleSlotChange } = this;
    const showWarning = !readonly && !invalid && warn;
    const showHelper = !invalid && !warn;
    const checkboxGroupInstanceId = Math.random().toString(16).slice(2);
    const helperId = !helperText ? void 0 : `checkbox-group-helper-text-${checkboxGroupInstanceId}`;
    const helper = helperText ? b` <div id="${helperId}" class="${prefix}--form__helper-text">
          ${helperText}
        </div>` : null;
    const fieldsetClasses = e({
      [`${prefix}--checkbox-group`]: true,
      [`${prefix}--checkbox-group--readonly`]: readonly,
      [`${prefix}--checkbox-group--invalid`]: !readonly && invalid,
      [`${prefix}--checkbox-group--warning`]: showWarning,
      [`${prefix}--checkbox-group--slug`]: hasAILabel,
      [`${prefix}--checkbox-group--${orientation}`]: orientation === "horizontal"
    });
    return b`
      <fieldset
        class="${fieldsetClasses}"
        ?data-invalid=${invalid}
        ?disabled=${disabled}
        aria-disabled=${readonly}
        ?aria-labelledby=${ariaLabelledBy || legendId}
        ?aria-describedby=${!invalid && !warn && helper ? helperId : void 0}
        orientation=${orientation}>
        <legend class="${prefix}--label" id=${legendId || ariaLabelledBy}>
          ${legendText}
          <slot name="ai-label" @slotchange="${handleSlotChange}"></slot>
          <slot name="decorator" @slotchange="${handleSlotChange}"></slot>
          <slot name="slug" @slotchange="${handleSlotChange}"></slot>
        </legend>
        <slot></slot>
        <div class="${prefix}--checkbox-group__validation-msg">
          ${!readonly && invalid ? b`
                ${iconLoader(_16, {
      class: `${prefix}--checkbox__invalid-icon`
    })}
                <div class="${prefix}--form-requirement">${invalidText}</div>
              ` : null}
          ${showWarning ? b`
                ${iconLoader(_162, {
      class: `${prefix}--checkbox__invalid-icon ${prefix}--checkbox__invalid-icon--warning`
    })}
                <div class="${prefix}--form-requirement">${warnText}</div>
              ` : null}
        </div>
        ${showHelper ? helper : null}
      </fieldset>
    `;
  }
  /**
   * A selector that will return the checkboxes.
   */
  static get selectorCheckbox() {
    return `${prefix}-checkbox`;
  }
  /**
   * A selector that will return the slug item.
   *
   * remove in v12
   */
  static get slugItem() {
    return `${prefix}-slug`;
  }
  /**
   * A selector that will return the AI Label item.
   */
  static get aiLabelItem() {
    return `${prefix}-ai-label`;
  }
};
CDSCheckboxGroup.shadowRootOptions = Object.assign(Object.assign({}, i.shadowRootOptions), { delegatesFocus: true });
CDSCheckboxGroup.styles = styles;
__decorate([
  n({ type: String, reflect: true, attribute: "aria-labelledby" })
], CDSCheckboxGroup.prototype, "ariaLabelledBy", void 0);
__decorate([
  n({ type: Boolean })
], CDSCheckboxGroup.prototype, "disabled", void 0);
__decorate([
  n({ type: String, reflect: true, attribute: "helper-text" })
], CDSCheckboxGroup.prototype, "helperText", void 0);
__decorate([
  n({ type: Boolean, attribute: "invalid" })
], CDSCheckboxGroup.prototype, "invalid", void 0);
__decorate([
  n({ type: String, reflect: true, attribute: "invalid-text" })
], CDSCheckboxGroup.prototype, "invalidText", void 0);
__decorate([
  n({ type: String, reflect: true, attribute: "legend-id" })
], CDSCheckboxGroup.prototype, "legendId", void 0);
__decorate([
  n({ type: String, reflect: true, attribute: "legend-text" })
], CDSCheckboxGroup.prototype, "legendText", void 0);
__decorate([
  n({ type: String, reflect: true, attribute: "orientation" })
], CDSCheckboxGroup.prototype, "orientation", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSCheckboxGroup.prototype, "readonly", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSCheckboxGroup.prototype, "warn", void 0);
__decorate([
  n({ type: String, reflect: true, attribute: "warn-text" })
], CDSCheckboxGroup.prototype, "warnText", void 0);
CDSCheckboxGroup = __decorate([
  carbonElement(`${prefix}-checkbox-group`)
], CDSCheckboxGroup);

// node_modules/@carbon/web-components/es/components/checkbox/checkbox-skeleton.js
var CDSCheckboxSkeleton = class CDSCheckboxSkeleton2 extends i {
  render() {
    return b`
      <label class="${prefix}--checkbox-label" for="checkbox" part="label">
        <span class="${prefix}--checkbox-label-text ${prefix}--skeleton"
          ><slot></slot
        ></span>
      </label>
    `;
  }
};
CDSCheckboxSkeleton.styles = styles;
CDSCheckboxSkeleton = __decorate([
  carbonElement(`${prefix}-checkbox-skeleton`)
], CDSCheckboxSkeleton);
