import "./chunk-G6XRCS4G.js";
import "./chunk-EZLN5Q4T.js";
import {
  CDSSearch$1
} from "./chunk-M2QWFF2O.js";
import {
  INPUT_SIZE
} from "./chunk-UBPLMH62.js";
import "./chunk-2G6ZGNK6.js";
import "./chunk-MCK3EHK6.js";
import "./chunk-KIDXGIQH.js";
import "./chunk-K2SMH2Z3.js";
import "./chunk-MNFEJBUN.js";
import "./chunk-BVJDLJUP.js";
import "./chunk-357XJSHN.js";
import "./chunk-XALNULML.js";
import "./chunk-KDBKJKDV.js";
import {
  _16
} from "./chunk-ZXB2XXTS.js";
import {
  forEach
} from "./chunk-3QPROXNA.js";
import "./chunk-YGK4BVA2.js";
import {
  HostListener
} from "./chunk-5HWAKYGL.js";
import {
  HostListenerMixin
} from "./chunk-TGGEFEEZ.js";
import "./chunk-ML2VKJHQ.js";
import {
  iconLoader
} from "./chunk-TRPNDHDH.js";
import "./chunk-LDCWSK5M.js";
import "./chunk-TEMKX2NW.js";
import "./chunk-DAFPBEYU.js";
import {
  FocusMixin
} from "./chunk-73FE5HOG.js";
import {
  e as e2
} from "./chunk-YOLTZNLE.js";
import "./chunk-M2VBID3H.js";
import {
  e,
  n,
  r
} from "./chunk-V6ENGPT2.js";
import {
  prefix
} from "./chunk-ITCMO2MJ.js";
import {
  carbonElement
} from "./chunk-D5HOJOMG.js";
import {
  A,
  __decorate,
  b,
  i,
  i2
} from "./chunk-3GZFZEMV.js";
import "./chunk-G6EI4S4W.js";

// node_modules/@carbon/web-components/es/components/data-table/defs.js
var TABLE_SIZE;
(function(TABLE_SIZE2) {
  TABLE_SIZE2["XS"] = "xs";
  TABLE_SIZE2["SM"] = "sm";
  TABLE_SIZE2["MD"] = "md";
  TABLE_SIZE2["LG"] = "lg";
  TABLE_SIZE2["XL"] = "xl";
})(TABLE_SIZE || (TABLE_SIZE = {}));
var TABLE_SORT_DIRECTION;
(function(TABLE_SORT_DIRECTION2) {
  TABLE_SORT_DIRECTION2["NONE"] = "none";
  TABLE_SORT_DIRECTION2["ASCENDING"] = "ascending";
  TABLE_SORT_DIRECTION2["DESCENDING"] = "descending";
})(TABLE_SORT_DIRECTION || (TABLE_SORT_DIRECTION = {}));
var TABLE_SORT_CYCLE;
(function(TABLE_SORT_CYCLE2) {
  TABLE_SORT_CYCLE2["BI_STATES_FROM_ASCENDING"] = "bi-states-from-ascending";
  TABLE_SORT_CYCLE2["BI_STATES_FROM_DESCENDING"] = "bi-states-from-descending";
  TABLE_SORT_CYCLE2["TRI_STATES_FROM_ASCENDING"] = "tri-states-from-ascending";
  TABLE_SORT_CYCLE2["TRI_STATES_FROM_DESCENDING"] = "tri-states-from-descending";
})(TABLE_SORT_CYCLE || (TABLE_SORT_CYCLE = {}));
var TABLE_SORT_CYCLES = {
  [TABLE_SORT_CYCLE.BI_STATES_FROM_ASCENDING]: [
    TABLE_SORT_DIRECTION.ASCENDING,
    TABLE_SORT_DIRECTION.DESCENDING
  ],
  [TABLE_SORT_CYCLE.BI_STATES_FROM_DESCENDING]: [
    TABLE_SORT_DIRECTION.DESCENDING,
    TABLE_SORT_DIRECTION.ASCENDING
  ],
  [TABLE_SORT_CYCLE.TRI_STATES_FROM_ASCENDING]: [
    TABLE_SORT_DIRECTION.NONE,
    TABLE_SORT_DIRECTION.ASCENDING,
    TABLE_SORT_DIRECTION.DESCENDING
  ],
  [TABLE_SORT_CYCLE.TRI_STATES_FROM_DESCENDING]: [
    TABLE_SORT_DIRECTION.NONE,
    TABLE_SORT_DIRECTION.DESCENDING,
    TABLE_SORT_DIRECTION.ASCENDING
  ]
};

