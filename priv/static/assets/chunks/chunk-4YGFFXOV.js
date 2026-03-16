import {
  CDSTextInput$1
} from "./chunk-UBPLMH62.js";
import {
  ifNonEmpty
} from "./chunk-2G6ZGNK6.js";
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
  i,
  i2
} from "./chunk-3GZFZEMV.js";

// node_modules/@carbon/web-components/es/components/textarea/textarea.scss.js
var styles = i(['.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-background:var(--cds-layer-background-01,#fff);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-background:var(--cds-layer-background-02,#f4f4f4);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-background:var(--cds-layer-background-03,#fff);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}.cds--layer-one.cds--layer__with-background,.cds--layer-three.cds--layer__with-background,.cds--layer-two.cds--layer__with-background{background-color:var(--cds-layer-background)}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}input:-webkit-autofill,input:-webkit-autofill:focus,input:-webkit-autofill:hover,textarea:-webkit-autofill,textarea:-webkit-autofill:focus,textarea:-webkit-autofill:hover{box-shadow:0 0 0 1000px var(--cds-field) inset;-webkit-text-fill-color:var(--cds-text-primary,#161616)}.cds--fieldset{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--fieldset *,.cds--fieldset :after,.cds--fieldset :before{box-sizing:inherit}.cds--form-item{align-items:flex-start;display:flex;flex:1 1 auto;flex-direction:column;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--label html{font-size:100%}.cds--label body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--label code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--label strong{font-weight:600}.cds--label{color:var(--cds-text-secondary,#525252);display:inline-block;font-weight:var(--cds-label-01-font-weight,400);font-weight:400;line-height:var(--cds-label-01-line-height,1.33333);line-height:1rem;margin-block-end:.5rem;vertical-align:baseline}.cds--label,.cds--label .cds--toggletip-label{font-size:var(--cds-label-01-font-size,.75rem);letter-spacing:var(--cds-label-01-letter-spacing,.32px)}.cds--label .cds--toggletip-label{font-weight:var(--cds-label-01-font-weight,400);line-height:var(--cds-label-01-line-height,1.33333)}.cds--label--no-margin{margin-block-end:0}.cds--label+.cds--tooltip{inset-block-start:.2rem;inset-inline-start:.5rem;position:relative}.cds--label+.cds--tooltip .cds--tooltip__trigger{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--label+.cds--tooltip .cds--tooltip__trigger *,.cds--label+.cds--tooltip .cds--tooltip__trigger :after,.cds--label+.cds--tooltip .cds--tooltip__trigger :before{box-sizing:inherit}.cds--label+.cds--tooltip .cds--tooltip__trigger::-moz-focus-inner{border:0}.cds--label+.cds--tooltip .cds--tooltip__trigger{align-items:center;display:flex;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);justify-content:center;letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}.cds--label+.cds--tooltip .cds--tooltip__trigger:focus{outline:1px solid var(--cds-focus,#0f62fe)}.cds--label+.cds--tooltip .cds--tooltip__trigger svg{fill:var(--cds-icon-secondary,#525252)}.cds--label+.cds--tooltip .cds--tooltip__trigger svg :hover{fill:var(--cds-icon-primary,#161616)}.cds--label+.cds--toggletip{inset-block-start:.2rem;inset-inline-start:.5rem}.cds--label.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--label.cds--skeleton:active,.cds--label.cds--skeleton:focus,.cds--label.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--label.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--label.cds--skeleton:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--label.cds--skeleton{background:CanvasText}.cds--label.cds--skeleton:before{background:Canvas;forced-color-adjust:none}}.cds--label.cds--skeleton{block-size:.875rem;inline-size:4.6875rem}input[type=number],input[type=text].cds--number{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif}.cds--combo-box[data-invalid]:not(.cds--multi-select--selected) .cds--text-input:not(:focus),.cds--list-box[data-invalid]:not(.cds--multi-select--invalid--focused,.cds--combo-box--invalid--focused),.cds--number[data-invalid] input[type=number]:not(:focus),.cds--number[data-invalid] input[type=text]:not(:focus),.cds--select-input__wrapper[data-invalid] .cds--select-input:not(:focus),.cds--text-area__wrapper[data-invalid]>.cds--text-area--invalid:not(:focus),.cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline:2px solid var(--cds-support-error,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.cds--combo-box[data-invalid]:not(.cds--multi-select--selected) .cds--text-input:not(:focus),.cds--list-box[data-invalid]:not(.cds--multi-select--invalid--focused,.cds--combo-box--invalid--focused),.cds--number[data-invalid] input[type=number]:not(:focus),.cds--number[data-invalid] input[type=text]:not(:focus),.cds--select-input__wrapper[data-invalid] .cds--select-input:not(:focus),.cds--text-area__wrapper[data-invalid]>.cds--text-area--invalid:not(:focus),.cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline-style:dotted}}.cds--date-picker-input__wrapper--invalid~.cds--form-requirement,.cds--date-picker-input__wrapper--warn~.cds--form-requirement,.cds--date-picker-input__wrapper~.cds--form-requirement,.cds--list-box--warning~.cds--form-requirement,.cds--list-box[data-invalid]~.cds--form-requirement,.cds--number[data-invalid] .cds--number__input-wrapper~.cds--form-requirement,.cds--number__input-wrapper--warning~.cds--form-requirement,.cds--select--warning .cds--select-input__wrapper~.cds--form-requirement,.cds--select-input__wrapper[data-invalid]~.cds--form-requirement,.cds--text-area__wrapper--warn~.cds--form-requirement,.cds--text-area__wrapper[data-invalid]~.cds--form-requirement,.cds--text-input__field-wrapper--warning>.cds--text-input~.cds--form-requirement,.cds--text-input__field-wrapper--warning~.cds--form-requirement,.cds--text-input__field-wrapper[data-invalid]~.cds--form-requirement,.cds--time-picker--invalid~.cds--form-requirement,.cds--time-picker--warning~.cds--form-requirement,.cds--time-picker[data-invalid]~.cds--form-requirement,input[data-invalid]~.cds--form-requirement{display:block;font-weight:400;max-block-size:12.5rem;overflow:visible}.cds--select--inline.cds--select--warning .cds--select-input--inline__wrapper~.cds--form-requirement,.cds--select-input--inline__wrapper[data-invalid]~.cds--form-requirement{display:inline-flex;inline-size:100%;margin:0;margin-block-end:0;max-block-size:100%;overflow:visible;padding-inline-start:.5rem}.cds--date-picker-input__wrapper--invalid~.cds--form-requirement,.cds--date-picker-input__wrapper~.cds--form-requirement,.cds--list-box[data-invalid]~.cds--form-requirement,.cds--number[data-invalid] .cds--number__input-wrapper~.cds--form-requirement,.cds--select-input--inline__wrapper[data-invalid]~.cds--form-requirement,.cds--select-input__wrapper[data-invalid]~.cds--form-requirement,.cds--text-area__wrapper[data-invalid]~.cds--form-requirement,.cds--text-input__field-wrapper[data-invalid]~.cds--form-requirement,.cds--time-picker--invalid~.cds--form-requirement,.cds--time-picker[data-invalid]~.cds--form-requirement,input[data-invalid]~.cds--form-requirement{color:var(--cds-text-error,#da1e28)}.cds--form--fluid .cds--text-input__field-wrapper--warning,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]{display:block}.cds--form--fluid input[data-invalid]{outline:none}.cds--form--fluid .cds--form-requirement{margin:0;padding:.5rem 2.5rem .5rem 1rem}input:not(output,[data-invalid]):-moz-ui-invalid{box-shadow:none}.cds--form-requirement html{font-size:100%}.cds--form-requirement body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--form-requirement code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--form-requirement strong{font-weight:600}.cds--form-requirement{display:none;font-size:var(--cds-helper-text-01-font-size,.75rem);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333);margin:.25rem 0 0;max-block-size:0;overflow:hidden}.cds--select--inline .cds--form__helper-text{margin-block-start:0}.cds--form__helper-text{color:var(--cds-text-helper,#6f6f6f);font-size:var(--cds-helper-text-01-font-size,.75rem);inline-size:100%;letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333);margin-block-start:.25rem;opacity:1;z-index:0}.cds--form__helper-text--disabled,.cds--label--disabled,fieldset[disabled] .cds--form__helper-text,fieldset[disabled] .cds--label{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--assistive-text,.cds--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--text-area{border:0;box-sizing:border-box;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--text-area *,.cds--text-area :after,.cds--text-area :before{box-sizing:inherit}.cds--text-area{background-color:var(--cds-field);block-size:100%;border:none;border-block-end:1px solid var(--cds-border-strong);color:var(--cds-text-primary,#161616);font-family:inherit;font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);min-block-size:2.5rem;min-inline-size:10rem;outline:2px solid transparent;outline-offset:-2px;padding:.6875rem var(--cds-layout-density-padding-inline-local);resize:vertical;transition:background-color 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9)}.cds--text-area:active,.cds--text-area:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--text-area:active,.cds--text-area:focus{outline-style:dotted}}.cds--text-area::-moz-placeholder{color:var(--cds-text-placeholder,hsla(0,0%,9%,.4));font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);opacity:1}.cds--text-area::placeholder{color:var(--cds-text-placeholder,hsla(0,0%,9%,.4));font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);opacity:1}.cds--text-area--light{background-color:var(--cds-field-02,#fff)}.cds--text-area__wrapper{--cds-layout-density-padding-inline-local:clamp(var(--cds-layout-density-padding-inline-min),var(--cds-layout-density-padding-inline,var(--cds-layout-density-padding-inline-normal)),var(--cds-layout-density-padding-inline-max));display:flex;inline-size:100%;max-inline-size:100%;position:relative}.cds--text-area__wrapper--cols{inline-size:auto}.cds--text-area__invalid-icon{position:absolute;fill:var(--cds-support-error,#da1e28);inset-block-start:.75rem;inset-inline-end:var(--cds-layout-density-padding-inline-local)}.cds--text-area__invalid-icon--warning{fill:var(--cds-support-warning,#f1c21b)}.cds--text-area__invalid-icon--warning path[fill]{fill:#000;opacity:1}.cds--text-area__counter-alert{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px}.cds--form-item:has(.cds--text-area__wrapper--cols){inline-size:-moz-fit-content;inline-size:fit-content}.cds--text-area:disabled{background-color:var(--cds-field);border-block-end:1px solid transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed;outline:none;resize:none}.cds--text-area:disabled::-moz-placeholder{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--text-area:disabled::placeholder{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--text-area__wrapper--readonly .cds--text-area{background:transparent;border-block-end-color:var(--cds-border-subtle)}.cds--text-area__wrapper--decorator .cds--text-area__inner-wrapper--decorator>*,.cds--text-area__wrapper--slug .cds--ai-label,.cds--text-area__wrapper--slug .cds--slug{inset-block-start:.75rem;inset-inline-end:1rem;position:absolute}.cds--text-area__wrapper--decorator .cds--ai-label.cds--ai-label--revert,.cds--text-area__wrapper--slug .cds--ai-label.cds--ai-label--revert,.cds--text-area__wrapper--slug .cds--slug.cds--slug--revert{inset-block-start:.25rem;inset-inline-end:.5rem;transform:translate(0)}.cds--text-area__wrapper--decorator .cds--text-area:has(~.cds--text-area__inner-wrapper--decorator .cds--ai-label):not(:has(~.cds--text-area__inner-wrapper--decorator .cds--ai-label--revert)),.cds--text-area__wrapper--slug .cds--text-area:has(~.cds--ai-label):not(:has(~.cds--ai-label--revert)),.cds--text-area__wrapper--slug .cds--text-area:has(~.cds--slug):not(:has(~.cds--slug--revert)){background-image:linear-gradient(0deg,var(--cds-ai-aura-start-sm,rgba(69,137,255,.16)) 0,15%,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%,transparent 100%);border-block-end-color:var(--cds-ai-border-strong,#4589ff)}.cds--text-area__wrapper--decorator .cds--text-area:has(~.cds--text-area__inner-wrapper--decorator>*),.cds--text-area__wrapper--slug .cds--text-area:has(~.cds--ai-label),.cds--text-area__wrapper--slug .cds--text-area:has(~.cds--slug){padding-inline-end:2.5rem}.cds--text-area--invalid:has(~.cds--ai-label),.cds--text-area--invalid:has(~.cds--slug),.cds--text-area--invalid:has(~.cds--text-area__inner-wrapper--decorator>*),.cds--text-area--warn:has(~.cds--ai-label),.cds--text-area--warn:has(~.cds--slug),.cds--text-area--warn:has(~.cds--text-area__inner-wrapper--decorator>*){padding-inline-end:4rem}.cds--text-area--invalid~.cds--ai-label,.cds--text-area--invalid~.cds--slug,.cds--text-area--invalid~.cds--text-area__inner-wrapper--decorator>*,.cds--text-area--warn~.cds--ai-label,.cds--text-area--warn~.cds--slug,.cds--text-area--warn~.cds--text-area__inner-wrapper--decorator>*{inset-inline-end:2.5rem}.cds--text-area--invalid~.cds--ai-label.cds--ai-label--revert,.cds--text-area--invalid~.cds--slug.cds--slug--revert,.cds--text-area--invalid~.cds--text-area__inner-wrapper--decorator>.cds--ai-label.cds--ai-label--revert,.cds--text-area--warn~.cds--ai-label.cds--ai-label--revert,.cds--text-area--warn~.cds--slug.cds--slug--revert,.cds--text-area--warn~.cds--text-area__inner-wrapper--decorator>.cds--ai-label.cds--ai-label--revert{inset-inline-end:2rem}.cds--text-area.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--text-area.cds--skeleton:active,.cds--text-area.cds--skeleton:focus,.cds--text-area.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--text-area.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--text-area.cds--skeleton:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--text-area.cds--skeleton{background:CanvasText}.cds--text-area.cds--skeleton:before{background:Canvas;forced-color-adjust:none}}.cds--text-area.cds--skeleton{block-size:6.25rem;inline-size:100%}.cds--text-area.cds--skeleton::-moz-placeholder{color:transparent}.cds--text-area.cds--skeleton::placeholder{color:transparent}.cds--text-area__label-wrapper{display:flex;inline-size:100%;justify-content:space-between;position:relative}:host(cds-textarea){--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px;outline:none}:host(cds-textarea) ::slotted(cds-ai-label),:host(cds-textarea) ::slotted(cds-slug){inset-block-start:.75rem;inset-inline-end:1rem;position:absolute}:host(cds-textarea) ::slotted(cds-ai-label[revert-active]),:host(cds-textarea) ::slotted(cds-slug[revert-active]){inset-block-start:.25rem;inset-inline-end:.5rem;transform:translate(0)}:host(cds-textarea) textarea:not([cols]),:host(cds-textarea) textarea[cols="0"],:host(cds-textarea:not([cols])),:host(cds-textarea[cols="0"]){inline-size:100%}:host(cds-textarea[invalid]) .cds--text-area__wrapper--decorator .cds--text-area,:host(cds-textarea[warn]) .cds--text-area__wrapper--decorator .cds--text-area{padding-inline-end:4rem}:host(cds-textarea[invalid]) ::slotted(cds-ai-label),:host(cds-textarea[invalid]) ::slotted(cds-slug),:host(cds-textarea[warn]) ::slotted(cds-ai-label),:host(cds-textarea[warn]) ::slotted(cds-slug){inset-inline-end:2.5rem}:host(cds-textarea[invalid]) ::slotted(cds-ai-label[revert-active]),:host(cds-textarea[invalid]) ::slotted(cds-slug[revert-active]),:host(cds-textarea[warn]) ::slotted(cds-ai-label[revert-active]),:host(cds-textarea[warn]) ::slotted(cds-slug[revert-active]){inset-inline-end:2rem}:host(cds-textarea[ai-label]) .cds--text-area__wrapper--decorator{background-image:linear-gradient(0deg,var(--cds-ai-aura-start-sm,rgba(69,137,255,.16)) 0,15%,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%,transparent 100%);border-block-end-color:var(--cds-ai-border-strong,#4589ff)}.cds--text-area__wrapper--cols{display:inline-flex}']);

