import {
  carbonElement
} from "./chunk-D5HOJOMG.js";
import {
  __decorate,
  b,
  i2 as i
} from "./chunk-3GZFZEMV.js";
import "./chunk-G6EI4S4W.js";

// node_modules/@carbon/web-components/es/feature-flags/es/index.js
var enabled$1 = {};
try {
  if (process.env.CARBON_ENABLE_CSS_CUSTOM_PROPERTIES) {
    if (process.env.CARBON_ENABLE_CSS_CUSTOM_PROPERTIES === "true") {
      enabled$1.enableCssCustomProperties = true;
    } else {
      enabled$1.enableCssCustomProperties = false;
    }
  } else {
    enabled$1.enableCssCustomProperties = false;
  }
  if (process.env.CARBON_ENABLE_CSS_GRID) {
    if (process.env.CARBON_ENABLE_CSS_GRID === "true") {
      enabled$1.enableCssGrid = true;
    } else {
      enabled$1.enableCssGrid = false;
    }
  } else {
    enabled$1.enableCssGrid = false;
  }
  if (process.env.CARBON_ENABLE_V11_RELEASE) {
    if (process.env.CARBON_ENABLE_V11_RELEASE === "true") {
      enabled$1.enableV11Release = true;
    } else {
      enabled$1.enableV11Release = false;
    }
  } else {
    enabled$1.enableV11Release = true;
  }
  if (process.env.CARBON_ENABLE_EXPERIMENTAL_TILE_CONTRAST) {
    if (process.env.CARBON_ENABLE_EXPERIMENTAL_TILE_CONTRAST === "true") {
      enabled$1.enableExperimentalTileContrast = true;
    } else {
      enabled$1.enableExperimentalTileContrast = false;
    }
  } else {
    enabled$1.enableExperimentalTileContrast = false;
  }
  if (process.env.CARBON_ENABLE_TILE_CONTRAST) {
    if (process.env.CARBON_ENABLE_TILE_CONTRAST === "true") {
      enabled$1.enableTileContrast = true;
    } else {
      enabled$1.enableTileContrast = false;
    }
  } else {
    enabled$1.enableTileContrast = false;
  }
  if (process.env.CARBON_ENABLE_V12_TILE_DEFAULT_ICONS) {
    if (process.env.CARBON_ENABLE_V12_TILE_DEFAULT_ICONS === "true") {
      enabled$1.enableV12TileDefaultIcons = true;
    } else {
      enabled$1.enableV12TileDefaultIcons = false;
    }
  } else {
    enabled$1.enableV12TileDefaultIcons = false;
  }
  if (process.env.CARBON_ENABLE_V12_TILE_RADIO_ICONS) {
    if (process.env.CARBON_ENABLE_V12_TILE_RADIO_ICONS === "true") {
      enabled$1.enableV12TileRadioIcons = true;
    } else {
      enabled$1.enableV12TileRadioIcons = false;
    }
  } else {
    enabled$1.enableV12TileRadioIcons = false;
  }
  if (process.env.CARBON_ENABLE_V12_OVERFLOWMENU) {
    if (process.env.CARBON_ENABLE_V12_OVERFLOWMENU === "true") {
      enabled$1.enableV12Overflowmenu = true;
    } else {
      enabled$1.enableV12Overflowmenu = false;
    }
  } else {
    enabled$1.enableV12Overflowmenu = false;
  }
  if (process.env.CARBON_ENABLE_TREEVIEW_CONTROLLABLE) {
    if (process.env.CARBON_ENABLE_TREEVIEW_CONTROLLABLE === "true") {
      enabled$1.enableTreeviewControllable = true;
    } else {
      enabled$1.enableTreeviewControllable = false;
    }
  } else {
    enabled$1.enableTreeviewControllable = false;
  }
  if (process.env.CARBON_ENABLE_V12_STRUCTURED_LIST_VISIBLE_ICONS) {
    if (process.env.CARBON_ENABLE_V12_STRUCTURED_LIST_VISIBLE_ICONS === "true") {
      enabled$1.enableV12StructuredListVisibleIcons = true;
    } else {
      enabled$1.enableV12StructuredListVisibleIcons = false;
    }
  } else {
    enabled$1.enableV12StructuredListVisibleIcons = false;
  }
  if (process.env.CARBON_ENABLE_EXPERIMENTAL_FOCUS_WRAP_WITHOUT_SENTINELS) {
    if (process.env.CARBON_ENABLE_EXPERIMENTAL_FOCUS_WRAP_WITHOUT_SENTINELS === "true") {
      enabled$1.enableExperimentalFocusWrapWithoutSentinels = true;
    } else {
      enabled$1.enableExperimentalFocusWrapWithoutSentinels = false;
    }
  } else {
    enabled$1.enableExperimentalFocusWrapWithoutSentinels = false;
  }
  if (process.env.CARBON_ENABLE_FOCUS_WRAP_WITHOUT_SENTINELS) {
    if (process.env.CARBON_ENABLE_FOCUS_WRAP_WITHOUT_SENTINELS === "true") {
      enabled$1.enableFocusWrapWithoutSentinels = true;
    } else {
      enabled$1.enableFocusWrapWithoutSentinels = false;
    }
  } else {
    enabled$1.enableFocusWrapWithoutSentinels = false;
  }
  if (process.env.CARBON_ENABLE_DIALOG_ELEMENT) {
    if (process.env.CARBON_ENABLE_DIALOG_ELEMENT === "true") {
      enabled$1.enableDialogElement = true;
    } else {
      enabled$1.enableDialogElement = false;
    }
  } else {
    enabled$1.enableDialogElement = false;
  }
  if (process.env.CARBON_ENABLE_V12_DYNAMIC_FLOATING_STYLES) {
    if (process.env.CARBON_ENABLE_V12_DYNAMIC_FLOATING_STYLES === "true") {
      enabled$1.enableV12DynamicFloatingStyles = true;
    } else {
      enabled$1.enableV12DynamicFloatingStyles = false;
    }
  } else {
    enabled$1.enableV12DynamicFloatingStyles = false;
  }
  if (process.env.CARBON_ENABLE_V12_TOGGLE_REDUCED_LABEL_SPACING) {
    if (process.env.CARBON_ENABLE_V12_TOGGLE_REDUCED_LABEL_SPACING === "true") {
      enabled$1.enableV12ToggleReducedLabelSpacing = true;
    } else {
      enabled$1.enableV12ToggleReducedLabelSpacing = false;
    }
  } else {
    enabled$1.enableV12ToggleReducedLabelSpacing = false;
  }
  if (process.env.CARBON_ENABLE_ENHANCED_FILE_UPLOADER) {
    if (process.env.CARBON_ENABLE_ENHANCED_FILE_UPLOADER === "true") {
      enabled$1.enableEnhancedFileUploader = true;
    } else {
      enabled$1.enableEnhancedFileUploader = false;
    }
  } else {
    enabled$1.enableEnhancedFileUploader = false;
  }
  if (process.env.CARBON_ENABLE_PRESENCE) {
    if (process.env.CARBON_ENABLE_PRESENCE === "true") {
      enabled$1.enablePresence = true;
    } else {
      enabled$1.enablePresence = false;
    }
  } else {
    enabled$1.enablePresence = false;
  }
} catch (error) {
  enabled$1.enableCssCustomProperties = false;
  enabled$1.enableCssGrid = false;
  enabled$1.enableV11Release = true;
  enabled$1.enableExperimentalTileContrast = false;
  enabled$1.enableTileContrast = false;
  enabled$1.enableV12TileDefaultIcons = false;
  enabled$1.enableV12TileRadioIcons = false;
  enabled$1.enableV12Overflowmenu = false;
  enabled$1.enableTreeviewControllable = false;
  enabled$1.enableV12StructuredListVisibleIcons = false;
  enabled$1.enableExperimentalFocusWrapWithoutSentinels = false;
  enabled$1.enableFocusWrapWithoutSentinels = false;
  enabled$1.enableDialogElement = false;
  enabled$1.enableV12DynamicFloatingStyles = false;
  enabled$1.enableV12ToggleReducedLabelSpacing = false;
  enabled$1.enableEnhancedFileUploader = false;
  enabled$1.enablePresence = false;
}
var featureFlagInfo = [{
  name: "enable-css-custom-properties",
  description: "Describe what the flag does",
  enabled: enabled$1.enableCssCustomProperties
}, {
  name: "enable-css-grid",
  description: "Enable CSS Grid Layout in the Grid and Column React components\n",
  enabled: enabled$1.enableCssGrid
}, {
  name: "enable-v11-release",
  description: "Enable the features and functionality for the v11 Release\n",
  enabled: enabled$1.enableV11Release
}, {
  name: "enable-experimental-tile-contrast",
  description: "Deprecated, use enable-tile-contrast instead\n",
  enabled: enabled$1.enableExperimentalTileContrast
}, {
  name: "enable-tile-contrast",
  description: "Enable the experimental tile improved contrast styles\n",
  enabled: enabled$1.enableTileContrast
}, {
  name: "enable-v12-tile-default-icons",
  description: "Enable rendering of default icons in the tile components\n",
  enabled: enabled$1.enableV12TileDefaultIcons
}, {
  name: "enable-v12-tile-radio-icons",
  description: "Enable rendering of radio icons in the RadioTile component\n",
  enabled: enabled$1.enableV12TileRadioIcons
}, {
  name: "enable-v12-overflowmenu",
  description: "Enable the use of the v12 OverflowMenu leveraging the Menu subcomponents\n",
  enabled: enabled$1.enableV12Overflowmenu
}, {
  name: "enable-treeview-controllable",
  description: "Enable the new TreeView controllable API\n",
  enabled: enabled$1.enableTreeviewControllable
}, {
  name: "enable-v12-structured-list-visible-icons",
  description: "Enable rendering of radio icons in the StructuredList component\n",
  enabled: enabled$1.enableV12StructuredListVisibleIcons
}, {
  name: "enable-experimental-focus-wrap-without-sentinels",
  description: "Deprecated, use enable-focus-wrap-without-sentinels instead\n",
  enabled: enabled$1.enableExperimentalFocusWrapWithoutSentinels
}, {
  name: "enable-focus-wrap-without-sentinels",
  description: "Enable the new focus wrap behavior that doesn't use sentinel nodes\n",
  enabled: enabled$1.enableFocusWrapWithoutSentinels
}, {
  name: "enable-dialog-element",
  description: "Enable components to utilize the native dialog element\n",
  enabled: enabled$1.enableDialogElement
}, {
  name: "enable-v12-dynamic-floating-styles",
  description: "Enable dynamic setting of floating styles for components like Popover, Tooltip, etc.\n",
  enabled: enabled$1.enableV12DynamicFloatingStyles
}, {
  name: "enable-v12-toggle-reduced-label-spacing",
  description: "Enable a reduced spacing between the toggle control and its label\n",
  enabled: enabled$1.enableV12ToggleReducedLabelSpacing
}, {
  name: "enable-enhanced-file-uploader",
  description: "Enable enhanced functionality for the FileUploader component, including richer callback data and expanded trigger events for onChange and onDelete.\n",
  enabled: enabled$1.enableEnhancedFileUploader
}, {
  name: "enable-presence",
  description: "Enable components to remain unmounted in closed state and mount in open state.\n",
  enabled: enabled$1.enablePresence
}];
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++)
    n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r))
    return r;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return {
        s: F,
        n: function() {
          return n >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[n++]
          };
        },
        e: function(r2) {
          throw r2;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return {
    s: function() {
      t = t.call(r);
    },
    n: function() {
      var r2 = t.next();
      return a = r2.done, r2;
    },
    e: function(r2) {
      u = true, o = r2;
    },
    f: function() {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u)
          throw o;
      }
    }
  };
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i2, u, a = [], f = true, o = false;
    try {
      if (i2 = (t = t.call(r)).next, 0 === l)
        ;
      else
        for (; !(f = (e = i2.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i2 = e.call(t, r);
    if ("object" != typeof i2)
      return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function _toPropertyKey(t) {
  var i2 = _toPrimitive(t, "string");
  return "symbol" == typeof i2 ? i2 : i2 + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r)
      return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
var FeatureFlagScope = /* @__PURE__ */ function() {
  function FeatureFlagScope2(flags) {
    var _this = this;
    _classCallCheck(this, FeatureFlagScope2);
    this.flags = /* @__PURE__ */ new Map();
    if (flags) {
      Object.keys(flags).forEach(function(key) {
        _this.flags.set(key, flags[key]);
      });
    }
  }
  return _createClass(FeatureFlagScope2, [{
    key: "checkForFlag",
    value: function checkForFlag(name) {
      if (!this.flags.has(name)) {
        throw new Error("Unable to find a feature flag with the name: `".concat(name, "`"));
      }
    }
    /**
     * Add a feature flag
     * @param {string} name
     * @param {boolean} enabled
     */
  }, {
    key: "add",
    value: function add(name, enabled) {
      if (this.flags.has(name)) {
        throw new Error("The feature flag: ".concat(name, " already exists"));
      }
      this.flags.set(name, enabled);
    }
    /**
     * Enable a feature flag
     * @param {string} name
     */
  }, {
    key: "enable",
    value: function enable(name) {
      this.checkForFlag(name);
      this.flags.set(name, true);
    }
    /**
     * Disable a feature flag
     * @param {string} name
     */
  }, {
    key: "disable",
    value: function disable(name) {
      this.checkForFlag(name);
      this.flags.set(name, false);
    }
    /**
     * Merge the given feature flags with the current set of feature flags.
     * Duplicate keys will be set to the value in the given feature flags.
     * @param {object} flags
     */
  }, {
    key: "merge",
    value: function merge(flags) {
      var _this2 = this;
      Object.keys(flags).forEach(function(key) {
        _this2.flags.set(key, flags[key]);
      });
    }
    /**
     * @param {FeatureFlagScope} scope
     */
  }, {
    key: "mergeWithScope",
    value: function mergeWithScope(scope) {
      var _iterator = _createForOfIteratorHelper(scope.flags), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _step$value = _slicedToArray(_step.value, 2), key = _step$value[0], value = _step$value[1];
          if (this.flags.has(key)) {
            continue;
          }
          this.flags.set(key, value);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * Check if a feature flag is enabled
     * @param {string} name
     * @returns {boolean}
     */
  }, {
    key: "enabled",
    value: function enabled(name) {
      this.checkForFlag(name);
      return this.flags.get(name);
    }
  }]);
}();
var FeatureFlags = createScope();
for (i2 = 0; i2 < featureFlagInfo.length; i2++) {
  featureFlag = featureFlagInfo[i2];
  FeatureFlags.add(featureFlag.name, featureFlag.enabled);
}
var featureFlag;
var i2;
function createScope(flags) {
  return new FeatureFlagScope(flags);
}

// node_modules/@carbon/web-components/es/components/feature-flags/index.js
var FeatureFlagsElement_1;
var FeatureFlagsElement = FeatureFlagsElement_1 = class FeatureFlagsElement2 extends i {
  static get observedAttributes() {
    return Object.keys(FeatureFlagsElement_1.flagComponentMap);
  }
  constructor() {
    super();
    this.scope = FeatureFlags;
    this.flags = {};
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateScope();
  }
  attributeChangedCallback(name, _oldVal, newVal) {
    var _a;
    const value = newVal === "true";
    this.flags[name] = value;
    const relatedComponent = FeatureFlagsElement_1.flagComponentMap[name] || "unknown";
    if (((_a = this.firstElementChild) === null || _a === void 0 ? void 0 : _a.tagName) === relatedComponent) {
      this.firstElementChild.setAttribute(name, "");
    }
    this.updateScope();
  }
  getParentScope() {
    let parent = this.parentNode;
    while (parent) {
      if (parent instanceof FeatureFlagsElement_1) {
        return parent.getScope();
      }
      parent = parent.parentNode;
    }
    return null;
  }
  updateScope() {
    const newScope = createScope(this.flags);
    const parentScope = this.getParentScope() || FeatureFlags;
    if (parentScope) {
      newScope.mergeWithScope(parentScope);
    }
    this.scope = newScope;
  }
  render() {
    return b` <slot></slot> `;
  }
  isFeatureFlagEnabled(flag) {
    return this.scope.enabled(flag);
  }
  getScope() {
    return this.scope;
  }
};
FeatureFlagsElement.flagComponentMap = {
  "enable-v12-tile-default-icons": "CDS-TILE",
  "enable-v12-tile-radio-icons": "CDS-TILE",
  "enable-v12-overflowmenu": "CDS-OVERFLOW-MENU",
  "enable-treeview-controllable": "CDS-TREEVIEW",
  "enable-experimental-focus-wrap-without-sentinels": "CDS-FOCUS-WRAP",
  "enable-focus-wrap-without-sentinels": "CDS-FOCUS-WRAP",
  "enable-dialog-element": "CDS-DIALOG",
  "enable-v12-dynamic-floating-styles": "CDS-FLOATING",
  "enable-v12-toggle-reduced-label-spacing": "CDS-TOGGLE"
};
FeatureFlagsElement = FeatureFlagsElement_1 = __decorate([
  carbonElement("feature-flags")
], FeatureFlagsElement);
var FeatureFlagsElement$1 = FeatureFlagsElement;
function findParentFeatureFlags(el) {
  let parent = el.parentNode;
  while (parent) {
    if (parent instanceof FeatureFlagsElement) {
      return parent;
    }
    parent = parent.parentNode;
  }
  return null;
}
function isFeatureFlagEnabled(flag, context) {
  var _a;
  const instance = findParentFeatureFlags(context);
  return (_a = instance === null || instance === void 0 ? void 0 : instance.isFeatureFlagEnabled(flag)) !== null && _a !== void 0 ? _a : false;
}
export {
  FeatureFlagsElement$1 as default,
  findParentFeatureFlags,
  isFeatureFlagEnabled
};