// node_modules/@carbon/web-components/es/components/data-table/data-table.scss.js
var styles = i(['@charset "UTF-8";.cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-background:var(--cds-layer-background-01,#fff);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-background:var(--cds-layer-background-02,#f4f4f4);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-background:var(--cds-layer-background-03,#fff);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}.cds--layer-one.cds--layer__with-background,.cds--layer-three.cds--layer__with-background,.cds--layer-two.cds--layer__with-background{background-color:var(--cds-layer-background)}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}input:-webkit-autofill,input:-webkit-autofill:focus,input:-webkit-autofill:hover,textarea:-webkit-autofill,textarea:-webkit-autofill:focus,textarea:-webkit-autofill:hover{box-shadow:0 0 0 1000px var(--cds-field) inset;-webkit-text-fill-color:var(--cds-text-primary,#161616)}.cds--fieldset{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--fieldset *,.cds--fieldset :after,.cds--fieldset :before{box-sizing:inherit}.cds--form-item{align-items:flex-start;display:flex;flex:1 1 auto;flex-direction:column;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--label html{font-size:100%}.cds--label body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--label code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--label strong{font-weight:600}.cds--label{color:var(--cds-text-secondary,#525252);display:inline-block;font-weight:var(--cds-label-01-font-weight,400);font-weight:400;line-height:var(--cds-label-01-line-height,1.33333);line-height:1rem;margin-block-end:.5rem;vertical-align:baseline}.cds--label,.cds--label .cds--toggletip-label{font-size:var(--cds-label-01-font-size,.75rem);letter-spacing:var(--cds-label-01-letter-spacing,.32px)}.cds--label .cds--toggletip-label{font-weight:var(--cds-label-01-font-weight,400);line-height:var(--cds-label-01-line-height,1.33333)}.cds--label--no-margin{margin-block-end:0}.cds--label+.cds--tooltip{inset-block-start:.2rem;inset-inline-start:.5rem;position:relative}.cds--label+.cds--tooltip .cds--tooltip__trigger{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--label+.cds--tooltip .cds--tooltip__trigger *,.cds--label+.cds--tooltip .cds--tooltip__trigger :after,.cds--label+.cds--tooltip .cds--tooltip__trigger :before{box-sizing:inherit}.cds--label+.cds--tooltip .cds--tooltip__trigger::-moz-focus-inner{border:0}.cds--label+.cds--tooltip .cds--tooltip__trigger{align-items:center;display:flex;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);justify-content:center;letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}.cds--label+.cds--tooltip .cds--tooltip__trigger:focus{outline:1px solid var(--cds-focus,#0f62fe)}.cds--label+.cds--tooltip .cds--tooltip__trigger svg{fill:var(--cds-icon-secondary,#525252)}.cds--label+.cds--tooltip .cds--tooltip__trigger svg :hover{fill:var(--cds-icon-primary,#161616)}.cds--label+.cds--toggletip{inset-block-start:.2rem;inset-inline-start:.5rem}.cds--label.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--label.cds--skeleton:active,.cds--label.cds--skeleton:focus,.cds--label.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--label.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--label.cds--skeleton:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--label.cds--skeleton{background:CanvasText}.cds--label.cds--skeleton:before{background:Canvas;forced-color-adjust:none}}.cds--label.cds--skeleton{block-size:.875rem;inline-size:4.6875rem}input[type=number],input[type=text].cds--number{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif}.cds--combo-box[data-invalid]:not(.cds--multi-select--selected) .cds--text-input:not(:focus),.cds--list-box[data-invalid]:not(.cds--multi-select--invalid--focused,.cds--combo-box--invalid--focused),.cds--number[data-invalid] input[type=number]:not(:focus),.cds--number[data-invalid] input[type=text]:not(:focus),.cds--select-input__wrapper[data-invalid] .cds--select-input:not(:focus),.cds--text-area__wrapper[data-invalid]>.cds--text-area--invalid:not(:focus),.cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline:2px solid var(--cds-support-error,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.cds--combo-box[data-invalid]:not(.cds--multi-select--selected) .cds--text-input:not(:focus),.cds--list-box[data-invalid]:not(.cds--multi-select--invalid--focused,.cds--combo-box--invalid--focused),.cds--number[data-invalid] input[type=number]:not(:focus),.cds--number[data-invalid] input[type=text]:not(:focus),.cds--select-input__wrapper[data-invalid] .cds--select-input:not(:focus),.cds--text-area__wrapper[data-invalid]>.cds--text-area--invalid:not(:focus),.cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline-style:dotted}}.cds--date-picker-input__wrapper--invalid~.cds--form-requirement,.cds--date-picker-input__wrapper--warn~.cds--form-requirement,.cds--date-picker-input__wrapper~.cds--form-requirement,.cds--list-box--warning~.cds--form-requirement,.cds--list-box[data-invalid]~.cds--form-requirement,.cds--number[data-invalid] .cds--number__input-wrapper~.cds--form-requirement,.cds--number__input-wrapper--warning~.cds--form-requirement,.cds--select--warning .cds--select-input__wrapper~.cds--form-requirement,.cds--select-input__wrapper[data-invalid]~.cds--form-requirement,.cds--text-area__wrapper--warn~.cds--form-requirement,.cds--text-area__wrapper[data-invalid]~.cds--form-requirement,.cds--text-input__field-wrapper--warning>.cds--text-input~.cds--form-requirement,.cds--text-input__field-wrapper--warning~.cds--form-requirement,.cds--text-input__field-wrapper[data-invalid]~.cds--form-requirement,.cds--time-picker--invalid~.cds--form-requirement,.cds--time-picker--warning~.cds--form-requirement,.cds--time-picker[data-invalid]~.cds--form-requirement,input[data-invalid]~.cds--form-requirement{display:block;font-weight:400;max-block-size:12.5rem;overflow:visible}.cds--select--inline.cds--select--warning .cds--select-input--inline__wrapper~.cds--form-requirement,.cds--select-input--inline__wrapper[data-invalid]~.cds--form-requirement{display:inline-flex;inline-size:100%;margin:0;margin-block-end:0;max-block-size:100%;overflow:visible;padding-inline-start:.5rem}.cds--date-picker-input__wrapper--invalid~.cds--form-requirement,.cds--date-picker-input__wrapper~.cds--form-requirement,.cds--list-box[data-invalid]~.cds--form-requirement,.cds--number[data-invalid] .cds--number__input-wrapper~.cds--form-requirement,.cds--select-input--inline__wrapper[data-invalid]~.cds--form-requirement,.cds--select-input__wrapper[data-invalid]~.cds--form-requirement,.cds--text-area__wrapper[data-invalid]~.cds--form-requirement,.cds--text-input__field-wrapper[data-invalid]~.cds--form-requirement,.cds--time-picker--invalid~.cds--form-requirement,.cds--time-picker[data-invalid]~.cds--form-requirement,input[data-invalid]~.cds--form-requirement{color:var(--cds-text-error,#da1e28)}.cds--form--fluid .cds--text-input__field-wrapper--warning,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]{display:block}.cds--form--fluid input[data-invalid]{outline:none}.cds--form--fluid .cds--form-requirement{margin:0;padding:.5rem 2.5rem .5rem 1rem}input:not(output,[data-invalid]):-moz-ui-invalid{box-shadow:none}.cds--form-requirement html{font-size:100%}.cds--form-requirement body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--form-requirement code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--form-requirement strong{font-weight:600}.cds--form-requirement{display:none;font-size:var(--cds-helper-text-01-font-size,.75rem);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333);margin:.25rem 0 0;max-block-size:0;overflow:hidden}.cds--select--inline .cds--form__helper-text{margin-block-start:0}.cds--form__helper-text{color:var(--cds-text-helper,#6f6f6f);font-size:var(--cds-helper-text-01-font-size,.75rem);inline-size:100%;letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333);margin-block-start:.25rem;opacity:1;z-index:0}.cds--form__helper-text--disabled,.cds--label--disabled,fieldset[disabled] .cds--form__helper-text,fieldset[disabled] .cds--label{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--assistive-text,.cds--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--checkbox-group{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--checkbox-group *,.cds--checkbox-group :after,.cds--checkbox-group :before{box-sizing:inherit}.cds--form-item.cds--checkbox-wrapper{margin-block-end:.375rem;position:relative}.cds--form-item.cds--checkbox-wrapper:first-of-type{margin-block-start:0}.cds--label+.cds--form-item.cds--checkbox-wrapper{margin-block-start:-.125rem}.cds--form-item.cds--checkbox-wrapper:last-of-type{margin-block-end:.1875rem}.cds--checkbox{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;inset-block-start:1.25rem;inset-inline-start:.7rem;visibility:inherit;white-space:nowrap}.cds--checkbox-label html{font-size:100%}.cds--checkbox-label body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--checkbox-label code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--checkbox-label strong{font-weight:600}.cds--checkbox-label{cursor:pointer;display:flex;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);min-block-size:1.25rem;padding-block-start:.0625rem;padding-inline-start:1.25rem;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none}.cds--checkbox-label-text{padding-inline-start:.625rem}.cds--checkbox-label:after,.cds--checkbox-label:before{box-sizing:border-box}@media print{.cds--checkbox-label:after,.cds--checkbox-label:before{-webkit-print-color-adjust:exact;print-color-adjust:exact}}.cds--checkbox-label:before{border:1px solid var(--cds-icon-primary,#161616);border-radius:2px;position:absolute}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--checkbox-label:before{border:1px solid ButtonBorder}}.cds--checkbox-label:before{background-color:transparent;block-size:1rem;content:"";inline-size:1rem;inset-block-start:.125rem;inset-inline-start:0;margin-block:.0625rem .125rem;margin-inline:.1875rem 0}.cds--checkbox-label:after{background:none;block-size:.3125rem;border-block-end:1.5px solid var(--cds-icon-inverse,#fff);border-inline-start:1.5px solid var(--cds-icon-inverse,#fff);content:"";inline-size:.5625rem;inset-block-start:.40625rem;inset-inline-start:.4375rem;margin-block-start:-.1875rem;position:absolute;transform:scale(0) rotate(-45deg);transform-origin:bottom right}.cds--checkbox-label[data-contained-checkbox-state=true]:before,.cds--checkbox:checked+.cds--checkbox-label:before,.cds--checkbox:indeterminate+.cds--checkbox-label:before{background-color:var(--cds-icon-primary,#161616);border:1px}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--checkbox-label[data-contained-checkbox-state=true]:before,.cds--checkbox:checked+.cds--checkbox-label:before,.cds--checkbox:indeterminate+.cds--checkbox-label:before{background-color:SelectedItem;border:1px solid ButtonBorder}}.cds--checkbox-label[data-contained-checkbox-state=true]:after,.cds--checkbox:checked+.cds--checkbox-label:after{transform:scale(1) rotate(-45deg)}.cds--checkbox:indeterminate+.cds--checkbox-label:after{border-block-end:2px solid var(--cds-icon-inverse,#fff);border-inline-start:0 solid var(--cds-icon-inverse,#fff);inline-size:.5rem;inset-block-start:.6875rem;transform:scale(1) rotate(0deg)}.cds--checkbox-label[data-contained-checkbox-state=true].cds--checkbox-label__focus:before,.cds--checkbox-label__focus:before,.cds--checkbox:checked:focus+.cds--checkbox-label:before,.cds--checkbox:focus+.cds--checkbox-label:before,.cds--checkbox:indeterminate:focus+.cds--checkbox-label:before{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:1px}.cds--checkbox-label[data-contained-checkbox-disabled=true],.cds--checkbox:disabled+.cds--checkbox-label{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed}.cds--checkbox-label[data-contained-checkbox-disabled=true]:before,.cds--checkbox:disabled+.cds--checkbox-label:before{border-color:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--checkbox-label[data-contained-checkbox-state=true][data-contained-checkbox-disabled=true]:before,.cds--checkbox:checked:disabled+.cds--checkbox-label:before,.cds--checkbox:indeterminate:disabled+.cds--checkbox-label:before{background-color:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--checkbox-group[data-invalid] .cds--checkbox-label:before,.cds--checkbox-wrapper--invalid .cds--checkbox-label:before,.cds--checkbox-wrapper--invalid .cds--checkbox:checked+.cds--checkbox-label:before{border:1px solid var(--cds-support-error,#da1e28)}.cds--checkbox-group .cds--checkbox-wrapper--invalid>.cds--checkbox__validation-msg,.cds--checkbox-group .cds--checkbox-wrapper--warning>.cds--checkbox__validation-msg,.cds--checkbox-group .cds--checkbox-wrapper>.cds--form__helper-text{display:none}.cds--checkbox-group:not(.cds--checkbox-group[data-invalid]) .cds--checkbox-wrapper--invalid .cds--checkbox-label:before,.cds--checkbox-group:not(.cds--checkbox-group[data-invalid]) .cds--checkbox-wrapper--invalid .cds--checkbox:checked+.cds--checkbox-label:before{border:1px solid var(--cds-icon-primary,#161616)}.cds--checkbox-group__validation-msg,.cds--checkbox__validation-msg{align-items:flex-start;display:none;inline-size:100%;margin-block-start:.25rem}.cds--checkbox__invalid-icon{margin:.0625rem .0625rem 0 .1875rem;fill:var(--cds-support-error,#da1e28);min-inline-size:1rem}.cds--checkbox__invalid-icon--warning{fill:var(--cds-support-warning,#f1c21b)}.cds--checkbox__invalid-icon--warning path:first-of-type{fill:#000}.cds--checkbox-group--invalid .cds--checkbox-group__validation-msg,.cds--checkbox-group--warning .cds--checkbox-group__validation-msg,.cds--checkbox-wrapper--invalid>.cds--checkbox__validation-msg,.cds--checkbox-wrapper--warning>.cds--checkbox__validation-msg{display:flex}.cds--checkbox-group--invalid .cds--checkbox-group__validation-msg .cds--form-requirement,.cds--checkbox-group--warning .cds--checkbox-group__validation-msg .cds--form-requirement,.cds--checkbox-wrapper--invalid .cds--checkbox__validation-msg .cds--form-requirement,.cds--checkbox-wrapper--warning .cds--checkbox__validation-msg .cds--form-requirement{display:block;margin-block-start:0;margin-inline-start:.5rem;max-block-size:100%;overflow:visible}.cds--checkbox-group--invalid .cds--checkbox-group__validation-msg .cds--form-requirement,.cds--checkbox-wrapper--invalid .cds--checkbox__validation-msg .cds--form-requirement{color:var(--cds-text-error,#da1e28)}.cds--checkbox-group--readonly .cds--checkbox-label,.cds--checkbox-wrapper--readonly .cds--checkbox-label{cursor:default}.cds--checkbox-group--readonly .cds--checkbox-label-text,.cds--checkbox-wrapper--readonly .cds--checkbox-label-text{cursor:text;-webkit-user-select:text;-moz-user-select:text;user-select:text}.cds--checkbox-group--readonly .cds--checkbox+.cds--checkbox-label:before,.cds--checkbox-wrapper--readonly .cds--checkbox+.cds--checkbox-label:before{border-color:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--checkbox-group--readonly .cds--checkbox:checked+.cds--checkbox-label:before,.cds--checkbox-wrapper--readonly .cds--checkbox:checked+.cds--checkbox-label:before{background:transparent;border:1px solid var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--checkbox-group--readonly .cds--checkbox:checked+.cds--checkbox-label:after,.cds--checkbox-wrapper--readonly .cds--checkbox:checked+.cds--checkbox-label:after{border-color:var(--cds-text-primary,#161616)}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--checkbox-group--readonly .cds--checkbox:checked+.cds--checkbox-label:after,.cds--checkbox-wrapper--readonly .cds--checkbox:checked+.cds--checkbox-label:after{fill:SelectedItemText}}.cds--checkbox-skeleton .cds--checkbox-label{cursor:default}.cds--checkbox-label-text.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--checkbox-label-text.cds--skeleton:active,.cds--checkbox-label-text.cds--skeleton:focus,.cds--checkbox-label-text.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--checkbox-label-text.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--checkbox-label-text.cds--skeleton:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--checkbox-label-text.cds--skeleton{background:CanvasText}.cds--checkbox-label-text.cds--skeleton:before{background:Canvas;forced-color-adjust:none}}.cds--checkbox-label-text.cds--skeleton{block-size:1rem;inline-size:6.25rem;margin-block:.0625rem 0;margin-inline:.375rem 0}.cds--checkbox--inline{position:relative}[dir=rtl] .cds--checkbox-label:after{margin-block-start:0;margin-inline-start:-.0625rem;transform-origin:center}[dir=rtl] .cds--checkbox-label[data-contained-checkbox-state=true]:after,[dir=rtl] .cds--checkbox:checked+.cds--checkbox-label:after{transform:scale(1.2) rotate3d(.5,1,0,158deg)}.cds--checkbox-group--decorator legend.cds--label,.cds--checkbox-group--slug legend.cds--label,.cds--checkbox-wrapper--decorator .cds--checkbox-label-text,.cds--checkbox-wrapper--slug .cds--checkbox-label-text{display:flex}.cds--checkbox-group--decorator legend.cds--label .cds--checkbox-group-inner--decorator>*,.cds--checkbox-group--slug legend.cds--label .cds--ai-label,.cds--checkbox-group--slug legend.cds--label .cds--slug,.cds--checkbox-wrapper--decorator .cds--checkbox-label-text .cds--checkbox-wrapper-inner--decorator>*,.cds--checkbox-wrapper--slug .cds--checkbox-label-text .cds--ai-label,.cds--checkbox-wrapper--slug .cds--checkbox-label-text .cds--slug{margin-inline-start:.5rem}.cds--checkbox-wrapper--decorator .cds--checkbox-label-text .cds--ai-label__button--inline,.cds--checkbox-wrapper--slug .cds--checkbox-label-text .cds--ai-label__button--inline,.cds--checkbox-wrapper--slug .cds--checkbox-label-text .cds--slug__button--inline{line-height:inherit;margin-block-start:-.0625rem}.cds--checkbox-group--horizontal{display:flex;flex-flow:row wrap;justify-content:flex-start;position:relative}.cds--checkbox-group--horizontal .cds--form-item{flex:none;margin-block-end:0}.cds--checkbox-group--horizontal .cds--form-item:not(:last-of-type){margin-inline-end:1rem}.cds--checkbox-group--horizontal .cds--checkbox-label-text{padding-inline-start:.5rem}.cds--checkbox-group--horizontal .cds--label+.cds--form-item.cds--checkbox-wrapper{margin-block-start:0}.cds--radio-button-group{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--radio-button-group *,.cds--radio-button-group :after,.cds--radio-button-group :before{box-sizing:inherit}.cds--radio-button-group{align-items:center;display:flex;position:relative}.cds--label+.cds--form-item .cds--radio-button-group{margin-block-start:0}.cds--radio-button-group--vertical{align-items:flex-start;flex-direction:column}.cds--radio-button-group--vertical.cds--radio-button-group--label-left{align-items:flex-end}.cds--radio-button-group--vertical .cds--radio-button__label{margin-inline-end:0}.cds--radio-button-group--vertical .cds--radio-button__label:not(:last-of-type){margin-block-end:.5rem}.cds--radio-button{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;margin-block-start:.9rem;margin-inline-start:.63rem;visibility:inherit;white-space:nowrap}.cds--radio-button__label{align-items:center;cursor:pointer;display:flex;margin-inline-end:1rem}.cds--radio-button__label-text{flex:1;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--radio-button__appearance{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--radio-button__appearance *,.cds--radio-button__appearance :after,.cds--radio-button__appearance :before{box-sizing:inherit}.cds--radio-button__appearance{background-color:transparent;block-size:1.125rem;border:1px solid var(--cds-icon-primary,#161616);border-radius:50%;flex-shrink:0;inline-size:1.125rem;margin-block:.0625rem .125rem;margin-inline:.125rem .625rem}.cds--radio-button-group--vertical .cds--radio-button__appearance{margin-block:0}.cds--radio-button:checked+.cds--radio-button__label .cds--radio-button__appearance{align-items:center;border-color:var(--cds-icon-primary,#161616);display:flex;justify-content:center}.cds--radio-button:checked+.cds--radio-button__label .cds--radio-button__appearance:before{background-color:var(--cds-icon-primary,#161616);block-size:100%;border-radius:50%;content:"";display:inline-block;inline-size:100%;position:relative;transform:scale(.5)}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--radio-button:checked+.cds--radio-button__label .cds--radio-button__appearance:before{background-color:ButtonText}}@media print{.cds--radio-button:checked+.cds--radio-button__label .cds--radio-button__appearance:before{-webkit-print-color-adjust:exact;print-color-adjust:exact}}.cds--radio-button:disabled+.cds--radio-button__label{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed}.cds--radio-button:disabled+.cds--radio-button__label .cds--radio-button__appearance,.cds--radio-button:disabled:checked+.cds--radio-button__label .cds--radio-button__appearance{border-color:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--radio-button:disabled+.cds--radio-button__label .cds--radio-button__appearance:before,.cds--radio-button:disabled:checked+.cds--radio-button__label .cds--radio-button__appearance:before{background-color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--radio-button-group--readonly .cds--radio-button+.cds--radio-button__label .cds--radio-button__appearance{border-color:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--radio-button-group--readonly .cds--radio-button__label{cursor:default}.cds--radio-button-group--readonly .cds--radio-button__label-text{cursor:text;-webkit-user-select:text;-moz-user-select:text;user-select:text}.cds--radio-button-group--invalid .cds--radio-button+.cds--radio-button__label .cds--radio-button__appearance{border-color:var(--cds-support-error,#da1e28)}.cds--radio-button__validation-msg{align-items:flex-end;display:none;margin-block-start:.375rem}.cds--radio-button__invalid-icon{fill:var(--cds-support-error,#da1e28);margin-inline:.1875rem .0625rem}.cds--radio-button__invalid-icon--warning{fill:var(--cds-support-warning,#f1c21b)}.cds--radio-button__invalid-icon--warning path:first-of-type{fill:#000}.cds--radio-button-group--invalid+.cds--radio-button__validation-msg,.cds--radio-button-group--warning+.cds--radio-button__validation-msg{display:flex}.cds--radio-button-group--invalid+.cds--radio-button__validation-msg .cds--form-requirement,.cds--radio-button-group--warning+.cds--radio-button__validation-msg .cds--form-requirement{display:block;margin-block-start:0;margin-inline-start:.5rem;max-block-size:100%;overflow:visible}.cds--radio-button-group--invalid+.cds--radio-button__validation-msg .cds--form-requirement{color:var(--cds-text-error,#da1e28)}.cds--radio-button-group~.cds--form__helper-text{margin-block-start:.375rem}.cds--radio-button:focus+.cds--radio-button__label .cds--radio-button__appearance{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:1.5px}.cds--radio-button__label.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--radio-button__label.cds--skeleton:active,.cds--radio-button__label.cds--skeleton:focus,.cds--radio-button__label.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--radio-button__label.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--radio-button__label.cds--skeleton:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--radio-button__label.cds--skeleton{background:CanvasText}.cds--radio-button__label.cds--skeleton:before{background:Canvas;forced-color-adjust:none}}.cds--radio-button__label.cds--skeleton{block-size:1.125rem;inline-size:6.25rem}.cds--radio-button__label.cds--skeleton .cds--radio-button__appearance{display:none}.cds--radio-button-wrapper .cds--radio-button__label{align-items:flex-start;display:flex;justify-content:center;margin:0}.cds--radio-button-wrapper:not(:last-of-type){margin-inline-end:1rem}.cds--radio-button-group--vertical .cds--radio-button-wrapper{margin-block-end:.375rem;margin-inline-end:0}.cds--radio-button-group--vertical .cds--radio-button-wrapper .cds--radio-button__label{padding-block-start:.125rem}.cds--radio-button-group--label-right .cds--radio-button__label,.cds--radio-button-wrapper.cds--radio-button-wrapper--label-right .cds--radio-button__label{flex-direction:row}.cds--radio-button-group--label-left .cds--radio-button__label,.cds--radio-button-wrapper.cds--radio-button-wrapper--label-left .cds--radio-button__label{flex-direction:row-reverse}.cds--radio-button-group--label-left .cds--radio-button__appearance,.cds--radio-button-wrapper.cds--radio-button-wrapper--label-left .cds--radio-button__appearance{margin-inline:.5rem 0}.cds--radio-button-group--decorator legend.cds--label,.cds--radio-button-group--slug legend.cds--label,.cds--radio-button-wrapper--decorator .cds--radio-button__label-text,.cds--radio-button-wrapper--slug .cds--radio-button__label-text{display:flex}.cds--radio-button-group--decorator legend.cds--label .cds--radio-button-group-inner--decorator>*,.cds--radio-button-group--slug legend.cds--label .cds--ai-label,.cds--radio-button-group--slug legend.cds--label .cds--slug,.cds--radio-button-wrapper--decorator .cds--radio-button__label-text .cds--radio-button-wrapper-inner--decorator>*,.cds--radio-button-wrapper--slug .cds--radio-button__label-text .cds--ai-label,.cds--radio-button-wrapper--slug .cds--radio-button__label-text .cds--slug{margin-inline-start:.5rem}.cds--radio-button-wrapper--decorator .cds--radio-button__label-text .cds--ai-label__button--inline,.cds--radio-button-wrapper--slug .cds--radio-button__label-text .cds--ai-label__button--inline,.cds--radio-button-wrapper--slug .cds--radio-button__label-text .cds--slug__button--inline{line-height:inherit;margin-block-start:-.0625rem}.cds--data-table-container{padding-block-start:.125rem;position:relative}.cds--data-table-content{display:block;overflow-x:auto}.cds--data-table-content:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--data-table-content:focus{outline-style:dotted}}.cds--data-table-container--ai-enabled{border:none;padding:1px;position:relative}.cds--data-table-container--ai-enabled:after{background-image:linear-gradient(to top,var(--cds-ai-border-end,#78a9ff),var(--cds-ai-border-start,rgba(166,200,255,.64)));block-size:100%;content:"";inline-size:100%;inset:0;pointer-events:none;position:absolute;z-index:-1}.cds--data-table-container--ai-enabled tbody{position:relative}.cds--data-table-container--ai-enabled tbody:before{background:linear-gradient(to top,var(--cds-ai-aura-start,rgba(69,137,255,.1)) 0,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%,transparent 50%);block-size:100%;content:"";inline-size:100%;inset:0;pointer-events:none;position:absolute}.cds--data-table-header{background-color:var(--cds-layer);padding-block:1rem 1.5rem;padding-inline:1rem}.cds--data-table-header.cds--data-table-header__with-decorator{display:flex;justify-content:space-between}.cds--data-table-header.cds--data-table-header__with-decorator.cds--data-table-header__with-decorator--standalone{justify-content:flex-end}.cds--data-table-header__title,:host(cds-table-header-title){color:var(--cds-text-primary,#161616);font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4)}.cds--data-table-header__description,:host(cds-table-header-description){color:var(--cds-text-secondary,#525252);font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}@media (min-width:42rem){.cds--data-table-header__description,:host(cds-table-header-description){max-inline-size:50ch}}@media (min-width:66rem){.cds--data-table-header__description,:host(cds-table-header-description){max-inline-size:80ch}}.cds--data-table,:host(cds-table){border-collapse:collapse;border-spacing:0;inline-size:100%}.cds--data-table thead,:host(cds-table) thead{background-color:var(--cds-layer-accent);font-size:var(--cds-heading-compact-01-font-size,.875rem);font-weight:var(--cds-heading-compact-01-font-weight,600);letter-spacing:var(--cds-heading-compact-01-letter-spacing,.16px);line-height:var(--cds-heading-compact-01-line-height,1.28572)}.cds--data-table tbody,:host(cds-table) tbody{background-color:var(--cds-layer);font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);inline-size:100%;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--data-table tr,:host(cds-table) tr{block-size:3rem;border:none;inline-size:100%}.cds--data-table tbody tr,.cds--data-table tbody tr td,.cds--data-table tbody tr th,:host(cds-table) tbody tr,:host(cds-table) tbody tr td,:host(cds-table) tbody tr th{transition:background-color 70ms cubic-bezier(0,0,.38,.9)}.cds--data-table tbody tr:not([data-child-row]):hover,.cds--data-table tbody tr[data-child-row]:hover>td,:host(cds-table) tbody tr:not([data-child-row]):hover,:host(cds-table) tbody tr[data-child-row]:hover>td{background-color:var(--cds-layer-hover)}.cds--data-table tbody tr:hover td,.cds--data-table tbody tr:hover th,:host(cds-table) tbody tr:hover td,:host(cds-table) tbody tr:hover th{border-block-end:1px solid var(--cds-layer-hover);border-block-start:1px solid var(--cds-layer-hover);color:var(--cds-text-primary,#161616)}.cds--data-table tr:hover .cds--link:not(.cds--popover-container .cds--link),:host(cds-table) tr:hover .cds--link:not(.cds--popover-container .cds--link){color:var(--cds-link-secondary,#0043ce)}.cds--data-table tr:hover .cds--link--disabled:not(.cds--popover-container .cds--link),:host(cds-table) tr:hover .cds--link--disabled:not(.cds--popover-container .cds--link){color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--data-table td,.cds--data-table th,:host(cds-table) td,:host(cds-table) th{text-align:start;vertical-align:middle}.cds--data-table.cds--data-table--top-aligned-body.cds--data-table--lg tr:not([data-child-row]) td:not(.cds--table-expand){padding-block:1rem 1rem}.cds--data-table.cds--data-table--top-aligned-body.cds--data-table--lg tr:not([data-child-row]) td:not(.cds--table-expand).cds--table-column-menu{padding-block-start:.5rem}.cds--data-table.cds--data-table--top-aligned-body.cds--data-table--lg tr:not([data-child-row]) td:not(.cds--table-expand).cds--table-column-checkbox:not(.cds--table-column-radio){padding-block-start:.8125rem}.cds--data-table.cds--data-table--top-aligned-body td{vertical-align:top}.cds--data-table.cds--data-table--top-aligned-header.cds--data-table--lg th:not(.cds--table-expand):not(.cds--table-sort__header){padding-block:1rem 1rem}.cds--data-table.cds--data-table--top-aligned-header.cds--data-table--lg th:not(.cds--table-expand):not(.cds--table-sort__header).cds--table-column-menu{padding-block-start:.5rem}.cds--data-table.cds--data-table--top-aligned-header.cds--data-table--lg th:not(.cds--table-expand):not(.cds--table-sort__header).cds--table-column-checkbox{padding-block-start:.8125rem}.cds--data-table.cds--data-table--top-aligned-header th{vertical-align:top}.cds--data-table td[align=right],.cds--data-table th[align=right],:host(cds-table) td[align=right],:host(cds-table) th[align=right]{text-align:end}.cds--data-table td[align=center],.cds--data-table th[align=center],:host(cds-table) td[align=center],:host(cds-table) th[align=center]{text-align:center}.cds--data-table th,:host(cds-table) th{background-color:var(--cds-layer-accent);color:var(--cds-text-primary,#161616);padding-inline:1rem 1rem}.cds--data-table th:last-of-type,:host(cds-table) th:last-of-type{inline-size:auto;position:static}.cds--data-table .cds--table-header-label,:host(cds-table) .cds--table-header-label{text-align:start}.cds--data-table tbody th,.cds--data-table td,:host(cds-table) tbody th,:host(cds-table) td{border-block-end:1px solid var(--cds-border-subtle-01,#c6c6c6);border-block-start:1px solid var(--cds-layer);color:var(--cds-text-secondary,#525252);padding-inline:1rem 1rem}.cds--data-table tbody th+td:first-of-type,.cds--data-table td+td:first-of-type,:host(cds-table) tbody th+td:first-of-type,:host(cds-table) td+td:first-of-type{padding-inline-start:.75rem}.cds--layer-two .cds--data-table tbody th,.cds--layer-two .cds--data-table td,.cds--layer-two :host(cds-table) tbody th,.cds--layer-two :host(cds-table) td{border-block-end:1px solid var(--cds-border-subtle-02,#e0e0e0)}.cds--layer-three .cds--data-table tbody th,.cds--layer-three .cds--data-table td,.cds--layer-three :host(cds-table) tbody th,.cds--layer-three :host(cds-table) td{border-block-end:1px solid var(--cds-border-subtle-03,#c6c6c6)}@supports (-moz-appearance:none){.cds--data-table td,:host(cds-table) td{background-clip:padding-box}}.cds--data-table .cds--dropdown,.cds--data-table .cds--list-box,.cds--data-table .cds--list-box input[role=combobox],.cds--data-table .cds--list-box input[type=text],.cds--data-table .cds--number input[type=number],.cds--data-table .cds--number input[type=text],.cds--data-table .cds--number__control-btn:after,.cds--data-table .cds--number__control-btn:before,.cds--data-table .cds--select-input,.cds--data-table .cds--text-input,:host(cds-table) .cds--dropdown,:host(cds-table) .cds--list-box,:host(cds-table) .cds--list-box input[role=combobox],:host(cds-table) .cds--list-box input[type=text],:host(cds-table) .cds--number input[type=number],:host(cds-table) .cds--number input[type=text],:host(cds-table) .cds--number__control-btn:after,:host(cds-table) .cds--number__control-btn:before,:host(cds-table) .cds--select-input,:host(cds-table) .cds--text-input{background-color:var(--cds-field-02,#fff)}.cds--data-table td.cds--table-column-menu .cds--overflow-menu[aria-expanded=false]:focus,:host(cds-table) td.cds--table-column-menu .cds--overflow-menu[aria-expanded=false]:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--data-table td.cds--table-column-menu .cds--overflow-menu[aria-expanded=false]:focus,:host(cds-table) td.cds--table-column-menu .cds--overflow-menu[aria-expanded=false]:focus{outline-style:dotted}}.cds--data-table td.cds--table-column-menu .cds--overflow-menu[aria-expanded=true]:focus,:host(cds-table) td.cds--table-column-menu .cds--overflow-menu[aria-expanded=true]:focus{outline:none}@media (-ms-high-contrast:active),(-ms-high-contrast:none),screen and (hover:hover){.cds--data-table td.cds--table-column-menu .cds--overflow-menu .cds--overflow-menu__icon,:host(cds-table) td.cds--table-column-menu .cds--overflow-menu .cds--overflow-menu__icon{opacity:0}}.cds--data-table td.cds--table-column-menu .cds--overflow-menu.cds--overflow-menu--open .cds--overflow-menu__icon,:host(cds-table) td.cds--table-column-menu .cds--overflow-menu.cds--overflow-menu--open .cds--overflow-menu__icon{opacity:1}.cds--data-table td.cds--table-column-menu .cds--overflow-menu:focus .cds--overflow-menu__icon,.cds--data-table td.cds--table-column-menu .cds--overflow-menu:hover .cds--overflow-menu__icon,.cds--data-table tr:hover td.cds--table-column-menu .cds--overflow-menu .cds--overflow-menu__icon,.cds--data-table.cds--data-table--visible-overflow-menu td.cds--table-column-menu .cds--overflow-menu .cds--overflow-menu__icon,:host(cds-table) td.cds--table-column-menu .cds--overflow-menu:focus .cds--overflow-menu__icon,:host(cds-table) td.cds--table-column-menu .cds--overflow-menu:hover .cds--overflow-menu__icon,:host(cds-table) tr:hover td.cds--table-column-menu .cds--overflow-menu .cds--overflow-menu__icon{opacity:1}.cds--table-row--menu-option .cds--overflow-menu-options__btn .cds--overflow-menu-options__option-content svg{inset-block-start:.1875rem;margin-inline-end:.5rem;position:relative}.cds--data-table .cds--overflow-menu:hover,.cds--data-table .cds--overflow-menu__trigger:hover,:host(cds-table) .cds--overflow-menu:hover,:host(cds-table) .cds--overflow-menu__trigger:hover{background-color:var(--cds-layer-selected-hover)}.cds--data-table--selected .cds--overflow-menu:hover,.cds--data-table--selected .cds--overflow-menu__trigger:hover{background-color:var(--cds-layer-hover)}.cds--data-table--selected .cds--link:not(.cds--link--disabled){color:var(--cds-link-secondary,#0043ce)}.cds--data-table--sm td.cds--table-column-menu,.cds--data-table--xs td.cds--table-column-menu{block-size:1.5rem;padding-block:0}.cds--data-table--sm td.cds--table-column-menu{block-size:2rem}.cds--data-table--md td.cds--table-column-menu{block-size:2.5rem}.cds--data-table--xl .cds--table-column-menu{padding-block-start:.5rem}.cds--data-table--zebra tbody tr:not(.cds--parent-row):nth-child(odd) td{border-block-end:1px solid var(--cds-layer)}.cds--data-table--zebra tbody tr:not(.cds--parent-row):nth-child(2n) td{border-block-end:1px solid var(--cds-layer-accent);border-block-start:1px solid var(--cds-layer-accent)}.cds--data-table--zebra tbody tr:not(.cds--parent-row):not(.cds--data-table--selected):nth-child(2n){background-color:var(--cds-layer-accent)}.cds--data-table--zebra tbody tr:not(.cds--parent-row):hover td{border-block-end:1px solid var(--cds-layer-hover);border-block-start:1px solid var(--cds-layer-hover)}.cds--data-table--zebra tbody tr:not(.cds--parent-row):not(.cds--data-table--selected):hover{background-color:var(--cds-layer-hover)}.cds--table-column-checkbox .cds--checkbox-label{min-block-size:1.5rem;padding-inline-start:0}.cds--table-column-checkbox .cds--checkbox-label:before{margin-block-start:.125rem}.cds--table-column-checkbox .cds--checkbox-label:after{inset-block-start:.46875rem}.cds--data-table th.cds--table-column-checkbox,:host(cds-table) th.cds--table-column-checkbox{background-color:var(--cds-layer-accent);inline-size:2rem;position:static;transition:background-color 70ms cubic-bezier(0,0,.38,.9)}.cds--data-table tbody td.cds--table-column-checkbox,.cds--data-table tbody td.cds--table-expand,.cds--data-table thead th.cds--table-column-checkbox,.cds--data-table thead th.cds--table-expand,:host(cds-table) tbody td.cds--table-column-checkbox,:host(cds-table) tbody td.cds--table-expand,:host(cds-table) thead th.cds--table-column-checkbox,:host(cds-table) thead th.cds--table-expand{min-inline-size:0}.cds--data-table tbody td.cds--table-column-checkbox,.cds--data-table thead th.cds--table-column-checkbox,:host(cds-table) tbody td.cds--table-column-checkbox,:host(cds-table) thead th.cds--table-column-checkbox{min-inline-size:2.5rem;padding-inline:1rem .25rem}.cds--data-table tbody td.cds--table-expand,.cds--data-table thead th.cds--table-expand,:host(cds-table) tbody td.cds--table-expand,:host(cds-table) thead th.cds--table-expand{block-size:2rem;inline-size:2rem}.cds--data-table--xs tbody td.cds--table-expand,.cds--data-table--xs thead th.cds--table-expand{block-size:1.5rem;inline-size:1.5rem;padding:0 0 0 .5rem}.cds--data-table--sm tbody td.cds--table-expand,.cds--data-table--sm thead th.cds--table-expand{block-size:2rem;inline-size:2rem;padding:0;padding-inline-start:.5rem}.cds--data-table--md tbody td.cds--table-expand,.cds--data-table--md thead th.cds--table-expand{block-size:2.5rem;inline-size:2.5rem;padding:.25rem 0 .25rem .5rem}.cds--data-table--xl tbody td.cds--table-expand,.cds--data-table--xl thead th.cds--table-expand{block-size:4rem;padding-block:.625rem 1.375rem}.cds--data-table--xl .cds--table-column-checkbox{padding-block-start:.8125rem}.cds--data-table--xl .cds--table-column-radio{padding-block-start:1rem}.cds--table-column-radio{inline-size:48px}.cds--table-column-radio .cds--radio-button__appearance{margin-inline-end:-.125rem}.cds--data-table--zebra tbody tr:nth-child(odd).cds--data-table--selected td,tr.cds--data-table--selected td{border-block-end:1px solid var(--cds-layer-active);border-block-start:1px solid var(--cds-layer-selected);color:var(--cds-text-primary,#161616)}.cds--data-table--zebra tbody tr:nth-child(odd).cds--data-table--selected,tr.cds--data-table--selected{background-color:var(--cds-layer-selected)}.cds--data-table--zebra tbody tr:first-of-type:nth-child(odd).cds--data-table--selected td,tr.cds--data-table--selected:first-of-type td{border-block-start:1px solid var(--cds-border-subtle-selected)}.cds--data-table--zebra tbody tr:last-of-type:nth-child(2n).cds--data-table--selected td,.cds--data-table--zebra tbody tr:last-of-type:nth-child(odd).cds--data-table--selected td,tr.cds--data-table--selected:last-of-type td{border-block-end:1px solid var(--cds-layer-selected);border-block-start:1px solid var(--cds-layer-selected)}.cds--data-table--zebra tbody tr:nth-child(2n).cds--data-table--selected td{border-block-end:1px solid var(--cds-layer-active)}.cds--data-table--zebra tbody tr:nth-child(2n).cds--data-table--selected:hover td{border-block-end:1px solid var(--cds-layer-selected-hover)}.cds--data-table tbody .cds--data-table--selected:hover td,.cds--data-table--zebra tbody tr:nth-child(odd).cds--data-table--selected:hover td,:host(cds-table) tbody .cds--data-table--selected:hover td{border-block-end:1px solid var(--cds-layer-selected-hover);border-block-start:1px solid var(--cds-layer-selected-hover);color:var(--cds-text-primary,#161616)}.cds--data-table tbody .cds--data-table--selected:hover,.cds--data-table--zebra tbody tr:nth-child(odd).cds--data-table--selected:hover,:host(cds-table) tbody .cds--data-table--selected:hover{background-color:var(--cds-layer-selected-hover)}.cds--data-table--selected .cds--overflow-menu .cds--overflow-menu__icon{opacity:1}.cds--data-table--xs tbody tr,.cds--data-table--xs tbody tr th,.cds--data-table--xs thead tr{block-size:1.5rem}.cds--data-table--xs .cds--table-header-label,.cds--data-table--xs tbody tr th,.cds--data-table--xs td{padding-block:.125rem .125rem}.cds--data-table--xs .cds--overflow-menu{block-size:calc(100% + 1px);inline-size:2rem}.cds--data-table.cds--data-table--xs:not(.cds--data-table--top-aligned-body) td.cds--table-column-checkbox,.cds--data-table.cds--data-table--xs:not(.cds--data-table--top-aligned-header) th.cds--table-column-checkbox{padding-block:0}.cds--data-table.cds--data-table--xs .cds--table-column-checkbox .cds--checkbox-label{block-size:1.4375rem;min-block-size:1.4375rem}.cds--data-table--sm tbody tr,.cds--data-table--sm tbody tr th,.cds--data-table--sm thead tr{block-size:2rem}.cds--data-table--sm .cds--table-header-label{padding-block:.4375rem .4375rem}.cds--data-table--sm tbody tr th,.cds--data-table--sm td,.cds--data-table--sm.cds--data-table--top-aligned-header th.cds--table-column-checkbox{padding-block:.4375rem .375rem}.cds--data-table.cds--data-table--sm:not(.cds--data-table--top-aligned-body) td.cds--table-column-checkbox,.cds--data-table.cds--data-table--sm:not(.cds--data-table--top-aligned-header) th.cds--table-column-checkbox{padding-block:.1875rem .1875rem}.cds--data-table--sm .cds--overflow-menu{block-size:calc(100% + 1px)}.cds--data-table--md tbody tr,.cds--data-table--md tbody tr th,.cds--data-table--md thead tr{block-size:2.5rem}.cds--data-table--md .cds--table-header-label,.cds--data-table--md.cds--data-table--top-aligned-header th.cds--table-column-checkbox{padding-block:.4375rem .4375rem}.cds--data-table--md tbody tr th,.cds--data-table--md td{padding-block:.4375rem .375rem}.cds--data-table--md .cds--table-column-menu,.cds--data-table.cds--data-table--md:not(.cds--data-table--top-aligned-body) td.cds--table-column-checkbox,.cds--data-table.cds--data-table--md:not(.cds--data-table--top-aligned-header) th.cds--table-column-checkbox{padding-block:.1875rem .1875rem}.cds--data-table--xl tbody tr,.cds--data-table--xl tbody tr th,.cds--data-table--xl thead tr{block-size:4rem}.cds--data-table--xl .cds--table-header-label,.cds--data-table--xl tbody tr th,.cds--data-table--xl td{padding-block:1rem 1rem}.cds--data-table--xl td,.cds--data-table--xl th{vertical-align:top}.cds--data-table--xl .cds--data-table--cell-secondary-text{font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}.cds--data-table--static{inline-size:auto}.cds--data-table-container--static{inline-size:-moz-fit-content;inline-size:fit-content}.cds--data-table_inner-container{background-color:var(--cds-layer-accent);transform:translateZ(0)}.cds--data-table--sticky-header{display:block;overflow-y:scroll}.cds--data-table--sticky-header tbody,.cds--data-table--sticky-header td,.cds--data-table--sticky-header th,.cds--data-table--sticky-header thead,.cds--data-table--sticky-header tr{display:flex}.cds--data-table--sticky-header thead{inline-size:100%;inset-block-start:0;overflow:scroll;position:sticky;z-index:1;-ms-overflow-style:none;will-change:transform}.cds--data-table--sticky-header thead tr th{border-block-end:1px solid var(--cds-layer-active)}.cds--data-table--sticky-header tbody{flex-direction:column;-ms-overflow-style:none;overflow-x:scroll;will-change:transform}.cds--data-table--sticky-header tr.cds--parent-row.cds--expandable-row{block-size:auto;min-block-size:3rem}.cds--data-table--sticky-header tr.cds--expandable-row:not(.cds--parent-row){block-size:auto}.cds--data-table--sticky-header .cds--table-expand{max-inline-size:3rem}.cds--data-table--sticky-header thead .cds--table-expand{align-items:center}.cds--data-table--sticky-header .cds--parent-row{min-block-size:3rem}.cds--data-table--sticky-header:not(.cds--data-table--xs):not(.cds--data-table--xl):not(.cds--data-table--sm) td:not(.cds--table-column-menu):not(.cds--table-column-checkbox){padding-block-start:.875rem}.cds--data-table--sticky-header tr.cds--parent-row.cds--expandable-row:hover+tr[data-child-row] td{border-block-start:1px solid var(--cds-layer-hover)}.cds--data-table--sticky-header tr.cds--expandable-row:last-of-type{overflow:hidden}.cds--data-table--sticky-header tr.cds--data-table--selected:first-of-type td{border-block-start:none}.cds--data-table--sticky-header tbody tr td.cds--table-column-checkbox,.cds--data-table--sticky-header thead th.cds--table-column-checkbox{align-items:center;inline-size:2.25rem;min-inline-size:2.25rem}.cds--data-table--sticky-header.cds--data-table--xl td.cds--table-column-checkbox,.cds--data-table--sticky-header.cds--data-table--xl thead th.cds--table-column-checkbox{align-items:flex-start}.cds--data-table--sticky-header th.cds--table-column-checkbox~th:last-of-type:empty{max-inline-size:4rem}.cds--data-table--sticky-header th:empty:not(.cds--table-expand){max-inline-size:2.25rem}.cds--data-table--sticky-header td.cds--table-column-menu{align-items:center;block-size:auto;padding-block-start:0}.cds--data-table--sticky-header tbody::-webkit-scrollbar,.cds--data-table--sticky-header thead::-webkit-scrollbar{display:none}@-moz-document url-prefix(){.cds--data-table--sticky-header tbody,.cds--data-table--sticky-header thead{scrollbar-width:none}}.cds--data-table--sticky-header tbody tr:last-of-type{border-block-end:0}.cds--data-table--sticky-header td:not(.cds--table-column-checkbox):not(.cds--table-column-menu):not(.cds--table-expand):not(.cds--table-column-icon),.cds--data-table--sticky-header th:not(.cds--table-column-checkbox):not(.cds--table-column-menu):not(.cds--table-expand):not(.cds--table-column-icon){inline-size:100%;min-inline-size:0}.cds--data-table--sticky-header.cds--data-table--sm tr:not(.cds--expandable-row),.cds--data-table--sticky-header.cds--data-table--xl tr:not(.cds--expandable-row),.cds--data-table--sticky-header.cds--data-table--xs tr:not(.cds--expandable-row){block-size:auto}.cds--data-table--sticky-header.cds--data-table--xs tr:not(.cds--expandable-row){min-block-size:1.5rem}.cds--data-table--sticky-header.cds--data-table--sm tr:not(.cds--expandable-row){min-block-size:2rem}.cds--data-table--sticky-header.cds--data-table--xl tr:not(.cds--expandable-row){min-block-size:4rem}.cds--data-table--sticky-header.cds--data-table--xs tr td.cds--table-expand{padding-block-start:.25rem}.cds--data-table--sticky-header.cds--data-table--sm tr td.cds--table-expand{padding-block-start:.5rem}.cds--data-table--sticky-header .cds--table-header-label{display:block;max-inline-size:calc(100% - 10px);overflow-x:hidden;overflow-y:hidden;padding-block:.9375rem 1rem;text-overflow:ellipsis;white-space:nowrap}.cds--data-table--sticky-header.cds--data-table--xs th .cds--table-header-label{padding-block:.1875rem 0}.cds--data-table--sticky-header.cds--data-table--sm th .cds--table-header-label{padding-block:.5rem 0}.cds--data-table--sticky-header.cds--data-table--xl th .cds--table-header-label{padding-block-start:1rem}.cds--data-table--sticky-header.cds--data-table--xl th.cds--table-expand{align-items:flex-start;display:flex}.cds--data-table--sticky-header.cds--data-table--sm tr.cds--parent-row .cds--table-column-checkbox,.cds--data-table--sticky-header.cds--data-table--xs tr.cds--parent-row .cds--table-column-checkbox{align-items:flex-start}.cds--data-table--max-width{max-inline-size:100%}.cds--data-table--sticky-header{max-block-size:18.75rem}.cds--data-table .cds--form-item.cds--checkbox-wrapper:last-of-type,:host(cds-table) .cds--form-item.cds--checkbox-wrapper:last-of-type{margin:0}.cds--data-table--sm .cds--form-item.cds--checkbox-wrapper:last-of-type,.cds--data-table--xs .cds--form-item.cds--checkbox-wrapper:last-of-type{margin:-.1875rem 0}.cds--data-table .cds--table-column-decorator,.cds--data-table .cds--table-column-slug,:host(cds-table) .cds--table-column-decorator,:host(cds-table) .cds--table-column-slug{inline-size:1rem;padding-inline-end:0}tr.cds--data-table--ai-label-row,tr.cds--data-table--ai-label-row+.cds--expandable-row,tr.cds--data-table--slug-row,tr.cds--data-table--slug-row+.cds--expandable-row{background:linear-gradient(to right,var(--cds-ai-aura-start-sm,rgba(69,137,255,.16)) 0,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%,transparent 50%);background-attachment:fixed}.cds--data-table--ai-label-row,.cds--data-table--slug-row{box-shadow:inset 1px 0 var(--cds-ai-border-strong,#4589ff)}.cds--data-table tbody tr.cds--data-table--ai-label-row:hover td,:host(cds-table) tbody tr.cds--data-table--ai-label-row:hover td,tr.cds--data-table--ai-label-row.cds--expandable-row--hover+.cds--expandable-row[data-child-row]:hover>td,tr.cds--data-table--ai-label-row.cds--expandable-row--hover>td,tr.cds--data-table--ai-label-row.cds--expandable-row:hover+.cds--expandable-row[data-child-row] td,tr.cds--data-table--ai-label-row.cds--parent-row.cds--data-table--selected.cds--expandable-row--hover>td,tr.cds--data-table--ai-label-row.cds--parent-row.cds--data-table--selected.cds--expandable-row--hover>td:first-of-type,tr.cds--data-table--ai-label-row.cds--parent-row.cds--data-table--selected.cds--expandable-row:hover td,tr.cds--data-table--ai-label-row.cds--parent-row.cds--data-table--selected.cds--expandable-row:hover td:first-of-type,tr.cds--data-table--ai-label-row.cds--parent-row.cds--data-table--selected.cds--expandable-row:hover+tr[data-child-row]>td,tr.cds--data-table--ai-label-row.cds--parent-row.cds--data-table--selected:not(.cds--expandable-row):hover>td,tr.cds--data-table--selected.cds--data-table--ai-label-row.cds--expandable-row+tr.cds--expandable-row[data-child-row]>td{background-color:transparent}.cds--data-table tbody tr.cds--data-table--ai-label-row:hover,:host(cds-table) tbody tr.cds--data-table--ai-label-row:hover,tr.cds--data-table--ai-label-row.cds--expandable-row--hover+.cds--expandable-row[data-child-row]:hover,tr.cds--data-table--ai-label-row:hover+.cds--expandable-row[data-child-row],tr.cds--data-table--selected.cds--parent-row.cds--expandable-row--hover.cds--data-table--ai-label-row,tr.cds--expandable-row--hover.cds--data-table--ai-label-row{background:linear-gradient(to right,var(--cds-ai-aura-hover-start,rgba(69,137,255,.32)) 0,15%,var(--cds-ai-aura-hover-end,hsla(0,0%,100%,0)) 50%),var(--cds-ai-aura-hover-background,#edf5ff);background-attachment:fixed}.cds--data-table--selected.cds--data-table--ai-label-row,.cds--data-table--selected.cds--data-table--slug-row,tr.cds--data-table--selected.cds--data-table--ai-label-row+.cds--expandable-row,tr.cds--data-table--selected.cds--data-table--slug-row+.cds--expandable-row,tr.cds--parent-row.cds--data-table--selected.cds--data-table--ai-label-row,tr.cds--parent-row.cds--data-table--selected.cds--data-table--slug-row{background:linear-gradient(to right,var(--cds-ai-aura-start-sm,rgba(69,137,255,.16)) 0,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%,transparent 50%),var(--cds-layer-selected);background-attachment:fixed}tbody tr.cds--data-table--ai-label-row:hover td,tr.cds--data-table--ai-label-row.cds--data-table--selected td,tr.cds--data-table--ai-label-row.cds--data-table--selected:hover td,tr.cds--data-table--ai-label-row.cds--parent-row.cds--data-table--selected.cds--expandable-row:hover td:not(.cds--table-expand):not(.cds--table-column-checkbox):not(.cds--table-column-slug){border-block-end-color:var(--cds-border-subtle)}tr.cds--expandable-row.cds--data-table--selected.cds--data-table--slug-row[data-parent-row]>td:not(.cds--table-expand):not(.cds--table-column-checkbox):not(.cds--table-column-slug){border-block-end:1px solid var(--cds-layer-selected)}tr.cds--parent-row.cds--data-table--ai-label-row.cds--expandable-row:hover td:first-of-type,tr.cds--parent-row.cds--data-table--decorator\xDF-row.cds--expandable-row:hover td:first-of-type,tr.cds--parent-row.cds--data-table--slug-row.cds--expandable-row:hover td:first-of-type{border-block-end:1px solid transparent}.cds--data-table thead th.cds--table-sort__header--ai-label .cds--table-sort,.cds--data-table thead th.cds--table-sort__header--slug .cds--table-sort,.cds--data-table thead th:has(>.cds--table-header-label--ai-label),.cds--data-table thead th:has(>.cds--table-header-label--slug),:host(cds-table) thead th.cds--table-sort__header--ai-label .cds--table-sort,:host(cds-table) thead th.cds--table-sort__header--slug .cds--table-sort,:host(cds-table) thead th:has(>.cds--table-header-label--ai-label),:host(cds-table) thead th:has(>.cds--table-header-label--slug){background:linear-gradient(to right,var(--cds-ai-aura-start-sm,rgba(69,137,255,.16)) 0,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%,transparent 50%)}.cds--table-column-decorator .cds--decorator,.cds--table-column-slug .cds--ai-label,.cds--table-column-slug .cds--slug{position:absolute;transform:translateY(-50%);z-index:2}.cds--data-table--xl .cds--table-column-decorator .cds--decorator,.cds--data-table--xl .cds--table-column-slug .cds--ai-label,.cds--data-table--xl .cds--table-column-slug .cds--slug{transform:translateY(1px)}th .cds--table-header-label.cds--table-header-label--ai-label,th .cds--table-header-label.cds--table-header-label--decorator,th .cds--table-header-label.cds--table-header-label--slug{align-items:center;display:flex}th .cds--table-header-label.cds--table-header-label--ai-label .cds--ai-label,th .cds--table-header-label.cds--table-header-label--ai-label .cds--slug,th .cds--table-header-label.cds--table-header-label--ai-label .cds--table-header-label--decorator-inner,th .cds--table-header-label.cds--table-header-label--decorator .cds--table-header-label--decorator-inner{margin-inline-start:auto}th.cds--table-sort__header--ai-label,th.cds--table-sort__header--slug,th:has(.cds--table-header-label--ai-label),th:has(.cds--table-header-label--slug){box-shadow:inset 0 1px var(--cds-ai-border-strong,#4589ff)}td.cds--table-cell--column-slug{background:linear-gradient(to right,var(--cds-ai-aura-start-sm,rgba(69,137,255,.16)) 0,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%,transparent 50%)}tr.cds--parent-row:not(.cds--expandable-row):not(:first-of-type) td.cds--table-cell--column-slug{border-block-start:linear-gradient(to right,var(--cds-ai-aura-start-sm,rgba(69,137,255,.16)) 0,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%,transparent 50%)}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--data-table-content,tr.cds--parent-row:not(.cds--expandable-row):not(:first-of-type) td.cds--table-cell--column-slug{outline:1px solid transparent}}.cds--link{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--link *,.cds--link :after,.cds--link :before{box-sizing:inherit}.cds--link{color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe));display:inline-flex;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);outline:none;text-decoration:none;transition:color 70ms cubic-bezier(.2,0,.38,.9)}.cds--link:hover{color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce));text-decoration:underline}.cds--link:active:not(.cds--link--disabled),.cds--link:active:visited,.cds--link:active:visited:hover{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--link:active:not(.cds--link--disabled),.cds--link:active:visited,.cds--link:active:visited:hover{outline-style:dotted}}.cds--link:active:not(.cds--link--disabled),.cds--link:active:visited,.cds--link:active:visited:hover{color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe));outline-color:var(--cds-link-focus-text-color,var(--cds-focus,#0f62fe));text-decoration:underline}.cds--link:focus:not(.cds--link--disabled){outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--link:focus:not(.cds--link--disabled){outline-style:dotted}}.cds--link:focus:not(.cds--link--disabled){outline-color:var(--cds-link-focus-text-color,var(--cds-focus,#0f62fe));text-decoration:underline}.cds--link:visited{color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe))}.cds--link:visited:hover{color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce))}.cds--link--disabled,.cds--link--disabled:hover{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--link--disabled *,.cds--link--disabled :after,.cds--link--disabled :before,.cds--link--disabled:hover *,.cds--link--disabled:hover :after,.cds--link--disabled:hover :before{box-sizing:inherit}.cds--link--disabled,.cds--link--disabled:hover{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);font-weight:400;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);text-decoration:none}.cds--link.cds--link--visited,.cds--link.cds--link--visited:visited{color:var(--cds-link-visited-text-color,var(--cds-link-visited,#8a3ffc))}.cds--link.cds--link--visited:hover,.cds--link.cds--link--visited:visited:hover{color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce))}.cds--link.cds--link--inline{display:inline;text-decoration:underline}.cds--link--disabled.cds--link--inline{text-decoration:underline}.cds--link--sm,.cds--link--sm.cds--link--disabled:hover{font-size:var(--cds-helper-text-01-font-size,.75rem);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333)}.cds--link--lg,.cds--link--lg.cds--link--disabled:hover{font-size:var(--cds-body-compact-02-font-size,1rem);font-weight:var(--cds-body-compact-02-font-weight,400);letter-spacing:var(--cds-body-compact-02-letter-spacing,0);line-height:var(--cds-body-compact-02-line-height,1.375)}.cds--link__icon{align-self:center;display:inline-flex;margin-inline-start:.5rem}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--popover-container{display:inline-block}.cds--popover-container:not(.cds--popover--auto-align){position:relative}.cds--popover--high-contrast .cds--popover{--cds-popover-background-color:var(--cds-background-inverse,#393939);--cds-popover-text-color:var(--cds-text-inverse,#fff)}.cds--popover--drop-shadow .cds--popover{filter:var(--cds-popover-drop-shadow,drop-shadow(0 .125rem .125rem rgba(0,0,0,.2)))}.cds--popover--border>.cds--popover>.cds--popover-content{outline:1px solid var(--cds-popover-border-color,var(--cds-border-subtle));outline-offset:-1px}.cds--popover--caret{--cds-popover-offset:0.625rem}.cds--popover{inset:0;pointer-events:none;position:absolute;z-index:6000}.cds--popover-content{--cds-layout-size-height-sm:2rem}.cds--layout--size-sm :where(.cds--popover-content),.cds--popover-content.cds--layout--size-sm{--cds-layout-size-height:var(--cds-layout-size-height-sm)}.cds--popover-content{--cds-layout-size-height-md:2.5rem}.cds--layout--size-md :where(.cds--popover-content),.cds--popover-content.cds--layout--size-md{--cds-layout-size-height:var(--cds-layout-size-height-md)}.cds--popover-content{--cds-layout-size-height-lg:3rem}.cds--layout--size-lg :where(.cds--popover-content),.cds--popover-content.cds--layout--size-lg{--cds-layout-size-height:var(--cds-layout-size-height-lg)}.cds--popover-content{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--popover-content *,.cds--popover-content :after,.cds--popover-content :before{box-sizing:inherit}.cds--popover-content{background-color:var(--cds-popover-background-color,var(--cds-layer));border-radius:var(--cds-popover-border-radius,2px);color:var(--cds-popover-text-color,var(--cds-text-primary,#161616));display:none;inline-size:-moz-max-content;inline-size:max-content;max-inline-size:23rem;pointer-events:auto;position:absolute;z-index:6000}.cds--popover--open>.cds--popover>.cds--popover-content{display:block}.cds--popover--background-token__background>.cds--popover>.cds--popover-content{background-color:var(--cds-background,#fff)}.cds--popover-content:before{content:"";display:none;position:absolute}.cds--popover--open>.cds--popover>.cds--popover-content:before{display:block}.cds--popover--auto-align.cds--popover-caret,.cds--popover-caret{display:none;position:absolute;will-change:transform;z-index:6000}.cds--popover--auto-align.cds--popover-caret:after,.cds--popover-caret:after{background-color:var(--cds-popover-background-color,var(--cds-layer));content:"";display:block;position:absolute}.cds--popover--auto-align.cds--popover-caret:before,.cds--popover-caret:before{background-color:var(--cds-popover-border-color,var(--cds-border-subtle));content:"";display:none;position:absolute}.cds--popover--background-token__background>.cds--popover>.cds--popover-caret:after{background-color:var(--cds-background,#fff)}.cds--popover--auto-align.cds--popover--caret.cds--popover--open>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--border .cds--popover--auto-align.cds--popover-caret:before,.cds--popover--border .cds--popover-caret:before,.cds--popover--caret.cds--popover--open>.cds--popover>.cds--popover-caret{display:block}.cds--popover--tab-tip>.cds--popover>.cds--popover-caret{display:none}.cds--popover--bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-start:50%;transform:translate(-50%,calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{transform:translate(50%,calc(100% + var(--cds-popover-offset, 0rem)))}.cds--popover--bottom-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-start:calc(50% - var(--cds-popover-offset, 0rem));transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:calc(50% - var(--cds-popover-offset, 0rem));inset-inline-start:auto}.cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--bottom-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-end:calc(50% - var(--cds-popover-offset, 0rem));transform:translate(var(--cds-popover-offset,0),calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--bottom-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:calc(50% - var(--cds-popover-offset, 0rem))}.cds--popover--bottom-end>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-left>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-right>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-start>.cds--popover>.cds--popover-content:before,.cds--popover--bottom>.cds--popover>.cds--popover-content:before{block-size:var(--cds-popover-offset,0);inset-block-start:0;inset-inline:0;transform:translateY(-100%)}.cds--popover--bottom-end>.cds--popover>.cds--popover-caret,.cds--popover--bottom-left>.cds--popover>.cds--popover-caret,.cds--popover--bottom-right>.cds--popover>.cds--popover-caret,.cds--popover--bottom-start>.cds--popover>.cds--popover-caret,.cds--popover--bottom>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);inline-size:var(--cds-popover-caret-width,.75rem);inset-block-end:0;inset-inline-start:50%;transform:translate(-50%,var(--cds-popover-offset,0))}.cds--popover--border.cds--popover--bottom-end>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-left>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-right>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-start>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom>.cds--popover>.cds--popover-caret:before,.cds--popover--bottom-end>.cds--popover>.cds--popover-caret:after,.cds--popover--bottom-left>.cds--popover>.cds--popover-caret:after,.cds--popover--bottom-right>.cds--popover>.cds--popover-caret:after,.cds--popover--bottom-start>.cds--popover>.cds--popover-caret:after,.cds--popover--bottom>.cds--popover>.cds--popover-caret:after{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 100%,50% 0,100% 100%);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--bottom-end>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-left>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-right>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-start>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom>.cds--popover>.cds--popover-caret:after{inline-size:calc(var(--cds-popover-caret-width, .75rem) - 1px);inset-block-start:1px;inset-inline-start:.5px}[dir=rtl] .cds--popover--bottom-end>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-left>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-right>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-start>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom>.cds--popover>.cds--popover-caret{transform:translate(50%,var(--cds-popover-offset,0))}.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 100%,50% 0,100% 100%);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inline-size:calc(var(--cds-popover-caret-width, .75rem) - 1px);inset-block-start:1px;inset-inline-start:.5px}.cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-start:50%;transform:translate(-50%,calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{transform:translate(50%,calc(-100% - var(--cds-popover-offset, 0rem)))}.cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-start:calc(50% - var(--cds-popover-offset, 0rem));transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:calc(50% - var(--cds-popover-offset, 0rem));inset-inline-start:auto}.cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-end:calc(50% - var(--cds-popover-offset, 0rem));transform:translate(var(--cds-popover-offset,0),calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:calc(50% - var(--cds-popover-offset, 0rem))}.cds--popover--top-end>.cds--popover>.cds--popover-content:before,.cds--popover--top-left>.cds--popover>.cds--popover-content:before,.cds--popover--top-right>.cds--popover>.cds--popover-content:before,.cds--popover--top-start>.cds--popover>.cds--popover-content:before,.cds--popover--top>.cds--popover>.cds--popover-content:before{block-size:var(--cds-popover-offset,0);inset-block-end:0;inset-inline:0;transform:translateY(100%)}.cds--popover--top-end>.cds--popover>.cds--popover-caret,.cds--popover--top-left>.cds--popover>.cds--popover-caret,.cds--popover--top-right>.cds--popover>.cds--popover-caret,.cds--popover--top-start>.cds--popover>.cds--popover-caret,.cds--popover--top>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);inline-size:var(--cds-popover-caret-width,.75rem);inset-block-start:0;inset-inline-start:50%;transform:translate(-50%,calc(var(--cds-popover-offset, 0rem)*-1))}.cds--popover--border.cds--popover--top-end>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-left>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-right>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-start>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--top>.cds--popover>.cds--popover-caret:before,.cds--popover--top-end>.cds--popover>.cds--popover-caret:after,.cds--popover--top-left>.cds--popover>.cds--popover-caret:after,.cds--popover--top-right>.cds--popover>.cds--popover-caret:after,.cds--popover--top-start>.cds--popover>.cds--popover-caret:after,.cds--popover--top>.cds--popover>.cds--popover-caret:after{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 0,50% 100%,100% 0);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--top-end>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-left>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-right>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-start>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--top>.cds--popover>.cds--popover-caret:after{inline-size:calc(var(--cds-popover-caret-width, .75rem) - 1px);inset-block-start:-1px;inset-inline-start:.5px}[dir=rtl] .cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{transform:translate(50%,calc(var(--cds-popover-offset, 0rem)*-1))}.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 0,50% 100%,100% 0);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inline-size:calc(var(--cds-popover-caret-width, .75rem) - 1px);inset-block-start:-1px;inset-inline-start:.5px}.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),-50%)}.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),calc(var(--cds-popover-offset, 0rem)*.5*-1 - 16px))}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),calc(var(--cds-popover-offset, 0rem)*.5 + 16px))}[dir=rtl] .cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:100%;inset-inline-start:auto}.cds--popover--right-bottom>.cds--popover>.cds--popover-content:before,.cds--popover--right-end>.cds--popover>.cds--popover-content:before,.cds--popover--right-start>.cds--popover>.cds--popover-content:before,.cds--popover--right-top>.cds--popover>.cds--popover-content:before,.cds--popover--right>.cds--popover>.cds--popover-content:before{inline-size:var(--cds-popover-offset,0);inset-block:0;inset-inline-start:0;transform:translateX(-100%)}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);inline-size:var(--cds-popover-caret-height,.375rem);inset-block-start:50%;inset-inline-start:100%;transform:translate(calc(var(--cds-popover-offset, 0rem) - 100%),-50%)}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem)}[dir=rtl] .cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{inset-inline-end:100%;inset-inline-start:auto}.cds--popover--border.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{inset-inline-start:1px}[dir=rtl] .cds--popover--border.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{inset-inline-start:-1px}.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inset-inline-start:1px}[dir=rtl] .cds--popover--border.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before{margin-inline-start:1px}[dir=rtl] .cds--popover--border.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inset-inline-start:0}.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1 + .1px),-50%)}.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(var(--cds-popover-offset, 0rem)*-.5 - 16px))}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(var(--cds-popover-offset, 0rem)*.5 + 16px))}[dir=rtl] .cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:auto;inset-inline-start:100%}.cds--popover--left-bottom>.cds--popover>.cds--popover-content:before,.cds--popover--left-end>.cds--popover>.cds--popover-content:before,.cds--popover--left-start>.cds--popover>.cds--popover-content:before,.cds--popover--left-top>.cds--popover>.cds--popover-content:before,.cds--popover--left>.cds--popover>.cds--popover-content:before{inline-size:var(--cds-popover-offset,0);inset-block:0;inset-inline-end:0;transform:translateX(100%)}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);inline-size:var(--cds-popover-caret-height,.375rem);inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1 + 100%),-50%)}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem)}[dir=rtl] .cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{inset-inline-end:auto;inset-inline-start:100%}.cds--popover--border.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{inset-inline-start:-1px}[dir=rtl] .cds--popover--border.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{inset-inline-start:1px}.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inset-inline-start:-1px}[dir=rtl] .cds--popover--border.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before{margin-inline-start:-1px}[dir=rtl] .cds--popover--border.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inset-inline-start:0}.cds--popover--tab-tip>.cds--popover>.cds--popover-content{border-radius:0}.cds--popover--tab-tip.cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--tab-tip.cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--tab-tip.cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--tab-tip.cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:0}.cds--popover--tab-tip.cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--tab-tip.cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--tab-tip.cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--tab-tip.cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:0;inset-inline-start:auto}.cds--popover--tab-tip .cds--popover{will-change:filter}.cds--popover--tab-tip__button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--popover--tab-tip__button *,.cds--popover--tab-tip__button :after,.cds--popover--tab-tip__button :before{box-sizing:inherit}.cds--popover--tab-tip__button::-moz-focus-inner{border:0}.cds--popover--tab-tip__button{align-items:center;block-size:2rem;display:inline-flex;inline-size:2rem;justify-content:center;position:relative}.cds--popover--tab-tip__button:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--popover--tab-tip__button:focus{outline-style:dotted}}.cds--popover--tab-tip__button:hover{background-color:var(--cds-layer-hover)}.cds--popover--tab-tip.cds--popover--open .cds--popover--tab-tip__button{background:var(--cds-layer);box-shadow:0 2px 2px rgba(0,0,0,.2)}.cds--popover--tab-tip.cds--popover--open .cds--popover--tab-tip__button:not(:focus):after{background:var(--cds-layer);block-size:2px;content:"";inline-size:100%;inset-block-end:0;position:absolute;z-index:6001}.cds--popover--tab-tip__button svg{fill:var(--cds-icon-primary,#161616)}.cds--tooltip{--cds-popover-offset:12px}.cds--tooltip-content{font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);max-inline-size:18rem;overflow-wrap:break-word;padding:var(--cds-tooltip-padding-block,1rem) var(--cds-tooltip-padding-inline,1rem)}.cds--icon-tooltip{--cds-tooltip-padding-block:0.125rem;--cds-popover-caret-width:0.5rem;--cds-popover-caret-height:0.25rem;--cds-popover-offset:0.5rem}.cds--icon-tooltip .cds--tooltip-content{font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--definition-term{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--definition-term *,.cds--definition-term :after,.cds--definition-term :before{box-sizing:inherit}.cds--definition-term::-moz-focus-inner{border:0}.cds--definition-term{border-block-end:1px dotted var(--cds-border-strong);border-radius:0;color:var(--cds-text-primary,#161616)}.cds--definition-term:focus{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--definition-term:focus{outline-style:dotted}}.cds--definition-term:focus,.cds--definition-term:hover{border-block-end-color:var(--cds-border-interactive,#0f62fe)}.cds--definition-tooltip{font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);max-inline-size:11rem;padding:.5rem 1rem;text-wrap:auto;word-break:break-word}.cds--btn{--cds-layout-size-height-local:clamp(max(var(--cds-layout-size-height-min),var(--cds-layout-size-height-xs)),var(--cds-layout-size-height,var(--cds-layout-size-height-lg)),min(var(--cds-layout-size-height-max),var(--cds-layout-size-height-2xl)));--cds-layout-density-padding-inline-local:clamp(var(--cds-layout-density-padding-inline-min),var(--cds-layout-density-padding-inline,var(--cds-layout-density-padding-inline-normal)),var(--cds-layout-density-padding-inline-max));--temp-1lh:(var(--cds-body-compact-01-line-height,1.28572) * 1em);--temp-expressive-1lh:(var(--cds-body-compact-02-line-height,1.375) * 1em);--temp-padding-block-max:calc((var(--cds-layout-size-height-lg) - var(--temp-1lh))/2 - 0.0625rem);border:0;box-sizing:border-box;font-family:inherit;font-size:100%;padding:0;vertical-align:baseline}.cds--btn *,.cds--btn :after,.cds--btn :before{box-sizing:inherit}.cds--btn{border-radius:0;cursor:pointer;display:inline-flex;flex-shrink:0;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);inline-size:-moz-max-content;inline-size:max-content;justify-content:space-between;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);margin:0;max-inline-size:20rem;min-block-size:var(--cds-layout-size-height-local);outline:none;padding-block:min((var(--cds-layout-size-height-local) - var(--temp-1lh))/2 - .0625rem,var(--temp-padding-block-max));padding-inline:calc(var(--cds-layout-density-padding-inline-local) - .0625rem) calc(var(--cds-layout-density-padding-inline-local)*3 + .9375rem);position:relative;text-align:start;text-decoration:none;transition:background 70ms cubic-bezier(0,0,.38,.9),box-shadow 70ms cubic-bezier(0,0,.38,.9),border-color 70ms cubic-bezier(0,0,.38,.9),outline 70ms cubic-bezier(0,0,.38,.9);vertical-align:top}.cds--btn.cds--btn--disabled,.cds--btn.cds--btn--disabled:focus,.cds--btn.cds--btn--disabled:hover,.cds--btn:disabled,.cds--btn:focus:disabled,.cds--btn:hover:disabled{background:var(--cds-button-disabled,#c6c6c6);border-color:var(--cds-button-disabled,#c6c6c6);box-shadow:none;color:var(--cds-text-on-color-disabled,#8d8d8d);cursor:not-allowed}.cds--btn .cds--btn__icon{block-size:1rem;flex-shrink:0;inline-size:1rem;inset-block-start:min((var(--cds-layout-size-height-local) - 1rem)/2 - .0625rem,var(--temp-padding-block-max));inset-inline-end:var(--cds-layout-density-padding-inline-local);margin-block-start:.0625rem;position:absolute}.cds--btn::-moz-focus-inner{border:0;padding:0}.cds--btn--primary{background-color:var(--cds-button-primary,#0f62fe);border:1px solid transparent;color:var(--cds-text-on-color,#fff)}.cds--btn--primary:hover{background-color:var(--cds-button-primary-hover,#0050e6)}.cds--btn--primary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--primary:active{background-color:var(--cds-button-primary-active,#002d9c)}.cds--btn--primary .cds--btn__icon,.cds--btn--primary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--primary:hover,.cds--btn--secondary{color:var(--cds-text-on-color,#fff)}.cds--btn--secondary{background-color:var(--cds-button-secondary,#393939);border:1px solid transparent}.cds--btn--secondary:hover{background-color:var(--cds-button-secondary-hover,#474747)}.cds--btn--secondary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--secondary:active{background-color:var(--cds-button-secondary-active,#6f6f6f)}.cds--btn--secondary .cds--btn__icon,.cds--btn--secondary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--secondary:focus,.cds--btn--secondary:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--tertiary{background-color:transparent;border-color:var(--cds-button-tertiary,#0f62fe);border-style:solid;border-width:1px;color:var(--cds-button-tertiary,#0f62fe)}.cds--btn--tertiary:hover{background-color:var(--cds-button-tertiary-hover,#0050e6)}.cds--btn--tertiary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--tertiary .cds--btn__icon,.cds--btn--tertiary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--tertiary:focus,.cds--btn--tertiary:hover{color:var(--cds-text-inverse,#fff)}.cds--btn--tertiary:focus{background-color:var(--cds-button-tertiary,#0f62fe)}.cds--btn--tertiary:active{background-color:var(--cds-button-tertiary-active,#002d9c);border-color:transparent;color:var(--cds-text-inverse,#fff)}.cds--btn--tertiary.cds--btn--disabled,.cds--btn--tertiary.cds--btn--disabled:focus,.cds--btn--tertiary.cds--btn--disabled:hover,.cds--btn--tertiary:disabled,.cds--btn--tertiary:focus:disabled,.cds--btn--tertiary:hover:disabled{background:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--btn--ghost{background-color:transparent;border:1px solid transparent;color:var(--cds-link-primary,#0f62fe)}.cds--btn--ghost:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12))}.cds--btn--ghost:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--ghost .cds--btn__icon,.cds--btn--ghost .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--ghost{padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - .0625rem)}.cds--btn--ghost .cds--btn__icon{align-self:center;margin-inline-start:.5rem;position:static}.cds--btn--ghost:active,.cds--btn--ghost:hover{color:var(--cds-link-primary-hover,#0043ce)}.cds--btn--ghost:active{background-color:var(--cds-background-active,hsla(0,0%,55%,.5))}.cds--btn--ghost.cds--btn--disabled,.cds--btn--ghost.cds--btn--disabled:focus,.cds--btn--ghost.cds--btn--disabled:hover,.cds--btn--ghost:disabled,.cds--btn--ghost:focus:disabled,.cds--btn--ghost:hover:disabled{background:transparent;border-color:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--btn--ghost:not([disabled]) svg{fill:var(--cds-icon-primary,#161616)}.cds--btn--icon-only{align-items:center;block-size:var(--cds-layout-size-height-local);inline-size:var(--cds-layout-size-height-local);justify-content:center;padding:0;padding-block-start:0}.cds--btn--icon-only>:first-child{min-inline-size:1rem}.cds--btn--icon-only .cds--btn__icon{position:static}.cds--btn--icon-only.cds--btn--danger--ghost .cds--btn__icon,.cds--btn--icon-only.cds--btn--ghost .cds--btn__icon{margin:0}.cds--btn--icon-only.cds--btn--danger--ghost{padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - 1rem)}.cds--btn--xs:not(.cds--btn--icon-only){padding-block-start:1.5px}.cds--btn--md:not(.cds--btn--icon-only) .cds--btn__icon,.cds--btn--sm:not(.cds--btn--icon-only) .cds--btn__icon,.cds--btn--xs:not(.cds--btn--icon-only) .cds--btn__icon{margin-block-start:0}.cds--btn--icon-only.cds--btn--selected{background:var(--cds-background-selected,hsla(0,0%,55%,.2))}.cds--btn path[data-icon-path=inner-path]{fill:none}.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:var(--cds-icon-primary,#161616)}.cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon path:not([data-icon-path]):not([fill=none]),.cds--btn.cds--btn--icon-only.cds--btn--ghost[disabled]:hover .cds--btn__icon{fill:var(--cds-icon-on-color-disabled,#8d8d8d)}.cds--btn--ghost.cds--btn--icon-only[disabled],.cds--icon-tooltip--disabled .cds--tooltip-trigger__wrapper{cursor:not-allowed}.cds--icon-tooltip--disabled .cds--btn--icon-only[disabled]{pointer-events:none}.cds--btn--danger{background-color:var(--cds-button-danger-primary,#da1e28);border:1px solid transparent;color:var(--cds-text-on-color,#fff)}.cds--btn--danger:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger:active{background-color:var(--cds-button-danger-active,#750e13)}.cds--btn--danger .cds--btn__icon,.cds--btn--danger .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary{background-color:transparent;border-color:var(--cds-button-danger-secondary,#da1e28);border-style:solid;border-width:1px;color:var(--cds-button-danger-secondary,#da1e28)}.cds--btn--danger--tertiary:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger--tertiary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger--tertiary .cds--btn__icon,.cds--btn--danger--tertiary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger--tertiary:hover{border-color:var(--cds-button-danger-hover,#b81921);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary:focus{background-color:var(--cds-button-danger-primary,#da1e28);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary:active{background-color:var(--cds-button-danger-active,#750e13);border-color:var(--cds-button-danger-active,#750e13);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary.cds--btn--disabled,.cds--btn--danger--tertiary.cds--btn--disabled:focus,.cds--btn--danger--tertiary.cds--btn--disabled:hover,.cds--btn--danger--tertiary:disabled,.cds--btn--danger--tertiary:focus:disabled,.cds--btn--danger--tertiary:hover:disabled{background:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--btn--danger--ghost{background-color:transparent;border:1px solid transparent;color:var(--cds-button-danger-secondary,#da1e28)}.cds--btn--danger--ghost:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger--ghost:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger--ghost:active{background-color:var(--cds-button-danger-active,#750e13)}.cds--btn--danger--ghost .cds--btn__icon,.cds--btn--danger--ghost .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger--ghost{padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - .0625rem)}.cds--btn--danger--ghost .cds--btn__icon{margin-inline-start:.5rem;position:static}.cds--btn--danger--ghost:active,.cds--btn--danger--ghost:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--danger--ghost.cds--btn--disabled,.cds--btn--danger--ghost.cds--btn--disabled:focus,.cds--btn--danger--ghost.cds--btn--disabled:hover,.cds--btn--danger--ghost:disabled,.cds--btn--danger--ghost:focus:disabled,.cds--btn--danger--ghost:hover:disabled{background:transparent;border-color:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--btn--expressive{font-size:var(--cds-body-compact-02-font-size,1rem);font-weight:var(--cds-body-compact-02-font-weight,400);letter-spacing:var(--cds-body-compact-02-letter-spacing,0);line-height:var(--cds-body-compact-02-line-height,1.375);padding-block:min((var(--cds-layout-size-height-local) - var(--temp-expressive-1lh))/2 - .0625rem,var(--temp-padding-block-max))}.cds--btn--icon-only.cds--btn--expressive{padding:12px 13px}.cds--btn.cds--btn--expressive .cds--btn__icon{block-size:1.25rem;inline-size:1.25rem}.cds--btn-set .cds--btn.cds--btn--expressive{max-inline-size:20rem}.cds--btn.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--btn.cds--skeleton:active,.cds--btn.cds--skeleton:focus,.cds--btn.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--btn.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--btn.cds--skeleton:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--btn.cds--skeleton{background:CanvasText}.cds--btn.cds--skeleton:before{background:Canvas;forced-color-adjust:none}}.cds--btn.cds--skeleton{inline-size:9.375rem}.cds--btn-set{display:flex}.cds--btn-set--stacked{flex-direction:column}.cds--btn-set .cds--btn{inline-size:100%;max-inline-size:12.25rem}.cds--btn-set .cds--btn:not(:focus){box-shadow:-.0625rem 0 0 0 var(--cds-button-separator,#e0e0e0)}.cds--btn-set .cds--btn:first-of-type:not(:focus),.cds--btn-set .cds--btn:focus+.cds--btn{box-shadow:inherit}.cds--btn-set--stacked .cds--btn:not(:focus){box-shadow:0 -.0625rem 0 0 var(--cds-button-separator,#e0e0e0)}.cds--btn-set--stacked .cds--btn:first-of-type:not(:focus){box-shadow:inherit}.cds--btn-set .cds--btn.cds--btn--disabled{box-shadow:-.0625rem 0 0 0 var(--cds-icon-on-color-disabled,#8d8d8d)}.cds--btn-set .cds--btn.cds--btn--disabled:first-of-type{box-shadow:none}.cds--btn-set--stacked .cds--btn.cds--btn--disabled{box-shadow:0 -.0625rem 0 0 var(--cds-layer-selected-disabled,#8d8d8d)}.cds--btn-set--stacked .cds--btn.cds--btn--disabled:first-of-type{box-shadow:none}.cds--btn-set .cds--btn.cds--btn--loading{background-color:transparent;border-color:transparent;box-shadow:none}.cds--btn--sm .cds--badge-indicator{margin-block-start:.25rem;margin-inline-end:.25rem}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--btn:focus{color:Highlight;outline:1px solid Highlight}}[dir=rtl] .cds--btn-set .cds--btn:not(:focus){box-shadow:.0625rem 0 0 0 var(--cds-button-separator,#e0e0e0)}.cds--btn-set--fluid{container-type:inline-size}.cds--btn-set--fluid .cds--btn-set__fluid-inner{--flex-direction:row;align-items:stretch;display:flex;flex-direction:var(--flex-direction);inline-size:100%;justify-content:flex-end}.cds--btn-set--fluid .cds--btn-set__fluid-inner .cds--btn{flex:0 1 25%;max-inline-size:14.5rem}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack .cds--btn{min-inline-size:11rem}.cds--btn-set--fluid .cds--btn-set__fluid-inner .cds--btn--danger--ghost,.cds--btn-set--fluid .cds--btn-set__fluid-inner .cds--btn--ghost{flex:1 1 25%;max-inline-size:none;padding-inline-start:2rem}@container (width <= 11rem){.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:first-child:last-child){--flex-direction:column}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:first-child:last-child) .cds--btn{flex:initial;inline-size:100%;max-inline-size:none}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:first-child:last-child) .cds--btn--ghost{padding-inline-start:1rem}}@container (width <= 22rem){.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(2):last-child){--flex-direction:column}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(2):last-child) .cds--btn{flex:initial;inline-size:100%;max-inline-size:none}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(2):last-child) .cds--btn--ghost{padding-inline-start:1rem}}@container (width <= 33rem){.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(3):last-child){--flex-direction:column}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(3):last-child) .cds--btn{flex:initial;inline-size:100%;max-inline-size:none}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(3):last-child) .cds--btn--ghost{padding-inline-start:1rem}}@container (width <= 44rem){.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(4):last-child){--flex-direction:column}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(4):last-child) .cds--btn{flex:initial;inline-size:100%;max-inline-size:none}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(4):last-child) .cds--btn--ghost{padding-inline-start:1rem}}@container (width <= 44rem){.cds--btn-set--fluid .cds--btn-set__fluid-inner:has(:nth-child(2):last-child) .cds--btn{flex-basis:50%;max-inline-size:none}}@container (width <= 33rem){.cds--btn-set--fluid .cds--btn-set__fluid-inner:has(:first-child:last-child) .cds--btn{flex:1 1 100%;max-inline-size:none}}.cds--overflow-menu,.cds--overflow-menu__trigger{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;display:inline-block;inline-size:100%;text-align:start}.cds--overflow-menu::-moz-focus-inner,.cds--overflow-menu__trigger::-moz-focus-inner{border:0}.cds--overflow-menu,.cds--overflow-menu__trigger{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--overflow-menu *,.cds--overflow-menu :after,.cds--overflow-menu :before,.cds--overflow-menu__trigger *,.cds--overflow-menu__trigger :after,.cds--overflow-menu__trigger :before{box-sizing:inherit}.cds--overflow-menu,.cds--overflow-menu__trigger{align-items:center;block-size:2.5rem;cursor:pointer;display:flex;inline-size:2.5rem;justify-content:center;min-block-size:2.5rem;outline:2px solid transparent;outline-offset:-2px;position:relative;transition:outline .11s cubic-bezier(0,0,.38,.9),background-color .11s cubic-bezier(0,0,.38,.9)}.cds--overflow-menu:focus,.cds--overflow-menu__trigger:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--overflow-menu:focus,.cds--overflow-menu__trigger:focus{outline-style:dotted}}.cds--overflow-menu:hover,.cds--overflow-menu__trigger:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12))}.cds--overflow-menu>:first-child{margin-block-start:0}.cds--overflow-menu--xs{block-size:1.5rem;inline-size:1.5rem;min-block-size:1.5rem}.cds--overflow-menu--sm{block-size:2rem;inline-size:2rem;min-block-size:2rem}.cds--overflow-menu--lg{block-size:3rem;inline-size:3rem}.cds--overflow-menu__trigger.cds--tooltip--a11y.cds--tooltip__trigger:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--overflow-menu__trigger.cds--tooltip--a11y.cds--tooltip__trigger:focus{outline-style:dotted}}.cds--overflow-menu__trigger.cds--tooltip--a11y.cds--tooltip__trigger:focus svg{outline:none}.cds--overflow-menu.cds--overflow-menu--open,.cds--overflow-menu.cds--overflow-menu--open .cds--overflow-menu__trigger{background-color:var(--cds-layer);box-shadow:0 2px 6px var(--cds-shadow,rgba(0,0,0,.3));transition:none}.cds--overflow-menu--light.cds--overflow-menu--open,.cds--overflow-menu--light.cds--overflow-menu--open .cds--overflow-menu__trigger{background-color:var(--cds-layer)}.cds--overflow-menu__icon{block-size:1rem;fill:var(--cds-icon-primary,#161616);inline-size:1rem}.cds--overflow-menu__wrapper{line-height:0}.cds--overflow-menu-options{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--overflow-menu-options *,.cds--overflow-menu-options :after,.cds--overflow-menu-options :before{box-sizing:inherit}.cds--overflow-menu-options{align-items:flex-start;background-color:var(--cds-layer);box-shadow:0 2px 6px var(--cds-shadow,rgba(0,0,0,.3));display:none;flex-direction:column;inline-size:10rem;inset-block-start:2rem;inset-inline-start:0;list-style:none;position:absolute;z-index:6000}.cds--overflow-menu-options:after{background-color:var(--cds-layer);content:"";display:block;position:absolute;transition:background-color .11s cubic-bezier(0,0,.38,.9)}@media screen and (prefers-reduced-motion:reduce){.cds--overflow-menu-options:after{transition:none}}.cds--overflow-menu.cds--overflow-menu--open:hover{background-color:var(--cds-layer)}.cds--overflow-menu-options--light{background-color:var(--cds-layer-hover)}.cds--overflow-menu-options--light:after{background-color:var(--cds-layer)}.cds--overflow-menu.cds--overflow-menu--light.cds--overflow-menu--open:hover{background-color:var(--cds-layer-hover)}.cds--overflow-menu-options[data-floating-menu-direction=bottom]:not(.cds--breadcrumb-menu-options):after{block-size:.1875rem;inline-size:2.5rem;inset-block-start:-.1875rem;inset-inline-start:0}.cds--overflow-menu-options[data-floating-menu-direction=top]:after{block-size:.5rem;inline-size:2.5rem;inset-block-end:-.5rem;inset-inline-start:0}.cds--overflow-menu-options[data-floating-menu-direction=left]:after{block-size:2.5rem;inline-size:.375rem;inset-block-start:0;inset-inline-end:-.375rem}.cds--overflow-menu-options[data-floating-menu-direction=right]:after{block-size:2.5rem;inline-size:.375rem;inset-block-start:0;inset-inline-start:-.375rem}.cds--overflow-menu-options--xs.cds--overflow-menu-options[data-floating-menu-direction=bottom]:after,.cds--overflow-menu-options--xs.cds--overflow-menu-options[data-floating-menu-direction=top]:after{inline-size:1.5rem}.cds--overflow-menu-options--xs.cds--overflow-menu-options[data-floating-menu-direction=left]:after,.cds--overflow-menu-options--xs.cds--overflow-menu-options[data-floating-menu-direction=right]:after{block-size:1.5rem}.cds--overflow-menu-options--sm.cds--overflow-menu-options[data-floating-menu-direction=bottom]:after,.cds--overflow-menu-options--sm.cds--overflow-menu-options[data-floating-menu-direction=top]:after{inline-size:2rem}.cds--overflow-menu-options--sm.cds--overflow-menu-options[data-floating-menu-direction=left]:after,.cds--overflow-menu-options--sm.cds--overflow-menu-options[data-floating-menu-direction=right]:after{block-size:2rem}.cds--overflow-menu-options--lg.cds--overflow-menu-options[data-floating-menu-direction=bottom]:after,.cds--overflow-menu-options--lg.cds--overflow-menu-options[data-floating-menu-direction=top]:after{inline-size:3rem}.cds--overflow-menu-options--lg.cds--overflow-menu-options[data-floating-menu-direction=left]:after,.cds--overflow-menu-options--lg.cds--overflow-menu-options[data-floating-menu-direction=right]:after{block-size:3rem}.cds--overflow-menu--flip.cds--overflow-menu-options[data-floating-menu-direction=bottom]:after,.cds--overflow-menu--flip.cds--overflow-menu-options[data-floating-menu-direction=top]:after{inset-inline:auto 0}.cds--overflow-menu--flip.cds--overflow-menu-options[data-floating-menu-direction=left]:after,.cds--overflow-menu--flip.cds--overflow-menu-options[data-floating-menu-direction=right]:after{inset-block:auto 0}.cds--overflow-menu-options--open{display:flex}.cds--overflow-menu-options__content{inline-size:100%}.cds--overflow-menu-options__option{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;vertical-align:baseline}.cds--overflow-menu-options__option *,.cds--overflow-menu-options__option :after,.cds--overflow-menu-options__option :before{box-sizing:inherit}.cds--overflow-menu-options__option{align-items:center;background-color:transparent;block-size:2.5rem;display:flex;inline-size:100%;padding:0;transition:background-color .11s cubic-bezier(0,0,.38,.9)}.cds--overflow-menu-options--xs .cds--overflow-menu-options__option{block-size:1.5rem}.cds--overflow-menu-options--sm .cds--overflow-menu-options__option{block-size:2rem}.cds--overflow-menu-options--lg .cds--overflow-menu-options__option{block-size:3rem}.cds--overflow-menu--divider,.cds--overflow-menu--light .cds--overflow-menu--divider{border-block-start:1px solid var(--cds-border-subtle)}a.cds--overflow-menu-options__btn:before{block-size:100%;content:"";display:inline-block;vertical-align:middle}.cds--overflow-menu-options__btn{align-items:center;background-color:transparent;block-size:100%;border:none;color:var(--cds-text-secondary,#525252);cursor:pointer;display:inline-flex;font-family:inherit;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);font-weight:400;inline-size:100%;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);max-inline-size:11.25rem;outline:2px solid transparent;outline-offset:-2px;padding:0 1rem;text-align:start;transition:outline .11s cubic-bezier(0,0,.38,.9),background-color .11s cubic-bezier(0,0,.38,.9),color .11s cubic-bezier(0,0,.38,.9)}.cds--overflow-menu-options__btn:hover{color:var(--cds-text-primary,#161616)}.cds--overflow-menu-options__btn:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--overflow-menu-options__btn:focus{outline-style:dotted}}.cds--overflow-menu-options__btn::-moz-focus-inner{border:none}.cds--overflow-menu-options__btn svg{fill:var(--cds-icon-secondary,#525252)}.cds--overflow-menu-options__btn:hover svg{fill:var(--cds-icon-primary,#161616)}.cds--overflow-menu-options__option-content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cds--overflow-menu-options__option:hover{background-color:var(--cds-layer-hover)}.cds--overflow-menu-options__option--danger .cds--overflow-menu-options__btn:focus,.cds--overflow-menu-options__option--danger .cds--overflow-menu-options__btn:hover{background-color:var(--cds-button-danger-primary,#da1e28);color:var(--cds-text-on-color,#fff)}.cds--overflow-menu-options__option--danger .cds--overflow-menu-options__btn:focus svg,.cds--overflow-menu-options__option--danger .cds--overflow-menu-options__btn:hover svg{fill:currentColor}.cds--overflow-menu-options__option--disabled:hover{background-color:var(--cds-layer);cursor:not-allowed}.cds--overflow-menu-options__option--disabled .cds--overflow-menu-options__btn{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed}.cds--overflow-menu-options__option--disabled .cds--overflow-menu-options__btn:active,.cds--overflow-menu-options__option--disabled .cds--overflow-menu-options__btn:focus,.cds--overflow-menu-options__option--disabled .cds--overflow-menu-options__btn:hover{background-color:var(--cds-layer);color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:2px solid transparent;outline-offset:-2px}.cds--overflow-menu-options__option--disabled .cds--overflow-menu-options__btn svg{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--overflow-menu--flip{inset-inline-start:-140px}.cds--overflow-menu--flip:before{inset-inline-start:145px}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--overflow-menu-options__btn:focus,.cds--overflow-menu:focus{color:Highlight;outline:1px solid Highlight}}.cds--overflow-menu__top-end,.cds--overflow-menu__top-start{transform:translateY(calc(-100% - var(--cds-popover-offset, 2.5rem)))}.cds--text-input{--cds-layout-size-height-local:clamp(max(var(--cds-layout-size-height-min),var(--cds-layout-size-height-sm)),var(--cds-layout-size-height,var(--cds-layout-size-height-md)),min(var(--cds-layout-size-height-max),var(--cds-layout-size-height-lg)));--cds-layout-density-padding-inline-local:clamp(var(--cds-layout-density-padding-inline-min),var(--cds-layout-density-padding-inline,var(--cds-layout-density-padding-inline-normal)),var(--cds-layout-density-padding-inline-max));border:0;box-sizing:border-box;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--text-input *,.cds--text-input :after,.cds--text-input :before{box-sizing:inherit}.cds--text-input{background-color:var(--cds-field);block-size:var(--cds-layout-size-height-local);border:none;border-block-end:1px solid var(--cds-border-strong);color:var(--cds-text-primary,#161616);font-family:inherit;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);inline-size:100%;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);outline:2px solid transparent;outline-offset:-2px;padding:0 var(--cds-layout-density-padding-inline-local);transition:background-color 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9)}.cds--text-input:active,.cds--text-input:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--text-input:active,.cds--text-input:focus{outline-style:dotted}}.cds--text-input-wrapper svg[hidden]{display:none}.cds--password-input{padding-inline-end:2.5rem}.cds--text-input--sm.cds--password-input{padding-inline-end:2rem}.cds--text-input--lg.cds--password-input{padding-inline-end:3rem}.cds--text-input::-moz-placeholder{color:var(--cds-text-placeholder,hsla(0,0%,9%,.4));opacity:1}.cds--text-input::placeholder{color:var(--cds-text-placeholder,hsla(0,0%,9%,.4));opacity:1}.cds--text-input--light{background-color:var(--cds-field-02,#fff)}.cds--text-input__field-wrapper{display:flex;inline-size:100%;position:relative}.cds--text-input__invalid-icon{position:absolute;fill:var(--cds-support-error,#da1e28);inset-block-start:50%;inset-inline-end:1rem;transform:translateY(-50%)}.cds--text-input__invalid-icon--warning{fill:var(--cds-support-warning,#f1c21b)}.cds--text-input__invalid-icon--warning path:first-of-type{fill:#000;opacity:1}.cds--text-input--password__visibility{align-items:center;display:inline-flex;overflow:visible;position:relative}.cds--text-input--password__visibility:focus{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--text-input--password__visibility:focus{outline-style:dotted}}.cds--text-input--password__visibility{cursor:pointer}.cds--text-input--password__visibility:focus{outline:1px solid transparent}.cds--text-input--password__visibility:focus svg{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--text-input--password__visibility:focus svg{outline-style:dotted}}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after,.cds--text-input--password__visibility:before{align-items:center;display:flex;opacity:0;pointer-events:none;position:absolute;z-index:6000}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after,.cds--text-input--password__visibility:before{display:inline-block}}.cds--text-input--password__visibility:after,.cds--text-input--password__visibility:before{transition:opacity 70ms cubic-bezier(.2,0,.38,.9)}@media screen and (prefers-reduced-motion:reduce){.cds--text-input--password__visibility:after,.cds--text-input--password__visibility:before{transition:none}}.cds--text-input--password__visibility.cds--tooltip--a11y:after,.cds--text-input--password__visibility.cds--tooltip--a11y:before{transition:none}.cds--text-input--password__visibility:before{block-size:0;border-style:solid;content:"";inline-size:0}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text{box-sizing:content-box;color:inherit;opacity:1;white-space:normal;word-break:break-word}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after{background-color:var(--cds-background-inverse,#393939);block-size:auto;border-radius:.125rem;box-shadow:0 2px 6px var(--cds-shadow,rgba(0,0,0,.3));color:var(--cds-text-inverse,#fff);font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:400;font-weight:var(--cds-body-compact-01-font-weight,400);inline-size:-moz-max-content;inline-size:max-content;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);max-inline-size:13rem;min-inline-size:1.5rem;padding:.1875rem 1rem;text-align:start;transform:translateX(-50%);z-index:6000}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after{inline-size:auto}}@supports (-ms-accelerator:true){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after{inline-size:auto}}@supports (-ms-ime-align:auto){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after{inline-size:auto}}@media screen and (-ms-high-contrast:active),screen and (prefers-contrast){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after{border:1px solid transparent}}.cds--text-input--password__visibility:after{content:attr(aria-label)}.cds--text-input--password__visibility.cds--tooltip--a11y:after{content:none}.cds--text-input--password__visibility.cds--tooltip--visible:after,.cds--text-input--password__visibility.cds--tooltip--visible:before,.cds--text-input--password__visibility:focus:after,.cds--text-input--password__visibility:focus:before,.cds--text-input--password__visibility:hover:after,.cds--text-input--password__visibility:hover:before{opacity:1}@keyframes cds--tooltip-fade{0%{opacity:0}to{opacity:1}}.cds--text-input--password__visibility.cds--tooltip--visible .cds--assistive-text,.cds--text-input--password__visibility.cds--tooltip--visible+.cds--assistive-text,.cds--text-input--password__visibility:focus .cds--assistive-text,.cds--text-input--password__visibility:focus+.cds--assistive-text,.cds--text-input--password__visibility:hover .cds--assistive-text,.cds--text-input--password__visibility:hover+.cds--assistive-text{margin:auto;overflow:visible;clip:auto}.cds--text-input--password__visibility.cds--tooltip--visible .cds--assistive-text,.cds--text-input--password__visibility.cds--tooltip--visible+.cds--assistive-text,.cds--text-input--password__visibility.cds--tooltip--visible.cds--tooltip--a11y:before,.cds--text-input--password__visibility:focus .cds--assistive-text,.cds--text-input--password__visibility:focus+.cds--assistive-text,.cds--text-input--password__visibility:focus.cds--tooltip--a11y:before,.cds--text-input--password__visibility:hover .cds--assistive-text,.cds--text-input--password__visibility:hover+.cds--assistive-text,.cds--text-input--password__visibility:hover.cds--tooltip--a11y:before{animation:cds--tooltip-fade 70ms cubic-bezier(.2,0,.38,.9)}.cds--text-input--password__visibility.cds--tooltip--hidden .cds--assistive-text,.cds--text-input--password__visibility.cds--tooltip--hidden+.cds--assistive-text{margin:-1px;overflow:hidden;clip:rect(0,0,0,0)}.cds--text-input--password__visibility.cds--tooltip--hidden.cds--tooltip--a11y:before{animation:none;opacity:0}.cds--text-input--password__visibility .cds--assistive-text:after{block-size:.75rem;content:"";display:block;inline-size:100%;inset-block-start:-.75rem;inset-inline-start:0;position:absolute}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after,.cds--text-input--password__visibility:before{inset-block-end:0;inset-inline-start:50%}.cds--text-input--password__visibility:before{border-color:transparent transparent var(--cds-background-inverse,#393939);border-width:0 .25rem .3125rem;inset-block-end:-.5rem;transform:translate(-50%,100%)}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after{inset-block-end:-.8125rem;transform:translate(-50%,100%)}.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger{align-items:center;background:none;block-size:100%;border:0;cursor:pointer;display:flex;inline-size:2.5rem;inset-inline-end:0;justify-content:center;min-block-size:auto;outline:2px solid transparent;outline-offset:-2px;padding:0;position:absolute;transition:outline 70ms cubic-bezier(.2,0,.38,.9)}.cds--toggle-password-tooltip .cds--popover{inset-inline-start:-2.5rem}.cds--toggle-password-tooltip .cds--popover-content{min-inline-size:2.5rem}.cds--text-input--sm+.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger{inline-size:2rem}.cds--text-input--lg+.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger{inline-size:3rem}.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger svg{fill:var(--cds-icon-primary,#161616)}.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger:focus{outline-style:dotted}}.cds--text-input--invalid,.cds--text-input--warning{padding-inline-end:2.5rem}.cds--text-input--invalid.cds--password-input{padding-inline-end:4rem}.cds--text-input--invalid+.cds--text-input--password__visibility__toggle{inset-inline-end:1rem}.cds--password-input-wrapper .cds--text-input__invalid-icon{inset-inline-end:2.5rem}.cds--text-input:disabled~.cds--text-input--password__visibility__toggle.cds--tooltip__trigger{cursor:not-allowed}.cds--text-input--password__visibility__toggle:disabled.cds--tooltip__trigger svg,.cds--text-input:disabled~.cds--text-input--password__visibility__toggle.cds--tooltip__trigger svg,.cds--text-input:disabled~.cds--text-input--password__visibility__toggle.cds--tooltip__trigger svg:hover{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--text-input--password__visibility__toggle:disabled.cds--tooltip__trigger{cursor:default}.cds--text-input--password__visibility__toggle:disabled.cds--tooltip__trigger:hover svg{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--text-input--password__visibility__toggle:disabled.cds--tooltip__trigger:hover{cursor:default}.cds--text-input__counter-alert{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px}.cds--text-input:disabled{background-color:var(--cds-field);border-block-end:1px solid transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed;outline:2px solid transparent;outline-offset:-2px;-webkit-text-fill-color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--text-input--light:disabled{background-color:var(--cds-field-02,#fff)}.cds--text-input:disabled::-moz-placeholder{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));opacity:1}.cds--text-input:disabled::placeholder{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));opacity:1}.cds--text-input--invalid{outline:2px solid var(--cds-support-error,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.cds--text-input--invalid{outline-style:dotted}}.cds--text-input--invalid{box-shadow:none}.cds--text-input--invalid .cds--text-input--password__visibility__toggle{inset-inline-end:2.5rem}.cds--skeleton.cds--text-input{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--skeleton.cds--text-input:active,.cds--skeleton.cds--text-input:focus,.cds--skeleton.cds--text-input:hover{border:none;cursor:default;outline:none}.cds--skeleton.cds--text-input:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--skeleton.cds--text-input:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--skeleton.cds--text-input{background:CanvasText}.cds--skeleton.cds--text-input:before{background:Canvas;forced-color-adjust:none}}.cds--form--fluid .cds--text-input-wrapper{background:var(--cds-field);position:relative;transition:background-color 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9)}.cds--form--fluid .cds--label{align-items:center;block-size:1rem;display:flex;inset-block-start:.8125rem;inset-inline-start:1rem;margin:0;position:absolute;z-index:1}.cds--form--fluid .cds--form__helper-text{display:none}.cds--form--fluid .cds--text-input{min-block-size:4rem;padding:2rem 1rem .8125rem}.cds--form--fluid .cds--text-input__divider,.cds--text-input__divider{display:none}.cds--form--fluid .cds--text-input--invalid,.cds--form--fluid .cds--text-input--warning{border-block-end:none}.cds--form--fluid .cds--text-input--invalid+.cds--text-input__divider,.cds--form--fluid .cds--text-input--warning+.cds--text-input__divider{border-color:var(--cds-border-subtle);border-style:solid;border-block-end:none;display:block;margin:0 1rem}.cds--form--fluid .cds--text-input__invalid-icon{inset-block-start:5rem}.cds--form--fluid .cds--text-input__field-wrapper--warning>.cds--text-input--warning,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid{outline:none}.cds--form--fluid .cds--text-input__field-wrapper--warning{border-block-end:1px solid var(--cds-border-strong)}.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]:not(:focus){outline:2px solid var(--cds-support-error,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]:not(:focus){outline-style:dotted}}.cds--form--fluid .cds--text-input__field-wrapper--warning:focus-within,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]:focus-within{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--form--fluid .cds--text-input__field-wrapper--warning:focus-within,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]:focus-within{outline-style:dotted}}.cds--form--fluid .cds--text-input__field-wrapper--warning>.cds--text-input--warning:focus,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:focus{outline:none}.cds--text-input-wrapper.cds--text-input-wrapper--inline{flex-flow:row wrap}.cds--text-input-wrapper .cds--label--inline{flex:1;margin:.8125rem 0 0;overflow-wrap:break-word;word-break:break-word}.cds--text-input-wrapper .cds--label--inline--sm{margin-block-start:.5625rem}.cds--text-input-wrapper .cds--label--inline--lg{margin-block-start:1.0625rem}.cds--text-input__label-helper-wrapper{flex:2;flex-direction:column;margin-inline-end:1.5rem;max-inline-size:8rem;overflow-wrap:break-word}.cds--text-input-wrapper .cds--form__helper-text--inline{margin-block-start:.125rem}.cds--text-input__field-outer-wrapper{align-items:flex-start;display:flex;flex:1 1 auto;flex-direction:column;inline-size:100%}.cds--text-input__field-outer-wrapper--inline{flex:8;flex-direction:column}.cds--text-input-wrapper--inline .cds--form-requirement{display:block;font-weight:400;max-block-size:12.5rem;overflow:visible}.cds--text-input-wrapper--inline--invalid .cds--form-requirement{color:var(--cds-text-error,#da1e28)}.cds--form--fluid .cds--text-input-wrapper--readonly,.cds--text-input-wrapper--readonly .cds--text-input{background:transparent;border-block-end-color:var(--cds-border-subtle)}.cds--text-input__field-wrapper .cds--ai-label,.cds--text-input__field-wrapper .cds--slug,.cds--text-input__field-wrapper--decorator .cds--text-input__field-inner-wrapper--decorator>*{inset-block-start:50%;inset-inline-end:1rem;position:absolute;transform:translateY(-50%)}.cds--text-input__field-wrapper--decorator .cds--text-input:has(~.cds--text-input__field-inner-wrapper--decorator .cds--ai-label):not(:has(~.cds--text-input__field-inner-wrapper--decorator .cds--ai-label--revert)),.cds--text-input__field-wrapper--slug .cds--text-input:has(~.cds--ai-label):not(:has(~.cds--ai-label--revert)),.cds--text-input__field-wrapper--slug .cds--text-input:has(~.cds--slug):not(:has(~.cds--slug--revert)){background-image:linear-gradient(0deg,var(--cds-ai-aura-start-sm,rgba(69,137,255,.16)) 0,15%,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%,transparent 100%);border-block-end-color:var(--cds-ai-border-strong,#4589ff)}.cds--text-input__field-wrapper--decorator .cds--text-input:has(~.cds--text-input__field-inner-wrapper--decorator>*),.cds--text-input__field-wrapper--slug .cds--text-input:has(~.cds--ai-label),.cds--text-input__field-wrapper--slug .cds--text-input:has(~.cds--slug){padding-inline-end:2.5rem}.cds--text-input--invalid:has(~.cds--ai-label),.cds--text-input--invalid:has(~.cds--slug),.cds--text-input--invalid:has(~.cds--text-input__field-inner-wrapper--decorator>*),.cds--text-input--warning:has(~.cds--ai-label),.cds--text-input--warning:has(~.cds--slug),.cds--text-input--warning:has(~.cds--text-input__field-inner-wrapper--decorator>*){padding-inline-end:4rem}.cds--text-input--invalid~.cds--ai-label,.cds--text-input--invalid~.cds--slug,.cds--text-input--invalid~.cds--text-input__field-inner-wrapper--decorator>*,.cds--text-input--warning~.cds--ai-label,.cds--text-input--warning~.cds--slug,.cds--text-input--warning~.cds--text-input__field-inner-wrapper--decorator>*{inset-inline-end:2.5rem}.cds--text-input__field-wrapper--decorator .cds--text-input__field-inner-wrapper--decorator:not(:has(.cds--ai-label))>*{block-size:1rem}.cds--text-input__label-wrapper{display:flex;inline-size:100%;justify-content:space-between}.cds--search{align-items:center;display:flex;inline-size:100%;position:relative}.cds--search .cds--label{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--search-input{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--search-input *,.cds--search-input :after,.cds--search-input :before{box-sizing:inherit}.cds--search-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--cds-field);border:none;border-block-end:1px solid var(--cds-border-strong);color:var(--cds-text-primary,#161616);font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);inline-size:100%;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);order:1;outline:2px solid transparent;outline-offset:-2px;padding:0 2.5rem;text-overflow:ellipsis;transition:background-color .11s cubic-bezier(.2,0,.38,.9),outline .11s cubic-bezier(.2,0,.38,.9)}.cds--search-input:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--search-input:focus{outline-style:dotted}}.cds--search-input::-moz-placeholder{color:var(--cds-text-placeholder,hsla(0,0%,9%,.4));opacity:1}.cds--search-input::placeholder{color:var(--cds-text-placeholder,hsla(0,0%,9%,.4));opacity:1}.cds--search-input::-ms-clear{display:none}.cds--search-input::-webkit-search-cancel-button,.cds--search-input::-webkit-search-decoration,.cds--search-input::-webkit-search-results-button,.cds--search-input::-webkit-search-results-decoration{-webkit-appearance:none;appearance:none;display:none}.cds--search-input[disabled]{background-color:var(--cds-field);border-block-end:1px solid transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed}.cds--search-input[disabled]::-moz-placeholder{color:var(--cds-field)}.cds--search-input[disabled]::placeholder{color:var(--cds-field)}.cds--search--light .cds--search-close:before,.cds--search--light .cds--search-input{background:var(--cds-field-02,#fff)}.cds--search--sm .cds--search-input,.cds--search--sm.cds--search--expandable.cds--search--expanded .cds--search-input{block-size:2rem;padding:0 2rem}.cds--search--sm .cds--search-magnifier-icon{inset-inline-start:.5rem}.cds--search--md .cds--search-input,.cds--search--md.cds--search--expandable.cds--search--expanded .cds--search-input{block-size:2.5rem;padding:0 2.5rem}.cds--search--md .cds--search-magnifier-icon{inset-inline-start:.75rem}.cds--search--lg .cds--search-input,.cds--search--lg.cds--search--expandable.cds--search--expanded .cds--search-input{block-size:3rem;padding:0 3rem}.cds--search-magnifier-icon{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--search-magnifier-icon *,.cds--search-magnifier-icon :after,.cds--search-magnifier-icon :before{box-sizing:inherit}.cds--search-magnifier-icon{block-size:1rem;position:absolute;z-index:2;fill:var(--cds-icon-secondary,#525252);inline-size:1rem;inset-block-start:50%;inset-inline-start:1rem;pointer-events:none;transform:translateY(-50%)}.cds--search-close{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--search-close *,.cds--search-close :after,.cds--search-close :before{box-sizing:inherit}.cds--search-close::-moz-focus-inner{border:0}.cds--search-close{inset-block-start:0;inset-inline-end:0;outline:2px solid transparent;outline-offset:-2px;position:absolute}.cds--search-close:before{background-color:var(--cds-field);block-size:calc(100% - 2px);content:"";display:block;inline-size:2px;inset-block-start:.0625rem;inset-inline-start:0;position:absolute;transition:background-color .11s cubic-bezier(.2,0,.38,.9)}@media screen and (prefers-reduced-motion:reduce){.cds--search-close:before{transition:none}}.cds--search-close:hover{border-block-end:1px solid var(--cds-border-strong)}.cds--search-close:hover:before{background-color:var(--cds-field-hover)}.cds--search-button{background-color:var(--cds-field);flex-shrink:0;margin-inline-start:.125rem}.cds--search-button svg{fill:currentColor;vertical-align:middle}.cds--search-close svg{fill:inherit}.cds--search-button,.cds--search-close{align-items:center;block-size:2.5rem;border-color:transparent;border-style:solid;border-width:1px 0;cursor:pointer;display:flex;justify-content:center;fill:var(--cds-icon-primary,#161616);inline-size:2.5rem;opacity:1;transition:opacity .11s cubic-bezier(.2,0,.38,.9),background-color .11s cubic-bezier(.2,0,.38,.9),outline .11s cubic-bezier(.2,0,.38,.9),border .11s cubic-bezier(.2,0,.38,.9);visibility:inherit}.cds--search-button:hover,.cds--search-close:hover{background-color:var(--cds-field-hover)}.cds--search-button:focus,.cds--search-close:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--search-button:focus,.cds--search-close:focus{outline-style:dotted}}.cds--search-button:active,.cds--search-close:active{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--search-button:active,.cds--search-close:active{outline-style:dotted}}.cds--search-button:active,.cds--search-close:active{background-color:var(--cds-background-selected,hsla(0,0%,55%,.2))}.cds--search--disabled .cds--search-close,.cds--search--disabled.cds--search--expandable .cds--search-magnifier{cursor:not-allowed;outline:none}.cds--search--disabled .cds--search-close:hover,.cds--search--disabled.cds--search--expandable .cds--search-magnifier:hover{background-color:transparent;border-block-end-color:transparent}.cds--search--disabled .cds--search-close:hover:before,.cds--search--disabled.cds--search--expandable .cds--search-magnifier:hover:before{background-color:transparent}.cds--search--disabled svg{fill:var(--cds-icon-on-color-disabled,#8d8d8d)}.cds--search-close:active:before,.cds--search-close:focus:before{background-color:var(--cds-focus,#0f62fe)}.cds--search-input:focus~.cds--search-close:hover{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--search-input:focus~.cds--search-close:hover{outline-style:dotted}}.cds--search--sm .cds--search-close,.cds--search--sm.cds--search--expandable,.cds--search--sm.cds--search--expandable .cds--search-magnifier,.cds--search--sm~.cds--search-button{block-size:2rem;inline-size:2rem}.cds--search--sm.cds--search--expandable .cds--search-input::-moz-placeholder{padding:0 2rem}.cds--search--sm.cds--search--expandable .cds--search-input::placeholder{padding:0 2rem}.cds--search--md .cds--search-close,.cds--search--md.cds--search--expandable,.cds--search--md.cds--search--expandable .cds--search-magnifier,.cds--search--md~.cds--search-button{block-size:2.5rem;inline-size:2.5rem}.cds--search--md.cds--search--expandable .cds--search-input::-moz-placeholder{padding:0 2.5rem}.cds--search--md.cds--search--expandable .cds--search-input::placeholder{padding:0 2.5rem}.cds--search--lg .cds--search-close,.cds--search--lg.cds--search--expandable,.cds--search--lg.cds--search--expandable .cds--search-magnifier,.cds--search--lg~.cds--search-button{block-size:3rem;inline-size:3rem}.cds--search--lg.cds--search--expandable .cds--search-input::-moz-placeholder{padding:0 3rem}.cds--search--lg.cds--search--expandable .cds--search-input::placeholder{padding:0 3rem}.cds--search-close--hidden{opacity:0;visibility:hidden}.cds--search--lg.cds--skeleton .cds--search-input,.cds--search--md.cds--skeleton .cds--search-input,.cds--search--sm.cds--skeleton .cds--search-input{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--search--lg.cds--skeleton .cds--search-input:active,.cds--search--lg.cds--skeleton .cds--search-input:focus,.cds--search--lg.cds--skeleton .cds--search-input:hover,.cds--search--md.cds--skeleton .cds--search-input:active,.cds--search--md.cds--skeleton .cds--search-input:focus,.cds--search--md.cds--skeleton .cds--search-input:hover,.cds--search--sm.cds--skeleton .cds--search-input:active,.cds--search--sm.cds--skeleton .cds--search-input:focus,.cds--search--sm.cds--skeleton .cds--search-input:hover{border:none;cursor:default;outline:none}.cds--search--lg.cds--skeleton .cds--search-input:before,.cds--search--md.cds--skeleton .cds--search-input:before,.cds--search--sm.cds--skeleton .cds--search-input:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--search--lg.cds--skeleton .cds--search-input:before,.cds--search--md.cds--skeleton .cds--search-input:before,.cds--search--sm.cds--skeleton .cds--search-input:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--search--lg.cds--skeleton .cds--search-input,.cds--search--md.cds--skeleton .cds--search-input,.cds--search--sm.cds--skeleton .cds--search-input{background:CanvasText}.cds--search--lg.cds--skeleton .cds--search-input:before,.cds--search--md.cds--skeleton .cds--search-input:before,.cds--search--sm.cds--skeleton .cds--search-input:before{background:Canvas;forced-color-adjust:none}}.cds--search--lg.cds--skeleton .cds--search-input,.cds--search--md.cds--skeleton .cds--search-input,.cds--search--sm.cds--skeleton .cds--search-input{inline-size:100%}.cds--search--lg.cds--skeleton .cds--search-input::-moz-placeholder,.cds--search--md.cds--skeleton .cds--search-input::-moz-placeholder,.cds--search--sm.cds--skeleton .cds--search-input::-moz-placeholder{color:transparent}.cds--search--lg.cds--skeleton .cds--search-input::placeholder,.cds--search--md.cds--skeleton .cds--search-input::placeholder,.cds--search--sm.cds--skeleton .cds--search-input::placeholder{color:transparent}.cds--search--expandable{transition:width 70ms cubic-bezier(.2,0,.38,.9)}.cds--search--expandable.cds--search--expanded{inline-size:100%}.cds--search--expandable .cds--search-input{inline-size:0;padding:0;transition:transform 70ms cubic-bezier(.2,0,.38,.9)}.cds--search--expandable .cds--search-input::-moz-placeholder{opacity:0;position:relative;transition-duration:70ms;-moz-transition-property:padding,opacity;transition-property:padding,opacity;transition-timing-function:cubic-bezier(.2,0,.38,.9)}.cds--search--expandable .cds--search-input::placeholder{opacity:0;position:relative;transition-duration:70ms;transition-property:padding,opacity;transition-timing-function:cubic-bezier(.2,0,.38,.9)}.cds--search--expandable.cds--search--expanded .cds--search-input{inline-size:100%;transition:padding 70ms cubic-bezier(.2,0,.38,.9)}.cds--search--expandable.cds--search--expanded .cds--search-input::-moz-placeholder{opacity:1;padding:0;position:relative}.cds--search--expandable.cds--search--expanded .cds--search-input::placeholder{opacity:1;padding:0;position:relative}.cds--search--expandable .cds--search-magnifier{cursor:pointer;position:absolute}.cds--search--expandable .cds--search-magnifier:focus{outline:2px solid var(--cds-focus,#0f62fe)}.cds--search--expandable .cds--search-magnifier:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12))}.cds--search--expandable.cds--search--expanded .cds--search-magnifier{pointer-events:none}.cds--search--expandable .cds--search-magnifier-icon{fill:var(--cds-icon-primary,#161616)}.cds--search--expandable.cds--search--expanded .cds--search-magnifier-icon{fill:var(--cds-icon-secondary,#525252)}.cds--search--expandable.cds--search--disabled svg{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--search-magnifier-tooltip{align-items:center;display:flex;justify-content:center}.cds--search-magnifier-tooltip .cds--search-magnifier{position:relative}.cds--table-toolbar,:host(cds-table-toolbar){background-color:var(--cds-layer);display:flex;inline-size:100%;min-block-size:3rem;position:relative;z-index:1}.cds--toolbar-content,:host(cds-table-toolbar-content){block-size:3rem;display:flex;inline-size:100%;justify-content:flex-end;transform:translateZ(0);transition:transform .11s cubic-bezier(.2,0,.38,.9),clip-path .11s cubic-bezier(.2,0,.38,.9)}.cds--toolbar-content .cds--search .cds--search-input,:host(cds-table-toolbar-content) .cds--search .cds--search-input{background-color:transparent;block-size:3rem;padding:0 3rem}.cds--toolbar-content .cds--overflow-menu,:host(cds-table-toolbar-content) .cds--overflow-menu{block-size:3rem;inline-size:3rem}.cds--batch-actions~.cds--toolbar-search-container,:host(cds-table-batch-actions)~.cds--toolbar-search-container{align-items:center;display:flex;opacity:1;transition:opacity .11s}.cds--toolbar-search-container-expandable,:host(cds-table-toolbar-search){block-size:3rem;box-shadow:none;cursor:pointer;inline-size:3rem;position:relative;transition:width .3s cubic-bezier(.5,0,.1,1),background-color .11s cubic-bezier(0,0,.38,.9)}.cds--toolbar-search-container-expandable:hover{background-color:var(--cds-field-hover)}.cds--search.cds--toolbar-search-container-expandable{inline-size:3rem}.cds--toolbar-search-container-expandable .cds--search-input,:host(cds-table-toolbar-search) .cds--search-input{block-size:100%;cursor:pointer;opacity:0}.cds--toolbar-search-container-expandable:not(.cds--toolbar-search-container-active) .cds--search-input,:not(.cds--toolbar-search-container-active):host(cds-table-toolbar-search) .cds--search-input{padding:0}.cds--toolbar-search-container-disabled .cds--search-input{cursor:not-allowed}.cds--toolbar-search-container-expandable.cds--search .cds--label{visibility:hidden}.cds--toolbar-search-container-expandable.cds--search .cds--search-close{block-size:3rem;inline-size:3rem}.cds--toolbar-search-container-expandable.cds--search .cds--search-close:before{background-color:var(--cds-field-hover);block-size:calc(100% - .25rem);inset-block-start:.125rem}.cds--toolbar-search-container-expandable.cds--search .cds--search-close:focus:before{background-color:var(--cds-focus,#0f62fe)}.cds--table-toolbar .cds--search--lg .cds--search-magnifier-icon,:host(cds-table-toolbar) .cds--search--lg .cds--search-magnifier-icon{inset-inline-start:0}.cds--table-toolbar:not(.cds--table-toolbar--sm) .cds--toolbar-search-container-persistent.cds--search--lg .cds--search-magnifier-icon,:not(.cds--table-toolbar--sm):host(cds-table-toolbar) .cds--toolbar-search-container-persistent.cds--search--lg .cds--search-magnifier-icon{inset-inline-start:1rem}.cds--table-toolbar.cds--table-toolbar--sm .cds--search--sm:not(.cds--toolbar-search-container-active):not(.cds--toolbar-search-container-persistent) .cds--search-magnifier-icon,:host(cds-table-toolbar):host(cds-table-toolbar[size=sm]) .cds--search--sm:not(.cds--toolbar-search-container-active):not(.cds--toolbar-search-container-persistent) .cds--search-magnifier-icon,:host(cds-table-toolbar):host(cds-table-toolbar[size=xs]) .cds--search--sm:not(.cds--toolbar-search-container-active):not(.cds--toolbar-search-container-persistent) .cds--search-magnifier-icon{inset-inline-start:0}.cds--table-toolbar.cds--table-toolbar--sm .cds--search--sm.cds--toolbar-search-container-active .cds--search-magnifier-icon,:host(cds-table-toolbar):host(cds-table-toolbar[size=sm]) .cds--search--sm.cds--toolbar-search-container-active .cds--search-magnifier-icon,:host(cds-table-toolbar):host(cds-table-toolbar[size=xs]) .cds--search--sm.cds--toolbar-search-container-active .cds--search-magnifier-icon{inset-inline-start:.5rem}.cds--table-toolbar .cds--toolbar-search-container-persistent.cds--search--sm .cds--search-magnifier-icon,:host(cds-table-toolbar) .cds--toolbar-search-container-persistent.cds--search--sm .cds--search-magnifier-icon{inset-inline-start:.5rem}.cds--toolbar-search-container-expandable .cds--search-magnifier-icon,:host(cds-table-toolbar-search) .cds--search-magnifier-icon{block-size:3rem;inline-size:3rem;padding:1rem}.cds--toolbar-search-container-expandable.cds--search--disabled .cds--search-magnifier-icon{background-color:var(--cds-layer);cursor:not-allowed;transition:background-color none}.cds--toolbar-search-container-active .cds--search-magnifier-icon:active,.cds--toolbar-search-container-active .cds--search-magnifier-icon:focus,.cds--toolbar-search-container-active .cds--search-magnifier-icon:hover,:host(cds-table-toolbar-search[expanded]) .cds--search-magnifier-icon:active,:host(cds-table-toolbar-search[expanded]) .cds--search-magnifier-icon:focus,:host(cds-table-toolbar-search[expanded]) .cds--search-magnifier-icon:hover{background-color:transparent;border:none;outline:none}.cds--toolbar-search-container-active.cds--search{inline-size:100%}.cds--toolbar-search-container-active .cds--search-input,:host(cds-table-toolbar-search[expanded]) .cds--search-input{opacity:1}.cds--toolbar-search-container-active .cds--label,.cds--toolbar-search-container-active .cds--search-input,:host(cds-table-toolbar-search[expanded]) .cds--label,:host(cds-table-toolbar-search[expanded]) .cds--search-input{cursor:text;padding:0 3rem}.cds--toolbar-search-container-active .cds--search-input:focus+.cds--search-close,:host(cds-table-toolbar-search[expanded]) .cds--search-input:focus+.cds--search-close{border:none;box-shadow:none;outline:none}.cds--toolbar-search-container-active .cds--search-input:not(:-moz-placeholder-shown),:host(cds-table-toolbar-search[expanded]) .cds--search-input:not(:-moz-placeholder-shown){background-color:var(--cds-field-hover);border:none}.cds--toolbar-search-container-active .cds--search-input:not(:placeholder-shown),:host(cds-table-toolbar-search[expanded]) .cds--search-input:not(:placeholder-shown){background-color:var(--cds-field-hover);border:none}.cds--toolbar-search-container-active .cds--search-close,.cds--toolbar-search-container-active .cds--search-close:hover,.cds--toolbar-search-container-persistent .cds--search-close,.cds--toolbar-search-container-persistent .cds--search-close:hover,:host(cds-table-toolbar-search[expanded]) .cds--search-close{background-color:transparent;border:none}.cds--toolbar-search-container-persistent .cds--search-close:before{display:none}.cds--overflow-menu.cds--toolbar-action{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--overflow-menu.cds--toolbar-action *,.cds--overflow-menu.cds--toolbar-action :after,.cds--overflow-menu.cds--toolbar-action :before{box-sizing:inherit}.cds--overflow-menu.cds--toolbar-action::-moz-focus-inner{border:0}.cds--overflow-menu.cds--toolbar-action{block-size:3rem;cursor:pointer;display:flex;inline-size:3rem;padding:1rem;transition:background .11s cubic-bezier(0,0,.38,.9)}.cds--toolbar-action,:host(cds-table-toolbar-search){-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--toolbar-action *,.cds--toolbar-action :after,.cds--toolbar-action :before,:host(cds-table-toolbar-search) *,:host(cds-table-toolbar-search) :after,:host(cds-table-toolbar-search) :before{box-sizing:inherit}.cds--toolbar-action::-moz-focus-inner{border:0}.cds--toolbar-action,:host(cds-table-toolbar-search){block-size:3rem;cursor:pointer;display:flex;inline-size:3rem;transition:background .11s cubic-bezier(0,0,.38,.9)}.cds--toolbar-action:hover:not([disabled]){background-color:var(--cds-field-hover)}.cds--toolbar-action:hover[aria-expanded=true],.cds--toolbar-action[aria-expanded=true]{background-color:var(--cds-layer-02,#fff)}.cds--toolbar-action[disabled]{cursor:not-allowed}.cds--toolbar-action[disabled] .cds--toolbar-action__icon{cursor:not-allowed;fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--toolbar-action:active:not([disabled]),.cds--toolbar-action:focus:not([disabled]){outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--toolbar-action:active:not([disabled]),.cds--toolbar-action:focus:not([disabled]){outline-style:dotted}}.cds--toolbar-action:active:not([disabled]).cds--toolbar-search-container-expandable,.cds--toolbar-action:focus:not([disabled]).cds--toolbar-search-container-expandable{outline:none}.cds--toolbar-action~.cds--btn,:host(cds-table-toolbar-search)~.cds--btn{margin:0;max-inline-size:none;white-space:nowrap}.cds--overflow-menu--data-table{block-size:3rem}.cds--toolbar-action__icon{block-size:1rem;fill:var(--cds-icon-primary,#161616);inline-size:auto;max-inline-size:1rem}.cds--toolbar-action__menu,.cds--toolbar-action__menu.cds--overflow-menu-options:after{background-color:var(--cds-layer-02,#fff)}.cds--toolbar-search-container-persistent{block-size:3rem;inline-size:100%;opacity:1;position:relative}.cds--toolbar-search-container-persistent+.cds--toolbar-content,.cds--toolbar-search-container-persistent+:host(cds-table-toolbar-content){inline-size:auto;position:relative}.cds--toolbar-search-container-persistent .cds--search{position:static}.cds--toolbar-search-container-persistent .cds--search-magnifier-icon{inset-inline-start:1rem}.cds--toolbar-search-container-persistent .cds--search-input{block-size:3rem;border:none;padding:0 3rem}.cds--toolbar-search-container-persistent .cds--search-input:focus:not([disabled]){outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--toolbar-search-container-persistent .cds--search-input:focus:not([disabled]){outline-style:dotted}}.cds--toolbar-search-container-persistent .cds--search-input:hover:not([disabled]){background-color:var(--cds-field-hover)}.cds--toolbar-search-container-persistent .cds--search-input:not(:-moz-placeholder-shown){background-color:var(--cds-field-hover)}.cds--toolbar-search-container-persistent .cds--search-input:active:not([disabled]),.cds--toolbar-search-container-persistent .cds--search-input:not(:placeholder-shown){background-color:var(--cds-field-hover)}.cds--toolbar-search-container-persistent .cds--search-close{block-size:3rem;inline-size:3rem}.cds--batch-actions--active~.cds--toolbar-content,.cds--batch-actions--active~.cds--toolbar-search-container,.cds--batch-actions--active~:host(cds-table-toolbar-content),:host(cds-table-batch-actions[active])~.cds--toolbar-content,:host(cds-table-batch-actions[active])~.cds--toolbar-search-container,:host(cds-table-batch-actions[active])~:host(cds-table-toolbar-content){clip-path:polygon(0 0,100% 0,100% 0,0 0);transform:translate3d(0,48px,0);transition:transform .11s cubic-bezier(.2,0,.38,.9),clip-path .11s cubic-bezier(.2,0,.38,.9)}.cds--batch-actions,:host(cds-table-batch-actions){align-items:center;background-color:var(--cds-background-brand,#0f62fe);clip-path:polygon(0 0,100% 0,100% 0,0 0);display:flex;inset-block-end:0;inset-inline:0;justify-content:space-between;opacity:0;pointer-events:none;position:absolute;transform:translate3d(0,48px,0);transition:transform .11s cubic-bezier(.2,0,.38,.9),clip-path .11s cubic-bezier(.2,0,.38,.9),opacity .11s cubic-bezier(.2,0,.38,.9);will-change:transform}.cds--batch-actions:focus{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--batch-actions:focus{outline-style:dotted}}.cds--batch-actions--active,:host(cds-table-batch-actions[active]){clip-path:polygon(0 0,300% 0,300% 300%,0 300%);opacity:1;pointer-events:all;transform:translateZ(0);z-index:1}.cds--action-list{align-items:center;display:flex}.cds--action-list .cds--btn,.cds--batch-summary .cds--btn{color:var(--cds-text-on-color,#fff);padding-inline:1rem 1rem;white-space:nowrap}.cds--action-list .cds--btn:disabled{background-color:transparent;border-color:transparent;color:var(--cds-text-on-color,#fff);opacity:.5}.cds--action-list .cds--btn .cds--btn__icon{position:static;fill:var(--cds-icon-on-color,#fff);margin-inline-start:.5rem}.cds--action-list .cds--btn .cds--btn__icon .st0{fill:none}.cds--batch-download{padding:.0625rem}.cds--action-list .cds--btn--primary:after,.cds--action-list .cds--btn--primary:before,.cds--action-list .cds--btn--primary:focus:after,.cds--action-list .cds--btn--primary:focus:before{display:none}.cds--action-list .cds--btn--primary:focus,.cds--batch-summary .cds--btn--primary:focus{outline:2px solid var(--cds-layer);outline-offset:-.125rem}.cds--action-list .cds--btn--primary:nth-child(3):focus+.cds--btn--primary.cds--batch-summary__cancel:before,.cds--action-list .cds--btn--primary:nth-child(3):hover+.cds--btn--primary.cds--batch-summary__cancel:before{opacity:0}.cds--btn--primary.cds--batch-summary__cancel:before{background-color:var(--cds-text-on-color,#fff);block-size:1rem;border:none;content:"";display:block;inline-size:.0625rem;inset-block-start:.9375rem;inset-inline-start:0;opacity:1;position:absolute;transition:opacity .11s cubic-bezier(.2,0,.38,.9)}.cds--btn--primary.cds--batch-summary__cancel:hover:before{opacity:0;transition:opacity .25s cubic-bezier(.5,0,.1,1)}.cds--batch-summary{align-items:center;background-color:var(--cds-background-brand,#0f62fe);color:var(--cds-text-on-color,#fff);display:flex;inset-inline-start:0;min-block-size:3rem;padding:0 1rem;position:sticky;z-index:100000}.cds--batch-summary__scroll{box-shadow:.5px 0 .2px var(--cds-link-primary-hover,#0043ce)}.cds--batch-summary__para{font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--batch-summary__divider{padding-inline-start:.5rem}.cds--table-toolbar--sm,:host(cds-table-toolbar[size=sm]),:host(cds-table-toolbar[size=xs]){block-size:2rem;min-block-size:2rem}.cds--table-toolbar--sm .cds--toolbar-search-container-expandable,.cds--table-toolbar--sm .cds--toolbar-search-container-persistent,.cds--table-toolbar--sm :host(cds-table-toolbar-search),:host(cds-table-toolbar[size=sm]) .cds--toolbar-search-container-expandable,:host(cds-table-toolbar[size=sm]) .cds--toolbar-search-container-persistent,:host(cds-table-toolbar[size=sm]) :host(cds-table-toolbar-search),:host(cds-table-toolbar[size=xs]) .cds--toolbar-search-container-expandable,:host(cds-table-toolbar[size=xs]) .cds--toolbar-search-container-persistent,:host(cds-table-toolbar[size=xs]) :host(cds-table-toolbar-search){block-size:2rem}.cds--table-toolbar--sm .cds--toolbar-search-container-expandable .cds--search-input,.cds--table-toolbar--sm .cds--toolbar-search-container-persistent .cds--search-input,.cds--table-toolbar--sm :host(cds-table-toolbar-search) .cds--search-input,:host(cds-table-toolbar[size=sm]) .cds--toolbar-search-container-expandable .cds--search-input,:host(cds-table-toolbar[size=sm]) .cds--toolbar-search-container-persistent .cds--search-input,:host(cds-table-toolbar[size=sm]) :host(cds-table-toolbar-search) .cds--search-input,:host(cds-table-toolbar[size=xs]) .cds--toolbar-search-container-expandable .cds--search-input,:host(cds-table-toolbar[size=xs]) .cds--toolbar-search-container-persistent .cds--search-input,:host(cds-table-toolbar[size=xs]) :host(cds-table-toolbar-search) .cds--search-input{block-size:2rem}.cds--table-toolbar--sm .cds--toolbar-search-container-expandable .cds--search-close,.cds--table-toolbar--sm .cds--toolbar-search-container-persistent .cds--search-close,.cds--table-toolbar--sm :host(cds-table-toolbar-search) .cds--search-close,:host(cds-table-toolbar[size=sm]) .cds--toolbar-search-container-expandable .cds--search-close,:host(cds-table-toolbar[size=sm]) .cds--toolbar-search-container-persistent .cds--search-close,:host(cds-table-toolbar[size=sm]) :host(cds-table-toolbar-search) .cds--search-close,:host(cds-table-toolbar[size=xs]) .cds--toolbar-search-container-expandable .cds--search-close,:host(cds-table-toolbar[size=xs]) .cds--toolbar-search-container-persistent .cds--search-close,:host(cds-table-toolbar[size=xs]) :host(cds-table-toolbar-search) .cds--search-close{block-size:2rem;inline-size:2rem}.cds--table-toolbar--sm .cds--toolbar-search-container-expandable .cds--search-magnifier-icon,.cds--table-toolbar--sm .cds--toolbar-search-container-persistent .cds--search-magnifier-icon,.cds--table-toolbar--sm :host(cds-table-toolbar-search) .cds--search-magnifier-icon,:host(cds-table-toolbar[size=sm]) .cds--toolbar-search-container-expandable .cds--search-magnifier-icon,:host(cds-table-toolbar[size=sm]) .cds--toolbar-search-container-persistent .cds--search-magnifier-icon,:host(cds-table-toolbar[size=sm]) :host(cds-table-toolbar-search) .cds--search-magnifier-icon,:host(cds-table-toolbar[size=xs]) .cds--toolbar-search-container-expandable .cds--search-magnifier-icon,:host(cds-table-toolbar[size=xs]) .cds--toolbar-search-container-persistent .cds--search-magnifier-icon,:host(cds-table-toolbar[size=xs]) :host(cds-table-toolbar-search) .cds--search-magnifier-icon{block-size:2rem;inline-size:2rem;padding:.5rem}.cds--table-toolbar--sm .cds--toolbar-action.cds--toolbar-search-container-persistent,:host(cds-table-toolbar[size=sm]) .cds--toolbar-action.cds--toolbar-search-container-persistent,:host(cds-table-toolbar[size=xs]) .cds--toolbar-action.cds--toolbar-search-container-persistent{inline-size:100%}.cds--table-toolbar--sm .cds--toolbar-search-container-expandable,.cds--table-toolbar--sm :host(cds-table-toolbar-search),:host(cds-table-toolbar[size=sm]) .cds--toolbar-search-container-expandable,:host(cds-table-toolbar[size=sm]) :host(cds-table-toolbar-search),:host(cds-table-toolbar[size=xs]) .cds--toolbar-search-container-expandable,:host(cds-table-toolbar[size=xs]) :host(cds-table-toolbar-search){inline-size:2rem}.cds--table-toolbar--sm .cds--toolbar-search-container-expandable .cds--search .cds--search-input,.cds--table-toolbar--sm :host(cds-table-toolbar-search) .cds--search .cds--search-input,:host(cds-table-toolbar[size=sm]) .cds--toolbar-search-container-expandable .cds--search .cds--search-input,:host(cds-table-toolbar[size=sm]) :host(cds-table-toolbar-search) .cds--search .cds--search-input,:host(cds-table-toolbar[size=xs]) .cds--toolbar-search-container-expandable .cds--search .cds--search-input,:host(cds-table-toolbar[size=xs]) :host(cds-table-toolbar-search) .cds--search .cds--search-input{padding:0 3rem}.cds--table-toolbar--sm .cds--toolbar-search-container-active,.cds--table-toolbar--sm :host(cds-table-toolbar-search[expanded]),:host(cds-table-toolbar[size=sm]) .cds--toolbar-search-container-active,:host(cds-table-toolbar[size=sm]) :host(cds-table-toolbar-search[expanded]),:host(cds-table-toolbar[size=xs]) .cds--toolbar-search-container-active,:host(cds-table-toolbar[size=xs]) :host(cds-table-toolbar-search[expanded]){flex:auto;transition:flex 175ms cubic-bezier(.5,0,.1,1)}.cds--table-toolbar--sm .cds--toolbar-search-container-active .cds--search-input,.cds--table-toolbar--sm :host(cds-table-toolbar-search[expanded]) .cds--search-input,:host(cds-table-toolbar[size=sm]) .cds--toolbar-search-container-active .cds--search-input,:host(cds-table-toolbar[size=sm]) :host(cds-table-toolbar-search[expanded]) .cds--search-input,:host(cds-table-toolbar[size=xs]) .cds--toolbar-search-container-active .cds--search-input,:host(cds-table-toolbar[size=xs]) :host(cds-table-toolbar-search[expanded]) .cds--search-input{visibility:inherit}.cds--table-toolbar--sm .cds--toolbar-search-container-active .cds--search-input:focus,.cds--table-toolbar--sm :host(cds-table-toolbar-search[expanded]) .cds--search-input:focus,:host(cds-table-toolbar[size=sm]) .cds--toolbar-search-container-active .cds--search-input:focus,:host(cds-table-toolbar[size=sm]) :host(cds-table-toolbar-search[expanded]) .cds--search-input:focus,:host(cds-table-toolbar[size=xs]) .cds--toolbar-search-container-active .cds--search-input:focus,:host(cds-table-toolbar[size=xs]) :host(cds-table-toolbar-search[expanded]) .cds--search-input:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--table-toolbar--sm .cds--toolbar-search-container-active .cds--search-input:focus,.cds--table-toolbar--sm :host(cds-table-toolbar-search[expanded]) .cds--search-input:focus,:host(cds-table-toolbar[size=sm]) .cds--toolbar-search-container-active .cds--search-input:focus,:host(cds-table-toolbar[size=sm]) :host(cds-table-toolbar-search[expanded]) .cds--search-input:focus,:host(cds-table-toolbar[size=xs]) .cds--toolbar-search-container-active .cds--search-input:focus,:host(cds-table-toolbar[size=xs]) :host(cds-table-toolbar-search[expanded]) .cds--search-input:focus{outline-style:dotted}}.cds--table-toolbar--sm .cds--toolbar-search-container-active .cds--search-input:focus,.cds--table-toolbar--sm :host(cds-table-toolbar-search[expanded]) .cds--search-input:focus,:host(cds-table-toolbar[size=sm]) .cds--toolbar-search-container-active .cds--search-input:focus,:host(cds-table-toolbar[size=sm]) :host(cds-table-toolbar-search[expanded]) .cds--search-input:focus,:host(cds-table-toolbar[size=xs]) .cds--toolbar-search-container-active .cds--search-input:focus,:host(cds-table-toolbar[size=xs]) :host(cds-table-toolbar-search[expanded]) .cds--search-input:focus{background-color:var(--cds-field-hover)}.cds--table-toolbar--sm .cds--toolbar-search-container-active .cds--search-input:not(:-moz-placeholder-shown),.cds--table-toolbar--sm :host(cds-table-toolbar-search[expanded]) .cds--search-input:not(:-moz-placeholder-shown),:host(cds-table-toolbar[size=sm]) .cds--toolbar-search-container-active .cds--search-input:not(:-moz-placeholder-shown),:host(cds-table-toolbar[size=sm]) :host(cds-table-toolbar-search[expanded]) .cds--search-input:not(:-moz-placeholder-shown),:host(cds-table-toolbar[size=xs]) .cds--toolbar-search-container-active .cds--search-input:not(:-moz-placeholder-shown),:host(cds-table-toolbar[size=xs]) :host(cds-table-toolbar-search[expanded]) .cds--search-input:not(:-moz-placeholder-shown){background-color:var(--cds-field-hover)}.cds--table-toolbar--sm .cds--toolbar-search-container-active .cds--search-input:active,.cds--table-toolbar--sm .cds--toolbar-search-container-active .cds--search-input:not(:placeholder-shown),.cds--table-toolbar--sm :host(cds-table-toolbar-search[expanded]) .cds--search-input:active,.cds--table-toolbar--sm :host(cds-table-toolbar-search[expanded]) .cds--search-input:not(:placeholder-shown),:host(cds-table-toolbar[size=sm]) .cds--toolbar-search-container-active .cds--search-input:active,:host(cds-table-toolbar[size=sm]) .cds--toolbar-search-container-active .cds--search-input:not(:placeholder-shown),:host(cds-table-toolbar[size=sm]) :host(cds-table-toolbar-search[expanded]) .cds--search-input:active,:host(cds-table-toolbar[size=sm]) :host(cds-table-toolbar-search[expanded]) .cds--search-input:not(:placeholder-shown),:host(cds-table-toolbar[size=xs]) .cds--toolbar-search-container-active .cds--search-input:active,:host(cds-table-toolbar[size=xs]) .cds--toolbar-search-container-active .cds--search-input:not(:placeholder-shown),:host(cds-table-toolbar[size=xs]) :host(cds-table-toolbar-search[expanded]) .cds--search-input:active,:host(cds-table-toolbar[size=xs]) :host(cds-table-toolbar-search[expanded]) .cds--search-input:not(:placeholder-shown){background-color:var(--cds-field-hover)}.cds--table-toolbar--sm .cds--toolbar-search-container-active .cds--search-magnifier-icon:active,.cds--table-toolbar--sm .cds--toolbar-search-container-active .cds--search-magnifier-icon:focus,.cds--table-toolbar--sm .cds--toolbar-search-container-active .cds--search-magnifier-icon:hover,.cds--table-toolbar--sm :host(cds-table-toolbar-search[expanded]) .cds--search-magnifier-icon:active,.cds--table-toolbar--sm :host(cds-table-toolbar-search[expanded]) .cds--search-magnifier-icon:focus,.cds--table-toolbar--sm :host(cds-table-toolbar-search[expanded]) .cds--search-magnifier-icon:hover,:host(cds-table-toolbar[size=sm]) .cds--toolbar-search-container-active .cds--search-magnifier-icon:active,:host(cds-table-toolbar[size=sm]) .cds--toolbar-search-container-active .cds--search-magnifier-icon:focus,:host(cds-table-toolbar[size=sm]) .cds--toolbar-search-container-active .cds--search-magnifier-icon:hover,:host(cds-table-toolbar[size=sm]) :host(cds-table-toolbar-search[expanded]) .cds--search-magnifier-icon:active,:host(cds-table-toolbar[size=sm]) :host(cds-table-toolbar-search[expanded]) .cds--search-magnifier-icon:focus,:host(cds-table-toolbar[size=sm]) :host(cds-table-toolbar-search[expanded]) .cds--search-magnifier-icon:hover,:host(cds-table-toolbar[size=xs]) .cds--toolbar-search-container-active .cds--search-magnifier-icon:active,:host(cds-table-toolbar[size=xs]) .cds--toolbar-search-container-active .cds--search-magnifier-icon:focus,:host(cds-table-toolbar[size=xs]) .cds--toolbar-search-container-active .cds--search-magnifier-icon:hover,:host(cds-table-toolbar[size=xs]) :host(cds-table-toolbar-search[expanded]) .cds--search-magnifier-icon:active,:host(cds-table-toolbar[size=xs]) :host(cds-table-toolbar-search[expanded]) .cds--search-magnifier-icon:focus,:host(cds-table-toolbar[size=xs]) :host(cds-table-toolbar-search[expanded]) .cds--search-magnifier-icon:hover{background-color:transparent;outline:2px solid transparent;outline-offset:-2px}.cds--table-toolbar--sm .cds--overflow-menu.cds--toolbar-action,:host(cds-table-toolbar[size=sm]) .cds--overflow-menu.cds--toolbar-action,:host(cds-table-toolbar[size=xs]) .cds--overflow-menu.cds--toolbar-action{block-size:2rem;inline-size:2rem;min-inline-size:2rem}.cds--table-toolbar--sm .cds--toolbar-content,.cds--table-toolbar--sm :host(cds-table-toolbar-content),:host(cds-table-toolbar[size=sm]) .cds--toolbar-content,:host(cds-table-toolbar[size=sm]) :host(cds-table-toolbar-content),:host(cds-table-toolbar[size=xs]) .cds--toolbar-content,:host(cds-table-toolbar[size=xs]) :host(cds-table-toolbar-content){block-size:2rem}.cds--table-toolbar--sm .cds--toolbar-content .cds--overflow-menu,.cds--table-toolbar--sm :host(cds-table-toolbar-content) .cds--overflow-menu,:host(cds-table-toolbar[size=sm]) .cds--toolbar-content .cds--overflow-menu,:host(cds-table-toolbar[size=sm]) :host(cds-table-toolbar-content) .cds--overflow-menu,:host(cds-table-toolbar[size=xs]) .cds--toolbar-content .cds--overflow-menu,:host(cds-table-toolbar[size=xs]) :host(cds-table-toolbar-content) .cds--overflow-menu{block-size:2rem;inline-size:2rem}.cds--search--disabled .cds--search-magnifier-icon:hover{background-color:transparent}.cds--table-toolbar--sm .cds--batch-actions .cds--action-list,.cds--table-toolbar--sm :host(cds-table-batch-actions) .cds--action-list,:host(cds-table-toolbar[size=sm]) .cds--batch-actions .cds--action-list,:host(cds-table-toolbar[size=sm]) :host(cds-table-batch-actions) .cds--action-list,:host(cds-table-toolbar[size=xs]) .cds--batch-actions .cds--action-list,:host(cds-table-toolbar[size=xs]) :host(cds-table-batch-actions) .cds--action-list{block-size:2rem}.cds--table-toolbar--sm .cds--toolbar-action,.cds--table-toolbar--sm :host(cds-table-toolbar-search),:host(cds-table-toolbar[size=sm]) .cds--toolbar-action,:host(cds-table-toolbar[size=sm]) :host(cds-table-toolbar-search),:host(cds-table-toolbar[size=xs]) .cds--toolbar-action,:host(cds-table-toolbar[size=xs]) :host(cds-table-toolbar-search){block-size:2rem;inline-size:2rem;padding:.5rem 0}.cds--table-toolbar--sm .cds--btn--primary,:host(cds-table-toolbar[size=sm]) .cds--btn--primary,:host(cds-table-toolbar[size=xs]) .cds--btn--primary{block-size:2rem;min-block-size:auto;padding-block:.375rem}.cds--table-toolbar--sm .cds--btn--primary.cds--batch-summary__cancel:before,:host(cds-table-toolbar[size=sm]) .cds--btn--primary.cds--batch-summary__cancel:before,:host(cds-table-toolbar[size=xs]) .cds--btn--primary.cds--batch-summary__cancel:before{inset-block-start:.5rem}.cds--table-toolbar--sm .cds--toolbar-action~.cds--btn,.cds--table-toolbar--sm :host(cds-table-toolbar-search)~.cds--btn,:host(cds-table-toolbar[size=sm]) .cds--toolbar-action~.cds--btn,:host(cds-table-toolbar[size=sm]) :host(cds-table-toolbar-search)~.cds--btn,:host(cds-table-toolbar[size=xs]) .cds--toolbar-action~.cds--btn,:host(cds-table-toolbar[size=xs]) :host(cds-table-toolbar-search)~.cds--btn{block-size:2rem;overflow:hidden}.cds--table-toolbar--sm .cds--batch-summary,:host(cds-table-toolbar[size=sm]) .cds--batch-summary,:host(cds-table-toolbar[size=xs]) .cds--batch-summary{min-block-size:2rem}.cds--data-table tr.cds--parent-row:first-of-type td{border-block-start:1px solid var(--cds-border-subtle)}.cds--expandable-row--hidden td{border-block-start:0;inline-size:auto;padding:1rem}tr.cds--parent-row:not(.cds--expandable-row)+tr[data-child-row]{block-size:0;transition:height .15s cubic-bezier(.2,0,.38,.9)}tr.cds--parent-row:not(.cds--expandable-row)+tr[data-child-row] td{background-color:var(--cds-layer-hover);border:0;padding-block:0;transition:padding .15s cubic-bezier(.2,0,.38,.9),background-color 70ms cubic-bezier(.2,0,.38,.9)}tr.cds--parent-row:not(.cds--expandable-row)+tr[data-child-row] td .cds--child-row-inner-container{max-block-size:0;overflow:hidden}tr.cds--parent-row.cds--expandable-row+tr[data-child-row]{transition:height .15s cubic-bezier(.2,0,.38,.9),background-color 70ms cubic-bezier(.2,0,.38,.9)}tr.cds--parent-row.cds--expandable-row+tr[data-child-row] td{border-block-end:1px solid var(--cds-border-subtle);padding-inline-start:3.5rem;transition:padding-bottom .15s cubic-bezier(.2,0,.38,.9),transform .15s cubic-bezier(.2,0,.38,.9)}tbody:has(>tr.cds--data-table--ai-label-row)>tr.cds--expandable-row[data-child-row] td,tbody:has(>tr.cds--data-table--slug-row)>tr.cds--expandable-row[data-child-row] td,tbody:has(td.cds--table-column-checkbox)>tr.cds--expandable-row[data-child-row] td{padding-inline-start:5.5rem}tbody:has(>tr.cds--data-table--ai-label-row):has(td.cds--table-column-checkbox)>tr.cds--expandable-row[data-child-row] td{padding-inline-start:7.5rem}tr.cds--parent-row.cds--expandable-row+tr[data-child-row] td .cds--child-row-inner-container{max-block-size:100%;padding-block:1rem;padding-block-end:1.5rem}.cds--parent-row.cds--expandable-row+tr[data-child-row]>td,.cds--parent-row.cds--expandable-row>td{border-block-end:1px solid var(--cds-border-subtle);box-shadow:0 1px var(--cds-border-subtle)}.cds--parent-row.cds--expandable-row>td:first-of-type,.cds--parent-row:not(.cds--expandable-row)+tr[data-child-row]>td{box-shadow:none}tr.cds--parent-row.cds--expandable-row,tr.cds--parent-row.cds--expandable-row td,tr.cds--parent-row:not(.cds--expandable-row) td{transition:height .15s cubic-bezier(.2,0,.38,.9),background-color 70ms cubic-bezier(.2,0,.38,.9),border-color 70ms cubic-bezier(.2,0,.38,.9)}tr.cds--parent-row.cds--expandable-row:hover td,tr.cds--parent-row:not(.cds--expandable-row):first-of-type:hover td{border-block-end:1px solid var(--cds-border-subtle);border-block-start:1px solid var(--cds-border-subtle)}tr.cds--parent-row.cds--expandable-row:hover td{background-color:var(--cds-layer-hover);color:var(--cds-text-primary,#161616)}tr.cds--parent-row.cds--expandable-row:hover td:first-of-type{border-block-end:1px solid var(--cds-layer-hover)}tr.cds--parent-row.cds--expandable-row:hover+tr[data-child-row] td{background-color:var(--cds-layer-hover);border-block-end:1px solid var(--cds-border-subtle);color:var(--cds-text-primary,#161616)}tr.cds--expandable-row--hover+tr[data-child-row] td{border-block-end:1px solid var(--cds-border-subtle)}tr.cds--expandable-row--hover,tr.cds--expandable-row--hover td{background-color:var(--cds-layer-hover)}tr.cds--expandable-row--hover td{border-block-end:1px solid var(--cds-border-subtle);border-block-start:1px solid var(--cds-border-subtle);color:var(--cds-text-primary,#161616)}tr.cds--parent-row.cds--expandable-row.cds--expandable-row--hover td:first-of-type{border-block-end:1px solid transparent}.cds--data-table td.cds--table-expand{border-block-end:1px solid var(--cds-border-subtle-01,#c6c6c6)}.cds--layer-two .cds--data-table td.cds--table-expand{border-block-end:1px solid var(--cds-border-subtle-02,#e0e0e0)}.cds--layer-three .cds--data-table td.cds--table-expand{border-block-end:1px solid var(--cds-border-subtle-03,#c6c6c6)}.cds--data-table td.cds--table-expand+.cds--table-column-checkbox,.cds--data-table th.cds--table-expand+.cds--table-column-checkbox{padding-inline:.375rem .375rem}.cds--data-table td.cds--table-expand[data-previous-value=collapsed]+.cds--table-column-checkbox{border-block-end:1px solid transparent;box-shadow:none}.cds--data-table td.cds--table-expand+.cds--table-column-checkbox+td,.cds--data-table th.cds--table-expand+.cds--table-column-checkbox+th{padding-inline-start:.5rem}.cds--data-table td.cds--table-expand,.cds--data-table th.cds--table-expand{padding:.5rem;padding-inline-end:0}.cds--data-table td.cds--table-expand[data-previous-value=collapsed]{border-block-end:1px solid transparent}.cds--table-expand[data-previous-value=collapsed] .cds--table-expand__svg{transform:rotate(270deg);transition:transform .15s cubic-bezier(.2,0,.38,.9)}.cds--table-expand__button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--table-expand__button *,.cds--table-expand__button :after,.cds--table-expand__button :before{box-sizing:inherit}.cds--table-expand__button::-moz-focus-inner{border:0}.cds--table-expand__button{align-items:center;block-size:calc(100% + 1px);display:inline-flex;inline-size:100%;justify-content:center;padding:0 .5rem;vertical-align:inherit}.cds--data-table--top-aligned-body td .cds--table-expand__button,.cds--data-table--top-aligned-header th .cds--table-expand__button{align-items:start;block-size:2rem;padding-block-start:.5rem}.cds--data-table--top-aligned-body.cds--data-table--xs td .cds--table-expand__button,.cds--data-table--top-aligned-header.cds--data-table--xs th .cds--table-expand__button{block-size:1.5rem;padding-block-start:.25rem}.cds--data-table--top-aligned-body.cds--data-table--md td .cds--table-expand__button,.cds--data-table--top-aligned-header.cds--data-table--md th .cds--table-expand__button{margin-block-start:-.25rem;padding-block-start:.5rem}.cds--table-expand__button:focus{box-shadow:inset 0 0 0 2px var(--cds-focus,#0f62fe);outline:none}.cds--table-expand__svg{fill:var(--cds-layer-selected-inverse,#161616);transform:rotate(90deg);transition:transform .15s cubic-bezier(.2,0,.38,.9)}.cds--data-table--xl .cds--table-expand__button{inline-size:2rem}.cds--data-table--zebra tbody tr[data-child-row]:nth-child(4n+4) td,.cds--data-table--zebra tbody tr[data-parent-row]:nth-child(4n+3) td{background-color:var(--cds-layer-accent);border-block-end:1px solid var(--cds-layer-accent);border-block-start:1px solid var(--cds-layer-accent)}.cds--data-table--zebra tbody tr[data-child-row]:nth-child(4n+2) td,.cds--data-table--zebra tbody tr[data-parent-row]:nth-child(4n+1) td{border-block-end:1px solid var(--cds-layer)}.cds--data-table--zebra tr.cds--parent-row td,.cds--data-table--zebra tr.cds--parent-row.cds--expandable-row+tr[data-child-row] td{transition:transform .15s cubic-bezier(.2,0,.38,.9),border-bottom 70ms cubic-bezier(.2,0,.38,.9),border-top 70ms cubic-bezier(.2,0,.38,.9)}.cds--data-table--zebra tbody tr[data-child-row]:hover td,.cds--data-table--zebra tbody tr[data-parent-row]:hover td,.cds--data-table--zebra tbody tr[data-parent-row]:hover+tr[data-child-row] td,.cds--data-table--zebra tr.cds--parent-row.cds--expandable-row.cds--expandable-row--hover td{background-color:var(--cds-layer-hover);border-block-end:1px solid var(--cds-layer-hover);border-block-start:1px solid var(--cds-layer-hover)}tr.cds--parent-row.cds--data-table--selected{background-color:var(--cds-layer-selected)}tr.cds--parent-row.cds--data-table--selected:first-of-type td{border-block-start:1px solid var(--cds-layer-active);box-shadow:0 1px var(--cds-layer-active)}tr.cds--parent-row.cds--data-table--selected td{border-block-end:1px solid var(--cds-layer-active);box-shadow:0 1px var(--cds-layer-active);color:var(--cds-text-primary,#161616)}tr.cds--parent-row.cds--data-table--selected:last-of-type td{border-block-end:1px solid transparent;box-shadow:0 1px var(--cds-border-subtle)}tr.cds--parent-row.cds--data-table--selected:not(.cds--expandable-row):hover td{background-color:var(--cds-layer-selected-hover);border-block-end:1px solid var(--cds-border-subtle);border-block-start:1px solid var(--cds-layer-selected-hover);box-shadow:0 1px var(--cds-layer-selected-hover)}tr.cds--parent-row.cds--data-table--selected.cds--expandable-row td,tr.cds--parent-row.cds--data-table--selected.cds--expandable-row td:first-of-type{border-block-end:1px solid transparent;box-shadow:0 1px var(--cds-layer-selected)}tr.cds--parent-row.cds--data-table--selected.cds--expandable-row--hover td,tr.cds--parent-row.cds--data-table--selected.cds--expandable-row--hover td:first-of-type,tr.cds--parent-row.cds--data-table--selected.cds--expandable-row:hover td,tr.cds--parent-row.cds--data-table--selected.cds--expandable-row:hover td:first-of-type{background-color:var(--cds-layer-selected-hover);border-block-end:1px solid transparent;border-block-start:1px solid var(--cds-layer-selected-hover);box-shadow:0 1px var(--cds-layer-selected-hover)}tr.cds--parent-row.cds--data-table--selected.cds--expandable-row+tr[data-child-row] td{background-color:var(--cds-layer-hover);border-block-end:1px solid var(--cds-border-subtle);border-block-start:1px solid var(--cds-layer-active);box-shadow:0 1px var(--cds-layer-active);color:var(--cds-text-primary,#161616)}tr.cds--parent-row.cds--data-table--selected.cds--expandable-row+tr[data-child-row]:last-of-type td{box-shadow:inset 0 -1px var(--cds-layer-active);padding-block-end:1.5rem}tr.cds--parent-row.cds--data-table--selected.cds--expandable-row--hover+tr[data-child-row] td,tr.cds--parent-row.cds--data-table--selected.cds--expandable-row:hover+tr[data-child-row] td{background-color:var(--cds-layer-selected)}.cds--parent-row .cds--table-column-decorator,.cds--parent-row .cds--table-column-decorator+td.cds--table-expand[data-previous-value=collapsed],.cds--parent-row .cds--table-column-slug,.cds--parent-row .cds--table-column-slug+td.cds--table-expand[data-previous-value=collapsed]{box-shadow:none}.cds--parent-row.cds--expandable-row .cds--table-column-decorator,.cds--parent-row.cds--expandable-row .cds--table-column-decorator+td.cds--table-expand[data-previous-value=collapsed],.cds--parent-row.cds--expandable-row .cds--table-column-slug,.cds--parent-row.cds--expandable-row .cds--table-column-slug+td.cds--table-expand[data-previous-value=collapsed]{border-block-end:1px solid transparent}.cds--data-table tr.cds--data-table--ai-label-row:hover td,.cds--data-table tr.cds--data-table--slug-row:hover td,.cds--data-table--ai-label-row td,.cds--data-table--slug-row td{border-block-start:1px solid transparent}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--table-expand__button:focus .cds--table-expand__svg{color:Highlight;outline:1px solid Highlight}}.cds--data-table.cds--skeleton th{padding-inline-start:1rem;vertical-align:middle}.cds--data-table.cds--skeleton td span,.cds--data-table.cds--skeleton th span{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--data-table.cds--skeleton td span:active,.cds--data-table.cds--skeleton td span:focus,.cds--data-table.cds--skeleton td span:hover,.cds--data-table.cds--skeleton th span:active,.cds--data-table.cds--skeleton th span:focus,.cds--data-table.cds--skeleton th span:hover{border:none;cursor:default;outline:none}.cds--data-table.cds--skeleton td span:before,.cds--data-table.cds--skeleton th span:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--data-table.cds--skeleton td span:before,.cds--data-table.cds--skeleton th span:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--data-table.cds--skeleton td span,.cds--data-table.cds--skeleton th span{background:CanvasText}.cds--data-table.cds--skeleton td span:before,.cds--data-table.cds--skeleton th span:before{background:Canvas;forced-color-adjust:none}}.cds--data-table.cds--skeleton td span,.cds--data-table.cds--skeleton th span{block-size:1rem;display:block;inline-size:4rem}.cds--data-table.cds--skeleton tr:hover td{background:transparent;border-color:var(--cds-border-subtle)}.cds--data-table.cds--skeleton tr:hover td:first-of-type,.cds--data-table.cds--skeleton tr:hover td:last-of-type{border-color:var(--cds-border-subtle)}.cds--data-table.cds--skeleton .cds--table-sort{pointer-events:none}.cds--data-table.cds--skeleton th span{background:var(--cds-skeleton-element,#c6c6c6)}.cds--data-table.cds--skeleton th span:before{background:var(--cds-skeleton-background,#e8e8e8)}.cds--data-table-container.cds--skeleton .cds--data-table-header__title{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--data-table-container.cds--skeleton .cds--data-table-header__title:active,.cds--data-table-container.cds--skeleton .cds--data-table-header__title:focus,.cds--data-table-container.cds--skeleton .cds--data-table-header__title:hover{border:none;cursor:default;outline:none}.cds--data-table-container.cds--skeleton .cds--data-table-header__title:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--data-table-container.cds--skeleton .cds--data-table-header__title:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--data-table-container.cds--skeleton .cds--data-table-header__title{background:CanvasText}.cds--data-table-container.cds--skeleton .cds--data-table-header__title:before{background:Canvas;forced-color-adjust:none}}.cds--data-table-container.cds--skeleton .cds--data-table-header__title{block-size:1.5rem;inline-size:7.5rem}.cds--data-table-container.cds--skeleton .cds--data-table-header__description{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--data-table-container.cds--skeleton .cds--data-table-header__description:active,.cds--data-table-container.cds--skeleton .cds--data-table-header__description:focus,.cds--data-table-container.cds--skeleton .cds--data-table-header__description:hover{border:none;cursor:default;outline:none}.cds--data-table-container.cds--skeleton .cds--data-table-header__description:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--data-table-container.cds--skeleton .cds--data-table-header__description:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--data-table-container.cds--skeleton .cds--data-table-header__description{background:CanvasText}.cds--data-table-container.cds--skeleton .cds--data-table-header__description:before{background:Canvas;forced-color-adjust:none}}.cds--data-table-container.cds--skeleton .cds--data-table-header__description{block-size:1rem;inline-size:10rem;margin-block-start:.5rem}:host(cds-table-toolbar){--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px;z-index:1}:host(cds-table-toolbar-content) ::slotted(cds-overflow-menu){block-size:3rem;cursor:pointer;display:flex;inline-size:3rem;transition:background-color .11s cubic-bezier(0,0,.38,.9)}:host(cds-table-toolbar-content[size=sm]) ::slotted(cds-button),:host(cds-table-toolbar-content[size=sm]) ::slotted(cds-overflow-menu),:host(cds-table-toolbar-content[size=sm]) ::slotted(cds-table-toolbar-search),:host(cds-table-toolbar-content[size=xs]) ::slotted(cds-button),:host(cds-table-toolbar-content[size=xs]) ::slotted(cds-overflow-menu),:host(cds-table-toolbar-content[size=xs]) ::slotted(cds-table-toolbar-search){block-size:2rem;min-block-size:2rem}:host(cds-table-toolbar-content[size=sm]) ::slotted(cds-overflow-menu),:host(cds-table-toolbar-content[size=sm]) ::slotted(cds-table-toolbar-search),:host(cds-table-toolbar-content[size=xs]) ::slotted(cds-overflow-menu),:host(cds-table-toolbar-content[size=xs]) ::slotted(cds-table-toolbar-search){inline-size:2rem}:host(cds-table-toolbar-content[has-batch-actions]){clip-path:polygon(0 0,100% 0,100% 0,0 0);transform:translate3d(0,3rem,0);transition:transform .11s cubic-bezier(.2,0,.38,.9),clip-path .11s cubic-bezier(.2,0,.38,.9)}:host(cds-table-toolbar-search):hover{background-color:var(--cds-field-hover)}:host(cds-table-toolbar-search){flex:none;transition:flex 175ms cubic-bezier(.5,0,.1,1)}:host(cds-table-toolbar-search) .cds--search{block-size:100%;inline-size:100%}:host(cds-table-toolbar-search) .cds--search .cds--search-magnifier{cursor:pointer;inset-inline-start:0;pointer-events:all;transition:background .11s cubic-bezier(0,0,.38,.9)}:host(cds-table-toolbar-search) .cds--search .cds--search-magnifier-icon{block-size:auto;inline-size:auto}:host(cds-table-toolbar-search) .cds--search .cds--search-input{border-block-end:0}:host(cds-table-toolbar-search) .cds--search .cds--search-close:before{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12));inline-size:0}:host(cds-table-toolbar-search) .cds--search .cds--search-close :hover{background-color:none}:host(cds-table-toolbar-search) .cds--search :hover{background-color:none}:host(cds-table-toolbar-search) svg{inset-inline-start:0}:host(cds-table-toolbar-search[size=sm]) svg,:host(cds-table-toolbar-search[size=xs]) svg{inset-inline-start:.5rem;padding:0}:host(cds-table-toolbar-search[expanded]){flex:auto}:host(cds-table-toolbar-search[size=sm][expanded]) svg,:host(cds-table-toolbar-search[size=xs][expanded]) svg{inset-inline-start:1rem}:host(cds-table-toolbar-search[persistent]:hover) .cds--search-input{background-color:var(--cds-field-hover)}:host(cds-table-batch-actions){box-sizing:border-box;overflow-x:auto}:host(cds-table-batch-actions[size=sm]),:host(cds-table-batch-actions[size=xs]){block-size:2rem;min-block-size:2rem}:host(cds-table-batch-actions[size=sm]) .cds--batch-summary,:host(cds-table-batch-actions[size=xs]) .cds--batch-summary{block-size:2rem;min-block-size:2rem}:host(cds-table-batch-actions[size=sm]) .cds--batch-summary__para,:host(cds-table-batch-actions[size=xs]) .cds--batch-summary__para{block-size:2rem;line-height:2rem;margin:0;padding:0}:host(cds-table-batch-actions[size=sm]) .cds--action-list,:host(cds-table-batch-actions[size=xs]) .cds--action-list{block-size:2rem}:host(cds-table-batch-actions[size=sm]) .cds--btn--primary.cds--batch-summary__cancel,:host(cds-table-batch-actions[size=xs]) .cds--btn--primary.cds--batch-summary__cancel{block-size:2rem;min-block-size:auto;padding-block:.375rem}:host(cds-table-batch-actions[size=sm]) .cds--btn--primary.cds--batch-summary__cancel:before,:host(cds-table-batch-actions[size=xs]) .cds--btn--primary.cds--batch-summary__cancel:before{inset-block-start:.5rem}:host(cds-table-batch-actions[size=lg]),:host(cds-table-batch-actions[size=md]),:host(cds-table-batch-actions[size=xl]){block-size:3rem;min-block-size:3rem}:host(cds-table-batch-actions[size=lg]) .cds--batch-summary,:host(cds-table-batch-actions[size=md]) .cds--batch-summary,:host(cds-table-batch-actions[size=xl]) .cds--batch-summary{block-size:3rem;min-block-size:3rem}:host(cds-table-batch-actions[size=lg]) .cds--batch-summary__para,:host(cds-table-batch-actions[size=md]) .cds--batch-summary__para,:host(cds-table-batch-actions[size=xl]) .cds--batch-summary__para{block-size:3rem;line-height:3rem;margin:0;padding:0}:host(cds-table-batch-actions[size=lg]) .cds--action-list,:host(cds-table-batch-actions[size=md]) .cds--action-list,:host(cds-table-batch-actions[size=xl]) .cds--action-list{block-size:3rem}:host(cds-table-batch-actions[size=lg]) .cds--btn--primary.cds--batch-summary__cancel,:host(cds-table-batch-actions[size=md]) .cds--btn--primary.cds--batch-summary__cancel,:host(cds-table-batch-actions[size=xl]) .cds--btn--primary.cds--batch-summary__cancel{block-size:3rem;min-block-size:auto}:host(cds-table-batch-actions[size=lg]) .cds--btn--primary.cds--batch-summary__cancel:before,:host(cds-table-batch-actions[size=md]) .cds--btn--primary.cds--batch-summary__cancel:before,:host(cds-table-batch-actions[size=xl]) .cds--btn--primary.cds--batch-summary__cancel:before{inset-block-start:.9375rem}:host(cds-table-toolbar-content[has-batch-actions][size=sm]),:host(cds-table-toolbar-content[has-batch-actions][size=xs]){transform:translate3d(0,2rem,0)}:host(cds-table-toolbar-content[has-batch-actions][size=lg]),:host(cds-table-toolbar-content[has-batch-actions][size=md]),:host(cds-table-toolbar-content[has-batch-actions][size=xl]){transform:translate3d(0,3rem,0)}:host(cds-table-batch-actions) .cds--btn--primary.cds--batch-summary__cancel{--divider-opacity:1}@media (prefers-reduced-motion:reduce){:host(cds-table-batch-actions) .cds--btn--primary.cds--batch-summary__cancel:before{transition:none}}:host(cds-table-batch-actions) .cds--btn--primary.cds--batch-summary__cancel:before{opacity:var(--divider-opacity);transition:opacity .11s cubic-bezier(.2,0,.38,.9)}:host(cds-table-batch-actions) .cds--btn--primary.cds--batch-summary__cancel:hover:before{opacity:0}:host(cds-table) ::slotted(cds-table-head){background-color:var(--cds-layer-accent);display:table-header-group;font-size:var(--cds-heading-01-font-size,.875rem);font-weight:var(--cds-heading-01-font-weight,600);letter-spacing:var(--cds-heading-01-letter-spacing,.16px);line-height:var(--cds-heading-01-line-height,1.42857)}:host(cds-table) ::slotted(cds-table-body){background-color:var(--cds-layer);display:table-row-group;font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);inline-size:100%;letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);line-height:var(--cds-body-short-01-line-height,1.28572)}:host(cds-table[use-static-width]){inline-size:auto}.cds--data-table-content{display:table;inline-size:100%}:host(cds-table[sticky-header]) ::slotted(cds-table-body),:host(cds-table[sticky-header]) ::slotted(cds-table-head){display:flex;flex-direction:column;will-change:transform}:host(cds-table[sticky-header]) .cds--data-table-content{display:block;overflow-y:scroll}.cds--data-table_inner-container{display:block;inline-size:100%;overflow-x:auto}:host(cds-table-head[sticky-header]){inline-size:100%;inset-block-start:0;position:sticky;will-change:transform;z-index:1}:host(cds-table-head[sticky-header]) ::slotted(cds-table-header-row){display:flex;inline-size:100%}:host(cds-table-header-cell[sort-direction]){block-size:3rem}:host(cds-table-header-cell[sort-direction]) .cds--table-sort__flex{align-items:center;block-size:100%;display:flex;inline-size:100%;justify-content:space-between}:host(cds-table-header-cell[ai-label]),:host(cds-table-header-cell[ai-label]) .cds--table-sort{background:linear-gradient(to right,var(--cds-ai-aura-start-sm,rgba(69,137,255,.16)) 0,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%,transparent 50%);box-shadow:inset 0 1px var(--cds-ai-border-strong,#4589ff)}:host(cds-table-header-cell[ai-label]) .cds--table-sort{background:none}:host(cds-table-header-cell[sticky-header]){border-block-end:1px solid var(--cds-layer-active);inline-size:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(cds-table-header-cell[sticky-header]:not([is-sortable])){padding-block-start:.875rem}:host(cds-table-header-cell[ai-label]:not([is-sortable])) .cds--table-header-label--slug{align-items:center;display:flex}:host(cds-table-header-cell[ai-label]:not([is-sortable])) ::slotted(cds-ai-label),:host(cds-table-header-cell[ai-label]:not([is-sortable])) ::slotted(cds-slug){margin-inline-start:auto}:host(cds-table-expand-row) .cds--table-column-checkbox,:host(cds-table-expand-row) .cds--table-expand,:host(cds-table-expand-row) ::slotted(cds-table-cell),:host(cds-table-expand-row) ::slotted(cds-table-cell-skeleton),:host(cds-table-header-expand-row) .cds--table-column-checkbox,:host(cds-table-header-expand-row) .cds--table-expand,:host(cds-table-header-expand-row) ::slotted(cds-table-header-cell),:host(cds-table-header-row) .cds--table-column-checkbox,:host(cds-table-header-row) ::slotted(cds-table-header-cell),:host(cds-table-row) .cds--table-column-checkbox,:host(cds-table-row) ::slotted(cds-table-cell),:host(cds-table-row) ::slotted(cds-table-cell-skeleton){display:table-cell}:host(cds-table-head) ::slotted(cds-table-header-expand-row),:host(cds-table-head) ::slotted(cds-table-header-row){block-size:3rem;display:table-row}:host(cds-table-header-row){outline:none}:host(cds-table-header-row) ::slotted(cds-table-header-cell),:host(cds-table-header-row) ::slotted(cds-table-header-cell-skeleton){background-color:var(--cds-layer-accent);color:var(--cds-text-primary,#161616);display:table-cell;outline:none;text-align:start}:host(cds-table-header-row) .cds--table-column-checkbox,:host(cds-table-header-row) .cds--table-expand,:host(cds-table-header-row) ::slotted(cds-table-header-cell){padding-inline:1rem;text-align:start;vertical-align:middle}:host(cds-table-header-row) ::slotted(cds-table-header-cell-skeleton:first-of-type),:host(cds-table-header-row) ::slotted(cds-table-header-cell:first-of-type){padding-inline-start:1rem}:host(cds-table-header-row:not([batch-expansion])) .cds--table-expand__button{display:none}:host(cds-table-header-row[selection-name]) .cds--table-expand{display:table-cell}:host(cds-table-header-row[sticky-header]) cds-checkbox{border-block-end:1px solid var(--cds-layer-active);margin:0;padding-block-start:.75rem}:host(cds-table-header-row[expandable]) .cds--table-expand,:host(cds-table-header-row[selection-name]) .cds--table-expand,:host(cds-table-row[expandable]) .cds--table-expand,:host(cds-table-row[selection-name]) .cds--table-expand{block-size:2rem;inline-size:2rem;padding:.5rem;padding-inline-end:0}:host(cds-table-header-row[expanded]),:host(cds-table-row[expanded]){transition:transform .15s cubic-bezier(.2,0,.38,.9)}:host(cds-table-header-row[expanded]) .cds--table-expand__svg,:host(cds-table-row[expanded]) .cds--table-expand__svg{transform:rotate(270deg)}:host(cds-table-header-row) .cds--table-column-checkbox div,:host(cds-table-header-row) .cds--table-expand div,:host(cds-table-row) .cds--table-column-checkbox div,:host(cds-table-row) .cds--table-expand div{align-items:center;block-size:100%;display:flex}:host(cds-table-body) ::slotted(cds-table-expand-row),:host(cds-table-body) ::slotted(cds-table-row){block-size:3rem;border:none;display:table-row;inline-size:100%;outline:none}:host(cds-table-body[sticky-header]) ::slotted(cds-table-expand-row),:host(cds-table-body[sticky-header]) ::slotted(cds-table-row){display:flex}:host(cds-table-cell){border-block-end:1px solid var(--cds-border-subtle);padding:0 1rem}:host(cds-table-cell) ::slotted(cds-overflow-menu:hover){background-color:none}:host(cds-table-cell[overflow-menu-on-hover]) ::slotted(*){opacity:0}:host(cds-table-cell[ai-label-in-header]){background:linear-gradient(to right,var(--cds-ai-aura-start-sm,rgba(69,137,255,.16)) 0,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%,transparent 50%)}:host(cds-table-cell-content){display:block;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}:host(cds-table-expand-row[sticky-header]) ::slotted(cds-table-cell),:host(cds-table-expand-row[sticky-header]) ::slotted(cds-table-cell-skeleton),:host(cds-table-row[sticky-header]) ::slotted(cds-table-cell),:host(cds-table-row[sticky-header]) ::slotted(cds-table-cell-skeleton){inline-size:100%;padding-block-start:.875rem}:host(cds-table-expand-row[size=xl]) ::slotted(cds-table-cell),:host(cds-table-expand-row[size=xl]) ::slotted(cds-table-cell-skeleton),:host(cds-table-row[size=xl]) ::slotted(cds-table-cell),:host(cds-table-row[size=xl]) ::slotted(cds-table-cell-skeleton){vertical-align:top}:host(cds-table-expand-row) .cds--table-column-checkbox,:host(cds-table-expand-row) .cds--table-expand,:host(cds-table-expand-row) ::slotted(cds-table-cell),:host(cds-table-expand-row) ::slotted(cds-table-cell-skeleton),:host(cds-table-row) .cds--table-column-checkbox,:host(cds-table-row) .cds--table-expand,:host(cds-table-row) ::slotted(cds-table-cell),:host(cds-table-row) ::slotted(cds-table-cell-skeleton){color:var(--cds-text-secondary,#525252);vertical-align:middle}:host(cds-table-row) ::slotted(cds-table-cell-skeleton:first-of-type),:host(cds-table-row) ::slotted(cds-table-cell:first-of-type){padding-inline-start:1rem}:host(cds-table-row) ::slotted(cds-table-cell-skeleton:last-of-type),:host(cds-table-row) ::slotted(cds-table-cell:last-of-type){padding-inline-end:1rem}:host(cds-table-row[expandable]) .cds--table-expand,:host(cds-table-row[selection-name]) .cds--table-expand{border-block-end:1px solid var(--cds-border-subtle);display:table-cell;padding-inline-end:0;transition:transform .15s cubic-bezier(.2,0,.38,.9)}:host(cds-table-row[expandable][expanded]) .cds--table-expand__svg,:host(cds-table-row[selection-name][expanded]) .cds--table-expand__svg{transform:rotate(270deg)}:host(cds-table-row[expandable][expanded]) .cds--table-expand,:host(cds-table-row[expandable][expanded][highlighted]) .cds--table-expand,:host(cds-table-row[selection-name][expandable][expanded]) .cds--table-expand,:host(cds-table-row[selection-name][expandable][expanded]:hover) .cds--table-expand,:host(cds-table-row[selection-name][expandable][expanded][highlighted]) :host(cds-table-row[expandable][expanded]:hover) .cds--table-expand{border-block-end-color:transparent}:host(cds-table-row[expandable][expanded][selected]) .cds--table-column-checkbox,:host(cds-table-row[expandable][expanded][selected]) .cds--table-expand,:host(cds-table-row[expandable][expanded][selected]) ::slotted(cds-table-cell),:host(cds-table-row[selection-name][expandable][expanded][selected]) .cds--table-column-checkbox,:host(cds-table-row[selection-name][expandable][expanded][selected]) .cds--table-expand,:host(cds-table-row[selection-name][expandable][expanded][selected]) ::slotted(cds-table-cell){background-color:var(--cds-layer-selected);border-block-end-color:var(--cds-border-subtle);border-block-start-color:var(--cds-layer-active)}:host(cds-table-row[expandable][expanded][selected]:hover) .cds--table-column-checkbox,:host(cds-table-row[expandable][expanded][selected]:hover) .cds--table-expand,:host(cds-table-row[expandable][expanded][selected]:hover) ::slotted(cds-table-cell),:host(cds-table-row[expandable][expanded][selected][highlighted]) .cds--table-column-checkbox,:host(cds-table-row[expandable][expanded][selected][highlighted]) .cds--table-expand,:host(cds-table-row[expandable][expanded][selected][highlighted]) ::slotted(cds-table-cell),:host(cds-table-row[selection-name][expandable][expanded][selected]:hover) .cds--table-column-checkbox,:host(cds-table-row[selection-name][expandable][expanded][selected]:hover) .cds--table-expand,:host(cds-table-row[selection-name][expandable][expanded][selected]:hover) ::slotted(cds-table-cell),:host(cds-table-row[selection-name][expandable][expanded][selected][highlighted]) .cds--table-column-checkbox,:host(cds-table-row[selection-name][expandable][expanded][selected][highlighted]) .cds--table-expand,:host(cds-table-row[selection-name][expandable][expanded][selected][highlighted]) ::slotted(cds-table-cell){background-color:var(--cds-layer-selected-hover)}:host(cds-table-row[expandable][selected]) .cds--table-column-checkbox,:host(cds-table-row[expandable][selected]) .cds--table-expand,:host(cds-table-row[expandable][selected]) ::slotted(cds-table-cell),:host(cds-table-row[selection-name][expandable][selected]) .cds--table-column-checkbox,:host(cds-table-row[selection-name][expandable][selected]) .cds--table-expand,:host(cds-table-row[selection-name][expandable][selected]) ::slotted(cds-table-cell){border-block-end-color:var(--cds-border-subtle)}:host(cds-table-row[expandable]:hover):not([ai-label]) .cds--table-column-checkbox,:host(cds-table-row[expandable]:hover):not([ai-label]) .cds--table-expand,:host(cds-table-row[expandable]:hover):not([ai-label]) ::slotted(cds-table-cell),:host(cds-table-row[expandable][highlighted]):not([ai-label]) .cds--table-column-checkbox,:host(cds-table-row[expandable][highlighted]):not([ai-label]) .cds--table-expand,:host(cds-table-row[expandable][highlighted]):not([ai-label]) ::slotted(cds-table-cell),:host(cds-table-row[selection-name][expandable]:hover):not([ai-label]) .cds--table-column-checkbox,:host(cds-table-row[selection-name][expandable]:hover):not([ai-label]) .cds--table-expand,:host(cds-table-row[selection-name][expandable]:hover):not([ai-label]) ::slotted(cds-table-cell),:host(cds-table-row[selection-name][expandable][highlighted]):not([ai-label]) .cds--table-column-checkbox,:host(cds-table-row[selection-name][expandable][highlighted]):not([ai-label]) .cds--table-expand,:host(cds-table-row[selection-name][expandable][highlighted]):not([ai-label]) ::slotted(cds-table-cell){border-block-end-color:var(--cds-border-subtle)}:host(cds-table-row[odd]) .cds--table-column-checkbox,:host(cds-table-row[odd]) .cds--table-expand,:host(cds-table-row[odd]) ::slotted(cds-table-cell),:host(cds-table-row[odd]) ::slotted(cds-table-cell-skeleton){border-block-end:1px solid var(--cds-layer)}:host(cds-table-row[even]) .cds--table-column-checkbox,:host(cds-table-row[even]) .cds--table-expand,:host(cds-table-row[even]) ::slotted(cds-table-cell),:host(cds-table-row[even]) ::slotted(cds-table-cell-skeleton){background-color:var(--cds-layer-accent);border-block-end:1px solid var(--cds-layer-accent)}:host(cds-table-expand-row:hover) .cds--table-column-checkbox,:host(cds-table-expand-row:hover) .cds--table-expand,:host(cds-table-expand-row:hover) ::slotted(cds-table-cell),:host(cds-table-expand-row:hover) ::slotted(cds-table-cell-skeleton),:host(cds-table-row:hover) .cds--table-column-checkbox,:host(cds-table-row:hover) .cds--table-expand,:host(cds-table-row:hover) ::slotted(cds-table-cell),:host(cds-table-row:hover) ::slotted(cds-table-cell-skeleton),:host(cds-table-row[highlighted]) .cds--table-column-checkbox,:host(cds-table-row[highlighted]) .cds--table-expand,:host(cds-table-row[highlighted]) ::slotted(cds-table-cell),:host(cds-table-row[highlighted]) ::slotted(cds-table-cell-skeleton){background-color:var(--cds-background-hover,hsla(0,0%,55%,.12));border-block-end-color:var(--cds-layer-hover);border-block-start-color:var(--cds-layer-hover);color:var(--cds-text-primary,#161616)}:host(cds-table-row[even]:hover) .cds--table-column-checkbox,:host(cds-table-row[even]:hover) .cds--table-expand,:host(cds-table-row[even]:hover) ::slotted(cds-table-cell),:host(cds-table-row[even]:hover) ::slotted(cds-table-cell-skeleton),:host(cds-table-row[highlighted]) .cds--table-column-checkbox,:host(cds-table-row[highlighted]) .cds--table-expand,:host(cds-table-row[highlighted]) ::slotted(cds-table-cell),:host(cds-table-row[highlighted]) ::slotted(cds-table-cell-skeleton),:host(cds-table-row[odd]:hover) .cds--table-column-checkbox,:host(cds-table-row[odd]:hover) .cds--table-expand,:host(cds-table-row[odd]:hover) ::slotted(cds-table-cell),:host(cds-table-row[odd]:hover) ::slotted(cds-table-cell-skeleton){background-color:var(--cds-background-hover,hsla(0,0%,55%,.12));border-block-end:1px solid var(--cds-layer-hover)}:host(cds-table-row[rows-with-ai-label]) cds-checkbox,:host(cds-table-row[rows-with-ai-label]) cds-radio-button{padding-inline-start:2rem}:host(cds-table-row[rows-with-ai-label]) .cds--table-expand{padding-inline-start:1rem}:host(cds-table-row[rows-with-ai-label]) .cds--table-expand__button{margin-inline-start:1.5rem}:host(cds-table-row[rows-with-ai-label][ai-label]) cds-checkbox,:host(cds-table-row[rows-with-ai-label][ai-label]) cds-radio-button{padding-inline-start:1rem}:host(cds-table-row[rows-with-ai-label][ai-label]) .cds--table-expand__button{margin-inline-start:.5rem}:host(cds-table-header-row[rows-with-ai-label]) .cds--table-expand{padding-inline-start:2.5rem}:host(cds-table-header-row[rows-with-ai-label]) .cds--table-column-checkbox{padding-inline-start:3rem}:host(cds-table-header-row[rows-with-ai-label][selection-name][expandable]) .cds--table-column-checkbox,:host(cds-table-row[rows-with-ai-label][selection-name][expandable]) .cds--table-column-checkbox{padding-inline-start:0}:host(cds-table-header-row[rows-with-ai-label][selection-name][expandable]) cds-checkbox,:host(cds-table-row[rows-with-ai-label][selection-name][expandable]) cds-checkbox{padding-inline-start:.5rem}:host(cds-table-row[ai-label]){background:linear-gradient(to right,var(--cds-ai-aura-start-sm,rgba(69,137,255,.16)) 0,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%,transparent 50%);background-attachment:fixed;box-shadow:inset 1px 0 var(--cds-ai-border-strong,#4589ff)}:host(cds-table-row[ai-label]):hover{background:linear-gradient(to right,var(--cds-ai-aura-hover-start,rgba(69,137,255,.32)) 0,15%,var(--cds-ai-aura-hover-end,hsla(0,0%,100%,0)) 50%),var(--cds-ai-aura-hover-background,#edf5ff);background-attachment:fixed}:host(cds-table-header-title){display:block}:host(cds-table-header-description){display:block}@media (min-width:42rem){:host(cds-table-header-description){max-inline-size:50ch}}@media (min-width:66rem){:host(cds-table-header-description){max-inline-size:80ch}}:host(cds-table-expanded-row){block-size:0;display:table-row;transition:height .15s cubic-bezier(.2,0,.38,.9)}:host(cds-table-expanded-row) ::slotted(*){color:var(--cds-text-secondary,#525252)}@media screen and (prefers-reduced-motion:reduce){:host(cds-table-expanded-row) td{border-block-end-color:var(--cds-border-subtle);padding:0;padding-inline-start:4rem;transition:none;vertical-align:middle}:host(cds-table-expanded-row) td .cds--child-row-inner-container{block-size:0;overflow:hidden}}:host(cds-table-expanded-row) td{border-block-end-color:var(--cds-border-subtle);padding:0;padding-inline-start:4rem;transition:all .11s cubic-bezier(.2,0,.38,.9);vertical-align:middle}:host(cds-table-expanded-row) td .cds--child-row-inner-container{block-size:0;overflow:hidden}:host(cds-table-expanded-row[expanded]){block-size:3rem}:host(cds-table-expanded-row[expanded]) td{block-size:auto;border-block-end:1px solid var(--cds-border-subtle)}:host(cds-table-expanded-row[expanded]) td .cds--child-row-inner-container{block-size:auto}:host(cds-table-expanded-row:hover),:host(cds-table-expanded-row[highlighted]),:host(cds-table-expanded-row[selected]){background-color:var(--cds-background-hover,hsla(0,0%,55%,.12))}:host(cds-table-expanded-row:hover) ::slotted(*),:host(cds-table-expanded-row[highlighted]) ::slotted(*),:host(cds-table-expanded-row[selected]) ::slotted(*){color:var(--cds-text-primary,#161616)}:host(cds-table-expanded-row[selected][highlighted]){background-color:var(--cds-layer-selected)}:host(cds-table-row[ai-label][expandable]):hover,:host(cds-table-row[ai-label][expandable])[highlighted],:host(cds-table-row[ai-label][expandable][selection-name][selected]):hover,:host(cds-table-row[ai-label][expandable][selection-name][selected])[highlighted]{background:linear-gradient(to right,var(--cds-ai-aura-hover-start,rgba(69,137,255,.32)) 0,15%,var(--cds-ai-aura-hover-end,hsla(0,0%,100%,0)) 50%),var(--cds-ai-aura-hover-background,#edf5ff);background-attachment:fixed}:host(cds-table-row[ai-label][expandable]):hover .cds--table-column-checkbox,:host(cds-table-row[ai-label][expandable]):hover .cds--table-expand,:host(cds-table-row[ai-label][expandable]):hover ::slotted(cds-table-cell),:host(cds-table-row[ai-label][expandable]):hover ::slotted(cds-table-cell-skeleton),:host(cds-table-row[ai-label][expandable])[highlighted] .cds--table-column-checkbox,:host(cds-table-row[ai-label][expandable])[highlighted] .cds--table-expand,:host(cds-table-row[ai-label][expandable])[highlighted] ::slotted(cds-table-cell),:host(cds-table-row[ai-label][expandable])[highlighted] ::slotted(cds-table-cell-skeleton),:host(cds-table-row[ai-label][expandable][selection-name][selected]):hover .cds--table-column-checkbox,:host(cds-table-row[ai-label][expandable][selection-name][selected]):hover .cds--table-expand,:host(cds-table-row[ai-label][expandable][selection-name][selected]):hover ::slotted(cds-table-cell),:host(cds-table-row[ai-label][expandable][selection-name][selected]):hover ::slotted(cds-table-cell-skeleton),:host(cds-table-row[ai-label][expandable][selection-name][selected])[highlighted] .cds--table-column-checkbox,:host(cds-table-row[ai-label][expandable][selection-name][selected])[highlighted] .cds--table-expand,:host(cds-table-row[ai-label][expandable][selection-name][selected])[highlighted] ::slotted(cds-table-cell),:host(cds-table-row[ai-label][expandable][selection-name][selected])[highlighted] ::slotted(cds-table-cell-skeleton){background:none}:host(cds-table-row[ai-label][expandable]):hover[expanded] .cds--table-expand,:host(cds-table-row[ai-label][expandable])[highlighted][expanded] .cds--table-expand,:host(cds-table-row[ai-label][expandable][selection-name][selected]):hover[expanded] .cds--table-expand,:host(cds-table-row[ai-label][expandable][selection-name][selected])[highlighted][expanded] .cds--table-expand{border-block-end-color:transparent}:host(cds-table-row[ai-label][expandable]) .cds--table-column-checkbox,:host(cds-table-row[ai-label][expandable]) .cds--table-expand,:host(cds-table-row[ai-label][expandable]) ::slotted(cds-table-cell),:host(cds-table-row[ai-label][expandable]) ::slotted(cds-table-cell-skeleton),:host(cds-table-row[ai-label][expandable][selection-name][selected]) .cds--table-column-checkbox,:host(cds-table-row[ai-label][expandable][selection-name][selected]) .cds--table-expand,:host(cds-table-row[ai-label][expandable][selection-name][selected]) ::slotted(cds-table-cell),:host(cds-table-row[ai-label][expandable][selection-name][selected]) ::slotted(cds-table-cell-skeleton){background:none}:host(cds-table-row[ai-label][expandable])[expanded] .cds--table-expand,:host(cds-table-row[ai-label][expandable][selection-name][selected])[expanded] .cds--table-expand{border-block-end-color:transparent}:host(cds-table-expanded-row[ai-label]){background:linear-gradient(to right,var(--cds-ai-aura-start-sm,rgba(69,137,255,.16)) 0,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%,transparent 50%)}:host(cds-table-expanded-row[ai-label])[highlighted]{background:linear-gradient(to right,var(--cds-ai-aura-hover-start,rgba(69,137,255,.32)) 0,15%,var(--cds-ai-aura-hover-end,hsla(0,0%,100%,0)) 50%),var(--cds-ai-aura-hover-background,#edf5ff)}:host(cds-table-expanded-row[rows-with-ai-label]) td{padding-inline-start:to-rem(88px)}:host(cds-table-row) .cds--table-expand{block-size:100%;border-block-end:1px solid var(--cds-border-subtle);display:table-cell;vertical-align:middle}:host(cds-table-row) .cds--table-expand>div{align-items:center;block-size:100%;display:flex}:host(cds-table-row):hover .cds--table-expand,:host(cds-table-row)[highlighted] .cds--table-expand{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12));border-block-end-color:var(--cds-layer-hover);border-block-start-color:var(--cds-layer-hover)}:host(cds-table-row)[even] .cds--table-expand{background-color:var(--cds-layer-accent);border-block-end:1px solid var(--cds-layer-accent)}:host(cds-table-row)[even] .cds--table-expand:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12));border-block-end:1px solid var(--cds-layer-hover)}:host(cds-table-row)[odd] .cds--table-expand{border-block-end:1px solid var(--cds-layer)}:host(cds-table-row)[odd] .cds--table-expand:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12));border-block-end:1px solid var(--cds-layer-hover)}:host(cds-table-body) ::slotted(cds-table-row[size=xs]),:host(cds-table-head) ::slotted(cds-table-header-row[size=xs]){block-size:1.5rem}:host(cds-table-header-row[size=xs]) ::slotted(cds-table-header-cell),:host(cds-table-row[size=xs]) ::slotted(cds-table-header-cell){block-size:1.5rem}:host(cds-table-header-row[size=xs]) ::slotted(cds-table-cell),:host(cds-table-row[size=xs]) ::slotted(cds-table-cell){padding-block:.125rem;padding-inline-start:1rem}:host(cds-table-header-row[size=xs]) .cds--table-expand,:host(cds-table-row[size=xs]) .cds--table-expand{block-size:1.5rem;padding-block:0}:host(cds-table-body) ::slotted(cds-table-row[size=sm]),:host(cds-table-head) ::slotted(cds-table-header-row[size=sm]){block-size:2rem}:host(cds-table-header-row[size=sm]) ::slotted(cds-table-header-cell),:host(cds-table-row[size=sm]) ::slotted(cds-table-header-cell){block-size:2rem}:host(cds-table-header-row[size=sm]) ::slotted(cds-table-cell),:host(cds-table-row[size=sm]) ::slotted(cds-table-cell){padding-block:.4375rem .375rem;padding-inline-start:1rem}:host(cds-table-header-row[size=sm]) .cds--table-expand,:host(cds-table-row[size=sm]) .cds--table-expand{padding-block:0}:host(cds-table-header-row[size=sm]) ::slotted(cds-overflow-menu),:host(cds-table-row[size=sm]) ::slotted(cds-overflow-menu){block-size:2rem}:host(cds-table-body) ::slotted(cds-table-row[size=md]),:host(cds-table-head) ::slotted(cds-table-header-row[size=md]){block-size:2.5rem}:host(cds-table-header-row[size=md]) ::slotted(cds-table-header-cell),:host(cds-table-row[size=md]) ::slotted(cds-table-header-cell){block-size:2.5rem}:host(cds-table-header-row[size=md]) ::slotted(cds-table-cell),:host(cds-table-row[size=md]) ::slotted(cds-table-cell){padding-block:.4375rem .375rem;padding-inline-start:1rem}:host(cds-table-header-row[size=md]) .cds--table-expand,:host(cds-table-row[size=md]) .cds--table-expand{padding-block:.25rem}:host(cds-table-header-row[size=md]) ::slotted(cds-overflow-menu),:host(cds-table-row[size=md]) ::slotted(cds-overflow-menu){block-size:2.5rem}:host(cds-table-body) ::slotted(cds-table-row[size=lg]),:host(cds-table-head) ::slotted(cds-table-header-row[size=lg]){block-size:3rem}:host(cds-table-body) ::slotted(cds-table-row[size=xl]),:host(cds-table-head) ::slotted(cds-table-header-row[size=xl]){block-size:4rem}:host(cds-table-header-row[size=xl]) ::slotted(cds-table-header-cell){padding-block-start:1rem;vertical-align:top}:host(cds-table-header-row[size=xl]) ::slotted(cds-table-cell),:host(cds-table-row[size=xl]) ::slotted(cds-table-cell){padding-block-start:1rem}:host(cds-table-header-row[size=xl]) .cds--table-expand,:host(cds-table-row[size=xl]) .cds--table-expand{padding-block-end:1.375rem}:host(cds-table-header-row[size=xl]) .cds--table-column-checkbox,:host(cds-table-header-row[size=xl]) .cds--table-expand,:host(cds-table-row[size=xl]) .cds--table-column-checkbox,:host(cds-table-row[size=xl]) .cds--table-expand{padding-block-start:.625rem;vertical-align:top}:host(cds-table-header-row[size=xl])[radio] .cds--table-column-checkbox,:host(cds-table-row[size=xl])[radio] .cds--table-column-checkbox{padding-block-start:1rem}:host(cds-table-expanded-row[size=xl][expanded]) td{padding-block:1rem .5rem;padding-inline-end:1rem}:host(cds-table-toolbar-content[size=xs]),:host(cds-table-toolbar-content[size=xs]) ::slotted(cds-button),:host(cds-table-toolbar-content[size=xs]) ::slotted(cds-overflow-menu),:host(cds-table-toolbar-content[size=xs]) ::slotted(cds-table-toolbar-search),:host(cds-table-toolbar[size=xs]),:host(cds-table-toolbar[size=xs]) ::slotted(cds-button),:host(cds-table-toolbar[size=xs]) ::slotted(cds-overflow-menu),:host(cds-table-toolbar[size=xs]) ::slotted(cds-table-toolbar-search){block-size:2rem;min-block-size:2rem}:host(cds-table-toolbar-content[size=xs]) ::slotted(cds-overflow-menu),:host(cds-table-toolbar-content[size=xs]) ::slotted(cds-table-toolbar-search),:host(cds-table-toolbar[size=xs]) ::slotted(cds-overflow-menu),:host(cds-table-toolbar[size=xs]) ::slotted(cds-table-toolbar-search){inline-size:2rem}:host(cds-table-toolbar-content[size=sm]),:host(cds-table-toolbar-content[size=sm]) ::slotted(cds-button),:host(cds-table-toolbar-content[size=sm]) ::slotted(cds-overflow-menu),:host(cds-table-toolbar-content[size=sm]) ::slotted(cds-table-toolbar-search),:host(cds-table-toolbar[size=sm]),:host(cds-table-toolbar[size=sm]) ::slotted(cds-button),:host(cds-table-toolbar[size=sm]) ::slotted(cds-overflow-menu),:host(cds-table-toolbar[size=sm]) ::slotted(cds-table-toolbar-search){block-size:2rem;min-block-size:2rem}:host(cds-table-toolbar-content[size=sm]) ::slotted(cds-overflow-menu),:host(cds-table-toolbar-content[size=sm]) ::slotted(cds-table-toolbar-search),:host(cds-table-toolbar[size=sm]) ::slotted(cds-overflow-menu),:host(cds-table-toolbar[size=sm]) ::slotted(cds-table-toolbar-search){inline-size:2rem}:host(cds-table-header-row[selection-name][expandable][size=xs]) .cds--table-column-checkbox,:host(cds-table-row[selection-name][expandable][size=xs]) .cds--table-column-checkbox{padding:0 .375rem}:host(cds-table-header-row[selection-name][expandable][size=md]) .cds--table-column-checkbox,:host(cds-table-header-row[selection-name][expandable][size=sm]) .cds--table-column-checkbox,:host(cds-table-row[selection-name][expandable][size=md]) .cds--table-column-checkbox,:host(cds-table-row[selection-name][expandable][size=sm]) .cds--table-column-checkbox{padding:.1875rem .375rem}:host(cds-table-header-row[selection-name][expandable][size=xl]) .cds--table-column-checkbox{padding-inline:.375rem}:host(cds-table-cell[size=sm]) ::slotted(cds-overflow-menu),:host(cds-table-cell[size=xs]) ::slotted(cds-overflow-menu){block-size:calc(100% + 1px)}:host(cds-table-cell[size=md]) ::slotted(cds-overflow-menu){block-size:2.5rem}:host(cds-table-header-row) .cds--table-column-checkbox{border-block-end:none;border-block-start:none;padding-inline:1rem .25rem;transition:background-color 70ms cubic-bezier(0,0,.38,.9)}:host(cds-table-header-row) .cds--table-column-checkbox .cds--checkbox-label{inline-size:20px}:host(cds-table-header-row[selected]) .cds--table-column-checkbox,:host(cds-table-header-row[selected]) .cds--table-expand,:host(cds-table-header-row[selected]) ::slotted(cds-table-header-cell){border-block-end:1px solid var(--cds-layer-active)}:host(cds-table-row[selected]:first-of-type) .cds--table-column-checkbox,:host(cds-table-row[selected]:first-of-type) .cds--table-expand,:host(cds-table-row[selected]:first-of-type) ::slotted(cds-table-cell){border-block-start:1px solid var(--cds-border-subtle-selected)}:host(cds-table-row) .cds--table-column-checkbox{border-block-end:1px solid var(--cds-border-subtle);padding-inline:1rem .25rem}:host(cds-table-row) .cds--table-column-checkbox .cds--checkbox-label{padding-inline-start:1rem}:host(cds-table-row:hover) .cds--table-column-checkbox{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12));border-block-end-color:var(--cds-layer-hover);border-block-start-color:var(--cds-layer-hover)}:host(cds-table-row[selected]) .cds--table-column-checkbox,:host(cds-table-row[selected]) .cds--table-expand,:host(cds-table-row[selected]) ::slotted(cds-table-cell){background-color:var(--cds-layer-accent);border-block-end:1px solid var(--cds-layer-active);color:var(--cds-text-primary,#161616)}:host(cds-table-row[selected]):hover .cds--table-column-checkbox,:host(cds-table-row[selected]):hover .cds--table-expand,:host(cds-table-row[selected]):hover ::slotted(cds-table-cell){background-color:var(--cds-layer-selected-hover);border-block-end-color:var(--cds-layer-selected-hover)}:host(cds-table-expanded-row[filtered]),:host(cds-table-row[filtered]){display:none!important}:host(cds-table-expanded-row[selected][ai-label]:not([highlighted])),:host(cds-table-row[expandable][selected][ai-label]),:host(cds-table-row[selected][ai-label]){background:linear-gradient(to right,var(--cds-ai-aura-start-sm,rgba(69,137,255,.16)) 0,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%,transparent 50%),var(--cds-layer-selected);background-attachment:fixed}:host(cds-table-expanded-row[selected][ai-label]:not([highlighted])):hover,:host(cds-table-expanded-row[selected][ai-label]:not([highlighted]))[highlighted],:host(cds-table-row[expandable][selected][ai-label]):hover,:host(cds-table-row[expandable][selected][ai-label])[highlighted],:host(cds-table-row[selected][ai-label]):hover,:host(cds-table-row[selected][ai-label])[highlighted]{background:linear-gradient(to right,var(--cds-ai-aura-hover-start,rgba(69,137,255,.32)) 0,15%,var(--cds-ai-aura-hover-end,hsla(0,0%,100%,0)) 50%),var(--cds-ai-aura-hover-background,#edf5ff);background-attachment:fixed}:host(cds-table-expanded-row[selected][ai-label]:not([highlighted])):hover .cds--table-column-checkbox,:host(cds-table-expanded-row[selected][ai-label]:not([highlighted])):hover .cds--table-expand,:host(cds-table-expanded-row[selected][ai-label]:not([highlighted])):hover ::slotted(cds-table-cell),:host(cds-table-expanded-row[selected][ai-label]:not([highlighted]))[highlighted] .cds--table-column-checkbox,:host(cds-table-expanded-row[selected][ai-label]:not([highlighted]))[highlighted] .cds--table-expand,:host(cds-table-expanded-row[selected][ai-label]:not([highlighted]))[highlighted] ::slotted(cds-table-cell),:host(cds-table-row[expandable][selected][ai-label]):hover .cds--table-column-checkbox,:host(cds-table-row[expandable][selected][ai-label]):hover .cds--table-expand,:host(cds-table-row[expandable][selected][ai-label]):hover ::slotted(cds-table-cell),:host(cds-table-row[expandable][selected][ai-label])[highlighted] .cds--table-column-checkbox,:host(cds-table-row[expandable][selected][ai-label])[highlighted] .cds--table-expand,:host(cds-table-row[expandable][selected][ai-label])[highlighted] ::slotted(cds-table-cell),:host(cds-table-row[selected][ai-label]):hover .cds--table-column-checkbox,:host(cds-table-row[selected][ai-label]):hover .cds--table-expand,:host(cds-table-row[selected][ai-label]):hover ::slotted(cds-table-cell),:host(cds-table-row[selected][ai-label])[highlighted] .cds--table-column-checkbox,:host(cds-table-row[selected][ai-label])[highlighted] .cds--table-expand,:host(cds-table-row[selected][ai-label])[highlighted] ::slotted(cds-table-cell){background:none}:host(cds-table-expanded-row[selected][ai-label]:not([highlighted])) .cds--table-column-checkbox,:host(cds-table-expanded-row[selected][ai-label]:not([highlighted])) .cds--table-expand,:host(cds-table-expanded-row[selected][ai-label]:not([highlighted])) ::slotted(cds-table-cell),:host(cds-table-row[expandable][selected][ai-label]) .cds--table-column-checkbox,:host(cds-table-row[expandable][selected][ai-label]) .cds--table-expand,:host(cds-table-row[expandable][selected][ai-label]) ::slotted(cds-table-cell),:host(cds-table-row[selected][ai-label]) .cds--table-column-checkbox,:host(cds-table-row[selected][ai-label]) .cds--table-expand,:host(cds-table-row[selected][ai-label]) ::slotted(cds-table-cell){background:none}.cds--data-table th[aria-sort],.cds--data-table--sort th{block-size:3rem;border-block-end:none;border-block-start:none;padding:0}.cds--table-sort__description{display:none}.cds--table-sort{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--table-sort *,.cds--table-sort :after,.cds--table-sort :before{box-sizing:inherit}.cds--table-sort::-moz-focus-inner{border:0}.cds--table-sort{align-items:center;background-color:var(--cds-layer-accent);color:var(--cds-text-primary,#161616);display:flex;font:inherit;inline-size:100%;justify-content:space-between;line-height:1;min-block-size:100%;padding-inline-start:1rem;text-align:start;transition:background-color 70ms cubic-bezier(0,0,.38,.9),outline 70ms cubic-bezier(0,0,.38,.9)}.cds--table-sort:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--table-sort:focus{outline-style:dotted}}.cds--table-sort:hover{background:var(--cds-layer-selected-hover)}.cds--table-sort:focus svg,.cds--table-sort:hover svg{opacity:1}.cds--data-table.cds--data-table--sort th>.cds--table-header-label{line-height:1;padding-inline:1rem 1rem}th .cds--table-sort__flex{align-items:center;block-size:100%;display:flex;inline-size:100%;justify-content:space-between;min-block-size:3rem}.cds--data-table--top-aligned-header th .cds--table-sort__flex{align-items:start}.cds--data-table.cds--data-table--top-aligned-header.cds--data-table--lg th.cds--table-sort__header{padding-block-start:1rem}.cds--data-table.cds--data-table--top-aligned-header.cds--data-table--sm th.cds--table-sort__header .cds--table-sort__flex .cds--table-header-label,.cds--data-table.cds--data-table--top-aligned-header.cds--data-table--xs th.cds--table-sort__header .cds--table-sort__flex .cds--table-header-label{padding-block:0}.cds--data-table.cds--data-table--top-aligned-header.cds--data-table--sm th.cds--table-sort__header{padding-block:.4375rem .4375rem}.cds--data-table.cds--data-table--top-aligned-header.cds--data-table--xs th.cds--table-sort__header{padding-block:.125rem .125rem}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){.cds--data-table--sort:not(.cds--data-table--xs):not(.cds--data-table--sm):not(.cds--data-table--md):not(.cds--data-table--xl) th .cds--table-sort__flex{block-size:2.99rem}}.cds--data-table--xs.cds--data-table--sort th .cds--table-sort__flex{min-block-size:1.5rem}.cds--data-table--sm.cds--data-table--sort th .cds--table-sort__flex{min-block-size:2rem}.cds--data-table--md.cds--data-table--sort th .cds--table-sort__flex{min-block-size:2.5rem}.cds--data-table--xl.cds--data-table--sort th .cds--table-sort__flex{align-items:flex-start;min-block-size:4rem}.cds--table-sort .cds--table-sort__icon-inactive{display:block}.cds--table-sort .cds--table-sort__icon{display:none}.cds--table-sort__icon-unsorted{fill:var(--cds-icon-primary,#161616);inline-size:1.25rem;margin-inline:.5rem .5rem;min-inline-size:1rem;opacity:0}.cds--table-sort.cds--table-sort--active{background:var(--cds-layer-selected-hover)}.cds--table-sort.cds--table-sort--active .cds--table-sort__icon-unsorted{display:none}.cds--table-sort.cds--table-sort--active .cds--table-sort__icon{display:block;opacity:1}.cds--table-sort--descending .cds--table-sort__icon{transform:rotate(180deg)}.cds--table-sort__icon{fill:var(--cds-icon-primary,#161616);inline-size:1.25rem;margin-inline:.5rem .5rem;min-inline-size:1rem;opacity:1;transform:rotate(0);transition:transform .25s cubic-bezier(.5,0,.1,1)}.cds--data-table--xs.cds--data-table--sort th{block-size:1.5rem}.cds--data-table--sm.cds--data-table--sort th{block-size:2rem}.cds--data-table--md.cds--data-table--sort th{block-size:2.5rem}.cds--data-table--xl.cds--data-table--sort th{block-size:4rem}.cds--data-table--xl.cds--data-table--sort th .cds--table-sort{block-size:4rem;display:inline-block}.cds--data-table--xl .cds--table-sort__icon,.cds--data-table--xl .cds--table-sort__icon-unsorted{margin-block-start:.8125rem}.cds--table-sort__header .cds--ai-label,.cds--table-sort__header .cds--slug,.cds--table-sort__header .cds--table-header-label--decorator-inner{display:none}.cds--table-sort__header--ai-label .cds--table-sort__icon,.cds--table-sort__header--ai-label .cds--table-sort__icon-unsorted,.cds--table-sort__header--decorator .cds--table-sort__icon,.cds--table-sort__header--decorator .cds--table-sort__icon-unsorted,.cds--table-sort__header--slug .cds--table-sort__icon,.cds--table-sort__header--slug .cds--table-sort__icon-unsorted{margin-inline:auto .5rem}.cds--table-sort__header--ai-label .cds--ai-label,.cds--table-sort__header--ai-label .cds--slug,.cds--table-sort__header--ai-label .cds--table-header-label--decorator-inner,.cds--table-sort__header--decorator .cds--table-header-label--decorator-inner{display:block;margin-inline-end:.5rem}:host(cds-table-header-row) ::slotted(cds-table-header-cell[sort-direction]){padding-inline:0}:host(cds-table-header-cell[sort-direction]:first-of-type) .cds--table-sort{padding-inline-start:1rem}:host(cds-table-header-cell[sort-direction][expandable][selection-name]) .cds--table-sort{padding-inline-start:0}:host(cds-table-header-cell) .cds--table-sort:hover .cds--table-sort__icon,:host(cds-table-header-cell[sort-active]) .cds--table-sort .cds--table-sort__icon{opacity:1}:host(cds-table-header-cell[sort-direction]) .cds--table-sort .cds--table-sort__icon{display:block}:host(cds-table-header-cell[sort-direction=ascending]) .cds--table-sort__icon{transform:rotate(180deg)}:host(cds-table-header-cell[sort-direction][ai-label]) .cds--table-sort__icon,:host(cds-table-header-cell[sort-direction][ai-label]) .cds--table-sort__icon-unsorted{margin-inline:auto .5rem}:host(cds-table-header-cell[sort-direction][ai-label]) ::slotted(cds-ai-label),:host(cds-table-header-cell[sort-direction][ai-label]) ::slotted(cds-slug){margin-inline-end:.5rem}']);

