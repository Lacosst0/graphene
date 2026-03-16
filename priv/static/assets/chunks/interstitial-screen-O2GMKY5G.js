import {
  ne
} from "./chunk-PCEFZCKH.js";
import {
  e as e4,
  f,
  r as r2
} from "./chunk-ZOABJKJF.js";
import {
  carbonPrefix,
  prefix as prefix2
} from "./chunk-6BPMK2Y2.js";
import "./chunk-JLM5WDVB.js";
import "./chunk-L7ZM2NFT.js";
import "./chunk-C2WXOAOI.js";
import {
  CDSModalFooter$1
} from "./chunk-LNZKRNEJ.js";
import "./chunk-IQV2XA2Y.js";
import "./chunk-DXK2RTGI.js";
import "./chunk-V44MMTX2.js";
import "./chunk-WCCOZML7.js";
import "./chunk-D2ITTM54.js";
import "./chunk-KQC2PJHA.js";
import "./chunk-HPDZLYLI.js";
import "./chunk-F6EIPXKQ.js";
import "./chunk-LSZ2PVLU.js";
import "./chunk-X7WRA7XG.js";
import "./chunk-HFGTZQQE.js";
import "./chunk-SMM5AFXN.js";
import "./chunk-MU62I7LL.js";
import "./chunk-3QPROXNA.js";
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
import "./chunk-BZXZJ7DW.js";
import "./chunk-DAFPBEYU.js";
import "./chunk-73FE5HOG.js";
import {
  e as e3
} from "./chunk-YOLTZNLE.js";
import {
  e as e2
} from "./chunk-M2VBID3H.js";
import {
  e,
  n,
  r
} from "./chunk-V6ENGPT2.js";
import {
  prefix,
  selectorTabbable
} from "./chunk-ITCMO2MJ.js";
import {
  carbonElement
} from "./chunk-D5HOJOMG.js";
import {
  A,
  __decorate,
  b,
  i,
  i2
} from "./chunk-3GZFZEMV.js";
import "./chunk-G6EI4S4W.js";

// node_modules/@carbon/ibm-products-web-components/es/components/interstitial-screen/interstitial-screen.scss.js
var styles = i(['a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font:inherit;font-feature-settings:"liga" 1;font-size:100%;margin:0;padding:0;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background,#fff);color:var(--cds-text-primary,#161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}html{font-size:100%}body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size,2.625rem);font-weight:var(--cds-heading-06-font-weight,300);letter-spacing:var(--cds-heading-06-letter-spacing,0);line-height:var(--cds-heading-06-line-height,1.199)}h2{font-size:var(--cds-heading-05-font-size,2rem);font-weight:var(--cds-heading-05-font-weight,400);letter-spacing:var(--cds-heading-05-letter-spacing,0);line-height:var(--cds-heading-05-line-height,1.25)}h3{font-size:var(--cds-heading-04-font-size,1.75rem);font-weight:var(--cds-heading-04-font-weight,400);letter-spacing:var(--cds-heading-04-letter-spacing,0);line-height:var(--cds-heading-04-line-height,1.28572)}h4{font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4)}h5{font-size:var(--cds-heading-02-font-size,1rem);font-weight:var(--cds-heading-02-font-weight,600);letter-spacing:var(--cds-heading-02-letter-spacing,0);line-height:var(--cds-heading-02-line-height,1.5)}h6{font-size:var(--cds-heading-01-font-size,.875rem);font-weight:var(--cds-heading-01-font-weight,600);letter-spacing:var(--cds-heading-01-letter-spacing,.16px);line-height:var(--cds-heading-01-line-height,1.42857)}p{font-size:var(--cds-body-02-font-size,1rem);font-weight:var(--cds-body-02-font-weight,400);letter-spacing:var(--cds-body-02-letter-spacing,0);line-height:var(--cds-body-02-line-height,1.5)}a{color:var(--cds-link-primary,#0062fe)}em{font-style:italic}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--assistive-text,.cds--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.c4p--carousel{position:relative}.c4p--carousel:focus{outline:none}.c4p--carousel__elements-container{overflow:hidden}.c4p--carousel__elements-container--scroll-max,.c4p--carousel__elements-container--scrolled{inline-size:2rem;inset-block:0;pointer-events:none;position:absolute;z-index:1}.c4p--carousel__elements-container--scrolled{inset-inline-start:0}.c4p--carousel__elements-container--scroll-max{inset-inline-end:0}.c4p--carousel__elements{display:flex;overflow:scroll;-ms-overflow-style:none;scroll-behavior:smooth;scroll-snap-type:x mandatory;scrollbar-width:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.c4p--carousel__elements:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.c4p--carousel__elements:focus{outline-style:dotted}}@media (prefers-reduced-motion){.c4p--carousel__elements{scroll-behavior:auto}}.c4p--carousel__elements::-webkit-scrollbar{display:none}.c4p--interstitial-screen--body{background-color:var(--cds-background,#fff);flex-grow:1;margin:0;overflow:hidden auto;padding:0}.c4p--interstitial-screen--progress{margin-block-end:.75rem}.c4p--interstitial-screen__carousel{block-size:100%}.c4p--interstitial-screen__carousel .c4p--carousel__item{flex:0 0 100%;scroll-snap-align:start}.c4p--interstitial-screen--internal-body{margin:0!important;padding:0!important}.c4p--interstitial-screen--content{block-size:100%}.c4p--interstitial-screen--internal-header{background-color:var(--cds-background,#fff);margin-block-end:0!important;min-block-size:3rem;padding-block-start:1.5rem;padding-inline-start:2rem!important;position:relative}.c4p--interstitial-screen--internal-header:empty{min-block-size:0}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer{margin-block-end:1rem}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h1{font-size:var(--cds-productive-heading-04-font-size,1.75rem);font-weight:var(--cds-productive-heading-04-font-weight,400);letter-spacing:var(--cds-productive-heading-04-letter-spacing,0);line-height:var(--cds-productive-heading-04-line-height,1.28572);margin-block-end:.5rem}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h1:empty{padding:0}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h2{font-size:var(--cds-productive-heading-03-font-size,1.25rem);font-weight:var(--cds-productive-heading-03-font-weight,400);letter-spacing:var(--cds-productive-heading-03-letter-spacing,0);line-height:var(--cds-productive-heading-03-line-height,1.4)}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h2:empty{padding:0}.c4p--interstitial-screen--internal-header--has-title{background:var(--cds-layer-01,#f4f4f4);border-block-end:1px solid var(--cds-border-subtle-01,#c6c6c6)}.c4p--interstitial-screen--internal-header--has-title .c4p--interstitial-screen--progress{margin-block-start:0}.c4p--interstitial-screen--footer{background:var(--cds-background,#fff);border-block-start:1px solid var(--cds-border-subtle-01,#c6c6c6);box-sizing:initial;display:flex;flex-direction:row;inline-size:100%;justify-content:flex-end}.c4p--interstitial-screen--footer .c4p--interstitial-screen--next-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--prev-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--start-btn{inline-size:18.75%;min-inline-size:12.5rem;padding-block-end:2rem}.c4p--interstitial-screen--footer .c4p--interstitial-screen--skip-btn{flex-grow:1!important;max-inline-size:none;padding-inline-start:2rem}.c4p--interstitial-screen--footer .cds--inline-loading{inline-size:2rem;inset-block-start:0;inset-inline-end:0;position:absolute}.c4p--interstitial-screen--footer-controls{display:flex;flex-direction:row;margin-inline-start:auto}.c4p--interstitial-screen--full-screen,:host([fullscreen]){inset-block-start:0;inset-inline:0;position:fixed}.c4p--interstitial-screen--full-screen .c4p--interstitial-screen--container,:host([fullscreen]) .c4p--interstitial-screen--container{block-size:100vh;display:flex;flex-direction:column;margin:0;max-inline-size:100vw;padding:0}.c4p--interstitial-screen__body-container{padding:0}']);

