import {
  _20
} from "./chunk-AECI6ME5.js";
import {
  _16 as _162
} from "./chunk-MZGBQGXZ.js";
import {
  forEach
} from "./chunk-3QPROXNA.js";
import {
  _16
} from "./chunk-YGK4BVA2.js";
import {
  BUTTON_KIND,
  BUTTON_SIZE,
  BUTTON_TOOLTIP_POSITION,
  CDSButton$1
} from "./chunk-JYACJRIF.js";
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
  o
} from "./chunk-DAFPBEYU.js";
import {
  FocusMixin
} from "./chunk-73FE5HOG.js";
import {
  e as e2
} from "./chunk-YOLTZNLE.js";
import "./chunk-M2VBID3H.js";
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
import "./chunk-G6EI4S4W.js";

// node_modules/@carbon/web-components/es/components/ui-shell/header.scss.js
var styles = i(['@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--assistive-text,.cds--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-background:var(--cds-layer-background-01,#fff);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-background:var(--cds-layer-background-02,#f4f4f4);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-background:var(--cds-layer-background-03,#fff);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}.cds--layer-one.cds--layer__with-background,.cds--layer-three.cds--layer__with-background,.cds--layer-two.cds--layer__with-background{background-color:var(--cds-layer-background)}.cds--popover-container{display:inline-block}.cds--popover-container:not(.cds--popover--auto-align){position:relative}.cds--popover--high-contrast .cds--popover{--cds-popover-background-color:var(--cds-background-inverse,#393939);--cds-popover-text-color:var(--cds-text-inverse,#fff)}.cds--popover--drop-shadow .cds--popover{filter:var(--cds-popover-drop-shadow,drop-shadow(0 .125rem .125rem rgba(0,0,0,.2)))}.cds--popover--border>.cds--popover>.cds--popover-content{outline:1px solid var(--cds-popover-border-color,var(--cds-border-subtle));outline-offset:-1px}.cds--popover--caret{--cds-popover-offset:0.625rem}.cds--popover{inset:0;pointer-events:none;position:absolute;z-index:6000}.cds--popover-content{--cds-layout-size-height-sm:2rem}.cds--layout--size-sm :where(.cds--popover-content),.cds--popover-content.cds--layout--size-sm{--cds-layout-size-height:var(--cds-layout-size-height-sm)}.cds--popover-content{--cds-layout-size-height-md:2.5rem}.cds--layout--size-md :where(.cds--popover-content),.cds--popover-content.cds--layout--size-md{--cds-layout-size-height:var(--cds-layout-size-height-md)}.cds--popover-content{--cds-layout-size-height-lg:3rem}.cds--layout--size-lg :where(.cds--popover-content),.cds--popover-content.cds--layout--size-lg{--cds-layout-size-height:var(--cds-layout-size-height-lg)}.cds--popover-content{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--popover-content *,.cds--popover-content :after,.cds--popover-content :before{box-sizing:inherit}.cds--popover-content{background-color:var(--cds-popover-background-color,var(--cds-layer));border-radius:var(--cds-popover-border-radius,2px);color:var(--cds-popover-text-color,var(--cds-text-primary,#161616));display:none;inline-size:-moz-max-content;inline-size:max-content;max-inline-size:23rem;pointer-events:auto;position:absolute;z-index:6000}.cds--popover--open>.cds--popover>.cds--popover-content{display:block}.cds--popover--background-token__background>.cds--popover>.cds--popover-content{background-color:var(--cds-background,#fff)}.cds--popover-content:before{content:"";display:none;position:absolute}.cds--popover--open>.cds--popover>.cds--popover-content:before{display:block}.cds--popover--auto-align.cds--popover-caret,.cds--popover-caret{display:none;position:absolute;will-change:transform;z-index:6000}.cds--popover--auto-align.cds--popover-caret:after,.cds--popover-caret:after{background-color:var(--cds-popover-background-color,var(--cds-layer));content:"";display:block;position:absolute}.cds--popover--auto-align.cds--popover-caret:before,.cds--popover-caret:before{background-color:var(--cds-popover-border-color,var(--cds-border-subtle));content:"";display:none;position:absolute}.cds--popover--background-token__background>.cds--popover>.cds--popover-caret:after{background-color:var(--cds-background,#fff)}.cds--popover--auto-align.cds--popover--caret.cds--popover--open>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--border .cds--popover--auto-align.cds--popover-caret:before,.cds--popover--border .cds--popover-caret:before,.cds--popover--caret.cds--popover--open>.cds--popover>.cds--popover-caret{display:block}.cds--popover--tab-tip>.cds--popover>.cds--popover-caret{display:none}.cds--popover--bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-start:50%;transform:translate(-50%,calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{transform:translate(50%,calc(100% + var(--cds-popover-offset, 0rem)))}.cds--popover--bottom-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-start:calc(50% - var(--cds-popover-offset, 0rem));transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:calc(50% - var(--cds-popover-offset, 0rem));inset-inline-start:auto}.cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--bottom-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-end:calc(50% - var(--cds-popover-offset, 0rem));transform:translate(var(--cds-popover-offset,0),calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--bottom-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:calc(50% - var(--cds-popover-offset, 0rem))}.cds--popover--bottom-end>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-left>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-right>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-start>.cds--popover>.cds--popover-content:before,.cds--popover--bottom>.cds--popover>.cds--popover-content:before{block-size:var(--cds-popover-offset,0);inset-block-start:0;inset-inline:0;transform:translateY(-100%)}.cds--popover--bottom-end>.cds--popover>.cds--popover-caret,.cds--popover--bottom-left>.cds--popover>.cds--popover-caret,.cds--popover--bottom-right>.cds--popover>.cds--popover-caret,.cds--popover--bottom-start>.cds--popover>.cds--popover-caret,.cds--popover--bottom>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);inline-size:var(--cds-popover-caret-width,.75rem);inset-block-end:0;inset-inline-start:50%;transform:translate(-50%,var(--cds-popover-offset,0))}.cds--popover--border.cds--popover--bottom-end>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-left>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-right>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-start>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom>.cds--popover>.cds--popover-caret:before,.cds--popover--bottom-end>.cds--popover>.cds--popover-caret:after,.cds--popover--bottom-left>.cds--popover>.cds--popover-caret:after,.cds--popover--bottom-right>.cds--popover>.cds--popover-caret:after,.cds--popover--bottom-start>.cds--popover>.cds--popover-caret:after,.cds--popover--bottom>.cds--popover>.cds--popover-caret:after{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 100%,50% 0,100% 100%);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--bottom-end>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-left>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-right>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-start>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom>.cds--popover>.cds--popover-caret:after{inline-size:calc(var(--cds-popover-caret-width, .75rem) - 1px);inset-block-start:1px;inset-inline-start:.5px}[dir=rtl] .cds--popover--bottom-end>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-left>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-right>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-start>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom>.cds--popover>.cds--popover-caret{transform:translate(50%,var(--cds-popover-offset,0))}.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 100%,50% 0,100% 100%);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inline-size:calc(var(--cds-popover-caret-width, .75rem) - 1px);inset-block-start:1px;inset-inline-start:.5px}.cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-start:50%;transform:translate(-50%,calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{transform:translate(50%,calc(-100% - var(--cds-popover-offset, 0rem)))}.cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-start:calc(50% - var(--cds-popover-offset, 0rem));transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:calc(50% - var(--cds-popover-offset, 0rem));inset-inline-start:auto}.cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-end:calc(50% - var(--cds-popover-offset, 0rem));transform:translate(var(--cds-popover-offset,0),calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:calc(50% - var(--cds-popover-offset, 0rem))}.cds--popover--top-end>.cds--popover>.cds--popover-content:before,.cds--popover--top-left>.cds--popover>.cds--popover-content:before,.cds--popover--top-right>.cds--popover>.cds--popover-content:before,.cds--popover--top-start>.cds--popover>.cds--popover-content:before,.cds--popover--top>.cds--popover>.cds--popover-content:before{block-size:var(--cds-popover-offset,0);inset-block-end:0;inset-inline:0;transform:translateY(100%)}.cds--popover--top-end>.cds--popover>.cds--popover-caret,.cds--popover--top-left>.cds--popover>.cds--popover-caret,.cds--popover--top-right>.cds--popover>.cds--popover-caret,.cds--popover--top-start>.cds--popover>.cds--popover-caret,.cds--popover--top>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);inline-size:var(--cds-popover-caret-width,.75rem);inset-block-start:0;inset-inline-start:50%;transform:translate(-50%,calc(var(--cds-popover-offset, 0rem)*-1))}.cds--popover--border.cds--popover--top-end>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-left>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-right>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-start>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--top>.cds--popover>.cds--popover-caret:before,.cds--popover--top-end>.cds--popover>.cds--popover-caret:after,.cds--popover--top-left>.cds--popover>.cds--popover-caret:after,.cds--popover--top-right>.cds--popover>.cds--popover-caret:after,.cds--popover--top-start>.cds--popover>.cds--popover-caret:after,.cds--popover--top>.cds--popover>.cds--popover-caret:after{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 0,50% 100%,100% 0);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--top-end>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-left>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-right>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-start>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--top>.cds--popover>.cds--popover-caret:after{inline-size:calc(var(--cds-popover-caret-width, .75rem) - 1px);inset-block-start:-1px;inset-inline-start:.5px}[dir=rtl] .cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{transform:translate(50%,calc(var(--cds-popover-offset, 0rem)*-1))}.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 0,50% 100%,100% 0);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inline-size:calc(var(--cds-popover-caret-width, .75rem) - 1px);inset-block-start:-1px;inset-inline-start:.5px}.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),-50%)}.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),calc(var(--cds-popover-offset, 0rem)*.5*-1 - 16px))}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),calc(var(--cds-popover-offset, 0rem)*.5 + 16px))}[dir=rtl] .cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:100%;inset-inline-start:auto}.cds--popover--right-bottom>.cds--popover>.cds--popover-content:before,.cds--popover--right-end>.cds--popover>.cds--popover-content:before,.cds--popover--right-start>.cds--popover>.cds--popover-content:before,.cds--popover--right-top>.cds--popover>.cds--popover-content:before,.cds--popover--right>.cds--popover>.cds--popover-content:before{inline-size:var(--cds-popover-offset,0);inset-block:0;inset-inline-start:0;transform:translateX(-100%)}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);inline-size:var(--cds-popover-caret-height,.375rem);inset-block-start:50%;inset-inline-start:100%;transform:translate(calc(var(--cds-popover-offset, 0rem) - 100%),-50%)}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem)}[dir=rtl] .cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{inset-inline-end:100%;inset-inline-start:auto}.cds--popover--border.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{inset-inline-start:1px}[dir=rtl] .cds--popover--border.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{inset-inline-start:-1px}.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inset-inline-start:1px}[dir=rtl] .cds--popover--border.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before{margin-inline-start:1px}[dir=rtl] .cds--popover--border.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inset-inline-start:0}.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1 + .1px),-50%)}.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(var(--cds-popover-offset, 0rem)*-.5 - 16px))}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(var(--cds-popover-offset, 0rem)*.5 + 16px))}[dir=rtl] .cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:auto;inset-inline-start:100%}.cds--popover--left-bottom>.cds--popover>.cds--popover-content:before,.cds--popover--left-end>.cds--popover>.cds--popover-content:before,.cds--popover--left-start>.cds--popover>.cds--popover-content:before,.cds--popover--left-top>.cds--popover>.cds--popover-content:before,.cds--popover--left>.cds--popover>.cds--popover-content:before{inline-size:var(--cds-popover-offset,0);inset-block:0;inset-inline-end:0;transform:translateX(100%)}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);inline-size:var(--cds-popover-caret-height,.375rem);inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1 + 100%),-50%)}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem)}[dir=rtl] .cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{inset-inline-end:auto;inset-inline-start:100%}.cds--popover--border.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{inset-inline-start:-1px}[dir=rtl] .cds--popover--border.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{inset-inline-start:1px}.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inset-inline-start:-1px}[dir=rtl] .cds--popover--border.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before{margin-inline-start:-1px}[dir=rtl] .cds--popover--border.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inset-inline-start:0}.cds--popover--tab-tip>.cds--popover>.cds--popover-content{border-radius:0}.cds--popover--tab-tip.cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--tab-tip.cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--tab-tip.cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--tab-tip.cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:0}.cds--popover--tab-tip.cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--tab-tip.cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--tab-tip.cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--tab-tip.cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:0;inset-inline-start:auto}.cds--popover--tab-tip .cds--popover{will-change:filter}.cds--popover--tab-tip__button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--popover--tab-tip__button *,.cds--popover--tab-tip__button :after,.cds--popover--tab-tip__button :before{box-sizing:inherit}.cds--popover--tab-tip__button::-moz-focus-inner{border:0}.cds--popover--tab-tip__button{align-items:center;block-size:2rem;display:inline-flex;inline-size:2rem;justify-content:center;position:relative}.cds--popover--tab-tip__button:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--popover--tab-tip__button:focus{outline-style:dotted}}.cds--popover--tab-tip__button:hover{background-color:var(--cds-layer-hover)}.cds--popover--tab-tip.cds--popover--open .cds--popover--tab-tip__button{background:var(--cds-layer);box-shadow:0 2px 2px rgba(0,0,0,.2)}.cds--popover--tab-tip.cds--popover--open .cds--popover--tab-tip__button:not(:focus):after{background:var(--cds-layer);block-size:2px;content:"";inline-size:100%;inset-block-end:0;position:absolute;z-index:6001}.cds--popover--tab-tip__button svg{fill:var(--cds-icon-primary,#161616)}.cds--tooltip{--cds-popover-offset:12px}.cds--tooltip-content{font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);max-inline-size:18rem;overflow-wrap:break-word;padding:var(--cds-tooltip-padding-block,1rem) var(--cds-tooltip-padding-inline,1rem)}.cds--icon-tooltip{--cds-tooltip-padding-block:0.125rem;--cds-popover-caret-width:0.5rem;--cds-popover-caret-height:0.25rem;--cds-popover-offset:0.5rem}.cds--icon-tooltip .cds--tooltip-content{font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--definition-term{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--definition-term *,.cds--definition-term :after,.cds--definition-term :before{box-sizing:inherit}.cds--definition-term::-moz-focus-inner{border:0}.cds--definition-term{border-block-end:1px dotted var(--cds-border-strong);border-radius:0;color:var(--cds-text-primary,#161616)}.cds--definition-term:focus{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--definition-term:focus{outline-style:dotted}}.cds--definition-term:focus,.cds--definition-term:hover{border-block-end-color:var(--cds-border-interactive,#0f62fe)}.cds--definition-tooltip{font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);max-inline-size:11rem;padding:.5rem 1rem;text-wrap:auto;word-break:break-word}.cds--btn{--cds-layout-size-height-local:clamp(max(var(--cds-layout-size-height-min),var(--cds-layout-size-height-xs)),var(--cds-layout-size-height,var(--cds-layout-size-height-lg)),min(var(--cds-layout-size-height-max),var(--cds-layout-size-height-2xl)));--cds-layout-density-padding-inline-local:clamp(var(--cds-layout-density-padding-inline-min),var(--cds-layout-density-padding-inline,var(--cds-layout-density-padding-inline-normal)),var(--cds-layout-density-padding-inline-max));--temp-1lh:(var(--cds-body-compact-01-line-height,1.28572) * 1em);--temp-expressive-1lh:(var(--cds-body-compact-02-line-height,1.375) * 1em);--temp-padding-block-max:calc((var(--cds-layout-size-height-lg) - var(--temp-1lh))/2 - 0.0625rem);border:0;box-sizing:border-box;font-family:inherit;font-size:100%;padding:0;vertical-align:baseline}.cds--btn *,.cds--btn :after,.cds--btn :before{box-sizing:inherit}.cds--btn{border-radius:0;cursor:pointer;display:inline-flex;flex-shrink:0;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);inline-size:-moz-max-content;inline-size:max-content;justify-content:space-between;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);margin:0;max-inline-size:20rem;min-block-size:var(--cds-layout-size-height-local);outline:none;padding-block:min((var(--cds-layout-size-height-local) - var(--temp-1lh))/2 - .0625rem,var(--temp-padding-block-max));padding-inline:calc(var(--cds-layout-density-padding-inline-local) - .0625rem) calc(var(--cds-layout-density-padding-inline-local)*3 + .9375rem);position:relative;text-align:start;text-decoration:none;transition:background 70ms cubic-bezier(0,0,.38,.9),box-shadow 70ms cubic-bezier(0,0,.38,.9),border-color 70ms cubic-bezier(0,0,.38,.9),outline 70ms cubic-bezier(0,0,.38,.9);vertical-align:top}.cds--btn.cds--btn--disabled,.cds--btn.cds--btn--disabled:focus,.cds--btn.cds--btn--disabled:hover,.cds--btn:disabled,.cds--btn:focus:disabled,.cds--btn:hover:disabled{background:var(--cds-button-disabled,#c6c6c6);border-color:var(--cds-button-disabled,#c6c6c6);box-shadow:none;color:var(--cds-text-on-color-disabled,#8d8d8d);cursor:not-allowed}.cds--btn .cds--btn__icon{block-size:1rem;flex-shrink:0;inline-size:1rem;inset-block-start:min((var(--cds-layout-size-height-local) - 1rem)/2 - .0625rem,var(--temp-padding-block-max));inset-inline-end:var(--cds-layout-density-padding-inline-local);margin-block-start:.0625rem;position:absolute}.cds--btn::-moz-focus-inner{border:0;padding:0}.cds--btn--primary{background-color:var(--cds-button-primary,#0f62fe);border:1px solid transparent;color:var(--cds-text-on-color,#fff)}.cds--btn--primary:hover{background-color:var(--cds-button-primary-hover,#0050e6)}.cds--btn--primary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--primary:active{background-color:var(--cds-button-primary-active,#002d9c)}.cds--btn--primary .cds--btn__icon,.cds--btn--primary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--primary:hover,.cds--btn--secondary{color:var(--cds-text-on-color,#fff)}.cds--btn--secondary{background-color:var(--cds-button-secondary,#393939);border:1px solid transparent}.cds--btn--secondary:hover{background-color:var(--cds-button-secondary-hover,#474747)}.cds--btn--secondary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--secondary:active{background-color:var(--cds-button-secondary-active,#6f6f6f)}.cds--btn--secondary .cds--btn__icon,.cds--btn--secondary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--secondary:focus,.cds--btn--secondary:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--tertiary{background-color:transparent;border-color:var(--cds-button-tertiary,#0f62fe);border-style:solid;border-width:1px;color:var(--cds-button-tertiary,#0f62fe)}.cds--btn--tertiary:hover{background-color:var(--cds-button-tertiary-hover,#0050e6)}.cds--btn--tertiary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--tertiary .cds--btn__icon,.cds--btn--tertiary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--tertiary:focus,.cds--btn--tertiary:hover{color:var(--cds-text-inverse,#fff)}.cds--btn--tertiary:focus{background-color:var(--cds-button-tertiary,#0f62fe)}.cds--btn--tertiary:active{background-color:var(--cds-button-tertiary-active,#002d9c);border-color:transparent;color:var(--cds-text-inverse,#fff)}.cds--btn--tertiary.cds--btn--disabled,.cds--btn--tertiary.cds--btn--disabled:focus,.cds--btn--tertiary.cds--btn--disabled:hover,.cds--btn--tertiary:disabled,.cds--btn--tertiary:focus:disabled,.cds--btn--tertiary:hover:disabled{background:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--btn--ghost{background-color:transparent;border:1px solid transparent;color:var(--cds-link-primary,#0f62fe)}.cds--btn--ghost:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12))}.cds--btn--ghost:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--ghost .cds--btn__icon,.cds--btn--ghost .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--ghost{padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - .0625rem)}.cds--btn--ghost .cds--btn__icon{align-self:center;margin-inline-start:.5rem;position:static}.cds--btn--ghost:active,.cds--btn--ghost:hover{color:var(--cds-link-primary-hover,#0043ce)}.cds--btn--ghost:active{background-color:var(--cds-background-active,hsla(0,0%,55%,.5))}.cds--btn--ghost.cds--btn--disabled,.cds--btn--ghost.cds--btn--disabled:focus,.cds--btn--ghost.cds--btn--disabled:hover,.cds--btn--ghost:disabled,.cds--btn--ghost:focus:disabled,.cds--btn--ghost:hover:disabled{background:transparent;border-color:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--btn--ghost:not([disabled]) svg{fill:var(--cds-icon-primary,#161616)}.cds--btn--icon-only{align-items:center;block-size:var(--cds-layout-size-height-local);inline-size:var(--cds-layout-size-height-local);justify-content:center;padding:0;padding-block-start:0}.cds--btn--icon-only>:first-child{min-inline-size:1rem}.cds--btn--icon-only .cds--btn__icon{position:static}.cds--btn--icon-only.cds--btn--danger--ghost .cds--btn__icon,.cds--btn--icon-only.cds--btn--ghost .cds--btn__icon{margin:0}.cds--btn--icon-only.cds--btn--danger--ghost{padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - 1rem)}.cds--btn--xs:not(.cds--btn--icon-only){padding-block-start:1.5px}.cds--btn--md:not(.cds--btn--icon-only) .cds--btn__icon,.cds--btn--sm:not(.cds--btn--icon-only) .cds--btn__icon,.cds--btn--xs:not(.cds--btn--icon-only) .cds--btn__icon{margin-block-start:0}.cds--btn--icon-only.cds--btn--selected{background:var(--cds-background-selected,hsla(0,0%,55%,.2))}.cds--btn path[data-icon-path=inner-path]{fill:none}.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:var(--cds-icon-primary,#161616)}.cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon path:not([data-icon-path]):not([fill=none]),.cds--btn.cds--btn--icon-only.cds--btn--ghost[disabled]:hover .cds--btn__icon{fill:var(--cds-icon-on-color-disabled,#8d8d8d)}.cds--btn--ghost.cds--btn--icon-only[disabled],.cds--icon-tooltip--disabled .cds--tooltip-trigger__wrapper{cursor:not-allowed}.cds--icon-tooltip--disabled .cds--btn--icon-only[disabled]{pointer-events:none}.cds--btn--danger{background-color:var(--cds-button-danger-primary,#da1e28);border:1px solid transparent;color:var(--cds-text-on-color,#fff)}.cds--btn--danger:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger:active{background-color:var(--cds-button-danger-active,#750e13)}.cds--btn--danger .cds--btn__icon,.cds--btn--danger .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary{background-color:transparent;border-color:var(--cds-button-danger-secondary,#da1e28);border-style:solid;border-width:1px;color:var(--cds-button-danger-secondary,#da1e28)}.cds--btn--danger--tertiary:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger--tertiary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger--tertiary .cds--btn__icon,.cds--btn--danger--tertiary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger--tertiary:hover{border-color:var(--cds-button-danger-hover,#b81921);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary:focus{background-color:var(--cds-button-danger-primary,#da1e28);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary:active{background-color:var(--cds-button-danger-active,#750e13);border-color:var(--cds-button-danger-active,#750e13);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary.cds--btn--disabled,.cds--btn--danger--tertiary.cds--btn--disabled:focus,.cds--btn--danger--tertiary.cds--btn--disabled:hover,.cds--btn--danger--tertiary:disabled,.cds--btn--danger--tertiary:focus:disabled,.cds--btn--danger--tertiary:hover:disabled{background:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--btn--danger--ghost{background-color:transparent;border:1px solid transparent;color:var(--cds-button-danger-secondary,#da1e28)}.cds--btn--danger--ghost:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger--ghost:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger--ghost:active{background-color:var(--cds-button-danger-active,#750e13)}.cds--btn--danger--ghost .cds--btn__icon,.cds--btn--danger--ghost .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger--ghost{padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - .0625rem)}.cds--btn--danger--ghost .cds--btn__icon{margin-inline-start:.5rem;position:static}.cds--btn--danger--ghost:active,.cds--btn--danger--ghost:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--danger--ghost.cds--btn--disabled,.cds--btn--danger--ghost.cds--btn--disabled:focus,.cds--btn--danger--ghost.cds--btn--disabled:hover,.cds--btn--danger--ghost:disabled,.cds--btn--danger--ghost:focus:disabled,.cds--btn--danger--ghost:hover:disabled{background:transparent;border-color:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--btn--expressive{font-size:var(--cds-body-compact-02-font-size,1rem);font-weight:var(--cds-body-compact-02-font-weight,400);letter-spacing:var(--cds-body-compact-02-letter-spacing,0);line-height:var(--cds-body-compact-02-line-height,1.375);padding-block:min((var(--cds-layout-size-height-local) - var(--temp-expressive-1lh))/2 - .0625rem,var(--temp-padding-block-max))}.cds--btn--icon-only.cds--btn--expressive{padding:12px 13px}.cds--btn.cds--btn--expressive .cds--btn__icon{block-size:1.25rem;inline-size:1.25rem}.cds--btn-set .cds--btn.cds--btn--expressive{max-inline-size:20rem}.cds--btn.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--btn.cds--skeleton:active,.cds--btn.cds--skeleton:focus,.cds--btn.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--btn.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--btn.cds--skeleton:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--btn.cds--skeleton{background:CanvasText}.cds--btn.cds--skeleton:before{background:Canvas;forced-color-adjust:none}}.cds--btn.cds--skeleton{inline-size:9.375rem}.cds--btn-set{display:flex}.cds--btn-set--stacked{flex-direction:column}.cds--btn-set .cds--btn{inline-size:100%;max-inline-size:12.25rem}.cds--btn-set .cds--btn:not(:focus){box-shadow:-.0625rem 0 0 0 var(--cds-button-separator,#e0e0e0)}.cds--btn-set .cds--btn:first-of-type:not(:focus),.cds--btn-set .cds--btn:focus+.cds--btn{box-shadow:inherit}.cds--btn-set--stacked .cds--btn:not(:focus){box-shadow:0 -.0625rem 0 0 var(--cds-button-separator,#e0e0e0)}.cds--btn-set--stacked .cds--btn:first-of-type:not(:focus){box-shadow:inherit}.cds--btn-set .cds--btn.cds--btn--disabled{box-shadow:-.0625rem 0 0 0 var(--cds-icon-on-color-disabled,#8d8d8d)}.cds--btn-set .cds--btn.cds--btn--disabled:first-of-type{box-shadow:none}.cds--btn-set--stacked .cds--btn.cds--btn--disabled{box-shadow:0 -.0625rem 0 0 var(--cds-layer-selected-disabled,#8d8d8d)}.cds--btn-set--stacked .cds--btn.cds--btn--disabled:first-of-type{box-shadow:none}.cds--btn-set .cds--btn.cds--btn--loading{background-color:transparent;border-color:transparent;box-shadow:none}.cds--btn--sm .cds--badge-indicator{margin-block-start:.25rem;margin-inline-end:.25rem}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--btn:focus{color:Highlight;outline:1px solid Highlight}}[dir=rtl] .cds--btn-set .cds--btn:not(:focus){box-shadow:.0625rem 0 0 0 var(--cds-button-separator,#e0e0e0)}.cds--btn-set--fluid{container-type:inline-size}.cds--btn-set--fluid .cds--btn-set__fluid-inner{--flex-direction:row;align-items:stretch;display:flex;flex-direction:var(--flex-direction);inline-size:100%;justify-content:flex-end}.cds--btn-set--fluid .cds--btn-set__fluid-inner .cds--btn{flex:0 1 25%;max-inline-size:14.5rem}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack .cds--btn{min-inline-size:11rem}.cds--btn-set--fluid .cds--btn-set__fluid-inner .cds--btn--danger--ghost,.cds--btn-set--fluid .cds--btn-set__fluid-inner .cds--btn--ghost{flex:1 1 25%;max-inline-size:none;padding-inline-start:2rem}@container (width <= 11rem){.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:first-child:last-child){--flex-direction:column}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:first-child:last-child) .cds--btn{flex:initial;inline-size:100%;max-inline-size:none}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:first-child:last-child) .cds--btn--ghost{padding-inline-start:1rem}}@container (width <= 22rem){.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(2):last-child){--flex-direction:column}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(2):last-child) .cds--btn{flex:initial;inline-size:100%;max-inline-size:none}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(2):last-child) .cds--btn--ghost{padding-inline-start:1rem}}@container (width <= 33rem){.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(3):last-child){--flex-direction:column}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(3):last-child) .cds--btn{flex:initial;inline-size:100%;max-inline-size:none}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(3):last-child) .cds--btn--ghost{padding-inline-start:1rem}}@container (width <= 44rem){.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(4):last-child){--flex-direction:column}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(4):last-child) .cds--btn{flex:initial;inline-size:100%;max-inline-size:none}.cds--btn-set--fluid .cds--btn-set__fluid-inner--auto-stack:has(:nth-child(4):last-child) .cds--btn--ghost{padding-inline-start:1rem}}@container (width <= 44rem){.cds--btn-set--fluid .cds--btn-set__fluid-inner:has(:nth-child(2):last-child) .cds--btn{flex-basis:50%;max-inline-size:none}}@container (width <= 33rem){.cds--btn-set--fluid .cds--btn-set__fluid-inner:has(:first-child:last-child) .cds--btn{flex:1 1 100%;max-inline-size:none}}.cds--header,:host(cds-header){border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--header *,.cds--header :after,.cds--header :before,:host(cds-header) *,:host(cds-header) :after,:host(cds-header) :before{box-sizing:inherit}.cds--header,:host(cds-header){align-items:center;background-color:var(--cds-background,#fff);block-size:3rem;border-block-end:1px solid var(--cds-border-subtle);display:flex;inset-block-start:0;inset-inline:0;position:fixed;z-index:8000}.cds--header__action{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--header__action *,.cds--header__action :after,.cds--header__action :before{box-sizing:inherit}.cds--header__action::-moz-focus-inner{border:0}.cds--header__action{block-size:3rem;border:.0625rem solid transparent;display:inline-flex;inline-size:3rem;transition:background-color .11s,border-color .11s}@media (max-width:41.98rem){.cds--header__action{min-inline-size:3rem}}.cds--header__global .cds--popover,:host(cds-header) ::slotted(.cds--header__global) .cds--popover{z-index:8001}.cds--header__action>:first-child{margin-block-start:0}.cds--header__action--active>svg.cds--navigation-menu-panel-expand-icon,.cds--header__action>svg.cds--navigation-menu-panel-collapse-icon{display:none}.cds--header__action--active>svg.cds--navigation-menu-panel-collapse-icon{display:inline}.cds--header__action:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12))}.cds--header__action--active{background:var(--cds-layer);border-block-end:1px solid transparent;border-inline-end:1px solid var(--cds-border-subtle);border-inline-start:1px solid var(--cds-border-subtle)}.cds--header__action--active>svg{fill:var(--cds-icon-primary,#161616)}.cds--header__action:focus{border-color:var(--cds-focus,#0f62fe);outline:none}.cds--header__action:active{background-color:var(--cds-background-active,hsla(0,0%,55%,.5))}.cds--header__action.cds--btn--icon-only{align-items:center;justify-content:center}.cds--btn.cds--btn--icon-only.cds--header__action svg{fill:var(--cds-icon-secondary,#525252)}.cds--btn.cds--btn--icon-only.cds--header__action--active svg,.cds--btn.cds--btn--icon-only.cds--header__action:active svg,.cds--btn.cds--btn--icon-only.cds--header__action:hover svg,.cds--header__menu-trigger:hover>svg,.cds--header__menu-trigger>svg{fill:var(--cds-icon-primary,#161616)}.cds--header__menu-toggle{align-items:center;display:flex;justify-content:center}@media (min-width:66rem){.cds--header__menu-toggle__hidden{display:none}}a.cds--header__name{align-items:center;block-size:100%;border:.125rem solid transparent;display:flex;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);font-weight:600;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);letter-spacing:.1px;line-height:var(--cds-body-compact-01-line-height,1.28572);line-height:1.25rem;outline:none;padding:0 2rem 0 1rem;text-decoration:none;transition:border-color .11s;-webkit-user-select:none;-moz-user-select:none;user-select:none}@media (max-width:41.98rem){a.cds--header__name{padding:0 1rem}}a.cds--header__name:focus{border-color:var(--cds-focus,#0f62fe)}.cds--header__name--prefix{font-weight:400}a.cds--header__name,a.cds--header__name:hover{color:var(--cds-text-primary,#161616)}.cds--header__menu-toggle:not(.cds--header__menu-toggle__hidden)~.cds--header__name{padding-inline-start:.5rem}.cds--header__nav,:host(cds-header-nav){block-size:100%;display:none;padding-inline-start:1rem;position:relative}@media (min-width:66rem){.cds--header__nav,:host(cds-header-nav){display:block}}.cds--header__nav:before{background-color:var(--cds-border-subtle);block-size:1.5rem;content:"";display:block;inline-size:.0625rem;inset-block-start:50%;inset-inline-start:0;position:absolute;transform:translateY(-50%)}.cds--header__menu-bar{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;vertical-align:baseline}.cds--header__menu-bar *,.cds--header__menu-bar :after,.cds--header__menu-bar :before{box-sizing:inherit}.cds--header__menu-bar{block-size:100%;display:flex;list-style:none;margin:0;padding:0}a.cds--header__menu-item{align-items:center;background-color:var(--cds-background,#fff);block-size:100%;border:2px solid transparent;color:var(--cds-text-secondary,#525252);display:flex;font-size:.875rem;font-weight:400;letter-spacing:0;line-height:1.125rem;padding:0 1rem;position:relative;text-decoration:none;transition:background-color .11s,border-color .11s,color .11s;-webkit-user-select:none;-moz-user-select:none;user-select:none}a.cds--header__menu-item:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12));color:var(--cds-text-primary,#161616)}.cds--header__action:active,a.cds--header__menu-item:active{background-color:var(--cds-background-active,hsla(0,0%,55%,.5));color:var(--cds-text-primary,#161616)}a.cds--header__menu-item:focus{border-color:var(--cds-focus,#0f62fe);outline:none}a.cds--header__menu-item:active>svg,a.cds--header__menu-item:hover>svg{fill:var(--cds-icon-primary,#161616)}.cds--header__menu-item--current,a.cds--header__menu-item[aria-current=page]{color:var(--cds-text-primary,#161616)}.cds--header__menu-item--current:after,a.cds--header__menu-item[aria-current=page]:after{background-color:var(--cds-border-interactive,#0f62fe);block-size:3px;content:"";inline-size:calc(100% + 4px);inset-block-end:-2px;inset-inline-start:-2px;position:absolute}.cds--header__menu-item--current:focus:after,a.cds--header__menu-item[aria-current=page]:focus:after{border:0}.cds--header__submenu .cds--header__menu .cds--header__menu-item--current:after,.cds--header__submenu .cds--header__menu a.cds--header__menu-item[aria-current=page]:after,:host(cds-header-menu) .cds--header__menu .cds--header__menu-item--current:after,:host(cds-header-menu) .cds--header__menu a.cds--header__menu-item[aria-current=page]:after{background-color:var(--cds-border-interactive,#0f62fe);block-size:calc(100% + 4px);inline-size:3px;inset-block-start:-2px;inset-inline-start:-2px}.cds--header__submenu .cds--header__menu .cds--header__menu-item--current:focus:after,.cds--header__submenu .cds--header__menu a.cds--header__menu-item[aria-current=page]:focus:after,:host(cds-header-menu) .cds--header__menu .cds--header__menu-item--current:focus:after,:host(cds-header-menu) .cds--header__menu a.cds--header__menu-item[aria-current=page]:focus:after{background-color:var(--cds-border-interactive,#0f62fe);block-size:calc(100% + 4px);inline-size:5px;inset-block-start:-2px;inset-inline-start:-2px}a.cds--header__menu-item.cds--header__menu-item--current:focus,a.cds--header__menu-item[aria-current=page]:focus{border:2px solid var(--cds-focus,#0f62fe)}.cds--header__submenu,:host(cds-header-menu){position:relative}.cds--header__menu-title[aria-haspopup=true]{position:relative}.cds--header__menu-title[aria-expanded=true]{background-color:var(--cds-layer);color:var(--cds-text-secondary,#525252);z-index:8002}.cds--header__menu-title[aria-expanded=true]>.cds--header__menu-arrow{transform:rotate(180deg)}.cds--header__menu{display:none;list-style:none;margin:0;padding:0}.cds--header__menu-title[aria-expanded=true]+.cds--header__menu{background-color:var(--cds-layer);box-shadow:0 4px 8px 0 rgba(0,0,0,.5);display:flex;flex-direction:column;inline-size:12.5rem;inset-block-end:0;inset-inline-start:0;position:absolute;transform:translateY(100%);z-index:8001}.cds--header__menu-title[aria-expanded=true]+.cds--header__menu .cds--header__menu-item{background-color:var(--cds-layer)}.cds--header__menu-title[aria-expanded=true]+.cds--header__menu .cds--header__menu-item:hover{background-color:var(--cds-layer-hover);color:var(--cds-text-primary,#161616)}.cds--header__menu-title[aria-expanded=true]+.cds--header__menu .cds--header__menu-item:active{background-color:var(--cds-layer-active);color:var(--cds-text-primary,#161616)}.cds--header__menu-title[aria-expanded=true]+.cds--header__menu .cds--header__menu-item.cds--header__menu-item--current{background-color:var(--cds-layer-selected)}.cds--header__menu-title[aria-expanded=true]+.cds--header__menu .cds--header__menu-item.cds--header__menu-item--current:hover{background-color:var(--cds-layer-selected-hover)}.cds--header__menu .cds--header__menu-item{block-size:3rem}.cds--header__menu-arrow{fill:var(--cds-icon-secondary,#525252);margin-inline-start:.5rem;transition:transform .11s,fill .11s}.cds--header__global,:host(cds-header) ::slotted(.cds--header__global){block-size:100%;display:flex;flex:1 1 0%;justify-content:flex-end}.cds--skip-to-content{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--skip-to-content:focus{align-items:center;background-color:var(--cds-background,#fff);block-size:3rem;border:4px solid var(--cds-focus,#0f62fe);display:flex;padding:0 1rem;z-index:9999;clip:auto;color:var(--cds-text-secondary,#525252);inline-size:auto;inset-block-start:0;inset-inline-start:0;outline:none}.cds--header-panel,:host(cds-header-panel){background-color:var(--cds-layer);border:none;color:var(--cds-text-secondary,#525252);inline-size:0;inset-block:3rem 0;inset-inline-end:0;overflow:hidden;position:fixed;transition:width .11s cubic-bezier(.2,0,1,.9);will-change:width;z-index:8000}.cds--header-panel--expanded,:host(cds-header-panel[expanded]){border-inline-end:1px solid var(--cds-border-subtle);border-inline-start:1px solid var(--cds-border-subtle);inline-size:16rem;overflow-y:auto}.cds--switcher,:host(cds-switcher){border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--switcher *,.cds--switcher :after,.cds--switcher :before,:host(cds-switcher) *,:host(cds-switcher) :after,:host(cds-switcher) :before{box-sizing:inherit}.cds--switcher,:host(cds-switcher){align-items:center;color:var(--cds-text-secondary,#525252);display:flex;flex-direction:column;justify-content:center}.cds--switcher__item,:host(cds-switcher-item){block-size:2rem;inline-size:100%}.cds--switcher__item:first-child{margin-block-start:1rem}.cds--switcher__item--divider,:host(cds-switcher-divider){background:var(--cds-border-subtle);block-size:1px;border:none;display:block;inline-size:14rem;margin:.5rem 1rem}.cds--switcher__item-link{block-size:2rem;color:var(--cds-text-secondary,#525252);display:block;font-size:var(--cds-heading-compact-01-font-size,.875rem);font-weight:var(--cds-heading-compact-01-font-weight,600);letter-spacing:var(--cds-heading-compact-01-letter-spacing,.16px);line-height:var(--cds-heading-compact-01-line-height,1.28572);padding:.375rem 1rem;text-decoration:none}.cds--switcher__item-link:hover:not(.cds--switcher__item-link--selected){background:var(--cds-layer-hover);color:var(--cds-text-primary,#161616);cursor:pointer}.cds--switcher__item-link:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}.cds--switcher__item-link:active{background:var(--cds-layer-active);color:var(--cds-text-primary,#161616)}.cds--switcher__item-link--selected{background:var(--cds-layer-selected);color:var(--cds-text-primary,#161616)}:host(cds-header-nav) .cds-ce--header__divider{background-color:var(--cds-border-subtle);block-size:1.5rem;inline-size:.0625rem;inset-block-start:50%;inset-inline-start:0;position:absolute;transform:translateY(-50%)}:host(cds-header-nav-item){outline:none}:host(cds-header-menu){outline:none}:host(cds-header-menu-item){outline:none}:host(cds-header-menu-item) a.cds--header__menu-item{background-color:var(--cds-layer);block-size:3rem}:host(cds-header-menu-item) a.cds--header__menu-item:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12));color:var(--cds-text-primary,#161616)}:host(cds-header-menu-item) a.cds--header__menu-item:active{background-color:var(--cds-background-active,hsla(0,0%,55%,.5))}:host(cds-header-menu-item) a.cds--header__menu-item--current{background-color:var(--cds-layer-selected)}:host(cds-header-menu-item) a.cds--header__menu-item--current:hover{background-color:var(--cds-layer-selected-hover)}:host(cds-header-menu-item) a.cds--header__menu-item--current:after{background-color:var(--cds-border-interactive,#0f62fe);block-size:100%;content:"";inline-size:3px;inset-block:-.125rem;inset-inline-start:-.125rem;position:absolute}:host(cds-header-global-action) ::slotted(svg){fill:var(--cds-icon-secondary,#525252)}:host(cds-header-global-action):hover ::slotted(svg){fill:var(--cds-icon-primary,#161616)}:host(cds-header-global-action) .cds--popover{z-index:8001}:host(cds-header-menu) a.cds--header__menu-item,:host(cds-header-nav-item) a.cds--header__menu-item{box-sizing:border-box}:host(cds-header-menu-button){display:content;outline:none}@media (min-width:66rem){:host(cds-header-menu-button){display:none}}:host(cds-header-menu-button[collapse-mode=fixed]){display:none}@media (min-width:66rem){:host(cds-header-menu-button[collapse-mode=rail]){display:block}}:host(cds-header-name){block-size:100%;display:content}:host(cds-header-name) a{box-sizing:border-box}:host(cds-switcher-item) a{box-sizing:border-box}:host(cds-switcher-item:first-child){margin-block-start:1rem}']);

