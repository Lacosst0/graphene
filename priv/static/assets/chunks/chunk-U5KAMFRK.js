import {
  _16 as _162,
  _162 as _163
} from "./chunk-45FXHNJI.js";
import {
  _16
} from "./chunk-XKCQS753.js";
import {
  c,
  e as e2,
  n as n2
} from "./chunk-CQL5YJQZ.js";
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

// node_modules/@carbon/web-components/es/components/menu/menu-item.scss.js
var styles = i(["@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--assistive-text,.cds--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-background:var(--cds-layer-background-01,#fff);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-background:var(--cds-layer-background-02,#f4f4f4);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-background:var(--cds-layer-background-03,#fff);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}.cds--layer-one.cds--layer__with-background,.cds--layer-three.cds--layer__with-background,.cds--layer-two.cds--layer__with-background{background-color:var(--cds-layer-background)}.cds--menu{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--menu *,.cds--menu :after,.cds--menu :before{box-sizing:inherit}.cds--menu{background-color:var(--cds-layer);box-shadow:0 2px 6px var(--cds-shadow,rgba(0,0,0,.3));max-inline-size:18rem;min-inline-size:10rem;opacity:0;overflow-y:auto;padding:.25rem 0;position:fixed;visibility:hidden;z-index:9000}.cds--menu--border{outline:1px solid var(--cds-border-subtle)}.cds--menu--background-token__background{background-color:var(--cds-background,#fff)}.cds--menu--with-icons{min-inline-size:12rem}.cds--menu--open{visibility:visible}.cds--menu--open:focus{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--menu--open:focus{outline-style:dotted}}.cds--menu:not(.cds--menu--open) .cds--menu--open{visibility:hidden}.cds--menu--shown{opacity:1;overflow:visible}.cds--menu-item{align-items:center;block-size:2rem;color:var(--cds-text-secondary,#525252);-moz-column-gap:.5rem;column-gap:.5rem;cursor:pointer;display:grid;font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);grid-template-columns:1fr max-content;letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);line-height:var(--cds-body-short-01-line-height,1.28572);padding-inline:1rem;transition:background-color 70ms cubic-bezier(.2,0,.38,.9)}.cds--menu-item:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--menu-item:focus{outline-style:dotted}}.cds--menu-item:hover{background-color:var(--cds-layer-hover);color:var(--cds-text-primary,#161616)}.cds--menu--xs .cds--menu-item{block-size:1.5rem}.cds--menu--sm .cds--menu-item{block-size:2rem}.cds--menu--md .cds--menu-item{block-size:2.5rem}.cds--menu--lg .cds--menu-item{block-size:3rem}.cds--menu-item-group>ul,.cds--menu-item-radio-group>ul{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--menu-item-group>ul *,.cds--menu-item-group>ul :after,.cds--menu-item-group>ul :before,.cds--menu-item-radio-group>ul *,.cds--menu-item-radio-group>ul :after,.cds--menu-item-radio-group>ul :before{box-sizing:inherit}.cds--menu--with-icons>.cds--menu-item,.cds--menu--with-icons>.cds--menu-item-group>ul>.cds--menu-item,.cds--menu--with-icons>.cds--menu-item-radio-group>ul>.cds--menu-item,.cds--menu--with-selectable-items>.cds--menu-item,.cds--menu--with-selectable-items>.cds--menu-item-group>ul>.cds--menu-item,.cds--menu--with-selectable-items>.cds--menu-item-radio-group>ul>.cds--menu-item{grid-template-columns:1rem 1fr max-content}.cds--menu--with-icons>.cds--menu-item-group>ul>.cds--menu-item>.cds--menu-item__icon,.cds--menu--with-icons>.cds--menu-item-radio-group>ul>.cds--menu-item>.cds--menu-item__icon,.cds--menu--with-icons>.cds--menu-item>.cds--menu-item__icon,.cds--menu--with-selectable-items>.cds--menu-item-group>ul>.cds--menu-item>.cds--menu-item__selection-icon,.cds--menu--with-selectable-items>.cds--menu-item-radio-group>ul>.cds--menu-item>.cds--menu-item__selection-icon,.cds--menu--with-selectable-items>.cds--menu-item>.cds--menu-item__selection-icon{display:flex}.cds--menu--with-icons.cds--menu--with-selectable-items>.cds--menu-item,.cds--menu--with-icons.cds--menu--with-selectable-items>.cds--menu-item-group>ul>.cds--menu-item,.cds--menu--with-icons.cds--menu--with-selectable-items>.cds--menu-item-radio-group>ul>.cds--menu-item{grid-template-columns:1rem 1rem 1fr max-content}.cds--menu-item--disabled{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed}.cds--menu-item--disabled.cds--menu-item--danger:hover,.cds--menu-item--disabled:hover{background-color:var(--cds-layer);color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--menu-item--danger:focus,.cds--menu-item--danger:hover{background-color:var(--cds-button-danger-primary,#da1e28);color:var(--cds-text-on-color,#fff)}.cds--menu-item-divider,:host(cds-menu-item-divider){background-color:var(--cds-border-subtle);block-size:.0625rem;display:block;inline-size:100%;margin-block:.25rem}:host(cds-menu-item){align-items:center;block-size:2rem;color:var(--cds-text-secondary,#525252);-moz-column-gap:.5rem;column-gap:.5rem;cursor:pointer;display:grid;font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);grid-template-columns:1fr max-content;letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);line-height:var(--cds-body-short-01-line-height,1.28572);padding-inline:1rem;transition:background-color 70ms cubic-bezier(.2,0,.38,.9)}:host(cds-menu-item) svg{color:var(--cds-icon-secondary,#525252)}:host(cds-menu-item:focus){outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(cds-menu-item:focus){outline-style:dotted}}:host(cds-menu-item:hover){background-color:var(--cds-layer-hover);color:var(--cds-text-primary,#161616)}:host(cds-menu-item:hover) svg{color:var(--cds-icon-primary,#161616)}:host(cds-menu-item-group)>ul,:host(cds-menu-item-radio-group)>ul{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}:host(cds-menu-item-group)>ul *,:host(cds-menu-item-group)>ul :after,:host(cds-menu-item-group)>ul :before,:host(cds-menu-item-radio-group)>ul *,:host(cds-menu-item-radio-group)>ul :after,:host(cds-menu-item-radio-group)>ul :before{box-sizing:inherit}.cds--menu-item__label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cds--menu-item__shortcut{display:flex}.cds--menu-item__icon{display:var(--child-icon-property,none)}:host([aria-disabled=true]) *{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed}:host([aria-disabled=true].cds--menu-item--danger:hover),:host([aria-disabled=true]:hover){background-color:var(--cds-layer);color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}:host(.cds--menu-item--danger:focus),:host(.cds--menu-item--danger:hover){background-color:var(--cds-button-danger-primary,#da1e28);color:var(--cds-text-on-color,#fff)}.cds--menu-item__icon,.cds--menu-item__selection-icon{display:none}:host(cds-menu-item){block-size:var(--block-size-value);grid-template-columns:var(--grid-template)}:host(cds-menu-item) .cds--menu-item__icon{display:var(--display-icon-item)}.cds--menu-item__selection-icon{display:var(--display-selection-icon)}span[slot=render-icon]{display:flex}"]);

