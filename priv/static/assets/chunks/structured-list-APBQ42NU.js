import {
  NAVIGATION_DIRECTION,
  RadioGroupManager
} from "./chunk-XALNULML.js";
import {
  _16
} from "./chunk-HPDZLYLI.js";
import {
  forEach
} from "./chunk-3QPROXNA.js";
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

// node_modules/@carbon/web-components/es/components/structured-list/structured-list.scss.js
var styles = i(['@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--assistive-text,.cds--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-background:var(--cds-layer-background-01,#fff);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-background:var(--cds-layer-background-02,#f4f4f4);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-background:var(--cds-layer-background-03,#fff);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}.cds--layer-one.cds--layer__with-background,.cds--layer-three.cds--layer__with-background,.cds--layer-two.cds--layer__with-background{background-color:var(--cds-layer-background)}.cds--structured-list--selection .cds--structured-list-td,.cds--structured-list--selection .cds--structured-list-th,:host(cds-structured-list-header-row) .cds--structured-list--selection ::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row) .cds--structured-list--selection ::slotted(cds-structured-list-header-cell-skeleton),:host(cds-structured-list-row) .cds--structured-list--selection ::slotted(cds-structured-list-cell){padding-inline:1rem 1rem}.cds--structured-list--selection .cds--structured-list-td:first-child,.cds--structured-list--selection .cds--structured-list-th:first-child,:host(cds-structured-list-header-row) .cds--structured-list--selection :first-child::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row) .cds--structured-list--selection :first-child::slotted(cds-structured-list-header-cell-skeleton),:host(cds-structured-list-row) .cds--structured-list--selection :first-child::slotted(cds-structured-list-cell){padding-inline:1rem 1rem}.cds--structured-list-row--focused-within{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--structured-list-row--focused-within{outline-style:dotted}}.cds--structured-list{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--structured-list *,.cds--structured-list :after,.cds--structured-list :before{box-sizing:inherit}.cds--structured-list{background-color:var(--cds-layer) transparent;border-collapse:collapse;border-spacing:0;display:table;inline-size:100%;overflow-x:auto}.cds--structured-list.cds--structured-list--condensed .cds--structured-list-td,.cds--structured-list.cds--structured-list--condensed .cds--structured-list-th,:host(cds-structured-list-header-row) .cds--structured-list.cds--structured-list--condensed ::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row) .cds--structured-list.cds--structured-list--condensed ::slotted(cds-structured-list-header-cell-skeleton),:host(cds-structured-list-row) .cds--structured-list.cds--structured-list--condensed ::slotted(cds-structured-list-cell){padding:.5rem}.cds--structured-list .cds--structured-list-row .cds--structured-list-td:first-of-type,.cds--structured-list .cds--structured-list-row .cds--structured-list-th:first-of-type,:host(cds-structured-list-body) .cds--structured-list ::slotted(cds-structured-list-row) .cds--structured-list-td:first-of-type,:host(cds-structured-list-body) .cds--structured-list ::slotted(cds-structured-list-row) .cds--structured-list-th:first-of-type,:host(cds-structured-list-body):host(cds-structured-list-row) .cds--structured-list ::slotted(cds-structured-list-row) :first-of-type::slotted(cds-structured-list-cell),:host(cds-structured-list-head) .cds--structured-list ::slotted(cds-structured-list-header-row) .cds--structured-list-td:first-of-type,:host(cds-structured-list-head) .cds--structured-list ::slotted(cds-structured-list-header-row) .cds--structured-list-th:first-of-type,:host(cds-structured-list-head):host(cds-structured-list-header-row) .cds--structured-list ::slotted(cds-structured-list-header-row) :first-of-type::slotted(cds-structured-list-header-cell),:host(cds-structured-list-head):host(cds-structured-list-header-row) .cds--structured-list ::slotted(cds-structured-list-header-row) :first-of-type::slotted(cds-structured-list-header-cell-skeleton),:host(cds-structured-list-head):host(cds-structured-list-row) .cds--structured-list ::slotted(cds-structured-list-header-row) :first-of-type::slotted(cds-structured-list-cell),:host(cds-structured-list-header-row) .cds--structured-list .cds--structured-list-row :first-of-type::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row) .cds--structured-list .cds--structured-list-row :first-of-type::slotted(cds-structured-list-header-cell-skeleton),:host(cds-structured-list-header-row):host(cds-structured-list-body) .cds--structured-list ::slotted(cds-structured-list-row) :first-of-type::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row):host(cds-structured-list-body) .cds--structured-list ::slotted(cds-structured-list-row) :first-of-type::slotted(cds-structured-list-header-cell-skeleton),:host(cds-structured-list-row) .cds--structured-list .cds--structured-list-row :first-of-type::slotted(cds-structured-list-cell){padding-inline-start:1rem}.cds--structured-list.cds--structured-list--flush .cds--structured-list-row .cds--structured-list-td,.cds--structured-list.cds--structured-list--flush .cds--structured-list-row .cds--structured-list-td:first-of-type,.cds--structured-list.cds--structured-list--flush .cds--structured-list-row .cds--structured-list-th,.cds--structured-list.cds--structured-list--flush .cds--structured-list-row .cds--structured-list-th:first-of-type,:host(cds-structured-list-body) .cds--structured-list.cds--structured-list--flush ::slotted(cds-structured-list-row) .cds--structured-list-td,:host(cds-structured-list-body) .cds--structured-list.cds--structured-list--flush ::slotted(cds-structured-list-row) .cds--structured-list-th,:host(cds-structured-list-body):host(cds-structured-list-row) .cds--structured-list.cds--structured-list--flush ::slotted(cds-structured-list-row) ::slotted(cds-structured-list-cell),:host(cds-structured-list-head) .cds--structured-list.cds--structured-list--flush ::slotted(cds-structured-list-header-row) .cds--structured-list-td,:host(cds-structured-list-head) .cds--structured-list.cds--structured-list--flush ::slotted(cds-structured-list-header-row) .cds--structured-list-th,:host(cds-structured-list-head):host(cds-structured-list-header-row) .cds--structured-list.cds--structured-list--flush ::slotted(cds-structured-list-header-row) ::slotted(cds-structured-list-header-cell),:host(cds-structured-list-head):host(cds-structured-list-header-row) .cds--structured-list.cds--structured-list--flush ::slotted(cds-structured-list-header-row) ::slotted(cds-structured-list-header-cell-skeleton),:host(cds-structured-list-head):host(cds-structured-list-row) .cds--structured-list.cds--structured-list--flush ::slotted(cds-structured-list-header-row) ::slotted(cds-structured-list-cell),:host(cds-structured-list-header-row) .cds--structured-list.cds--structured-list--flush .cds--structured-list-row ::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row) .cds--structured-list.cds--structured-list--flush .cds--structured-list-row ::slotted(cds-structured-list-header-cell-skeleton),:host(cds-structured-list-header-row):host(cds-structured-list-body) .cds--structured-list.cds--structured-list--flush ::slotted(cds-structured-list-row) ::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row):host(cds-structured-list-body) .cds--structured-list.cds--structured-list--flush ::slotted(cds-structured-list-row) ::slotted(cds-structured-list-header-cell-skeleton),:host(cds-structured-list-row) .cds--structured-list.cds--structured-list--flush .cds--structured-list-row ::slotted(cds-structured-list-cell){padding-inline:0 1rem}.cds--structured-list-row,:host(cds-structured-list-body) ::slotted(cds-structured-list-row),:host(cds-structured-list-head) ::slotted(cds-structured-list-header-row){border-block-start:1px solid var(--cds-border-subtle);display:table-row;transition:background-color .11s cubic-bezier(.2,0,.38,.9)}.cds--structured-list ::slotted(cds-structured-list-body) .cds--structured-list-row:last-child,.cds--structured-list-tbody .cds--structured-list-row:last-child,:host(cds-structured-list-body) .cds--structured-list ::slotted(cds-structured-list-body) :last-child::slotted(cds-structured-list-row),:host(cds-structured-list-body) .cds--structured-list-tbody :last-child::slotted(cds-structured-list-row),:host(cds-structured-list-head) .cds--structured-list ::slotted(cds-structured-list-body) :last-child::slotted(cds-structured-list-header-row),:host(cds-structured-list-head) .cds--structured-list-tbody :last-child::slotted(cds-structured-list-header-row){border-block-end:1px solid var(--cds-border-subtle)}.cds--structured-list-row--header-row,:host(cds-structured-list-head) ::slotted(cds-structured-list-header-row){border:none}.cds--structured-list--selection .cds--structured-list-row:hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected),:host(cds-structured-list-body) .cds--structured-list--selection :hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)::slotted(cds-structured-list-row),:host(cds-structured-list-head) .cds--structured-list--selection :hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)::slotted(cds-structured-list-header-row){background-color:var(--cds-layer-hover);border-color:var(--cds-layer-hover);cursor:pointer}.cds--structured-list--selection .cds--structured-list-row:hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)+.cds--structured-list-row,:host(cds-structured-list-body) .cds--structured-list--selection .cds--structured-list-row:hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)+::slotted(cds-structured-list-row),:host(cds-structured-list-body) .cds--structured-list--selection :hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)::slotted(cds-structured-list-row)+.cds--structured-list-row,:host(cds-structured-list-body) .cds--structured-list--selection :hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)::slotted(cds-structured-list-row)+::slotted(cds-structured-list-row),:host(cds-structured-list-head) .cds--structured-list--selection .cds--structured-list-row:hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)+::slotted(cds-structured-list-header-row),:host(cds-structured-list-head) .cds--structured-list--selection :hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)::slotted(cds-structured-list-header-row)+.cds--structured-list-row,:host(cds-structured-list-head) .cds--structured-list--selection :hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)::slotted(cds-structured-list-header-row)+::slotted(cds-structured-list-header-row),:host(cds-structured-list-head):host(cds-structured-list-body) .cds--structured-list--selection :hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)::slotted(cds-structured-list-header-row)+::slotted(cds-structured-list-row),:host(cds-structured-list-head):host(cds-structured-list-body) .cds--structured-list--selection :hover:not(.cds--structured-list-row--header-row):not(.cds--structured-list-row--selected)::slotted(cds-structured-list-row)+::slotted(cds-structured-list-header-row){border-color:var(--cds-layer-hover)}.cds--structured-list--selection .cds--structured-list-row.cds--structured-list-row--selected,:host(cds-structured-list-body) .cds--structured-list--selection .cds--structured-list-row--selected::slotted(cds-structured-list-row),:host(cds-structured-list-head) .cds--structured-list--selection .cds--structured-list-row--selected::slotted(cds-structured-list-header-row){background-color:var(--cds-layer-selected);border-color:var(--cds-layer-selected)}.cds--structured-list--selection .cds--structured-list-row--selected+.cds--structured-list-row,:host(cds-structured-list-body) .cds--structured-list--selection .cds--structured-list-row--selected+::slotted(cds-structured-list-row),:host(cds-structured-list-head) .cds--structured-list--selection .cds--structured-list-row--selected+::slotted(cds-structured-list-header-row){border-color:var(--cds-layer-selected)}.cds--structured-list--selection .cds--structured-list-row.cds--structured-list-row--selected .cds--structured-list-td,:host(cds-structured-list-body) .cds--structured-list--selection .cds--structured-list-row--selected::slotted(cds-structured-list-row) .cds--structured-list-td,:host(cds-structured-list-body):host(cds-structured-list-row) .cds--structured-list--selection .cds--structured-list-row--selected::slotted(cds-structured-list-row) ::slotted(cds-structured-list-cell),:host(cds-structured-list-head) .cds--structured-list--selection .cds--structured-list-row--selected::slotted(cds-structured-list-header-row) .cds--structured-list-td,:host(cds-structured-list-head):host(cds-structured-list-row) .cds--structured-list--selection .cds--structured-list-row--selected::slotted(cds-structured-list-header-row) ::slotted(cds-structured-list-cell),:host(cds-structured-list-row) .cds--structured-list--selection .cds--structured-list-row.cds--structured-list-row--selected ::slotted(cds-structured-list-cell){color:var(--cds-text-primary,#161616)}.cds--structured-list-row.cds--structured-list-row--header-row,:host(cds-structured-list-body) .cds--structured-list-row--header-row::slotted(cds-structured-list-row),:host(cds-structured-list-head) ::slotted(cds-structured-list-header-row){cursor:inherit}.cds--structured-list--selection .cds--structured-list-row.cds--structured-list-row--selected>.cds--structured-list-td,.cds--structured-list--selection .cds--structured-list-row:hover:not(.cds--structured-list-row--header-row)>.cds--structured-list-td,:host(cds-structured-list-body) .cds--structured-list--selection .cds--structured-list-row--selected::slotted(cds-structured-list-row)>.cds--structured-list-td,:host(cds-structured-list-body) .cds--structured-list--selection :hover:not(.cds--structured-list-row--header-row)::slotted(cds-structured-list-row)>.cds--structured-list-td,:host(cds-structured-list-body):host(cds-structured-list-row) .cds--structured-list--selection .cds--structured-list-row--selected::slotted(cds-structured-list-row)>::slotted(cds-structured-list-cell),:host(cds-structured-list-body):host(cds-structured-list-row) .cds--structured-list--selection :hover:not(.cds--structured-list-row--header-row)::slotted(cds-structured-list-row)>::slotted(cds-structured-list-cell),:host(cds-structured-list-head) .cds--structured-list--selection .cds--structured-list-row--selected::slotted(cds-structured-list-header-row)>.cds--structured-list-td,:host(cds-structured-list-head) .cds--structured-list--selection :hover:not(.cds--structured-list-row--header-row)::slotted(cds-structured-list-header-row)>.cds--structured-list-td,:host(cds-structured-list-head):host(cds-structured-list-row) .cds--structured-list--selection .cds--structured-list-row--selected::slotted(cds-structured-list-header-row)>::slotted(cds-structured-list-cell),:host(cds-structured-list-head):host(cds-structured-list-row) .cds--structured-list--selection :hover:not(.cds--structured-list-row--header-row)::slotted(cds-structured-list-header-row)>::slotted(cds-structured-list-cell),:host(cds-structured-list-row) .cds--structured-list--selection .cds--structured-list-row.cds--structured-list-row--selected>::slotted(cds-structured-list-cell),:host(cds-structured-list-row) .cds--structured-list--selection .cds--structured-list-row:hover:not(.cds--structured-list-row--header-row)>::slotted(cds-structured-list-cell){color:var(--cds-text-primary,#161616)}.cds--structured-list ::slotted(cds-structured-list-head),.cds--structured-list-thead{display:table-header-group;vertical-align:middle}.cds--structured-list-th,:host(cds-structured-list-header-row) ::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row) ::slotted(cds-structured-list-header-cell-skeleton){border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--structured-list-th *,.cds--structured-list-th :after,.cds--structured-list-th :before,:host(cds-structured-list-header-row) ::slotted(cds-structured-list-header-cell) *,:host(cds-structured-list-header-row) ::slotted(cds-structured-list-header-cell) :after,:host(cds-structured-list-header-row) ::slotted(cds-structured-list-header-cell) :before,:host(cds-structured-list-header-row) ::slotted(cds-structured-list-header-cell-skeleton) *,:host(cds-structured-list-header-row) ::slotted(cds-structured-list-header-cell-skeleton) :after,:host(cds-structured-list-header-row) ::slotted(cds-structured-list-header-cell-skeleton) :before{box-sizing:inherit}.cds--structured-list-th,:host(cds-structured-list-header-row) ::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row) ::slotted(cds-structured-list-header-cell-skeleton){block-size:2.5rem;color:var(--cds-text-primary,#161616);display:table-cell;font-size:var(--cds-heading-compact-01-font-size,.875rem);font-weight:var(--cds-heading-compact-01-font-weight,600);font-weight:600;letter-spacing:var(--cds-heading-compact-01-letter-spacing,.16px);line-height:var(--cds-heading-compact-01-line-height,1.28572);padding:1rem .5rem .5rem;text-align:start;text-transform:none;vertical-align:top}.cds--structured-list ::slotted(cds-structured-list-body),.cds--structured-list-tbody{display:table-row-group;vertical-align:middle}.cds--structured-list-td,:host(cds-structured-list-row) ::slotted(cds-structured-list-cell){border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--structured-list-td *,.cds--structured-list-td :after,.cds--structured-list-td :before,:host(cds-structured-list-row) ::slotted(cds-structured-list-cell) *,:host(cds-structured-list-row) ::slotted(cds-structured-list-cell) :after,:host(cds-structured-list-row) ::slotted(cds-structured-list-cell) :before{box-sizing:inherit}.cds--structured-list-td,:host(cds-structured-list-row) ::slotted(cds-structured-list-cell){color:var(--cds-text-secondary,#525252);display:table-cell;font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);max-inline-size:36rem;padding:1rem .5rem 1.5rem;position:relative;transition:color .11s cubic-bezier(.2,0,.38,.9)}.cds--structured-list ::slotted(cds-structured-list-header-cell[nowrap]),.cds--structured-list-content--nowrap,:host(cds-structured-list-row) ::slotted(cds-structured-list-cell[nowrap]){white-space:nowrap}.cds--structured-list-input+.cds--structured-list-td,:host(cds-structured-list-row) .cds--structured-list-input+::slotted(cds-structured-list-cell){text-align:end}.cds--structured-list-svg{display:inline-block;margin-block-start:.125rem;transition:all .11s cubic-bezier(.2,0,.38,.9);vertical-align:top}.cds--structured-list-input:checked+.cds--structured-list-row .cds--structured-list-svg,.cds--structured-list-input:checked+.cds--structured-list-td .cds--structured-list-svg,:host(cds-structured-list-body) .cds--structured-list-input:checked+::slotted(cds-structured-list-row) .cds--structured-list-svg,:host(cds-structured-list-head) .cds--structured-list-input:checked+::slotted(cds-structured-list-header-row) .cds--structured-list-svg,:host(cds-structured-list-row) .cds--structured-list-input:checked+::slotted(cds-structured-list-cell) .cds--structured-list-svg{fill:var(--cds-icon-primary,#161616)}.cds--structured-list-svg{fill:transparent}.cds--structured-list--selection .cds--structured-list-td:last-child,:host(cds-structured-list-row) .cds--structured-list--selection :last-child::slotted(cds-structured-list-cell){inline-size:2rem;padding-inline-start:0}.cds--structured-list.cds--skeleton .cds--structured-list-th:first-child,:host(cds-structured-list-header-row) .cds--structured-list.cds--skeleton :first-child::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row) .cds--structured-list.cds--skeleton :first-child::slotted(cds-structured-list-header-cell-skeleton){inline-size:8%}.cds--structured-list.cds--skeleton .cds--structured-list-th:nth-child(3n+2),:host(cds-structured-list-header-row) .cds--structured-list.cds--skeleton :nth-child(3n+2)::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row) .cds--structured-list.cds--skeleton :nth-child(3n+2)::slotted(cds-structured-list-header-cell-skeleton){inline-size:30%}.cds--structured-list.cds--skeleton .cds--structured-list-th:nth-child(3n+3),:host(cds-structured-list-header-row) .cds--structured-list.cds--skeleton :nth-child(3n+3)::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row) .cds--structured-list.cds--skeleton :nth-child(3n+3)::slotted(cds-structured-list-header-cell-skeleton){inline-size:15%}.cds--structured-list.cds--skeleton span{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--structured-list.cds--skeleton span:active,.cds--structured-list.cds--skeleton span:focus,.cds--structured-list.cds--skeleton span:hover{border:none;cursor:default;outline:none}.cds--structured-list.cds--skeleton span:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--structured-list.cds--skeleton span:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--structured-list.cds--skeleton span{background:CanvasText}.cds--structured-list.cds--skeleton span:before{background:Canvas;forced-color-adjust:none}}.cds--structured-list.cds--skeleton span{block-size:1rem;display:block;inline-size:75%}.cds--structured-list.cds--structured-list--selection.cds--skeleton .cds--structured-list-th:first-child,:host(cds-structured-list-header-row) .cds--structured-list.cds--structured-list--selection.cds--skeleton :first-child::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row) .cds--structured-list.cds--structured-list--selection.cds--skeleton :first-child::slotted(cds-structured-list-header-cell-skeleton){inline-size:5%}.cds--structured-list.cds--structured-list--selection.cds--skeleton .cds--structured-list-th:first-child span,:host(cds-structured-list-header-row) .cds--structured-list.cds--structured-list--selection.cds--skeleton :first-child::slotted(cds-structured-list-header-cell) span,:host(cds-structured-list-header-row) .cds--structured-list.cds--structured-list--selection.cds--skeleton :first-child::slotted(cds-structured-list-header-cell-skeleton) span{display:none}.cds--structured-list__icon{margin-block-start:.125rem;vertical-align:top}.cds--structured-list--selection .cds--structured-list-td:first-child:has(.cds--structured-list__icon),:host(cds-structured-list-row) .cds--structured-list--selection :first-child:has(.cds--structured-list__icon)::slotted(cds-structured-list-cell){inline-size:2rem;padding-inline-end:0}:host(cds-structured-list-header-row) ::slotted(cds-structured-list-header-cell:first-of-type){padding-inline-start:1rem}:host(cds-structured-list-body) ::slotted(cds-structured-list-row:last-child){border-block-end:1px solid var(--cds-border-subtle)}:host(cds-structured-list-row) ::slotted(cds-structured-list-cell:first-of-type){padding-inline-start:1rem}:host(cds-structured-list-row[selection-value]:hover){background-color:var(--cds-layer-hover);border-block-end:1px solid var(--cds-layer-hover);cursor:pointer}:host(cds-structured-list-row[selection-value]:hover) ::slotted(cds-structured-list-cell){color:var(--cds-text-primary,#161616)}:host(cds-structured-list-row[selected]){background-color:var(--cds-layer-selected)}:host(cds-structured-list-row[selected]) .cds--structured-list-input:checked+.cds--structured-list-cell .cds--structured-list-svg{fill:var(--cds-text-primary,#161616)}:host(cds-structured-list-row[selected]) ::slotted(cds-structured-list-cell){color:var(--cds-text-primary,#161616)}:host(cds-structured-list-header-cell-skeleton):first-of-type{inline-size:8%}:host(cds-structured-list-header-cell-skeleton):nth-of-type(3n+2){inline-size:30%}:host(cds-structured-list-header-cell-skeleton):nth-of-type(3n+3){inline-size:15%}:host(cds-structured-list-header-cell-skeleton) span{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}:host(cds-structured-list-header-cell-skeleton) span:active,:host(cds-structured-list-header-cell-skeleton) span:focus,:host(cds-structured-list-header-cell-skeleton) span:hover{border:none;cursor:default;outline:none}:host(cds-structured-list-header-cell-skeleton) span:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){:host(cds-structured-list-header-cell-skeleton) span:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){:host(cds-structured-list-header-cell-skeleton) span{background:CanvasText}:host(cds-structured-list-header-cell-skeleton) span:before{background:Canvas;forced-color-adjust:none}}:host(cds-structured-list-header-cell-skeleton) span{block-size:1rem;display:block;inline-size:75%}:host(cds-structured-list-header-row[condensed]) ::slotted(cds-structured-list-header-cell),:host(cds-structured-list-row[condensed]) ::slotted(cds-structured-list-cell){padding:.5rem}:host(cds-structured-list-header-row[condensed]) ::slotted(cds-structured-list-header-cell:first-of-type),:host(cds-structured-list-row[condensed]) ::slotted(cds-structured-list-cell:first-of-type){padding-inline-start:1rem}:host(cds-structured-list-header-row[condensed][flush]) ::slotted(cds-structured-list-header-cell),:host(cds-structured-list-header-row[flush]) ::slotted(cds-structured-list-header-cell),:host(cds-structured-list-row[condensed][flush]) ::slotted(cds-structured-list-cell),:host(cds-structured-list-row[flush]) ::slotted(cds-structured-list-cell){padding-inline:0 1rem}']);

