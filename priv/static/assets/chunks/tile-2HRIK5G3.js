import {
  NAVIGATION_DIRECTION
} from "./chunk-XALNULML.js";
import {
  _16 as _162
} from "./chunk-HPDZLYLI.js";
import {
  _16
} from "./chunk-MZGBQGXZ.js";
import {
  FORM_ELEMENT_COLOR_SCHEME
} from "./chunk-KDBKJKDV.js";
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
  CDSLink$1
} from "./chunk-WPLJTCHR.js";
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

// node_modules/@carbon/web-components/es/components/tile/tile.scss.js
var styles = i(['.cds--link,:host(cds-tile) ::slotted(.cds--link){border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--link *,.cds--link :after,.cds--link :before,:host(cds-tile) ::slotted(.cds--link) *,:host(cds-tile) ::slotted(.cds--link) :after,:host(cds-tile) ::slotted(.cds--link) :before{box-sizing:inherit}.cds--link,:host(cds-tile) ::slotted(.cds--link){color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe));display:inline-flex;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);outline:none;text-decoration:none;transition:color 70ms cubic-bezier(.2,0,.38,.9)}.cds--link:hover,:host(cds-tile) :hover::slotted(.cds--link){color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce));text-decoration:underline}.cds--link:active:not(.cds--link--disabled),.cds--link:active:visited,.cds--link:active:visited:hover,:host(cds-tile) :active:not(.cds--link--disabled)::slotted(.cds--link),:host(cds-tile) :active:visited::slotted(.cds--link){outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--link:active:not(.cds--link--disabled),.cds--link:active:visited,.cds--link:active:visited:hover,:host(cds-tile) :active:not(.cds--link--disabled)::slotted(.cds--link),:host(cds-tile) :active:visited::slotted(.cds--link){outline-style:dotted}}.cds--link:active:not(.cds--link--disabled),.cds--link:active:visited,.cds--link:active:visited:hover,:host(cds-tile) :active:not(.cds--link--disabled)::slotted(.cds--link),:host(cds-tile) :active:visited::slotted(.cds--link){color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe));outline-color:var(--cds-link-focus-text-color,var(--cds-focus,#0f62fe));text-decoration:underline}.cds--link:focus:not(.cds--link--disabled),:host(cds-tile) :focus:not(.cds--link--disabled)::slotted(.cds--link){outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--link:focus:not(.cds--link--disabled),:host(cds-tile) :focus:not(.cds--link--disabled)::slotted(.cds--link){outline-style:dotted}}.cds--link:focus:not(.cds--link--disabled),:host(cds-tile) :focus:not(.cds--link--disabled)::slotted(.cds--link){outline-color:var(--cds-link-focus-text-color,var(--cds-focus,#0f62fe));text-decoration:underline}.cds--link:visited,:host(cds-tile) :visited::slotted(.cds--link){color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe))}.cds--link:visited:hover,:host(cds-tile) :visited:hover::slotted(.cds--link){color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce))}.cds--link--disabled,.cds--link--disabled:hover{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--link--disabled *,.cds--link--disabled :after,.cds--link--disabled :before,.cds--link--disabled:hover *,.cds--link--disabled:hover :after,.cds--link--disabled:hover :before{box-sizing:inherit}.cds--link--disabled,.cds--link--disabled:hover{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);font-weight:400;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);text-decoration:none}.cds--link.cds--link--visited,.cds--link.cds--link--visited:visited,:host(cds-tile) .cds--link--visited::slotted(.cds--link){color:var(--cds-link-visited-text-color,var(--cds-link-visited,#8a3ffc))}.cds--link.cds--link--visited:hover,.cds--link.cds--link--visited:visited:hover,:host(cds-tile) .cds--link--visited:hover::slotted(.cds--link){color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce))}.cds--link.cds--link--inline,:host(cds-tile) .cds--link--inline::slotted(.cds--link){display:inline;text-decoration:underline}.cds--link--disabled.cds--link--inline{text-decoration:underline}.cds--link--sm,.cds--link--sm.cds--link--disabled:hover{font-size:var(--cds-helper-text-01-font-size,.75rem);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333)}.cds--link--lg,.cds--link--lg.cds--link--disabled:hover{font-size:var(--cds-body-compact-02-font-size,1rem);font-weight:var(--cds-body-compact-02-font-weight,400);letter-spacing:var(--cds-body-compact-02-letter-spacing,0);line-height:var(--cds-body-compact-02-line-height,1.375)}.cds--link__icon{align-self:center;display:inline-flex;margin-inline-start:.5rem}.cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-background:var(--cds-layer-background-01,#fff);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-background:var(--cds-layer-background-02,#f4f4f4);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-background:var(--cds-layer-background-03,#fff);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}.cds--layer-one.cds--layer__with-background,.cds--layer-three.cds--layer__with-background,.cds--layer-two.cds--layer__with-background{background-color:var(--cds-layer-background)}.cds--assistive-text,.cds--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--tile-group html,:host(cds-tile-group) html{font-size:100%}.cds--tile-group body,:host(cds-tile-group) body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--tile-group code,:host(cds-tile-group) code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--tile-group strong,:host(cds-tile-group) strong{font-weight:600}.cds--tile,:host(cds-expandable-tile),:host(cds-tile){font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);--cds-layout-density-padding-inline-local:clamp(var(--cds-layout-density-padding-inline-min),var(--cds-layout-density-padding-inline,var(--cds-layout-density-padding-inline-normal)),var(--cds-layout-density-padding-inline-max));background-color:var(--cds-layer);display:block;min-block-size:4rem;min-inline-size:8rem;outline:2px solid transparent;outline-offset:-2px;padding:var(--cds-layout-density-padding-inline-local);position:relative}.cds--tile:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--tile:focus{outline-style:dotted}}.cds--tile--light,:host(cds-expandable-tile[color-scheme=light]),:host(cds-tile[color-scheme=light]){background-color:var(--cds-layer-02,#fff)}.cds--tile--clickable,.cds--tile--selectable,:host(cds-clickable-tile) .cds--tile--clickable{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--tile--clickable *,.cds--tile--clickable :after,.cds--tile--clickable :before,.cds--tile--selectable *,.cds--tile--selectable :after,.cds--tile--selectable :before,:host(cds-clickable-tile) .cds--tile--clickable *,:host(cds-clickable-tile) .cds--tile--clickable :after,:host(cds-clickable-tile) .cds--tile--clickable :before{box-sizing:inherit}.cds--tile--clickable,.cds--tile--selectable,:host(cds-clickable-tile) .cds--tile--clickable{cursor:pointer;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);padding:var(--cds-layout-density-padding-inline-local);transition:.15s cubic-bezier(.2,0,.38,.9)}.cds--tile--clickable:hover,.cds--tile--selectable:hover{background:var(--cds-layer-hover)}.cds--tile--clickable,:host(cds-clickable-tile) .cds--tile--clickable{color:var(--cds-text-primary,#161616);text-decoration:none}.cds--tile--clickable:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--tile--clickable:focus{outline-style:dotted}}.cds--tile--clickable:focus{text-decoration:none}.cds--tile--clickable:focus .cds--tile__checkmark,.cds--tile--clickable:hover .cds--tile__checkmark{opacity:1}.cds--tile--expandable::-moz-focus-inner{border:0}.cds--tile--clickable:active,.cds--tile--clickable:hover,.cds--tile--clickable:visited,.cds--tile--clickable:visited:hover{color:var(--cds-text-primary,#161616);text-decoration:none}.cds--tile--clickable.cds--link--disabled,.cds--tile--clickable:hover.cds--link--disabled{background-color:var(--cds-layer);color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed;display:block;padding:var(--cds-layout-density-padding-inline-local)}.cds--tile--clickable .cds--tile--icon,.cds--tile--clickable.cds--link--disabled .cds--tile--disabled-icon,:host(cds-clickable-tile) .cds--tile--clickable ::slotted([slot=icon]){block-size:1.25rem;inline-size:1.25rem;inset-block-end:.75rem;inset-inline-end:.75rem;position:absolute}.cds--tile--clickable .cds--tile--icon,:host(cds-clickable-tile) .cds--tile--clickable ::slotted([slot=icon]){fill:var(--cds-icon-interactive,#0f62fe)}.cds--tile--clickable.cds--link--disabled .cds--tile--disabled-icon{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--tile--clickable.cds--link--disabled .cds--tile--icon,:host(cds-clickable-tile) .cds--tile--clickable.cds--link--disabled ::slotted([slot=icon]){display:none}.cds--tile--selectable{border:1px solid transparent;padding-inline-end:calc(var(--cds-layout-density-padding-inline-local)*2 + 1rem)}.cds--tile__checkmark{background:transparent;block-size:1rem;border:none;inset-block-start:var(--cds-layout-density-padding-inline-local);inset-inline-end:var(--cds-layout-density-padding-inline-local);opacity:0;position:absolute;transition:.11s cubic-bezier(.2,0,.38,.9)}.cds--tile__checkmark svg{border-radius:50%;fill:var(--cds-icon-secondary,#525252)}.cds--tile__checkmark:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--tile__checkmark:focus{outline-style:dotted}}.cds--tile__checkmark--persistent{opacity:1}.cds--tile__chevron,:host(cds-selectable-tile) .cds--tile__chevron{align-items:center;block-size:calc(var(--cds-layout-density-padding-inline-local)*2 + 1rem);display:flex;inline-size:calc(var(--cds-layout-density-padding-inline-local)*2 + 1rem);inset-block-end:0;inset-inline-end:0;justify-content:center;position:absolute}.cds--tile__chevron svg,:host(cds-selectable-tile) .cds--tile__chevron svg{fill:var(--cds-icon-primary,#161616);transform-origin:center;transition:.11s cubic-bezier(.2,0,.38,.9)}@media screen and (prefers-reduced-motion:reduce){.cds--tile__chevron svg,:host(cds-selectable-tile) .cds--tile__chevron svg{transition:none}}.cds--tile__chevron--interactive{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--tile__chevron--interactive *,.cds--tile__chevron--interactive :after,.cds--tile__chevron--interactive :before{box-sizing:inherit}.cds--tile__chevron--interactive::-moz-focus-inner{border:0}.cds--tile__chevron--interactive{align-items:center;block-size:calc(var(--cds-layout-density-padding-inline-local)*2 + 1rem);display:flex;inline-size:calc(var(--cds-layout-density-padding-inline-local)*2 + 1rem);inset-block-end:0;inset-inline-end:0;justify-content:center;position:absolute}.cds--tile__chevron--interactive:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}.cds--tile__chevron--interactive:hover{background-color:var(--cds-layer-hover);cursor:pointer}.cds--tile--expandable,:host(cds-expandable-tile){border:0;color:inherit;cursor:pointer;font-family:inherit;font-size:inherit;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);inline-size:100%;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);overflow:hidden;position:relative;text-align:start;transition:max-height .15s cubic-bezier(.2,0,.38,.9)}.cds--tile--expandable:hover{background:var(--cds-layer-hover)}.cds--tile--expandable.cds--tile--expandable--interactive{border:none;cursor:default;transition:max-height .15s cubic-bezier(.2,0,.38,.9)}.cds--tile--expandable.cds--tile--expandable--interactive:hover{background-color:var(--cds-layer)}.cds--tile--expandable.cds--tile--expandable--interactive:focus{outline:none}.cds--tile--expandable--interactive:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--tile--expandable--interactive:focus{outline-style:dotted}}.cds--tile-content__below-the-fold,:host(cds-expandable-tile) ::slotted(cds-tile-below-the-fold-content){display:block;opacity:0;transition:opacity .11s cubic-bezier(.2,0,.38,.9),visibility .11s cubic-bezier(.2,0,.38,.9);visibility:hidden}.cds--tile--is-expanded,:host(cds-expandable-tile[expanded]){overflow:visible;transition:max-height .11s cubic-bezier(.2,0,.38,.9)}.cds--tile--is-expanded .cds--tile__chevron svg,:host(cds-expandable-tile[expanded]) .cds--tile__chevron svg{transform:rotate(180deg)}.cds--tile--is-expanded .cds--tile-content__below-the-fold,:host(cds-expandable-tile) .cds--tile--is-expanded ::slotted(cds-tile-below-the-fold-content),:host(cds-expandable-tile[expanded]) .cds--tile-content__below-the-fold,:host(cds-expandable-tile[expanded]):host(cds-expandable-tile) ::slotted(cds-tile-below-the-fold-content){opacity:1;transition:opacity .11s cubic-bezier(.2,0,.38,.9),visibility .11s cubic-bezier(.2,0,.38,.9);visibility:inherit}@supports (hanging-punctuation:first) and (font:-apple-system-body) and (-webkit-appearance:none){.cds--tile--is-expanded .cds--tile-content__below-the-fold,:host(cds-expandable-tile) .cds--tile--is-expanded ::slotted(cds-tile-below-the-fold-content),:host(cds-expandable-tile[expanded]) .cds--tile-content__below-the-fold,:host(cds-expandable-tile[expanded]):host(cds-expandable-tile) ::slotted(cds-tile-below-the-fold-content){overflow-y:auto}}.cds--tile--is-selected{border:1px solid var(--cds-layer-selected-inverse,#161616)}.cds--tile--is-selected .cds--tile__checkmark{opacity:1}.cds--tile--is-selected .cds--tile__checkmark svg{fill:var(--cds-icon-primary,#161616)}.cds--tile-content{block-size:100%;inline-size:100%}.cds--tile-input{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--tile-input:focus+.cds--tile,.cds--tile-input:focus+:host(cds-expandable-tile),.cds--tile-input:focus+:host(cds-tile){outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--tile-input:focus+.cds--tile,.cds--tile-input:focus+:host(cds-expandable-tile),.cds--tile-input:focus+:host(cds-tile){outline-style:dotted}}.cds--tile--disabled.cds--tile--selectable{background-color:var(--cds-layer);color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed}.cds--tile--disabled.cds--tile--selectable.cds--tile--light{background-color:var(--cds-layer-02,#fff)}.cds--tile--disabled.cds--tile--is-selected{border-color:var(--cds-border-disabled,#c6c6c6)}.cds--tile--disabled .cds--tile__checkmark svg{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--tile--clickable .cds--tile--ai-label-icon,.cds--tile--expandable>div>.cds--ai-label,.cds--tile--expandable>div>.cds--slug,.cds--tile--expandable>div>.cds--tile--inner-decorator>*,.cds--tile>.cds--ai-label,.cds--tile>.cds--slug,.cds--tile>.cds--tile--inner-decorator>*,:host(cds-expandable-tile)>.cds--ai-label,:host(cds-expandable-tile)>.cds--slug,:host(cds-expandable-tile)>.cds--tile--inner-decorator>*,:host(cds-expandable-tile)>div>.cds--ai-label,:host(cds-expandable-tile)>div>.cds--slug,:host(cds-expandable-tile)>div>.cds--tile--inner-decorator>*,:host(cds-tile)>.cds--ai-label,:host(cds-tile)>.cds--slug,:host(cds-tile)>.cds--tile--inner-decorator>*{inset-block-start:1rem;inset-inline-end:1rem;position:absolute}.cds--tile.cds--tile--selectable>.cds--ai-label,.cds--tile.cds--tile--selectable>.cds--slug,.cds--tile.cds--tile--selectable>.cds--tile--inner-decorator>*{inset-inline-end:2.5rem}.cds--tile.cds--tile--selectable.cds--tile--radio>.cds--ai-label,.cds--tile.cds--tile--selectable.cds--tile--radio>.cds--slug,.cds--tile.cds--tile--selectable.cds--tile--radio>.cds--tile--inner-decorator>*{inset-inline-end:1rem;inset-inline-end:2.5rem;transition:inset-inline-end .11s cubic-bezier(.2,0,.38,.9)}.cds--tile.cds--tile--selectable.cds--tile--radio.cds--tile--is-selected>.cds--ai-label,.cds--tile.cds--tile--selectable.cds--tile--radio.cds--tile--is-selected>.cds--slug,.cds--tile.cds--tile--selectable.cds--tile--radio.cds--tile--is-selected>.cds--tile--inner-decorator>*{inset-inline-end:2.5rem}.cds--tile.cds--tile--clickable>.cds--ai-label,.cds--tile.cds--tile--clickable>.cds--slug,.cds--tile.cds--tile--clickable>.cds--tile--inner-decorator>*{pointer-events:none}.cds--tile--decorator:has(.cds--ai-label).cds--tile,.cds--tile--decorator:has(.cds--tile--ai-label-icon).cds--tile,.cds--tile--slug.cds--tile{background:linear-gradient(to top,var(--cds-layer,var(--cds-ai-popover-background,#fff)) 0,var(--cds-ai-aura-start,rgba(69,137,255,.1)) 0,15%,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%) padding-box,linear-gradient(to top,var(--cds-layer,var(--cds-ai-popover-background,#fff)),var(--cds-layer,var(--cds-ai-popover-background,#fff))) padding-box,linear-gradient(to bottom,var(--cds-ai-border-start,rgba(166,200,255,.64)),var(--cds-ai-border-end,#78a9ff)) border-box,linear-gradient(to top,var(--cds-layer,var(--cds-ai-popover-background,#fff)),var(--cds-layer,var(--cds-ai-popover-background,#fff))) border-box;border:1px solid transparent;box-shadow:inset 0 -80px 70px -65px var(--cds-ai-inner-shadow,rgba(69,137,255,.1)),0 4px 8px 0 var(--cds-ai-drop-shadow,rgba(15,98,254,.1))}.cds--tile--decorator:has(.cds--ai-label).cds--tile--expandable:hover,.cds--tile--slug.cds--tile--expandable:hover{background:linear-gradient(to top,var(--cds-layer,var(--cds-ai-popover-background,#fff)) 0,var(--cds-ai-aura-start,rgba(69,137,255,.1)) 0,15%,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%) padding-box,linear-gradient(to top,var(--cds-layer,var(--cds-ai-popover-background,#fff)),var(--cds-layer,var(--cds-ai-popover-background,#fff))) padding-box,linear-gradient(to bottom,var(--cds-ai-border-start,rgba(166,200,255,.64)),var(--cds-ai-border-end,#78a9ff)) border-box,linear-gradient(to top,var(--cds-layer,var(--cds-ai-popover-background,#fff)),var(--cds-layer,var(--cds-ai-popover-background,#fff))) border-box}.cds--tile--decorator.cds--tile--clickable:before,.cds--tile--decorator.cds--tile--selectable:after,.cds--tile--decorator.cds--tile--selectable:before,.cds--tile--slug.cds--tile--clickable:before,.cds--tile--slug.cds--tile--selectable:after,.cds--tile--slug.cds--tile--selectable:before{block-size:100%;content:"";display:block;inline-size:100%;inset-block-start:0;inset-inline-start:0;opacity:0;position:absolute;transition:opacity .11s cubic-bezier(.2,0,.38,.9)}.cds--tile--decorator:has(.cds--ai-label).cds--tile--clickable:before,.cds--tile--decorator:has(.cds--ai-label).cds--tile--selectable:before,.cds--tile--decorator:has(.cds--tile--ai-label-icon).cds--tile--clickable:before,.cds--tile--slug.cds--tile--clickable:before,.cds--tile--slug.cds--tile--selectable:before{background:linear-gradient(to top,var(--cds-ai-aura-hover-start,rgba(69,137,255,.32)) 0,15%,var(--cds-ai-aura-hover-end,hsla(0,0%,100%,0)) 50%) padding-box,linear-gradient(to top,var(--cds-ai-aura-hover-background,#edf5ff),var(--cds-ai-aura-hover-background,#edf5ff)) padding-box,linear-gradient(to bottom,var(--cds-ai-border-start,rgba(166,200,255,.64)),var(--cds-ai-border-end,#78a9ff)) border-box,linear-gradient(to top,var(--cds-ai-aura-hover-background,#edf5ff),var(--cds-ai-aura-hover-background,#edf5ff)) border-box;box-shadow:inset 0 -80px 70px -65px var(--cds-ai-inner-shadow,rgba(69,137,255,.1)),0 4px 10px 2px var(--cds-ai-drop-shadow,rgba(15,98,254,.1))}.cds--tile--decorator.cds--tile--clickable:hover:before,.cds--tile--decorator.cds--tile--selectable:hover:before,.cds--tile--slug.cds--tile--clickable:hover:before,.cds--tile--slug.cds--tile--selectable:hover:before{opacity:1}.cds--tile--decorator.cds--tile--clickable:focus,.cds--tile--decorator.cds--tile--selectable:focus,.cds--tile--slug.cds--tile--clickable:focus,.cds--tile--slug.cds--tile--selectable:focus,.cds--tile-input:focus+.cds--tile--decorator.cds--tile,.cds--tile-input:focus+.cds--tile--slug.cds--tile{outline-offset:-1px}.cds--tile--decorator:has(.cds--tile--inner-decorator .cds--ai-label).cds--tile--selectable:after,.cds--tile--slug.cds--tile--selectable:after{background:linear-gradient(to top,var(--cds-ai-aura-start,rgba(69,137,255,.1)) 0,15%,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%) padding-box,linear-gradient(to top,var(--cds-layer),var(--cds-layer)) padding-box,linear-gradient(to bottom,var(--cds-border-inverse,#161616),var(--cds-border-inverse,#161616)) border-box,linear-gradient(to top,var(--cds-layer),var(--cds-layer)) border-box;box-shadow:inset 0 -80px 70px -65px var(--cds-ai-inner-shadow,rgba(69,137,255,.1)),0 4px 8px 0 var(--cds-ai-drop-shadow,rgba(15,98,254,.1))}.cds--tile--decorator.cds--tile--selectable:hover:after,.cds--tile--slug.cds--tile--selectable:hover:after{opacity:0}.cds--tile--decorator.cds--tile--is-selected:after,.cds--tile--slug.cds--tile--is-selected:after{opacity:1}.cds--tile--decorator:has(.cds--tile--inner-decorator).cds--tile--is-selected,.cds--tile--slug.cds--tile--is-selected{border-color:var(--cds-border-inverse,#161616)}.cds--tile--decorator.cds--tile--clickable .cds--tile-content,.cds--tile--decorator.cds--tile--selectable .cds--tile-content,.cds--tile--slug.cds--tile--clickable .cds--tile-content,.cds--tile--slug.cds--tile--selectable .cds--tile-content{cursor:pointer;position:relative}.cds--tile--decorator.cds--tile--clickable .cds--tile-content,.cds--tile--decorator.cds--tile--is-selected .cds--tile--inner-decorator>*,.cds--tile--decorator.cds--tile--selectable .cds--tile-content,.cds--tile--decorator.cds--tile--selectable>.cds--tile__checkmark,.cds--tile--slug.cds--tile--clickable .cds--tile-content,.cds--tile--slug.cds--tile--is-selected .cds--ai-label,.cds--tile--slug.cds--tile--is-selected .cds--slug,.cds--tile--slug.cds--tile--selectable .cds--tile-content,.cds--tile--slug.cds--tile--selectable>.cds--tile__checkmark{z-index:1}.cds--tile--decorator.cds--tile--selectable .cds--tile--inner-decorator>:has(>.cds--popover--open),.cds--tile--slug.cds--tile--selectable .cds--ai-label:has(>.cds--popover--open),.cds--tile--slug.cds--tile--selectable .cds--slug:has(>.cds--popover--open){z-index:2}.cds--tile--decorator.cds--tile--selectable>.cds--tile--inner-decorator>*,.cds--tile--decorator.cds--tile--selectable>.cds--tile__checkmark,.cds--tile--slug.cds--tile--selectable>.cds--ai-label,.cds--tile--slug.cds--tile--selectable>.cds--slug,.cds--tile--slug.cds--tile--selectable>.cds--tile__checkmark{z-index:1}.cds--tile--expandable:has(.cds--ai-label>.cds--popover--open),.cds--tile--expandable:has(.cds--slug>.cds--popover--open),.cds--tile--expandable:has(.cds--tile--inner-decorator>*>.cds--popover--open),:has(.cds--ai-label>.cds--popover--open):host(cds-expandable-tile),:has(.cds--slug>.cds--popover--open):host(cds-expandable-tile),:has(.cds--tile--inner-decorator>*>.cds--popover--open):host(cds-expandable-tile){overflow:visible}.cds--tile--clickable .cds--tile--ai-label-icon rect{stroke:var(--cds-icon-primary,#161616)}.cds--tile--clickable .cds--tile--ai-label-icon path{fill:var(--cds-icon-primary,#161616)}.cds--tile--decorator-rounded,.cds--tile--decorator-rounded.cds--tile--clickable:before,.cds--tile--decorator-rounded.cds--tile--selectable:after,.cds--tile--decorator-rounded.cds--tile--selectable:before,.cds--tile--slug-rounded,.cds--tile--slug-rounded.cds--tile--clickable:before,.cds--tile--slug-rounded.cds--tile--selectable:after,.cds--tile--slug-rounded.cds--tile--selectable:before,:host(cds-clickable-tile[ai-label][has-rounded-corners]),:host(cds-expandable-tile[ai-label][has-rounded-corners]),:host(cds-radio-tile[ai-label][has-rounded-corners]),:host(cds-selectable-tile[ai-label][has-rounded-corners]),:host(cds-tile[ai-label][has-rounded-corners]){border-radius:.5rem}.cds--tile--decorator-rounded .cds--tile__chevron,.cds--tile--slug-rounded .cds--tile__chevron,:host(cds-clickable-tile[ai-label][has-rounded-corners]) .cds--tile__chevron,:host(cds-expandable-tile[ai-label][has-rounded-corners]) .cds--tile__chevron,:host(cds-radio-tile[ai-label][has-rounded-corners]) .cds--tile__chevron,:host(cds-selectable-tile[ai-label][has-rounded-corners]) .cds--tile__chevron,:host(cds-tile[ai-label][has-rounded-corners]) .cds--tile__chevron{border-end-end-radius:.5rem}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}input:-webkit-autofill,input:-webkit-autofill:focus,input:-webkit-autofill:hover,textarea:-webkit-autofill,textarea:-webkit-autofill:focus,textarea:-webkit-autofill:hover{box-shadow:0 0 0 1000px var(--cds-field) inset;-webkit-text-fill-color:var(--cds-text-primary,#161616)}.cds--fieldset{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--fieldset *,.cds--fieldset :after,.cds--fieldset :before{box-sizing:inherit}.cds--form-item{align-items:flex-start;display:flex;flex:1 1 auto;flex-direction:column;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--label html{font-size:100%}.cds--label body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--label code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--label strong{font-weight:600}.cds--label{color:var(--cds-text-secondary,#525252);display:inline-block;font-weight:var(--cds-label-01-font-weight,400);font-weight:400;line-height:var(--cds-label-01-line-height,1.33333);line-height:1rem;margin-block-end:.5rem;vertical-align:baseline}.cds--label,.cds--label .cds--toggletip-label{font-size:var(--cds-label-01-font-size,.75rem);letter-spacing:var(--cds-label-01-letter-spacing,.32px)}.cds--label .cds--toggletip-label{font-weight:var(--cds-label-01-font-weight,400);line-height:var(--cds-label-01-line-height,1.33333)}.cds--label--no-margin{margin-block-end:0}.cds--label+.cds--tooltip{inset-block-start:.2rem;inset-inline-start:.5rem;position:relative}.cds--label+.cds--tooltip .cds--tooltip__trigger{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--label+.cds--tooltip .cds--tooltip__trigger *,.cds--label+.cds--tooltip .cds--tooltip__trigger :after,.cds--label+.cds--tooltip .cds--tooltip__trigger :before{box-sizing:inherit}.cds--label+.cds--tooltip .cds--tooltip__trigger::-moz-focus-inner{border:0}.cds--label+.cds--tooltip .cds--tooltip__trigger{align-items:center;display:flex;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);justify-content:center;letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}.cds--label+.cds--tooltip .cds--tooltip__trigger:focus{outline:1px solid var(--cds-focus,#0f62fe)}.cds--label+.cds--tooltip .cds--tooltip__trigger svg{fill:var(--cds-icon-secondary,#525252)}.cds--label+.cds--tooltip .cds--tooltip__trigger svg :hover{fill:var(--cds-icon-primary,#161616)}.cds--label+.cds--toggletip{inset-block-start:.2rem;inset-inline-start:.5rem}.cds--label.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--label.cds--skeleton:active,.cds--label.cds--skeleton:focus,.cds--label.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--label.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--label.cds--skeleton:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--label.cds--skeleton{background:CanvasText}.cds--label.cds--skeleton:before{background:Canvas;forced-color-adjust:none}}.cds--label.cds--skeleton{block-size:.875rem;inline-size:4.6875rem}input[type=number],input[type=text].cds--number{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif}.cds--combo-box[data-invalid]:not(.cds--multi-select--selected) .cds--text-input:not(:focus),.cds--list-box[data-invalid]:not(.cds--multi-select--invalid--focused,.cds--combo-box--invalid--focused),.cds--number[data-invalid] input[type=number]:not(:focus),.cds--number[data-invalid] input[type=text]:not(:focus),.cds--select-input__wrapper[data-invalid] .cds--select-input:not(:focus),.cds--text-area__wrapper[data-invalid]>.cds--text-area--invalid:not(:focus),.cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline:2px solid var(--cds-support-error,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.cds--combo-box[data-invalid]:not(.cds--multi-select--selected) .cds--text-input:not(:focus),.cds--list-box[data-invalid]:not(.cds--multi-select--invalid--focused,.cds--combo-box--invalid--focused),.cds--number[data-invalid] input[type=number]:not(:focus),.cds--number[data-invalid] input[type=text]:not(:focus),.cds--select-input__wrapper[data-invalid] .cds--select-input:not(:focus),.cds--text-area__wrapper[data-invalid]>.cds--text-area--invalid:not(:focus),.cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline-style:dotted}}.cds--date-picker-input__wrapper--invalid~.cds--form-requirement,.cds--date-picker-input__wrapper--warn~.cds--form-requirement,.cds--date-picker-input__wrapper~.cds--form-requirement,.cds--list-box--warning~.cds--form-requirement,.cds--list-box[data-invalid]~.cds--form-requirement,.cds--number[data-invalid] .cds--number__input-wrapper~.cds--form-requirement,.cds--number__input-wrapper--warning~.cds--form-requirement,.cds--select--warning .cds--select-input__wrapper~.cds--form-requirement,.cds--select-input__wrapper[data-invalid]~.cds--form-requirement,.cds--text-area__wrapper--warn~.cds--form-requirement,.cds--text-area__wrapper[data-invalid]~.cds--form-requirement,.cds--text-input__field-wrapper--warning>.cds--text-input~.cds--form-requirement,.cds--text-input__field-wrapper--warning~.cds--form-requirement,.cds--text-input__field-wrapper[data-invalid]~.cds--form-requirement,.cds--time-picker--invalid~.cds--form-requirement,.cds--time-picker--warning~.cds--form-requirement,.cds--time-picker[data-invalid]~.cds--form-requirement,input[data-invalid]~.cds--form-requirement{display:block;font-weight:400;max-block-size:12.5rem;overflow:visible}.cds--select--inline.cds--select--warning .cds--select-input--inline__wrapper~.cds--form-requirement,.cds--select-input--inline__wrapper[data-invalid]~.cds--form-requirement{display:inline-flex;inline-size:100%;margin:0;margin-block-end:0;max-block-size:100%;overflow:visible;padding-inline-start:.5rem}.cds--date-picker-input__wrapper--invalid~.cds--form-requirement,.cds--date-picker-input__wrapper~.cds--form-requirement,.cds--list-box[data-invalid]~.cds--form-requirement,.cds--number[data-invalid] .cds--number__input-wrapper~.cds--form-requirement,.cds--select-input--inline__wrapper[data-invalid]~.cds--form-requirement,.cds--select-input__wrapper[data-invalid]~.cds--form-requirement,.cds--text-area__wrapper[data-invalid]~.cds--form-requirement,.cds--text-input__field-wrapper[data-invalid]~.cds--form-requirement,.cds--time-picker--invalid~.cds--form-requirement,.cds--time-picker[data-invalid]~.cds--form-requirement,input[data-invalid]~.cds--form-requirement{color:var(--cds-text-error,#da1e28)}.cds--form--fluid .cds--text-input__field-wrapper--warning,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]{display:block}.cds--form--fluid input[data-invalid]{outline:none}.cds--form--fluid .cds--form-requirement{margin:0;padding:.5rem 2.5rem .5rem 1rem}input:not(output,[data-invalid]):-moz-ui-invalid{box-shadow:none}.cds--form-requirement html{font-size:100%}.cds--form-requirement body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--form-requirement code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--form-requirement strong{font-weight:600}.cds--form-requirement{display:none;font-size:var(--cds-helper-text-01-font-size,.75rem);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333);margin:.25rem 0 0;max-block-size:0;overflow:hidden}.cds--select--inline .cds--form__helper-text{margin-block-start:0}.cds--form__helper-text{color:var(--cds-text-helper,#6f6f6f);font-size:var(--cds-helper-text-01-font-size,.75rem);inline-size:100%;letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333);margin-block-start:.25rem;opacity:1;z-index:0}.cds--form__helper-text--disabled,.cds--label--disabled,fieldset[disabled] .cds--form__helper-text,fieldset[disabled] .cds--label{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}:host(cds-tile){--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}:host(cds-tile-group){background:transparent}:host(cds-tile-group) fieldset{border:none}:host(cds-clickable-tile){--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px;display:grid;outline:none}:host(cds-clickable-tile) .cds--link--disabled{background-color:var(--cds-layer);color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed;display:block;padding:density("padding-inline")}:host(cds-clickable-tile) .cds--tile,:host(cds-clickable-tile) :host(cds-expandable-tile),:host(cds-clickable-tile) :host(cds-tile){outline:.125rem solid transparent;padding:1rem}:host(cds-clickable-tile) .cds--tile--clickable{display:block;transition:.15s cubic-bezier(.2,0,.38,.9)}:host(cds-clickable-tile) .cds--tile--clickable:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(cds-clickable-tile) .cds--tile--clickable:focus{outline-style:dotted}}:host(cds-clickable-tile) .cds--link__icon{display:block}:host(cds-clickable-tile) ::slotted([slot=ai-label]),:host(cds-clickable-tile) ::slotted([slot=slug]){pointer-events:none}:host(cds-radio-tile){--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px;display:block;margin-block-end:.5rem;outline:none;position:relative}:host(cds-radio-tile) .cds--tile,:host(cds-radio-tile) :host(cds-expandable-tile),:host(cds-radio-tile) :host(cds-tile){block-size:100%}:host(cds-selectable-tile){--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px;display:block;outline:none;position:relative}:host(cds-selectable-tile) .cds--tile,:host(cds-selectable-tile) :host(cds-expandable-tile),:host(cds-selectable-tile) :host(cds-tile){block-size:100%}:host(cds-radio-tile) .cds--tile-input:checked~.cds--tile--selectable .cds--tile__checkmark,:host(cds-selectable-tile) .cds--tile-input:checked~.cds--tile--selectable .cds--tile__checkmark{opacity:1}:host(cds-clickable-tile) ::slotted(*),:host(cds-radio-tile) ::slotted(:not([slot])),:host(cds-selectable-tile) ::slotted(:not([slot])){cursor:pointer;position:relative;z-index:1}:host(cds-expandable-tile){--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}:host(cds-expandable-tile) ::slotted(cds-tile-above-the-fold-content){display:block}:host(cds-expandable-tile) .cds-ce--expandable-tile--below-the-fold-content{max-block-size:0;transition:max-height .11s cubic-bezier(.2,0,.38,.9)}:host(cds-expandable-tile[expanded]) ::slotted(cds-tile-below-the-fold-content){opacity:1;transition:.11s cubic-bezier(.2,0,.38,.9);visibility:visible}:host(cds-expandable-tile[with-interactive]){cursor:default;transition:max-height .15s cubic-bezier(.2,0,.38,.9)}:host(cds-expandable-tile[with-interactive]):hover{background-color:var(--cds-layer)}:host(cds-expandable-tile[with-interactive]):focus{outline:none}:host(cds-expandable-tile:not([with-interactive]):focus-within){outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){:host(cds-expandable-tile:not([with-interactive]):focus-within){outline-style:dotted}}:host(cds-expandable-tile:not([with-interactive])) .cds--tile__chevron{background:none;border:none;cursor:pointer;outline:none}:host(cds-clickable-tile[ai-label]) .cds--tile,:host(cds-clickable-tile[ai-label]) :host(cds-expandable-tile),:host(cds-clickable-tile[ai-label]) :host(cds-tile),:host(cds-expandable-tile[ai-label]),:host(cds-radio-tile[ai-label]) .cds--tile,:host(cds-radio-tile[ai-label]) :host(cds-expandable-tile),:host(cds-radio-tile[ai-label]) :host(cds-tile),:host(cds-selectable-tile[ai-label]) .cds--tile,:host(cds-selectable-tile[ai-label]) :host(cds-expandable-tile),:host(cds-selectable-tile[ai-label]) :host(cds-tile),:host(cds-tile[ai-label]){background:linear-gradient(to top,var(--cds-layer,var(--cds-ai-popover-background,#fff)) 0,var(--cds-ai-aura-start,rgba(69,137,255,.1)) 0,15%,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%) padding-box,linear-gradient(to top,var(--cds-layer,var(--cds-ai-popover-background,#fff)),var(--cds-layer,var(--cds-ai-popover-background,#fff))) padding-box,linear-gradient(to bottom,var(--cds-ai-border-start,rgba(166,200,255,.64)),var(--cds-ai-border-end,#78a9ff)) border-box,linear-gradient(to top,var(--cds-layer,var(--cds-ai-popover-background,#fff)),var(--cds-layer,var(--cds-ai-popover-background,#fff))) border-box;border:1px solid transparent;box-shadow:inset 0 -80px 70px -65px var(--cds-ai-inner-shadow,rgba(69,137,255,.1)),0 24px 40px -24px var(--cds-ai-drop-shadow,rgba(15,98,254,.1))}:host(cds-clickable-tile) ::slotted([slot=ai-label]),:host(cds-clickable-tile) ::slotted([slot=decorator]),:host(cds-clickable-tile) ::slotted([slot=slug]),:host(cds-expandable-tile) ::slotted([slot=ai-label]),:host(cds-expandable-tile) ::slotted([slot=decorator]),:host(cds-expandable-tile) ::slotted([slot=slug]),:host(cds-radio-tile) ::slotted([slot=ai-label]),:host(cds-radio-tile) ::slotted([slot=decorator]),:host(cds-radio-tile) ::slotted([slot=slug]),:host(cds-selectable-tile) ::slotted([slot=ai-label]),:host(cds-selectable-tile) ::slotted([slot=decorator]),:host(cds-selectable-tile) ::slotted([slot=slug]),:host(cds-tile) ::slotted([slot=ai-label]),:host(cds-tile) ::slotted([slot=decorator]),:host(cds-tile) ::slotted([slot=slug]){inset-block-start:1rem;inset-inline-end:1rem;position:absolute}:host(cds-radio-tile[selected]) ::slotted([slot=ai-label]),:host(cds-radio-tile[selected]) ::slotted([slot=decorator]),:host(cds-selectable-tile) ::slotted([slot=ai-label]),:host(cds-selectable-tile) ::slotted([slot=decorator]),:host(cds-selectable-tile) ::slotted([slot=slug]){inset-inline-end:2.5rem;transition:inset-inline-end .11s cubic-bezier(.2,0,.38,.9)}:host(cds-expandable-tile[ai-label]):hover{background:linear-gradient(to top,var(--cds-layer,var(--cds-ai-popover-background,#fff)) 0,var(--cds-ai-aura-start,rgba(69,137,255,.1)) 0,15%,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%) padding-box,linear-gradient(to top,var(--cds-layer,var(--cds-ai-popover-background,#fff)),var(--cds-layer,var(--cds-ai-popover-background,#fff))) padding-box,linear-gradient(to bottom,var(--cds-ai-border-start,rgba(166,200,255,.64)),var(--cds-ai-border-end,#78a9ff)) border-box,linear-gradient(to top,var(--cds-layer,var(--cds-ai-popover-background,#fff)),var(--cds-layer,var(--cds-ai-popover-background,#fff))) border-box}:host(cds-clickable-tile[ai-label]) .cds--tile:before,:host(cds-radio-tile[ai-label]) .cds--tile:after,:host(cds-radio-tile[ai-label]) .cds--tile:before,:host(cds-selectable-tile[ai-label]) .cds--tile:after,:host(cds-selectable-tile[ai-label]) .cds--tile:before{block-size:100%;content:"";display:block;inline-size:100%;inset-block-start:0;inset-inline-start:0;opacity:0;position:absolute;transition:opacity .11s cubic-bezier(.2,0,.38,.9)}:host(cds-clickable-tile[ai-label]) .cds--tile:before,:host(cds-radio-tile[ai-label]) .cds--tile:before,:host(cds-selectable-tile[ai-label]) .cds--tile:before{background:linear-gradient(to top,var(--cds-ai-aura-hover-start,rgba(69,137,255,.32)) 0,15%,var(--cds-ai-aura-hover-end,hsla(0,0%,100%,0)) 50%) padding-box,linear-gradient(to top,var(--cds-ai-aura-hover-background,#edf5ff),var(--cds-ai-aura-hover-background,#edf5ff)) padding-box,linear-gradient(to bottom,var(--cds-ai-border-start,rgba(166,200,255,.64)),var(--cds-ai-border-end,#78a9ff)) border-box,linear-gradient(to top,var(--cds-ai-aura-hover-background,#edf5ff),var(--cds-ai-aura-hover-background,#edf5ff)) border-box;box-shadow:inset 0 -80px 70px -65px var(--cds-ai-inner-shadow,rgba(69,137,255,.1))}:host(cds-clickable-tile[ai-label]) .cds--tile:hover:before,:host(cds-radio-tile[ai-label]) .cds--tile:hover:before,:host(cds-selectable-tile[ai-label]) .cds--tile:hover:before{opacity:1}:host(cds-radio-tile[ai-label]) .cds--tile--is-selected,:host(cds-selectable-tile[ai-label]) .cds--tile--is-selected{border:1px solid var(--cds-layer-selected-inverse,#161616)}:host(cds-radio-tile[ai-label]) .cds--tile--is-selected .cds--tile__checkmark,:host(cds-selectable-tile[ai-label]) .cds--tile--is-selected .cds--tile__checkmark{z-index:1}:host(cds-radio-tile[ai-label]),:host(cds-selectable-tile[ai-label]) .cds--tile--is-selected:after{background:linear-gradient(to top,var(--cds-ai-aura-start,rgba(69,137,255,.1)) 0,15%,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%) padding-box,linear-gradient(to top,var(--cds-layer),var(--cds-layer)) padding-box,linear-gradient(to bottom,var(--cds-border-inverse,#161616),var(--cds-border-inverse,#161616)) border-box,linear-gradient(to top,var(--cds-layer),var(--cds-layer)) border-box;box-shadow:inset 0 -80px 70px -65px var(--cds-ai-inner-shadow,rgba(69,137,255,.1))}:host(cds-expandable-tile[ai-label]){overflow:visible}:host(cds-clickable-tile[ai-label][has-rounded-corners]) .cds--tile__chevron,:host(cds-expandable-tile[ai-label][has-rounded-corners]) .cds--tile__chevron,:host(cds-radio-tile[ai-label][has-rounded-corners]) .cds--tile__chevron,:host(cds-selectable-tile[ai-label][has-rounded-corners]) .cds--tile__chevron,:host(cds-tile[ai-label][has-rounded-corners]) .cds--tile__chevron{border-end-end-radius:.5rem}']);