// node_modules/@carbon/web-components/es/components/menu/menu-context.js
var menuDefaultState = {
  isRoot: true,
  hasSelectableItems: false,
  size: null,
  updateFromChild: () => {
  }
};
var MenuContext = n2("myData");

// node_modules/@carbon/web-components/es/components/menu/defs.js
var MENU_SIZE;
(function(MENU_SIZE2) {
  MENU_SIZE2["EXTRA_SMALL"] = "xs";
  MENU_SIZE2["SMALL"] = "sm";
  MENU_SIZE2["MEDIUM"] = "md";
  MENU_SIZE2["LARGE"] = "lg";
})(MENU_SIZE || (MENU_SIZE = {}));
var MENU_ITEM_KIND;
(function(MENU_ITEM_KIND2) {
  MENU_ITEM_KIND2["DEFAULT"] = "default";
  MENU_ITEM_KIND2["DANGER"] = "danger";
})(MENU_ITEM_KIND || (MENU_ITEM_KIND = {}));
var MENU_BACKGROUND_TOKEN;
(function(MENU_BACKGROUND_TOKEN2) {
  MENU_BACKGROUND_TOKEN2["LAYER"] = "layer";
  MENU_BACKGROUND_TOKEN2["BACKGROUND"] = "background";
})(MENU_BACKGROUND_TOKEN || (MENU_BACKGROUND_TOKEN = {}));

