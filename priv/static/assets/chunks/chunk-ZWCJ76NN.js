import {
  CDSCheckbox$1
} from "./chunk-K2SMH2Z3.js";
import {
  HostListenerMixin
} from "./chunk-TGGEFEEZ.js";
import {
  o
} from "./chunk-DAFPBEYU.js";
import {
  e as e2
} from "./chunk-YOLTZNLE.js";
import {
  e,
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
  i
} from "./chunk-3GZFZEMV.js";

// node_modules/@carbon/web-components/es/components/toggle/defs.js
var TOGGLE_SIZE;
(function(TOGGLE_SIZE2) {
  TOGGLE_SIZE2["REGULAR"] = "";
  TOGGLE_SIZE2["SMALL"] = "sm";
})(TOGGLE_SIZE || (TOGGLE_SIZE = {}));

// node_modules/@carbon/web-components/es/components/toggle/toggle.scss.js
var styles = i(['.cds--assistive-text,.cds--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--toggle{display:inline-block;-webkit-user-select:none;-moz-user-select:none;user-select:none}.cds--toggle__label-text{color:var(--cds-text-secondary,#525252);display:block;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333);margin-block-end:1rem}.cds--toggle__button{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--toggle__button:focus{outline:none}.cds--toggle__appearance{align-items:center;-moz-column-gap:.5rem;column-gap:.5rem;cursor:pointer;display:inline-grid;grid-template-columns:max-content max-content}.cds--toggle__switch{background-color:var(--cds-toggle-off,#8d8d8d);block-size:1.5rem;border-radius:.75rem;inline-size:3rem;position:relative;transition:background-color 70ms cubic-bezier(.2,0,1,.9)}.cds--toggle__switch:before{background-color:var(--cds-icon-on-color,#fff);block-size:1.125rem;border-radius:50%;content:"";inline-size:1.125rem;inset-block-start:.1875rem;inset-inline-start:.1875rem;position:absolute;transition:transform 70ms cubic-bezier(.2,0,1,.9)}@media screen and (prefers-reduced-motion:reduce){.cds--toggle__switch:before{transition:none}}.cds--toggle:not(.cds--toggle--disabled):active .cds--toggle__switch:after,.cds--toggle__button:focus+.cds--toggle__label .cds--toggle__switch:after{block-size:100%;border-radius:1rem;content:"";display:block;outline:2px solid var(--cds-focus,#0f62fe);outline-offset:1px}.cds--toggle__switch--checked{background-color:var(--cds-support-success,#24a148)}.cds--toggle__switch--checked:before{transform:translateX(1.5rem)}.cds--toggle__text{color:var(--cds-text-primary,#161616);font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857)}.cds--toggle__appearance--sm .cds--toggle__switch{block-size:1rem;inline-size:2rem}.cds--toggle__appearance--sm .cds--toggle__switch:before{block-size:.625rem;inline-size:.625rem}.cds--toggle__appearance--sm .cds--toggle__switch--checked:before{transform:translateX(1rem)}.cds--toggle__check{block-size:.3125rem;position:absolute;fill:var(--cds-support-success,#24a148);inline-size:.375rem;inset-block-start:.375rem;inset-inline-end:.3125rem;visibility:hidden}.cds--toggle__switch--checked .cds--toggle__check{visibility:visible}.cds--toggle--disabled .cds--toggle__appearance,:host(cds-toggle[disabled]) .cds--toggle__appearance{cursor:not-allowed}.cds--toggle--disabled .cds--toggle__label-text,.cds--toggle--disabled .cds--toggle__text,:host(cds-toggle[disabled]) .cds--toggle__label-text,:host(cds-toggle[disabled]) .cds--toggle__text{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--toggle--disabled .cds--toggle__switch,:host(cds-toggle[disabled]) .cds--toggle__switch{background-color:var(--cds-button-disabled,#c6c6c6)}.cds--toggle--disabled .cds--toggle__switch:before,:host(cds-toggle[disabled]) .cds--toggle__switch:before{background-color:var(--cds-icon-on-color-disabled,#8d8d8d)}.cds--toggle--disabled .cds--toggle__check,:host(cds-toggle[disabled]) .cds--toggle__check{fill:var(--cds-button-disabled,#c6c6c6)}.cds--toggle--readonly .cds--toggle__appearance,:host(cds-toggle[read-only]) .cds--toggle__appearance{cursor:default}.cds--toggle--readonly .cds--toggle__switch,:host(cds-toggle[read-only]) .cds--toggle__switch{background-color:transparent;border:1px solid var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--toggle--readonly .cds--toggle__switch:before,:host(cds-toggle[read-only]) .cds--toggle__switch:before{background-color:var(--cds-icon-primary,#161616);inset-block-start:.125rem;inset-inline-start:.125rem}.cds--toggle--readonly .cds--toggle__check,:host(cds-toggle[read-only]) .cds--toggle__check{fill:var(--cds-background,#fff);inset-block-start:.3125rem;inset-inline-end:.25rem}.cds--toggle--readonly .cds--toggle__text,:host(cds-toggle[read-only]) .cds--toggle__text{cursor:text;-webkit-user-select:text;-moz-user-select:text;user-select:text}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--toggle__switch,.cds--toggle__switch:before{outline:1px solid transparent}.cds--toggle:not(.cds--toggle--disabled):active .cds--toggle__switch,.cds--toggle__button:focus+.cds--toggle__label .cds--toggle__switch{color:Highlight;outline:1px solid Highlight}}.cds--toggle--skeleton{align-items:center;display:flex}.cds--toggle--skeleton .cds--toggle__skeleton-circle{background:var(--cds-skeleton-background,#e8e8e8);overflow:hidden;position:relative}.cds--toggle--skeleton .cds--toggle__skeleton-circle:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:200%;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--toggle--skeleton .cds--toggle__skeleton-circle:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--toggle--skeleton .cds--toggle__skeleton-circle{background:CanvasText}.cds--toggle--skeleton .cds--toggle__skeleton-circle:before{background:Canvas;forced-color-adjust:none}}.cds--toggle--skeleton .cds--toggle__skeleton-circle{block-size:1.125rem;border-radius:50%;inline-size:1.125rem}.cds--toggle--skeleton .cds--toggle__skeleton-rectangle{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--toggle--skeleton .cds--toggle__skeleton-rectangle:active,.cds--toggle--skeleton .cds--toggle__skeleton-rectangle:focus,.cds--toggle--skeleton .cds--toggle__skeleton-rectangle:hover{border:none;cursor:default;outline:none}.cds--toggle--skeleton .cds--toggle__skeleton-rectangle:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--toggle--skeleton .cds--toggle__skeleton-rectangle:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--toggle--skeleton .cds--toggle__skeleton-rectangle{background:CanvasText}.cds--toggle--skeleton .cds--toggle__skeleton-rectangle:before{background:Canvas;forced-color-adjust:none}}.cds--toggle--skeleton .cds--toggle__skeleton-rectangle{block-size:.5rem;inline-size:1.5rem;margin-inline-start:.5rem}[dir=rtl] .cds--toggle__switch--checked:before{transform:translateX(-1.5rem)}[dir=rtl] .cds--toggle__appearance--sm .cds--toggle__switch--checked:before{transform:translateX(-1rem)}:host(cds-toggle){outline:none}:host(cds-toggle) .cds--toggle__label{-webkit-user-select:none;-moz-user-select:none;user-select:none}:host(cds-toggle[enable-v12-toggle-reduced-label-spacing]) .cds--toggle__label-text{margin-block-end:.5rem}:host(cds-toggle[disabled]) .cds--toggle__appearance{cursor:not-allowed}:host(cds-toggle[read-only]) .cds--toggle__switch{border:none;box-shadow:inset 0 0 0 1px var(--cds-icon-disabled,hsla(0,0%,9%,.25))}:host(cds-toggle[read-only]) .cds--toggle__switch:before{inset-block-start:.1875rem;inset-inline-start:.1875rem}:host(cds-toggle[read-only]) .cds--toggle__check{inset-block-start:.375rem;inset-inline-end:.3125rem}:host(cds-toggle:dir(rtl)) .cds--toggle__switch--checked:before{transform:translateX(-1.5rem)}:host(cds-toggle:dir(rtl)) .cds--toggle__appearance--sm .cds--toggle__switch--checked:before{transform:translateX(-1rem)}']);