// node_modules/@carbon/web-components/es/components/data-table/table.js
var CDSTable = class CDSTable2 extends HostListenerMixin(i2) {
  constructor() {
    super(...arguments);
    this.collationFactors = {
      [TABLE_SORT_DIRECTION.ASCENDING]: 1,
      [TABLE_SORT_DIRECTION.DESCENDING]: -1
    };
    this._searchValue = "";
    this._selectedRows = [];
    this.batchExpansion = false;
    this.expandable = false;
    this.filterRows = (rowText, searchString) => rowText.toLowerCase().indexOf(searchString.toLowerCase()) < 0;
    this.headerCount = 0;
    this.isSelectable = false;
    this.isSortable = false;
    this.locale = "en";
    this.overflowMenuOnHover = false;
    this.radio = false;
    this.size = TABLE_SIZE.LG;
    this.useStaticWidth = false;
    this.useZebraStyles = false;
    this.withRowAILabels = false;
    this.withRowSlugs = false;
    this._handleBatchExpansion = async (event) => {
      const { detail, target } = event;
      const { expanded } = detail;
      if (target === this._tableHeaderRow) {
        this._tableRows.forEach((e3) => e3.expanded = expanded);
      }
    };
    this._handleSort = async (event) => {
      const { detail, target } = event;
      const { sortDirection } = detail;
      if (!this.contains(target)) {
        return;
      }
      const columns = [...this._tableHeaderRow.children];
      const columnIndex = columns.indexOf(target);
      columns.forEach((e3) => {
        if (e3 !== target && this.isSortable) {
          e3.setAttribute("sort-direction", "none");
        } else if (e3.hasAttribute("is-sortable")) {
          e3.setAttribute("sort-direction", "none");
        }
      });
      this._handleSortAction(columnIndex, sortDirection);
      const init = {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: {
          sortedHeader: columns[columnIndex]
        }
      };
      this.dispatchEvent(new CustomEvent(this.constructor.eventTableSorted, init));
      this._handleFilterRows();
    };
    this._handleSearchInput = async (event) => {
      const { detail, target } = event;
      if (this.contains(target)) {
        const { value } = detail;
        this._searchValue = value;
        this._handleFilterRows();
      }
    };
    this._handleRowSelect = async (event) => {
      var _a, _b;
      const { detail, target } = event;
      const { selected } = detail;
      const { _tableBatchActions: tableBatchActions, _tableToolbarContent: tableToolbarContent, _tableHeaderRow: tableHeaderRow, _selectedRows: selectedRows } = this;
      if (!this.contains(target)) {
        return;
      }
      if (this.radio) {
        this._tableRows.forEach((e3) => {
          if (e3 !== target) {
            e3.removeAttribute("selected");
            e3.shadowRoot.querySelector(`${prefix}-radio-button`).checked = false;
          }
        });
        this._selectedRows.push(...[target]);
      } else {
        if (selectedRows.includes(target)) {
          this._selectedRows = selectedRows.filter((e3) => e3 !== target);
        } else {
          selectedRows.push(target);
        }
        if (tableBatchActions) {
          tableBatchActions.active = (_a = this._selectedRows) === null || _a === void 0 ? void 0 : _a.length;
          tableBatchActions.selectedRowsCount += selected ? 1 : -1;
        }
        if (tableToolbarContent) {
          tableToolbarContent.hasBatchActions = this._selectedRows.length;
        }
      }
      const totalSelectableRows = [...this._tableRows].filter((elem) => !elem.hasAttribute("filtered") && !elem.hasAttribute("disabled")).length;
      const headerCheckbox = (_b = tableHeaderRow.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(`${prefix}-checkbox`).shadowRoot.querySelector(`.${prefix}--checkbox`);
      const allRowsSelected = this._selectedRows.length === totalSelectableRows;
      headerCheckbox.checked = Boolean(this._selectedRows.length);
      headerCheckbox.indeterminate = !allRowsSelected && this._selectedRows.length > 0;
      const init = {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: {
          selectedRow: target,
          selectedRows
        }
      };
      this.dispatchEvent(new CustomEvent(this.constructor.eventTableRowSelect, init));
    };
    this._handleAllRowsSelect = async (event) => {
      const { detail, target } = event;
      const { selected } = detail;
      const { _tableBatchActions: tableBatchActions, _tableToolbarContent: tableToolbarContent, _tableRows: tableRows } = this;
      if (!this.contains(target)) {
        return;
      }
      let totalRows = 0;
      forEach(tableRows, (elem) => {
        if (!elem.filtered && !elem.disabled) {
          elem.selected = selected;
          if (this.radio) {
            const radioButton = elem.shadowRoot.querySelector(`${prefix}-radio-button`);
            radioButton.checked = selected;
          }
          this._selectedRows.push(elem);
          totalRows++;
          const { selectorTableExpandedRows } = this.constructor;
          const { nextElementSibling } = elem;
          if (nextElementSibling === null || nextElementSibling === void 0 ? void 0 : nextElementSibling.matches(selectorTableExpandedRows)) {
            elem.nextElementSibling.selected = selected;
          }
        }
      });
      if (!selected) {
        this._selectedRows = [];
      }
      if (tableBatchActions) {
        tableBatchActions.selectedRowsCount = selected ? totalRows : 0;
        tableBatchActions.active = selected;
      }
      if (tableToolbarContent) {
        tableToolbarContent.hasBatchActions = selected;
      }
      const init = {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: {
          selectedRows: this._selectedRows
        }
      };
      this.dispatchEvent(new CustomEvent(this.constructor.eventTableRowSelectAll, init));
    };
    this._handleCancelSelection = async (event) => {
      var _a;
      const { target } = event;
      const { _tableHeaderRow: tableHeaderRow } = this;
      if (this.contains(target)) {
        (_a = tableHeaderRow.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`${prefix}-checkbox`).shadowRoot.querySelector(`.${prefix}--checkbox`).click();
      }
    };
  }
  /**
   * @param lhs A value.
   * @param rhs Another value.
   * @param collator A custom collator.
   * @returns
   *   `0` if the given two values are equal
   *   A negative value to sort `lhs` to an index lower than `rhs`
   *   A positive value to sort `rhs` to an index lower than `lhs`
   */
  customSortRow(lhs, rhs, collator) {
    if (typeof lhs === "number" && typeof rhs === "number") {
      return lhs - rhs;
    }
    return collator.compare(lhs, rhs);
  }
  _handleSlotChange({ target }) {
    const hasContent = target.assignedNodes().some(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- https://github.com/carbon-design-system/carbon/issues/20452
      (node) => node.nodeType !== Node.TEXT_NODE || node.textContent.trim()
    );
    this.withHeader = hasContent;
  }
  _handleTableBodyChange() {
    this._tableBody = this.querySelector(this.constructor.selectorTableBody);
    this._tableExpandedRows = this.querySelectorAll(this.constructor.selectorTableExpandedRows);
    this._tableRows = this.querySelectorAll(this.constructor.selectorTableRow);
    this.updateExpandable();
  }
  _handleSortAction(columnIndex, sortDirection) {
    const rows = [...this._tableRows];
    rows.sort((a, b2) => {
      const cellA = a.querySelectorAll(this.constructor.selectorTableRowCells)[columnIndex].textContent;
      const cellB = b2.querySelectorAll(this.constructor.selectorTableRowCells)[columnIndex].textContent;
      return this.collationFactors[sortDirection] * this.customSortRow(cellA, cellB, this.collator);
    });
    if (this.expandable) {
      const originalRows = [...this._tableRows];
      const expandedRows = [...this._tableExpandedRows];
      const mapping = originalRows.reduce((acc, element, index) => {
        const sortId = element.getAttribute("sort-id");
        acc[sortId] = expandedRows[index];
        return acc;
      }, {});
      const sortedWithExpanded = [];
      rows.forEach((e3) => {
        const sortId = e3.getAttribute("sort-id");
        sortedWithExpanded.push(e3);
        if (mapping[sortId]) {
          sortedWithExpanded.push(mapping[sortId]);
        }
      });
      sortedWithExpanded.forEach((e3) => {
        this._tableBody.insertBefore(e3, null);
      });
    } else {
      rows.forEach((e3) => {
        this._tableBody.insertBefore(e3, null);
      });
    }
  }
  _handleFilterRows() {
    const unfilteredRows = [];
    forEach(this._tableRows, (elem) => {
      var _a, _b, _c;
      let rowText = (_a = elem.textContent) === null || _a === void 0 ? void 0 : _a.trim();
      let filtered = this.filterRows(rowText, this._searchValue);
      elem.filtered = filtered;
      if (filtered && this.expandable) {
        rowText = (_b = elem.nextElementSibling.textContent) === null || _b === void 0 ? void 0 : _b.trim();
        filtered = this.filterRows(rowText, this._searchValue);
        elem.filtered = filtered;
      }
      if (!filtered) {
        unfilteredRows.push(elem);
      }
      if (this.isSelectable) {
        const unfilteredSelectableLength = unfilteredRows.filter((elem2) => {
          return !elem2.hasAttribute("disabled");
        }).length;
        const headerCheckbox = (_c = this._tableHeaderRow.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector(`${prefix}-checkbox`).shadowRoot.querySelector(`.${prefix}--checkbox`);
        headerCheckbox.disabled = unfilteredSelectableLength === 0;
      }
      if (this.expandable) {
        elem.nextElementSibling.filtered = filtered;
      }
    });
    const init = {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        unfilteredRows
      }
    };
    this.dispatchEvent(new CustomEvent(this.constructor.eventTableFiltered, init));
  }
  /**
   * Download manager for selected rows.
   */
  _handleDownload({ target }) {
    const data = [];
    const elementsToArray = (elements) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/carbon-design-system/carbon/issues/20452
      Array.from(elements, (element) => element.textContent)
    );
    const headerCells = this.querySelectorAll(this.constructor.selectorHeaderCell);
    const rows = this._selectedRows;
    const headerTitleArray = elementsToArray(headerCells);
    rows.forEach((row) => {
      const rowData = {};
      const cells = elementsToArray(row.querySelectorAll(this.constructor.selectorTableRowCells));
      cells.forEach((cellText, index) => {
        const headerTitle = headerTitleArray[index];
        rowData[headerTitle] = cellText;
      });
      data.push(rowData);
    });
    const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
    target.href = URL.createObjectURL(blob);
  }
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "table");
    }
    if (this.withRowSlugs) {
      this.setAttribute("with-rows-ai-labels", "");
      this.withRowAILabels = true;
    }
    super.connectedCallback();
  }
  firstUpdated() {
    this._tableBatchActions = this.querySelector(this.constructor.selectorTableBatchActions);
    this._tableToolbar = this.querySelector(this.constructor.selectorTableToolbar);
    this._tableToolbarContent = this.querySelector(this.constructor.selectorTableToolbarContent);
    this._tableBody = this.querySelector(this.constructor.selectorTableBody);
    this._tableHeaderRow = this.querySelector(this.constructor.selectorRowsWithHeader);
    this._tableExpandedRows = this.querySelectorAll(this.constructor.selectorTableExpandedRows);
    this._tableRows = this.querySelectorAll(this.constructor.selectorTableRow);
    this._downloadButton = this.querySelector(this.constructor.selectorToolbarDownload);
    if (this._downloadButton) {
      this._downloadButton.onclick = this._handleDownload.bind(this);
    }
    this.headerCount = this._tableHeaderRow.children.length;
  }
  updateExpandable() {
    const { selectorTableExpandedRows } = this.constructor;
    this._tableRows.forEach((e3, index) => {
      var _a;
      const hasExpandedRow = (_a = e3.nextElementSibling) === null || _a === void 0 ? void 0 : _a.matches(selectorTableExpandedRows);
      e3.expandable = this.expandable && hasExpandedRow;
      e3.setAttribute("sort-id", index);
    });
    this._tableHeaderRow.expandable = this.expandable;
    this._tableHeaderRow.batchExpansion = this.batchExpansion;
    this.headerCount += this.expandable ? 1 : -1;
  }
  updated(changedProperties) {
    var _a;
    if (changedProperties.has("expandable")) {
      this.updateExpandable();
    }
    if (changedProperties.has("headerCount")) {
      this._tableExpandedRows.forEach((e3) => {
        e3.setAttribute("colspan", this.headerCount);
      });
    }
    if (changedProperties.has("isSelectable")) {
      if (this.isSelectable) {
        this._tableHeaderRow.setAttribute("selection-name", "header");
        this._tableRows.forEach((e3, index) => {
          if (!e3.hasAttribute("selection-name")) {
            e3.setAttribute("selection-name", index);
          }
        });
      }
      this.headerCount++;
    }
    if (changedProperties.has("locale")) {
      this.collator = new Intl.Collator(this.locale);
    }
    if (changedProperties.has("isSortable")) {
      if (this.isSortable) {
        this._enableSortAction();
      }
    }
    if (changedProperties.has("overflowMenuOnHover") || changedProperties.has("size")) {
      forEach(this.querySelectorAll(this.constructor.selectorTableCellOverflowMenu), (elem) => {
        const cell = elem.parentNode;
        const row = cell.parentNode;
        cell.overflowMenuOnHover = this.overflowMenuOnHover;
        row.overflowMenuOnHover = this.overflowMenuOnHover;
        cell.setAttribute("size", this.size);
        elem.setAttribute("size", this.size);
        elem.setAttribute("data-table", "");
      });
    }
    if (changedProperties.has("radio")) {
      forEach(this.querySelectorAll(this.constructor.selectorTableRow), (elem) => {
        elem.radio = this.radio;
      });
      if (this._tableHeaderRow) {
        this._tableHeaderRow.hideCheckbox = this.radio;
      }
    }
    if (changedProperties.has("size")) {
      forEach(this.querySelectorAll(this.constructor.selectorAllRows), (elem) => {
        elem.setAttribute("size", this.size);
      });
      (_a = this._tableToolbar) === null || _a === void 0 ? void 0 : _a.setAttribute("size", this.size);
      const batchActions = this.querySelector(this.constructor.selectorTableBatchActions);
      if (batchActions) {
        batchActions.setAttribute("size", this.size);
      }
    }
    if (changedProperties.has("useZebraStyles")) {
      const tableBody = this.querySelector(this.constructor.selectorTableBody);
      tableBody.useZebraStyles = this.useZebraStyles;
    }
    if (this.withRowAILabels) {
      this._tableHeaderRow.setAttribute("rows-with-ai-label", "");
      this._tableRows.forEach((row) => {
        row.setAttribute("rows-with-ai-label", "");
      });
    } else {
      this._tableHeaderRow.removeAttribute("rows-with-ai-label");
      this._tableRows.forEach((row) => {
        row.removeAttribute("rows-with-ai-label");
      });
    }
    const headersWithAILabel = [];
    Array.prototype.slice.call(this._tableHeaderRow.children).forEach((headerCell, index) => {
      if (headerCell.querySelector(`${prefix}-ai-label`) || headerCell.querySelector(`${prefix}-slug`)) {
        headerCell.setAttribute("ai-label", "");
        headersWithAILabel.push(index);
      } else {
        headerCell.removeAttribute("ai-label");
      }
    });
    this._tableRows.forEach((row) => {
      Array.prototype.slice.call(row.children).forEach((cell, index) => {
        if (headersWithAILabel.includes(index)) {
          cell.setAttribute("ai-label-in-header", "");
        } else {
          cell.removeAttribute("ai-label-in-header");
        }
      });
    });
  }
  render() {
    return b` <div class="${prefix}--data-table-header-container">
        <div ?hidden="${!this.withHeader}" class="${prefix}--data-table-header">
          <slot @slotchange="${this._handleSlotChange}" name="title"></slot>
          <slot
            @slotchange="${this._handleSlotChange}"
            name="description"></slot>
        </div>
        <slot name="toolbar"></slot>
      </div>

      <div part="inner-container" class="${prefix}--data-table_inner-container">
        <div part="content" class="${prefix}--data-table-content">
          <slot
            @cds-table-body-content-change="${this._handleTableBodyChange}"></slot>
        </div>
      </div>`;
  }
  /**
   * Adds isSortable value for table header cells.
   */
  _enableSortAction() {
    const headerCells = this.querySelectorAll(this.constructor.selectorHeaderCell);
    headerCells.forEach((e3) => {
      e3.isSortable = this.isSortable;
      e3.isSelectable = this.isSelectable;
      e3.isExpandable = this.expandable;
    });
    const columns = [...this._tableHeaderRow.children];
    let sortDirection;
    let columnIndex = 0;
    columns.forEach((column, index) => {
      if (column.hasAttribute("sort-direction") && column.getAttribute("sort-direction") !== "none") {
        sortDirection = column.getAttribute("sort-direction");
        columnIndex = index;
      }
    });
    columns.forEach((e3, index) => {
      if (index !== columnIndex && this.isSortable) {
        e3.setAttribute("sort-direction", "none");
      } else if (e3.hasAttribute("is-sortable")) {
        e3.setAttribute("sort-direction", "none");
      }
    });
    this._handleSortAction(columnIndex, sortDirection);
  }
  /**
   * The name of the custom event fired before a new sort direction is set upon a user gesture.
   * Cancellation of this event stops the user-initiated change in sort direction.
   */
  static get eventBeforeSort() {
    return `${prefix}-table-header-cell-sort`;
  }
  /**
   * The name of the custom event fired during search bar input
   */
  static get eventSearchInput() {
    return `${prefix}-search-input`;
  }
  /**
   * The name of the custom event fired before header row is selected/unselected upon a user gesture.
   */
  static get eventBeforeChangeSelectionAll() {
    return `${prefix}-table-change-selection-all`;
  }
  /**
   * The name of the custom event fired before a row is selected/unselected upon a user gesture.
   */
  static get eventBeforeChangeSelection() {
    return `${prefix}-table-row-change-selection`;
  }
  /**
   * The name of the custom event fired after the Cancel button is clicked.
   */
  static get eventClickCancel() {
    return `${prefix}-table-batch-actions-cancel-clicked`;
  }
  /**
   * The name of the custom event fired after the expanded state a row is toggled upon a user gesture.
   */
  static get eventExpandoToggle() {
    return `${prefix}-table-row-expando-toggled`;
  }
  /**
   * The name of the custom event fired after a row has been selected
   */
  static get eventTableRowSelect() {
    return `${prefix}-table-row-selected`;
  }
  /**
   * The name of the custom event fired after all rows have been selected
   */
  static get eventTableRowSelectAll() {
    return `${prefix}-table-row-all-selected`;
  }
  /**
   * The name of the custom event fired after the table has been sorted
   */
  static get eventTableSorted() {
    return `${prefix}-table-sorted`;
  }
  /**
   * The name of the custom event fired after the table has been filtered containing remaining rows.
   */
  static get eventTableFiltered() {
    return `${prefix}-table-filtered`;
  }
  /**
   * The CSS selector to find the overflow menu on the table cell
   */
  static get selectorTableCellOverflowMenu() {
    return `${prefix}-table-cell ${prefix}-overflow-menu`;
  }
  /**
   * The CSS selector to find the download button
   */
  static get selectorToolbarDownload() {
    return `${prefix}-button[download]`;
  }
  /**
   * The CSS selector to find the table batch actions
   */
  static get selectorTableBatchActions() {
    return `${prefix}-table-batch-actions`;
  }
  /**
   * The CSS selector to find the table toolbar
   */
  static get selectorTableToolbar() {
    return `${prefix}-table-toolbar`;
  }
  /**
   * The CSS selector to find the table toolbar content
   */
  static get selectorTableToolbarContent() {
    return `${prefix}-table-toolbar-content`;
  }
  /**
   * The CSS selector to find the table toolbar search
   */
  static get selectorTableToolbarSearch() {
    return `${prefix}-table-toolbar-search`;
  }
  /**
   * The CSS selector to find the table head
   */
  static get selectorTableHead() {
    return `${prefix}-table-head`;
  }
  /**
   * The CSS selector to find the table body
   */
  static get selectorTableBody() {
    return `${prefix}-table-body`;
  }
  /**
   * The CSS selector to find the table expanded rows
   */
  static get selectorTableExpandedRows() {
    return `${prefix}-table-expanded-row`;
  }
  /**
   * The CSS selector to find the table rows
   */
  static get selectorTableRow() {
    return `${prefix}-table-row`;
  }
  /**
   * The CSS selector to find the rows cells.
   */
  static get selectorTableRowCells() {
    return `${prefix}-table-cell`;
  }
  /**
   * The CSS selector to find the rows cells, including header cells.
   */
  static get selectorTableCells() {
    return `${prefix}-table-cell, ${prefix}-table-header-cell`;
  }
  /**
   * The CSS selector to find the header cell
   */
  static get selectorHeaderCell() {
    return `${prefix}-table-header-cell`;
  }
  /**
   * The CSS selector to find the rows, including header rows.
   */
  static get selectorRowsWithHeader() {
    return `${prefix}-table-header-row,${prefix}-table-row`;
  }
  /**
   * The CSS selector to find all rows
   */
  static get selectorAllRows() {
    return `${prefix}-table-header-row,${prefix}-table-row,${prefix}-table-expanded-row`;
  }
};
CDSTable.styles = styles;
__decorate([
  r()
], CDSTable.prototype, "_downloadButton", void 0);
__decorate([
  r()
], CDSTable.prototype, "_searchValue", void 0);
__decorate([
  r()
], CDSTable.prototype, "_tableHeaderRow", void 0);
__decorate([
  r()
], CDSTable.prototype, "_tableBody", void 0);
__decorate([
  r()
], CDSTable.prototype, "_tableExpandedRows", void 0);
__decorate([
  r()
], CDSTable.prototype, "_tableRows", void 0);
__decorate([
  r()
], CDSTable.prototype, "_tableBatchActions", void 0);
__decorate([
  r()
], CDSTable.prototype, "_tableToolbar", void 0);
__decorate([
  r()
], CDSTable.prototype, "_tableToolbarContent", void 0);
__decorate([
  r()
], CDSTable.prototype, "_selectedRows", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "batch-expansion" })
], CDSTable.prototype, "batchExpansion", void 0);
__decorate([
  n({ attribute: false })
], CDSTable.prototype, "collator", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTable.prototype, "expandable", void 0);
__decorate([
  n()
], CDSTable.prototype, "filterRows", void 0);
__decorate([
  n()
], CDSTable.prototype, "headerCount", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "is-selectable" })
], CDSTable.prototype, "isSelectable", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "is-sortable" })
], CDSTable.prototype, "isSortable", void 0);
__decorate([
  n({ reflect: true })
], CDSTable.prototype, "locale", void 0);
__decorate([
  n({
    type: Boolean,
    reflect: true,
    attribute: "overflow-menu-on-hover"
  })
], CDSTable.prototype, "overflowMenuOnHover", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTable.prototype, "radio", void 0);
__decorate([
  n({ reflect: true })
], CDSTable.prototype, "size", void 0);
__decorate([
  n({ type: Boolean, attribute: "use-static-width", reflect: true })
], CDSTable.prototype, "useStaticWidth", void 0);
__decorate([
  n({ type: Boolean, attribute: "use-zebra-styles", reflect: true })
], CDSTable.prototype, "useZebraStyles", void 0);
__decorate([
  n({ type: Boolean, attribute: "with-header", reflect: true })
], CDSTable.prototype, "withHeader", void 0);
__decorate([
  n({ type: Boolean, attribute: "with-row-ai-labels" })
], CDSTable.prototype, "withRowAILabels", void 0);
__decorate([
  n({ type: Boolean, attribute: "with-row-slugs" })
], CDSTable.prototype, "withRowSlugs", void 0);
__decorate([
  HostListener("eventExpandoToggle")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSTable.prototype, "_handleBatchExpansion", void 0);
__decorate([
  HostListener("eventBeforeSort")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSTable.prototype, "_handleSort", void 0);
__decorate([
  HostListener("eventSearchInput")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSTable.prototype, "_handleSearchInput", void 0);
__decorate([
  HostListener("eventBeforeChangeSelection")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSTable.prototype, "_handleRowSelect", void 0);
__decorate([
  HostListener("eventBeforeChangeSelectionAll")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSTable.prototype, "_handleAllRowsSelect", void 0);
__decorate([
  HostListener("eventClickCancel")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSTable.prototype, "_handleCancelSelection", void 0);
CDSTable = __decorate([
  carbonElement(`${prefix}-table`)
], CDSTable);

// node_modules/@carbon/web-components/es/components/data-table/table-skeleton.js
var CDSTableSkeleton = class CDSTableSkeleton2 extends i2 {
  constructor() {
    super(...arguments);
    this.headers = [];
    this.compact = false;
    this.columnCount = 5;
    this.rowCount = 5;
    this.showHeader = true;
    this.showToolbar = true;
    this.zebra = false;
  }
  /**
   * @returns The header
   */
  _renderHeader() {
    const { showHeader } = this;
    return !showHeader ? void 0 : b`
          <div class="${prefix}--skeleton ${prefix}--data-table-container">
            <div class="${prefix}--data-table-header">
              <div class="${prefix}--data-table-header__title"></div>
              <div class="${prefix}--data-table-header__description"></div>
            </div>
          </div>
        `;
  }
  /**
   * @returns The header
   */
  _renderToolbar() {
    const { showToolbar } = this;
    return !showToolbar ? void 0 : b`
          <section class="${prefix}--table-toolbar">
            <div class="${prefix}--toolbar-content">
              <span
                class="${prefix}--skeleton ${prefix}--btn ${prefix}--btn--sm"></span>
            </div>
          </section>
        `;
  }
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "table");
    }
    super.connectedCallback();
  }
  updated() {
    if (this.headers.length) {
      this.columnCount = this.headers.length;
    } else {
      this.headers = Array(this.columnCount).fill("");
    }
  }
  render() {
    const { compact, columnCount, headers, rowCount, zebra } = this;
    const classes = e2({
      [`${prefix}--skeleton`]: true,
      [`${prefix}--data-table`]: true,
      [`${prefix}--data-table--compact`]: compact,
      [`${prefix}--data-table--zebra`]: zebra
    });
    return b`
      ${this._renderHeader()} ${this._renderToolbar()}

      <table class="${classes}">
        <thead>
          <tr>
            ${Array.from(new Array(columnCount)).map((_, index) => b`
                <th>
                  <div class="${prefix}--table-header-label">
                    ${headers[index]}
                  </div>
                </th>
              `)}
          </tr>
        </thead>
        <tbody>
          ${Array.from(new Array(rowCount)).map(() => b`
              <tr>
                ${Array.from(new Array(columnCount)).map(() => b`
                    <td>
                      <span></span>
                    </td>
                  `)}
              </tr>
            `)}
        </tbody>
      </table>
    `;
  }
};
CDSTableSkeleton.styles = styles;
__decorate([
  n()
], CDSTableSkeleton.prototype, "headers", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTableSkeleton.prototype, "compact", void 0);
__decorate([
  n({ type: Number, reflect: true, attribute: "column-count" })
], CDSTableSkeleton.prototype, "columnCount", void 0);
__decorate([
  n({ type: Number, reflect: true, attribute: "row-count" })
], CDSTableSkeleton.prototype, "rowCount", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "show-header" })
], CDSTableSkeleton.prototype, "showHeader", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "show-toolbar" })
], CDSTableSkeleton.prototype, "showToolbar", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTableSkeleton.prototype, "zebra", void 0);
CDSTableSkeleton = __decorate([
  carbonElement(`${prefix}-table-skeleton`)
], CDSTableSkeleton);

