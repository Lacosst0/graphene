import {
  e as e2
} from "./chunk-TEMKX2NW.js";
import {
  e
} from "./chunk-M2VBID3H.js";

// node_modules/lit-html/directives/unsafe-svg.js
var t = class extends e2 {
};
t.directiveName = "unsafeSVG", t.resultType = 2;
var o = e(t);

// node_modules/@carbon/icon-helpers/es/index.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
var _excluded = ["width", "height", "viewBox"];
var _excluded2 = ["tabindex"];
var defaultAttributes = {
  // Reference:
  // https://github.com/IBM/carbon-components-react/issues/1392
  // https://github.com/PolymerElements/iron-iconset-svg/pull/47
  // `focusable` is a string attribute which is why we do not use a boolean here
  focusable: "false",
  preserveAspectRatio: "xMidYMid meet"
};
function getAttributes() {
  var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, width = _ref.width, height = _ref.height, _ref$viewBox = _ref.viewBox, viewBox = _ref$viewBox === void 0 ? "0 0 ".concat(width, " ").concat(height) : _ref$viewBox, attributes = _objectWithoutProperties(_ref, _excluded);
  var tabindex = attributes.tabindex, rest = _objectWithoutProperties(attributes, _excluded2);
  var iconAttributes = _objectSpread2(_objectSpread2(_objectSpread2({}, defaultAttributes), rest), {}, {
    width,
    height,
    viewBox
  });
  if (iconAttributes["aria-label"] || iconAttributes["aria-labelledby"] || iconAttributes.title) {
    iconAttributes.role = "img";
    if (tabindex !== void 0 && tabindex !== null) {
      iconAttributes.focusable = "true";
      iconAttributes.tabindex = tabindex;
    }
  } else {
    iconAttributes["aria-hidden"] = true;
  }
  return iconAttributes;
}
function formatAttributes(attrs) {
  return Object.keys(attrs).reduce(function(acc, key, index) {
    var attribute = "".concat(key, '="').concat(attrs[key], '"');
    if (index === 0) {
      return attribute;
    }
    return acc + " " + attribute;
  }, "");
}

// node_modules/@carbon/web-components/es/globals/internal/icon-loader-utils.js
function getIconDescriptor(descriptor) {
  return "default" in descriptor && descriptor.default ? descriptor.default : descriptor;
}
function carbonIconToSVG(descriptor, attributes = {}) {
  const iconDescriptor = getIconDescriptor(descriptor);
  if (!iconDescriptor.attrs) {
    iconDescriptor.attrs = {};
  }
  const mergedAttrs = Object.assign(Object.assign({}, iconDescriptor.attrs), attributes);
  const processedAttrs = getAttributes(mergedAttrs);
  const attrString = formatAttributes(processedAttrs);
  const content = iconDescriptor.content || [];
  const contentString = content.map((child) => {
    if (typeof child === "string")
      return child;
    return elementToSVG(child);
  }).join("");
  return `<svg ${attrString}>${contentString}</svg>`;
}
function elementToSVG(element) {
  if (typeof element === "string") {
    return element;
  }
  const { elem = "svg", attrs = {}, content = [] } = element;
  const children = content.map(elementToSVG).join("");
  const attrString = formatAttributes(attrs);
  return `<${elem} ${attrString}>${children}</${elem}>`;
}
function createIconTemplate(descriptor) {
  return (attributes = {}) => {
    const svgString = carbonIconToSVG(descriptor, attributes);
    return o(svgString);
  };
}

export {
  o,
  createIconTemplate
};
/*! Bundled license information:

lit-html/directives/unsafe-svg.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
