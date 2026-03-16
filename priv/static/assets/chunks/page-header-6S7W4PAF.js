import {
  carbonPrefix,
  prefix
} from "./chunk-6BPMK2Y2.js";
import {
  _20
} from "./chunk-AECI6ME5.js";
import "./chunk-SO7P7U55.js";
import "./chunk-KQC2PJHA.js";
import "./chunk-LSZ2PVLU.js";
import "./chunk-X7WRA7XG.js";
import "./chunk-HFGTZQQE.js";
import "./chunk-SMM5AFXN.js";
import "./chunk-MU62I7LL.js";
import {
  c,
  e as e2,
  n as n2,
  s
} from "./chunk-CQL5YJQZ.js";
import "./chunk-DFLJB7UB.js";
import "./chunk-GPZZH3QI.js";
import "./chunk-IGHLRMAE.js";
import {
  CDSButton$1
} from "./chunk-JYACJRIF.js";
import "./chunk-5HWAKYGL.js";
import "./chunk-TGGEFEEZ.js";
import "./chunk-ML2VKJHQ.js";
import {
  iconLoader
} from "./chunk-TRPNDHDH.js";
import "./chunk-LDCWSK5M.js";
import "./chunk-TEMKX2NW.js";
import {
  CDSBreadcrumbItem$1
} from "./chunk-UHHNWSPY.js";
import "./chunk-DAFPBEYU.js";
import "./chunk-73FE5HOG.js";
import {
  e
} from "./chunk-YOLTZNLE.js";
import "./chunk-M2VBID3H.js";
import {
  n,
  r
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

// node_modules/@carbon/ibm-products-web-components/es/components/page-header/page-header.scss.js
var styles = i(['.cds--page-header{background-color:var(--cds-layer-01,#f4f4f4);border-block-end:1px solid var(--cds-border-subtle-01,#c6c6c6)}.cds--page-header__breadcrumb-bar{block-size:2.5rem}.cds--page-header__breadcrumb-bar .cds--subgrid{block-size:100%}.cds--page-header__breadcrumb-container{align-items:center;block-size:100%;display:inline-flex;inline-size:100%;justify-content:space-between}.cds--page-header__breadcrumb__actions-flush .cds--css-grid{padding-inline-end:0}.cds--page-header__breadcrumb__actions-flush .cds--css-grid-column{margin-inline-end:0}.cds--page-header__breadcrumb-bar-border{border-block-end:1px solid var(--cds-border-subtle-01,#c6c6c6)}.cds--page-header__breadcrumb__icon{margin-inline-end:.5rem}.cds--page-header__breadcrumb__actions{display:inline-flex}.cds--page-header__breadcrumb__content-actions{margin-inline-end:.75rem}.cds--page-header__breadcrumb-wrapper{display:inline-flex}.cds--page-header__content{padding:1.5rem 0}@media (max-width:41.98rem){.cds--page-header__content__title-wrapper{display:flex;flex-direction:column;grid-gap:1rem}}.cds--page-header__content__title-wrapper{display:grid;gap:1rem;grid-template-columns:auto minmax(var(--pageheader-title-grid-width,0),1fr);margin-block-end:1rem;min-block-size:2.5rem}.cds--page-header__content__start{display:flex;flex-wrap:wrap;gap:1rem}.cds--page-header__content__title-container{display:flex}.cds--page-header__content__title-container .cds--definition-term{border-block-end:none}.cds--page-header__content__contextual-actions{display:flex}.cds--page-header__content__title{display:-webkit-box;font-size:var(--cds-productive-heading-04-font-size,1.75rem);font-weight:var(--cds-productive-heading-04-font-weight,400);letter-spacing:var(--cds-productive-heading-04-letter-spacing,0);line-height:var(--cds-productive-heading-04-line-height,1.28572);overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;max-inline-size:40rem;text-overflow:ellipsis;white-space:normal}.cds--page-header__content:has(.cds--page-header__content__contextual-actions) .cds--page-header__content__title{-webkit-line-clamp:1}.cds--page-header__content__icon{margin-inline-end:1rem}.cds--page-header__content__page-actions{display:flex;justify-content:right}@media (max-width:41.98rem){.cds--page-header__content__page-actions{justify-content:left;margin-block-start:0}}.cds--page-header__content__page-actions .cds--menu-button__trigger:not(.cds--btn--ghost){min-inline-size:0}.cds--page-header__content__subtitle{font-size:var(--cds-productive-heading-03-font-size,1.25rem);font-weight:var(--cds-productive-heading-03-font-weight,400);letter-spacing:var(--cds-productive-heading-03-letter-spacing,0);line-height:var(--cds-productive-heading-03-line-height,1.4);margin-block-end:.5rem}.cds--page-header__content__body{font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);margin-block-start:.5rem;max-inline-size:40rem}[data-hidden]:not([data-fixed]){display:none}.cds--page-header__hero-image{align-items:center;block-size:100%;display:flex;justify-content:flex-end;overflow:hidden}.cds--page-header__tab-bar{margin-inline-start:-1rem}.cds--page-header__tab-bar--tablist{display:grid;grid-gap:4rem;grid-template-columns:auto minmax(0,1fr)}.cds--page-header__tags{align-items:center;display:flex;justify-content:right}.cds--page-header__tags-popover-list{display:flex;flex-direction:column;padding:1rem}.cds--page-header__tag-item{flex-shrink:0}:host(c4p-page-header){background-color:var(--cds-layer-01,#f4f4f4);border-block-end:1px solid var(--cds-border-subtle-01,#c6c6c6);display:block;inset-block-start:var(--c4p-page-header-header-top);position:sticky}:host(c4p-page-header-breadcrumb) :root,:host(c4p-page-header-content) :root,:host(c4p-page-header-tabs) :root{--cds-grid-gutter:2rem;--cds-grid-columns:4;--cds-grid-margin:0}@media (min-width:42rem){:host(c4p-page-header-breadcrumb) :root,:host(c4p-page-header-content) :root,:host(c4p-page-header-tabs) :root{--cds-grid-columns:8;--cds-grid-margin:1rem}}@media (min-width:66rem){:host(c4p-page-header-breadcrumb) :root,:host(c4p-page-header-content) :root,:host(c4p-page-header-tabs) :root{--cds-grid-columns:16}}@media (min-width:99rem){:host(c4p-page-header-breadcrumb) :root,:host(c4p-page-header-content) :root,:host(c4p-page-header-tabs) :root{--cds-grid-margin:1.5rem}}:host(c4p-page-header-breadcrumb) .cds--css-grid,:host(c4p-page-header-content) .cds--css-grid,:host(c4p-page-header-tabs) .cds--css-grid{--cds-grid-gutter-start:calc(var(--cds-grid-gutter)/2);--cds-grid-gutter-end:calc(var(--cds-grid-gutter)/2);--cds-grid-column-hang:calc(var(--cds-grid-gutter)/2);display:grid;grid-template-columns:repeat(var(--cds-grid-columns),minmax(0,1fr));inline-size:100%;margin-inline:auto;max-inline-size:99rem;padding-inline:var(--cds-grid-margin)}:host(c4p-page-header-breadcrumb) .cds--css-grid--full-width,:host(c4p-page-header-content) .cds--css-grid--full-width,:host(c4p-page-header-tabs) .cds--css-grid--full-width{max-inline-size:100%}:host(c4p-page-header-breadcrumb) .cds--css-grid-column,:host(c4p-page-header-content) .cds--css-grid-column,:host(c4p-page-header-tabs) .cds--css-grid-column{--cds-grid-mode-start:var(--cds-grid-gutter-start);--cds-grid-mode-end:var(--cds-grid-gutter-end);margin-inline:var(--cds-grid-gutter-start) var(--cds-grid-gutter-end)}[dir=rtl] :host(c4p-page-header-breadcrumb) .cds--css-grid-column,[dir=rtl] :host(c4p-page-header-content) .cds--css-grid-column,[dir=rtl] :host(c4p-page-header-tabs) .cds--css-grid-column{margin-inline:var(--cds-grid-gutter-end) var(--cds-grid-gutter-start)}:host(c4p-page-header-breadcrumb) .cds--css-grid--narrow,:host(c4p-page-header-content) .cds--css-grid--narrow,:host(c4p-page-header-tabs) .cds--css-grid--narrow{--cds-grid-gutter-start:0rem}:host(c4p-page-header-breadcrumb) .cds--css-grid--condensed,:host(c4p-page-header-content) .cds--css-grid--condensed,:host(c4p-page-header-tabs) .cds--css-grid--condensed{--cds-grid-gutter:0.0625rem;--cds-grid-column-hang:0.96875rem}:host(c4p-page-header-breadcrumb) .cds--css-grid--start,:host(c4p-page-header-content) .cds--css-grid--start,:host(c4p-page-header-tabs) .cds--css-grid--start{margin-inline-start:0}:host(c4p-page-header-breadcrumb) .cds--css-grid--end,:host(c4p-page-header-content) .cds--css-grid--end,:host(c4p-page-header-tabs) .cds--css-grid--end{margin-inline-end:0}:host(c4p-page-header-breadcrumb) .cds--subgrid,:host(c4p-page-header-content) .cds--subgrid,:host(c4p-page-header-tabs) .cds--subgrid{display:grid;grid-template-columns:repeat(var(--cds-grid-columns),minmax(0,1fr));margin-inline:calc(var(--cds-grid-mode-start)*-1) calc(var(--cds-grid-mode-end)*-1)}[dir=rtl] :host(c4p-page-header-breadcrumb) .cds--subgrid,[dir=rtl] :host(c4p-page-header-content) .cds--subgrid,[dir=rtl] :host(c4p-page-header-tabs) .cds--subgrid{margin-inline:calc(var(--cds-grid-mode-end)*-1) calc(var(--cds-grid-mode-start)*-1)}:host(c4p-page-header-breadcrumb) .cds--subgrid--wide,:host(c4p-page-header-content) .cds--subgrid--wide,:host(c4p-page-header-tabs) .cds--subgrid--wide{--cds-grid-gutter-start:1rem;--cds-grid-gutter-end:1rem;--cds-grid-column-hang:0}:host(c4p-page-header-breadcrumb) .cds--subgrid--narrow,:host(c4p-page-header-content) .cds--subgrid--narrow,:host(c4p-page-header-tabs) .cds--subgrid--narrow{--cds-grid-gutter-start:0rem;--cds-grid-gutter-end:1rem;--cds-grid-column-hang:1rem}:host(c4p-page-header-breadcrumb) .cds--subgrid--condensed,:host(c4p-page-header-content) .cds--subgrid--condensed,:host(c4p-page-header-tabs) .cds--subgrid--condensed{--cds-grid-gutter-start:0.03125rem;--cds-grid-gutter-end:0.03125rem;--cds-grid-column-hang:0.96875rem}:host(c4p-page-header-breadcrumb) .cds--grid-column-hang,:host(c4p-page-header-content) .cds--grid-column-hang,:host(c4p-page-header-tabs) .cds--grid-column-hang{margin-inline-start:var(--cds-grid-column-hang)}[dir=rtl] :host(c4p-page-header-breadcrumb) .cds--grid-column-hang,[dir=rtl] :host(c4p-page-header-content) .cds--grid-column-hang,[dir=rtl] :host(c4p-page-header-tabs) .cds--grid-column-hang{margin-inline:initial var(--cds-grid-column-hang)}:host(c4p-page-header-breadcrumb) .cds--col-span-0,:host(c4p-page-header-content) .cds--col-span-0,:host(c4p-page-header-tabs) .cds--col-span-0{display:none}:host(c4p-page-header-breadcrumb) .cds--col-span-1,:host(c4p-page-header-content) .cds--col-span-1,:host(c4p-page-header-tabs) .cds--col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}:host(c4p-page-header-breadcrumb) .cds--col-span-2,:host(c4p-page-header-content) .cds--col-span-2,:host(c4p-page-header-tabs) .cds--col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}:host(c4p-page-header-breadcrumb) .cds--col-span-3,:host(c4p-page-header-content) .cds--col-span-3,:host(c4p-page-header-tabs) .cds--col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}:host(c4p-page-header-breadcrumb) .cds--col-span-4,:host(c4p-page-header-content) .cds--col-span-4,:host(c4p-page-header-tabs) .cds--col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}:host(c4p-page-header-breadcrumb) .cds--col-span-5,:host(c4p-page-header-content) .cds--col-span-5,:host(c4p-page-header-tabs) .cds--col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}:host(c4p-page-header-breadcrumb) .cds--col-span-6,:host(c4p-page-header-content) .cds--col-span-6,:host(c4p-page-header-tabs) .cds--col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}:host(c4p-page-header-breadcrumb) .cds--col-span-7,:host(c4p-page-header-content) .cds--col-span-7,:host(c4p-page-header-tabs) .cds--col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}:host(c4p-page-header-breadcrumb) .cds--col-span-8,:host(c4p-page-header-content) .cds--col-span-8,:host(c4p-page-header-tabs) .cds--col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}:host(c4p-page-header-breadcrumb) .cds--col-span-9,:host(c4p-page-header-content) .cds--col-span-9,:host(c4p-page-header-tabs) .cds--col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}:host(c4p-page-header-breadcrumb) .cds--col-span-10,:host(c4p-page-header-content) .cds--col-span-10,:host(c4p-page-header-tabs) .cds--col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}:host(c4p-page-header-breadcrumb) .cds--col-span-11,:host(c4p-page-header-content) .cds--col-span-11,:host(c4p-page-header-tabs) .cds--col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}:host(c4p-page-header-breadcrumb) .cds--col-span-12,:host(c4p-page-header-content) .cds--col-span-12,:host(c4p-page-header-tabs) .cds--col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}:host(c4p-page-header-breadcrumb) .cds--col-span-13,:host(c4p-page-header-content) .cds--col-span-13,:host(c4p-page-header-tabs) .cds--col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}:host(c4p-page-header-breadcrumb) .cds--col-span-14,:host(c4p-page-header-content) .cds--col-span-14,:host(c4p-page-header-tabs) .cds--col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}:host(c4p-page-header-breadcrumb) .cds--col-span-15,:host(c4p-page-header-content) .cds--col-span-15,:host(c4p-page-header-tabs) .cds--col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}:host(c4p-page-header-breadcrumb) .cds--col-span-16,:host(c4p-page-header-content) .cds--col-span-16,:host(c4p-page-header-tabs) .cds--col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-span-0,:host(c4p-page-header-content) .cds--sm\\:col-span-0,:host(c4p-page-header-tabs) .cds--sm\\:col-span-0{display:none}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-span-1,:host(c4p-page-header-content) .cds--sm\\:col-span-1,:host(c4p-page-header-tabs) .cds--sm\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-span-2,:host(c4p-page-header-content) .cds--sm\\:col-span-2,:host(c4p-page-header-tabs) .cds--sm\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-span-3,:host(c4p-page-header-content) .cds--sm\\:col-span-3,:host(c4p-page-header-tabs) .cds--sm\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-span-4,:host(c4p-page-header-content) .cds--sm\\:col-span-4,:host(c4p-page-header-tabs) .cds--sm\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-span-auto,:host(c4p-page-header-content) .cds--sm\\:col-span-auto,:host(c4p-page-header-tabs) .cds--sm\\:col-span-auto{grid-column:auto}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-span-100,:host(c4p-page-header-content) .cds--sm\\:col-span-100,:host(c4p-page-header-tabs) .cds--sm\\:col-span-100{grid-column:1/-1}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-span-75,:host(c4p-page-header-content) .cds--sm\\:col-span-75,:host(c4p-page-header-tabs) .cds--sm\\:col-span-75{--cds-grid-columns:3;grid-column:span 3/span 3}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-span-50,:host(c4p-page-header-content) .cds--sm\\:col-span-50,:host(c4p-page-header-tabs) .cds--sm\\:col-span-50{--cds-grid-columns:2;grid-column:span 2/span 2}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-span-25,:host(c4p-page-header-content) .cds--sm\\:col-span-25,:host(c4p-page-header-tabs) .cds--sm\\:col-span-25{--cds-grid-columns:1;grid-column:span 1/span 1}@media (min-width:42rem){:host(c4p-page-header-breadcrumb) .cds--md\\:col-span-0,:host(c4p-page-header-content) .cds--md\\:col-span-0,:host(c4p-page-header-tabs) .cds--md\\:col-span-0{display:none}}@media (min-width:42rem){:host(c4p-page-header-breadcrumb) .cds--md\\:col-span-1,:host(c4p-page-header-content) .cds--md\\:col-span-1,:host(c4p-page-header-tabs) .cds--md\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}}@media (min-width:42rem){:host(c4p-page-header-breadcrumb) .cds--md\\:col-span-2,:host(c4p-page-header-content) .cds--md\\:col-span-2,:host(c4p-page-header-tabs) .cds--md\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}}@media (min-width:42rem){:host(c4p-page-header-breadcrumb) .cds--md\\:col-span-3,:host(c4p-page-header-content) .cds--md\\:col-span-3,:host(c4p-page-header-tabs) .cds--md\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}}@media (min-width:42rem){:host(c4p-page-header-breadcrumb) .cds--md\\:col-span-4,:host(c4p-page-header-content) .cds--md\\:col-span-4,:host(c4p-page-header-tabs) .cds--md\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}}@media (min-width:42rem){:host(c4p-page-header-breadcrumb) .cds--md\\:col-span-5,:host(c4p-page-header-content) .cds--md\\:col-span-5,:host(c4p-page-header-tabs) .cds--md\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}}@media (min-width:42rem){:host(c4p-page-header-breadcrumb) .cds--md\\:col-span-6,:host(c4p-page-header-content) .cds--md\\:col-span-6,:host(c4p-page-header-tabs) .cds--md\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}}@media (min-width:42rem){:host(c4p-page-header-breadcrumb) .cds--md\\:col-span-7,:host(c4p-page-header-content) .cds--md\\:col-span-7,:host(c4p-page-header-tabs) .cds--md\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}}@media (min-width:42rem){:host(c4p-page-header-breadcrumb) .cds--md\\:col-span-8,:host(c4p-page-header-content) .cds--md\\:col-span-8,:host(c4p-page-header-tabs) .cds--md\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}}@media (min-width:42rem){:host(c4p-page-header-breadcrumb) .cds--md\\:col-span-auto,:host(c4p-page-header-content) .cds--md\\:col-span-auto,:host(c4p-page-header-tabs) .cds--md\\:col-span-auto{grid-column:auto}:host(c4p-page-header-breadcrumb) .cds--md\\:col-span-100,:host(c4p-page-header-content) .cds--md\\:col-span-100,:host(c4p-page-header-tabs) .cds--md\\:col-span-100{grid-column:1/-1}:host(c4p-page-header-breadcrumb) .cds--md\\:col-span-75,:host(c4p-page-header-content) .cds--md\\:col-span-75,:host(c4p-page-header-tabs) .cds--md\\:col-span-75{--cds-grid-columns:6;grid-column:span 6/span 6}:host(c4p-page-header-breadcrumb) .cds--md\\:col-span-50,:host(c4p-page-header-content) .cds--md\\:col-span-50,:host(c4p-page-header-tabs) .cds--md\\:col-span-50{--cds-grid-columns:4;grid-column:span 4/span 4}:host(c4p-page-header-breadcrumb) .cds--md\\:col-span-25,:host(c4p-page-header-content) .cds--md\\:col-span-25,:host(c4p-page-header-tabs) .cds--md\\:col-span-25{--cds-grid-columns:2;grid-column:span 2/span 2}}@media (min-width:66rem){:host(c4p-page-header-breadcrumb) .cds--lg\\:col-span-0,:host(c4p-page-header-content) .cds--lg\\:col-span-0,:host(c4p-page-header-tabs) .cds--lg\\:col-span-0{display:none}}@media (min-width:66rem){:host(c4p-page-header-breadcrumb) .cds--lg\\:col-span-1,:host(c4p-page-header-content) .cds--lg\\:col-span-1,:host(c4p-page-header-tabs) .cds--lg\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}}@media (min-width:66rem){:host(c4p-page-header-breadcrumb) .cds--lg\\:col-span-2,:host(c4p-page-header-content) .cds--lg\\:col-span-2,:host(c4p-page-header-tabs) .cds--lg\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}}@media (min-width:66rem){:host(c4p-page-header-breadcrumb) .cds--lg\\:col-span-3,:host(c4p-page-header-content) .cds--lg\\:col-span-3,:host(c4p-page-header-tabs) .cds--lg\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}}@media (min-width:66rem){:host(c4p-page-header-breadcrumb) .cds--lg\\:col-span-4,:host(c4p-page-header-content) .cds--lg\\:col-span-4,:host(c4p-page-header-tabs) .cds--lg\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}}@media (min-width:66rem){:host(c4p-page-header-breadcrumb) .cds--lg\\:col-span-5,:host(c4p-page-header-content) .cds--lg\\:col-span-5,:host(c4p-page-header-tabs) .cds--lg\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}}@media (min-width:66rem){:host(c4p-page-header-breadcrumb) .cds--lg\\:col-span-6,:host(c4p-page-header-content) .cds--lg\\:col-span-6,:host(c4p-page-header-tabs) .cds--lg\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}}@media (min-width:66rem){:host(c4p-page-header-breadcrumb) .cds--lg\\:col-span-7,:host(c4p-page-header-content) .cds--lg\\:col-span-7,:host(c4p-page-header-tabs) .cds--lg\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}}@media (min-width:66rem){:host(c4p-page-header-breadcrumb) .cds--lg\\:col-span-8,:host(c4p-page-header-content) .cds--lg\\:col-span-8,:host(c4p-page-header-tabs) .cds--lg\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}}@media (min-width:66rem){:host(c4p-page-header-breadcrumb) .cds--lg\\:col-span-9,:host(c4p-page-header-content) .cds--lg\\:col-span-9,:host(c4p-page-header-tabs) .cds--lg\\:col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}}@media (min-width:66rem){:host(c4p-page-header-breadcrumb) .cds--lg\\:col-span-10,:host(c4p-page-header-content) .cds--lg\\:col-span-10,:host(c4p-page-header-tabs) .cds--lg\\:col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}}@media (min-width:66rem){:host(c4p-page-header-breadcrumb) .cds--lg\\:col-span-11,:host(c4p-page-header-content) .cds--lg\\:col-span-11,:host(c4p-page-header-tabs) .cds--lg\\:col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}}@media (min-width:66rem){:host(c4p-page-header-breadcrumb) .cds--lg\\:col-span-12,:host(c4p-page-header-content) .cds--lg\\:col-span-12,:host(c4p-page-header-tabs) .cds--lg\\:col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}}@media (min-width:66rem){:host(c4p-page-header-breadcrumb) .cds--lg\\:col-span-13,:host(c4p-page-header-content) .cds--lg\\:col-span-13,:host(c4p-page-header-tabs) .cds--lg\\:col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}}@media (min-width:66rem){:host(c4p-page-header-breadcrumb) .cds--lg\\:col-span-14,:host(c4p-page-header-content) .cds--lg\\:col-span-14,:host(c4p-page-header-tabs) .cds--lg\\:col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}}@media (min-width:66rem){:host(c4p-page-header-breadcrumb) .cds--lg\\:col-span-15,:host(c4p-page-header-content) .cds--lg\\:col-span-15,:host(c4p-page-header-tabs) .cds--lg\\:col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}}@media (min-width:66rem){:host(c4p-page-header-breadcrumb) .cds--lg\\:col-span-16,:host(c4p-page-header-content) .cds--lg\\:col-span-16,:host(c4p-page-header-tabs) .cds--lg\\:col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}}@media (min-width:66rem){:host(c4p-page-header-breadcrumb) .cds--lg\\:col-span-auto,:host(c4p-page-header-content) .cds--lg\\:col-span-auto,:host(c4p-page-header-tabs) .cds--lg\\:col-span-auto{grid-column:auto}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-span-100,:host(c4p-page-header-content) .cds--lg\\:col-span-100,:host(c4p-page-header-tabs) .cds--lg\\:col-span-100{grid-column:1/-1}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-span-75,:host(c4p-page-header-content) .cds--lg\\:col-span-75,:host(c4p-page-header-tabs) .cds--lg\\:col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-span-50,:host(c4p-page-header-content) .cds--lg\\:col-span-50,:host(c4p-page-header-tabs) .cds--lg\\:col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-span-25,:host(c4p-page-header-content) .cds--lg\\:col-span-25,:host(c4p-page-header-tabs) .cds--lg\\:col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}@media (min-width:82rem){:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-span-0,:host(c4p-page-header-content) .cds--xlg\\:col-span-0,:host(c4p-page-header-tabs) .cds--xlg\\:col-span-0{display:none}}@media (min-width:82rem){:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-span-1,:host(c4p-page-header-content) .cds--xlg\\:col-span-1,:host(c4p-page-header-tabs) .cds--xlg\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}}@media (min-width:82rem){:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-span-2,:host(c4p-page-header-content) .cds--xlg\\:col-span-2,:host(c4p-page-header-tabs) .cds--xlg\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}}@media (min-width:82rem){:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-span-3,:host(c4p-page-header-content) .cds--xlg\\:col-span-3,:host(c4p-page-header-tabs) .cds--xlg\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}}@media (min-width:82rem){:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-span-4,:host(c4p-page-header-content) .cds--xlg\\:col-span-4,:host(c4p-page-header-tabs) .cds--xlg\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}}@media (min-width:82rem){:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-span-5,:host(c4p-page-header-content) .cds--xlg\\:col-span-5,:host(c4p-page-header-tabs) .cds--xlg\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}}@media (min-width:82rem){:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-span-6,:host(c4p-page-header-content) .cds--xlg\\:col-span-6,:host(c4p-page-header-tabs) .cds--xlg\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}}@media (min-width:82rem){:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-span-7,:host(c4p-page-header-content) .cds--xlg\\:col-span-7,:host(c4p-page-header-tabs) .cds--xlg\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}}@media (min-width:82rem){:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-span-8,:host(c4p-page-header-content) .cds--xlg\\:col-span-8,:host(c4p-page-header-tabs) .cds--xlg\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}}@media (min-width:82rem){:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-span-9,:host(c4p-page-header-content) .cds--xlg\\:col-span-9,:host(c4p-page-header-tabs) .cds--xlg\\:col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}}@media (min-width:82rem){:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-span-10,:host(c4p-page-header-content) .cds--xlg\\:col-span-10,:host(c4p-page-header-tabs) .cds--xlg\\:col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}}@media (min-width:82rem){:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-span-11,:host(c4p-page-header-content) .cds--xlg\\:col-span-11,:host(c4p-page-header-tabs) .cds--xlg\\:col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}}@media (min-width:82rem){:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-span-12,:host(c4p-page-header-content) .cds--xlg\\:col-span-12,:host(c4p-page-header-tabs) .cds--xlg\\:col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}}@media (min-width:82rem){:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-span-13,:host(c4p-page-header-content) .cds--xlg\\:col-span-13,:host(c4p-page-header-tabs) .cds--xlg\\:col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}}@media (min-width:82rem){:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-span-14,:host(c4p-page-header-content) .cds--xlg\\:col-span-14,:host(c4p-page-header-tabs) .cds--xlg\\:col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}}@media (min-width:82rem){:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-span-15,:host(c4p-page-header-content) .cds--xlg\\:col-span-15,:host(c4p-page-header-tabs) .cds--xlg\\:col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}}@media (min-width:82rem){:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-span-16,:host(c4p-page-header-content) .cds--xlg\\:col-span-16,:host(c4p-page-header-tabs) .cds--xlg\\:col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}}@media (min-width:82rem){:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-span-auto,:host(c4p-page-header-content) .cds--xlg\\:col-span-auto,:host(c4p-page-header-tabs) .cds--xlg\\:col-span-auto{grid-column:auto}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-span-100,:host(c4p-page-header-content) .cds--xlg\\:col-span-100,:host(c4p-page-header-tabs) .cds--xlg\\:col-span-100{grid-column:1/-1}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-span-75,:host(c4p-page-header-content) .cds--xlg\\:col-span-75,:host(c4p-page-header-tabs) .cds--xlg\\:col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-span-50,:host(c4p-page-header-content) .cds--xlg\\:col-span-50,:host(c4p-page-header-tabs) .cds--xlg\\:col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-span-25,:host(c4p-page-header-content) .cds--xlg\\:col-span-25,:host(c4p-page-header-tabs) .cds--xlg\\:col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}@media (min-width:99rem){:host(c4p-page-header-breadcrumb) .cds--max\\:col-span-0,:host(c4p-page-header-content) .cds--max\\:col-span-0,:host(c4p-page-header-tabs) .cds--max\\:col-span-0{display:none}}@media (min-width:99rem){:host(c4p-page-header-breadcrumb) .cds--max\\:col-span-1,:host(c4p-page-header-content) .cds--max\\:col-span-1,:host(c4p-page-header-tabs) .cds--max\\:col-span-1{--cds-grid-columns:1;display:block;grid-column:span 1/span 1}}@media (min-width:99rem){:host(c4p-page-header-breadcrumb) .cds--max\\:col-span-2,:host(c4p-page-header-content) .cds--max\\:col-span-2,:host(c4p-page-header-tabs) .cds--max\\:col-span-2{--cds-grid-columns:2;display:block;grid-column:span 2/span 2}}@media (min-width:99rem){:host(c4p-page-header-breadcrumb) .cds--max\\:col-span-3,:host(c4p-page-header-content) .cds--max\\:col-span-3,:host(c4p-page-header-tabs) .cds--max\\:col-span-3{--cds-grid-columns:3;display:block;grid-column:span 3/span 3}}@media (min-width:99rem){:host(c4p-page-header-breadcrumb) .cds--max\\:col-span-4,:host(c4p-page-header-content) .cds--max\\:col-span-4,:host(c4p-page-header-tabs) .cds--max\\:col-span-4{--cds-grid-columns:4;display:block;grid-column:span 4/span 4}}@media (min-width:99rem){:host(c4p-page-header-breadcrumb) .cds--max\\:col-span-5,:host(c4p-page-header-content) .cds--max\\:col-span-5,:host(c4p-page-header-tabs) .cds--max\\:col-span-5{--cds-grid-columns:5;display:block;grid-column:span 5/span 5}}@media (min-width:99rem){:host(c4p-page-header-breadcrumb) .cds--max\\:col-span-6,:host(c4p-page-header-content) .cds--max\\:col-span-6,:host(c4p-page-header-tabs) .cds--max\\:col-span-6{--cds-grid-columns:6;display:block;grid-column:span 6/span 6}}@media (min-width:99rem){:host(c4p-page-header-breadcrumb) .cds--max\\:col-span-7,:host(c4p-page-header-content) .cds--max\\:col-span-7,:host(c4p-page-header-tabs) .cds--max\\:col-span-7{--cds-grid-columns:7;display:block;grid-column:span 7/span 7}}@media (min-width:99rem){:host(c4p-page-header-breadcrumb) .cds--max\\:col-span-8,:host(c4p-page-header-content) .cds--max\\:col-span-8,:host(c4p-page-header-tabs) .cds--max\\:col-span-8{--cds-grid-columns:8;display:block;grid-column:span 8/span 8}}@media (min-width:99rem){:host(c4p-page-header-breadcrumb) .cds--max\\:col-span-9,:host(c4p-page-header-content) .cds--max\\:col-span-9,:host(c4p-page-header-tabs) .cds--max\\:col-span-9{--cds-grid-columns:9;display:block;grid-column:span 9/span 9}}@media (min-width:99rem){:host(c4p-page-header-breadcrumb) .cds--max\\:col-span-10,:host(c4p-page-header-content) .cds--max\\:col-span-10,:host(c4p-page-header-tabs) .cds--max\\:col-span-10{--cds-grid-columns:10;display:block;grid-column:span 10/span 10}}@media (min-width:99rem){:host(c4p-page-header-breadcrumb) .cds--max\\:col-span-11,:host(c4p-page-header-content) .cds--max\\:col-span-11,:host(c4p-page-header-tabs) .cds--max\\:col-span-11{--cds-grid-columns:11;display:block;grid-column:span 11/span 11}}@media (min-width:99rem){:host(c4p-page-header-breadcrumb) .cds--max\\:col-span-12,:host(c4p-page-header-content) .cds--max\\:col-span-12,:host(c4p-page-header-tabs) .cds--max\\:col-span-12{--cds-grid-columns:12;display:block;grid-column:span 12/span 12}}@media (min-width:99rem){:host(c4p-page-header-breadcrumb) .cds--max\\:col-span-13,:host(c4p-page-header-content) .cds--max\\:col-span-13,:host(c4p-page-header-tabs) .cds--max\\:col-span-13{--cds-grid-columns:13;display:block;grid-column:span 13/span 13}}@media (min-width:99rem){:host(c4p-page-header-breadcrumb) .cds--max\\:col-span-14,:host(c4p-page-header-content) .cds--max\\:col-span-14,:host(c4p-page-header-tabs) .cds--max\\:col-span-14{--cds-grid-columns:14;display:block;grid-column:span 14/span 14}}@media (min-width:99rem){:host(c4p-page-header-breadcrumb) .cds--max\\:col-span-15,:host(c4p-page-header-content) .cds--max\\:col-span-15,:host(c4p-page-header-tabs) .cds--max\\:col-span-15{--cds-grid-columns:15;display:block;grid-column:span 15/span 15}}@media (min-width:99rem){:host(c4p-page-header-breadcrumb) .cds--max\\:col-span-16,:host(c4p-page-header-content) .cds--max\\:col-span-16,:host(c4p-page-header-tabs) .cds--max\\:col-span-16{--cds-grid-columns:16;display:block;grid-column:span 16/span 16}}@media (min-width:99rem){:host(c4p-page-header-breadcrumb) .cds--max\\:col-span-auto,:host(c4p-page-header-content) .cds--max\\:col-span-auto,:host(c4p-page-header-tabs) .cds--max\\:col-span-auto{grid-column:auto}:host(c4p-page-header-breadcrumb) .cds--max\\:col-span-100,:host(c4p-page-header-content) .cds--max\\:col-span-100,:host(c4p-page-header-tabs) .cds--max\\:col-span-100{grid-column:1/-1}:host(c4p-page-header-breadcrumb) .cds--max\\:col-span-75,:host(c4p-page-header-content) .cds--max\\:col-span-75,:host(c4p-page-header-tabs) .cds--max\\:col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}:host(c4p-page-header-breadcrumb) .cds--max\\:col-span-50,:host(c4p-page-header-content) .cds--max\\:col-span-50,:host(c4p-page-header-tabs) .cds--max\\:col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}:host(c4p-page-header-breadcrumb) .cds--max\\:col-span-25,:host(c4p-page-header-content) .cds--max\\:col-span-25,:host(c4p-page-header-tabs) .cds--max\\:col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}:host(c4p-page-header-breadcrumb) .cds--col-span-auto,:host(c4p-page-header-content) .cds--col-span-auto,:host(c4p-page-header-tabs) .cds--col-span-auto{grid-column:auto}:host(c4p-page-header-breadcrumb) .cds--col-span-100,:host(c4p-page-header-content) .cds--col-span-100,:host(c4p-page-header-tabs) .cds--col-span-100{grid-column:1/-1}:host(c4p-page-header-breadcrumb) .cds--col-span-75,:host(c4p-page-header-content) .cds--col-span-75,:host(c4p-page-header-tabs) .cds--col-span-75{--cds-grid-columns:3;grid-column:span 3/span 3}@media (min-width:42rem){:host(c4p-page-header-breadcrumb) .cds--col-span-75,:host(c4p-page-header-content) .cds--col-span-75,:host(c4p-page-header-tabs) .cds--col-span-75{--cds-grid-columns:6;grid-column:span 6/span 6}}@media (min-width:66rem){:host(c4p-page-header-breadcrumb) .cds--col-span-75,:host(c4p-page-header-content) .cds--col-span-75,:host(c4p-page-header-tabs) .cds--col-span-75{--cds-grid-columns:12;grid-column:span 12/span 12}}:host(c4p-page-header-breadcrumb) .cds--col-span-50,:host(c4p-page-header-content) .cds--col-span-50,:host(c4p-page-header-tabs) .cds--col-span-50{--cds-grid-columns:2;grid-column:span 2/span 2}@media (min-width:42rem){:host(c4p-page-header-breadcrumb) .cds--col-span-50,:host(c4p-page-header-content) .cds--col-span-50,:host(c4p-page-header-tabs) .cds--col-span-50{--cds-grid-columns:4;grid-column:span 4/span 4}}@media (min-width:66rem){:host(c4p-page-header-breadcrumb) .cds--col-span-50,:host(c4p-page-header-content) .cds--col-span-50,:host(c4p-page-header-tabs) .cds--col-span-50{--cds-grid-columns:8;grid-column:span 8/span 8}}:host(c4p-page-header-breadcrumb) .cds--col-span-25,:host(c4p-page-header-content) .cds--col-span-25,:host(c4p-page-header-tabs) .cds--col-span-25{--cds-grid-columns:1;grid-column:span 1/span 1}@media (min-width:42rem){:host(c4p-page-header-breadcrumb) .cds--col-span-25,:host(c4p-page-header-content) .cds--col-span-25,:host(c4p-page-header-tabs) .cds--col-span-25{--cds-grid-columns:2;grid-column:span 2/span 2}}@media (min-width:66rem){:host(c4p-page-header-breadcrumb) .cds--col-span-25,:host(c4p-page-header-content) .cds--col-span-25,:host(c4p-page-header-tabs) .cds--col-span-25{--cds-grid-columns:4;grid-column:span 4/span 4}}:host(c4p-page-header-breadcrumb) .cds--col-start-1,:host(c4p-page-header-content) .cds--col-start-1,:host(c4p-page-header-tabs) .cds--col-start-1{grid-column-start:1}:host(c4p-page-header-breadcrumb) .cds--col-start-2,:host(c4p-page-header-content) .cds--col-start-2,:host(c4p-page-header-tabs) .cds--col-start-2{grid-column-start:2}:host(c4p-page-header-breadcrumb) .cds--col-start-3,:host(c4p-page-header-content) .cds--col-start-3,:host(c4p-page-header-tabs) .cds--col-start-3{grid-column-start:3}:host(c4p-page-header-breadcrumb) .cds--col-start-4,:host(c4p-page-header-content) .cds--col-start-4,:host(c4p-page-header-tabs) .cds--col-start-4{grid-column-start:4}:host(c4p-page-header-breadcrumb) .cds--col-start-5,:host(c4p-page-header-content) .cds--col-start-5,:host(c4p-page-header-tabs) .cds--col-start-5{grid-column-start:5}:host(c4p-page-header-breadcrumb) .cds--col-start-6,:host(c4p-page-header-content) .cds--col-start-6,:host(c4p-page-header-tabs) .cds--col-start-6{grid-column-start:6}:host(c4p-page-header-breadcrumb) .cds--col-start-7,:host(c4p-page-header-content) .cds--col-start-7,:host(c4p-page-header-tabs) .cds--col-start-7{grid-column-start:7}:host(c4p-page-header-breadcrumb) .cds--col-start-8,:host(c4p-page-header-content) .cds--col-start-8,:host(c4p-page-header-tabs) .cds--col-start-8{grid-column-start:8}:host(c4p-page-header-breadcrumb) .cds--col-start-9,:host(c4p-page-header-content) .cds--col-start-9,:host(c4p-page-header-tabs) .cds--col-start-9{grid-column-start:9}:host(c4p-page-header-breadcrumb) .cds--col-start-10,:host(c4p-page-header-content) .cds--col-start-10,:host(c4p-page-header-tabs) .cds--col-start-10{grid-column-start:10}:host(c4p-page-header-breadcrumb) .cds--col-start-11,:host(c4p-page-header-content) .cds--col-start-11,:host(c4p-page-header-tabs) .cds--col-start-11{grid-column-start:11}:host(c4p-page-header-breadcrumb) .cds--col-start-12,:host(c4p-page-header-content) .cds--col-start-12,:host(c4p-page-header-tabs) .cds--col-start-12{grid-column-start:12}:host(c4p-page-header-breadcrumb) .cds--col-start-13,:host(c4p-page-header-content) .cds--col-start-13,:host(c4p-page-header-tabs) .cds--col-start-13{grid-column-start:13}:host(c4p-page-header-breadcrumb) .cds--col-start-14,:host(c4p-page-header-content) .cds--col-start-14,:host(c4p-page-header-tabs) .cds--col-start-14{grid-column-start:14}:host(c4p-page-header-breadcrumb) .cds--col-start-15,:host(c4p-page-header-content) .cds--col-start-15,:host(c4p-page-header-tabs) .cds--col-start-15{grid-column-start:15}:host(c4p-page-header-breadcrumb) .cds--col-start-16,:host(c4p-page-header-content) .cds--col-start-16,:host(c4p-page-header-tabs) .cds--col-start-16{grid-column-start:16}:host(c4p-page-header-breadcrumb) .cds--col-end-2,:host(c4p-page-header-content) .cds--col-end-2,:host(c4p-page-header-tabs) .cds--col-end-2{grid-column-end:2}:host(c4p-page-header-breadcrumb) .cds--col-end-3,:host(c4p-page-header-content) .cds--col-end-3,:host(c4p-page-header-tabs) .cds--col-end-3{grid-column-end:3}:host(c4p-page-header-breadcrumb) .cds--col-end-4,:host(c4p-page-header-content) .cds--col-end-4,:host(c4p-page-header-tabs) .cds--col-end-4{grid-column-end:4}:host(c4p-page-header-breadcrumb) .cds--col-end-5,:host(c4p-page-header-content) .cds--col-end-5,:host(c4p-page-header-tabs) .cds--col-end-5{grid-column-end:5}:host(c4p-page-header-breadcrumb) .cds--col-end-6,:host(c4p-page-header-content) .cds--col-end-6,:host(c4p-page-header-tabs) .cds--col-end-6{grid-column-end:6}:host(c4p-page-header-breadcrumb) .cds--col-end-7,:host(c4p-page-header-content) .cds--col-end-7,:host(c4p-page-header-tabs) .cds--col-end-7{grid-column-end:7}:host(c4p-page-header-breadcrumb) .cds--col-end-8,:host(c4p-page-header-content) .cds--col-end-8,:host(c4p-page-header-tabs) .cds--col-end-8{grid-column-end:8}:host(c4p-page-header-breadcrumb) .cds--col-end-9,:host(c4p-page-header-content) .cds--col-end-9,:host(c4p-page-header-tabs) .cds--col-end-9{grid-column-end:9}:host(c4p-page-header-breadcrumb) .cds--col-end-10,:host(c4p-page-header-content) .cds--col-end-10,:host(c4p-page-header-tabs) .cds--col-end-10{grid-column-end:10}:host(c4p-page-header-breadcrumb) .cds--col-end-11,:host(c4p-page-header-content) .cds--col-end-11,:host(c4p-page-header-tabs) .cds--col-end-11{grid-column-end:11}:host(c4p-page-header-breadcrumb) .cds--col-end-12,:host(c4p-page-header-content) .cds--col-end-12,:host(c4p-page-header-tabs) .cds--col-end-12{grid-column-end:12}:host(c4p-page-header-breadcrumb) .cds--col-end-13,:host(c4p-page-header-content) .cds--col-end-13,:host(c4p-page-header-tabs) .cds--col-end-13{grid-column-end:13}:host(c4p-page-header-breadcrumb) .cds--col-end-14,:host(c4p-page-header-content) .cds--col-end-14,:host(c4p-page-header-tabs) .cds--col-end-14{grid-column-end:14}:host(c4p-page-header-breadcrumb) .cds--col-end-15,:host(c4p-page-header-content) .cds--col-end-15,:host(c4p-page-header-tabs) .cds--col-end-15{grid-column-end:15}:host(c4p-page-header-breadcrumb) .cds--col-end-16,:host(c4p-page-header-content) .cds--col-end-16,:host(c4p-page-header-tabs) .cds--col-end-16{grid-column-end:16}:host(c4p-page-header-breadcrumb) .cds--col-end-17,:host(c4p-page-header-content) .cds--col-end-17,:host(c4p-page-header-tabs) .cds--col-end-17{grid-column-end:17}:host(c4p-page-header-breadcrumb) .cds--col-start-auto,:host(c4p-page-header-content) .cds--col-start-auto,:host(c4p-page-header-tabs) .cds--col-start-auto{grid-column-start:auto}:host(c4p-page-header-breadcrumb) .cds--col-end-auto,:host(c4p-page-header-content) .cds--col-end-auto,:host(c4p-page-header-tabs) .cds--col-end-auto{grid-column-end:auto}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-start-1,:host(c4p-page-header-content) .cds--sm\\:col-start-1,:host(c4p-page-header-tabs) .cds--sm\\:col-start-1{grid-column-start:1}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-start-2,:host(c4p-page-header-content) .cds--sm\\:col-start-2,:host(c4p-page-header-tabs) .cds--sm\\:col-start-2{grid-column-start:2}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-start-3,:host(c4p-page-header-content) .cds--sm\\:col-start-3,:host(c4p-page-header-tabs) .cds--sm\\:col-start-3{grid-column-start:3}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-start-4,:host(c4p-page-header-content) .cds--sm\\:col-start-4,:host(c4p-page-header-tabs) .cds--sm\\:col-start-4{grid-column-start:4}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-start-5,:host(c4p-page-header-content) .cds--sm\\:col-start-5,:host(c4p-page-header-tabs) .cds--sm\\:col-start-5{grid-column-start:5}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-start-6,:host(c4p-page-header-content) .cds--sm\\:col-start-6,:host(c4p-page-header-tabs) .cds--sm\\:col-start-6{grid-column-start:6}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-start-7,:host(c4p-page-header-content) .cds--sm\\:col-start-7,:host(c4p-page-header-tabs) .cds--sm\\:col-start-7{grid-column-start:7}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-start-8,:host(c4p-page-header-content) .cds--sm\\:col-start-8,:host(c4p-page-header-tabs) .cds--sm\\:col-start-8{grid-column-start:8}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-start-9,:host(c4p-page-header-content) .cds--sm\\:col-start-9,:host(c4p-page-header-tabs) .cds--sm\\:col-start-9{grid-column-start:9}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-start-10,:host(c4p-page-header-content) .cds--sm\\:col-start-10,:host(c4p-page-header-tabs) .cds--sm\\:col-start-10{grid-column-start:10}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-start-11,:host(c4p-page-header-content) .cds--sm\\:col-start-11,:host(c4p-page-header-tabs) .cds--sm\\:col-start-11{grid-column-start:11}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-start-12,:host(c4p-page-header-content) .cds--sm\\:col-start-12,:host(c4p-page-header-tabs) .cds--sm\\:col-start-12{grid-column-start:12}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-start-13,:host(c4p-page-header-content) .cds--sm\\:col-start-13,:host(c4p-page-header-tabs) .cds--sm\\:col-start-13{grid-column-start:13}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-start-14,:host(c4p-page-header-content) .cds--sm\\:col-start-14,:host(c4p-page-header-tabs) .cds--sm\\:col-start-14{grid-column-start:14}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-start-15,:host(c4p-page-header-content) .cds--sm\\:col-start-15,:host(c4p-page-header-tabs) .cds--sm\\:col-start-15{grid-column-start:15}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-start-16,:host(c4p-page-header-content) .cds--sm\\:col-start-16,:host(c4p-page-header-tabs) .cds--sm\\:col-start-16{grid-column-start:16}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-end-2,:host(c4p-page-header-content) .cds--sm\\:col-end-2,:host(c4p-page-header-tabs) .cds--sm\\:col-end-2{grid-column-end:2}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-end-3,:host(c4p-page-header-content) .cds--sm\\:col-end-3,:host(c4p-page-header-tabs) .cds--sm\\:col-end-3{grid-column-end:3}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-end-4,:host(c4p-page-header-content) .cds--sm\\:col-end-4,:host(c4p-page-header-tabs) .cds--sm\\:col-end-4{grid-column-end:4}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-end-5,:host(c4p-page-header-content) .cds--sm\\:col-end-5,:host(c4p-page-header-tabs) .cds--sm\\:col-end-5{grid-column-end:5}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-end-6,:host(c4p-page-header-content) .cds--sm\\:col-end-6,:host(c4p-page-header-tabs) .cds--sm\\:col-end-6{grid-column-end:6}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-end-7,:host(c4p-page-header-content) .cds--sm\\:col-end-7,:host(c4p-page-header-tabs) .cds--sm\\:col-end-7{grid-column-end:7}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-end-8,:host(c4p-page-header-content) .cds--sm\\:col-end-8,:host(c4p-page-header-tabs) .cds--sm\\:col-end-8{grid-column-end:8}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-end-9,:host(c4p-page-header-content) .cds--sm\\:col-end-9,:host(c4p-page-header-tabs) .cds--sm\\:col-end-9{grid-column-end:9}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-end-10,:host(c4p-page-header-content) .cds--sm\\:col-end-10,:host(c4p-page-header-tabs) .cds--sm\\:col-end-10{grid-column-end:10}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-end-11,:host(c4p-page-header-content) .cds--sm\\:col-end-11,:host(c4p-page-header-tabs) .cds--sm\\:col-end-11{grid-column-end:11}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-end-12,:host(c4p-page-header-content) .cds--sm\\:col-end-12,:host(c4p-page-header-tabs) .cds--sm\\:col-end-12{grid-column-end:12}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-end-13,:host(c4p-page-header-content) .cds--sm\\:col-end-13,:host(c4p-page-header-tabs) .cds--sm\\:col-end-13{grid-column-end:13}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-end-14,:host(c4p-page-header-content) .cds--sm\\:col-end-14,:host(c4p-page-header-tabs) .cds--sm\\:col-end-14{grid-column-end:14}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-end-15,:host(c4p-page-header-content) .cds--sm\\:col-end-15,:host(c4p-page-header-tabs) .cds--sm\\:col-end-15{grid-column-end:15}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-end-16,:host(c4p-page-header-content) .cds--sm\\:col-end-16,:host(c4p-page-header-tabs) .cds--sm\\:col-end-16{grid-column-end:16}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-end-17,:host(c4p-page-header-content) .cds--sm\\:col-end-17,:host(c4p-page-header-tabs) .cds--sm\\:col-end-17{grid-column-end:17}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-start-auto,:host(c4p-page-header-content) .cds--sm\\:col-start-auto,:host(c4p-page-header-tabs) .cds--sm\\:col-start-auto{grid-column-start:auto}:host(c4p-page-header-breadcrumb) .cds--sm\\:col-end-auto,:host(c4p-page-header-content) .cds--sm\\:col-end-auto,:host(c4p-page-header-tabs) .cds--sm\\:col-end-auto{grid-column-end:auto}@media (min-width:42rem){:host(c4p-page-header-breadcrumb) .cds--md\\:col-start-1,:host(c4p-page-header-content) .cds--md\\:col-start-1,:host(c4p-page-header-tabs) .cds--md\\:col-start-1{grid-column-start:1}:host(c4p-page-header-breadcrumb) .cds--md\\:col-start-2,:host(c4p-page-header-content) .cds--md\\:col-start-2,:host(c4p-page-header-tabs) .cds--md\\:col-start-2{grid-column-start:2}:host(c4p-page-header-breadcrumb) .cds--md\\:col-start-3,:host(c4p-page-header-content) .cds--md\\:col-start-3,:host(c4p-page-header-tabs) .cds--md\\:col-start-3{grid-column-start:3}:host(c4p-page-header-breadcrumb) .cds--md\\:col-start-4,:host(c4p-page-header-content) .cds--md\\:col-start-4,:host(c4p-page-header-tabs) .cds--md\\:col-start-4{grid-column-start:4}:host(c4p-page-header-breadcrumb) .cds--md\\:col-start-5,:host(c4p-page-header-content) .cds--md\\:col-start-5,:host(c4p-page-header-tabs) .cds--md\\:col-start-5{grid-column-start:5}:host(c4p-page-header-breadcrumb) .cds--md\\:col-start-6,:host(c4p-page-header-content) .cds--md\\:col-start-6,:host(c4p-page-header-tabs) .cds--md\\:col-start-6{grid-column-start:6}:host(c4p-page-header-breadcrumb) .cds--md\\:col-start-7,:host(c4p-page-header-content) .cds--md\\:col-start-7,:host(c4p-page-header-tabs) .cds--md\\:col-start-7{grid-column-start:7}:host(c4p-page-header-breadcrumb) .cds--md\\:col-start-8,:host(c4p-page-header-content) .cds--md\\:col-start-8,:host(c4p-page-header-tabs) .cds--md\\:col-start-8{grid-column-start:8}:host(c4p-page-header-breadcrumb) .cds--md\\:col-start-9,:host(c4p-page-header-content) .cds--md\\:col-start-9,:host(c4p-page-header-tabs) .cds--md\\:col-start-9{grid-column-start:9}:host(c4p-page-header-breadcrumb) .cds--md\\:col-start-10,:host(c4p-page-header-content) .cds--md\\:col-start-10,:host(c4p-page-header-tabs) .cds--md\\:col-start-10{grid-column-start:10}:host(c4p-page-header-breadcrumb) .cds--md\\:col-start-11,:host(c4p-page-header-content) .cds--md\\:col-start-11,:host(c4p-page-header-tabs) .cds--md\\:col-start-11{grid-column-start:11}:host(c4p-page-header-breadcrumb) .cds--md\\:col-start-12,:host(c4p-page-header-content) .cds--md\\:col-start-12,:host(c4p-page-header-tabs) .cds--md\\:col-start-12{grid-column-start:12}:host(c4p-page-header-breadcrumb) .cds--md\\:col-start-13,:host(c4p-page-header-content) .cds--md\\:col-start-13,:host(c4p-page-header-tabs) .cds--md\\:col-start-13{grid-column-start:13}:host(c4p-page-header-breadcrumb) .cds--md\\:col-start-14,:host(c4p-page-header-content) .cds--md\\:col-start-14,:host(c4p-page-header-tabs) .cds--md\\:col-start-14{grid-column-start:14}:host(c4p-page-header-breadcrumb) .cds--md\\:col-start-15,:host(c4p-page-header-content) .cds--md\\:col-start-15,:host(c4p-page-header-tabs) .cds--md\\:col-start-15{grid-column-start:15}:host(c4p-page-header-breadcrumb) .cds--md\\:col-start-16,:host(c4p-page-header-content) .cds--md\\:col-start-16,:host(c4p-page-header-tabs) .cds--md\\:col-start-16{grid-column-start:16}:host(c4p-page-header-breadcrumb) .cds--md\\:col-end-2,:host(c4p-page-header-content) .cds--md\\:col-end-2,:host(c4p-page-header-tabs) .cds--md\\:col-end-2{grid-column-end:2}:host(c4p-page-header-breadcrumb) .cds--md\\:col-end-3,:host(c4p-page-header-content) .cds--md\\:col-end-3,:host(c4p-page-header-tabs) .cds--md\\:col-end-3{grid-column-end:3}:host(c4p-page-header-breadcrumb) .cds--md\\:col-end-4,:host(c4p-page-header-content) .cds--md\\:col-end-4,:host(c4p-page-header-tabs) .cds--md\\:col-end-4{grid-column-end:4}:host(c4p-page-header-breadcrumb) .cds--md\\:col-end-5,:host(c4p-page-header-content) .cds--md\\:col-end-5,:host(c4p-page-header-tabs) .cds--md\\:col-end-5{grid-column-end:5}:host(c4p-page-header-breadcrumb) .cds--md\\:col-end-6,:host(c4p-page-header-content) .cds--md\\:col-end-6,:host(c4p-page-header-tabs) .cds--md\\:col-end-6{grid-column-end:6}:host(c4p-page-header-breadcrumb) .cds--md\\:col-end-7,:host(c4p-page-header-content) .cds--md\\:col-end-7,:host(c4p-page-header-tabs) .cds--md\\:col-end-7{grid-column-end:7}:host(c4p-page-header-breadcrumb) .cds--md\\:col-end-8,:host(c4p-page-header-content) .cds--md\\:col-end-8,:host(c4p-page-header-tabs) .cds--md\\:col-end-8{grid-column-end:8}:host(c4p-page-header-breadcrumb) .cds--md\\:col-end-9,:host(c4p-page-header-content) .cds--md\\:col-end-9,:host(c4p-page-header-tabs) .cds--md\\:col-end-9{grid-column-end:9}:host(c4p-page-header-breadcrumb) .cds--md\\:col-end-10,:host(c4p-page-header-content) .cds--md\\:col-end-10,:host(c4p-page-header-tabs) .cds--md\\:col-end-10{grid-column-end:10}:host(c4p-page-header-breadcrumb) .cds--md\\:col-end-11,:host(c4p-page-header-content) .cds--md\\:col-end-11,:host(c4p-page-header-tabs) .cds--md\\:col-end-11{grid-column-end:11}:host(c4p-page-header-breadcrumb) .cds--md\\:col-end-12,:host(c4p-page-header-content) .cds--md\\:col-end-12,:host(c4p-page-header-tabs) .cds--md\\:col-end-12{grid-column-end:12}:host(c4p-page-header-breadcrumb) .cds--md\\:col-end-13,:host(c4p-page-header-content) .cds--md\\:col-end-13,:host(c4p-page-header-tabs) .cds--md\\:col-end-13{grid-column-end:13}:host(c4p-page-header-breadcrumb) .cds--md\\:col-end-14,:host(c4p-page-header-content) .cds--md\\:col-end-14,:host(c4p-page-header-tabs) .cds--md\\:col-end-14{grid-column-end:14}:host(c4p-page-header-breadcrumb) .cds--md\\:col-end-15,:host(c4p-page-header-content) .cds--md\\:col-end-15,:host(c4p-page-header-tabs) .cds--md\\:col-end-15{grid-column-end:15}:host(c4p-page-header-breadcrumb) .cds--md\\:col-end-16,:host(c4p-page-header-content) .cds--md\\:col-end-16,:host(c4p-page-header-tabs) .cds--md\\:col-end-16{grid-column-end:16}:host(c4p-page-header-breadcrumb) .cds--md\\:col-end-17,:host(c4p-page-header-content) .cds--md\\:col-end-17,:host(c4p-page-header-tabs) .cds--md\\:col-end-17{grid-column-end:17}:host(c4p-page-header-breadcrumb) .cds--md\\:col-start-auto,:host(c4p-page-header-content) .cds--md\\:col-start-auto,:host(c4p-page-header-tabs) .cds--md\\:col-start-auto{grid-column-start:auto}:host(c4p-page-header-breadcrumb) .cds--md\\:col-end-auto,:host(c4p-page-header-content) .cds--md\\:col-end-auto,:host(c4p-page-header-tabs) .cds--md\\:col-end-auto{grid-column-end:auto}}@media (min-width:66rem){:host(c4p-page-header-breadcrumb) .cds--lg\\:col-start-1,:host(c4p-page-header-content) .cds--lg\\:col-start-1,:host(c4p-page-header-tabs) .cds--lg\\:col-start-1{grid-column-start:1}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-start-2,:host(c4p-page-header-content) .cds--lg\\:col-start-2,:host(c4p-page-header-tabs) .cds--lg\\:col-start-2{grid-column-start:2}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-start-3,:host(c4p-page-header-content) .cds--lg\\:col-start-3,:host(c4p-page-header-tabs) .cds--lg\\:col-start-3{grid-column-start:3}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-start-4,:host(c4p-page-header-content) .cds--lg\\:col-start-4,:host(c4p-page-header-tabs) .cds--lg\\:col-start-4{grid-column-start:4}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-start-5,:host(c4p-page-header-content) .cds--lg\\:col-start-5,:host(c4p-page-header-tabs) .cds--lg\\:col-start-5{grid-column-start:5}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-start-6,:host(c4p-page-header-content) .cds--lg\\:col-start-6,:host(c4p-page-header-tabs) .cds--lg\\:col-start-6{grid-column-start:6}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-start-7,:host(c4p-page-header-content) .cds--lg\\:col-start-7,:host(c4p-page-header-tabs) .cds--lg\\:col-start-7{grid-column-start:7}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-start-8,:host(c4p-page-header-content) .cds--lg\\:col-start-8,:host(c4p-page-header-tabs) .cds--lg\\:col-start-8{grid-column-start:8}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-start-9,:host(c4p-page-header-content) .cds--lg\\:col-start-9,:host(c4p-page-header-tabs) .cds--lg\\:col-start-9{grid-column-start:9}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-start-10,:host(c4p-page-header-content) .cds--lg\\:col-start-10,:host(c4p-page-header-tabs) .cds--lg\\:col-start-10{grid-column-start:10}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-start-11,:host(c4p-page-header-content) .cds--lg\\:col-start-11,:host(c4p-page-header-tabs) .cds--lg\\:col-start-11{grid-column-start:11}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-start-12,:host(c4p-page-header-content) .cds--lg\\:col-start-12,:host(c4p-page-header-tabs) .cds--lg\\:col-start-12{grid-column-start:12}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-start-13,:host(c4p-page-header-content) .cds--lg\\:col-start-13,:host(c4p-page-header-tabs) .cds--lg\\:col-start-13{grid-column-start:13}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-start-14,:host(c4p-page-header-content) .cds--lg\\:col-start-14,:host(c4p-page-header-tabs) .cds--lg\\:col-start-14{grid-column-start:14}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-start-15,:host(c4p-page-header-content) .cds--lg\\:col-start-15,:host(c4p-page-header-tabs) .cds--lg\\:col-start-15{grid-column-start:15}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-start-16,:host(c4p-page-header-content) .cds--lg\\:col-start-16,:host(c4p-page-header-tabs) .cds--lg\\:col-start-16{grid-column-start:16}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-end-2,:host(c4p-page-header-content) .cds--lg\\:col-end-2,:host(c4p-page-header-tabs) .cds--lg\\:col-end-2{grid-column-end:2}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-end-3,:host(c4p-page-header-content) .cds--lg\\:col-end-3,:host(c4p-page-header-tabs) .cds--lg\\:col-end-3{grid-column-end:3}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-end-4,:host(c4p-page-header-content) .cds--lg\\:col-end-4,:host(c4p-page-header-tabs) .cds--lg\\:col-end-4{grid-column-end:4}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-end-5,:host(c4p-page-header-content) .cds--lg\\:col-end-5,:host(c4p-page-header-tabs) .cds--lg\\:col-end-5{grid-column-end:5}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-end-6,:host(c4p-page-header-content) .cds--lg\\:col-end-6,:host(c4p-page-header-tabs) .cds--lg\\:col-end-6{grid-column-end:6}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-end-7,:host(c4p-page-header-content) .cds--lg\\:col-end-7,:host(c4p-page-header-tabs) .cds--lg\\:col-end-7{grid-column-end:7}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-end-8,:host(c4p-page-header-content) .cds--lg\\:col-end-8,:host(c4p-page-header-tabs) .cds--lg\\:col-end-8{grid-column-end:8}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-end-9,:host(c4p-page-header-content) .cds--lg\\:col-end-9,:host(c4p-page-header-tabs) .cds--lg\\:col-end-9{grid-column-end:9}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-end-10,:host(c4p-page-header-content) .cds--lg\\:col-end-10,:host(c4p-page-header-tabs) .cds--lg\\:col-end-10{grid-column-end:10}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-end-11,:host(c4p-page-header-content) .cds--lg\\:col-end-11,:host(c4p-page-header-tabs) .cds--lg\\:col-end-11{grid-column-end:11}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-end-12,:host(c4p-page-header-content) .cds--lg\\:col-end-12,:host(c4p-page-header-tabs) .cds--lg\\:col-end-12{grid-column-end:12}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-end-13,:host(c4p-page-header-content) .cds--lg\\:col-end-13,:host(c4p-page-header-tabs) .cds--lg\\:col-end-13{grid-column-end:13}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-end-14,:host(c4p-page-header-content) .cds--lg\\:col-end-14,:host(c4p-page-header-tabs) .cds--lg\\:col-end-14{grid-column-end:14}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-end-15,:host(c4p-page-header-content) .cds--lg\\:col-end-15,:host(c4p-page-header-tabs) .cds--lg\\:col-end-15{grid-column-end:15}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-end-16,:host(c4p-page-header-content) .cds--lg\\:col-end-16,:host(c4p-page-header-tabs) .cds--lg\\:col-end-16{grid-column-end:16}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-end-17,:host(c4p-page-header-content) .cds--lg\\:col-end-17,:host(c4p-page-header-tabs) .cds--lg\\:col-end-17{grid-column-end:17}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-start-auto,:host(c4p-page-header-content) .cds--lg\\:col-start-auto,:host(c4p-page-header-tabs) .cds--lg\\:col-start-auto{grid-column-start:auto}:host(c4p-page-header-breadcrumb) .cds--lg\\:col-end-auto,:host(c4p-page-header-content) .cds--lg\\:col-end-auto,:host(c4p-page-header-tabs) .cds--lg\\:col-end-auto{grid-column-end:auto}}@media (min-width:82rem){:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-start-1,:host(c4p-page-header-content) .cds--xlg\\:col-start-1,:host(c4p-page-header-tabs) .cds--xlg\\:col-start-1{grid-column-start:1}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-start-2,:host(c4p-page-header-content) .cds--xlg\\:col-start-2,:host(c4p-page-header-tabs) .cds--xlg\\:col-start-2{grid-column-start:2}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-start-3,:host(c4p-page-header-content) .cds--xlg\\:col-start-3,:host(c4p-page-header-tabs) .cds--xlg\\:col-start-3{grid-column-start:3}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-start-4,:host(c4p-page-header-content) .cds--xlg\\:col-start-4,:host(c4p-page-header-tabs) .cds--xlg\\:col-start-4{grid-column-start:4}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-start-5,:host(c4p-page-header-content) .cds--xlg\\:col-start-5,:host(c4p-page-header-tabs) .cds--xlg\\:col-start-5{grid-column-start:5}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-start-6,:host(c4p-page-header-content) .cds--xlg\\:col-start-6,:host(c4p-page-header-tabs) .cds--xlg\\:col-start-6{grid-column-start:6}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-start-7,:host(c4p-page-header-content) .cds--xlg\\:col-start-7,:host(c4p-page-header-tabs) .cds--xlg\\:col-start-7{grid-column-start:7}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-start-8,:host(c4p-page-header-content) .cds--xlg\\:col-start-8,:host(c4p-page-header-tabs) .cds--xlg\\:col-start-8{grid-column-start:8}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-start-9,:host(c4p-page-header-content) .cds--xlg\\:col-start-9,:host(c4p-page-header-tabs) .cds--xlg\\:col-start-9{grid-column-start:9}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-start-10,:host(c4p-page-header-content) .cds--xlg\\:col-start-10,:host(c4p-page-header-tabs) .cds--xlg\\:col-start-10{grid-column-start:10}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-start-11,:host(c4p-page-header-content) .cds--xlg\\:col-start-11,:host(c4p-page-header-tabs) .cds--xlg\\:col-start-11{grid-column-start:11}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-start-12,:host(c4p-page-header-content) .cds--xlg\\:col-start-12,:host(c4p-page-header-tabs) .cds--xlg\\:col-start-12{grid-column-start:12}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-start-13,:host(c4p-page-header-content) .cds--xlg\\:col-start-13,:host(c4p-page-header-tabs) .cds--xlg\\:col-start-13{grid-column-start:13}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-start-14,:host(c4p-page-header-content) .cds--xlg\\:col-start-14,:host(c4p-page-header-tabs) .cds--xlg\\:col-start-14{grid-column-start:14}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-start-15,:host(c4p-page-header-content) .cds--xlg\\:col-start-15,:host(c4p-page-header-tabs) .cds--xlg\\:col-start-15{grid-column-start:15}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-start-16,:host(c4p-page-header-content) .cds--xlg\\:col-start-16,:host(c4p-page-header-tabs) .cds--xlg\\:col-start-16{grid-column-start:16}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-end-2,:host(c4p-page-header-content) .cds--xlg\\:col-end-2,:host(c4p-page-header-tabs) .cds--xlg\\:col-end-2{grid-column-end:2}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-end-3,:host(c4p-page-header-content) .cds--xlg\\:col-end-3,:host(c4p-page-header-tabs) .cds--xlg\\:col-end-3{grid-column-end:3}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-end-4,:host(c4p-page-header-content) .cds--xlg\\:col-end-4,:host(c4p-page-header-tabs) .cds--xlg\\:col-end-4{grid-column-end:4}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-end-5,:host(c4p-page-header-content) .cds--xlg\\:col-end-5,:host(c4p-page-header-tabs) .cds--xlg\\:col-end-5{grid-column-end:5}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-end-6,:host(c4p-page-header-content) .cds--xlg\\:col-end-6,:host(c4p-page-header-tabs) .cds--xlg\\:col-end-6{grid-column-end:6}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-end-7,:host(c4p-page-header-content) .cds--xlg\\:col-end-7,:host(c4p-page-header-tabs) .cds--xlg\\:col-end-7{grid-column-end:7}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-end-8,:host(c4p-page-header-content) .cds--xlg\\:col-end-8,:host(c4p-page-header-tabs) .cds--xlg\\:col-end-8{grid-column-end:8}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-end-9,:host(c4p-page-header-content) .cds--xlg\\:col-end-9,:host(c4p-page-header-tabs) .cds--xlg\\:col-end-9{grid-column-end:9}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-end-10,:host(c4p-page-header-content) .cds--xlg\\:col-end-10,:host(c4p-page-header-tabs) .cds--xlg\\:col-end-10{grid-column-end:10}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-end-11,:host(c4p-page-header-content) .cds--xlg\\:col-end-11,:host(c4p-page-header-tabs) .cds--xlg\\:col-end-11{grid-column-end:11}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-end-12,:host(c4p-page-header-content) .cds--xlg\\:col-end-12,:host(c4p-page-header-tabs) .cds--xlg\\:col-end-12{grid-column-end:12}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-end-13,:host(c4p-page-header-content) .cds--xlg\\:col-end-13,:host(c4p-page-header-tabs) .cds--xlg\\:col-end-13{grid-column-end:13}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-end-14,:host(c4p-page-header-content) .cds--xlg\\:col-end-14,:host(c4p-page-header-tabs) .cds--xlg\\:col-end-14{grid-column-end:14}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-end-15,:host(c4p-page-header-content) .cds--xlg\\:col-end-15,:host(c4p-page-header-tabs) .cds--xlg\\:col-end-15{grid-column-end:15}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-end-16,:host(c4p-page-header-content) .cds--xlg\\:col-end-16,:host(c4p-page-header-tabs) .cds--xlg\\:col-end-16{grid-column-end:16}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-end-17,:host(c4p-page-header-content) .cds--xlg\\:col-end-17,:host(c4p-page-header-tabs) .cds--xlg\\:col-end-17{grid-column-end:17}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-start-auto,:host(c4p-page-header-content) .cds--xlg\\:col-start-auto,:host(c4p-page-header-tabs) .cds--xlg\\:col-start-auto{grid-column-start:auto}:host(c4p-page-header-breadcrumb) .cds--xlg\\:col-end-auto,:host(c4p-page-header-content) .cds--xlg\\:col-end-auto,:host(c4p-page-header-tabs) .cds--xlg\\:col-end-auto{grid-column-end:auto}}@media (min-width:99rem){:host(c4p-page-header-breadcrumb) .cds--max\\:col-start-1,:host(c4p-page-header-content) .cds--max\\:col-start-1,:host(c4p-page-header-tabs) .cds--max\\:col-start-1{grid-column-start:1}:host(c4p-page-header-breadcrumb) .cds--max\\:col-start-2,:host(c4p-page-header-content) .cds--max\\:col-start-2,:host(c4p-page-header-tabs) .cds--max\\:col-start-2{grid-column-start:2}:host(c4p-page-header-breadcrumb) .cds--max\\:col-start-3,:host(c4p-page-header-content) .cds--max\\:col-start-3,:host(c4p-page-header-tabs) .cds--max\\:col-start-3{grid-column-start:3}:host(c4p-page-header-breadcrumb) .cds--max\\:col-start-4,:host(c4p-page-header-content) .cds--max\\:col-start-4,:host(c4p-page-header-tabs) .cds--max\\:col-start-4{grid-column-start:4}:host(c4p-page-header-breadcrumb) .cds--max\\:col-start-5,:host(c4p-page-header-content) .cds--max\\:col-start-5,:host(c4p-page-header-tabs) .cds--max\\:col-start-5{grid-column-start:5}:host(c4p-page-header-breadcrumb) .cds--max\\:col-start-6,:host(c4p-page-header-content) .cds--max\\:col-start-6,:host(c4p-page-header-tabs) .cds--max\\:col-start-6{grid-column-start:6}:host(c4p-page-header-breadcrumb) .cds--max\\:col-start-7,:host(c4p-page-header-content) .cds--max\\:col-start-7,:host(c4p-page-header-tabs) .cds--max\\:col-start-7{grid-column-start:7}:host(c4p-page-header-breadcrumb) .cds--max\\:col-start-8,:host(c4p-page-header-content) .cds--max\\:col-start-8,:host(c4p-page-header-tabs) .cds--max\\:col-start-8{grid-column-start:8}:host(c4p-page-header-breadcrumb) .cds--max\\:col-start-9,:host(c4p-page-header-content) .cds--max\\:col-start-9,:host(c4p-page-header-tabs) .cds--max\\:col-start-9{grid-column-start:9}:host(c4p-page-header-breadcrumb) .cds--max\\:col-start-10,:host(c4p-page-header-content) .cds--max\\:col-start-10,:host(c4p-page-header-tabs) .cds--max\\:col-start-10{grid-column-start:10}:host(c4p-page-header-breadcrumb) .cds--max\\:col-start-11,:host(c4p-page-header-content) .cds--max\\:col-start-11,:host(c4p-page-header-tabs) .cds--max\\:col-start-11{grid-column-start:11}:host(c4p-page-header-breadcrumb) .cds--max\\:col-start-12,:host(c4p-page-header-content) .cds--max\\:col-start-12,:host(c4p-page-header-tabs) .cds--max\\:col-start-12{grid-column-start:12}:host(c4p-page-header-breadcrumb) .cds--max\\:col-start-13,:host(c4p-page-header-content) .cds--max\\:col-start-13,:host(c4p-page-header-tabs) .cds--max\\:col-start-13{grid-column-start:13}:host(c4p-page-header-breadcrumb) .cds--max\\:col-start-14,:host(c4p-page-header-content) .cds--max\\:col-start-14,:host(c4p-page-header-tabs) .cds--max\\:col-start-14{grid-column-start:14}:host(c4p-page-header-breadcrumb) .cds--max\\:col-start-15,:host(c4p-page-header-content) .cds--max\\:col-start-15,:host(c4p-page-header-tabs) .cds--max\\:col-start-15{grid-column-start:15}:host(c4p-page-header-breadcrumb) .cds--max\\:col-start-16,:host(c4p-page-header-content) .cds--max\\:col-start-16,:host(c4p-page-header-tabs) .cds--max\\:col-start-16{grid-column-start:16}:host(c4p-page-header-breadcrumb) .cds--max\\:col-end-2,:host(c4p-page-header-content) .cds--max\\:col-end-2,:host(c4p-page-header-tabs) .cds--max\\:col-end-2{grid-column-end:2}:host(c4p-page-header-breadcrumb) .cds--max\\:col-end-3,:host(c4p-page-header-content) .cds--max\\:col-end-3,:host(c4p-page-header-tabs) .cds--max\\:col-end-3{grid-column-end:3}:host(c4p-page-header-breadcrumb) .cds--max\\:col-end-4,:host(c4p-page-header-content) .cds--max\\:col-end-4,:host(c4p-page-header-tabs) .cds--max\\:col-end-4{grid-column-end:4}:host(c4p-page-header-breadcrumb) .cds--max\\:col-end-5,:host(c4p-page-header-content) .cds--max\\:col-end-5,:host(c4p-page-header-tabs) .cds--max\\:col-end-5{grid-column-end:5}:host(c4p-page-header-breadcrumb) .cds--max\\:col-end-6,:host(c4p-page-header-content) .cds--max\\:col-end-6,:host(c4p-page-header-tabs) .cds--max\\:col-end-6{grid-column-end:6}:host(c4p-page-header-breadcrumb) .cds--max\\:col-end-7,:host(c4p-page-header-content) .cds--max\\:col-end-7,:host(c4p-page-header-tabs) .cds--max\\:col-end-7{grid-column-end:7}:host(c4p-page-header-breadcrumb) .cds--max\\:col-end-8,:host(c4p-page-header-content) .cds--max\\:col-end-8,:host(c4p-page-header-tabs) .cds--max\\:col-end-8{grid-column-end:8}:host(c4p-page-header-breadcrumb) .cds--max\\:col-end-9,:host(c4p-page-header-content) .cds--max\\:col-end-9,:host(c4p-page-header-tabs) .cds--max\\:col-end-9{grid-column-end:9}:host(c4p-page-header-breadcrumb) .cds--max\\:col-end-10,:host(c4p-page-header-content) .cds--max\\:col-end-10,:host(c4p-page-header-tabs) .cds--max\\:col-end-10{grid-column-end:10}:host(c4p-page-header-breadcrumb) .cds--max\\:col-end-11,:host(c4p-page-header-content) .cds--max\\:col-end-11,:host(c4p-page-header-tabs) .cds--max\\:col-end-11{grid-column-end:11}:host(c4p-page-header-breadcrumb) .cds--max\\:col-end-12,:host(c4p-page-header-content) .cds--max\\:col-end-12,:host(c4p-page-header-tabs) .cds--max\\:col-end-12{grid-column-end:12}:host(c4p-page-header-breadcrumb) .cds--max\\:col-end-13,:host(c4p-page-header-content) .cds--max\\:col-end-13,:host(c4p-page-header-tabs) .cds--max\\:col-end-13{grid-column-end:13}:host(c4p-page-header-breadcrumb) .cds--max\\:col-end-14,:host(c4p-page-header-content) .cds--max\\:col-end-14,:host(c4p-page-header-tabs) .cds--max\\:col-end-14{grid-column-end:14}:host(c4p-page-header-breadcrumb) .cds--max\\:col-end-15,:host(c4p-page-header-content) .cds--max\\:col-end-15,:host(c4p-page-header-tabs) .cds--max\\:col-end-15{grid-column-end:15}:host(c4p-page-header-breadcrumb) .cds--max\\:col-end-16,:host(c4p-page-header-content) .cds--max\\:col-end-16,:host(c4p-page-header-tabs) .cds--max\\:col-end-16{grid-column-end:16}:host(c4p-page-header-breadcrumb) .cds--max\\:col-end-17,:host(c4p-page-header-content) .cds--max\\:col-end-17,:host(c4p-page-header-tabs) .cds--max\\:col-end-17{grid-column-end:17}:host(c4p-page-header-breadcrumb) .cds--max\\:col-start-auto,:host(c4p-page-header-content) .cds--max\\:col-start-auto,:host(c4p-page-header-tabs) .cds--max\\:col-start-auto{grid-column-start:auto}:host(c4p-page-header-breadcrumb) .cds--max\\:col-end-auto,:host(c4p-page-header-content) .cds--max\\:col-end-auto,:host(c4p-page-header-tabs) .cds--max\\:col-end-auto{grid-column-end:auto}}:host(c4p-page-header-breadcrumb),:host(c4p-page-header-content),:host(c4p-page-header-tabs){display:block}:host(c4p-page-header-breadcrumb){background-color:var(--cds-layer-01,#f4f4f4);block-size:2.5rem;border-block-end:var(--cds-border-subtle);inset-block-start:var(--c4p-page-header-breadcrumb-top);position:sticky;z-index:1}:host(c4p-page-header-breadcrumb) ::slotted([slot=icon]){margin-inline-end:.5rem}:host(c4p-page-header-breadcrumb) .cds--subgrid{block-size:100%}:host(c4p-page-header-breadcrumb) .c4p--page-header__breadcrumb-container{align-items:center;block-size:100%;display:inline-flex;inline-size:100%;justify-content:space-between}:host(c4p-page-header-breadcrumb) .c4p--page-header__breadcrumb-wrapper{display:inline-flex;inline-size:100%}:host(c4p-page-header-breadcrumb) .c4p--page-header__breadcrumb__actions{display:inline-flex}:host(c4p-page-header-breadcrumb:not([content-actions-flush])) ::slotted([slot=content-actions]){margin-inline-end:.75rem!important}:host(c4p-page-header-breadcrumb[page-actions-flush]) .cds--css-grid{margin-inline-end:0;padding-inline-end:0}:host(c4p-page-header-breadcrumb[page-actions-flush]) .cds--css-grid-column{margin-inline-end:0}:host(c4p-page-header-breadcrumb[border=true]){border-block-end:1px solid var(--cds-border-subtle-01,#c6c6c6)}:host(c4p-page-header-content){padding:1.5rem 0}:host(c4p-page-header-content) .c4p--page-header__content__title{display:-webkit-box;font-size:var(--cds-productive-heading-04-font-size,1.75rem);font-weight:var(--cds-productive-heading-04-font-weight,400);letter-spacing:var(--cds-productive-heading-04-letter-spacing,0);line-height:var(--cds-productive-heading-04-line-height,1.28572);margin:0;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2;max-inline-size:40rem;text-overflow:ellipsis;white-space:normal}@media (max-width:41.98rem){:host(c4p-page-header-content) .c4p--page-header__content__title-wrapper{display:flex;flex-direction:column;grid-gap:1rem}}:host(c4p-page-header-content) .c4p--page-header__content__title-wrapper{display:grid;gap:1rem;grid-template-columns:auto minmax(auto,auto);margin-block-end:1rem;min-block-size:2.5rem}:host(c4p-page-header-content) .c4p--page-header__content__start{display:flex;flex-wrap:wrap;gap:1rem}:host(c4p-page-header-content) .c4p--page-header__content__page-actions{display:flex;justify-content:right;transition:opacity .24s cubic-bezier(.2,0,.38,.9)}:host(c4p-page-header-content) .c4p--page-header__content__page-actions.c4p--page-header__content__page-actions--clipped{opacity:0;visibility:hidden}@media (max-width:41.98rem){:host(c4p-page-header-content) .c4p--page-header__content__page-actions{justify-content:left;margin-block-start:0}}:host(c4p-page-header-content) .c4p--page-header__content__title-container{display:flex}:host(c4p-page-header-content) ::slotted([slot=icon]){margin-inline-end:1rem}:host(c4p-page-header-content) ::slotted([slot=contextual-actions]){display:flex}:host(c4p-page-header-content[contextual-actions]) .c4p--page-header__content__title{-webkit-line-clamp:1}:host(c4p-page-header-content-text){display:block;font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);margin-block-start:1rem;max-inline-size:40rem}:host(c4p-page-header-content-text) .c4p--page-header__content__subtitle{font-size:var(--cds-productive-heading-03-font-size,1.25rem);font-weight:var(--cds-productive-heading-03-font-weight,400);letter-spacing:var(--cds-productive-heading-03-letter-spacing,0);line-height:var(--cds-productive-heading-03-line-height,1.4);margin-block-end:.5rem;margin-block-start:0}:host(c4p-page-header-hero-image){align-items:center;block-size:100%;display:flex;justify-content:flex-end;overflow:hidden;position:relative}:host(c4p-page-header-hero-image):before{block-size:0;content:"";float:inline-start;inline-size:1px;margin-inline-start:-1px;padding-block-start:66.6666666667%}@media (min-width:66rem){:host(c4p-page-header-hero-image):before{padding-block-start:50%}}:host(c4p-page-header-hero-image):after{clear:both;content:"";display:table}:host(c4p-page-header-tabs) .cds--css-grid .cds--css-grid-column{margin:0}:host(c4p-page-header-tabs) .c4p--page-header__tab-bar--tablist{display:flex;flex-direction:row;inline-size:100%;justify-content:space-between}:host(c4p-page-header-tabs) ::slotted([slot=tags]){align-items:center;display:flex;inline-size:100%;justify-content:right;max-inline-size:500px}:host(c4p-page-header-tabs) ::slotted([slot=scroller]){inset-inline-end:0;position:absolute}:host(c4p-page-header-breadcrumb) .cds--css-grid,:host(c4p-page-header-content) .cds--css-grid,:host(c4p-page-header-tabs) .cds--css-grid{inline-size:auto}cds-definition-tooltip::part(definition-term){border:none}:host(c4p-page-header-tabs) ::slotted(cds-tabs){--tabs-overflow-button-background:$layer-01}@keyframes page-header-title-breadcrumb-animation{0%{opacity:0;transform:translateY(1rem)}5%{opacity:1;transform:translateY(0)}to{opacity:1;transform:translateY(0)}}@keyframes page-header-title-breadcrumb-animation-reduced-motion{0%{opacity:0}5%{opacity:1}to{opacity:1}}@supports not (animation-timeline:scroll()){:host(c4p-page-header-title-breadcrumb.c4p--page-header-title-breadcrumb-show__fallback){opacity:1;transform:translateY(0)}}@media (prefers-reduced-motion:reduce){:host(c4p-page-header-title-breadcrumb.c4p--page-header-title-breadcrumb-show__fallback){transform:translateY(0);transition:opacity .15s cubic-bezier(.2,0,.38,.9)}}:host(c4p-page-header-breadcrumb) .c4p--page-header__breadcrumb__content-actions-with-global-actions{opacity:0;visibility:hidden}:host(c4p-page-header-breadcrumb) .c4p--page-header__breadcrumb__content-actions-with-global-actions.c4p--page-header__breadcrumb__content-actions-with-global-actions--show{opacity:1;transform:translateY(0);transition:opacity .15s cubic-bezier(.2,0,.38,.9);visibility:visible}:host(c4p-page-header-title-breadcrumb){opacity:0;transform:translateY(1rem);transition:transform .15s cubic-bezier(.2,0,.38,.9),opacity .15s cubic-bezier(.2,0,.38,.9)}@supports not (animation-timeline:scroll()){@supports not (animation-timeline:scroll()){:host(c4p-page-header-title-breadcrumb.c4p--page-header-title-breadcrumb-show__with-content).c4p--page-header-title-breadcrumb-show__fallback{opacity:1;transform:translateY(0)}}@media (prefers-reduced-motion:reduce){:host(c4p-page-header-title-breadcrumb.c4p--page-header-title-breadcrumb-show__with-content).c4p--page-header-title-breadcrumb-show__fallback{transform:translateY(0);transition:opacity .15s cubic-bezier(.2,0,.38,.9)}}}@supports (animation-timeline:scroll()){:host(c4p-page-header-title-breadcrumb.c4p--page-header-title-breadcrumb-show__with-content){animation-direction:alternate;animation-duration:1ms;animation-name:page-header-title-breadcrumb-animation;animation-timeline:scroll(block nearest)}@media (prefers-reduced-motion:reduce){:host(c4p-page-header-title-breadcrumb.c4p--page-header-title-breadcrumb-show__with-content){animation-name:page-header-title-breadcrumb-animation-reduced-motion;transform:translateY(0)}}}:host(c4p-page-header-title-breadcrumb.c4p--page-header-title-breadcrumb-show__by-default){opacity:1;transform:translateY(0)}']);

// node_modules/@carbon/ibm-products-web-components/es/components/page-header/context.js
var pageHeaderContext = n2({
  headerOffset: 0,
  breadcrumbOffset: 0,
  fullyCollapsed: false,
  root: null,
  titleClipped: false
});

// node_modules/@carbon/ibm-products-web-components/es/components/page-header/utils.js
var getHeaderOffset = (el) => {
  const scrollableContainer = scrollableAncestor(el);
  const offsetMeasuringTop = el ? el.getBoundingClientRect().top : 0;
  if (scrollableContainer === document.scrollingElement) {
    return offsetMeasuringTop >= 0 ? offsetMeasuringTop : 0;
  } else {
    const scrollableContainerTop = scrollableContainer ? scrollableContainer.getBoundingClientRect().top : 0;
    const totalHeaderOffset = offsetMeasuringTop !== 0 ? offsetMeasuringTop - scrollableContainerTop : 0;
    return totalHeaderOffset >= 0 ? totalHeaderOffset : 0;
  }
};
var windowExists = typeof window !== `undefined`;
var scrollable = (target) => {
  const style = window.getComputedStyle(target);
  const tagName = target.tagName.toLowerCase();
  if (tagName === "body" || tagName === "html") {
    return /(auto|scroll)/.test(style.overflow);
  }
  return /(auto|scroll|hidden)/.test(style.overflow);
};
var scrollableAncestorInner = (target) => {
  if (target.parentNode && target.parentNode !== document) {
    if (scrollable(target.parentNode)) {
      return target.parentNode;
    } else {
      return scrollableAncestorInner(target.parentNode);
    }
  } else {
    return document.scrollingElement;
  }
};
var scrollableAncestor = (target) => {
  if (!windowExists || !target) {
    return null;
  }
  const style = window.getComputedStyle(target);
  if (!target || !style || style.position === "fixed") {
    return document.scrollingElement;
  }
  return scrollableAncestorInner(target);
};

// node_modules/@carbon/ibm-products-web-components/es/components/page-header/page-header-content.js
var CDSPageHeaderContent = class CDSPageHeaderContent2 extends i2 {
  constructor() {
    super(...arguments);
    this._hasContextualActions = false;
    this.title = "";
    this._hasEllipsisApplied = false;
    this.withinGrid = false;
  }
  /**
   * Handles `slotchange` event.
   */
  _handleSlotChange({ target }) {
    this._hasContextualActions = Boolean(target.assignedNodes());
    if (this._hasContextualActions) {
      this.setAttribute("contextual-actions", "true");
    } else {
      this.removeAttribute("contextual-actions");
    }
    this.requestUpdate?.();
  }
  updated() {
    var _a;
    const textContainer = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`.${prefix}--page-header__content__title`);
    if (!textContainer || this._hasEllipsisApplied === true) {
      return;
    }
    this._hasEllipsisApplied = textContainer.scrollHeight > textContainer.clientHeight;
  }
  render() {
    const { title, withinGrid, _hasEllipsisApplied: hasEllipsisApplied, _handleSlotChange: handleSlotChange, context } = this;
    const { contentActionsClipped } = context !== null && context !== void 0 ? context : {};
    const gridClasses = e({
      [`${carbonPrefix}--css-grid`]: !withinGrid,
      [`${carbonPrefix}--subgrid ${carbonPrefix}--subgrid--wide`]: withinGrid
    });
    const contentActionClasses = e({
      [`${prefix}--page-header__content__page-actions`]: true,
      [`${prefix}--page-header__content__page-actions--clipped`]: contentActionsClipped
    });
    return b` <div class="${gridClasses}">
      <div
        class="${carbonPrefix}--sm:col-span-4 ${carbonPrefix}--md:col-span-8 ${carbonPrefix}--lg:col-span-16 ${carbonPrefix}--css-grid-column"
      >
        <div class="${prefix}--page-header__content__title-wrapper">
          <div class="${prefix}--page-header__content__start">
            <div class="${prefix}--page-header__content__title-container">
              <slot name="icon"></slot>
              ${hasEllipsisApplied ? b`
                    <cds-definition-tooltip>
                      <span slot="definition">${title}</span>
                      <h4 class="${prefix}--page-header__content__title">
                        ${title}
                      </h4>
                    </cds-definition-tooltip>
                  ` : b`
                    <h4 class="${prefix}--page-header__content__title">
                      ${title}
                    </h4>
                  `}
            </div>
            <slot
              name="contextual-actions"
              @slotchange=${handleSlotChange}
            ></slot>
          </div>
          <div class="${contentActionClasses}">
            <slot name="page-actions"></slot>
          </div>
        </div>
        <slot></slot>
      </div>
    </div>`;
  }
};
CDSPageHeaderContent.styles = styles;
__decorate([
  n()
], CDSPageHeaderContent.prototype, "title", void 0);
__decorate([
  r()
], CDSPageHeaderContent.prototype, "_hasEllipsisApplied", void 0);
__decorate([
  n({ attribute: "within-grid", type: Boolean })
], CDSPageHeaderContent.prototype, "withinGrid", void 0);
__decorate([
  c({ context: pageHeaderContext, subscribe: true })
], CDSPageHeaderContent.prototype, "context", void 0);
CDSPageHeaderContent = __decorate([
  carbonElement(`${prefix}-page-header-content`)
], CDSPageHeaderContent);
var CDSPageHeaderContent$1 = CDSPageHeaderContent;

