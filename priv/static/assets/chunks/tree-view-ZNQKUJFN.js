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
import {
  e
} from "./chunk-YOLTZNLE.js";
import "./chunk-M2VBID3H.js";
import {
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
  __decorate,
  b,
  i,
  i2
} from "./chunk-3GZFZEMV.js";
import "./chunk-G6EI4S4W.js";

// node_modules/@carbon/icons/es/caret--down/16.js
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
      "d": "M24 12 16 22 8 12z"
    }
  }],
  "name": "caret--down",
  "size": 16
};

// node_modules/@carbon/web-components/es/components/tree-view/tree-view.scss.js
var styles = i(['.cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-background:var(--cds-layer-background-01,#fff);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-background:var(--cds-layer-background-02,#f4f4f4);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-background:var(--cds-layer-background-03,#fff);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}.cds--layer-one.cds--layer__with-background,.cds--layer-three.cds--layer__with-background,.cds--layer-two.cds--layer__with-background{background-color:var(--cds-layer-background)}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}input:-webkit-autofill,input:-webkit-autofill:focus,input:-webkit-autofill:hover,textarea:-webkit-autofill,textarea:-webkit-autofill:focus,textarea:-webkit-autofill:hover{box-shadow:0 0 0 1000px var(--cds-field) inset;-webkit-text-fill-color:var(--cds-text-primary,#161616)}.cds--fieldset{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--fieldset *,.cds--fieldset :after,.cds--fieldset :before{box-sizing:inherit}.cds--form-item{align-items:flex-start;display:flex;flex:1 1 auto;flex-direction:column;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--label html{font-size:100%}.cds--label body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--label code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--label strong{font-weight:600}.cds--label{color:var(--cds-text-secondary,#525252);display:inline-block;font-weight:var(--cds-label-01-font-weight,400);font-weight:400;line-height:var(--cds-label-01-line-height,1.33333);line-height:1rem;margin-block-end:.5rem;vertical-align:baseline}.cds--label,.cds--label .cds--toggletip-label{font-size:var(--cds-label-01-font-size,.75rem);letter-spacing:var(--cds-label-01-letter-spacing,.32px)}.cds--label .cds--toggletip-label{font-weight:var(--cds-label-01-font-weight,400);line-height:var(--cds-label-01-line-height,1.33333)}.cds--label--no-margin{margin-block-end:0}.cds--label+.cds--tooltip{inset-block-start:.2rem;inset-inline-start:.5rem;position:relative}.cds--label+.cds--tooltip .cds--tooltip__trigger{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--label+.cds--tooltip .cds--tooltip__trigger *,.cds--label+.cds--tooltip .cds--tooltip__trigger :after,.cds--label+.cds--tooltip .cds--tooltip__trigger :before{box-sizing:inherit}.cds--label+.cds--tooltip .cds--tooltip__trigger::-moz-focus-inner{border:0}.cds--label+.cds--tooltip .cds--tooltip__trigger{align-items:center;display:flex;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);justify-content:center;letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}.cds--label+.cds--tooltip .cds--tooltip__trigger:focus{outline:1px solid var(--cds-focus,#0f62fe)}.cds--label+.cds--tooltip .cds--tooltip__trigger svg{fill:var(--cds-icon-secondary,#525252)}.cds--label+.cds--tooltip .cds--tooltip__trigger svg :hover{fill:var(--cds-icon-primary,#161616)}.cds--label+.cds--toggletip{inset-block-start:.2rem;inset-inline-start:.5rem}.cds--label.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--label.cds--skeleton:active,.cds--label.cds--skeleton:focus,.cds--label.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--label.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--label.cds--skeleton:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--label.cds--skeleton{background:CanvasText}.cds--label.cds--skeleton:before{background:Canvas;forced-color-adjust:none}}.cds--label.cds--skeleton{block-size:.875rem;inline-size:4.6875rem}input[type=number],input[type=text].cds--number{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif}.cds--combo-box[data-invalid]:not(.cds--multi-select--selected) .cds--text-input:not(:focus),.cds--list-box[data-invalid]:not(.cds--multi-select--invalid--focused,.cds--combo-box--invalid--focused),.cds--number[data-invalid] input[type=number]:not(:focus),.cds--number[data-invalid] input[type=text]:not(:focus),.cds--select-input__wrapper[data-invalid] .cds--select-input:not(:focus),.cds--text-area__wrapper[data-invalid]>.cds--text-area--invalid:not(:focus),.cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline:2px solid var(--cds-support-error,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.cds--combo-box[data-invalid]:not(.cds--multi-select--selected) .cds--text-input:not(:focus),.cds--list-box[data-invalid]:not(.cds--multi-select--invalid--focused,.cds--combo-box--invalid--focused),.cds--number[data-invalid] input[type=number]:not(:focus),.cds--number[data-invalid] input[type=text]:not(:focus),.cds--select-input__wrapper[data-invalid] .cds--select-input:not(:focus),.cds--text-area__wrapper[data-invalid]>.cds--text-area--invalid:not(:focus),.cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline-style:dotted}}.cds--date-picker-input__wrapper--invalid~.cds--form-requirement,.cds--date-picker-input__wrapper--warn~.cds--form-requirement,.cds--date-picker-input__wrapper~.cds--form-requirement,.cds--list-box--warning~.cds--form-requirement,.cds--list-box[data-invalid]~.cds--form-requirement,.cds--number[data-invalid] .cds--number__input-wrapper~.cds--form-requirement,.cds--number__input-wrapper--warning~.cds--form-requirement,.cds--select--warning .cds--select-input__wrapper~.cds--form-requirement,.cds--select-input__wrapper[data-invalid]~.cds--form-requirement,.cds--text-area__wrapper--warn~.cds--form-requirement,.cds--text-area__wrapper[data-invalid]~.cds--form-requirement,.cds--text-input__field-wrapper--warning>.cds--text-input~.cds--form-requirement,.cds--text-input__field-wrapper--warning~.cds--form-requirement,.cds--text-input__field-wrapper[data-invalid]~.cds--form-requirement,.cds--time-picker--invalid~.cds--form-requirement,.cds--time-picker--warning~.cds--form-requirement,.cds--time-picker[data-invalid]~.cds--form-requirement,input[data-invalid]~.cds--form-requirement{display:block;font-weight:400;max-block-size:12.5rem;overflow:visible}.cds--select--inline.cds--select--warning .cds--select-input--inline__wrapper~.cds--form-requirement,.cds--select-input--inline__wrapper[data-invalid]~.cds--form-requirement{display:inline-flex;inline-size:100%;margin:0;margin-block-end:0;max-block-size:100%;overflow:visible;padding-inline-start:.5rem}.cds--date-picker-input__wrapper--invalid~.cds--form-requirement,.cds--date-picker-input__wrapper~.cds--form-requirement,.cds--list-box[data-invalid]~.cds--form-requirement,.cds--number[data-invalid] .cds--number__input-wrapper~.cds--form-requirement,.cds--select-input--inline__wrapper[data-invalid]~.cds--form-requirement,.cds--select-input__wrapper[data-invalid]~.cds--form-requirement,.cds--text-area__wrapper[data-invalid]~.cds--form-requirement,.cds--text-input__field-wrapper[data-invalid]~.cds--form-requirement,.cds--time-picker--invalid~.cds--form-requirement,.cds--time-picker[data-invalid]~.cds--form-requirement,input[data-invalid]~.cds--form-requirement{color:var(--cds-text-error,#da1e28)}.cds--form--fluid .cds--text-input__field-wrapper--warning,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]{display:block}.cds--form--fluid input[data-invalid]{outline:none}.cds--form--fluid .cds--form-requirement{margin:0;padding:.5rem 2.5rem .5rem 1rem}input:not(output,[data-invalid]):-moz-ui-invalid{box-shadow:none}.cds--form-requirement html{font-size:100%}.cds--form-requirement body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--form-requirement code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--form-requirement strong{font-weight:600}.cds--form-requirement{display:none;font-size:var(--cds-helper-text-01-font-size,.75rem);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333);margin:.25rem 0 0;max-block-size:0;overflow:hidden}.cds--select--inline .cds--form__helper-text{margin-block-start:0}.cds--form__helper-text{color:var(--cds-text-helper,#6f6f6f);font-size:var(--cds-helper-text-01-font-size,.75rem);inline-size:100%;letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333);margin-block-start:.25rem;opacity:1;z-index:0}.cds--form__helper-text--disabled,.cds--label--disabled,fieldset[disabled] .cds--form__helper-text,fieldset[disabled] .cds--label{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--tree{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--tree *,.cds--tree :after,.cds--tree :before{box-sizing:inherit}.cds--tree{overflow:hidden}.cds--tree-node,:host(cds-tree-node:not([href])){background-color:var(--cds-layer-01,#f4f4f4);color:var(--cds-text-secondary,#525252);padding-inline-start:1rem}.cds--tree-node:focus{outline:none}.cds--tree-node:hover{cursor:pointer}.cds--tree-node--hidden{display:none}.cds--tree-node__children{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--tree-node__children *,.cds--tree-node__children :after,.cds--tree-node__children :before{box-sizing:inherit}.cds--tree-node__children{list-style-type:none}.cds--tree-node--with-icon .cds--tree-node,.cds--tree-node--with-icon :host(cds-tree-node:not([href])){margin-inline-start:.5rem}.cds--tree-node:focus>.cds--tree-node__label{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--tree-node:focus>.cds--tree-node__label{outline-style:dotted}}.cds--tree-node.cds--tree-parent-node>.cds--tree-node__label{inline-size:auto}.cds--tree-node--disabled:focus>.cds--tree-node__label{outline:none}.cds--tree-node--disabled,.cds--tree-node--disabled .cds--tree-node__label:hover,.cds--tree-node--disabled .cds--tree-node__label:hover .cds--tree-node__label__details,:host(cds-tree-node[disabled]:not([href])),:host(cds-tree-node[disabled]:not([href])) .cds--tree-node__label:hover,:host(cds-tree-node[disabled]:not([href])) .cds--tree-node__label:hover .cds--tree-node__label__details{background-color:var(--cds-field-01,#f4f4f4);color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--tree-node--disabled .cds--tree-node__icon,.cds--tree-node--disabled .cds--tree-node__label:hover .cds--tree-node__icon,.cds--tree-node--disabled .cds--tree-node__label:hover .cds--tree-parent-node__toggle-icon,.cds--tree-node--disabled .cds--tree-parent-node__toggle-icon,:host(cds-tree-node:not([href])) .cds--tree-node--disabled ::slotted([slot=icon]),:host(cds-tree-node[disabled]:not([href])) .cds--tree-node__icon,:host(cds-tree-node[disabled]:not([href])) .cds--tree-parent-node__toggle-icon,:host(cds-tree-node[disabled]:not([href])):host(cds-tree-node:not([href])) ::slotted([slot=icon]){fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--tree-node--disabled,.cds--tree-node--disabled .cds--tree-parent-node__toggle-icon:hover,:host(cds-tree-node[disabled]:not([href])),:host(cds-tree-node[disabled]:not([href])) .cds--tree-parent-node__toggle-icon:hover{cursor:not-allowed}:host(cds-tree-node[href][parent]) a.cds--tree-node,li a.cds--tree-node{text-decoration:none}:host(cds-tree-node[href][parent]) a.cds--tree-node:not(.cds--tree-node--disabled),li a.cds--tree-node:not(.cds--tree-node--disabled){color:var(--cds-text-secondary,#525252)}:host(cds-tree-node[href][parent]),li.cds--tree-node-link-parent{background-color:var(--cds-layer-01,#f4f4f4);display:flex;flex-direction:column}:host(cds-tree-node[href][parent])>.cds--tree-node__children,li.cds--tree-node-link-parent>.cds--tree-node__children{padding-inline-start:1rem}.cds--tree-node__label{align-items:center;box-sizing:border-box;display:flex;flex:1;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);inline-size:100%;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);min-block-size:2rem;padding-inline-end:1rem;position:relative}.cds--tree-node__label:hover{background-color:var(--cds-layer-hover-01,#e8e8e8);color:var(--cds-text-primary,#161616)}.cds--tree-node:not(.cds--tree-parent-node) .cds--tree-node__label,:not(.cds--tree-parent-node):host(cds-tree-node:not([href])) .cds--tree-node__label{padding-block:.4375rem .4375rem}.cds--tree-node__label:hover .cds--tree-node__label__details{color:var(--cds-text-primary,#161616)}.cds--tree-node__label:hover .cds--tree-node__icon,.cds--tree-node__label:hover .cds--tree-parent-node__toggle-icon,:host(cds-tree-node:not([href])) .cds--tree-node__label:hover ::slotted([slot=icon]){fill:var(--cds-icon-primary,#161616)}.cds--tree-leaf-node,:host(cds-tree-node:not([parent]):not([href])){display:flex;padding-inline-start:2.5rem}.cds--tree-leaf-node.cds--tree-node--with-icon{padding-inline-start:2rem}.cds--tree-leaf-node.cds--tree-node--with-icon .cds--tree-leaf-node,.cds--tree-leaf-node.cds--tree-node--with-icon :host(cds-tree-node:not([parent]):not([href])){padding-inline-start:1.5rem}.cds--tree-node__label__details{align-items:center;display:flex;min-inline-size:0}.cds--tree-node--with-icon .cds--tree-parent-node__toggle{margin-inline-end:0}.cds--tree-parent-node__toggle{align-items:center;block-size:1.5rem;border:0;display:flex;inline-size:1.5rem;margin-inline:-.25rem .25rem;padding-inline-start:.25rem}.cds--tree-parent-node__toggle:hover{cursor:pointer}.cds--tree-parent-node__toggle:focus{outline:none}.cds--tree-parent-node__toggle-icon{fill:var(--cds-icon-secondary,#525252);transform:rotate(-90deg);transition:all .11s cubic-bezier(.2,0,.38,.9)}.cds--tree-parent-node__toggle-icon--expanded{transform:rotate(0)}.cds--tree-node__icon,:host(cds-tree-node:not([href])) ::slotted([slot=icon]){fill:var(--cds-icon-secondary,#525252);margin-inline:.5rem .5rem;min-block-size:1rem;min-inline-size:1rem}.cds--tree-parent-node__toggle+.cds--tree-node__label__details .cds--tree-node__icon,:host(cds-tree-node:not([href])) .cds--tree-parent-node__toggle+.cds--tree-node__label__details ::slotted([slot=icon]){margin-inline-start:.25rem}.cds--tree-node--selected>.cds--tree-node__label,:host(cds-tree-node[selected]:not([href]))>.cds--tree-node__label{background-color:var(--cds-layer-selected-01,#e0e0e0);color:var(--cds-text-primary,#161616)}.cds--tree-node--selected>.cds--tree-node__label:hover,:host(cds-tree-node[selected]:not([href]))>.cds--tree-node__label:hover{background-color:var(--cds-layer-selected-hover-01,#d1d1d1)}.cds--tree-node--selected>.cds--tree-node__label .cds--tree-node__icon,.cds--tree-node--selected>.cds--tree-node__label .cds--tree-parent-node__toggle-icon,:host(cds-tree-node:not([href])) .cds--tree-node--selected>.cds--tree-node__label ::slotted([slot=icon]),:host(cds-tree-node[selected]:not([href])):host(cds-tree-node:not([href]))>.cds--tree-node__label ::slotted([slot=icon]),:host(cds-tree-node[selected]:not([href]))>.cds--tree-node__label .cds--tree-node__icon,:host(cds-tree-node[selected]:not([href]))>.cds--tree-node__label .cds--tree-parent-node__toggle-icon{fill:var(--cds-icon-primary,#161616)}.cds--tree-node--active>.cds--tree-node__label,:host(cds-tree-node[active]:not([href]))>.cds--tree-node__label{position:relative}.cds--tree-node--active>.cds--tree-node__label:before,:host(cds-tree-node[active]:not([href]))>.cds--tree-node__label:before{background-color:var(--cds-interactive,#0f62fe);block-size:100%;content:"";inline-size:.25rem;inset-block-start:0;inset-inline-start:0;position:absolute}.cds--tree--xs .cds--tree-node__label{min-block-size:1.5rem}.cds--tree--xs .cds--tree-node:not(.cds--tree-parent-node) .cds--tree-node__label,.cds--tree--xs :not(.cds--tree-parent-node):host(cds-tree-node:not([href])) .cds--tree-node__label{padding:0}.cds--tree--xs .cds--tree-parent-node__toggle{margin-block-start:0}.cds--tree-node__label__text{display:block;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);line-height:1.2;overflow:hidden;padding-inline-start:.25rem;text-overflow:ellipsis;white-space:nowrap}.cds--tree-node__label .cds--icon-tooltip{inline-size:100%}.cds--tree-node__label .cds--icon-tooltip .cds--btn--icon-only{background:transparent;block-size:auto;border:none;color:inherit;inline-size:100%;min-block-size:unset;padding:0;text-align:start}.cds--tree-node__label .cds--icon-tooltip .cds--btn--icon-only .cds--tree-node__label__text{color:inherit;inline-size:100%}.cds--tree-node__label .cds--tooltip-content{padding:1rem}.cds--tree-node__label .cds--popover-container{inline-size:100%}.cds--tree .cds--tree-node__label .cds--tooltip-trigger__wrapper .cds--btn--ghost:focus{box-shadow:none;outline:2px solid var(--cds-focus,#0f62fe)}:host(cds-tree-view){display:block}:host(cds-tree-node){box-sizing:border-box;display:list-item}:host(cds-tree-node) .cds--tree-node__label{box-sizing:inherit}:host(cds-tree-node) .cds--tree-node__hidden{display:none}:host(cds-tree-node) .cds--tree-parent-node__toggle{box-sizing:inherit}:host(cds-tree-node:focus-visible){outline:none}:host(cds-tree-node:focus-visible) .cds--tree-node__label{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(cds-tree-node:focus-visible) .cds--tree-node__label{outline-style:dotted}}:host(cds-tree-node:not([parent]):not([href])) .cds--tree-node__label{padding-block:.4375rem}:host(cds-tree-node[href]) .cds--tree-node,:host(cds-tree-node[href]) :host(cds-tree-node:not([href])){box-sizing:inherit}:host(cds-tree-node[href]) .cds--tree-node__label{padding-block:0}:host(cds-tree-node[has-icon]:not([parent]:not([href]))){padding-inline-start:2rem}:host(cds-tree-node[has-icon]:not([href])){padding-inline-start:.5rem}:host(cds-tree-node[has-icon]:not([href])) .cds--tree-parent-node__toggle{margin-inline-end:0}:host(cds-tree-node[has-icon][parent]:not([href])){padding-inline-start:1rem}:host(cds-tree-node[has-icon]:not([href])) ::slotted(cds-tree-node){margin-inline-start:.5rem}:host(cds-tree-node:not([href])[size=xs]) .cds--tree-node__label{min-block-size:1.5rem}:host(cds-tree-node:not([href])[size=xs]) .cds--tree-parent-node__toggle{margin-block-start:0}:host(cds-tree-node:not([href])[size=xs]:not([parent])) .cds--tree-node__label{padding:0}:host(cds-tree-node[href]) a{text-decoration:none}']);