// node_modules/@carbon/web-components/es/components/structured-list/structured-list.js
var CDSStructuredList = class CDSStructuredList2 extends FocusMixin(i2) {
  constructor() {
    super(...arguments);
    this.selectionName = "";
    this.condensed = false;
    this.flush = false;
  }
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "table");
    }
    super.connectedCallback();
  }
  shouldUpdate(changedProperties) {
    if (changedProperties.has("selectionName")) {
      forEach(this.querySelectorAll(this.constructor.selectorRowsWithHeader), (elem) => {
        elem.selectionName = this.selectionName;
      });
    }
    return true;
  }
  updated(changedProperties) {
    const attributes = ["condensed", "flush"];
    attributes.forEach((attr) => {
      if (changedProperties.has(attr)) {
        forEach(this.querySelectorAll(this.constructor.selectorRowsWithHeader), (elem) => {
          if (this[`${attr}`]) {
            elem.setAttribute(attr, "");
          } else {
            elem.removeAttribute(attr);
          }
        });
      }
    });
  }
  render() {
    const { condensed, flush, selectionName } = this;
    const classes = e2({
      [`${prefix}--structured-list`]: true,
      [`${prefix}--structured-list--selection`]: Boolean(selectionName),
      [`${prefix}--structured-list--condensed`]: condensed,
      [`${prefix}--structured-list--flush`]: flush
    });
    return b`
      <section id="section" class=${classes}><slot></slot></section>
    `;
  }
};
CDSStructuredList.selectorRowsWithHeader = `${prefix}-structured-list-row,${prefix}-structured-list-header-row`;
CDSStructuredList.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSStructuredList.styles = styles;
__decorate([
  n({ attribute: "selection-name" })
], CDSStructuredList.prototype, "selectionName", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSStructuredList.prototype, "condensed", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSStructuredList.prototype, "flush", void 0);
CDSStructuredList = __decorate([
  carbonElement(`${prefix}-structured-list`)
], CDSStructuredList);

