import {
  CDSIconButton$1,
  iconButtonStyles
} from "./chunk-F6EIPXKQ.js";
import "./chunk-LSZ2PVLU.js";
import "./chunk-X7WRA7XG.js";
import "./chunk-HFGTZQQE.js";
import "./chunk-SMM5AFXN.js";
import "./chunk-MU62I7LL.js";
import {
  find,
  indexOf
} from "./chunk-3QPROXNA.js";
import "./chunk-DFLJB7UB.js";
import "./chunk-GPZZH3QI.js";
import "./chunk-IGHLRMAE.js";
import "./chunk-JYACJRIF.js";
import {
  HostListener
} from "./chunk-5HWAKYGL.js";
import {
  HostListenerMixin
} from "./chunk-TGGEFEEZ.js";
import "./chunk-ML2VKJHQ.js";
import "./chunk-DAFPBEYU.js";
import {
  FocusMixin
} from "./chunk-73FE5HOG.js";
import "./chunk-YOLTZNLE.js";
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
  S,
  __decorate,
  b,
  i,
  i2
} from "./chunk-3GZFZEMV.js";
import "./chunk-G6EI4S4W.js";

// node_modules/@carbon/web-components/es/components/overflow-menu/defs.js
var OVERFLOW_MENU_SIZE;
(function(OVERFLOW_MENU_SIZE2) {
  OVERFLOW_MENU_SIZE2["EXTRA_SMALL"] = "xs";
  OVERFLOW_MENU_SIZE2["SMALL"] = "sm";
  OVERFLOW_MENU_SIZE2["MEDIUM"] = "md";
  OVERFLOW_MENU_SIZE2["LARGE"] = "lg";
})(OVERFLOW_MENU_SIZE || (OVERFLOW_MENU_SIZE = {}));
var NAVIGATION_DIRECTION = {
  ArrowDown: 1,
  ArrowUp: -1
};

