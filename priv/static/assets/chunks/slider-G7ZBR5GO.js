import {
  styles
} from "./chunk-HWKWCXIA.js";
import "./chunk-MNFEJBUN.js";
import {
  _16 as _162
} from "./chunk-BVJDLJUP.js";
import {
  _16
} from "./chunk-357XJSHN.js";
import "./chunk-LSZ2PVLU.js";
import "./chunk-X7WRA7XG.js";
import "./chunk-HFGTZQQE.js";
import "./chunk-DFLJB7UB.js";
import "./chunk-GPZZH3QI.js";
import "./chunk-IGHLRMAE.js";
import "./chunk-5HWAKYGL.js";
import "./chunk-TGGEFEEZ.js";
import "./chunk-ML2VKJHQ.js";
import {
  iconLoader
} from "./chunk-TRPNDHDH.js";
import "./chunk-LDCWSK5M.js";
import "./chunk-TEMKX2NW.js";
import {
  o
} from "./chunk-DAFPBEYU.js";
import {
  FocusMixin
} from "./chunk-73FE5HOG.js";
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

// node_modules/@carbon/web-components/es/components/slider/slider-input.js
var CDSSliderInput = class CDSSliderInput2 extends FocusMixin(i) {
  constructor() {
    super(...arguments);
    this._max = "100";
    this._min = "0";
    this._step = "1";
    this.disabled = false;
    this.invalid = false;
    this.warn = false;
    this.hideTextInput = false;
    this.type = "number";
    this.readonly = false;
  }
  /**
   * Handles `change` event to fire a normalized custom event.
   */
  _handleChange({ target }) {
    const min = Number(this.min);
    const max = Number(this.max);
    const intermediate = this.value;
    const newValue = target.value;
    const newValueNumber = Number(newValue);
    if (newValueNumber >= min && newValueNumber <= max && newValue !== "") {
      this.value = newValueNumber;
      this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
        bubbles: true,
        composed: true,
        detail: {
          value: this.value,
          intermediate
        }
      }));
    } else {
      this.invalid = newValue === "";
      this.warn = (newValueNumber < min || newValueNumber > max) && newValue !== "";
      const intermediate2 = this.value;
      if (newValue !== "") {
        this.value = newValueNumber < min ? min : max;
      } else {
        this.value = "";
      }
      this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
        bubbles: true,
        composed: true,
        detail: {
          value: this.value,
          intermediate: intermediate2
        }
      }));
    }
  }
  /**
   * Handles `input` event to fire a normalized custom event.
   */
  _handleInput({ target }) {
    const newValue = target.value;
    if (newValue) {
      this.value = Number(newValue);
      this.invalid = false;
      if (this.value >= Number(this.min) && this.value <= Number(this.max)) {
        this.warn = false;
        this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
          bubbles: true,
          composed: true,
          detail: {
            value: this.value,
            intermediate: true
          }
        }));
      }
    }
  }
  /**
   * The maximum value.
   */
  get max() {
    return (this._max ?? "").toString();
  }
  set max(value) {
    const { max: oldMax } = this;
    this._max = value;
    this.requestUpdate("max", oldMax);
  }
  /**
   * The minimum value.
   */
  get min() {
    return (this._min ?? "").toString();
  }
  set min(value) {
    const { min: oldMin } = this;
    this._min = value;
    this.requestUpdate("min", oldMin);
  }
  /**
   * The snapping step of the value.
   */
  get step() {
    return (this._step ?? "1").toString();
  }
  set step(value) {
    const { step: oldStep } = this;
    this._step = value;
    this.requestUpdate("step", oldStep);
  }
  render() {
    const { disabled, hideTextInput, max, min, readonly, step, type, value, invalid, warn, _handleChange: handleChange, _handleInput: handleInput } = this;
    const isInteractive = !readonly && !disabled;
    const normalizedProps = {
      invalid: isInteractive && invalid,
      warn: isInteractive && !invalid && warn
    };
    const classes = e({
      [`${prefix}--text-input`]: true,
      [`${prefix}--slider-text-input`]: true,
      [`${prefix}--text-input--invalid`]: normalizedProps.invalid,
      [`${prefix}--slider-text-input--warn`]: normalizedProps.warn
    });
    const invalidIcon = iconLoader(_16, {
      class: `${prefix}--slider__invalid-icon`
    });
    const warnIcon = iconLoader(_162, {
      class: `${prefix}--slider__invalid-icon ${prefix}--slider__invalid-icon--warning`
    });
    return b`
      <input
        ?disabled="${disabled}"
        ?data-invalid="${normalizedProps.invalid}"
        type="${hideTextInput ? "hidden" : o(type)}"
        class="${classes}"
        max="${max}"
        min="${min}"
        ?readonly="${o(readonly)}"
        step="${step}"
        .value="${value}"
        @change="${handleChange}"
        @input="${handleInput}" />
      ${!hideTextInput && normalizedProps.invalid ? b`${invalidIcon}` : null}
      ${!hideTextInput && normalizedProps.warn ? b`${warnIcon}` : null}
    `;
  }
  /**
   * A selector that will return the parent slider.
   */
  static get selectorParent() {
    return `${prefix}-slider`;
  }
  /**
   * The name of the custom event fired after the value is changed by user gesture.
   */
  static get eventChange() {
    return `${prefix}-slider-input-changed`;
  }
};
CDSSliderInput.shadowRootOptions = Object.assign(Object.assign({}, i.shadowRootOptions), { delegatesFocus: true });
CDSSliderInput.styles = styles;
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSliderInput.prototype, "disabled", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSliderInput.prototype, "invalid", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSliderInput.prototype, "warn", void 0);
__decorate([
  n({ type: Boolean })
], CDSSliderInput.prototype, "hideTextInput", void 0);
__decorate([
  n({ type: Number, reflect: true })
], CDSSliderInput.prototype, "max", null);
__decorate([
  n({ type: Number, reflect: true })
], CDSSliderInput.prototype, "min", null);
__decorate([
  n({ type: Number, reflect: true })
], CDSSliderInput.prototype, "step", null);
__decorate([
  n()
], CDSSliderInput.prototype, "type", void 0);
__decorate([
  n({ type: Number })
], CDSSliderInput.prototype, "value", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSliderInput.prototype, "readonly", void 0);
CDSSliderInput = __decorate([
  carbonElement(`${prefix}-slider-input`)
], CDSSliderInput);