// node_modules/@carbon/web-components/es/components/structured-list/structured-list-body.js
var CDSStructuredListBody = class CDSStructuredListBody2 extends i2 {
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
CDSStructuredListBody.styles = styles;
CDSStructuredListBody = __decorate([
  carbonElement(`${prefix}-structured-list-body`)
], CDSStructuredListBody);

// node_modules/@carbon/web-components/es/components/structured-list/structured-list-cell.js
var CDSStructuredListCell = class CDSStructuredListCell2 extends i2 {
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "cell");
    }
    super.connectedCallback();
  }
  render() {
    return b` <slot></slot> `;
  }
};
CDSStructuredListCell.styles = styles;
CDSStructuredListCell = __decorate([
  carbonElement(`${prefix}-structured-list-cell`)
], CDSStructuredListCell);

// node_modules/@carbon/web-components/es/components/structured-list/structured-list-head.js
var CDSStructuredListHeader = class CDSStructuredListHeader2 extends i2 {
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
CDSStructuredListHeader.styles = styles;
CDSStructuredListHeader = __decorate([
  carbonElement(`${prefix}-structured-list-head`)
], CDSStructuredListHeader);

// node_modules/@carbon/web-components/es/components/structured-list/structured-list-header-cell.js
var CDSStructuredListHeaderCell = class CDSStructuredListHeaderCell2 extends i2 {
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "columnheader");
    }
    super.connectedCallback();
  }
  render() {
    return b` <slot></slot> `;
  }
};
CDSStructuredListHeaderCell.styles = styles;
CDSStructuredListHeaderCell = __decorate([
  carbonElement(`${prefix}-structured-list-header-cell`)
], CDSStructuredListHeaderCell);