// node_modules/@carbon/ibm-products-web-components/es/components/interstitial-screen/interstitial-screen-context.js
var interstitialDetailsSignal = r2({
  isFullScreen: false,
  open: false,
  currentStep: 0,
  stepDetails: [],
  disableActions: {}
});
var resetInterstitialDetailsSignal = () => {
  interstitialDetailsSignal.set({
    isFullScreen: false,
    open: false,
    currentStep: 0,
    stepDetails: [],
    disableActions: {}
  });
};
var updateInterstitialDetailsSignal = ({ name, detail }) => {
  if (name === "stepDetails") {
    interstitialDetailsSignal.set(Object.assign(Object.assign({}, interstitialDetailsSignal.get()), { stepDetails: [...interstitialDetailsSignal.get().stepDetails, detail] }));
  } else if (name === "isFullScreen") {
    interstitialDetailsSignal.set(Object.assign(Object.assign({}, interstitialDetailsSignal.get()), { isFullScreen: detail }));
  } else if (name === "open") {
    interstitialDetailsSignal.set(Object.assign(Object.assign({}, interstitialDetailsSignal.get()), { open: detail }));
  } else if (name === "currentStep") {
    interstitialDetailsSignal.set(Object.assign(Object.assign({}, interstitialDetailsSignal.get()), { currentStep: detail }));
  } else if (name === "disableActions") {
    interstitialDetailsSignal.set(Object.assign(Object.assign({}, interstitialDetailsSignal.get()), { disableActions: detail }));
  }
};