// node_modules/@carbon/web-components/es/components/ui-shell/header.js
var CDSHeader = class CDSHeader2 extends i2 {
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "banner");
    }
    super.connectedCallback();
  }
  render() {
    return b` <slot></slot> `;
  }
};
CDSHeader.styles = styles;
CDSHeader = __decorate([
  carbonElement(`${prefix}-header`)
], CDSHeader);

// node_modules/@carbon/web-components/es/components/ui-shell/header-global-action.js
var CDSHeaderGlobalAction = class CDSHeaderGlobalAction2 extends CDSButton$1 {
  constructor() {
    super(...arguments);
    this._handleDocumentClick = (event) => {
      const path = event.composedPath();
      this._handlePanelCloseIfFocusOutside(path);
    };
    this._handleDocumentFocusIn = (event) => {
      const path = event.composedPath();
      this._handlePanelCloseIfFocusOutside(path);
    };
  }
  connectedCallback() {
    this.tooltipPosition = BUTTON_TOOLTIP_POSITION.BOTTOM;
    this.kind = BUTTON_KIND.GHOST;
    this.size = BUTTON_SIZE.LARGE;
    super.connectedCallback();
  }
  firstUpdated() {
    document.addEventListener("click", this._handleDocumentClick, true);
    document.addEventListener("focusin", this._handleDocumentFocusIn, true);
  }
  disconnectedCallback() {
    document.removeEventListener("click", this._handleDocumentClick, true);
    document.removeEventListener("focusin", this._handleDocumentFocusIn, true);
    super.disconnectedCallback();
  }
  _handlePanelCloseIfFocusOutside(path) {
    var _a;
    const panel = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.querySelector(`#${this.panelId}`);
    const isInside = path.some((el) => el instanceof HTMLElement && ((panel === null || panel === void 0 ? void 0 : panel.contains(el)) || this.contains(el)));
    if (panel && !isInside) {
      panel.removeAttribute("expanded");
      this.active = false;
    }
  }
  _handleFocusOut(event) {
    var _a;
    const panel = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.querySelector(`#${this.panelId}`);
    const relatedTarget = event.relatedTarget;
    if (panel && relatedTarget && !this.contains(relatedTarget) && !panel.contains(relatedTarget)) {
      panel.removeAttribute("expanded");
      this.active = false;
    }
  }
  _handleClick(event) {
    var _a;
    const { disabled } = this;
    if (disabled) {
      event.stopPropagation();
    } else {
      const panel = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.querySelector(`#${this.panelId}`);
      if (panel) {
        const expanded = panel.getAttribute("expanded");
        if (expanded) {
          panel.removeAttribute("expanded");
        } else {
          panel.setAttribute("expanded", "true");
        }
        const active = !this.active;
        this.active = active;
      }
    }
  }
  _handleKeyDown(event) {
    var _a;
    const { key } = event;
    if (key === "Enter" || key === " ") {
      event.preventDefault();
      this._handleClick(event);
    } else if (key === "Escape") {
      const panel = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.querySelector(`#${this.panelId}`);
      if (panel) {
        panel.removeAttribute("expanded");
      }
      this.active = false;
    }
  }
  updated(changedProperties) {
    if (this._buttonNode) {
      this._buttonNode.classList.add(`${prefix}--header__action`);
      if (changedProperties.has("active") || changedProperties.size === 0) {
        if (this.active) {
          this._buttonNode.classList.add(`${prefix}--header__action--active`);
          if (this.buttonLabelActive) {
            this.tooltipText = this.buttonLabelActive;
          }
        } else {
          this._buttonNode.classList.remove(`${prefix}--header__action--active`);
          if (this.buttonLabelInactive) {
            this.tooltipText = this.buttonLabelInactive;
          }
        }
      }
    }
  }
  shouldUpdate(changedProperties) {
    if (changedProperties.has("active") && this._buttonNode) {
      if (this.active) {
        this._buttonNode.classList.add(`${prefix}--header__action--active`);
        if (this.buttonLabelActive) {
          this.tooltipText = this.buttonLabelActive;
        }
      } else {
        this._buttonNode.classList.remove(`${prefix}--header__action--active`);
        if (this.buttonLabelInactive) {
          this.tooltipText = this.buttonLabelInactive;
        }
      }
    }
    return true;
  }
};
CDSHeaderGlobalAction.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSHeaderGlobalAction.styles = styles;
__decorate([
  e("button")
], CDSHeaderGlobalAction.prototype, "_buttonNode", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSHeaderGlobalAction.prototype, "active", void 0);
__decorate([
  n({ type: String, attribute: "panel-id", reflect: true })
], CDSHeaderGlobalAction.prototype, "panelId", void 0);
__decorate([
  n({ attribute: "button-label-active" })
], CDSHeaderGlobalAction.prototype, "buttonLabelActive", void 0);
__decorate([
  n({ attribute: "button-label-inactive" })
], CDSHeaderGlobalAction.prototype, "buttonLabelInactive", void 0);
__decorate([
  HostListener("focusout")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore
], CDSHeaderGlobalAction.prototype, "_handleFocusOut", null);
__decorate([
  HostListener("click", { capture: true })
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore
], CDSHeaderGlobalAction.prototype, "_handleClick", null);
__decorate([
  HostListener("keydown", { capture: true })
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore
], CDSHeaderGlobalAction.prototype, "_handleKeyDown", null);
CDSHeaderGlobalAction = __decorate([
  carbonElement(`${prefix}-header-global-action`)
], CDSHeaderGlobalAction);

