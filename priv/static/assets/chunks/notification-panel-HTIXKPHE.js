import {
  r as r2
} from "./chunk-PCEFZCKH.js";
import "./chunk-C7OVQX7D.js";
import "./chunk-ZWCJ76NN.js";
import {
  getSupportedLocale
} from "./chunk-UHR5ZQGV.js";
import {
  prefix
} from "./chunk-6BPMK2Y2.js";
import "./chunk-5KAZEYVJ.js";
import "./chunk-MFEZKDN2.js";
import {
  _16 as _164
} from "./chunk-WCCOZML7.js";
import "./chunk-KQC2PJHA.js";
import "./chunk-K2SMH2Z3.js";
import "./chunk-MNFEJBUN.js";
import {
  _16 as _162
} from "./chunk-BVJDLJUP.js";
import "./chunk-357XJSHN.js";
import {
  _16 as _163
} from "./chunk-HPDZLYLI.js";
import "./chunk-F6EIPXKQ.js";
import "./chunk-LSZ2PVLU.js";
import "./chunk-X7WRA7XG.js";
import "./chunk-HFGTZQQE.js";
import "./chunk-SMM5AFXN.js";
import "./chunk-MU62I7LL.js";
import {
  c,
  e as e3,
  n as n2
} from "./chunk-CQL5YJQZ.js";
import {
  _16
} from "./chunk-YGK4BVA2.js";
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
import {
  iconLoader
} from "./chunk-TRPNDHDH.js";
import "./chunk-LDCWSK5M.js";
import "./chunk-TEMKX2NW.js";
import "./chunk-WPLJTCHR.js";
import "./chunk-DAFPBEYU.js";
import "./chunk-73FE5HOG.js";
import {
  e as e2
} from "./chunk-YOLTZNLE.js";
import "./chunk-M2VBID3H.js";
import {
  e,
  n,
  o,
  r,
  t
} from "./chunk-V6ENGPT2.js";
import {
  selectorTabbable
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

// node_modules/@carbon/ibm-products-web-components/es/components/notification-panel/notification-panel.scss.js
var styles = i(['a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font:inherit;font-feature-settings:"liga" 1;font-size:100%;margin:0;padding:0;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background,#fff);color:var(--cds-text-primary,#161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}html{font-size:100%}body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size,2.625rem);font-weight:var(--cds-heading-06-font-weight,300);letter-spacing:var(--cds-heading-06-letter-spacing,0);line-height:var(--cds-heading-06-line-height,1.199)}h2{font-size:var(--cds-heading-05-font-size,2rem);font-weight:var(--cds-heading-05-font-weight,400);letter-spacing:var(--cds-heading-05-letter-spacing,0);line-height:var(--cds-heading-05-line-height,1.25)}h3{font-size:var(--cds-heading-04-font-size,1.75rem);font-weight:var(--cds-heading-04-font-weight,400);letter-spacing:var(--cds-heading-04-letter-spacing,0);line-height:var(--cds-heading-04-line-height,1.28572)}h4{font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4)}h5{font-size:var(--cds-heading-02-font-size,1rem);font-weight:var(--cds-heading-02-font-weight,600);letter-spacing:var(--cds-heading-02-letter-spacing,0);line-height:var(--cds-heading-02-line-height,1.5)}h6{font-size:var(--cds-heading-01-font-size,.875rem);font-weight:var(--cds-heading-01-font-weight,600);letter-spacing:var(--cds-heading-01-letter-spacing,.16px);line-height:var(--cds-heading-01-line-height,1.42857)}p{font-size:var(--cds-body-02-font-size,1rem);font-weight:var(--cds-body-02-font-weight,400);letter-spacing:var(--cds-body-02-letter-spacing,0);line-height:var(--cds-body-02-line-height,1.5)}a{color:var(--cds-link-primary,#0062fe)}em{font-style:italic}@keyframes c4p--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes c4p--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes c4p--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.c4p--layout--size-xs{--c4p-layout-size-height-context:var(--c4p-layout-size-height-xs,1.5rem);--c4p-layout-size-height:var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-xs{--c4p-layout-size-height:var(--c4p-layout-size-height-context,var(--c4p-layout-size-height-xs,1.5rem))}.c4p--layout-constraint--size__min-xs{--c4p-layout-size-height-min:var(--c4p-layout-size-height-xs,1.5rem)}.c4p--layout-constraint--size__max-xs{--c4p-layout-size-height-max:var(--c4p-layout-size-height-xs,1.5rem)}.c4p--layout--size-sm{--c4p-layout-size-height-context:var(--c4p-layout-size-height-sm,2rem);--c4p-layout-size-height:var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-sm{--c4p-layout-size-height:var(--c4p-layout-size-height-context,var(--c4p-layout-size-height-sm,2rem))}.c4p--layout-constraint--size__min-sm{--c4p-layout-size-height-min:var(--c4p-layout-size-height-sm,2rem)}.c4p--layout-constraint--size__max-sm{--c4p-layout-size-height-max:var(--c4p-layout-size-height-sm,2rem)}.c4p--layout--size-md{--c4p-layout-size-height-context:var(--c4p-layout-size-height-md,2.5rem);--c4p-layout-size-height:var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-md{--c4p-layout-size-height:var(--c4p-layout-size-height-context,var(--c4p-layout-size-height-md,2.5rem))}.c4p--layout-constraint--size__min-md{--c4p-layout-size-height-min:var(--c4p-layout-size-height-md,2.5rem)}.c4p--layout-constraint--size__max-md{--c4p-layout-size-height-max:var(--c4p-layout-size-height-md,2.5rem)}.c4p--layout--size-lg{--c4p-layout-size-height-context:var(--c4p-layout-size-height-lg,3rem);--c4p-layout-size-height:var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-lg{--c4p-layout-size-height:var(--c4p-layout-size-height-context,var(--c4p-layout-size-height-lg,3rem))}.c4p--layout-constraint--size__min-lg{--c4p-layout-size-height-min:var(--c4p-layout-size-height-lg,3rem)}.c4p--layout-constraint--size__max-lg{--c4p-layout-size-height-max:var(--c4p-layout-size-height-lg,3rem)}.c4p--layout--size-xl{--c4p-layout-size-height-context:var(--c4p-layout-size-height-xl,4rem);--c4p-layout-size-height:var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-xl{--c4p-layout-size-height:var(--c4p-layout-size-height-context,var(--c4p-layout-size-height-xl,4rem))}.c4p--layout-constraint--size__min-xl{--c4p-layout-size-height-min:var(--c4p-layout-size-height-xl,4rem)}.c4p--layout-constraint--size__max-xl{--c4p-layout-size-height-max:var(--c4p-layout-size-height-xl,4rem)}.c4p--layout--size-2xl{--c4p-layout-size-height-context:var(--c4p-layout-size-height-2xl,5rem);--c4p-layout-size-height:var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-2xl{--c4p-layout-size-height:var(--c4p-layout-size-height-context,var(--c4p-layout-size-height-2xl,5rem))}.c4p--layout-constraint--size__min-2xl{--c4p-layout-size-height-min:var(--c4p-layout-size-height-2xl,5rem)}.c4p--layout-constraint--size__max-2xl{--c4p-layout-size-height-max:var(--c4p-layout-size-height-2xl,5rem)}.c4p--layout--density-condensed{--c4p-layout-density-padding-inline-context:var(--c4p-layout-density-padding-inline-condensed,0.5rem);--c4p-layout-density-padding-inline:var(--c4p-layout-density-padding-inline-context)}.c4p--layout-constraint--density__default-condensed{--c4p-layout-density-padding-inline:var(--c4p-layout-density-padding-inline-context,var(--c4p-layout-density-padding-inline-condensed,0.5rem))}.c4p--layout-constraint--density__min-condensed{--c4p-layout-density-padding-inline-min:var(--c4p-layout-density-padding-inline-condensed,0.5rem)}.c4p--layout-constraint--density__max-condensed{--c4p-layout-density-padding-inline-max:var(--c4p-layout-density-padding-inline-condensed,0.5rem)}.c4p--layout--density-normal{--c4p-layout-density-padding-inline-context:var(--c4p-layout-density-padding-inline-normal,1rem);--c4p-layout-density-padding-inline:var(--c4p-layout-density-padding-inline-context)}.c4p--layout-constraint--density__default-normal{--c4p-layout-density-padding-inline:var(--c4p-layout-density-padding-inline-context,var(--c4p-layout-density-padding-inline-normal,1rem))}.c4p--layout-constraint--density__min-normal{--c4p-layout-density-padding-inline-min:var(--c4p-layout-density-padding-inline-normal,1rem)}.c4p--layout-constraint--density__max-normal{--c4p-layout-density-padding-inline-max:var(--c4p-layout-density-padding-inline-normal,1rem)}:root{--c4p-layout-size-height-xs:1.5rem;--c4p-layout-size-height-sm:2rem;--c4p-layout-size-height-md:2.5rem;--c4p-layout-size-height-lg:3rem;--c4p-layout-size-height-xl:4rem;--c4p-layout-size-height-2xl:5rem;--c4p-layout-size-height-min:0px;--c4p-layout-size-height-max:999999999px;--c4p-layout-density-padding-inline-condensed:0.5rem;--c4p-layout-density-padding-inline-normal:1rem;--c4p-layout-density-padding-inline-min:0px;--c4p-layout-density-padding-inline-max:999999999px}.c4p--assistive-text,.c4p--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.c4p--empty-state{color:var(--cds-text-primary,#161616);display:flex}.c4p--empty-state .c4p--empty-state__header{font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4);margin:0;padding-block-end:.5rem}.c4p--empty-state .c4p--empty-state__subtitle{color:var(--cds-text-secondary,#525252);font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);padding-block-end:1rem}.c4p--empty-state .c4p--empty-state__header--small{font-size:var(--cds-body-compact-02-font-size,1rem);font-weight:var(--cds-body-compact-02-font-weight,400);letter-spacing:var(--cds-body-compact-02-letter-spacing,0);line-height:var(--cds-body-compact-02-line-height,1.375);padding-block-end:.5rem}.c4p--empty-state .c4p--empty-state__subtitle--small{font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}.c4p--empty-state__illustration{block-size:auto;margin-block-end:1rem}.c4p--empty-state__illustration.c4p--empty-state__illustration--lg{max-inline-size:5rem;min-inline-size:5rem}.c4p--empty-state__illustration.c4p--empty-state__illustration--sm{max-inline-size:4rem;min-inline-size:4rem}.c4p--empty-state-position--top{flex-direction:column}.c4p--empty-state-position--right{flex-direction:row-reverse}.c4p--empty-state-position--bottom{flex-direction:column-reverse}.c4p--empty-state-position--left{flex-direction:row}.c4p--empty-state .c4p--empty-state__action-button{display:block;margin-block-end:1rem}.c4p--empty-state .c4p--empty-state__link{display:inline-block}@keyframes notifications-panel-fade-in{0%{opacity:0;transform:translateY(-38.5rem)}to{opacity:1;transform:translateY(0)}}@keyframes notifications-panel-fade-out{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-38.5rem)}}@keyframes notifications-panel-entrance-reduced{0%{opacity:0}to{opacity:1}}@keyframes notifications-panel-exit-reduced{0%{opacity:1}to{opacity:0}}.c4p--notifications-panel__entrance{animation:notifications-panel-fade-in .24s cubic-bezier(.2,0,.38,.9)}.c4p--notifications-panel__exit{animation:notifications-panel-fade-out .24s cubic-bezier(.2,0,.38,.9) forwards}@media (prefers-reduced-motion){.c4p--notifications-panel__entrance{animation:notifications-panel-entrance-reduced .15s cubic-bezier(.2,0,1,.9) forwards}.c4p--notifications-panel__exit{animation:notifications-panel-exit-reduced .15s cubic-bezier(.2,0,1,.9) forwards}}.c4p--notifications-panel__container{background-color:var(--cds-layer-01,#f4f4f4);border-block-end:1px solid var(--cds-border-subtle-02,#e0e0e0);border-inline-start:1px solid var(--cds-border-subtle-02,#e0e0e0);box-shadow:0 .125rem .25rem var(--cds-overlay,rgba(0,0,0,.6));clip-path:inset(0 calc(var(--cds-spacing-01)*-1) calc(var(--cds-spacing-02)*-1) calc(var(--cds-spacing-01)*-1));color:var(--cds-text-primary,#161616);inset-block-start:3rem;inset-inline-end:0;max-block-size:38.5rem;max-inline-size:22.75rem;min-block-size:38.5rem;min-inline-size:20rem;overflow:auto;position:fixed;transition:transform .11s cubic-bezier(.2,0,.38,.9);z-index:2}.c4p--notifications-panel__container .c4p--notifications-panel__header-container{background-color:var(--cds-layer-01,#f4f4f4);border-block-end:1px solid var(--cds-border-subtle-01,#c6c6c6);inset-block-start:0;padding:.5rem 1rem;position:sticky;z-index:2}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__header-flex{align-items:center;display:flex;justify-content:space-between}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__do-not-disturb-toggle{padding-block-end:.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__do-not-disturb-toggle .c4p--toggle__label-text{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__dismiss-button{color:var(--cds-text-primary,#161616)}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__header{font-size:var(--cds-heading-compact-01-font-size,.875rem);font-weight:var(--cds-heading-compact-01-font-weight,600);letter-spacing:var(--cds-heading-compact-01-letter-spacing,.16px);line-height:var(--cds-heading-compact-01-line-height,1.28572);margin:0}.c4p--notifications-panel__container .c4p--notifications-panel__time-section-label{background-color:var(--cds-layer-01,#f4f4f4);color:var(--cds-text-secondary,#525252);font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);font-weight:600;inset-block-start:3.0625rem;letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333);padding:.5rem 1rem;position:sticky;z-index:2}.c4p--notifications-panel__container .c4p--notifications-panel__notification:focus,.c4p--notifications-panel__container .c4p--notifications-panel__notification:hover{background-color:var(--cds-layer-accent-01,#e0e0e0)}.c4p--notifications-panel__container .c4p--notifications-panel__notification:focus .c4p--notifications-panel__dismiss-single-button,.c4p--notifications-panel__container .c4p--notifications-panel__notification:hover .c4p--notifications-panel__dismiss-single-button{opacity:1}.c4p--notifications-panel__container .c4p--notifications-panel__notification:focus{border-color:var(--cds-focus,#0f62fe);box-shadow:inset 0 0 0 2px var(--cds-focus,#0f62fe),inset 0 0 0 2px var(--cds-background,#fff);outline:0}.c4p--notifications-panel__container .c4p--notifications-panel__notification{align-items:flex-start;background-color:var(--cds-layer-01,#f4f4f4);border:0;cursor:pointer;display:flex;inline-size:100%;min-block-size:6.25rem;padding:1rem;position:relative;text-align:start;transition:background-color .24s cubic-bezier(.2,0,.38,.9)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-title{color:var(--cds-text-secondary,#525252);font-size:var(--cds-heading-01-font-size,.875rem);font-weight:var(--cds-heading-01-font-weight,600);font-weight:400;letter-spacing:var(--cds-heading-01-letter-spacing,.16px);line-height:var(--cds-heading-01-line-height,1.42857);margin-block-end:.25rem}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-title.c4p--notifications-panel__notification-title-unread{color:var(--cds-text-secondary,#525252);font-weight:600;margin-block-end:.25rem}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notifications-link{font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon{margin-inline-end:.5rem;min-inline-size:1rem}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-error{fill:var(--cds-support-error,#da1e28)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-success{fill:var(--cds-support-success,#24a148)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-warning{fill:var(--cds-support-warning,#f1c21b)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-informational{fill:var(--cds-support-info,#0043ce)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-time-label{margin-block-end:.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-description,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-time-label{color:var(--cds-text-secondary,#525252);font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-description.c4p--notifications-panel__notification-short-description{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-description.c4p--notifications-panel__notification-long-description{display:block;overflow:initial;-webkit-line-clamp:initial;line-clamp:none}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button{align-items:center;display:flex;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333);min-inline-size:5.5rem;padding:0}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button .c4p--btn__icon,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button .c4p--btn__icon{transition:transform .24s ease}@media (prefers-reduced-motion:reduce){.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button .c4p--btn__icon,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button .c4p--btn__icon{transition:none}}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button.c4p--notifications-panel__notification-read-more-button .c4p--btn__icon,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button.c4p--notifications-panel__notification-read-more-button .c4p--btn__icon{transform:rotate(0deg)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button.c4p--notifications-panel__notification-read-less-button .c4p--btn__icon,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button.c4p--notifications-panel__notification-read-less-button .c4p--btn__icon{transform:rotate(180deg)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--popover-container{position:static}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__dismiss-single-button{align-items:center;color:var(--cds-text-primary,#161616);display:flex;inset-block-start:0;inset-inline-end:0;justify-content:center;min-inline-size:2rem;opacity:0;padding:0;position:absolute}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__dismiss-single-button:focus,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__dismiss-single-button:hover{opacity:1}.c4p--notifications-panel__container .c4p--notifications-panel__notification-previous:not(:first-of-type):before,.c4p--notifications-panel__container .c4p--notifications-panel__notification-today:not(:first-of-type):before,.c4p--notifications-panel__container .c4p--notifications-panel__notification-yesterday:not(:first-of-type):before{background-color:var(--cds-border-subtle-01,#c6c6c6);block-size:1px;content:"";inline-size:calc(100% - 2rem);inset-block-start:0;margin:0 auto;position:absolute;transition:background-color .24s cubic-bezier(.2,0,.38,.9)}.c4p--notifications-panel__container .c4p--notifications-panel__notification-previous:hover+.c4p--notifications-panel__notification-previous:not(:first-of-type):before,.c4p--notifications-panel__container .c4p--notifications-panel__notification-today:hover+.c4p--notifications-panel__notification-today:not(:first-of-type):before,.c4p--notifications-panel__container .c4p--notifications-panel__notification-yesterday:hover+.c4p--notifications-panel__notification-yesterday:not(:first-of-type):before{background-color:transparent}.c4p--notifications-panel__container .c4p--notifications-panel__main-section-empty.c4p--notifications-panel__main-section{align-items:center;block-size:100%;display:flex;justify-content:center;margin-block-start:10rem;min-block-size:0}.c4p--notifications-panel__container .c4p--notifications-panel__main-section-empty.c4p--notifications-panel__main-section .c4p-subtext{font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.c4p--notifications-panel__container .c4p--notifications-panel__main-section{min-block-size:498px}.c4p--notifications-panel__container .c4p--notifications-panel__bottom-actions{align-items:center;background-color:var(--cds-layer-01,#f4f4f4);block-size:2.5rem;border-block-start:1px solid var(--cds-border-subtle-01,#c6c6c6);display:flex;inset-block-end:0;min-block-size:2.5rem;position:sticky;z-index:2}.c4p--notifications-panel__container .c4p--notifications-panel__bottom-actions .c4p--notifications-panel__view-all-button{align-items:center;block-size:2.5rem;border-inline-end:1px solid var(--cds-border-subtle-01,#c6c6c6);color:var(--cds-text-primary,#161616);display:flex;inline-size:100%;max-inline-size:calc(100% - 2.5rem);min-block-size:2.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__bottom-actions .c4p--notifications-panel__settings-button{align-items:center;block-size:2.5rem;color:var(--cds-text-primary,#161616);display:flex;justify-content:center;min-block-size:2.5rem;min-inline-size:2.5rem;padding:0}.c4p--notifications-panel__container .c4p--notifications-panel__bottom-actions .c4p--notifications-panel__settings-button .c4p--btn__icon{margin:0}.c4p--notifications-panel__header-container:has(.c4p--notifications-panel__do-not-disturb-toggle)+.c4p--notifications-panel__main-section .c4p--notifications-panel__time-section-label{inset-block-start:4.8125rem}:host(c4p-notification-panel) .c4p--notifications-panel__do-not-disturb-toggle{display:block}:host(c4p-notification-panel) ::slotted(.c4p--notifications-panel__bottom-actions){align-items:center;display:flex}.c4p--notifications-panel__header-container{--cds-heading-06-font-size:--cds-heading-compact-01-font-size;--cds-heading-06-font-weight:--cds-heading-compact-01-font-weight;--cds-heading-06-line-height:--cds-heading-compact-01-line-height;--cds-heading-06-letter-spacing:--cds-heading-compact-01-letter-spacing}.c4p--notifications-panel__dismiss-button{--cds-link-primary:--cds-text-primary;--cds-link-primary-hover:--cds-text-primary}.c4p--notifications-panel__bottom-actions-container{background-color:var(--cds-layer-01,#f4f4f4);block-size:2.5rem;border-block-start:1px solid var(--cds-border-subtle-01,#c6c6c6);inset-block-end:0;min-block-size:2.5rem;position:sticky;z-index:2}']);

// node_modules/@carbon/ibm-products-web-components/es/components/notification-panel/date-time-context.js
var dateTimeLocaleContext = n2("dateTimeLocale");

// node_modules/@carbon-labs/utilities/es/settings/settings.js
var settings = {
  stablePrefix: "clabs",
  prefix: "cds"
};
var settings_default = settings;

// node_modules/@carbon-labs/wc-empty-state/es/components/empty-state/src/empty-state.scss.js
var styles2 = i(['.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-background:var(--cds-layer-background-01,#fff);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-background:var(--cds-layer-background-02,#f4f4f4);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-background:var(--cds-layer-background-03,#fff);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}.cds--layer-one.cds--layer__with-background,.cds--layer-three.cds--layer__with-background,.cds--layer-two.cds--layer__with-background{background-color:var(--cds-layer-background)}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--assistive-text,.cds--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--popover-container{display:inline-block}.cds--popover-container:not(.cds--popover--auto-align){position:relative}.cds--popover--high-contrast .cds--popover{--cds-popover-background-color:var(--cds-background-inverse,#393939);--cds-popover-text-color:var(--cds-text-inverse,#fff)}.cds--popover--drop-shadow .cds--popover{filter:var(--cds-popover-drop-shadow,drop-shadow(0 .125rem .125rem rgba(0,0,0,.2)))}.cds--popover--border>.cds--popover>.cds--popover-content{outline:1px solid var(--cds-popover-border-color,var(--cds-border-subtle));outline-offset:-1px}.cds--popover--caret{--cds-popover-offset:0.625rem}.cds--popover{inset:0;pointer-events:none;position:absolute;z-index:6000}.cds--popover-content{--cds-layout-size-height-sm:2rem}.cds--layout--size-sm :where(.cds--popover-content),.cds--popover-content.cds--layout--size-sm{--cds-layout-size-height:var(--cds-layout-size-height-sm)}.cds--popover-content{--cds-layout-size-height-md:2.5rem}.cds--layout--size-md :where(.cds--popover-content),.cds--popover-content.cds--layout--size-md{--cds-layout-size-height:var(--cds-layout-size-height-md)}.cds--popover-content{--cds-layout-size-height-lg:3rem}.cds--layout--size-lg :where(.cds--popover-content),.cds--popover-content.cds--layout--size-lg{--cds-layout-size-height:var(--cds-layout-size-height-lg)}.cds--popover-content{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--popover-content *,.cds--popover-content :after,.cds--popover-content :before{box-sizing:inherit}.cds--popover-content{background-color:var(--cds-popover-background-color,var(--cds-layer));border-radius:var(--cds-popover-border-radius,2px);color:var(--cds-popover-text-color,var(--cds-text-primary,#161616));display:none;inline-size:-moz-max-content;inline-size:max-content;max-inline-size:23rem;pointer-events:auto;position:absolute;z-index:6000}.cds--popover--open>.cds--popover>.cds--popover-content{display:block}.cds--popover--background-token__background>.cds--popover>.cds--popover-content{background-color:var(--cds-background,#fff)}.cds--popover-content:before{content:"";display:none;position:absolute}.cds--popover--open>.cds--popover>.cds--popover-content:before{display:block}.cds--popover--auto-align.cds--popover-caret,.cds--popover-caret{display:none;position:absolute;will-change:transform;z-index:6000}.cds--popover--auto-align.cds--popover-caret:after,.cds--popover-caret:after{background-color:var(--cds-popover-background-color,var(--cds-layer));content:"";display:block;position:absolute}.cds--popover--auto-align.cds--popover-caret:before,.cds--popover-caret:before{background-color:var(--cds-popover-border-color,var(--cds-border-subtle));content:"";display:none;position:absolute}.cds--popover--background-token__background>.cds--popover>.cds--popover-caret:after{background-color:var(--cds-background,#fff)}.cds--popover--auto-align.cds--popover--caret.cds--popover--open>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--border .cds--popover--auto-align.cds--popover-caret:before,.cds--popover--border .cds--popover-caret:before,.cds--popover--caret.cds--popover--open>.cds--popover>.cds--popover-caret{display:block}.cds--popover--tab-tip>.cds--popover>.cds--popover-caret{display:none}.cds--popover--bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-start:50%;transform:translate(-50%,calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{transform:translate(50%,calc(100% + var(--cds-popover-offset, 0rem)))}.cds--popover--bottom-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-start:calc(50% - var(--cds-popover-offset, 0rem));transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:calc(50% - var(--cds-popover-offset, 0rem));inset-inline-start:auto}.cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--bottom-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:0;inset-inline-end:calc(50% - var(--cds-popover-offset, 0rem));transform:translate(var(--cds-popover-offset,0),calc(100% + var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--bottom-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:calc(50% - var(--cds-popover-offset, 0rem))}.cds--popover--bottom-end>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-left>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-right>.cds--popover>.cds--popover-content:before,.cds--popover--bottom-start>.cds--popover>.cds--popover-content:before,.cds--popover--bottom>.cds--popover>.cds--popover-content:before{block-size:var(--cds-popover-offset,0);inset-block-start:0;inset-inline:0;transform:translateY(-100%)}.cds--popover--bottom-end>.cds--popover>.cds--popover-caret,.cds--popover--bottom-left>.cds--popover>.cds--popover-caret,.cds--popover--bottom-right>.cds--popover>.cds--popover-caret,.cds--popover--bottom-start>.cds--popover>.cds--popover-caret,.cds--popover--bottom>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);inline-size:var(--cds-popover-caret-width,.75rem);inset-block-end:0;inset-inline-start:50%;transform:translate(-50%,var(--cds-popover-offset,0))}.cds--popover--border.cds--popover--bottom-end>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-left>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-right>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-start>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom>.cds--popover>.cds--popover-caret:before,.cds--popover--bottom-end>.cds--popover>.cds--popover-caret:after,.cds--popover--bottom-left>.cds--popover>.cds--popover-caret:after,.cds--popover--bottom-right>.cds--popover>.cds--popover-caret:after,.cds--popover--bottom-start>.cds--popover>.cds--popover-caret:after,.cds--popover--bottom>.cds--popover>.cds--popover-caret:after{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 100%,50% 0,100% 100%);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--bottom-end>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-left>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-right>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-start>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom>.cds--popover>.cds--popover-caret:after{inline-size:calc(var(--cds-popover-caret-width, .75rem) - 1px);inset-block-start:1px;inset-inline-start:.5px}[dir=rtl] .cds--popover--bottom-end>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-left>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-right>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom-start>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--bottom>.cds--popover>.cds--popover-caret{transform:translate(50%,var(--cds-popover-offset,0))}.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 100%,50% 0,100% 100%);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--bottom-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inline-size:calc(var(--cds-popover-caret-width, .75rem) - 1px);inset-block-start:1px;inset-inline-start:.5px}.cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-start:50%;transform:translate(-50%,calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{transform:translate(50%,calc(-100% - var(--cds-popover-offset, 0rem)))}.cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-start:calc(50% - var(--cds-popover-offset, 0rem));transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:calc(50% - var(--cds-popover-offset, 0rem));inset-inline-start:auto}.cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:0;inset-inline-end:calc(50% - var(--cds-popover-offset, 0rem));transform:translate(var(--cds-popover-offset,0),calc(-100% - var(--cds-popover-offset, 0rem)))}[dir=rtl] .cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:calc(50% - var(--cds-popover-offset, 0rem))}.cds--popover--top-end>.cds--popover>.cds--popover-content:before,.cds--popover--top-left>.cds--popover>.cds--popover-content:before,.cds--popover--top-right>.cds--popover>.cds--popover-content:before,.cds--popover--top-start>.cds--popover>.cds--popover-content:before,.cds--popover--top>.cds--popover>.cds--popover-content:before{block-size:var(--cds-popover-offset,0);inset-block-end:0;inset-inline:0;transform:translateY(100%)}.cds--popover--top-end>.cds--popover>.cds--popover-caret,.cds--popover--top-left>.cds--popover>.cds--popover-caret,.cds--popover--top-right>.cds--popover>.cds--popover-caret,.cds--popover--top-start>.cds--popover>.cds--popover-caret,.cds--popover--top>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);inline-size:var(--cds-popover-caret-width,.75rem);inset-block-start:0;inset-inline-start:50%;transform:translate(-50%,calc(var(--cds-popover-offset, 0rem)*-1))}.cds--popover--border.cds--popover--top-end>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-left>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-right>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-start>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--top>.cds--popover>.cds--popover-caret:before,.cds--popover--top-end>.cds--popover>.cds--popover-caret:after,.cds--popover--top-left>.cds--popover>.cds--popover-caret:after,.cds--popover--top-right>.cds--popover>.cds--popover-caret:after,.cds--popover--top-start>.cds--popover>.cds--popover-caret:after,.cds--popover--top>.cds--popover>.cds--popover-caret:after{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 0,50% 100%,100% 0);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--top-end>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-left>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-right>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-start>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--top>.cds--popover>.cds--popover-caret:after{inline-size:calc(var(--cds-popover-caret-width, .75rem) - 1px);inset-block-start:-1px;inset-inline-start:.5px}[dir=rtl] .cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{transform:translate(50%,calc(var(--cds-popover-offset, 0rem)*-1))}.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-height,.375rem);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{block-size:var(--cds-popover-caret-height,.375rem);clip-path:polygon(0 0,50% 100%,100% 0);inline-size:var(--cds-popover-caret-width,.75rem)}.cds--popover--border.cds--popover--top-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--top-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inline-size:calc(var(--cds-popover-caret-width, .75rem) - 1px);inset-block-start:-1px;inset-inline-start:.5px}.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),-50%)}.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),calc(var(--cds-popover-offset, 0rem)*.5*-1 - 16px))}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:50%;inset-inline-start:100%;transform:translate(var(--cds-popover-offset,0),calc(var(--cds-popover-offset, 0rem)*.5 + 16px))}[dir=rtl] .cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:100%;inset-inline-start:auto}.cds--popover--right-bottom>.cds--popover>.cds--popover-content:before,.cds--popover--right-end>.cds--popover>.cds--popover-content:before,.cds--popover--right-start>.cds--popover>.cds--popover-content:before,.cds--popover--right-top>.cds--popover>.cds--popover-content:before,.cds--popover--right>.cds--popover>.cds--popover-content:before{inline-size:var(--cds-popover-offset,0);inset-block:0;inset-inline-start:0;transform:translateX(-100%)}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);inline-size:var(--cds-popover-caret-height,.375rem);inset-block-start:50%;inset-inline-start:100%;transform:translate(calc(var(--cds-popover-offset, 0rem) - 100%),-50%)}.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem)}[dir=rtl] .cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{inset-inline-end:100%;inset-inline-start:auto}.cds--popover--border.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{inset-inline-start:1px}[dir=rtl] .cds--popover--border.cds--popover--right-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{inset-inline-start:-1px}.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 50%,100% 0,100% 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inset-inline-start:1px}[dir=rtl] .cds--popover--border.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before{margin-inline-start:1px}[dir=rtl] .cds--popover--border.cds--popover--right-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--right.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inset-inline-start:0}.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1 + .1px),-50%)}.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(var(--cds-popover-offset, 0rem)*-.5 - 16px))}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-block-end:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1),calc(var(--cds-popover-offset, 0rem)*.5 + 16px))}[dir=rtl] .cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:auto;inset-inline-start:100%}.cds--popover--left-bottom>.cds--popover>.cds--popover-content:before,.cds--popover--left-end>.cds--popover>.cds--popover-content:before,.cds--popover--left-start>.cds--popover>.cds--popover-content:before,.cds--popover--left-top>.cds--popover>.cds--popover-content:before,.cds--popover--left>.cds--popover>.cds--popover-content:before{inline-size:var(--cds-popover-offset,0);inset-block:0;inset-inline-end:0;transform:translateX(100%)}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);inline-size:var(--cds-popover-caret-height,.375rem);inset-block-start:50%;inset-inline-end:100%;transform:translate(calc(var(--cds-popover-offset, 0rem)*-1 + 100%),-50%)}.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem)}[dir=rtl] .cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret,[dir=rtl] .cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret{inset-inline-end:auto;inset-inline-start:100%}.cds--popover--border.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before,.cds--popover--border.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:before{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,.cds--popover--border.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{inset-inline-start:-1px}[dir=rtl] .cds--popover--border.cds--popover--left-bottom:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-top:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-caret:after{inset-inline-start:1px}.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret,.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret{block-size:var(--cds-popover-caret-width,.75rem);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--border.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{block-size:var(--cds-popover-caret-width,.75rem);clip-path:polygon(0 0,100% 50%,0 100%);inline-size:var(--cds-popover-caret-height,.375rem)}.cds--popover--border.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,.cds--popover--border.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inset-inline-start:-1px}[dir=rtl] .cds--popover--border.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before,[dir=rtl] .cds--popover--border.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:before{margin-inline-start:-1px}[dir=rtl] .cds--popover--border.cds--popover--left-bottom.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-end.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-start.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left-top.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after,[dir=rtl] .cds--popover--border.cds--popover--left.cds--popover--auto-align>.cds--popover>.cds--popover-content>.cds--popover-caret:after{inset-inline-start:0}.cds--popover--tab-tip>.cds--popover>.cds--popover-content{border-radius:0}.cds--popover--tab-tip.cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--tab-tip.cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--tab-tip.cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--tab-tip.cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-start:0}.cds--popover--tab-tip.cds--popover--bottom-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,.cds--popover--tab-tip.cds--popover--top-end:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--tab-tip.cds--popover--bottom-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content,[dir=rtl] .cds--popover--tab-tip.cds--popover--top-start:not(.cds--popover--auto-align)>.cds--popover>.cds--popover-content{inset-inline-end:0;inset-inline-start:auto}.cds--popover--tab-tip .cds--popover{will-change:filter}.cds--popover--tab-tip__button{box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;vertical-align:baseline}.cds--popover--tab-tip__button *,.cds--popover--tab-tip__button :after,.cds--popover--tab-tip__button :before{box-sizing:inherit}.cds--popover--tab-tip__button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;cursor:pointer;display:inline-block;inline-size:100%;padding:0;text-align:start}.cds--popover--tab-tip__button::-moz-focus-inner{border:0}.cds--popover--tab-tip__button{align-items:center;block-size:2rem;display:inline-flex;inline-size:2rem;justify-content:center;position:relative}.cds--popover--tab-tip__button:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--popover--tab-tip__button:focus{outline-style:dotted}}.cds--popover--tab-tip__button:hover{background-color:var(--cds-layer-hover)}.cds--popover--tab-tip.cds--popover--open .cds--popover--tab-tip__button{background:var(--cds-layer);box-shadow:0 2px 2px rgba(0,0,0,.2)}.cds--popover--tab-tip.cds--popover--open .cds--popover--tab-tip__button:not(:focus):after{background:var(--cds-layer);block-size:2px;content:"";inline-size:100%;inset-block-end:0;position:absolute;z-index:6001}.cds--popover--tab-tip__button svg{fill:var(--cds-icon-primary,#161616)}.cds--tooltip{--cds-popover-offset:12px}.cds--tooltip-content{font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);max-inline-size:18rem;overflow-wrap:break-word;padding:var(--cds-tooltip-padding-block,1rem) var(--cds-tooltip-padding-inline,1rem)}.cds--icon-tooltip{--cds-tooltip-padding-block:0.125rem;--cds-popover-caret-width:0.5rem;--cds-popover-caret-height:0.25rem;--cds-popover-offset:0.5rem}.cds--icon-tooltip .cds--tooltip-content{font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--definition-term{box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;vertical-align:baseline}.cds--definition-term *,.cds--definition-term :after,.cds--definition-term :before{box-sizing:inherit}.cds--definition-term{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;cursor:pointer;display:inline-block;inline-size:100%;padding:0;text-align:start}.cds--definition-term::-moz-focus-inner{border:0}.cds--definition-term{border-block-end:1px dotted var(--cds-border-strong);border-radius:0;color:var(--cds-text-primary,#161616)}.cds--definition-term:focus{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--definition-term:focus{outline-style:dotted}}.cds--definition-term:focus,.cds--definition-term:hover{border-block-end-color:var(--cds-border-interactive,#0f62fe)}.cds--definition-tooltip{font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);max-inline-size:11rem;padding:.5rem 1rem;text-wrap:auto;word-break:break-word}.cds--btn{--cds-layout-size-height-local:clamp(max(var(--cds-layout-size-height-min),var(--cds-layout-size-height-xs)),var(--cds-layout-size-height,var(--cds-layout-size-height-lg)),min(var(--cds-layout-size-height-max),var(--cds-layout-size-height-2xl)));--cds-layout-density-padding-inline-local:clamp(var(--cds-layout-density-padding-inline-min),var(--cds-layout-density-padding-inline,var(--cds-layout-density-padding-inline-normal)),var(--cds-layout-density-padding-inline-max));--temp-1lh:(var(--cds-body-compact-01-line-height,1.28572) * 1em);--temp-expressive-1lh:(var(--cds-body-compact-02-line-height,1.375) * 1em);--temp-padding-block-max:calc((var(--cds-layout-size-height-lg) - var(--temp-1lh))/2 - 0.0625rem);border:0;box-sizing:border-box;font-family:inherit;font-size:100%;padding:0;vertical-align:baseline}.cds--btn *,.cds--btn :after,.cds--btn :before{box-sizing:inherit}.cds--btn{border-radius:0;cursor:pointer;display:inline-flex;flex-shrink:0;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);inline-size:-moz-max-content;inline-size:max-content;justify-content:space-between;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);margin:0;max-inline-size:20rem;min-block-size:var(--cds-layout-size-height-local);outline:none;padding-block:min((var(--cds-layout-size-height-local) - var(--temp-1lh))/2 - .0625rem,var(--temp-padding-block-max));padding-inline:calc(var(--cds-layout-density-padding-inline-local) - .0625rem) calc(var(--cds-layout-density-padding-inline-local)*3 + .9375rem);position:relative;text-align:start;text-decoration:none;transition:background 70ms cubic-bezier(0,0,.38,.9),box-shadow 70ms cubic-bezier(0,0,.38,.9),border-color 70ms cubic-bezier(0,0,.38,.9),outline 70ms cubic-bezier(0,0,.38,.9);vertical-align:top}.cds--btn.cds--btn--disabled,.cds--btn.cds--btn--disabled:focus,.cds--btn.cds--btn--disabled:hover,.cds--btn:disabled,.cds--btn:focus:disabled,.cds--btn:hover:disabled{background:var(--cds-button-disabled,#c6c6c6);border-color:var(--cds-button-disabled,#c6c6c6);box-shadow:none;color:var(--cds-text-on-color-disabled,#8d8d8d);cursor:not-allowed}.cds--btn .cds--btn__icon{block-size:1rem;flex-shrink:0;inline-size:1rem;inset-block-start:min((var(--cds-layout-size-height-local) - 1rem)/2 - .0625rem,var(--temp-padding-block-max));inset-inline-end:var(--cds-layout-density-padding-inline-local);margin-block-start:.0625rem;position:absolute}.cds--btn::-moz-focus-inner{border:0;padding:0}.cds--btn--primary{background-color:var(--cds-button-primary,#0f62fe);border:1px solid transparent;color:var(--cds-text-on-color,#fff)}.cds--btn--primary:hover{background-color:var(--cds-button-primary-hover,#0050e6)}.cds--btn--primary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--primary:active{background-color:var(--cds-button-primary-active,#002d9c)}.cds--btn--primary .cds--btn__icon,.cds--btn--primary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--primary:hover,.cds--btn--secondary{color:var(--cds-text-on-color,#fff)}.cds--btn--secondary{background-color:var(--cds-button-secondary,#393939);border:1px solid transparent}.cds--btn--secondary:hover{background-color:var(--cds-button-secondary-hover,#474747)}.cds--btn--secondary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--secondary:active{background-color:var(--cds-button-secondary-active,#6f6f6f)}.cds--btn--secondary .cds--btn__icon,.cds--btn--secondary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--secondary:focus,.cds--btn--secondary:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--tertiary{background-color:transparent;border-color:var(--cds-button-tertiary,#0f62fe);border-style:solid;border-width:1px;color:var(--cds-button-tertiary,#0f62fe)}.cds--btn--tertiary:hover{background-color:var(--cds-button-tertiary-hover,#0050e6)}.cds--btn--tertiary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--tertiary .cds--btn__icon,.cds--btn--tertiary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--tertiary:focus,.cds--btn--tertiary:hover{color:var(--cds-text-inverse,#fff)}.cds--btn--tertiary:focus{background-color:var(--cds-button-tertiary,#0f62fe)}.cds--btn--tertiary:active{background-color:var(--cds-button-tertiary-active,#002d9c);border-color:transparent;color:var(--cds-text-inverse,#fff)}.cds--btn--tertiary.cds--btn--disabled,.cds--btn--tertiary.cds--btn--disabled:focus,.cds--btn--tertiary.cds--btn--disabled:hover,.cds--btn--tertiary:disabled,.cds--btn--tertiary:focus:disabled,.cds--btn--tertiary:hover:disabled{background:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--btn--ghost{background-color:transparent;border:1px solid transparent;color:var(--cds-link-primary,#0f62fe)}.cds--btn--ghost:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12))}.cds--btn--ghost:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--ghost .cds--btn__icon,.cds--btn--ghost .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--ghost{padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - .0625rem)}.cds--btn--ghost .cds--btn__icon{align-self:center;margin-inline-start:.5rem;position:static}.cds--btn--ghost:active,.cds--btn--ghost:hover{color:var(--cds-link-primary-hover,#0043ce)}.cds--btn--ghost:active{background-color:var(--cds-background-active,hsla(0,0%,55%,.5))}.cds--btn--ghost.cds--btn--disabled,.cds--btn--ghost.cds--btn--disabled:focus,.cds--btn--ghost.cds--btn--disabled:hover,.cds--btn--ghost:disabled,.cds--btn--ghost:focus:disabled,.cds--btn--ghost:hover:disabled{background:transparent;border-color:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--btn--ghost:not([disabled]) svg{fill:var(--cds-icon-primary,#161616)}.cds--btn--icon-only{align-items:center;block-size:var(--cds-layout-size-height-local);inline-size:var(--cds-layout-size-height-local);justify-content:center;padding:0;padding-block-start:0}.cds--btn--icon-only>:first-child{min-inline-size:1rem}.cds--btn--icon-only .cds--btn__icon{position:static}.cds--btn--icon-only.cds--btn--danger--ghost .cds--btn__icon,.cds--btn--icon-only.cds--btn--ghost .cds--btn__icon{margin:0}.cds--btn--icon-only.cds--btn--danger--ghost{padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - 1rem)}.cds--btn--xs:not(.cds--btn--icon-only){padding-block-start:1.5px}.cds--btn--md:not(.cds--btn--icon-only) .cds--btn__icon,.cds--btn--sm:not(.cds--btn--icon-only) .cds--btn__icon,.cds--btn--xs:not(.cds--btn--icon-only) .cds--btn__icon{margin-block-start:0}.cds--btn--icon-only.cds--btn--selected{background:var(--cds-background-selected,hsla(0,0%,55%,.2))}.cds--btn path[data-icon-path=inner-path]{fill:none}.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:var(--cds-icon-primary,#161616)}.cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon,.cds--btn--ghost.cds--btn--icon-only[disabled] .cds--btn__icon path:not([data-icon-path]):not([fill=none]),.cds--btn.cds--btn--icon-only.cds--btn--ghost[disabled]:hover .cds--btn__icon{fill:var(--cds-icon-on-color-disabled,#8d8d8d)}.cds--btn--ghost.cds--btn--icon-only[disabled],.cds--icon-tooltip--disabled .cds--tooltip-trigger__wrapper{cursor:not-allowed}.cds--icon-tooltip--disabled .cds--btn--icon-only[disabled]{pointer-events:none}.cds--btn--danger{background-color:var(--cds-button-danger-primary,#da1e28);border:1px solid transparent;color:var(--cds-text-on-color,#fff)}.cds--btn--danger:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger:active{background-color:var(--cds-button-danger-active,#750e13)}.cds--btn--danger .cds--btn__icon,.cds--btn--danger .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary{background-color:transparent;border-color:var(--cds-button-danger-secondary,#da1e28);border-style:solid;border-width:1px;color:var(--cds-button-danger-secondary,#da1e28)}.cds--btn--danger--tertiary:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger--tertiary:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger--tertiary .cds--btn__icon,.cds--btn--danger--tertiary .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger--tertiary:hover{border-color:var(--cds-button-danger-hover,#b81921);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary:focus{background-color:var(--cds-button-danger-primary,#da1e28);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary:active{background-color:var(--cds-button-danger-active,#750e13);border-color:var(--cds-button-danger-active,#750e13);color:var(--cds-text-on-color,#fff)}.cds--btn--danger--tertiary.cds--btn--disabled,.cds--btn--danger--tertiary.cds--btn--disabled:focus,.cds--btn--danger--tertiary.cds--btn--disabled:hover,.cds--btn--danger--tertiary:disabled,.cds--btn--danger--tertiary:focus:disabled,.cds--btn--danger--tertiary:hover:disabled{background:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--btn--danger--ghost{background-color:transparent;border:1px solid transparent;color:var(--cds-button-danger-secondary,#da1e28)}.cds--btn--danger--ghost:hover{background-color:var(--cds-button-danger-hover,#b81921)}.cds--btn--danger--ghost:focus{border-color:var(--cds-button-focus-color,var(--cds-focus,#0f62fe));box-shadow:inset 0 0 0 1px var(--cds-button-focus-color,var(--cds-focus,#0f62fe)),inset 0 0 0 2px var(--cds-background,#fff)}.cds--btn--danger--ghost:active{background-color:var(--cds-button-danger-active,#750e13)}.cds--btn--danger--ghost .cds--btn__icon,.cds--btn--danger--ghost .cds--btn__icon path:not([data-icon-path]):not([fill=none]){fill:currentColor}.cds--btn--danger--ghost{padding-inline-end:calc(var(--cds-layout-density-padding-inline-local) - .0625rem)}.cds--btn--danger--ghost .cds--btn__icon{margin-inline-start:.5rem;position:static}.cds--btn--danger--ghost:active,.cds--btn--danger--ghost:hover{color:var(--cds-text-on-color,#fff)}.cds--btn--danger--ghost.cds--btn--disabled,.cds--btn--danger--ghost.cds--btn--disabled:focus,.cds--btn--danger--ghost.cds--btn--disabled:hover,.cds--btn--danger--ghost:disabled,.cds--btn--danger--ghost:focus:disabled,.cds--btn--danger--ghost:hover:disabled{background:transparent;border-color:transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--btn--expressive{font-size:var(--cds-body-compact-02-font-size,1rem);font-weight:var(--cds-body-compact-02-font-weight,400);letter-spacing:var(--cds-body-compact-02-letter-spacing,0);line-height:var(--cds-body-compact-02-line-height,1.375);padding-block:min((var(--cds-layout-size-height-local) - var(--temp-expressive-1lh))/2 - .0625rem,var(--temp-padding-block-max))}.cds--btn--icon-only.cds--btn--expressive{padding:12px 13px}.cds--btn.cds--btn--expressive .cds--btn__icon{block-size:1.25rem;inline-size:1.25rem}.cds--btn-set .cds--btn.cds--btn--expressive{max-inline-size:20rem}.cds--btn.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--btn.cds--skeleton:active,.cds--btn.cds--skeleton:focus,.cds--btn.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--btn.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--btn.cds--skeleton:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--btn.cds--skeleton{background:CanvasText}.cds--btn.cds--skeleton:before{background:Canvas;forced-color-adjust:none}}.cds--btn.cds--skeleton{inline-size:9.375rem}.cds--btn-set{display:flex}.cds--btn-set--stacked{flex-direction:column}.cds--btn-set .cds--btn{inline-size:100%;max-inline-size:12.25rem}.cds--btn-set .cds--btn:not(:focus){box-shadow:-.0625rem 0 0 0 var(--cds-button-separator,#e0e0e0)}.cds--btn-set .cds--btn:first-of-type:not(:focus),.cds--btn-set .cds--btn:focus+.cds--btn{box-shadow:inherit}.cds--btn-set--stacked .cds--btn:not(:focus){box-shadow:0 -.0625rem 0 0 var(--cds-button-separator,#e0e0e0)}.cds--btn-set--stacked .cds--btn:first-of-type:not(:focus){box-shadow:inherit}.cds--btn-set .cds--btn.cds--btn--disabled{box-shadow:-.0625rem 0 0 0 var(--cds-icon-on-color-disabled,#8d8d8d)}.cds--btn-set .cds--btn.cds--btn--disabled:first-of-type{box-shadow:none}.cds--btn-set--stacked .cds--btn.cds--btn--disabled{box-shadow:0 -.0625rem 0 0 var(--cds-layer-selected-disabled,#8d8d8d)}.cds--btn-set--stacked .cds--btn.cds--btn--disabled:first-of-type{box-shadow:none}.cds--btn-set .cds--btn.cds--btn--loading{background-color:transparent;border-color:transparent;box-shadow:none}.cds--btn--sm .cds--badge-indicator{margin-block-start:.25rem;margin-inline-end:.25rem}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--btn:focus{color:Highlight;outline:1px solid Highlight}}[dir=rtl] .cds--btn-set .cds--btn:not(:focus){box-shadow:.0625rem 0 0 0 var(--cds-button-separator,#e0e0e0)}.cds--link{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--link *,.cds--link :after,.cds--link :before{box-sizing:inherit}.cds--link{color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe));display:inline-flex;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);outline:none;text-decoration:none;transition:color 70ms cubic-bezier(.2,0,.38,.9)}.cds--link:hover{color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce));text-decoration:underline}.cds--link:active:not(.cds--link--disabled),.cds--link:active:visited,.cds--link:active:visited:hover{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--link:active:not(.cds--link--disabled),.cds--link:active:visited,.cds--link:active:visited:hover{outline-style:dotted}}.cds--link:active:not(.cds--link--disabled),.cds--link:active:visited,.cds--link:active:visited:hover{color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe));outline-color:var(--cds-link-focus-text-color,var(--cds-focus,#0f62fe));text-decoration:underline}.cds--link:focus:not(.cds--link--disabled){outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--link:focus:not(.cds--link--disabled){outline-style:dotted}}.cds--link:focus:not(.cds--link--disabled){outline-color:var(--cds-link-focus-text-color,var(--cds-focus,#0f62fe));text-decoration:underline}.cds--link:visited{color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe))}.cds--link:visited:hover{color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce))}.cds--link--disabled,.cds--link--disabled:hover{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--link--disabled *,.cds--link--disabled :after,.cds--link--disabled :before,.cds--link--disabled:hover *,.cds--link--disabled:hover :after,.cds--link--disabled:hover :before{box-sizing:inherit}.cds--link--disabled,.cds--link--disabled:hover{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);font-weight:400;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);text-decoration:none}.cds--link.cds--link--visited:visited{color:var(--cds-link-visited-text-color,var(--cds-link-visited,#8a3ffc))}.cds--link.cds--link--visited:visited:hover{color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce))}.cds--link.cds--link--inline{display:inline;text-decoration:underline}.cds--link--disabled.cds--link--inline{text-decoration:underline}.cds--link--sm,.cds--link--sm.cds--link--disabled:hover{font-size:var(--cds-helper-text-01-font-size,.75rem);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333)}.cds--link--lg,.cds--link--lg.cds--link--disabled:hover{font-size:var(--cds-body-compact-02-font-size,1rem);font-weight:var(--cds-body-compact-02-font-weight,400);letter-spacing:var(--cds-body-compact-02-letter-spacing,0);line-height:var(--cds-body-compact-02-line-height,1.375)}.cds--link__icon{align-self:center;display:inline-flex;margin-inline-start:.5rem}:host(clabs-empty-state){color:var(--cds-text-primary,#161616);display:flex;flex-direction:column}:host(clabs-empty-state) .clabs--empty-state__header{font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4);margin:0;padding-block-end:.5rem}:host(clabs-empty-state) .clabs--empty-state___subtitle{color:var(--cds-text-secondary,#525252);font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);margin:0;padding-block-end:1rem}:host(clabs-empty-state) .clabs--empty-state__header--small{font-size:var(--cds-body-compact-02-font-size,1rem);font-weight:var(--cds-body-compact-02-font-weight,400);letter-spacing:var(--cds-body-compact-02-letter-spacing,0);line-height:var(--cds-body-compact-02-line-height,1.375);padding-block-end:.5rem}:host(clabs-empty-state) .clabs--empty-state__subtitle--small{font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}:host(clabs-empty-state) ::slotted(cds-button){display:block;margin-block-end:1rem}:host(clabs-empty-state) ::slotted(cds-link){display:inline-block}.clabs--empty-state__illustration{block-size:auto;margin-block-end:1rem}.clabs--empty-state__illustration.clabs--empty-state__illustration--lg{max-inline-size:5rem;min-inline-size:5rem}.clabs--empty-state__illustration.clabs--empty-state__illustration--sm{max-inline-size:4rem;min-inline-size:4rem}::slotted(.clabs--empty-state__illustration){block-size:auto;margin-block-end:1rem}::slotted(.clabs--empty-state__illustration--lg){max-inline-size:5rem;min-inline-size:5rem}::slotted(.clabs--empty-state__illustration--sm){max-inline-size:4rem;min-inline-size:4rem}']);

// node_modules/@carbon-labs/wc-empty-state/es/components/empty-state/src/empty-state.js
var emptyState = class extends i2 {
  constructor() {
    super(...arguments);
    this.size = "lg";
  }
};
emptyState.styles = styles2;
__decorate([
  n({ type: String, reflect: true })
], emptyState.prototype, "title", void 0);
__decorate([
  n({ type: String, reflect: true })
], emptyState.prototype, "subtitle", void 0);
__decorate([
  n({ type: String, reflect: true })
], emptyState.prototype, "size", void 0);
__decorate([
  n()
], emptyState.prototype, "kind", void 0);
__decorate([
  n({ type: String, reflect: true })
], emptyState.prototype, "illustrationTheme", void 0);
__decorate([
  r()
], emptyState.prototype, "hasIllustration", void 0);

// node_modules/uuid/dist/esm-browser/rng.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}

// node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (let i3 = 0; i3 < 256; ++i3) {
  byteToHex.push((i3 + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

// node_modules/uuid/dist/esm-browser/native.js
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native_default = {
  randomUUID
};

// node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i3 = 0; i3 < 16; ++i3) {
      buf[offset + i3] = rnds[i3];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
var v4_default = v4;

// node_modules/@carbon-labs/wc-empty-state/es/components/empty-state/src/assets/error-illustration.js
var { stablePrefix: clabsPrefix } = settings_default;
var errorIllustration = (theme = "light", size = "large") => {
  const svgId = v4_default();
  const svgClasses = e2({
    [`${clabsPrefix}--empty-state__illustration`]: true,
    [`${clabsPrefix}--empty-state__illustration-error`]: true,
    [`${clabsPrefix}--empty-state__illustration--${size}`]: true
  });
  const svgImage = theme === "dark" ? b`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            role="img"
            aria-hidden="true"
            class="${svgClasses}">
            <defs>
              <linearGradient
                id="a_dark_${svgId}"
                x1="38.9"
                y1="77.08"
                x2="38.9"
                y2="8.15"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#262626" />
                <stop offset="1" stop-color="#393939" />
              </linearGradient>
              <linearGradient
                id="b_dark_${svgId}"
                x1="12.43"
                y1="10.8"
                x2="76.33"
                y2="47.7"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" />
                <stop offset="0.52" stop-color="#393939" />
                <stop offset="0.61" stop-color="#393939" />
                <stop offset="0.99" stop-color="#161616" />
              </linearGradient>
              <linearGradient
                id="c_dark_${svgId}"
                x1="39.38"
                y1="31.37"
                x2="52.04"
                y2="9.45"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.11" stop-color="#6f6f6f" stop-opacity="0" />
                <stop offset="0.94" stop-color="#6f6f6f" />
              </linearGradient>
            </defs>
            <path fill="none" d="M0 0h80v80H0z" />
            <path
              opacity="0.25"
              d="M59.91 78.34l-43-24.83 4.86-2.81 43 24.83-4.86 2.81z" />
            <path
              d="M39 6.92c12.15 7 22 24 21.92 38S51 64.49 38.83 57.48s-22-24-21.92-38S26.83-.09 39 6.92z"
              fill="url(#a_dark_${svgId})" />
            <path
              d="M42.85 4.68C36.74 1.15 31.2.82 27.2 3.15l-3.66 2.13C27.52 3.08 33 3.45 39 6.92c12.15 7 22 24 21.92 38 0 6.77-2.35 11.58-6.13 13.94h-.07c-.32.2 3.66-2.1 3.66-2.1 4-2.3 6.39-7.18 6.41-14.12C64.81 28.7 55 11.69 42.85 4.68z"
              fill="url(#b_dark_${svgId})" />
            <path
              d="M29.11 3.91v.36a19.59 19.59 0 019.68 3c12 6.94 21.78 23.84 21.74 37.65 0 9.4-4.56 15.23-11.83 15.23a19.54 19.54 0 01-9.68-3C27 50.21 17.24 33.32 17.28 19.5c0-9.39 4.56-15.23 11.83-15.23v-.36m0 0c-7.21 0-12.17 5.71-12.2 15.59 0 14 9.77 31 21.92 38a20.12 20.12 0 009.87 3c7.21 0 12.17-5.71 12.2-15.6 0-13.95-9.77-30.95-21.92-38a20 20 0 00-9.87-3z"
              fill="url(#c_dark_${svgId})" />
            <path
              d="M38.93 49.79a6.9 6.9 0 01-2.66-2.51 6.11 6.11 0 01-.81-3v-1a2.26 2.26 0 01.81-2c.54-.35 1.43-.17 2.66.54a6.71 6.71 0 012.61 2.5 6.06 6.06 0 01.81 3v1a2.24 2.24 0 01-.81 2.05c-.54.29-1.41.12-2.61-.58zm-1.16-11.63L36 22.77V13l5.81 3.36v9.73l-1.64 13.46z"
              fill="#525252" />
          </svg>
        ` : b`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            role="img"
            aria-hidden="true"
            class="${svgClasses}">
            <defs>
              <linearGradient
                id="a_${svgId}"
                x1="29.96"
                y1="45.68"
                x2="53.15"
                y2="85.84"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" stop-opacity="0.05" />
                <stop offset="1" stop-opacity="0.1" />
              </linearGradient>
              <linearGradient
                id="b_${svgId}"
                x1="38.9"
                y1="52.59"
                x2="38.9"
                y2="3.3"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#c6c6c6" />
                <stop offset="0.78" stop-color="#e0e0e0" />
              </linearGradient>
              <linearGradient
                id="c_${svgId}"
                x1="18.07"
                y1="14.06"
                x2="71.64"
                y2="44.99"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#e0e0e0" />
                <stop offset="0.13" stop-color="#f4f4f4" />
                <stop offset="0.56" stop-color="#e0e0e0" />
                <stop offset="0.62" stop-color="#d8d8d8" />
                <stop offset="0.7" stop-color="#c6c6c6" />
                <stop offset="0.89" stop-color="#a8a8a8" />
                <stop offset="1" stop-color="#8d8d8d" />
              </linearGradient>
              <linearGradient
                id="d_${svgId}"
                x1="27.94"
                y1="51.19"
                x2="49.87"
                y2="13.21"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.54" stop-color="#d0d0d0" stop-opacity="0" />
                <stop offset="0.82" stop-color="#f1f1f1" stop-opacity="0.7" />
                <stop offset="0.94" stop-color="#fff" />
              </linearGradient>
              <linearGradient
                id="e_${svgId}"
                x1="28.66"
                y1="26.33"
                x2="47.15"
                y2="37"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff" />
                <stop offset="0.05" stop-color="#fdfdfd" />
                <stop offset="0.3" stop-color="#f6f6f6" />
                <stop offset="1" stop-color="#f4f4f4" />
              </linearGradient>
            </defs>
            <path fill="none" d="M0 0h80v80H0z" />
            <path
              fill="url(#a_${svgId})"
              d="M59.91 78.34l-43-24.83 4.86-2.81 43 24.83-4.86 2.81z" />
            <path
              d="M39 6.92c12.15 7 22 24 21.92 38S51 64.49 38.83 57.48s-22-24-21.92-38S26.83-.09 39 6.92z"
              fill="url(#b_${svgId})" />
            <path
              d="M42.85 4.68C36.74 1.15 31.2.82 27.2 3.15l-3.66 2.13C27.52 3.08 33 3.45 39 6.92c12.15 7 22 24 21.92 38 0 6.77-2.35 11.58-6.13 13.94h-.07c-.32.2 3.66-2.1 3.66-2.1 4-2.3 6.39-7.18 6.41-14.12C64.81 28.7 55 11.69 42.85 4.68z"
              fill="url(#c_${svgId})" />
            <path
              d="M29.11 3.91v.36a19.59 19.59 0 019.68 3c12 6.94 21.78 23.84 21.74 37.65 0 9.4-4.56 15.23-11.83 15.23a19.54 19.54 0 01-9.68-3C27 50.21 17.24 33.32 17.28 19.5c0-9.39 4.56-15.23 11.83-15.23v-.36m0 0c-7.21 0-12.17 5.71-12.2 15.59 0 14 9.77 31 21.92 38a20.12 20.12 0 009.87 3c7.21 0 12.17-5.71 12.2-15.6 0-13.95-9.77-30.95-21.92-38a20 20 0 00-9.87-3z"
              fill="url(#d_${svgId})" />
            <path
              d="M38.93 49.79a6.9 6.9 0 01-2.66-2.51 6.11 6.11 0 01-.81-3v-1a2.26 2.26 0 01.81-2c.54-.35 1.43-.17 2.66.54a6.71 6.71 0 012.61 2.5 6.06 6.06 0 01.81 3v1a2.24 2.24 0 01-.81 2.05c-.54.29-1.41.12-2.61-.58zm-1.16-11.63L36 22.77V13l5.81 3.36v9.73l-1.64 13.46z"
              fill="url(#e_${svgId})" />
          </svg>
        `;
  return svgImage;
};

// node_modules/@carbon-labs/wc-empty-state/es/components/empty-state/src/assets/no-data-illustration.js
var { stablePrefix: clabsPrefix2 } = settings_default;
var noDataIllustration = (theme = "light", size = "large") => {
  const svgId = v4_default();
  const svgClasses = e2({
    [`${clabsPrefix2}--empty-state__illustration`]: true,
    [`${clabsPrefix2}--empty-state__illustration-noData`]: true,
    [`${clabsPrefix2}--empty-state__illustration--${size}`]: true
  });
  const svgImage = theme === "dark" ? b`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            role="img"
            aria-hidden="true"
            class="${svgClasses}">
            <defs>
              <linearGradient
                id="a_dark_${svgId}"
                x1="11.12"
                y1="43.34"
                x2="40"
                y2="43.34"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#393939" />
                <stop offset="1" stop-color="#262626" />
              </linearGradient>
              <linearGradient
                id="b_dark_${svgId}"
                x1="40"
                y1="43.34"
                x2="68.88"
                y2="43.34"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#161616" />
                <stop offset="1" stop-color="#262626" />
              </linearGradient>
              <linearGradient
                id="c_dark_${svgId}"
                x1="32.78"
                y1="30.83"
                x2="47.22"
                y2="5.83"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" />
                <stop offset="1" stop-color="#393939" />
              </linearGradient>
            </defs>
            <path fill="none" d="M0 0h80v80H0z" />
            <path
              opacity="0.25"
              d="M40 78.34L11.13 61.67 40 45.01l28.86 16.66L40 78.34z" />
            <path
              fill="url(#a_dark_${svgId})"
              d="M40 68.35L11.12 51.68l.01-33.35L40 34.99v33.36z" />
            <path
              fill="url(#b_dark_${svgId})"
              d="M68.88 51.68L40 68.35V34.99l28.87-16.66.01 33.35z" />
            <path
              fill="url(#c_dark_${svgId})"
              d="M40 34.99L11.13 18.33 40 1.66l28.87 16.67L40 34.99z" />
            <path
              fill="#262626"
              d="M25.97 26.67l28.67-16.55-.42-.24-28.68 16.56.43.23z" />
            <path
              fill="#6f6f6f"
              d="M40 35.24L11.13 18.57v-.24l.21-.12 28.87 16.67-.21.11v.25z" />
            <path
              fill="#525252"
              d="M21.49 33.33l-8.2-4.73.01-5.69 8.19 4.74v5.68z" />
          </svg>
        ` : b`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            role="img"
            aria-hidden="true"
            class="${svgClasses}">
            <defs>
              <linearGradient
                id="a_${svgId}"
                x1="18.35"
                y1="74.17"
                x2="61.65"
                y2="49.17"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" stop-opacity="0.05" />
                <stop offset="1" stop-opacity="0.1" />
              </linearGradient>
              <linearGradient
                id="b_${svgId}"
                x1="15.16"
                y1="43.34"
                x2="40.31"
                y2="43.34"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#e0e0e0" />
                <stop offset="1" stop-color="#c6c6c6" />
              </linearGradient>
              <linearGradient
                id="c_${svgId}"
                x1="40"
                y1="43.34"
                x2="68.88"
                y2="43.34"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#a8a8a8" />
                <stop offset="1" stop-color="#c6c6c6" />
              </linearGradient>
              <linearGradient
                id="d_${svgId}"
                x1="18.35"
                y1="30.83"
                x2="61.65"
                y2="5.83"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#f4f4f4" />
                <stop offset="1" stop-color="#e0e0e0" />
              </linearGradient>
            </defs>
            <path fill="none" d="M0 0h80v80H0z" />
            <path
              fill="url(#a_${svgId})"
              d="M40 78.34L11.13 61.67 40 45.01l28.86 16.66L40 78.34z" />
            <path
              fill="url(#b_${svgId})"
              d="M40 68.35L11.12 51.68l.01-33.35L40 34.99v33.36z" />
            <path
              fill="url(#c_${svgId})"
              d="M68.88 51.68L40 68.35V34.99l28.87-16.66.01 33.35z" />
            <path
              fill="url(#d_${svgId})"
              d="M40 34.99L11.13 18.33 40 1.66l28.87 16.67L40 34.99z" />
            <path
              fill="#c6c6c6"
              d="M25.97 26.67l28.67-16.55-.42-.24-28.68 16.56.43.23z" />
            <path
              fill="#fff"
              d="M40 35.24L11.13 18.57v-.24l.21-.12 28.87 16.67-.21.11v.25zM21.49 33.33l-8.2-4.73.01-5.69 8.19 4.74v5.68z" />
          </svg>
        `;
  return svgImage;
};

// node_modules/@carbon-labs/wc-empty-state/es/components/empty-state/src/assets/no-tags-illustration.js
var { stablePrefix: clabsPrefix3 } = settings_default;
var noTagsIllustration = (theme = "light", size = "large") => {
  const svgId = v4_default();
  const svgClasses = e2({
    [`${clabsPrefix3}--empty-state__illustration`]: true,
    [`${clabsPrefix3}--empty-state__illustration-noTags`]: true,
    [`${clabsPrefix3}--empty-state__illustration--${size}`]: true
  });
  const svgImage = theme === "dark" ? b`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            class="${svgClasses}">
            <defs>
              <linearGradient
                id="prefix__c_dark_${svgId}"
                x1="34.96"
                y1="5.37"
                x2="48.48"
                y2="28.8"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" />
                <stop offset="1" stop-color="#393939" />
              </linearGradient>
              <linearGradient
                id="prefix__a_dark_${svgId}"
                x1="45.47"
                y1="46.54"
                x2="55.21"
                y2="46.54"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#262626" />
                <stop offset="1" stop-color="#393939" />
              </linearGradient>
              <linearGradient
                id="prefix__d_dark_${svgId}"
                x1="38.25"
                y1="70.94"
                x2="38.25"
                y2="-3.31"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#262626" />
                <stop offset="1" stop-color="#393939" />
              </linearGradient>
              <linearGradient
                id="prefix__e_dark_${svgId}"
                x1="28.77"
                y1="9.54"
                x2="48.15"
                y2="40.79"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.42" stop-color="#6f6f6f" />
                <stop offset="0.51" stop-color="#6e6e6e" stop-opacity="0.98" />
                <stop offset="0.56" stop-color="#6c6c6c" stop-opacity="0.9" />
                <stop offset="0.61" stop-color="#686868" stop-opacity="0.77" />
                <stop offset="0.65" stop-color="#636363" stop-opacity="0.58" />
                <stop offset="0.69" stop-color="#5c5c5c" stop-opacity="0.34" />
                <stop offset="0.72" stop-color="#545454" stop-opacity="0.05" />
                <stop offset="0.73" stop-color="#525252" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="prefix__b_dark_${svgId}"
                x1="51.28"
                y1="68.32"
                x2="51.34"
                y2="68.35"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.87" stop-color="#fff" />
                <stop offset="0.89" stop-color="#fefefe" stop-opacity="0.98" />
                <stop offset="0.9" stop-color="#fcfcfc" stop-opacity="0.93" />
                <stop offset="0.92" stop-color="#f8f8f8" stop-opacity="0.84" />
                <stop offset="0.94" stop-color="#f2f2f2" stop-opacity="0.72" />
                <stop offset="0.95" stop-color="#eaeaea" stop-opacity="0.56" />
                <stop offset="0.97" stop-color="#e1e1e1" stop-opacity="0.37" />
                <stop offset="0.99" stop-color="#d7d7d7" stop-opacity="0.14" />
                <stop offset="1" stop-color="#d0d0d0" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="prefix__f_dark_${svgId}"
                x1="51.09"
                y1="68.25"
                x2="51.22"
                y2="68.33"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.87" stop-color="#fff" />
                <stop offset="0.89" stop-color="#fefefe" stop-opacity="0.98" />
                <stop offset="0.9" stop-color="#fcfcfc" stop-opacity="0.93" />
                <stop offset="0.92" stop-color="#f8f8f8" stop-opacity="0.84" />
                <stop offset="0.94" stop-color="#f2f2f2" stop-opacity="0.72" />
                <stop offset="0.95" stop-color="#eaeaea" stop-opacity="0.56" />
                <stop offset="0.97" stop-color="#e1e1e1" stop-opacity="0.37" />
                <stop offset="0.99" stop-color="#d7d7d7" stop-opacity="0.14" />
                <stop offset="1" stop-color="#d0d0d0" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="prefix__g_dark_${svgId}"
                x1="51.41"
                y1="68.32"
                x2="51.46"
                y2="68.35"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.87" stop-color="#fff" />
                <stop offset="0.89" stop-color="#fefefe" stop-opacity="0.98" />
                <stop offset="0.9" stop-color="#fcfcfc" stop-opacity="0.93" />
                <stop offset="0.92" stop-color="#f8f8f8" stop-opacity="0.84" />
                <stop offset="0.94" stop-color="#f2f2f2" stop-opacity="0.72" />
                <stop offset="0.95" stop-color="#eaeaea" stop-opacity="0.56" />
                <stop offset="0.97" stop-color="#e1e1e1" stop-opacity="0.37" />
                <stop offset="0.99" stop-color="#d7d7d7" stop-opacity="0.14" />
                <stop offset="1" stop-color="#d0d0d0" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="prefix__h_dark_${svgId}"
                x1="33.94"
                y1="119.46"
                x2="42.79"
                y2="119.46"
                gradientTransform="translate(0 -100)"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#262626" />
                <stop offset="1" stop-color="#161616" />
              </linearGradient>
              <linearGradient
                id="prefix__i_dark_${svgId}"
                x1="35.3"
                y1="23.46"
                x2="38.85"
                y2="17.31"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#6f6f6f" />
                <stop offset="0.09" stop-color="#6f6f6f" stop-opacity="0.9" />
                <stop offset="0.24" stop-color="#6f6f6f" stop-opacity="0.63" />
                <stop offset="0.44" stop-color="#6f6f6f" stop-opacity="0.19" />
                <stop offset="0.52" stop-color="#6f6f6f" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path fill="none" d="M0 0h80v80H0z" />
            <path
              opacity="0.25"
              d="M51.59 78.34l-26.8-15.48 3.62-2.09 26.8 15.48-3.62 2.09z" />
            <path
              fill="url(#prefix__c_dark_${svgId})"
              d="M45.47 30.38l6.58-3.76 3.12-1.85v.15a1.28 1.28 0 00-.17-.47L42.19 2.21c-.24-.42-.63-.65-.88-.51L28.47 9.12a.44.44 0 00-.18.4l13.88 3a1.38 1.38 0 00.62 1.07z" />
            <path
              fill="url(#prefix__a_dark_${svgId})"
              d="M55 66.29a.46.46 0 00.18-.41V25.06a1 1 0 000-.29l-3.12 1.85-6.58 3.76 6.06 37.92z" />
            <path
              fill="url(#prefix__d_dark_${svgId})"
              d="M51.53 26.47L38.69 4.23c-.25-.42-.64-.64-.88-.5L25 11.14a.43.43 0 00-.18.4v40.82a1.35 1.35 0 00.62 1.07l25.65 14.83c.34.2.62 0 .62-.36V27.08a1.33 1.33 0 00-.18-.61zM37.08 24a6.93 6.93 0 01-3.14-5.44c0-2 1.4-2.81 3.14-1.81a7 7 0 013.13 5.44c0 2.01-1.4 2.81-3.13 1.81z" />
            <path
              fill="url(#prefix__e_dark_${svgId})"
              d="M39.05 4a1.71 1.71 0 00-.64-.64l-.6.34a.3.3 0 01.16 0 1 1 0 01.72.55l12.84 22.22a1.33 1.33 0 01.18.61V67.9a.41.41 0 01-.19.4l.58-.34V27.08a1.75 1.75 0 00-.24-.82z" />
            <path d="M51.28 68.33z" fill="url(#prefix__b_dark_${svgId})" />
            <path
              d="M51.23 68.32a.42.42 0 01-.14-.06.42.42 0 00.14.06z"
              fill="url(#prefix__f_dark_${svgId})" />
            <path d="M51.48 68.32h-.08z" fill="url(#prefix__g_dark_${svgId})" />
            <path
              fill="url(#prefix__h_dark_${svgId})"
              d="M39.66 22.17a6.93 6.93 0 01-3.14-5.44 1.36 1.36 0 010-.21c-1.48-.56-2.6.27-2.6 2.05A6.93 6.93 0 0037.08 24c1.66 1 3 .24 3.11-1.6a3.49 3.49 0 01-.53-.23z" />
            <path
              fill="url(#prefix__i_dark_${svgId})"
              d="M35.67 16.33a2.88 2.88 0 011.41.43 7 7 0 013.13 5.44c0 1.42-.7 2.24-1.73 2.24a2.82 2.82 0 01-1.4-.43 6.93 6.93 0 01-3.14-5.44c0-1.42.7-2.24 1.73-2.24m0-.41c-1.3 0-2.15 1-2.15 2.65a7.3 7.3 0 003.35 5.8 3.23 3.23 0 001.61.48c1.3 0 2.15-1 2.15-2.65a7.29 7.29 0 00-3.35-5.8 3.2 3.2 0 00-1.61-.48z" />
          </svg>
        ` : b`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            class="${svgClasses}">
            <defs>
              <linearGradient
                id="prefix__b_${svgId}"
                x1="634.81"
                y1="667.18"
                x2="644.85"
                y2="684.56"
                gradientTransform="matrix(.87 .5 -1 .58 161.49 -640.11)"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" stop-opacity="0.05" />
                <stop offset="1" stop-opacity="0.1" />
              </linearGradient>
              <linearGradient
                id="prefix__c_${svgId}"
                x1="29.21"
                y1="7.75"
                x2="56.14"
                y2="23.3"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#f4f4f4" />
                <stop offset="0.78" stop-color="#e0e0e0" />
                <stop offset="1" stop-color="#c6c6c6" />
              </linearGradient>
              <linearGradient
                id="prefix__d_${svgId}"
                x1="45.47"
                y1="46.54"
                x2="55.21"
                y2="46.54"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#a8a8a8" />
                <stop offset="1" stop-color="#c6c6c6" />
              </linearGradient>
              <linearGradient
                id="prefix__e_${svgId}"
                x1="38.25"
                y1="59.31"
                x2="38.25"
                y2="2.99"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#c6c6c6" />
                <stop offset="0.78" stop-color="#e0e0e0" />
              </linearGradient>
              <linearGradient
                id="prefix__f_${svgId}"
                x1="28.77"
                y1="9.54"
                x2="48.15"
                y2="40.79"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.42" stop-color="#fff" />
                <stop offset="0.49" stop-color="#fff" stop-opacity="0.99" />
                <stop offset="0.53" stop-color="#fdfdfd" stop-opacity="0.96" />
                <stop offset="0.56" stop-color="#fafafa" stop-opacity="0.9" />
                <stop offset="0.59" stop-color="#f6f6f6" stop-opacity="0.82" />
                <stop offset="0.62" stop-color="#f2f2f2" stop-opacity="0.71" />
                <stop offset="0.65" stop-color="#ebebeb" stop-opacity="0.59" />
                <stop offset="0.67" stop-color="#e4e4e4" stop-opacity="0.43" />
                <stop offset="0.7" stop-color="#dcdcdc" stop-opacity="0.25" />
                <stop offset="0.72" stop-color="#d3d3d3" stop-opacity="0.06" />
                <stop offset="0.73" stop-color="#d0d0d0" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="prefix__a_${svgId}"
                x1="51.28"
                y1="68.32"
                x2="51.34"
                y2="68.35"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.87" stop-color="#fff" />
                <stop offset="0.89" stop-color="#fefefe" stop-opacity="0.98" />
                <stop offset="0.9" stop-color="#fcfcfc" stop-opacity="0.93" />
                <stop offset="0.92" stop-color="#f8f8f8" stop-opacity="0.84" />
                <stop offset="0.94" stop-color="#f2f2f2" stop-opacity="0.72" />
                <stop offset="0.95" stop-color="#eaeaea" stop-opacity="0.56" />
                <stop offset="0.97" stop-color="#e1e1e1" stop-opacity="0.37" />
                <stop offset="0.99" stop-color="#d7d7d7" stop-opacity="0.14" />
                <stop offset="1" stop-color="#d0d0d0" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="prefix__g_${svgId}"
                x1="51.09"
                y1="68.25"
                x2="51.22"
                y2="68.33"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.87" stop-color="#fff" />
                <stop offset="0.89" stop-color="#fefefe" stop-opacity="0.98" />
                <stop offset="0.9" stop-color="#fcfcfc" stop-opacity="0.93" />
                <stop offset="0.92" stop-color="#f8f8f8" stop-opacity="0.84" />
                <stop offset="0.94" stop-color="#f2f2f2" stop-opacity="0.72" />
                <stop offset="0.95" stop-color="#eaeaea" stop-opacity="0.56" />
                <stop offset="0.97" stop-color="#e1e1e1" stop-opacity="0.37" />
                <stop offset="0.99" stop-color="#d7d7d7" stop-opacity="0.14" />
                <stop offset="1" stop-color="#d0d0d0" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="prefix__h_${svgId}"
                x1="51.41"
                y1="68.32"
                x2="51.46"
                y2="68.35"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.87" stop-color="#fff" />
                <stop offset="0.89" stop-color="#fefefe" stop-opacity="0.98" />
                <stop offset="0.9" stop-color="#fcfcfc" stop-opacity="0.93" />
                <stop offset="0.92" stop-color="#f8f8f8" stop-opacity="0.84" />
                <stop offset="0.94" stop-color="#f2f2f2" stop-opacity="0.72" />
                <stop offset="0.95" stop-color="#eaeaea" stop-opacity="0.56" />
                <stop offset="0.97" stop-color="#e1e1e1" stop-opacity="0.37" />
                <stop offset="0.99" stop-color="#d7d7d7" stop-opacity="0.14" />
                <stop offset="1" stop-color="#d0d0d0" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="prefix__i_${svgId}"
                x1="33.94"
                y1="19.46"
                x2="42.79"
                y2="19.46"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#a4a4a4" />
                <stop offset="1" stop-color="#8c8c8c" />
              </linearGradient>
              <linearGradient
                id="prefix__j_${svgId}"
                x1="35.3"
                y1="23.46"
                x2="38.85"
                y2="17.31"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff" />
                <stop offset="0.04" stop-color="#fdfdfd" stop-opacity="0.96" />
                <stop offset="0.12" stop-color="#f7f7f7" stop-opacity="0.84" />
                <stop offset="0.23" stop-color="#eee" stop-opacity="0.64" />
                <stop offset="0.36" stop-color="#e2e2e2" stop-opacity="0.38" />
                <stop offset="0.5" stop-color="#d2d2d2" stop-opacity="0.04" />
                <stop offset="0.52" stop-color="#d0d0d0" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path fill="none" d="M0 0h80v80H0z" />
            <path
              fill="url(#prefix__b_${svgId})"
              d="M51.59 78.34l-26.8-15.48 3.62-2.09 26.8 15.48-3.62 2.09z" />
            <path
              fill="url(#prefix__c_${svgId})"
              d="M45.47 30.38l6.58-3.76 3.12-1.85v.15a1.28 1.28 0 00-.17-.47L42.19 2.21c-.24-.42-.63-.65-.88-.51L28.47 9.12a.44.44 0 00-.18.4l13.88 3a1.38 1.38 0 00.62 1.07z" />
            <path
              fill="url(#prefix__d_${svgId})"
              d="M55 66.29a.46.46 0 00.18-.41V25.06a1 1 0 000-.29l-3.12 1.85-6.58 3.76 6.06 37.92z" />
            <path
              fill="url(#prefix__e_${svgId})"
              d="M51.53 26.47L38.69 4.23c-.25-.42-.64-.64-.88-.5L25 11.14a.43.43 0 00-.18.4v40.82a1.35 1.35 0 00.62 1.07l25.65 14.83c.34.2.62 0 .62-.36V27.08a1.33 1.33 0 00-.18-.61zM37.08 24a6.93 6.93 0 01-3.14-5.44c0-2 1.4-2.81 3.14-1.81a7 7 0 013.13 5.44c0 2.01-1.4 2.81-3.13 1.81z" />
            <path
              fill="url(#prefix__f_${svgId})"
              d="M39.05 4a1.71 1.71 0 00-.64-.64l-.6.34a.3.3 0 01.16 0 1 1 0 01.72.55l12.84 22.22a1.33 1.33 0 01.18.61V67.9a.41.41 0 01-.19.4l.58-.34V27.08a1.75 1.75 0 00-.24-.82z" />
            <path d="M51.28 68.33z" fill="url(#prefix__a_${svgId})" />
            <path
              d="M51.23 68.32a.42.42 0 01-.14-.06.42.42 0 00.14.06z"
              fill="url(#prefix__g_${svgId})" />
            <path d="M51.48 68.32h-.08z" fill="url(#prefix__h_${svgId})" />
            <path
              fill="url(#prefix__i_${svgId})"
              d="M39.66 22.17a6.93 6.93 0 01-3.14-5.44 1.36 1.36 0 010-.21c-1.48-.56-2.6.27-2.6 2.05A6.93 6.93 0 0037.08 24c1.66 1 3 .24 3.11-1.6a3.49 3.49 0 01-.53-.23z" />
            <path
              fill="url(#prefix__j_${svgId})"
              d="M35.67 16.33a2.88 2.88 0 011.41.43 7 7 0 013.13 5.44c0 1.42-.7 2.24-1.73 2.24a2.82 2.82 0 01-1.4-.43 6.93 6.93 0 01-3.14-5.44c0-1.42.7-2.24 1.73-2.24m0-.41c-1.3 0-2.15 1-2.15 2.65a7.3 7.3 0 003.35 5.8 3.23 3.23 0 001.61.48c1.3 0 2.15-1 2.15-2.65a7.29 7.29 0 00-3.35-5.8 3.2 3.2 0 00-1.61-.48z" />
          </svg>
        `;
  return svgImage;
};

// node_modules/@carbon-labs/wc-empty-state/es/components/empty-state/src/assets/not-found-illustration.js
var { stablePrefix: clabsPrefix4 } = settings_default;
var noFoundIllustration = (theme = "light", size = "large") => {
  const svgId = v4_default();
  const svgClasses = e2({
    [`${clabsPrefix4}--empty-state__illustration`]: true,
    [`${clabsPrefix4}--empty-state__illustration-notFound`]: true,
    [`${clabsPrefix4}--empty-state__illustration--${size}`]: true
  });
  const svgImage = theme === "dark" ? b`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            class="${svgClasses}">
            <defs>
              <linearGradient
                id="prefix__a_dark_${svgId}"
                x1="2.6"
                y1="-12.81"
                x2="43.48"
                y2="58"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" />
                <stop offset="0.69" stop-color="#393939" />
                <stop offset="0.94" stop-color="#393939" />
                <stop offset="1" stop-color="#393939" />
              </linearGradient>
              <linearGradient
                id="prefix__b_dark_${svgId}"
                x1="43.74"
                y1="57.07"
                x2="69.51"
                y2="57.07"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#262626" />
                <stop offset="1" stop-color="#393939" />
              </linearGradient>
              <linearGradient
                id="prefix__c_dark_${svgId}"
                x1="15.1"
                y1="10.36"
                x2="41.51"
                y2="56.09"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" />
                <stop offset="1" stop-color="#262626" />
              </linearGradient>
              <linearGradient
                id="prefix__d_dark_${svgId}"
                x1="34.92"
                y1="-46.56"
                x2="34.92"
                y2="97.82"
                gradientTransform="rotate(30 34.925 27.562)"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#393939" />
                <stop offset="0.48" stop-color="#393939" stop-opacity="0.69" />
                <stop offset="1" stop-color="#262626" stop-opacity="0.1" />
              </linearGradient>
              <linearGradient
                id="prefix__e_dark_${svgId}"
                x1="24.56"
                y1="9.61"
                x2="50.36"
                y2="54.3"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#6f6f6f" stop-opacity="0" />
                <stop offset="0.17" stop-color="#6f6f6f" stop-opacity="0.03" />
                <stop offset="0.31" stop-color="#6f6f6f" stop-opacity="0.12" />
                <stop offset="0.44" stop-color="#6f6f6f" stop-opacity="0.27" />
                <stop offset="0.56" stop-color="#6f6f6f" stop-opacity="0.49" />
                <stop offset="0.68" stop-color="#6f6f6f" stop-opacity="0.77" />
                <stop offset="0.73" stop-color="#6f6f6f" stop-opacity="0.92" />
                <stop offset="1" stop-color="#6f6f6f" />
              </linearGradient>
              <linearGradient
                id="prefix__f_dark_${svgId}"
                x1="15.86"
                y1="-20.5"
                x2="56.75"
                y2="50.32"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" />
                <stop offset="0.69" stop-color="#393939" />
                <stop offset="0.94" stop-color="#393939" />
                <stop offset="1" stop-color="#262626" />
              </linearGradient>
            </defs>
            <path fill="none" d="M0 0h80v80H0z" />
            <path
              d="M12.69 18c0 12 8.75 26.84 19.56 33.08 5.64 3.26 10.73 3.52 14.3 1.32l4.83-2.79-1.19-1.93c-3.25 1.73-7.72 1.38-12.67-1.48-9.9-5.74-17.92-19.32-17.92-30.35 0-5.09 1.71-8.75 4.53-10.65l-1.2-1.95L18.1 6c-3.35 2-5.41 6.12-5.41 12"
              fill="url(#prefix__a_dark_${svgId})" />
            <path
              d="M67.31 64.92s.11.86-1.89 2.24-2.73 1.18-2.73 1.18L48.57 49.22l4.62-3.42z"
              fill="url(#prefix__b_dark_${svgId})" />
            <path
              d="M37.68 46.05c-9.9-5.71-17.93-19.29-17.93-30.32 0-3.79.95-6.78 2.6-8.85-4.87.76-8.09 5-8.09 12 0 11 8 24.61 17.93 30.32 6.5 3.75 12.19 3.19 15.33-.76-2.82.44-6.21-.31-9.84-2.41"
              fill="url(#prefix__c_dark_${svgId})" />
            <ellipse
              cx="34.92"
              cy="27.57"
              rx="14.55"
              ry="25.2"
              transform="rotate(-30 34.93 27.58)"
              opacity="0.5"
              fill="url(#prefix__d_dark_${svgId})" />
            <path
              d="M67.1 75l-12.84-7.41c1.1-1.15 1.1-2.36-.77-3.44h-.05L26.17 48.4l-.09-.06c-2.59-1.49-5.82-1.05-8.42.45s-3.57 3.48-1 5l27.43 15.79a7.2 7.2 0 005.5.53l13 7.51c1.23.72 5.76-1.89 4.51-2.62z"
              opacity="0.25" />
            <path
              d="M42.88 50.79a16.42 16.42 0 01-8.06-2.47c-9.88-5.7-17.92-19.63-17.92-31 0-5.57 1.89-9.73 5.32-11.72S30.2 4 35 6.81c9.91 5.71 18 19.64 18 31.05 0 5.57-1.89 9.73-5.32 11.71a9.31 9.31 0 01-4.8 1.22zM27 4.76a9 9 0 00-4.54 1.17c-3.3 1.9-5.12 5.93-5.12 11.35 0 11.28 8 25 17.72 30.68 4.69 2.71 9.09 3.16 12.39 1.25s5.12-5.94 5.12-11.35c0-11.28-7.95-25-17.72-30.69A16 16 0 0027 4.76z"
              fill="url(#prefix__e_dark_${svgId})"
              opacity="0.6" />
            <path
              d="M57 37.5c0-12-8.75-26.85-19.56-33.08C31.82 1.16 26.73.89 23.16 3.09l-4.83 2.78 1.19 1.94c3.25-1.74 7.72-1.38 12.67 1.47C42.09 15 50.11 28.57 50.11 39.6c0 4.86-1.55 8.4-4.11 10.4-.12.1-1.17.73-1.31.82l2.12 1.42 4.83-2.79C55 47.44 57 43.34 57 37.5"
              fill="url(#prefix__f_dark_${svgId})" />
          </svg>
        ` : b`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            class="${svgClasses}">
            <defs>
              <linearGradient
                id="prefix__a_${svgId}"
                x1="2.6"
                y1="-12.81"
                x2="43.48"
                y2="58"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#f4f4f4" />
                <stop offset="0.69" stop-color="#e0e0e0" />
                <stop offset="0.94" stop-color="#c4c4c4" />
                <stop offset="1" stop-color="#a8a8a8" />
              </linearGradient>
              <linearGradient
                id="prefix__b_${svgId}"
                x1="48.57"
                y1="57.07"
                x2="67.31"
                y2="57.07"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#a8a8a8" />
                <stop offset="1" stop-color="#c6c6c6" />
              </linearGradient>
              <linearGradient
                id="prefix__c_${svgId}"
                x1="15.1"
                y1="10.36"
                x2="41.51"
                y2="56.09"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#bdbdbd" />
                <stop offset="1" stop-color="#a3a3a3" />
              </linearGradient>
              <linearGradient
                id="prefix__d_${svgId}"
                x1="34.92"
                y1="-46.56"
                x2="34.92"
                y2="97.82"
                gradientTransform="rotate(30 34.925 27.562)"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#6e6e6e" />
                <stop offset="0.48" stop-color="#787878" stop-opacity="0.69" />
                <stop offset="0.72" stop-color="#818181" stop-opacity="0.41" />
                <stop offset="1" stop-color="#8c8c8c" stop-opacity="0.1" />
              </linearGradient>
              <linearGradient
                id="prefix__e_${svgId}"
                x1="26.4"
                y1="71.67"
                x2="55.54"
                y2="54.85"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#565656" stop-opacity="0.05" />
                <stop offset="1" stop-color="#171717" stop-opacity="0.1" />
              </linearGradient>
              <linearGradient
                id="prefix__f_${svgId}"
                x1="24.56"
                y1="9.61"
                x2="50.36"
                y2="54.3"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff" stop-opacity="0" />
                <stop offset="0.12" stop-color="#fff" stop-opacity="0.01" />
                <stop offset="0.22" stop-color="#fff" stop-opacity="0.05" />
                <stop offset="0.31" stop-color="#fff" stop-opacity="0.12" />
                <stop offset="0.4" stop-color="#fff" stop-opacity="0.21" />
                <stop offset="0.48" stop-color="#fff" stop-opacity="0.34" />
                <stop offset="0.56" stop-color="#fff" stop-opacity="0.49" />
                <stop offset="0.64" stop-color="#fff" stop-opacity="0.66" />
                <stop offset="0.71" stop-color="#fff" stop-opacity="0.86" />
                <stop offset="0.73" stop-color="#fff" stop-opacity="0.92" />
                <stop offset="1" stop-color="#fff" />
              </linearGradient>
              <linearGradient
                id="prefix__g_${svgId}"
                x1="15.86"
                y1="-20.5"
                x2="56.75"
                y2="50.32"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#f4f4f4" />
                <stop offset="0.69" stop-color="#e0e0e0" />
                <stop offset="0.94" stop-color="#c4c4c4" />
                <stop offset="1" stop-color="#a8a8a8" />
              </linearGradient>
            </defs>
            <path fill="none" d="M0 0h80v80H0z" />
            <path
              d="M12.69 18c0 12 8.75 26.84 19.56 33.08 5.64 3.26 10.73 3.52 14.3 1.32l4.83-2.79-1.19-1.93c-3.25 1.73-7.72 1.38-12.67-1.48-9.9-5.74-17.92-19.32-17.92-30.35 0-5.09 1.71-8.75 4.53-10.65l-1.2-1.95L18.1 6c-3.35 2-5.41 6.12-5.41 12"
              fill="url(#prefix__a_${svgId})" />
            <path
              d="M67.31 64.92s.11.86-1.89 2.24-2.73 1.18-2.73 1.18L48.57 49.22l4.62-3.42z"
              fill="url(#prefix__b_${svgId})" />
            <path
              d="M37.68 46.05c-9.9-5.71-17.93-19.29-17.93-30.32 0-3.79.95-6.78 2.6-8.85-4.87.76-8.09 5-8.09 12 0 11 8 24.61 17.93 30.32 6.5 3.75 12.19 3.19 15.33-.76-2.82.44-6.21-.31-9.84-2.41"
              fill="url(#prefix__c_${svgId})" />
            <ellipse
              cx="34.92"
              cy="27.57"
              rx="14.55"
              ry="25.2"
              transform="rotate(-30 34.93 27.58)"
              opacity="0.5"
              fill="url(#prefix__d_${svgId})" />
            <path
              d="M67.1 75l-12.84-7.41c1.1-1.15 1.1-2.36-.77-3.44h-.05L26.17 48.4l-.09-.06c-2.59-1.49-5.82-1.05-8.42.45s-3.57 3.48-1 5l27.43 15.79a7.2 7.2 0 005.5.53l13 7.51c1.23.72 5.76-1.89 4.51-2.62z"
              fill="url(#prefix__e_${svgId})" />
            <path
              d="M42.88 50.79a16.42 16.42 0 01-8.06-2.47c-9.88-5.7-17.92-19.63-17.92-31 0-5.57 1.89-9.73 5.32-11.72S30.2 4 35 6.81c9.91 5.71 18 19.64 18 31.05 0 5.57-1.89 9.73-5.32 11.71a9.31 9.31 0 01-4.8 1.22zM27 4.76a9 9 0 00-4.54 1.17c-3.3 1.9-5.12 5.93-5.12 11.35 0 11.28 8 25 17.72 30.68 4.69 2.71 9.09 3.16 12.39 1.25s5.12-5.94 5.12-11.35c0-11.28-7.95-25-17.72-30.69A16 16 0 0027 4.76z"
              fill="url(#prefix__f_${svgId})"
              opacity="0.6" />
            <path
              d="M57 37.5c0-12-8.75-26.85-19.56-33.08C31.82 1.16 26.73.89 23.16 3.09l-4.83 2.78 1.19 1.94c3.25-1.74 7.72-1.38 12.67 1.47C42.09 15 50.11 28.57 50.11 39.6c0 4.86-1.55 8.4-4.11 10.4-.12.1-1.17.73-1.31.82l2.12 1.42 4.83-2.79C55 47.44 57 43.34 57 37.5"
              fill="url(#prefix__g_${svgId})" />
          </svg>
        `;
  return svgImage;
};

// node_modules/@carbon-labs/wc-empty-state/es/components/empty-state/src/assets/notifications-illustration.js
var { stablePrefix: clabsPrefix5 } = settings_default;
var notificationsIllustration = (theme = "light", size = "large") => {
  const svgId = v4_default();
  const svgClasses = e2({
    [`${clabsPrefix5}--empty-state__illustration`]: true,
    [`${clabsPrefix5}--empty-state__illustration-notification`]: true,
    [`${clabsPrefix5}--empty-state__illustration--${size}`]: true
  });
  const svgImage = theme === "dark" ? b`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            class="${svgClasses}">
            <defs>
              <linearGradient
                id="prefix__a_dark_${svgId}"
                x1="30.05"
                y1="54.31"
                x2="35.5"
                y2="54.31"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#161616" />
                <stop offset="1" stop-color="#262626" />
              </linearGradient>
              <linearGradient
                id="prefix__b_dark_${svgId}"
                x1="28.61"
                y1="-3.97"
                x2="70.69"
                y2="68.92"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" />
                <stop offset="0.52" stop-color="#393939" />
                <stop offset="0.61" stop-color="#393939" />
                <stop offset="1" stop-color="#161616" />
              </linearGradient>
              <linearGradient
                id="prefix__c_dark_${svgId}"
                x1="38.01"
                y1="69.51"
                x2="38.01"
                y2="-0.42"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#262626" />
                <stop offset="1" stop-color="#393939" />
              </linearGradient>
              <linearGradient
                id="prefix__d_dark_${svgId}"
                x1="15.14"
                y1="5.72"
                x2="63.06"
                y2="33.52"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.78" stop-color="#6f6f6f" />
                <stop offset="0.81" stop-color="#6c6c6c" stop-opacity="0.96" />
                <stop offset="0.85" stop-color="#636363" stop-opacity="0.84" />
                <stop offset="0.89" stop-color="#545454" stop-opacity="0.64" />
                <stop offset="0.93" stop-color="#404040" stop-opacity="0.35" />
                <stop offset="0.97" stop-color="#262626" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path fill="none" d="M0 0h80v80H0z" />
            <path
              opacity="0.25"
              d="M15.13 52.11l45.5 26.28 4.25-2.51L19.4 49.63l-4.27 2.48z" />
            <path
              d="M32.66 52.85l-2.25 4.22a1.08 1.08 0 01-.36.35l2.83-1.65a1.08 1.08 0 00.36-.35l2.26-4.22z"
              fill="url(#prefix__a_dark_${svgId})" />
            <path
              d="M63.45 26.58L20.63 1.86a1 1 0 00-1-.1l-4 2.3a1 1 0 011 .1l42.85 24.72a3.17 3.17 0 011.42 2.47l-.1 36.08a1 1 0 01-.42.91l4-2.3a1 1 0 00.42-.91L64.88 29a3.14 3.14 0 00-1.43-2.42z"
              fill="url(#prefix__b_dark_${svgId})" />
            <path
              d="M59.48 28.88a3.17 3.17 0 011.42 2.47l-.1 36.08c0 .9-.65 1.26-1.42.81l-26.7-15.4-2.26 4.22a.9.9 0 01-1.33.28 3.07 3.07 0 01-1.22-1.53l-2.33-7.09-9-5.2a3.15 3.15 0 01-1.43-2.46L15.23 5c0-.9.64-1.27 1.43-.81z"
              fill="url(#prefix__c_dark_${svgId})" />
            <path
              fill="#525252"
              d="M57.99 37.07l-.01 3.9L18.03 17.9l.01-3.9 39.95 23.07zM57.99 45.11l-.01 3.91-39.95-23.07.01-3.9 39.95 23.06zM44.62 45.04l-.01 3.9L18.03 33.6l.01-3.9 26.58 15.34z" />
            <path
              d="M60.76 30.55a2.54 2.54 0 01.14.8v3.95l.41-.13v-3.82a3.54 3.54 0 00-1.63-2.82L16.86 3.8a2.09 2.09 0 00-.44-.19l-.78.45a1 1 0 01.21-.06h.48l.27.12 21.47 12.4 21.41 12.36a3.19 3.19 0 011.28 1.67z"
              fill="url(#prefix__d_dark_${svgId})" />
          </svg>
        ` : b`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            class="${svgClasses}">
            <defs>
              <linearGradient
                id="prefix__a_${svgId}"
                x1="61.44"
                y1="66.99"
                x2="61.44"
                y2="60.01"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#c6c6c6" />
                <stop offset="0.78" stop-color="#e0e0e0" />
              </linearGradient>
              <linearGradient
                id="prefix__b_${svgId}"
                x1="28.49"
                y1="44.06"
                x2="53.04"
                y2="86.58"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" stop-opacity="0.05" />
                <stop offset="1" stop-opacity="0.1" />
              </linearGradient>
              <linearGradient
                id="prefix__c_${svgId}"
                x1="30.05"
                y1="54.31"
                x2="35.5"
                y2="54.31"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#a4a4a4" />
                <stop offset="1" stop-color="#bebebe" />
              </linearGradient>
              <linearGradient
                id="prefix__d_${svgId}"
                x1="28.61"
                y1="-3.97"
                x2="70.69"
                y2="68.92"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#f4f4f4" />
                <stop offset="0.52" stop-color="#e0e0e0" />
                <stop offset="0.56" stop-color="#d8d8d8" />
                <stop offset="0.61" stop-color="#c6c6c6" />
                <stop offset="0.89" stop-color="#a8a8a8" />
                <stop offset="0.96" stop-color="#8d8d8d" />
              </linearGradient>
              <linearGradient
                id="prefix__e_${svgId}"
                x1="38.01"
                y1="59.43"
                x2="38.01"
                y2="3.27"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#c6c6c6" />
                <stop offset="0.78" stop-color="#e0e0e0" />
              </linearGradient>
              <linearGradient
                id="prefix__f_${svgId}"
                x1="21.52"
                y1="36.2"
                x2="61.39"
                y2="36.2"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#e0e0e0" />
                <stop offset="1" stop-color="#c6c6c6" />
              </linearGradient>
              <linearGradient
                id="prefix__h_${svgId}"
                x1="17.68"
                y1="15.75"
                x2="55.37"
                y2="37.5"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff" />
                <stop offset="0.05" stop-color="#fdfdfd" />
                <stop offset="0.3" stop-color="#f6f6f6" />
                <stop offset="1" stop-color="#f4f4f4" />
              </linearGradient>
              <linearGradient
                id="prefix__i_${svgId}"
                x1="14.24"
                y1="21.81"
                x2="51.92"
                y2="43.56"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff" />
                <stop offset="0.05" stop-color="#fdfdfd" />
                <stop offset="0.3" stop-color="#f6f6f6" />
                <stop offset="1" stop-color="#f4f4f4" />
              </linearGradient>
              <linearGradient
                id="prefix__j_${svgId}"
                x1="10.96"
                y1="27.56"
                x2="48.66"
                y2="49.33"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff" />
                <stop offset="0.05" stop-color="#fdfdfd" />
                <stop offset="0.3" stop-color="#f6f6f6" />
                <stop offset="1" stop-color="#f4f4f4" />
              </linearGradient>
              <linearGradient
                id="prefix__k_${svgId}"
                x1="15.14"
                y1="5.72"
                x2="63.06"
                y2="33.52"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.78" stop-color="#fff" />
                <stop offset="0.8" stop-color="#fefefe" stop-opacity="0.98" />
                <stop offset="0.82" stop-color="#fcfcfc" stop-opacity="0.93" />
                <stop offset="0.85" stop-color="#f8f8f8" stop-opacity="0.84" />
                <stop offset="0.87" stop-color="#f2f2f2" stop-opacity="0.72" />
                <stop offset="0.9" stop-color="#eaeaea" stop-opacity="0.56" />
                <stop offset="0.93" stop-color="#e1e1e1" stop-opacity="0.37" />
                <stop offset="0.95" stop-color="#d7d7d7" stop-opacity="0.14" />
                <stop offset="0.97" stop-color="#d0d0d0" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path fill="none" d="M0 0h80v80H0z" />
            <path
              d="M61.3 68.11a.67.67 0 00.09-.14.67.67 0 01-.09.14zm.22-.46a1.58 1.58 0 000-.32v-7.24 7.24a1.58 1.58 0 010 .32zm-.09.26a1.18 1.18 0 00.07-.2 1.18 1.18 0 01-.07.2z"
              fill="url(#prefix__a_${svgId})" />
            <path
              fill="url(#prefix__b_${svgId})"
              d="M15.13 52.11l45.5 26.28 4.25-2.51L19.4 49.63l-4.27 2.48z" />
            <path
              d="M32.66 52.85l-2.25 4.22a1.08 1.08 0 01-.36.35l2.83-1.65a1.08 1.08 0 00.36-.35l2.26-4.22z"
              fill="url(#prefix__c_${svgId})" />
            <path
              d="M63.45 26.58L20.63 1.86a1 1 0 00-1-.1l-4 2.3a1 1 0 011 .1l42.85 24.72a3.17 3.17 0 011.42 2.47l-.1 36.08a1 1 0 01-.42.91l4-2.3a1 1 0 00.42-.91L64.88 29a3.14 3.14 0 00-1.43-2.42z"
              fill="url(#prefix__d_${svgId})" />
            <path
              fill="url(#prefix__e_${svgId})"
              d="M59.48 28.88a3.17 3.17 0 011.42 2.47l-.1 36.08c0 .9-.65 1.26-1.42.81l-26.7-15.4-2.26 4.22a.9.9 0 01-1.33.28 3.07 3.07 0 01-1.22-1.53l-2.33-7.09-9-5.2a3.15 3.15 0 01-1.43-2.46L15.23 5c0-.9.64-1.27 1.43-.81z" />
            <path
              d="M59.48 28.88a3.17 3.17 0 011.42 2.47l-.1 36.08c0 .9-.65 1.26-1.42.81l-26.7-15.4-2.26 4.22a.9.9 0 01-1.33.28 3.07 3.07 0 01-1.22-1.53l-2.33-7.09-9-5.2a3.15 3.15 0 01-1.43-2.46L15.23 5c0-.9.64-1.27 1.43-.81z"
              fill="url(#prefix__f_${svgId})" />
            <path
              fill="url(#prefix__e_${svgId})"
              d="M59.48 28.88a3.17 3.17 0 011.42 2.47l-.1 36.08c0 .9-.65 1.26-1.42.81l-26.7-15.4-2.26 4.22a.9.9 0 01-1.33.28 3.07 3.07 0 01-1.22-1.53l-2.33-7.09-9-5.2a3.15 3.15 0 01-1.43-2.46L15.23 5c0-.9.64-1.27 1.43-.81z" />
            <path
              fill="url(#prefix__h_${svgId})"
              d="M57.99 37.07l-.01 3.9L18.03 17.9l.01-3.9 39.95 23.07z" />
            <path
              fill="url(#prefix__i_${svgId})"
              d="M57.99 45.11l-.01 3.91-39.95-23.07.01-3.9 39.95 23.06z" />
            <path
              fill="url(#prefix__j_${svgId})"
              d="M44.62 45.04l-.01 3.9L18.03 33.6l.01-3.9 26.58 15.34z" />
            <path
              d="M60.76 30.55a2.54 2.54 0 01.14.8v3.95l.41-.13v-3.82a3.54 3.54 0 00-1.63-2.82L16.86 3.8a2.09 2.09 0 00-.44-.19l-.78.45a1 1 0 01.21-.06h.48l.27.12 21.47 12.4 21.41 12.36a3.19 3.19 0 011.28 1.67z"
              fill="url(#prefix__k_${svgId})" />
          </svg>
        `;
  return svgImage;
};

// node_modules/@carbon-labs/wc-empty-state/es/components/empty-state/src/assets/unauthorized-illustration.js
var { stablePrefix: clabsPrefix6 } = settings_default;
var unauthorizedIllustration = (theme = "light", size = "lg") => {
  const svgId = v4_default();
  const svgClasses = e2({
    [`${clabsPrefix6}--empty-state__illustration`]: true,
    [`${clabsPrefix6}--empty-state__illustration-unauthorized`]: true,
    [`${clabsPrefix6}--empty-state__illustration--${size}`]: true
  });
  const svgImage = theme === "dark" ? b`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            class="${svgClasses}">
            <defs>
              <linearGradient
                id="prefix__b_dark_${svgId}"
                x1="17.33"
                y1="40.68"
                x2="53.57"
                y2="19.76"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" />
                <stop offset="1" stop-color="#393939" />
              </linearGradient>
              <linearGradient
                id="prefix__a_dark_${svgId}"
                x1="37.21"
                y1="61.49"
                x2="71.41"
                y2="41.74"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#262626" />
                <stop offset="1" stop-color="#393939" />
              </linearGradient>
              <linearGradient
                id="prefix__c_dark_${svgId}"
                x1="39.97"
                y1="32.38"
                x2="39.97"
                y2="1.64"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#262626" />
                <stop offset="1" stop-color="#393939" />
              </linearGradient>
              <linearGradient
                id="prefix__d_dark_${svgId}"
                x1="24.58"
                y1="44.68"
                x2="51.62"
                y2="44.68"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#393939" />
                <stop offset="1" stop-color="#262626" />
              </linearGradient>
              <linearGradient
                id="prefix__e_dark_${svgId}"
                x1="32.72"
                y1="45.46"
                x2="38.82"
                y2="41.94"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#262626" />
                <stop offset="1" stop-color="#161616" />
              </linearGradient>
            </defs>
            <path fill="none" d="M0 0h80v80H0z" />
            <path
              opacity="0.25"
              d="M20.28 60.39l10.27-5.94 30.8 17.79-10.26 5.93-30.81-17.78z" />
            <path
              d="M61.16 32.9a1.44 1.44 0 00-.5-.51l-1.1-.64-28.48-16.44a.52.52 0 00-.5-.06l-10.11 5.83c-.11.07 2.16 28.77 2.16 28.77l4.3 2.79L61.26 33.1a1.24 1.24 0 00-.1-.2z"
              fill="url(#prefix__b_dark_${svgId})" />
            <path
              d="M61.16 62.45a.5.5 0 00.23-.48V33.64a1.38 1.38 0 00-.13-.54L26.93 52.64l24.12 15.64z"
              fill="url(#prefix__a_dark_${svgId})" />
            <path
              d="M46.88 31.4a.85.85 0 00.5.69 2.69 2.69 0 002.41 0 .85.85 0 00.49-.7V18.27c0-5.39-4.15-12-9.46-15.07-3-1.76-6-2-8.22-.78-1.9 1.09-3 3.19-3 5.89V21.5a.85.85 0 00.5.7 2.67 2.67 0 002.4 0 .87.87 0 00.5-.7V8.31a3.29 3.29 0 011.3-2.95c1.08-.62 2.88-.33 4.82.79 4.21 2.43 7.76 8 7.76 12.12z"
              fill="url(#prefix__c_dark_${svgId})" />
            <path
              d="M50.56 38.22l-1.1-.63L21 21.14a.44.44 0 00-.72.42v28.33a1.49 1.49 0 00.23.74 1.42 1.42 0 00.49.51l28.46 16.45 1.1.63a.5.5 0 00.49.06.49.49 0 00.23-.47V39.47a1.61 1.61 0 00-.72-1.25z"
              fill="url(#prefix__d_dark_${svgId})" />
            <path
              d="M38 41.63a5 5 0 00-2.25-3.9c-1.25-.72-2.26-.13-2.26 1.3a4.73 4.73 0 00.84 2.5l-.84 5.31 4.51 2.6-.84-6.27a1.48 1.48 0 00.84-1.54z"
              fill="url(#prefix__e_dark_${svgId})" />
            <path
              d="M51.41 38.51a1.9 1.9 0 00-.64-.65l-1.1-.63-28.49-16.45-.1-.05-.61.35a.33.33 0 01.17 0 .6.6 0 01.32.1l28.5 16.41 1.1.63a1.5 1.5 0 01.49.51s.05.09.08.14l.36-.21z"
              fill="#6f6f6f" />
          </svg>
        ` : b`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            class="${svgClasses}">
            <defs>
              <linearGradient
                id="prefix__b_${svgId}"
                x1="27.98"
                y1="73.72"
                x2="53.65"
                y2="58.9"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#525252" stop-opacity="0.05" />
                <stop offset="1" stop-opacity="0.1" />
              </linearGradient>
              <linearGradient
                id="prefix__c_${svgId}"
                x1="17.33"
                y1="40.68"
                x2="53.57"
                y2="19.76"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#f4f4f4" />
                <stop offset="0.78" stop-color="#e0e0e0" />
                <stop offset="1" stop-color="#c6c6c6" />
              </linearGradient>
              <linearGradient
                id="prefix__d_${svgId}"
                x1="28.59"
                y1="16.01"
                x2="58.88"
                y2="68.47"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#f4f4f4" />
                <stop offset="0.11" stop-color="#e0e0e0" />
                <stop offset="0.25" stop-color="#d8d8d8" />
                <stop offset="0.44" stop-color="#c6c6c6" />
                <stop offset="0.53" stop-color="#ababab" />
                <stop offset="0.93" stop-color="#a8a8a8" />
                <stop offset="1" stop-color="#8d8d8d" />
              </linearGradient>
              <linearGradient
                id="prefix__a_${svgId}"
                x1="26.93"
                y1="50.69"
                x2="61.39"
                y2="50.69"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#a8a8a8" />
                <stop offset="1" stop-color="#c6c6c6" />
              </linearGradient>
              <linearGradient
                id="prefix__e_${svgId}"
                x1="39.97"
                y1="32.38"
                x2="39.97"
                y2="1.64"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#a8a8a8" />
                <stop offset="1" stop-color="#c6c6c6" />
              </linearGradient>
              <linearGradient
                id="prefix__f_${svgId}"
                x1="24.58"
                y1="44.68"
                x2="51.62"
                y2="44.68"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#e0e0e0" />
                <stop offset="1" stop-color="#c6c6c6" />
              </linearGradient>
              <linearGradient
                id="prefix__g_${svgId}"
                x1="32.72"
                y1="45.46"
                x2="38.82"
                y2="41.94"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#a8a8a8" />
                <stop offset="1" stop-color="#8d8d8d" />
              </linearGradient>
              <linearGradient
                id="prefix__h_${svgId}"
                x1="20.61"
                y1="20.85"
                x2="52.7"
                y2="39.38"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.67" stop-color="#fff" />
                <stop offset="0.76" stop-color="#fff" stop-opacity="0.99" />
                <stop offset="0.8" stop-color="#fdfdfd" stop-opacity="0.96" />
                <stop offset="0.84" stop-color="#fbfbfb" stop-opacity="0.91" />
                <stop offset="0.87" stop-color="#f7f7f7" stop-opacity="0.83" />
                <stop offset="0.9" stop-color="#f3f3f3" stop-opacity="0.74" />
                <stop offset="0.92" stop-color="#ededed" stop-opacity="0.62" />
                <stop offset="0.95" stop-color="#e6e6e6" stop-opacity="0.48" />
                <stop offset="0.97" stop-color="#dfdfdf" stop-opacity="0.31" />
                <stop offset="0.99" stop-color="#d6d6d6" stop-opacity="0.13" />
                <stop offset="1" stop-color="#d0d0d0" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path fill="none" d="M0 0h80v80H0z" />
            <path
              fill="url(#prefix__b_${svgId})"
              d="M20.28 60.39l10.27-5.94 30.8 17.79-10.26 5.93-30.81-17.78z" />
            <path
              d="M61.16 32.9a1.44 1.44 0 00-.5-.51l-1.1-.64-28.48-16.44a.52.52 0 00-.5-.06l-10.11 5.83c-.11.07 2.16 28.77 2.16 28.77l4.3 2.79L61.26 33.1a1.24 1.24 0 00-.1-.2z"
              fill="url(#prefix__c_${svgId})" />
            <path
              d="M61.16 62.45a.5.5 0 00.23-.48V33.64a1.38 1.38 0 00-.13-.54L26.93 52.64l24.12 15.64z"
              fill="url(#prefix__d_${svgId})" />
            <path
              d="M61.16 62.45a.5.5 0 00.23-.48V33.64a1.38 1.38 0 00-.13-.54L26.93 52.64l24.12 15.64z"
              fill="url(#prefix__a_${svgId})" />
            <path
              d="M46.88 31.4a.85.85 0 00.5.69 2.69 2.69 0 002.41 0 .85.85 0 00.49-.7V18.27c0-5.39-4.15-12-9.46-15.07-3-1.76-6-2-8.22-.78-1.9 1.09-3 3.19-3 5.89V21.5a.85.85 0 00.5.7 2.67 2.67 0 002.4 0 .87.87 0 00.5-.7V8.31a3.29 3.29 0 011.3-2.95c1.08-.62 2.88-.33 4.82.79 4.21 2.43 7.76 8 7.76 12.12z"
              fill="url(#prefix__e_${svgId})" />
            <path
              d="M50.56 38.22l-1.1-.63L21 21.14a.44.44 0 00-.72.42v28.33a1.49 1.49 0 00.23.74 1.42 1.42 0 00.49.51l28.46 16.45 1.1.63a.5.5 0 00.49.06.49.49 0 00.23-.47V39.47a1.61 1.61 0 00-.72-1.25z"
              fill="url(#prefix__f_${svgId})" />
            <path
              d="M38 41.63a5 5 0 00-2.25-3.9c-1.25-.72-2.26-.13-2.26 1.3a4.73 4.73 0 00.84 2.5l-.84 5.31 4.51 2.6-.84-6.27a1.48 1.48 0 00.84-1.54z"
              fill="url(#prefix__g_${svgId})" />
            <path
              d="M51.41 38.51a1.9 1.9 0 00-.64-.65l-1.1-.63-28.49-16.45-.1-.05-.61.35a.33.33 0 01.17 0 .6.6 0 01.32.1l28.5 16.41 1.1.63a1.5 1.5 0 01.49.51s.05.09.08.14l.36-.21z"
              fill="url(#prefix__h_${svgId})" />
          </svg>
        `;
  return svgImage;
};

// node_modules/@carbon-labs/wc-empty-state/es/components/empty-state/src/empty-state.template.js
var { stablePrefix: clabsPrefix7 } = settings_default;
function emptyStateTemplate(customElementClass) {
  const { title, subtitle, size, kind, illustrationTheme, hasIllustration } = customElementClass;
  const titleClasses = e2({
    [`${clabsPrefix7}--empty-state__header`]: true,
    [`${clabsPrefix7}--empty-state__header--small`]: size === "sm"
  });
  const subTitleClasses = e2({
    [`${clabsPrefix7}--empty-state___subtitle`]: true,
    [`${clabsPrefix7}--empty-state__subtitle--small`]: size === "sm"
  });
  let emptyStateSVg;
  if (!hasIllustration) {
    switch (kind) {
      case "error":
        emptyStateSVg = errorIllustration(illustrationTheme, size);
        break;
      case "noData":
        emptyStateSVg = noDataIllustration(illustrationTheme, size);
        break;
      case "noTags":
        emptyStateSVg = noTagsIllustration(illustrationTheme, size);
        break;
      case "notFound":
        emptyStateSVg = noFoundIllustration(illustrationTheme, size);
        break;
      case "notifications":
        emptyStateSVg = notificationsIllustration(illustrationTheme, size);
        break;
      case "unauthorized":
        emptyStateSVg = unauthorizedIllustration(illustrationTheme, size);
        break;
    }
  }
  return b`
    <slot name="illustration"></slot>
    ${!hasIllustration ? emptyStateSVg : ""}
    <div class="${clabsPrefix7}--empty-state__content">
      <h3 class="${titleClasses}">${title}</h3>
      ${subtitle && b`<p class="${subTitleClasses}">${subtitle}</p>`}
      <slot name="action"></slot>
      <slot name="link"></slot>
    </div>
  `;
}

// node_modules/@carbon-labs/wc-empty-state/es/components/empty-state/empty-state.js
var { stablePrefix: clabsPrefix8 } = settings_default;
var CLABSEmptyState = class CLABSEmptyState2 extends emptyState {
  /**
   * Lifecycle method called after the first render.
   * Ensures the illustration slot is checked for content.
   */
  firstUpdated() {
    var _a;
    const slot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot[name="illustration"]');
    slot === null || slot === void 0 ? void 0 : slot.addEventListener("slotchange", () => this.checkSlotContent());
    this.checkSlotContent();
  }
  /**
   * Checks whether the "illustration" slot has assigned elements.
   * Updates the `hasIllustration` property accordingly.
   */
  checkSlotContent() {
    var _a, _b;
    const slot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot[name="illustration"]');
    const assignedNodes = (_b = slot === null || slot === void 0 ? void 0 : slot.assignedNodes({ flatten: true })) !== null && _b !== void 0 ? _b : [];
    this.hasIllustration = assignedNodes.length > 0;
  }
  /**
   * Renders the template while passing in class functionality
   *
   * @returns {TemplateResult<1>}
   */
  render() {
    return emptyStateTemplate(this);
  }
};
CLABSEmptyState = __decorate([
  t(`${clabsPrefix8}-empty-state`)
], CLABSEmptyState);

// node_modules/@carbon/ibm-products-web-components/es/components/notification-panel/notification-panel.js
var blockClass = `${prefix}--notifications-panel`;
var CDSNotificationPanel = class CDSNotificationPanel2 extends HostListenerMixin(i2) {
  constructor() {
    super(...arguments);
    this.open = false;
    this._hasTodayContent = false;
    this._hasPreviousContent = false;
    this._handleKeydown = ({ key, target }) => {
      var _a;
      if (key === "Escape") {
        this.open = false;
        const init = {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            triggeredBy: target
          }
        };
        this.dispatchEvent(new CustomEvent(this.constructor.eventClickOutside, init));
        (_a = this.triggerButtonRef) === null || _a === void 0 ? void 0 : _a.focus();
      }
    };
    this._handleClick = (event) => {
      var _a, _b;
      const target = event.target;
      if (!this.open || this.contains(target)) {
        return;
      }
      const actionableSelectors = [
        "a",
        "button",
        "input",
        "select",
        "textarea",
        '[role="button"]',
        '[role="link"]',
        '[tabindex]:not([tabindex="-1"]',
        "cds-button",
        "cds-link",
        "cds-accordion-item",
        "cds-breadcrumb-item",
        "cds-icon-button",
        "cds-checkbox",
        "cds-dropdown",
        "cds-dropdown-item",
        "cds-file-uploader",
        "cds-file-uploader-button",
        "cds-menu-button",
        "cds-menu",
        "cds-menu-item",
        "cds-multi-select",
        "cds-multi-select-item",
        "cds-number-input",
        "cds-overflow-menu",
        "cds-overflow-menu-body",
        "cds-overflow-menu-item",
        "cds-pagination",
        "cds-select-item",
        "cds-radio-button",
        "cds-search",
        "cds-select",
        "cds-slider",
        "cds-slider-input",
        "cds-tabs",
        "cds-tab",
        "cds-textarea",
        "cds-text-input",
        "cds-time-picker",
        "cds-time-picker-select",
        "cds-select-item",
        "cds-toggle",
        "cds-toggletip"
      ];
      const isActionable = actionableSelectors.some((selector) => {
        if (!(target instanceof Element)) {
          return false;
        }
        if (target.closest(selector)) {
          return true;
        }
        const root = target.getRootNode();
        return root instanceof ShadowRoot && root.host instanceof Element && root.host.matches(selector);
      });
      if (this.open && ((_a = this.triggerButtonRef) === null || _a === void 0 ? void 0 : _a.contains(target))) {
        return;
      }
      const init = {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: {
          triggeredBy: target
        }
      };
      if (this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeClose, init))) {
        this.open = false;
        this.dispatchEvent(new CustomEvent(this.constructor.eventClickOutside, init));
        if (!isActionable) {
          (_b = this.triggerButtonRef) === null || _b === void 0 ? void 0 : _b.focus();
        }
      }
    };
  }
  willUpdate(changedProperties) {
    if (changedProperties.has("dateTimeLocale")) {
      this._providedLocale = this.dateTimeLocale;
    }
    if (changedProperties.has("_todayElements") || changedProperties.has("_previousElements")) {
      this._hasTodayContent = this._todayElements.length > 0;
      this._hasPreviousContent = this._previousElements.length > 0;
    }
  }
  firstUpdated() {
    var _a, _b, _c;
    (_a = this.todaySlot) === null || _a === void 0 ? void 0 : _a.addEventListener("slotchange", () => this._handleSlotChange("today"));
    (_b = this.previousSlot) === null || _b === void 0 ? void 0 : _b.addEventListener("slotchange", () => this._handleSlotChange("previous"));
    this._markFirstNotification();
    const slot = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('slot[name="previous"]');
    const slottedElements = (slot === null || slot === void 0 ? void 0 : slot.assignedElements({ flatten: true })) || [];
    for (const el of slottedElements) {
      el.addEventListener("mouseenter", () => {
        this._handleMouseEnter(el);
      });
      el.addEventListener("mouseleave", () => {
        this._handleMouseLeave(el);
      });
    }
  }
  updated() {
    this._markFirstNotification();
    if (this.open) {
      requestAnimationFrame(() => this._tryFocusDismissButton());
    }
  }
  render() {
    const { titleText, todayText, previousText, dismissAllLabel, emptyStateLabel, doNotDisturbLabel, open, _hasTodayContent, _hasPreviousContent, _onDismissAllNotifications: onDismissAllNotifications, _handleToggle: handleToggle } = this;
    const classes = e2({
      [`${blockClass}__container`]: true,
      [`${blockClass}__entrance`]: open,
      [`${blockClass}__exit`]: !open
    });
    const mainSectionClasses = e2({
      [`${blockClass}__main-section`]: true,
      [`${blockClass}__main-section-empty`]: !_hasTodayContent && !_hasPreviousContent
    });
    return b`
      <div role="dialog" tabindex="0" class=${classes}>
        <div class="${blockClass}__header-container">
          <div class="${blockClass}__header-flex">
            <h2 class="${blockClass}__header">${titleText}</h2>
            <cds-button
              size="sm"
              kind="ghost"
              class="${blockClass}__dismiss-button"
              @click=${onDismissAllNotifications}
            >
              ${dismissAllLabel}
            </cds-button>
          </div>
          <cds-toggle
            size="sm"
            class="${blockClass}__do-not-disturb-toggle"
            id="${blockClass}__do-not-disturb-toggle-component"
            label-a=${doNotDisturbLabel}
            label-b=${doNotDisturbLabel}
            aria-label=${doNotDisturbLabel}
            @cds-toggle-changed=${handleToggle}
          ></cds-toggle>
        </div>
        <div class=${mainSectionClasses}>
          ${_hasTodayContent ? b`
                <h3
                  class="${blockClass}__time-section-label ${blockClass}__time-section-label--today"
                >
                  ${todayText}
                </h3>
              ` : ""}
          <slot name="today"></slot>
          ${_hasPreviousContent ? b`
                <h3
                  class="${blockClass}__time-section-label ${blockClass}__time-section-label--previous"
                >
                  ${previousText}
                </h3>
              ` : ""}
          <slot name="previous"></slot>
          ${!_hasTodayContent && !_hasPreviousContent ? b` <slot name="empty-state">
                <clabs-empty-state
                  subtitle="${emptyStateLabel}"
                  kind="notifications"
                >
                </clabs-empty-state>
              </slot>` : ""}
        </div>
        ${_hasTodayContent || _hasPreviousContent ? b`<div class="${blockClass}__bottom-actions-container">
              <slot name="footer"></slot>
            </div>` : ""}
      </div>
    `;
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback();
    (_a = this._mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  _handleMouseEnter(el) {
    const next = el.nextElementSibling;
    if ((next === null || next === void 0 ? void 0 : next.tagName.toLowerCase()) === "c4p-notification") {
      next.classList.add(`${blockClass}__notification--next`);
    }
  }
  _handleMouseLeave(el) {
    const next = el.nextElementSibling;
    if ((next === null || next === void 0 ? void 0 : next.tagName.toLowerCase()) === "c4p-notification") {
      next.classList.remove(`${blockClass}__notification--next`);
    }
  }
  _markFirstNotification() {
    const notifications = this.querySelectorAll(`${prefix}-notification`);
    notifications.forEach((el, i3) => {
      el.classList.toggle("first-notification", i3 === 0);
    });
  }
  _handleSlotChange(slotName) {
    slotName === "today" ? this._hasTodayContent = this._todayElements.length > 0 : this._hasPreviousContent = this._previousElements.length > 0;
  }
  _tryFocusDismissButton() {
    var _a;
    const button = this.renderRoot.querySelector(`.${blockClass}__dismiss-button`);
    if (button) {
      button.focus();
    } else {
      (_a = this._mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
      this._mutationObserver = new MutationObserver(() => {
        var _a2;
        const btn = this.renderRoot.querySelector(`.${blockClass}__dismiss-button`);
        if (btn) {
          btn.focus();
          (_a2 = this._mutationObserver) === null || _a2 === void 0 ? void 0 : _a2.disconnect();
        }
      });
      this._mutationObserver.observe(this.renderRoot, {
        childList: true,
        subtree: true
      });
    }
  }
  /**
   * Handles user-initiated dismiss of all notifications.
   *
   * @param event The event that triggered the click.
   */
  _onDismissAllNotifications(event) {
    const triggeredBy = event.target;
    event.stopPropagation();
    const init = {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        triggeredBy
      }
    };
    this.dispatchEvent(new CustomEvent(this.constructor.eventDismissAll, init));
  }
  _handleToggle(event) {
    const triggeredBy = event.target;
    const init = {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        triggeredBy
      }
    };
    this.dispatchEvent(new CustomEvent(this.constructor.eventDonotDisturbChange, init));
  }
  /**
   * A selector selecting tabbable nodes.
   */
  static get selectorTabbable() {
    return selectorTabbable;
  }
  /**
   * The name of the custom event fired before this notification-panel is being closed upon a user gesture.
   * Cancellation of this event stops the user-initiated action of closing this notification-panel.
   */
  static get eventBeforeClose() {
    return `${prefix}-notification-panel-beingclosed`;
  }
  /**
   * The name of the custom event fired after this notification-panel is closed upon a user gesture.
   */
  static get eventClickOutside() {
    return `${prefix}-notification-click-outside`;
  }
  /**
   * The name of the custom event fired after dismiss all button click
   */
  static get eventDismissAll() {
    return `${prefix}-notification-dismiss-all`;
  }
  /**
   * The name of the custom event fired after this do not disturb button toggled.
   */
  static get eventDonotDisturbChange() {
    return `${prefix}-notification-donot-disturb-change`;
  }
};
CDSNotificationPanel.styles = styles;
__decorate([
  n({ type: String, attribute: "title-text" })
], CDSNotificationPanel.prototype, "titleText", void 0);
__decorate([
  n({ type: String, attribute: "today-text" })
], CDSNotificationPanel.prototype, "todayText", void 0);
__decorate([
  n({ type: String, attribute: "previous-text" })
], CDSNotificationPanel.prototype, "previousText", void 0);
__decorate([
  n({ reflect: true, type: Boolean })
], CDSNotificationPanel.prototype, "open", void 0);
__decorate([
  n({ type: String, attribute: "dismiss-all-label" })
], CDSNotificationPanel.prototype, "dismissAllLabel", void 0);
__decorate([
  n({ type: String, attribute: "empty-state-label" })
], CDSNotificationPanel.prototype, "emptyStateLabel", void 0);
__decorate([
  n({ type: String, attribute: "donot-disturb-label" })
], CDSNotificationPanel.prototype, "doNotDisturbLabel", void 0);
__decorate([
  n({ type: Object })
], CDSNotificationPanel.prototype, "triggerButtonRef", void 0);
__decorate([
  n({ type: String, attribute: "date-time-locale" })
], CDSNotificationPanel.prototype, "dateTimeLocale", void 0);
__decorate([
  e3({ context: dateTimeLocaleContext })
  // @ts-ignore
], CDSNotificationPanel.prototype, "_providedLocale", void 0);
__decorate([
  e('slot[name="today"]')
], CDSNotificationPanel.prototype, "todaySlot", void 0);
__decorate([
  e('slot[name="previous"]')
], CDSNotificationPanel.prototype, "previousSlot", void 0);
__decorate([
  r()
  // Use @state decorator
], CDSNotificationPanel.prototype, "_hasTodayContent", void 0);
__decorate([
  r()
  // Use @state decorator
], CDSNotificationPanel.prototype, "_hasPreviousContent", void 0);
__decorate([
  o({ slot: "today", flatten: true })
], CDSNotificationPanel.prototype, "_todayElements", void 0);
__decorate([
  o({ slot: "previous", flatten: true })
], CDSNotificationPanel.prototype, "_previousElements", void 0);
__decorate([
  HostListener("keydown")
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSNotificationPanel.prototype, "_handleKeydown", void 0);
__decorate([
  HostListener("document:click")
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSNotificationPanel.prototype, "_handleClick", void 0);
CDSNotificationPanel = __decorate([
  carbonElement(`${prefix}-notification-panel`)
], CDSNotificationPanel);

// node_modules/@carbon/ibm-products-web-components/es/components/notification-panel/notification.scss.js
var styles3 = i(['a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font:inherit;font-feature-settings:"liga" 1;font-size:100%;margin:0;padding:0;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background,#fff);color:var(--cds-text-primary,#161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}html{font-size:100%}body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size,2.625rem);font-weight:var(--cds-heading-06-font-weight,300);letter-spacing:var(--cds-heading-06-letter-spacing,0);line-height:var(--cds-heading-06-line-height,1.199)}h2{font-size:var(--cds-heading-05-font-size,2rem);font-weight:var(--cds-heading-05-font-weight,400);letter-spacing:var(--cds-heading-05-letter-spacing,0);line-height:var(--cds-heading-05-line-height,1.25)}h3{font-size:var(--cds-heading-04-font-size,1.75rem);font-weight:var(--cds-heading-04-font-weight,400);letter-spacing:var(--cds-heading-04-letter-spacing,0);line-height:var(--cds-heading-04-line-height,1.28572)}h4{font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4)}h5{font-size:var(--cds-heading-02-font-size,1rem);font-weight:var(--cds-heading-02-font-weight,600);letter-spacing:var(--cds-heading-02-letter-spacing,0);line-height:var(--cds-heading-02-line-height,1.5)}h6{font-size:var(--cds-heading-01-font-size,.875rem);font-weight:var(--cds-heading-01-font-weight,600);letter-spacing:var(--cds-heading-01-letter-spacing,.16px);line-height:var(--cds-heading-01-line-height,1.42857)}p{font-size:var(--cds-body-02-font-size,1rem);font-weight:var(--cds-body-02-font-weight,400);letter-spacing:var(--cds-body-02-letter-spacing,0);line-height:var(--cds-body-02-line-height,1.5)}a{color:var(--cds-link-primary,#0062fe)}em{font-style:italic}@keyframes c4p--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes c4p--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes c4p--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.c4p--layout--size-xs{--c4p-layout-size-height-context:var(--c4p-layout-size-height-xs,1.5rem);--c4p-layout-size-height:var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-xs{--c4p-layout-size-height:var(--c4p-layout-size-height-context,var(--c4p-layout-size-height-xs,1.5rem))}.c4p--layout-constraint--size__min-xs{--c4p-layout-size-height-min:var(--c4p-layout-size-height-xs,1.5rem)}.c4p--layout-constraint--size__max-xs{--c4p-layout-size-height-max:var(--c4p-layout-size-height-xs,1.5rem)}.c4p--layout--size-sm{--c4p-layout-size-height-context:var(--c4p-layout-size-height-sm,2rem);--c4p-layout-size-height:var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-sm{--c4p-layout-size-height:var(--c4p-layout-size-height-context,var(--c4p-layout-size-height-sm,2rem))}.c4p--layout-constraint--size__min-sm{--c4p-layout-size-height-min:var(--c4p-layout-size-height-sm,2rem)}.c4p--layout-constraint--size__max-sm{--c4p-layout-size-height-max:var(--c4p-layout-size-height-sm,2rem)}.c4p--layout--size-md{--c4p-layout-size-height-context:var(--c4p-layout-size-height-md,2.5rem);--c4p-layout-size-height:var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-md{--c4p-layout-size-height:var(--c4p-layout-size-height-context,var(--c4p-layout-size-height-md,2.5rem))}.c4p--layout-constraint--size__min-md{--c4p-layout-size-height-min:var(--c4p-layout-size-height-md,2.5rem)}.c4p--layout-constraint--size__max-md{--c4p-layout-size-height-max:var(--c4p-layout-size-height-md,2.5rem)}.c4p--layout--size-lg{--c4p-layout-size-height-context:var(--c4p-layout-size-height-lg,3rem);--c4p-layout-size-height:var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-lg{--c4p-layout-size-height:var(--c4p-layout-size-height-context,var(--c4p-layout-size-height-lg,3rem))}.c4p--layout-constraint--size__min-lg{--c4p-layout-size-height-min:var(--c4p-layout-size-height-lg,3rem)}.c4p--layout-constraint--size__max-lg{--c4p-layout-size-height-max:var(--c4p-layout-size-height-lg,3rem)}.c4p--layout--size-xl{--c4p-layout-size-height-context:var(--c4p-layout-size-height-xl,4rem);--c4p-layout-size-height:var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-xl{--c4p-layout-size-height:var(--c4p-layout-size-height-context,var(--c4p-layout-size-height-xl,4rem))}.c4p--layout-constraint--size__min-xl{--c4p-layout-size-height-min:var(--c4p-layout-size-height-xl,4rem)}.c4p--layout-constraint--size__max-xl{--c4p-layout-size-height-max:var(--c4p-layout-size-height-xl,4rem)}.c4p--layout--size-2xl{--c4p-layout-size-height-context:var(--c4p-layout-size-height-2xl,5rem);--c4p-layout-size-height:var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-2xl{--c4p-layout-size-height:var(--c4p-layout-size-height-context,var(--c4p-layout-size-height-2xl,5rem))}.c4p--layout-constraint--size__min-2xl{--c4p-layout-size-height-min:var(--c4p-layout-size-height-2xl,5rem)}.c4p--layout-constraint--size__max-2xl{--c4p-layout-size-height-max:var(--c4p-layout-size-height-2xl,5rem)}.c4p--layout--density-condensed{--c4p-layout-density-padding-inline-context:var(--c4p-layout-density-padding-inline-condensed,0.5rem);--c4p-layout-density-padding-inline:var(--c4p-layout-density-padding-inline-context)}.c4p--layout-constraint--density__default-condensed{--c4p-layout-density-padding-inline:var(--c4p-layout-density-padding-inline-context,var(--c4p-layout-density-padding-inline-condensed,0.5rem))}.c4p--layout-constraint--density__min-condensed{--c4p-layout-density-padding-inline-min:var(--c4p-layout-density-padding-inline-condensed,0.5rem)}.c4p--layout-constraint--density__max-condensed{--c4p-layout-density-padding-inline-max:var(--c4p-layout-density-padding-inline-condensed,0.5rem)}.c4p--layout--density-normal{--c4p-layout-density-padding-inline-context:var(--c4p-layout-density-padding-inline-normal,1rem);--c4p-layout-density-padding-inline:var(--c4p-layout-density-padding-inline-context)}.c4p--layout-constraint--density__default-normal{--c4p-layout-density-padding-inline:var(--c4p-layout-density-padding-inline-context,var(--c4p-layout-density-padding-inline-normal,1rem))}.c4p--layout-constraint--density__min-normal{--c4p-layout-density-padding-inline-min:var(--c4p-layout-density-padding-inline-normal,1rem)}.c4p--layout-constraint--density__max-normal{--c4p-layout-density-padding-inline-max:var(--c4p-layout-density-padding-inline-normal,1rem)}:root{--c4p-layout-size-height-xs:1.5rem;--c4p-layout-size-height-sm:2rem;--c4p-layout-size-height-md:2.5rem;--c4p-layout-size-height-lg:3rem;--c4p-layout-size-height-xl:4rem;--c4p-layout-size-height-2xl:5rem;--c4p-layout-size-height-min:0px;--c4p-layout-size-height-max:999999999px;--c4p-layout-density-padding-inline-condensed:0.5rem;--c4p-layout-density-padding-inline-normal:1rem;--c4p-layout-density-padding-inline-min:0px;--c4p-layout-density-padding-inline-max:999999999px}.c4p--assistive-text,.c4p--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.c4p--empty-state{color:var(--cds-text-primary,#161616);display:flex}.c4p--empty-state .c4p--empty-state__header{font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4);margin:0;padding-block-end:.5rem}.c4p--empty-state .c4p--empty-state__subtitle{color:var(--cds-text-secondary,#525252);font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);padding-block-end:1rem}.c4p--empty-state .c4p--empty-state__header--small{font-size:var(--cds-body-compact-02-font-size,1rem);font-weight:var(--cds-body-compact-02-font-weight,400);letter-spacing:var(--cds-body-compact-02-letter-spacing,0);line-height:var(--cds-body-compact-02-line-height,1.375);padding-block-end:.5rem}.c4p--empty-state .c4p--empty-state__subtitle--small{font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}.c4p--empty-state__illustration{block-size:auto;margin-block-end:1rem}.c4p--empty-state__illustration.c4p--empty-state__illustration--lg{max-inline-size:5rem;min-inline-size:5rem}.c4p--empty-state__illustration.c4p--empty-state__illustration--sm{max-inline-size:4rem;min-inline-size:4rem}.c4p--empty-state-position--top{flex-direction:column}.c4p--empty-state-position--right{flex-direction:row-reverse}.c4p--empty-state-position--bottom{flex-direction:column-reverse}.c4p--empty-state-position--left{flex-direction:row}.c4p--empty-state .c4p--empty-state__action-button{display:block;margin-block-end:1rem}.c4p--empty-state .c4p--empty-state__link{display:inline-block}@keyframes notifications-panel-fade-in{0%{opacity:0;transform:translateY(-38.5rem)}to{opacity:1;transform:translateY(0)}}@keyframes notifications-panel-fade-out{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-38.5rem)}}@keyframes notifications-panel-entrance-reduced{0%{opacity:0}to{opacity:1}}@keyframes notifications-panel-exit-reduced{0%{opacity:1}to{opacity:0}}.c4p--notifications-panel__entrance{animation:notifications-panel-fade-in .24s cubic-bezier(.2,0,.38,.9)}.c4p--notifications-panel__exit{animation:notifications-panel-fade-out .24s cubic-bezier(.2,0,.38,.9) forwards}@media (prefers-reduced-motion){.c4p--notifications-panel__entrance{animation:notifications-panel-entrance-reduced .15s cubic-bezier(.2,0,1,.9) forwards}.c4p--notifications-panel__exit{animation:notifications-panel-exit-reduced .15s cubic-bezier(.2,0,1,.9) forwards}}.c4p--notifications-panel__container{background-color:var(--cds-layer-01,#f4f4f4);border-block-end:1px solid var(--cds-border-subtle-02,#e0e0e0);border-inline-start:1px solid var(--cds-border-subtle-02,#e0e0e0);box-shadow:0 .125rem .25rem var(--cds-overlay,rgba(0,0,0,.6));clip-path:inset(0 calc(var(--cds-spacing-01)*-1) calc(var(--cds-spacing-02)*-1) calc(var(--cds-spacing-01)*-1));color:var(--cds-text-primary,#161616);inset-block-start:3rem;inset-inline-end:0;max-block-size:38.5rem;max-inline-size:22.75rem;min-block-size:38.5rem;min-inline-size:20rem;overflow:auto;position:fixed;transition:transform .11s cubic-bezier(.2,0,.38,.9);z-index:2}.c4p--notifications-panel__container .c4p--notifications-panel__header-container{background-color:var(--cds-layer-01,#f4f4f4);border-block-end:1px solid var(--cds-border-subtle-01,#c6c6c6);inset-block-start:0;padding:.5rem 1rem;position:sticky;z-index:2}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__header-flex{align-items:center;display:flex;justify-content:space-between}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__do-not-disturb-toggle{padding-block-end:.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__do-not-disturb-toggle .c4p--toggle__label-text{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__dismiss-button{color:var(--cds-text-primary,#161616)}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__header{font-size:var(--cds-heading-compact-01-font-size,.875rem);font-weight:var(--cds-heading-compact-01-font-weight,600);letter-spacing:var(--cds-heading-compact-01-letter-spacing,.16px);line-height:var(--cds-heading-compact-01-line-height,1.28572);margin:0}.c4p--notifications-panel__container .c4p--notifications-panel__time-section-label{background-color:var(--cds-layer-01,#f4f4f4);color:var(--cds-text-secondary,#525252);font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);font-weight:600;inset-block-start:3.0625rem;letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333);padding:.5rem 1rem;position:sticky;z-index:2}.c4p--notifications-panel__container .c4p--notifications-panel__notification:focus,.c4p--notifications-panel__container .c4p--notifications-panel__notification:hover{background-color:var(--cds-layer-accent-01,#e0e0e0)}.c4p--notifications-panel__container .c4p--notifications-panel__notification:focus .c4p--notifications-panel__dismiss-single-button,.c4p--notifications-panel__container .c4p--notifications-panel__notification:hover .c4p--notifications-panel__dismiss-single-button{opacity:1}.c4p--notifications-panel__container .c4p--notifications-panel__notification:focus{border-color:var(--cds-focus,#0f62fe);box-shadow:inset 0 0 0 2px var(--cds-focus,#0f62fe),inset 0 0 0 2px var(--cds-background,#fff);outline:0}.c4p--notifications-panel__container .c4p--notifications-panel__notification{align-items:flex-start;background-color:var(--cds-layer-01,#f4f4f4);border:0;cursor:pointer;display:flex;inline-size:100%;min-block-size:6.25rem;padding:1rem;position:relative;text-align:start;transition:background-color .24s cubic-bezier(.2,0,.38,.9)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-title{color:var(--cds-text-secondary,#525252);font-size:var(--cds-heading-01-font-size,.875rem);font-weight:var(--cds-heading-01-font-weight,600);font-weight:400;letter-spacing:var(--cds-heading-01-letter-spacing,.16px);line-height:var(--cds-heading-01-line-height,1.42857);margin-block-end:.25rem}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-title.c4p--notifications-panel__notification-title-unread{color:var(--cds-text-secondary,#525252);font-weight:600;margin-block-end:.25rem}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notifications-link{font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon{margin-inline-end:.5rem;min-inline-size:1rem}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-error{fill:var(--cds-support-error,#da1e28)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-success{fill:var(--cds-support-success,#24a148)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-warning{fill:var(--cds-support-warning,#f1c21b)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-informational{fill:var(--cds-support-info,#0043ce)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-time-label{margin-block-end:.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-description,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-time-label{color:var(--cds-text-secondary,#525252);font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-description.c4p--notifications-panel__notification-short-description{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-description.c4p--notifications-panel__notification-long-description{display:block;overflow:initial;-webkit-line-clamp:initial;line-clamp:none}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button{align-items:center;display:flex;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333);min-inline-size:5.5rem;padding:0}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button .c4p--btn__icon,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button .c4p--btn__icon{transition:transform .24s ease}@media (prefers-reduced-motion:reduce){.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button .c4p--btn__icon,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button .c4p--btn__icon{transition:none}}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button.c4p--notifications-panel__notification-read-more-button .c4p--btn__icon,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button.c4p--notifications-panel__notification-read-more-button .c4p--btn__icon{transform:rotate(0deg)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button.c4p--notifications-panel__notification-read-less-button .c4p--btn__icon,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button.c4p--notifications-panel__notification-read-less-button .c4p--btn__icon{transform:rotate(180deg)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--popover-container{position:static}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__dismiss-single-button{align-items:center;color:var(--cds-text-primary,#161616);display:flex;inset-block-start:0;inset-inline-end:0;justify-content:center;min-inline-size:2rem;opacity:0;padding:0;position:absolute}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__dismiss-single-button:focus,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__dismiss-single-button:hover{opacity:1}.c4p--notifications-panel__container .c4p--notifications-panel__notification-previous:not(:first-of-type):before,.c4p--notifications-panel__container .c4p--notifications-panel__notification-today:not(:first-of-type):before,.c4p--notifications-panel__container .c4p--notifications-panel__notification-yesterday:not(:first-of-type):before{background-color:var(--cds-border-subtle-01,#c6c6c6);block-size:1px;content:"";inline-size:calc(100% - 2rem);inset-block-start:0;margin:0 auto;position:absolute;transition:background-color .24s cubic-bezier(.2,0,.38,.9)}.c4p--notifications-panel__container .c4p--notifications-panel__notification-previous:hover+.c4p--notifications-panel__notification-previous:not(:first-of-type):before,.c4p--notifications-panel__container .c4p--notifications-panel__notification-today:hover+.c4p--notifications-panel__notification-today:not(:first-of-type):before,.c4p--notifications-panel__container .c4p--notifications-panel__notification-yesterday:hover+.c4p--notifications-panel__notification-yesterday:not(:first-of-type):before{background-color:transparent}.c4p--notifications-panel__container .c4p--notifications-panel__main-section-empty.c4p--notifications-panel__main-section{align-items:center;block-size:100%;display:flex;justify-content:center;margin-block-start:10rem;min-block-size:0}.c4p--notifications-panel__container .c4p--notifications-panel__main-section-empty.c4p--notifications-panel__main-section .c4p-subtext{font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.c4p--notifications-panel__container .c4p--notifications-panel__main-section{min-block-size:498px}.c4p--notifications-panel__container .c4p--notifications-panel__bottom-actions{align-items:center;background-color:var(--cds-layer-01,#f4f4f4);block-size:2.5rem;border-block-start:1px solid var(--cds-border-subtle-01,#c6c6c6);display:flex;inset-block-end:0;min-block-size:2.5rem;position:sticky;z-index:2}.c4p--notifications-panel__container .c4p--notifications-panel__bottom-actions .c4p--notifications-panel__view-all-button{align-items:center;block-size:2.5rem;border-inline-end:1px solid var(--cds-border-subtle-01,#c6c6c6);color:var(--cds-text-primary,#161616);display:flex;inline-size:100%;max-inline-size:calc(100% - 2.5rem);min-block-size:2.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__bottom-actions .c4p--notifications-panel__settings-button{align-items:center;block-size:2.5rem;color:var(--cds-text-primary,#161616);display:flex;justify-content:center;min-block-size:2.5rem;min-inline-size:2.5rem;padding:0}.c4p--notifications-panel__container .c4p--notifications-panel__bottom-actions .c4p--notifications-panel__settings-button .c4p--btn__icon{margin:0}.c4p--notifications-panel__header-container:has(.c4p--notifications-panel__do-not-disturb-toggle)+.c4p--notifications-panel__main-section .c4p--notifications-panel__time-section-label{inset-block-start:4.8125rem}:host(c4p-notification){align-items:flex-start;background-color:var(--cds-layer-01,#f4f4f4);border:0;cursor:pointer;display:flex;inline-size:100%;min-block-size:6.25rem;padding:1rem;position:relative;text-align:start;transition:background-color .24s cubic-bezier(.2,0,.38,.9)}@media screen and (prefers-reduced-motion:reduce){:host(c4p-notification):before{background-color:var(--cds-border-subtle-01,#c6c6c6);block-size:1px;content:"";inline-size:calc(100% - 2rem);inset-block-start:0;margin:0 auto;position:absolute;transition:none}}:host(c4p-notification):before{background-color:var(--cds-border-subtle-01,#c6c6c6);block-size:1px;content:"";inline-size:calc(100% - 2rem);inset-block-start:0;margin:0 auto;position:absolute;transition:background-color .24s cubic-bezier(.2,0,.38,.9)}:host(c4p-notification):hover:before{background-color:transparent}:host(c4p-notification) .c4p--notifications-panel__notification-status-icon{margin-inline-end:.5rem;min-inline-size:1rem}:host(c4p-notification) .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-error{fill:var(--cds-support-error,#da1e28)}:host(c4p-notification) .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-success{fill:var(--cds-support-success,#24a148)}:host(c4p-notification) .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-warning{fill:var(--cds-support-warning,#f1c21b)}:host(c4p-notification) .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-informational{fill:var(--cds-support-info,#0043ce)}:host(c4p-notification) .c4p--notifications-panel__notification-time-label{margin-block-end:.5rem}:host(c4p-notification) .c4p--notifications-panel__notification__dismiss-single-button{align-items:center;color:var(--cds-text-primary,#161616);display:flex;inset-block-start:0;inset-inline-end:0;justify-content:center;min-inline-size:2rem;opacity:0;padding:0;position:absolute}:host(c4p-notification) .c4p--notifications-panel__notification__dismiss-single-button:focus,:host(c4p-notification) .c4p--notifications-panel__notification__dismiss-single-button:hover{opacity:1}:host(c4p-notification) .c4p--notifications-panel__notification__dismiss-single-button{--cds-link-primary:--cds-text-primary;--cds-link-primary-hover:--cds-text-primary}:host(c4p-notification) .c4p--notifications-panel__notification-description,:host(c4p-notification) .c4p--notifications-panel__notification-time-label{color:var(--cds-text-secondary,#525252);font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}:host(c4p-notification) .c4p--notifications-panel__notification-description{display:block}::slotted(.c4p--notifications-panel__notification-title){color:var(--cds-text-secondary,#525252);font-size:var(--cds-heading-01-font-size,.875rem);font-weight:var(--cds-heading-01-font-weight,600);font-weight:400;letter-spacing:var(--cds-heading-01-letter-spacing,.16px);line-height:var(--cds-heading-01-line-height,1.42857);margin-block-end:.25rem}::slotted(.c4p--notifications-panel__notification-title-unread){color:var(--cds-text-secondary,#525252);font-weight:600;margin-block-end:.25rem}:host(.first-notification):before{content:none}:host(:focus),:host(:hover){background-color:var(--cds-layer-accent-01,#e0e0e0)}:host(:focus) .c4p--notifications-panel__notification__dismiss-single-button,:host(:hover) .c4p--notifications-panel__notification__dismiss-single-button{opacity:1}:host(:focus):before,:host(:hover):before{background-color:transparent}:host(.c4p--notifications-panel__notification--next):before{background-color:transparent}']);

// node_modules/@carbon/icons/es/information--square--filled/16.js
var _165 = {
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
      "fill": "none",
      "d": "M16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,13.875H17.125v-8H13v2.25h1.875v5.75H12v2.25h8Z",
      "data-icon-path": "inner-path"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,16.125H12v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"
    }
  }],
  "name": "information--square--filled",
  "size": 16
};

