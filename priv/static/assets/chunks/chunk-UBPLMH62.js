import {
  ifNonEmpty
} from "./chunk-2G6ZGNK6.js";
import {
  ValidityMixin
} from "./chunk-MCK3EHK6.js";
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
  iconLoader
} from "./chunk-TRPNDHDH.js";
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

// node_modules/@carbon/icons/es/view/16.js
var _163 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 16 16",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M15.5,7.8C14.3,4.7,11.3,2.6,8,2.5C4.7,2.6,1.7,4.7,0.5,7.8c0,0.1,0,0.2,0,0.3c1.2,3.1,4.1,5.2,7.5,5.3	c3.3-0.1,6.3-2.2,7.5-5.3C15.5,8.1,15.5,7.9,15.5,7.8z M8,12.5c-2.7,0-5.4-2-6.5-4.5c1-2.5,3.8-4.5,6.5-4.5s5.4,2,6.5,4.5	C13.4,10.5,10.6,12.5,8,12.5z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.3,3-3S9.7,5,8,5z M8,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,10,8,10z"
    }
  }],
  "name": "view",
  "size": 16
};

// node_modules/@carbon/icons/es/view--off/16.js
var _164 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 16 16",
    "fill": "currentColor",
    "width": 16,
    "height": 16
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M2.6,11.3l0.7-0.7C2.6,9.8,1.9,9,1.5,8c1-2.5,3.8-4.5,6.5-4.5c0.7,0,1.4,0.1,2,0.4l0.8-0.8C9.9,2.7,9,2.5,8,2.5	C4.7,2.6,1.7,4.7,0.5,7.8c0,0.1,0,0.2,0,0.3C1,9.3,1.7,10.4,2.6,11.3z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M6,7.9c0.1-1,0.9-1.8,1.8-1.8l0.9-0.9C7.2,4.7,5.5,5.6,5.1,7.2C5,7.7,5,8.3,5.1,8.8L6,7.9z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M15.5,7.8c-0.6-1.5-1.6-2.8-2.9-3.7L15,1.7L14.3,1L1,14.3L1.7,15l2.6-2.6c1.1,0.7,2.4,1,3.7,1.1c3.3-0.1,6.3-2.2,7.5-5.3	C15.5,8.1,15.5,7.9,15.5,7.8z M10,8c0,1.1-0.9,2-2,2c-0.3,0-0.7-0.1-1-0.3L9.7,7C9.9,7.3,10,7.6,10,8z M8,12.5c-1,0-2.1-0.3-3-0.8	l1.3-1.3c1.4,0.9,3.2,0.6,4.2-0.8c0.7-1,0.7-2.4,0-3.4l1.4-1.4c1.1,0.8,2,1.9,2.6,3.2C13.4,10.5,10.6,12.5,8,12.5z"
    }
  }],
  "name": "view--off",
  "size": 16
};

// node_modules/@carbon/web-components/es/components/text-input/defs.js
var INPUT_SIZE;
(function(INPUT_SIZE2) {
  INPUT_SIZE2["SMALL"] = "sm";
  INPUT_SIZE2["MEDIUM"] = "md";
  INPUT_SIZE2["LARGE"] = "lg";
  INPUT_SIZE2["EXTRA_LARGE"] = "xl";
})(INPUT_SIZE || (INPUT_SIZE = {}));
var INPUT_TOOLTIP_ALIGNMENT;
(function(INPUT_TOOLTIP_ALIGNMENT2) {
  INPUT_TOOLTIP_ALIGNMENT2["START"] = "start";
  INPUT_TOOLTIP_ALIGNMENT2["CENTER"] = "center";
  INPUT_TOOLTIP_ALIGNMENT2["END"] = "end";
})(INPUT_TOOLTIP_ALIGNMENT || (INPUT_TOOLTIP_ALIGNMENT = {}));
var INPUT_TOOLTIP_DIRECTION;
(function(INPUT_TOOLTIP_DIRECTION2) {
  INPUT_TOOLTIP_DIRECTION2["TOP"] = "top";
  INPUT_TOOLTIP_DIRECTION2["RIGHT"] = "right";
  INPUT_TOOLTIP_DIRECTION2["BOTTOM"] = "bottom";
  INPUT_TOOLTIP_DIRECTION2["LEFT"] = "left";
})(INPUT_TOOLTIP_DIRECTION || (INPUT_TOOLTIP_DIRECTION = {}));
var INPUT_TYPE;
(function(INPUT_TYPE2) {
  INPUT_TYPE2["EMAIL"] = "email";
  INPUT_TYPE2["PASSWORD"] = "password";
  INPUT_TYPE2["TEL"] = "tel";
  INPUT_TYPE2["TEXT"] = "text";
  INPUT_TYPE2["URL"] = "url";
})(INPUT_TYPE || (INPUT_TYPE = {}));