// node_modules/@carbon/web-components/es/components/ui-shell/header-menu.js
var CDSHeaderMenu = class CDSHeaderMenu2 extends HostListenerMixin(FocusMixin(i2)) {
  constructor() {
    super(...arguments);
    this._hasActiveChildren = false;
    this.expanded = false;
    this.isActive = false;
    this.triggerContent = "";
  }
  /**
   * Handles `click` event handler on this element.
   */
  _handleClick() {
    this._handleUserInitiatedToggle();
  }
  /**
   * Handler for the `keydown` event on the trigger button.
   */
  _handleKeydownTrigger({ key }) {
    if (key === "Esc" || key === "Escape") {
      this._handleUserInitiatedToggle(false);
    }
  }
  /**
   * Handles user-initiated toggling the open state.
   *
   * @param [force] If specified, forces the open state to the given one.
   */
  _handleUserInitiatedToggle(force = !this.expanded) {
    this.expanded = force;
    if (!force) {
      this._topMenuItem.focus();
    }
  }
  /**
   * Handles `blur` event handler on this element.
   */
  _handleBlur({ relatedTarget }) {
    if (!this.contains(relatedTarget)) {
      this.expanded = false;
    }
  }
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "listitem");
    }
    const { selectorItem } = this.constructor;
    forEach(this.querySelectorAll(selectorItem), (elem) => {
      if (elem.isActive === true) {
        this._hasActiveChildren = true;
      }
    });
    super.connectedCallback();
  }
  updated(changedProperties) {
    if (changedProperties.has("expanded")) {
      const { selectorItem } = this.constructor;
      const { expanded } = this;
      forEach(this.querySelectorAll(selectorItem), (elem) => {
        elem.tabIndex = expanded ? 0 : -1;
      });
    }
  }
  render() {
    const { expanded, isActive, triggerContent, menuLabel, _hasActiveChildren, _handleClick: handleClick } = this;
    const linkClasses = e2({
      [`${prefix}--header__menu-item`]: true,
      [`${prefix}--header__menu-title`]: true,
      [`${prefix}--header__menu-item--current`]: isActive || _hasActiveChildren && !expanded
    });
    return b`
      <a
        part="trigger"
        role="button"
        tabindex="0"
        class="${linkClasses}"
        href="javascript:void 0"
        aria-haspopup="menu"
        aria-expanded="${String(Boolean(expanded))}"
        @click=${handleClick}>
        ${triggerContent}${iconLoader(_162, {
      part: "trigger-icon",
      class: `${prefix}--header__menu-arrow`
    })}
      </a>
      <ul
        part="menu-body"
        class="${prefix}--header__menu"
        aria-label="${o(menuLabel)}">
        <slot></slot>
      </ul>
    `;
  }
  /**
   * A selector that will return the menu items.
   */
  static get selectorItem() {
    return `${prefix}-header-menu-item`;
  }
};
CDSHeaderMenu.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSHeaderMenu.styles = styles;
__decorate([
  e('[part="trigger"]')
], CDSHeaderMenu.prototype, "_topMenuItem", void 0);
__decorate([
  HostListener("keydown")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSHeaderMenu.prototype, "_handleKeydownTrigger", null);
__decorate([
  HostListener("focusout")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSHeaderMenu.prototype, "_handleBlur", null);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSHeaderMenu.prototype, "expanded", void 0);
__decorate([
  n({ type: Boolean, attribute: "is-active", reflect: true })
], CDSHeaderMenu.prototype, "isActive", void 0);
__decorate([
  n({ attribute: "trigger-content" })
], CDSHeaderMenu.prototype, "triggerContent", void 0);
__decorate([
  n({ attribute: "menu-label" })
], CDSHeaderMenu.prototype, "menuLabel", void 0);
CDSHeaderMenu = __decorate([
  carbonElement(`${prefix}-header-menu`)
], CDSHeaderMenu);

// node_modules/@carbon/icons/es/menu/16.js
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
      "d": "M2 12H14V13H2z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M2 9H14V10H2z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M2 6H14V7H2z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M2 3H14V4H2z"
    }
  }],
  "name": "menu",
  "size": 16
};