// node_modules/@carbon/ibm-products-web-components/es/utilities/manageFocusTrap/manageFocusTrap.js
var _containers = [];
var registerFocusableContainers = (container) => {
  if (container) {
    _containers.push(container);
  }
};
var trapFocus = (containers) => {
  const selectorTabbable$1 = selectorTabbable.replace(`${prefix}-button`, `${prefix}-button:not([disabled]), ${prefix}-selectable-tag`);
  if (containers && containers.length > 0) {
    _containers = containers;
  }
  if (!_containers.length) {
    return { cleanup: () => {
    } };
  }
  const getFocusTarget = (el) => {
    if (!el) {
      return null;
    }
    if (el.tagName === "BUTTON" || el.tabIndex >= 0) {
      return el;
    }
    const inner = el.querySelector('button, [tabindex]:not([tabindex="-1"])');
    return inner || el;
  };
  const getRealActiveElement = () => {
    var _a;
    let activeElement = document.activeElement;
    if (activeElement && selectorTabbable$1.indexOf(activeElement.tagName.toLocaleLowerCase()) == -1 && ((_a = activeElement === null || activeElement === void 0 ? void 0 : activeElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.activeElement)) {
      activeElement = activeElement.shadowRoot.activeElement;
    }
    if ((activeElement === null || activeElement === void 0 ? void 0 : activeElement.tagName) === "SLOT") {
      let assigned;
      if (activeElement instanceof HTMLSlotElement) {
        assigned = activeElement.assignedElements({ flatten: true });
      }
      const candidate = assigned === null || assigned === void 0 ? void 0 : assigned.find((node) => node.matches('button, [tabindex]:not([tabindex="-1"])'));
      if (candidate) {
        activeElement = candidate;
      }
    }
    return activeElement;
  };
  requestAnimationFrame(() => {
    var _a;
    const elements = getAllFocusableElements(_containers);
    (_a = getFocusTarget(elements[0])) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
  });
  function onKeyDown(e6) {
    var _a, _b;
    if (e6.key !== "Tab") {
      return;
    }
    const elements = getAllFocusableElements(_containers);
    const first = elements[0];
    const last = elements[elements.length - 1];
    const active = getRealActiveElement();
    if (e6.shiftKey) {
      if (active === first || first.contains(active)) {
        e6.preventDefault();
        (_a = getFocusTarget(last)) === null || _a === void 0 ? void 0 : _a.focus();
      }
    } else {
      if (active === last || last.contains(active)) {
        e6.preventDefault();
        (_b = getFocusTarget(first)) === null || _b === void 0 ? void 0 : _b.focus();
      }
    }
  }
  const getAllFocusableElements = (containers2) => containers2.flatMap((container) => [...container.querySelectorAll(selectorTabbable$1)]).filter(Boolean);
  document.addEventListener("keydown", onKeyDown, true);
  return {
    cleanup: () => {
      document.removeEventListener("keydown", onKeyDown, true);
      _containers.length = 0;
    }
  };
};

// node_modules/@carbon/ibm-products-web-components/es/components/interstitial-screen/interstitial-screen.js
var blockClass = `${prefix2}--interstitial-screen`;
var CDSInterstitialScreen = class CDSInterstitialScreen2 extends e4(HostListenerMixin(i2)) {
  constructor() {
    super(...arguments);
    this.isFullScreen = false;
    this.open = false;
    this.stepDetails = [];
    this._wasOpen = false;
    this._trapFocusAPI = null;
    this.dispatchInItializeEvent = () => {
      setTimeout(() => {
        const { carouselAPI } = interstitialDetailsSignal.get();
        this.dispatchEvent(new CustomEvent(this.constructor.eventOnInterstitialOpened, {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            carouselAPI: carouselAPI ? {
              next: carouselAPI.next,
              prev: carouselAPI.prev,
              reset: carouselAPI.reset,
              gotToStep: carouselAPI.goToIndex
            } : void 0,
            setDisableActionButtons: this.setDisableActionButtons
          }
        }));
      });
    };
    this._handleOutsideClick = (event) => {
      var _a, _b;
      const modal = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`${carbonPrefix}-modal`);
      const modalContent = (_b = modal === null || modal === void 0 ? void 0 : modal.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(`.${carbonPrefix}--modal-container`);
      const path = event.composedPath();
      if (modalContent && !path.includes(modalContent)) {
        this._handleClose(event);
      }
    };
    this.setDisableActionButtons = (config) => {
      updateInterstitialDetailsSignal({ name: "disableActions", detail: config });
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener(`${prefix2}-request-close`, this._handleClose);
  }
  disconnectedCallback() {
    var _a, _b;
    const { carouselAPI } = interstitialDetailsSignal.get();
    (_a = carouselAPI === null || carouselAPI === void 0 ? void 0 : carouselAPI.destroyEvents) === null || _a === void 0 ? void 0 : _a.call(carouselAPI);
    (_b = this._trapFocusAPI) === null || _b === void 0 ? void 0 : _b.cleanup();
  }
  firstUpdated() {
    this.requestUpdate?.();
    resetInterstitialDetailsSignal();
    updateInterstitialDetailsSignal({
      name: "isFullScreen",
      detail: this.isFullScreen
    });
  }
  updated(changedProps) {
    if (changedProps.has("open")) {
      const wasOpen = this._wasOpen;
      const isOpen = this.open;
      updateInterstitialDetailsSignal({
        name: "open",
        detail: isOpen
      });
      if (!wasOpen && isOpen) {
        this.dispatchInItializeEvent();
        this._trapFocusAPI = trapFocus();
      }
      this._wasOpen = isOpen;
    }
  }
  _handleClose(e6) {
    this.open = false;
    e6.stopPropagation();
    const init = {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        triggeredBy: e6.detail.triggeredBy
      }
    };
    if (this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeClose, init))) {
      this.dispatchEvent(new CustomEvent(this.constructor.eventClose, init));
      const { carouselAPI } = interstitialDetailsSignal.get();
      if (carouselAPI) {
        carouselAPI.reset();
      }
      updateInterstitialDetailsSignal({
        name: "currentStep",
        detail: 0
      });
    }
  }
  //template methods
  renderFullScreen() {
    return b`
      <div class="${blockClass}--container">
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </div>
    `;
  }
  renderModal() {
    return b`<cds-modal
      key=${this.open}
      ?prevent-close-on-click-outside="true"
      class=${blockClass}
      size="lg"
      ?open="${this.open}"
    >
      <slot name="header"></slot>
      <cds-modal-body class="${blockClass}__body-container">
        <slot name="body"></slot>
      </cds-modal-body>
      <cds-modal-footer>
        <slot name="footer"></slot>
      </cds-modal-footer>
    </cds-modal>`;
  }
  render() {
    return this.open ? this.isFullScreen ? b`${this.renderFullScreen()}` : b`${this.renderModal()}` : A;
  }
  static get eventOnInterstitialOpened() {
    return `${prefix2}-interstitial-opened`;
  }
  /**
   
   * The name of the custom event fired before interstitial is being closed upon a user gesture.
   * Cancellation of this event stops the user-initiated action of closing the interstitial.
   */
  static get eventBeforeClose() {
    return `${prefix2}-interstitial-beingclosed`;
  }
  /**
   * The name of the custom event fired after this tearsheet is closed upon a user gesture.
   */
  static get eventClose() {
    return `${prefix2}-interstitial-closed`;
  }
};
CDSInterstitialScreen.styles = styles;
__decorate([
  n({ type: Boolean, reflect: true, attribute: "fullscreen" })
], CDSInterstitialScreen.prototype, "isFullScreen", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSInterstitialScreen.prototype, "open", void 0);
__decorate([
  r()
], CDSInterstitialScreen.prototype, "stepDetails", void 0);
__decorate([
  e("cds-modal-body")
], CDSInterstitialScreen.prototype, "modalBody", void 0);
__decorate([
  HostListener("click")
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSInterstitialScreen.prototype, "_handleOutsideClick", void 0);
CDSInterstitialScreen = __decorate([
  carbonElement(`${prefix2}-interstitial-screen`)
], CDSInterstitialScreen);

// node_modules/@carbon/ibm-products-web-components/es/components/interstitial-screen/interstitial-screen-header.scss.js
var styles2 = i(['a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font:inherit;font-feature-settings:"liga" 1;font-size:100%;margin:0;padding:0;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background,#fff);color:var(--cds-text-primary,#161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}html{font-size:100%}body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size,2.625rem);font-weight:var(--cds-heading-06-font-weight,300);letter-spacing:var(--cds-heading-06-letter-spacing,0);line-height:var(--cds-heading-06-line-height,1.199)}h2{font-size:var(--cds-heading-05-font-size,2rem);font-weight:var(--cds-heading-05-font-weight,400);letter-spacing:var(--cds-heading-05-letter-spacing,0);line-height:var(--cds-heading-05-line-height,1.25)}h3{font-size:var(--cds-heading-04-font-size,1.75rem);font-weight:var(--cds-heading-04-font-weight,400);letter-spacing:var(--cds-heading-04-letter-spacing,0);line-height:var(--cds-heading-04-line-height,1.28572)}h4{font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4)}h5{font-size:var(--cds-heading-02-font-size,1rem);font-weight:var(--cds-heading-02-font-weight,600);letter-spacing:var(--cds-heading-02-letter-spacing,0);line-height:var(--cds-heading-02-line-height,1.5)}h6{font-size:var(--cds-heading-01-font-size,.875rem);font-weight:var(--cds-heading-01-font-weight,600);letter-spacing:var(--cds-heading-01-letter-spacing,.16px);line-height:var(--cds-heading-01-line-height,1.42857)}p{font-size:var(--cds-body-02-font-size,1rem);font-weight:var(--cds-body-02-font-weight,400);letter-spacing:var(--cds-body-02-letter-spacing,0);line-height:var(--cds-body-02-line-height,1.5)}a{color:var(--cds-link-primary,#0062fe)}em{font-style:italic}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--assistive-text,.cds--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.c4p--carousel{position:relative}.c4p--carousel:focus{outline:none}.c4p--carousel__elements-container{overflow:hidden}.c4p--carousel__elements-container--scroll-max,.c4p--carousel__elements-container--scrolled{inline-size:2rem;inset-block:0;pointer-events:none;position:absolute;z-index:1}.c4p--carousel__elements-container--scrolled{inset-inline-start:0}.c4p--carousel__elements-container--scroll-max{inset-inline-end:0}.c4p--carousel__elements{display:flex;overflow:scroll;-ms-overflow-style:none;scroll-behavior:smooth;scroll-snap-type:x mandatory;scrollbar-width:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.c4p--carousel__elements:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.c4p--carousel__elements:focus{outline-style:dotted}}@media (prefers-reduced-motion){.c4p--carousel__elements{scroll-behavior:auto}}.c4p--carousel__elements::-webkit-scrollbar{display:none}.c4p--interstitial-screen--body{background-color:var(--cds-background,#fff);flex-grow:1;margin:0;overflow:hidden auto;padding:0}.c4p--interstitial-screen--progress{margin-block-end:.75rem}.c4p--interstitial-screen__carousel{block-size:100%}.c4p--interstitial-screen__carousel .c4p--carousel__item{flex:0 0 100%;scroll-snap-align:start}.c4p--interstitial-screen--internal-body{margin:0!important;padding:0!important}.c4p--interstitial-screen--content{block-size:100%}.c4p--interstitial-screen--internal-header{background-color:var(--cds-background,#fff);margin-block-end:0!important;min-block-size:3rem;padding-block-start:1.5rem;padding-inline-start:2rem!important;position:relative}.c4p--interstitial-screen--internal-header:empty{min-block-size:0}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer{margin-block-end:1rem}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h1{font-size:var(--cds-productive-heading-04-font-size,1.75rem);font-weight:var(--cds-productive-heading-04-font-weight,400);letter-spacing:var(--cds-productive-heading-04-letter-spacing,0);line-height:var(--cds-productive-heading-04-line-height,1.28572);margin-block-end:.5rem}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h1:empty{padding:0}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h2{font-size:var(--cds-productive-heading-03-font-size,1.25rem);font-weight:var(--cds-productive-heading-03-font-weight,400);letter-spacing:var(--cds-productive-heading-03-letter-spacing,0);line-height:var(--cds-productive-heading-03-line-height,1.4)}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h2:empty{padding:0}.c4p--interstitial-screen--internal-header--has-title{background:var(--cds-layer-01,#f4f4f4);border-block-end:1px solid var(--cds-border-subtle-01,#c6c6c6)}.c4p--interstitial-screen--internal-header--has-title .c4p--interstitial-screen--progress{margin-block-start:0}.c4p--interstitial-screen--footer{background:var(--cds-background,#fff);border-block-start:1px solid var(--cds-border-subtle-01,#c6c6c6);box-sizing:initial;display:flex;flex-direction:row;inline-size:100%;justify-content:flex-end}.c4p--interstitial-screen--footer .c4p--interstitial-screen--next-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--prev-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--start-btn{inline-size:18.75%;min-inline-size:12.5rem;padding-block-end:2rem}.c4p--interstitial-screen--footer .c4p--interstitial-screen--skip-btn{flex-grow:1!important;max-inline-size:none;padding-inline-start:2rem}.c4p--interstitial-screen--footer .cds--inline-loading{inline-size:2rem;inset-block-start:0;inset-inline-end:0;position:absolute}.c4p--interstitial-screen--footer-controls{display:flex;flex-direction:row;margin-inline-start:auto}.c4p--interstitial-screen--full-screen,:host([fullscreen]){inset-block-start:0;inset-inline:0;position:fixed}.c4p--interstitial-screen--full-screen .c4p--interstitial-screen--container,:host([fullscreen]) .c4p--interstitial-screen--container{block-size:100vh;display:flex;flex-direction:column;margin:0;max-inline-size:100vw;padding:0}.c4p--interstitial-screen__body-container{padding:0}:host{display:contents}']);

// node_modules/@carbon/ibm-products-web-components/es/components/interstitial-screen/interstitial-screen-header.js
var blockClass2 = `${prefix2}--interstitial-screen`;
var headerBlockClass = `${blockClass2}--internal-header`;
var CDSInterstitialScreenHeader = class CDSInterstitialScreenHeader2 extends e4(HostListenerMixin(i2)) {
  constructor() {
    super(...arguments);
    this.headerTitle = "";
    this.slot = "header";
    this.headerSubTitle = "";
    this.closeIconDescription = "Close";
    this.hideProgressIndicator = false;
    this.getStepState = (index) => {
      const currentStep = interstitialDetailsSignal.get().currentStep;
      if (index === currentStep) {
        return "current";
      } else if (index < currentStep) {
        return "complete";
      } else if (index > currentStep) {
        return "incomplete";
      }
      return "invalid";
    };
    this.getElementForAriaLive = () => {
      const currentStep = interstitialDetailsSignal.get().currentStep;
      const stepDetails = interstitialDetailsSignal.get().stepDetails;
      return b` <div
      aria-live="polite"
      aria-atomic="true"
      class="${carbonPrefix}--visually-hidden"
    >
      Step ${currentStep + 1} of ${stepDetails.length}
    </div>`;
    };
  }
  firstUpdated(_changedProperties) {
    registerFocusableContainers(this.shadowRoot);
  }
  /**
   * Handles user-initiated close request of this tearsheet.
   *
   * @param triggeredBy The element that triggered this close request.
   */
  _handleUserInitiatedClose(triggeredBy) {
    const init = {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        triggeredBy
      }
    };
    this.dispatchEvent(new CustomEvent(this.constructor.eventRequestClose, init));
  }
  getProgressIndicatorContent(stepDetails) {
    return b`
      <div class="${blockClass2}--progress">
        <cds-progress-indicator>
          ${stepDetails.map((step, index) => b` <cds-progress-step
                label="${step.stepTitle}"
                key="${step.id}"
                state="${this.getStepState(index)}"
              ></cds-progress-step>`)}
        </cds-progress-indicator>
        ${this.getElementForAriaLive()}
      </div>
    `;
  }
  getTitleContent() {
    return b` <div class="${blockClass2}--titleContainer">
      ${this.headerTitle && b`<h1>${this.headerTitle}</h1>`}
      ${this.headerSubTitle && b`<h2>${this.headerSubTitle}</h2>`}
    </div>`;
  }
  getHeaderContent() {
    const stepDetails = interstitialDetailsSignal.get().stepDetails;
    return b`
     
      ${this.headerTitle || this.headerSubTitle ? this.getTitleContent() : A}

          <slot></slot>

          ${!this.hideProgressIndicator && (stepDetails === null || stepDetails === void 0 ? void 0 : stepDetails.length) > 0 ? this.getProgressIndicatorContent(stepDetails) : A}
        </div>
      
    `;
  }
  render() {
    const { isFullScreen } = interstitialDetailsSignal.get();
    const classes = e3({
      [`${headerBlockClass}`]: true,
      [`${headerBlockClass}--has-title`]: this.headerTitle || this.headerSubTitle
      // add check for children
    });
    return isFullScreen ? b` <header class="${classes}">${this.getHeaderContent()}</header>` : b`<cds-modal-header class="${classes}">
          <cds-modal-close-button
            close-button-label=${this.closeIconDescription}
            @click="${this._handleUserInitiatedClose}"
          ></cds-modal-close-button>

          ${this.getHeaderContent()}
        </cds-modal-header>`;
  }
  static get eventRequestClose() {
    return `${prefix2}-request-close`;
  }
};
CDSInterstitialScreenHeader.styles = styles2;
__decorate([
  n({ reflect: true, attribute: "header-title" })
], CDSInterstitialScreenHeader.prototype, "headerTitle", void 0);
__decorate([
  n({ reflect: true })
], CDSInterstitialScreenHeader.prototype, "slot", void 0);
__decorate([
  n({ reflect: true, attribute: "header-subtitle" })
], CDSInterstitialScreenHeader.prototype, "headerSubTitle", void 0);
__decorate([
  n({ reflect: true })
], CDSInterstitialScreenHeader.prototype, "closeIconDescription", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSInterstitialScreenHeader.prototype, "hideProgressIndicator", void 0);
CDSInterstitialScreenHeader = __decorate([
  carbonElement(`${prefix2}-interstitial-screen-header`)
], CDSInterstitialScreenHeader);