// node_modules/@carbon/web-components/es/components/data-table/table-header-title.js
var CDSTableHeader = class CDSTableHeader2 extends i2 {
  render() {
    return b` <slot></slot> `;
  }
};
CDSTableHeader.styles = styles;
CDSTableHeader = __decorate([
  carbonElement(`${prefix}-table-header-title`)
], CDSTableHeader);

// node_modules/@carbon/web-components/es/components/data-table/table-header-description.js
var CDSTableHeaderDescription = class CDSTableHeaderDescription2 extends i2 {
  render() {
    return b` <slot></slot> `;
  }
};
CDSTableHeaderDescription.styles = styles;
CDSTableHeaderDescription = __decorate([
  carbonElement(`${prefix}-table-header-description`)
], CDSTableHeaderDescription);

// node_modules/@carbon/web-components/es/components/data-table/table-batch-actions.js
var CDSTableBatchActions_1;
var CDSTableBatchActions = CDSTableBatchActions_1 = class CDSTableBatchActions2 extends i2 {
  constructor() {
    super(...arguments);
    this.active = false;
    this.formatSelectedItemsCount = ({ count }) => `${count} item${count <= 1 ? "" : "s"} selected`;
    this.selectedRowsCount = 0;
    this.totalRowsCount = 0;
    this.size = "lg";
  }
  /**
   * Handles `click` event on the Cancel button.
   */
  _handleCancel() {
    const { eventClickCancel } = this.constructor;
    this.dispatchEvent(new CustomEvent(eventClickCancel, { bubbles: true, composed: true }));
  }
  /**
   * Handles `click` event on the Select all button.
   */
  _handleSelectAll() {
    this.dispatchEvent(new CustomEvent(CDSTableBatchActions_1.eventClickSelectAll, {
      bubbles: true,
      composed: true
    }));
  }
  firstUpdated() {
    this._updateButtons();
    this._setupHoverListeners();
  }
  _setupHoverListeners() {
    var _a, _b;
    const slot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("slot");
    const cancelButton = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(`${prefix}-button.${prefix}--batch-summary__cancel`);
    if (slot && cancelButton) {
      const setupListeners = () => {
        const buttons = slot.assignedElements();
        const lastButton = buttons[buttons.length - 1];
        if (lastButton) {
          const handleEnter = () => {
            cancelButton.style.setProperty("--divider-opacity", "0");
          };
          const handleLeave = () => {
            cancelButton.style.setProperty("--divider-opacity", "1");
          };
          lastButton.removeEventListener("mouseenter", handleEnter);
          lastButton.removeEventListener("mouseleave", handleLeave);
          lastButton.addEventListener("mouseenter", handleEnter);
          lastButton.addEventListener("mouseleave", handleLeave);
        }
      };
      setupListeners();
      slot.addEventListener("slotchange", setupListeners);
    }
  }
  updated(changedProperties) {
    if (changedProperties.has("active")) {
      this.setAttribute("tabindex", `${this.active ? "" : "-1"}`);
    }
    if (changedProperties.has("size")) {
      this._updateButtons();
    }
  }
  _updateButtons() {
    this.querySelectorAll(this.constructor.selectorButtons).forEach((button) => {
      button.setAttribute("batch-action", "");
      const buttonSize = this.size === "xs" || this.size === "sm" ? "sm" : "lg";
      button.setAttribute("size", buttonSize);
    });
  }
  render() {
    const { formatSelectedItemsCount, selectedRowsCount, totalRowsCount, _handleCancel: handleCancel, _handleSelectAll: handleSelectAll, size } = this;
    const buttonSize = size === "xs" || size === "sm" ? "sm" : "lg";
    return b`
      <div class="${prefix}--batch-summary">
        <p class="${prefix}--batch-summary__para">
          ${formatSelectedItemsCount({ count: selectedRowsCount })}
        </p>
        ${totalRowsCount > 0 ? b`
              <span class="${prefix}--batch-summary__divider">|</span>
              <button
                class="${prefix}--btn ${prefix}--btn--primary ${prefix}--batch-summary__select-all"
                @click=${handleSelectAll}>
                <slot name="select-all-button-content"
                  >Select all (${totalRowsCount})</slot
                >
              </button>
            ` : A}
      </div>

      <div class="${prefix}--action-list">
        <slot></slot>
        <cds-button
          kind="primary"
          size="${buttonSize}"
          class="${prefix}--batch-summary__cancel"
          batch-action
          @click=${handleCancel}>
          <slot name="cancel-button-content">Cancel</slot>
        </cds-button>
      </div>
    `;
  }
  /**
   * The CSS selector to find the action buttons.
   */
  static get selectorButtons() {
    return `${prefix}-button`;
  }
  /**
   * The name of the custom event fired after the Cancel button is clicked.
   */
  static get eventClickCancel() {
    return `${prefix}-table-batch-actions-cancel-clicked`;
  }
  /**
   * The name of the custom event fired after the Select all button is clicked.
   */
  static get eventClickSelectAll() {
    return `${prefix}-table-batch-actions-select-all-clicked`;
  }
};
CDSTableBatchActions.styles = styles;
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTableBatchActions.prototype, "active", void 0);
__decorate([
  n({ attribute: false })
], CDSTableBatchActions.prototype, "formatSelectedItemsCount", void 0);
__decorate([
  n({ type: Number, attribute: "selected-rows-count" })
], CDSTableBatchActions.prototype, "selectedRowsCount", void 0);
__decorate([
  n({ type: Number, attribute: "total-rows-count" })
], CDSTableBatchActions.prototype, "totalRowsCount", void 0);
__decorate([
  n({ reflect: true })
], CDSTableBatchActions.prototype, "size", void 0);
CDSTableBatchActions = CDSTableBatchActions_1 = __decorate([
  carbonElement(`${prefix}-table-batch-actions`)
], CDSTableBatchActions);