// node_modules/@carbon/web-components/es/components/text-input/text-input.scss.js
var styles = i(['@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--assistive-text,.cds--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-background:var(--cds-layer-background-01,#fff);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-background:var(--cds-layer-background-02,#f4f4f4);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-background:var(--cds-layer-background-03,#fff);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}.cds--layer-one.cds--layer__with-background,.cds--layer-three.cds--layer__with-background,.cds--layer-two.cds--layer__with-background{background-color:var(--cds-layer-background)}input:-webkit-autofill,input:-webkit-autofill:focus,input:-webkit-autofill:hover,textarea:-webkit-autofill,textarea:-webkit-autofill:focus,textarea:-webkit-autofill:hover{box-shadow:0 0 0 1000px var(--cds-field) inset;-webkit-text-fill-color:var(--cds-text-primary,#161616)}.cds--fieldset{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--fieldset *,.cds--fieldset :after,.cds--fieldset :before{box-sizing:inherit}.cds--form-item{align-items:flex-start;display:flex;flex:1 1 auto;flex-direction:column;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--label html{font-size:100%}.cds--label body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--label code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--label strong{font-weight:600}.cds--label{color:var(--cds-text-secondary,#525252);display:inline-block;font-weight:var(--cds-label-01-font-weight,400);font-weight:400;line-height:var(--cds-label-01-line-height,1.33333);line-height:1rem;margin-block-end:.5rem;vertical-align:baseline}.cds--label,.cds--label .cds--toggletip-label{font-size:var(--cds-label-01-font-size,.75rem);letter-spacing:var(--cds-label-01-letter-spacing,.32px)}.cds--label .cds--toggletip-label{font-weight:var(--cds-label-01-font-weight,400);line-height:var(--cds-label-01-line-height,1.33333)}.cds--label--no-margin{margin-block-end:0}.cds--label+.cds--tooltip{inset-block-start:.2rem;inset-inline-start:.5rem;position:relative}.cds--label+.cds--tooltip .cds--tooltip__trigger{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--label+.cds--tooltip .cds--tooltip__trigger *,.cds--label+.cds--tooltip .cds--tooltip__trigger :after,.cds--label+.cds--tooltip .cds--tooltip__trigger :before{box-sizing:inherit}.cds--label+.cds--tooltip .cds--tooltip__trigger::-moz-focus-inner{border:0}.cds--label+.cds--tooltip .cds--tooltip__trigger{align-items:center;display:flex;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);justify-content:center;letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}.cds--label+.cds--tooltip .cds--tooltip__trigger:focus{outline:1px solid var(--cds-focus,#0f62fe)}.cds--label+.cds--tooltip .cds--tooltip__trigger svg{fill:var(--cds-icon-secondary,#525252)}.cds--label+.cds--tooltip .cds--tooltip__trigger svg :hover{fill:var(--cds-icon-primary,#161616)}.cds--label+.cds--toggletip{inset-block-start:.2rem;inset-inline-start:.5rem}.cds--label.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--label.cds--skeleton:active,.cds--label.cds--skeleton:focus,.cds--label.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--label.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--label.cds--skeleton:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--label.cds--skeleton{background:CanvasText}.cds--label.cds--skeleton:before{background:Canvas;forced-color-adjust:none}}.cds--label.cds--skeleton{block-size:.875rem;inline-size:4.6875rem}input[type=number],input[type=text].cds--number{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif}.cds--combo-box[data-invalid]:not(.cds--multi-select--selected) .cds--text-input:not(:focus),.cds--list-box[data-invalid]:not(.cds--multi-select--invalid--focused,.cds--combo-box--invalid--focused),.cds--number[data-invalid] input[type=number]:not(:focus),.cds--number[data-invalid] input[type=text]:not(:focus),.cds--select-input__wrapper[data-invalid] .cds--select-input:not(:focus),.cds--text-area__wrapper[data-invalid]>.cds--text-area--invalid:not(:focus),.cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline:2px solid var(--cds-support-error,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.cds--combo-box[data-invalid]:not(.cds--multi-select--selected) .cds--text-input:not(:focus),.cds--list-box[data-invalid]:not(.cds--multi-select--invalid--focused,.cds--combo-box--invalid--focused),.cds--number[data-invalid] input[type=number]:not(:focus),.cds--number[data-invalid] input[type=text]:not(:focus),.cds--select-input__wrapper[data-invalid] .cds--select-input:not(:focus),.cds--text-area__wrapper[data-invalid]>.cds--text-area--invalid:not(:focus),.cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline-style:dotted}}.cds--date-picker-input__wrapper--invalid~.cds--form-requirement,.cds--date-picker-input__wrapper--warn~.cds--form-requirement,.cds--date-picker-input__wrapper~.cds--form-requirement,.cds--list-box--warning~.cds--form-requirement,.cds--list-box[data-invalid]~.cds--form-requirement,.cds--number[data-invalid] .cds--number__input-wrapper~.cds--form-requirement,.cds--number__input-wrapper--warning~.cds--form-requirement,.cds--select--warning .cds--select-input__wrapper~.cds--form-requirement,.cds--select-input__wrapper[data-invalid]~.cds--form-requirement,.cds--text-area__wrapper--warn~.cds--form-requirement,.cds--text-area__wrapper[data-invalid]~.cds--form-requirement,.cds--text-input__field-wrapper--warning>.cds--text-input~.cds--form-requirement,.cds--text-input__field-wrapper--warning~.cds--form-requirement,.cds--text-input__field-wrapper[data-invalid]~.cds--form-requirement,.cds--time-picker--invalid~.cds--form-requirement,.cds--time-picker--warning~.cds--form-requirement,.cds--time-picker[data-invalid]~.cds--form-requirement,input[data-invalid]~.cds--form-requirement{display:block;font-weight:400;max-block-size:12.5rem;overflow:visible}.cds--select--inline.cds--select--warning .cds--select-input--inline__wrapper~.cds--form-requirement,.cds--select-input--inline__wrapper[data-invalid]~.cds--form-requirement{display:inline-flex;inline-size:100%;margin:0;margin-block-end:0;max-block-size:100%;overflow:visible;padding-inline-start:.5rem}.cds--date-picker-input__wrapper--invalid~.cds--form-requirement,.cds--date-picker-input__wrapper~.cds--form-requirement,.cds--list-box[data-invalid]~.cds--form-requirement,.cds--number[data-invalid] .cds--number__input-wrapper~.cds--form-requirement,.cds--select-input--inline__wrapper[data-invalid]~.cds--form-requirement,.cds--select-input__wrapper[data-invalid]~.cds--form-requirement,.cds--text-area__wrapper[data-invalid]~.cds--form-requirement,.cds--text-input__field-wrapper[data-invalid]~.cds--form-requirement,.cds--time-picker--invalid~.cds--form-requirement,.cds--time-picker[data-invalid]~.cds--form-requirement,input[data-invalid]~.cds--form-requirement{color:var(--cds-text-error,#da1e28)}.cds--form--fluid .cds--text-input__field-wrapper--warning,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]{display:block}.cds--form--fluid input[data-invalid]{outline:none}.cds--form--fluid .cds--form-requirement{margin:0;padding:.5rem 2.5rem .5rem 1rem}input:not(output,[data-invalid]):-moz-ui-invalid{box-shadow:none}.cds--form-requirement html{font-size:100%}.cds--form-requirement body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--form-requirement code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--form-requirement strong{font-weight:600}.cds--form-requirement{display:none;font-size:var(--cds-helper-text-01-font-size,.75rem);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333);margin:.25rem 0 0;max-block-size:0;overflow:hidden}.cds--select--inline .cds--form__helper-text{margin-block-start:0}.cds--form__helper-text{color:var(--cds-text-helper,#6f6f6f);font-size:var(--cds-helper-text-01-font-size,.75rem);inline-size:100%;letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333);margin-block-start:.25rem;opacity:1;z-index:0}.cds--form__helper-text--disabled,.cds--label--disabled,fieldset[disabled] .cds--form__helper-text,fieldset[disabled] .cds--label{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--text-input{--cds-layout-size-height-local:clamp(max(var(--cds-layout-size-height-min),var(--cds-layout-size-height-sm)),var(--cds-layout-size-height,var(--cds-layout-size-height-md)),min(var(--cds-layout-size-height-max),var(--cds-layout-size-height-lg)));--cds-layout-density-padding-inline-local:clamp(var(--cds-layout-density-padding-inline-min),var(--cds-layout-density-padding-inline,var(--cds-layout-density-padding-inline-normal)),var(--cds-layout-density-padding-inline-max));border:0;box-sizing:border-box;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--text-input *,.cds--text-input :after,.cds--text-input :before{box-sizing:inherit}.cds--text-input{background-color:var(--cds-field);block-size:var(--cds-layout-size-height-local);border:none;border-block-end:1px solid var(--cds-border-strong);color:var(--cds-text-primary,#161616);font-family:inherit;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);inline-size:100%;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);outline:2px solid transparent;outline-offset:-2px;padding:0 var(--cds-layout-density-padding-inline-local);transition:background-color 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9)}.cds--text-input:active,.cds--text-input:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--text-input:active,.cds--text-input:focus{outline-style:dotted}}.cds--text-input-wrapper svg[hidden]{display:none}.cds--password-input{padding-inline-end:2.5rem}.cds--text-input--sm.cds--password-input{padding-inline-end:2rem}.cds--text-input--lg.cds--password-input{padding-inline-end:3rem}.cds--text-input::-moz-placeholder{color:var(--cds-text-placeholder,hsla(0,0%,9%,.4));opacity:1}.cds--text-input::placeholder{color:var(--cds-text-placeholder,hsla(0,0%,9%,.4));opacity:1}.cds--text-input--light{background-color:var(--cds-field-02,#fff)}.cds--text-input__field-wrapper{display:flex;inline-size:100%;position:relative}.cds--text-input__invalid-icon{position:absolute;fill:var(--cds-support-error,#da1e28);inset-block-start:50%;inset-inline-end:1rem;transform:translateY(-50%)}.cds--text-input__invalid-icon--warning{fill:var(--cds-support-warning,#f1c21b)}.cds--text-input__invalid-icon--warning path:first-of-type{fill:#000;opacity:1}.cds--text-input--password__visibility{align-items:center;display:inline-flex;overflow:visible;position:relative}.cds--text-input--password__visibility:focus{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--text-input--password__visibility:focus{outline-style:dotted}}.cds--text-input--password__visibility{cursor:pointer}.cds--text-input--password__visibility:focus{outline:1px solid transparent}.cds--text-input--password__visibility:focus svg{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--text-input--password__visibility:focus svg{outline-style:dotted}}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after,.cds--text-input--password__visibility:before{align-items:center;display:flex;opacity:0;pointer-events:none;position:absolute;z-index:6000}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after,.cds--text-input--password__visibility:before{display:inline-block}}.cds--text-input--password__visibility:after,.cds--text-input--password__visibility:before{transition:opacity 70ms cubic-bezier(.2,0,.38,.9)}@media screen and (prefers-reduced-motion:reduce){.cds--text-input--password__visibility:after,.cds--text-input--password__visibility:before{transition:none}}.cds--text-input--password__visibility.cds--tooltip--a11y:after,.cds--text-input--password__visibility.cds--tooltip--a11y:before{transition:none}.cds--text-input--password__visibility:before{block-size:0;border-style:solid;content:"";inline-size:0}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text{box-sizing:content-box;color:inherit;opacity:1;white-space:normal;word-break:break-word}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after{background-color:var(--cds-background-inverse,#393939);block-size:auto;border-radius:.125rem;box-shadow:0 2px 6px var(--cds-shadow,rgba(0,0,0,.3));color:var(--cds-text-inverse,#fff);font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:400;font-weight:var(--cds-body-compact-01-font-weight,400);inline-size:-moz-max-content;inline-size:max-content;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);max-inline-size:13rem;min-inline-size:1.5rem;padding:.1875rem 1rem;text-align:start;transform:translateX(-50%);z-index:6000}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after{inline-size:auto}}@supports (-ms-accelerator:true){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after{inline-size:auto}}@supports (-ms-ime-align:auto){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after{inline-size:auto}}@media screen and (-ms-high-contrast:active),screen and (prefers-contrast){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after{border:1px solid transparent}}.cds--text-input--password__visibility:after{content:attr(aria-label)}.cds--text-input--password__visibility.cds--tooltip--a11y:after{content:none}.cds--text-input--password__visibility.cds--tooltip--visible:after,.cds--text-input--password__visibility.cds--tooltip--visible:before,.cds--text-input--password__visibility:focus:after,.cds--text-input--password__visibility:focus:before,.cds--text-input--password__visibility:hover:after,.cds--text-input--password__visibility:hover:before{opacity:1}@keyframes cds--tooltip-fade{0%{opacity:0}to{opacity:1}}.cds--text-input--password__visibility.cds--tooltip--visible .cds--assistive-text,.cds--text-input--password__visibility.cds--tooltip--visible+.cds--assistive-text,.cds--text-input--password__visibility:focus .cds--assistive-text,.cds--text-input--password__visibility:focus+.cds--assistive-text,.cds--text-input--password__visibility:hover .cds--assistive-text,.cds--text-input--password__visibility:hover+.cds--assistive-text{margin:auto;overflow:visible;clip:auto}.cds--text-input--password__visibility.cds--tooltip--visible .cds--assistive-text,.cds--text-input--password__visibility.cds--tooltip--visible+.cds--assistive-text,.cds--text-input--password__visibility.cds--tooltip--visible.cds--tooltip--a11y:before,.cds--text-input--password__visibility:focus .cds--assistive-text,.cds--text-input--password__visibility:focus+.cds--assistive-text,.cds--text-input--password__visibility:focus.cds--tooltip--a11y:before,.cds--text-input--password__visibility:hover .cds--assistive-text,.cds--text-input--password__visibility:hover+.cds--assistive-text,.cds--text-input--password__visibility:hover.cds--tooltip--a11y:before{animation:cds--tooltip-fade 70ms cubic-bezier(.2,0,.38,.9)}.cds--text-input--password__visibility.cds--tooltip--hidden .cds--assistive-text,.cds--text-input--password__visibility.cds--tooltip--hidden+.cds--assistive-text{margin:-1px;overflow:hidden;clip:rect(0,0,0,0)}.cds--text-input--password__visibility.cds--tooltip--hidden.cds--tooltip--a11y:before{animation:none;opacity:0}.cds--text-input--password__visibility .cds--assistive-text:after{block-size:.75rem;content:"";display:block;inline-size:100%;inset-block-start:-.75rem;inset-inline-start:0;position:absolute}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after,.cds--text-input--password__visibility:before{inset-block-end:0;inset-inline-start:50%}.cds--text-input--password__visibility:before{border-color:transparent transparent var(--cds-background-inverse,#393939);border-width:0 .25rem .3125rem;inset-block-end:-.5rem;transform:translate(-50%,100%)}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after{inset-block-end:-.8125rem;transform:translate(-50%,100%)}.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger{align-items:center;background:none;block-size:100%;border:0;cursor:pointer;display:flex;inline-size:2.5rem;inset-inline-end:0;justify-content:center;min-block-size:auto;outline:2px solid transparent;outline-offset:-2px;padding:0;position:absolute;transition:outline 70ms cubic-bezier(.2,0,.38,.9)}.cds--toggle-password-tooltip .cds--popover{inset-inline-start:-2.5rem}.cds--toggle-password-tooltip .cds--popover-content{min-inline-size:2.5rem}.cds--text-input--sm+.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger{inline-size:2rem}.cds--text-input--lg+.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger{inline-size:3rem}.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger svg{fill:var(--cds-icon-primary,#161616)}.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger:focus{outline-style:dotted}}.cds--text-input--invalid,.cds--text-input--warning{padding-inline-end:2.5rem}.cds--text-input--invalid.cds--password-input{padding-inline-end:4rem}.cds--text-input--invalid+.cds--text-input--password__visibility__toggle{inset-inline-end:1rem}.cds--password-input-wrapper .cds--text-input__invalid-icon{inset-inline-end:2.5rem}.cds--text-input:disabled~.cds--text-input--password__visibility__toggle.cds--tooltip__trigger{cursor:not-allowed}.cds--text-input--password__visibility__toggle:disabled.cds--tooltip__trigger svg,.cds--text-input:disabled~.cds--text-input--password__visibility__toggle.cds--tooltip__trigger svg,.cds--text-input:disabled~.cds--text-input--password__visibility__toggle.cds--tooltip__trigger svg:hover{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--text-input--password__visibility__toggle:disabled.cds--tooltip__trigger{cursor:default}.cds--text-input--password__visibility__toggle:disabled.cds--tooltip__trigger:hover svg{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--text-input--password__visibility__toggle:disabled.cds--tooltip__trigger:hover{cursor:default}.cds--text-input__counter-alert{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px}.cds--text-input:disabled{background-color:var(--cds-field);border-block-end:1px solid transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed;outline:2px solid transparent;outline-offset:-2px;-webkit-text-fill-color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--text-input--light:disabled{background-color:var(--cds-field-02,#fff)}.cds--text-input:disabled::-moz-placeholder{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));opacity:1}.cds--text-input:disabled::placeholder{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));opacity:1}.cds--text-input--invalid{outline:2px solid var(--cds-support-error,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.cds--text-input--invalid{outline-style:dotted}}.cds--text-input--invalid{box-shadow:none}.cds--text-input--invalid .cds--text-input--password__visibility__toggle{inset-inline-end:2.5rem}.cds--skeleton.cds--text-input{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--skeleton.cds--text-input:active,.cds--skeleton.cds--text-input:focus,.cds--skeleton.cds--text-input:hover{border:none;cursor:default;outline:none}.cds--skeleton.cds--text-input:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--skeleton.cds--text-input:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--skeleton.cds--text-input{background:CanvasText}.cds--skeleton.cds--text-input:before{background:Canvas;forced-color-adjust:none}}.cds--form--fluid .cds--text-input-wrapper{background:var(--cds-field);position:relative;transition:background-color 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9)}.cds--form--fluid .cds--label{align-items:center;block-size:1rem;display:flex;inset-block-start:.8125rem;inset-inline-start:1rem;margin:0;position:absolute;z-index:1}.cds--form--fluid .cds--form__helper-text{display:none}.cds--form--fluid .cds--text-input{min-block-size:4rem;padding:2rem 1rem .8125rem}.cds--form--fluid .cds--text-input__divider,.cds--text-input__divider{display:none}.cds--form--fluid .cds--text-input--invalid,.cds--form--fluid .cds--text-input--warning{border-block-end:none}.cds--form--fluid .cds--text-input--invalid+.cds--text-input__divider,.cds--form--fluid .cds--text-input--warning+.cds--text-input__divider{border-color:var(--cds-border-subtle);border-style:solid;border-block-end:none;display:block;margin:0 1rem}.cds--form--fluid .cds--text-input__invalid-icon{inset-block-start:5rem}.cds--form--fluid .cds--text-input__field-wrapper--warning>.cds--text-input--warning,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid{outline:none}.cds--form--fluid .cds--text-input__field-wrapper--warning{border-block-end:1px solid var(--cds-border-strong)}.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]:not(:focus){outline:2px solid var(--cds-support-error,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]:not(:focus){outline-style:dotted}}.cds--form--fluid .cds--text-input__field-wrapper--warning:focus-within,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]:focus-within{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--form--fluid .cds--text-input__field-wrapper--warning:focus-within,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]:focus-within{outline-style:dotted}}.cds--form--fluid .cds--text-input__field-wrapper--warning>.cds--text-input--warning:focus,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:focus{outline:none}.cds--text-input-wrapper.cds--text-input-wrapper--inline{flex-flow:row wrap}.cds--text-input-wrapper .cds--label--inline{flex:1;margin:.8125rem 0 0;overflow-wrap:break-word;word-break:break-word}.cds--text-input-wrapper .cds--label--inline--sm{margin-block-start:.5625rem}.cds--text-input-wrapper .cds--label--inline--lg{margin-block-start:1.0625rem}.cds--text-input__label-helper-wrapper{flex:2;flex-direction:column;margin-inline-end:1.5rem;max-inline-size:8rem;overflow-wrap:break-word}.cds--text-input-wrapper .cds--form__helper-text--inline{margin-block-start:.125rem}.cds--text-input__field-outer-wrapper{align-items:flex-start;display:flex;flex:1 1 auto;flex-direction:column;inline-size:100%}.cds--text-input__field-outer-wrapper--inline{flex:8;flex-direction:column}.cds--text-input-wrapper--inline .cds--form-requirement{display:block;font-weight:400;max-block-size:12.5rem;overflow:visible}.cds--text-input-wrapper--inline--invalid .cds--form-requirement{color:var(--cds-text-error,#da1e28)}.cds--form--fluid .cds--text-input-wrapper--readonly,.cds--text-input-wrapper--readonly .cds--text-input{background:transparent;border-block-end-color:var(--cds-border-subtle)}.cds--text-input__field-wrapper .cds--ai-label,.cds--text-input__field-wrapper .cds--slug,.cds--text-input__field-wrapper--decorator .cds--text-input__field-inner-wrapper--decorator>*{inset-block-start:50%;inset-inline-end:1rem;position:absolute;transform:translateY(-50%)}.cds--text-input__field-wrapper--decorator .cds--text-input:has(~.cds--text-input__field-inner-wrapper--decorator .cds--ai-label):not(:has(~.cds--text-input__field-inner-wrapper--decorator .cds--ai-label--revert)),.cds--text-input__field-wrapper--slug .cds--text-input:has(~.cds--ai-label):not(:has(~.cds--ai-label--revert)),.cds--text-input__field-wrapper--slug .cds--text-input:has(~.cds--slug):not(:has(~.cds--slug--revert)){background-image:linear-gradient(0deg,var(--cds-ai-aura-start-sm,rgba(69,137,255,.16)) 0,15%,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%,transparent 100%);border-block-end-color:var(--cds-ai-border-strong,#4589ff)}.cds--text-input__field-wrapper--decorator .cds--text-input:has(~.cds--text-input__field-inner-wrapper--decorator>*),.cds--text-input__field-wrapper--slug .cds--text-input:has(~.cds--ai-label),.cds--text-input__field-wrapper--slug .cds--text-input:has(~.cds--slug){padding-inline-end:2.5rem}.cds--text-input--invalid:has(~.cds--ai-label),.cds--text-input--invalid:has(~.cds--slug),.cds--text-input--invalid:has(~.cds--text-input__field-inner-wrapper--decorator>*),.cds--text-input--warning:has(~.cds--ai-label),.cds--text-input--warning:has(~.cds--slug),.cds--text-input--warning:has(~.cds--text-input__field-inner-wrapper--decorator>*){padding-inline-end:4rem}.cds--text-input--invalid~.cds--ai-label,.cds--text-input--invalid~.cds--slug,.cds--text-input--invalid~.cds--text-input__field-inner-wrapper--decorator>*,.cds--text-input--warning~.cds--ai-label,.cds--text-input--warning~.cds--slug,.cds--text-input--warning~.cds--text-input__field-inner-wrapper--decorator>*{inset-inline-end:2.5rem}.cds--text-input__field-wrapper--decorator .cds--text-input__field-inner-wrapper--decorator:not(:has(.cds--ai-label))>*{block-size:1rem}.cds--text-input__label-wrapper{display:flex;inline-size:100%;justify-content:space-between}:host(cds-text-input),:host(cds-text-input-skeleton){--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px;inline-size:100%;outline:none}:host(cds-text-input) ::slotted(cds-ai-label),:host(cds-text-input) ::slotted(cds-slug){inset-block-start:50%;inset-inline-end:1rem;position:absolute}:host(cds-text-input) ::slotted(cds-ai-label:not([revert-active])),:host(cds-text-input) ::slotted(cds-slug:not([revert-active])){transform:translateY(-50%)}:host(cds-text-input[show-password-visibility-toggle]) .cds--text-input{padding-inline-end:2.5rem}:host(cds-text-input[show-password-visibility-toggle]) .cds--text-input__invalid-icon{inset-inline-end:2.5rem}:host(cds-text-input[invalid]) .cds--text-input__field-wrapper--decorator .cds--text-input,:host(cds-text-input[warn]) .cds--text-input__field-wrapper--decorator .cds--text-input{padding-inline-end:4rem}:host(cds-text-input[invalid]) ::slotted(cds-ai-label),:host(cds-text-input[invalid]) ::slotted(cds-slug),:host(cds-text-input[warn]) ::slotted(cds-ai-label),:host(cds-text-input[warn]) ::slotted(cds-slug){inset-inline-end:2.5rem}:host(cds-text-input[ai-label]) .cds--text-input__field-wrapper--decorator{background-image:linear-gradient(0deg,var(--cds-ai-aura-start-sm,rgba(69,137,255,.16)) 0,15%,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%,transparent 100%);border-block-end-color:var(--cds-ai-border-strong,#4589ff)}']);

