import {
  INPUT_SIZE
} from "./chunk-UBPLMH62.js";
import {
  ifNonEmpty
} from "./chunk-2G6ZGNK6.js";
import {
  FormMixin
} from "./chunk-MNFEJBUN.js";
import {
  _16 as _162
} from "./chunk-BVJDLJUP.js";
import {
  _16
} from "./chunk-357XJSHN.js";
import {
  _16 as _163
} from "./chunk-MZGBQGXZ.js";
import {
  filter
} from "./chunk-3QPROXNA.js";
import {
  iconLoader
} from "./chunk-TRPNDHDH.js";
import {
  o
} from "./chunk-DAFPBEYU.js";
import {
  e as e2
} from "./chunk-YOLTZNLE.js";
import {
  e,
  n,
  r2 as r
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

// node_modules/@carbon/web-components/es/components/select/select.scss.js
var styles = i(['.cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-background:var(--cds-layer-background-01,#fff);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-background:var(--cds-layer-background-02,#f4f4f4);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-background:var(--cds-layer-background-03,#fff);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}.cds--layer-one.cds--layer__with-background,.cds--layer-three.cds--layer__with-background,.cds--layer-two.cds--layer__with-background{background-color:var(--cds-layer-background)}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}input:-webkit-autofill,input:-webkit-autofill:focus,input:-webkit-autofill:hover,textarea:-webkit-autofill,textarea:-webkit-autofill:focus,textarea:-webkit-autofill:hover{box-shadow:0 0 0 1000px var(--cds-field) inset;-webkit-text-fill-color:var(--cds-text-primary,#161616)}.cds--fieldset{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--fieldset *,.cds--fieldset :after,.cds--fieldset :before{box-sizing:inherit}.cds--form-item{align-items:flex-start;display:flex;flex:1 1 auto;flex-direction:column;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--label html{font-size:100%}.cds--label body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--label code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--label strong{font-weight:600}.cds--label{color:var(--cds-text-secondary,#525252);display:inline-block;font-weight:var(--cds-label-01-font-weight,400);font-weight:400;line-height:var(--cds-label-01-line-height,1.33333);line-height:1rem;margin-block-end:.5rem;vertical-align:baseline}.cds--label,.cds--label .cds--toggletip-label{font-size:var(--cds-label-01-font-size,.75rem);letter-spacing:var(--cds-label-01-letter-spacing,.32px)}.cds--label .cds--toggletip-label{font-weight:var(--cds-label-01-font-weight,400);line-height:var(--cds-label-01-line-height,1.33333)}.cds--label--no-margin{margin-block-end:0}.cds--label+.cds--tooltip{inset-block-start:.2rem;inset-inline-start:.5rem;position:relative}.cds--label+.cds--tooltip .cds--tooltip__trigger{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--label+.cds--tooltip .cds--tooltip__trigger *,.cds--label+.cds--tooltip .cds--tooltip__trigger :after,.cds--label+.cds--tooltip .cds--tooltip__trigger :before{box-sizing:inherit}.cds--label+.cds--tooltip .cds--tooltip__trigger::-moz-focus-inner{border:0}.cds--label+.cds--tooltip .cds--tooltip__trigger{align-items:center;display:flex;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);justify-content:center;letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}.cds--label+.cds--tooltip .cds--tooltip__trigger:focus{outline:1px solid var(--cds-focus,#0f62fe)}.cds--label+.cds--tooltip .cds--tooltip__trigger svg{fill:var(--cds-icon-secondary,#525252)}.cds--label+.cds--tooltip .cds--tooltip__trigger svg :hover{fill:var(--cds-icon-primary,#161616)}.cds--label+.cds--toggletip{inset-block-start:.2rem;inset-inline-start:.5rem}.cds--label.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--label.cds--skeleton:active,.cds--label.cds--skeleton:focus,.cds--label.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--label.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--label.cds--skeleton:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--label.cds--skeleton{background:CanvasText}.cds--label.cds--skeleton:before{background:Canvas;forced-color-adjust:none}}.cds--label.cds--skeleton{block-size:.875rem;inline-size:4.6875rem}input[type=number],input[type=text].cds--number{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif}.cds--combo-box[data-invalid]:not(.cds--multi-select--selected) .cds--text-input:not(:focus),.cds--list-box[data-invalid]:not(.cds--multi-select--invalid--focused,.cds--combo-box--invalid--focused),.cds--number[data-invalid] input[type=number]:not(:focus),.cds--number[data-invalid] input[type=text]:not(:focus),.cds--select-input__wrapper[data-invalid] .cds--select-input:not(:focus),.cds--text-area__wrapper[data-invalid]>.cds--text-area--invalid:not(:focus),.cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline:2px solid var(--cds-support-error,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.cds--combo-box[data-invalid]:not(.cds--multi-select--selected) .cds--text-input:not(:focus),.cds--list-box[data-invalid]:not(.cds--multi-select--invalid--focused,.cds--combo-box--invalid--focused),.cds--number[data-invalid] input[type=number]:not(:focus),.cds--number[data-invalid] input[type=text]:not(:focus),.cds--select-input__wrapper[data-invalid] .cds--select-input:not(:focus),.cds--text-area__wrapper[data-invalid]>.cds--text-area--invalid:not(:focus),.cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline-style:dotted}}.cds--date-picker-input__wrapper--invalid~.cds--form-requirement,.cds--date-picker-input__wrapper--warn~.cds--form-requirement,.cds--date-picker-input__wrapper~.cds--form-requirement,.cds--list-box--warning~.cds--form-requirement,.cds--list-box[data-invalid]~.cds--form-requirement,.cds--number[data-invalid] .cds--number__input-wrapper~.cds--form-requirement,.cds--number__input-wrapper--warning~.cds--form-requirement,.cds--select--warning .cds--select-input__wrapper~.cds--form-requirement,.cds--select-input__wrapper[data-invalid]~.cds--form-requirement,.cds--text-area__wrapper--warn~.cds--form-requirement,.cds--text-area__wrapper[data-invalid]~.cds--form-requirement,.cds--text-input__field-wrapper--warning>.cds--text-input~.cds--form-requirement,.cds--text-input__field-wrapper--warning~.cds--form-requirement,.cds--text-input__field-wrapper[data-invalid]~.cds--form-requirement,.cds--time-picker--invalid~.cds--form-requirement,.cds--time-picker--warning~.cds--form-requirement,.cds--time-picker[data-invalid]~.cds--form-requirement,:host(cds-select[warn]) .cds--select-input__wrapper~.cds--form-requirement,input[data-invalid]~.cds--form-requirement{display:block;font-weight:400;max-block-size:12.5rem;overflow:visible}.cds--select--inline.cds--select--warning .cds--select-input--inline__wrapper~.cds--form-requirement,.cds--select-input--inline__wrapper[data-invalid]~.cds--form-requirement,:host(cds-select[inline]):host(cds-select[warn]) .cds--select-input--inline__wrapper~.cds--form-requirement{display:inline-flex;inline-size:100%;margin:0;margin-block-end:0;max-block-size:100%;overflow:visible;padding-inline-start:.5rem}.cds--date-picker-input__wrapper--invalid~.cds--form-requirement,.cds--date-picker-input__wrapper~.cds--form-requirement,.cds--list-box[data-invalid]~.cds--form-requirement,.cds--number[data-invalid] .cds--number__input-wrapper~.cds--form-requirement,.cds--select-input--inline__wrapper[data-invalid]~.cds--form-requirement,.cds--select-input__wrapper[data-invalid]~.cds--form-requirement,.cds--text-area__wrapper[data-invalid]~.cds--form-requirement,.cds--text-input__field-wrapper[data-invalid]~.cds--form-requirement,.cds--time-picker--invalid~.cds--form-requirement,.cds--time-picker[data-invalid]~.cds--form-requirement,input[data-invalid]~.cds--form-requirement{color:var(--cds-text-error,#da1e28)}.cds--form--fluid .cds--text-input__field-wrapper--warning,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]{display:block}.cds--form--fluid input[data-invalid]{outline:none}.cds--form--fluid .cds--form-requirement{margin:0;padding:.5rem 2.5rem .5rem 1rem}input:not(output,[data-invalid]):-moz-ui-invalid{box-shadow:none}.cds--form-requirement html{font-size:100%}.cds--form-requirement body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--form-requirement code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--form-requirement strong{font-weight:600}.cds--form-requirement{display:none;font-size:var(--cds-helper-text-01-font-size,.75rem);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333);margin:.25rem 0 0;max-block-size:0;overflow:hidden}.cds--select--inline .cds--form__helper-text,:host(cds-select[inline]) .cds--form__helper-text{margin-block-start:0}.cds--form__helper-text{color:var(--cds-text-helper,#6f6f6f);font-size:var(--cds-helper-text-01-font-size,.75rem);inline-size:100%;letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333);margin-block-start:.25rem;opacity:1;z-index:0}.cds--form__helper-text--disabled,.cds--label--disabled,fieldset[disabled] .cds--form__helper-text,fieldset[disabled] .cds--label{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--select,:host(cds-select){border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--select *,.cds--select :after,.cds--select :before,:host(cds-select) *,:host(cds-select) :after,:host(cds-select) :before{box-sizing:inherit}.cds--select,:host(cds-select){align-items:flex-start;display:flex;flex-direction:column;inline-size:100%;position:relative}.cds--select-input__wrapper{align-items:center;display:flex;inline-size:100%;position:relative}.cds--select-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--cds-field);block-size:2.5rem;border:none;border-block-end:1px solid var(--cds-border-strong);border-radius:0;color:var(--cds-text-primary,#161616);cursor:pointer;display:block;font-family:inherit;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);inline-size:100%;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);opacity:1;outline:2px solid transparent;outline-offset:-2px;padding-block:0;padding-inline:1rem 3rem;text-overflow:ellipsis;transition:outline 70ms cubic-bezier(.2,0,.38,.9)}.cds--select-input:hover{background-color:var(--cds-field-hover)}.cds--select-input::-ms-expand{display:none}@-moz-document url-prefix(){.cds--select-input:-moz-focusring,.cds--select-input::-moz-focus-inner{background-image:none;color:transparent;text-shadow:0 0 0 #000}}.cds--select-input:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--select-input:focus{outline-style:dotted}}.cds--select-input:focus{color:var(--cds-text-primary,#161616)}.cds--select-input:disabled,.cds--select-input:hover:disabled{background-color:var(--cds-field);border-block-end-color:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed}.cds--select-input--sm{block-size:2rem;max-block-size:2rem}.cds--select-input--lg{block-size:3rem;max-block-size:3rem}.cds--select--disabled .cds--form__helper-text,.cds--select--disabled .cds--label,:host(cds-select[disabled]) .cds--form__helper-text,:host(cds-select[disabled]) .cds--label{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--select--warning .cds--select-input,.cds--select-input__wrapper[data-invalid] .cds--select-input,:host(cds-select[warn]) .cds--select-input{padding-inline-end:4rem}.cds--select-input:disabled~.cds--select__arrow{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--select--light .cds--select-input{background-color:var(--cds-field-02,#fff)}.cds--select--light .cds--select-input:hover{background-color:var(--cds-field-hover)}.cds--select--light .cds--select-input:disabled,.cds--select--light .cds--select-input:hover:disabled{background-color:var(--cds-field-02,#fff);color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed}.cds--select__arrow{block-size:100%;position:absolute;fill:var(--cds-icon-primary,#161616);inset-block-start:0;inset-inline-end:1rem;pointer-events:none}@media screen and (-ms-high-contrast:active),screen and (prefers-contrast){.cds--select__arrow path{fill:ButtonText}}.cds--select__invalid-icon{inset-inline-end:2.5rem;position:absolute}.cds--select-input--inline__wrapper[data-invalid] .cds--select__invalid-icon,.cds--select-input__wrapper[data-invalid] .cds--select-input~.cds--select__invalid-icon{fill:var(--cds-support-error,#da1e28)}.cds--select__invalid-icon--warning{fill:var(--cds-support-warning,#f1c21b)}.cds--select__invalid-icon--warning path[fill]{fill:#000;opacity:1}.cds--select-option,optgroup.cds--select-optgroup{background-color:var(--cds-layer-hover);color:var(--cds-text-primary,#161616)}.cds--select-option:disabled,optgroup.cds--select-optgroup:disabled{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--select--inline,:host(cds-select[inline]){align-items:center;display:flex;flex-direction:row}.cds--select--inline .cds--form__helper-text,:host(cds-select[inline]) .cds--form__helper-text{margin-block-end:0;margin-inline-start:.5rem}.cds--select--inline .cds--label,:host(cds-select[inline]) .cds--label{margin:0 .5rem 0 0;white-space:nowrap}.cds--select--inline .cds--select-input,:host(cds-select[inline]) .cds--select-input{background-color:transparent;border-block-end:none;color:var(--cds-text-primary,#161616);inline-size:100%;padding-inline:.5rem 3rem}.cds--select--inline .cds--select-input:hover,:host(cds-select[inline]) .cds--select-input:hover{background-color:var(--cds-field-hover)}.cds--select--inline .cds--select-input:focus,.cds--select--inline .cds--select-input:focus optgroup,.cds--select--inline .cds--select-input:focus option,:host(cds-select[inline]) .cds--select-input:focus,:host(cds-select[inline]) .cds--select-input:focus optgroup,:host(cds-select[inline]) .cds--select-input:focus option{background-color:var(--cds-background,#fff)}.cds--select--inline .cds--select-input:focus optgroup:hover,.cds--select--inline .cds--select-input:focus option:hover,.cds--select--inline .cds--select-input:focus:hover,:host(cds-select[inline]) .cds--select-input:focus optgroup:hover,:host(cds-select[inline]) .cds--select-input:focus option:hover,:host(cds-select[inline]) .cds--select-input:focus:hover{background-color:var(--cds-field-hover)}.cds--select--inline .cds--select-input[disabled],.cds--select--inline .cds--select-input[disabled]:hover,:host(cds-select[inline]) .cds--select-input[disabled]{background-color:var(--cds-background,#fff)}.cds--select--inline .cds--select__arrow,:host(cds-select[inline]) .cds--select__arrow{inset-inline-end:.5rem}.cds--select--inline.cds--select--invalid .cds--select-input,:host(cds-select[inline]):host(cds-select[invalid]) .cds--select-input{padding-inline-end:3.5rem}.cds--select--inline.cds--select--invalid .cds--select-input~.cds--select__invalid-icon,.cds--select--inline.cds--select--warning .cds--select-input~.cds--select__invalid-icon--warning,:host(cds-select[inline]):host(cds-select[invalid]) .cds--select-input~.cds--select__invalid-icon,:host(cds-select[inline]):host(cds-select[warn]) .cds--select-input~.cds--select__invalid-icon--warning{inset-inline-end:2rem}.cds--select--inline .cds--select-input:disabled,:host(cds-select[inline]) .cds--select-input:disabled{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed}.cds--select--inline .cds--select-input:disabled~*,:host(cds-select[inline]) .cds--select-input:disabled~*{cursor:not-allowed}.cds--select--readonly .cds--select-input{background-color:transparent;border-block-end-color:var(--cds-border-subtle);cursor:default}.cds--select--readonly .cds--select__arrow{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--select--readonly.cds--select--inline .cds--select-input:hover{background-color:transparent}.cds--select.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--select.cds--skeleton:active,.cds--select.cds--skeleton:focus,.cds--select.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--select.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--select.cds--skeleton:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--select.cds--skeleton{background:CanvasText}.cds--select.cds--skeleton:before{background:Canvas;forced-color-adjust:none}}.cds--select.cds--skeleton{block-size:2.5rem;inline-size:100%}.cds--select.cds--skeleton .cds--select-input{display:none}.cds--select--decorator .cds--select__inner-wrapper--decorator>*,.cds--select--slug .cds--ai-label,.cds--select--slug .cds--slug,:host(cds-select[slug]) .cds--ai-label,:host(cds-select[slug]) .cds--slug{inset-block-start:50%;inset-inline-end:calc(2.5rem + 9px);margin-block-start:.03125rem;position:absolute;transform:translateY(-50%)}.cds--select--decorator .cds--select__inner-wrapper--decorator>:after,.cds--select--decorator .cds--select__inner-wrapper--decorator>:before,.cds--select--slug .cds--ai-label:after,.cds--select--slug .cds--ai-label:before,.cds--select--slug .cds--slug:after,.cds--select--slug .cds--slug:before,:host(cds-select[slug]) .cds--ai-label:after,:host(cds-select[slug]) .cds--ai-label:before,:host(cds-select[slug]) .cds--slug:after,:host(cds-select[slug]) .cds--slug:before{background-color:var(--cds-border-subtle-01,#c6c6c6);block-size:1rem;content:"";inline-size:.0625rem;position:absolute}.cds--select--decorator .cds--select__inner-wrapper--decorator>:before,.cds--select--slug .cds--ai-label:before,.cds--select--slug .cds--slug:before,:host(cds-select[slug]) .cds--ai-label:before,:host(cds-select[slug]) .cds--slug:before{display:none;inset-inline-start:calc(-.5rem - 1px)}.cds--select--decorator .cds--select__inner-wrapper--decorator>:after,.cds--select--slug .cds--ai-label:after,.cds--select--slug .cds--slug:after,:host(cds-select[slug]) .cds--ai-label:after,:host(cds-select[slug]) .cds--slug:after{display:block;inset-block-start:0;inset-inline-end:calc(-.5rem - 1px)}.cds--select--decorator .cds--select__inner-wrapper--decorator>.cds--ai-label--revert:before,.cds--select--slug .cds--ai-label--revert:before,.cds--select--slug .cds--slug--revert:before,:host(cds-select[slug]) .cds--ai-label--revert:before,:host(cds-select[slug]) .cds--slug--revert:before{inset-block-start:.5rem;inset-inline-start:0}.cds--select--decorator .cds--select__inner-wrapper--decorator>.cds--ai-label--revert,.cds--select--slug .cds--ai-label--revert,:host(cds-select[slug]) .cds--ai-label--revert{inset-inline-end:2.5625rem}.cds--select--decorator .cds--ai-label--revert:after,.cds--select--slug .cds--ai-label--revert:after,.cds--select--slug .cds--slug--revert:after,:host(cds-select[slug]) .cds--ai-label--revert:after,:host(cds-select[slug]) .cds--slug--revert:after{inset-block-start:.5rem;inset-inline-end:-1px}.cds--select--decorator .cds--select-input:has(~.cds--select__inner-wrapper--decorator),.cds--select--slug .cds--select-input:has(~.cds--ai-label),.cds--select--slug .cds--select-input:has(~.cds--slug),:host(cds-select[slug]) .cds--select-input:has(~.cds--ai-label),:host(cds-select[slug]) .cds--select-input:has(~.cds--slug){padding-inline-end:4rem}.cds--select--decorator:has(.cds--select__invalid-icon) .cds--select-input:has(~.cds--select__inner-wrapper--decorator),.cds--select--slug:has(.cds--select__invalid-icon) .cds--select-input:has(~.cds--ai-label),.cds--select--slug:has(.cds--select__invalid-icon) .cds--select-input:has(~.cds--slug),:has(.cds--select__invalid-icon):host(cds-select[slug]) .cds--select-input:has(~.cds--ai-label),:has(.cds--select__invalid-icon):host(cds-select[slug]) .cds--select-input:has(~.cds--slug){padding-inline-end:6rem}.cds--select--decorator .cds--select-input:has(~.cds--select__inner-wrapper--decorator .cds--ai-label):not(:has(~.cds--select__inner-wrapper--decorator .cds--ai-label--revert)),.cds--select--slug .cds--select-input:has(~.cds--ai-label):not(:has(~.cds--ai-label--revert)),.cds--select--slug .cds--select-input:has(~.cds--slug):not(:has(~.cds--slug--revert)),.cds--select-input-has--ai-label,:host(cds-select[slug]) .cds--select-input:has(~.cds--ai-label):not(:has(~.cds--ai-label--revert)),:host(cds-select[slug]) .cds--select-input:has(~.cds--slug):not(:has(~.cds--slug--revert)){background-image:linear-gradient(0deg,var(--cds-ai-aura-start-sm,rgba(69,137,255,.16)) 0,15%,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%,transparent 100%);border-block-end-color:var(--cds-ai-border-strong,#4589ff)}.cds--select--decorator:has(.cds--select__invalid-icon) .cds--select__inner-wrapper--decorator>:before,.cds--select--slug:has(.cds--select__invalid-icon) .cds--ai-label:before,.cds--select--slug:has(.cds--select__invalid-icon) .cds--slug:before,:has(.cds--select__invalid-icon):host(cds-select[slug]) .cds--ai-label:before,:has(.cds--select__invalid-icon):host(cds-select[slug]) .cds--slug:before{display:block}.cds--select--decorator .cds--select-input__wrapper .cds--select-input~.cds--select__invalid-icon,.cds--select--slug .cds--select-input__wrapper .cds--select-input~.cds--select__invalid-icon,.cds--select--slug .cds--select-input__wrapper[data-invalid] .cds--select-input~.cds--select__invalid-icon,:host(cds-select[slug]) .cds--select-input__wrapper .cds--select-input~.cds--select__invalid-icon{inset-inline-end:5rem}.cds--select--fluid .cds--select,.cds--select--fluid :host(cds-select){background:var(--cds-field);block-size:100%;position:relative;transition:background-color 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9)}.cds--select--fluid .cds--label{align-items:center;block-size:1rem;display:flex;inline-size:calc(100% - 2rem);inset-block-start:.8125rem;inset-inline-start:1rem;margin:0;position:absolute;z-index:1}.cds--select--fluid .cds--label .cds--toggletip-label::-webkit-scrollbar,.cds--select--fluid .cds--label::-webkit-scrollbar{display:none}.cds--select--fluid .cds--label .cds--toggletip-label,.cds--select--fluid .cds--label:not(:has(.cds--toggletip-label)){-ms-overflow-style:none;overflow-x:scroll;scrollbar-width:none;white-space:nowrap}.cds--select--fluid .cds--select-input{min-block-size:4rem;outline:none;padding:2rem 2rem .8125rem 1rem;text-overflow:ellipsis}.cds--select--fluid .cds--select__arrow{block-size:1rem;inset-block-start:2.125rem;inset-inline-end:.75rem}.cds--select--fluid .cds--select__divider{display:none;transition:border-color 70ms cubic-bezier(.2,0,.38,.9)}.cds--select--fluid .cds--select--invalid .cds--select-input__wrapper,.cds--select--fluid :host(cds-select[invalid]) .cds--select-input__wrapper{outline:2px solid var(--cds-support-error,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.cds--select--fluid .cds--select--invalid .cds--select-input__wrapper,.cds--select--fluid :host(cds-select[invalid]) .cds--select-input__wrapper{outline-style:dotted}}.cds--select--fluid .cds--select--invalid .cds--select__divider,.cds--select--fluid .cds--select--warning .cds--select__divider,.cds--select--fluid :host(cds-select[invalid]) .cds--select__divider,.cds--select--fluid :host(cds-select[warn]) .cds--select__divider{border:none;border-block-end:1px solid var(--cds-border-subtle);display:block;inline-size:calc(100% - 2rem);margin:0 1rem}.cds--select--fluid .cds--select--warning .cds--select-input,.cds--select--fluid .cds--select-input__wrapper[data-invalid] .cds--select-input,.cds--select--fluid :host(cds-select[warn]) .cds--select-input{border-block-end:1px solid transparent;padding-inline-end:2rem}.cds--select--fluid .cds--select--warning,.cds--select--fluid :host(cds-select[warn]){border-block-end:1px solid var(--cds-border-strong)}.cds--select--fluid .cds--select-input__wrapper{display:block}.cds--select--fluid .cds--select--warning .cds--select-input:not(:focus),.cds--select--fluid .cds--select-input__wrapper[data-invalid] .cds--select-input:not(:focus),.cds--select--fluid :host(cds-select[warn]) .cds--select-input:not(:focus){outline:none}.cds--select--fluid .cds--select--warning .cds--form-requirement,.cds--select--fluid .cds--select-input__wrapper[data-invalid] .cds--form-requirement,.cds--select--fluid :host(cds-select[warn]) .cds--form-requirement{display:block;max-block-size:100%;overflow:visible}.cds--select--fluid .cds--select-input__wrapper[data-invalid] .cds--form-requirement{color:var(--cds-text-error,#da1e28)}.cds--select--fluid .cds--form-requirement{margin:0;padding:.5rem 2.5rem .5rem 1rem}.cds--select--fluid .cds--select--warning .cds--select-input__wrapper:hover+.cds--select__divider,.cds--select--fluid .cds--select-input__wrapper[data-invalid]:hover+.cds--select__divider,.cds--select--fluid :host(cds-select[warn]) .cds--select-input__wrapper:hover+.cds--select__divider{border-color:transparent}.cds--select--fluid .cds--select--invalid .cds--select-input__wrapper[data-invalid] .cds--select__invalid-icon,.cds--select--fluid .cds--select--warning .cds--select-input__wrapper .cds--select__invalid-icon,.cds--select--fluid :host(cds-select[invalid]) .cds--select-input__wrapper[data-invalid] .cds--select__invalid-icon,.cds--select--fluid :host(cds-select[warn]) .cds--select-input__wrapper .cds--select__invalid-icon{inset-block-start:4.5625rem;inset-inline-end:1rem;pointer-events:none}.cds--select--fluid .cds--select--fluid--focus .cds--select-input__wrapper{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--select--fluid .cds--select--fluid--focus .cds--select-input__wrapper{outline-style:dotted}}.cds--select--fluid .cds--select--fluid--focus .cds--select-input,.cds--select--fluid .cds--select--fluid--focus.cds--select--warning{border-block-end:1px solid transparent}.cds--select--fluid .cds--select--disabled .cds--toggletip-label,.cds--select--fluid :host(cds-select[disabled]) .cds--toggletip-label{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--select--fluid .cds--select--disabled .cds--toggletip-button,.cds--select--fluid :host(cds-select[disabled]) .cds--toggletip-button{pointer-events:none}.cds--select--fluid .cds--select--disabled .cds--toggletip-button svg,.cds--select--fluid :host(cds-select[disabled]) .cds--toggletip-button svg{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--select--fluid .cds--select--decorator .cds--select__inner-wrapper--decorator>*,.cds--select--fluid .cds--select--slug .cds--ai-label,.cds--select--fluid .cds--select--slug .cds--slug,.cds--select--fluid :host(cds-select[slug]) .cds--ai-label,.cds--select--fluid :host(cds-select[slug]) .cds--slug{inset-block-start:2.625rem;inset-inline-end:3rem}.cds--select--fluid .cds--select--slug .cds--select-input,.cds--select--fluid :host(cds-select[slug]) .cds--select-input{padding-inline-end:4rem}.cds--select--fluid .cds--select--decorator .cds--select__inner-wrapper--decorator>.cds--ai-label:before,.cds--select--fluid .cds--select--slug:has(.cds--select__invalid-icon) .cds--ai-label:before,.cds--select--fluid .cds--select--slug:has(.cds--select__invalid-icon) .cds--slug:before,.cds--select--fluid :has(.cds--select__invalid-icon):host(cds-select[slug]) .cds--ai-label:before,.cds--select--fluid :has(.cds--select__invalid-icon):host(cds-select[slug]) .cds--slug:before{display:none}.cds--select--fluid__skeleton{background:var(--cds-skeleton-background,#e8e8e8);block-size:4rem;border-block-end:1px solid var(--cds-skeleton-element,#c6c6c6);position:relative}.cds--select--fluid__skeleton .cds--skeleton{block-size:.5rem;inline-size:25%;inset-block-start:1rem;inset-inline-start:1rem;position:absolute}.cds--select--fluid__skeleton .cds--label{block-size:.5rem;inline-size:50%;inset-block-start:2.25rem;inset-inline-start:1rem;padding:0;position:absolute}.cds--assistive-text,.cds--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}:host(cds-select){outline:none}:host(cds-select) ::slotted(cds-ai-label),:host(cds-select) ::slotted(cds-slug){inset-block-start:50%;inset-inline-end:3rem;position:absolute}:host(cds-select) ::slotted(cds-ai-label:not([revert-active])),:host(cds-select) ::slotted(cds-slug:not([revert-active])){transform:translateY(-50%)}:host(cds-select) ::slotted(cds-ai-label):after,:host(cds-select) ::slotted(cds-ai-label):before{background-color:var(--cds-border-subtle-01,#c6c6c6);block-size:1rem;content:"";inline-size:.0625rem;inset-inline-start:calc(1.5rem - 1px);position:absolute}:host(cds-select) ::slotted(cds-ai-label):before{display:var(--cds-show-before);inset-inline-start:calc(-.5rem - 1px)}:host(cds-select[readonly]) select{pointer-events:none}:host(cds-select[pagination]) .cds--label{margin:0}:host(cds-select[pagination]) .cds--select-input{padding:0 2.25rem 0 1rem}:host(cds-select[pagination]) .cds--select-input:focus{background-color:transparent}:host(cds-select[pagination]) .cds--select__arrow{inset-block-start:50%;transform:translate(-.5rem,-50%)}:host(cds-select[pagination][left-select]) .cds--select-input{border-inline-end:1px solid var(--cds-border-subtle)}:host(cds-select[invalid]) ::slotted(cds-ai-label),:host(cds-select[invalid]) ::slotted(cds-slug),:host(cds-select[warn]) ::slotted(cds-ai-label),:host(cds-select[warn]) ::slotted(cds-slug){inset-inline-end:3rem}']);

// node_modules/@carbon/web-components/es/components/select/select.js
var CDSSelect = class CDSSelect2 extends FormMixin(i2) {
  constructor() {
    super(...arguments);
    this._hasAILabel = false;
    this._observerMutation = null;
    this._placeholderItemValue = `__${prefix}-select-placeholder_${Math.random().toString(36).slice(2)}`;
    this.isFluid = false;
    this._handleMutation = () => {
      this.requestUpdate?.();
    };
    this.autofocus = false;
    this.disabled = false;
    this.helperText = "";
    this.hideLabel = false;
    this.id = "";
    this.invalid = false;
    this.invalidText = "";
    this.warn = false;
    this.warnText = "";
    this.labelText = "";
    this.inline = false;
    this.name = "";
    this.pattern = "";
    this.placeholder = "";
    this.readonly = false;
    this.required = false;
    this.requiredValidityMessage = "Please fill out this field.";
    this.size = INPUT_SIZE.MEDIUM;
    this.value = "";
  }
  /**
   * Handles `oninput` event on the `<input>`.
   *
   * @param event The event.
   * @param event.target The event target.
   */
  _handleInput({ target }) {
    const { value } = target;
    this.value = value;
    const { eventSelect } = this.constructor;
    this.dispatchEvent(new CustomEvent(eventSelect, {
      bubbles: true,
      composed: true,
      detail: {
        value
      }
    }));
  }
  /**
   * @param element The parent element containing pseudo `<optgroup>`/`<option>`.
   * @returns The template containing child `<optgroup>`/`<option>` that will be rendered to shadow DOM.
   */
  _renderItems(element) {
    const { selectorItem, selectorLeafItem } = this.constructor;
    return b`
      ${filter(element.childNodes, (item) => item.nodeType === Node.ELEMENT_NODE && item.matches(selectorItem)).map((item) => {
      const disabled = item.hasAttribute("disabled");
      const label = item.getAttribute("label");
      const selected = item.hasAttribute("selected");
      const value = item.getAttribute("value");
      const { textContent } = item;
      return item.matches(selectorLeafItem) ? b`
              <option
                class="${prefix}--select-option"
                ?disabled="${disabled}"
                label="${ifNonEmpty(label)}"
                ?selected="${selected}"
                value="${o(value)}">
                ${textContent}
              </option>
            ` : b`
              <optgroup
                class="${prefix}--select-optgroup"
                ?disabled="${disabled}"
                label="${o(label)}">
                ${this._renderItems(item)}
              </optgroup>
            `;
    })}
    `;
  }
  _handleFormdata(event) {
    const { formData } = event;
    const { disabled, name, value } = this;
    if (!disabled) {
      formData.append(name, value);
    }
  }
  /**
   * Handles `slotchange` event.
   */
  _handleAILabelSlotChange({ target }) {
    const hasContent = target.assignedNodes().filter((elem) => elem.matches !== void 0 ? elem.matches(this.constructor.aiLabelItem) || // remove reference to slug in v12
    elem.matches(this.constructor.slugItem) : false);
    this._hasAILabel = Boolean(hasContent);
    this.setAttribute("slug", `${this._hasAILabel}`);
    hasContent[0].setAttribute("size", "mini");
    this.requestUpdate?.();
  }
  /**
   * The count of child `<option>`s.
   * If the placeholder is in effect, it includes the `<option>` for the placeholder.
   */
  get length() {
    return this._selectNode.length;
  }
  /**
   * The child `<option>`s.
   */
  get options() {
    return this._selectNode.options;
  }
  /**
   * This form control's type.
   */
  get type() {
    return this._selectNode.type;
  }
  /**
   * `true` to enable multiple selection.
   */
  get multiple() {
    return false;
  }
  /**
   * The selected index.
   */
  get selectedIndex() {
    var _a;
    return (_a = this._selectNode) === null || _a === void 0 ? void 0 : _a.selectedIndex;
  }
  set selectedIndex(value) {
    this._selectNode.selectedIndex = value;
    this.value = this._selectNode.value;
  }
  connectedCallback() {
    super.connectedCallback();
    this._observerMutation = new MutationObserver(this._handleMutation);
    this._observerMutation.observe(this, {
      attributes: true,
      childList: true,
      subtree: true
    });
  }
  disconnectedCallback() {
    if (this._observerMutation) {
      this._observerMutation.disconnect();
      this._observerMutation = null;
    }
    super.disconnectedCallback();
  }
  updated(changedProperties) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    if (changedProperties.has("value")) {
      const { value, _placeholderItemValue: placeholderItemValue } = this;
      const lastOption = (_c = (_a = this._selectedOptionNodes) === null || _a === void 0 ? void 0 : _a[((_b = this._selectedOptionNodes) === null || _b === void 0 ? void 0 : _b.length) - 1]) === null || _c === void 0 ? void 0 : _c["value"];
      if (value) {
        this._selectNode.value = value;
      } else if (lastOption) {
        this._selectNode.value = lastOption;
      } else {
        this._selectNode.value = placeholderItemValue;
      }
    }
    const label = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector("slot[name='ai-label']");
    if (label) {
      if ((_e = label.assignedNodes()) === null || _e === void 0 ? void 0 : _e.length) {
        (_f = this._inputNode) === null || _f === void 0 ? void 0 : _f.classList.add(`${prefix}--select-input-has--ai-label`);
      }
      label === null || label === void 0 ? void 0 : label.classList.toggle(`${prefix}--slug--revert`, (_g = this.querySelector(`${prefix}-ai-label`)) === null || _g === void 0 ? void 0 : _g.hasAttribute("revert-active"));
    } else {
      (_j = (_h = this.shadowRoot) === null || _h === void 0 ? void 0 : _h.querySelector("slot[name='slug']")) === null || _j === void 0 ? void 0 : _j.classList.toggle(`${prefix}--slug--revert`, (_k = this.querySelector(`${prefix}-slug`)) === null || _k === void 0 ? void 0 : _k.hasAttribute("revert-active"));
    }
  }
  render() {
    const { disabled, helperText, hideLabel, inline, invalid, invalidText, labelText, placeholder, readonly, size, warn, warnText, value, _placeholderItemValue: placeholderItemValue, _handleInput: handleInput, _handleAILabelSlotChange: handleAILabelSlotChange } = this;
    const normalizedProps = {
      disabled: !readonly && disabled,
      invalid: !readonly && !disabled && invalid,
      warn: !readonly && !invalid && !disabled && warn
    };
    const inputClasses = e2({
      [`${prefix}--select-input`]: true,
      [`${prefix}--select-input--${size}`]: size
    });
    const labelClasses = e2({
      [`${prefix}--label`]: true,
      [`${prefix}--label--disabled`]: normalizedProps.disabled,
      [`${prefix}--visually-hidden`]: hideLabel
    });
    const helperTextClasses = e2({
      [`${prefix}--form__helper-text`]: true,
      [`${prefix}--form__helper-text--disabled`]: normalizedProps.disabled
    });
    const supplementalText = helperText ? b`
          <div id="helper-text" class="${helperTextClasses}">
            <slot name="helper-text"> ${helperText} </slot>
          </div>
        ` : null;
    const errorText = normalizedProps.invalid || normalizedProps.warn ? b` <div id="error-text" class="${prefix}--form-requirement">
            ${normalizedProps.invalid ? invalidText : warnText}
          </div>` : null;
    let describedBy;
    if (normalizedProps.invalid || normalizedProps.warn) {
      describedBy = "error-text";
    } else if (helperText) {
      describedBy = "helper-text";
    }
    const input = b`
      <select
        id="input"
        class="${inputClasses}"
        ?disabled="${disabled}"
        title="${value}"
        aria-readonly="${String(Boolean(readonly))}"
        aria-invalid="${String(Boolean(normalizedProps.invalid))}"
        aria-describedby="${o(describedBy)}"
        @input="${handleInput}">
        ${!placeholder || value ? void 0 : b`
              <option
                disabled
                hidden
                class="${prefix}--select-option"
                value="${placeholderItemValue}">
                ${placeholder}
              </option>
            `}
        ${this._renderItems(this)}
      </select>
      ${iconLoader(_163, {
      class: `${prefix}--select__arrow`,
      "aria-hidden": "true"
    })}
      <slot
        name="ai-label"
        style="--${prefix}-show-before: ${normalizedProps.warn || normalizedProps.invalid ? "block" : "none"}"
        @slotchange=${handleAILabelSlotChange}></slot>
      <slot name="slug" @slotchange=${handleAILabelSlotChange}></slot>
      ${!normalizedProps.invalid ? void 0 : iconLoader(_16, {
      class: `${prefix}--select__invalid-icon`
    })}
      ${!normalizedProps.invalid && normalizedProps.warn ? iconLoader(_162, {
      class: `${prefix}--select__invalid-icon ${prefix}--select__invalid-icon--warning`
    }) : null}
    `;
    return b`
      <label class="${labelClasses}" for="input">
        <slot name="label-text"> ${labelText} </slot>
      </label>

      ${inline ? b`<div
            class="${prefix}--select-input--inline__wrapper"
            ?data-invalid="${normalizedProps.invalid}">
            <div
              class="${prefix}--select-input__wrapper"
              ?data-invalid="${normalizedProps.invalid}">
              ${input}
            </div>
          </div>` : b`<div
            class="${prefix}--select-input__wrapper"
            ?data-invalid="${normalizedProps.invalid}">
            ${input}
            ${this.isFluid ? b`
                  <hr class="${prefix}--select__divider" />
                  ${errorText ? errorText : null}
                ` : null}
          </div> `}
      ${!this.isFluid && errorText ? errorText : supplementalText}
    `;
  }
  /**
   * A selector selecting child pseudo `<optgroup>`/`<option>`.
   */
  static get selectorItem() {
    return `${prefix}-select-item-group,${prefix}-select-item`;
  }
  /**
   * A selector selecting child pseudo `<option>`.
   */
  static get selectorLeafItem() {
    return `${prefix}-select-item`;
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
   * The name of the custom event fired after item is selected.
   */
  static get eventSelect() {
    return `${prefix}-select-selected`;
  }
};
CDSSelect.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSSelect.styles = styles;
__decorate([
  e("select")
], CDSSelect.prototype, "_selectNode", void 0);
__decorate([
  e("#input")
], CDSSelect.prototype, "_inputNode", void 0);
__decorate([
  r(`.${prefix}--select-option[selected]`)
], CDSSelect.prototype, "_selectedOptionNodes", void 0);
__decorate([
  n({ type: Boolean })
], CDSSelect.prototype, "isFluid", void 0);
__decorate([
  n({ type: Boolean })
], CDSSelect.prototype, "autofocus", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSelect.prototype, "disabled", void 0);
__decorate([
  n({ attribute: "helper-text" })
], CDSSelect.prototype, "helperText", void 0);
__decorate([
  n({ type: Boolean, attribute: "hide-label" })
], CDSSelect.prototype, "hideLabel", void 0);
__decorate([
  n()
], CDSSelect.prototype, "id", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSelect.prototype, "invalid", void 0);
__decorate([
  n({ attribute: "invalid-text" })
], CDSSelect.prototype, "invalidText", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSelect.prototype, "warn", void 0);
__decorate([
  n({ attribute: "warn-text" })
], CDSSelect.prototype, "warnText", void 0);
__decorate([
  n({ attribute: "label-text" })
], CDSSelect.prototype, "labelText", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSelect.prototype, "inline", void 0);
__decorate([
  n({ type: Boolean })
], CDSSelect.prototype, "multiple", null);
__decorate([
  n()
], CDSSelect.prototype, "name", void 0);
__decorate([
  n()
], CDSSelect.prototype, "pattern", void 0);
__decorate([
  n({ reflect: true })
], CDSSelect.prototype, "placeholder", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSelect.prototype, "readonly", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSelect.prototype, "required", void 0);
__decorate([
  n({ attribute: "required-validity-message" })
], CDSSelect.prototype, "requiredValidityMessage", void 0);
__decorate([
  n({ type: Number })
], CDSSelect.prototype, "selectedIndex", null);
__decorate([
  n({ reflect: true })
], CDSSelect.prototype, "size", void 0);
__decorate([
  n({ reflect: true })
], CDSSelect.prototype, "value", void 0);
CDSSelect = __decorate([
  carbonElement(`${prefix}-select`)
], CDSSelect);
var CDSSelect$1 = CDSSelect;

export {
  styles,
  CDSSelect$1
};