// node_modules/@carbon/web-components/es/components/data-table/table-body.js
var CDSTableBody = class CDSTableBody2 extends i2 {
  constructor() {
    super(...arguments);
    this._handleSlotChange = () => {
      this._updateZebra();
      this.dispatchEvent(new CustomEvent(this.constructor.eventTableBodyContentChange, { bubbles: true, cancelable: false }));
    };
    this.useZebraStyles = false;
  }
  /**
   * Updates `even`/`odd` properties of the child `<cds-table-row>`s.
   */
  _updateZebra() {
    const { useZebraStyles, _slotNode: slotNode } = this;
    slotNode.assignedNodes().forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const even = node.matches("*:nth-of-type(even)");
        node.even = useZebraStyles && even;
        node.odd = useZebraStyles && !even;
      }
    });
  }
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "rowgroup");
    }
    super.connectedCallback();
  }
  updated(changedProperties) {
    if (changedProperties.has("useZebraStyles")) {
      this._updateZebra();
    }
  }
  render() {
    const { _handleSlotChange: handleSlotChange } = this;
    return b` <slot @slotchange="${handleSlotChange}"></slot> `;
  }
  /**
   * The name of the custom event fired after the body slot content changes
   */
  static get eventTableBodyContentChange() {
    return `${prefix}-table-body-content-change`;
  }
};
CDSTableBody.styles = styles;
__decorate([
  e("slot")
], CDSTableBody.prototype, "_slotNode", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "use-zebra-styles" })
], CDSTableBody.prototype, "useZebraStyles", void 0);
CDSTableBody = __decorate([
  carbonElement(`${prefix}-table-body`)
], CDSTableBody);