// node_modules/@carbon/ibm-products-web-components/es/components/notification-panel/notification.js
var blockClass2 = `${prefix}--notifications-panel__notification`;
var DefaultLocale = "en-US";
var dateTimeStyle = "long";
var CDSNotification = class CDSNotification2 extends HostListenerMixin(i2) {
  constructor() {
    super(...arguments);
    this.dateTimeLocale = void 0;
    this._handleKeyDown = (e4) => {
      if (e4.key === "Enter" || e4.key === " ") {
        this.click();
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "button");
    }
    if (!this.hasAttribute("tabindex")) {
      this.setAttribute("tabindex", "0");
    }
    this.addEventListener("keydown", this._handleKeyDown);
  }
  render() {
    const { type, timestamp, dateTimeLocale, _dismissSingleNotification: dismissSingleNotification, _fetchIcon: fetchIcon } = this;
    const supportedLocale = getSupportedLocale(dateTimeLocale, DefaultLocale);
    const icon = fetchIcon(type);
    return b`
      ${icon}
      <div class="${blockClass2}-content">
        <p class="${blockClass2}-time-label">
          ${r2.relative.format(timestamp, {
      locale: supportedLocale,
      style: dateTimeStyle
    })}
        </p>
        <slot name="title"></slot>
        <div class="${blockClass2}-description">
          <slot name="description"></slot>
        </div>
      </div>
      <cds-button
        tooltip-text=""
        align="left"
        kind="ghost"
        size="sm"
        class="${blockClass2}__dismiss-single-button"
        @click=${dismissSingleNotification}
      >
        ${iconLoader(_16, { slot: "icon" })}
      </cds-button>
    `;
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("keydown", this._handleKeyDown);
  }
  /**
   * Handles user-initiated dismiss request of the Notification.
   *
   * @param event The event that triggered the click.
   */
  _dismissSingleNotification(event) {
    const triggeredBy = event.target;
    event.preventDefault();
    event.stopPropagation();
    const init = {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        triggeredBy
      }
    };
    this.dispatchEvent(new CustomEvent(this.constructor.notificationDismiss, init));
  }
  _fetchIcon(type) {
    let icon;
    switch (type) {
      case "error":
        icon = iconLoader(_164, {
          class: `${blockClass2}-status-icon ${blockClass2}-status-icon-error`
        });
        break;
      case "success":
        icon = iconLoader(_163, {
          class: `${blockClass2}-status-icon ${blockClass2}-status-icon-success`
        });
        break;
      case "warning":
        icon = iconLoader(_162, {
          class: `${blockClass2}-status-icon ${blockClass2}-status-icon-warning`
        });
        break;
      case "informational":
        icon = iconLoader(_165, {
          class: `${blockClass2}-status-icon ${blockClass2}-status-icon-informational`
        });
        break;
      default:
        icon = null;
    }
    return icon;
  }
  /**
   * A selector selecting tabbable nodes.
   */
  static get selectorTabbable() {
    return selectorTabbable;
  }
  /**
   * The custom event is fired when the notification is closed by a user gesture.
   */
  static get notificationDismiss() {
    return `${prefix}-notification-dismiss`;
  }
};
CDSNotification.styles = styles3;
__decorate([
  n({ reflect: true })
], CDSNotification.prototype, "type", void 0);
__decorate([
  n()
], CDSNotification.prototype, "timestamp", void 0);
__decorate([
  c({ context: dateTimeLocaleContext, subscribe: true })
], CDSNotification.prototype, "dateTimeLocale", void 0);
CDSNotification = __decorate([
  carbonElement(`${prefix}-notification`)
], CDSNotification);

