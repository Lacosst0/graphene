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
  find,
  forEach
} from "./chunk-3QPROXNA.js";
import {
  HostListener
} from "./chunk-5HWAKYGL.js";
import {
  HostListenerMixin
} from "./chunk-TGGEFEEZ.js";
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
  i,
  i2
} from "./chunk-3GZFZEMV.js";

// node_modules/@carbon/web-components/es/components/radio-button/defs.js
var RADIO_BUTTON_LABEL_POSITION;
(function(RADIO_BUTTON_LABEL_POSITION2) {
  RADIO_BUTTON_LABEL_POSITION2["LEFT"] = "left";
  RADIO_BUTTON_LABEL_POSITION2["RIGHT"] = "right";
})(RADIO_BUTTON_LABEL_POSITION || (RADIO_BUTTON_LABEL_POSITION = {}));
var RADIO_BUTTON_ORIENTATION;
(function(RADIO_BUTTON_ORIENTATION2) {
  RADIO_BUTTON_ORIENTATION2["HORIZONTAL"] = "horizontal";
  RADIO_BUTTON_ORIENTATION2["VERTICAL"] = "vertical";
})(RADIO_BUTTON_ORIENTATION || (RADIO_BUTTON_ORIENTATION = {}));

// node_modules/@carbon/web-components/es/components/radio-button/radio-button.scss.js
var styles = i(['@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--assistive-text,.cds--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-background:var(--cds-layer-background-01,#fff);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-background:var(--cds-layer-background-02,#f4f4f4);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-background:var(--cds-layer-background-03,#fff);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}.cds--layer-one.cds--layer__with-background,.cds--layer-three.cds--layer__with-background,.cds--layer-two.cds--layer__with-background{background-color:var(--cds-layer-background)}input:-webkit-autofill,input:-webkit-autofill:focus,input:-webkit-autofill:hover,textarea:-webkit-autofill,textarea:-webkit-autofill:focus,textarea:-webkit-autofill:hover{box-shadow:0 0 0 1000px var(--cds-field) inset;-webkit-text-fill-color:var(--cds-text-primary,#161616)}.cds--fieldset{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--fieldset *,.cds--fieldset :after,.cds--fieldset :before{box-sizing:inherit}.cds--form-item,:host(cds-radio-button-group){align-items:flex-start;display:flex;flex:1 1 auto;flex-direction:column;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--label html{font-size:100%}.cds--label body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--label code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--label strong{font-weight:600}.cds--label{color:var(--cds-text-secondary,#525252);display:inline-block;font-weight:var(--cds-label-01-font-weight,400);font-weight:400;line-height:var(--cds-label-01-line-height,1.33333);line-height:1rem;margin-block-end:.5rem;vertical-align:baseline}.cds--label,.cds--label .cds--toggletip-label{font-size:var(--cds-label-01-font-size,.75rem);letter-spacing:var(--cds-label-01-letter-spacing,.32px)}.cds--label .cds--toggletip-label{font-weight:var(--cds-label-01-font-weight,400);line-height:var(--cds-label-01-line-height,1.33333)}.cds--label--no-margin{margin-block-end:0}.cds--label+.cds--tooltip{inset-block-start:.2rem;inset-inline-start:.5rem;position:relative}.cds--label+.cds--tooltip .cds--tooltip__trigger{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--label+.cds--tooltip .cds--tooltip__trigger *,.cds--label+.cds--tooltip .cds--tooltip__trigger :after,.cds--label+.cds--tooltip .cds--tooltip__trigger :before{box-sizing:inherit}.cds--label+.cds--tooltip .cds--tooltip__trigger::-moz-focus-inner{border:0}.cds--label+.cds--tooltip .cds--tooltip__trigger{align-items:center;display:flex;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);justify-content:center;letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}.cds--label+.cds--tooltip .cds--tooltip__trigger:focus{outline:1px solid var(--cds-focus,#0f62fe)}.cds--label+.cds--tooltip .cds--tooltip__trigger svg{fill:var(--cds-icon-secondary,#525252)}.cds--label+.cds--tooltip .cds--tooltip__trigger svg :hover{fill:var(--cds-icon-primary,#161616)}.cds--label+.cds--toggletip{inset-block-start:.2rem;inset-inline-start:.5rem}.cds--label.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--label.cds--skeleton:active,.cds--label.cds--skeleton:focus,.cds--label.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--label.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--label.cds--skeleton:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--label.cds--skeleton{background:CanvasText}.cds--label.cds--skeleton:before{background:Canvas;forced-color-adjust:none}}.cds--label.cds--skeleton{block-size:.875rem;inline-size:4.6875rem}input[type=number],input[type=text].cds--number{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif}.cds--combo-box[data-invalid]:not(.cds--multi-select--selected) .cds--text-input:not(:focus),.cds--list-box[data-invalid]:not(.cds--multi-select--invalid--focused,.cds--combo-box--invalid--focused),.cds--number[data-invalid] input[type=number]:not(:focus),.cds--number[data-invalid] input[type=text]:not(:focus),.cds--select-input__wrapper[data-invalid] .cds--select-input:not(:focus),.cds--text-area__wrapper[data-invalid]>.cds--text-area--invalid:not(:focus),.cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline:2px solid var(--cds-support-error,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.cds--combo-box[data-invalid]:not(.cds--multi-select--selected) .cds--text-input:not(:focus),.cds--list-box[data-invalid]:not(.cds--multi-select--invalid--focused,.cds--combo-box--invalid--focused),.cds--number[data-invalid] input[type=number]:not(:focus),.cds--number[data-invalid] input[type=text]:not(:focus),.cds--select-input__wrapper[data-invalid] .cds--select-input:not(:focus),.cds--text-area__wrapper[data-invalid]>.cds--text-area--invalid:not(:focus),.cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline-style:dotted}}.cds--date-picker-input__wrapper--invalid~.cds--form-requirement,.cds--date-picker-input__wrapper--warn~.cds--form-requirement,.cds--date-picker-input__wrapper~.cds--form-requirement,.cds--list-box--warning~.cds--form-requirement,.cds--list-box[data-invalid]~.cds--form-requirement,.cds--number[data-invalid] .cds--number__input-wrapper~.cds--form-requirement,.cds--number__input-wrapper--warning~.cds--form-requirement,.cds--select--warning .cds--select-input__wrapper~.cds--form-requirement,.cds--select-input__wrapper[data-invalid]~.cds--form-requirement,.cds--text-area__wrapper--warn~.cds--form-requirement,.cds--text-area__wrapper[data-invalid]~.cds--form-requirement,.cds--text-input__field-wrapper--warning>.cds--text-input~.cds--form-requirement,.cds--text-input__field-wrapper--warning~.cds--form-requirement,.cds--text-input__field-wrapper[data-invalid]~.cds--form-requirement,.cds--time-picker--invalid~.cds--form-requirement,.cds--time-picker--warning~.cds--form-requirement,.cds--time-picker[data-invalid]~.cds--form-requirement,input[data-invalid]~.cds--form-requirement{display:block;font-weight:400;max-block-size:12.5rem;overflow:visible}.cds--select--inline.cds--select--warning .cds--select-input--inline__wrapper~.cds--form-requirement,.cds--select-input--inline__wrapper[data-invalid]~.cds--form-requirement{display:inline-flex;inline-size:100%;margin:0;margin-block-end:0;max-block-size:100%;overflow:visible;padding-inline-start:.5rem}.cds--date-picker-input__wrapper--invalid~.cds--form-requirement,.cds--date-picker-input__wrapper~.cds--form-requirement,.cds--list-box[data-invalid]~.cds--form-requirement,.cds--number[data-invalid] .cds--number__input-wrapper~.cds--form-requirement,.cds--select-input--inline__wrapper[data-invalid]~.cds--form-requirement,.cds--select-input__wrapper[data-invalid]~.cds--form-requirement,.cds--text-area__wrapper[data-invalid]~.cds--form-requirement,.cds--text-input__field-wrapper[data-invalid]~.cds--form-requirement,.cds--time-picker--invalid~.cds--form-requirement,.cds--time-picker[data-invalid]~.cds--form-requirement,input[data-invalid]~.cds--form-requirement{color:var(--cds-text-error,#da1e28)}.cds--form--fluid .cds--text-input__field-wrapper--warning,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]{display:block}.cds--form--fluid input[data-invalid]{outline:none}.cds--form--fluid .cds--form-requirement{margin:0;padding:.5rem 2.5rem .5rem 1rem}input:not(output,[data-invalid]):-moz-ui-invalid{box-shadow:none}.cds--form-requirement html{font-size:100%}.cds--form-requirement body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--form-requirement code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--form-requirement strong{font-weight:600}.cds--form-requirement{display:none;font-size:var(--cds-helper-text-01-font-size,.75rem);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333);margin:.25rem 0 0;max-block-size:0;overflow:hidden}.cds--select--inline .cds--form__helper-text{margin-block-start:0}.cds--form__helper-text{color:var(--cds-text-helper,#6f6f6f);font-size:var(--cds-helper-text-01-font-size,.75rem);inline-size:100%;letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333);margin-block-start:.25rem;opacity:1;z-index:0}.cds--form__helper-text--disabled,.cds--label--disabled,fieldset[disabled] .cds--form__helper-text,fieldset[disabled] .cds--label{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--radio-button-group{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--radio-button-group *,.cds--radio-button-group :after,.cds--radio-button-group :before{box-sizing:inherit}.cds--radio-button-group{align-items:center;display:flex;position:relative}.cds--label+.cds--form-item .cds--radio-button-group,.cds--label+:host(cds-radio-button-group) .cds--radio-button-group{margin-block-start:0}.cds--radio-button-group--vertical,:host(cds-radio-button-group[orientation=vertical]){align-items:flex-start;flex-direction:column}.cds--radio-button-group--vertical.cds--radio-button-group--label-left{align-items:flex-end}.cds--radio-button-group--vertical .cds--radio-button__label,:host(cds-radio-button-group[orientation=vertical]) .cds--radio-button__label{margin-inline-end:0}.cds--radio-button-group--vertical .cds--radio-button__label:not(:last-of-type),:host(cds-radio-button-group[orientation=vertical]) .cds--radio-button__label:not(:last-of-type){margin-block-end:.5rem}.cds--radio-button{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;margin-block-start:.9rem;margin-inline-start:.63rem;visibility:inherit;white-space:nowrap}.cds--radio-button__label{align-items:center;cursor:pointer;display:flex;margin-inline-end:1rem}.cds--radio-button__label-text{flex:1;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--radio-button__appearance{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--radio-button__appearance *,.cds--radio-button__appearance :after,.cds--radio-button__appearance :before{box-sizing:inherit}.cds--radio-button__appearance{background-color:transparent;block-size:1.125rem;border:1px solid var(--cds-icon-primary,#161616);border-radius:50%;flex-shrink:0;inline-size:1.125rem;margin-block:.0625rem .125rem;margin-inline:.125rem .625rem}.cds--radio-button-group--vertical .cds--radio-button__appearance,:host(cds-radio-button-group[orientation=vertical]) .cds--radio-button__appearance{margin-block:0}.cds--radio-button:checked+.cds--radio-button__label .cds--radio-button__appearance{align-items:center;border-color:var(--cds-icon-primary,#161616);display:flex;justify-content:center}.cds--radio-button:checked+.cds--radio-button__label .cds--radio-button__appearance:before{background-color:var(--cds-icon-primary,#161616);block-size:100%;border-radius:50%;content:"";display:inline-block;inline-size:100%;position:relative;transform:scale(.5)}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--radio-button:checked+.cds--radio-button__label .cds--radio-button__appearance:before{background-color:ButtonText}}@media print{.cds--radio-button:checked+.cds--radio-button__label .cds--radio-button__appearance:before{-webkit-print-color-adjust:exact;print-color-adjust:exact}}.cds--radio-button:disabled+.cds--radio-button__label{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed}.cds--radio-button:disabled+.cds--radio-button__label .cds--radio-button__appearance,.cds--radio-button:disabled:checked+.cds--radio-button__label .cds--radio-button__appearance{border-color:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--radio-button:disabled+.cds--radio-button__label .cds--radio-button__appearance:before,.cds--radio-button:disabled:checked+.cds--radio-button__label .cds--radio-button__appearance:before{background-color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--radio-button-group--readonly .cds--radio-button+.cds--radio-button__label .cds--radio-button__appearance,:host(cds-radio-button[readOnly]) .cds--radio-button+.cds--radio-button__label .cds--radio-button__appearance{border-color:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--radio-button-group--readonly .cds--radio-button__label,:host(cds-radio-button[readOnly]) .cds--radio-button__label{cursor:default}.cds--radio-button-group--readonly .cds--radio-button__label-text,:host(cds-radio-button[readOnly]) .cds--radio-button__label-text{cursor:text;-webkit-user-select:text;-moz-user-select:text;user-select:text}.cds--radio-button-group--invalid .cds--radio-button+.cds--radio-button__label .cds--radio-button__appearance{border-color:var(--cds-support-error,#da1e28)}.cds--radio-button__validation-msg{align-items:flex-end;display:none;margin-block-start:.375rem}.cds--radio-button__invalid-icon{fill:var(--cds-support-error,#da1e28);margin-inline:.1875rem .0625rem}.cds--radio-button__invalid-icon--warning{fill:var(--cds-support-warning,#f1c21b)}.cds--radio-button__invalid-icon--warning path:first-of-type{fill:#000}.cds--radio-button-group--invalid+.cds--radio-button__validation-msg,.cds--radio-button-group--warning+.cds--radio-button__validation-msg{display:flex}.cds--radio-button-group--invalid+.cds--radio-button__validation-msg .cds--form-requirement,.cds--radio-button-group--warning+.cds--radio-button__validation-msg .cds--form-requirement{display:block;margin-block-start:0;margin-inline-start:.5rem;max-block-size:100%;overflow:visible}.cds--radio-button-group--invalid+.cds--radio-button__validation-msg .cds--form-requirement{color:var(--cds-text-error,#da1e28)}.cds--radio-button-group~.cds--form__helper-text{margin-block-start:.375rem}.cds--radio-button:focus+.cds--radio-button__label .cds--radio-button__appearance{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:1.5px}.cds--radio-button__label.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--radio-button__label.cds--skeleton:active,.cds--radio-button__label.cds--skeleton:focus,.cds--radio-button__label.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--radio-button__label.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--radio-button__label.cds--skeleton:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--radio-button__label.cds--skeleton{background:CanvasText}.cds--radio-button__label.cds--skeleton:before{background:Canvas;forced-color-adjust:none}}.cds--radio-button__label.cds--skeleton{block-size:1.125rem;inline-size:6.25rem}.cds--radio-button__label.cds--skeleton .cds--radio-button__appearance{display:none}.cds--radio-button-wrapper .cds--radio-button__label,:host(cds-radio-button) .cds--radio-button__label{align-items:flex-start;display:flex;justify-content:center;margin:0}.cds--radio-button-wrapper:not(:last-of-type),:not(:last-of-type):host(cds-radio-button){margin-inline-end:1rem}.cds--radio-button-group--vertical .cds--radio-button-wrapper,.cds--radio-button-group--vertical :host(cds-radio-button),:host(cds-radio-button-group[orientation=vertical]) .cds--radio-button-wrapper,:host(cds-radio-button-group[orientation=vertical]) :host(cds-radio-button){margin-block-end:.375rem;margin-inline-end:0}.cds--radio-button-group--vertical .cds--radio-button-wrapper .cds--radio-button__label,.cds--radio-button-group--vertical :host(cds-radio-button) .cds--radio-button__label,:host(cds-radio-button-group[orientation=vertical]) .cds--radio-button-wrapper .cds--radio-button__label,:host(cds-radio-button-group[orientation=vertical]) :host(cds-radio-button) .cds--radio-button__label{padding-block-start:.125rem}.cds--radio-button-group--label-right .cds--radio-button__label,.cds--radio-button-wrapper.cds--radio-button-wrapper--label-right .cds--radio-button__label{flex-direction:row}.cds--radio-button-group--label-left .cds--radio-button__label,.cds--radio-button-wrapper.cds--radio-button-wrapper--label-left .cds--radio-button__label,:host(cds-radio-button-group[label-position=left]) .cds--radio-button__label{flex-direction:row-reverse}.cds--radio-button-group--label-left .cds--radio-button__appearance,.cds--radio-button-wrapper.cds--radio-button-wrapper--label-left .cds--radio-button__appearance,:host(cds-radio-button-group[label-position=left]) .cds--radio-button__appearance{margin-inline:.5rem 0}.cds--radio-button-group--decorator legend.cds--label,.cds--radio-button-group--slug legend.cds--label,.cds--radio-button-wrapper--decorator .cds--radio-button__label-text,.cds--radio-button-wrapper--slug .cds--radio-button__label-text{display:flex}.cds--radio-button-group--decorator legend.cds--label .cds--radio-button-group-inner--decorator>*,.cds--radio-button-group--slug legend.cds--label .cds--ai-label,.cds--radio-button-group--slug legend.cds--label .cds--slug,.cds--radio-button-wrapper--decorator .cds--radio-button__label-text .cds--radio-button-wrapper-inner--decorator>*,.cds--radio-button-wrapper--slug .cds--radio-button__label-text .cds--ai-label,.cds--radio-button-wrapper--slug .cds--radio-button__label-text .cds--slug{margin-inline-start:.5rem}.cds--radio-button-wrapper--decorator .cds--radio-button__label-text .cds--ai-label__button--inline,.cds--radio-button-wrapper--slug .cds--radio-button__label-text .cds--ai-label__button--inline,.cds--radio-button-wrapper--slug .cds--radio-button__label-text .cds--slug__button--inline{line-height:inherit;margin-block-start:-.0625rem}:host(cds-radio-button-group[invalid]:not([disabled])) .cds--radio-button__validation-msg,:host(cds-radio-button-group[warn]:not([disabled])) .cds--radio-button__validation-msg{display:flex}:host(cds-radio-button-group[invalid]:not([disabled])) .cds--radio-button__validation-msg .cds--form-requirement,:host(cds-radio-button-group[warn]:not([disabled])) .cds--radio-button__validation-msg .cds--form-requirement{display:block;margin-block-start:0;margin-inline-start:.5rem;max-block-size:100%;overflow:visible}:host(cds-radio-button-group[invalid]:not([disabled])) .cds--form-requirement{color:var(--cds-text-error,#da1e28)}:host(cds-radio-button){outline:none}:host(cds-radio-button) .cds--radio-button__label{flex-direction:row}:host(cds-radio-button:not(:last-of-type)){margin-inline-end:1rem}:host(cds-radio-button[orientation=vertical]){margin-block-end:.375rem;margin-inline-end:0}:host(cds-radio-button[invalid]:not([readOnly]):not([disabled]):not([disabledItem])) .cds--radio-button__appearance{border-color:var(--cds-support-error,#da1e28)!important}:host(cds-radio-button[data-table]) .cds--radio-button__label{inline-size:1.75rem}:host(cds-radio-button[data-table]) .cds--radio-button__appearance{margin-inline-end:-.125rem}:host(cds-radio-button[disabledItem]) .cds--radio-button__label,:host(cds-radio-button[disabled]) .cds--radio-button__label{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed}:host(cds-radio-button[disabledItem]) .cds--radio-button__appearance,:host(cds-radio-button[disabled]) .cds--radio-button__appearance{border-color:var(--cds-border-disabled,#c6c6c6)}:host(cds-radio-button[disabledItem]) .cds--radio-button__appearance:before,:host(cds-radio-button[disabled]) .cds--radio-button__appearance:before{background-color:var(--cds-border-disabled,#c6c6c6)}:host(cds-radio-button[label-position=left]) .cds--radio-button__label{flex-direction:row-reverse}:host(cds-radio-button[label-position=left]) .cds--radio-button__appearance{margin-inline:.5rem 0}:host(cds-radio-button[ai-label]) .cds--radio-button__label-text{display:flex}:host(cds-radio-button[ai-label]) ::slotted(cds-ai-label[inline]),:host(cds-radio-button[ai-label]) ::slotted(cds-slug[inline]){line-height:inherit;margin-block-start:-.0625rem}:host(cds-radio-button-group) .cds--radio-button-group--slug ::slotted(cds-ai-label),:host(cds-radio-button-group) .cds--radio-button-group--slug ::slotted(cds-slug),:host(cds-radio-button[ai-label]) ::slotted(cds-ai-label),:host(cds-radio-button[ai-label]) ::slotted(cds-slug){margin-inline-start:.5rem}']);