// node_modules/@carbon/web-components/es/components/data-table/table-cell.js
var CDSTableCell = class CDSTableCell2 extends i2 {
  constructor() {
    super(...arguments);
    this.overflowMenuOnHover = false;
  }
  /**
   * TODO: Uncomment when Carbon fully implements sticky header
   * Specify whether the header should be sticky.
   * Still experimental: may not work with every combination of table props
   */
  // @property({ type: Boolean, reflect: true, attribute: 'sticky-header' })
  // stickyHeader = false;
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "cell");
    }
    super.connectedCallback();
  }
  render() {
    return b`<slot></slot>`;
  }
};
CDSTableCell.styles = styles;
__decorate([
  n({
    type: Boolean,
    reflect: true,
    attribute: "overflow-menu-on-hover"
  })
], CDSTableCell.prototype, "overflowMenuOnHover", void 0);
__decorate([
  n({ reflect: true })
], CDSTableCell.prototype, "size", void 0);
CDSTableCell = __decorate([
  carbonElement(`${prefix}-table-cell`)
], CDSTableCell);

// node_modules/@carbon/web-components/es/components/data-table/table-cell-content.js
var CDSTableCellContent = class CDSTableCellContent2 extends i2 {
  render() {
    return b` <slot></slot> `;
  }
};
CDSTableCellContent.styles = styles;
CDSTableCellContent = __decorate([
  carbonElement(`${prefix}-table-cell-content`)
], CDSTableCellContent);