// node_modules/@carbon/icons/es/settings/16.js
var _166 = {
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
      "d": "M13.5,8.4c0-0.1,0-0.3,0-0.4c0-0.1,0-0.3,0-0.4l1-0.8c0.4-0.3,0.4-0.9,0.2-1.3l-1.2-2C13.3,3.2,13,3,12.6,3	c-0.1,0-0.2,0-0.3,0.1l-1.2,0.4c-0.2-0.1-0.4-0.3-0.7-0.4l-0.3-1.3C10.1,1.3,9.7,1,9.2,1H6.8c-0.5,0-0.9,0.3-1,0.8L5.6,3.1	C5.3,3.2,5.1,3.3,4.9,3.4L3.7,3C3.6,3,3.5,3,3.4,3C3,3,2.7,3.2,2.5,3.5l-1.2,2C1.1,5.9,1.2,6.4,1.6,6.8l0.9,0.9c0,0.1,0,0.3,0,0.4	c0,0.1,0,0.3,0,0.4L1.6,9.2c-0.4,0.3-0.5,0.9-0.2,1.3l1.2,2C2.7,12.8,3,13,3.4,13c0.1,0,0.2,0,0.3-0.1l1.2-0.4	c0.2,0.1,0.4,0.3,0.7,0.4l0.3,1.3c0.1,0.5,0.5,0.8,1,0.8h2.4c0.5,0,0.9-0.3,1-0.8l0.3-1.3c0.2-0.1,0.4-0.2,0.7-0.4l1.2,0.4	c0.1,0,0.2,0.1,0.3,0.1c0.4,0,0.7-0.2,0.9-0.5l1.1-2c0.2-0.4,0.2-0.9-0.2-1.3L13.5,8.4z M12.6,12l-1.7-0.6c-0.4,0.3-0.9,0.6-1.4,0.8	L9.2,14H6.8l-0.4-1.8c-0.5-0.2-0.9-0.5-1.4-0.8L3.4,12l-1.2-2l1.4-1.2c-0.1-0.5-0.1-1.1,0-1.6L2.2,6l1.2-2l1.7,0.6	C5.5,4.2,6,4,6.5,3.8L6.8,2h2.4l0.4,1.8c0.5,0.2,0.9,0.5,1.4,0.8L12.6,4l1.2,2l-1.4,1.2c0.1,0.5,0.1,1.1,0,1.6l1.4,1.2L12.6,12z"
    }
  }, {
    "elem": "path",
    "attrs": {
      "d": "M8,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3C11,9.6,9.7,11,8,11C8,11,8,11,8,11z M8,6C6.9,6,6,6.8,6,7.9C6,7.9,6,8,6,8	c0,1.1,0.8,2,1.9,2c0,0,0.1,0,0.1,0c1.1,0,2-0.8,2-1.9c0,0,0-0.1,0-0.1C10,6.9,9.2,6,8,6C8.1,6,8,6,8,6z"
    }
  }],
  "name": "settings",
  "size": 16
};