// node_modules/@carbon/icons/es/ai-label/24.js
var _24 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 24,
    "height": 24
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M19,21v-2h1v-7h-1v-2h4v2h-1v7h1v2h-4Z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M15.5005,21h2l-3.5005-11h-3l-3.4966,11h1.9988l.6018-2h4.7781l.6184,2ZM10.7058,17l1.6284-5.4111.2559-.0024,1.6736,5.4136h-3.5579Z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M32,32H0V0h32v32ZM2,30h28V2H2v28Z"
    }
  }],
  "name": "ai-label",
  "size": 24
};

// node_modules/@carbon/web-components/es/components/tile/clickable-tile.js
var CDSClickableTile = class CDSClickableTile2 extends CDSLink$1 {
  constructor() {
    super(...arguments);
    this.colorScheme = FORM_ELEMENT_COLOR_SCHEME.REGULAR;
    this.linkRole = "button";
    this.hasRoundedCorners = false;
    this.aiLabel = false;
    this.slug = false;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/carbon-design-system/carbon/issues/20452
  get _classes() {
    const { colorScheme, disabled, hasRoundedCorners, aiLabel, slug } = this;
    return e2({
      [`${prefix}--link`]: true,
      [`${prefix}--link--disabled`]: disabled,
      [`${prefix}--tile`]: true,
      [`${prefix}--tile--clickable`]: true,
      [`${prefix}--tile--${colorScheme}`]: colorScheme,
      [`${prefix}--tile--slug-rounded`]: (aiLabel || slug) && hasRoundedCorners
    });
  }
  /**
   * If using `slug`, set `ai-label` attribute to true so
   * the styles are applied for slug as well
   *
   * remove in v12
   */
  connectedCallback() {
    if (this.slug) {
      this.setAttribute("ai-Label", "");
      this.aiLabel = true;
    }
    super.connectedCallback();
  }
  /**
   * @returns The inner content.
   */
  _renderInner() {
    return b`
      ${super._renderInner()}
      ${this.aiLabel || this.slug ? iconLoader(_24, { class: `${prefix}--tile--ai-label-icon` }) : ""}
      <slot name="decorator"></slot>
    `;
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
CDSClickableTile.styles = styles;
__decorate([
  n({ attribute: "color-scheme", reflect: true })
], CDSClickableTile.prototype, "colorScheme", void 0);
__decorate([
  n({ attribute: "link-role" })
], CDSClickableTile.prototype, "linkRole", void 0);
__decorate([
  n({ type: Boolean, attribute: "has-rounded-corners" })
], CDSClickableTile.prototype, "hasRoundedCorners", void 0);
__decorate([
  n({ type: Boolean, attribute: "ai-label" })
], CDSClickableTile.prototype, "aiLabel", void 0);
__decorate([
  n({ type: Boolean })
], CDSClickableTile.prototype, "slug", void 0);
CDSClickableTile = __decorate([
  carbonElement(`${prefix}-clickable-tile`)
], CDSClickableTile);

// node_modules/@carbon/web-components/es/components/tile/expandable-tile.js
var CDSExpandableTile = class CDSExpandableTile2 extends HostListenerMixin(FocusMixin(i2)) {
  constructor() {
    super(...arguments);
    this._belowTheContentHeight = 0;
    this._hasAILabel = false;
    this._handleClick = () => {
      if (!this.withInteractive) {
        this._handleExpand();
      }
    };
    this.colorScheme = FORM_ELEMENT_COLOR_SCHEME.REGULAR;
    this.expanded = false;
    this.hasRoundedCorners = false;
    this.withInteractive = false;
  }
  /**
   * Handles `slotchange` event.
   */
  _handleSlotChange({ target }) {
    const hasContent = target.assignedNodes().filter((elem) => {
      var _a, _b;
      return elem.matches !== void 0 ? elem.matches((_a = this.constructor) === null || _a === void 0 ? void 0 : _a.aiLabelItem) || // remove reference of slug in v12
      elem.matches((_b = this.constructor) === null || _b === void 0 ? void 0 : _b.slugItem) : false;
    });
    if (hasContent.length > 0) {
      this._hasAILabel = Boolean(hasContent);
      hasContent[0].setAttribute("size", "xs");
    }
    this.requestUpdate?.();
  }
  /**
   * Handles `slotchange` event on the below-the-fold content.
   *
   * @param event The event.
   */
  _handleSlotChangeBelowTheFoldContent(event) {
    this._belowTheContentHeight = event.target.assignedNodes().reduce((acc, item) => {
      var _a;
      return acc + ((_a = item.offsetHeight) !== null && _a !== void 0 ? _a : 0);
    }, 0);
    if (!this._belowTheContentHeight) {
      const element = getComputedStyle(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/carbon-design-system/carbon/issues/20452
        this.querySelector("cds-tile-below-the-fold-content")
      );
      this._belowTheContentHeight = parseInt(element.height, 10);
    }
    this.requestUpdate?.();
  }
  _handleExpand() {
    const expanded = !this.expanded;
    this.focus();
    const init = {
      bubbles: true,
      composed: true,
      detail: {
        expanded
      }
    };
    const constructor = this.constructor;
    const beforeChangeEvent = new CustomEvent(constructor.eventBeforeToggle, Object.assign(Object.assign({}, init), { cancelable: true }));
    if (this.dispatchEvent(beforeChangeEvent)) {
      this.expanded = expanded;
      const afterChangeEvent = new CustomEvent(constructor.eventToggle, init);
      this.dispatchEvent(afterChangeEvent);
    }
  }
  updated() {
    if (this._hasAILabel) {
      this.setAttribute("ai-label", "");
    } else {
      this.removeAttribute("ai-label");
    }
  }
  render() {
    const { expanded, withInteractive, _belowTheContentHeight: belowTheContentHeight, _handleSlotChangeBelowTheFoldContent: handleSlotChangeBelowTheFoldContent } = this;
    const classes = e2({
      [`${prefix}--tile__chevron`]: true,
      [`${prefix}--tile__chevron--interactive`]: withInteractive
    });
    return b`
      <button
        class="${classes}"
        aria-labelledby="above-the-fold-content"
        aria-controls="below-the-fold-content"
        tabindex="0"
        @click="${withInteractive ? this._handleExpand : ""}"
        aria-expanded="${String(Boolean(expanded))}">
        ${iconLoader(_16, { id: "icon" })}
      </button>
      <slot name="ai-label" @slotchange="${this._handleSlotChange}"></slot>
      <slot name="slug" @slotchange="${this._handleSlotChange}"></slot>
      <slot name="decorator"></slot>
      <div id="content" class="${prefix}--tile-content">
        <div><slot name="above-the-fold-content"></slot></div>
        <div
          class="${prefix}-ce--expandable-tile--below-the-fold-content"
          style="${o(!expanded ? void 0 : `max-height: ${belowTheContentHeight}px`)}">
          <slot @slotchange="${handleSlotChangeBelowTheFoldContent}"></slot>
        </div>
      </div>
    `;
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
   * The name of the custom event fired before the expanded state is changed upon a user gesture.
   * Cancellation of this event stops changing the user-initiated change in expanded state.
   */
  static get eventBeforeToggle() {
    return `${prefix}-expandable-tile-beingtoggled`;
  }
  /**
   * The name of the custom event fired after a the expanded state is changed upon a user gesture.
   */
  static get eventToggle() {
    return `${prefix}-expandable-tile-toggled`;
  }
};
CDSExpandableTile.styles = styles;
__decorate([
  HostListener("click")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSExpandableTile.prototype, "_handleClick", void 0);
__decorate([
  n({ attribute: "color-scheme", reflect: true })
], CDSExpandableTile.prototype, "colorScheme", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSExpandableTile.prototype, "expanded", void 0);
__decorate([
  n({ type: Boolean, attribute: "has-rounded-corners" })
], CDSExpandableTile.prototype, "hasRoundedCorners", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "with-interactive" })
], CDSExpandableTile.prototype, "withInteractive", void 0);
CDSExpandableTile = __decorate([
  carbonElement(`${prefix}-expandable-tile`)
], CDSExpandableTile);

// node_modules/@carbon/icons/es/checkbox/16.js
var _163 = {
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
      "d": "M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM6,26V6H26V26Z"
    }
  }],
  "name": "checkbox",
  "size": 16
};