// node_modules/@carbon/web-components/es/components/text-input/text-input.js
var CDSTextInput = class CDSTextInput2 extends ValidityMixin(FormMixin(i2)) {
  constructor() {
    super(...arguments);
    this._hasAILabel = false;
    this._value = "";
    this.autocomplete = "";
    this.autofocus = false;
    this.disabled = false;
    this.enableCounter = false;
    this.helperText = "";
    this.invalid = false;
    this.invalidText = "";
    this.warn = false;
    this.warnText = "";
    this.hideLabel = false;
    this.label = "";
    this.name = "";
    this.pattern = "";
    this.placeholder = "";
    this.readonly = false;
    this.required = false;
    this.requiredValidityMessage = "Please fill out this field.";
    this.hidePasswordLabel = "Hide password";
    this.showPasswordLabel = "Show password";
    this.showPasswordVisibilityToggle = false;
    this.size = INPUT_SIZE.MEDIUM;
    this.isFluid = false;
    this.inline = false;
    this.tooltipAlignment = INPUT_TOOLTIP_ALIGNMENT.CENTER;
    this.tooltipDirection = INPUT_TOOLTIP_DIRECTION.BOTTOM;
    this.type = INPUT_TYPE.TEXT;
    this.validityMessage = "";
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
  /**
   * Handles `oninput` event on the `input`.
   *
   * @param event The event.
   * @param event.target The event target.
   */
  _handleInput({ target }) {
    this.value = target.value;
  }
  _handleFormdata(event) {
    const { formData } = event;
    const { disabled, name, value } = this;
    if (!disabled) {
      formData.append(name, value);
    }
  }
  /**
   * The value of the input.
   */
  get value() {
    if (this._input) {
      return this._input.value;
    }
    return this._value;
  }
  set value(value) {
    const oldValue = this._value;
    this._value = value;
    this.requestUpdate("value", oldValue);
    if (this._input) {
      this._input.value = value;
    }
  }
  /**
   * Handles password visibility toggle button click
   *
   * @deprecated will be removed in the next major version, use `cds-password-input` instead
   */
  togglePasswordVisibility() {
    this.type = this.type === INPUT_TYPE.PASSWORD ? INPUT_TYPE.TEXT : INPUT_TYPE.PASSWORD;
  }
  render() {
    const { disabled, enableCounter, helperText, hideLabel, inline, isFluid, invalid, invalidText, label, maxCount, readonly, required, size, type, warn, warnText, value, _handleInput: handleInput, _hasAILabel: hasAILabel, _handleSlotChange: handleSlotChange } = this;
    const invalidIcon = iconLoader(_16, {
      class: `${prefix}--text-input__invalid-icon`
    });
    const warnIcon = iconLoader(_162, {
      class: `${prefix}--text-input__invalid-icon ${prefix}--text-input__invalid-icon--warning`
    });
    const normalizedProps = {
      disabled: !readonly && disabled,
      invalid: !readonly && invalid,
      warn: !readonly && !invalid && warn,
      "slot-name": "",
      "slot-text": "",
      icon: null
    };
    if (normalizedProps.invalid) {
      normalizedProps.icon = invalidIcon;
      normalizedProps["slot-name"] = "invalid-text";
      normalizedProps["slot-text"] = invalidText;
    } else if (normalizedProps.warn) {
      normalizedProps.icon = warnIcon;
      normalizedProps["slot-name"] = "warn-text";
      normalizedProps["slot-text"] = warnText;
    }
    const counterClasses = e2({
      [`${prefix}--label`]: true,
      [`${prefix}--text-input__label-counter`]: true,
      [`${prefix}--label--disabled`]: disabled
    });
    const inputWrapperClasses = e2({
      [`${prefix}--form-item`]: true,
      [`${prefix}--text-input-wrapper`]: true,
      [`${prefix}--text-input-wrapper--inline`]: inline,
      [`${prefix}--text-input-wrapper--readonly`]: readonly,
      [`${prefix}--text-input-wrapper--inline--invalid`]: inline && normalizedProps.invalid
    });
    const inputClasses = e2({
      [`${prefix}--text-input`]: true,
      [`${prefix}--text-input--invalid`]: normalizedProps.invalid,
      [`${prefix}--text-input--warning`]: normalizedProps.warn,
      [`${prefix}--text-input--${size}`]: size,
      [`${prefix}--layout--size-${size}`]: size,
      [`${prefix}--password-input`]: type === INPUT_TYPE.PASSWORD,
      //TODO deprecated, remove in v12
      [`${prefix}--text-input__field-wrapper--decorator`]: hasAILabel
    });
    const fieldOuterWrapperClasses = e2({
      [`${prefix}--text-input__field-outer-wrapper`]: true,
      [`${prefix}--text-input__field-outer-wrapper--inline`]: inline
    });
    const fieldWrapperClasses = e2({
      [`${prefix}--text-input__field-wrapper`]: true,
      [`${prefix}--text-input__field-wrapper--warning`]: normalizedProps.warn
    });
    const labelClasses = e2({
      [`${prefix}--label`]: true,
      [`${prefix}--visually-hidden`]: hideLabel,
      [`${prefix}--label--disabled`]: normalizedProps.disabled
    });
    const helperTextClasses = e2({
      [`${prefix}--form__helper-text`]: true,
      [`${prefix}--form__helper-text--disabled`]: normalizedProps.disabled
    });
    const passwordIsVisible = type !== INPUT_TYPE.PASSWORD;
    const passwordVisibilityIcon = passwordIsVisible ? iconLoader(_164, { class: `${prefix}--icon-visibility-off` }) : iconLoader(_163, { class: `${prefix}--icon-visibility-on` });
    const passwordVisibilityToggleClasses = e2({
      [`${prefix}--text-input--password__visibility__toggle`]: true,
      [`${prefix}--btn`]: true,
      [`${prefix}--btn--icon-only`]: true,
      [`${prefix}--tooltip__trigger`]: true,
      [`${prefix}--tooltip--a11y`]: true,
      [`${prefix}--btn--disabled`]: normalizedProps.disabled,
      [`${prefix}--tooltip--${this.tooltipDirection}`]: this.tooltipDirection,
      [`${prefix}--tooltip--align-${this.tooltipAlignment}`]: this.tooltipAlignment
    });
    const passwordButtonLabel = b`
      <span class="${prefix}--assistive-text">
        ${passwordIsVisible ? this.hidePasswordLabel : this.showPasswordLabel}
      </span>
    `;
    const passwordVisibilityButton = () => b`
      <button
        type="button"
        class="${passwordVisibilityToggleClasses}"
        ?disabled="${normalizedProps.disabled}"
        @click="${this.togglePasswordVisibility}">
        ${!normalizedProps.disabled ? passwordButtonLabel : null}
        ${passwordVisibilityIcon}
      </button>
    `;
    const textCount = value === null || value === void 0 ? void 0 : value.length;
    const counter = enableCounter && maxCount ? b` <label class="${counterClasses}">
            <slot name="label-text">${textCount}/${maxCount}</slot>
          </label>` : null;
    const labelWrapper = b`<div class="${prefix}--text-input__label-wrapper">
      <label class="${labelClasses}">
        <slot name="label-text">${label}</slot>
      </label>
      ${counter}
    </div>`;
    const helper = helperText ? b`<div
          class="${helperTextClasses}"
          id="helper-text"
          ?hidden="${normalizedProps.invalid || normalizedProps.warn}">
          <slot name="helper-text"> ${helperText} </slot>
        </div>` : null;
    const validationMessage = normalizedProps.invalid || normalizedProps.warn ? b`<div
            class="${prefix}--form-requirement"
            ?hidden="${!normalizedProps.invalid && !normalizedProps.warn}">
            <slot name="${normalizedProps["slot-name"]}">
              ${normalizedProps["slot-text"]}
            </slot>
          </div>` : null;
    return b`
      <div class="${inputWrapperClasses}">
        ${!inline ? labelWrapper : b`<div class="${prefix}--text-input__label-helper-wrapper">
              ${labelWrapper} ${!isFluid ? validationMessage || helper : null}
            </div>`}
        <div class="${fieldOuterWrapperClasses}">
          <div class="${fieldWrapperClasses}" ?data-invalid="${invalid}">
            ${normalizedProps.icon}
            <input
              autocomplete="${this.autocomplete}"
              ?autofocus="${this.autofocus}"
              class="${inputClasses}"
              ?data-invalid="${invalid}"
              ?disabled="${disabled}"
              aria-describedby="helper-text"
              id="input"
              name="${ifNonEmpty(this.name)}"
              pattern="${ifNonEmpty(this.pattern)}"
              placeholder="${ifNonEmpty(this.placeholder)}"
              ?readonly="${readonly}"
              ?required="${required}"
              type="${ifNonEmpty(type)}"
              .value="${this._value}"
              maxlength="${ifNonEmpty(maxCount)}"
              @input="${handleInput}" />
            <slot name="ai-label" @slotchange="${handleSlotChange}"></slot>
            <slot name="slug" @slotchange="${handleSlotChange}"></slot>
            ${this.showPasswordVisibilityToggle && (type === INPUT_TYPE.PASSWORD || type === INPUT_TYPE.TEXT) ? passwordVisibilityButton() : null}
            ${isFluid ? b`<hr class="${prefix}--text-input__divider" />` : null}
            ${isFluid && !inline ? validationMessage : null}
          </div>

          ${/* Non-fluid: validation and helper outside field wrapper */
    ""}
          ${!isFluid && !inline ? validationMessage || helper : null}
        </div>
      </div>
    `;
  }
  updated() {
    var _a, _b, _c, _d, _e;
    this.toggleAttribute("ai-label", this._hasAILabel);
    const label = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("slot[name='ai-label']");
    if (label) {
      label === null || label === void 0 ? void 0 : label.classList.toggle(`${prefix}--slug--revert`, (_b = this.querySelector(`${prefix}-ai-label`)) === null || _b === void 0 ? void 0 : _b.hasAttribute("revert-active"));
    } else {
      (_d = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector("slot[name='slug']")) === null || _d === void 0 ? void 0 : _d.classList.toggle(`${prefix}--slug--revert`, (_e = this.querySelector(`${prefix}-slug`)) === null || _e === void 0 ? void 0 : _e.hasAttribute("revert-active"));
    }
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
CDSTextInput.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSTextInput.styles = styles;
__decorate([
  e("input")
], CDSTextInput.prototype, "_input", void 0);
__decorate([
  n()
], CDSTextInput.prototype, "autocomplete", void 0);
__decorate([
  n({ type: Boolean })
], CDSTextInput.prototype, "autofocus", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTextInput.prototype, "disabled", void 0);
__decorate([
  n({ type: Boolean, attribute: "enable-counter", reflect: true })
], CDSTextInput.prototype, "enableCounter", void 0);
__decorate([
  n({ attribute: "helper-text" })
], CDSTextInput.prototype, "helperText", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTextInput.prototype, "invalid", void 0);
__decorate([
  n({ attribute: "invalid-text" })
], CDSTextInput.prototype, "invalidText", void 0);
__decorate([
  n({ type: Number, attribute: "max-count", reflect: true })
], CDSTextInput.prototype, "maxCount", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTextInput.prototype, "warn", void 0);
__decorate([
  n({ attribute: "warn-text" })
], CDSTextInput.prototype, "warnText", void 0);
__decorate([
  n({ attribute: "hide-label", type: Boolean, reflect: true })
], CDSTextInput.prototype, "hideLabel", void 0);
__decorate([
  n({ attribute: "label" })
], CDSTextInput.prototype, "label", void 0);
__decorate([
  n()
], CDSTextInput.prototype, "name", void 0);
__decorate([
  n()
], CDSTextInput.prototype, "pattern", void 0);
__decorate([
  n({ reflect: true })
], CDSTextInput.prototype, "placeholder", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTextInput.prototype, "readonly", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTextInput.prototype, "required", void 0);
__decorate([
  n({ attribute: "required-validity-message" })
], CDSTextInput.prototype, "requiredValidityMessage", void 0);
__decorate([
  n()
], CDSTextInput.prototype, "hidePasswordLabel", void 0);
__decorate([
  n()
], CDSTextInput.prototype, "showPasswordLabel", void 0);
__decorate([
  n({
    type: Boolean,
    attribute: "show-password-visibility-toggle",
    reflect: true
  })
], CDSTextInput.prototype, "showPasswordVisibilityToggle", void 0);
__decorate([
  n({ reflect: true })
], CDSTextInput.prototype, "size", void 0);
__decorate([
  n({ type: Boolean })
], CDSTextInput.prototype, "isFluid", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTextInput.prototype, "inline", void 0);
__decorate([
  n()
], CDSTextInput.prototype, "tooltipAlignment", void 0);
__decorate([
  n()
], CDSTextInput.prototype, "tooltipDirection", void 0);
__decorate([
  n({ reflect: true })
], CDSTextInput.prototype, "type", void 0);
__decorate([
  n({ attribute: "validity-message" })
], CDSTextInput.prototype, "validityMessage", void 0);
__decorate([
  n({ reflect: true })
], CDSTextInput.prototype, "value", null);
CDSTextInput = __decorate([
  carbonElement(`${prefix}-text-input`)
], CDSTextInput);
var CDSTextInput$1 = CDSTextInput;

export {
  _163 as _16,
  _164 as _162,
  INPUT_SIZE,
  INPUT_TOOLTIP_ALIGNMENT,
  INPUT_TOOLTIP_DIRECTION,
  INPUT_TYPE,
  styles,
  CDSTextInput$1
};
