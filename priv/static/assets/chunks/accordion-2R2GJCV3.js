import {
  _16
} from "./chunk-ZXB2XXTS.js";
import {
  forEach
} from "./chunk-3QPROXNA.js";
import {
  iconLoader
} from "./chunk-TRPNDHDH.js";
import "./chunk-LDCWSK5M.js";
import "./chunk-TEMKX2NW.js";
import "./chunk-BZXZJ7DW.js";
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
  i,
  i2
} from "./chunk-3GZFZEMV.js";
import "./chunk-G6EI4S4W.js";

// node_modules/@carbon/web-components/es/components/accordion/defs.js
var ACCORDION_ITEM_BREAKPOINT;
(function(ACCORDION_ITEM_BREAKPOINT2) {
  ACCORDION_ITEM_BREAKPOINT2["SMALL"] = "sm";
  ACCORDION_ITEM_BREAKPOINT2["MEDIUM"] = "md";
})(ACCORDION_ITEM_BREAKPOINT || (ACCORDION_ITEM_BREAKPOINT = {}));
var ACCORDION_SIZE;
(function(ACCORDION_SIZE2) {
  ACCORDION_SIZE2["SMALL"] = "sm";
  ACCORDION_SIZE2["MEDIUM"] = "md";
  ACCORDION_SIZE2["LARGE"] = "lg";
})(ACCORDION_SIZE || (ACCORDION_SIZE = {}));
var ACCORDION_ALIGNMENT;
(function(ACCORDION_ALIGNMENT2) {
  ACCORDION_ALIGNMENT2["START"] = "start";
  ACCORDION_ALIGNMENT2["END"] = "END";
})(ACCORDION_ALIGNMENT || (ACCORDION_ALIGNMENT = {}));