// node_modules/@carbon/web-components/es/components/ui-shell/defs.js
var SIDE_NAV_COLLAPSE_MODE;
(function(SIDE_NAV_COLLAPSE_MODE2) {
  SIDE_NAV_COLLAPSE_MODE2["FIXED"] = "fixed";
  SIDE_NAV_COLLAPSE_MODE2["RAIL"] = "rail";
  SIDE_NAV_COLLAPSE_MODE2["RESPONSIVE"] = "responsive";
})(SIDE_NAV_COLLAPSE_MODE || (SIDE_NAV_COLLAPSE_MODE = {}));
var SIDE_NAV_USAGE_MODE;
(function(SIDE_NAV_USAGE_MODE2) {
  SIDE_NAV_USAGE_MODE2["REGULAR"] = "";
  SIDE_NAV_USAGE_MODE2["HEADER_NAV"] = "header-nav";
})(SIDE_NAV_USAGE_MODE || (SIDE_NAV_USAGE_MODE = {}));

// node_modules/@carbon/web-components/es/components/ui-shell/side-nav.scss.js
var styles2 = i(['.cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-background:var(--cds-layer-background-01,#fff);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-background:var(--cds-layer-background-02,#f4f4f4);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-background:var(--cds-layer-background-03,#fff);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}.cds--layer-one.cds--layer__with-background,.cds--layer-three.cds--layer__with-background,.cds--layer-two.cds--layer__with-background{background-color:var(--cds-layer-background)}.cds--side-nav{background-color:var(--cds-background,#fff);color:var(--cds-text-secondary,#525252);inline-size:3rem;inset-block:0;inset-inline-start:0;max-inline-size:16rem;overflow:hidden;position:fixed;transition:inline-size .11s cubic-bezier(.2,0,1,.9),transform .11s cubic-bezier(.2,0,1,.9);will-change:inline-size;z-index:8000}.cds--side-nav--ux{inline-size:16rem;inset-block-start:3rem}@media (max-width:65.98rem){.cds--side-nav--ux{inline-size:0}}.cds--side-nav--rail{inline-size:3rem}.cds--side-nav--hidden{inline-size:0}.cds--side-nav--expanded{inline-size:16rem}.cds--side-nav__overlay{background-color:transparent;block-size:0;inline-size:0;inset-block-start:3rem;inset-inline-start:0;opacity:0;position:fixed;transition:opacity .3s cubic-bezier(.5,0,.1,1),background-color .3s cubic-bezier(.5,0,.1,1)}@media (max-width:65.98rem){.cds--side-nav__overlay-active{background-color:var(--cds-overlay,rgba(0,0,0,.6));block-size:100vh;inline-size:100vw;opacity:1;transition:opacity .3s cubic-bezier(.5,0,.1,1),background-color .3s cubic-bezier(.5,0,.1,1);z-index:6000}}.cds--header~.cds--side-nav{block-size:calc(100% - 48px);inset-block-start:3rem}.cds--side-nav--fixed{inline-size:16rem}.cds--side-nav--collapsed{inline-size:16rem;transform:translateX(-16rem)}.cds--side-nav__navigation{display:flex;flex-direction:column}.cds--side-nav__items,:host(cds-side-nav-items){border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--side-nav__items *,.cds--side-nav__items :after,.cds--side-nav__items :before,:host(cds-side-nav-items) *,:host(cds-side-nav-items) :after,:host(cds-side-nav-items) :before{box-sizing:inherit}.cds--side-nav__items,:host(cds-side-nav-items){flex:1 1 0%;overflow:hidden;padding:1rem 0 0}.cds--side-nav--expanded .cds--side-nav__items,.cds--side-nav--expanded :host(cds-side-nav-items),.cds--side-nav--fixed .cds--side-nav__items,.cds--side-nav--fixed :host(cds-side-nav-items),.cds--side-nav:hover .cds--side-nav__items,.cds--side-nav:hover :host(cds-side-nav-items){overflow-y:auto}.cds--side-nav--ux .cds--side-nav__items,.cds--side-nav--ux :host(cds-side-nav-items){overflow-y:auto}.cds--side-nav__item,:host(cds-side-nav-link),:host(cds-side-nav-menu){block-size:auto;inline-size:auto;overflow:hidden}.cds--side-nav--ux .cds--side-nav__item,.cds--side-nav--ux :host(cds-side-nav-link),.cds--side-nav--ux :host(cds-side-nav-menu){block-size:auto;inline-size:auto}.cds--side-nav .cds--header__menu-title[aria-expanded=true]:hover,.cds--side-nav a.cds--header__menu-item:hover,.cds--side-nav__item:not(.cds--side-nav__item--active):hover .cds--side-nav__item:not(.cds--side-nav__item--active)>.cds--side-nav__submenu:hover,.cds--side-nav__item:not(.cds--side-nav__item--active):hover :not(.cds--side-nav__item--active):host(cds-side-nav-link)>.cds--side-nav__submenu:hover,.cds--side-nav__item:not(.cds--side-nav__item--active):hover :not(.cds--side-nav__item--active):host(cds-side-nav-menu)>.cds--side-nav__submenu:hover,.cds--side-nav__item:not(.cds--side-nav__item--active)>.cds--side-nav__link:hover,.cds--side-nav__menu a.cds--side-nav__link:not(.cds--side-nav__link--current):not([aria-current=page]):hover,:not(.cds--side-nav__item--active):host(cds-side-nav-link)>.cds--side-nav__link:hover,:not(.cds--side-nav__item--active):host(cds-side-nav-menu)>.cds--side-nav__link:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12));color:var(--cds-text-primary,#161616)}.cds--side-nav__item:not(.cds--side-nav__item--active) .cds--side-nav__menu-item>.cds--side-nav__link:hover>span,.cds--side-nav__item:not(.cds--side-nav__item--active) :host(cds-side-nav-menu-item)>.cds--side-nav__link:hover>span,.cds--side-nav__item:not(.cds--side-nav__item--active)>.cds--side-nav__link:hover>span,:not(.cds--side-nav__item--active):host(cds-side-nav-link) .cds--side-nav__menu-item>.cds--side-nav__link:hover>span,:not(.cds--side-nav__item--active):host(cds-side-nav-link) :host(cds-side-nav-menu-item)>.cds--side-nav__link:hover>span,:not(.cds--side-nav__item--active):host(cds-side-nav-link)>.cds--side-nav__link:hover>span,:not(.cds--side-nav__item--active):host(cds-side-nav-menu) .cds--side-nav__menu-item>.cds--side-nav__link:hover>span,:not(.cds--side-nav__item--active):host(cds-side-nav-menu) :host(cds-side-nav-menu-item)>.cds--side-nav__link:hover>span,:not(.cds--side-nav__item--active):host(cds-side-nav-menu)>.cds--side-nav__link:hover>span{color:var(--cds-text-primary,#161616)}.cds--side-nav__item--large,:host(cds-side-nav-link[large]),:host(cds-side-nav-menu[large]){block-size:auto}.cds--side-nav__divider,:host(cds-side-nav-divider){background-color:var(--cds-border-subtle);block-size:1px;list-style-type:none;margin:.5rem 1rem}.cds--side-nav__divider hr,:host(cds-side-nav-divider) hr{border:none}.cds--side-nav__submenu{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--side-nav__submenu *,.cds--side-nav__submenu :after,.cds--side-nav__submenu :before{box-sizing:inherit}.cds--side-nav__submenu::-moz-focus-inner{border:0}.cds--side-nav__submenu{align-items:center;block-size:2rem;color:var(--cds-text-secondary,#525252);display:flex;font-size:var(--cds-heading-compact-01-font-size,.875rem);font-weight:var(--cds-heading-compact-01-font-weight,600);letter-spacing:var(--cds-heading-compact-01-letter-spacing,.16px);line-height:var(--cds-heading-compact-01-line-height,1.28572);outline:2px solid transparent;outline-offset:-2px;padding:0 1rem;transition:color .11s,background-color .11s,outline .11s;-webkit-user-select:none;-moz-user-select:none;user-select:none}.cds--side-nav__submenu:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12));color:var(--cds-text-primary,#161616)}.cds--side-nav__submenu:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--side-nav__submenu:focus{outline-style:dotted}}.cds--side-nav__submenu-title{overflow:hidden;text-align:start;text-overflow:ellipsis;white-space:nowrap}.cds--side-nav__icon.cds--side-nav__submenu-chevron{display:flex;flex:1;justify-content:flex-end}.cds--side-nav__submenu-chevron>svg{block-size:1rem;inline-size:1rem;transition:transform .11s}.cds--side-nav__submenu[aria-expanded=true] .cds--side-nav__submenu-chevron>svg{transform:rotate(180deg)}.cds--side-nav__item--large .cds--side-nav__submenu,:host(cds-side-nav-link[large]) .cds--side-nav__submenu,:host(cds-side-nav-menu[large]) .cds--side-nav__submenu{block-size:3rem}.cds--side-nav__item--active .cds--side-nav__submenu:hover,:host(cds-side-nav-menu[active]) .cds--side-nav__submenu:hover{background-color:var(--cds-background-selected,hsla(0,0%,55%,.2));color:var(--cds-text-primary,#161616)}.cds--side-nav__item--active .cds--side-nav__submenu[aria-expanded=false],:host(cds-side-nav-menu[active]) .cds--side-nav__submenu[aria-expanded=false]{background-color:var(--cds-background-selected,hsla(0,0%,55%,.2));color:var(--cds-text-primary,#161616);position:relative}.cds--side-nav__item--active .cds--side-nav__submenu[aria-expanded=false]:before,:host(cds-side-nav-menu[active]) .cds--side-nav__submenu[aria-expanded=false]:before{background-color:var(--cds-border-interactive,#0f62fe);content:"";inline-size:3px;inset-block:0;inset-inline-start:0;position:absolute}.cds--side-nav__item--active .cds--side-nav__submenu-title,:host(cds-side-nav-menu[active]) .cds--side-nav__submenu-title{color:var(--cds-text-primary,#161616);font-weight:600}.cds--side-nav__item--active .cds--side-nav__icon>svg,:host(cds-side-nav-menu[active]) .cds--side-nav__icon>svg{fill:var(--cds-icon-primary,#161616)}.cds--side-nav__menu{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--side-nav__menu *,.cds--side-nav__menu :after,.cds--side-nav__menu :before{box-sizing:inherit}.cds--side-nav__menu{display:block;max-block-size:0;visibility:hidden}.cds--side-nav__submenu[aria-expanded=true]+.cds--side-nav__menu{max-block-size:93.75rem;visibility:inherit}.cds--side-nav__menu a.cds--side-nav__link{block-size:2rem;font-weight:400;min-block-size:2rem;padding-inline-start:2rem}.cds--side-nav__item.cds--side-nav__item--icon a.cds--side-nav__link,:host(cds-side-nav-menu):host(cds-side-nav-menu[has-icon]) a.cds--side-nav__link{padding-inline-start:4.5rem}.cds--side-nav__menu a.cds--side-nav__link--current,.cds--side-nav__menu a.cds--side-nav__link[aria-current=page],a.cds--side-nav__link--current{background-color:var(--cds-background-selected,hsla(0,0%,55%,.2))}.cds--side-nav__menu a.cds--side-nav__link--current>span,.cds--side-nav__menu a.cds--side-nav__link[aria-current=page]>span,a.cds--side-nav__link--current>span{color:var(--cds-text-primary,#161616);font-weight:600}.cds--side-nav .cds--header__menu-title[aria-expanded=true]+.cds--header__menu,.cds--side-nav a.cds--header__menu-item,a.cds--side-nav__link{align-items:center;display:flex;font-size:var(--cds-heading-compact-01-font-size,.875rem);font-weight:var(--cds-heading-compact-01-font-weight,600);letter-spacing:var(--cds-heading-compact-01-letter-spacing,.16px);line-height:var(--cds-heading-compact-01-line-height,1.28572);min-block-size:2rem;outline:2px solid transparent;outline-offset:-2px;padding:0 1rem;position:relative;text-decoration:none;transition:color .11s,background-color .11s,outline .11s}.cds--side-nav__item--large a.cds--side-nav__link,:host(cds-side-nav-link[large]) a.cds--side-nav__link,:host(cds-side-nav-menu[large]) a.cds--side-nav__link{block-size:3rem}.cds--side-nav a.cds--header__menu-item .cds--text-truncate-end,a.cds--side-nav__link>.cds--side-nav__link-text{color:var(--cds-text-secondary,#525252);font-size:.875rem;letter-spacing:.1px;line-height:1.25rem;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap}.cds--side-nav a.cds--header__menu-item:focus,a.cds--side-nav__link:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--side-nav a.cds--header__menu-item:focus,a.cds--side-nav__link:focus{outline-style:dotted}}a.cds--side-nav__link--current,a.cds--side-nav__link[aria-current=page]{background-color:var(--cds-background-selected,hsla(0,0%,55%,.2));font-weight:600}a.cds--side-nav__link--current .cds--side-nav__link-text,a.cds--side-nav__link[aria-current=page] .cds--side-nav__link-text{color:var(--cds-text-primary,#161616)}a.cds--side-nav__link--current:before,a.cds--side-nav__link[aria-current=page]:before{background-color:var(--cds-border-interactive,#0f62fe);content:"";inline-size:3px;inset-block:0;inset-inline-start:0;position:absolute}.cds--side-nav__icon{align-items:center;display:flex;flex:0 0 1rem;justify-content:center}.cds--side-nav__icon:not(.cds--side-nav__submenu-chevron){margin-inline-end:1.5rem}.cds--side-nav__icon>svg{block-size:1rem;fill:var(--cds-icon-secondary,#525252);inline-size:1rem}.cds--side-nav--expanded .cds--side-nav__icon>svg.cds--side-nav-expand-icon,.cds--side-nav__icon>svg.cds--side-nav-collapse-icon{display:none}.cds--side-nav--expanded .cds--side-nav__icon>svg.cds--side-nav-collapse-icon{display:block}.cds--side-nav--fixed .cds--side-nav__submenu,.cds--side-nav--fixed a.cds--side-nav__link{padding-inline-start:1rem}.cds--side-nav--fixed .cds--side-nav__item:not(.cds--side-nav__item--icon) .cds--side-nav__menu a.cds--side-nav__link,.cds--side-nav--fixed :not(.cds--side-nav__item--icon):host(cds-side-nav-link) .cds--side-nav__menu a.cds--side-nav__link,.cds--side-nav--fixed :not(.cds--side-nav__item--icon):host(cds-side-nav-menu) .cds--side-nav__menu a.cds--side-nav__link{padding-inline-start:2rem}@media (max-width:65.98rem){.cds--side-nav .cds--header__nav{display:block}}.cds--side-nav__header-navigation,:host(cds-header-side-nav-items){border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--side-nav__header-navigation *,.cds--side-nav__header-navigation :after,.cds--side-nav__header-navigation :before,:host(cds-header-side-nav-items) *,:host(cds-header-side-nav-items) :after,:host(cds-header-side-nav-items) :before{box-sizing:inherit}.cds--side-nav__header-navigation,:host(cds-header-side-nav-items){display:none}@media (max-width:65.98rem){.cds--side-nav__header-navigation,:host(cds-header-side-nav-items){display:block;margin-block-end:2rem;position:relative}}.cds--side-nav__header-divider:after{background:var(--cds-border-subtle);block-size:.0625rem;content:"";inline-size:calc(100% - 32px);inset-block-end:-1rem;inset-inline-start:1rem;position:absolute}.cds--side-nav a.cds--header__menu-item{color:var(--cds-text-secondary,#525252);justify-content:space-between;white-space:nowrap}.cds--side-nav a.cds--header__menu-item[aria-expanded=true]{background-color:transparent}.cds--side-nav .cds--header__menu-title[aria-expanded=true]+.cds--header__menu{background-color:transparent;box-shadow:none;inline-size:100%;inset-block-end:inherit;padding:0;transform:none}.cds--side-nav .cds--header__menu-title[aria-expanded=true]+.cds--header__menu li{inline-size:100%}.cds--side-nav .cds--header__menu-title[aria-expanded=true]+.cds--header__menu a.cds--header__menu-item{font-weight:400;padding-inline-start:4.25rem}.cds--side-nav .cds--header__menu-title[aria-expanded=true]+.cds--header__menu a.cds--header__menu-item:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12));color:var(--cds-text-primary,#161616)}.cds--side-nav .cds--header__menu-title[aria-expanded=true]+.cds--header__menu a.cds--header__menu-item--current:hover{background-color:var(--cds-layer-selected-hover)}.cds--side-nav .cds--side-nav__header-navigation .cds--header__menu-item--current:after,.cds--side-nav .cds--side-nav__header-navigation a.cds--header__menu-item[aria-current=page]:after,.cds--side-nav :host(cds-header-side-nav-items) .cds--header__menu-item--current:after,.cds--side-nav :host(cds-header-side-nav-items) a.cds--header__menu-item[aria-current=page]:after{block-size:calc(100% + 4px);inline-size:3px}.cds--side-nav .cds--header__menu a.cds--header__menu-item{block-size:inherit}.cds--side-nav .cds--header__menu-arrow,.cds--side-nav a.cds--header__menu-item:focus .cds--header__menu-arrow,.cds--side-nav a.cds--header__menu-item:hover .cds--header__menu-arrow{fill:var(--cds-icon-secondary,#525252)}:host(cds-side-nav[expanded]) ::slotted(cds-side-nav-items){overflow-y:auto}:host(cds-side-nav-link){block-size:auto;display:block;inline-size:auto;outline:none}:host(cds-side-nav-link) .cds--side-nav__icon{color:var(--cds-text-primary,#161616)}:host(cds-side-nav-link) .cds--side-nav__icon[hidden]{display:none}:host(cds-side-nav-divider){display:block}:host(cds-side-nav-menu){display:block}:host(cds-side-nav-menu) .cds--side-nav__icon[hidden]{display:none}:host(cds-side-nav-menu) .cds--side-nav__menu{margin:0;padding:0}:host(cds-side-nav-menu) .cds--side-nav__submenu[aria-expanded=true]+.cds--side-nav__menu{max-block-size:none}:host(cds-side-nav-menu[active]){color:var(--cds-text-primary,#161616);position:relative}:host(cds-side-nav-menu[active]):before{background-color:var(--cds-border-interactive,#0f62fe);content:"";inline-size:.25rem;inset-block:0;inset-inline-start:0;position:absolute}:host(cds-side-nav-menu[active][expanded]){background-color:inherit;color:inherit;position:inherit}:host(cds-side-nav-menu[active][expanded]):before{content:none}:host(cds-side-nav-menu-item){block-size:auto;display:block;inline-size:auto;outline:none}:host(cds-side-nav-menu-item) a.cds--side-nav__link{block-size:2rem;font-weight:400;min-block-size:2rem;padding-inline-start:2rem}:host(cds-side-nav-menu-item[parent-has-icon]) a.cds--side-nav__link{padding-inline-start:4.5rem}:host(cds-side-nav-item) .cds--side-nav__link:hover,:host(cds-side-nav-menu) .cds--side-nav__submenu:hover,:host(cds-side-nav-menu-item) .cds--side-nav__link:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12));color:var(--cds-text-primary,#161616)}']);