// node_modules/@carbon/web-components/es/components/slider/slider-skeleton.js
var CDSSliderSkeleton = class CDSSliderSkeleton2 extends i {
  constructor() {
    super(...arguments);
    this.twoHandles = false;
  }
  render() {
    const { twoHandles } = this;
    const containerClasses = e({
      [`${prefix}--slider-container`]: true,
      [`${prefix}--skeleton`]: true,
      [`${prefix}--slider-container--two-handles`]: twoHandles
    });
    const lowerThumbClasses = e({
      [`${prefix}--slider__thumb`]: true,
      [`${prefix}--slider__thumb--lower`]: twoHandles
    });
    const upperThumbClasses = e({
      [`${prefix}--slider__thumb`]: true,
      [`${prefix}--slider__thumb--upper`]: twoHandles
    });
    const lowerThumbWrapperClasses = e({
      [`${prefix}--slider__thumb-wrapper`]: true,
      [`${prefix}--slider__thumb-wrapper--lower`]: twoHandles
    });
    const upperThumbWrapperClasses = e({
      [`${prefix}--slider__thumb-wrapper`]: true,
      [`${prefix}--slider__thumb-wrapper--upper`]: twoHandles
    });
    return b`
      <span class="${prefix}--label ${prefix}--skeleton"></span>
      <div class="${containerClasses}">
        <span class="${prefix}--slider__range-label"></span>
        <div class="${prefix}--slider">
          <div class="${prefix}--slider__track"></div>
          <div class="${prefix}--slider__filled-track"></div>
          ${twoHandles ? b`
                <div class="${lowerThumbWrapperClasses}">
                  <div class="${lowerThumbClasses}">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 24"
                      class="${prefix}--slider__thumb-icon ${prefix}--slider__thumb-icon--lower">
                      <path
                        d="M15.08 6.46H16v11.08h-.92zM4.46 17.54c-.25 0-.46-.21-.46-.46V6.92a.465.465 0 0 1 .69-.4l8.77 5.08a.46.46 0 0 1 0 .8l-8.77 5.08c-.07.04-.15.06-.23.06Z"></path>
                      <path fill="none" d="M-4 0h24v24H-4z"></path>
                    </svg>
                  </div>
                </div>
              ` : b` <div class="${lowerThumbClasses}"></div> `}
          ${twoHandles ? b` <div class="${upperThumbWrapperClasses}">
                <div class="${upperThumbClasses}">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 24"
                    class="${prefix}--slider__thumb-icon ${prefix}--slider__thumb-icon--upper">
                    <path
                      d="M0 6.46h.92v11.08H0zM11.54 6.46c.25 0 .46.21.46.46v10.15a.465.465 0 0 1-.69.4L2.54 12.4a.46.46 0 0 1 0-.8l8.77-5.08c.07-.04.15-.06.23-.06Z"></path>
                    <path fill="none" d="M-4 0h24v24H-4z"></path>
                  </svg>
                </div>
              </div>` : void 0}
        </div>
        <span class="${prefix}--slider__range-label"></span>
      </div>
    `;
  }
};
CDSSliderSkeleton.styles = styles;
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSliderSkeleton.prototype, "twoHandles", void 0);
CDSSliderSkeleton = __decorate([
  carbonElement(`${prefix}-slider-skeleton`)
], CDSSliderSkeleton);