// node_modules/@carbon/ibm-products-web-components/es/components/interstitial-screen/interstitial-screen-body.scss.js
var styles3 = i(['a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font:inherit;font-feature-settings:"liga" 1;font-size:100%;margin:0;padding:0;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background,#fff);color:var(--cds-text-primary,#161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}html{font-size:100%}body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size,2.625rem);font-weight:var(--cds-heading-06-font-weight,300);letter-spacing:var(--cds-heading-06-letter-spacing,0);line-height:var(--cds-heading-06-line-height,1.199)}h2{font-size:var(--cds-heading-05-font-size,2rem);font-weight:var(--cds-heading-05-font-weight,400);letter-spacing:var(--cds-heading-05-letter-spacing,0);line-height:var(--cds-heading-05-line-height,1.25)}h3{font-size:var(--cds-heading-04-font-size,1.75rem);font-weight:var(--cds-heading-04-font-weight,400);letter-spacing:var(--cds-heading-04-letter-spacing,0);line-height:var(--cds-heading-04-line-height,1.28572)}h4{font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4)}h5{font-size:var(--cds-heading-02-font-size,1rem);font-weight:var(--cds-heading-02-font-weight,600);letter-spacing:var(--cds-heading-02-letter-spacing,0);line-height:var(--cds-heading-02-line-height,1.5)}h6{font-size:var(--cds-heading-01-font-size,.875rem);font-weight:var(--cds-heading-01-font-weight,600);letter-spacing:var(--cds-heading-01-letter-spacing,.16px);line-height:var(--cds-heading-01-line-height,1.42857)}p{font-size:var(--cds-body-02-font-size,1rem);font-weight:var(--cds-body-02-font-weight,400);letter-spacing:var(--cds-body-02-letter-spacing,0);line-height:var(--cds-body-02-line-height,1.5)}a{color:var(--cds-link-primary,#0062fe)}em{font-style:italic}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--assistive-text,.cds--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.c4p--carousel{position:relative}.c4p--carousel:focus{outline:none}.c4p--carousel__elements-container{overflow:hidden}.c4p--carousel__elements-container--scroll-max,.c4p--carousel__elements-container--scrolled{inline-size:2rem;inset-block:0;pointer-events:none;position:absolute;z-index:1}.c4p--carousel__elements-container--scrolled{inset-inline-start:0}.c4p--carousel__elements-container--scroll-max{inset-inline-end:0}.c4p--carousel__elements{display:flex;overflow:scroll;-ms-overflow-style:none;scroll-behavior:smooth;scroll-snap-type:x mandatory;scrollbar-width:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.c4p--carousel__elements:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.c4p--carousel__elements:focus{outline-style:dotted}}@media (prefers-reduced-motion){.c4p--carousel__elements{scroll-behavior:auto}}.c4p--carousel__elements::-webkit-scrollbar{display:none}.c4p--interstitial-screen--body{background-color:var(--cds-background,#fff);flex-grow:1;margin:0;overflow:hidden auto;padding:0}.c4p--interstitial-screen--progress{margin-block-end:.75rem}.c4p--interstitial-screen__carousel{block-size:100%}.c4p--interstitial-screen__carousel .c4p--carousel__item{flex:0 0 100%;scroll-snap-align:start}.c4p--interstitial-screen--internal-body{margin:0!important;padding:0!important}.c4p--interstitial-screen--content{block-size:100%}.c4p--interstitial-screen--internal-header{background-color:var(--cds-background,#fff);margin-block-end:0!important;min-block-size:3rem;padding-block-start:1.5rem;padding-inline-start:2rem!important;position:relative}.c4p--interstitial-screen--internal-header:empty{min-block-size:0}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer{margin-block-end:1rem}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h1{font-size:var(--cds-productive-heading-04-font-size,1.75rem);font-weight:var(--cds-productive-heading-04-font-weight,400);letter-spacing:var(--cds-productive-heading-04-letter-spacing,0);line-height:var(--cds-productive-heading-04-line-height,1.28572);margin-block-end:.5rem}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h1:empty{padding:0}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h2{font-size:var(--cds-productive-heading-03-font-size,1.25rem);font-weight:var(--cds-productive-heading-03-font-weight,400);letter-spacing:var(--cds-productive-heading-03-letter-spacing,0);line-height:var(--cds-productive-heading-03-line-height,1.4)}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h2:empty{padding:0}.c4p--interstitial-screen--internal-header--has-title{background:var(--cds-layer-01,#f4f4f4);border-block-end:1px solid var(--cds-border-subtle-01,#c6c6c6)}.c4p--interstitial-screen--internal-header--has-title .c4p--interstitial-screen--progress{margin-block-start:0}.c4p--interstitial-screen--footer{background:var(--cds-background,#fff);border-block-start:1px solid var(--cds-border-subtle-01,#c6c6c6);box-sizing:initial;display:flex;flex-direction:row;inline-size:100%;justify-content:flex-end}.c4p--interstitial-screen--footer .c4p--interstitial-screen--next-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--prev-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--start-btn{inline-size:18.75%;min-inline-size:12.5rem;padding-block-end:2rem}.c4p--interstitial-screen--footer .c4p--interstitial-screen--skip-btn{flex-grow:1!important;max-inline-size:none;padding-inline-start:2rem}.c4p--interstitial-screen--footer .cds--inline-loading{inline-size:2rem;inset-block-start:0;inset-inline-end:0;position:absolute}.c4p--interstitial-screen--footer-controls{display:flex;flex-direction:row;margin-inline-start:auto}.c4p--interstitial-screen--full-screen,:host([fullscreen]){inset-block-start:0;inset-inline:0;position:fixed}.c4p--interstitial-screen--full-screen .c4p--interstitial-screen--container,:host([fullscreen]) .c4p--interstitial-screen--container{block-size:100vh;display:flex;flex-direction:column;margin:0;max-inline-size:100vw;padding:0}.c4p--interstitial-screen__body-container{padding:0}@keyframes out-to-active{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes active-to-out{0%{transform:translateX(-100%)}to{transform:translateX(0)}}.carousel__view,:host(.carousel__view){block-size:100%;inline-size:100%;inset-inline-start:100%;overflow:hidden auto;transform:translateX(0);z-index:80}@media (prefers-reduced-motion:no-preference){.carousel__view,:host(.carousel__view){transition:transform .24s cubic-bezier(.5,0,.1,1)}}@media (prefers-reduced-motion:reduce){.carousel__view,:host(.carousel__view){animation:none;transition:none}}.carousel__view:focus,:host(.carousel__view:focus){outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.carousel__view:focus,:host(.carousel__view:focus){outline-style:dotted}}.carousel__view-active,:host(.carousel__view-active){block-size:100%;inline-size:100%;inset-inline-start:100%;overflow:hidden auto;transform:translateX(-100%);z-index:100}@media (prefers-reduced-motion:no-preference){.carousel__view-active,:host(.carousel__view-active){transition:transform .24s cubic-bezier(.5,0,.1,1)}}@media (prefers-reduced-motion:reduce){.carousel__view-active,:host(.carousel__view-active){animation:none;transition:none}}.carousel__view-active:focus,:host(.carousel__view-active:focus){outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.carousel__view-active:focus,:host(.carousel__view-active:focus){outline-style:dotted}}.carousel__view-in-stack,:host(.carousel__view-in-stack){block-size:100%;inline-size:100%;inset-inline-start:100%;overflow:hidden auto;transform:translateX(-200%);z-index:90}@media (prefers-reduced-motion:no-preference){.carousel__view-in-stack,:host(.carousel__view-in-stack){transition:transform .24s cubic-bezier(.5,0,.1,1)}}@media (prefers-reduced-motion:reduce){.carousel__view-in-stack,:host(.carousel__view-in-stack){animation:none;transition:none}}.carousel__view-in-stack:focus,:host(.carousel__view-in-stack:focus){outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.carousel__view-in-stack:focus,:host(.carousel__view-in-stack:focus){outline-style:dotted}}.carousel__view-recycle-in,:host(.carousel__view-recycle-in){block-size:100%;inline-size:100%;overflow:hidden auto;z-index:100}@media (prefers-reduced-motion:no-preference){.carousel__view-recycle-in,:host(.carousel__view-recycle-in){animation:out-to-active .24s cubic-bezier(.5,0,.1,1) forwards}}@media (prefers-reduced-motion:reduce){.carousel__view-recycle-in,:host(.carousel__view-recycle-in){animation:none;transition:none}}.carousel__view-recycle-in:focus,:host(.carousel__view-recycle-in:focus){outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.carousel__view-recycle-in:focus,:host(.carousel__view-recycle-in:focus){outline-style:dotted}}.carousel__view-recycle-out,:host(.carousel__view-recycle-out){block-size:100%;inline-size:100%;overflow:hidden auto;z-index:90}@media (prefers-reduced-motion:no-preference){.carousel__view-recycle-out,:host(.carousel__view-recycle-out){animation:active-to-out .24s cubic-bezier(.5,0,.1,1) forwards}}@media (prefers-reduced-motion:reduce){.carousel__view-recycle-out,:host(.carousel__view-recycle-out){animation:none;transition:none}}.carousel__view-recycle-out:focus,:host(.carousel__view-recycle-out:focus){outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.carousel__view-recycle-out:focus,:host(.carousel__view-recycle-out:focus){outline-style:dotted}}.carousel__view-stack .carousel__itemsWrapper{block-size:100%;inline-size:100%;min-inline-size:20vh;overflow:hidden;position:relative}.c4p--interstitial-screen--body{block-size:100%}.c4p--interstitial-screen__carousel,.c4p--interstitial-screen__contentWrapper{display:flex}:host{flex-grow:1;padding-block-end:0!important}']);