// node_modules/@carbon/web-components/es/components/ui-shell/side-nav.js
var CDSSideNav = class CDSSideNav2 extends HostListenerMixin(i2) {
  constructor() {
    super(...arguments);
    this._hovered = false;
    this._hTransition = null;
    this._handleButtonToggle = async (event) => {
      this.expanded = event.detail.active;
    };
    this.collapseMode = SIDE_NAV_COLLAPSE_MODE.RESPONSIVE;
    this.expanded = false;
    this.isNotChildOfHeader = false;
    this.isNotPersistent = false;
  }
  /**
   * Cleans the handle for `transitionend` event listener.
   */
  _cleanHTransition() {
    if (this._hTransition) {
      this._hTransition = this._hTransition.release();
    }
  }
  /**
   * Force child side nav menus collapsed upon the hover/expanded state of this side nav.
   */
  _updatedSideNavMenuForceCollapsedState() {
    const { expanded, _hovered: hovered } = this;
    forEach(this.querySelectorAll(this.constructor.selectorMenu), (item) => {
      item.forceCollapsed = !expanded && !hovered;
    });
  }
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "navigation");
    }
    super.connectedCallback();
  }
  disconnectedCallback() {
    this._cleanHTransition();
    super.disconnectedCallback();
  }
  updated(changedProperties) {
    const doc = this.getRootNode();
    if (changedProperties.has("collapseMode")) {
      forEach(doc.querySelectorAll(this.constructor.selectorButtonToggle), (item) => {
        item.collapseMode = this.collapseMode;
      });
    }
    if (changedProperties.has("expanded")) {
      const headerItems = doc.querySelectorAll(this.constructor.selectorHeaderItems);
      forEach(doc.querySelectorAll(this.constructor.selectorButtonToggle), (item) => {
        item.active = this.expanded;
      });
      if (this.expanded) {
        forEach(headerItems, (item) => {
          item.setAttribute("tabindex", "-1");
        });
      } else {
        forEach(headerItems, (item) => {
          item.removeAttribute("tabindex");
        });
      }
    }
    if (changedProperties.has("isNotChildOfHeader")) {
      forEach(doc.querySelectorAll(this.constructor.selectorButtonToggle), (item) => {
        item.isNotChildOfHeader = this.isNotChildOfHeader;
      });
    }
  }
  /**
   * Handles `blur` event handler on this element.
   *
   * @param event The event.
   * @param event.relatedTarget The event relatedTarget.
   */
  _handleFocusOut({ relatedTarget }) {
    const { collapseMode } = this;
    if (collapseMode !== SIDE_NAV_COLLAPSE_MODE.FIXED) {
      if (relatedTarget && !this.contains(relatedTarget)) {
        this.expanded = false;
      }
    }
  }
  /**
   * Handles `focus` event handler on this element.
   *
   */
  _handleFocusIn() {
    const { collapseMode } = this;
    if (collapseMode !== SIDE_NAV_COLLAPSE_MODE.FIXED) {
      this.expanded = true;
    }
  }
  /**
   * Handles the `mouseover` event for the side nav in rail mode.
   *
   */
  _handleNavMouseOver() {
    const { collapseMode } = this;
    if (collapseMode === SIDE_NAV_COLLAPSE_MODE.RAIL) {
      this.expanded = true;
      this._hovered = true;
      this._updatedSideNavMenuForceCollapsedState();
    }
  }
  /**
   * Handles the `mouseout` event for the side nav in rail mode.
   *
   */
  _handleNavMouseOut() {
    const { collapseMode } = this;
    if (collapseMode === SIDE_NAV_COLLAPSE_MODE.RAIL) {
      this.expanded = false;
      this._hovered = false;
      this._updatedSideNavMenuForceCollapsedState();
    }
  }
  /**
   * Handles the `click` event for the side nav overlay.
   *
   */
  _onOverlayClick() {
    this.expanded = false;
  }
  render() {
    const { collapseMode, expanded, isNotChildOfHeader, isNotPersistent } = this;
    const classes = e2({
      [`${prefix}--side-nav__navigation`]: true,
      [`${prefix}--side-nav`]: true,
      [`${prefix}--side-nav--expanded`]: expanded,
      [`${prefix}--side-nav--collapsed`]: !expanded && collapseMode === SIDE_NAV_COLLAPSE_MODE.FIXED,
      [`${prefix}--side-nav--rail`]: collapseMode === SIDE_NAV_COLLAPSE_MODE.RAIL,
      [`${prefix}--side-nav--ux`]: !isNotChildOfHeader,
      [`${prefix}--side-nav--hidden`]: isNotPersistent
    });
    const overlayClasses = e2({
      [`${prefix}--side-nav__overlay`]: true,
      [`${prefix}--side-nav__overlay-active`]: expanded
    });
    return b`${this.collapseMode === SIDE_NAV_COLLAPSE_MODE.FIXED ? null : b`<div
            class="${overlayClasses}"
            @click=${this._onOverlayClick}></div>`}
      <div
        class="${classes}"
        @mouseover="${this._handleNavMouseOver}"
        @mouseout="${this._handleNavMouseOut}">
        <slot></slot>
      </div>`;
  }
  /**
   * A selector that will return the toggle buttons.
   */
  static get selectorButtonToggle() {
    return `${prefix}-header-menu-button`;
  }
  /**
   * A selector that will return the header name + global action elements.
   */
  static get selectorHeaderItems() {
    return `${prefix}-header-name, ${prefix}-header-global-action`;
  }
  /**
   * A selector that will return side nav focusable items.
   */
  static get selectorNavItems() {
    return `${prefix}-side-nav-menu, ${prefix}-side-nav-menu-item, ${prefix}-side-nav-link`;
  }
  /**
   * A selector that will return side nav menus.
   */
  static get selectorMenu() {
    return `${prefix}-side-nav-menu`;
  }
  /**
   * The name of the custom event fired after the header menu button in the document is toggled upon a user gesture.
   */
  static get eventButtonToggle() {
    return `${prefix}-header-menu-button-toggled`;
  }
};
CDSSideNav.styles = styles2;
__decorate([
  HostListener("parentRoot:eventButtonToggle")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSSideNav.prototype, "_handleButtonToggle", void 0);
__decorate([
  n({ reflect: true, attribute: "collapse-mode" })
], CDSSideNav.prototype, "collapseMode", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSideNav.prototype, "expanded", void 0);
__decorate([
  n({
    type: Boolean,
    attribute: "is-not-child-of-header"
  })
], CDSSideNav.prototype, "isNotChildOfHeader", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "is-not-persistent" })
], CDSSideNav.prototype, "isNotPersistent", void 0);
__decorate([
  HostListener("focusout")
  // @ts-expect-error: The decorator refers to this method but TS thinks this method is not referred to
], CDSSideNav.prototype, "_handleFocusOut", null);
__decorate([
  HostListener("focusin")
  // @ts-expect-error: The decorator refers to this method but TS thinks this method is not referred to
], CDSSideNav.prototype, "_handleFocusIn", null);
CDSSideNav = __decorate([
  carbonElement(`${prefix}-side-nav`)
], CDSSideNav);