// node_modules/@carbon/web-components/es/components/overflow-menu/overflow-menu.scss.js
var styles = i(['.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-background:var(--cds-layer-background-01,#fff);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-background:var(--cds-layer-background-02,#f4f4f4);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-background:var(--cds-layer-background-03,#fff);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}.cds--layer-one.cds--layer__with-background,.cds--layer-three.cds--layer__with-background,.cds--layer-two.cds--layer__with-background{background-color:var(--cds-layer-background)}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--assistive-text,.cds--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--popover-container{display:inline-block}.cds--popover-container:not(.cds--popover--auto-align){position:relative}.cds--popover--high-contrast .cds--popover{--cds-popover-background-color:var(--cds-background-inverse,#393939);--cds-popover-text-color:var(--cds-text-inverse,#fff)}.cds--popover--drop-shadow .cds--popover{filter:var(--cds-popover-drop-shadow,drop-shadow(0 .125rem .125rem rgba(0,0,0,.2)))}.cds--popover--border>.cds--popover>.cds--popover-content{outline:1px solid var(--cds-popover-border-color,var(--cds-border-subtle));outline-offset:-1px}.cds--popover--caret{--cds-popover-offset:0.625rem}.cds--popover{inset:0;pointer-events:none;position:absolute;z-index:6000}.cds--popover-content{--cds-layout-size-height-sm:2rem}.cds--layout--size-sm :where(.cds--popover-content),.cds--popover-content.cds--layout--size-sm{--cds-layout-size-height:var(--cds-layout-size-height-sm)}.cds--popover-content{--cds-layout-size-height-md:2.5rem}.cds--layout--size-md :where(.cds--popover-content),.cds--popover-content.cds--layout--size-md{--cds-layout-size-height:var(--cds-layout-size-height-md)}.cds--popover-content{--cds-layout-size-height-lg:3rem}.cds--layout--size-lg :where(.cds--popover-content),.cds--popover-content.cds--layout--size-lg{--cds-layout-size-height:var(--cds-layout-size-height-lg)}.cds--popover-content{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--popover-content *,.cds--popover-content :after,.cds--popover-content :before{box-sizing:inherit}.cds--popover-content{background-color:var(--cds-popover-background-color,var(--cds-layer));border-radius:var(--cds-popover-border-radius,2px);color:var(--cds-popover-text-color,var(--cds-text-primary,#161616));display:none;inline-size:-moz-max-content;inline-size:max-content;max-inline-size:23rem;pointer-events:auto;position:absolute;z-index:6000}.cds--popover--open>.cds--popover>.cds--popover-content{display:block}.cds--popover--background-token__background>.cds--popover>.cds--popover-content{background-color:var(--cds-background,#fff)}.cds--popover-content:before{content:"";display:none;position:absolute}.cds--popover--open>.cds--popover>.cds--popover-content:before{display:block}.cds--popover--auto-align.cds--popover-caret,.cds--popover-caret{display:none;position:absolute;will-change:transform;z-index:6000}.cds--popover--auto-align.cds--popover-caret:after,.cds--popover-caret:after{background-color:var(--cds-popover-background-color,var(--cds-layer));content:"";display:block;position:absolute}.cds--popover--auto-align.cds--popover-caret:before,.cds--popover-caret:before{background-color:var(--cds-popover-border-color,var(--cds-border-subtle));content:"";display:none;position:absolute}.cds--popover--background-token__background>.cds--popover>.cds--popover-caret:after{background-color:var(--cds-background,#fff)}.cds--popover--auto-align.cds--popover--caret.cds--popover--open>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--border .cds--popover--auto-align.cds--popover-caret:before,.cds--popover--border .cds--popover-caret:before,.cds--popover--caret.cds--popover--open>.cds--popover>.cds--popover-caret{display:block}.cds--popover--tab-tip>.cds--popover>.cds--popover-caret{display:none}.cds--popover--bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-start:50%;transform:translate(-50%,calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{transform:translate(50%,calc(100% + var(--cds-popover-offset, 0rem)))}.cds--popover--bottom-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-start:calc(50% - var(--cds-popover-offset, 0rem));transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:calc(50% - var(--cds-popover-offset, 0rem));inset-inline-start:auto}.cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--bottom-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-end:calc(50% - var(--cds-popover-offset, 0rem));transform:translate(var(--cds-popover-offset,0),calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--bottom-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:calc(50% - var(--cds-popover-offset, 0rem))}.cds--popover--bottom-end>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-left>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-right>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-start>.cds--popover>.cds--popover-content:before,.cds--popover--bottom>.cds--popover>.cds--popover-content:before{block-size:var(--cds-popover-offset,0);inset-block-start:0;inset-inline:0;transform:translateY(-100%)}.cds--popover--bottom-end>.cds--popover>.cds--popover-caret,.cds--popover--bottom-left>.cds--popover>.cds--popover-caret,.cds--popover--bottom-right>.cds--popover>.cds--popover-caret,.cds--popover--bottom-start>.cds--popover>.cds--popover-caret,.cds--popover--bottom>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);inline-size:var(--cds-popover-caret-width,.75rem);inset-block-end:0;inset-inline-start:50%;transform:translate(-50%,var(--cds-popover-offset,0))}.cds--popover--border.cds--popover--bottom-end>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-left>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-right>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-start>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom>.cds--popover>.cds--popover-caret:before,.cds--popover--bottom-end>.cds--popover>.cds--popover-caret:after,.cds--popover--bottom-left>.cds--popover>.cds--popover-caret:after,.cds--popover--bottom-right>.cds--popover>.cds--popover-caret:after,.cds--popover--bottom-start>.cds--popover>.cds--popover-caret:after,.cds--popover--bottom>.cds--popover>.cds--popover-caret:after{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 100%,50% 0,100% 100%);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--bottom-end>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-left>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-right>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-start>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom>.cds--popover>.cds--popover-caret:after{inline-size:calc(var(--cds-popover-caret-width, .75rem) - 1px);inset-block-start:1px;inset-inline-start:.5px}[dir=rtl] .cds--popover--bottom-end>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-left>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-right>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-start>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom>.cds--popover>.cds--popover-caret{transform:translate(50%,var(--cds-popover-offset,0))}.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 100%,50% 0,100% 100%);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inline-size:calc(var(--cds-popover-caret-width, .75rem) - 1px);inset-block-start:1px;inset-inline-start:.5px}.cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-start:50%;transform:translate(-50%,calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{transform:translate(50%,calc(-100% - var(--cds-popover-offset, 0rem)))}.cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-start:calc(50% - var(--cds-popover-offset, 0rem));transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:calc(50% - var(--cds-popover-offset, 0rem));inset-inline-start:auto}.cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-end:calc(50% - var(--cds-popover-offset, 0rem));transform:translate(var(--cds-popover-offset,0),calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:calc(50% - var(--cds-popover-offset, 0rem))}.cds--popover--top-end>.cds--popover>.cds--popover-content:before,.cds--popover--top-left>.cds--popover>.cds--popover-content:before,.cds--popover--top-right>.cds--popover>.cds--popover-content:before,.cds--popover--top-start>.cds--popover>.cds--popover-content:before,.cds--popover--top>.cds--popover>.cds--popover-content:before{block-size:var(--cds-popover-offset,0);inset-block-end:0;inset-inline:0;transform:translateY(100%)}.cds--popover--top-end>.cds--popover>.cds--popover-caret,.cds--popover--top-left>.cds--popover>.cds--popover-caret,.cds--popover--top-right>.cds--popover>.cds--popover-caret,.cds--popover--top-start>.cds--popover>.cds--popover-caret,.cds--popover--top>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);inline-size:var(--cds-popover-caret-width,.75rem);inset-block-start:0;inset-inline-start:50%;transform:translate(-50%,calc(var(--cds-popover-offset, 0rem)*-1))}.cds--popover--border.cds--popover--top-end>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-left>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-right>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-start>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--top>.cds--popover>.cds--popover-caret:before,.cds--popover--top-end>.cds--popover>.cds--popover-caret:after,.cds--popover--top-left>.cds--popover>.cds--popover-caret:after,.cds--popover--top-right>.cds--popover>.cds--popover-caret:after,.cds--popover--top-start>.cds--popover>.cds--popover-caret:after,.cds--popover--top>.cds--popover>.cds--popover-caret:after{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 0,50% 100%,100% 0);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--top-end>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-left>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-right>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-start>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--top>.cds--popover>.cds--popover-caret:after{inline-size:calc(var(--cds-popover-caret-width, .75rem) - 1px);inset-block-start:-1px;inset-inline-start:.5px}[dir=rtl] .cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{transform:translate(50%,calc(var(--cds-popover-offset, 0rem)*-1))}.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 0,50% 100%,100% 0);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inline-size:calc(var(--cds-popover-caret-width, .75rem) - 1px);inset-block-start:-1px;inset-inline-start:.5px}.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),-50%)}.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),calc(var(--cds-popover-offset, 0rem)*.5*-1 - 16px))}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),calc(var(--cds-popover-offset, 0rem)*.5 + 16px))}[dir=rtl] .cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:100%;inset-inline-start:auto}.cds--popover--right-bottom>.cds--popover>.cds--popover-content:before,.cds--popover--right-end>.cds--popover>.cds--popover-content:before,.cds--popover--right-start>.cds--popover>.cds--popover-content:before,.cds--popover--right-top>.cds--popover>.cds--popover-content:before,.cds--popover--right>.cds--popover>.cds--popover-content:before{inline-size:var(--cds-popover-offset,0);inset-block:0;inset-inline-start:0;transform:translateX(-100%)}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);inline-size:var(--cds-popover-caret-height,.375rem);inset-block-start:50%;inset-inline-start:100%;transform:translate(calc(var(--cds-popover-offset, 0rem) - 100%),-50%)}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem)}[dir=rtl] .cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{inset-inline-end:100%;inset-inline-start:auto}.cds--popover--border.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{inset-inline-start:1px}[dir=rtl] .cds--popover--border.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{inset-inline-start:-1px}.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inset-inline-start:1px}[dir=rtl] .cds--popover--border.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before{margin-inline-start:1px}[dir=rtl] .cds--popover--border.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inset-inline-start:0}.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1 + .1px),-50%)}.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(var(--cds-popover-offset, 0rem)*-.5 - 16px))}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(var(--cds-popover-offset, 0rem)*.5 + 16px))}[dir=rtl] .cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:auto;inset-inline-start:100%}.cds--popover--left-bottom>.cds--popover>.cds--popover-content:before,.cds--popover--left-end>.cds--popover>.cds--popover-content:before,.cds--popover--left-start>.cds--popover>.cds--popover-content:before,.cds--popover--left-top>.cds--popover>.cds--popover-content:before,.cds--popover--left>.cds--popover>.cds--popover-content:before{inline-size:var(--cds-popover-offset,0);inset-block:0;inset-inline-end:0;transform:translateX(100%)}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);inline-size:var(--cds-popover-caret-height,.375rem);inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1 + 100%),-50%)}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem)}[dir=rtl] .cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{inset-inline-end:auto;inset-inline-start:100%}.cds--popover--border.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{inset-inline-start:-1px}[dir=rtl] .cds--popover--border.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{inset-inline-start:1px}.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inset-inline-start:-1px}[dir=rtl] .cds--popover--border.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before{margin-inline-start:-1px}[dir=rtl] .cds--popover--border.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inset-inline-start:0}.cds--popover--tab-tip>.cds--popover>.cds--popover-content{border-radius:0}.cds--popover--tab-tip.cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--tab-tip.cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--tab-tip.cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--tab-tip.cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:0}.cds--popover--tab-tip.cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--tab-tip.cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--tab-tip.cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--tab-tip.cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:0;inset-inline-start:auto}.cds--popover--tab-tip .cds--popover{will-change:filter}.cds--popover--tab-tip__button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--popover--tab-tip__button *,.cds--popover--tab-tip__button :after,.cds--popover--tab-tip__button :before{box-sizing:inherit}.cds--popover--tab-tip__button::-moz-focus-inner{border:0}.cds--popover--tab-tip__button{align-items:center;block-size:2rem;display:inline-flex;inline-size:2rem;justify-content:center;position:relative}.cds--popover--tab-tip__button:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--popover--tab-tip__button:focus{outline-style:dotted}}.cds--popover--tab-tip__button:hover{background-color:var(--cds-layer-hover)}.cds--popover--tab-tip.cds--popover--open .cds--popover--tab-tip__button{background:var(--cds-layer);box-shadow:0 2px 2px rgba(0,0,0,.2)}.cds--popover--tab-tip.cds--popover--open .cds--popover--tab-tip__button:not(:focus):after{background:var(--cds-layer);block-size:2px;content:"";inline-size:100%;inset-block-end:0;position:absolute;z-index:6001}.cds--popover--tab-tip__button svg{fill:var(--cds-icon-primary,#161616)}.cds--tooltip{--cds-popover-offset:12px}.cds--tooltip-content{font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);max-inline-size:18rem;overflow-wrap:break-word;padding:var(--cds-tooltip-padding-block,1rem) var(--cds-tooltip-padding-inline,1rem)}.cds--icon-tooltip{--cds-tooltip-padding-block:0.125rem;--cds-popover-caret-width:0.5rem;--cds-popover-caret-height:0.25rem;--cds-popover-offset:0.5rem}.cds--icon-tooltip .cds--tooltip-content{font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--definition-term{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--definition-term *,.cds--definition-term :after,.cds--definition-term :before{box-sizing:inherit}.cds--definition-term::-moz-focus-inner{border:0}.cds--definition-term{border-block-end:1px dotted var(--cds-border-strong);border-radius:0;color:var(--cds-text-primary,#161616)}.cds--definition-term:focus{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--definition-term:focus{outline-style:dotted}}.cds--definition-term:focus,.cds--definition-term:hover{border-block-end-color:var(--cds-border-interactive,#0f62fe)}.cds--definition-tooltip{font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);max-inline-size:11rem;padding:.5rem 1rem;text-wrap:auto;word-break:break-word}.cds--btn{--cds-layout-size-height-local:clamp(max(var(--cds-layout-size-height-min),var(--cds-layout-size-height-xs)),var(--cds-layout-size-height,var(--cds-layout-size-height-lg)),min(var(--cds-layout-size-height-max),var(--cds-layout-size-height-2xl)));--cds-layout-density-padding-inline-local:clamp(var(--cds-layout-density-padding-inline-min),var(--cds-layout-density-padding-inline,var(--cds-layout-density-padding-inline-normal)),var(--cds-layout-density-padding-inline-max));--temp-1lh:(var(--cds-body-compact-01-line-height,1.28572) * 1em);--temp-expressive-1lh:(var(--cds-body-compact-02-line-height,1.375) * 1em);--temp-padding-block-max:calc((var(--cds-layout-size-height-lg) - var(--temp-1lh))/2 - 0.0625rem);border:0;box-sizing:border-box;font-family:inherit;font-size:100%;padding:0;vertical-align:baseline}.cds--btn *,.cds--btn :after,.cds--btn :before{box-sizing:inherit}.cds--btn{border-radius:0;cursor:pointer;display:inline-flex;flex-shrink:0;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);inline-size:-moz-max-content;inline-size:max-content;justify-content:space-between;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);margin:0;max-inline-size:20rem;min-block-size:var(--cds-layout-size-height-local);outline:none;padding-block:min((var(--cds-layout-size-height-local) - var(--temp-1lh))/2 - .0625rem,var(--temp-padding-block-max));padding-inline:calc(var(--cds-layout-density-padding-inline-local) - .0625rem) calc(var(--cds-layout-density-padding-inline-local)*3 + .9375rem);position:relative;text-align:start;text-decoration:none;transition:background 70ms cubic-bezier(0,0,.38,.9),box-shadow 70ms cubic-bezier(0,0,.38,.9),border-color 70ms cubic-bezier(0,0,.38,.9),outline 70ms cubic-bezier(0,0,.38,.9);vertical-align:top}.cds--btn.cds--btn--disabled,.cds--btn.cds--btn--disabled:focus,.cds--btn.cds--btn--disabled:hover,.cds--btn:disabled,.cds--btn:focus:disabled,.cds--btn:hover:disabled{background:var(--cds-button-disabled,#c6c6c6);border-color:var(--cds-button-disabled,#c6c6c6);box-shadow:none;color:var(--cds-text-on-color-disabled,#8d8d8d);cursor:not-allowed}.cds--btn .cds--btn__icon{block-size:1rem;flex-shrink:0;inline-size:1rem;inset-block-start:min((var(--cds-layout-size-height-local) - 1rem)/2 - .0625rem,var(--temp-padding-block-max));inset-inline-end:var(--cds-layout-density-padding-inline-local);margin-block-start:.0625rem;position:absolute}.cds--btn::-moz-focus-inner{border:0;padding:0}.cds--btn--primary{background-color:var(--cds-button-primary,#0f62fe);border:1px solid transparent;color:var(--cds-text-on-color,#fff)}.cds--btn--primary:hover{background-color:var(--cds-button-primary-hover,#0050e6)}.cds--btn--primary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--primary:active{background-color:var(--cds-button-primary-active,#002d9c)}.cds--btn--primary .cds--btn__icon,.cds--btn--primary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--primary:hover,.cds--btn--secondary{color:var(--cds-text-on-color,#fff)}.cds--btn--secondary{background-color:var(--cds-button-secondary,#393939);border:1px solid transparent}.cds--btn--secondary:hover{background-color:var(--cds-button-secondary-hover,#474747)}.cds--btn--secondary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--secondary:active{background-color:var(--cds-button-secondary-active,#6f6f6f)}.cds--btn--secondary .cds--btn__icon,.cds--btn--secondary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--secondary:focus,.cds--btn--secondary:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--tertiary{background-color:transparent;border-color:var(--cds-button-tertiary,#0f62fe);border-style:solid;border-width:1px;color:var(--cds-button-tertiary,#0f62fe)}.cds--btn--tertiary:hover{background-color:var(--cds-button-tertiary-hover,#0050e6)}.cds--btn--tertiary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--tertiary .cds--btn__icon,.cds--btn--tertiary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--tertiary:focus,.cds--btn--tertiary:hover{color:var(--cds-text-inverse,#fff)}.cds--btn--tertiary:focus{background-color:var(--cds-button-tertiary,#0f62fe)}.cds--btn--tertiary:active{background-color:var(--cds-button-tertiary-active,#002d9c);border-color:transparent;color:var(--cds-text-inverse,#fff)}.cds--btn--tertiary.cds--btn--disabled,.cds--btn--tertiary.cds--btn--disabled:focus,.cds--btn--tertiary.cds--btn--disabled:hover,.cds--btn--tertiary:disabled,.cds--btn--tertiary:focus:disabled,.cds--btn--tertiary:hover:disabled{background:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--btn--ghost{background-color:transparent;border:1px solid transparent;color:var(--cds-link-primary,#0f62fe)}.cds--btn--ghost:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12))}.cds--btn--ghost:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--ghost .cds--btn__icon,.cds--btn--ghost .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--ghost{padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - .0625rem)}.cds--btn--ghost .cds--btn__icon{align-self:center;margin-inline-start:.5rem;position:static}.cds--btn--ghost:active,.cds--btn--ghost:hover{color:var(--cds-link-primary-hover,#0043ce)}.cds--btn--ghost:active{background-color:var(--cds-background-active,hsla(0,0%,55%,.5))}.cds--btn--ghost.cds--btn--disabled,.cds--btn--ghost.cds--btn--disabled:focus,.cds--btn--ghost.cds--btn--disabled:hover,.cds--btn--ghost:disabled,.cds--btn--ghost:focus:disabled,.cds--btn--ghost:hover:disabled{background:transparent;border-color:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--btn--ghost:not([disabled]) svg{fill:var(--cds-icon-primary,#161616)}.cds--btn--icon-only{align-items:center;block-size:var(--cds-layout-size-height-local);inline-size:var(--cds-layout-size-height-local);justify-content:center;padding:0;padding-block-start:0}.cds--btn--icon-only>:first-child{min-inline-size:1rem}.cds--btn--icon-only .cds--btn__icon{position:static}.cds--btn--icon-only.cds--btn--danger--ghost .cds--btn__icon,.cds--btn--icon-only.cds--btn--ghost .cds--btn__icon{margin:0}.cds--btn--icon-only.cds--btn--danger--ghost{padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - 1rem)}.cds--btn--xs:not(.cds--btn--icon-only){padding-block-start:1.5px}.cds--btn--md:not(.cds--btn--icon-only) .cds--btn__icon,.cds--btn--sm:not(.cds--btn--icon-only) .cds--btn__icon,.cds--btn--xs:not(.cds--btn--icon-only) .cds--btn__icon{margin-block-start:0}.cds--btn--icon-only.cds--btn--selected{background:var(--cds-background-selected,hsla(0,0%,55%,.2))}.cds--btn path[data-icon-path=inner-path]{fill:none}.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:var(--cds-icon-primary,#161616)}.cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon path:not([data-icon-path]):not([fill=none]),.cds--btn.cds--btn--icon-only.cds--btn--ghost[disabled]:hover .cds--btn__icon{fill:var(--cds-icon-on-color-disabled,#8d8d8d)}.cds--btn--ghost.cds--btn--icon-only[disabled],.cds--icon-tooltip--disabled .cds--tooltip-trigger__wrapper{cursor:not-allowed}.cds--icon-tooltip--disabled .cds--btn--icon-only[disabled]{pointer-events:none}.cds--btn--danger{background-color:var(--cds-button-danger-primary,#da1e28);border:1px solid transparent;color:var(--cds-text-on-color,#fff)}.cds--btn--danger:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger:active{background-color:var(--cds-button-danger-active,#750e13)}.cds--btn--danger .cds--btn__icon,.cds--btn--danger .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary{background-color:transparent;border-color:var(--cds-button-danger-secondary,#da1e28);border-style:solid;border-width:1px;color:var(--cds-button-danger-secondary,#da1e28)}.cds--btn--danger--tertiary:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger--tertiary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger--tertiary .cds--btn__icon,.cds--btn--danger--tertiary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger--tertiary:hover{border-color:var(--cds-button-danger-hover,#b81921);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary:focus{background-color:var(--cds-button-danger-primary,#da1e28);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary:active{background-color:var(--cds-button-danger-active,#750e13);border-color:var(--cds-button-danger-active,#750e13);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary.cds--btn--disabled,.cds--btn--danger--tertiary.cds--btn--disabled:focus,.cds--btn--danger--tertiary.cds--btn--disabled:hover,.cds--btn--danger--tertiary:disabled,.cds--btn--danger--tertiary:focus:disabled,.cds--btn--danger--tertiary:hover:disabled{background:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--btn--danger--ghost{background-color:transparent;border:1px solid transparent;color:var(--cds-button-danger-secondary,#da1e28)}.cds--btn--danger--ghost:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger--ghost:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger--ghost:active{background-color:var(--cds-button-danger-active,#750e13)}.cds--btn--danger--ghost .cds--btn__icon,.cds--btn--danger--ghost .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger--ghost{padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - .0625rem)}.cds--btn--danger--ghost .cds--btn__icon{margin-inline-start:.5rem;position:static}.cds--btn--danger--ghost:active,.cds--btn--danger--ghost:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--danger--ghost.cds--btn--disabled,.cds--btn--danger--ghost.cds--btn--disabled:focus,.cds--btn--danger--ghost.cds--btn--disabled:hover,.cds--btn--danger--ghost:disabled,.cds--btn--danger--ghost:focus:disabled,.cds--btn--danger--ghost:hover:disabled{background:transparent;border-color:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--btn--expressive{font-size:var(--cds-body-compact-02-font-size,1rem);font-weight:var(--cds-body-compact-02-font-weight,400);letter-spacing:var(--cds-body-compact-02-letter-spacing,0);line-height:var(--cds-body-compact-02-line-height,1.375);padding-block:min((var(--cds-layout-size-height-local) - var(--temp-expressive-1lh))/2 - .0625rem,var(--temp-padding-block-max))}.cds--btn--icon-only.cds--btn--expressive{padding:12px 13px}.cds--btn.cds--btn--expressive .cds--btn__icon{block-size:1.25rem;inline-size:1.25rem}.cds--btn-set .cds--btn.cds--btn--expressive{max-inline-size:20rem}.cds--btn.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--btn.cds--skeleton:active,.cds--btn.cds--skeleton:focus,.cds--btn.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--btn.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--btn.cds--skeleton:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--btn.cds--skeleton{background:CanvasText}.cds--btn.cds--skeleton:before{background:Canvas;forced-color-adjust:none}}.cds--btn.cds--skeleton{inline-size:9.375rem}.cds--btn-set{display:flex}.cds--btn-set--stacked{flex-direction:column}.cds--btn-set .cds--btn{inline-size:100%;max-inline-size:12.25rem}.cds--btn-set .cds--btn:not(:focus){box-shadow:-.0625rem 0 0 0 var(--cds-button-separator,#e0e0e0)}.cds--btn-set .cds--btn:first-of-type:not(:focus),.cds--btn-set .cds--btn:focus+.cds--btn{box-shadow:inherit}.cds--btn-set--stacked .cds--btn:not(:focus){box-shadow:0 -.0625rem 0 0 var(--cds-button-separator,#e0e0e0)}.cds--btn-set--stacked .cds--btn:first-of-type:not(:focus){box-shadow:inherit}.cds--btn-set .cds--btn.cds--btn--disabled{box-shadow:-.0625rem 0 0 0 var(--cds-icon-on-color-disabled,#8d8d8d)}.cds--btn-set .cds--btn.cds--btn--disabled:first-of-type{box-shadow:none}.cds--btn-set--stacked .cds--btn.cds--btn--disabled{box-shadow:0 -.0625rem 0 0 var(--cds-layer-selected-disabled,#8d8d8d)}.cds--btn-set--stacked .cds--btn.cds--btn--disabled:first-of-type{box-shadow:none}.cds--btn-set .cds--btn.cds--btn--loading{background-color:transparent;border-color:transparent;box-shadow:none}.cds--btn--sm .cds--badge-indicator{margin-block-start:.25rem;margin-inline-end:.25rem}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--btn:focus{color:Highlight;outline:1px solid Highlight}}[dir=rtl] .cds--btn-set .cds--btn:not(:focus){box-shadow:.0625rem 0 0 0 var(--cds-button-separator,#e0e0e0)}.cds--btn-set--fluid{container-type:inline-size}.cds--btn-set--fluid .cds--btn-set__fluid-inner{--flex-direction:row;align-items:stretch;display:flex;flex-direction:var(--flex-direction);inline-size:100%;justify-content:flex-end}.cds--btn-set--fluid .cds--btn-set__fluid-inner .cds--btn{flex:0 1 25%;max-inline-size:14.5rem}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack .cds--btn{min-inline-size:11rem}.cds--btn-set--fluid .cds--btn-set__fluid-inner .cds--btn--danger--ghost,.cds--btn-set--fluid .cds--btn-set__fluid-inner .cds--btn--ghost{flex:1 1 25%;max-inline-size:none;padding-inline-start:2rem}@container (width <= 11rem){.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:first-child:last-child){--flex-direction:column}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:first-child:last-child) .cds--btn{flex:initial;inline-size:100%;max-inline-size:none}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:first-child:last-child) .cds--btn--ghost{padding-inline-start:1rem}}@container (width <= 22rem){.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(2):last-child){--flex-direction:column}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(2):last-child) .cds--btn{flex:initial;inline-size:100%;max-inline-size:none}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(2):last-child) .cds--btn--ghost{padding-inline-start:1rem}}@container (width <= 33rem){.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(3):last-child){--flex-direction:column}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(3):last-child) .cds--btn{flex:initial;inline-size:100%;max-inline-size:none}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(3):last-child) .cds--btn--ghost{padding-inline-start:1rem}}@container (width <= 44rem){.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(4):last-child){--flex-direction:column}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(4):last-child) .cds--btn{flex:initial;inline-size:100%;max-inline-size:none}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(4):last-child) .cds--btn--ghost{padding-inline-start:1rem}}@container (width <= 44rem){.cds--btn-set--fluid .cds--btn-set__fluid-inner:has(:nth-child(2):last-child) .cds--btn{flex-basis:50%;max-inline-size:none}}@container (width <= 33rem){.cds--btn-set--fluid .cds--btn-set__fluid-inner:has(:first-child:last-child) .cds--btn{flex:1 1 100%;max-inline-size:none}}.cds--overflow-menu,.cds--overflow-menu__trigger,:host(cds-breadcrumb-overflow-menu),:host(cds-overflow-menu){-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;display:inline-block;inline-size:100%;text-align:start}.cds--overflow-menu::-moz-focus-inner,.cds--overflow-menu__trigger::-moz-focus-inner{border:0}.cds--overflow-menu,.cds--overflow-menu__trigger,:host(cds-breadcrumb-overflow-menu),:host(cds-overflow-menu){border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--overflow-menu *,.cds--overflow-menu :after,.cds--overflow-menu :before,.cds--overflow-menu__trigger *,.cds--overflow-menu__trigger :after,.cds--overflow-menu__trigger :before,:host(cds-breadcrumb-overflow-menu) *,:host(cds-breadcrumb-overflow-menu) :after,:host(cds-breadcrumb-overflow-menu) :before,:host(cds-overflow-menu) *,:host(cds-overflow-menu) :after,:host(cds-overflow-menu) :before{box-sizing:inherit}.cds--overflow-menu,.cds--overflow-menu__trigger,:host(cds-breadcrumb-overflow-menu),:host(cds-overflow-menu){align-items:center;block-size:2.5rem;cursor:pointer;display:flex;inline-size:2.5rem;justify-content:center;min-block-size:2.5rem;outline:2px solid transparent;outline-offset:-2px;position:relative;transition:outline .11s cubic-bezier(0,0,.38,.9),background-color .11s cubic-bezier(0,0,.38,.9)}.cds--overflow-menu:focus,.cds--overflow-menu__trigger:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--overflow-menu:focus,.cds--overflow-menu__trigger:focus{outline-style:dotted}}.cds--overflow-menu:hover,.cds--overflow-menu__trigger:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12))}.cds--overflow-menu>:first-child,:host(cds-breadcrumb-overflow-menu)>:first-child,:host(cds-overflow-menu)>:first-child{margin-block-start:0}.cds--overflow-menu--xs,:host(cds-breadcrumb-overflow-menu[size=xs]),:host(cds-overflow-menu[size=xs]){block-size:1.5rem;inline-size:1.5rem;min-block-size:1.5rem}.cds--overflow-menu--sm,:host(cds-breadcrumb-overflow-menu[size=sm]),:host(cds-overflow-menu[size=sm]){block-size:2rem;inline-size:2rem;min-block-size:2rem}.cds--overflow-menu--lg,:host(cds-breadcrumb-overflow-menu[size=lg]),:host(cds-overflow-menu[size=lg]){block-size:3rem;inline-size:3rem}.cds--overflow-menu__trigger.cds--tooltip--a11y.cds--tooltip__trigger:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--overflow-menu__trigger.cds--tooltip--a11y.cds--tooltip__trigger:focus{outline-style:dotted}}.cds--overflow-menu__trigger.cds--tooltip--a11y.cds--tooltip__trigger:focus svg{outline:none}.cds--overflow-menu.cds--overflow-menu--open,.cds--overflow-menu.cds--overflow-menu--open .cds--overflow-menu__trigger{background-color:var(--cds-layer);box-shadow:0 2px 6px var(--cds-shadow,rgba(0,0,0,.3));transition:none}.cds--overflow-menu--light.cds--overflow-menu--open,.cds--overflow-menu--light.cds--overflow-menu--open .cds--overflow-menu__trigger{background-color:var(--cds-layer)}.cds--overflow-menu__icon,:host(cds-breadcrumb-overflow-menu) ::slotted(.cds--overflow-menu__icon),:host(cds-overflow-menu) ::slotted(.cds--overflow-menu__icon){block-size:1rem;fill:var(--cds-icon-primary,#161616);inline-size:1rem}.cds--overflow-menu__wrapper{line-height:0}.cds--overflow-menu-options,:host(cds-overflow-menu-body){border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--overflow-menu-options *,.cds--overflow-menu-options :after,.cds--overflow-menu-options :before,:host(cds-overflow-menu-body) *,:host(cds-overflow-menu-body) :after,:host(cds-overflow-menu-body) :before{box-sizing:inherit}.cds--overflow-menu-options,:host(cds-overflow-menu-body){align-items:flex-start;background-color:var(--cds-layer);box-shadow:0 2px 6px var(--cds-shadow,rgba(0,0,0,.3));display:none;flex-direction:column;inline-size:10rem;inset-block-start:2rem;inset-inline-start:0;list-style:none;position:absolute;z-index:6000}.cds--overflow-menu-options:after{background-color:var(--cds-layer);content:"";display:block;position:absolute;transition:background-color .11s cubic-bezier(0,0,.38,.9)}@media screen and (prefers-reduced-motion:reduce){.cds--overflow-menu-options:after{transition:none}}.cds--overflow-menu.cds--overflow-menu--open:hover{background-color:var(--cds-layer)}.cds--overflow-menu-options--light{background-color:var(--cds-layer-hover)}.cds--overflow-menu-options--light:after{background-color:var(--cds-layer)}.cds--overflow-menu.cds--overflow-menu--light.cds--overflow-menu--open:hover{background-color:var(--cds-layer-hover)}.cds--overflow-menu-options[data-floating-menu-direction=bottom]:not(.cds--breadcrumb-menu-options):after{block-size:.1875rem;inline-size:2.5rem;inset-block-start:-.1875rem;inset-inline-start:0}.cds--overflow-menu-options[data-floating-menu-direction=top]:after{block-size:.5rem;inline-size:2.5rem;inset-block-end:-.5rem;inset-inline-start:0}.cds--overflow-menu-options[data-floating-menu-direction=left]:after{block-size:2.5rem;inline-size:.375rem;inset-block-start:0;inset-inline-end:-.375rem}.cds--overflow-menu-options[data-floating-menu-direction=right]:after{block-size:2.5rem;inline-size:.375rem;inset-block-start:0;inset-inline-start:-.375rem}.cds--overflow-menu-options--xs.cds--overflow-menu-options[data-floating-menu-direction=bottom]:after,.cds--overflow-menu-options--xs.cds--overflow-menu-options[data-floating-menu-direction=top]:after{inline-size:1.5rem}.cds--overflow-menu-options--xs.cds--overflow-menu-options[data-floating-menu-direction=left]:after,.cds--overflow-menu-options--xs.cds--overflow-menu-options[data-floating-menu-direction=right]:after{block-size:1.5rem}.cds--overflow-menu-options--sm.cds--overflow-menu-options[data-floating-menu-direction=bottom]:after,.cds--overflow-menu-options--sm.cds--overflow-menu-options[data-floating-menu-direction=top]:after{inline-size:2rem}.cds--overflow-menu-options--sm.cds--overflow-menu-options[data-floating-menu-direction=left]:after,.cds--overflow-menu-options--sm.cds--overflow-menu-options[data-floating-menu-direction=right]:after{block-size:2rem}.cds--overflow-menu-options--lg.cds--overflow-menu-options[data-floating-menu-direction=bottom]:after,.cds--overflow-menu-options--lg.cds--overflow-menu-options[data-floating-menu-direction=top]:after{inline-size:3rem}.cds--overflow-menu-options--lg.cds--overflow-menu-options[data-floating-menu-direction=left]:after,.cds--overflow-menu-options--lg.cds--overflow-menu-options[data-floating-menu-direction=right]:after{block-size:3rem}.cds--overflow-menu--flip.cds--overflow-menu-options[data-floating-menu-direction=bottom]:after,.cds--overflow-menu--flip.cds--overflow-menu-options[data-floating-menu-direction=top]:after{inset-inline:auto 0}.cds--overflow-menu--flip.cds--overflow-menu-options[data-floating-menu-direction=left]:after,.cds--overflow-menu--flip.cds--overflow-menu-options[data-floating-menu-direction=right]:after{inset-block:auto 0}.cds--overflow-menu-options--open,:host(cds-overflow-menu-body[open]){display:flex}.cds--overflow-menu-options__content{inline-size:100%}.cds--overflow-menu-options__option,:host(cds-overflow-menu-item){border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;vertical-align:baseline}.cds--overflow-menu-options__option *,.cds--overflow-menu-options__option :after,.cds--overflow-menu-options__option :before,:host(cds-overflow-menu-item) *,:host(cds-overflow-menu-item) :after,:host(cds-overflow-menu-item) :before{box-sizing:inherit}.cds--overflow-menu-options__option,:host(cds-overflow-menu-item){align-items:center;background-color:transparent;block-size:2.5rem;display:flex;inline-size:100%;padding:0;transition:background-color .11s cubic-bezier(0,0,.38,.9)}.cds--overflow-menu-options--xs .cds--overflow-menu-options__option,.cds--overflow-menu-options--xs :host(cds-overflow-menu-item),:host(cds-overflow-menu-body[size=xs]) .cds--overflow-menu-options__option,:host(cds-overflow-menu-body[size=xs]) :host(cds-overflow-menu-item){block-size:1.5rem}.cds--overflow-menu-options--sm .cds--overflow-menu-options__option,.cds--overflow-menu-options--sm :host(cds-overflow-menu-item),:host(cds-overflow-menu-body[size=sm]) .cds--overflow-menu-options__option,:host(cds-overflow-menu-body[size=sm]) :host(cds-overflow-menu-item){block-size:2rem}.cds--overflow-menu-options--lg .cds--overflow-menu-options__option,.cds--overflow-menu-options--lg :host(cds-overflow-menu-item),:host(cds-overflow-menu-body[size=lg]) .cds--overflow-menu-options__option,:host(cds-overflow-menu-body[size=lg]) :host(cds-overflow-menu-item){block-size:3rem}.cds--overflow-menu--divider,:host(cds-overflow-menu-item[divider]){border-block-start:1px solid var(--cds-border-subtle)}.cds--overflow-menu--light .cds--overflow-menu--divider,.cds--overflow-menu--light :host(cds-overflow-menu-item[divider]){border-block-start:1px solid var(--cds-border-subtle)}a.cds--overflow-menu-options__btn:before{block-size:100%;content:"";display:inline-block;vertical-align:middle}.cds--overflow-menu-options__btn{align-items:center;background-color:transparent;block-size:100%;border:none;color:var(--cds-text-secondary,#525252);cursor:pointer;display:inline-flex;font-family:inherit;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);font-weight:400;inline-size:100%;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);max-inline-size:11.25rem;outline:2px solid transparent;outline-offset:-2px;padding:0 1rem;text-align:start;transition:outline .11s cubic-bezier(0,0,.38,.9),background-color .11s cubic-bezier(0,0,.38,.9),color .11s cubic-bezier(0,0,.38,.9)}.cds--overflow-menu-options__btn:hover{color:var(--cds-text-primary,#161616)}.cds--overflow-menu-options__btn:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--overflow-menu-options__btn:focus{outline-style:dotted}}.cds--overflow-menu-options__btn::-moz-focus-inner{border:none}.cds--overflow-menu-options__btn svg{fill:var(--cds-icon-secondary,#525252)}.cds--overflow-menu-options__btn:hover svg{fill:var(--cds-icon-primary,#161616)}.cds--overflow-menu-options__option-content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cds--overflow-menu-options__option:hover{background-color:var(--cds-layer-hover)}.cds--overflow-menu-options__option--danger .cds--overflow-menu-options__btn:focus,.cds--overflow-menu-options__option--danger .cds--overflow-menu-options__btn:hover,:host(cds-overflow-menu-item[danger]) .cds--overflow-menu-options__btn:focus,:host(cds-overflow-menu-item[danger]) .cds--overflow-menu-options__btn:hover{background-color:var(--cds-button-danger-primary,#da1e28);color:var(--cds-text-on-color,#fff)}.cds--overflow-menu-options__option--danger .cds--overflow-menu-options__btn:focus svg,.cds--overflow-menu-options__option--danger .cds--overflow-menu-options__btn:hover svg,:host(cds-overflow-menu-item[danger]) .cds--overflow-menu-options__btn:focus svg,:host(cds-overflow-menu-item[danger]) .cds--overflow-menu-options__btn:hover svg{fill:currentColor}.cds--overflow-menu-options__option--disabled:hover{background-color:var(--cds-layer);cursor:not-allowed}.cds--overflow-menu-options__option--disabled .cds--overflow-menu-options__btn,:host(cds-overflow-menu-item[disabled]) .cds--overflow-menu-options__btn{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed}.cds--overflow-menu-options__option--disabled .cds--overflow-menu-options__btn:active,.cds--overflow-menu-options__option--disabled .cds--overflow-menu-options__btn:focus,.cds--overflow-menu-options__option--disabled .cds--overflow-menu-options__btn:hover,:host(cds-overflow-menu-item[disabled]) .cds--overflow-menu-options__btn:active,:host(cds-overflow-menu-item[disabled]) .cds--overflow-menu-options__btn:focus,:host(cds-overflow-menu-item[disabled]) .cds--overflow-menu-options__btn:hover{background-color:var(--cds-layer);color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:2px solid transparent;outline-offset:-2px}.cds--overflow-menu-options__option--disabled .cds--overflow-menu-options__btn svg,:host(cds-overflow-menu-item[disabled]) .cds--overflow-menu-options__btn svg{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--overflow-menu--flip{inset-inline-start:-140px}.cds--overflow-menu--flip:before{inset-inline-start:145px}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--overflow-menu-options__btn:focus,.cds--overflow-menu:focus{color:Highlight;outline:1px solid Highlight}}.cds--overflow-menu__top-end,.cds--overflow-menu__top-start{transform:translateY(calc(-100% - var(--cds-popover-offset, 2.5rem)))}:host(cds-breadcrumb-overflow-menu[disabled]),:host(cds-overflow-menu[disabled]){cursor:not-allowed}:host(cds-breadcrumb-overflow-menu[disabled]) svg,:host(cds-overflow-menu[disabled]) svg{cursor:not-allowed;fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}:host(cds-breadcrumb-overflow-menu[disabled]:hover),:host(cds-overflow-menu[disabled]:hover){background-color:transparent}:host(cds-breadcrumb-overflow-menu[open]),:host(cds-overflow-menu[open]){background-color:var(--cds-layer-01,#f4f4f4);box-shadow:0 .125rem 6px 0 rgba(0,0,0,.3);transition:none}:host(cds-breadcrumb-overflow-menu[open]) :hover,:host(cds-overflow-menu[open]) :hover{background-color:var(--cds-layer)}:host(cds-overflow-menu-body):after{background-color:var(--cds-layer);content:"";display:block;position:absolute;transition:background-color .11s cubic-bezier(0,0,.38,.9)}@media screen and (prefers-reduced-motion:reduce){:host(cds-overflow-menu-body):after{transition:none}}:host(cds-overflow-menu-body[direction=top]){margin-block:0 .25rem}:host(cds-overflow-menu-item){outline:none}:host(cds-overflow-menu-item) button:hover{background-color:var(--cds-layer-hover)}:host(cds-overflow-menu-item[size=xs]){block-size:1.5rem}:host(cds-overflow-menu-item[size=sm]){block-size:2rem}:host(cds-overflow-menu-item[size=lg]){block-size:3rem}:host(cds-overflow-menu[breadcrumb]){background:none;block-size:1.125rem;box-shadow:none;inline-size:1rem;min-block-size:1.125rem}:host(cds-overflow-menu[breadcrumb]) cds-tooltip button{block-size:1.125rem;inline-size:1rem;min-block-size:1.125rem;position:relative}:host(cds-overflow-menu[breadcrumb]) cds-tooltip button:active,:host(cds-overflow-menu[breadcrumb]) cds-tooltip button:focus,:host(cds-overflow-menu[breadcrumb]) cds-tooltip button:hover{background:none;box-shadow:none;box-sizing:border-box;outline-offset:0}:host(cds-overflow-menu[breadcrumb]) cds-tooltip button:active:after,:host(cds-overflow-menu[breadcrumb]) cds-tooltip button:focus:after,:host(cds-overflow-menu[breadcrumb]) cds-tooltip button:hover:after{opacity:1}:host(cds-overflow-menu[breadcrumb]) cds-tooltip button:active,:host(cds-overflow-menu[breadcrumb]) cds-tooltip button:focus{outline:1px solid var(--cds-focus,#0f62fe)}:host(cds-overflow-menu[breadcrumb]) cds-tooltip button:hover:after{background:var(--cds-link-primary-hover,#0043ce)}:host(cds-overflow-menu[breadcrumb]) cds-tooltip button:active:after{background:var(--cds-text-primary,#161616)}:host(cds-overflow-menu[breadcrumb]) cds-tooltip button:after{background:var(--cds-focus,#0f62fe);block-size:1px;content:"";inline-size:.75rem;inset-block-end:2px;opacity:0;position:absolute;transition:opacity 70ms cubic-bezier(.2,0,.38,.9)}@media screen and (prefers-reduced-motion:reduce){:host(cds-overflow-menu[breadcrumb]) cds-tooltip button:after{transition:none}}:host(cds-overflow-menu[breadcrumb]) ::slotted([slot=icon]){fill:var(--cds-link-primary,#0f62fe);transform:translateY(4px)}:host(cds-overflow-menu[breadcrumb]:hover) ::slotted([slot=icon]){fill:var(--cds-link-primary-hover,#0043ce)}:host(cds-overflow-menu[breadcrumb]:active) ::slotted([slot=icon]){fill:var(--cds-text-primary,#161616)}:host(cds-overflow-menu[breadcrumb][breadcrumb-size=sm]) cds-tooltip button{block-size:1rem;min-block-size:1rem}:host(cds-overflow-menu[breadcrumb][breadcrumb-size=sm]) ::slotted([slot=icon]){transform:translateY(3px)}:host(cds-overflow-menu-body[breadcrumb=true]):after{background:transparent;block-size:0;border-block-end:.4375rem solid var(--cds-field);border-inline-end:.4375rem solid transparent;border-inline-start:.4375rem solid transparent;inline-size:0;inset-block-start:-.4375rem;inset-inline-start:.875rem;margin:0 auto}']);