// node_modules/@carbon/web-components/es/components/menu/menu-item.js
var MENU_CLOSE_ROOT_EVENT = `${prefix}-menu-close-root-request`;
var CDSmenuItem = class CDSmenuItem2 extends HostListenerMixin(HostListenerMixin(i2)) {
  constructor() {
    var _a;
    super(...arguments);
    this.hoverIntentDelay = 150;
    this._parentMenu = null;
    this.dangerDescription = "danger";
    this.submenuOpen = false;
    this.kind = MENU_ITEM_KIND.DEFAULT;
    this.boundaries = { x: -1, y: -1 };
    this.ariaChecked = (_a = this.getAttribute("selected")) !== null && _a !== void 0 ? _a : "false";
    this.isRtl = false;
    this.hasSubmenu = false;
    this._handleClick = (e3) => {
      if (this.hasSubmenu) {
        this._openSubmenu();
        return;
      }
      if (e3.type === "keydown") {
        this.click();
        return;
      }
      this.dispatchEvent(new CustomEvent(MENU_CLOSE_ROOT_EVENT, {
        bubbles: true,
        composed: true,
        detail: {
          triggerEvent: e3
        }
      }));
    };
    this._handleMouseEnter = () => {
      this.hoverIntentTimeout = setTimeout(() => {
        this._openSubmenu();
      }, this.hoverIntentDelay);
    };
    this._handleMouseLeave = () => {
      if (this.hoverIntentTimeout) {
        clearTimeout(this.hoverIntentTimeout);
        this._closeSubmenu();
        this.focus();
      }
    };
    this._openSubmenu = () => {
      const { x, y, width, height } = this.getBoundingClientRect();
      if (this.isRtl) {
        this.boundaries = {
          x: [-x, x - width],
          y: [y, y + height]
        };
      } else {
        this.boundaries = {
          x: [x, x + width],
          y: [y, y + height]
        };
      }
      this.submenuOpen = true;
    };
    this._registerSubMenuItems = () => {
      const observer = new MutationObserver((mutationsList) => {
        var _a2, _b, _c, _d, _e;
        for (const mutation of mutationsList) {
          if (mutation.type === "childList") {
            const submenuSlot = (_a2 = this.shadowRoot) === null || _a2 === void 0 ? void 0 : _a2.querySelector('slot[name="submenu"]');
            const item = (_c = (_b = submenuSlot === null || submenuSlot === void 0 ? void 0 : submenuSlot.assignedElements) === null || _b === void 0 ? void 0 : _b.call(submenuSlot)) === null || _c === void 0 ? void 0 : _c[0];
            if (item) {
              switch (item.tagName) {
                case "CDS-MENU-ITEM-RADIO-GROUP":
                  this.submenuEntry = item.querySelector(`${prefix}-menu-item`);
                  break;
                case "CDS-MENU-ITEM-GROUP": {
                  const slotElements = (_e = (_d = item.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector("slot")) === null || _e === void 0 ? void 0 : _e.assignedElements();
                  const firstElement = (slotElements === null || slotElements === void 0 ? void 0 : slotElements.length) && slotElements[0];
                  this.submenuEntry = firstElement;
                  break;
                }
                case "CDS-MENU-ITEM":
                  this.submenuEntry = item;
                  break;
              }
            }
          }
        }
      });
      observer.observe(this.shadowRoot, {
        childList: true,
        subtree: true
      });
    };
    this._closeSubmenu = () => {
      var _a2, _b;
      this.boundaries = {
        x: -1,
        y: -1
      };
      this.submenuOpen = false;
      (_b = (_a2 = this.shadowRoot) === null || _a2 === void 0 ? void 0 : _a2.querySelector(`.${prefix}--menu-item`)) === null || _b === void 0 ? void 0 : _b.focus();
    };
    this._handleKeyDown = (e3) => {
      if (this.hasSubmenu && ["ArrowRight", "Enter", " "].includes(e3.key)) {
        this._openSubmenu();
        setTimeout(() => {
          this.submenuEntry.focus();
        });
        e3.stopPropagation();
      } else if (e3.key === "Enter" || e3.key === " ") {
        this._handleClick(e3);
      }
    };
  }
  async dispatchIconDetect() {
    const hasRenderIcon = !!this.querySelector('[slot="render-icon"]');
    if (hasRenderIcon) {
      await void 0;
      this.dispatchEvent(new CustomEvent("icon-detect", {
        bubbles: true,
        // Allows event to bubble up the DOM
        composed: true
        // Allows event to cross shadow DOM boundary
      }));
    }
  }
  _updateAttributes() {
    if (this.disabled && !this.hasSubmenu) {
      this.setAttribute("aria-disabled", this.disabled);
      this.setAttribute("tabindex", "-1");
    } else if (this._parentMenu && !this._parentMenu.open) {
      this.removeAttribute("aria-disabled");
      this.setAttribute("tabindex", "-1");
    } else {
      this.removeAttribute("aria-disabled");
      this.setAttribute("tabindex", "0");
    }
    if (this.hasSubmenu) {
      this.setAttribute("aria-haspopup", this.hasSubmenu + "");
    } else {
      this.removeAttribute("aria-haspopup");
    }
    if (this.closest(`${prefix}-menu-item-radio-group`)) {
      this.setAttribute("role", "menuitemradio");
      this.setAttribute("aria-checked", this.ariaChecked + "");
    } else if (!this.getAttribute("role")) {
      this.setAttribute("role", "menuitem");
    }
  }
  firstUpdated() {
    this.hasSubmenu = !!this.querySelector('[slot="submenu"]');
    this.dispatchIconDetect();
    this.isRtl = document.dir === "rtl";
    this._registerSubMenuItems();
    this._parentMenu = this.closest(`${prefix}-menu`);
    this._updateAttributes();
    this.addEventListener(`${prefix}-menu-closed`, () => {
      this.focus();
      this._closeSubmenu();
    });
    if (this._parentMenu) {
      this._parentMenuObserver = new MutationObserver(() => {
        this._updateAttributes();
      });
      this._parentMenuObserver.observe(this._parentMenu, {
        attributes: true,
        attributeFilter: ["open"]
      });
    }
  }
  disconnectedCallback() {
    var _a;
    (_a = this._parentMenuObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- https://github.com/carbon-design-system/carbon/issues/20452
  updated(_changedProperties) {
    if (this.hasSubmenu) {
      this.setAttribute("aria-expanded", this.hasSubmenu + "");
    } else {
      this.removeAttribute("aria-expanded");
    }
    if (this.kind === MENU_ITEM_KIND.DANGER)
      this.classList.toggle(`${prefix}--menu-item--danger`);
  }
  handleClick(event) {
    this._handleClick(event);
  }
  handleMouseEnter() {
    if (this.hasSubmenu) {
      this._handleMouseEnter();
    }
  }
  handleMouseLeave() {
    if (this.hasSubmenu) {
      this._handleMouseLeave();
    }
  }
  handleKeyDown(event) {
    this._handleKeyDown(event);
  }
  render() {
    var _a, _b, _c;
    const { label, shortcut, submenuOpen, boundaries, isRtl, kind, dangerDescription } = this;
    const isDanger = kind === MENU_ITEM_KIND.DANGER && !this.hasSubmenu;
    const menuClassName = ((_a = this.context) === null || _a === void 0 ? void 0 : _a.hasSelectableItems) ? `${prefix}--menu--with-selectable-items` : "";
    return b`
      <div class="${prefix}--menu-item__selection-icon">
        ${this.ariaChecked === "true" ? iconLoader(_16) : void 0}
      </div>

      <div class="${prefix}--menu-item__icon">
        <slot name="render-icon"></slot>
      </div>
      <div class="${prefix}--menu-item__label">${label}</div>
      ${isDanger ? b`<span id="danger-description" class="${prefix}--visually-hidden"
            >${dangerDescription}</span
          >` : b``}
      ${shortcut && !this.hasSubmenu ? b` <div class="${prefix}--menu-item__shortcut">${shortcut}</div> ` : b``}
      ${this.hasSubmenu ? b`
            <div class="${prefix}--menu-item__shortcut">
              ${isRtl ? iconLoader(_162) : iconLoader(_163)}
            </div>
            <cds-menu
              className=${menuClassName}
              size=${(_c = (_b = this.parentElement) === null || _b === void 0 ? void 0 : _b.getAttribute("size")) !== null && _c !== void 0 ? _c : MENU_SIZE.LARGE}
              ?isChild="${this.hasSubmenu}"
              label="${label}"
              .open="${submenuOpen}"
              .x="${boundaries.x}"
              .y="${boundaries.y}">
              <slot name="submenu"></slot>
            </cds-menu>
          ` : b``}
    `;
  }
};
CDSmenuItem.styles = styles;
__decorate([
  c({ context: MenuContext })
], CDSmenuItem.prototype, "context", void 0);
__decorate([
  n({ type: String })
], CDSmenuItem.prototype, "label", void 0);
__decorate([
  n({ type: String })
], CDSmenuItem.prototype, "shortcut", void 0);
__decorate([
  n({ type: Boolean })
], CDSmenuItem.prototype, "disabled", void 0);
__decorate([
  n({ type: String, attribute: "danger-description" })
], CDSmenuItem.prototype, "dangerDescription", void 0);
__decorate([
  n({ type: Boolean })
], CDSmenuItem.prototype, "submenuOpen", void 0);
__decorate([
  n()
], CDSmenuItem.prototype, "kind", void 0);
__decorate([
  n()
], CDSmenuItem.prototype, "boundaries", void 0);
__decorate([
  n({ attribute: "aria-checked" })
], CDSmenuItem.prototype, "ariaChecked", void 0);
__decorate([
  r()
], CDSmenuItem.prototype, "submenuEntry", void 0);
__decorate([
  r()
], CDSmenuItem.prototype, "isRtl", void 0);
__decorate([
  r()
], CDSmenuItem.prototype, "hasSubmenu", void 0);
__decorate([
  HostListener("click", { capture: true })
], CDSmenuItem.prototype, "handleClick", null);
__decorate([
  HostListener("mouseenter")
], CDSmenuItem.prototype, "handleMouseEnter", null);
__decorate([
  HostListener("mouseleave")
], CDSmenuItem.prototype, "handleMouseLeave", null);
__decorate([
  HostListener("keydown")
], CDSmenuItem.prototype, "handleKeyDown", null);
CDSmenuItem = __decorate([
  carbonElement(`${prefix}-menu-item`)
], CDSmenuItem);

// node_modules/@carbon/web-components/es/components/menu/menu.scss.js
var styles2 = i(["@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--assistive-text,.cds--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-background:var(--cds-layer-background-01,#fff);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-background:var(--cds-layer-background-02,#f4f4f4);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-background:var(--cds-layer-background-03,#fff);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}.cds--layer-one.cds--layer__with-background,.cds--layer-three.cds--layer__with-background,.cds--layer-two.cds--layer__with-background{background-color:var(--cds-layer-background)}.cds--menu{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--menu *,.cds--menu :after,.cds--menu :before{box-sizing:inherit}.cds--menu{background-color:var(--cds-layer);box-shadow:0 2px 6px var(--cds-shadow,rgba(0,0,0,.3));max-inline-size:18rem;min-inline-size:10rem;padding:.25rem 0;position:fixed;z-index:9000}.cds--menu--border{outline:1px solid var(--cds-border-subtle)}.cds--menu--background-token__background{background-color:var(--cds-background,#fff)}.cds--menu:not(.cds--menu--open) .cds--menu--open{visibility:hidden}.cds--menu--shown{overflow:visible}.cds--menu-item{align-items:center;block-size:2rem;color:var(--cds-text-secondary,#525252);-moz-column-gap:.5rem;column-gap:.5rem;cursor:pointer;display:grid;font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);grid-template-columns:1fr max-content;letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);line-height:var(--cds-body-short-01-line-height,1.28572);padding-inline:1rem;transition:background-color 70ms cubic-bezier(.2,0,.38,.9)}.cds--menu-item:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--menu-item:focus{outline-style:dotted}}.cds--menu-item:hover{background-color:var(--cds-layer-hover);color:var(--cds-text-primary,#161616)}.cds--menu--xs .cds--menu-item{block-size:1.5rem}.cds--menu--sm .cds--menu-item{block-size:2rem}.cds--menu--md .cds--menu-item{block-size:2.5rem}.cds--menu--lg .cds--menu-item{block-size:3rem}.cds--menu-item__label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cds--menu-item__shortcut{display:flex}.cds--menu-item-group>ul,.cds--menu-item-radio-group>ul{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--menu-item-group>ul *,.cds--menu-item-group>ul :after,.cds--menu-item-group>ul :before,.cds--menu-item-radio-group>ul *,.cds--menu-item-radio-group>ul :after,.cds--menu-item-radio-group>ul :before{box-sizing:inherit}.cds--menu-item__icon,.cds--menu-item__selection-icon{display:none}.cds--menu--with-icons>.cds--menu-item,.cds--menu--with-icons>.cds--menu-item-group>ul>.cds--menu-item,.cds--menu--with-icons>.cds--menu-item-radio-group>ul>.cds--menu-item,.cds--menu--with-selectable-items>.cds--menu-item,.cds--menu--with-selectable-items>.cds--menu-item-group>ul>.cds--menu-item,.cds--menu--with-selectable-items>.cds--menu-item-radio-group>ul>.cds--menu-item{grid-template-columns:1rem 1fr max-content}.cds--menu--with-icons>.cds--menu-item-group>ul>.cds--menu-item>.cds--menu-item__icon,.cds--menu--with-icons>.cds--menu-item-radio-group>ul>.cds--menu-item>.cds--menu-item__icon,.cds--menu--with-icons>.cds--menu-item>.cds--menu-item__icon,.cds--menu--with-selectable-items>.cds--menu-item-group>ul>.cds--menu-item>.cds--menu-item__selection-icon,.cds--menu--with-selectable-items>.cds--menu-item-radio-group>ul>.cds--menu-item>.cds--menu-item__selection-icon,.cds--menu--with-selectable-items>.cds--menu-item>.cds--menu-item__selection-icon{display:flex}.cds--menu--with-icons.cds--menu--with-selectable-items>.cds--menu-item,.cds--menu--with-icons.cds--menu--with-selectable-items>.cds--menu-item-group>ul>.cds--menu-item,.cds--menu--with-icons.cds--menu--with-selectable-items>.cds--menu-item-radio-group>ul>.cds--menu-item{grid-template-columns:1rem 1rem 1fr max-content}.cds--menu-item--disabled{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed}.cds--menu-item--disabled.cds--menu-item--danger:hover,.cds--menu-item--disabled:hover{background-color:var(--cds-layer);color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--menu-item--danger:focus,.cds--menu-item--danger:hover{background-color:var(--cds-button-danger-primary,#da1e28);color:var(--cds-text-on-color,#fff)}.cds--menu-item-divider{background-color:var(--cds-border-subtle);block-size:.0625rem;display:block;inline-size:100%;margin-block:.25rem}.cds--menu--with-icons{--child-icon-property:flex;--child-grid-template-columns:1rem 1fr max-content}:host(cds-menu){position:fixed;z-index:9000;--grid-template:1fr max-content;--display-icon-item:none;--display-selection-icon:none;--block-size-value:2rem}:host(cds-menu):not([open]){pointer-events:none}.cds--menu--with-icons{--grid-template:1rem 1fr max-content;--display-icon-item:flex}.cds--menu--with-selectable-items{--grid-template:1rem 1fr max-content;--display-selection-icon:flex}.cds--menu--with-icons.cds--menu--with-selectable-items{--grid-template:1rem 1rem 1fr max-content}.cds--menu{opacity:0;overflow-y:auto;pointer-events:none;visibility:hidden}.cds--menu--shown{opacity:1}.cds--menu--open{visibility:visible}.cds--menu--open:focus{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--menu--open:focus{outline-style:dotted}}.cds--menu--open.cds--menu--shown{pointer-events:auto}.cds--menu--with-icons{min-inline-size:12rem}.cds--menu--xs{--block-size-value:1.5rem}.cds--menu--sm{--block-size-value:2rem}.cds--menu--md{--block-size-value:2.5rem}.cds--menu--lg{--block-size-value:3rem}"]);

// node_modules/@carbon/web-components/es/components/menu/menu.js
var CDSMenu = class CDSMenu2 extends HostListenerMixin(i2) {
  constructor() {
    super(...arguments);
    this.context = Object.assign(Object.assign({}, menuDefaultState), { updateFromChild: (updatedItem) => {
      this.context = Object.assign(Object.assign({}, this.context), updatedItem);
    } });
    this.spacing = 8;
    this.items = [];
    this.activeitems = [];
    this.isChild = false;
    this.isRtl = false;
    this.isRoot = true;
    this.direction = "ltr";
    this.open = true;
    this.position = [-1, -1];
    this.size = MENU_SIZE.SMALL;
    this.backgroundToken = MENU_BACKGROUND_TOKEN.LAYER;
    this.border = false;
    this.x = 0;
    this.y = 0;
    this._handleBlur = (e3) => {
      const { isRoot } = this.context;
      if (this.open && isRoot && !this.contains(e3.relatedTarget)) {
        this.dispatchCloseEvent(e3);
      }
    };
    this._handleKeyDown = (e3) => {
      const { isRoot } = this.context;
      e3.stopPropagation();
      if (e3.key === "Escape" || !isRoot && e3.key === "ArrowLeft") {
        this.dispatchCloseEvent(e3);
      } else {
        if (e3.key === "ArrowUp" || e3.key === "ArrowDown") {
          e3.preventDefault();
        }
        this._focusItem(e3);
      }
    };
    this._focusItem = (e3) => {
      var _a, _b, _c;
      let currentItem;
      if (((_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.tagName) !== "CDS-MENU") {
        const shadowRootActiveEl = this._findActiveElementInShadowRoot(document);
        currentItem = this.activeitems.findIndex((activeItem) => {
          var _a2;
          return shadowRootActiveEl == activeItem.item || ((_a2 = activeItem.item.shadowRoot) === null || _a2 === void 0 ? void 0 : _a2.activeElement) === shadowRootActiveEl;
        });
      } else {
        currentItem = 0;
      }
      let indexToFocus = currentItem;
      if (currentItem === -1) {
        indexToFocus = 0;
      } else if (e3) {
        if (e3.key === "ArrowUp") {
          indexToFocus = indexToFocus - 1;
        }
        if (e3.key === "ArrowDown") {
          indexToFocus = indexToFocus + 1;
        }
      }
      if (indexToFocus < 0) {
        indexToFocus = this.activeitems.length - 1;
      }
      if (indexToFocus >= this.activeitems.length) {
        indexToFocus = 0;
      }
      if (indexToFocus !== currentItem) {
        (_c = (_b = this.activeitems[indexToFocus]) === null || _b === void 0 ? void 0 : _b.item) === null || _c === void 0 ? void 0 : _c.focus();
      }
    };
    this._findActiveElementInShadowRoot = (shadowRoot) => {
      if (shadowRoot === null)
        return null;
      let activeElement = shadowRoot.activeElement;
      while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement) {
        activeElement = activeElement.shadowRoot.activeElement;
      }
      return activeElement;
    };
    this._notEmpty = (value) => {
      return value !== null && value !== void 0;
    };
    this._fitValue = (range, axis) => {
      var _a;
      const { isRoot } = this.context;
      const menuElement = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`.${prefix}--menu`);
      const { width, height } = (menuElement !== null && menuElement !== void 0 ? menuElement : this).getBoundingClientRect();
      const alignment = isRoot ? "vertical" : "horizontal";
      const axes = {
        x: {
          max: window.innerWidth,
          size: width,
          anchor: alignment === "horizontal" ? range[1] : range[0],
          reversedAnchor: alignment === "horizontal" ? range[0] : range[1],
          offset: 0
        },
        y: {
          max: window.innerHeight,
          size: height,
          anchor: alignment === "horizontal" ? range[0] : range[1],
          reversedAnchor: alignment === "horizontal" ? range[1] : range[0],
          offset: isRoot ? 0 : 4
          // top padding in menu, used to align the menu items
        }
      };
      if (this.actionButtonWidth && this.actionButtonWidth < axes.x.size && (this.menuAlignment === "bottom" || this.menuAlignment === "top")) {
        axes.x.size = this.actionButtonWidth;
      }
      if (this.actionButtonWidth && (this.menuAlignment === "bottom-end" || this.menuAlignment === "top-end") && axes.x.anchor >= 87 && this.actionButtonWidth < axes.x.size) {
        const diff = axes.x.anchor + axes.x.reversedAnchor;
        axes.x.anchor = axes.x.anchor + diff;
      }
      const { max, size, anchor, reversedAnchor, offset } = axes[axis];
      const options = [
        // towards max (preferred)
        max - this.spacing - size - anchor >= 0 ? anchor - offset : false,
        // towards min / reversed (first fallback)
        reversedAnchor - size >= 0 ? reversedAnchor - size + offset : false,
        // align at max (second fallback)
        max - this.spacing - size
      ];
      const topAlignment = this.menuAlignment === "top" || this.menuAlignment === "top-end" || this.menuAlignment === "top-start";
      if (typeof options[0] === "number" && topAlignment && options[0] >= 0 && !options[1] && axis === "y") {
        this.style.transform = "translate(0)";
      } else if (topAlignment && !options[0] && axis === "y") {
        options[0] = anchor - offset;
      }
      const bestOption = options.find((option) => option !== false);
      return bestOption >= this.spacing ? bestOption : this.spacing;
    };
    this._getPosition = (x) => {
      if (Array.isArray(x)) {
        const filtered = x.filter(this._notEmpty);
        if (filtered.length === 2) {
          return filtered;
        } else {
          return;
        }
      } else {
        return [x, x];
      }
    };
    this._calculatePosition = () => {
      var _a, _b;
      const ranges = {
        x: this._getPosition(this.x),
        y: this._getPosition(this.y)
      };
      if (!ranges.x || !ranges.y) {
        return [-1, -1];
      }
      return [
        (_a = this._fitValue(ranges.x, "x")) !== null && _a !== void 0 ? _a : -1,
        (_b = this._fitValue(ranges.y, "y")) !== null && _b !== void 0 ? _b : -1
      ];
    };
    this._handleOpen = async () => {
      const pos = this._calculatePosition();
      if (this.isRtl) {
        this.style.insetInlineStart = `initial`;
        this.style.insetInlineEnd = `${pos[0]}px`;
      } else {
        this.style.insetInlineStart = `${pos[0]}px`;
        this.style.insetInlineEnd = `initial`;
      }
      this.style.insetBlockStart = `${pos[1]}px`;
      this.position = pos;
      await this.updateComplete;
      this._registerMenuItems();
      this._setActiveItems();
      const init = {
        bubbles: true,
        cancelable: true,
        composed: true
      };
      if (this.dispatchEvent(new CustomEvent(this.constructor.eventOnOpen, init))) {
        this.dispatchEvent(new CustomEvent(this.constructor.eventOnOpen, init));
      }
    };
    this.dispatchCloseEvent = (e3) => {
      const init = {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: {
          triggeredBy: e3 === null || e3 === void 0 ? void 0 : e3.target,
          triggerEventType: e3 === null || e3 === void 0 ? void 0 : e3.type
        }
      };
      if (this.dispatchEvent(new CustomEvent(this.constructor.eventOnClose, init))) {
        this.dispatchEvent(new CustomEvent(this.constructor.eventOnClose, init));
      }
    };
    this._handleClose = () => {
      this.position = [-1, -1];
      this.style.removeProperty("inset-inline-start");
      this.style.removeProperty("inset-inline-end");
      this.style.removeProperty("inset-block-start");
    };
    this._handleRootCloseRequest = (event) => {
      var _a, _b, _c;
      if (!((_a = this.context) === null || _a === void 0 ? void 0 : _a.isRoot)) {
        return;
      }
      this.dispatchCloseEvent((_c = (_b = event.detail) === null || _b === void 0 ? void 0 : _b.triggerEvent) !== null && _c !== void 0 ? _c : event);
    };
    this._newContextCreate = () => {
      this.context = Object.assign(Object.assign({}, this.context), { isRoot: false, size: this.size });
    };
    this._registerMenuItems = () => {
      var _a, _b, _c, _d;
      let items;
      if (this.isChild) {
        const submenuSlot = this.querySelector('slot[name="submenu"]');
        items = (_a = submenuSlot === null || submenuSlot === void 0 ? void 0 : submenuSlot.assignedElements()) !== null && _a !== void 0 ? _a : [];
      } else {
        items = (_d = (_c = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("slot")) === null || _c === void 0 ? void 0 : _c.assignedElements()) !== null && _d !== void 0 ? _d : [];
      }
      this.items = items === null || items === void 0 ? void 0 : items.filter((item) => {
        if (item.tagName === "CDS-MENU-ITEM") {
          return !item.disabled;
        }
        return item.tagName !== "CDS-MENU-ITEM-DIVIDER";
      });
    };
    this._setActiveItems = () => {
      var _a, _b, _c;
      this.activeitems = [];
      (_a = this.items) === null || _a === void 0 ? void 0 : _a.map((item) => {
        var _a2, _b2, _c2;
        let activeItem;
        switch (item.tagName) {
          case "CDS-MENU-ITEM-RADIO-GROUP": {
            const slotElements = item.querySelectorAll(`${prefix}-menu-item`);
            if (slotElements === null || slotElements === void 0 ? void 0 : slotElements.length) {
              for (const entry of slotElements.entries()) {
                activeItem = {
                  item: entry[1],
                  parent: item
                };
                this.activeitems = [...this.activeitems, activeItem];
              }
            }
            break;
          }
          case "CDS-MENU-ITEM-GROUP": {
            const slotElements = (_b2 = (_a2 = item.shadowRoot) === null || _a2 === void 0 ? void 0 : _a2.querySelector("slot")) === null || _b2 === void 0 ? void 0 : _b2.assignedElements();
            slotElements === null || slotElements === void 0 ? void 0 : slotElements.map((el) => {
              activeItem = {
                item: el,
                parent: el
              };
              this.activeitems = [...this.activeitems, activeItem];
            });
            break;
          }
          case "CDS-MENU-ITEM-SELECTABLE": {
            activeItem = {
              item: (_c2 = item.shadowRoot) === null || _c2 === void 0 ? void 0 : _c2.querySelector(`${prefix}-menu-item`),
              parent: item
            };
            this.activeitems = [...this.activeitems, activeItem];
            break;
          }
          default: {
            activeItem = {
              item,
              parent: null
            };
            this.activeitems = [...this.activeitems, activeItem];
          }
        }
      });
      const activeEl = (_c = (_b = this.activeitems[0]) === null || _b === void 0 ? void 0 : _b.item) !== null && _c !== void 0 ? _c : document.activeElement;
      activeEl.focus();
    };
  }
  /**
   * The name of the custom event fired when the the Menu should be closed.
   */
  static get eventOnClose() {
    return `${prefix}-menu-closed`;
  }
  /**
   * The name of the custom event fired when the the Menu should be opened.
   */
  static get eventOnOpen() {
    return `${prefix}-menu-opened`;
  }
  updated(changedProperties) {
    if (changedProperties.has("open")) {
      if (this.open) {
        this._handleOpen();
      } else {
        this._handleClose();
      }
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("icon-detect", () => {
      var _a, _b;
      (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".cds--menu")) === null || _b === void 0 ? void 0 : _b.classList.add(`${prefix}--menu--with-icons`);
    });
    this.addEventListener(MENU_CLOSE_ROOT_EVENT, this._handleRootCloseRequest);
  }
  disconnectedCallback() {
    this.removeEventListener(MENU_CLOSE_ROOT_EVENT, this._handleRootCloseRequest);
    super.disconnectedCallback();
  }
  async firstUpdated() {
    var _a;
    this.isRtl = this.direction === "rtl";
    this.isRoot = this.context.isRoot;
    if (this.isChild) {
      this._newContextCreate();
    }
    await this.updateComplete;
    this._registerMenuItems();
    this._setActiveItems();
    const slot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("slot");
    slot === null || slot === void 0 ? void 0 : slot.addEventListener("slotchange", () => {
      this._registerMenuItems();
      this._setActiveItems();
    });
  }
  render() {
    const { open, menuAlignment, label, position, _handleKeyDown: handleKeyDown } = this;
    const menuClasses = e({
      [`${prefix}--menu`]: true,
      [`${prefix}--menu--${this.size}`]: this.size,
      [`${prefix}--menu--box-shadow-top`]: menuAlignment && menuAlignment.slice(0, 3) === "top",
      [`${prefix}--menu--open`]: open,
      [`${prefix}--menu--shown`]: position[0] >= 0 && position[1] >= 0,
      [`${prefix}--menu--with-selectable-items`]: this.context.hasSelectableItems,
      [`${prefix}--menu--border`]: this.border,
      [`${prefix}--menu--background-token__background`]: this.backgroundToken === MENU_BACKGROUND_TOKEN.BACKGROUND
    });
    return b`
      <ul
        class="${menuClasses}"
        aria-label="${label}"
        tabindex="-1"
        @keydown="${handleKeyDown}"
        role="menu">
        <slot></slot>
      </ul>
    `;
  }
};
CDSMenu.styles = styles2;
__decorate([
  e2({ context: MenuContext }),
  c({ context: MenuContext })
], CDSMenu.prototype, "context", void 0);
__decorate([
  r()
], CDSMenu.prototype, "items", void 0);
__decorate([
  r()
], CDSMenu.prototype, "activeitems", void 0);
__decorate([
  n({ type: String })
], CDSMenu.prototype, "label", void 0);
__decorate([
  n({ type: Boolean })
], CDSMenu.prototype, "isChild", void 0);
__decorate([
  n()
], CDSMenu.prototype, "actionButtonWidth", void 0);
__decorate([
  n({ type: Boolean })
], CDSMenu.prototype, "isRtl", void 0);
__decorate([
  n({ type: Boolean })
], CDSMenu.prototype, "isRoot", void 0);
__decorate([
  n({ type: String })
], CDSMenu.prototype, "direction", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSMenu.prototype, "open", void 0);
__decorate([
  n({ type: HTMLElement })
], CDSMenu.prototype, "focusreturn", void 0);
__decorate([
  n()
], CDSMenu.prototype, "position", void 0);
__decorate([
  n({ attribute: true })
], CDSMenu.prototype, "size", void 0);
__decorate([
  n()
], CDSMenu.prototype, "mode", void 0);
__decorate([
  n({ type: String, attribute: "background-token" })
], CDSMenu.prototype, "backgroundToken", void 0);
__decorate([
  n({ type: Boolean })
], CDSMenu.prototype, "border", void 0);
__decorate([
  n({ type: String })
], CDSMenu.prototype, "menuAlignment", void 0);
__decorate([
  n()
], CDSMenu.prototype, "x", void 0);
__decorate([
  n()
], CDSMenu.prototype, "y", void 0);
__decorate([
  HostListener("focusout")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSMenu.prototype, "_handleBlur", void 0);
CDSMenu = __decorate([
  carbonElement(`${prefix}-menu`)
], CDSMenu);

// node_modules/@carbon/web-components/es/components/menu/menu-item-divider.js
var CDSmenuItemDivider = class CDSmenuItemDivider2 extends i2 {
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "separator");
    }
    super.connectedCallback();
  }
};
CDSmenuItemDivider.styles = styles;
CDSmenuItemDivider = __decorate([
  carbonElement(`${prefix}-menu-item-divider`)
], CDSmenuItemDivider);