// node_modules/@carbon/web-components/es/components/ui-shell/header-menu-button.js
var CDSHeaderMenuButton = class CDSHeaderMenuButton2 extends FocusMixin(i2) {
  constructor() {
    super(...arguments);
    this.active = false;
    this.buttonLabelActive = "Close navigation menu";
    this.buttonLabelInactive = "Open navigation menu";
    this.collapseMode = SIDE_NAV_COLLAPSE_MODE.RESPONSIVE;
    this.disabled = false;
    this.isNotChildOfHeader = false;
  }
  _handleClick() {
    const active = !this.active;
    this.active = active;
    this.dispatchEvent(new CustomEvent(this.constructor.eventToggle, {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        active
      }
    }));
  }
  render() {
    const { active, buttonLabelActive, buttonLabelInactive, disabled, _handleClick: handleClick } = this;
    const buttonLabel = active ? buttonLabelActive : buttonLabelInactive;
    const classes = e2({
      [`${prefix}--header__action`]: true,
      [`${prefix}--header__menu-trigger`]: true,
      [`${prefix}--header__menu-toggle`]: true,
      [`${prefix}--header__action--active`]: active
    });
    return b`
      <button
        part="button"
        class="${classes}"
        ?disabled=${disabled}
        aria-label="${o(buttonLabel)}"
        @click=${handleClick}>
        ${iconLoader(active ? _16 : _163, { part: "toggle-icon" })}
      </button>
    `;
  }
  /**
   * The name of the custom event fired after this header menu button is toggled upon a user gesture.
   */
  static get eventToggle() {
    return `${prefix}-header-menu-button-toggled`;
  }
};
CDSHeaderMenuButton.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSHeaderMenuButton.styles = styles;
__decorate([
  n({ type: Boolean, reflect: true })
], CDSHeaderMenuButton.prototype, "active", void 0);
__decorate([
  n({ attribute: "button-label-active" })
], CDSHeaderMenuButton.prototype, "buttonLabelActive", void 0);
__decorate([
  n({ attribute: "button-label-inactive" })
], CDSHeaderMenuButton.prototype, "buttonLabelInactive", void 0);
__decorate([
  n({ reflect: true, attribute: "collapse-mode" })
], CDSHeaderMenuButton.prototype, "collapseMode", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSHeaderMenuButton.prototype, "disabled", void 0);
__decorate([
  n({
    type: Boolean,
    attribute: "is-not-child-of-header"
  })
], CDSHeaderMenuButton.prototype, "isNotChildOfHeader", void 0);
CDSHeaderMenuButton = __decorate([
  carbonElement(`${prefix}-header-menu-button`)
], CDSHeaderMenuButton);