// node_modules/@carbon/web-components/es/components/toggle/toggle.js
var CDSToggle = class CDSToggle2 extends HostListenerMixin(CDSCheckbox$1) {
  constructor() {
    super(...arguments);
    this.labelA = "On";
    this.hideLabel = false;
    this.readOnly = false;
    this.size = TOGGLE_SIZE.REGULAR;
    this.labelB = "Off";
    this._externalLabels = [];
    this._onExternalLabelClick = () => {
      var _a;
      (_a = this._checkboxNode) === null || _a === void 0 ? void 0 : _a.focus();
      this._handleChange();
    };
  }
  /**
   * Handles `click` event on the `<button>` in the shadow DOM.
   */
  _handleChange() {
    const { checked } = this._checkboxNode;
    if (this.disabled || this.readOnly) {
      return;
    }
    this.toggled = !checked;
    const { eventChange } = this.constructor;
    this.dispatchEvent(new CustomEvent(eventChange, {
      bubbles: true,
      composed: true,
      detail: {
        checked: this.toggled,
        // TODO: remove in v12
        toggled: this.toggled
      }
    }));
  }
  _renderCheckmark() {
    if (this.size !== TOGGLE_SIZE.SMALL || this.readOnly == true) {
      return void 0;
    }
    return b`
      <svg
        class="${prefix}--toggle__check"
        width="6px"
        height="5px"
        viewBox="0 0 6 5">
        <path d="M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z" />
      </svg>
    `;
  }
  // TODO: remove in v12
  /**
   *
   * **Deprecated:** Use `toggled` instead.
   * The `checked` attribute will be removed in the next major version.
   */
  get _checkedAttributeAlias() {
    return this.toggled;
  }
  set _checkedAttributeAlias(v) {
    this.toggled = v;
  }
  // TODO: remove get() and set() in v12
  /**
   * Specify whether the control is toggled
   */
  get toggled() {
    return this.checked;
  }
  set toggled(v) {
    const prev = this.checked;
    const next = v;
    if (prev === next)
      return;
    this.checked = v;
    this.requestUpdate("toggled", prev);
    this.requestUpdate("_checkedAttributeAlias");
  }
  /**
   * Finds external toggle `<label>`s and attaches handlers.
   */
  _attachExternalLabels() {
    const doc = this.ownerDocument || document;
    const found = this.id ? [...doc.querySelectorAll(`label[for="${this.id}"]`)] : [];
    this._externalLabels = Array.from(new Set(found));
    this._externalLabels.forEach((lbl) => {
      lbl.addEventListener("click", this._onExternalLabelClick);
    });
  }
  connectedCallback() {
    var _a;
    (_a = super.connectedCallback) === null || _a === void 0 ? void 0 : _a.call(this);
    this._attachExternalLabels();
  }
  disconnectedCallback() {
    var _a;
    (_a = super.disconnectedCallback) === null || _a === void 0 ? void 0 : _a.call(this);
    this._externalLabels.forEach((lbl) => lbl.removeEventListener("click", this._onExternalLabelClick));
  }
  render() {
    var _a, _b;
    const { toggled, disabled, labelText, hideLabel, id, name, size, labelA, labelB, value, _handleChange: handleChange } = this;
    const inputClasses = e2({
      [`${prefix}--toggle__appearance`]: true,
      [`${prefix}--toggle__appearance--${size}`]: size
    });
    const toggleClasses = e2({
      [`${prefix}--toggle__switch`]: true,
      [`${prefix}--toggle__switch--checked`]: toggled
    });
    const labelTextClasses = e2({
      [`${prefix}--toggle__label-text`]: labelText,
      [`${prefix}--visually-hidden`]: hideLabel
    });
    let stateText = "";
    if (hideLabel) {
      stateText = labelText || "";
    } else {
      stateText = toggled ? labelA : labelB;
    }
    const labelId = id ? `${id}_label` : void 0;
    const hasLabelText = ((_a = this.labelText) !== null && _a !== void 0 ? _a : "") !== "";
    const ariaLabelledby = (_b = this.ariaLabelledby) !== null && _b !== void 0 ? _b : hasLabelText && labelId;
    return b`
      <button
        class="${prefix}--toggle__button"
        role="switch"
        type="button"
        aria-checked=${toggled}
        aria-labelledby=${o(ariaLabelledby)}
        .checked=${toggled}
        name="${o(name)}"
        value="${o(value)}"
        ?disabled=${disabled}
        id="${id}"
        @click=${handleChange}></button>
      <label for="${id}" class="${prefix}--toggle__label">
        ${labelText ? b`<span class="${labelTextClasses}">${labelText}</span>` : null}
        <div class="${inputClasses}">
          <div class="${toggleClasses}">${this._renderCheckmark()}</div>
          <span class="${prefix}--toggle__text" aria-hidden="true"
            >${stateText}</span
          >
        </div>
      </label>
    `;
  }
  /**
   * The name of the custom event fired after this changebox changes its toggled state.
   */
  static get eventChange() {
    return `${prefix}-toggle-changed`;
  }
};
CDSToggle.styles = styles;
__decorate([
  e("button")
], CDSToggle.prototype, "_checkboxNode", void 0);
__decorate([
  n({ type: Boolean, attribute: "checked", reflect: true })
], CDSToggle.prototype, "_checkedAttributeAlias", null);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSToggle.prototype, "toggled", null);
__decorate([
  n({ type: String, attribute: "aria-labelledby" })
], CDSToggle.prototype, "ariaLabelledby", void 0);
__decorate([
  n({ attribute: "label-a" })
], CDSToggle.prototype, "labelA", void 0);
__decorate([
  n({ reflect: true, type: Boolean })
], CDSToggle.prototype, "hideLabel", void 0);
__decorate([
  n({ reflect: true, attribute: "read-only", type: Boolean })
], CDSToggle.prototype, "readOnly", void 0);
__decorate([
  n({ reflect: true })
], CDSToggle.prototype, "size", void 0);
__decorate([
  n({ attribute: "label-b" })
], CDSToggle.prototype, "labelB", void 0);
CDSToggle = __decorate([
  carbonElement(`${prefix}-toggle`)
], CDSToggle);
var CDSToggle$1 = CDSToggle;

export {
  TOGGLE_SIZE,
  styles,
  CDSToggle$1
};
