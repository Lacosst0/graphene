import {
  FormMixin
} from "./chunk-MNFEJBUN.js";
import {
  HostListener
} from "./chunk-5HWAKYGL.js";
import {
  HostListenerMixin
} from "./chunk-TGGEFEEZ.js";
import {
  FocusMixin
} from "./chunk-73FE5HOG.js";
import {
  e as e2
} from "./chunk-YOLTZNLE.js";
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

// node_modules/lodash-es/isObject.js
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject;

// node_modules/lodash-es/_freeGlobal.js
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;

// node_modules/lodash-es/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;

// node_modules/lodash-es/now.js
var now = function() {
  return root_default.Date.now();
};
var now_default = now;

// node_modules/lodash-es/_trimmedEndIndex.js
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var trimmedEndIndex_default = trimmedEndIndex;

// node_modules/lodash-es/_baseTrim.js
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex_default(string) + 1).replace(reTrimStart, "") : string;
}
var baseTrim_default = baseTrim;

// node_modules/lodash-es/_Symbol.js
var Symbol = root_default.Symbol;
var Symbol_default = Symbol;

// node_modules/lodash-es/_getRawTag.js
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e3) {
  }
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var getRawTag_default = getRawTag;

// node_modules/lodash-es/_objectToString.js
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString;

// node_modules/lodash-es/_baseGetTag.js
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var baseGetTag_default = baseGetTag;

// node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

// node_modules/lodash-es/isSymbol.js
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
}
var isSymbol_default = isSymbol;