// node_modules/@carbon/web-components/es/components/ui-shell/header-nav-item.js
var CDSHeaderNavItem = class CDSHeaderNavItem2 extends FocusMixin(i2) {
  constructor() {
    super(...arguments);
    this.isActive = false;
    this.role = "listitem";
  }
  render() {
    const { ariaCurrent, href, isActive, title, rel, target } = this;
    const linkClass = e2({
      [`${prefix}--header__menu-item`]: true,
      [`${prefix}--header__menu-item--current`]: isActive && ariaCurrent !== "page"
    });
    return b`
      <a
        part="link"
        class="${linkClass}"
        tabindex="0"
        href="${o(href)}"
        rel="${o(rel)}"
        target="${o(target)}">
        <span part="title" class="${prefix}--text-truncate--end"
          ><slot>${title}</slot></span
        >
      </a>
    `;
  }
};
CDSHeaderNavItem.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSHeaderNavItem.styles = styles;
__decorate([
  n()
], CDSHeaderNavItem.prototype, "href", void 0);
__decorate([
  n({ reflect: true })
], CDSHeaderNavItem.prototype, "rel", void 0);
__decorate([
  n({ reflect: true })
], CDSHeaderNavItem.prototype, "target", void 0);
__decorate([
  n()
], CDSHeaderNavItem.prototype, "title", void 0);
__decorate([
  n({ type: Boolean, attribute: "is-active" })
], CDSHeaderNavItem.prototype, "isActive", void 0);
__decorate([
  n({ type: String, attribute: "aria-current" })
], CDSHeaderNavItem.prototype, "ariaCurrent", void 0);
__decorate([
  n({ reflect: true })
], CDSHeaderNavItem.prototype, "role", void 0);
CDSHeaderNavItem = __decorate([
  carbonElement(`${prefix}-header-nav-item`)
], CDSHeaderNavItem);
var CDSHeaderNavItem$1 = CDSHeaderNavItem;

// node_modules/@carbon/web-components/es/components/ui-shell/header-menu-item.js
var CDSHeaderMenuItem = class CDSHeaderMenuItem2 extends CDSHeaderNavItem$1 {
};
CDSHeaderMenuItem = __decorate([
  carbonElement(`${prefix}-header-menu-item`)
], CDSHeaderMenuItem);

// node_modules/@carbon/web-components/es/components/ui-shell/header-name.js
var CDSHeaderName = class CDSHeaderName2 extends FocusMixin(i2) {
  render() {
    const { href, prefix: namePrefix } = this;
    const namePrefixPart = !namePrefix ? void 0 : b`
          <span part="prefix" class="${prefix}--header__name--prefix"
            >${namePrefix}</span
          >
        `;
    return b`
      <a part="link" class="${prefix}--header__name" href="${o(href)}"
        >${namePrefixPart}&nbsp;<span><slot></slot></span
      ></a>
    `;
  }
};
CDSHeaderName.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSHeaderName.styles = styles;
__decorate([
  n()
], CDSHeaderName.prototype, "href", void 0);
__decorate([
  n()
], CDSHeaderName.prototype, "prefix", void 0);
CDSHeaderName = __decorate([
  carbonElement(`${prefix}-header-name`)
], CDSHeaderName);

// node_modules/@carbon/web-components/es/components/ui-shell/header-nav.js
var CDSHeaderNav = class CDSHeaderNav2 extends i2 {
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "navigation");
    }
    super.connectedCallback();
  }
  render() {
    const { menuBarLabel } = this;
    return b`
      <div part="divider" class="${prefix}-ce--header__divider"></div>
      <ul
        part="menu-body"
        class="${prefix}--header__menu-bar"
        aria-label="${menuBarLabel}">
        <slot></slot>
      </ul>
    `;
  }
};
CDSHeaderNav.styles = styles;
__decorate([
  n({ attribute: "menu-bar-label" })
], CDSHeaderNav.prototype, "menuBarLabel", void 0);
CDSHeaderNav = __decorate([
  carbonElement(`${prefix}-header-nav`)
], CDSHeaderNav);

// node_modules/@carbon/web-components/es/components/ui-shell/header-panel.js
var CDSHeaderPanel = class CDSHeaderPanel2 extends i2 {
  render() {
    return b`<slot></slot>`;
  }
};
CDSHeaderPanel.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSHeaderPanel.styles = styles;
__decorate([
  n({ type: Boolean, reflect: true })
], CDSHeaderPanel.prototype, "expanded", void 0);
CDSHeaderPanel = __decorate([
  carbonElement(`${prefix}-header-panel`)
], CDSHeaderPanel);

// node_modules/@carbon/web-components/es/components/ui-shell/header-side-nav-items.js
var CDSHeaderSideNavItems = class CDSHeaderSideNavItems2 extends i2 {
  constructor() {
    super(...arguments);
    this.hasDivider = false;
  }
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "list");
    }
    super.connectedCallback();
  }
  render() {
    return b`<slot></slot>`;
  }
};
CDSHeaderSideNavItems.styles = styles2;
__decorate([
  n({ type: Boolean, attribute: "has-divider" })
], CDSHeaderSideNavItems.prototype, "hasDivider", void 0);
CDSHeaderSideNavItems = __decorate([
  carbonElement(`${prefix}-header-side-nav-items`)
], CDSHeaderSideNavItems);