// node_modules/@carbon/web-components/es/components/structured-list/structured-list-header-cell-skeleton.js
var CDSStructuredListHeaderCellSkeleton = class CDSStructuredListHeaderCellSkeleton2 extends i2 {
  render() {
    return b` <span></span> `;
  }
};
CDSStructuredListHeaderCellSkeleton.styles = styles;
CDSStructuredListHeaderCellSkeleton = __decorate([
  carbonElement(`${prefix}-structured-list-header-cell-skeleton`)
], CDSStructuredListHeaderCellSkeleton);

// node_modules/@carbon/web-components/es/components/structured-list/structured-list-header-row.js
var CDSStructuredListHeaderRow = class CDSStructuredListHeaderRow2 extends i2 {
  constructor() {
    super(...arguments);
    this.selectionName = "";
  }
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "row");
    }
    super.connectedCallback();
  }
  render() {
    if (this.selectionName) {
      return b`
        <slot></slot>
        <div class="${prefix}--structured-list-th"></div>
      `;
    }
    return b` <slot></slot> `;
  }
};
CDSStructuredListHeaderRow.styles = styles;
__decorate([
  n({ attribute: "selection-name" })
], CDSStructuredListHeaderRow.prototype, "selectionName", void 0);
CDSStructuredListHeaderRow = __decorate([
  carbonElement(`${prefix}-structured-list-header-row`)
], CDSStructuredListHeaderRow);