// node_modules/@carbon/web-components/es/components/textarea/textarea.js
var CDSTextarea = class CDSTextarea2 extends CDSTextInput$1 {
  constructor() {
    super(...arguments);
    this.isFluid = false;
    this.counterMode = "character";
    this.id = "";
    this.pattern = "";
    this.required = false;
    this.rows = 4;
    this._prevCounterMode = this.counterMode;
  }
  /**
   * Manually handles maxCount for counterMode = 'word'
   * @param event The keyboard event.
   */
  _onKeyDown(evt) {
    var _a, _b;
    if (!this.disabled && this.enableCounter && this.counterMode === "word") {
      const currentWordCount = ((_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a.match(new RegExp("\\p{L}+", "gu"))) === null || _b === void 0 ? void 0 : _b.length) || 0;
      if (this.maxCount && currentWordCount >= this.maxCount && evt.key === " " || this.maxCount && currentWordCount >= this.maxCount && evt.key === "Enter") {
        evt.preventDefault();
      }
    }
  }
  /**
   * Handles `onPaste` event on the `<input>`.
   * Manually handles maxCount for counterMode = 'word' when
   * the user is pasting text
   *
   * @param event The clipboard event.
   */
  _onPaste(evt) {
    var _a;
    if (this.counterMode === "word" && this.enableCounter && typeof this.maxCount !== "undefined") {
      const existingWords = this._textarea.value.match(new RegExp("\\p{L}+", "gu")) || [];
      const pastedWords = ((_a = evt.clipboardData) === null || _a === void 0 ? void 0 : _a.getData("Text").match(new RegExp("\\p{L}+", "gu"))) || [];
      const totalWords = existingWords.length + pastedWords.length;
      if (totalWords > this.maxCount) {
        evt.preventDefault();
        const allowedWords = existingWords.concat(pastedWords).slice(0, this.maxCount);
        this._textarea.value = allowedWords.join(" ");
        this._textarea.dispatchEvent(new InputEvent("input", {
          inputType: "insertFromPaste",
          data: allowedWords.join(" "),
          bubbles: true
        }));
      }
    }
  }
  /**
   * Handles `oninput` event on the `<input>`.
   *
   * @param event The event.
   * @param event.target The event target.
   */
  _handleInput({ target }) {
    this.value = target.value;
  }
  render() {
    var _a, _b, _c, _d;
    const { enableCounter, maxCount } = this;
    const textCount = (_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
    const wordCount = ((_d = (_c = this.value) === null || _c === void 0 ? void 0 : _c.match(new RegExp("\\p{L}+", "gu"))) === null || _d === void 0 ? void 0 : _d.length) || 0;
    const invalidIcon = iconLoader(_16, {
      class: `${prefix}--text-area__invalid-icon`
    });
    const warnIcon = iconLoader(_162, {
      class: `${prefix}--text-area__invalid-icon ${prefix}--text-area__invalid-icon--warning`
    });
    const textareaClasses = e2({
      [`${prefix}--text-area`]: true,
      [`${prefix}--text-area--warn`]: this.warn,
      [`${prefix}--text-area--invalid`]: this.invalid,
      [`${prefix}--text-area__wrapper--decorator`]: this._hasAILabel
    });
    const textareaWrapperClasses = e2({
      [`${prefix}--text-area__wrapper`]: true,
      [`${prefix}--text-area__wrapper--cols`]: this.cols,
      [`${prefix}--text-area__wrapper--warn`]: this.warn,
      [`${prefix}--text-area__wrapper--readonly`]: this.readonly
    });
    const labelClasses = e2({
      [`${prefix}--label`]: true,
      [`${prefix}--visually-hidden`]: this.hideLabel,
      [`${prefix}--label--disabled`]: this.disabled
    });
    const counterClasses = e2({
      [`${prefix}--label`]: true,
      [`${prefix}--label--disabled`]: this.disabled,
      [`${prefix}--text-area__label-counter`]: true
    });
    const helperTextClasses = e2({
      [`${prefix}--form__helper-text`]: true,
      [`${prefix}--form__helper-text--disabled`]: this.disabled
    });
    const counter = enableCounter && maxCount ? b` <label class="${counterClasses}">
            <slot name="label-text"
              >${this.counterMode === "word" ? wordCount : textCount}/${maxCount}</slot
            >
          </label>` : null;
    const icon = () => {
      if (this.invalid) {
        return invalidIcon;
      } else if (this.warn && !this.invalid) {
        return warnIcon;
      }
      return null;
    };
    const helper = b`
      <div class="${helperTextClasses}" id="helper-text">
        <slot name="helper-text">${this.helperText}</slot>
      </div>
    `;
    const normalizedProps = {
      invalid: this.invalid,
      warn: this.warn,
      "slot-name": this.invalid ? "invalid-text" : "warn-text",
      "slot-text": this.invalid ? this.invalidText : this.warnText
    };
    const validationMessage = b`
      <div
        class="${prefix}--form-requirement"
        ?hidden="${!normalizedProps.invalid && !normalizedProps.warn}">
        <slot name="${normalizedProps["slot-name"]}">
          ${normalizedProps["slot-text"]} ${this.isFluid ? icon() : null}
        </slot>
      </div>
    `;
    return b`
      <div class="${prefix}--text-area__label-wrapper">
        <label class="${labelClasses}" for="input">
          <slot name="label-text"> ${this.label} </slot>
        </label>
        ${counter}
      </div>
      <div class="${textareaWrapperClasses}" ?data-invalid="${this.invalid}">
        ${!this.isFluid ? icon() : null}
        <textarea
          autocomplete="${this.autocomplete}"
          ?autofocus="${this.autofocus}"
          class="${textareaClasses}"
          cols="${o(this.cols)}"
          ?data-invalid="${this.invalid}"
          ?disabled="${this.disabled}"
          id="input"
          name="${ifNonEmpty(this.name)}"
          pattern="${ifNonEmpty(this.pattern)}"
          placeholder="${ifNonEmpty(this.placeholder)}"
          ?readonly="${this.readonly}"
          ?required="${this.required}"
          rows="${o(this.rows)}"
          .value="${this.value}"
          maxlength="${this.counterMode === "character" ? ifNonEmpty(this.maxCount) : ""}"
          @keydown="${this._onKeyDown}"
          @paste="${this._onPaste}"
          @input="${this._handleInput}"></textarea>
        <slot name="ai-label" @slotchange="${this._handleSlotChange}"></slot>
        <slot name="slug" @slotchange="${this._handleSlotChange}"></slot>
        ${this.isFluid ? b`
              <hr class="${prefix}--text-area__divider" />
              ${validationMessage}
            ` : null}
      </div>
      ${/* Non-fluid: validation and helper outside field wrapper */
    ""}
      ${!this.isFluid ? b` ${helper} ${validationMessage} ` : null}
    `;
  }
  updated() {
    var _a, _b;
    (_a = super.updated) === null || _a === void 0 ? void 0 : _a.call(this);
    if (this.counterMode !== this._prevCounterMode) {
      const textarea = this._textarea;
      if (textarea) {
        if (this.counterMode === "character") {
          textarea.setAttribute("maxlength", String(this.maxCount));
        } else {
          textarea.removeAttribute("maxlength");
        }
      }
      this._prevCounterMode = this.counterMode;
    }
    const wrapper = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(`.${prefix}--text-area__wrapper`);
    if (!wrapper)
      return;
    this._resizeObserver = new ResizeObserver(() => {
      this._measureWrapper();
    });
    this._resizeObserver.observe(wrapper);
  }
  /**
   * Measures the width of the wrapper and applies that to the max-width of the
   * helper-text and invalid/warn-text
   */
  _measureWrapper() {
    var _a, _b, _c;
    const wrapper = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`.${prefix}--text-area__wrapper`);
    const wrapperWidth = wrapper === null || wrapper === void 0 ? void 0 : wrapper.scrollWidth;
    const helper = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(`.${prefix}--form__helper-text`);
    const requirement = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector(`.${prefix}--form-requirement`);
    [helper, requirement].forEach((el) => {
      if (el) {
        el.style.maxWidth = `${wrapperWidth}px`;
        el.style.overflowWrap = "break-word";
      }
    });
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = super.disconnectedCallback) === null || _a === void 0 ? void 0 : _a.call(this);
    (_b = this._resizeObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
  }
};
CDSTextarea.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSTextarea.styles = styles;
__decorate([
  n({ type: Number })
], CDSTextarea.prototype, "cols", void 0);
__decorate([
  n({ type: Boolean })
], CDSTextarea.prototype, "isFluid", void 0);
__decorate([
  n({
    type: String,
    reflect: true,
    hasChanged(newVal, oldVal) {
      if ((newVal === "character" || newVal === "word") && newVal !== oldVal) {
        return true;
      }
      return false;
    },
    attribute: "counter-mode"
  })
], CDSTextarea.prototype, "counterMode", void 0);
__decorate([
  n()
], CDSTextarea.prototype, "id", void 0);
__decorate([
  n()
], CDSTextarea.prototype, "pattern", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTextarea.prototype, "required", void 0);
__decorate([
  n()
], CDSTextarea.prototype, "rows", void 0);
__decorate([
  e("textarea")
], CDSTextarea.prototype, "_textarea", void 0);
CDSTextarea = __decorate([
  carbonElement(`${prefix}-textarea`)
], CDSTextarea);
var CDSTextarea$1 = CDSTextarea;

export {
  styles,
  CDSTextarea$1
};