// node_modules/@carbon/web-components/es/components/radio-button/radio-button-group.js
var CDSRadioButtonGroup = class CDSRadioButtonGroup2 extends FormMixin(HostListenerMixin(i2)) {
  constructor() {
    super(...arguments);
    this._handleAfterChangeRadioButton = (event) => {
      if (this.readOnly) {
        return;
      }
      const { selectorRadioButton } = this.constructor;
      const selected = find(this.querySelectorAll(selectorRadioButton), (elem) => elem.checked);
      const oldValue = this.value;
      this.value = selected && selected.value;
      if (oldValue !== this.value) {
        const { eventChange } = this.constructor;
        this.dispatchEvent(new CustomEvent(eventChange, {
          bubbles: true,
          composed: true,
          detail: {
            value: this.value,
            name: this.name,
            event
          }
        }));
      }
    };
    this._hasAILabel = false;
    this.disabled = false;
    this.labelPosition = RADIO_BUTTON_LABEL_POSITION.RIGHT;
    this.legendText = "";
    this.warn = false;
    this.warnText = "";
    this.invalid = false;
    this.invalidText = "";
    this.orientation = RADIO_BUTTON_ORIENTATION.HORIZONTAL;
    this.readOnly = false;
    this.required = false;
  }
  _handleFormdata(event) {
    const { formData } = event;
    const { disabled, name, value } = this;
    if (!disabled && typeof name !== "undefined" && typeof value !== "undefined") {
      formData.append(name, value);
    }
  }
  /**
   * Handles `slotchange` event.
   */
  _handleSlotChange({ target }) {
    const hasContent = target.assignedNodes().filter((elem) => elem.matches !== void 0 ? elem.matches(this.constructor.aiLabelItem) || // remove reference to slug in v12
    elem.matches(this.constructor.slugItem) : false);
    this._hasAILabel = Boolean(hasContent);
    hasContent[0].setAttribute("size", "mini");
    this.requestUpdate?.();
  }
  updated(changedProperties) {
    const { selectorRadioButton } = this.constructor;
    [
      "disabled",
      "labelPosition",
      "orientation",
      "readOnly",
      "name",
      "required"
    ].forEach((name) => {
      if (changedProperties.has(name)) {
        const { [name]: value } = this;
        forEach(this.querySelectorAll(selectorRadioButton), (elem) => {
          elem[name] = value;
        });
      }
    });
    if (changedProperties.has("value")) {
      const { value } = this;
      forEach(this.querySelectorAll(selectorRadioButton), (elem) => {
        elem.checked = value === elem.value;
      });
    }
    if (changedProperties.has("invalid")) {
      forEach(this.querySelectorAll(selectorRadioButton), (elem) => {
        elem.invalid = this.invalid;
      });
    }
  }
  render() {
    const { readOnly, invalid, invalidText, warn, warnText, disabled, orientation, legendText, helperText, _hasAILabel: hasAILabel, _handleSlotChange: handleSlotChange } = this;
    const showWarning = !readOnly && !disabled && !invalid && warn;
    const showHelper = !invalid && !disabled && !warn;
    const invalidIcon = iconLoader(_16, {
      class: `${prefix}--radio-button__invalid-icon`
    });
    const warnIcon = iconLoader(_162, {
      class: `${prefix}--radio-button__invalid-icon ${prefix}--radio-button__invalid-icon--warning`
    });
    const helper = helperText ? b`<div class="${prefix}--form__helper-text">${helperText}</div>` : null;
    const fieldsetClasses = e({
      [`${prefix}--radio-button-group`]: true,
      [`${prefix}--radio-button-group--readonly`]: readOnly,
      [`${prefix}--radio-button-group--${orientation}`]: orientation === "vertical",
      [`${prefix}--radio-button-group--invalid`]: !readOnly && !disabled && invalid,
      [`${prefix}--radio-button-group--warning`]: showWarning,
      [`${prefix}--radio-button-group--slug`]: hasAILabel
    });
    return b` <fieldset
        class="${fieldsetClasses}"
        ?disabled="${disabled}"
        aria-readonly="${readOnly}">
        ${legendText ? b` <legend class="${prefix}--label">
              ${legendText}
              <slot name="ai-label" @slotchange="${handleSlotChange}"></slot>
              <slot name="slug" @slotchange="${handleSlotChange}"></slot>
            </legend>` : ``}
        <slot></slot>
      </fieldset>
      <div class="${prefix}--radio-button__validation-msg">
        ${!readOnly && !disabled && invalid ? b`
              ${invalidIcon}
              <div class="${prefix}--form-requirement">${invalidText}</div>
            ` : null}
        ${showWarning ? b`${warnIcon}
              <div class="${prefix}--form-requirement">${warnText}</div>` : null}
      </div>
      ${showHelper ? helper : null}`;
  }
  /**
   * A selector that will return the radio buttons.
   */
  static get selectorRadioButton() {
    return `${prefix}-radio-button`;
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
   * The name of the custom event fired after this radio button group changes its selected item.
   */
  static get eventChange() {
    return `${prefix}-radio-button-group-changed`;
  }
  /**
   * The name of the custom event fired after a radio button changes its checked state.
   */
  static get eventChangeRadioButton() {
    return `${prefix}-radio-button-changed`;
  }
};
CDSRadioButtonGroup.styles = styles;
__decorate([
  HostListener("eventChangeRadioButton")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSRadioButtonGroup.prototype, "_handleAfterChangeRadioButton", void 0);
__decorate([
  n()
], CDSRadioButtonGroup.prototype, "defaultSelected", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSRadioButtonGroup.prototype, "disabled", void 0);
__decorate([
  n({ reflect: true, attribute: "label-position" })
], CDSRadioButtonGroup.prototype, "labelPosition", void 0);
__decorate([
  n({ reflect: true, attribute: "legend-text" })
], CDSRadioButtonGroup.prototype, "legendText", void 0);
__decorate([
  n({ attribute: "helper-text" })
], CDSRadioButtonGroup.prototype, "helperText", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSRadioButtonGroup.prototype, "warn", void 0);
__decorate([
  n({ attribute: "warn-text" })
], CDSRadioButtonGroup.prototype, "warnText", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSRadioButtonGroup.prototype, "invalid", void 0);
__decorate([
  n({ attribute: "invalid-text" })
], CDSRadioButtonGroup.prototype, "invalidText", void 0);
__decorate([
  n()
], CDSRadioButtonGroup.prototype, "name", void 0);
__decorate([
  n({ reflect: true })
], CDSRadioButtonGroup.prototype, "orientation", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSRadioButtonGroup.prototype, "readOnly", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSRadioButtonGroup.prototype, "required", void 0);
__decorate([
  n()
], CDSRadioButtonGroup.prototype, "value", void 0);
CDSRadioButtonGroup = __decorate([
  carbonElement(`${prefix}-radio-button-group`)
], CDSRadioButtonGroup);
var CDSRadioButtonGroup$1 = CDSRadioButtonGroup;

export {
  RADIO_BUTTON_LABEL_POSITION,
  RADIO_BUTTON_ORIENTATION,
  styles,
  CDSRadioButtonGroup$1
};