// node_modules/@carbon/web-components/es/components/structured-list/structured-list-row.js
var navigationDirectionForKey = {
  ArrowUp: NAVIGATION_DIRECTION.BACKWARD,
  Up: NAVIGATION_DIRECTION.BACKWARD,
  // IE
  ArrowDown: NAVIGATION_DIRECTION.FORWARD,
  Down: NAVIGATION_DIRECTION.FORWARD
  // IE
};
var StructuredListRowRadioButtonDelegate = class {
  constructor(row) {
    this._row = row;
  }
  get checked() {
    return this._row.selected;
  }
  set checked(checked) {
    this._row.selected = checked;
    this._row.tabIndex = checked ? 0 : -1;
  }
  get tabIndex() {
    return this._row.tabIndex;
  }
  set tabIndex(tabIndex) {
    this._row.tabIndex = tabIndex;
  }
  get name() {
    return this._row.selectionName;
  }
  compareDocumentPosition(other) {
    return this._row.compareDocumentPosition(other._row);
  }
  focus() {
    this._row.focus();
  }
};
var CDSStructuredListRow = class CDSStructuredListRow2 extends HostListenerMixin(i2) {
  constructor() {
    super(...arguments);
    this._manager = null;
    this._radioButtonDelegate = new StructuredListRowRadioButtonDelegate(this);
    this._handleClick = () => {
      const { _inputNode: inputNode } = this;
      if (inputNode) {
        this.selected = true;
        if (this._manager) {
          this._manager.select(this._radioButtonDelegate);
        }
      }
    };
    this._handleKeydown = (event) => {
      const { _inputNode: inputNode } = this;
      const manager = this._manager;
      if (inputNode && manager) {
        const navigationDirection = navigationDirectionForKey[event.key];
        if (navigationDirection) {
          manager.select(manager.navigate(this._radioButtonDelegate, navigationDirection));
        }
        if (event.key === " " || event.key === "Enter") {
          manager.select(this._radioButtonDelegate);
        }
      }
    };
    this.selected = false;
    this.selectionName = "";
    this.selectionValue = "";
    this.selectionIconTitle = "";
  }
  connectedCallback() {
    var _a;
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "row");
    }
    super.connectedCallback();
    if (!this._manager) {
      this._manager = RadioGroupManager.get(this.getRootNode({ composed: true }));
      const { selectionName } = this;
      if (selectionName) {
        (_a = this._manager) === null || _a === void 0 ? void 0 : _a.add(this._radioButtonDelegate);
      }
    }
  }
  disconnectedCallback() {
    if (this._manager) {
      this._manager.delete(this._radioButtonDelegate);
    }
    super.disconnectedCallback();
  }
  updated(changedProperties) {
    const { _manager: manager, selectionName } = this;
    if (changedProperties.has("selectionName")) {
      if (manager) {
        manager.delete(this._radioButtonDelegate, changedProperties.get("selectionName"));
        if (selectionName) {
          manager.add(this._radioButtonDelegate);
        }
      }
      this.setAttribute("tabindex", !selectionName || !manager || !manager.shouldBeFocusable(this._radioButtonDelegate) ? "-1" : "0");
    }
  }
  render() {
    const { selected, selectionName, selectionValue, selectionIconTitle } = this;
    if (selectionName) {
      return b`
        <slot></slot>
        <input
          id="input"
          type="radio"
          class="${prefix}--structured-list-input ${prefix}--visually-hidden"
          .checked=${selected}
          name=${selectionName}
          value=${o(selectionValue)} />
        <div
          class="${prefix}--structured-list-td ${prefix}--structured-list-cell">
          ${iconLoader(_16, {
        class: `${prefix}--structured-list-svg`,
        title: selectionIconTitle
      })}
        </div>
      `;
    }
    return b` <slot></slot> `;
  }
};
CDSStructuredListRow.styles = styles;
__decorate([
  e("#input")
], CDSStructuredListRow.prototype, "_inputNode", void 0);
__decorate([
  HostListener("click")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSStructuredListRow.prototype, "_handleClick", void 0);
__decorate([
  HostListener("keydown")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSStructuredListRow.prototype, "_handleKeydown", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSStructuredListRow.prototype, "selected", void 0);
__decorate([
  n({ attribute: "selection-name" })
], CDSStructuredListRow.prototype, "selectionName", void 0);
__decorate([
  n({ attribute: "selection-value" })
], CDSStructuredListRow.prototype, "selectionValue", void 0);
__decorate([
  n({ attribute: "selection-icon-title" })
], CDSStructuredListRow.prototype, "selectionIconTitle", void 0);
CDSStructuredListRow = __decorate([
  carbonElement(`${prefix}-structured-list-row`)
], CDSStructuredListRow);