// node_modules/@carbon/icons/es/checkbox--checked--filled/16.js
var _164 = {
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
      "d": "M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM14,21.5,9,16.5427,10.5908,15,14,18.3456,21.4087,11l1.5918,1.5772Z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "fill": "none",
      "d": "M14,21.5,9,16.5427,10.5908,15,14,18.3456,21.4087,11l1.5918,1.5772Z",
      "data-icon-path": "inner-path"
    }
  }],
  "name": "checkbox--checked--filled",
  "size": 16
};

// node_modules/@carbon/web-components/es/components/tile/selectable-tile.js
var CDSSelectableTile = class CDSSelectableTile2 extends HostListenerMixin(FocusMixin(i2)) {
  constructor() {
    super(...arguments);
    this._inputType = "checkbox";
    this._hasAILabel = false;
    this._handleClick = () => {
      this.selected = !this.selected;
      const { eventChange } = this.constructor;
      this.dispatchEvent(new CustomEvent(eventChange, {
        bubbles: true,
        composed: true,
        detail: {
          selected: this.selected
        }
      }));
    };
    this._handleKeydown = (event) => {
      var _a, _b;
      const { key } = event;
      if ((key === " " || key === "Enter") && !((_a = event.target) === null || _a === void 0 ? void 0 : _a.matches(this.constructor.aiLabelItem)) && !((_b = event.target) === null || _b === void 0 ? void 0 : _b.matches(this.constructor.slugItem))) {
        this.selected = !this.selected;
      }
    };
    this.colorScheme = FORM_ELEMENT_COLOR_SCHEME.REGULAR;
    this.disabled = false;
    this.hasRoundedCorners = false;
    this.selected = false;
  }
  /**
   * Handles `slotchange` event.
   */
  _handleSlotChange({ target }) {
    const hasContent = target.assignedNodes().filter((elem) => {
      var _a, _b;
      return elem.matches !== void 0 ? elem.matches((_a = this.constructor) === null || _a === void 0 ? void 0 : _a.aiLabelItem) || // remove reference of slug in v12
      elem.matches((_b = this.constructor) === null || _b === void 0 ? void 0 : _b.slugItem) : false;
    });
    if (hasContent.length > 0) {
      this._hasAILabel = Boolean(hasContent);
      hasContent[0].setAttribute("size", "xs");
    }
    this.requestUpdate?.();
  }
  /**
   * Handles `change` event on the `<input>` in the shadow DOM.
   */
  _handleChange() {
    this.selected = this._inputNode.checked;
    const selected = this.selected;
    const { eventChange } = this.constructor;
    this.dispatchEvent(new CustomEvent(eventChange, {
      bubbles: true,
      composed: true,
      detail: {
        selected
      }
    }));
  }
  /**
   * Handles the rendering of the icon.
   */
  _renderIcon() {
    const { selected, checkmarkLabel } = this;
    return iconLoader(selected ? _164 : _163, {
      "aria-label": checkmarkLabel || void 0,
      class: `${prefix}--selectable-tile__icon`
    });
  }
  updated() {
    if (this._hasAILabel) {
      this.setAttribute("ai-label", "");
    } else {
      this.removeAttribute("ai-label");
    }
  }
  render() {
    const { colorScheme, disabled, hasRoundedCorners, name, selected, value, _handleChange: handleChange, _hasAILabel: hasAILabel } = this;
    const classes = e2({
      [`${prefix}--tile`]: true,
      [`${prefix}--tile--disabled`]: disabled,
      [`${prefix}--tile--selectable`]: true,
      [`${prefix}--tile--is-selected`]: selected,
      [`${prefix}--tile--${colorScheme}`]: colorScheme,
      [`${prefix}--tile--slug-rounded`]: hasAILabel && hasRoundedCorners
    });
    return b`
      <div
        class=${classes}
        role="checkbox"
        aria-checked=${selected}
        @change=${handleChange}
        tabindex=${!disabled ? 0 : void 0}
        name=${name}
        value=${value}
        @click=${!disabled ? this._handleClick : void 0}
        @keydown=${this._handleKeydown}>
        <span
          class="${prefix}--tile__checkmark ${prefix}--tile__checkmark--persistent">
          ${this._renderIcon()}
        </span>
        <label class="${prefix}--tile-content">
          <slot></slot>
        </label>
        <slot name="decorator"></slot>
        <slot name="ai-label" @slotchange="${this._handleSlotChange}"></slot>
        <slot name="slug" @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `;
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
   * The name of the custom event fired after this selectable tile changes its selected state.
   */
  static get eventChange() {
    return `${prefix}-selectable-tile-changed`;
  }
};
CDSSelectableTile.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSSelectableTile.styles = styles;
__decorate([
  e("input")
], CDSSelectableTile.prototype, "_inputNode", void 0);
__decorate([
  n({ attribute: "checkmark-label" })
], CDSSelectableTile.prototype, "checkmarkLabel", void 0);
__decorate([
  n({ attribute: "color-scheme", reflect: true })
], CDSSelectableTile.prototype, "colorScheme", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSelectableTile.prototype, "disabled", void 0);
__decorate([
  n({ type: Boolean, attribute: "has-rounded-corners" })
], CDSSelectableTile.prototype, "hasRoundedCorners", void 0);
__decorate([
  n()
], CDSSelectableTile.prototype, "name", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSelectableTile.prototype, "selected", void 0);
__decorate([
  n()
], CDSSelectableTile.prototype, "value", void 0);
CDSSelectableTile = __decorate([
  carbonElement(`${prefix}-selectable-tile`)
], CDSSelectableTile);
var SelectableTile = CDSSelectableTile;

// node_modules/@carbon/web-components/es/components/tile/radio-tile.js
var CDSRadioTile = class CDSRadioTile2 extends SelectableTile {
  constructor() {
    super(...arguments);
    this._handleKeydown = (event) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
      }
    };
  }
  /**
   * Handles `change` event on the `<input>` in the shadow DOM.
   */
  _handleChange() {
    this.selected = true;
    const { selected, name } = this;
    const { eventRadioChange } = this.constructor;
    this.dispatchEvent(new CustomEvent(eventRadioChange, {
      bubbles: true,
      composed: true,
      detail: {
        selected,
        name
      }
    }));
  }
  render() {
    const { colorScheme, checkmarkLabel, disabled, hasRoundedCorners, name, selected, value, _handleChange: handleChange, _handleKeydown: handleKeydown, _hasAILabel: hasAILabel } = this;
    const classes = e2({
      [`${prefix}--tile`]: true,
      [`${prefix}--tile--selectable`]: true,
      [`${prefix}--tile--radio`]: true,
      [`${prefix}--tile--disabled`]: disabled,
      [`${prefix}--tile--is-selected`]: selected,
      [`${prefix}--tile--${colorScheme}`]: colorScheme,
      [`${prefix}--tile--slug-rounded`]: hasAILabel && hasRoundedCorners
    });
    return b`
      <input
        type="radio"
        id="input"
        class="${prefix}--tile-input"
        ?disabled="${disabled}"
        tabindex="${selected ? 0 : -1}"
        name="${o(name)}"
        value="${o(value)}"
        .checked=${selected}
        @change=${!disabled ? handleChange : void 0}
        @keydown="${!disabled ? handleKeydown : void 0}" />
      <label part="label" for="input" class="${classes}">
        ${iconLoader(_162, {
      class: `${prefix}--tile__checkmark`,
      title: checkmarkLabel
    })}
        <div class="${prefix}--tile-content"><slot></slot></div>
      </label>
      <slot name="decorator"></slot>
      <slot name="ai-label" @slotchange="${this._handleSlotChange}"></slot>
    `;
  }
  /**
   * The name of the custom event fired after this selectable tile changes its selected state.
   */
  static get eventRadioChange() {
    return `${prefix}-radio-tile-selected`;
  }
};
CDSRadioTile = __decorate([
  carbonElement(`${prefix}-radio-tile`)
], CDSRadioTile);