// node_modules/@carbon/web-components/es/components/data-table/table-expanded-row.js
var CDSTableExpandedRow = class CDSTableExpandedRow2 extends HostListenerMixin(i2) {
  constructor() {
    super(...arguments);
    this.colSpan = 1;
    this.expanded = false;
    this.filtered = false;
    this.highlighted = false;
    this.selected = false;
  }
  /**
   * Handles `mouseover`/`mouseout` event handler on this element.
   *
   * @param event The event.
   */
  _handleMouseOverOut(event) {
    const { selectorRow } = this.constructor;
    const { previousElementSibling } = this;
    if (previousElementSibling === null || previousElementSibling === void 0 ? void 0 : previousElementSibling.matches(selectorRow)) {
      previousElementSibling.highlighted = event.type === "mouseover";
    }
  }
  render() {
    const { colSpan } = this;
    return b`
      <td colspan="${colSpan}">
        <div class="${prefix}--child-row-inner-container">
          <slot></slot>
        </div>
      </td>
    `;
  }
  updated() {
    var _a;
    if ((_a = this.previousElementSibling) === null || _a === void 0 ? void 0 : _a.hasAttribute("ai-label")) {
      this.setAttribute("ai-label", "");
    } else {
      this.removeAttribute("ai-label");
    }
  }
  /**
   * A selector that will return the previous sibling row.
   */
  static get selectorRow() {
    return `${prefix}-table-row`;
  }
};
CDSTableExpandedRow.styles = styles;
__decorate([
  HostListener("mouseover"),
  HostListener("mouseout")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSTableExpandedRow.prototype, "_handleMouseOverOut", null);
__decorate([
  n({ type: Number, attribute: "colspan" })
], CDSTableExpandedRow.prototype, "colSpan", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTableExpandedRow.prototype, "expanded", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTableExpandedRow.prototype, "filtered", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTableExpandedRow.prototype, "highlighted", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTableExpandedRow.prototype, "selected", void 0);
CDSTableExpandedRow = __decorate([
  carbonElement(`${prefix}-table-expanded-row`)
], CDSTableExpandedRow);

// node_modules/@carbon/web-components/es/components/data-table/table-head.js
var CDSTableHead = class CDSTableHead2 extends i2 {
  /**
   * TODO: Uncomment when Carbon fully implements sticky header
   * Specify whether the header should be sticky.
   * Still experimental: may not work with every combination of table props
   */
  //@property({ type: Boolean, reflect: true, attribute: 'sticky-header' })
  // stickyHeader = false;
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "rowgroup");
    }
    super.connectedCallback();
  }
  render() {
    return b` <slot></slot> `;
  }
};
CDSTableHead.styles = styles;
CDSTableHead = __decorate([
  carbonElement(`${prefix}-table-head`)
], CDSTableHead);