// node_modules/lit-html/directives/ref.js
var e5 = () => new h();
var h = class {
};
var o = /* @__PURE__ */ new WeakMap();
var n2 = e2(class extends f {
  render(i3) {
    return A;
  }
  update(i3, [s]) {
    var _a;
    const e6 = s !== this.G;
    return e6 && void 0 !== this.G && this.rt(void 0), (e6 || this.lt !== this.ct) && (this.G = s, this.ht = (_a = i3.options) == null ? void 0 : _a.host, this.rt(this.ct = i3.element)), A;
  }
  rt(t) {
    var _a;
    if (this.isConnected || (t = void 0), "function" == typeof this.G) {
      const i3 = (_a = this.ht) != null ? _a : globalThis;
      let s = o.get(i3);
      void 0 === s && (s = /* @__PURE__ */ new WeakMap(), o.set(i3, s)), void 0 !== s.get(this.G) && this.G.call(this.ht, void 0), s.set(this.G, t), void 0 !== t && this.G.call(this.ht, t);
    } else
      this.G.value = t;
  }
  get lt() {
    var _a, _b, _c;
    return "function" == typeof this.G ? (_b = o.get((_a = this.ht) != null ? _a : globalThis)) == null ? void 0 : _b.get(this.G) : (_c = this.G) == null ? void 0 : _c.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});

// node_modules/@carbon/ibm-products-web-components/es/components/interstitial-screen/interstitial-screen-body.js
var blockClass3 = `${prefix2}--interstitial-screen`;
var CDSInterstitialScreenBody = class CDSInterstitialScreenBody2 extends e4(HostListenerMixin(i2)) {
  constructor() {
    super(...arguments);
    this.slot = "body";
    this.stepType = "multi";
    this.carouselElement = e5();
    this.onViewChangeStart = ({ currentIndex, lastIndex, totalViews }) => {
      this.dispatchEvent(new CustomEvent(this.constructor.eventOnViewChangeStart, {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: {
          currentStep: currentIndex,
          totalStepCount: totalViews,
          lastStep: lastIndex
        }
      }));
    };
    this.onViewChangeEnd = ({ currentIndex, lastIndex, totalViews }) => {
      this.updateAriaHiddenTabIndex(currentIndex);
      updateInterstitialDetailsSignal({
        name: "currentStep",
        detail: currentIndex
      });
      this.dispatchEvent(new CustomEvent(this.constructor.eventOnViewChangeEnd, {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: {
          currentStep: currentIndex,
          totalStepCount: totalViews,
          lastStep: lastIndex
        }
      }));
    };
    this.updateAriaHiddenTabIndex = (itemNumber) => {
      var _a, _b;
      const allViews = (_a = this.carouselAPI) === null || _a === void 0 ? void 0 : _a.allViews;
      allViews && ((_b = Object.values(allViews)) === null || _b === void 0 ? void 0 : _b.forEach((item, idx) => {
        const isActive = idx === itemNumber;
        if (item) {
          item.setAttribute("aria-hidden", String(!isActive));
          if (!isActive) {
            item.setAttribute("inert", "");
          } else {
            item.removeAttribute("inert");
          }
          item.removeAttribute("tabindex");
        }
      }));
    };
  }
  firstUpdated() {
    const bodyItems = this.querySelectorAll(`${prefix2}-interstitial-screen-body-item`);
    if (bodyItems.length === 1) {
      this.stepType = "single";
    } else if (bodyItems.length > 1) {
      this.stepType = "multi";
    }
  }
  updated(changedProps) {
    super.updated(changedProps);
    const { open } = interstitialDetailsSignal.get();
    if (open && !this.carouselAPI && this.stepType === "multi") {
      requestAnimationFrame(() => {
        this._initCarousel();
      });
    }
  }
  _initCarousel() {
    this.carouselAPI = ne(this.carouselElement.value, {
      onViewChangeEnd: this.onViewChangeEnd,
      onViewChangeStart: this.onViewChangeStart,
      excludeSwipeSupport: true,
      useMaxHeight: true
    });
    interstitialDetailsSignal.set(Object.assign(Object.assign({}, interstitialDetailsSignal.get()), { carouselAPI: this.carouselAPI }));
    this.updateAriaHiddenTabIndex(0);
  }
  render() {
    return b`
      <div class="${blockClass3}--body">
        ${this.stepType === "multi" ? b`<div
              ${n2(this.carouselElement)}
              class="${blockClass3}__carousel"
            >
              <slot></slot>
            </div>` : b`<div class="${blockClass3}__contentWrapper">
              <slot></slot>
            </div>`}
      </div>
    `;
  }
  /**
   * The name of the custom event fired at the start of  the step change.
   */
  static get eventOnViewChangeStart() {
    return `${prefix2}-on-before-step-change`;
  }
  /**
   * The name of the custom event fired at the end of  the step change.
   */
  static get eventOnViewChangeEnd() {
    return `${prefix2}-on-after-step-change`;
  }
};
CDSInterstitialScreenBody.styles = styles3;
__decorate([
  n({ reflect: true })
], CDSInterstitialScreenBody.prototype, "slot", void 0);
__decorate([
  r()
], CDSInterstitialScreenBody.prototype, "stepType", void 0);
CDSInterstitialScreenBody = __decorate([
  carbonElement(`${prefix2}-interstitial-screen-body`)
], CDSInterstitialScreenBody);

// node_modules/@carbon/ibm-products-web-components/es/components/interstitial-screen/interstitial-screen-body-item.scss.js
var styles4 = i(["@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--assistive-text,.cds--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.carousel__view-stack .carousel__itemsWrapper{block-size:100%;inline-size:100%;min-inline-size:20vh;overflow:hidden;position:relative}@keyframes out-to-active{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes active-to-out{0%{transform:translateX(-100%)}to{transform:translateX(0)}}.carousel__view,:host(.carousel__view){block-size:100%;inline-size:100%;inset-inline-start:100%;overflow:hidden auto;transform:translateX(0);z-index:80}@media (prefers-reduced-motion:no-preference){.carousel__view,:host(.carousel__view){transition:transform .24s cubic-bezier(.5,0,.1,1)}}@media (prefers-reduced-motion:reduce){.carousel__view,:host(.carousel__view){animation:none;transition:none}}.carousel__view:focus,:host(.carousel__view:focus){outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.carousel__view:focus,:host(.carousel__view:focus){outline-style:dotted}}.carousel__view-active,:host(.carousel__view-active){block-size:100%;inline-size:100%;inset-inline-start:100%;overflow:hidden auto;transform:translateX(-100%);z-index:100}@media (prefers-reduced-motion:no-preference){.carousel__view-active,:host(.carousel__view-active){transition:transform .24s cubic-bezier(.5,0,.1,1)}}@media (prefers-reduced-motion:reduce){.carousel__view-active,:host(.carousel__view-active){animation:none;transition:none}}.carousel__view-active:focus,:host(.carousel__view-active:focus){outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.carousel__view-active:focus,:host(.carousel__view-active:focus){outline-style:dotted}}.carousel__view-in-stack,:host(.carousel__view-in-stack){block-size:100%;inline-size:100%;inset-inline-start:100%;overflow:hidden auto;transform:translateX(-200%);z-index:90}@media (prefers-reduced-motion:no-preference){.carousel__view-in-stack,:host(.carousel__view-in-stack){transition:transform .24s cubic-bezier(.5,0,.1,1)}}@media (prefers-reduced-motion:reduce){.carousel__view-in-stack,:host(.carousel__view-in-stack){animation:none;transition:none}}.carousel__view-in-stack:focus,:host(.carousel__view-in-stack:focus){outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.carousel__view-in-stack:focus,:host(.carousel__view-in-stack:focus){outline-style:dotted}}.carousel__view-recycle-in,:host(.carousel__view-recycle-in){block-size:100%;inline-size:100%;overflow:hidden auto;z-index:100}@media (prefers-reduced-motion:no-preference){.carousel__view-recycle-in,:host(.carousel__view-recycle-in){animation:out-to-active .24s cubic-bezier(.5,0,.1,1) forwards}}@media (prefers-reduced-motion:reduce){.carousel__view-recycle-in,:host(.carousel__view-recycle-in){animation:none;transition:none}}.carousel__view-recycle-in:focus,:host(.carousel__view-recycle-in:focus){outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.carousel__view-recycle-in:focus,:host(.carousel__view-recycle-in:focus){outline-style:dotted}}.carousel__view-recycle-out,:host(.carousel__view-recycle-out){block-size:100%;inline-size:100%;overflow:hidden auto;z-index:90}@media (prefers-reduced-motion:no-preference){.carousel__view-recycle-out,:host(.carousel__view-recycle-out){animation:active-to-out .24s cubic-bezier(.5,0,.1,1) forwards}}@media (prefers-reduced-motion:reduce){.carousel__view-recycle-out,:host(.carousel__view-recycle-out){animation:none;transition:none}}.carousel__view-recycle-out:focus,:host(.carousel__view-recycle-out:focus){outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.carousel__view-recycle-out:focus,:host(.carousel__view-recycle-out:focus){outline-style:dotted}}:host{box-sizing:border-box!important;padding-inline-start:2rem}"]);

// node_modules/@carbon/ibm-products-web-components/es/components/interstitial-screen/interstitial-screen-body-item.js
var CDSInterstitialScreenBodyItem = class CDSInterstitialScreenBodyItem2 extends HostListenerMixin(i2) {
  constructor() {
    super(...arguments);
    this.stepTitle = "";
  }
  firstUpdated(_changedProperties) {
    this.updateStepDetails();
    registerFocusableContainers(this);
  }
  updateStepDetails() {
    var _a, _b, _c;
    const randomId = crypto === null || crypto === void 0 ? void 0 : crypto.randomUUID();
    const stepKey = `${((_a = this.stepTitle) === null || _a === void 0 ? void 0 : _a.replace(/\s+/g, "")) || randomId}`;
    const newStep = {
      stepTitle: this.stepTitle,
      id: (_b = this.id) !== null && _b !== void 0 ? _b : stepKey
    };
    const exists = (_c = interstitialDetailsSignal.get().stepDetails) === null || _c === void 0 ? void 0 : _c.some((step) => step.stepTitle === newStep.stepTitle);
    if (!exists && newStep.stepTitle) {
      updateInterstitialDetailsSignal({ name: "stepDetails", detail: newStep });
    }
  }
  render() {
    return b` <slot @slotchange=${this.updateStepDetails}></slot> `;
  }
};
CDSInterstitialScreenBodyItem.styles = styles4;
__decorate([
  n({ reflect: true })
], CDSInterstitialScreenBodyItem.prototype, "stepTitle", void 0);
CDSInterstitialScreenBodyItem = __decorate([
  carbonElement(`${prefix2}-interstitial-screen-body-item`)
], CDSInterstitialScreenBodyItem);

// node_modules/@carbon/ibm-products-web-components/es/components/interstitial-screen/interstitial-screen-footer.scss.js
var styles5 = i(['a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font:inherit;font-feature-settings:"liga" 1;font-size:100%;margin:0;padding:0;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{background-color:var(--cds-background,#fff);color:var(--cds-text-primary,#161616);line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}html{font-size:100%}body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-heading-06-font-size,2.625rem);font-weight:var(--cds-heading-06-font-weight,300);letter-spacing:var(--cds-heading-06-letter-spacing,0);line-height:var(--cds-heading-06-line-height,1.199)}h2{font-size:var(--cds-heading-05-font-size,2rem);font-weight:var(--cds-heading-05-font-weight,400);letter-spacing:var(--cds-heading-05-letter-spacing,0);line-height:var(--cds-heading-05-line-height,1.25)}h3{font-size:var(--cds-heading-04-font-size,1.75rem);font-weight:var(--cds-heading-04-font-weight,400);letter-spacing:var(--cds-heading-04-letter-spacing,0);line-height:var(--cds-heading-04-line-height,1.28572)}h4{font-size:var(--cds-heading-03-font-size,1.25rem);font-weight:var(--cds-heading-03-font-weight,400);letter-spacing:var(--cds-heading-03-letter-spacing,0);line-height:var(--cds-heading-03-line-height,1.4)}h5{font-size:var(--cds-heading-02-font-size,1rem);font-weight:var(--cds-heading-02-font-weight,600);letter-spacing:var(--cds-heading-02-letter-spacing,0);line-height:var(--cds-heading-02-line-height,1.5)}h6{font-size:var(--cds-heading-01-font-size,.875rem);font-weight:var(--cds-heading-01-font-weight,600);letter-spacing:var(--cds-heading-01-letter-spacing,.16px);line-height:var(--cds-heading-01-line-height,1.42857)}p{font-size:var(--cds-body-02-font-size,1rem);font-weight:var(--cds-body-02-font-weight,400);letter-spacing:var(--cds-body-02-letter-spacing,0);line-height:var(--cds-body-02-line-height,1.5)}a{color:var(--cds-link-primary,#0062fe)}em{font-style:italic}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--assistive-text,.cds--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.c4p--carousel{position:relative}.c4p--carousel:focus{outline:none}.c4p--carousel__elements-container{overflow:hidden}.c4p--carousel__elements-container--scroll-max,.c4p--carousel__elements-container--scrolled{inline-size:2rem;inset-block:0;pointer-events:none;position:absolute;z-index:1}.c4p--carousel__elements-container--scrolled{inset-inline-start:0}.c4p--carousel__elements-container--scroll-max{inset-inline-end:0}.c4p--carousel__elements{display:flex;overflow:scroll;-ms-overflow-style:none;scroll-behavior:smooth;scroll-snap-type:x mandatory;scrollbar-width:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.c4p--carousel__elements:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.c4p--carousel__elements:focus{outline-style:dotted}}@media (prefers-reduced-motion){.c4p--carousel__elements{scroll-behavior:auto}}.c4p--carousel__elements::-webkit-scrollbar{display:none}.c4p--interstitial-screen--body{background-color:var(--cds-background,#fff);flex-grow:1;margin:0;overflow:hidden auto;padding:0}.c4p--interstitial-screen--progress{margin-block-end:.75rem}.c4p--interstitial-screen__carousel{block-size:100%}.c4p--interstitial-screen__carousel .c4p--carousel__item{flex:0 0 100%;scroll-snap-align:start}.c4p--interstitial-screen--internal-body{margin:0!important;padding:0!important}.c4p--interstitial-screen--content{block-size:100%}.c4p--interstitial-screen--internal-header{background-color:var(--cds-background,#fff);margin-block-end:0!important;min-block-size:3rem;padding-block-start:1.5rem;padding-inline-start:2rem!important;position:relative}.c4p--interstitial-screen--internal-header:empty{min-block-size:0}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer{margin-block-end:1rem}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h1{font-size:var(--cds-productive-heading-04-font-size,1.75rem);font-weight:var(--cds-productive-heading-04-font-weight,400);letter-spacing:var(--cds-productive-heading-04-letter-spacing,0);line-height:var(--cds-productive-heading-04-line-height,1.28572);margin-block-end:.5rem}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h1:empty{padding:0}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h2{font-size:var(--cds-productive-heading-03-font-size,1.25rem);font-weight:var(--cds-productive-heading-03-font-weight,400);letter-spacing:var(--cds-productive-heading-03-letter-spacing,0);line-height:var(--cds-productive-heading-03-line-height,1.4)}.c4p--interstitial-screen--internal-header .c4p--interstitial-screen--titleContainer h2:empty{padding:0}.c4p--interstitial-screen--internal-header--has-title{background:var(--cds-layer-01,#f4f4f4);border-block-end:1px solid var(--cds-border-subtle-01,#c6c6c6)}.c4p--interstitial-screen--internal-header--has-title .c4p--interstitial-screen--progress{margin-block-start:0}.c4p--interstitial-screen--footer{background:var(--cds-background,#fff);border-block-start:1px solid var(--cds-border-subtle-01,#c6c6c6);box-sizing:initial;display:flex;flex-direction:row;inline-size:100%;justify-content:flex-end}.c4p--interstitial-screen--footer .c4p--interstitial-screen--next-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--prev-btn,.c4p--interstitial-screen--footer .c4p--interstitial-screen--start-btn{inline-size:18.75%;min-inline-size:12.5rem;padding-block-end:2rem}.c4p--interstitial-screen--footer .c4p--interstitial-screen--skip-btn{flex-grow:1!important;max-inline-size:none;padding-inline-start:2rem}.c4p--interstitial-screen--footer .cds--inline-loading{inline-size:2rem;inset-block-start:0;inset-inline-end:0;position:absolute}.c4p--interstitial-screen--footer-controls{flex-direction:row;margin-inline-start:auto}.c4p--interstitial-screen--full-screen,:host([fullscreen]){inset-block-start:0;inset-inline:0;position:fixed}.c4p--interstitial-screen--full-screen .c4p--interstitial-screen--container,:host([fullscreen]) .c4p--interstitial-screen--container{block-size:100vh;display:flex;flex-direction:column;margin:0;max-inline-size:100vw;padding:0}.c4p--interstitial-screen__body-container{padding:0}:host{inline-size:100%}.c4p--interstitial-screen--footer{block-size:4rem}.c4p--interstitial-screen--footer-controls{display:flex}cds-button{block-size:100%}cds-inline-loading{inset-block-start:0;position:absolute}.c4p--interstitial-screen--skip-btn{padding-inline-start:0!important}.c4p--interstitial-screen--skip-btn::part(button){padding-inline-start:2rem}']);

// node_modules/@carbon/icons/es/arrow--right/16.js
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
      "d": "M9.3 3.7 13.1 7.5 1 7.5 1 8.5 13.1 8.5 9.3 12.3 10 13 15 8 10 3z"
    }
  }],
  "name": "arrow--right",
  "size": 16
};