// node_modules/@carbon/web-components/es/components/tile/tile.js
var CDSTile = class CDSTile2 extends i2 {
  constructor() {
    super(...arguments);
    this._hasAILabel = false;
    this.colorScheme = FORM_ELEMENT_COLOR_SCHEME.REGULAR;
    this.hasRoundedCorners = false;
  }
  /**
   * Handles `slotchange` event.
   */
  _handleSlotChange({ target }) {
    const hasContent = target.assignedNodes().filter((elem) => elem.matches !== void 0 ? elem.matches(this.constructor.aiLabelItem) || // remove reference of slug in v12
    elem.matches(this.constructor.slugItem) : false);
    if (hasContent.length > 0) {
      this._hasAILabel = Boolean(hasContent);
      hasContent[0].setAttribute("size", "xs");
    }
    this.requestUpdate?.();
  }
  updated() {
    if (this._hasAILabel) {
      this.setAttribute("ai-label", "");
    } else {
      this.removeAttribute("ai-label");
    }
  }
  render() {
    return b` <slot></slot
      ><slot name="decorator" @slotchange="${this._handleSlotChange}"></slot>
      <slot name="ai-label" @slotchange="${this._handleSlotChange}"></slot
      ><slot name="slug" @slotchange="${this._handleSlotChange}"></slot>`;
  }
  /**
   * A selector that will return the slug item.
   *
   * TODO: remove in v12
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
CDSTile.styles = styles;
__decorate([
  n({ attribute: "color-scheme", reflect: true })
], CDSTile.prototype, "colorScheme", void 0);
__decorate([
  n({ type: Boolean, attribute: "has-rounded-corners" })
], CDSTile.prototype, "hasRoundedCorners", void 0);
CDSTile = __decorate([
  carbonElement(`${prefix}-tile`)
], CDSTile);

// node_modules/@carbon/web-components/es/components/tile/tile-group.js
var navigationDirectionForKey = {
  ArrowUp: NAVIGATION_DIRECTION.BACKWARD,
  Up: NAVIGATION_DIRECTION.BACKWARD,
  // IE
  ArrowLeft: NAVIGATION_DIRECTION.BACKWARD,
  Left: NAVIGATION_DIRECTION.BACKWARD,
  // IE
  ArrowDown: NAVIGATION_DIRECTION.FORWARD,
  Down: NAVIGATION_DIRECTION.FORWARD,
  // IE
  ArrowRight: NAVIGATION_DIRECTION.FORWARD,
  Right: NAVIGATION_DIRECTION.FORWARD
  // IE
};
var CDSTileGroup = class CDSTileGroup2 extends HostListenerMixin(i2) {
  constructor() {
    super(...arguments);
    this._handleKeydown = (event) => {
      const { target, key } = event;
      const { radioTiles, selectableTiles } = this;
      const navigationDirection = navigationDirectionForKey[key];
      if (target === null || target === void 0 ? void 0 : target.matches(`${prefix}-ai-label`)) {
        return;
      }
      const tiles = radioTiles.length ? radioTiles : selectableTiles;
      const currentIndex = [...tiles].findIndex((e3) => e3 == target);
      const nextIndex = currentIndex + navigationDirection;
      const nextSibling = nextIndex !== -1 ? tiles[nextIndex % tiles.length] : tiles[tiles.length - 1];
      if (navigationDirection) {
        event.preventDefault();
        if (this.radioTiles.length) {
          this._handleKeydownRadio(nextSibling);
        } else {
          this._handleKeydownSelectable(event, nextSibling);
        }
      } else if (key === " " || key === "Enter") {
        this._handleKeydownSelectable(event);
      }
    };
    this._handleFocus = (event) => {
      const { relatedTarget, target } = event;
      if (target === null || target === void 0 ? void 0 : target.matches(`${prefix}-ai-label`)) {
        return;
      }
      if (this.radioTiles.length) {
        if (!this.currentRadioSelection) {
          target.toggleAttribute("selected");
          this.currentRadioSelection = target;
        } else if (!(relatedTarget === null || relatedTarget === void 0 ? void 0 : relatedTarget.matches(this.constructor.selectorRadioTile)) && target !== this.currentRadioSelection) {
          this.currentRadioSelection.focus();
        }
      }
    };
    this.currentSelections = [];
  }
  _handleRadioClick(event) {
    const { target } = event;
    const { currentRadioSelection } = this;
    const { eventCurrentRadioTileSelection } = this.constructor;
    if (target.matches(`${prefix}-ai-label`)) {
      return;
    }
    if (!currentRadioSelection) {
      this.currentRadioSelection = target;
    } else if (currentRadioSelection !== target) {
      currentRadioSelection.toggleAttribute("selected");
      this.currentRadioSelection = target;
    }
    this.dispatchEvent(new CustomEvent(eventCurrentRadioTileSelection, {
      bubbles: true,
      composed: true,
      detail: {
        target
      }
    }));
  }
  /**
   * Click listener to ensure selectability.
   *
   * @param event click
   */
  _handleTileSelect(event) {
    if (this.radioTiles.length) {
      this._handleRadioClick(event);
    }
  }
  /**
   * Handle keyboard navigation for radio tiles
   *
   * @param nextSibling to focus on
   */
  _handleKeydownRadio(nextSibling) {
    const { currentRadioSelection } = this;
    const { eventCurrentRadioTileSelection } = this.constructor;
    if (currentRadioSelection) {
      currentRadioSelection.toggleAttribute("selected");
    }
    nextSibling.focus();
    nextSibling.toggleAttribute("selected");
    this.currentRadioSelection = nextSibling;
    this.dispatchEvent(new CustomEvent(eventCurrentRadioTileSelection, {
      bubbles: true,
      composed: true,
      detail: {
        nextSibling
      }
    }));
  }
  /**
   * Handle keyboard navigation for selectable tiles
   *
   * @param event to get target
   * @param nextSibling to focus on
   */
  _handleKeydownSelectable(event, nextSibling) {
    const { target } = event;
    const { currentSelections } = this;
    const { eventCurrentSelectableTilesSelection } = this.constructor;
    if (nextSibling) {
      nextSibling.focus();
    } else {
      if (!currentSelections.includes(target)) {
        currentSelections.push(target);
      } else {
        currentSelections.splice(currentSelections.indexOf(target), 1);
      }
      this.dispatchEvent(new CustomEvent(eventCurrentSelectableTilesSelection, {
        bubbles: true,
        composed: true,
        detail: {
          currentSelections
        }
      }));
    }
  }
  firstUpdated() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "group");
    }
    if (!this.radioTiles) {
      this.radioTiles = this.querySelectorAll(this.constructor.selectorRadioTile);
      this.radioTiles.forEach((tile) => {
        if (tile.selected) {
          this.currentRadioSelection = tile;
        }
      });
    }
    if (!this.selectableTiles) {
      this.selectableTiles = this.querySelectorAll(this.constructor.selectorSelectableTile);
    }
    if (this.disabled) {
      this.radioTiles.forEach((e3) => e3.toggleAttribute("disabled"));
      this.selectableTiles.forEach((e3) => e3.toggleAttribute("disabled"));
    }
  }
  render() {
    const { fieldsetClassName, disabled } = this;
    return b`
      <fieldset class="${fieldsetClassName}" ?disabled=${disabled}>
        <slot name="legend" class="${prefix}--label"></slot>
        <slot></slot>
      </fieldset>
    `;
  }
  /**
   * A selector that selects a radio tile component.
   */
  static get selectorRadioTile() {
    return `${prefix}-radio-tile`;
  }
  /**
   * A selector that selects a selectable tile component.
   */
  static get selectorSelectableTile() {
    return `${prefix}-selectable-tile`;
  }
  /**
   * The name of the custom event fired after a radio tile changes its selected state.
   */
  static get eventCurrentRadioTileSelection() {
    return `${prefix}-current-radio-tile-selection`;
  }
  /**
   * The name of the custom event fired after a radio tile changes its selected state.
   */
  static get eventCurrentSelectableTilesSelection() {
    return `${prefix}-current-selectable-tile-selections`;
  }
};
CDSTileGroup.styles = styles;
__decorate([
  HostListener("click")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
], CDSTileGroup.prototype, "_handleTileSelect", null);
__decorate([
  HostListener("keydown")
  // @ts-expect-error: The decorator refers to this method but TS thinks this method is not referred to
], CDSTileGroup.prototype, "_handleKeydown", void 0);
__decorate([
  HostListener("focusin")
  // @ts-expect-error: The decorator refers to this method but TS thinks this method is not referred to
], CDSTileGroup.prototype, "_handleFocus", void 0);
__decorate([
  n({ reflect: true, attribute: "fieldset-class-name" })
], CDSTileGroup.prototype, "fieldsetClassName", void 0);
__decorate([
  n({ reflect: true, type: Boolean })
], CDSTileGroup.prototype, "disabled", void 0);
__decorate([
  n()
], CDSTileGroup.prototype, "currentRadioSelection", void 0);
__decorate([
  n()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/carbon-design-system/carbon/issues/20452
], CDSTileGroup.prototype, "currentSelections", void 0);
__decorate([
  n()
], CDSTileGroup.prototype, "radioTiles", void 0);
__decorate([
  n()
], CDSTileGroup.prototype, "selectableTiles", void 0);
CDSTileGroup = __decorate([
  carbonElement(`${prefix}-tile-group`)
], CDSTileGroup);
