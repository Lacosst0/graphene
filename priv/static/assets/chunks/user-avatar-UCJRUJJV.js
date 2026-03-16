import {
  carbonPrefix,
  prefix
} from "./chunk-6BPMK2Y2.js";
import "./chunk-SO7P7U55.js";
import "./chunk-LSZ2PVLU.js";
import "./chunk-X7WRA7XG.js";
import "./chunk-HFGTZQQE.js";
import "./chunk-DFLJB7UB.js";
import "./chunk-GPZZH3QI.js";
import "./chunk-IGHLRMAE.js";
import "./chunk-5HWAKYGL.js";
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
  n
} from "./chunk-V6ENGPT2.js";
import "./chunk-ITCMO2MJ.js";
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

// node_modules/@carbon/ibm-products-web-components/es/components/user-avatar/user-avatar.scss.js
var styles = i(['a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font:inherit;font-feature-settings:"liga" 1;font-size:100%;margin:0;padding:0;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background,#fff);color:var(--cds-text-primary,#161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}html{font-size:100%}body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size,2.625rem);font-weight:var(--cds-heading-06-font-weight,300);letter-spacing:var(--cds-heading-06-letter-spacing,0);line-height:var(--cds-heading-06-line-height,1.199)}h2{font-size:var(--cds-heading-05-font-size,2rem);font-weight:var(--cds-heading-05-font-weight,400);letter-spacing:var(--cds-heading-05-letter-spacing,0);line-height:var(--cds-heading-05-line-height,1.25)}h3{font-size:var(--cds-heading-04-font-size,1.75rem);font-weight:var(--cds-heading-04-font-weight,400);letter-spacing:var(--cds-heading-04-letter-spacing,0);line-height:var(--cds-heading-04-line-height,1.28572)}h4{font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4)}h5{font-size:var(--cds-heading-02-font-size,1rem);font-weight:var(--cds-heading-02-font-weight,600);letter-spacing:var(--cds-heading-02-letter-spacing,0);line-height:var(--cds-heading-02-line-height,1.5)}h6{font-size:var(--cds-heading-01-font-size,.875rem);font-weight:var(--cds-heading-01-font-weight,600);letter-spacing:var(--cds-heading-01-letter-spacing,.16px);line-height:var(--cds-heading-01-line-height,1.42857)}p{font-size:var(--cds-body-02-font-size,1rem);font-weight:var(--cds-body-02-font-weight,400);letter-spacing:var(--cds-body-02-letter-spacing,0);line-height:var(--cds-body-02-line-height,1.5)}a{color:var(--cds-link-primary,#0062fe)}em{font-style:italic}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--assistive-text,.cds--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.c4p--user-avatar{align-items:center;block-size:4rem;border:.5px solid transparent;border-radius:100%;color:var(--cds-text-inverse,#fff);display:flex;inline-size:4rem;justify-content:center;outline:none;outline-offset:3px;position:relative}.c4p--user-avatar svg{color:var(--cds-icon-inverse,#fff)}.c4p--user-avatar__tooltip:focus-within .c4p--user-avatar{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:1px}.cds--g10 .c4p--user-avatar--order-1-cyan,.cds--white .c4p--user-avatar--order-1-cyan,:root .c4p--user-avatar--order-1-cyan{background-color:#0072c3}.cds--g10 .c4p--user-avatar--order-2-gray,.cds--white .c4p--user-avatar--order-2-gray,:root .c4p--user-avatar--order-2-gray{background-color:#6f6f6f}.cds--g10 .c4p--user-avatar--order-3-green,.cds--white .c4p--user-avatar--order-3-green,:root .c4p--user-avatar--order-3-green{background-color:#198038}.cds--g10 .c4p--user-avatar--order-4-magenta,.cds--white .c4p--user-avatar--order-4-magenta,:root .c4p--user-avatar--order-4-magenta{background-color:#d02670}.cds--g10 .c4p--user-avatar--order-5-purple,.cds--white .c4p--user-avatar--order-5-purple,:root .c4p--user-avatar--order-5-purple{background-color:#8a3ffc}.cds--g10 .c4p--user-avatar--order-6-teal,.cds--white .c4p--user-avatar--order-6-teal,:root .c4p--user-avatar--order-6-teal{background-color:#007d79}.cds--g10 .c4p--user-avatar--order-7-cyan,.cds--white .c4p--user-avatar--order-7-cyan,:root .c4p--user-avatar--order-7-cyan{background-color:#003a6d}.cds--g10 .c4p--user-avatar--order-8-gray,.cds--white .c4p--user-avatar--order-8-gray,:root .c4p--user-avatar--order-8-gray{background-color:#393939}.cds--g10 .c4p--user-avatar--order-9-green,.cds--white .c4p--user-avatar--order-9-green,:root .c4p--user-avatar--order-9-green{background-color:#044317}.cds--g10 .c4p--user-avatar--order-10-magenta,.cds--white .c4p--user-avatar--order-10-magenta,:root .c4p--user-avatar--order-10-magenta{background-color:#740937}.cds--g10 .c4p--user-avatar--order-11-purple,.cds--white .c4p--user-avatar--order-11-purple,:root .c4p--user-avatar--order-11-purple{background-color:#491d8b}.cds--g10 .c4p--user-avatar--order-12-teal,.cds--white .c4p--user-avatar--order-12-teal,:root .c4p--user-avatar--order-12-teal{background-color:#004144}.cds--g100 .c4p--user-avatar--order-1-cyan,.cds--g90 .c4p--user-avatar--order-1-cyan{background-color:#1192e8}.cds--g100 .c4p--user-avatar--order-2-gray,.cds--g90 .c4p--user-avatar--order-2-gray{background-color:#8d8d8d}.cds--g100 .c4p--user-avatar--order-3-green,.cds--g90 .c4p--user-avatar--order-3-green{background-color:#24a148}.cds--g100 .c4p--user-avatar--order-4-magenta,.cds--g90 .c4p--user-avatar--order-4-magenta{background-color:#ee5396}.cds--g100 .c4p--user-avatar--order-5-purple,.cds--g90 .c4p--user-avatar--order-5-purple{background-color:#a56eff}.cds--g100 .c4p--user-avatar--order-6-teal,.cds--g90 .c4p--user-avatar--order-6-teal{background-color:#009d9a}.cds--g100 .c4p--user-avatar--order-7-cyan,.cds--g90 .c4p--user-avatar--order-7-cyan{background-color:#82cfff}.cds--g100 .c4p--user-avatar--order-8-gray,.cds--g90 .c4p--user-avatar--order-8-gray{background-color:#c6c6c6}.cds--g100 .c4p--user-avatar--order-9-green,.cds--g90 .c4p--user-avatar--order-9-green{background-color:#6fdc8c}.cds--g100 .c4p--user-avatar--order-10-magenta,.cds--g90 .c4p--user-avatar--order-10-magenta{background-color:#ffafd2}.cds--g100 .c4p--user-avatar--order-11-purple,.cds--g90 .c4p--user-avatar--order-11-purple{background-color:#d4bbff}.cds--g100 .c4p--user-avatar--order-12-teal,.cds--g90 .c4p--user-avatar--order-12-teal{background-color:#3ddbd9}.c4p--user-avatar--xl{block-size:4rem;font-size:var(--cds-heading-04-font-size,1.75rem);font-weight:var(--cds-heading-04-font-weight,400);inline-size:4rem;letter-spacing:var(--cds-heading-04-letter-spacing,0);line-height:var(--cds-heading-04-line-height,1.28572)}.c4p--user-avatar--lg{block-size:3rem;font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);inline-size:3rem;letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4)}.c4p--user-avatar--md{block-size:2rem;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);inline-size:2rem;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.c4p--user-avatar--sm{block-size:1.5rem;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);inline-size:1.5rem;letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}.c4p--user-avatar__photo{border-radius:100%;-o-object-fit:contain;object-fit:contain}.c4p--user-avatar__photo--xl{block-size:4rem;border-radius:100%;inline-size:4rem;-o-object-fit:fill;object-fit:fill}.c4p--user-avatar__photo--lg{block-size:3rem;border-radius:100%;inline-size:3rem;-o-object-fit:fill;object-fit:fill}.c4p--user-avatar__photo--md{block-size:2rem;border-radius:100%;inline-size:2rem;-o-object-fit:fill;object-fit:fill}.c4p--user-avatar__photo--sm{block-size:1.5rem;border-radius:100%;inline-size:1.5rem;-o-object-fit:fill;object-fit:fill}:host(c4p-user-avatar){display:inline-block}:host(c4p-user-avatar) .c4p--user-avatar{box-sizing:border-box}:host(c4p-user-avatar) .c4p--user-avatar--xl ::slotted([slot=rendericon]){block-size:2rem;inline-size:2rem}:host(c4p-user-avatar) .c4p--user-avatar--lg ::slotted([slot=rendericon]){block-size:1.5rem;inline-size:1.5rem}:host(c4p-user-avatar) .c4p--user-avatar--md ::slotted([slot=rendericon]){block-size:1.25rem;inline-size:1.25rem}:host(c4p-user-avatar) .c4p--user-avatar--sm ::slotted([slot=rendericon]){block-size:1rem;inline-size:1rem}:host(c4p-user-avatar) .c4p--user-avatar__tooltip-trigger{background:none;border:0;outline:none;padding:0}:host(c4p-user-avatar) .c4p--user-avatar__tooltip-content{--cds-tooltip-padding-block:0.125rem}:host(c4p-user-avatar) .c4p--user-avatar__tooltip-content:focus-within{outline:.125rem solid var(--cds-focus,#0f62fe);outline-offset:1px}:host(c4p-user-avatar) .c4p--user-avatar--order-1-cyan,:host(c4p-user-avatar[theme=light]) .c4p--user-avatar--order-1-cyan{background-color:#0072c3}:host(c4p-user-avatar) .c4p--user-avatar--order-2-gray,:host(c4p-user-avatar[theme=light]) .c4p--user-avatar--order-2-gray{background-color:#6f6f6f}:host(c4p-user-avatar) .c4p--user-avatar--order-3-green,:host(c4p-user-avatar[theme=light]) .c4p--user-avatar--order-3-green{background-color:#198038}:host(c4p-user-avatar) .c4p--user-avatar--order-4-magenta,:host(c4p-user-avatar[theme=light]) .c4p--user-avatar--order-4-magenta{background-color:#d02670}:host(c4p-user-avatar) .c4p--user-avatar--order-5-purple,:host(c4p-user-avatar[theme=light]) .c4p--user-avatar--order-5-purple{background-color:#8a3ffc}:host(c4p-user-avatar) .c4p--user-avatar--order-6-teal,:host(c4p-user-avatar[theme=light]) .c4p--user-avatar--order-6-teal{background-color:#007d79}:host(c4p-user-avatar) .c4p--user-avatar--order-7-cyan,:host(c4p-user-avatar[theme=light]) .c4p--user-avatar--order-7-cyan{background-color:#003a6d}:host(c4p-user-avatar) .c4p--user-avatar--order-8-gray,:host(c4p-user-avatar[theme=light]) .c4p--user-avatar--order-8-gray{background-color:#393939}:host(c4p-user-avatar) .c4p--user-avatar--order-9-green,:host(c4p-user-avatar[theme=light]) .c4p--user-avatar--order-9-green{background-color:#044317}:host(c4p-user-avatar) .c4p--user-avatar--order-10-magenta,:host(c4p-user-avatar[theme=light]) .c4p--user-avatar--order-10-magenta{background-color:#740937}:host(c4p-user-avatar) .c4p--user-avatar--order-11-purple,:host(c4p-user-avatar[theme=light]) .c4p--user-avatar--order-11-purple{background-color:#491d8b}:host(c4p-user-avatar) .c4p--user-avatar--order-12-teal,:host(c4p-user-avatar[theme=light]) .c4p--user-avatar--order-12-teal{background-color:#004144}:host(c4p-user-avatar[theme=dark]) .c4p--user-avatar--order-1-cyan{background-color:#1192e8}:host(c4p-user-avatar[theme=dark]) .c4p--user-avatar--order-2-gray{background-color:#8d8d8d}:host(c4p-user-avatar[theme=dark]) .c4p--user-avatar--order-3-green{background-color:#24a148}:host(c4p-user-avatar[theme=dark]) .c4p--user-avatar--order-4-magenta{background-color:#ee5396}:host(c4p-user-avatar[theme=dark]) .c4p--user-avatar--order-5-purple{background-color:#a56eff}:host(c4p-user-avatar[theme=dark]) .c4p--user-avatar--order-6-teal{background-color:#009d9a}:host(c4p-user-avatar[theme=dark]) .c4p--user-avatar--order-7-cyan{background-color:#82cfff}:host(c4p-user-avatar[theme=dark]) .c4p--user-avatar--order-8-gray{background-color:#c6c6c6}:host(c4p-user-avatar[theme=dark]) .c4p--user-avatar--order-9-green{background-color:#6fdc8c}:host(c4p-user-avatar[theme=dark]) .c4p--user-avatar--order-10-magenta{background-color:#ffafd2}:host(c4p-user-avatar[theme=dark]) .c4p--user-avatar--order-11-purple{background-color:#d4bbff}:host(c4p-user-avatar[theme=dark]) .c4p--user-avatar--order-12-teal{background-color:#3ddbd9}']);

