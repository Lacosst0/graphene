import {
  carbonPrefix,
  prefix
} from "./chunk-6BPMK2Y2.js";
import {
  _16 as _162,
  moderate02
} from "./chunk-FJVIGXT2.js";
import "./chunk-GVBT3ZOB.js";
import "./chunk-63DGZXAG.js";
import "./chunk-MFEZKDN2.js";
import "./chunk-KQC2PJHA.js";
import "./chunk-F6EIPXKQ.js";
import "./chunk-LSZ2PVLU.js";
import "./chunk-X7WRA7XG.js";
import "./chunk-HFGTZQQE.js";
import "./chunk-SMM5AFXN.js";
import "./chunk-MU62I7LL.js";
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
import "./chunk-DAFPBEYU.js";
import "./chunk-73FE5HOG.js";
import "./chunk-YOLTZNLE.js";
import "./chunk-M2VBID3H.js";
import {
  e,
  n,
  o,
  r
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

// node_modules/@carbon/ibm-products-web-components/es/components/side-panel/defs.js
var SIDE_PANEL_SIZE;
(function(SIDE_PANEL_SIZE2) {
  SIDE_PANEL_SIZE2["EXTRA_SMALL"] = "xs";
  SIDE_PANEL_SIZE2["SMALL"] = "sm";
  SIDE_PANEL_SIZE2["MEDIUM"] = "md";
  SIDE_PANEL_SIZE2["LARGE"] = "lg";
  SIDE_PANEL_SIZE2["EXTRA_EXTRA_LARGE"] = "2xl";
})(SIDE_PANEL_SIZE || (SIDE_PANEL_SIZE = {}));
var SIDE_PANEL_PLACEMENT;
(function(SIDE_PANEL_PLACEMENT2) {
  SIDE_PANEL_PLACEMENT2["RIGHT"] = "right";
  SIDE_PANEL_PLACEMENT2["LEFT"] = "left";
})(SIDE_PANEL_PLACEMENT || (SIDE_PANEL_PLACEMENT = {}));

// node_modules/@carbon/ibm-products-web-components/es/components/side-panel/side-panel.scss.js
var styles = i(['a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font:inherit;font-feature-settings:"liga" 1;font-size:100%;margin:0;padding:0;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background,#fff);color:var(--cds-text-primary,#161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}html{font-size:100%}body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size,2.625rem);font-weight:var(--cds-heading-06-font-weight,300);letter-spacing:var(--cds-heading-06-letter-spacing,0);line-height:var(--cds-heading-06-line-height,1.199)}h2{font-size:var(--cds-heading-05-font-size,2rem);font-weight:var(--cds-heading-05-font-weight,400);letter-spacing:var(--cds-heading-05-letter-spacing,0);line-height:var(--cds-heading-05-line-height,1.25)}h3{font-size:var(--cds-heading-04-font-size,1.75rem);font-weight:var(--cds-heading-04-font-weight,400);letter-spacing:var(--cds-heading-04-letter-spacing,0);line-height:var(--cds-heading-04-line-height,1.28572)}h4{font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4)}h5{font-size:var(--cds-heading-02-font-size,1rem);font-weight:var(--cds-heading-02-font-weight,600);letter-spacing:var(--cds-heading-02-letter-spacing,0);line-height:var(--cds-heading-02-line-height,1.5)}h6{font-size:var(--cds-heading-01-font-size,.875rem);font-weight:var(--cds-heading-01-font-weight,600);letter-spacing:var(--cds-heading-01-letter-spacing,.16px);line-height:var(--cds-heading-01-line-height,1.42857)}p{font-size:var(--cds-body-02-font-size,1rem);font-weight:var(--cds-body-02-font-weight,400);letter-spacing:var(--cds-body-02-letter-spacing,0);line-height:var(--cds-body-02-line-height,1.5)}a{color:var(--cds-link-primary,#0062fe)}em{font-style:italic}.c4p--action-set,:host(c4p-side-panel) .c4p--side-panel__actions-container{align-items:stretch;background-color:var(--cds-layer-01,#f4f4f4);justify-content:flex-end}.c4p--action-set .c4p--action-set__action-button,:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set__action-button,:host(c4p-side-panel) .c4p--side-panel__actions-container ::slotted(c4p-button){align-items:center;font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);line-height:var(--cds-body-short-01-line-height,1.28572);margin:0}.c4p--action-set .c4p--action-set__action-button.c4p--action-set__action-button--expressive,:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set__action-button--expressive::slotted(c4p-button),:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set__action-button.c4p--action-set__action-button--expressive{block-size:4rem;padding-block:1rem 2rem}.c4p--action-set.c4p--btn-set .c4p--action-set__action-button.c4p--btn,.c4p--action-set.c4p--btn-set .c4p--action-set__action-button.c4p--btn.c4p--btn--expressive,:host(c4p-side-panel) .c4p--action-set.c4p--btn-set .c4p--side-panel__actions-container .c4p--btn::slotted(c4p-button),:host(c4p-side-panel) .c4p--btn-set.c4p--side-panel__actions-container .c4p--action-set__action-button.c4p--btn,:host(c4p-side-panel) .c4p--btn-set.c4p--side-panel__actions-container .c4p--btn::slotted(c4p-button),:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set.c4p--btn-set .c4p--btn::slotted(c4p-button){max-inline-size:none}.c4p--action-set:not(.c4p--action-set--stacking) .c4p--action-set__action-button--ghost,:host(c4p-side-panel) .c4p--side-panel__actions-container:not(.c4p--action-set--stacking) .c4p--action-set__action-button--ghost{padding-inline-start:2rem}.c4p--action-set.c4p--action-set--row-single .c4p--action-set__action-button--ghost,.c4p--action-set.c4p--action-set--row-single.c4p--action-set--md .c4p--action-set__action-button,:host(c4p-side-panel) .c4p--action-set--md.c4p--side-panel__actions-container[actions-multiple=single] .c4p--action-set__action-button,:host(c4p-side-panel) .c4p--action-set--md.c4p--side-panel__actions-container[actions-multiple=single] ::slotted(c4p-button),:host(c4p-side-panel) .c4p--action-set--row-single.c4p--action-set--md.c4p--side-panel__actions-container .c4p--action-set__action-button,:host(c4p-side-panel) .c4p--action-set--row-single.c4p--action-set--md.c4p--side-panel__actions-container ::slotted(c4p-button),:host(c4p-side-panel) .c4p--action-set--row-single.c4p--side-panel__actions-container .c4p--action-set__action-button--ghost,:host(c4p-side-panel) .c4p--action-set.c4p--action-set--row-single.c4p--action-set--md .c4p--side-panel__actions-container ::slotted(c4p-button),:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set.c4p--action-set--row-single.c4p--action-set--md ::slotted(c4p-button),:host(c4p-side-panel) .c4p--side-panel__actions-container[actions-multiple=single] .c4p--action-set__action-button--ghost{flex:0 0 100%}.c4p--action-set.c4p--action-set--row-double .c4p--action-set__action-button--ghost,:host(c4p-side-panel) .c4p--action-set--row-double.c4p--side-panel__actions-container .c4p--action-set__action-button--ghost,:host(c4p-side-panel) .c4p--side-panel__actions-container[actions-multiple=double] .c4p--action-set__action-button--ghost{flex:1 1 75%}.c4p--action-set.c4p--action-set--row-double.c4p--action-set--lg .c4p--action-set__action-button,.c4p--action-set.c4p--action-set--row-double.c4p--action-set--md .c4p--action-set__action-button,.c4p--action-set.c4p--action-set--row-single.c4p--action-set--lg .c4p--action-set__action-button:not(.c4p--action-set__action-button--ghost),.c4p--action-set.c4p--action-set--row-triple .c4p--action-set__action-button--ghost,:host(c4p-side-panel) .c4p--action-set--lg.c4p--side-panel__actions-container[actions-multiple=double] .c4p--action-set__action-button,:host(c4p-side-panel) .c4p--action-set--lg.c4p--side-panel__actions-container[actions-multiple=double] ::slotted(c4p-button),:host(c4p-side-panel) .c4p--action-set--lg.c4p--side-panel__actions-container[actions-multiple=single] .c4p--action-set__action-button:not(.c4p--action-set__action-button--ghost),:host(c4p-side-panel) .c4p--action-set--lg.c4p--side-panel__actions-container[actions-multiple=single] :not(.c4p--action-set__action-button--ghost)::slotted(c4p-button),:host(c4p-side-panel) .c4p--action-set--md.c4p--side-panel__actions-container[actions-multiple=double] .c4p--action-set__action-button,:host(c4p-side-panel) .c4p--action-set--md.c4p--side-panel__actions-container[actions-multiple=double] ::slotted(c4p-button),:host(c4p-side-panel) .c4p--action-set--row-double.c4p--action-set--lg.c4p--side-panel__actions-container .c4p--action-set__action-button,:host(c4p-side-panel) .c4p--action-set--row-double.c4p--action-set--lg.c4p--side-panel__actions-container ::slotted(c4p-button),:host(c4p-side-panel) .c4p--action-set--row-double.c4p--action-set--md.c4p--side-panel__actions-container .c4p--action-set__action-button,:host(c4p-side-panel) .c4p--action-set--row-double.c4p--action-set--md.c4p--side-panel__actions-container ::slotted(c4p-button),:host(c4p-side-panel) .c4p--action-set--row-single.c4p--action-set--lg.c4p--side-panel__actions-container .c4p--action-set__action-button:not(.c4p--action-set__action-button--ghost),:host(c4p-side-panel) .c4p--action-set--row-single.c4p--action-set--lg.c4p--side-panel__actions-container :not(.c4p--action-set__action-button--ghost)::slotted(c4p-button),:host(c4p-side-panel) .c4p--action-set--row-triple.c4p--side-panel__actions-container .c4p--action-set__action-button--ghost,:host(c4p-side-panel) .c4p--action-set.c4p--action-set--row-double.c4p--action-set--lg .c4p--side-panel__actions-container ::slotted(c4p-button),:host(c4p-side-panel) .c4p--action-set.c4p--action-set--row-double.c4p--action-set--md .c4p--side-panel__actions-container ::slotted(c4p-button),:host(c4p-side-panel) .c4p--action-set.c4p--action-set--row-single.c4p--action-set--lg .c4p--side-panel__actions-container :not(.c4p--action-set__action-button--ghost)::slotted(c4p-button),:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set.c4p--action-set--row-double.c4p--action-set--lg ::slotted(c4p-button),:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set.c4p--action-set--row-double.c4p--action-set--md ::slotted(c4p-button),:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set.c4p--action-set--row-single.c4p--action-set--lg :not(.c4p--action-set__action-button--ghost)::slotted(c4p-button),:host(c4p-side-panel) .c4p--side-panel__actions-container[actions-multiple=triple] .c4p--action-set__action-button--ghost{flex:0 1 50%}.c4p--action-set.c4p--action-set--row-triple .c4p--action-set__action-button--ghost,:host(c4p-side-panel) .c4p--action-set--row-triple.c4p--side-panel__actions-container .c4p--action-set__action-button--ghost,:host(c4p-side-panel) .c4p--side-panel__actions-container[actions-multiple=triple] .c4p--action-set__action-button--ghost{flex:1 1 50%}.c4p--action-set.c4p--btn-set.c4p--action-set--2xl .c4p--action-set__action-button:not(.c4p--action-set__action-button--ghost),.c4p--action-set.c4p--btn-set.c4p--action-set--row-quadruple .c4p--action-set__action-button:not(.c4p--action-set__action-button--ghost),.c4p--action-set.c4p--btn-set.c4p--action-set--row-triple.c4p--action-set--lg .c4p--action-set__action-button:not(.c4p--action-set__action-button--ghost),.c4p--action-set.c4p--btn-set.c4p--action-set--xl .c4p--action-set__action-button:not(.c4p--action-set__action-button--ghost),:host(c4p-side-panel) .c4p--action-set.c4p--btn-set.c4p--action-set--2xl .c4p--side-panel__actions-container :not(.c4p--action-set__action-button--ghost)::slotted(c4p-button),:host(c4p-side-panel) .c4p--action-set.c4p--btn-set.c4p--action-set--row-quadruple .c4p--side-panel__actions-container :not(.c4p--action-set__action-button--ghost)::slotted(c4p-button),:host(c4p-side-panel) .c4p--action-set.c4p--btn-set.c4p--action-set--row-triple.c4p--action-set--lg .c4p--side-panel__actions-container :not(.c4p--action-set__action-button--ghost)::slotted(c4p-button),:host(c4p-side-panel) .c4p--action-set.c4p--btn-set.c4p--action-set--xl .c4p--side-panel__actions-container :not(.c4p--action-set__action-button--ghost)::slotted(c4p-button),:host(c4p-side-panel) .c4p--btn-set.c4p--action-set--2xl.c4p--side-panel__actions-container .c4p--action-set__action-button:not(.c4p--action-set__action-button--ghost),:host(c4p-side-panel) .c4p--btn-set.c4p--action-set--2xl.c4p--side-panel__actions-container :not(.c4p--action-set__action-button--ghost)::slotted(c4p-button),:host(c4p-side-panel) .c4p--btn-set.c4p--action-set--lg.c4p--side-panel__actions-container[actions-multiple=triple] .c4p--action-set__action-button:not(.c4p--action-set__action-button--ghost),:host(c4p-side-panel) .c4p--btn-set.c4p--action-set--lg.c4p--side-panel__actions-container[actions-multiple=triple] :not(.c4p--action-set__action-button--ghost)::slotted(c4p-button),:host(c4p-side-panel) .c4p--btn-set.c4p--action-set--row-quadruple.c4p--side-panel__actions-container .c4p--action-set__action-button:not(.c4p--action-set__action-button--ghost),:host(c4p-side-panel) .c4p--btn-set.c4p--action-set--row-quadruple.c4p--side-panel__actions-container :not(.c4p--action-set__action-button--ghost)::slotted(c4p-button),:host(c4p-side-panel) .c4p--btn-set.c4p--action-set--row-triple.c4p--action-set--lg.c4p--side-panel__actions-container .c4p--action-set__action-button:not(.c4p--action-set__action-button--ghost),:host(c4p-side-panel) .c4p--btn-set.c4p--action-set--row-triple.c4p--action-set--lg.c4p--side-panel__actions-container :not(.c4p--action-set__action-button--ghost)::slotted(c4p-button),:host(c4p-side-panel) .c4p--btn-set.c4p--action-set--xl.c4p--side-panel__actions-container .c4p--action-set__action-button:not(.c4p--action-set__action-button--ghost),:host(c4p-side-panel) .c4p--btn-set.c4p--action-set--xl.c4p--side-panel__actions-container :not(.c4p--action-set__action-button--ghost)::slotted(c4p-button),:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set.c4p--btn-set.c4p--action-set--2xl :not(.c4p--action-set__action-button--ghost)::slotted(c4p-button),:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set.c4p--btn-set.c4p--action-set--row-quadruple :not(.c4p--action-set__action-button--ghost)::slotted(c4p-button),:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set.c4p--btn-set.c4p--action-set--row-triple.c4p--action-set--lg :not(.c4p--action-set__action-button--ghost)::slotted(c4p-button),:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set.c4p--btn-set.c4p--action-set--xl :not(.c4p--action-set__action-button--ghost)::slotted(c4p-button){flex:0 1 25%;max-inline-size:14.5rem}.c4p--action-set.c4p--btn-set.c4p--action-set--row-quadruple .c4p--action-set__action-button--ghost,:host(c4p-side-panel) .c4p--btn-set.c4p--action-set--row-quadruple.c4p--side-panel__actions-container .c4p--action-set__action-button--ghost{flex:1 1 25%}.c4p--action-set .c4p--action-set__action-button .c4p--inline-loading,:host(c4p-side-panel) .c4p--side-panel__actions-container .c4p--action-set__action-button .c4p--inline-loading,:host(c4p-side-panel) .c4p--side-panel__actions-container ::slotted(c4p-button) .c4p--inline-loading{inline-size:2rem;inset-block-start:0;inset-inline-end:0;position:absolute}:root{--cds-grid-gutter:2rem;--cds-grid-columns:4;--cds-grid-margin:0}@media (min-width:42rem){:root{--cds-grid-columns:8;--cds-grid-margin:1rem}}@media (min-width:66rem){:root{--cds-grid-columns:16}}@media (min-width:99rem){:root{--cds-grid-margin:1.5rem}}.cds--css-grid{--cds-grid-gutter-start:calc(var(--cds-grid-gutter)/2);--cds-grid-gutter-end:calc(var(--cds-grid-gutter)/2);--cds-grid-column-hang:calc(var(--cds-grid-gutter)/2);display:grid;grid-template-columns:repeat(var(--cds-grid-columns),minmax(0,1fr));inline-size:100%;margin-inline:auto;max-inline-size:99rem;padding-inline:var(--cds-grid-margin)}.cds--css-grid--full-width{max-inline-size:100%}.cds--css-grid-column{--cds-grid-mode-start:var(--cds-grid-gutter-start);--cds-grid-mode-end:var(--cds-grid-gutter-end);margin-inline:var(--cds-grid-gutter-start) var(--cds-grid-gutter-end)}[dir=rtl] .cds--css-grid-column{margin-inline:var(--cds-grid-gutter-end) var(--cds-grid-gutter-start)}.cds--css-grid--narrow{--cds-grid-gutter-start:0rem}.cds--css-grid--condensed{--cds-grid-gutter:0.0625rem;--cds-grid-column-hang:0.96875rem}.cds--css-grid--start{margin-inline-start:0}.cds--css-grid--end{margin-inline-end:0}.cds--subgrid{display:grid;grid-template-columns:repeat(var(--cds-grid-columns),minmax(0,1fr));margin-inline:calc(var(--cds-grid-mode-start)*-1) calc(var(--cds-grid-mode-end)*-1)}[dir=rtl] .cds--subgrid{margin-inline:calc(var(--cds-grid-mode-end)*-1) calc(var(--cds-grid-mode-start)*-1)}.cds--subgrid--wide{--cds-grid-gutter-start:1rem;--cds-grid-gutter-end:1rem;--cds-grid-column-hang:0}.cds--subgrid--narrow{--cds-grid-gutter-start:0rem;--cds-grid-gutter-end:1rem;--cds-grid-column-hang:1rem}.cds--subgrid--condensed{--cds-grid-gutter-start:0.03125rem;--cds-grid-gutter-end:0.03125rem;--cds-grid-column-hang:0.96875rem}.cds--grid-column-hang{margin-inline-start:var(--cds-grid-column-hang)}[dir=rtl] .cds--grid-column-hang{margin-inline:initial var(--cds-grid-column-hang)}.cds--col-span-0{display:none}.cds--col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--sm\\:col-span-0{display:none}.cds--sm\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--sm\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--sm\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--sm\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--sm\\:col-span-auto{grid-column:auto}.cds--sm\\:col-span-100{grid-column:1/-1}.cds--sm\\:col-span-75{--cds-grid-columns:3;grid-column:span 3/span 3}.cds--sm\\:col-span-50{--cds-grid-columns:2;grid-column:span 2/span 2}.cds--sm\\:col-span-25{--cds-grid-columns:1;grid-column:span 1/span 1}@media (min-width:42rem){.cds--md\\:col-span-0{display:none}.cds--md\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--md\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--md\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--md\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--md\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--md\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--md\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--md\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--md\\:col-span-auto{grid-column:auto}.cds--md\\:col-span-100{grid-column:1/-1}.cds--md\\:col-span-75{--cds-grid-columns:6;grid-column:span 6/span 6}.cds--md\\:col-span-50{--cds-grid-columns:4;grid-column:span 4/span 4}.cds--md\\:col-span-25{--cds-grid-columns:2;grid-column:span 2/span 2}}@media (min-width:66rem){.cds--lg\\:col-span-0{display:none}.cds--lg\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--lg\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--lg\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--lg\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--lg\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--lg\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--lg\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--lg\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--lg\\:col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--lg\\:col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--lg\\:col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--lg\\:col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--lg\\:col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--lg\\:col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--lg\\:col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--lg\\:col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--lg\\:col-span-auto{grid-column:auto}.cds--lg\\:col-span-100{grid-column:1/-1}.cds--lg\\:col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}.cds--lg\\:col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}.cds--lg\\:col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}@media (min-width:82rem){.cds--xlg\\:col-span-0{display:none}.cds--xlg\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--xlg\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--xlg\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--xlg\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--xlg\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--xlg\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--xlg\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--xlg\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--xlg\\:col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--xlg\\:col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--xlg\\:col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--xlg\\:col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--xlg\\:col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--xlg\\:col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--xlg\\:col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--xlg\\:col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--xlg\\:col-span-auto{grid-column:auto}.cds--xlg\\:col-span-100{grid-column:1/-1}.cds--xlg\\:col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}.cds--xlg\\:col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}.cds--xlg\\:col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}@media (min-width:99rem){.cds--max\\:col-span-0{display:none}.cds--max\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}.cds--max\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}.cds--max\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}.cds--max\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}.cds--max\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}.cds--max\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}.cds--max\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}.cds--max\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}.cds--max\\:col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}.cds--max\\:col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}.cds--max\\:col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}.cds--max\\:col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}.cds--max\\:col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}.cds--max\\:col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}.cds--max\\:col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}.cds--max\\:col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}.cds--max\\:col-span-auto{grid-column:auto}.cds--max\\:col-span-100{grid-column:1/-1}.cds--max\\:col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}.cds--max\\:col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}.cds--max\\:col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}.cds--col-span-auto{grid-column:auto}.cds--col-span-100{grid-column:1/-1}.cds--col-span-75{--cds-grid-columns:3;grid-column:span 3/span 3}@media (min-width:42rem){.cds--col-span-75{--cds-grid-columns:6;grid-column:span 6/span 6}}@media (min-width:66rem){.cds--col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}}.cds--col-span-50{--cds-grid-columns:2;grid-column:span 2/span 2}@media (min-width:42rem){.cds--col-span-50{--cds-grid-columns:4;grid-column:span 4/span 4}}@media (min-width:66rem){.cds--col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}}.cds--col-span-25{--cds-grid-columns:1;grid-column:span 1/span 1}@media (min-width:42rem){.cds--col-span-25{--cds-grid-columns:2;grid-column:span 2/span 2}}@media (min-width:66rem){.cds--col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}.cds--col-start-1{grid-column-start:1}.cds--col-start-2{grid-column-start:2}.cds--col-start-3{grid-column-start:3}.cds--col-start-4{grid-column-start:4}.cds--col-start-5{grid-column-start:5}.cds--col-start-6{grid-column-start:6}.cds--col-start-7{grid-column-start:7}.cds--col-start-8{grid-column-start:8}.cds--col-start-9{grid-column-start:9}.cds--col-start-10{grid-column-start:10}.cds--col-start-11{grid-column-start:11}.cds--col-start-12{grid-column-start:12}.cds--col-start-13{grid-column-start:13}.cds--col-start-14{grid-column-start:14}.cds--col-start-15{grid-column-start:15}.cds--col-start-16{grid-column-start:16}.cds--col-end-2{grid-column-end:2}.cds--col-end-3{grid-column-end:3}.cds--col-end-4{grid-column-end:4}.cds--col-end-5{grid-column-end:5}.cds--col-end-6{grid-column-end:6}.cds--col-end-7{grid-column-end:7}.cds--col-end-8{grid-column-end:8}.cds--col-end-9{grid-column-end:9}.cds--col-end-10{grid-column-end:10}.cds--col-end-11{grid-column-end:11}.cds--col-end-12{grid-column-end:12}.cds--col-end-13{grid-column-end:13}.cds--col-end-14{grid-column-end:14}.cds--col-end-15{grid-column-end:15}.cds--col-end-16{grid-column-end:16}.cds--col-end-17{grid-column-end:17}.cds--col-start-auto{grid-column-start:auto}.cds--col-end-auto{grid-column-end:auto}.cds--sm\\:col-start-1{grid-column-start:1}.cds--sm\\:col-start-2{grid-column-start:2}.cds--sm\\:col-start-3{grid-column-start:3}.cds--sm\\:col-start-4{grid-column-start:4}.cds--sm\\:col-start-5{grid-column-start:5}.cds--sm\\:col-start-6{grid-column-start:6}.cds--sm\\:col-start-7{grid-column-start:7}.cds--sm\\:col-start-8{grid-column-start:8}.cds--sm\\:col-start-9{grid-column-start:9}.cds--sm\\:col-start-10{grid-column-start:10}.cds--sm\\:col-start-11{grid-column-start:11}.cds--sm\\:col-start-12{grid-column-start:12}.cds--sm\\:col-start-13{grid-column-start:13}.cds--sm\\:col-start-14{grid-column-start:14}.cds--sm\\:col-start-15{grid-column-start:15}.cds--sm\\:col-start-16{grid-column-start:16}.cds--sm\\:col-end-2{grid-column-end:2}.cds--sm\\:col-end-3{grid-column-end:3}.cds--sm\\:col-end-4{grid-column-end:4}.cds--sm\\:col-end-5{grid-column-end:5}.cds--sm\\:col-end-6{grid-column-end:6}.cds--sm\\:col-end-7{grid-column-end:7}.cds--sm\\:col-end-8{grid-column-end:8}.cds--sm\\:col-end-9{grid-column-end:9}.cds--sm\\:col-end-10{grid-column-end:10}.cds--sm\\:col-end-11{grid-column-end:11}.cds--sm\\:col-end-12{grid-column-end:12}.cds--sm\\:col-end-13{grid-column-end:13}.cds--sm\\:col-end-14{grid-column-end:14}.cds--sm\\:col-end-15{grid-column-end:15}.cds--sm\\:col-end-16{grid-column-end:16}.cds--sm\\:col-end-17{grid-column-end:17}.cds--sm\\:col-start-auto{grid-column-start:auto}.cds--sm\\:col-end-auto{grid-column-end:auto}@media (min-width:42rem){.cds--md\\:col-start-1{grid-column-start:1}.cds--md\\:col-start-2{grid-column-start:2}.cds--md\\:col-start-3{grid-column-start:3}.cds--md\\:col-start-4{grid-column-start:4}.cds--md\\:col-start-5{grid-column-start:5}.cds--md\\:col-start-6{grid-column-start:6}.cds--md\\:col-start-7{grid-column-start:7}.cds--md\\:col-start-8{grid-column-start:8}.cds--md\\:col-start-9{grid-column-start:9}.cds--md\\:col-start-10{grid-column-start:10}.cds--md\\:col-start-11{grid-column-start:11}.cds--md\\:col-start-12{grid-column-start:12}.cds--md\\:col-start-13{grid-column-start:13}.cds--md\\:col-start-14{grid-column-start:14}.cds--md\\:col-start-15{grid-column-start:15}.cds--md\\:col-start-16{grid-column-start:16}.cds--md\\:col-end-2{grid-column-end:2}.cds--md\\:col-end-3{grid-column-end:3}.cds--md\\:col-end-4{grid-column-end:4}.cds--md\\:col-end-5{grid-column-end:5}.cds--md\\:col-end-6{grid-column-end:6}.cds--md\\:col-end-7{grid-column-end:7}.cds--md\\:col-end-8{grid-column-end:8}.cds--md\\:col-end-9{grid-column-end:9}.cds--md\\:col-end-10{grid-column-end:10}.cds--md\\:col-end-11{grid-column-end:11}.cds--md\\:col-end-12{grid-column-end:12}.cds--md\\:col-end-13{grid-column-end:13}.cds--md\\:col-end-14{grid-column-end:14}.cds--md\\:col-end-15{grid-column-end:15}.cds--md\\:col-end-16{grid-column-end:16}.cds--md\\:col-end-17{grid-column-end:17}.cds--md\\:col-start-auto{grid-column-start:auto}.cds--md\\:col-end-auto{grid-column-end:auto}}@media (min-width:66rem){.cds--lg\\:col-start-1{grid-column-start:1}.cds--lg\\:col-start-2{grid-column-start:2}.cds--lg\\:col-start-3{grid-column-start:3}.cds--lg\\:col-start-4{grid-column-start:4}.cds--lg\\:col-start-5{grid-column-start:5}.cds--lg\\:col-start-6{grid-column-start:6}.cds--lg\\:col-start-7{grid-column-start:7}.cds--lg\\:col-start-8{grid-column-start:8}.cds--lg\\:col-start-9{grid-column-start:9}.cds--lg\\:col-start-10{grid-column-start:10}.cds--lg\\:col-start-11{grid-column-start:11}.cds--lg\\:col-start-12{grid-column-start:12}.cds--lg\\:col-start-13{grid-column-start:13}.cds--lg\\:col-start-14{grid-column-start:14}.cds--lg\\:col-start-15{grid-column-start:15}.cds--lg\\:col-start-16{grid-column-start:16}.cds--lg\\:col-end-2{grid-column-end:2}.cds--lg\\:col-end-3{grid-column-end:3}.cds--lg\\:col-end-4{grid-column-end:4}.cds--lg\\:col-end-5{grid-column-end:5}.cds--lg\\:col-end-6{grid-column-end:6}.cds--lg\\:col-end-7{grid-column-end:7}.cds--lg\\:col-end-8{grid-column-end:8}.cds--lg\\:col-end-9{grid-column-end:9}.cds--lg\\:col-end-10{grid-column-end:10}.cds--lg\\:col-end-11{grid-column-end:11}.cds--lg\\:col-end-12{grid-column-end:12}.cds--lg\\:col-end-13{grid-column-end:13}.cds--lg\\:col-end-14{grid-column-end:14}.cds--lg\\:col-end-15{grid-column-end:15}.cds--lg\\:col-end-16{grid-column-end:16}.cds--lg\\:col-end-17{grid-column-end:17}.cds--lg\\:col-start-auto{grid-column-start:auto}.cds--lg\\:col-end-auto{grid-column-end:auto}}@media (min-width:82rem){.cds--xlg\\:col-start-1{grid-column-start:1}.cds--xlg\\:col-start-2{grid-column-start:2}.cds--xlg\\:col-start-3{grid-column-start:3}.cds--xlg\\:col-start-4{grid-column-start:4}.cds--xlg\\:col-start-5{grid-column-start:5}.cds--xlg\\:col-start-6{grid-column-start:6}.cds--xlg\\:col-start-7{grid-column-start:7}.cds--xlg\\:col-start-8{grid-column-start:8}.cds--xlg\\:col-start-9{grid-column-start:9}.cds--xlg\\:col-start-10{grid-column-start:10}.cds--xlg\\:col-start-11{grid-column-start:11}.cds--xlg\\:col-start-12{grid-column-start:12}.cds--xlg\\:col-start-13{grid-column-start:13}.cds--xlg\\:col-start-14{grid-column-start:14}.cds--xlg\\:col-start-15{grid-column-start:15}.cds--xlg\\:col-start-16{grid-column-start:16}.cds--xlg\\:col-end-2{grid-column-end:2}.cds--xlg\\:col-end-3{grid-column-end:3}.cds--xlg\\:col-end-4{grid-column-end:4}.cds--xlg\\:col-end-5{grid-column-end:5}.cds--xlg\\:col-end-6{grid-column-end:6}.cds--xlg\\:col-end-7{grid-column-end:7}.cds--xlg\\:col-end-8{grid-column-end:8}.cds--xlg\\:col-end-9{grid-column-end:9}.cds--xlg\\:col-end-10{grid-column-end:10}.cds--xlg\\:col-end-11{grid-column-end:11}.cds--xlg\\:col-end-12{grid-column-end:12}.cds--xlg\\:col-end-13{grid-column-end:13}.cds--xlg\\:col-end-14{grid-column-end:14}.cds--xlg\\:col-end-15{grid-column-end:15}.cds--xlg\\:col-end-16{grid-column-end:16}.cds--xlg\\:col-end-17{grid-column-end:17}.cds--xlg\\:col-start-auto{grid-column-start:auto}.cds--xlg\\:col-end-auto{grid-column-end:auto}}@media (min-width:99rem){.cds--max\\:col-start-1{grid-column-start:1}.cds--max\\:col-start-2{grid-column-start:2}.cds--max\\:col-start-3{grid-column-start:3}.cds--max\\:col-start-4{grid-column-start:4}.cds--max\\:col-start-5{grid-column-start:5}.cds--max\\:col-start-6{grid-column-start:6}.cds--max\\:col-start-7{grid-column-start:7}.cds--max\\:col-start-8{grid-column-start:8}.cds--max\\:col-start-9{grid-column-start:9}.cds--max\\:col-start-10{grid-column-start:10}.cds--max\\:col-start-11{grid-column-start:11}.cds--max\\:col-start-12{grid-column-start:12}.cds--max\\:col-start-13{grid-column-start:13}.cds--max\\:col-start-14{grid-column-start:14}.cds--max\\:col-start-15{grid-column-start:15}.cds--max\\:col-start-16{grid-column-start:16}.cds--max\\:col-end-2{grid-column-end:2}.cds--max\\:col-end-3{grid-column-end:3}.cds--max\\:col-end-4{grid-column-end:4}.cds--max\\:col-end-5{grid-column-end:5}.cds--max\\:col-end-6{grid-column-end:6}.cds--max\\:col-end-7{grid-column-end:7}.cds--max\\:col-end-8{grid-column-end:8}.cds--max\\:col-end-9{grid-column-end:9}.cds--max\\:col-end-10{grid-column-end:10}.cds--max\\:col-end-11{grid-column-end:11}.cds--max\\:col-end-12{grid-column-end:12}.cds--max\\:col-end-13{grid-column-end:13}.cds--max\\:col-end-14{grid-column-end:14}.cds--max\\:col-end-15{grid-column-end:15}.cds--max\\:col-end-16{grid-column-end:16}.cds--max\\:col-end-17{grid-column-end:17}.cds--max\\:col-start-auto{grid-column-start:auto}.cds--max\\:col-end-auto{grid-column-end:auto}}@keyframes c4p--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes c4p--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes c4p--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.c4p--layout--size-xs{--c4p-layout-size-height-context:var(--c4p-layout-size-height-xs,1.5rem);--c4p-layout-size-height:var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-xs{--c4p-layout-size-height:var(--c4p-layout-size-height-context,var(--c4p-layout-size-height-xs,1.5rem))}.c4p--layout-constraint--size__min-xs{--c4p-layout-size-height-min:var(--c4p-layout-size-height-xs,1.5rem)}.c4p--layout-constraint--size__max-xs{--c4p-layout-size-height-max:var(--c4p-layout-size-height-xs,1.5rem)}.c4p--layout--size-sm{--c4p-layout-size-height-context:var(--c4p-layout-size-height-sm,2rem);--c4p-layout-size-height:var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-sm{--c4p-layout-size-height:var(--c4p-layout-size-height-context,var(--c4p-layout-size-height-sm,2rem))}.c4p--layout-constraint--size__min-sm{--c4p-layout-size-height-min:var(--c4p-layout-size-height-sm,2rem)}.c4p--layout-constraint--size__max-sm{--c4p-layout-size-height-max:var(--c4p-layout-size-height-sm,2rem)}.c4p--layout--size-md{--c4p-layout-size-height-context:var(--c4p-layout-size-height-md,2.5rem);--c4p-layout-size-height:var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-md{--c4p-layout-size-height:var(--c4p-layout-size-height-context,var(--c4p-layout-size-height-md,2.5rem))}.c4p--layout-constraint--size__min-md{--c4p-layout-size-height-min:var(--c4p-layout-size-height-md,2.5rem)}.c4p--layout-constraint--size__max-md{--c4p-layout-size-height-max:var(--c4p-layout-size-height-md,2.5rem)}.c4p--layout--size-lg{--c4p-layout-size-height-context:var(--c4p-layout-size-height-lg,3rem);--c4p-layout-size-height:var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-lg{--c4p-layout-size-height:var(--c4p-layout-size-height-context,var(--c4p-layout-size-height-lg,3rem))}.c4p--layout-constraint--size__min-lg{--c4p-layout-size-height-min:var(--c4p-layout-size-height-lg,3rem)}.c4p--layout-constraint--size__max-lg{--c4p-layout-size-height-max:var(--c4p-layout-size-height-lg,3rem)}.c4p--layout--size-xl{--c4p-layout-size-height-context:var(--c4p-layout-size-height-xl,4rem);--c4p-layout-size-height:var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-xl{--c4p-layout-size-height:var(--c4p-layout-size-height-context,var(--c4p-layout-size-height-xl,4rem))}.c4p--layout-constraint--size__min-xl{--c4p-layout-size-height-min:var(--c4p-layout-size-height-xl,4rem)}.c4p--layout-constraint--size__max-xl{--c4p-layout-size-height-max:var(--c4p-layout-size-height-xl,4rem)}.c4p--layout--size-2xl{--c4p-layout-size-height-context:var(--c4p-layout-size-height-2xl,5rem);--c4p-layout-size-height:var(--c4p-layout-size-height-context)}.c4p--layout-constraint--size__default-2xl{--c4p-layout-size-height:var(--c4p-layout-size-height-context,var(--c4p-layout-size-height-2xl,5rem))}.c4p--layout-constraint--size__min-2xl{--c4p-layout-size-height-min:var(--c4p-layout-size-height-2xl,5rem)}.c4p--layout-constraint--size__max-2xl{--c4p-layout-size-height-max:var(--c4p-layout-size-height-2xl,5rem)}.c4p--layout--density-condensed{--c4p-layout-density-padding-inline-context:var(--c4p-layout-density-padding-inline-condensed,0.5rem);--c4p-layout-density-padding-inline:var(--c4p-layout-density-padding-inline-context)}.c4p--layout-constraint--density__default-condensed{--c4p-layout-density-padding-inline:var(--c4p-layout-density-padding-inline-context,var(--c4p-layout-density-padding-inline-condensed,0.5rem))}.c4p--layout-constraint--density__min-condensed{--c4p-layout-density-padding-inline-min:var(--c4p-layout-density-padding-inline-condensed,0.5rem)}.c4p--layout-constraint--density__max-condensed{--c4p-layout-density-padding-inline-max:var(--c4p-layout-density-padding-inline-condensed,0.5rem)}.c4p--layout--density-normal{--c4p-layout-density-padding-inline-context:var(--c4p-layout-density-padding-inline-normal,1rem);--c4p-layout-density-padding-inline:var(--c4p-layout-density-padding-inline-context)}.c4p--layout-constraint--density__default-normal{--c4p-layout-density-padding-inline:var(--c4p-layout-density-padding-inline-context,var(--c4p-layout-density-padding-inline-normal,1rem))}.c4p--layout-constraint--density__min-normal{--c4p-layout-density-padding-inline-min:var(--c4p-layout-density-padding-inline-normal,1rem)}.c4p--layout-constraint--density__max-normal{--c4p-layout-density-padding-inline-max:var(--c4p-layout-density-padding-inline-normal,1rem)}:root{--c4p-layout-size-height-xs:1.5rem;--c4p-layout-size-height-sm:2rem;--c4p-layout-size-height-md:2.5rem;--c4p-layout-size-height-lg:3rem;--c4p-layout-size-height-xl:4rem;--c4p-layout-size-height-2xl:5rem;--c4p-layout-size-height-min:0px;--c4p-layout-size-height-max:999999999px;--c4p-layout-density-padding-inline-condensed:0.5rem;--c4p-layout-density-padding-inline-normal:1rem;--c4p-layout-density-padding-inline-min:0px;--c4p-layout-density-padding-inline-max:999999999px}.c4p--assistive-text,.c4p--visually-hidden,:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__action-toolbar[hidden],:host(c4p-side-panel) .c4p--side-panel__action-toolbar[hidden],:host(c4p-side-panel) .c4p--side-panel__actions-container ::slotted(c4p-button[hidden]),:host(c4p-side-panel) .c4p--side-panel__actions-container[hidden],:host(c4p-side-panel) .c4p--side-panel__subtitle-text[hidden],:host(c4p-side-panel) .sentinel{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.clabs__resizer{background-color:var(--cds-border-subtle);flex:none;position:relative}@media (prefers-reduced-motion:no-preference){.clabs__resizer:hover{background-color:var(--cds-border-interactive,#0f62fe);transition:background-color .15s}}.clabs__resizer:focus{outline:none}.clabs__resizer:active,.clabs__resizer:focus{background-color:var(--cds-border-interactive,#0f62fe)}.clabs__resizer:focus:not(:focus-visible){box-shadow:none;outline:none}.clabs__resizer--horizontal{cursor:ns-resize}.clabs__resizer--vertical{cursor:ew-resize}.sr-only{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;white-space:nowrap}@media (prefers-reduced-motion:no-preference){.smooth-resize{transition:all .15s linear}}@keyframes side-panel-entrance-reduced{0%{opacity:0}to{opacity:1}}@keyframes side-panel-exit-reduced{0%{opacity:1}to{opacity:0}}@keyframes side-panel-entrance-right{0%{opacity:0;transform:translateX(var(--panel-transform,320px))}to{opacity:1;transform:translateX(0)}}@keyframes side-panel-entrance-left{0%{opacity:0;transform:translateX(calc(var(--panel-transform, 320px)*-1))}to{opacity:1;transform:translateX(0)}}@keyframes side-panel-exit-right{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(var(--panel-transform,320px))}}@keyframes side-panel-exit-left{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(calc(var(--panel-transform, 320px)*-1))}}@property --panel-transform{inherits:true;initial-value:320px;syntax:"<length>"}.c4p--side-panel--scrolls,:host(c4p-side-panel) [scrolls]{overflow:auto;overflow-x:hidden}@supports (overflow-inline:hidden){.c4p--side-panel--scrolls,:host(c4p-side-panel) [scrolls]{overflow-inline:hidden}}.c4p--side-panel,:host(c4p-side-panel) .c4p--side-panel{--panel-transform:320px;--c4p--side-panel--title-stop:1rem;--c4p--side-panel--scroll-animation-progress:0;--c4p--side-panel--title-padding-right:2rem;--c4p--side-panel--actions-height:4rem;background-color:var(--cds-layer-01,#f4f4f4);block-size:calc(100% - 3rem);box-sizing:border-box;color:var(--cds-text-primary,#161616);display:grid;grid-template-rows:auto 1fr auto;inset-block-start:3rem;max-inline-size:100%;min-inline-size:16rem;position:fixed;transform:translateX(0);transition-behavior:allow-discrete;transition-duration:.15s;transition-property:display,opacity,transform;z-index:9000}.c4p--side-panel:not(.c4p--side-panel--slide-in).c4p--side-panel--enable-sidepanel-resizer{grid-template-columns:0 1fr}@media (prefers-reduced-motion:no-preference){.c4p--side-panel:not(.c4p--side-panel--slide-in).c4p--side-panel--enable-sidepanel-resizer{transition:all .15s linear}}@starting-style{.c4p--side-panel,:host(c4p-side-panel) .c4p--side-panel{opacity:0;transform:translateX(var(--panel-transform))}}@media (min-width:42rem){.c4p--side-panel,:host(c4p-side-panel) .c4p--side-panel{max-inline-size:75vw}}.c4p--side-panel.c4p--side-panel--xs,:host(c4p-side-panel) .c4p--side-panel[size=xs]{inline-size:clamp(16rem,var(--c4p-side-panel-modified-size,16rem),100%)}.c4p--side-panel.c4p--side-panel--sm,:host(c4p-side-panel) .c4p--side-panel[size=sm]{inline-size:clamp(16rem,var(--c4p-side-panel-modified-size,20rem),100%)}.c4p--side-panel.c4p--side-panel--md,:host(c4p-side-panel) .c4p--side-panel[size=md]{inline-size:clamp(16rem,var(--c4p-side-panel-modified-size,30rem),100%)}.c4p--side-panel.c4p--side-panel--lg,:host(c4p-side-panel) .c4p--side-panel[size=lg]{inline-size:clamp(16rem,var(--c4p-side-panel-modified-size,40rem),100%)}.c4p--side-panel.c4p--side-panel--xl,:host(c4p-side-panel) .c4p--side-panel[size=xl]{inline-size:clamp(16rem,var(--c4p-side-panel-modified-size,65rem),100%)}.c4p--side-panel.c4p--side-panel--2xl,:host(c4p-side-panel) .c4p--side-panel[size="2xl"]{inline-size:clamp(16rem,var(--c4p-side-panel-modified-size,80rem),100%)}.c4p--side-panel.c4p--side-panel--open.c4p--side-panel--right-placement,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--open[placement=right]{animation:side-panel-entrance-right .15s cubic-bezier(0,0,.38,.9) forwards}.c4p--side-panel.c4p--side-panel--open.c4p--side-panel--left-placement,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--open[placement=left]{animation:side-panel-entrance-left .15s cubic-bezier(0,0,.38,.9) forwards}.c4p--side-panel.c4p--side-panel--closing.c4p--side-panel--right-placement,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--closing[placement=right]{animation:side-panel-exit-right .15s cubic-bezier(.2,0,1,.9) forwards}.c4p--side-panel.c4p--side-panel--closing.c4p--side-panel--left-placement,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--closing[placement=left]{animation:side-panel-exit-left .15s cubic-bezier(.2,0,1,.9) forwards}@supports (transition-behavior:allow-discrete){.c4p--side-panel.c4p--side-panel--closing{opacity:0;transform:translateX(var(--panel-transform,320px));transition-duration:.15s}.c4p--side-panel.c4p--side-panel--closing.c4p--side-panel--left-placement,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--closing[placement=left]{transform:translateX(calc(var(--panel-transform, 320px)*-1))}}@media (prefers-reduced-motion){.c4p--side-panel.c4p--side-panel--open.c4p--side-panel--left-placement,.c4p--side-panel.c4p--side-panel--open.c4p--side-panel--right-placement,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--open[placement=left],:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--open[placement=right]{animation:side-panel-entrance-reduced .15s cubic-bezier(.2,0,1,.9) forwards}@starting-style{.c4p--side-panel.c4p--side-panel--open.c4p--side-panel--left-placement,.c4p--side-panel.c4p--side-panel--open.c4p--side-panel--right-placement,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--open[placement=left],:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--open[placement=right]{opacity:0;transform:translateX(0)}}.c4p--side-panel.c4p--side-panel--closing.c4p--side-panel--left-placement,.c4p--side-panel.c4p--side-panel--closing.c4p--side-panel--right-placement,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--closing[placement=left],:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--closing[placement=right]{animation:side-panel-exit-reduced .15s cubic-bezier(.2,0,1,.9) forwards}@starting-style{.c4p--side-panel.c4p--side-panel--closing.c4p--side-panel--left-placement,.c4p--side-panel.c4p--side-panel--closing.c4p--side-panel--right-placement,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--closing[placement=left],:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--closing[placement=right]{opacity:1;transform:translateX(0)}}}.c4p--side-panel.c4p--side-panel--animated-title{grid-template-rows:1fr auto}.c4p--side-panel.c4p--side-panel--condensed-actions,:host(c4p-side-panel) .c4p--side-panel[condensed-actions]{--c4p--side-panel--actions-height:3rem}.c4p--side-panel:not(.c4p--side-panel--has-overlay){box-shadow:0 .125rem .25rem var(--cds-overlay,rgba(0,0,0,.6))}.c4p--side-panel.c4p--side-panel--slide-in,.c4p--side-panel.c4p--side-panel--slide-in:not(.c4p--side-panel--has-overlay){box-shadow:none}.c4p--side-panel .c4p--side-panel__actions-container{inline-size:100%}.c4p--side-panel.c4p--side-panel--right-placement,:host(c4p-side-panel) .c4p--side-panel[placement=right]{border-inline-start:1px solid var(--cds-border-subtle-01,#c6c6c6);inset-inline-end:0}.c4p--side-panel.c4p--side-panel--left-placement .clabs__resizer,:host(c4p-side-panel) .c4p--side-panel[placement=left] .clabs__resizer{grid-column:2;inset-inline-start:0}.c4p--side-panel.c4p--side-panel--left-placement .clabs__resizer:before,:host(c4p-side-panel) .c4p--side-panel[placement=left] .clabs__resizer:before{inset-inline-start:0}.c4p--side-panel.c4p--side-panel--left-placement:not(.c4p--side-panel--slide-in).c4p--side-panel--enable-sidepanel-resizer,:host(c4p-side-panel) .c4p--side-panel[placement=left]:not(.c4p--side-panel--slide-in).c4p--side-panel--enable-sidepanel-resizer{grid-template-columns:1fr 0}@media (prefers-reduced-motion:no-preference){.c4p--side-panel.c4p--side-panel--left-placement:not(.c4p--side-panel--slide-in).c4p--side-panel--enable-sidepanel-resizer,:host(c4p-side-panel) .c4p--side-panel[placement=left]:not(.c4p--side-panel--slide-in).c4p--side-panel--enable-sidepanel-resizer{transition:all .15s linear}}.c4p--side-panel.c4p--side-panel--left-placement,:host(c4p-side-panel) .c4p--side-panel[placement=left]{border-inline-end:1px solid var(--cds-border-subtle-01,#c6c6c6);inset-inline-start:0}.c4p--side-panel.c4p--side-panel.c4p--side-panel--has-ai-label,.c4p--side-panel.c4p--side-panel.c4p--side-panel--has-decorator,.c4p--side-panel.c4p--side-panel.c4p--side-panel--has-slug,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--has-ai-label,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--has-decorator,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--has-slug,:host(c4p-side-panel) .c4p--side-panel[has-slug]{border-color:transparent;box-shadow:inset 0 -80px 70px -65px var(--cds-ai-inner-shadow,rgba(69,137,255,.1)),0 4px 10px 2px var(--cds-ai-drop-shadow,rgba(15,98,254,.1))}.c4p--side-panel .clabs__resizer--vertical:before{background-color:transparent;block-size:100%;content:"";inline-size:.125rem;inset-block-end:0;inset-inline-end:0;position:absolute;transition:background-color .15s cubic-bezier(.2,0,.38,.9);z-index:-1}.c4p--side-panel:hover .clabs__resizer--vertical:before{background-color:var(--c4p-button-secondary-hover,#474747)}.c4p--side-panel .clabs__resizer{background-color:transparent;grid-row:span 4/span 3;inset-inline-start:-.25rem}.c4p--side-panel .clabs__resizer--vertical:after{block-size:100%;content:"";inline-size:.5rem;inset-inline-start:-.125rem;position:absolute;z-index:10}.c4p--side-panel .clabs__resizer:focus,.c4p--side-panel .clabs__resizer:hover{background-color:var(--cds-border-interactive,#0f62fe)}.c4p--side-panel .c4p--side-panel__header{--c4p--side-panel--title-padding-bottom:1rem;background-color:var(--cds-layer-01,#f4f4f4);inset-block-start:calc(-1px*var(--c4p--side-panel--scroll-animation-distance));min-block-size:2.5rem;padding:1rem;padding-block-end:0;position:sticky;z-index:4}.c4p--side-panel .c4p--side-panel__header.c4p--side-panel__header--has-title{min-block-size:auto}.c4p--side-panel .c4p--side-panel__header.c4p--side-panel__header--has-subtitle,.c4p--side-panel .c4p--side-panel__header:has(.c4p--side-panel__subtitle-text){--c4p--side-panel--title-padding-bottom:0.5rem}.c4p--side-panel .c4p--side-panel__header.c4p--side-panel__header--has-navigation-back,.c4p--side-panel .c4p--side-panel__header:has(.c4p--side-panel__navigation-back-button){padding-block-start:2rem}.c4p--side-panel .c4p--side-panel__header.c4p--side-panel__header--has-navigation-back.c4p--btn--md,.c4p--side-panel .c4p--side-panel__header:has(.c4p--side-panel__navigation-back-button.c4p--btn--md){padding-block-start:2.5rem}.c4p--side-panel .c4p--side-panel__header:before{background-color:var(--cds-border-subtle-01,#c6c6c6);block-size:1px;content:"";inline-size:100%;inset-block-end:0;inset-inline-start:0;opacity:var(--c4p--side-panel--scroll-animation-progress);position:absolute;z-index:9}.c4p--side-panel .c4p--side-panel__header.c4p--side-panel__header--no-title-animation,:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__header[no-title-animation]{inset-block-start:0;position:relative}.c4p--side-panel .c4p--side-panel__header.c4p--side-panel__header--no-title-animation:before,:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__header[no-title-animation]:before{opacity:1}.c4p--side-panel .c4p--side-panel__header.c4p--side-panel__header--reduced-motion,:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__header[reduced-motion]{border-block-end:1px solid var(--cds-border-subtle-01,#c6c6c6);margin-block-end:1rem;z-index:5}.c4p--side-panel .c4p--side-panel__header.c4p--side-panel__header--reduced-motion.c4p--side-panel__header--no-title-animation,:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__header.c4p--side-panel__header--no-title-animation[reduced-motion],:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__header.c4p--side-panel__header--reduced-motion[no-title-animation],:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__header[reduced-motion][no-title-animation]{border-block-end:0;margin-block-end:0}.c4p--side-panel .c4p--side-panel__header.c4p--side-panel__header--on-detail-step .c4p--side-panel__navigation-back-button.c4p--btn--md~.c4p--side-panel__collapsed-title-text,:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__header[detail-step] .c4p--side-panel__navigation-back-button.c4p--btn--md~.c4p--side-panel__collapsed-title-text{inset-block-start:1.5rem}.c4p--side-panel .c4p--side-panel__header.c4p--side-panel__header--on-detail-step:not(.c4p--side-panel__header--has-title),:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__header[detail-step]:not(.c4p--side-panel__header--has-title){block-size:2.75rem;padding:1rem 1rem .5rem}.c4p--side-panel .c4p--side-panel__header:not(.c4p--side-panel__header--has-title):before{background-color:transparent}.c4p--side-panel .c4p--side-panel__header:empty{min-block-size:unset}.c4p--side-panel.c4p--side-panel--has-action-toolbar,.c4p--side-panel.c4p--side-panel--has-ai-label,.c4p--side-panel.c4p--side-panel--has-decorator,.c4p--side-panel.c4p--side-panel--has-slug,.c4p--side-panel.c4p--side-panel:has(.c4p--side-panel__action-toolbar),:host(c4p-side-panel) .c4p--side-panel[has-slug]{--c4p--side-panel--title-padding-right:4rem}.c4p--side-panel.c4p--side-panel--has-action-toolbar.c4p--side-panel--has-ai-label,.c4p--side-panel.c4p--side-panel--has-action-toolbar.c4p--side-panel--has-decorator,.c4p--side-panel.c4p--side-panel--has-action-toolbar.c4p--side-panel--has-slug,.c4p--side-panel.c4p--side-panel:has(.c4p--side-panel__action-toolbar).c4p--side-panel--has-ai-label,.c4p--side-panel.c4p--side-panel:has(.c4p--side-panel__action-toolbar).c4p--side-panel--has-decorator,.c4p--side-panel.c4p--side-panel:has(.c4p--side-panel__action-toolbar).c4p--side-panel--has-slug,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--has-action-toolbar[has-slug],:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel[has-slug]:has(.c4p--side-panel__action-toolbar){--c4p--side-panel--title-padding-right:5rem}.c4p--side-panel .c4p--side-panel__animated-scroll-wrapper{display:grid;grid-template-rows:auto 1fr}.c4p--side-panel .c4p--side-panel__title{background-color:var(--cds-layer-01,#f4f4f4);border-block-end:var(--c4p--side-panel--title-padding-bottom) solid transparent;inset-block-start:var(--c4p--side-panel--title-stop);position:sticky;z-index:4}.c4p--side-panel .c4p--side-panel__title-text{font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4);opacity:calc(1 - var(--c4p--side-panel--scroll-animation-progress));padding-inline-end:var(--c4p--side-panel--title-padding-right)}.c4p--side-panel .c4p--side-panel__title--no-label .c4p--side-panel__title-text{transform:translateY(calc(-1rem*var(--c4p--side-panel--scroll-animation-progress)))}.c4p--side-panel .c4p--side-panel__header--no-title-animation .c4p--side-panel__title-text,:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__header[no-title-animation] .c4p--side-panel__title-text{position:static}.c4p--side-panel .c4p--side-panel__label-text{font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333);opacity:calc(1 - var(--c4p--side-panel--scroll-animation-progress));padding-inline-end:var(--c4p--side-panel--title-padding-right)}.c4p--side-panel .c4p--side-panel__collapsed-title-text{font-size:var(--cds-heading-compact-02-font-size,1rem);font-weight:var(--cds-heading-compact-02-font-weight,600);inset-block-start:0;letter-spacing:var(--cds-heading-compact-02-letter-spacing,0);line-height:var(--cds-heading-compact-02-line-height,1.375);opacity:var(--c4p--side-panel--scroll-animation-progress);padding-inline-end:var(--c4p--side-panel--title-padding-right);position:absolute}.c4p--side-panel .c4p--side-panel__title--no-label .c4p--side-panel__collapsed-title-text{transform:translateY(calc(1rem*(1 - var(--c4p--side-panel--scroll-animation-progress))))}.c4p--side-panel .c4p--side-panel__subtitle-text{font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);opacity:calc(1 - var(--c4p--side-panel--scroll-animation-progress));padding-block-end:1rem;padding-inline-end:var(--c4p--side-panel--title-padding-right)}.c4p--side-panel .c4p--side-panel__header--no-title-animation .c4p--side-panel__subtitle-text,:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__header[no-title-animation] .c4p--side-panel__subtitle-text{background-color:var(--cds-layer-01,#f4f4f4);z-index:2}.c4p--side-panel .c4p--side-panel__title-text+.c4p--side-panel__subtitle-text{padding-block-start:1rem}.c4p--side-panel .c4p--side-panel__inner-content{padding:0 1rem 1rem}.c4p--side-panel .c4p--side-panel__inner-content--no-animated-title{padding-block-start:1rem}.c4p--side-panel .c4p--side-panel__header--has-action-toolbar+.c4p--side-panel__inner-content,.c4p--side-panel .c4p--side-panel__header:has(.c4p--side-panel__action-toolbar)+.c4p--side-panel__inner-content{padding-block-start:.5rem}.c4p--side-panel.c4p--side-panel--has-ai-label .c4p--side-panel--scrolls,.c4p--side-panel.c4p--side-panel--has-decorator .c4p--side-panel--scrolls,.c4p--side-panel.c4p--side-panel--has-slug .c4p--side-panel--scrolls,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--has-ai-label [scrolls],:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--has-decorator [scrolls],:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--has-slug [scrolls],:host(c4p-side-panel) .c4p--side-panel[has-slug] .c4p--side-panel--scrolls,:host(c4p-side-panel) .c4p--side-panel[has-slug] [scrolls]{background:linear-gradient(to top,var(--c4p-layer,var(--cds-ai-popover-background,#fff)) 0,var(--cds-ai-aura-start,rgba(69,137,255,.1)) 0,15%,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%) padding-box,linear-gradient(to top,var(--c4p-layer,var(--cds-ai-popover-background,#fff)),var(--c4p-layer,var(--cds-ai-popover-background,#fff))) padding-box,linear-gradient(to bottom,var(--cds-ai-border-start,rgba(166,200,255,.64)),var(--cds-ai-border-end,#78a9ff)) border-box,linear-gradient(to top,var(--c4p-layer,var(--cds-ai-popover-background,#fff)),var(--c4p-layer,var(--cds-ai-popover-background,#fff))) border-box;box-shadow:inset 0 -80px 70px -65px var(--cds-ai-inner-shadow,rgba(69,137,255,.1)),0 4px 10px 2px var(--cds-ai-drop-shadow,rgba(15,98,254,.1))}.c4p--side-panel .c4p--side-panel__action-toolbar{align-items:center;background-color:var(--cds-layer-01,#f4f4f4);display:flex;justify-content:flex-start;position:sticky;z-index:4}.c4p--side-panel .c4p--side-panel__action-toolbar-leading-button{margin-inline-end:.5rem}.c4p--side-panel .c4p--btn.c4p--side-panel__navigation-back-button{inset-block-start:0;inset-inline-start:0;position:fixed;z-index:5}.c4p--side-panel .c4p--btn.c4p--side-panel__close-button,.c4p--side-panel .c4p--btn.c4p--side-panel__navigation-back-button{align-items:center;background-color:unset;block-size:2rem;color:var(--cds-text-primary,#161616);display:flex;inline-size:2rem;justify-content:center;min-block-size:0;padding:0}.c4p--side-panel .c4p--btn.c4p--side-panel__close-button:hover,.c4p--side-panel .c4p--btn.c4p--side-panel__navigation-back-button:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12))}.c4p--side-panel .c4p--btn.c4p--side-panel__close-button .c4p--side-panel--btn__icon,.c4p--side-panel .c4p--btn.c4p--side-panel__navigation-back-button .c4p--side-panel--btn__icon{margin:0}.c4p--side-panel .c4p--btn--md.c4p--side-panel__close-button,.c4p--side-panel .c4p--btn--md.c4p--side-panel__navigation-back-button{block-size:2.5rem;inline-size:2.5rem}.c4p--side-panel .c4p--side-panel__ai-label-and-close,.c4p--side-panel .c4p--side-panel__decorator-and-close,.c4p--side-panel .c4p--side-panel__slug-and-close{block-size:2rem;display:flex;inset-block-start:0;inset-inline-end:0;position:absolute;z-index:10}@media (prefers-reduced-motion){.c4p--side-panel .c4p--side-panel__ai-label-and-close,.c4p--side-panel .c4p--side-panel__decorator-and-close,.c4p--side-panel .c4p--side-panel__slug-and-close{position:absolute}}.c4p--side-panel .c4p--side-panel__actions-container{background-color:var(--cds-layer-01,#f4f4f4);border-block-start:1px solid var(--cds-border-subtle-01,#c6c6c6);inset-block-end:0;position:sticky}.c4p--side-panel .c4p--side-panel__actions-container.c4p--action-set--2xl .c4p--action-set__action-button,:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__actions-container.c4p--action-set--2xl ::slotted(c4p-button){inline-size:100%;max-inline-size:100%}@media (min-width:42rem){.c4p--side-panel .c4p--side-panel__actions-container.c4p--action-set--2xl{flex-direction:row}.c4p--side-panel .c4p--side-panel__actions-container.c4p--action-set--2xl .c4p--action-set__action-button,:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__actions-container.c4p--action-set--2xl ::slotted(c4p-button){inline-size:25%}}.c4p--side-panel .c4p--side-panel__actions-container.c4p--action-set--2xl{flex-direction:column}.c4p--side-panel .c4p--side-panel__actions-container .c4p--action-set__action-button.c4p--action-set__action-button,:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__actions-container ::slotted(c4p-button){block-size:var(--c4p--side-panel--actions-height)}.c4p--side-panel.c4p--side-panel.c4p--side-panel--xs .c4p--side-panel__actions-container.c4p--action-set--sm,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--xs .c4p--side-panel__actions-container.c4p--action-set--sm,:host(c4p-side-panel) .c4p--side-panel.c4p--side-panel--xs .c4p--side-panel__actions-container[size=sm],:host(c4p-side-panel) .c4p--side-panel[size=xs] .c4p--side-panel__actions-container.c4p--action-set--sm,:host(c4p-side-panel) .c4p--side-panel[size=xs] .c4p--side-panel__actions-container[size=sm]{inline-size:clamp(16rem,var(--c4p-side-panel-modified-size,16rem),100%)}.c4p--side-panel .c4p--date-picker__input,.c4p--side-panel .c4p--dropdown,.c4p--side-panel .c4p--dropdown-list,.c4p--side-panel .c4p--multi-select,.c4p--side-panel .c4p--number input[type=number],.c4p--side-panel .c4p--search-input,.c4p--side-panel .c4p--select-input,.c4p--side-panel .c4p--text-area,.c4p--side-panel .c4p--text-input{background-color:var(--cds-field-02,#fff)}@keyframes side-panel-overlay-entrance{0%{opacity:0}to{opacity:1}}@keyframes side-panel-overlay-exit{0%{opacity:1}to{opacity:0}}.c4p--side-panel__visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.c4p--side-panel__overlay{animation:side-panel-overlay-entrance .15s cubic-bezier(0,0,.38,.9) forwards;background-color:var(--cds-overlay,rgba(0,0,0,.6));block-size:100%;inline-size:100%;inset:0;position:fixed;z-index:6000}.c4p--side-panel__overlay--closing{animation:side-panel-overlay-exit .15s cubic-bezier(.2,0,1,.9) forwards}.c4p--side-panel--has-ai-label+.c4p--side-panel__overlay,.c4p--side-panel--has-decorator+.c4p--side-panel__overlay,.c4p--side-panel--has-slug+.c4p--side-panel__overlay,:host(c4p-side-panel) .c4p--side-panel[has-slug]+.c4p--side-panel__overlay{background-color:var(--cds-ai-overlay,rgba(0,17,65,.5))}:host(c4p-side-panel){--c4p--side-panel--displaced:100%}:host(c4p-side-panel) *{box-sizing:border-box}:host(c4p-side-panel) .c4p--side-panel{container-name:side-panel;container-type:inline-size}:host(c4p-side-panel) .c4p--side-panel[placement=left]{--c4p--side-panel--displaced:-100%}:host(c4p-side-panel) .c4p--side-panel[opening]{transform:translateX(var(--c4p--side-panel--displaced))}:host(c4p-side-panel) .c4p--side-panel[open]{transform:translateX(0);transition:all .24s cubic-bezier(.2,0,.38,.9)}@media screen and (prefers-reduced-motion:reduce){:host(c4p-side-panel) .c4p--side-panel[open]{transition:none}}:host(c4p-side-panel) .c4p--side-panel[closing]{transform:translateX(var(--c4p--side-panel--displaced));transition:all .15s cubic-bezier(.2,0,1,.9)}@media screen and (prefers-reduced-motion:reduce){:host(c4p-side-panel) .c4p--side-panel[closing]{transition:none}}:host(c4p-side-panel) .c4p--side-panel[placement=right]{border-inline-end:1px solid var(--cds-border-subtle-02,#e0e0e0);inset-inline-end:0}:host(c4p-side-panel) .c4p--side-panel[placement=left]{border-inline-end:1px solid var(--cds-border-subtle-02,#e0e0e0);inset-inline-start:0}:host(c4p-side-panel) c4p-layer{display:contents}:host(c4p-side-panel) .c4p--side-panel__overlay[opening]{opacity:0}@media screen and (prefers-reduced-motion:reduce){:host(c4p-side-panel) .c4p--side-panel__overlay[open]{opacity:1;transition:none}}:host(c4p-side-panel) .c4p--side-panel__overlay[open]{opacity:1;transition:all .24s cubic-bezier(.2,0,.38,.9)}@media screen and (prefers-reduced-motion:reduce){:host(c4p-side-panel) .c4p--side-panel__overlay[closing]{opacity:0;transition:none}}:host(c4p-side-panel) .c4p--side-panel__overlay[closing]{opacity:0;transition:all .15s cubic-bezier(.2,0,1,.9)}:host(c4p-side-panel) .c4p--side-panel[slide-in]:not(.c4p--side-panel__overlay){box-shadow:none}:host(c4p-side-panel) .c4p--side-panel__header:before{z-index:99}:host(c4p-side-panel) .c4p--side-panel__header[has-action-toolbar]{margin-block-end:.5rem;padding-block-end:0}:host(c4p-side-panel) .c4p--side-panel .c4p--side-panel__header[has-action-toolbar]:before{content:normal}:host(c4p-side-panel) .c4p--side-panel__action-toolbar{margin-block-end:0;padding-inline-start:0}:host(c4p-side-panel) .c4p--side-panel__actions-container{--flex-direction:row;flex-direction:var(--flex-direction)}:host(c4p-side-panel) .c4p--side-panel__actions-container ::slotted(c4p-button){flex:0 1 25%;max-inline-size:14.5rem}:host(c4p-side-panel) .c4p--side-panel__actions-container ::slotted(c4p-button[kind=ghost]){flex:1 1 25%;max-inline-size:none}:host(c4p-side-panel) .c4p--side-panel__actions-container ::slotted(c4p-button[hidden]){display:none}@container (width <= 40rem){:host(c4p-side-panel) .c4p--side-panel__actions-container:not([actions-multiple=triple]) ::slotted(c4p-button){flex:0 1 50%;max-inline-size:none}}@container (width <= 30rem){:host(c4p-side-panel) .c4p--side-panel__actions-container[actions-multiple] ::slotted(c4p-button){flex:0 0 100%;max-inline-size:none}:host(c4p-side-panel) .c4p--side-panel__actions-container[actions-multiple=double] ::slotted(c4p-button){flex:0 1 50%;max-inline-size:none}:host(c4p-side-panel) .c4p--side-panel__actions-container[actions-multiple=triple]{--flex-direction:column}:host(c4p-side-panel) .c4p--side-panel__actions-container[actions-multiple=triple] ::slotted(c4p-button){flex:initial;inline-size:100%;max-inline-size:none}}@container (width <= 20rem){:host(c4p-side-panel) .c4p--side-panel__actions-container{--flex-direction:column}:host(c4p-side-panel) .c4p--side-panel__actions-container ::slotted(c4p-button){flex:initial;inline-size:100%;max-inline-size:none}}:host(c4p-side-panel) .c4p--side-panel__actions-container{display:flex;inline-size:100%}:host(c4p-side-panel) .c4p--side-panel__actions-container[hidden]{display:none}:host(c4p-side-panel) .c4p--side-panel__close-button{inline-size:2rem}']);

// node_modules/@carbon/ibm-products-web-components/es/components/side-panel/side-panel.js
var blockClass = `${prefix}--side-panel`;
var blockClassActionSet = `${prefix}--action-set`;
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
var CDSSidePanel = class CDSSidePanel2 extends HostListenerMixin(i2) {
  constructor() {
    super(...arguments);
    this._hObserveResize = null;
    this._launcher = null;
    this._doAnimateTitle = true;
    this._isOpen = false;
    this._containerScrollTop = -16;
    this._hasSubtitle = false;
    this._hasSlug = false;
    this._hasActionToolbar = false;
    this._actionsCount = 0;
    this._slugCloseSize = "sm";
    this._customHeaderElements = [];
    this._handleHostKeydown = (event) => {
      var _a;
      if (event.key === "Tab" && !this.slideIn) {
        const { first: _firstElement, last: _lastElement } = this.getFocusable();
        if (event.shiftKey && (((_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.activeElement) === _firstElement || document.activeElement === _firstElement)) {
          event.preventDefault();
          _lastElement === null || _lastElement === void 0 ? void 0 : _lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === _lastElement) {
          event.preventDefault();
          _firstElement === null || _firstElement === void 0 ? void 0 : _firstElement.focus();
        }
      }
    };
    this._handleKeydown = ({ key, target }) => {
      if (key === "Esc" || key === "Escape") {
        this._handleUserInitiatedClose(target);
      }
    };
    this._reducedMotion = typeof window !== "undefined" && (window === null || window === void 0 ? void 0 : window.matchMedia) ? window.matchMedia("(prefers-reduced-motion: reduce)") : { matches: true };
    this._adjustPageContent = () => {
      var _a, _b;
      if (this.selectorPageContent) {
        const pageContentEl = document.querySelector(this.selectorPageContent);
        if (pageContentEl) {
          const newValues = {
            marginInlineStart: "",
            marginInlineEnd: "",
            inlineSize: "",
            transition: this._reducedMotion.matches ? "none" : `all ${moderate02}`,
            transitionProperty: "margin-inline-start, margin-inline-end"
          };
          if (this.open) {
            newValues.inlineSize = "auto";
            if (this.placement === "left") {
              newValues.marginInlineStart = `${(_a = this === null || this === void 0 ? void 0 : this._sidePanel) === null || _a === void 0 ? void 0 : _a.offsetWidth}px`;
            } else {
              newValues.marginInlineEnd = `${(_b = this === null || this === void 0 ? void 0 : this._sidePanel) === null || _b === void 0 ? void 0 : _b.offsetWidth}px`;
            }
          }
          if (this.slideIn) {
            Object.keys(newValues).forEach((key) => {
              pageContentEl.style[key] = newValues[key];
            });
          }
        }
      }
    };
    this._checkSetOpen = () => {
      var _a;
      const { _sidePanel: sidePanel } = this;
      if (sidePanel && this._isOpen) {
        if ((_a = this._reducedMotion) === null || _a === void 0 ? void 0 : _a.matches) {
          this._isOpen = false;
        } else {
          sidePanel.addEventListener("transitionend", () => {
            this._isOpen = false;
          });
        }
      } else {
        this._isOpen = this.open;
      }
    };
    this._checkUpdateIconButtonSizes = () => {
      var _a, _b;
      const slug = this.querySelector(`${prefix}-slug`);
      const otherButtons = (_a = this === null || this === void 0 ? void 0 : this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll("#nav-back-button, #close-button");
      let iconButtonSize = "sm";
      if (slug || (otherButtons === null || otherButtons === void 0 ? void 0 : otherButtons.length)) {
        const actions = (_b = this === null || this === void 0 ? void 0 : this.querySelectorAll) === null || _b === void 0 ? void 0 : _b.call(this, `${prefix}-button[slot='actions']`);
        if ((actions === null || actions === void 0 ? void 0 : actions.length) && /l/.test(this.size)) {
          iconButtonSize = "md";
        }
      }
      if (slug) {
        slug === null || slug === void 0 ? void 0 : slug.setAttribute("size", iconButtonSize);
      }
      if (otherButtons) {
        [...otherButtons].forEach((btn) => {
          btn.setAttribute("size", iconButtonSize);
        });
      }
    };
    this._checkUpdateActionSizes = () => {
      if (this._actions) {
        for (let i3 = 0; i3 < this._actions.length; i3++) {
          this._actions[i3].setAttribute("size", this.condensedActions ? "lg" : "xl");
        }
      }
    };
    this._maxActions = 3;
    this._checkSetDoAnimateTitle = () => {
      var _a, _b, _c;
      let canDoAnimateTitle = false;
      if (this._sidePanel && this.open && this.animateTitle && ((_a = this === null || this === void 0 ? void 0 : this.title) === null || _a === void 0 ? void 0 : _a.length) && !this._reducedMotion.matches) {
        const scrollAnimationDistance = this._getScrollAnimationDistance();
        (_c = (_b = this === null || this === void 0 ? void 0 : this._sidePanel) === null || _b === void 0 ? void 0 : _b.style) === null || _c === void 0 ? void 0 : _c.setProperty(`--${blockClass}--scroll-animation-distance`, `${scrollAnimationDistance}`);
        let scrollEl = this._animateScrollWrapper;
        if (!scrollEl && this.animateTitle && !this._doAnimateTitle) {
          scrollEl = this._innerContent;
        }
        if (scrollEl) {
          const innerComputed = window === null || window === void 0 ? void 0 : window.getComputedStyle(this._innerContent);
          const innerPaddingHeight = innerComputed ? parseFloat(innerComputed === null || innerComputed === void 0 ? void 0 : innerComputed.paddingTop) + parseFloat(innerComputed === null || innerComputed === void 0 ? void 0 : innerComputed.paddingBottom) : 0;
          canDoAnimateTitle = (!!this.labelText || !!this._hasActionToolbar || this._hasSubtitle) && scrollEl.scrollHeight - scrollEl.clientHeight >= scrollAnimationDistance + innerPaddingHeight;
        }
      }
      this._doAnimateTitle = canDoAnimateTitle;
    };
    this._resizeObserver = new ResizeObserver(() => {
      if (this._sidePanel) {
        this._checkSetDoAnimateTitle();
      }
    });
    this._getScrollAnimationDistance = () => {
      var _a, _b, _c, _d;
      const labelHeight = (_b = (_a = this === null || this === void 0 ? void 0 : this._label) === null || _a === void 0 ? void 0 : _a.offsetHeight) !== null && _b !== void 0 ? _b : 0;
      const subtitleHeight = (_d = (_c = this === null || this === void 0 ? void 0 : this._subtitle) === null || _c === void 0 ? void 0 : _c.offsetHeight) !== null && _d !== void 0 ? _d : 0;
      const titleVerticalBorder = this._hasActionToolbar ? this._title.offsetHeight - this._title.clientHeight : 0;
      return labelHeight + subtitleHeight + titleVerticalBorder;
    };
    this._scrollObserver = () => {
      var _a, _b, _c, _d;
      const scrollTop = (_b = (_a = this._animateScrollWrapper) === null || _a === void 0 ? void 0 : _a.scrollTop) !== null && _b !== void 0 ? _b : 0;
      const scrollAnimationDistance = this._getScrollAnimationDistance();
      const animationProgress = Math.min(scrollTop, scrollAnimationDistance) / scrollAnimationDistance;
      (_d = (_c = this === null || this === void 0 ? void 0 : this._sidePanel) === null || _c === void 0 ? void 0 : _c.style) === null || _d === void 0 ? void 0 : _d.setProperty(`--${blockClass}--scroll-animation-progress`, `${animationProgress}`);
      if (animationProgress === 1) {
        this._customHeaderElements.forEach((el) => {
          el.classList.add(`cds--visually-hidden`);
        });
      } else {
        this._customHeaderElements.forEach((el) => {
          el.classList.remove(`cds--visually-hidden`);
        });
      }
    };
    this._handleCurrentStepUpdate = () => {
      var _a;
      const scrollable = (_a = this._animateScrollWrapper) !== null && _a !== void 0 ? _a : this._innerContent;
      if (scrollable) {
        scrollable.scrollTop = 0;
      }
    };
    this.animateTitle = true;
    this.closeIconDescription = "Close";
    this.closeIconTooltipAlignment = "left";
    this.condensedActions = false;
    this.includeOverlay = false;
    this.navigationBackIconDescription = "Back";
    this.open = false;
    this.placement = SIDE_PANEL_PLACEMENT.RIGHT;
    this.preventCloseOnClickOutside = false;
    this.selectorPageContent = "";
    this.hideCloseButton = false;
    this.size = SIDE_PANEL_SIZE.MEDIUM;
    this.slideIn = false;
  }
  /**
   * Get focusable elements.
   *
   * Querying all tabbable items.
   *
   * @returns {{first: HTMLElement, last: HTMLElement, all: HTMLElement[]}} Returns an object with various elements.
   */
  getFocusable() {
    var _a, _b;
    const elements = [];
    if (this._hasSlug) {
      elements.push(this.querySelectorAll(`${carbonPrefix}-slug`));
    }
    if (!this.hideCloseButton) {
      const closeButtons = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll(`${carbonPrefix}-icon-button`);
      if (closeButtons) {
        elements.push(closeButtons);
      }
    }
    const _tabbableItems = this.querySelectorAll(selectorTabbable);
    if (_tabbableItems) {
      elements.push(_tabbableItems);
    }
    const all = (_b = elements === null || elements === void 0 ? void 0 : elements.flatMap((nodeList) => Array.from(nodeList))) === null || _b === void 0 ? void 0 : _b.filter((el) => typeof (el === null || el === void 0 ? void 0 : el.focus) === "function");
    return {
      first: all[0],
      last: all[all.length - 1],
      all
    };
  }
  /**
   * Handles `click` event on the side-panel container.
   *
   * @param event The event.
   */
  _handleClickOnOverlay(event) {
    if (!this.preventCloseOnClickOutside) {
      this._handleUserInitiatedClose(event.target);
    }
  }
  /**
   * Handles `click` event on the side-panel container.
   *
   * @param event The event.
   */
  _handleCloseClick(event) {
    this._handleUserInitiatedClose(event.target);
  }
  /**
   * Handles user-initiated close request of this side-panel.
   *
   * @param triggeredBy The element that triggered this close request.
   */
  _handleUserInitiatedClose(triggeredBy) {
    if (this.open) {
      const init = {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: {
          triggeredBy
        }
      };
      if (this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeClose, init))) {
        this.open = false;
        this.dispatchEvent(new CustomEvent(this.constructor.eventClose, init));
      }
    }
  }
  _handleNavigateBack(triggeredBy) {
    this.dispatchEvent(new CustomEvent(this.constructor.eventNavigateBack, {
      composed: true,
      detail: {
        triggeredBy
      }
    }));
  }
  _handleSlugChange(e2) {
    this._checkUpdateIconButtonSizes();
    const childItems = e2.target.assignedElements();
    this._hasSlug = childItems.length > 0;
  }
  _handleSubtitleChange(e2) {
    const target = e2.target;
    const subtitle = target === null || target === void 0 ? void 0 : target.assignedElements();
    this._hasSubtitle = subtitle.length > 0;
  }
  _handleCustomHeaderSlotChange(e2) {
    const target = e2.target;
    const customHeaderElms = target === null || target === void 0 ? void 0 : target.assignedElements();
    customHeaderElms.forEach((el) => {
      if (el instanceof HTMLElement) {
        el.style.opacity = `calc(1 - var(--${blockClass}--scroll-animation-progress))`;
        this._customHeaderElements.push(el);
      }
    });
  }
  _handleActionToolbarChange(e2) {
    const target = e2.target;
    const toolbarActions = target === null || target === void 0 ? void 0 : target.assignedElements();
    this._hasActionToolbar = toolbarActions && toolbarActions.length > 0;
    if (this._hasActionToolbar) {
      for (const toolbarAction of toolbarActions) {
        toolbarAction.setAttribute("size", "sm");
      }
    }
  }
  _handleActionsChange(e2) {
    var _a;
    const target = e2.target;
    const actions = target === null || target === void 0 ? void 0 : target.assignedElements();
    this._checkUpdateIconButtonSizes();
    const actionsCount = (_a = actions === null || actions === void 0 ? void 0 : actions.length) !== null && _a !== void 0 ? _a : 0;
    if (actionsCount > this._maxActions) {
      this._actionsCount = this._maxActions;
      if (true) {
        console.error(`Too many side-panel actions, max ${this._maxActions}.`);
      }
    } else {
      this._actionsCount = actionsCount;
    }
    for (let i3 = 0; i3 < (actions === null || actions === void 0 ? void 0 : actions.length); i3++) {
      if (i3 + 1 > this._maxActions) {
        actions[i3].setAttribute("hidden", "true");
        actions[i3].setAttribute(`data-actions-limit-${this._maxActions}-exceeded`, `${actions.length}`);
      } else {
        actions[i3].classList.add(`${blockClassActionSet}__action-button`);
      }
    }
    this._checkUpdateActionSizes();
  }
  async connectObservers() {
    await this.updateComplete;
    this._hObserveResize = observeResize(this._resizeObserver, this._sidePanel);
  }
  disconnectObservers() {
    if (this._hObserveResize) {
      this._hObserveResize = this._hObserveResize.release();
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.disconnectObservers();
    this.connectObservers();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.disconnectObservers();
  }
  render() {
    const { closeIconDescription, closeIconTooltipAlignment, condensedActions, currentStep, includeOverlay, labelText, navigationBackIconDescription, open, placement, hideCloseButton, size, slideIn, title } = this;
    if (!open && !this._isOpen) {
      return b``;
    }
    const actionsMultiple = ["", "single", "double", "triple"][this._actionsCount];
    const titleTemplate = b` <div
      class=${`${blockClass}__title`}
      ?no-label=${!!labelText}
    >
      <h2 class=${title ? `${blockClass}__title-text` : ""}>${title}</h2>
      ${this._doAnimateTitle ? b`<h2
            class=${`${blockClass}__collapsed-title-text`}
            aria-hidden="true"
          >
            ${title}
          </h2>` : ""}
    </div>`;
    const headerHasTitleClass = this.title ? ` ${blockClass}__header--has-title ` : "";
    const headerTemplate = b`
      <div
        class=${`${blockClass}__header${headerHasTitleClass}`}
        ?detail-step=${currentStep > 0}
        ?no-title-animation=${!this._doAnimateTitle}
        ?reduced-motion=${this._reducedMotion.matches}
      >
        <!-- render back button -->
        ${currentStep > 0 ? b`<cds-icon-button
              align="bottom-left"
              aria-label=${navigationBackIconDescription}
              kind="ghost"
              size="sm"
              class=${`${prefix}--btn ${blockClass}__navigation-back-button`}
              @click=${this._handleNavigateBack}
            >
              ${iconLoader(_162, { slot: "icon" })}
              <span slot="tooltip-content">
                ${navigationBackIconDescription}
              </span>
            </cds-icon-button>` : ""}

        <!-- slot for custom header components -->
        <slot
          name="above-title"
          @slotchange=${this._handleCustomHeaderSlotChange}
        ></slot>

        <!-- render title label -->
        ${(title === null || title === void 0 ? void 0 : title.length) && (labelText === null || labelText === void 0 ? void 0 : labelText.length) ? b` <p class=${`${blockClass}__label-text`}>${labelText}</p>` : ""}

        <!-- title -->
        ${title ? titleTemplate : ""}

        <!-- render slug and close button area -->
        <div class=${`${blockClass}__slug-and-close`}>
          <slot name="slug" @slotchange=${this._handleSlugChange}></slot>
          <!-- {normalizedSlug} -->
          ${!hideCloseButton ? b`<cds-icon-button
                align=${closeIconTooltipAlignment}
                aria-label=${closeIconDescription}
                kind="ghost"
                size="sm"
                class=${`${blockClass}__close-button`}
                @click=${this._handleCloseClick}
              >
                ${iconLoader(_16, { slot: "icon" })}
                <span slot="tooltip-content"> ${closeIconDescription} </span>
              </cds-icon-button>` : ""}
        </div>

        <!-- render sub title -->
        <p
          class=${this._hasSubtitle ? `${blockClass}__subtitle-text` : ""}
          ?hidden=${!this._hasSubtitle}
          ?no-title-animation=${!this._doAnimateTitle}
          ?no-action-toolbar=${!this._hasActionToolbar}
          ?no-title=${!title}
        >
          <slot
            name="subtitle"
            @slotchange=${this._handleSubtitleChange}
          ></slot>
        </p>

        <!-- slot for custom header components -->
        <slot
          name="below-title"
          @slotchange=${this._handleCustomHeaderSlotChange}
        ></slot>

        <div
          class=${this._hasActionToolbar ? `${blockClass}__action-toolbar` : ""}
          ?hidden=${!this._hasActionToolbar}
          ?no-title-animation=${!this._doAnimateTitle}
        >
          <slot
            name="action-toolbar"
            @slotchange=${this._handleActionToolbarChange}
          ></slot>
        </div>
      </div>
    `;
    const mainTemplate = b`<div
      class=${`${blockClass}__inner-content`}
      ?scrolls=${!this._doAnimateTitle}
    >
      <cds-layer level="1">
        <slot></slot>
      </cds-layer>
    </div> `;
    const sidePanelAnimateTitleClass = this._doAnimateTitle ? ` ${blockClass}--animated-title` : "";
    return b`
      <div
        class=${`${blockClass}${sidePanelAnimateTitleClass}`}
        part="dialog"
        role="complementary"
        placement="${placement}"
        ?has-slug=${this._hasSlug}
        ?open=${this._isOpen}
        ?opening=${open && !this._isOpen}
        ?closing=${!open && this._isOpen}
        ?condensed-actions=${condensedActions}
        ?overlay=${includeOverlay || slideIn}
        ?slide-in=${slideIn}
        size=${size}
      >
        ${this._doAnimateTitle ? b`<div class=${`${blockClass}__animated-scroll-wrapper`} scrolls>
              ${headerTemplate} ${mainTemplate}
            </div>` : b` ${headerTemplate} ${mainTemplate}`}

        <cds-button-set-base
          class=${`${blockClass}__actions-container`}
          ?hidden=${this._actionsCount === 0}
          ?condensed=${condensedActions}
          actions-multiple=${actionsMultiple}
          size=${size}
        >
          <slot name="actions" @slotchange=${this._handleActionsChange}></slot>
        </cds-button-set-base>
      </div>

      ${includeOverlay ? b`<div
            ?slide-in=${slideIn}
            class=${`${blockClass}__overlay`}
            ?open=${this.open}
            ?opening=${open && !this._isOpen}
            ?closing=${!open && this._isOpen}
            tabindex="-1"
            @click=${this._handleClickOnOverlay}
          ></div>` : ""}
    `;
  }
  async updated(changedProperties) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (changedProperties.has("condensedActions")) {
      this._checkUpdateActionSizes();
    }
    if (changedProperties.has("currentStep")) {
      this._handleCurrentStepUpdate();
    }
    if (changedProperties.has("_doAnimateTitle")) {
      (_a = this === null || this === void 0 ? void 0 : this._animateScrollWrapper) === null || _a === void 0 ? void 0 : _a.removeEventListener("scroll", this._scrollObserver);
      if (this._doAnimateTitle) {
        (_b = this === null || this === void 0 ? void 0 : this._animateScrollWrapper) === null || _b === void 0 ? void 0 : _b.addEventListener("scroll", this._scrollObserver);
      } else {
        (_d = (_c = this === null || this === void 0 ? void 0 : this._sidePanel) === null || _c === void 0 ? void 0 : _c.style) === null || _d === void 0 ? void 0 : _d.setProperty(`--${blockClass}--scroll-animation-progress`, "0");
      }
    }
    if (changedProperties.has("_isOpen") || changedProperties.has("animateTitle")) {
      this._checkSetDoAnimateTitle();
    }
    if (changedProperties.has("slideIn") || changedProperties.has("open") || changedProperties.has("includeOverlay")) {
      this._adjustPageContent();
    }
    if (changedProperties.has("open")) {
      this._checkSetOpen();
      this.disconnectObservers();
      if (this.open) {
        this.connectObservers();
        this._launcher = this.ownerDocument.activeElement;
        await this.constructor._delay();
        if ((_f = (_e = this.selectorInitialFocus) === null || _e === void 0 ? void 0 : _e.trim()) === null || _f === void 0 ? void 0 : _f.length) {
          const focusNode = this.querySelector(this.selectorInitialFocus);
          focusNode === null || focusNode === void 0 ? void 0 : focusNode.focus();
        } else if (!this.slideIn) {
          const { first: _firstElement } = this.getFocusable();
          _firstElement === null || _firstElement === void 0 ? void 0 : _firstElement.focus();
        }
      } else if (this._launcher && typeof ((_g = this._launcher) === null || _g === void 0 ? void 0 : _g.focus) === "function") {
        (_h = this._launcher) === null || _h === void 0 ? void 0 : _h.focus();
        this._launcher = null;
      }
    }
  }
  /**
   * @param ms The number of milliseconds.
   * @returns A promise that is resolves after the given milliseconds.
   */
  static _delay(ms = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  /**
   * A selector selecting tabbable nodes.
   */
  static get selectorTabbable() {
    return selectorTabbable;
  }
  /**
   * The name of the custom event fired before this side-panel is being closed upon a user gesture.
   * Cancellation of this event stops the user-initiated action of closing this side-panel.
   */
  static get eventBeforeClose() {
    return `${prefix}-side-panel-beingclosed`;
  }
  /**
   * The name of the custom event fired after this side-panel is closed upon a user gesture.
   */
  static get eventClose() {
    return `${prefix}-side-panel-closed`;
  }
  /**
   * The name of the custom event fired on clicking the navigate back button
   */
  static get eventNavigateBack() {
    return `${prefix}-side-panel-navigate-back`;
  }
};
CDSSidePanel.styles = styles;
__decorate([
  e(`.${blockClass}`)
], CDSSidePanel.prototype, "_sidePanel", void 0);
__decorate([
  e(`.${blockClass}__animated-scroll-wrapper`)
], CDSSidePanel.prototype, "_animateScrollWrapper", void 0);
__decorate([
  e(`.${blockClass}__label-text`)
], CDSSidePanel.prototype, "_label", void 0);
__decorate([
  e(`.${blockClass}__title-text`)
], CDSSidePanel.prototype, "_title", void 0);
__decorate([
  e(`.${blockClass}__subtitle-text`)
], CDSSidePanel.prototype, "_subtitle", void 0);
__decorate([
  e(`.${blockClass}__inner-content`)
], CDSSidePanel.prototype, "_innerContent", void 0);
__decorate([
  o({
    slot: "actions",
    selector: `${carbonPrefix}-button`
  })
], CDSSidePanel.prototype, "_actions", void 0);
__decorate([
  r()
], CDSSidePanel.prototype, "_doAnimateTitle", void 0);
__decorate([
  r()
], CDSSidePanel.prototype, "_isOpen", void 0);
__decorate([
  r()
], CDSSidePanel.prototype, "_containerScrollTop", void 0);
__decorate([
  r()
], CDSSidePanel.prototype, "_hasSubtitle", void 0);
__decorate([
  r()
], CDSSidePanel.prototype, "_hasSlug", void 0);
__decorate([
  r()
], CDSSidePanel.prototype, "_hasActionToolbar", void 0);
__decorate([
  r()
], CDSSidePanel.prototype, "_actionsCount", void 0);
__decorate([
  r()
], CDSSidePanel.prototype, "_slugCloseSize", void 0);
__decorate([
  r()
], CDSSidePanel.prototype, "_customHeaderElements", void 0);
__decorate([
  HostListener("keydown")
], CDSSidePanel.prototype, "_handleHostKeydown", void 0);
__decorate([
  HostListener("document:keydown")
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSSidePanel.prototype, "_handleKeydown", void 0);
__decorate([
  n({ reflect: true, attribute: "animate-title", type: Boolean })
], CDSSidePanel.prototype, "animateTitle", void 0);
__decorate([
  n({
    reflect: true,
    attribute: "close-icon-description",
    type: String
  })
], CDSSidePanel.prototype, "closeIconDescription", void 0);
__decorate([
  n({
    reflect: true,
    attribute: "close-icon-tooltip-alignment",
    type: String
  })
], CDSSidePanel.prototype, "closeIconTooltipAlignment", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "condensed-actions" })
], CDSSidePanel.prototype, "condensedActions", void 0);
__decorate([
  n({ reflect: true, attribute: "current-step", type: Number })
], CDSSidePanel.prototype, "currentStep", void 0);
__decorate([
  n({ attribute: "include-overlay", type: Boolean, reflect: true })
], CDSSidePanel.prototype, "includeOverlay", void 0);
__decorate([
  n({ reflect: true, attribute: "label-text" })
], CDSSidePanel.prototype, "labelText", void 0);
__decorate([
  n({ reflect: true, attribute: "navigation-back-icon-description" })
], CDSSidePanel.prototype, "navigationBackIconDescription", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSidePanel.prototype, "open", void 0);
__decorate([
  n({ reflect: true, type: String })
], CDSSidePanel.prototype, "placement", void 0);
__decorate([
  n({ type: Boolean, attribute: "prevent-close-on-click-outside" })
], CDSSidePanel.prototype, "preventCloseOnClickOutside", void 0);
__decorate([
  n({
    reflect: true,
    attribute: "selector-initial-focus",
    type: String
  })
], CDSSidePanel.prototype, "selectorInitialFocus", void 0);
__decorate([
  n({ reflect: true, attribute: "selector-page-content" })
], CDSSidePanel.prototype, "selectorPageContent", void 0);
__decorate([
  n({ attribute: "hide-close-button", type: Boolean })
], CDSSidePanel.prototype, "hideCloseButton", void 0);
__decorate([
  n({ reflect: true, type: String })
], CDSSidePanel.prototype, "size", void 0);
__decorate([
  n({ attribute: "slide-in", type: Boolean, reflect: true })
], CDSSidePanel.prototype, "slideIn", void 0);
__decorate([
  n({ reflect: false, type: String })
], CDSSidePanel.prototype, "title", void 0);
CDSSidePanel = __decorate([
  carbonElement(`${prefix}-side-panel`)
], CDSSidePanel);
/*! Bundled license information:

@carbon/ibm-products-web-components/es/components/side-panel/defs.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2023, 2024
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon/ibm-products-web-components/es/components/side-panel/side-panel.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2023, 2024
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