// node_modules/@carbon/web-components/es/components/tree-view/tree-node.js
var CDSTreeNode = class CDSTreeNode2 extends i2 {
  constructor() {
    super(...arguments);
    this._hasChildren = false;
    this._hasIcon = false;
    this._handleStyles = () => {
      const { _depth: depth, _hasChildren: hasChildren, _hasIcon: hasIcon } = this;
      const calcOffset = () => {
        if (hasChildren && hasIcon) {
          return depth + 1 + depth * 0.5;
        }
        if (hasChildren) {
          return depth + 1;
        }
        if (hasIcon) {
          return depth + 2 + depth * 0.5;
        }
        return depth + 2.5;
      };
      const label = this.shadowRoot.querySelector(`.${prefix}--tree-node__label`);
      if (label) {
        label.style.marginInlineStart = `-${calcOffset()}rem`;
        label.style.paddingInlineStart = `${calcOffset()}rem`;
      }
    };
    this._handleToggleClick = (event) => {
      const { disabled, href } = this;
      if (disabled)
        return;
      event.stopPropagation();
      if (href) {
        event.preventDefault();
      }
      this.isExpanded = !this.isExpanded;
      if (this.hasAttribute("aria-expanded")) {
        this.setAttribute("aria-expanded", String(this.isExpanded));
      }
    };
    this.active = false;
    this.disabled = false;
    this._depth = 0;
    this.isExpanded = false;
    this.id = Math.random().toString(16).slice(2);
    this.selected = false;
  }
  /**
   * Handles `slotchange` event.
   */
  _handleSlotChange({ target }) {
    const { _depth: depth, disabled } = this;
    const items = target.assignedNodes().filter((node) => node.nodeType === Node.ELEMENT_NODE && node.tagName.toLowerCase() === `${prefix}-tree-node`);
    items.forEach((item) => {
      item._depth = depth + 1;
      item.disabled = disabled;
    });
    this._hasChildren = items.length > 0;
    if (this._hasChildren)
      this.setAttribute("parent", "");
    this.requestUpdate?.();
  }
  /**
   * Handles icon's `slotchange` event.
   */
  _handleIconSlotChange({ target }) {
    this._hasIcon = target.assignedNodes().length > 0;
    if (this._hasIcon)
      this.setAttribute("has-icon", "");
    this.requestUpdate?.();
  }
  connectedCallback() {
    super.connectedCallback();
    this._hasChildren = Array.from(this.children).some((node) => node.tagName.toLowerCase() === `${prefix}-tree-node`);
    this._hasIcon = Array.from(this.children).some((node) => node.getAttribute("slot") === "icon");
    if (!this.hasAttribute("role") && !this.href) {
      this.setAttribute("role", "treeitem");
    }
    if (this._hasChildren && !this.href) {
      this.setAttribute("aria-expanded", String(this.isExpanded));
    }
    if (!this.hasAttribute("aria-label")) {
      this.setAttribute("aria-label", this.label);
    }
  }
  _dispatchSelectedEvent(value) {
    const { eventSelected } = this.constructor;
    this.dispatchEvent(new CustomEvent(eventSelected, {
      bubbles: true,
      composed: true,
      detail: {
        value
      }
    }));
  }
  _dispatchToggledEvent(value, expanded) {
    const { eventToggled } = this.constructor;
    this.dispatchEvent(new CustomEvent(eventToggled, {
      bubbles: true,
      composed: true,
      detail: {
        value,
        expanded
      }
    }));
  }
  updated(changedProperties) {
    if (changedProperties.has("_depth")) {
      this._handleStyles();
    }
    if (changedProperties.has("selected")) {
      if (!this.href) {
        this.setAttribute("aria-selected", String(!this.href ? this.disabled ? void 0 : this.selected : void 0));
      }
      if (this.selected) {
        this._dispatchSelectedEvent(this.label);
      }
    }
    if (changedProperties.has("active") && !this.href) {
      this.setAttribute("aria-current", String(!this.href ? this.active || void 0 : this.active ? "page" : void 0));
    }
    if (changedProperties.has("disabled")) {
      this.setAttribute("aria-disabled", String(this.disabled));
    }
    if (changedProperties.has("isExpanded")) {
      this._dispatchToggledEvent(this.label, this.isExpanded);
    }
  }
  render() {
    const { disabled, isExpanded, href, id, label, onClick, _hasChildren: hasChildren, _handleIconSlotChange: handleIconSlotChange, _handleSlotChange: handleSlotChange, _handleToggleClick: handleToggleClick } = this;
    let toggleClasses = `${prefix}--tree-parent-node__toggle-icon`;
    if (isExpanded) {
      toggleClasses += `${prefix}--tree-parent-node__toggle-icon--expanded`;
    }
    const linkClasses = e({
      [`${prefix}--tree-node`]: true,
      [`${prefix}--tree-node--active`]: this.active,
      [`${prefix}--tree-node--disabled`]: disabled,
      [`${prefix}--tree-node--selected`]: this.selected,
      [`${prefix}--tree-node--with-icon`]: this._hasIcon,
      [`${prefix}--tree-leaf-node`]: !this._hasChildren,
      [`${prefix}--tree-parent-node`]: this._hasChildren
    });
    const subTreeClasses = e({
      [`${prefix}--tree-node__children`]: true,
      [`${prefix}--tree-node__hidden`]: !isExpanded
    });
    return b`
      ${!hasChildren ? b`
            ${href ? b`<a
                  class=${linkClasses}
                  href=${!disabled ? href : void 0}
                  role="treeitem"
                  ?aria-disabled=${disabled}
                  aria-current=${!this.href ? this.active || void 0 : this.active ? "page" : void 0}
                  tabindex=${disabled ? -1 : void 0}
                  @click=${onClick}>
                  <div id="label" class="${prefix}--tree-node__label">
                    <slot
                      name="icon"
                      @slotchange=${handleIconSlotChange}></slot>
                    ${label}
                  </div>
                </a>` : b` <div id="label" class="${prefix}--tree-node__label">
                  <slot name="icon" @slotchange=${handleIconSlotChange}></slot>
                  ${label}
                </div>`}
          ` : b`
            ${href ? b` <a
                    role="treeitem"
                    class=${linkClasses}
                    aria-expanded=${!!isExpanded}
                    aria-owns="subtree-id-${id}"
                    href=${!disabled ? href : void 0}
                    tabindex=${disabled ? -1 : void 0}
                    @click=${onClick}>
                    <div id="label" class="${prefix}--tree-node__label">
                      <span
                        class="${prefix}--tree-parent-node__toggle"
                        ?disabled=${disabled}
                        @click=${handleToggleClick}>
                        ${iconLoader(_16, { class: toggleClasses })}
                      </span>
                      <span class="${prefix}--tree-node__label__details">
                        <slot
                          name="icon"
                          @slotchange=${handleIconSlotChange}></slot>
                        ${label}
                      </span>
                    </div>
                  </a>
                  <ul
                    id="subtree-id-${id}"
                    role="group"
                    class="${subTreeClasses}">
                    <slot @slotchange=${handleSlotChange}></slot>
                  </ul>` : b`<div id="label" class="${prefix}--tree-node__label">
                    <span
                      class="${prefix}--tree-parent-node__toggle"
                      ?disabled=${disabled}
                      @click=${handleToggleClick}>
                      ${iconLoader(_16, { class: toggleClasses })}
                    </span>
                    <span class="${prefix}--tree-node__label__details">
                      <slot
                        name="icon"
                        @slotchange=${handleIconSlotChange}></slot>
                      ${label}
                    </span>
                  </div>
                  <ul
                    id="subtree-id-${id}"
                    role="group"
                    class="${subTreeClasses}">
                    <slot @slotchange=${handleSlotChange}></slot>
                  </ul>`}
          `}
    `;
  }
  /**
   * The name of the custom event fired when node is selected.
   */
  static get eventSelected() {
    return `${prefix}-tree-node-selected`;
  }
  /**
   * The name of the custom event fired when a node is toggled
   */
  static get eventToggled() {
    return `${prefix}-tree-node-toggled`;
  }
};
CDSTreeNode.styles = styles;
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTreeNode.prototype, "active", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTreeNode.prototype, "disabled", void 0);
__decorate([
  r()
], CDSTreeNode.prototype, "_depth", void 0);
__decorate([
  n({ type: Boolean, attribute: "is-expanded" })
], CDSTreeNode.prototype, "isExpanded", void 0);
__decorate([
  n({})
], CDSTreeNode.prototype, "href", void 0);
__decorate([
  n({})
], CDSTreeNode.prototype, "id", void 0);
__decorate([
  n({})
], CDSTreeNode.prototype, "label", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSTreeNode.prototype, "selected", void 0);
__decorate([
  n({ type: Function })
], CDSTreeNode.prototype, "onClick", void 0);
CDSTreeNode = __decorate([
  carbonElement(`${prefix}-tree-node`)
], CDSTreeNode);