// node_modules/@carbon/web-components/es/components/ui-shell/side-nav-divider.js
var CDSSideNavDivider = class CDSSideNavDivider2 extends i2 {
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "separator");
    }
    super.connectedCallback();
  }
};
CDSSideNavDivider.styles = styles2;
CDSSideNavDivider = __decorate([
  carbonElement(`${prefix}-side-nav-divider`)
], CDSSideNavDivider);

// node_modules/@carbon/web-components/es/components/ui-shell/side-nav-items.js
var CDSSideNavItems = class CDSSideNavItems2 extends i2 {
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "list");
    }
    super.connectedCallback();
  }
  render() {
    return b`<slot></slot>`;
  }
};
CDSSideNavItems.styles = styles2;
CDSSideNavItems = __decorate([
  carbonElement(`${prefix}-side-nav-items`)
], CDSSideNavItems);

// node_modules/@carbon/web-components/es/components/ui-shell/side-nav-link.js
var CDSSideNavLink = class CDSSideNavLink2 extends FocusMixin(i2) {
  constructor() {
    super(...arguments);
    this.active = false;
    this.href = "";
    this.large = false;
  }
  /**
   * Handles `slotchange` event on the `<slot>` for the title icon.
   */
  _handleSlotChangeTitleIcon({ target }) {
    var _a;
    (_a = this._titleIconContainerNode) === null || _a === void 0 ? void 0 : _a.toggleAttribute("hidden", target.assignedNodes().length === 0);
  }
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "listitem");
    }
    super.connectedCallback();
  }
  render() {
    const { active, href, rel, target, title, _handleSlotChangeTitleIcon: handleSlotChangeTitleIcon } = this;
    const classes = e2({
      [`${prefix}--side-nav__link`]: true,
      [`${prefix}--side-nav__link--current`]: active
    });
    return b`
      <a
        part="link"
        class="${classes}"
        href="${href}"
        rel="${o(rel)}"
        target="${o(target)}">
        <div
          id="title-icon-container"
          part="title-icon-container"
          hidden
          class="${prefix}--side-nav__icon">
          <slot
            name="title-icon"
            @slotchange=${handleSlotChangeTitleIcon}></slot>
        </div>
        <span part="title" class="${prefix}--side-nav__link-text">
          <slot>${title}</slot>
        </span>
      </a>
    `;
  }
};
CDSSideNavLink.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSSideNavLink.styles = styles2;
__decorate([
  e("#title-icon-container")
], CDSSideNavLink.prototype, "_titleIconContainerNode", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSideNavLink.prototype, "active", void 0);
__decorate([
  n()
], CDSSideNavLink.prototype, "href", void 0);
__decorate([
  n({ reflect: true })
], CDSSideNavLink.prototype, "rel", void 0);
__decorate([
  n({ reflect: true })
], CDSSideNavLink.prototype, "target", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSideNavLink.prototype, "large", void 0);
__decorate([
  n()
], CDSSideNavLink.prototype, "title", void 0);
CDSSideNavLink = __decorate([
  carbonElement(`${prefix}-side-nav-link`)
], CDSSideNavLink);

// node_modules/@carbon/web-components/es/components/ui-shell/side-nav-menu.js
var CDSSideNavMenu = class CDSSideNavMenu2 extends FocusMixin(i2) {
  constructor() {
    super(...arguments);
    this._hasIcon = false;
    this.active = false;
    this.expanded = false;
    this.large = false;
    this.forceCollapsed = false;
    this.title = "";
  }
  /**
   * Handles user-initiated toggle request of this side nav menu.
   *
   * @param expanded The new expanded state.
   */
  _handleUserInitiatedToggle(expanded = !this.expanded) {
    const { eventBeforeToggle, eventToggle } = this.constructor;
    const init = {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        expanded
      }
    };
    if (this.dispatchEvent(new CustomEvent(eventBeforeToggle, init))) {
      this.expanded = expanded;
      this.dispatchEvent(new CustomEvent(eventToggle, init));
    }
  }
  /**
   * Handler for the `click` event on the expando button.
   */
  _handleClickExpando(e3) {
    const target = e3.currentTarget;
    target.focus();
    this._handleUserInitiatedToggle();
  }
  /**
   * Handles `slotchange` event on the non-named `<slot>`.
   */
  _handleSlotChange({ target }) {
    const { _hasIcon: hasIcon } = this;
    forEach(target.assignedNodes(), (item) => {
      if (item.nodeType === Node.ELEMENT_NODE) {
        item.toggleAttribute(this.constructor.attribItemHasIcon, hasIcon);
      }
    });
  }
  /**
   * Handles `slotchange` event on the `<slot>` for the title icon.
   */
  _handleSlotChangeTitleIcon({ target }) {
    var _a;
    const constructor = this.constructor;
    const hasIcon = target.assignedNodes().length > 0;
    this._hasIcon = hasIcon;
    (_a = this._titleIconContainerNode) === null || _a === void 0 ? void 0 : _a.toggleAttribute("hidden", !hasIcon);
    forEach(this.querySelectorAll(constructor.selectorItem), (item) => {
      item.toggleAttribute(constructor.attribItemHasIcon, hasIcon);
    });
  }
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "listitem");
    }
    super.connectedCallback();
  }
  updated(changedProperties) {
    if (changedProperties.has("expanded")) {
      const { selectorItem } = this.constructor;
      const { expanded } = this;
      forEach(this.querySelectorAll(selectorItem), (elem) => {
        elem.tabIndex = expanded ? 0 : -1;
      });
    }
  }
  render() {
    const { expanded, forceCollapsed, title, _handleClickExpando: handleClickExpando, _handleSlotChange: handleSlotChange, _handleSlotChangeTitleIcon: handleSlotChangeTitleIcon } = this;
    return b`
      <button
        type="button"
        part="expando"
        aria-haspopup="true"
        aria-expanded="${String(Boolean(expanded && !forceCollapsed))}"
        class="${prefix}--side-nav__submenu"
        @click=${handleClickExpando}>
        <div
          id="title-icon-container"
          part="title-icon-container"
          hidden
          class="${prefix}--side-nav__icon">
          <slot
            name="title-icon"
            @slotchange=${handleSlotChangeTitleIcon}></slot>
        </div>
        <span part="title" class="${prefix}--side-nav__submenu-title"
          >${title}</span
        >
        <div
          part="expando-icon-container"
          class="${prefix}--side-nav__icon ${prefix}--side-nav__icon--small ${prefix}--side-nav__submenu-chevron">
          ${iconLoader(_20, { part: "expando-icon" })}
        </div>
      </button>
      <ul part="menu-body" class="${prefix}--side-nav__menu">
        <slot @slotchange=${handleSlotChange}></slot>
      </ul>
    `;
  }
  /**
   * A selector that will return the menu items.
   */
  static get selectorItem() {
    return `${prefix}-side-nav-menu-item`;
  }
  /**
   * The name of the custom event fired before this side nav menu is being toggled upon a user gesture.
   * Cancellation of this event stops the user-initiated action of toggling this side nav menu.
   */
  static get eventBeforeToggle() {
    return `${prefix}-side-nav-menu-beingtoggled`;
  }
  /**
   * The name of the custom event fired after this side nav menu is toggled upon a user gesture.
   */
  static get eventToggle() {
    return `${prefix}-side-nav-menu-toggled`;
  }
};
CDSSideNavMenu.attribItemHasIcon = "parent-has-icon";
CDSSideNavMenu.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSSideNavMenu.styles = styles2;
__decorate([
  e("#title-icon-container")
], CDSSideNavMenu.prototype, "_titleIconContainerNode", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSideNavMenu.prototype, "active", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSideNavMenu.prototype, "expanded", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSideNavMenu.prototype, "large", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "force-collapsed" })
], CDSSideNavMenu.prototype, "forceCollapsed", void 0);
__decorate([
  n()
], CDSSideNavMenu.prototype, "title", void 0);
CDSSideNavMenu = __decorate([
  carbonElement(`${prefix}-side-nav-menu`)
], CDSSideNavMenu);

// node_modules/@carbon/web-components/es/components/ui-shell/side-nav-menu-item.js
var CDSSideNavMenuItem = class CDSSideNavMenuItem2 extends FocusMixin(i2) {
  constructor() {
    super(...arguments);
    this.active = false;
    this.href = "";
  }
  shouldUpdate(changedProperties) {
    if (changedProperties.has("active") && this.active) {
      const { selectorMenu } = this.constructor;
      const parent = this.closest(selectorMenu);
      if (parent) {
        parent.active = true;
      }
    }
    return true;
  }
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "button");
    }
    super.connectedCallback();
  }
  render() {
    const { active, href, target, title } = this;
    const classes = e2({
      [`${prefix}--side-nav__link`]: true,
      [`${prefix}--side-nav__link--current`]: active
    });
    return b`
      <a
        part="link"
        class="${classes}"
        href="${href}"
        target="${o(target)}">
        <span part="title" class="${prefix}--side-nav__link-text">
          <slot>${title}</slot>
        </span>
      </a>
    `;
  }
  /**
   * A selector that will return the parent menu.
   */
  static get selectorMenu() {
    return `${prefix}-side-nav-menu`;
  }
};
CDSSideNavMenuItem.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSSideNavMenuItem.styles = styles2;
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSideNavMenuItem.prototype, "active", void 0);
__decorate([
  n()
], CDSSideNavMenuItem.prototype, "href", void 0);
__decorate([
  n({ reflect: true })
], CDSSideNavMenuItem.prototype, "target", void 0);
__decorate([
  n()
], CDSSideNavMenuItem.prototype, "title", void 0);
CDSSideNavMenuItem = __decorate([
  carbonElement(`${prefix}-side-nav-menu-item`)
], CDSSideNavMenuItem);

// node_modules/@carbon/web-components/es/components/ui-shell/switcher.js
var CDSSwitcher = class CDSSwitcher2 extends i2 {
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "list");
    }
    super.connectedCallback();
  }
  render() {
    return b`<slot></slot>`;
  }
};
CDSSwitcher.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSSwitcher.styles = styles;
__decorate([
  n({ type: String, attribute: "aria-label" })
], CDSSwitcher.prototype, "ariaLabel", void 0);
__decorate([
  n({ type: String, attribute: "aria-labelledby" })
], CDSSwitcher.prototype, "ariaLabelledBy", void 0);
CDSSwitcher = __decorate([
  carbonElement(`${prefix}-switcher`)
], CDSSwitcher);

// node_modules/@carbon/web-components/es/components/ui-shell/switcher-divider.js
var CDSSwitcherDivider = class CDSSwitcherDivider2 extends i2 {
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "separator");
    }
    super.connectedCallback();
  }
};
CDSSwitcherDivider.styles = styles;
CDSSwitcherDivider = __decorate([
  carbonElement(`${prefix}-switcher-divider`)
], CDSSwitcherDivider);

// node_modules/@carbon/web-components/es/components/ui-shell/switcher-item.js
var CDSSwitcherItem = class CDSSwitcherItem2 extends FocusMixin(i2) {
  constructor() {
    super(...arguments);
    this.href = "";
    this.selected = false;
    this.tabIndex = 0;
  }
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "listitem");
    }
    super.connectedCallback();
  }
  render() {
    const { href, selected, ariaLabel, ariaLabelledBy, tabIndex } = this;
    const classes = e2({
      [`${prefix}--switcher__item-link`]: true,
      [`${prefix}--switcher__item-link--selected`]: selected
    });
    return b`
      <a
        part="link"
        aria-label="${ariaLabel}"
        aria-labelledby="${ariaLabelledBy}"
        tabindex="${tabIndex}"
        class="${classes}"
        href="${href}">
        <slot></slot>
      </a>
    `;
  }
};
CDSSwitcherItem.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSSwitcherItem.styles = styles;
__decorate([
  n({ type: String, attribute: "aria-label" })
], CDSSwitcherItem.prototype, "ariaLabel", void 0);
__decorate([
  n({ type: String, attribute: "aria-labelledby" })
], CDSSwitcherItem.prototype, "ariaLabelledBy", void 0);
__decorate([
  n()
], CDSSwitcherItem.prototype, "href", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSwitcherItem.prototype, "selected", void 0);
__decorate([
  n({ type: Number, reflect: true, attribute: "tab-index" })
], CDSSwitcherItem.prototype, "tabIndex", void 0);
CDSSwitcherItem = __decorate([
  carbonElement(`${prefix}-switcher-item`)
], CDSSwitcherItem);