// node_modules/@carbon/icons/es/user/16.js
var _16 = {
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
      "d": "M8,2c1.4,0,2.5,1.1,2.5,2.5S9.4,7,8,7S5.5,5.9,5.5,4.5S6.6,2,8,2 M8,1C6.1,1,4.5,2.6,4.5,4.5S6.1,8,8,8s3.5-1.6,3.5-3.5	S9.9,1,8,1z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M13,15h-1v-2.5c0-1.4-1.1-2.5-2.5-2.5h-3C5.1,10,4,11.1,4,12.5V15H3v-2.5C3,10.6,4.6,9,6.5,9h3c1.9,0,3.5,1.6,3.5,3.5V15z"
    }
  }],
  "name": "user",
  "size": 16
};

// node_modules/@carbon/ibm-products-web-components/es/components/user-avatar/user-avatar.js
var blockClass = `${prefix}--user-avatar`;
var CDSUseravatar = class CDSUseravatar2 extends HostListenerMixin(i2) {
  constructor() {
    super(...arguments);
    this.tooltipAlignment = "bottom";
    this.backgroundColor = "order-1-cyan";
  }
  render() {
    const getItem = () => {
      var _a;
      if (this.image) {
        const imageClasses = e({
          [`${blockClass}__photo`]: true,
          [`${blockClass}__photo--${this.size}`]: this.size
        });
        return b` <img
          alt="${this.imageDescription}"
          src="${this.image}"
          class="${imageClasses}"
        />`;
      }
      if (this.querySelector('[slot="rendericon"]')) {
        return b`<slot name="rendericon"></slot>`;
      }
      if (this.name) {
        const parts = ((_a = this.name) === null || _a === void 0 ? void 0 : _a.split(" ")) || [];
        const firstChar = parts[0].charAt(0).toUpperCase();
        const secondChar = parts[0].charAt(1).toUpperCase();
        if (parts.length === 1) {
          return firstChar + secondChar;
        }
        const lastChar = parts[parts.length - 1].charAt(0).toUpperCase();
        const initials = [firstChar];
        if (lastChar) {
          initials.push(lastChar);
        }
        return "".concat(...initials);
      }
      return b`${iconLoader(_16, { slot: "rendericon" })} `;
    };
    const { tooltipText, tooltipAlignment, size, backgroundColor, theme } = this;
    const classes = e({
      [`${blockClass}`]: true,
      [`${blockClass}--${size}`]: size,
      [`${blockClass}--${backgroundColor}`]: backgroundColor,
      [`${blockClass}--${theme}`]: theme
    });
    const Avatar = () => b`<div class="${classes}">${getItem()}</div>`;
    if (tooltipText) {
      return b`<cds-tooltip
        align=${tooltipAlignment}
        aria-label=${tooltipText}
        class=${`${blockClass}__tooltip ${carbonPrefix}--icon-tooltip`}
      >
        <button class=${`${blockClass}__tooltip-trigger`} role="button">
          ${Avatar()}
        </button>
        <cds-tooltip-content
          class=${`${blockClass}__tooltip-content`}
          id="content"
        >
          ${tooltipText}
        </cds-tooltip-content>
      </cds-tooltip>`;
    } else {
      return b` ${Avatar()}`;
    }
  }
};
CDSUseravatar.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSUseravatar.styles = styles;
__decorate([
  n({ reflect: true, attribute: "tooltip-text" })
], CDSUseravatar.prototype, "tooltipText", void 0);
__decorate([
  n({ reflect: true, attribute: "tooltip-alignment" })
], CDSUseravatar.prototype, "tooltipAlignment", void 0);
__decorate([
  n({ reflect: true })
], CDSUseravatar.prototype, "name", void 0);
__decorate([
  n({ reflect: true })
], CDSUseravatar.prototype, "size", void 0);
__decorate([
  n({ reflect: true })
], CDSUseravatar.prototype, "image", void 0);
__decorate([
  n({ reflect: true, attribute: "image-description" })
], CDSUseravatar.prototype, "imageDescription", void 0);
__decorate([
  n({ reflect: true, attribute: "background-color" })
], CDSUseravatar.prototype, "backgroundColor", void 0);
__decorate([
  n({ reflect: true })
], CDSUseravatar.prototype, "theme", void 0);
CDSUseravatar = __decorate([
  carbonElement(`${prefix}-user-avatar`)
], CDSUseravatar);
/*! Bundled license information:

@carbon/ibm-products-web-components/es/components/user-avatar/user-avatar.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025, 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