// node_modules/@carbon/web-components/es/components/tree-view/defs.js
var TREE_SIZE;
(function(TREE_SIZE2) {
  TREE_SIZE2["SMALL"] = "sm";
  TREE_SIZE2["EXTRA_SMALL"] = "xs";
})(TREE_SIZE || (TREE_SIZE = {}));

// node_modules/@carbon/web-components/es/components/tree-view/tree-view.js
var CDSTreeView_1;
var CDSTreeView = CDSTreeView_1 = class CDSTreeView2 extends HostListenerMixin(i2) {
  constructor() {
    super(...arguments);
    this.hideLabel = false;
    this.size = TREE_SIZE.SMALL;
    this._click = ({ target }) => {
      if (target.disabled)
        return;
      const nodes = this.querySelectorAll(CDSTreeView_1.selectorTreeNode);
      nodes.forEach((node) => {
        var _a;
        const isTarget = node === target;
        const isLink = node.hasAttribute("href");
        const element = isLink ? (_a = node.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("a") : node;
        node.selected = isTarget;
        node.active = isTarget;
        if (!isTarget) {
          if (isLink) {
            element.setAttribute("tabindex", "-1");
          } else {
            element.removeAttribute("tabindex");
          }
        } else
          element.setAttribute("tabindex", "0");
      });
    };
    this._handleKeyDown = (event) => {
      const { key } = event;
      const nodes = Array.from(this.querySelectorAll(CDSTreeView_1.selectorTreeNode)).filter((node) => node.checkVisibility() && !node.hasAttribute("disabled"));
      const allNodes = Array.from(this.querySelectorAll(CDSTreeView_1.selectorTreeNode)).filter((node) => !node.hasAttribute("disabled"));
      const withLinks = nodes[0].href;
      const currentIndex = nodes.findIndex((node) => {
        var _a;
        return withLinks ? (
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- https://github.com/carbon-design-system/carbon/issues/20452
          ((_a = node.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("a").getAttribute("tabindex")) === "0"
        ) : node.getAttribute("tabindex") === "0";
      });
      let nextIndex = currentIndex;
      switch (key) {
        case "ArrowDown":
          nextIndex = Math.min(currentIndex + 1, nodes.length - 1);
          break;
        case "ArrowUp":
          nextIndex = Math.max(currentIndex - 1, 0);
          break;
        case "Home":
          nextIndex = 0;
          break;
        case "End":
          nextIndex = nodes.length - 1;
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          allNodes.forEach((node) => {
            node.selected = false;
            node.active = false;
          });
          nodes[currentIndex].selected = true;
          nodes[currentIndex].active = true;
          break;
        case "ArrowRight":
          if (nodes[currentIndex].hasAttribute("parent")) {
            nodes[currentIndex].isExpanded = true;
            nodes[currentIndex].setAttribute("aria-expanded", "true");
          }
          break;
        case "ArrowLeft":
          if (!nodes[currentIndex].hasAttribute("parent")) {
            const temp = nodes.findIndex((node) => node === nodes[currentIndex].parentElement);
            nextIndex = temp === -1 ? currentIndex : temp;
          } else {
            nodes[currentIndex].isExpanded = false;
            nodes[currentIndex].setAttribute("aria-expanded", "false");
          }
          break;
      }
      if (nextIndex !== currentIndex) {
        nodes.forEach((node) => {
          var _a;
          if (!withLinks) {
            node.removeAttribute("tabindex");
          } else {
            (_a = node.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("a").setAttribute("tabindex", "-1");
          }
        });
        const element = withLinks ? (
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- https://github.com/carbon-design-system/carbon/issues/20452
          nodes[nextIndex].shadowRoot.querySelector("a")
        ) : nodes[nextIndex];
        element.setAttribute("tabindex", "0");
        element.focus();
        event.preventDefault();
      }
    };
  }
  async _setInitialFocus() {
    await this.updateComplete;
    const nodes = this.querySelectorAll(CDSTreeView_1.selectorTreeNode);
    if (nodes.length > 0) {
      const selectedNode = Array.from(nodes).find((node) => node.selected) || nodes[0];
      const element = selectedNode.href ? (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- https://github.com/carbon-design-system/carbon/issues/20452
        selectedNode.shadowRoot.querySelector("a")
      ) : selectedNode;
      element.setAttribute("tabindex", "0");
    }
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "tree");
    }
    if (!this.hasAttribute("aria-label")) {
      this.setAttribute("aria-label", this.label);
    }
  }
  updated(changedProperties) {
    this._setInitialFocus();
    if (changedProperties.has("size")) {
      const items = this.querySelectorAll(CDSTreeView_1.selectorTreeNode);
      items.forEach((item) => {
        item.setAttribute("size", this.size);
      });
    }
  }
  render() {
    const { hideLabel, label, size } = this;
    const labelId = "tree-view__label";
    const treeClasses = e({
      [`${prefix}--tree`]: true,
      [`${prefix}--tree--${size}`]: size
    });
    return b`
      ${!hideLabel ? b`<label id=${labelId} class=${`${prefix}--label`}
              >${label}
            </label>` : null}
      <ul
        aria-label=${hideLabel ? label : void 0}
        aria-labelledby=${!hideLabel ? labelId : void 0}
        class=${treeClasses}
        role="tree">
        <slot><slot>
      </ul>
    `;
  }
  static get selectorTreeNode() {
    return `${prefix}-tree-node`;
  }
};
CDSTreeView.styles = styles;
__decorate([
  n({ type: Boolean, attribute: "hide-label" })
], CDSTreeView.prototype, "hideLabel", void 0);
__decorate([
  n()
], CDSTreeView.prototype, "label", void 0);
__decorate([
  n({ reflect: true })
], CDSTreeView.prototype, "size", void 0);
__decorate([
  HostListener("click")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSTreeView.prototype, "_click", void 0);
__decorate([
  HostListener("keydown")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSTreeView.prototype, "_handleKeyDown", void 0);
CDSTreeView = CDSTreeView_1 = __decorate([
  carbonElement(`${prefix}-tree-view`)
], CDSTreeView);