// node_modules/@carbon/web-components/es/components/overflow-menu/overflow-menu.js
var CDSOverflowMenu = class CDSOverflowMenu2 extends HostListenerMixin(FocusMixin(CDSIconButton$1)) {
  constructor() {
    super(...arguments);
    this._menuBody = null;
    this._handleClickTrigger = async () => {
      this._handleUserInitiatedToggle();
    };
    this._handleKeydownTrigger = async (event) => {
      if (event.key === " " || event.key === "Enter") {
        this._handleUserInitiatedToggle();
        event.preventDefault();
      }
    };
    this.dataTable = false;
    this.disabled = false;
    this.flipped = false;
    this.open = false;
    this.index = 1;
    this.size = OVERFLOW_MENU_SIZE.MEDIUM;
    this.toolbarAction = false;
    this.breadcrumb = false;
  }
  /**
   * Handles user-initiated toggling of the menu.
   */
  async _handleUserInitiatedToggle() {
    this.open = !this.open;
    const { index, open, updateComplete } = this;
    if (open) {
      await updateComplete;
      const { _menuBody: menuBody } = this;
      const menuItem = menuBody === null || menuBody === void 0 ? void 0 : menuBody.querySelector(`${prefix}-overflow-menu-item:nth-of-type(${index})`);
      menuItem === null || menuItem === void 0 ? void 0 : menuItem.focus();
    }
  }
  /**
   * @returns The position of the trigger button in the viewport.
   */
  get triggerPosition() {
    return this.getBoundingClientRect();
  }
  connectedCallback() {
    if (!this.hasAttribute("aria-haspopup")) {
      this.setAttribute("aria-haspopup", "true");
    }
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
    }
    super.connectedCallback();
    S(this.renderRoot, [iconButtonStyles, styles]);
  }
  updated(changedProperties) {
    var _a, _b, _c, _d, _e, _f, _g;
    const button = (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`${prefix}-tooltip`)) === null || _b === void 0 ? void 0 : _b.querySelector("button");
    button === null || button === void 0 ? void 0 : button.classList.add(`${prefix}--btn--icon-only`, `${prefix}--overflow-menu`);
    if (changedProperties.has("open")) {
      const { open } = this;
      if (open && !this._menuBody) {
        this._menuBody = find(this.childNodes, (elem) => elem.constructor.FLOATING_MENU);
      }
      const { _menuBody: menuBody, size } = this;
      if (menuBody) {
        menuBody.setAttribute("breadcrumb", String(Boolean(this.breadcrumb)));
        menuBody.open = open;
        menuBody.size = size;
        const tooltipContent = (_c = this.querySelector("[slot=tooltip-content]")) === null || _c === void 0 ? void 0 : _c.textContent;
        button === null || button === void 0 ? void 0 : button.setAttribute("aria-expanded", String(Boolean(open)));
        button === null || button === void 0 ? void 0 : button.setAttribute("aria-label", String(tooltipContent));
      }
    }
    if (changedProperties.has("dataTable")) {
      const tooltip = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector(`${prefix}-tooltip`);
      tooltip === null || tooltip === void 0 ? void 0 : tooltip.setAttribute("data-table", "");
    }
    if (changedProperties.has("size")) {
      button === null || button === void 0 ? void 0 : button.classList.forEach((item) => {
        if (item.startsWith(`${prefix}--overflow-menu--`)) {
          button === null || button === void 0 ? void 0 : button.classList.remove(item);
        }
      });
      button === null || button === void 0 ? void 0 : button.classList.add(`${prefix}--overflow-menu--${this.size}`);
      const tooltip = (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.querySelector(`${prefix}-tooltip`);
      tooltip === null || tooltip === void 0 ? void 0 : tooltip.setAttribute("size", this.size);
    }
    if (changedProperties.has("toolbarAction") && this.toolbarAction) {
      (_g = (_f = this.shadowRoot) === null || _f === void 0 ? void 0 : _f.querySelector(`${prefix}-tooltip`)) === null || _g === void 0 ? void 0 : _g.setAttribute("toolbar-action", "");
    }
    super.updated(changedProperties);
  }
  render() {
    return b`${super.render()} `;
  }
};
__decorate([
  HostListener("click")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSOverflowMenu.prototype, "_handleClickTrigger", void 0);
__decorate([
  HostListener("keydown")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSOverflowMenu.prototype, "_handleKeydownTrigger", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "data-table" })
], CDSOverflowMenu.prototype, "dataTable", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSOverflowMenu.prototype, "disabled", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSOverflowMenu.prototype, "flipped", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSOverflowMenu.prototype, "open", void 0);
__decorate([
  n()
], CDSOverflowMenu.prototype, "index", void 0);
__decorate([
  n({ reflect: true })
], CDSOverflowMenu.prototype, "size", void 0);
__decorate([
  n({ type: Boolean, attribute: "toolbar-action", reflect: true })
], CDSOverflowMenu.prototype, "toolbarAction", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSOverflowMenu.prototype, "breadcrumb", void 0);
CDSOverflowMenu = __decorate([
  carbonElement(`${prefix}-overflow-menu`)
], CDSOverflowMenu);