// node_modules/@carbon/ibm-products-web-components/es/components/notification-panel/notification-footer.scss.js
var styles4 = i(['a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font:inherit;font-feature-settings:"liga" 1;font-size:100%;margin:0;padding:0;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background,#fff);color:var(--cds-text-primary,#161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}html{font-size:100%}body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size,2.625rem);font-weight:var(--cds-heading-06-font-weight,300);letter-spacing:var(--cds-heading-06-letter-spacing,0);line-height:var(--cds-heading-06-line-height,1.199)}h2{font-size:var(--cds-heading-05-font-size,2rem);font-weight:var(--cds-heading-05-font-weight,400);letter-spacing:var(--cds-heading-05-letter-spacing,0);line-height:var(--cds-heading-05-line-height,1.25)}h3{font-size:var(--cds-heading-04-font-size,1.75rem);font-weight:var(--cds-heading-04-font-weight,400);letter-spacing:var(--cds-heading-04-letter-spacing,0);line-height:var(--cds-heading-04-line-height,1.28572)}h4{font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4)}h5{font-size:var(--cds-heading-02-font-size,1rem);font-weight:var(--cds-heading-02-font-weight,600);letter-spacing:var(--cds-heading-02-letter-spacing,0);line-height:var(--cds-heading-02-line-height,1.5)}h6{font-size:var(--cds-heading-01-font-size,.875rem);font-weight:var(--cds-heading-01-font-weight,600);letter-spacing:var(--cds-heading-01-letter-spacing,.16px);line-height:var(--cds-heading-01-line-height,1.42857)}p{font-size:var(--cds-body-02-font-size,1rem);font-weight:var(--cds-body-02-font-weight,400);letter-spacing:var(--cds-body-02-letter-spacing,0);line-height:var(--cds-body-02-line-height,1.5)}a{color:var(--cds-link-primary,#0062fe)}em{font-style:italic}@keyframes c4p--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes c4p--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes c4p--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.c4p--layout--size-xs{--c4p-layout-size-height-context:var(--c4p-layout-size-height-xs,1.5rem);--c4p-layout-size-height:var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-xs{--c4p-layout-size-height:var(--c4p-layout-size-height-context,var(--c4p-layout-size-height-xs,1.5rem))}.c4p--layout-constraint--size__min-xs{--c4p-layout-size-height-min:var(--c4p-layout-size-height-xs,1.5rem)}.c4p--layout-constraint--size__max-xs{--c4p-layout-size-height-max:var(--c4p-layout-size-height-xs,1.5rem)}.c4p--layout--size-sm{--c4p-layout-size-height-context:var(--c4p-layout-size-height-sm,2rem);--c4p-layout-size-height:var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-sm{--c4p-layout-size-height:var(--c4p-layout-size-height-context,var(--c4p-layout-size-height-sm,2rem))}.c4p--layout-constraint--size__min-sm{--c4p-layout-size-height-min:var(--c4p-layout-size-height-sm,2rem)}.c4p--layout-constraint--size__max-sm{--c4p-layout-size-height-max:var(--c4p-layout-size-height-sm,2rem)}.c4p--layout--size-md{--c4p-layout-size-height-context:var(--c4p-layout-size-height-md,2.5rem);--c4p-layout-size-height:var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-md{--c4p-layout-size-height:var(--c4p-layout-size-height-context,var(--c4p-layout-size-height-md,2.5rem))}.c4p--layout-constraint--size__min-md{--c4p-layout-size-height-min:var(--c4p-layout-size-height-md,2.5rem)}.c4p--layout-constraint--size__max-md{--c4p-layout-size-height-max:var(--c4p-layout-size-height-md,2.5rem)}.c4p--layout--size-lg{--c4p-layout-size-height-context:var(--c4p-layout-size-height-lg,3rem);--c4p-layout-size-height:var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-lg{--c4p-layout-size-height:var(--c4p-layout-size-height-context,var(--c4p-layout-size-height-lg,3rem))}.c4p--layout-constraint--size__min-lg{--c4p-layout-size-height-min:var(--c4p-layout-size-height-lg,3rem)}.c4p--layout-constraint--size__max-lg{--c4p-layout-size-height-max:var(--c4p-layout-size-height-lg,3rem)}.c4p--layout--size-xl{--c4p-layout-size-height-context:var(--c4p-layout-size-height-xl,4rem);--c4p-layout-size-height:var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-xl{--c4p-layout-size-height:var(--c4p-layout-size-height-context,var(--c4p-layout-size-height-xl,4rem))}.c4p--layout-constraint--size__min-xl{--c4p-layout-size-height-min:var(--c4p-layout-size-height-xl,4rem)}.c4p--layout-constraint--size__max-xl{--c4p-layout-size-height-max:var(--c4p-layout-size-height-xl,4rem)}.c4p--layout--size-2xl{--c4p-layout-size-height-context:var(--c4p-layout-size-height-2xl,5rem);--c4p-layout-size-height:var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-2xl{--c4p-layout-size-height:var(--c4p-layout-size-height-context,var(--c4p-layout-size-height-2xl,5rem))}.c4p--layout-constraint--size__min-2xl{--c4p-layout-size-height-min:var(--c4p-layout-size-height-2xl,5rem)}.c4p--layout-constraint--size__max-2xl{--c4p-layout-size-height-max:var(--c4p-layout-size-height-2xl,5rem)}.c4p--layout--density-condensed{--c4p-layout-density-padding-inline-context:var(--c4p-layout-density-padding-inline-condensed,0.5rem);--c4p-layout-density-padding-inline:var(--c4p-layout-density-padding-inline-context)}.c4p--layout-constraint--density__default-condensed{--c4p-layout-density-padding-inline:var(--c4p-layout-density-padding-inline-context,var(--c4p-layout-density-padding-inline-condensed,0.5rem))}.c4p--layout-constraint--density__min-condensed{--c4p-layout-density-padding-inline-min:var(--c4p-layout-density-padding-inline-condensed,0.5rem)}.c4p--layout-constraint--density__max-condensed{--c4p-layout-density-padding-inline-max:var(--c4p-layout-density-padding-inline-condensed,0.5rem)}.c4p--layout--density-normal{--c4p-layout-density-padding-inline-context:var(--c4p-layout-density-padding-inline-normal,1rem);--c4p-layout-density-padding-inline:var(--c4p-layout-density-padding-inline-context)}.c4p--layout-constraint--density__default-normal{--c4p-layout-density-padding-inline:var(--c4p-layout-density-padding-inline-context,var(--c4p-layout-density-padding-inline-normal,1rem))}.c4p--layout-constraint--density__min-normal{--c4p-layout-density-padding-inline-min:var(--c4p-layout-density-padding-inline-normal,1rem)}.c4p--layout-constraint--density__max-normal{--c4p-layout-density-padding-inline-max:var(--c4p-layout-density-padding-inline-normal,1rem)}:root{--c4p-layout-size-height-xs:1.5rem;--c4p-layout-size-height-sm:2rem;--c4p-layout-size-height-md:2.5rem;--c4p-layout-size-height-lg:3rem;--c4p-layout-size-height-xl:4rem;--c4p-layout-size-height-2xl:5rem;--c4p-layout-size-height-min:0px;--c4p-layout-size-height-max:999999999px;--c4p-layout-density-padding-inline-condensed:0.5rem;--c4p-layout-density-padding-inline-normal:1rem;--c4p-layout-density-padding-inline-min:0px;--c4p-layout-density-padding-inline-max:999999999px}.c4p--assistive-text,.c4p--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.c4p--empty-state{color:var(--cds-text-primary,#161616);display:flex}.c4p--empty-state .c4p--empty-state__header{font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4);margin:0;padding-block-end:.5rem}.c4p--empty-state .c4p--empty-state__subtitle{color:var(--cds-text-secondary,#525252);font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);padding-block-end:1rem}.c4p--empty-state .c4p--empty-state__header--small{font-size:var(--cds-body-compact-02-font-size,1rem);font-weight:var(--cds-body-compact-02-font-weight,400);letter-spacing:var(--cds-body-compact-02-letter-spacing,0);line-height:var(--cds-body-compact-02-line-height,1.375);padding-block-end:.5rem}.c4p--empty-state .c4p--empty-state__subtitle--small{font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}.c4p--empty-state__illustration{block-size:auto;margin-block-end:1rem}.c4p--empty-state__illustration.c4p--empty-state__illustration--lg{max-inline-size:5rem;min-inline-size:5rem}.c4p--empty-state__illustration.c4p--empty-state__illustration--sm{max-inline-size:4rem;min-inline-size:4rem}.c4p--empty-state-position--top{flex-direction:column}.c4p--empty-state-position--right{flex-direction:row-reverse}.c4p--empty-state-position--bottom{flex-direction:column-reverse}.c4p--empty-state-position--left{flex-direction:row}.c4p--empty-state .c4p--empty-state__action-button{display:block;margin-block-end:1rem}.c4p--empty-state .c4p--empty-state__link{display:inline-block}@keyframes notifications-panel-fade-in{0%{opacity:0;transform:translateY(-38.5rem)}to{opacity:1;transform:translateY(0)}}@keyframes notifications-panel-fade-out{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-38.5rem)}}@keyframes notifications-panel-entrance-reduced{0%{opacity:0}to{opacity:1}}@keyframes notifications-panel-exit-reduced{0%{opacity:1}to{opacity:0}}.c4p--notifications-panel__entrance{animation:notifications-panel-fade-in .24s cubic-bezier(.2,0,.38,.9)}.c4p--notifications-panel__exit{animation:notifications-panel-fade-out .24s cubic-bezier(.2,0,.38,.9) forwards}@media (prefers-reduced-motion){.c4p--notifications-panel__entrance{animation:notifications-panel-entrance-reduced .15s cubic-bezier(.2,0,1,.9) forwards}.c4p--notifications-panel__exit{animation:notifications-panel-exit-reduced .15s cubic-bezier(.2,0,1,.9) forwards}}.c4p--notifications-panel__container{background-color:var(--cds-layer-01,#f4f4f4);border-block-end:1px solid var(--cds-border-subtle-02,#e0e0e0);border-inline-start:1px solid var(--cds-border-subtle-02,#e0e0e0);box-shadow:0 .125rem .25rem var(--cds-overlay,rgba(0,0,0,.6));clip-path:inset(0 calc(var(--cds-spacing-01)*-1) calc(var(--cds-spacing-02)*-1) calc(var(--cds-spacing-01)*-1));color:var(--cds-text-primary,#161616);inset-block-start:3rem;inset-inline-end:0;max-block-size:38.5rem;max-inline-size:22.75rem;min-block-size:38.5rem;min-inline-size:20rem;overflow:auto;position:fixed;transition:transform .11s cubic-bezier(.2,0,.38,.9);z-index:2}.c4p--notifications-panel__container .c4p--notifications-panel__header-container{background-color:var(--cds-layer-01,#f4f4f4);border-block-end:1px solid var(--cds-border-subtle-01,#c6c6c6);inset-block-start:0;padding:.5rem 1rem;position:sticky;z-index:2}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__header-flex{align-items:center;display:flex;justify-content:space-between}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__do-not-disturb-toggle{padding-block-end:.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__do-not-disturb-toggle .c4p--toggle__label-text{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__dismiss-button{color:var(--cds-text-primary,#161616)}.c4p--notifications-panel__container .c4p--notifications-panel__header-container .c4p--notifications-panel__header{font-size:var(--cds-heading-compact-01-font-size,.875rem);font-weight:var(--cds-heading-compact-01-font-weight,600);letter-spacing:var(--cds-heading-compact-01-letter-spacing,.16px);line-height:var(--cds-heading-compact-01-line-height,1.28572);margin:0}.c4p--notifications-panel__container .c4p--notifications-panel__time-section-label{background-color:var(--cds-layer-01,#f4f4f4);color:var(--cds-text-secondary,#525252);font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);font-weight:600;inset-block-start:3.0625rem;letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333);padding:.5rem 1rem;position:sticky;z-index:2}.c4p--notifications-panel__container .c4p--notifications-panel__notification:focus,.c4p--notifications-panel__container .c4p--notifications-panel__notification:hover{background-color:var(--cds-layer-accent-01,#e0e0e0)}.c4p--notifications-panel__container .c4p--notifications-panel__notification:focus .c4p--notifications-panel__dismiss-single-button,.c4p--notifications-panel__container .c4p--notifications-panel__notification:hover .c4p--notifications-panel__dismiss-single-button{opacity:1}.c4p--notifications-panel__container .c4p--notifications-panel__notification:focus{border-color:var(--cds-focus,#0f62fe);box-shadow:inset 0 0 0 2px var(--cds-focus,#0f62fe),inset 0 0 0 2px var(--cds-background,#fff);outline:0}.c4p--notifications-panel__container .c4p--notifications-panel__notification{align-items:flex-start;background-color:var(--cds-layer-01,#f4f4f4);border:0;cursor:pointer;display:flex;inline-size:100%;min-block-size:6.25rem;padding:1rem;position:relative;text-align:start;transition:background-color .24s cubic-bezier(.2,0,.38,.9)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-title{color:var(--cds-text-secondary,#525252);font-size:var(--cds-heading-01-font-size,.875rem);font-weight:var(--cds-heading-01-font-weight,600);font-weight:400;letter-spacing:var(--cds-heading-01-letter-spacing,.16px);line-height:var(--cds-heading-01-line-height,1.42857);margin-block-end:.25rem}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-title.c4p--notifications-panel__notification-title-unread{color:var(--cds-text-secondary,#525252);font-weight:600;margin-block-end:.25rem}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notifications-link{font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon{margin-inline-end:.5rem;min-inline-size:1rem}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-error{fill:var(--cds-support-error,#da1e28)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-success{fill:var(--cds-support-success,#24a148)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-warning{fill:var(--cds-support-warning,#f1c21b)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-status-icon.c4p--notifications-panel__notification-status-icon-informational{fill:var(--cds-support-info,#0043ce)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-time-label{margin-block-end:.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-description,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-time-label{color:var(--cds-text-secondary,#525252);font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-description.c4p--notifications-panel__notification-short-description{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-description.c4p--notifications-panel__notification-long-description{display:block;overflow:initial;-webkit-line-clamp:initial;line-clamp:none}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button{align-items:center;display:flex;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333);min-inline-size:5.5rem;padding:0}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button .c4p--btn__icon,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button .c4p--btn__icon{transition:transform .24s ease}@media (prefers-reduced-motion:reduce){.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button .c4p--btn__icon,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button .c4p--btn__icon{transition:none}}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button.c4p--notifications-panel__notification-read-more-button .c4p--btn__icon,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button.c4p--notifications-panel__notification-read-more-button .c4p--btn__icon{transform:rotate(0deg)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-less-button.c4p--notifications-panel__notification-read-less-button .c4p--btn__icon,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__notification-content .c4p--notifications-panel__notification-read-more-button.c4p--notifications-panel__notification-read-less-button .c4p--btn__icon{transform:rotate(180deg)}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--popover-container{position:static}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__dismiss-single-button{align-items:center;color:var(--cds-text-primary,#161616);display:flex;inset-block-start:0;inset-inline-end:0;justify-content:center;min-inline-size:2rem;opacity:0;padding:0;position:absolute}.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__dismiss-single-button:focus,.c4p--notifications-panel__container .c4p--notifications-panel__notification .c4p--notifications-panel__dismiss-single-button:hover{opacity:1}.c4p--notifications-panel__container .c4p--notifications-panel__notification-previous:not(:first-of-type):before,.c4p--notifications-panel__container .c4p--notifications-panel__notification-today:not(:first-of-type):before,.c4p--notifications-panel__container .c4p--notifications-panel__notification-yesterday:not(:first-of-type):before{background-color:var(--cds-border-subtle-01,#c6c6c6);block-size:1px;content:"";inline-size:calc(100% - 2rem);inset-block-start:0;margin:0 auto;position:absolute;transition:background-color .24s cubic-bezier(.2,0,.38,.9)}.c4p--notifications-panel__container .c4p--notifications-panel__notification-previous:hover+.c4p--notifications-panel__notification-previous:not(:first-of-type):before,.c4p--notifications-panel__container .c4p--notifications-panel__notification-today:hover+.c4p--notifications-panel__notification-today:not(:first-of-type):before,.c4p--notifications-panel__container .c4p--notifications-panel__notification-yesterday:hover+.c4p--notifications-panel__notification-yesterday:not(:first-of-type):before{background-color:transparent}.c4p--notifications-panel__container .c4p--notifications-panel__main-section-empty.c4p--notifications-panel__main-section{align-items:center;block-size:100%;display:flex;justify-content:center;margin-block-start:10rem;min-block-size:0}.c4p--notifications-panel__container .c4p--notifications-panel__main-section-empty.c4p--notifications-panel__main-section .c4p-subtext{font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.c4p--notifications-panel__container .c4p--notifications-panel__main-section{min-block-size:498px}.c4p--notifications-panel__container .c4p--notifications-panel__bottom-actions{align-items:center;background-color:var(--cds-layer-01,#f4f4f4);block-size:2.5rem;border-block-start:1px solid var(--cds-border-subtle-01,#c6c6c6);display:flex;inset-block-end:0;min-block-size:2.5rem;position:sticky;z-index:2}.c4p--notifications-panel__container .c4p--notifications-panel__bottom-actions .c4p--notifications-panel__view-all-button{align-items:center;block-size:2.5rem;border-inline-end:1px solid var(--cds-border-subtle-01,#c6c6c6);color:var(--cds-text-primary,#161616);display:flex;inline-size:100%;max-inline-size:calc(100% - 2.5rem);min-block-size:2.5rem}.c4p--notifications-panel__container .c4p--notifications-panel__bottom-actions .c4p--notifications-panel__settings-button{align-items:center;block-size:2.5rem;color:var(--cds-text-primary,#161616);display:flex;justify-content:center;min-block-size:2.5rem;min-inline-size:2.5rem;padding:0}.c4p--notifications-panel__container .c4p--notifications-panel__bottom-actions .c4p--notifications-panel__settings-button .c4p--btn__icon{margin:0}.c4p--notifications-panel__header-container:has(.c4p--notifications-panel__do-not-disturb-toggle)+.c4p--notifications-panel__main-section .c4p--notifications-panel__time-section-label{inset-block-start:4.8125rem}:host(c4p-notification-footer){display:flex}.c4p--notifications-panel__view-all-button{border-inline-end:1px solid var(--cds-border-subtle-01,#c6c6c6);color:var(--cds-text-primary,#161616);inline-size:100%;max-inline-size:calc(100% - 2.5rem);min-block-size:2.5rem}.c4p--notifications-panel__settings-button,.c4p--notifications-panel__view-all-button{align-items:center;display:flex;--cds-link-primary:$text-primary;--cds-link-primary-hover:$text-primary;--cds-layout-size-height-min:2.5rem;--cds-layout-size-height-sm:2.5rem;--cds-layout-size-height:2.5rem;--cds-layout-size-height-lg:2.5rem;--cds-layout-size-height-max:2.5rem;--cds-layout-size-height-2xl:2.5rem}.c4p--notifications-panel__settings-button{justify-content:center;padding:0}.c4p--notifications-panel__settings-button .cds--btn__icon{margin:0}']);