// node_modules/@carbon/web-components/es/components/menu/menu-item-group.js
var CDSmenuItemGroup = class CDSmenuItemGroup2 extends i2 {
  render() {
    const { label } = this;
    return b`
      <ul role="group" aria-label="${label}">
        <slot></slot>
      </ul>
    `;
  }
};
CDSmenuItemGroup.styles = styles;
__decorate([
  n({ type: String })
], CDSmenuItemGroup.prototype, "label", void 0);
CDSmenuItemGroup = __decorate([
  carbonElement(`${prefix}-menu-item-group`)
], CDSmenuItemGroup);

// node_modules/@carbon/web-components/es/components/menu/menu-item-selectable.js
var CDSmenuItemSelectable = class CDSmenuItemSelectable2 extends i2 {
  constructor() {
    super(...arguments);
    this.selected = false;
    this._handleClick = (e3) => {
      this.selected = !this.selected;
      const init = {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: {
          triggeredBy: e3.target
        }
      };
      if (this.dispatchEvent(new CustomEvent(this.constructor.eventOnChange, init))) {
        this.dispatchEvent(new CustomEvent(this.constructor.eventOnChange, init));
      }
    };
    this._handleKeydown = (e3) => {
      if (e3.key === "Enter" || e3.key === " ") {
        this._handleClick(e3);
      }
    };
  }
  /**
   * The name of the custom event fired when the selection state changes.
   */
  static get eventOnChange() {
    return `${prefix}-item-changed`;
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("keydown", this._handleKeydown);
  }
  firstUpdated() {
    var _a;
    const menuItemSelectable = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`${prefix}-menu-item`);
    if (menuItemSelectable) {
      menuItemSelectable.addEventListener("keydown", this._handleKeydown);
    }
    this.context.updateFromChild({ hasSelectableItems: true });
  }
  render() {
    const { label, selected, _handleClick: handleClick } = this;
    return b`
      <cds-menu-item
        label="${label}"
        class="${prefix}--menu-item-selectable--selected"
        role="menuitemcheckbox"
        shortcut=${this.shortcut}
        aria-checked="${selected}"
        @click="${handleClick}">
        <slot slot="render-icon" name="render-icon"></slot>
      </cds-menu-item>
    `;
  }
};
CDSmenuItemSelectable.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSmenuItemSelectable.styles = styles;
__decorate([
  c({ context: MenuContext })
], CDSmenuItemSelectable.prototype, "context", void 0);
__decorate([
  n({ type: String })
], CDSmenuItemSelectable.prototype, "label", void 0);
__decorate([
  n({ type: Boolean })
], CDSmenuItemSelectable.prototype, "selected", void 0);
__decorate([
  n()
], CDSmenuItemSelectable.prototype, "renderIcon", void 0);
__decorate([
  n()
], CDSmenuItemSelectable.prototype, "shortcut", void 0);
CDSmenuItemSelectable = __decorate([
  carbonElement(`${prefix}-menu-item-selectable`)
], CDSmenuItemSelectable);