// node_modules/@carbon/web-components/es/components/floating-menu/defs.js
var FLOATING_MENU_POSITION_DIRECTION;
(function(FLOATING_MENU_POSITION_DIRECTION2) {
  FLOATING_MENU_POSITION_DIRECTION2["LTR"] = "ltr";
  FLOATING_MENU_POSITION_DIRECTION2["RTL"] = "rtl";
})(FLOATING_MENU_POSITION_DIRECTION || (FLOATING_MENU_POSITION_DIRECTION = {}));
var FLOATING_MENU_DIRECTION;
(function(FLOATING_MENU_DIRECTION2) {
  FLOATING_MENU_DIRECTION2["TOP"] = "top";
  FLOATING_MENU_DIRECTION2["BOTTOM"] = "bottom";
})(FLOATING_MENU_DIRECTION || (FLOATING_MENU_DIRECTION = {}));

// node_modules/@carbon/web-components/es/components/floating-menu/floating-menu.js
var observeResize = (observer, elem) => {
  observer.observe(elem);
  return {
    release() {
      observer.unobserve(elem);
      return null;
    }
  };
};
var closestComposed = (elem, selector) => {
  const found = elem.closest(selector);
  if (found) {
    return found;
  }
  const { host } = elem.getRootNode();
  if (host) {
    return closestComposed(host, selector);
  }
  return null;
};
var CDSFloatingMenu = class extends HostListenerMixin(FocusMixin(i2)) {
  constructor() {
    super(...arguments);
    this._hObserveResizeParent = null;
    this._hObserveResizeContainer = null;
    this._resizeObserver = new ResizeObserver(() => {
      const { container, open, parent, position } = this;
      if (container && open && parent) {
        const { direction, start, top } = position;
        this.style[direction !== FLOATING_MENU_POSITION_DIRECTION.RTL ? "left" : "right"] = `${start}px`;
        this.style.top = `${top}px`;
      }
    });
    this._handleBlur = ({ relatedTarget }) => {
      if (!this.contains(relatedTarget)) {
        const { parent } = this;
        if (parent && parent !== relatedTarget) {
          parent.open = false;
          HTMLElement.prototype.focus.call(this.parent);
        }
      }
    };
    this._click = () => {
      const { parent } = this;
      if (parent) {
        parent.open = false;
      }
    };
    this._handleKeyDown = (event) => {
      if (event.key === "Tab") {
        if (event.shiftKey) {
          const { parent } = this;
          if (parent) {
            parent.open = false;
          }
        }
      }
    };
    this.parent = null;
  }
  /**
   * The DOM element to put this menu into.
   */
  get container() {
    return closestComposed(
      this,
      this.constructor.selectorContainer
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- https://github.com/carbon-design-system/carbon/issues/20452
    ) || this.ownerDocument.body;
  }
  /**
   * The position of this floating menu.
   */
  get position() {
    const { triggerPosition } = this.parent;
    if (!triggerPosition) {
      throw new TypeError("Missing information of trigger button position.");
    }
    const { container } = this;
    const { left: refLeft = 0, top: refTop = 0, right: refRight = 0 } = triggerPosition;
    let { bottom: refBottom = 0 } = triggerPosition;
    const { width, height } = this.getBoundingClientRect();
    const { left: containerLeft = 0, right: containerRight = 0, top: containerTop = 0 } = container.getBoundingClientRect();
    refBottom = refBottom - containerTop;
    const containerComputedStyle = (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- https://github.com/carbon-design-system/carbon/issues/20452
      container.ownerDocument.defaultView.getComputedStyle(container)
    );
    const positionDirection = containerComputedStyle.getPropertyValue("direction");
    const isRtl = positionDirection === FLOATING_MENU_POSITION_DIRECTION.RTL;
    const containerStartFromViewport = !isRtl ? containerLeft : (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- https://github.com/carbon-design-system/carbon/issues/20452
      container.ownerDocument.defaultView.innerWidth - containerRight
    );
    const refStartFromContainer = !isRtl ? refLeft - containerLeft : containerRight - refRight;
    const refEndFromContainer = !isRtl ? refRight - containerLeft : containerRight - refLeft;
    const refTopFromContainer = refTop - containerTop;
    if (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- https://github.com/carbon-design-system/carbon/issues/20452
      (container !== this.ownerDocument.body || containerStartFromViewport !== 0 || containerTop !== 0) && containerComputedStyle.getPropertyValue("position") === "static"
    ) {
      throw new Error("Floating menu container must not have `position:static`.");
    }
    const { flipped, direction } = this;
    if (Object.values(FLOATING_MENU_DIRECTION).indexOf(direction) < 0) {
      throw new Error(`Wrong menu position direction: ${direction}`);
    }
    const alignmentStart = flipped ? refEndFromContainer - width : refStartFromContainer;
    const { start, top } = {
      [FLOATING_MENU_DIRECTION.TOP]: () => ({
        start: alignmentStart,
        top: refTopFromContainer - height
      }),
      [FLOATING_MENU_DIRECTION.BOTTOM]: () => ({
        start: alignmentStart,
        top: refBottom
      })
    }[direction]();
    return {
      direction: positionDirection,
      start,
      top
    };
  }
  disconnectedCallback() {
    if (this._hObserveResizeContainer) {
      this._hObserveResizeContainer = this._hObserveResizeContainer.release();
    }
    if (this._hObserveResizeParent) {
      this._hObserveResizeParent = this._hObserveResizeParent.release();
    }
  }
  updated(changedProperties) {
    var _a;
    const { container, open, parent } = this;
    if ((changedProperties.has("flipped") || changedProperties.has("direction") || changedProperties.has("open")) && open) {
      if (!parent) {
        this.parent = this.parentElement;
        container.appendChild(this);
      }
      const { direction, start, top } = this.position;
      this.style[direction !== FLOATING_MENU_POSITION_DIRECTION.RTL ? "left" : "right"] = `${start}px`;
      this.style.top = `${top}px`;
    }
    if (changedProperties.has("open")) {
      if (this._hObserveResizeContainer) {
        this._hObserveResizeContainer = this._hObserveResizeContainer.release();
      }
      if (this._hObserveResizeParent) {
        this._hObserveResizeParent = this._hObserveResizeParent.release();
      }
      if (open) {
        const { parentElement } = (_a = this.parent) !== null && _a !== void 0 ? _a : {};
        this._hObserveResizeContainer = observeResize(this._resizeObserver, container);
        if (parentElement) {
          this._hObserveResizeParent = observeResize(this._resizeObserver, parentElement);
        }
      }
    }
  }
  /**
   * The CSS selector to find the element to put this floating menu in.
   */
  static get selectorContainer() {
    return `[data-floating-menu-container],${prefix}-modal`;
  }
};
CDSFloatingMenu.FLOATING_MENU = true;
CDSFloatingMenu.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
__decorate([
  HostListener("focusout")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSFloatingMenu.prototype, "_handleBlur", void 0);
__decorate([
  HostListener("click")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSFloatingMenu.prototype, "_click", void 0);
__decorate([
  HostListener("keydown")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSFloatingMenu.prototype, "_handleKeyDown", void 0);

// node_modules/@carbon/web-components/es/components/overflow-menu/overflow-menu-body.js
var CDSOverflowMenuBody_1;
var capIndex = (index, length) => {
  if (index < 0) {
    return length - 1;
  }
  if (index >= length) {
    return 0;
  }
  return index;
};
var CDSOverflowMenuBody = CDSOverflowMenuBody_1 = class CDSOverflowMenuBody2 extends CDSFloatingMenu {
  constructor() {
    super(...arguments);
    this.direction = FLOATING_MENU_DIRECTION.BOTTOM;
    this.flipped = false;
    this.open = false;
    this.selected = null;
    this.size = OVERFLOW_MENU_SIZE.MEDIUM;
    this._handleKeydown = async (event) => {
      const { key } = event;
      if (this.open) {
        if (this.contains(document.activeElement)) {
          this.selected = document.activeElement;
        }
        if (key in NAVIGATION_DIRECTION) {
          event.preventDefault();
          this._navigate(NAVIGATION_DIRECTION[key]);
          return;
        }
        if (key === "Escape") {
          event.preventDefault();
          const menuTrigger = this.parent;
          this.open = false;
          if (menuTrigger && "open" in menuTrigger) {
            menuTrigger.open = false;
          }
          requestAnimationFrame(() => {
            var _a;
            const triggerButton = ((_a = menuTrigger === null || menuTrigger === void 0 ? void 0 : menuTrigger.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`button.${prefix}--overflow-menu`)) || (menuTrigger === null || menuTrigger === void 0 ? void 0 : menuTrigger.querySelector(`button.${prefix}--overflow-menu`));
            if (triggerButton) {
              triggerButton.focus();
            }
          });
          return;
        }
        const items = this.querySelectorAll(CDSOverflowMenuBody_1.selectorItemEnabled);
        const isInsideMenu = Array.from(items).some((item) => item.contains(document.activeElement));
        if (isInsideMenu) {
          event.preventDefault();
          const menuTrigger = this.parent;
          this.open = false;
          if (menuTrigger && "open" in menuTrigger) {
            menuTrigger.open = false;
          }
          requestAnimationFrame(() => {
            var _a;
            const triggerButton = ((_a = menuTrigger === null || menuTrigger === void 0 ? void 0 : menuTrigger.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`button.${prefix}--overflow-menu`)) || (menuTrigger === null || menuTrigger === void 0 ? void 0 : menuTrigger.querySelector(`button.${prefix}--overflow-menu`));
            if (triggerButton) {
              triggerButton.focus();
            }
          });
        }
      }
    };
  }
  /**
   * @param currentItem The currently selected item.
   * @param direction The navigation direction.
   * @returns The item to be selected.
   */
  _getNextItem(currentItem, direction) {
    const { selectorItemEnabled } = this.constructor;
    const menuItems = this.querySelectorAll(selectorItemEnabled);
    const currentIndex = indexOf(menuItems, currentItem);
    const nextIndex = capIndex(currentIndex + direction, menuItems.length);
    return nextIndex === currentIndex ? null : menuItems[nextIndex];
  }
  /**
   * Navigates through overflow menu items.
   *
   * @param direction `-1` to navigate backward, `1` to navigate forward.
   */
  _navigate(direction) {
    if (this.selected) {
      const nextItem = this._getNextItem(this.selected, direction);
      nextItem === null || nextItem === void 0 ? void 0 : nextItem.focus();
    }
  }
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "menu");
    }
    if (!this.hasAttribute("tabindex")) {
      this.setAttribute("tabindex", "-1");
    }
    super.connectedCallback();
  }
  updated(changedProperties) {
    if (changedProperties.has("size")) {
      const { selectorMenuItem } = this.constructor;
      const menuItems = this.querySelectorAll(selectorMenuItem);
      menuItems.forEach((item) => {
        item.setAttribute("size", this.size);
      });
    }
    super.updated(changedProperties);
  }
  render() {
    return b` <slot></slot> `;
  }
  /**
   * A selector that will return menu items.
   */
  static get selectorMenuItem() {
    return `${prefix}-overflow-menu-item`;
  }
  /**
   * A selector that will return enabled menu items.
   */
  static get selectorItemEnabled() {
    return `${prefix}-overflow-menu-item:not([disabled])`;
  }
};
CDSOverflowMenuBody.styles = styles;
__decorate([
  n()
], CDSOverflowMenuBody.prototype, "direction", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSOverflowMenuBody.prototype, "flipped", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSOverflowMenuBody.prototype, "open", void 0);
__decorate([
  n({ reflect: true })
], CDSOverflowMenuBody.prototype, "size", void 0);
__decorate([
  HostListener("keydown")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSOverflowMenuBody.prototype, "_handleKeydown", void 0);
CDSOverflowMenuBody = CDSOverflowMenuBody_1 = __decorate([
  carbonElement(`${prefix}-overflow-menu-body`)
], CDSOverflowMenuBody);

// node_modules/@carbon/web-components/es/components/overflow-menu/overflow-menu-item.js
var CDSOverflowMenuItem = class CDSOverflowMenuItem2 extends FocusMixin(i2) {
  constructor() {
    super(...arguments);
    this.danger = false;
    this.disabled = false;
    this.divider = false;
    this.href = "";
    this.size = OVERFLOW_MENU_SIZE.MEDIUM;
  }
  /**
   * Handles `click` event on this element.
   */
  _handleClick(event) {
    this.dispatchEvent(new CustomEvent(this.constructor.itemClicked, {
      bubbles: true,
      composed: true,
      detail: {
        evt: event
      }
    }));
  }
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "menuitem");
    }
    super.connectedCallback();
  }
  render() {
    const { _handleClick: handleClick } = this;
    return this.href ? b`
          <a
            class="${prefix}--overflow-menu-options__btn"
            ?disabled=${this.disabled}
            href="${this.href}"
            tabindex="-1"
            @click="${handleClick}">
            <div class="${prefix}--overflow-menu-options__option-content">
              <slot></slot>
            </div>
          </a>
        ` : b`
          <button
            class="${prefix}--overflow-menu-options__btn"
            ?disabled=${this.disabled}
            tabindex="-1"
            @click="${handleClick}">
            <div class="${prefix}--overflow-menu-options__option-content">
              <slot></slot>
            </div>
          </button>
        `;
  }
  /**
   * The name of the custom event fired when the item is clicked.
   */
  static get itemClicked() {
    return `${prefix}-overflow-menu-item-clicked`;
  }
};
CDSOverflowMenuItem.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSOverflowMenuItem.styles = styles;
__decorate([
  n({ type: Boolean, reflect: true })
], CDSOverflowMenuItem.prototype, "danger", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSOverflowMenuItem.prototype, "disabled", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSOverflowMenuItem.prototype, "divider", void 0);
__decorate([
  n()
], CDSOverflowMenuItem.prototype, "href", void 0);
__decorate([
  n({ reflect: true })
], CDSOverflowMenuItem.prototype, "size", void 0);
CDSOverflowMenuItem = __decorate([
  carbonElement(`${prefix}-overflow-menu-item`)
], CDSOverflowMenuItem);