// node_modules/@carbon/web-components/es/components/accordion/accordion.scss.js
var styles = i(['.cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-background:var(--cds-layer-background-01,#fff);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-background:var(--cds-layer-background-02,#f4f4f4);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-background:var(--cds-layer-background-03,#fff);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}.cds--layer-one.cds--layer__with-background,.cds--layer-three.cds--layer__with-background,.cds--layer-two.cds--layer__with-background{background-color:var(--cds-layer-background)}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm,:host(cds-accordion-item-skeleton[size=sm]) button,:host(cds-accordion-item[size=sm]) button{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg,:host(cds-accordion-item-skeleton[size=lg]) button,:host(cds-accordion-item[size=lg]) button{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--accordion,:host(cds-accordion),:host(cds-accordion-skeleton){--cds-layout-size-height-local:clamp(max(var(--cds-layout-size-height-min),var(--cds-layout-size-height-sm)),var(--cds-layout-size-height,var(--cds-layout-size-height-md)),min(var(--cds-layout-size-height-max),var(--cds-layout-size-height-lg)));--cds-layout-density-padding-inline-local:clamp(var(--cds-layout-density-padding-inline-min),var(--cds-layout-density-padding-inline,var(--cds-layout-density-padding-inline-normal)),var(--cds-layout-density-padding-inline-max));border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--accordion *,.cds--accordion :after,.cds--accordion :before,:host(cds-accordion) *,:host(cds-accordion) :after,:host(cds-accordion) :before,:host(cds-accordion-skeleton) *,:host(cds-accordion-skeleton) :after,:host(cds-accordion-skeleton) :before{box-sizing:inherit}.cds--accordion,:host(cds-accordion),:host(cds-accordion-skeleton){inline-size:100%;list-style:none}.cds--accordion__item,:host(cds-accordion-item),:host(cds-accordion-item-skeleton){border-block-start:1px solid var(--cds-border-subtle);display:list-item;overflow:visible;transition:border-color .11s cubic-bezier(.2,0,.38,.9)}.cds--accordion__item:last-child{border-block-end:1px solid var(--cds-border-subtle)}.cds--accordion__item:not(.cds--accordion__item--active):hover,.cds--accordion__item:not(.cds--accordion__item--active):hover+.cds--accordion__item,.cds--accordion__item:not(.cds--accordion__item--active):hover+:host(cds-accordion-item),.cds--accordion__item:not(.cds--accordion__item--active):hover+:host(cds-accordion-item-skeleton){border-block-start-color:var(--cds-layer-hover)}.cds--accordion__item:not(.cds--accordion__item--active):last-child:hover{border-block-end-color:var(--cds-layer-hover)}.cds--accordion__heading{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;display:inline-block;font-family:inherit;font-size:100%;padding:0;text-align:start;transition:background-color .11s cubic-bezier(.2,0,.38,.9);vertical-align:baseline}.cds--accordion__heading *,.cds--accordion__heading :after,.cds--accordion__heading :before{box-sizing:inherit}.cds--accordion__heading::-moz-focus-inner{border:0}.cds--accordion__heading{align-items:center;color:var(--cds-text-primary,#161616);cursor:pointer;display:flex;flex-direction:row-reverse;inline-size:100%;justify-content:flex-start;margin:0;min-block-size:var(--cds-layout-size-height-local);padding-inline-end:var(--cds-layout-density-padding-inline-local);position:relative}.cds--accordion__heading:hover{background-color:var(--cds-layer-hover);outline:none}.cds--accordion__heading:focus{box-shadow:0 -1px 0 0 var(--cds-focus,#0f62fe),inset 0 1px 0 0 var(--cds-focus,#0f62fe),inset 2px 0 0 0 var(--cds-focus,#0f62fe),0 1px 0 0 var(--cds-focus,#0f62fe),inset 0 -1px 0 0 var(--cds-focus,#0f62fe),inset -2px 0 0 0 var(--cds-focus,#0f62fe);outline:none;position:relative;z-index:2}.cds--accordion__heading[disabled]{background-color:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed}.cds--accordion__heading[disabled] .cds--accordion__arrow{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--accordion__heading[disabled]:hover:before{background-color:transparent}.cds--accordion__item--disabled,.cds--accordion__item--disabled+.cds--accordion__item,.cds--accordion__item--disabled+:host(cds-accordion-item),.cds--accordion__item--disabled+:host(cds-accordion-item-skeleton){border-block-start:1px solid var(--cds-border-subtle)}li.cds--accordion__item--disabled:last-of-type{border-block-end:1px solid var(--cds-border-subtle)}.cds--accordion__arrow{block-size:1rem;flex:0 0 1rem;outline:2px solid transparent;outline-offset:-2px;transition:all .11s cubic-bezier(.2,0,.38,.9);fill:var(--cds-icon-primary,#161616);inline-size:1rem;transform:rotate(-270deg)}.cds--accordion__title{font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);inline-size:100%;letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);padding-inline-start:1rem;text-align:start;z-index:1}.cds--accordion__wrapper{display:none;max-block-size:0;opacity:0;overflow:hidden;padding:0;transition:all allow-discrete .11s cubic-bezier(0,0,.38,.9);writing-mode:horizontal-tb}.cds--accordion__content,:host(cds-accordion-item) .cds--accordion__content,:host(cds-accordion-item-skeleton) .cds--accordion__content{padding-inline:var(--cds-layout-density-padding-inline-local)}@media (min-width:480px){.cds--accordion__content,:host(cds-accordion-item) .cds--accordion__content,:host(cds-accordion-item-skeleton) .cds--accordion__content{padding-inline-end:3rem}}@media (min-width:640px){.cds--accordion__content,:host(cds-accordion-item) .cds--accordion__content,:host(cds-accordion-item-skeleton) .cds--accordion__content{padding-inline-end:25%}}.cds--accordion__content>p,:host(cds-accordion-item) .cds--accordion__content>p,:host(cds-accordion-item-skeleton) .cds--accordion__content>p{font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857)}.cds--accordion--start .cds--accordion__heading,:host(cds-accordion-item-skeleton[alignment=start]) .cds--accordion__heading,:host(cds-accordion-item[alignment=start]) .cds--accordion__heading{flex-direction:row}.cds--accordion--start .cds--accordion__arrow,:host(cds-accordion-item-skeleton[alignment=start]) .cds--accordion__arrow,:host(cds-accordion-item[alignment=start]) .cds--accordion__arrow{margin:2px 0 0 var(--cds-layout-density-padding-inline-local)}.cds--accordion--start .cds--accordion__title,:host(cds-accordion-item-skeleton[alignment=start]) .cds--accordion__title,:host(cds-accordion-item[alignment=start]) .cds--accordion__title{margin-inline-end:1rem}.cds--accordion--start .cds--accordion__content,:host(cds-accordion-item-skeleton[alignment=start]) .cds--accordion__content,:host(cds-accordion-item[alignment=start]) .cds--accordion__content{margin-inline-start:calc(var(--cds-layout-density-padding-inline-local) + 1rem)}.cds--accordion__item--collapsing .cds--accordion__content,.cds--accordion__item--expanding .cds--accordion__content,:host(cds-accordion-item[collapsing]) .cds--accordion__content,:host(cds-accordion-item[expanding]) .cds--accordion__content{display:block}.cds--accordion__item--active,:host(cds-accordion-item[open]:not([disabled])){overflow:visible}.cds--accordion__item--active>.cds--accordion__wrapper,:host(cds-accordion-item[open]:not([disabled]))>.cds--accordion__wrapper{display:block;max-block-size:-moz-fit-content;max-block-size:fit-content;opacity:1;overflow:visible;padding-block:.5rem;padding-block-end:1.5rem}.cds--accordion__item--active>.cds--accordion__heading>.cds--accordion__arrow,:host(cds-accordion-item[open]:not([disabled]))>.cds--accordion__heading>.cds--accordion__arrow{fill:var(--cds-icon-primary,#161616);transform:rotate(-90deg)}@starting-style{.cds--accordion__item--active>.cds--accordion__wrapper,:host(cds-accordion-item[open]:not([disabled]))>.cds--accordion__wrapper{max-block-size:0;opacity:0;padding:0}}.cds--accordion--flush .cds--accordion__item,.cds--accordion--flush :host(cds-accordion-item),.cds--accordion--flush :host(cds-accordion-item-skeleton){border-color:transparent;position:relative}.cds--accordion--flush .cds--accordion__item:hover,.cds--accordion--flush .cds--accordion__item:hover+.cds--accordion__item,.cds--accordion--flush .cds--accordion__item:hover+:host(cds-accordion-item),.cds--accordion--flush .cds--accordion__item:hover+:host(cds-accordion-item-skeleton),.cds--accordion--flush .cds--accordion__item:last-child,.cds--accordion--flush .cds--accordion__item:last-child:hover{border-color:transparent}.cds--accordion--flush .cds--accordion__item:after,.cds--accordion--flush .cds--accordion__item:before{block-size:1px;content:"";display:block;inline-size:calc(100% - 2rem);margin-inline-start:1rem;position:absolute;transition:background .11s cubic-bezier(.2,0,.38,.9)}@media screen and (prefers-reduced-motion:reduce){.cds--accordion--flush .cds--accordion__item:after,.cds--accordion--flush .cds--accordion__item:before{transition:none}}.cds--accordion--flush .cds--accordion__item:before{background:var(--cds-border-subtle);inset-block-start:-1px}.cds--accordion--flush .cds--accordion__item:last-child:after{background:var(--cds-border-subtle);inset-block-end:-1px}.cds--accordion--flush .cds--accordion__heading:hover{position:relative;z-index:1}.cds--accordion--flush .cds--accordion__heading:hover:after,.cds--accordion--flush .cds--accordion__heading:hover:before{background:var(--cds-layer-hover);block-size:1px;content:"";display:block;inline-size:100%;inset-inline-start:0;position:absolute;transition:background .11s cubic-bezier(.2,0,.38,.9)}@media screen and (prefers-reduced-motion:reduce){.cds--accordion--flush .cds--accordion__heading:hover:after,.cds--accordion--flush .cds--accordion__heading:hover:before{transition:none}}.cds--accordion--flush .cds--accordion__heading:hover:before{inset-block-start:-1px}.cds--accordion--flush .cds--accordion__heading:hover:after{inset-block-end:-1px}.cds--accordion--flush .cds--accordion__heading:hover:focus:after,.cds--accordion--flush .cds--accordion__heading:hover:focus:before{background:none}.cds--accordion.cds--skeleton .cds--accordion__button,.cds--accordion.cds--skeleton .cds--accordion__heading{cursor:default}.cds--accordion.cds--skeleton .cds--accordion__arrow{cursor:default;fill:var(--cds-icon-primary,#161616);pointer-events:none}.cds--accordion.cds--skeleton .cds--accordion__arrow:active,.cds--accordion.cds--skeleton .cds--accordion__arrow:focus,.cds--accordion.cds--skeleton .cds--accordion__arrow:hover{border:none;cursor:default;outline:none}.cds--accordion.cds--skeleton .cds--accordion__heading:hover,.cds--accordion.cds--skeleton .cds--accordion__heading:hover:before{background-color:transparent}.cds--accordion--end.cds--skeleton .cds--accordion__arrow{margin-inline-start:1rem}.cds--skeleton .cds--accordion__heading:focus .cds--accordion__arrow{border:none;cursor:default;outline:none}.cds--accordion__title.cds--skeleton__text{margin-block-end:0}.cds--accordion.cds--skeleton .cds--accordion__title{margin-inline-start:1rem}[dir=rtl] .cds--accordion--start .cds--accordion__heading,[dir=rtl] :host(cds-accordion-item-skeleton[alignment=start]) .cds--accordion__heading,[dir=rtl] :host(cds-accordion-item[alignment=start]) .cds--accordion__heading{padding-inline:var(--cds-layout-density-padding-inline-local) 0}[dir=rtl] .cds--accordion--start .cds--accordion__title,[dir=rtl] :host(cds-accordion-item-skeleton[alignment=start]) .cds--accordion__title,[dir=rtl] :host(cds-accordion-item[alignment=start]) .cds--accordion__title{margin-inline-end:0;padding-inline-start:0}:host(cds-accordion),:host(cds-accordion-skeleton){--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}:host(cds-accordion-item),:host(cds-accordion-item-skeleton){display:block;font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);outline:none}:host(cds-accordion-item) .cds--accordion__content ::slotted(p),:host(cds-accordion-item-skeleton) .cds--accordion__content ::slotted(p){font-size:var(--cds-body-01-font-size)!important;font-weight:var(--cds-body-01-font-weight);letter-spacing:var(--cds-body-01-letter-spacing);line-height:var(--cds-body-01-line-height);margin:0}:host([data-last-item]){border-block-end:1px solid var(--cds-border-subtle)}:host(cds-accordion-item-skeleton[size=sm]) button,:host(cds-accordion-item[size=sm]) button{min-block-size:var(--cds-layout-size-height-context)}:host(cds-accordion-item-skeleton[size=lg]) button,:host(cds-accordion-item[size=lg]) button{min-block-size:var(--cds-layout-size-height-context)}:host(cds-accordion-item-skeleton[isFlush]),:host(cds-accordion-item[isFlush]){border-color:transparent;position:relative}:host(cds-accordion-item-skeleton[isFlush]):after,:host(cds-accordion-item-skeleton[isFlush]):before,:host(cds-accordion-item[isFlush]):after,:host(cds-accordion-item[isFlush]):before{block-size:1px;content:"";display:block;inline-size:calc(100% - 2rem);margin-inline-start:1rem;position:absolute;transition:background .11s cubic-bezier(0,0,.38,.9)}@media screen and (prefers-reduced-motion:reduce){:host(cds-accordion-item-skeleton[isFlush]):after,:host(cds-accordion-item-skeleton[isFlush]):before,:host(cds-accordion-item[isFlush]):after,:host(cds-accordion-item[isFlush]):before{transition:none}}:host(cds-accordion-item-skeleton[isFlush]):before,:host(cds-accordion-item[isFlush]):before{background:var(--cds-border-subtle);inset-block-start:-1px}:host(cds-accordion-item-skeleton[isFlush]):after,:host(cds-accordion-item[isFlush]):after{background:var(--cds-border-subtle);inset-block-end:-1px}:host([isFlush]) .cds--accordion__heading:hover{position:relative;z-index:1}:host([isFlush]) .cds--accordion__heading:hover:after,:host([isFlush]) .cds--accordion__heading:hover:before{background:var(--cds-layer-hover);block-size:1px;content:"";display:block;inline-size:100%;inset-inline-start:0;position:absolute;transition:background .11s cubic-bezier(.2,0,.38,.9)}@media screen and (prefers-reduced-motion:reduce){:host([isFlush]) .cds--accordion__heading:hover:after,:host([isFlush]) .cds--accordion__heading:hover:before{transition:none}}:host([isFlush]) .cds--accordion__heading:hover:before{inset-block-start:-1px}:host([isFlush]) .cds--accordion__heading:hover:after{inset-block-end:-1px}:host([isFlush]) .cds--accordion__heading:hover:focus:after,:host([isFlush]) .cds--accordion__heading:hover:focus:before{background:none}:host(cds-accordion-item[open]:not([disabled])) .cds--accordion__content{padding-inline-end:1rem}:host(cds-accordion-item[open]:not([disabled])) .cds-ce--accordion__content--sm{padding-inline-end:3rem}:host(cds-accordion-item[open]:not([disabled])) .cds-ce--accordion__content--md{padding-inline-end:25%}:host(cds-accordion-item-skeleton) .cds--accordion__heading,:host(cds-accordion-skeleton) .cds--accordion__heading{cursor:default;pointer-events:none}:host(cds-accordion-item-skeleton) .cds--accordion__heading:hover:before,:host(cds-accordion-skeleton) .cds--accordion__heading:hover:before{background:transparent}:host(cds-accordion-item-skeleton[alignment=end i]) .cds--accordion__arrow,:host(cds-accordion-item[alignment=end i]) .cds--accordion__arrow,:host(cds-accordion-skeleton) .cds--accordion__item.cds--accordion--END .cds--accordion__arrow{margin-inline-start:1rem}:host(cds-accordion-item-skeleton) .cds--accordion__title,:host(cds-accordion-skeleton) .cds--accordion__heading .cds--accordion__title{padding-block-start:.5rem}.controlled-accordion-btn{max-inline-size:13.25rem}']);