// node_modules/@carbon/ibm-products-web-components/es/components/interstitial-screen/interstitial-screen-footer.js
var blockClass4 = `${prefix2}--interstitial-screen`;
var CDSInterstitialScreenFooter = class CDSInterstitialScreenFooter2 extends e4(HostListenerMixin(CDSModalFooter$1)) {
  constructor() {
    super(...arguments);
    this.nextButtonLabel = "Next";
    this.previousButtonLabel = "Back";
    this.skipButtonLabel = "Skip";
    this.startButtonLabel = "Get Started";
    this.slot = "footer";
    this.handleSkip = () => this.handleAction("skip");
    this.handleStart = () => this.handleAction("start");
    this.handleClickNext = () => this.handleAction("next");
    this.handleClickPrev = () => this.handleAction("back");
    this.handleAction = async (actionType) => {
      var _a;
      this.loadingAction = actionType;
      const { currentStep, stepDetails } = interstitialDetailsSignal.get();
      const stepCount = stepDetails.length;
      let resolvePromise;
      const proceedPromise = new Promise((resolve) => {
        resolvePromise = resolve;
      });
      const customEvent = new CustomEvent(this.constructor.eventOnBeforeAction, {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail: {
          step: currentStep,
          stepCount,
          proceed: (allow) => {
            Promise.resolve(allow).then(resolvePromise);
          }
        }
      });
      const eventNotCanceled = this.dispatchEvent(customEvent);
      if (!eventNotCanceled) {
        return;
      }
      const canProceed = this.asyncAction ? await proceedPromise : true;
      this.loadingAction = "";
      if (canProceed) {
        const { carouselAPI } = interstitialDetailsSignal.get();
        if (actionType == "next") {
          carouselAPI === null || carouselAPI === void 0 ? void 0 : carouselAPI.next();
        } else if (actionType === "back") {
          carouselAPI === null || carouselAPI === void 0 ? void 0 : carouselAPI.prev();
        } else {
          (_a = this._handleUserInitiatedClose) === null || _a === void 0 ? void 0 : _a.call(this, actionType);
        }
      }
    };
  }
  firstUpdated(_changedProperties) {
    registerFocusableContainers(this.childNodes.length > 0 ? this : this.shadowRoot);
  }
  updated(_changedProperties) {
    if (_changedProperties.size === 0) {
      this.updateComplete.then(() => {
        const { stepDetails, currentStep } = interstitialDetailsSignal.get();
        const isMultiStep = Array.isArray(stepDetails) && stepDetails.length > 0;
        const lastStepIndex = (stepDetails === null || stepDetails === void 0 ? void 0 : stepDetails.length) - 1;
        if (!isMultiStep) {
          return;
        }
        const focusButton = (selector) => {
          var _a;
          const btn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector);
          btn === null || btn === void 0 ? void 0 : btn.focus();
        };
        if (currentStep === lastStepIndex) {
          focusButton(`.${prefix2}--interstitial-screen--start-btn`);
        } else if (currentStep === 0) {
          focusButton(`.${prefix2}--interstitial-screen--next-btn`);
        }
      });
    }
  }
  _handleUserInitiatedClose(triggeredBy) {
    const init = {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        triggeredBy
      }
    };
    this.dispatchEvent(new CustomEvent(this.constructor.eventRequestClose, init));
  }
  render() {
    const { stepDetails, currentStep, disableActions } = interstitialDetailsSignal.get();
    const { start, next, back, skip } = disableActions;
    const isMulti = (stepDetails === null || stepDetails === void 0 ? void 0 : stepDetails.length) > 0;
    const progStepCeil = (stepDetails === null || stepDetails === void 0 ? void 0 : stepDetails.length) - 1;
    return b`<slot>
      <div class="${blockClass4}--footer">
        ${isMulti ? b`
              <cds-button
                class="${blockClass4}--skip-btn"
                kind="ghost"
                size="lg"
                title="${this.skipButtonLabel}"
                @click="${this.handleSkip}"
                ?disabled="${skip}"
              >
                ${this.skipButtonLabel}
              </cds-button>
            ` : ""}
        <div class="${blockClass4}--footer-controls">
          ${isMulti && currentStep > 0 ? b`
                <cds-button
                  class="${blockClass4}--prev-btn"
                  kind="secondary"
                  size="lg"
                  title="${this.previousButtonLabel}"
                  ?disabled="${back}"
                  @click="${this.handleClickPrev}"
                >
                  ${this.previousButtonLabel}
                  ${this.loadingAction === "back" ? b` <cds-inline-loading slot="icon" aria-live="off">
                      </cds-inline-loading>` : A}
                </cds-button>
              ` : A}
          ${isMulti && currentStep < progStepCeil ? b`
                <cds-button
                  class="${blockClass4}--next-btn"
                  kind="primary"
                  size="lg"
                  title="${this.nextButtonLabel}"
                  ?disabled="${next}"
                  @click="${this.handleClickNext}"
                >
                  ${this.nextButtonLabel}
                  ${this.loadingAction === "next" ? b` <cds-inline-loading slot="icon" aria-live="off">
                      </cds-inline-loading>` : b`${iconLoader(_16, { slot: "icon" })}`}
                </cds-button>
              ` : A}
          ${isMulti && currentStep === progStepCeil || !isMulti ? b`
                <cds-button
                  class="${blockClass4}--start-btn"
                  kind="primary"
                  size="lg"
                  title="${this.startButtonLabel}"
                  ?disabled="${start}"
                  @click="${this.handleStart}"
                >
                  ${this.startButtonLabel}
                  ${this.loadingAction === "start" ? b` <cds-inline-loading slot="icon" aria-live="off">
                      </cds-inline-loading>` : A}
                </cds-button>
              ` : A}
        </div>
      </div>
    </slot>`;
  }
  static get eventRequestClose() {
    return `${prefix2}-request-close`;
  }
  /**
   * The name of the custom event fired just before the action.
   */
  static get eventOnBeforeAction() {
    return `${prefix2}-on-action`;
  }
};
CDSInterstitialScreenFooter.styles = styles5;
__decorate([
  n({ reflect: true })
], CDSInterstitialScreenFooter.prototype, "nextButtonLabel", void 0);
__decorate([
  n({ reflect: true })
], CDSInterstitialScreenFooter.prototype, "previousButtonLabel", void 0);
__decorate([
  n({ reflect: true })
], CDSInterstitialScreenFooter.prototype, "skipButtonLabel", void 0);
__decorate([
  n({ reflect: true })
], CDSInterstitialScreenFooter.prototype, "startButtonLabel", void 0);
__decorate([
  n({ reflect: true })
], CDSInterstitialScreenFooter.prototype, "slot", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "async-action" })
], CDSInterstitialScreenFooter.prototype, "asyncAction", void 0);
__decorate([
  r()
], CDSInterstitialScreenFooter.prototype, "loadingAction", void 0);
CDSInterstitialScreenFooter = __decorate([
  carbonElement(`${prefix2}-interstitial-screen-footer`)
], CDSInterstitialScreenFooter);
/*! Bundled license information:

@carbon/ibm-products-web-components/es/components/interstitial-screen/interstitial-screen-context.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon/ibm-products-web-components/es/utilities/manageFocusTrap/manageFocusTrap.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon/ibm-products-web-components/es/components/interstitial-screen/interstitial-screen.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon/ibm-products-web-components/es/components/interstitial-screen/interstitial-screen-header.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@carbon/ibm-products-web-components/es/components/interstitial-screen/interstitial-screen-body.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon/ibm-products-web-components/es/components/interstitial-screen/interstitial-screen-body-item.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@carbon/ibm-products-web-components/es/components/interstitial-screen/interstitial-screen-footer.js:
  (**
   * @license
   *
   * Copyright IBM Corp. 2025
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