// node_modules/@carbon/web-components/es/components/menu/menu-item-radio-group.js
var CDSmenuItemRadioGroup = class CDSmenuItemRadioGroup2 extends i2 {
  constructor() {
    super(...arguments);
    this.items = [];
  }
  /**
   * The name of the custom event fired when the selection state changes.
   */
  static get eventOnChange() {
    return `${prefix}-item-changed`;
  }
  firstUpdated() {
    this.context.updateFromChild({ hasSelectableItems: true });
    this.addEventListener(`click`, (e3) => {
      this.selectedItem = e3.target;
      const init = {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: {
          triggeredBy: e3.target
        }
      };
      if (this.dispatchEvent(new CustomEvent(this.constructor.eventOnChange, init))) {
        this.dispatchEvent(new CustomEvent(this.constructor.eventOnChange, init));
      }
    });
  }
  updated(_changedProperties) {
    if (_changedProperties.has("selectedItem")) {
      this.querySelectorAll(`${prefix}-menu-item`).forEach((item) => {
        if (item === this.selectedItem) {
          item.setAttribute("aria-checked", "true");
        } else {
          item.setAttribute("aria-checked", "false");
        }
      });
    }
  }
  render() {
    const { label } = this;
    return b`
      <ul role="group" aria-label="${label}">
        <slot></slot>
      </ul>
    `;
  }
};
CDSmenuItemRadioGroup.styles = styles;
__decorate([
  c({ context: MenuContext })
], CDSmenuItemRadioGroup.prototype, "context", void 0);
__decorate([
  n({ type: String })
], CDSmenuItemRadioGroup.prototype, "label", void 0);
__decorate([
  n({ type: Array })
], CDSmenuItemRadioGroup.prototype, "items", void 0);
__decorate([
  n({ type: String, attribute: true })
], CDSmenuItemRadioGroup.prototype, "selectedItem", void 0);
__decorate([
  n()
], CDSmenuItemRadioGroup.prototype, "itemToString", void 0);
CDSmenuItemRadioGroup = __decorate([
  carbonElement(`${prefix}-menu-item-radio-group`)
], CDSmenuItemRadioGroup);

export {
  MENU_BACKGROUND_TOKEN
};