// node_modules/lodash-es/toNumber.js
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol_default(value)) {
    return NAN;
  }
  if (isObject_default(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject_default(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim_default(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_default = toNumber;

// node_modules/lodash-es/debounce.js
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max;
var nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber_default(wait) || 0;
  if (isObject_default(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber_default(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now_default();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now_default());
  }
  function debounced() {
    var time = now_default(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var debounce_default = debounce;

// node_modules/lodash-es/throttle.js
var FUNC_ERROR_TEXT2 = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT2);
  }
  if (isObject_default(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce_default(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
var throttle_default = throttle;

// node_modules/@carbon/web-components/es/components/slider/slider.scss.js
var styles = i(['.cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-background:var(--cds-layer-background-01,#fff);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-background:var(--cds-layer-background-02,#f4f4f4);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-background:var(--cds-layer-background-03,#fff);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}.cds--layer-one.cds--layer__with-background,.cds--layer-three.cds--layer__with-background,.cds--layer-two.cds--layer__with-background{background-color:var(--cds-layer-background)}@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}input:-webkit-autofill,input:-webkit-autofill:focus,input:-webkit-autofill:hover,textarea:-webkit-autofill,textarea:-webkit-autofill:focus,textarea:-webkit-autofill:hover{box-shadow:0 0 0 1000px var(--cds-field) inset;-webkit-text-fill-color:var(--cds-text-primary,#161616)}.cds--fieldset{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--fieldset *,.cds--fieldset :after,.cds--fieldset :before{box-sizing:inherit}.cds--form-item{align-items:flex-start;display:flex;flex:1 1 auto;flex-direction:column;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--label html{font-size:100%}.cds--label body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--label code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--label strong{font-weight:600}.cds--label{color:var(--cds-text-secondary,#525252);display:inline-block;font-weight:var(--cds-label-01-font-weight,400);font-weight:400;line-height:var(--cds-label-01-line-height,1.33333);line-height:1rem;margin-block-end:.5rem;vertical-align:baseline}.cds--label,.cds--label .cds--toggletip-label{font-size:var(--cds-label-01-font-size,.75rem);letter-spacing:var(--cds-label-01-letter-spacing,.32px)}.cds--label .cds--toggletip-label{font-weight:var(--cds-label-01-font-weight,400);line-height:var(--cds-label-01-line-height,1.33333)}.cds--label--no-margin{margin-block-end:0}.cds--label+.cds--tooltip{inset-block-start:.2rem;inset-inline-start:.5rem;position:relative}.cds--label+.cds--tooltip .cds--tooltip__trigger{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--label+.cds--tooltip .cds--tooltip__trigger *,.cds--label+.cds--tooltip .cds--tooltip__trigger :after,.cds--label+.cds--tooltip .cds--tooltip__trigger :before{box-sizing:inherit}.cds--label+.cds--tooltip .cds--tooltip__trigger::-moz-focus-inner{border:0}.cds--label+.cds--tooltip .cds--tooltip__trigger{align-items:center;display:flex;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);justify-content:center;letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}.cds--label+.cds--tooltip .cds--tooltip__trigger:focus{outline:1px solid var(--cds-focus,#0f62fe)}.cds--label+.cds--tooltip .cds--tooltip__trigger svg{fill:var(--cds-icon-secondary,#525252)}.cds--label+.cds--tooltip .cds--tooltip__trigger svg :hover{fill:var(--cds-icon-primary,#161616)}.cds--label+.cds--toggletip{inset-block-start:.2rem;inset-inline-start:.5rem}.cds--label.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--label.cds--skeleton:active,.cds--label.cds--skeleton:focus,.cds--label.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--label.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--label.cds--skeleton:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--label.cds--skeleton{background:CanvasText}.cds--label.cds--skeleton:before{background:Canvas;forced-color-adjust:none}}.cds--label.cds--skeleton{block-size:.875rem;inline-size:4.6875rem}input[type=number],input[type=text].cds--number{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif}.cds--combo-box[data-invalid]:not(.cds--multi-select--selected) .cds--text-input:not(:focus),.cds--list-box[data-invalid]:not(.cds--multi-select--invalid--focused,.cds--combo-box--invalid--focused),.cds--number[data-invalid] input[type=number]:not(:focus),.cds--number[data-invalid] input[type=text]:not(:focus),.cds--select-input__wrapper[data-invalid] .cds--select-input:not(:focus),.cds--text-area__wrapper[data-invalid]>.cds--text-area--invalid:not(:focus),.cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline:2px solid var(--cds-support-error,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.cds--combo-box[data-invalid]:not(.cds--multi-select--selected) .cds--text-input:not(:focus),.cds--list-box[data-invalid]:not(.cds--multi-select--invalid--focused,.cds--combo-box--invalid--focused),.cds--number[data-invalid] input[type=number]:not(:focus),.cds--number[data-invalid] input[type=text]:not(:focus),.cds--select-input__wrapper[data-invalid] .cds--select-input:not(:focus),.cds--text-area__wrapper[data-invalid]>.cds--text-area--invalid:not(:focus),.cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline-style:dotted}}.cds--date-picker-input__wrapper--invalid~.cds--form-requirement,.cds--date-picker-input__wrapper--warn~.cds--form-requirement,.cds--date-picker-input__wrapper~.cds--form-requirement,.cds--list-box--warning~.cds--form-requirement,.cds--list-box[data-invalid]~.cds--form-requirement,.cds--number[data-invalid] .cds--number__input-wrapper~.cds--form-requirement,.cds--number__input-wrapper--warning~.cds--form-requirement,.cds--select--warning .cds--select-input__wrapper~.cds--form-requirement,.cds--select-input__wrapper[data-invalid]~.cds--form-requirement,.cds--text-area__wrapper--warn~.cds--form-requirement,.cds--text-area__wrapper[data-invalid]~.cds--form-requirement,.cds--text-input__field-wrapper--warning>.cds--text-input~.cds--form-requirement,.cds--text-input__field-wrapper--warning~.cds--form-requirement,.cds--text-input__field-wrapper[data-invalid]~.cds--form-requirement,.cds--time-picker--invalid~.cds--form-requirement,.cds--time-picker--warning~.cds--form-requirement,.cds--time-picker[data-invalid]~.cds--form-requirement,input[data-invalid]~.cds--form-requirement{display:block;font-weight:400;max-block-size:12.5rem;overflow:visible}.cds--select--inline.cds--select--warning .cds--select-input--inline__wrapper~.cds--form-requirement,.cds--select-input--inline__wrapper[data-invalid]~.cds--form-requirement{display:inline-flex;inline-size:100%;margin:0;margin-block-end:0;max-block-size:100%;overflow:visible;padding-inline-start:.5rem}.cds--date-picker-input__wrapper--invalid~.cds--form-requirement,.cds--date-picker-input__wrapper~.cds--form-requirement,.cds--list-box[data-invalid]~.cds--form-requirement,.cds--number[data-invalid] .cds--number__input-wrapper~.cds--form-requirement,.cds--select-input--inline__wrapper[data-invalid]~.cds--form-requirement,.cds--select-input__wrapper[data-invalid]~.cds--form-requirement,.cds--text-area__wrapper[data-invalid]~.cds--form-requirement,.cds--text-input__field-wrapper[data-invalid]~.cds--form-requirement,.cds--time-picker--invalid~.cds--form-requirement,.cds--time-picker[data-invalid]~.cds--form-requirement,input[data-invalid]~.cds--form-requirement{color:var(--cds-text-error,#da1e28)}.cds--form--fluid .cds--text-input__field-wrapper--warning,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]{display:block}.cds--form--fluid input[data-invalid]{outline:none}.cds--form--fluid .cds--form-requirement{margin:0;padding:.5rem 2.5rem .5rem 1rem}input:not(output,[data-invalid]):-moz-ui-invalid{box-shadow:none}.cds--form-requirement html{font-size:100%}.cds--form-requirement body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--form-requirement code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--form-requirement strong{font-weight:600}.cds--form-requirement{display:none;font-size:var(--cds-helper-text-01-font-size,.75rem);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333);margin:.25rem 0 0;max-block-size:0;overflow:hidden}.cds--select--inline .cds--form__helper-text{margin-block-start:0}.cds--form__helper-text{color:var(--cds-text-helper,#6f6f6f);font-size:var(--cds-helper-text-01-font-size,.75rem);inline-size:100%;letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333);margin-block-start:.25rem;opacity:1;z-index:0}.cds--form__helper-text--disabled,.cds--label--disabled,fieldset[disabled] .cds--form__helper-text,fieldset[disabled] .cds--label{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--assistive-text,.cds--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--text-input{--cds-layout-size-height-local:clamp(max(var(--cds-layout-size-height-min),var(--cds-layout-size-height-sm)),var(--cds-layout-size-height,var(--cds-layout-size-height-md)),min(var(--cds-layout-size-height-max),var(--cds-layout-size-height-lg)));--cds-layout-density-padding-inline-local:clamp(var(--cds-layout-density-padding-inline-min),var(--cds-layout-density-padding-inline,var(--cds-layout-density-padding-inline-normal)),var(--cds-layout-density-padding-inline-max));border:0;box-sizing:border-box;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--text-input *,.cds--text-input :after,.cds--text-input :before{box-sizing:inherit}.cds--text-input{background-color:var(--cds-field);block-size:var(--cds-layout-size-height-local);border:none;border-block-end:1px solid var(--cds-border-strong);color:var(--cds-text-primary,#161616);font-family:inherit;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);inline-size:100%;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);outline:2px solid transparent;outline-offset:-2px;padding:0 var(--cds-layout-density-padding-inline-local);transition:background-color 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9)}.cds--text-input:active,.cds--text-input:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--text-input:active,.cds--text-input:focus{outline-style:dotted}}.cds--text-input-wrapper svg[hidden]{display:none}.cds--password-input{padding-inline-end:2.5rem}.cds--text-input--sm.cds--password-input{padding-inline-end:2rem}.cds--text-input--lg.cds--password-input{padding-inline-end:3rem}.cds--text-input::-moz-placeholder{color:var(--cds-text-placeholder,hsla(0,0%,9%,.4));opacity:1}.cds--text-input::placeholder{color:var(--cds-text-placeholder,hsla(0,0%,9%,.4));opacity:1}.cds--text-input--light{background-color:var(--cds-field-02,#fff)}.cds--text-input__field-wrapper{display:flex;inline-size:100%;position:relative}.cds--text-input__invalid-icon{position:absolute;fill:var(--cds-support-error,#da1e28);inset-block-start:50%;inset-inline-end:1rem;transform:translateY(-50%)}.cds--text-input__invalid-icon--warning{fill:var(--cds-support-warning,#f1c21b)}.cds--text-input__invalid-icon--warning path:first-of-type{fill:#000;opacity:1}.cds--text-input--password__visibility{align-items:center;display:inline-flex;overflow:visible;position:relative}.cds--text-input--password__visibility:focus{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--text-input--password__visibility:focus{outline-style:dotted}}.cds--text-input--password__visibility{cursor:pointer}.cds--text-input--password__visibility:focus{outline:1px solid transparent}.cds--text-input--password__visibility:focus svg{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--text-input--password__visibility:focus svg{outline-style:dotted}}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after,.cds--text-input--password__visibility:before{align-items:center;display:flex;opacity:0;pointer-events:none;position:absolute;z-index:6000}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after,.cds--text-input--password__visibility:before{display:inline-block}}.cds--text-input--password__visibility:after,.cds--text-input--password__visibility:before{transition:opacity 70ms cubic-bezier(.2,0,.38,.9)}@media screen and (prefers-reduced-motion:reduce){.cds--text-input--password__visibility:after,.cds--text-input--password__visibility:before{transition:none}}.cds--text-input--password__visibility.cds--tooltip--a11y:after,.cds--text-input--password__visibility.cds--tooltip--a11y:before{transition:none}.cds--text-input--password__visibility:before{block-size:0;border-style:solid;content:"";inline-size:0}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text{box-sizing:content-box;color:inherit;opacity:1;white-space:normal;word-break:break-word}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after{background-color:var(--cds-background-inverse,#393939);block-size:auto;border-radius:.125rem;box-shadow:0 2px 6px var(--cds-shadow,rgba(0,0,0,.3));color:var(--cds-text-inverse,#fff);font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:400;font-weight:var(--cds-body-compact-01-font-weight,400);inline-size:-moz-max-content;inline-size:max-content;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);max-inline-size:13rem;min-inline-size:1.5rem;padding:.1875rem 1rem;text-align:start;transform:translateX(-50%);z-index:6000}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after{inline-size:auto}}@supports (-ms-accelerator:true){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after{inline-size:auto}}@supports (-ms-ime-align:auto){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after{inline-size:auto}}@media screen and (-ms-high-contrast:active),screen and (prefers-contrast){.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after{border:1px solid transparent}}.cds--text-input--password__visibility:after{content:attr(aria-label)}.cds--text-input--password__visibility.cds--tooltip--a11y:after{content:none}.cds--text-input--password__visibility.cds--tooltip--visible:after,.cds--text-input--password__visibility.cds--tooltip--visible:before,.cds--text-input--password__visibility:focus:after,.cds--text-input--password__visibility:focus:before,.cds--text-input--password__visibility:hover:after,.cds--text-input--password__visibility:hover:before{opacity:1}@keyframes cds--tooltip-fade{0%{opacity:0}to{opacity:1}}.cds--text-input--password__visibility.cds--tooltip--visible .cds--assistive-text,.cds--text-input--password__visibility.cds--tooltip--visible+.cds--assistive-text,.cds--text-input--password__visibility:focus .cds--assistive-text,.cds--text-input--password__visibility:focus+.cds--assistive-text,.cds--text-input--password__visibility:hover .cds--assistive-text,.cds--text-input--password__visibility:hover+.cds--assistive-text{margin:auto;overflow:visible;clip:auto}.cds--text-input--password__visibility.cds--tooltip--visible .cds--assistive-text,.cds--text-input--password__visibility.cds--tooltip--visible+.cds--assistive-text,.cds--text-input--password__visibility.cds--tooltip--visible.cds--tooltip--a11y:before,.cds--text-input--password__visibility:focus .cds--assistive-text,.cds--text-input--password__visibility:focus+.cds--assistive-text,.cds--text-input--password__visibility:focus.cds--tooltip--a11y:before,.cds--text-input--password__visibility:hover .cds--assistive-text,.cds--text-input--password__visibility:hover+.cds--assistive-text,.cds--text-input--password__visibility:hover.cds--tooltip--a11y:before{animation:cds--tooltip-fade 70ms cubic-bezier(.2,0,.38,.9)}.cds--text-input--password__visibility.cds--tooltip--hidden .cds--assistive-text,.cds--text-input--password__visibility.cds--tooltip--hidden+.cds--assistive-text{margin:-1px;overflow:hidden;clip:rect(0,0,0,0)}.cds--text-input--password__visibility.cds--tooltip--hidden.cds--tooltip--a11y:before{animation:none;opacity:0}.cds--text-input--password__visibility .cds--assistive-text:after{block-size:.75rem;content:"";display:block;inline-size:100%;inset-block-start:-.75rem;inset-inline-start:0;position:absolute}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after,.cds--text-input--password__visibility:before{inset-block-end:0;inset-inline-start:50%}.cds--text-input--password__visibility:before{border-color:transparent transparent var(--cds-background-inverse,#393939);border-width:0 .25rem .3125rem;inset-block-end:-.5rem;transform:translate(-50%,100%)}.cds--text-input--password__visibility .cds--assistive-text,.cds--text-input--password__visibility+.cds--assistive-text,.cds--text-input--password__visibility:after{inset-block-end:-.8125rem;transform:translate(-50%,100%)}.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger{align-items:center;background:none;block-size:100%;border:0;cursor:pointer;display:flex;inline-size:2.5rem;inset-inline-end:0;justify-content:center;min-block-size:auto;outline:2px solid transparent;outline-offset:-2px;padding:0;position:absolute;transition:outline 70ms cubic-bezier(.2,0,.38,.9)}.cds--toggle-password-tooltip .cds--popover{inset-inline-start:-2.5rem}.cds--toggle-password-tooltip .cds--popover-content{min-inline-size:2.5rem}.cds--text-input--sm+.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger{inline-size:2rem}.cds--text-input--lg+.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger{inline-size:3rem}.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger svg{fill:var(--cds-icon-primary,#161616)}.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--btn.cds--text-input--password__visibility__toggle.cds--tooltip__trigger:focus{outline-style:dotted}}.cds--text-input--invalid,.cds--text-input--warning{padding-inline-end:2.5rem}.cds--text-input--invalid.cds--password-input{padding-inline-end:4rem}.cds--text-input--invalid+.cds--text-input--password__visibility__toggle{inset-inline-end:1rem}.cds--password-input-wrapper .cds--text-input__invalid-icon{inset-inline-end:2.5rem}.cds--text-input:disabled~.cds--text-input--password__visibility__toggle.cds--tooltip__trigger{cursor:not-allowed}.cds--text-input--password__visibility__toggle:disabled.cds--tooltip__trigger svg,.cds--text-input:disabled~.cds--text-input--password__visibility__toggle.cds--tooltip__trigger svg,.cds--text-input:disabled~.cds--text-input--password__visibility__toggle.cds--tooltip__trigger svg:hover{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--text-input--password__visibility__toggle:disabled.cds--tooltip__trigger{cursor:default}.cds--text-input--password__visibility__toggle:disabled.cds--tooltip__trigger:hover svg{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--text-input--password__visibility__toggle:disabled.cds--tooltip__trigger:hover{cursor:default}.cds--text-input__counter-alert{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px}.cds--text-input:disabled{background-color:var(--cds-field);border-block-end:1px solid transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed;outline:2px solid transparent;outline-offset:-2px;-webkit-text-fill-color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--text-input--light:disabled{background-color:var(--cds-field-02,#fff)}.cds--text-input:disabled::-moz-placeholder{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));opacity:1}.cds--text-input:disabled::placeholder{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));opacity:1}.cds--text-input--invalid{outline:2px solid var(--cds-support-error,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.cds--text-input--invalid{outline-style:dotted}}.cds--text-input--invalid{box-shadow:none}.cds--text-input--invalid .cds--text-input--password__visibility__toggle{inset-inline-end:2.5rem}.cds--skeleton.cds--text-input{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--skeleton.cds--text-input:active,.cds--skeleton.cds--text-input:focus,.cds--skeleton.cds--text-input:hover{border:none;cursor:default;outline:none}.cds--skeleton.cds--text-input:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--skeleton.cds--text-input:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--skeleton.cds--text-input{background:CanvasText}.cds--skeleton.cds--text-input:before{background:Canvas;forced-color-adjust:none}}.cds--form--fluid .cds--text-input-wrapper{background:var(--cds-field);position:relative;transition:background-color 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9)}.cds--form--fluid .cds--label{align-items:center;block-size:1rem;display:flex;inset-block-start:.8125rem;inset-inline-start:1rem;margin:0;position:absolute;z-index:1}.cds--form--fluid .cds--form__helper-text{display:none}.cds--form--fluid .cds--text-input{min-block-size:4rem;padding:2rem 1rem .8125rem}.cds--form--fluid .cds--text-input__divider,.cds--text-input__divider{display:none}.cds--form--fluid .cds--text-input--invalid,.cds--form--fluid .cds--text-input--warning{border-block-end:none}.cds--form--fluid .cds--text-input--invalid+.cds--text-input__divider,.cds--form--fluid .cds--text-input--warning+.cds--text-input__divider{border-color:var(--cds-border-subtle);border-style:solid;border-block-end:none;display:block;margin:0 1rem}.cds--form--fluid .cds--text-input__invalid-icon{inset-block-start:5rem}.cds--form--fluid .cds--text-input__field-wrapper--warning>.cds--text-input--warning,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid{outline:none}.cds--form--fluid .cds--text-input__field-wrapper--warning{border-block-end:1px solid var(--cds-border-strong)}.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]:not(:focus){outline:2px solid var(--cds-support-error,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]:not(:focus){outline-style:dotted}}.cds--form--fluid .cds--text-input__field-wrapper--warning:focus-within,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]:focus-within{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--form--fluid .cds--text-input__field-wrapper--warning:focus-within,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]:focus-within{outline-style:dotted}}.cds--form--fluid .cds--text-input__field-wrapper--warning>.cds--text-input--warning:focus,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:focus{outline:none}.cds--text-input-wrapper.cds--text-input-wrapper--inline{flex-flow:row wrap}.cds--text-input-wrapper .cds--label--inline{flex:1;margin:.8125rem 0 0;overflow-wrap:break-word;word-break:break-word}.cds--text-input-wrapper .cds--label--inline--sm{margin-block-start:.5625rem}.cds--text-input-wrapper .cds--label--inline--lg{margin-block-start:1.0625rem}.cds--text-input__label-helper-wrapper{flex:2;flex-direction:column;margin-inline-end:1.5rem;max-inline-size:8rem;overflow-wrap:break-word}.cds--text-input-wrapper .cds--form__helper-text--inline{margin-block-start:.125rem}.cds--text-input__field-outer-wrapper{align-items:flex-start;display:flex;flex:1 1 auto;flex-direction:column;inline-size:100%}.cds--text-input__field-outer-wrapper--inline{flex:8;flex-direction:column}.cds--text-input-wrapper--inline .cds--form-requirement{display:block;font-weight:400;max-block-size:12.5rem;overflow:visible}.cds--text-input-wrapper--inline--invalid .cds--form-requirement{color:var(--cds-text-error,#da1e28)}.cds--form--fluid .cds--text-input-wrapper--readonly,.cds--text-input-wrapper--readonly .cds--text-input{background:transparent;border-block-end-color:var(--cds-border-subtle)}.cds--text-input__field-wrapper .cds--ai-label,.cds--text-input__field-wrapper .cds--slug,.cds--text-input__field-wrapper--decorator .cds--text-input__field-inner-wrapper--decorator>*{inset-block-start:50%;inset-inline-end:1rem;position:absolute;transform:translateY(-50%)}.cds--text-input__field-wrapper--decorator .cds--text-input:has(~.cds--text-input__field-inner-wrapper--decorator .cds--ai-label):not(:has(~.cds--text-input__field-inner-wrapper--decorator .cds--ai-label--revert)),.cds--text-input__field-wrapper--slug .cds--text-input:has(~.cds--ai-label):not(:has(~.cds--ai-label--revert)),.cds--text-input__field-wrapper--slug .cds--text-input:has(~.cds--slug):not(:has(~.cds--slug--revert)){background-image:linear-gradient(0deg,var(--cds-ai-aura-start-sm,rgba(69,137,255,.16)) 0,15%,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%,transparent 100%);border-block-end-color:var(--cds-ai-border-strong,#4589ff)}.cds--text-input__field-wrapper--decorator .cds--text-input:has(~.cds--text-input__field-inner-wrapper--decorator>*),.cds--text-input__field-wrapper--slug .cds--text-input:has(~.cds--ai-label),.cds--text-input__field-wrapper--slug .cds--text-input:has(~.cds--slug){padding-inline-end:2.5rem}.cds--text-input--invalid:has(~.cds--ai-label),.cds--text-input--invalid:has(~.cds--slug),.cds--text-input--invalid:has(~.cds--text-input__field-inner-wrapper--decorator>*),.cds--text-input--warning:has(~.cds--ai-label),.cds--text-input--warning:has(~.cds--slug),.cds--text-input--warning:has(~.cds--text-input__field-inner-wrapper--decorator>*){padding-inline-end:4rem}.cds--text-input--invalid~.cds--ai-label,.cds--text-input--invalid~.cds--slug,.cds--text-input--invalid~.cds--text-input__field-inner-wrapper--decorator>*,.cds--text-input--warning~.cds--ai-label,.cds--text-input--warning~.cds--slug,.cds--text-input--warning~.cds--text-input__field-inner-wrapper--decorator>*{inset-inline-end:2.5rem}.cds--text-input__field-wrapper--decorator .cds--text-input__field-inner-wrapper--decorator:not(:has(.cds--ai-label))>*{block-size:1rem}.cds--text-input__label-wrapper{display:flex;inline-size:100%;justify-content:space-between}.cds--slider-container{align-items:center;display:flex;gap:1rem;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none}.cds--slider{cursor:pointer;inline-size:100%;max-inline-size:40rem;min-inline-size:12.5rem;padding:1rem 0;position:relative}.cds--slider-container--two-handles .cds--slider{margin-inline:.25rem}.cds--slider__range-label{color:var(--cds-text-primary,#161616);font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);white-space:nowrap}.cds--slider__track{block-size:.125rem;inline-size:100%;transform:translateY(-50%)}.cds--slider__track,.cds--slider__track:before{background:var(--cds-border-subtle);position:absolute}.cds--slider__track:before{block-size:.25rem;content:"";display:inline-block;inline-size:.125rem;inset-block-start:-.3125rem;inset-inline-start:50%;transform:translate(-50%)}.cds--slider__filled-track{background:var(--cds-layer-selected-inverse,#161616);block-size:.125rem;inline-size:100%;pointer-events:none;position:absolute;transform:translateY(-50%);transform-origin:left;transition:background .11s cubic-bezier(.2,0,.38,.9)}.cds--slider__thumb-wrapper{block-size:.875rem;inline-size:.875rem;position:absolute;transform:translate(-50%,-50%);z-index:3;--cds-tooltip-padding-inline:0.5rem;--cds-popover-offset:0.5rem}.cds--slider-container--rtl .cds--slider__thumb-wrapper{transform:translate(50%,-50%)}.cds--slider__thumb-wrapper--lower,.cds--slider__thumb-wrapper--upper{block-size:24px;inline-size:16px;--cds-popover-offset:var(--cds-popover-caret-height,0.5rem)}.cds--slider__thumb-wrapper--lower{transform:translate(-100%,-50%)}.cds--slider__thumb-wrapper--lower>.cds--popover>.cds--popover-content{transform:translate(50%,calc(-100% - var(--cds-popover-offset, 0rem)))}.cds--slider__thumb-wrapper--lower>.cds--popover>.cds--popover-caret{inset-inline-start:revert;transform:translate(50%,calc(var(--cds-popover-offset, 0rem)*-1))}.cds--slider-container--rtl .cds--slider__thumb-wrapper--lower{transform:translate(100%,-50%)}.cds--slider-container--rtl .cds--slider__thumb-wrapper--lower>.cds--popover>.cds--popover-content{transform:translateY(calc(-100% - var(--cds-popover-offset, 0rem)))}.cds--slider-container--rtl .cds--slider__thumb-wrapper--lower>.cds--popover>.cds--popover-caret{transform:translate(-50%,calc(var(--cds-popover-offset, 0rem)*-1))}.cds--slider__thumb-wrapper--upper{transform:translateY(-50%)}.cds--slider__thumb-wrapper--upper>.cds--popover>.cds--popover-content{transform:translate(-50%,calc(-100% - var(--cds-popover-offset, 0rem)))}.cds--slider__thumb-wrapper--upper>.cds--popover>.cds--popover-caret{transform:translate(-50%,calc(var(--cds-popover-offset, 0rem)*-1))}.cds--slider-container--rtl .cds--slider__thumb-wrapper--upper{transform:translateY(-50%)}.cds--slider-container--rtl .cds--slider__thumb-wrapper--upper>.cds--popover>.cds--popover-content{transform:translateY(calc(-100% - var(--cds-popover-offset, 0rem)))}.cds--slider-container--rtl .cds--slider__thumb-wrapper--upper>.cds--popover>.cds--popover-caret{transform:translate(50%,calc(var(--cds-popover-offset, 0rem)*-1))}.cds--slider__thumb{background:var(--cds-layer-selected-inverse,#161616);border-radius:50%;box-shadow:inset 0 0 0 1px transparent,inset 0 0 0 2px transparent;inset:0;outline:none;position:absolute;transition:transform .11s cubic-bezier(.2,0,.38,.9),background .11s cubic-bezier(.2,0,.38,.9),box-shadow .11s cubic-bezier(.2,0,.38,.9)}.cds--slider__thumb:hover{transform:scale(1.4286)}.cds--slider__thumb:focus{background-color:var(--cds-interactive,#0f62fe);box-shadow:inset 0 0 0 2px var(--cds-interactive,#0f62fe),inset 0 0 0 3px var(--cds-layer);transform:scale(1.4286)}.cds--slider__thumb:active{box-shadow:inset 0 0 0 2px var(--cds-interactive,#0f62fe);transform:scale(1.4286)}.cds--slider__thumb-icon{fill:var(--cds-layer-selected-inverse,#161616)}.cds--slider__thumb-icon--focus{display:none;fill:var(--cds-interactive,#0f62fe)}.cds--slider__thumb--lower,.cds--slider__thumb--upper{background-color:transparent;border-radius:unset;box-shadow:none;inset:0;position:absolute;transition:none}.cds--slider__thumb--lower:before,.cds--slider__thumb--upper:before{background:var(--cds-background,#fff);block-size:.125rem;content:"";display:block;inline-size:.375rem;inset-block-start:calc(50% - .0625rem);inset-inline-end:0;position:absolute;z-index:-1}.cds--slider__thumb--lower:hover,.cds--slider__thumb--upper:hover{transform:none}.cds--slider__thumb--lower:hover .cds--slider__thumb-icon,.cds--slider__thumb--upper:hover .cds--slider__thumb-icon{fill:var(--cds-text-secondary,#525252)}.cds--slider__thumb--lower:active,.cds--slider__thumb--upper:active{box-shadow:none;transform:none}.cds--slider__thumb--lower:focus,.cds--slider__thumb--upper:focus{background-color:transparent;box-shadow:none;transform:none}.cds--slider__thumb--lower:focus .cds--slider__thumb-icon,.cds--slider__thumb--upper:focus .cds--slider__thumb-icon{display:none;fill:var(--cds-interactive,#0f62fe)}.cds--slider__thumb--lower:focus .cds--slider__thumb-icon--focus,.cds--slider__thumb--upper:focus .cds--slider__thumb-icon--focus{display:block}.cds--slider__thumb--lower:focus:before,.cds--slider__thumb--upper:focus:before{inline-size:100%}.cds--slider__thumb--upper{transform:none}.cds--slider__thumb--upper:before{inset-inline:0 auto}.cds--slider__thumb--upper:active,.cds--slider__thumb--upper:focus,.cds--slider__thumb--upper:hover{transform:none}.cds--slider__input{display:none}.cds--slider-text-input-wrapper{position:relative}.cds--slider-text-input-wrapper--hidden{display:none}.cds--slider-text-input,.cds-slider-text-input{-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield;block-size:2.5rem;inline-size:4rem}.cds--slider-text-input::-webkit-inner-spin-button,.cds--slider-text-input::-webkit-outer-spin-button,.cds-slider-text-input::-webkit-inner-spin-button,.cds-slider-text-input::-webkit-outer-spin-button{display:none}.cds--slider__thumb-wrapper:focus-within~.cds--slider__filled-track,.cds--slider__thumb:focus~.cds--slider__filled-track{background-color:var(--cds-border-interactive,#0f62fe)}.cds--slider-text-input--warn,.cds--slider-text-input.cds--text-input--invalid{inline-size:6rem;padding-inline-end:3rem}.cds--slider__invalid-icon{position:absolute;fill:var(--cds-support-error,#da1e28);inset-block-start:50%;inset-inline-end:1rem;transform:translateY(-50%)}.cds--slider__validation-msg.cds--form-requirement{display:block;max-block-size:100%;overflow:visible}.cds--slider__validation-msg--invalid{color:var(--cds-text-error,#da1e28)}.cds--slider__invalid-icon.cds--slider__invalid-icon--warning{fill:var(--cds-support-warning,#f1c21b)}.cds--slider__invalid-icon--warning path:first-of-type{fill:#000;opacity:1}.cds--label--disabled~.cds--slider-container>.cds--slider__range-label{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--slider--disabled.cds--slider{cursor:not-allowed}.cds--slider--disabled .cds--slider__thumb{background-color:var(--cds-border-disabled,#c6c6c6)}.cds--slider--disabled .cds--slider__thumb:hover{cursor:not-allowed;transform:none}.cds--slider--disabled .cds--slider__thumb:focus{background-color:var(--cds-border-disabled,#c6c6c6);box-shadow:none;outline:none;transform:none}.cds--slider--disabled .cds--slider__thumb:active{background:var(--cds-border-disabled,#c6c6c6);box-shadow:none;transform:none}.cds--slider--disabled .cds--slider__thumb--lower,.cds--slider--disabled .cds--slider__thumb--upper{background-color:transparent}.cds--slider--disabled .cds--slider__thumb--lower:active,.cds--slider--disabled .cds--slider__thumb--lower:focus,.cds--slider--disabled .cds--slider__thumb--lower:hover,.cds--slider--disabled .cds--slider__thumb--upper:active,.cds--slider--disabled .cds--slider__thumb--upper:focus,.cds--slider--disabled .cds--slider__thumb--upper:hover{background-color:transparent;transform:none}.cds--slider--disabled .cds--slider__thumb--lower .cds--slider__thumb-icon,.cds--slider--disabled .cds--slider__thumb--upper .cds--slider__thumb-icon{fill:var(--cds-border-disabled,#c6c6c6)}.cds--slider--disabled .cds--slider__filled-track,.cds--slider--disabled .cds--slider__thumb:focus~.cds--slider__filled-track,.cds--slider--disabled .cds--slider__track{background-color:var(--cds-border-disabled,#c6c6c6)}.cds--slider--disabled~.cds--form-item .cds--slider-text-input,.cds--slider--disabled~.cds--slider-text-input{background-color:var(--cds-field);border:none;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed;transition:none}.cds--slider--disabled~.cds--form-item .cds--slider-text-input:active,.cds--slider--disabled~.cds--form-item .cds--slider-text-input:focus,.cds--slider--disabled~.cds--form-item .cds--slider-text-input:hover,.cds--slider--disabled~.cds--slider-text-input:active,.cds--slider--disabled~.cds--slider-text-input:focus,.cds--slider--disabled~.cds--slider-text-input:hover{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));outline:none}.cds--slider--readonly{cursor:default}.cds--slider-container--readonly .cds--slider__thumb{block-size:0;inline-size:0}.cds--slider-container--readonly .cds--slider__thumb:after,.cds--slider-container--readonly .cds--slider__thumb:before{display:none}.cds--slider-container--readonly .cds--slider-text-input{background-color:transparent}.cds--slider__status-msg.cds--form-requirement{display:block;max-block-size:100%;overflow:visible}.cds--slider-container.cds--skeleton .cds--slider__range-label{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--slider-container.cds--skeleton .cds--slider__range-label:active,.cds--slider-container.cds--skeleton .cds--slider__range-label:focus,.cds--slider-container.cds--skeleton .cds--slider__range-label:hover{border:none;cursor:default;outline:none}.cds--slider-container.cds--skeleton .cds--slider__range-label:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--slider-container.cds--skeleton .cds--slider__range-label:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--slider-container.cds--skeleton .cds--slider__range-label{background:CanvasText}.cds--slider-container.cds--skeleton .cds--slider__range-label:before{background:Canvas;forced-color-adjust:none}}.cds--slider-container.cds--skeleton .cds--slider__range-label{block-size:.75rem;inline-size:1.25rem}.cds--slider-container.cds--skeleton .cds--slider__track{cursor:default;pointer-events:none}.cds--slider-container.cds--skeleton .cds--slider__thumb-wrapper{inset-inline-start:50%}.cds--slider-container.cds--skeleton .cds--slider__thumb{cursor:default;pointer-events:none}.cds--slider-container.cds--skeleton .cds--slider__thumb-wrapper--lower{inset-inline-start:0}.cds--slider-container.cds--skeleton .cds--slider__thumb-wrapper--upper{inset-inline-start:100%}.cds--popover-container.cds--slider__thumb-wrapper{position:absolute}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--slider__thumb{outline:1px solid transparent}.cds--slider__thumb:focus{color:Highlight;outline:1px solid Highlight}.cds--slider__track{outline:1px solid transparent}}:host(cds-slider),:host(cds-slider-skeleton){outline:none;--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}:host(cds-slider) .cds--slider,:host(cds-slider-skeleton) .cds--slider{transform:rotate(0)}:host(cds-slider) .cds-ce--slider__filled-track-container,:host(cds-slider-skeleton) .cds-ce--slider__filled-track-container{transform:rotate(0)}:host(cds-slider) .cds--slider>.cds--slider__thumb,:host(cds-slider-skeleton) .cds--slider>.cds--slider__thumb{block-size:.875rem;inline-size:.875rem;inset:inherit;transform:translate(-50%,-50%);z-index:3}:host(cds-slider) cds-tooltip.cds--slider__thumb-wrapper,:host(cds-slider-skeleton) cds-tooltip.cds--slider__thumb-wrapper{--prefix-tooltip-padding-block:0.125rem;--prefix-popover-caret-width:0.5rem;--prefix-popover-caret-height:0.25rem;--prefix-popover-offset:0.5rem}:host(cds-slider) cds-tooltip.cds--slider__thumb-wrapper cds-tooltip-content::part(content),:host(cds-slider-skeleton) cds-tooltip.cds--slider__thumb-wrapper cds-tooltip-content::part(content){font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);padding:.125rem .5rem}:host(cds-slider) cds-tooltip.cds--slider__thumb-wrapper::part(popover-container),:host(cds-slider-skeleton) cds-tooltip.cds--slider__thumb-wrapper::part(popover-container){block-size:100%;display:block;inline-size:100%}:host(cds-slider) .cds--slider__thumb-wrapper:focus-within~.cds-ce--slider__filled-track-container .cds--slider__filled-track,:host(cds-slider) cds-tooltip.cds--slider__thumb-wrapper:focus-within~.cds-ce--slider__filled-track-container .cds--slider__filled-track,:host(cds-slider-skeleton) .cds--slider__thumb-wrapper:focus-within~.cds-ce--slider__filled-track-container .cds--slider__filled-track,:host(cds-slider-skeleton) cds-tooltip.cds--slider__thumb-wrapper:focus-within~.cds-ce--slider__filled-track-container .cds--slider__filled-track{background-color:var(--cds-interactive,#0f62fe)}:host(cds-slider-input){position:relative}:host(cds-slider-input) input{box-sizing:border-box}:host(cds-slider-input[readonly]) input{background-color:transparent}.cds--slider__thumb-wrapper:focus-within .cds--slider__thumb-icon,cds-tooltip.cds--slider__thumb-wrapper:focus-within .cds--slider__thumb-icon{display:none}.cds--slider__thumb-wrapper:focus-within .cds--slider__thumb-icon--focus,cds-tooltip.cds--slider__thumb-wrapper:focus-within .cds--slider__thumb-icon--focus{display:block}.cds--slider__thumb-disabled{pointer-events:none}:host(cds-slider-skeleton) .cds--slider>.cds--slider__thumb{inset-inline-start:50%}:host(cds-slider-skeleton) .cds--slider__thumb--lower,:host(cds-slider-skeleton) .cds--slider__thumb--upper{block-size:inherit;inline-size:inherit;inset:initial;inset-inline-start:auto;transform:unset}.cds--slider--readonly .cds--slider__filled-track{background:var(--cds-border-inverse,#161616)}']);

// node_modules/@carbon/web-components/es/components/slider/slider.js
var THUMB_DIRECTION = {
  Left: -1,
  ArrowLeft: -1,
  Up: -1,
  ArrowUp: -1,
  Right: 1,
  ArrowRight: 1,
  Down: 1,
  ArrowDown: 1
};
var EVENT_THROTTLE = 16;
var CDSSlider = class CDSSlider2 extends HostListenerMixin(FormMixin(FocusMixin(i2))) {
  constructor() {
    super(...arguments);
    this._cachedRateUpper = 1;
    this._cachedRate = 0;
    this.dragCooldownTimeout = null;
    this.dragCoolDown = false;
    this._max = "100";
    this._min = "0";
    this._step = "1";
    this._stepMultiplier = "4";
    this._throttledHandlePointermoveImpl = null;
    this._dragging = false;
    this._draggingUpper = false;
    this.onDrag = throttle_default(this._startDrag, EVENT_THROTTLE, {
      leading: true,
      trailing: false
    });
    this._handlePointermove = (event) => {
      const { disabled, _dragging: dragging, _draggingUpper: draggingUpper } = this;
      if (!disabled && (dragging || draggingUpper)) {
        this._throttledHandlePointermoveImpl(event);
      }
    };
    this._endDrag = () => {
      var _a, _b, _c, _d;
      const wasDragging = this._dragging;
      const wasDraggingUpper = this._draggingUpper;
      if (this._dragging || this._draggingUpper) {
        this.dragCoolDown = true;
      } else {
        this.dragCoolDown = false;
      }
      if (this._dragging) {
        this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
          bubbles: true,
          composed: true,
          detail: {
            value: this.value
          }
        }));
        this._dragging = false;
        this._thumbNode.style.touchAction = "";
      } else if (this._draggingUpper) {
        this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
          bubbles: true,
          composed: true,
          detail: {
            value: this.unstable_valueUpper
          }
        }));
        this._draggingUpper = false;
        this._thumbNodeUpper.style.touchAction = "";
      }
      if (wasDragging) {
        const shouldKeepOpen = ((_a = this._thumbNode) === null || _a === void 0 ? void 0 : _a.matches(":hover")) || ((_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.activeElement) === this._thumbNode;
        if (!shouldKeepOpen) {
          this._setThumbTooltipOpen(this._thumbNode, false);
        }
      } else if (wasDraggingUpper) {
        const shouldKeepOpen = ((_c = this._thumbNodeUpper) === null || _c === void 0 ? void 0 : _c.matches(":hover")) || ((_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.activeElement) === this._thumbNodeUpper;
        if (!shouldKeepOpen) {
          this._setThumbTooltipOpen(this._thumbNodeUpper, false);
        }
      }
      if (this._dragging || this._draggingUpper) {
        this.dragCooldownTimeout = window.setTimeout(() => {
          this.dragCoolDown = false;
        }, 100);
      }
    };
    this._handleChangeInput = (event) => {
      var _a;
      const input = event.target;
      const inputElement = (_a = input.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("input");
      this.isValid = input.tagName === "CDS-SLIDER-INPUT" ? this._getInputValidity(input) : this.isValid;
      this.warn = this._getInputWarnigState(inputElement);
      const eventContainer = event.target.id;
      const { detail } = event;
      const { intermediate, value } = detail;
      this.warnText = intermediate ? `The inputted value ${intermediate} was corrected to the nearest allowed digit` : "";
      if (intermediate !== value) {
        if (eventContainer === "upper") {
          this.unstable_valueUpper = value;
        } else {
          this.value = value;
        }
      }
      const valueMain = eventContainer === "upper" ? this.unstable_valueUpper : this.value;
      if (valueMain !== "") {
        this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
          bubbles: true,
          composed: true,
          detail: {
            value: valueMain,
            intermediate
          }
        }));
      }
    };
    this.disabled = false;
    this.required = false;
    this.readonly = false;
    this.labelText = "";
    this.maxLabel = "";
    this.minLabel = "";
    this.hideLabel = false;
    this.formatLabel = (value, label) => `${value}${label !== null && label !== void 0 ? label : ""}`;
    this.formatMaxText = (max, maxLabel) => this.formatLabel(Number(max), maxLabel);
    this.formatMinText = (min, minLabel) => this.formatLabel(Number(min), minLabel);
    this.invalid = false;
    this.invalidText = "";
    this.warn = false;
    this.warnText = "";
    this.hideTextInput = false;
  }
  /**
   * The rate of the thumb position in the track.
   * When we try to set a new value, we adjust the value considering `step` property.
   */
  get _rate() {
    const { max, min, value } = this;
    if (value) {
      const rate = (Math.min(Number(max), Math.max(Number(min), value)) - Number(min)) / (Number(max) - Number(min));
      this._cachedRate = rate;
      return rate;
    } else {
      return this._cachedRate;
    }
  }
  set _rate(rate) {
    const { max, min, step } = this;
    this.value = Number(min) + Math.round((Number(max) - Number(min)) * Math.min(1, Math.max(0, rate)) / Number(step)) * Number(step);
  }
  /**
   * The rate of the upper thumb position in the track.
   * When we try to set a new value for upper input, we adjust the value considering `step` property.
   */
  get _rateUpper() {
    const { max, min, unstable_valueUpper } = this;
    if (unstable_valueUpper) {
      const rateUpper = (Math.min(Number(max), Math.max(Number(min), unstable_valueUpper)) - Number(min)) / (Number(max) - Number(min));
      this._cachedRateUpper = rateUpper;
      return rateUpper;
    } else {
      return this._cachedRateUpper;
    }
  }
  set _rateUpper(rateUpper) {
    const { max, min, step } = this;
    this.unstable_valueUpper = Number(min) + Math.round((Number(max) - Number(min)) * Math.min(1, Math.max(0, rateUpper)) / Number(step)) * Number(step);
  }
  /**
   * Handles `click` event on the `<label>` to focus on the thumb.
   */
  _handleClickLabel() {
    var _a;
    (_a = this._thumbNode) === null || _a === void 0 ? void 0 : _a.focus();
  }
  _setThumbTooltipOpen(thumb, open) {
    if (!this.hideTextInput || !thumb) {
      return;
    }
    const tooltip = thumb.closest(`${prefix}-tooltip`);
    if (tooltip) {
      tooltip.open = open;
    }
  }
  _handleFormdata(event) {
    const { formData } = event;
    const { disabled, name, value } = this;
    if (!disabled) {
      formData.append(name, String(value));
    }
  }
  /**
   * Handles `keydown` event on the thumb to increase/decrease the value.
   */
  _handleKeydown(event) {
    const eventContainer = event.target.id;
    const { key, shiftKey } = event;
    if (!this.disabled && !this.readonly) {
      if (key in THUMB_DIRECTION) {
        const { max: rawMax, min: rawMin, step: rawStep, stepMultiplier: rawstepMultiplier, value, unstable_valueUpper } = this;
        const max = Number(rawMax);
        const min = Number(rawMin);
        const step = Number(rawStep);
        const stepMultiplier = Number(rawstepMultiplier);
        const diff = (!shiftKey ? step : (max - min) / stepMultiplier) * THUMB_DIRECTION[key];
        if (eventContainer == "thumb-upper") {
          const stepCount = (unstable_valueUpper + diff) / step;
          const position = Math.min(max, Math.max(min, (diff >= 0 ? Math.floor(stepCount) : Math.ceil(stepCount)) * step));
          if (position >= this.value) {
            this.unstable_valueUpper = position;
          }
          this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
            bubbles: true,
            composed: true,
            detail: {
              value: this.unstable_valueUpper,
              intermediate: false
            }
          }));
        } else {
          const stepCount = (value + diff) / step;
          const position = Math.min(max, Math.max(min, (diff >= 0 ? Math.floor(stepCount) : Math.ceil(stepCount)) * step));
          if (!this.unstable_valueUpper || position <= this.unstable_valueUpper) {
            this.value = position;
          }
          this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
            bubbles: true,
            composed: true,
            detail: {
              value: this.value,
              intermediate: false
            }
          }));
        }
      }
    }
  }
  /**
   * Handles `pointerdown` event on the thumb to start dragging.
   */
  _startDrag(event) {
    var _a;
    if (!this.readonly && !this.disabled) {
      let eventContainer = event.target.id;
      if (!eventContainer) {
        const thumb = event.target.closest(`.${prefix}--slider__thumb`);
        eventContainer = (_a = thumb === null || thumb === void 0 ? void 0 : thumb.id) !== null && _a !== void 0 ? _a : "";
      }
      if (eventContainer === "thumb") {
        this._dragging = true;
        this._thumbNode.style.touchAction = "none";
        this._setThumbTooltipOpen(this._thumbNode, true);
      } else if (eventContainer === "thumb-upper") {
        this._draggingUpper = true;
        this._thumbNodeUpper.style.touchAction = "none";
        this._setThumbTooltipOpen(this._thumbNodeUpper, true);
      }
    }
  }
  /**
   * Handles `pointerdown` event on the track to update the thumb position and the value as necessary.
   */
  _handleClick(event) {
    var _a;
    let eventContainer = event.target.id;
    if (!eventContainer) {
      const thumb = event.target.closest(`.${prefix}--slider__thumb`);
      eventContainer = (_a = thumb === null || thumb === void 0 ? void 0 : thumb.id) !== null && _a !== void 0 ? _a : "";
    }
    if (!this.disabled && !this.readonly) {
      const { _trackNode: trackNode } = this;
      const isRtl = (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- https://github.com/carbon-design-system/carbon/issues/20452
        trackNode.ownerDocument.defaultView.getComputedStyle(trackNode).getPropertyValue("direction") === "rtl"
      );
      const thumbPosition = event.clientX;
      const { left: trackLeft, width: trackWidth } = trackNode.getBoundingClientRect();
      if (eventContainer === "thumb-upper") {
        this._rateUpper = (isRtl ? trackLeft + trackWidth - thumbPosition : thumbPosition - trackLeft) / trackWidth;
        this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
          bubbles: true,
          composed: true,
          detail: {
            value: this.unstable_valueUpper
          }
        }));
      } else {
        if (!this.unstable_valueUpper) {
          this._rate = (isRtl ? trackLeft + trackWidth - thumbPosition : thumbPosition - trackLeft) / trackWidth;
          this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
            bubbles: true,
            composed: true,
            detail: {
              value: this.value
            }
          }));
        } else {
          if (!this.dragCoolDown) {
            const position = (isRtl ? trackLeft + trackWidth - thumbPosition : thumbPosition - trackLeft) / trackWidth * 100;
            const differenceValue = position > this.value ? position - this.value : this.value - position;
            const differenceValueUpper = position > this.unstable_valueUpper ? position - this.unstable_valueUpper : this.unstable_valueUpper - position;
            if (differenceValue > differenceValueUpper) {
              this._rateUpper = position / 100;
            } else if (differenceValue < differenceValueUpper) {
              this._rate = position / 100;
            } else if (!this._dragging && !this._draggingUpper && differenceValue === differenceValueUpper) {
              if (Math.round(position) > this.unstable_valueUpper) {
                this._rateUpper = position / 100;
              } else {
                this._rate = position / 100;
              }
            }
            this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
              bubbles: true,
              composed: true,
              detail: {
                value: this.value
              }
            }));
          }
        }
      }
    }
  }
  /**
   * Updates thumb position and value upon user's `pointermove` gesture.
   *
   * @param event The event.
   */
  _handlePointermoveImpl(event) {
    const { disabled, _dragging: dragging, _trackNode: trackNode, _draggingUpper: draggingUpper } = this;
    if (!disabled) {
      const isRtl = (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- https://github.com/carbon-design-system/carbon/issues/20452
        trackNode.ownerDocument.defaultView.getComputedStyle(trackNode).getPropertyValue("direction") === "rtl"
      );
      const thumbPosition = event.clientX;
      const { left: trackLeft, width: trackWidth } = this._trackNode.getBoundingClientRect();
      if (dragging) {
        this._setThumbTooltipOpen(this._thumbNode, true);
        const position = (isRtl ? trackLeft + trackWidth - thumbPosition : thumbPosition - trackLeft) / trackWidth;
        if (!this.unstable_valueUpper || position * 100 <= this.unstable_valueUpper) {
          this._rate = position;
          this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
            bubbles: true,
            composed: true,
            detail: {
              value: this.value,
              intermediate: true
            }
          }));
        }
      } else if (draggingUpper) {
        this._setThumbTooltipOpen(this._thumbNodeUpper, true);
        const position = (isRtl ? trackLeft + trackWidth - thumbPosition : thumbPosition - trackLeft) / trackWidth;
        if (position * 100 >= this.value) {
          this._rateUpper = position;
          this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
            bubbles: true,
            composed: true,
            detail: {
              value: this.unstable_valueUpper,
              intermediate: true
            }
          }));
        }
      }
    }
  }
  /**
   * The maximum value.
   */
  get max() {
    return (this._max ?? "").toString();
  }
  set max(value) {
    const { max: oldMax } = this;
    this._max = value;
    this.requestUpdate("max", oldMax);
  }
  /**
   * The minimum value.
   */
  get min() {
    return (this._min ?? "").toString();
  }
  set min(value) {
    const { min: oldMin } = this;
    this._min = value;
    this.requestUpdate("min", oldMin);
  }
  /**
   * The snapping step of the value.
   */
  get step() {
    return (this._step ?? "1").toString();
  }
  set step(value) {
    const { step: oldStep } = this;
    this._step = value;
    this.requestUpdate("step", oldStep);
  }
  /**
   * A value determining how much the value should increase/decrease by Shift+arrow keys,
   * which will be `(max - min) / stepMultiplier`.
   */
  get stepMultiplier() {
    return this._stepMultiplier.toString();
  }
  set stepMultiplier(value) {
    const { stepMultiplier: oldstepMultiplier } = this;
    this._stepMultiplier = value;
    this.requestUpdate("stepMultiplier", oldstepMultiplier);
  }
  _getInputValidity(input) {
    var _a;
    const inputElement = (_a = input === null || input === void 0 ? void 0 : input.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("input");
    if (this.invalid) {
      return false;
    }
    if (input === null || input === void 0 ? void 0 : input.invalid) {
      return false;
    }
    if ((inputElement === null || inputElement === void 0 ? void 0 : inputElement.valueAsNumber) > Number(this.max) || (inputElement === null || inputElement === void 0 ? void 0 : inputElement.valueAsNumber) < Number(this.min)) {
      return false;
    }
    return true;
  }
  _getInputWarnigState(input) {
    if ((input === null || input === void 0 ? void 0 : input.valueAsNumber) > Number(input.max) || (input === null || input === void 0 ? void 0 : input.valueAsNumber) < Number(input.min)) {
      return true;
    }
    return false;
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this._throttledHandlePointermoveImpl) {
      this._throttledHandlePointermoveImpl = throttle_default(this._handlePointermoveImpl, 10);
    }
  }
  disconnectedCallback() {
    if (this._throttledHandlePointermoveImpl) {
      this._throttledHandlePointermoveImpl.cancel();
      this._throttledHandlePointermoveImpl = null;
    }
    clearTimeout(this.dragCooldownTimeout);
    super.disconnectedCallback();
  }
  updated() {
    var _a;
    const sliderfilledTrack = (_a = this === null || this === void 0 ? void 0 : this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`.${prefix}--slider__filled-track`);
    if (sliderfilledTrack) {
      if (this.unstable_valueUpper || this.unstable_valueUpper === "") {
        sliderfilledTrack.style.transform = this.unstable_valueUpper ? `translate(${this._rate * 100}%, -50%) scaleX(${this._rateUpper - this._rate})` : `translate(0%, -50%) scaleX(${this._rate})`;
      } else {
        sliderfilledTrack.style.transform = this.unstable_valueUpper ? `translate(${this._rate * 100}%, -50%) scaleX(${this._rateUpper - this._rate})` : `translate(0%, -50%) scaleX(${this._rate})`;
      }
    }
  }
  shouldUpdate(changedProperties) {
    const inputs = this.querySelectorAll(this.constructor.selectorInput);
    inputs.forEach((input, index) => {
      if (changedProperties.has("disabled")) {
        if (input) {
          input.disabled = this.disabled;
        }
        if (this.disabled) {
          this._dragging = false;
        }
      }
      if (changedProperties.has("readonly")) {
        if (input) {
          input.readonly = this.readonly;
        }
        if (this.readonly) {
          this._dragging = false;
        }
      }
      if (changedProperties.has("invalid")) {
        input.invalid = this.invalid;
      }
      if (changedProperties.has("warn")) {
        input.warn = this.warn;
      }
      if (changedProperties.has("hideTextInput")) {
        input.hideTextInput = this.hideTextInput;
      }
      if (input) {
        if ((this.unstable_valueUpper || this.unstable_valueUpper === "") && index > 0) {
          ["max", "min", "step", "unstable_valueUpper"].forEach((name) => {
            if (name === "unstable_valueUpper") {
              input.value = this.unstable_valueUpper;
            } else if (name === "min") {
              input[name] = this.value;
            } else {
              input[name] = this[name];
            }
          });
        } else {
          ["max", "min", "step", "value"].forEach((name) => {
            if (this.unstable_valueUpper && name === "max") {
              input[name] = this.unstable_valueUpper;
            } else {
              input[name] = this[name];
            }
          });
        }
        if (changedProperties.has("value") || changedProperties.has("invalid") || changedProperties.has("warn") || changedProperties.has("readonly")) {
          this.isValid = this._getInputValidity(input);
          if (!this.readonly && !this.isValid) {
            input.invalid = true;
          } else {
            input.invalid = false;
          }
        }
      }
    });
    return true;
  }
  render() {
    const { disabled, formatLabel, formatMaxText, formatMinText, labelText, hideLabel, hideTextInput, max, min, maxLabel, minLabel, readonly, invalidText, isValid, warn, warnText, value, unstable_valueUpper, _rate: rate, _rateUpper: rateUpper, _handleClickLabel: handleClickLabel, _handleKeydown: handleKeydown, _handleClick: handleClick, onDrag, _endDrag: endDrag } = this;
    const isInteractive = !readonly && !disabled;
    const normalizedProps = {
      invalid: isInteractive && !isValid,
      warn: isInteractive && isValid && warn
    };
    const labelClasses = e2({
      [`${prefix}--label`]: true,
      [`${prefix}--visually-hidden`]: hideLabel,
      [`${prefix}--label--disabled`]: disabled
    });
    const sliderClasses = e2({
      [`${prefix}--slider`]: true,
      [`${prefix}--slider--disabled`]: disabled,
      [`${prefix}--slider--readonly`]: readonly
    });
    const thumbLowerWrapperClasses = e2({
      [`${prefix}--icon-tooltip`]: true,
      [`${prefix}--slider__thumb-wrapper`]: true,
      [`${prefix}--slider__thumb-wrapper--lower`]: unstable_valueUpper || unstable_valueUpper === ""
    });
    const thumbLowerClasses = e2({
      [`${prefix}--slider__thumb`]: true,
      [`${prefix}--slider__thumb--lower`]: unstable_valueUpper || unstable_valueUpper === "",
      [`${prefix}--slider__thumb-disabled`]: disabled
    });
    const thumbUpperWrapperClasses = e2({
      [`${prefix}--icon-tooltip`]: true,
      [`${prefix}--slider__thumb-wrapper`]: true,
      [`${prefix}--slider__thumb-wrapper--upper`]: true
    });
    const thumbUpperClasses = e2({
      [`${prefix}--slider__thumb`]: true,
      [`${prefix}--slider__thumb--upper`]: true,
      [`${prefix}--slider__thumb-disabled`]: disabled
    });
    return b`
      <label class="${labelClasses}" @click="${handleClickLabel}">
        <slot name="label-text">${labelText}</slot>
      </label>
      <div class="${prefix}--slider-container">
        ${unstable_valueUpper || unstable_valueUpper === "" ? b` <slot name="lower-input"></slot>` : ""}
        <span class="${prefix}--slider__range-label">
          <slot name="min-text">${formatMinText(min, minLabel)}</slot>
        </span>
        <div
          @keydown="${handleKeydown}"
          @click="${handleClick}"
          @pointerup="${endDrag}"
          @pointerleave="${endDrag}"
          class="${sliderClasses}"
          tabindex="-1"
          role="presentation">
          ${hideTextInput ? b`
                <cds-tooltip
                  class="${thumbLowerWrapperClasses}"
                  style="left: ${rate * 100}%"
                  align="top"
                  .dropShadow=${false}>
                  <div
                    id="thumb"
                    class="${thumbLowerClasses}"
                    role="slider"
                    tabindex="${!readonly ? 0 : -1}"
                    aria-valuemax="${max}"
                    aria-valuemin="${min}"
                    aria-valuenow="${value}"
                    aria-valuetext="${formatLabel(Number(value), void 0)}"
                    @pointerdown="${onDrag}">
                    ${unstable_valueUpper || unstable_valueUpper === "" ? b`
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 24"
                            class="${prefix}--slider__thumb-icon ${prefix}--slider__thumb-icon--lower">
                            <path
                              d="M15.08 6.46H16v11.08h-.92zM4.46 17.54c-.25 0-.46-.21-.46-.46V6.92a.465.465 0 0 1 .69-.4l8.77 5.08a.46.46 0 0 1 0 .8l-8.77 5.08c-.07.04-.15.06-.23.06Z"></path>
                            <path fill="none" d="M-4 0h24v24H-4z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 24"
                            class="${prefix}--slider__thumb-icon ${prefix}--slider__thumb-icon--lower cds--slider__thumb-icon--focus">
                            <path
                              d="M15.08 6.46H16v11.08h-.92zM4.46 17.54c-.25 0-.46-.21-.46-.46V6.92a.465.465 0 0 1 .69-.4l8.77 5.08a.46.46 0 0 1 0 .8l-8.77 5.08c-.07.04-.15.06-.23.06Z"></path>
                            <path fill="none" d="M-4 0h24v24H-4z"></path>
                            <path d="M15.08 0H16v6.46h-.92z"></path>
                            <path d="M0 0h.92v24H0zM15.08 0H16v24h-.92z"></path>
                            <path d="M0 .92V0h16v.92zM0 24v-.92h16V24z"></path>
                          </svg>
                        ` : ``}
                  </div>
                  <cds-tooltip-content>
                    ${formatLabel(Number(value), void 0)}
                  </cds-tooltip-content>
                </cds-tooltip>
              ` : b`
                <div
                  class="${thumbLowerWrapperClasses}"
                  style="left: ${rate * 100}%">
                  <div
                    id="thumb"
                    class="${thumbLowerClasses}"
                    role="slider"
                    tabindex="${!readonly ? 0 : -1}"
                    aria-valuemax="${max}"
                    aria-valuemin="${min}"
                    aria-valuenow="${value}"
                    aria-valuetext="${formatLabel(Number(value), void 0)}"
                    @pointerdown="${onDrag}">
                    ${unstable_valueUpper || unstable_valueUpper === "" ? b`
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 24"
                            class="${prefix}--slider__thumb-icon ${prefix}--slider__thumb-icon--lower">
                            <path
                              d="M15.08 6.46H16v11.08h-.92zM4.46 17.54c-.25 0-.46-.21-.46-.46V6.92a.465.465 0 0 1 .69-.4l8.77 5.08a.46.46 0 0 1 0 .8l-8.77 5.08c-.07.04-.15.06-.23.06Z"></path>
                            <path fill="none" d="M-4 0h24v24H-4z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 24"
                            class="${prefix}--slider__thumb-icon ${prefix}--slider__thumb-icon--lower cds--slider__thumb-icon--focus">
                            <path
                              d="M15.08 6.46H16v11.08h-.92zM4.46 17.54c-.25 0-.46-.21-.46-.46V6.92a.465.465 0 0 1 .69-.4l8.77 5.08a.46.46 0 0 1 0 .8l-8.77 5.08c-.07.04-.15.06-.23.06Z"></path>
                            <path fill="none" d="M-4 0h24v24H-4z"></path>
                            <path d="M15.08 0H16v6.46h-.92z"></path>
                            <path d="M0 0h.92v24H0zM15.08 0H16v24h-.92z"></path>
                            <path d="M0 .92V0h16v.92zM0 24v-.92h16V24z"></path>
                          </svg>
                        ` : ``}
                  </div>
                </div>
              `}
          ${unstable_valueUpper || unstable_valueUpper === "" ? hideTextInput ? b`
                  <cds-tooltip
                    class="${thumbUpperWrapperClasses}"
                    style="left: ${rateUpper * 100}%"
                    align="top"
                    .dropShadow=${false}>
                    <div
                      id="thumb-upper"
                      class="${thumbUpperClasses}"
                      role="slider"
                      tabindex="${!readonly ? 0 : -1}"
                      aria-valuemax="${max}"
                      aria-valuemin="${min}"
                      aria-valuenow="${unstable_valueUpper}"
                      aria-valuetext="${formatLabel(Number(unstable_valueUpper), void 0)}"
                      @pointerdown="${onDrag}">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 24"
                        class="${prefix}--slider__thumb-icon ${prefix}--slider__thumb-icon--upper">
                        <path
                          d="M0 6.46h.92v11.08H0zM11.54 6.46c.25 0 .46.21.46.46v10.15a.465.465 0 0 1-.69.4L2.54 12.4a.46.46 0 0 1 0-.8l8.77-5.08c.07-.04.15-.06.23-.06Z"></path>
                        <path fill="none" d="M-4 0h24v24H-4z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 24"
                        class="${prefix}--slider__thumb-icon ${prefix}--slider__thumb-icon--upper cds--slider__thumb-icon--focus">
                        <path
                          d="M0 6.46h.92v11.08H0zM11.54 6.46c.25 0 .46.21.46.46v10.15a.465.465 0 0 1-.69.4L2.54 12.4a.46.46 0 0 1 0-.8l8.77-5.08c.07-.04.15-.06.23-.06Z"></path>
                        <path fill="none" d="M-4 0h24v24H-4z"></path>
                        <path d="M.92 24H0v-6.46h.92z"></path>
                        <path d="M16 24h-.92V0H16zM.92 24H0V0h.92z"></path>
                        <path d="M16 23.08V24H0v-.92zM16 0v.92H0V0z"></path>
                      </svg>
                    </div>
                    <cds-tooltip-content>
                      ${formatLabel(Number(unstable_valueUpper), void 0)}
                    </cds-tooltip-content>
                  </cds-tooltip>
                ` : b`
                  <div
                    class="${thumbUpperWrapperClasses}"
                    style="left: ${rateUpper * 100}%">
                    <div
                      id="thumb-upper"
                      class="${thumbUpperClasses}"
                      role="slider"
                      tabindex="${!readonly ? 0 : -1}"
                      aria-valuemax="${max}"
                      aria-valuemin="${min}"
                      aria-valuenow="${unstable_valueUpper}"
                      aria-valuetext="${formatLabel(Number(unstable_valueUpper), void 0)}"
                      @pointerdown="${onDrag}">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 24"
                        class="${prefix}--slider__thumb-icon ${prefix}--slider__thumb-icon--upper">
                        <path
                          d="M0 6.46h.92v11.08H0zM11.54 6.46c.25 0 .46.21.46.46v10.15a.465.465 0 0 1-.69.4L2.54 12.4a.46.46 0 0 1 0-.8l8.77-5.08c.07-.04.15-.06.23-.06Z"></path>
                        <path fill="none" d="M-4 0h24v24H-4z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 24"
                        class="${prefix}--slider__thumb-icon ${prefix}--slider__thumb-icon--upper cds--slider__thumb-icon--focus">
                        <path
                          d="M0 6.46h.92v11.08H0zM11.54 6.46c.25 0 .46.21.46.46v10.15a.465.465 0 0 1-.69.4L2.54 12.4a.46.46 0 0 1 0-.8l8.77-5.08c.07-.04.15-.06.23-.06Z"></path>
                        <path fill="none" d="M-4 0h24v24H-4z"></path>
                        <path d="M.92 24H0v-6.46h.92z"></path>
                        <path d="M16 24h-.92V0H16zM.92 24H0V0h.92z"></path>
                        <path d="M16 23.08V24H0v-.92zM16 0v.92H0V0z"></path>
                      </svg>
                    </div>
                  </div>
                ` : b``}
          <div id="track" class="${prefix}--slider__track"></div>
          ${unstable_valueUpper || unstable_valueUpper === "" ? b` <div class="${prefix}--slider__filled-track"></div> ` : b` <div class="${prefix}-ce--slider__filled-track-container">
                <div class="${prefix}--slider__filled-track"></div>
              </div>`}
        </div>
        <span class="${prefix}--slider__range-label">
          <slot name="max-text">${formatMaxText(max, maxLabel)}</slot>
        </span>
        <slot></slot>
      </div>

      ${normalizedProps.invalid ? b`
            <div
              class="${prefix}--slider__validation-msg ${prefix}--slider__validation-msg--invalid ${prefix}--form-requirement">
              ${invalidText}
            </div>
          ` : null}
      ${normalizedProps.warn ? b`<div
            class="${prefix}--slider__validation-msg ${prefix}--form-requirement">
            ${warnText}
          </div>` : null}
    `;
  }
  /**
   * A selector that will return the `<input>` box got entering the value directly.
   */
  static get selectorInput() {
    return `${prefix}-slider-input`;
  }
  /**
   * The name of the custom event fired after the value is changed by user gesture.
   */
  static get eventChange() {
    return `${prefix}-slider-changed`;
  }
  /**
   * The name of the custom event fired after the value is changed in `<cds-slider-input>` by user gesture.
   */
  static get eventChangeInput() {
    return `${prefix}-slider-input-changed`;
  }
};
CDSSlider.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSSlider.styles = styles;
__decorate([
  n({ type: Number, attribute: "value-upper" })
], CDSSlider.prototype, "unstable_valueUpper", void 0);
__decorate([
  e("#thumb")
], CDSSlider.prototype, "_thumbNode", void 0);
__decorate([
  e("#thumb-upper")
], CDSSlider.prototype, "_thumbNodeUpper", void 0);
__decorate([
  e("#track")
], CDSSlider.prototype, "_trackNode", void 0);
__decorate([
  HostListener("document:pointermove")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSSlider.prototype, "_handlePointermove", void 0);
__decorate([
  HostListener("eventChangeInput")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSSlider.prototype, "_handleChangeInput", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSlider.prototype, "disabled", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSlider.prototype, "required", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSlider.prototype, "readonly", void 0);
__decorate([
  n({ attribute: "label-text" })
], CDSSlider.prototype, "labelText", void 0);
__decorate([
  n({ attribute: "max-label", reflect: true })
], CDSSlider.prototype, "maxLabel", void 0);
__decorate([
  n({ attribute: "min-label", reflect: true })
], CDSSlider.prototype, "minLabel", void 0);
__decorate([
  n({ attribute: "hide-label", type: Boolean, reflect: true })
], CDSSlider.prototype, "hideLabel", void 0);
__decorate([
  n({ attribute: false })
], CDSSlider.prototype, "formatLabel", void 0);
__decorate([
  n({ attribute: false })
], CDSSlider.prototype, "formatMaxText", void 0);
__decorate([
  n({ attribute: false })
], CDSSlider.prototype, "formatMinText", void 0);
__decorate([
  n({ type: Number, reflect: true })
], CDSSlider.prototype, "max", null);
__decorate([
  n({ type: Number, reflect: true })
], CDSSlider.prototype, "min", null);
__decorate([
  n()
], CDSSlider.prototype, "name", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSlider.prototype, "invalid", void 0);
__decorate([
  n({ attribute: "invalid-text" })
], CDSSlider.prototype, "invalidText", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSlider.prototype, "warn", void 0);
__decorate([
  n({ attribute: "warn-text" })
], CDSSlider.prototype, "warnText", void 0);
__decorate([
  n({ type: Boolean, attribute: "hide-text-input", reflect: true })
], CDSSlider.prototype, "hideTextInput", void 0);
__decorate([
  n({ type: Number, reflect: true })
], CDSSlider.prototype, "step", null);
__decorate([
  n({ type: Number, reflect: true, attribute: "step-multiplier" })
], CDSSlider.prototype, "stepMultiplier", null);
__decorate([
  n({ type: Number })
], CDSSlider.prototype, "value", void 0);
__decorate([
  n({ type: Boolean })
], CDSSlider.prototype, "isValid", void 0);
CDSSlider = __decorate([
  carbonElement(`${prefix}-slider`)
], CDSSlider);
var CDSSlider$1 = CDSSlider;

export {
  styles,
  CDSSlider$1
};