// node_modules/@carbon/web-components/es/components/accordion/accordion.js
var CDSAccordion = class CDSAccordion2 extends i2 {
  constructor() {
    super(...arguments);
    this.size = ACCORDION_SIZE.MEDIUM;
    this.alignment = ACCORDION_ALIGNMENT.END;
    this.isFlush = false;
    this.disabled = false;
  }
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "list");
    }
    super.connectedCallback();
  }
  updated(changedProperties) {
    if (changedProperties.has("size")) {
      forEach(this.querySelectorAll(this.constructor.selectorAccordionItems), (elem) => {
        elem.setAttribute("size", this.size);
      });
    }
    if (changedProperties.has("alignment")) {
      forEach(this.querySelectorAll(this.constructor.selectorAccordionItems), (elem) => {
        elem.setAttribute("alignment", this.alignment);
      });
    }
    if (changedProperties.has("isFlush") || changedProperties.has("alignment")) {
      forEach(this.querySelectorAll(this.constructor.selectorAccordionItems), (elem) => {
        if (this.isFlush && this.alignment !== "start") {
          elem.setAttribute("isFlush", "");
        } else {
          elem.removeAttribute("isFlush");
        }
      });
    }
    if (changedProperties.has("disabled")) {
      forEach(this.querySelectorAll(this.constructor.selectorAccordionItems), (elem) => {
        if (this.disabled) {
          elem.setAttribute("disabled", "");
        } else {
          elem.removeAttribute("disabled");
        }
      });
    }
    const items = Array.from(this.querySelectorAll(this.constructor.selectorAccordionItems));
    items.forEach((item) => item.removeAttribute("data-last-item"));
    const lastVisible = items.reverse().find((item) => !item.hidden);
    lastVisible === null || lastVisible === void 0 ? void 0 : lastVisible.setAttribute("data-last-item", "");
  }
  render() {
    return b` <slot></slot> `;
  }
  static get selectorAccordionItems() {
    return `${prefix}-accordion-item`;
  }
};
CDSAccordion.styles = styles;
__decorate([
  n({ reflect: true })
], CDSAccordion.prototype, "size", void 0);
__decorate([
  n({ reflect: true })
], CDSAccordion.prototype, "alignment", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSAccordion.prototype, "isFlush", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSAccordion.prototype, "disabled", void 0);
CDSAccordion = __decorate([
  carbonElement(`${prefix}-accordion`)
], CDSAccordion);