// node_modules/@carbon/icons/es/arrows--vertical/32.js
var _32 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 32,
    "height": 32
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M27.6 20.6 24 24.2 24 4 22 4 22 24.2 18.4 20.6 17 22 23 28 29 22z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M9 4 3 10 4.4 11.4 8 7.8 8 28 10 28 10 7.8 13.6 11.4 15 10z"
    }
  }],
  "name": "arrows--vertical",
  "size": 32
};

// node_modules/@carbon/icons/es/arrow--down/32.js
var _322 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 32,
    "height": 32
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M24.59 16.59 17 24.17 17 4 15 4 15 24.17 7.41 16.59 6 18 16 28 26 18 24.59 16.59z"
    }
  }],
  "name": "arrow--down",
  "size": 32
};

// node_modules/@carbon/web-components/es/components/data-table/table-header-cell.js
var CDSTableHeaderCell = class CDSTableHeaderCell2 extends FocusMixin(i2) {
  constructor() {
    super(...arguments);
    this._hasAILabel = false;
    this.isExpandable = false;
    this.isSelectable = false;
    this.isSortable = false;
    this.sortActive = false;
  }
  /**
   * Handles `click` event on the sort button.
   *
   */
  _handleClickSortButton(event) {
    if (!event.target.matches(this.constructor.aiLabelItem) && !event.target.matches(this.constructor.slugItem)) {
      const nextSortDirection = this._getNextSort();
      const init = {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: {
          oldSortDirection: this.sortDirection,
          sortDirection: nextSortDirection
        }
      };
      const constructor = this.constructor;
      if (this.dispatchEvent(new CustomEvent(constructor.eventBeforeSort, init))) {
        this.sortActive = true;
        this.sortDirection = nextSortDirection;
      }
    }
  }
  /**
   * Handles `slotchange` event.
   *
   */
  _handleSlotChange() {
    this.requestUpdate?.();
  }
  /**
   * Handles `slotchange` event.
   */
  _handleAILabelSlotChange({ target }) {
    const hasContent = target.assignedNodes().filter((elem) => elem.matches !== void 0 ? elem.matches(this.constructor.aiLabelItem) || elem.matches(this.constructor.slugItem) : false);
    if (hasContent.length > 0) {
      this._hasAILabel = Boolean(hasContent);
      hasContent[0].setAttribute("size", "mini");
    }
    this.requestUpdate?.();
  }
  /**
   * @returns The next sort direction.
   */
  _getNextSort() {
    const { sortCycle = TABLE_SORT_CYCLE.TRI_STATES_FROM_ASCENDING, sortDirection } = this;
    if (!sortDirection) {
      throw new TypeError("Table sort direction is not defined. Likely that `_getNextSort()` is called with non-sorted table column, which should not happen in regular condition.");
    }
    const directions = this.constructor.TABLE_SORT_CYCLES[sortCycle];
    const index = directions.indexOf(sortDirection);
    if (index < 0) {
      if (sortDirection === TABLE_SORT_DIRECTION.NONE) {
        return directions[0];
      }
      throw new RangeError(`The given sort state (${sortDirection}) is not found in the given table sort cycle: ${sortCycle}`);
    }
    return directions[(index + 1) % directions.length];
  }
  /**
   * TODO: Uncomment when Carbon fully implements sticky header
   * Specify whether the header should be sticky.
   * Still experimental: may not work with every combination of table props
   */
  // @property({ type: Boolean, reflect: true, attribute: 'sticky-header' })
  // stickyHeader = false;
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "columnheader");
    }
    super.connectedCallback();
  }
  updated(changedProperties) {
    if (this.isSortable && !changedProperties.has("sortDirection") && !this.sortDirection) {
      this.sortDirection = TABLE_SORT_DIRECTION.NONE;
    }
    if (this._hasAILabel) {
      this.setAttribute("ai-label", "");
    } else {
      this.removeAttribute("ai-label");
    }
  }
  render() {
    const { sortDirection } = this;
    const labelClasses = e2({
      [`${prefix}--table-header-label`]: true,
      [`${prefix}--table-header-label--slug`]: this._hasAILabel
    });
    if (sortDirection) {
      const sortIcon = sortDirection === TABLE_SORT_DIRECTION.NONE ? iconLoader(_32, {
        part: "sort-icon",
        class: `${prefix}--table-sort__icon-unsorted`
      }) : iconLoader(_322, {
        part: "sort-icon",
        class: `${prefix}--table-sort__icon`
      });
      return b`
        <button
          part="sort-button"
          class="${prefix}--table-sort"
          title="${this.innerText}"
          @click=${this._handleClickSortButton}>
          <span class="${prefix}--table-sort__flex">
            <span part="label-text" class="${prefix}--table-header-label"
              ><slot @slotchange=${this._handleSlotChange}></slot
            ></span>
            ${sortIcon}
            <slot
              name="ai-label"
              @slotchange="${this._handleAILabelSlotChange}"></slot>
            <slot
              name="slug"
              @slotchange="${this._handleAILabelSlotChange}"></slot>
          </span>
        </button>
      `;
    }
    return b`<span part="label-text" class="${labelClasses}">
      <slot></slot
      ><slot
        name="ai-label"
        @slotchange="${this._handleAILabelSlotChange}"></slot>
      <slot name="slug" @slotchange="${this._handleAILabelSlotChange}"></slot
    ></span> `;
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
  /**
   * The name of the custom event fired before a new sort direction is set upon a user gesture.
   * Cancellation of this event stops the user-initiated change in sort direction.
   */
  static get eventBeforeSort() {
    return `${prefix}-table-header-cell-sort`;
  }
};
CDSTableHeaderCell.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSTableHeaderCell.styles = styles;
CDSTableHeaderCell.TABLE_SORT_CYCLES = TABLE_SORT_CYCLES;
__decorate([
  n({ type: Boolean, reflect: true, attribute: "expandable" })
], CDSTableHeaderCell.prototype, "isExpandable", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "is-selectable" })
], CDSTableHeaderCell.prototype, "isSelectable", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "is-sortable" })
], CDSTableHeaderCell.prototype, "isSortable", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "sort-active" })
], CDSTableHeaderCell.prototype, "sortActive", void 0);
__decorate([
  n({ reflect: true, attribute: "sort-cycle" })
], CDSTableHeaderCell.prototype, "sortCycle", void 0);
__decorate([
  n({ reflect: true, attribute: "sort-direction" })
], CDSTableHeaderCell.prototype, "sortDirection", void 0);
CDSTableHeaderCell = __decorate([
  carbonElement(`${prefix}-table-header-cell`)
], CDSTableHeaderCell);

// node_modules/@carbon/web-components/es/components/data-table/table-row.js
var CDSTableRow = class CDSTableRow2 extends HostListenerMixin(FocusMixin(i2)) {
  constructor() {
    super(...arguments);
    this._hasAILabel = false;
    this.batchExpansion = false;
    this.disabled = false;
    this.even = false;
    this.expandable = false;
    this.expanded = false;
    this.filtered = false;
    this.hideCheckbox = false;
    this.highlighted = false;
    this.odd = false;
    this.overflowMenuOnHover = false;
    this.radio = false;
    this.selected = false;
    this.selectionLabel = "Select row";
    this.selectionName = "";
    this.selectionValue = "";
  }
  /**
   * Handles `click` event on the radio button.
   *
   * @param event The event.
   */
  _handleClickSelectionRadio(event) {
    var _a;
    const { detail } = event;
    const selected = detail.checked;
    const init = {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        selected
      }
    };
    const constructor = this.constructor;
    if (this.dispatchEvent(new CustomEvent(constructor.eventBeforeChangeSelection, init))) {
      this.selected = selected;
      const { selectorExpandedRow } = this.constructor;
      if ((_a = this.nextElementSibling) === null || _a === void 0 ? void 0 : _a.matches(selectorExpandedRow)) {
        this.nextElementSibling.selected = selected;
      }
    }
  }
  /**
   * Handles `click` event on the check box.
   *
   * @param event The event.
   */
  _handleClickSelectionCheckbox(event) {
    var _a;
    const { detail } = event;
    const selected = detail.checked;
    const init = {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        selected
      }
    };
    const constructor = this.constructor;
    if (this.dispatchEvent(new CustomEvent(constructor.eventBeforeChangeSelection, init))) {
      this.selected = selected;
      const { selectorExpandedRow } = this.constructor;
      if ((_a = this.nextElementSibling) === null || _a === void 0 ? void 0 : _a.matches(selectorExpandedRow)) {
        this.nextElementSibling.selected = selected;
      }
    }
  }
  /**
   * Handles `click` event on the expando button.
   */
  _handleClickExpando() {
    this._handleUserInitiatedToggleExpando();
  }
  /**
   * Handles `mouseover`/`mouseout` event handler on this element.
   *
   * @param event The event.
   */
  _handleMouseOverOut(event) {
    const { selectorExpandedRow, selectorTableCellOverflowMenu } = this.constructor;
    const { nextElementSibling } = this;
    if (nextElementSibling === null || nextElementSibling === void 0 ? void 0 : nextElementSibling.matches(selectorExpandedRow)) {
      nextElementSibling.highlighted = event.type === "mouseover";
    }
    if (this.overflowMenuOnHover) {
      const overflowMenu = this.querySelector(selectorTableCellOverflowMenu);
      const parentCell = overflowMenu === null || overflowMenu === void 0 ? void 0 : overflowMenu.parentElement;
      if (event.type === "mouseout") {
        parentCell.overflowMenuOnHover = true;
      } else {
        parentCell.overflowMenuOnHover = false;
      }
    }
  }
  /**
   * Handles user-initiated toggle request of the expando button in this table row.
   *
   * @param expanded The new expanded state.
   */
  _handleUserInitiatedToggleExpando(expanded = !this.expanded) {
    const init = {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        expanded
      }
    };
    if (this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeExpandoToggle, init))) {
      this.expanded = expanded;
      this.dispatchEvent(new CustomEvent(this.constructor.eventExpandoToggle, init));
    }
  }
  _renderExpandButton() {
    const { _handleClickExpando: handleClickExpando } = this;
    return b`
      <div class="${prefix}--table-expand">
        <div>
          <slot name="ai-label" @slotchange="${this._handleSlotChange}"></slot>
          <slot name="slug" @slotchange="${this._handleSlotChange}"></slot>
          ${this.expandable ? b`<button
                class="${prefix}--table-expand__button"
                @click="${handleClickExpando}">
                ${iconLoader(_16, {
      class: `${prefix}--table-expand__svg`
    })}
              </button>` : b`&nbsp;`}
          <!-- Add non-breaking space for proper styling -->
        </div>
      </div>
    `;
  }
  /**
   * Handles `slotchange` event.
   */
  _handleSlotChange({ target }) {
    const hasContent = target.assignedNodes().filter((elem) => elem.matches !== void 0 ? elem.matches(this.constructor.aiLabelItem) || elem.matches(this.constructor.slugItem) : false);
    if (hasContent.length > 0) {
      this._hasAILabel = Boolean(hasContent);
      hasContent[0].setAttribute("size", "mini");
    }
    this.requestUpdate?.();
  }
  /**
   * @returns The first set of table cells.
   */
  _renderFirstCells() {
    const { disabled, hideCheckbox, radio, selected, selectionLabel, selectionName, selectionValue } = this;
    return !selectionName ? void 0 : b`
          <div class="${prefix}--table-column-checkbox">
            <div>
              <slot
                name="ai-label"
                @slotchange="${this._handleSlotChange}"></slot>
              <slot name="slug" @slotchange="${this._handleSlotChange}"></slot>
              ${radio ? b`<cds-radio-button data-table></cds-radio-button>` : b`<cds-checkbox
                    hide-label
                    ?hide-checkbox="${hideCheckbox}"
                    label-text="${selectionLabel}"
                    name=${selectionName}
                    data-table
                    ?disabled=${disabled}
                    ?checked=${selected}
                    value=${selectionValue}></cds-checkbox> `}
            </div>
          </div>
        `;
  }
  /**
   * TODO: Uncomment when Carbon fully implements sticky header
   * Specify whether the header should be sticky.
   * Still experimental: may not work with every combination of table props
   */
  // @property({ type: Boolean, reflect: true, attribute: 'sticky-header' })
  // stickyHeader = false;
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "row");
    }
    super.connectedCallback();
  }
  updated(changedProperties) {
    if (changedProperties.has("expanded")) {
      const { selectorExpandedRow } = this.constructor;
      const { expanded, nextElementSibling } = this;
      if (nextElementSibling === null || nextElementSibling === void 0 ? void 0 : nextElementSibling.matches(selectorExpandedRow)) {
        nextElementSibling.expanded = expanded;
      }
    }
    if (changedProperties.has("highlighted")) {
      const { selectorExpandedRow } = this.constructor;
      const { highlighted, nextElementSibling } = this;
      if (nextElementSibling === null || nextElementSibling === void 0 ? void 0 : nextElementSibling.matches(selectorExpandedRow)) {
        nextElementSibling.highlighted = highlighted;
      }
    }
    if (this._hasAILabel) {
      this.setAttribute("ai-label", "");
    } else {
      this.removeAttribute("ai-label");
    }
  }
  render() {
    var _a, _b;
    if (this.selectionName) {
      (_a = this.closest(this.constructor.selectorTable)) === null || _a === void 0 ? void 0 : _a.setAttribute("is-selectable", "");
    }
    const tableHasExpandableRows = (_b = this.closest(this.constructor.selectorTable)) === null || _b === void 0 ? void 0 : _b.hasAttribute("expandable");
    return b`
      ${tableHasExpandableRows ? this._renderExpandButton() : ""}
      ${this._renderFirstCells()}
      <slot></slot>
    `;
  }
  /**
   * The name of the custom event fired after this radio button changes its checked state.
   */
  static get eventRadioChange() {
    return `${prefix}-radio-button-changed`;
  }
  /**
   * The name of the custom event fired after this radio button changes its checked state.
   */
  static get eventCheckboxChange() {
    return `${prefix}-checkbox-changed`;
  }
  /**
   * The name of the custom event fired before this row is selected/unselected upon a user gesture.
   * Cancellation of this event stops the user-initiated change in selection.
   */
  static get eventBeforeChangeSelection() {
    return `${prefix}-table-row-change-selection`;
  }
  /**
   * A selector that will return the parent table
   */
  static get selectorTable() {
    return `${prefix}-table`;
  }
  /**
   * The CSS selector to find the overflow menu on the table cell
   */
  static get selectorTableCellOverflowMenu() {
    return `${prefix}-table-cell ${prefix}-overflow-menu`;
  }
  /**
   * A selector that will return the corresponding expanded row.
   */
  static get selectorExpandedRow() {
    return `${prefix}-table-expanded-row`;
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
  /**
   * The name of the custom event fired before the expanded state this row is being toggled upon a user gesture.
   * Cancellation of this event stops the user-initiated action of toggling the expanded state.
   */
  static get eventBeforeExpandoToggle() {
    return `${prefix}-table-row-expando-beingtoggled`;
  }
  /**
   * The name of the custom event fired after the expanded state this row is toggled upon a user gesture.
   */
  static get eventExpandoToggle() {
    return `${prefix}-table-row-expando-toggled`;
  }
};
CDSTableRow.styles = styles;
__decorate([
  HostListener("eventRadioChange")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore
], CDSTableRow.prototype, "_handleClickSelectionRadio", null);
__decorate([
  HostListener("eventCheckboxChange")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-expect-error
], CDSTableRow.prototype, "_handleClickSelectionCheckbox", null);
__decorate([
  HostListener("mouseover"),
  HostListener("mouseout")
  // @ts-expect-error: The decorator refers to this method but TS thinks this method is not referred to
], CDSTableRow.prototype, "_handleMouseOverOut", null);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "batch-expansion" })
], CDSTableRow.prototype, "batchExpansion", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTableRow.prototype, "disabled", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTableRow.prototype, "even", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTableRow.prototype, "expandable", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTableRow.prototype, "expanded", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTableRow.prototype, "filtered", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "hide-checkbox" })
], CDSTableRow.prototype, "hideCheckbox", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTableRow.prototype, "highlighted", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTableRow.prototype, "odd", void 0);
__decorate([
  n({
    type: Boolean,
    reflect: true,
    attribute: "overflow-menu-on-hover"
  })
], CDSTableRow.prototype, "overflowMenuOnHover", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTableRow.prototype, "radio", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTableRow.prototype, "selected", void 0);
__decorate([
  n({ attribute: "selection-label" })
], CDSTableRow.prototype, "selectionLabel", void 0);
__decorate([
  n({ attribute: "selection-name" })
], CDSTableRow.prototype, "selectionName", void 0);
__decorate([
  n({ attribute: "selection-value" })
], CDSTableRow.prototype, "selectionValue", void 0);
CDSTableRow = __decorate([
  carbonElement(`${prefix}-table-row`)
], CDSTableRow);
var CDSTableRow$1 = CDSTableRow;

// node_modules/@carbon/web-components/es/components/data-table/table-header-row.js
var CDSTableHeaderRow = class CDSTableHeaderRow2 extends CDSTableRow$1 {
  /**
   * The name of the custom event fired before this row is selected/unselected upon a user gesture.
   * Cancellation of this event stops the user-initiated change in selection.
   */
  static get eventBeforeChangeSelection() {
    return `${prefix}-table-change-selection-all`;
  }
};
CDSTableHeaderRow = __decorate([
  carbonElement(`${prefix}-table-header-row`)
], CDSTableHeaderRow);

// node_modules/@carbon/web-components/es/components/data-table/table-toolbar.js
var CDSTableToolbar = class CDSTableToolbar2 extends i2 {
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "toolbar");
    }
    super.connectedCallback();
  }
  updated(changedProperties) {
    if (changedProperties.has("size")) {
      const toolbarContent = this.querySelector(this.constructor.selectorToolbarContent);
      const batchActions = this.querySelector(this.constructor.selectorBatchActions);
      if (toolbarContent) {
        toolbarContent.setAttribute("size", this.size);
      }
      if (batchActions) {
        batchActions.setAttribute("size", this.size);
      }
    }
  }
  render() {
    return b` <slot></slot> `;
  }
  /**
   * The CSS selector to find the toolbar contents
   */
  static get selectorToolbarContent() {
    return `${prefix}-table-toolbar-content`;
  }
  /**
   * The CSS selector to find the batch actions
   */
  static get selectorBatchActions() {
    return `${prefix}-table-batch-actions`;
  }
};
CDSTableToolbar.styles = styles;
__decorate([
  n({ reflect: true })
], CDSTableToolbar.prototype, "size", void 0);
CDSTableToolbar = __decorate([
  carbonElement(`${prefix}-table-toolbar`)
], CDSTableToolbar);

// node_modules/@carbon/web-components/es/components/data-table/table-toolbar-content.js
var CDSTableToolbarContent = class CDSTableToolbarContent2 extends i2 {
  constructor() {
    super(...arguments);
    this.hasBatchActions = false;
  }
  updated(changedProperties) {
    if (this.hasBatchActions) {
      this.setAttribute("tabindex", "-1");
    } else {
      this.removeAttribute("tabindex");
    }
    if (changedProperties.has("size")) {
      [...this.children].forEach((e3) => {
        const size = this.size === "xs" ? "sm" : this.size === "md" || this.size === "xl" ? "lg" : this.size;
        e3.setAttribute("size", size);
      });
    }
  }
  render() {
    return b` <slot></slot> `;
  }
};
CDSTableToolbarContent.styles = styles;
__decorate([
  n({ type: Boolean, reflect: true, attribute: "has-batch-actions" })
], CDSTableToolbarContent.prototype, "hasBatchActions", void 0);
__decorate([
  n({ reflect: true })
], CDSTableToolbarContent.prototype, "size", void 0);
CDSTableToolbarContent = __decorate([
  carbonElement(`${prefix}-table-toolbar-content`)
], CDSTableToolbarContent);

// node_modules/@carbon/web-components/es/components/data-table/table-toolbar-search.js
var CDSTableToolbarSearch = class CDSTableToolbarSearch2 extends HostListenerMixin(CDSSearch$1) {
  constructor() {
    super(...arguments);
    this.expanded = false;
    this.persistent = false;
    this.size = INPUT_SIZE.LARGE;
  }
  /**
   * Handles user-initiated gestures for expanding the search box.
   */
  async _handleUserInitiatedExpand() {
    this.expanded = true;
    await this.updateComplete;
    const { _inputNode: inputNode } = this;
    inputNode === null || inputNode === void 0 ? void 0 : inputNode.focus();
  }
  /**
   * Handles `focus` event handler on this element.
   */
  _handleFocusIn() {
    this._handleUserInitiatedExpand();
  }
  /**
   * Handles `blur` event handler on this element.
   *
   * @param event The event.
   */
  _handleFocusOut(event) {
    if (!this.contains(event.relatedTarget) && !this.value && !this.persistent) {
      this.expanded = false;
    }
  }
  /**
   * Handles `click` event handler on the search box.
   */
  _handleSearchClick() {
    this._handleUserInitiatedExpand();
  }
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "search");
    }
    super.connectedCallback();
  }
  render() {
    const result = super.render();
    const { persistent, expanded, size, _handleSearchClick: handleSearchClick } = this;
    const classes = e2({
      [`${prefix}--search`]: true,
      [`${prefix}--search--${size}`]: size
    });
    if (persistent) {
      this.expanded = true;
    }
    return b`
      <div
        class="${classes}"
        tabindex="${expanded ? "-1" : "0"}"
        @click="${handleSearchClick}">
        ${result}
      </div>
    `;
  }
  /**
   * The name of the custom event fired after the search content is changed upon a user gesture.
   */
  static get eventInput() {
    return `${prefix}-search-input`;
  }
};
CDSTableToolbarSearch.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSTableToolbarSearch.styles = styles;
__decorate([
  e("input")
], CDSTableToolbarSearch.prototype, "_inputNode", void 0);
__decorate([
  HostListener("focusin")
  // @ts-expect-error: The decorator refers to this method but TS thinks this method is not referred to
], CDSTableToolbarSearch.prototype, "_handleFocusIn", null);
__decorate([
  HostListener("focusout")
  // @ts-expect-error: The decorator refers to this method but TS thinks this method is not referred to
], CDSTableToolbarSearch.prototype, "_handleFocusOut", null);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTableToolbarSearch.prototype, "expanded", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTableToolbarSearch.prototype, "persistent", void 0);
__decorate([
  n({ reflect: true })
], CDSTableToolbarSearch.prototype, "size", void 0);
CDSTableToolbarSearch = __decorate([
  carbonElement(`${prefix}-table-toolbar-search`)
], CDSTableToolbarSearch);