// node_modules/@carbon/ibm-products-web-components/es/components/page-header/page-header.js
var CDSPageHeader = class CDSPageHeader2 extends i2 {
  constructor() {
    super(...arguments);
    this.context = {};
  }
  connectedCallback() {
    super.connectedCallback();
    const contentElement = this.querySelector(`${prefix}-page-header-content`);
    this.resizeObserver = new ResizeObserver((entries) => {
      var _a, _b;
      const pageHeaderElement = entries[0];
      const contentEl = pageHeaderElement.target.querySelector(`${prefix}-page-header-content`);
      const contentHeight = contentEl instanceof CDSPageHeaderContent$1 ? contentEl.scrollHeight : 0;
      const padding = contentEl instanceof CDSPageHeaderContent$1 ? parseFloat((_a = getComputedStyle(contentEl)) === null || _a === void 0 ? void 0 : _a.paddingBlockStart) + parseFloat((_b = getComputedStyle(contentEl)) === null || _b === void 0 ? void 0 : _b.paddingBlockEnd) : 0;
      const totalContentHeight = contentHeight + padding;
      const headerOffset = getHeaderOffset(this);
      const contentPadding = contentEl instanceof CDSPageHeaderContent$1 ? 48 : 0;
      this.style.setProperty(`--${prefix}-page-header-header-top`, `${(Math.round(totalContentHeight - contentPadding) - headerOffset) * -1}px`);
      this.style.setProperty(`--${prefix}-page-header-breadcrumb-top`, `${headerOffset}px`);
      this.context = Object.assign(Object.assign({}, this.context), { breadcrumbOffset: headerOffset, headerOffset: (Math.round(totalContentHeight) - headerOffset) * -1, root: this, withContent: !!contentEl });
    });
    this.resizeObserver.observe(this);
    const predefinedContentPadding = 24;
    const totalHeaderOffset = getHeaderOffset(this);
    const contentObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          this.context = Object.assign(Object.assign({}, this.context), { fullyCollapsed: true });
        } else {
          this.context = Object.assign(Object.assign({}, this.context), { fullyCollapsed: false });
        }
      });
    }, {
      root: null,
      rootMargin: `${(predefinedContentPadding + totalHeaderOffset + 40) * -1}px 0px 0px 0px`,
      threshold: 0.1
    });
    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          this.context = Object.assign(Object.assign({}, this.context), { titleClipped: true });
        } else {
          this.context = Object.assign(Object.assign({}, this.context), { titleClipped: false });
        }
      });
    }, {
      root: null,
      rootMargin: `${(predefinedContentPadding + totalHeaderOffset + 40) * -1}px 0px 0px 0px`,
      threshold: 0.95
    });
    const actionsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          this.context = Object.assign(Object.assign({}, this.context), { contentActionsClipped: true });
        } else {
          this.context = Object.assign(Object.assign({}, this.context), { contentActionsClipped: false });
        }
      });
    }, {
      root: null,
      // 48 -> breadcrumb bar
      // 18 -> content padding
      rootMargin: `${(totalHeaderOffset + 48 + 18) * -1}px 0px 0px 0px`,
      threshold: 0.95
    });
    if (contentElement) {
      contentObserver.observe(contentElement);
      titleObserver.observe(contentElement);
      actionsObserver.observe(contentElement);
    }
  }
  disconnectedCallback() {
    var _a;
    (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    super.disconnectedCallback();
  }
  render() {
    return b`<slot></slot>`;
  }
};
CDSPageHeader.styles = styles;
__decorate([
  r(),
  e2({ context: pageHeaderContext })
], CDSPageHeader.prototype, "context", void 0);
CDSPageHeader = __decorate([
  carbonElement(`${prefix}-page-header`)
], CDSPageHeader);