// node_modules/@carbon/web-components/es/components/accordion/accordion-item.js
var observeResize = (observer, elem) => {
  if (!elem) {
    return null;
  }
  observer.observe(elem);
  return {
    release() {
      observer.unobserve(elem);
      return null;
    }
  };
};
var CDSAccordionItem = class CDSAccordionItem2 extends FocusMixin(i2) {
  constructor() {
    super(...arguments);
    this._hObserveResize = null;
    this._handleKeydownExpando = ({ key }) => {
      if (this.open && (key === "Esc" || key === "Escape")) {
        this._handleUserInitiatedToggle(false);
      }
    };
    this._resizeObserver = new ResizeObserver((records) => {
      const { width } = records[records.length - 1].contentRect;
      const { _sizesBreakpoints: sizesBreakpoints } = this.constructor;
      this._currentBreakpoint = Object.keys(sizesBreakpoints).sort((lhs, rhs) => sizesBreakpoints[rhs] - sizesBreakpoints[lhs]).find((size) => width >= sizesBreakpoints[size]);
      this.requestUpdate?.();
    });
    this.disabled = false;
    this.open = false;
    this.title = "";
  }
  /**
   * Handles user-initiated toggle request of this accordion item.
   *
   * @param open The new open state.
   */
  _handleUserInitiatedToggle(open = !this.open) {
    const init = {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        open
      }
    };
    if (this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeToggle, init))) {
      const { selectorAccordionContent } = this.constructor;
      if (!this.open) {
        this.setAttribute("expanding", "");
      } else {
        this.setAttribute("collapsing", "");
      }
      this.shadowRoot.querySelector(selectorAccordionContent).addEventListener("animationend", () => {
        this.removeAttribute("expanding");
        this.removeAttribute("collapsing");
      });
      this.open = open;
      this.dispatchEvent(new CustomEvent(this.constructor.eventToggle, init));
    }
  }
  /**
   * Handler for the `click` event on the expando button.
   */
  _handleClickExpando() {
    this._handleUserInitiatedToggle();
  }
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "listitem");
    }
    super.connectedCallback();
    if (this._hObserveResize) {
      this._hObserveResize = this._hObserveResize.release();
    }
    this._hObserveResize = observeResize(this._resizeObserver, this);
  }
  disconnectedCallback() {
    if (this._hObserveResize) {
      this._hObserveResize = this._hObserveResize.release();
    }
  }
  render() {
    const { disabled, title, open, _currentBreakpoint: currentBreakpoint, _handleClickExpando: handleClickExpando, _handleKeydownExpando: handleKeydownExpando } = this;
    const { _classesBreakpoints: classesBreakpoints } = this.constructor;
    const { [currentBreakpoint]: classBreakpoint } = classesBreakpoints;
    const contentClasses = e({
      [classBreakpoint]: classBreakpoint,
      [`${prefix}--accordion__content`]: true
    });
    return b`
      <button
        ?disabled="${disabled}"
        type="button"
        part="expando"
        class="${prefix}--accordion__heading"
        aria-controls="content"
        aria-expanded="${open}"
        @click="${handleClickExpando}"
        @keydown="${handleKeydownExpando}">
        ${iconLoader(_16, {
      part: "expando-icon",
      class: `${prefix}--accordion__arrow`
    })}
        <div part="title" class="${prefix}--accordion__title">
          <slot name="title">${title}</slot>
        </div>
      </button>
      <div class="${prefix}--accordion__wrapper" part="wrapper">
        <div id="content" part="content" class="${contentClasses}">
          <slot></slot>
        </div>
      </div>
    `;
  }
  /**
   * The CSS classes for breakpoints.
   *
   * @private
   */
  static get _classesBreakpoints() {
    return {
      [ACCORDION_ITEM_BREAKPOINT.SMALL]: `${prefix}-ce--accordion__content--${ACCORDION_ITEM_BREAKPOINT.SMALL}`,
      [ACCORDION_ITEM_BREAKPOINT.MEDIUM]: `${prefix}-ce--accordion__content--${ACCORDION_ITEM_BREAKPOINT.MEDIUM}`
    };
  }
  /**
   * The breakpoints.
   *
   * @private
   */
  static get _sizesBreakpoints() {
    return {
      [ACCORDION_ITEM_BREAKPOINT.SMALL]: 480,
      [ACCORDION_ITEM_BREAKPOINT.MEDIUM]: 640
    };
  }
  /**
   * The name of the custom event fired before this accordion item is being toggled upon a user gesture.
   * Cancellation of this event stops the user-initiated action of toggling this accordion item.
   */
  static get eventBeforeToggle() {
    return `${prefix}-accordion-item-beingtoggled`;
  }
  /**
   * The name of the custom event fired after this accordion item is toggled upon a user gesture.
   */
  static get eventToggle() {
    return `${prefix}-accordion-item-toggled`;
  }
  static get selectorAccordionContent() {
    return `.${prefix}--accordion__content`;
  }
};
CDSAccordionItem.styles = styles;
__decorate([
  n({ type: Boolean, reflect: true })
], CDSAccordionItem.prototype, "disabled", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSAccordionItem.prototype, "open", void 0);
__decorate([
  n({ attribute: "title" })
], CDSAccordionItem.prototype, "title", void 0);
CDSAccordionItem = __decorate([
  carbonElement(`${prefix}-accordion-item`)
], CDSAccordionItem);