// node_modules/@carbon/ibm-products-web-components/es/components/notification-panel/notification-footer.js
var blockClass3 = `${prefix}--notifications-panel`;
var CDSNotificationFooter = class CDSNotificationFooter2 extends HostListenerMixin(i2) {
  constructor() {
    super(...arguments);
    this.viewAllLabel = "View All";
  }
  render() {
    const { viewAllLabel, _viewAllNotification: viewAllNotification, _onClickSettings: onClickSettings } = this;
    return b`
      <cds-button
        kind="ghost"
        class="${blockClass3}__view-all-button"
        @click=${viewAllNotification}
      >
        ${viewAllLabel}
      </cds-button>
      <cds-button
        kind="ghost"
        size="sm"
        class="${blockClass3}__settings-button"
        @click=${onClickSettings}
      >
        ${iconLoader(_166, { slot: "icon" })}
      </cds-button>
    `;
  }
  _viewAllNotification(event) {
    const triggeredBy = event.target;
    event.stopPropagation();
    const init = {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        triggeredBy
      }
    };
    this.dispatchEvent(new CustomEvent(this.constructor.notificationViewAll, init));
  }
  _onClickSettings(event) {
    const triggeredBy = event.target;
    event.stopPropagation();
    const init = {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        triggeredBy
      }
    };
    this.dispatchEvent(new CustomEvent(this.constructor.notificationSettings, init));
  }
  /**
   * A selector selecting tabbable nodes.
   */
  static get selectorTabbable() {
    return selectorTabbable;
  }
  /**
   * The custom event is fired when a notification is clicked or when the Enter key is pressed on it.
   */
  static get notificationViewAll() {
    return `${prefix}-notification-view-all`;
  }
  /**
   * The custom event is fired when the notification is closed by a user gesture.
   */
  static get notificationSettings() {
    return `${prefix}-notification-settings`;
  }
};
CDSNotificationFooter.styles = styles4;
__decorate([
  n({ reflect: true, type: String, attribute: "view-all-label" })
], CDSNotificationFooter.prototype, "viewAllLabel", void 0);
CDSNotificationFooter = __decorate([
  carbonElement(`${prefix}-notification-footer`)
], CDSNotificationFooter);
/*! Bundled license information:

@carbon-labs/utilities/es/settings/settings.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2023
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon-labs/utilities/es/settings/index.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2023
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon-labs/wc-empty-state/es/components/empty-state/src/empty-state.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon-labs/wc-empty-state/es/components/empty-state/src/empty-state.template.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon-labs/wc-empty-state/es/components/empty-state/empty-state.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon/ibm-products-web-components/es/components/notification-panel/notification-panel.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2023, 2024
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon/ibm-products-web-components/es/components/notification-panel/notification.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2023, 2024
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon/ibm-products-web-components/es/components/notification-panel/notification-footer.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2023, 2024
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