// node_modules/@carbon/ibm-products-web-components/es/components/page-header/page-header-breadcrumb.js
var CDSPageHeaderBreadcrumb = class CDSPageHeaderBreadcrumb2 extends i2 {
  constructor() {
    super(...arguments);
    this.border = true;
    this.withinGrid = false;
    this.pageActionsFlush = false;
    this.contentActionsFlush = false;
  }
  render() {
    const { withinGrid, context } = this;
    const { contentActionsClipped } = context !== null && context !== void 0 ? context : {};
    const gridClasses = e({
      [`${carbonPrefix}--css-grid`]: !withinGrid,
      [`${carbonPrefix}--subgrid ${carbonPrefix}--subgrid--wide`]: withinGrid
    });
    const contentActionClasses = e({
      [`${prefix}--page-header__breadcrumb__content-actions-with-global-actions`]: true,
      [`${prefix}--page-header__breadcrumb__content-actions-with-global-actions--show`]: contentActionsClipped
    });
    return b`
      <div class="${gridClasses}">
        <div
          class="${carbonPrefix}--sm:col-span-4 ${carbonPrefix}--md:col-span-8 ${carbonPrefix}--lg:col-span-16 ${carbonPrefix}--css-grid-column"
        >
          <div class="${prefix}--page-header__breadcrumb-container">
            <div class="${prefix}--page-header__breadcrumb-wrapper">
              <slot name="icon"></slot>
              <slot></slot>
            </div>
            <div class="${prefix}--page-header__breadcrumb__actions">
              <div class="${contentActionClasses}">
                <slot name="content-actions"></slot>
              </div>
              <slot name="page-actions"></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
CDSPageHeaderBreadcrumb.styles = styles;
__decorate([
  n({ reflect: true })
], CDSPageHeaderBreadcrumb.prototype, "border", void 0);
__decorate([
  n({ attribute: "within-grid", type: Boolean })
], CDSPageHeaderBreadcrumb.prototype, "withinGrid", void 0);
__decorate([
  n({ attribute: "page-actions-flush", type: Boolean })
], CDSPageHeaderBreadcrumb.prototype, "pageActionsFlush", void 0);
__decorate([
  n({ attribute: "content-actions-flush", type: Boolean })
], CDSPageHeaderBreadcrumb.prototype, "contentActionsFlush", void 0);
__decorate([
  c({ context: pageHeaderContext, subscribe: true })
], CDSPageHeaderBreadcrumb.prototype, "context", void 0);
CDSPageHeaderBreadcrumb = __decorate([
  carbonElement(`${prefix}-page-header-breadcrumb`)
], CDSPageHeaderBreadcrumb);

// node_modules/@carbon/ibm-products-web-components/es/components/page-header/page-header-content-text.js
var CDSPageHeaderContentText = class CDSPageHeaderContentText2 extends i2 {
  constructor() {
    super(...arguments);
    this.subtitle = "";
  }
  render() {
    const { subtitle } = this;
    return b`
      ${subtitle && b`<h3 class="${prefix}--page-header__content__subtitle">
        ${subtitle}
      </h3>`}
      <slot></slot>
    `;
  }
};
CDSPageHeaderContentText.styles = styles;
__decorate([
  n()
], CDSPageHeaderContentText.prototype, "subtitle", void 0);
CDSPageHeaderContentText = __decorate([
  carbonElement(`${prefix}-page-header-content-text`)
], CDSPageHeaderContentText);

// node_modules/@carbon/ibm-products-web-components/es/components/page-header/page-header-hero-image.js
var CDSPageHeaderHeroImage = class CDSPageHeaderHeroImage2 extends i2 {
  render() {
    return b`<slot></slot> `;
  }
};
CDSPageHeaderHeroImage.styles = styles;
CDSPageHeaderHeroImage = __decorate([
  carbonElement(`${prefix}-page-header-hero-image`)
], CDSPageHeaderHeroImage);

// node_modules/@carbon/ibm-products-web-components/es/components/page-header/page-header-tabs.js
var CDSPageHeaderTabs = class CDSPageHeaderTabs2 extends i2 {
  render() {
    return b` <div class="${carbonPrefix}--css-grid" condensed="">
      <div
        class="${carbonPrefix}--sm:col-span-4 ${carbonPrefix}--md:col-span-8 ${carbonPrefix}--lg:col-span-16 ${carbonPrefix}--css-grid-column"
      >
        <div class="${prefix}--page-header__tab-bar--tablist">
          <slot></slot>
          <slot name="tags"></slot>
        </div>
      </div>
      <slot name="scroller"></slot>
    </div>`;
  }
};
CDSPageHeaderTabs.styles = styles;
CDSPageHeaderTabs = __decorate([
  carbonElement(`${prefix}-page-header-tabs`)
], CDSPageHeaderTabs);

// node_modules/@carbon/ibm-products-web-components/es/components/page-header/page-header-title-breadcrumb.js
var CDSPageHeaderTitleBreadcrumb = class CDSPageHeaderTitleBreadcrumb2 extends CDSBreadcrumbItem$1 {
  constructor() {
    super();
    new s(this, {
      context: pageHeaderContext,
      subscribe: true,
      callback: (state) => {
        if (state.titleClipped) {
          this.classList.add(`${prefix}--page-header-title-breadcrumb-show__fallback`);
        } else {
          this.classList.remove(`${prefix}--page-header-title-breadcrumb-show__fallback`);
        }
        if (state.withContent) {
          this.classList.add(`${prefix}--page-header-title-breadcrumb-show__with-content`);
          this.classList.remove(`${prefix}--page-header-title-breadcrumb-show__by-default`);
        } else {
          this.classList.remove(`${prefix}--page-header-title-breadcrumb-show__with-content`);
          this.classList.add(`${prefix}--page-header-title-breadcrumb-show__by-default`);
        }
      }
    });
  }
  render() {
    return b`
      <cds-breadcrumb-item class="${prefix}--page-header-title-breadcrumb">
        <slot></slot>
      </cds-breadcrumb-item>
    `;
  }
};
CDSPageHeaderTitleBreadcrumb.styles = styles;
__decorate([
  c({ context: pageHeaderContext, subscribe: true })
], CDSPageHeaderTitleBreadcrumb.prototype, "context", void 0);
CDSPageHeaderTitleBreadcrumb = __decorate([
  carbonElement(`${prefix}-page-header-title-breadcrumb`)
], CDSPageHeaderTitleBreadcrumb);

// node_modules/@carbon/icons/es/chevron--up/20.js
var _202 = {
  "elem": "svg",
  "attrs": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "currentColor",
    "width": 20,
    "height": 20
  },
  "content": [{
    "elem": "path",
    "attrs": {
      "d": "M16 10 26 20 24.6 21.4 16 12.8 7.4 21.4 6 20z"
    }
  }],
  "name": "chevron--up",
  "size": 20
};

// node_modules/@carbon/ibm-products-web-components/es/components/page-header/page-header-scroller.js
var PageHeaderScroller = class PageHeaderScroller2 extends CDSButton$1 {
  constructor() {
    super(...arguments);
    this.align = "top";
    this.autoalign = true;
    this.closeOnActivation = true;
    this.collapseText = "Collapse";
    this.defaultOpen = false;
    this.enterDelayMs = 100;
    this.expandText = "Expand";
    this.leaveDelayMs = 300;
    this.size = "md";
    this._handleScroller = () => {
      const { root, fullyCollapsed } = this.context;
      const contentElement = root.querySelector(`${prefix}-page-header-content`);
      if (!contentElement) {
        return;
      }
      const scrollableTarget = scrollableAncestorInner(contentElement);
      if (!fullyCollapsed) {
        const pageHeaderContentHeight = contentElement.offsetHeight;
        scrollableTarget === null || scrollableTarget === void 0 ? void 0 : scrollableTarget.scrollTo({
          top: pageHeaderContentHeight,
          // headerTopValue, check if breadcrumb bar is included
          behavior: "smooth"
        });
      } else {
        scrollableTarget === null || scrollableTarget === void 0 ? void 0 : scrollableTarget.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
  }
  _renderTooltipContent() {
    return b`
      <cds-tooltip-content>
        <slot name="tooltip-content"></slot>
      </cds-tooltip-content>
    `;
  }
  render() {
    const { align, closeOnActivation, defaultOpen, enterDelayMs, leaveDelayMs, disabled, isSelected, size, context, autoalign } = this;
    const iconClasses = e({
      [`${prefix}--page-header-scroller-collapsed`]: !!(context === null || context === void 0 ? void 0 : context.fullyCollapsed),
      [`${prefix}--page-header-scroller-icon`]: true
    });
    return b`<cds-icon-button
      align=${align}
      ?close-on-activation=${closeOnActivation}
      ?defaultOpen=${defaultOpen}
      ?disabled=${disabled}
      enter-delay-ms=${enterDelayMs}
      ?isSelected=${isSelected}
      kind="ghost"
      leave-delay-ms=${leaveDelayMs}
      size=${size}
      ?autoalign=${autoalign}
      class=${iconClasses}
      @click=${this._handleScroller}
    >
      ${(context === null || context === void 0 ? void 0 : context.fullyCollapsed) ? b`${iconLoader(_20, { slot: "icon" })}` : b`${iconLoader(_202, { slot: "icon" })}`}
      <span slot="tooltip-content">
        ${(context === null || context === void 0 ? void 0 : context.fullyCollapsed) ? this.expandText : this.collapseText}
      </span>
    </cds-icon-button>`;
  }
};
__decorate([
  n({ reflect: true, type: String })
], PageHeaderScroller.prototype, "align", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], PageHeaderScroller.prototype, "autoalign", void 0);
__decorate([
  n({ attribute: "close-on-activation", reflect: true, type: Boolean })
], PageHeaderScroller.prototype, "closeOnActivation", void 0);
__decorate([
  n({ reflect: true, type: String })
], PageHeaderScroller.prototype, "collapseText", void 0);
__decorate([
  n({ reflect: true, type: Boolean })
], PageHeaderScroller.prototype, "defaultOpen", void 0);
__decorate([
  n({ attribute: "enter-delay-ms", type: Number })
], PageHeaderScroller.prototype, "enterDelayMs", void 0);
__decorate([
  n({ reflect: true, type: String })
], PageHeaderScroller.prototype, "expandText", void 0);
__decorate([
  n({ attribute: "leave-delay-ms", type: Number })
], PageHeaderScroller.prototype, "leaveDelayMs", void 0);
__decorate([
  n({ reflect: true })
], PageHeaderScroller.prototype, "size", void 0);
__decorate([
  c({ context: pageHeaderContext, subscribe: true })
], PageHeaderScroller.prototype, "context", void 0);
PageHeaderScroller = __decorate([
  carbonElement(`${prefix}-page-header-scroller`)
], PageHeaderScroller);
/*! Bundled license information:

@carbon/ibm-products-web-components/es/components/page-header/context.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025, 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon/ibm-products-web-components/es/components/page-header/utils.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025, 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon/ibm-products-web-components/es/components/page-header/page-header-content.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025, 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon/ibm-products-web-components/es/components/page-header/page-header.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025, 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon/ibm-products-web-components/es/components/page-header/page-header-breadcrumb.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025, 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon/ibm-products-web-components/es/components/page-header/page-header-content-text.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025, 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon/ibm-products-web-components/es/components/page-header/page-header-hero-image.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025, 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon/ibm-products-web-components/es/components/page-header/page-header-tabs.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025, 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon/ibm-products-web-components/es/components/page-header/page-header-title-breadcrumb.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025, 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon/ibm-products-web-components/es/components/page-header/page-header-scroller.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025, 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