// node_modules/@carbon/web-components/es/components/accordion/accordion-item-skeleton.js
var CDSAccordionItemSkeleton = class CDSAccordionItemSkeleton2 extends i2 {
  render() {
    return b`
      <span class="${prefix}--accordion__heading">
        ${iconLoader(_16, {
      part: "expando-icon",
      class: `${prefix}--accordion__arrow`
    })}
        <cds-skeleton-text
          class="${prefix}--accordion__title"></cds-skeleton-text>
      </span>
    `;
  }
};
CDSAccordionItemSkeleton.styles = styles;
CDSAccordionItemSkeleton = __decorate([
  carbonElement(`${prefix}-accordion-item-skeleton`)
], CDSAccordionItemSkeleton);

// node_modules/@carbon/web-components/es/components/accordion/accordion-skeleton.js
var CDSAccordionSkeleton = class CDSAccordionSkeleton2 extends i2 {
  constructor() {
    super(...arguments);
    this.alignment = ACCORDION_ALIGNMENT.END;
    this.count = 4;
    this.isFlush = false;
    this.open = true;
  }
  updated(changedProperties) {
    if (changedProperties.has("alignment")) {
      forEach(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- https://github.com/carbon-design-system/carbon/issues/20452
        this.shadowRoot.querySelectorAll(this.constructor.selectorAccordionItemSkeletons),
        (elem) => {
          elem.setAttribute("alignment", this.alignment);
        }
      );
    }
    if (changedProperties.has("isFlush") || changedProperties.has("alignment")) {
      forEach(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- https://github.com/carbon-design-system/carbon/issues/20452
        this.shadowRoot.querySelectorAll(this.constructor.selectorAccordionItemSkeletons),
        (elem) => {
          if (this.isFlush && this.alignment !== "start") {
            elem.setAttribute("isFlush", "");
          } else {
            elem.removeAttribute("isFlush");
          }
        }
      );
    }
  }
  render() {
    const classes = e({
      [`${prefix}--accordion__item`]: true,
      [`${prefix}--accordion__item--active`]: true,
      [`${prefix}--accordion--${this.alignment}`]: this.alignment,
      [`${prefix}--accordion--flush`]: this.isFlush && this.alignment !== "start"
    });
    const numSkeletonItems = this.open ? this.count - 1 : this.count;
    return b`
      ${this.open ? b`
            <li class="${classes}">
              <span class="${prefix}--accordion__heading">
                ${iconLoader(_16, {
      class: `${prefix}--accordion__arrow`,
      part: "expando-icon"
    })}
                <cds-skeleton-text
                  class="${prefix}--accordion__title"></cds-skeleton-text>
              </span>
              <div class="${prefix}--accordion__content">
                <cds-skeleton-text width="90%"></cds-skeleton-text>
                <cds-skeleton-text width="80%"></cds-skeleton-text>
                <cds-skeleton-text width="95%"></cds-skeleton-text>
              </div>
            </li>
          ` : ``}
      ${Array.from({ length: numSkeletonItems }).map((_, i3, arr) => b`<cds-accordion-item-skeleton
            key=${i3}
            ?data-last-item=${i3 === arr.length - 1}></cds-accordion-item-skeleton>`)}
    `;
  }
  static get selectorAccordionItemSkeletons() {
    return `${prefix}-accordion-item-skeleton`;
  }
};
CDSAccordionSkeleton.styles = styles;
__decorate([
  n({ reflect: true })
], CDSAccordionSkeleton.prototype, "alignment", void 0);
__decorate([
  n({ type: Number, attribute: "count" })
], CDSAccordionSkeleton.prototype, "count", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSAccordionSkeleton.prototype, "isFlush", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSAccordionSkeleton.prototype, "open", void 0);
CDSAccordionSkeleton = __decorate([
  carbonElement(`${prefix}-accordion-skeleton`)
], CDSAccordionSkeleton);
