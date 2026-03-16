import {
  _16 as _164
} from "./chunk-OH5SS7XC.js";
import {
  INPUT_SIZE
} from "./chunk-UBPLMH62.js";
import {
  FormMixin
} from "./chunk-MNFEJBUN.js";
import {
  _16 as _163
} from "./chunk-BVJDLJUP.js";
import {
  _16 as _162
} from "./chunk-357XJSHN.js";
import {
  FORM_ELEMENT_COLOR_SCHEME
} from "./chunk-KDBKJKDV.js";
import {
  _16
} from "./chunk-ZXB2XXTS.js";
import {
  find,
  forEach
} from "./chunk-3QPROXNA.js";
import {
  HostListener
} from "./chunk-5HWAKYGL.js";
import {
  HostListenerMixin
} from "./chunk-TGGEFEEZ.js";
import {
  on
} from "./chunk-ML2VKJHQ.js";
import {
  iconLoader
} from "./chunk-TRPNDHDH.js";
import {
  o
} from "./chunk-DAFPBEYU.js";
import {
  FocusMixin
} from "./chunk-73FE5HOG.js";
import {
  e as e2
} from "./chunk-YOLTZNLE.js";
import {
  e,
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
  D,
  __decorate,
  b,
  i,
  i2
} from "./chunk-3GZFZEMV.js";

// node_modules/flatpickr/dist/esm/types/options.js
var HOOKS = [
  "onChange",
  "onClose",
  "onDayCreate",
  "onDestroy",
  "onKeyDown",
  "onMonthChange",
  "onOpen",
  "onParseConfig",
  "onReady",
  "onValueUpdate",
  "onYearChange",
  "onPreCalendarPosition"
];
var defaults = {
  _disable: [],
  allowInput: false,
  allowInvalidPreload: false,
  altFormat: "F j, Y",
  altInput: false,
  altInputClass: "form-control input",
  animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
  ariaDateFormat: "F j, Y",
  autoFillDefaultTime: true,
  clickOpens: true,
  closeOnSelect: true,
  conjunction: ", ",
  dateFormat: "Y-m-d",
  defaultHour: 12,
  defaultMinute: 0,
  defaultSeconds: 0,
  disable: [],
  disableMobile: false,
  enableSeconds: false,
  enableTime: false,
  errorHandler: function(err) {
    return typeof console !== "undefined" && console.warn(err);
  },
  getWeek: function(givenDate) {
    var date = new Date(givenDate.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 864e5 - 3 + (week1.getDay() + 6) % 7) / 7);
  },
  hourIncrement: 1,
  ignoredFocusElements: [],
  inline: false,
  locale: "default",
  minuteIncrement: 5,
  mode: "single",
  monthSelectorType: "dropdown",
  nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
  noCalendar: false,
  now: /* @__PURE__ */ new Date(),
  onChange: [],
  onClose: [],
  onDayCreate: [],
  onDestroy: [],
  onKeyDown: [],
  onMonthChange: [],
  onOpen: [],
  onParseConfig: [],
  onReady: [],
  onValueUpdate: [],
  onYearChange: [],
  onPreCalendarPosition: [],
  plugins: [],
  position: "auto",
  positionElement: void 0,
  prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
  shorthandCurrentMonth: false,
  showMonths: 1,
  static: false,
  time_24hr: false,
  weekNumbers: false,
  wrap: false
};

// node_modules/flatpickr/dist/esm/l10n/default.js
var english = {
  weekdays: {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    longhand: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
  },
  months: {
    shorthand: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    longhand: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 0,
  ordinal: function(nth) {
    var s = nth % 100;
    if (s > 3 && s < 21)
      return "th";
    switch (s % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  },
  rangeSeparator: " to ",
  weekAbbreviation: "Wk",
  scrollTitle: "Scroll to increment",
  toggleTitle: "Click to toggle",
  amPM: ["AM", "PM"],
  yearAriaLabel: "Year",
  monthAriaLabel: "Month",
  hourAriaLabel: "Hour",
  minuteAriaLabel: "Minute",
  time_24hr: false
};
var default_default = english;

// node_modules/flatpickr/dist/esm/utils/index.js
var pad = function(number, length) {
  if (length === void 0) {
    length = 2;
  }
  return ("000" + number).slice(length * -1);
};
var int = function(bool) {
  return bool === true ? 1 : 0;
};
function debounce(fn, wait) {
  var t;
  return function() {
    var _this = this;
    var args = arguments;
    clearTimeout(t);
    t = setTimeout(function() {
      return fn.apply(_this, args);
    }, wait);
  };
}
var arrayify = function(obj) {
  return obj instanceof Array ? obj : [obj];
};

// node_modules/flatpickr/dist/esm/utils/dom.js
function toggleClass(elem, className, bool) {
  if (bool === true)
    return elem.classList.add(className);
  elem.classList.remove(className);
}
function createElement(tag, className, content) {
  var e3 = window.document.createElement(tag);
  className = className || "";
  content = content || "";
  e3.className = className;
  if (content !== void 0)
    e3.textContent = content;
  return e3;
}
function clearNode(node) {
  while (node.firstChild)
    node.removeChild(node.firstChild);
}
function findParent(node, condition) {
  if (condition(node))
    return node;
  else if (node.parentNode)
    return findParent(node.parentNode, condition);
  return void 0;
}
function createNumberInput(inputClassName, opts) {
  var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
  if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
    numInput.type = "number";
  } else {
    numInput.type = "text";
    numInput.pattern = "\\d*";
  }
  if (opts !== void 0)
    for (var key in opts)
      numInput.setAttribute(key, opts[key]);
  wrapper.appendChild(numInput);
  wrapper.appendChild(arrowUp);
  wrapper.appendChild(arrowDown);
  return wrapper;
}
function getEventTarget(event) {
  try {
    if (typeof event.composedPath === "function") {
      var path = event.composedPath();
      return path[0];
    }
    return event.target;
  } catch (error) {
    return event.target;
  }
}

// node_modules/flatpickr/dist/esm/utils/formatting.js
var doNothing = function() {
  return void 0;
};
var monthToStr = function(monthNumber, shorthand, locale) {
  return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
};
var revFormat = {
  D: doNothing,
  F: function(dateObj, monthName, locale) {
    dateObj.setMonth(locale.months.longhand.indexOf(monthName));
  },
  G: function(dateObj, hour) {
    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
  },
  H: function(dateObj, hour) {
    dateObj.setHours(parseFloat(hour));
  },
  J: function(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  K: function(dateObj, amPM, locale) {
    dateObj.setHours(dateObj.getHours() % 12 + 12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
  },
  M: function(dateObj, shortMonth, locale) {
    dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
  },
  S: function(dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  U: function(_, unixSeconds) {
    return new Date(parseFloat(unixSeconds) * 1e3);
  },
  W: function(dateObj, weekNum, locale) {
    var weekNumber = parseInt(weekNum);
    var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
    date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
    return date;
  },
  Y: function(dateObj, year) {
    dateObj.setFullYear(parseFloat(year));
  },
  Z: function(_, ISODate) {
    return new Date(ISODate);
  },
  d: function(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  h: function(dateObj, hour) {
    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
  },
  i: function(dateObj, minutes) {
    dateObj.setMinutes(parseFloat(minutes));
  },
  j: function(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  l: doNothing,
  m: function(dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  n: function(dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  s: function(dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  u: function(_, unixMillSeconds) {
    return new Date(parseFloat(unixMillSeconds));
  },
  w: doNothing,
  y: function(dateObj, year) {
    dateObj.setFullYear(2e3 + parseFloat(year));
  }
};
var tokenRegex = {
  D: "",
  F: "",
  G: "(\\d\\d|\\d)",
  H: "(\\d\\d|\\d)",
  J: "(\\d\\d|\\d)\\w+",
  K: "",
  M: "",
  S: "(\\d\\d|\\d)",
  U: "(.+)",
  W: "(\\d\\d|\\d)",
  Y: "(\\d{4})",
  Z: "(.+)",
  d: "(\\d\\d|\\d)",
  h: "(\\d\\d|\\d)",
  i: "(\\d\\d|\\d)",
  j: "(\\d\\d|\\d)",
  l: "",
  m: "(\\d\\d|\\d)",
  n: "(\\d\\d|\\d)",
  s: "(\\d\\d|\\d)",
  u: "(.+)",
  w: "(\\d\\d|\\d)",
  y: "(\\d{2})"
};
var formats = {
  Z: function(date) {
    return date.toISOString();
  },
  D: function(date, locale, options) {
    return locale.weekdays.shorthand[formats.w(date, locale, options)];
  },
  F: function(date, locale, options) {
    return monthToStr(formats.n(date, locale, options) - 1, false, locale);
  },
  G: function(date, locale, options) {
    return pad(formats.h(date, locale, options));
  },
  H: function(date) {
    return pad(date.getHours());
  },
  J: function(date, locale) {
    return locale.ordinal !== void 0 ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
  },
  K: function(date, locale) {
    return locale.amPM[int(date.getHours() > 11)];
  },
  M: function(date, locale) {
    return monthToStr(date.getMonth(), true, locale);
  },
  S: function(date) {
    return pad(date.getSeconds());
  },
  U: function(date) {
    return date.getTime() / 1e3;
  },
  W: function(date, _, options) {
    return options.getWeek(date);
  },
  Y: function(date) {
    return pad(date.getFullYear(), 4);
  },
  d: function(date) {
    return pad(date.getDate());
  },
  h: function(date) {
    return date.getHours() % 12 ? date.getHours() % 12 : 12;
  },
  i: function(date) {
    return pad(date.getMinutes());
  },
  j: function(date) {
    return date.getDate();
  },
  l: function(date, locale) {
    return locale.weekdays.longhand[date.getDay()];
  },
  m: function(date) {
    return pad(date.getMonth() + 1);
  },
  n: function(date) {
    return date.getMonth() + 1;
  },
  s: function(date) {
    return date.getSeconds();
  },
  u: function(date) {
    return date.getTime();
  },
  w: function(date) {
    return date.getDay();
  },
  y: function(date) {
    return String(date.getFullYear()).substring(2);
  }
};

// node_modules/flatpickr/dist/esm/utils/dates.js
var createDateFormatter = function(_a) {
  var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c, _d = _a.isMobile, isMobile = _d === void 0 ? false : _d;
  return function(dateObj, frmt, overrideLocale) {
    var locale = overrideLocale || l10n;
    if (config.formatDate !== void 0 && !isMobile) {
      return config.formatDate(dateObj, frmt, locale);
    }
    return frmt.split("").map(function(c, i3, arr) {
      return formats[c] && arr[i3 - 1] !== "\\" ? formats[c](dateObj, locale, config) : c !== "\\" ? c : "";
    }).join("");
  };
};
var createDateParser = function(_a) {
  var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
  return function(date, givenFormat, timeless, customLocale) {
    if (date !== 0 && !date)
      return void 0;
    var locale = customLocale || l10n;
    var parsedDate;
    var dateOrig = date;
    if (date instanceof Date)
      parsedDate = new Date(date.getTime());
    else if (typeof date !== "string" && date.toFixed !== void 0)
      parsedDate = new Date(date);
    else if (typeof date === "string") {
      var format = givenFormat || (config || defaults).dateFormat;
      var datestr = String(date).trim();
      if (datestr === "today") {
        parsedDate = /* @__PURE__ */ new Date();
        timeless = true;
      } else if (config && config.parseDate) {
        parsedDate = config.parseDate(date, format);
      } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) {
        parsedDate = new Date(date);
      } else {
        var matched = void 0, ops = [];
        for (var i3 = 0, matchIndex = 0, regexStr = ""; i3 < format.length; i3++) {
          var token = format[i3];
          var isBackSlash = token === "\\";
          var escaped = format[i3 - 1] === "\\" || isBackSlash;
          if (tokenRegex[token] && !escaped) {
            regexStr += tokenRegex[token];
            var match = new RegExp(regexStr).exec(date);
            if (match && (matched = true)) {
              ops[token !== "Y" ? "push" : "unshift"]({
                fn: revFormat[token],
                val: match[++matchIndex]
              });
            }
          } else if (!isBackSlash)
            regexStr += ".";
        }
        parsedDate = !config || !config.noCalendar ? new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 1, 0, 0, 0, 0) : new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0));
        ops.forEach(function(_a2) {
          var fn = _a2.fn, val = _a2.val;
          return parsedDate = fn(parsedDate, val, locale) || parsedDate;
        });
        parsedDate = matched ? parsedDate : void 0;
      }
    }
    if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
      config.errorHandler(new Error("Invalid date provided: " + dateOrig));
      return void 0;
    }
    if (timeless === true)
      parsedDate.setHours(0, 0, 0, 0);
    return parsedDate;
  };
};
function compareDates(date1, date2, timeless) {
  if (timeless === void 0) {
    timeless = true;
  }
  if (timeless !== false) {
    return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
  }
  return date1.getTime() - date2.getTime();
}
var isBetween = function(ts, ts1, ts2) {
  return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
var calculateSecondsSinceMidnight = function(hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
};
var parseSeconds = function(secondsSinceMidnight) {
  var hours = Math.floor(secondsSinceMidnight / 3600), minutes = (secondsSinceMidnight - hours * 3600) / 60;
  return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
};
var duration = {
  DAY: 864e5
};
function getDefaultHours(config) {
  var hours = config.defaultHour;
  var minutes = config.defaultMinute;
  var seconds = config.defaultSeconds;
  if (config.minDate !== void 0) {
    var minHour = config.minDate.getHours();
    var minMinutes = config.minDate.getMinutes();
    var minSeconds = config.minDate.getSeconds();
    if (hours < minHour) {
      hours = minHour;
    }
    if (hours === minHour && minutes < minMinutes) {
      minutes = minMinutes;
    }
    if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
      seconds = config.minDate.getSeconds();
  }
  if (config.maxDate !== void 0) {
    var maxHr = config.maxDate.getHours();
    var maxMinutes = config.maxDate.getMinutes();
    hours = Math.min(hours, maxHr);
    if (hours === maxHr)
      minutes = Math.min(maxMinutes, minutes);
    if (hours === maxHr && minutes === maxMinutes)
      seconds = config.maxDate.getSeconds();
  }
  return { hours, minutes, seconds };
}

// node_modules/flatpickr/dist/esm/utils/polyfills.js
if (typeof Object.assign !== "function") {
  Object.assign = function(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    if (!target) {
      throw TypeError("Cannot convert undefined or null to object");
    }
    var _loop_1 = function(source2) {
      if (source2) {
        Object.keys(source2).forEach(function(key) {
          return target[key] = source2[key];
        });
      }
    };
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
      var source = args_1[_a];
      _loop_1(source);
    }
    return target;
  };
}

// node_modules/flatpickr/dist/esm/index.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i3 = 1, n2 = arguments.length; i3 < n2; i3++) {
      s = arguments[i3];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __spreadArrays = function() {
  for (var s = 0, i3 = 0, il = arguments.length; i3 < il; i3++)
    s += arguments[i3].length;
  for (var r2 = Array(s), k = 0, i3 = 0; i3 < il; i3++)
    for (var a = arguments[i3], j = 0, jl = a.length; j < jl; j++, k++)
      r2[k] = a[j];
  return r2;
};
var DEBOUNCED_CHANGE_MS = 300;
function FlatpickrInstance(element, instanceConfig) {
  var self = {
    config: __assign(__assign({}, defaults), flatpickr.defaultConfig),
    l10n: default_default
  };
  self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
  self._handlers = [];
  self.pluginElements = [];
  self.loadedPlugins = [];
  self._bind = bind;
  self._setHoursFromDate = setHoursFromDate;
  self._positionCalendar = positionCalendar;
  self.changeMonth = changeMonth;
  self.changeYear = changeYear;
  self.clear = clear;
  self.close = close;
  self.onMouseOver = onMouseOver;
  self._createElement = createElement;
  self.createDay = createDay;
  self.destroy = destroy;
  self.isEnabled = isEnabled;
  self.jumpToDate = jumpToDate;
  self.updateValue = updateValue;
  self.open = open;
  self.redraw = redraw;
  self.set = set;
  self.setDate = setDate;
  self.toggle = toggle;
  function setupHelperFunctions() {
    self.utils = {
      getDaysInMonth: function(month, yr) {
        if (month === void 0) {
          month = self.currentMonth;
        }
        if (yr === void 0) {
          yr = self.currentYear;
        }
        if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0))
          return 29;
        return self.l10n.daysInMonth[month];
      }
    };
  }
  function init() {
    self.element = self.input = element;
    self.isOpen = false;
    parseConfig();
    setupLocale();
    setupInputs();
    setupDates();
    setupHelperFunctions();
    if (!self.isMobile)
      build();
    bindEvents();
    if (self.selectedDates.length || self.config.noCalendar) {
      if (self.config.enableTime) {
        setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : void 0);
      }
      updateValue(false);
    }
    setCalendarWidth();
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (!self.isMobile && isSafari) {
      positionCalendar();
    }
    triggerEvent("onReady");
  }
  function getClosestActiveElement() {
    var _a;
    return ((_a = self.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode()).activeElement || document.activeElement;
  }
  function bindToInstance(fn) {
    return fn.bind(self);
  }
  function setCalendarWidth() {
    var config = self.config;
    if (config.weekNumbers === false && config.showMonths === 1) {
      return;
    } else if (config.noCalendar !== true) {
      window.requestAnimationFrame(function() {
        if (self.calendarContainer !== void 0) {
          self.calendarContainer.style.visibility = "hidden";
          self.calendarContainer.style.display = "block";
        }
        if (self.daysContainer !== void 0) {
          var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
          self.daysContainer.style.width = daysWidth + "px";
          self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== void 0 ? self.weekWrapper.offsetWidth : 0) + "px";
          self.calendarContainer.style.removeProperty("visibility");
          self.calendarContainer.style.removeProperty("display");
        }
      });
    }
  }
  function updateTime(e3) {
    if (self.selectedDates.length === 0) {
      var defaultDate = self.config.minDate === void 0 || compareDates(/* @__PURE__ */ new Date(), self.config.minDate) >= 0 ? /* @__PURE__ */ new Date() : new Date(self.config.minDate.getTime());
      var defaults2 = getDefaultHours(self.config);
      defaultDate.setHours(defaults2.hours, defaults2.minutes, defaults2.seconds, defaultDate.getMilliseconds());
      self.selectedDates = [defaultDate];
      self.latestSelectedDateObj = defaultDate;
    }
    if (e3 !== void 0 && e3.type !== "blur") {
      timeWrapper(e3);
    }
    var prevValue = self._input.value;
    setHoursFromInputs();
    updateValue();
    if (self._input.value !== prevValue) {
      self._debouncedChange();
    }
  }
  function ampm2military(hour, amPM) {
    return hour % 12 + 12 * int(amPM === self.l10n.amPM[1]);
  }
  function military2ampm(hour) {
    switch (hour % 24) {
      case 0:
      case 12:
        return 12;
      default:
        return hour % 12;
    }
  }
  function setHoursFromInputs() {
    if (self.hourElement === void 0 || self.minuteElement === void 0)
      return;
    var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== void 0 ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;
    if (self.amPM !== void 0) {
      hours = ampm2military(hours, self.amPM.textContent);
    }
    var limitMinHours = self.config.minTime !== void 0 || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.minDate, true) === 0;
    var limitMaxHours = self.config.maxTime !== void 0 || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.maxDate, true) === 0;
    if (self.config.maxTime !== void 0 && self.config.minTime !== void 0 && self.config.minTime > self.config.maxTime) {
      var minBound = calculateSecondsSinceMidnight(self.config.minTime.getHours(), self.config.minTime.getMinutes(), self.config.minTime.getSeconds());
      var maxBound = calculateSecondsSinceMidnight(self.config.maxTime.getHours(), self.config.maxTime.getMinutes(), self.config.maxTime.getSeconds());
      var currentTime = calculateSecondsSinceMidnight(hours, minutes, seconds);
      if (currentTime > maxBound && currentTime < minBound) {
        var result = parseSeconds(minBound);
        hours = result[0];
        minutes = result[1];
        seconds = result[2];
      }
    } else {
      if (limitMaxHours) {
        var maxTime = self.config.maxTime !== void 0 ? self.config.maxTime : self.config.maxDate;
        hours = Math.min(hours, maxTime.getHours());
        if (hours === maxTime.getHours())
          minutes = Math.min(minutes, maxTime.getMinutes());
        if (minutes === maxTime.getMinutes())
          seconds = Math.min(seconds, maxTime.getSeconds());
      }
      if (limitMinHours) {
        var minTime = self.config.minTime !== void 0 ? self.config.minTime : self.config.minDate;
        hours = Math.max(hours, minTime.getHours());
        if (hours === minTime.getHours() && minutes < minTime.getMinutes())
          minutes = minTime.getMinutes();
        if (minutes === minTime.getMinutes())
          seconds = Math.max(seconds, minTime.getSeconds());
      }
    }
    setHours(hours, minutes, seconds);
  }
  function setHoursFromDate(dateObj) {
    var date = dateObj || self.latestSelectedDateObj;
    if (date && date instanceof Date) {
      setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }
  }
  function setHours(hours, minutes, seconds) {
    if (self.latestSelectedDateObj !== void 0) {
      self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
    }
    if (!self.hourElement || !self.minuteElement || self.isMobile)
      return;
    self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * int(hours % 12 === 0) : hours);
    self.minuteElement.value = pad(minutes);
    if (self.amPM !== void 0)
      self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
    if (self.secondElement !== void 0)
      self.secondElement.value = pad(seconds);
  }
  function onYearInput(event) {
    var eventTarget = getEventTarget(event);
    var year = parseInt(eventTarget.value) + (event.delta || 0);
    if (year / 1e3 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
      changeYear(year);
    }
  }
  function bind(element2, event, handler, options) {
    if (event instanceof Array)
      return event.forEach(function(ev) {
        return bind(element2, ev, handler, options);
      });
    if (element2 instanceof Array)
      return element2.forEach(function(el) {
        return bind(el, event, handler, options);
      });
    element2.addEventListener(event, handler, options);
    self._handlers.push({
      remove: function() {
        return element2.removeEventListener(event, handler, options);
      }
    });
  }
  function triggerChange() {
    triggerEvent("onChange");
  }
  function bindEvents() {
    if (self.config.wrap) {
      ["open", "close", "toggle", "clear"].forEach(function(evt) {
        Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function(el) {
          return bind(el, "click", self[evt]);
        });
      });
    }
    if (self.isMobile) {
      setupMobile();
      return;
    }
    var debouncedResize = debounce(onResize, 50);
    self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
    if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
      bind(self.daysContainer, "mouseover", function(e3) {
        if (self.config.mode === "range")
          onMouseOver(getEventTarget(e3));
      });
    bind(self._input, "keydown", onKeyDown);
    if (self.calendarContainer !== void 0) {
      bind(self.calendarContainer, "keydown", onKeyDown);
    }
    if (!self.config.inline && !self.config.static)
      bind(window, "resize", debouncedResize);
    if (window.ontouchstart !== void 0)
      bind(window.document, "touchstart", documentClick);
    else
      bind(window.document, "mousedown", documentClick);
    bind(window.document, "focus", documentClick, { capture: true });
    if (self.config.clickOpens === true) {
      bind(self._input, "focus", self.open);
      bind(self._input, "click", self.open);
    }
    if (self.daysContainer !== void 0) {
      bind(self.monthNav, "click", onMonthNavClick);
      bind(self.monthNav, ["keyup", "increment"], onYearInput);
      bind(self.daysContainer, "click", selectDate);
    }
    if (self.timeContainer !== void 0 && self.minuteElement !== void 0 && self.hourElement !== void 0) {
      var selText = function(e3) {
        return getEventTarget(e3).select();
      };
      bind(self.timeContainer, ["increment"], updateTime);
      bind(self.timeContainer, "blur", updateTime, { capture: true });
      bind(self.timeContainer, "click", timeIncrement);
      bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
      if (self.secondElement !== void 0)
        bind(self.secondElement, "focus", function() {
          return self.secondElement && self.secondElement.select();
        });
      if (self.amPM !== void 0) {
        bind(self.amPM, "click", function(e3) {
          updateTime(e3);
        });
      }
    }
    if (self.config.allowInput) {
      bind(self._input, "blur", onBlur);
    }
  }
  function jumpToDate(jumpDate, triggerChange2) {
    var jumpTo = jumpDate !== void 0 ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
    var oldYear = self.currentYear;
    var oldMonth = self.currentMonth;
    try {
      if (jumpTo !== void 0) {
        self.currentYear = jumpTo.getFullYear();
        self.currentMonth = jumpTo.getMonth();
      }
    } catch (e3) {
      e3.message = "Invalid date supplied: " + jumpTo;
      self.config.errorHandler(e3);
    }
    if (triggerChange2 && self.currentYear !== oldYear) {
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    if (triggerChange2 && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
      triggerEvent("onMonthChange");
    }
    self.redraw();
  }
  function timeIncrement(e3) {
    var eventTarget = getEventTarget(e3);
    if (~eventTarget.className.indexOf("arrow"))
      incrementNumInput(e3, eventTarget.classList.contains("arrowUp") ? 1 : -1);
  }
  function incrementNumInput(e3, delta, inputElem) {
    var target = e3 && getEventTarget(e3);
    var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
    var event = createEvent("increment");
    event.delta = delta;
    input && input.dispatchEvent(event);
  }
  function build() {
    var fragment = window.document.createDocumentFragment();
    self.calendarContainer = createElement("div", "flatpickr-calendar");
    self.calendarContainer.tabIndex = -1;
    if (!self.config.noCalendar) {
      fragment.appendChild(buildMonthNav());
      self.innerContainer = createElement("div", "flatpickr-innerContainer");
      if (self.config.weekNumbers) {
        var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
        self.innerContainer.appendChild(weekWrapper);
        self.weekNumbers = weekNumbers;
        self.weekWrapper = weekWrapper;
      }
      self.rContainer = createElement("div", "flatpickr-rContainer");
      self.rContainer.appendChild(buildWeekdays());
      if (!self.daysContainer) {
        self.daysContainer = createElement("div", "flatpickr-days");
        self.daysContainer.tabIndex = -1;
      }
      buildDays();
      self.rContainer.appendChild(self.daysContainer);
      self.innerContainer.appendChild(self.rContainer);
      fragment.appendChild(self.innerContainer);
    }
    if (self.config.enableTime) {
      fragment.appendChild(buildTime());
    }
    toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
    toggleClass(self.calendarContainer, "animate", self.config.animate === true);
    toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
    self.calendarContainer.appendChild(fragment);
    var customAppend = self.config.appendTo !== void 0 && self.config.appendTo.nodeType !== void 0;
    if (self.config.inline || self.config.static) {
      self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
      if (self.config.inline) {
        if (!customAppend && self.element.parentNode)
          self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
        else if (self.config.appendTo !== void 0)
          self.config.appendTo.appendChild(self.calendarContainer);
      }
      if (self.config.static) {
        var wrapper = createElement("div", "flatpickr-wrapper");
        if (self.element.parentNode)
          self.element.parentNode.insertBefore(wrapper, self.element);
        wrapper.appendChild(self.element);
        if (self.altInput)
          wrapper.appendChild(self.altInput);
        wrapper.appendChild(self.calendarContainer);
      }
    }
    if (!self.config.static && !self.config.inline)
      (self.config.appendTo !== void 0 ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
  }
  function createDay(className, date, _dayNumber, i3) {
    var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", className, date.getDate().toString());
    dayElement.dateObj = date;
    dayElement.$i = i3;
    dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
    if (className.indexOf("hidden") === -1 && compareDates(date, self.now) === 0) {
      self.todayDateElem = dayElement;
      dayElement.classList.add("today");
      dayElement.setAttribute("aria-current", "date");
    }
    if (dateIsEnabled) {
      dayElement.tabIndex = -1;
      if (isDateSelected(date)) {
        dayElement.classList.add("selected");
        self.selectedDateElem = dayElement;
        if (self.config.mode === "range") {
          toggleClass(dayElement, "startRange", self.selectedDates[0] && compareDates(date, self.selectedDates[0], true) === 0);
          toggleClass(dayElement, "endRange", self.selectedDates[1] && compareDates(date, self.selectedDates[1], true) === 0);
          if (className === "nextMonthDay")
            dayElement.classList.add("inRange");
        }
      }
    } else {
      dayElement.classList.add("flatpickr-disabled");
    }
    if (self.config.mode === "range") {
      if (isDateInRange(date) && !isDateSelected(date))
        dayElement.classList.add("inRange");
    }
    if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && i3 % 7 === 6) {
      self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
    }
    triggerEvent("onDayCreate", dayElement);
    return dayElement;
  }
  function focusOnDayElem(targetNode) {
    targetNode.focus();
    if (self.config.mode === "range")
      onMouseOver(targetNode);
  }
  function getFirstAvailableDay(delta) {
    var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
    var endMonth = delta > 0 ? self.config.showMonths : -1;
    for (var m = startMonth; m != endMonth; m += delta) {
      var month = self.daysContainer.children[m];
      var startIndex = delta > 0 ? 0 : month.children.length - 1;
      var endIndex = delta > 0 ? month.children.length : -1;
      for (var i3 = startIndex; i3 != endIndex; i3 += delta) {
        var c = month.children[i3];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
          return c;
      }
    }
    return void 0;
  }
  function getNextAvailableDay(current, delta) {
    var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
    var endMonth = delta > 0 ? self.config.showMonths : -1;
    var loopDelta = delta > 0 ? 1 : -1;
    for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
      var month = self.daysContainer.children[m];
      var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
      var numMonthDays = month.children.length;
      for (var i3 = startIndex; i3 >= 0 && i3 < numMonthDays && i3 != (delta > 0 ? numMonthDays : -1); i3 += loopDelta) {
        var c = month.children[i3];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i3) >= Math.abs(delta))
          return focusOnDayElem(c);
      }
    }
    self.changeMonth(loopDelta);
    focusOnDay(getFirstAvailableDay(loopDelta), 0);
    return void 0;
  }
  function focusOnDay(current, offset) {
    var activeElement = getClosestActiveElement();
    var dayFocused = isInView(activeElement || document.body);
    var startElem = current !== void 0 ? current : dayFocused ? activeElement : self.selectedDateElem !== void 0 && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== void 0 && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
    if (startElem === void 0) {
      self._input.focus();
    } else if (!dayFocused) {
      focusOnDayElem(startElem);
    } else {
      getNextAvailableDay(startElem, offset);
    }
  }
  function buildMonthDays(year, month) {
    var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
    var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
    var daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
    var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
    for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
    }
    for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
    }
    for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
    }
    var dayContainer = createElement("div", "dayContainer");
    dayContainer.appendChild(days);
    return dayContainer;
  }
  function buildDays() {
    if (self.daysContainer === void 0) {
      return;
    }
    clearNode(self.daysContainer);
    if (self.weekNumbers)
      clearNode(self.weekNumbers);
    var frag = document.createDocumentFragment();
    for (var i3 = 0; i3 < self.config.showMonths; i3++) {
      var d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i3);
      frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
    }
    self.daysContainer.appendChild(frag);
    self.days = self.daysContainer.firstChild;
    if (self.config.mode === "range" && self.selectedDates.length === 1) {
      onMouseOver();
    }
  }
  function buildMonthSwitch() {
    if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown")
      return;
    var shouldBuildMonth = function(month2) {
      if (self.config.minDate !== void 0 && self.currentYear === self.config.minDate.getFullYear() && month2 < self.config.minDate.getMonth()) {
        return false;
      }
      return !(self.config.maxDate !== void 0 && self.currentYear === self.config.maxDate.getFullYear() && month2 > self.config.maxDate.getMonth());
    };
    self.monthsDropdownContainer.tabIndex = -1;
    self.monthsDropdownContainer.innerHTML = "";
    for (var i3 = 0; i3 < 12; i3++) {
      if (!shouldBuildMonth(i3))
        continue;
      var month = createElement("option", "flatpickr-monthDropdown-month");
      month.value = new Date(self.currentYear, i3).getMonth().toString();
      month.textContent = monthToStr(i3, self.config.shorthandCurrentMonth, self.l10n);
      month.tabIndex = -1;
      if (self.currentMonth === i3) {
        month.selected = true;
      }
      self.monthsDropdownContainer.appendChild(month);
    }
  }
  function buildMonth() {
    var container = createElement("div", "flatpickr-month");
    var monthNavFragment = window.document.createDocumentFragment();
    var monthElement;
    if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
      monthElement = createElement("span", "cur-month");
    } else {
      self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
      self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
      bind(self.monthsDropdownContainer, "change", function(e3) {
        var target = getEventTarget(e3);
        var selectedMonth = parseInt(target.value, 10);
        self.changeMonth(selectedMonth - self.currentMonth);
        triggerEvent("onMonthChange");
      });
      buildMonthSwitch();
      monthElement = self.monthsDropdownContainer;
    }
    var yearInput = createNumberInput("cur-year", { tabindex: "-1" });
    var yearElement = yearInput.getElementsByTagName("input")[0];
    yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
    if (self.config.minDate) {
      yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
    }
    if (self.config.maxDate) {
      yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
      yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
    }
    var currentMonth = createElement("div", "flatpickr-current-month");
    currentMonth.appendChild(monthElement);
    currentMonth.appendChild(yearInput);
    monthNavFragment.appendChild(currentMonth);
    container.appendChild(monthNavFragment);
    return {
      container,
      yearElement,
      monthElement
    };
  }
  function buildMonths() {
    clearNode(self.monthNav);
    self.monthNav.appendChild(self.prevMonthNav);
    if (self.config.showMonths) {
      self.yearElements = [];
      self.monthElements = [];
    }
    for (var m = self.config.showMonths; m--; ) {
      var month = buildMonth();
      self.yearElements.push(month.yearElement);
      self.monthElements.push(month.monthElement);
      self.monthNav.appendChild(month.container);
    }
    self.monthNav.appendChild(self.nextMonthNav);
  }
  function buildMonthNav() {
    self.monthNav = createElement("div", "flatpickr-months");
    self.yearElements = [];
    self.monthElements = [];
    self.prevMonthNav = createElement("span", "flatpickr-prev-month");
    self.prevMonthNav.innerHTML = self.config.prevArrow;
    self.nextMonthNav = createElement("span", "flatpickr-next-month");
    self.nextMonthNav.innerHTML = self.config.nextArrow;
    buildMonths();
    Object.defineProperty(self, "_hidePrevMonthArrow", {
      get: function() {
        return self.__hidePrevMonthArrow;
      },
      set: function(bool) {
        if (self.__hidePrevMonthArrow !== bool) {
          toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
          self.__hidePrevMonthArrow = bool;
        }
      }
    });
    Object.defineProperty(self, "_hideNextMonthArrow", {
      get: function() {
        return self.__hideNextMonthArrow;
      },
      set: function(bool) {
        if (self.__hideNextMonthArrow !== bool) {
          toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
          self.__hideNextMonthArrow = bool;
        }
      }
    });
    self.currentYearElement = self.yearElements[0];
    updateNavigationCurrentMonth();
    return self.monthNav;
  }
  function buildTime() {
    self.calendarContainer.classList.add("hasTime");
    if (self.config.noCalendar)
      self.calendarContainer.classList.add("noCalendar");
    var defaults2 = getDefaultHours(self.config);
    self.timeContainer = createElement("div", "flatpickr-time");
    self.timeContainer.tabIndex = -1;
    var separator = createElement("span", "flatpickr-time-separator", ":");
    var hourInput = createNumberInput("flatpickr-hour", {
      "aria-label": self.l10n.hourAriaLabel
    });
    self.hourElement = hourInput.getElementsByTagName("input")[0];
    var minuteInput = createNumberInput("flatpickr-minute", {
      "aria-label": self.l10n.minuteAriaLabel
    });
    self.minuteElement = minuteInput.getElementsByTagName("input")[0];
    self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
    self.hourElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? defaults2.hours : military2ampm(defaults2.hours));
    self.minuteElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults2.minutes);
    self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
    self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
    self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
    self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
    self.hourElement.setAttribute("maxlength", "2");
    self.minuteElement.setAttribute("min", "0");
    self.minuteElement.setAttribute("max", "59");
    self.minuteElement.setAttribute("maxlength", "2");
    self.timeContainer.appendChild(hourInput);
    self.timeContainer.appendChild(separator);
    self.timeContainer.appendChild(minuteInput);
    if (self.config.time_24hr)
      self.timeContainer.classList.add("time24hr");
    if (self.config.enableSeconds) {
      self.timeContainer.classList.add("hasSeconds");
      var secondInput = createNumberInput("flatpickr-second");
      self.secondElement = secondInput.getElementsByTagName("input")[0];
      self.secondElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults2.seconds);
      self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
      self.secondElement.setAttribute("min", "0");
      self.secondElement.setAttribute("max", "59");
      self.secondElement.setAttribute("maxlength", "2");
      self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
      self.timeContainer.appendChild(secondInput);
    }
    if (!self.config.time_24hr) {
      self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
      self.amPM.title = self.l10n.toggleTitle;
      self.amPM.tabIndex = -1;
      self.timeContainer.appendChild(self.amPM);
    }
    return self.timeContainer;
  }
  function buildWeekdays() {
    if (!self.weekdayContainer)
      self.weekdayContainer = createElement("div", "flatpickr-weekdays");
    else
      clearNode(self.weekdayContainer);
    for (var i3 = self.config.showMonths; i3--; ) {
      var container = createElement("div", "flatpickr-weekdaycontainer");
      self.weekdayContainer.appendChild(container);
    }
    updateWeekdays();
    return self.weekdayContainer;
  }
  function updateWeekdays() {
    if (!self.weekdayContainer) {
      return;
    }
    var firstDayOfWeek = self.l10n.firstDayOfWeek;
    var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);
    if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
      weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
    }
    for (var i3 = self.config.showMonths; i3--; ) {
      self.weekdayContainer.children[i3].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
    }
  }
  function buildWeeks() {
    self.calendarContainer.classList.add("hasWeeks");
    var weekWrapper = createElement("div", "flatpickr-weekwrapper");
    weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
    var weekNumbers = createElement("div", "flatpickr-weeks");
    weekWrapper.appendChild(weekNumbers);
    return {
      weekWrapper,
      weekNumbers
    };
  }
  function changeMonth(value, isOffset) {
    if (isOffset === void 0) {
      isOffset = true;
    }
    var delta = isOffset ? value : value - self.currentMonth;
    if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true)
      return;
    self.currentMonth += delta;
    if (self.currentMonth < 0 || self.currentMonth > 11) {
      self.currentYear += self.currentMonth > 11 ? 1 : -1;
      self.currentMonth = (self.currentMonth + 12) % 12;
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    buildDays();
    triggerEvent("onMonthChange");
    updateNavigationCurrentMonth();
  }
  function clear(triggerChangeEvent, toInitial) {
    if (triggerChangeEvent === void 0) {
      triggerChangeEvent = true;
    }
    if (toInitial === void 0) {
      toInitial = true;
    }
    self.input.value = "";
    if (self.altInput !== void 0)
      self.altInput.value = "";
    if (self.mobileInput !== void 0)
      self.mobileInput.value = "";
    self.selectedDates = [];
    self.latestSelectedDateObj = void 0;
    if (toInitial === true) {
      self.currentYear = self._initialDate.getFullYear();
      self.currentMonth = self._initialDate.getMonth();
    }
    if (self.config.enableTime === true) {
      var _a = getDefaultHours(self.config), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
      setHours(hours, minutes, seconds);
    }
    self.redraw();
    if (triggerChangeEvent)
      triggerEvent("onChange");
  }
  function close() {
    self.isOpen = false;
    if (!self.isMobile) {
      if (self.calendarContainer !== void 0) {
        self.calendarContainer.classList.remove("open");
      }
      if (self._input !== void 0) {
        self._input.classList.remove("active");
      }
    }
    triggerEvent("onClose");
  }
  function destroy() {
    if (self.config !== void 0)
      triggerEvent("onDestroy");
    for (var i3 = self._handlers.length; i3--; ) {
      self._handlers[i3].remove();
    }
    self._handlers = [];
    if (self.mobileInput) {
      if (self.mobileInput.parentNode)
        self.mobileInput.parentNode.removeChild(self.mobileInput);
      self.mobileInput = void 0;
    } else if (self.calendarContainer && self.calendarContainer.parentNode) {
      if (self.config.static && self.calendarContainer.parentNode) {
        var wrapper = self.calendarContainer.parentNode;
        wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
        if (wrapper.parentNode) {
          while (wrapper.firstChild)
            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
          wrapper.parentNode.removeChild(wrapper);
        }
      } else
        self.calendarContainer.parentNode.removeChild(self.calendarContainer);
    }
    if (self.altInput) {
      self.input.type = "text";
      if (self.altInput.parentNode)
        self.altInput.parentNode.removeChild(self.altInput);
      delete self.altInput;
    }
    if (self.input) {
      self.input.type = self.input._type;
      self.input.classList.remove("flatpickr-input");
      self.input.removeAttribute("readonly");
    }
    [
      "_showTimeInput",
      "latestSelectedDateObj",
      "_hideNextMonthArrow",
      "_hidePrevMonthArrow",
      "__hideNextMonthArrow",
      "__hidePrevMonthArrow",
      "isMobile",
      "isOpen",
      "selectedDateElem",
      "minDateHasTime",
      "maxDateHasTime",
      "days",
      "daysContainer",
      "_input",
      "_positionElement",
      "innerContainer",
      "rContainer",
      "monthNav",
      "todayDateElem",
      "calendarContainer",
      "weekdayContainer",
      "prevMonthNav",
      "nextMonthNav",
      "monthsDropdownContainer",
      "currentMonthElement",
      "currentYearElement",
      "navigationCurrentMonth",
      "selectedDateElem",
      "config"
    ].forEach(function(k) {
      try {
        delete self[k];
      } catch (_) {
      }
    });
  }
  function isCalendarElem(elem) {
    return self.calendarContainer.contains(elem);
  }
  function documentClick(e3) {
    if (self.isOpen && !self.config.inline) {
      var eventTarget_1 = getEventTarget(e3);
      var isCalendarElement = isCalendarElem(eventTarget_1);
      var isInput = eventTarget_1 === self.input || eventTarget_1 === self.altInput || self.element.contains(eventTarget_1) || e3.path && e3.path.indexOf && (~e3.path.indexOf(self.input) || ~e3.path.indexOf(self.altInput));
      var lostFocus = !isInput && !isCalendarElement && !isCalendarElem(e3.relatedTarget);
      var isIgnored = !self.config.ignoredFocusElements.some(function(elem) {
        return elem.contains(eventTarget_1);
      });
      if (lostFocus && isIgnored) {
        if (self.config.allowInput) {
          self.setDate(self._input.value, false, self.config.altInput ? self.config.altFormat : self.config.dateFormat);
        }
        if (self.timeContainer !== void 0 && self.minuteElement !== void 0 && self.hourElement !== void 0 && self.input.value !== "" && self.input.value !== void 0) {
          updateTime();
        }
        self.close();
        if (self.config && self.config.mode === "range" && self.selectedDates.length === 1)
          self.clear(false);
      }
    }
  }
  function changeYear(newYear) {
    if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear())
      return;
    var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
    self.currentYear = newYearNum || self.currentYear;
    if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
      self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
    } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
      self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
    }
    if (isNewYear) {
      self.redraw();
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
  }
  function isEnabled(date, timeless) {
    var _a;
    if (timeless === void 0) {
      timeless = true;
    }
    var dateToCheck = self.parseDate(date, void 0, timeless);
    if (self.config.minDate && dateToCheck && compareDates(dateToCheck, self.config.minDate, timeless !== void 0 ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && compareDates(dateToCheck, self.config.maxDate, timeless !== void 0 ? timeless : !self.maxDateHasTime) > 0)
      return false;
    if (!self.config.enable && self.config.disable.length === 0)
      return true;
    if (dateToCheck === void 0)
      return false;
    var bool = !!self.config.enable, array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
    for (var i3 = 0, d = void 0; i3 < array.length; i3++) {
      d = array[i3];
      if (typeof d === "function" && d(dateToCheck))
        return bool;
      else if (d instanceof Date && dateToCheck !== void 0 && d.getTime() === dateToCheck.getTime())
        return bool;
      else if (typeof d === "string") {
        var parsed = self.parseDate(d, void 0, true);
        return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
      } else if (typeof d === "object" && dateToCheck !== void 0 && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime())
        return bool;
    }
    return !bool;
  }
  function isInView(elem) {
    if (self.daysContainer !== void 0)
      return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self.daysContainer.contains(elem);
    return false;
  }
  function onBlur(e3) {
    var isInput = e3.target === self._input;
    var valueChanged = self._input.value.trimEnd() !== getDateStr();
    if (isInput && valueChanged && !(e3.relatedTarget && isCalendarElem(e3.relatedTarget))) {
      self.setDate(self._input.value, true, e3.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
    }
  }
  function onKeyDown(e3) {
    var eventTarget = getEventTarget(e3);
    var isInput = self.config.wrap ? element.contains(eventTarget) : eventTarget === self._input;
    var allowInput = self.config.allowInput;
    var allowKeydown = self.isOpen && (!allowInput || !isInput);
    var allowInlineKeydown = self.config.inline && isInput && !allowInput;
    if (e3.keyCode === 13 && isInput) {
      if (allowInput) {
        self.setDate(self._input.value, true, eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat);
        self.close();
        return eventTarget.blur();
      } else {
        self.open();
      }
    } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
      var isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);
      switch (e3.keyCode) {
        case 13:
          if (isTimeObj) {
            e3.preventDefault();
            updateTime();
            focusAndClose();
          } else
            selectDate(e3);
          break;
        case 27:
          e3.preventDefault();
          focusAndClose();
          break;
        case 8:
        case 46:
          if (isInput && !self.config.allowInput) {
            e3.preventDefault();
            self.clear();
          }
          break;
        case 37:
        case 39:
          if (!isTimeObj && !isInput) {
            e3.preventDefault();
            var activeElement = getClosestActiveElement();
            if (self.daysContainer !== void 0 && (allowInput === false || activeElement && isInView(activeElement))) {
              var delta_1 = e3.keyCode === 39 ? 1 : -1;
              if (!e3.ctrlKey)
                focusOnDay(void 0, delta_1);
              else {
                e3.stopPropagation();
                changeMonth(delta_1);
                focusOnDay(getFirstAvailableDay(1), 0);
              }
            }
          } else if (self.hourElement)
            self.hourElement.focus();
          break;
        case 38:
        case 40:
          e3.preventDefault();
          var delta = e3.keyCode === 40 ? 1 : -1;
          if (self.daysContainer && eventTarget.$i !== void 0 || eventTarget === self.input || eventTarget === self.altInput) {
            if (e3.ctrlKey) {
              e3.stopPropagation();
              changeYear(self.currentYear - delta);
              focusOnDay(getFirstAvailableDay(1), 0);
            } else if (!isTimeObj)
              focusOnDay(void 0, delta * 7);
          } else if (eventTarget === self.currentYearElement) {
            changeYear(self.currentYear - delta);
          } else if (self.config.enableTime) {
            if (!isTimeObj && self.hourElement)
              self.hourElement.focus();
            updateTime(e3);
            self._debouncedChange();
          }
          break;
        case 9:
          if (isTimeObj) {
            var elems = [
              self.hourElement,
              self.minuteElement,
              self.secondElement,
              self.amPM
            ].concat(self.pluginElements).filter(function(x) {
              return x;
            });
            var i3 = elems.indexOf(eventTarget);
            if (i3 !== -1) {
              var target = elems[i3 + (e3.shiftKey ? -1 : 1)];
              e3.preventDefault();
              (target || self._input).focus();
            }
          } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(eventTarget) && e3.shiftKey) {
            e3.preventDefault();
            self._input.focus();
          }
          break;
        default:
          break;
      }
    }
    if (self.amPM !== void 0 && eventTarget === self.amPM) {
      switch (e3.key) {
        case self.l10n.amPM[0].charAt(0):
        case self.l10n.amPM[0].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[0];
          setHoursFromInputs();
          updateValue();
          break;
        case self.l10n.amPM[1].charAt(0):
        case self.l10n.amPM[1].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[1];
          setHoursFromInputs();
          updateValue();
          break;
      }
    }
    if (isInput || isCalendarElem(eventTarget)) {
      triggerEvent("onKeyDown", e3);
    }
  }
  function onMouseOver(elem, cellClass) {
    if (cellClass === void 0) {
      cellClass = "flatpickr-day";
    }
    if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains(cellClass) || elem.classList.contains("flatpickr-disabled")))
      return;
    var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], void 0, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
    var containsDisabled = false;
    var minRange = 0, maxRange = 0;
    for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
      if (!isEnabled(new Date(t), true)) {
        containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
        if (t < initialDate && (!minRange || t > minRange))
          minRange = t;
        else if (t > initialDate && (!maxRange || t < maxRange))
          maxRange = t;
      }
    }
    var hoverableCells = Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+" + self.config.showMonths + ") > ." + cellClass));
    hoverableCells.forEach(function(dayElem) {
      var date = dayElem.dateObj;
      var timestamp = date.getTime();
      var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;
      if (outOfRange) {
        dayElem.classList.add("notAllowed");
        ["inRange", "startRange", "endRange"].forEach(function(c) {
          dayElem.classList.remove(c);
        });
        return;
      } else if (containsDisabled && !outOfRange)
        return;
      ["startRange", "inRange", "endRange", "notAllowed"].forEach(function(c) {
        dayElem.classList.remove(c);
      });
      if (elem !== void 0) {
        elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
        if (initialDate < hoverDate && timestamp === initialDate)
          dayElem.classList.add("startRange");
        else if (initialDate > hoverDate && timestamp === initialDate)
          dayElem.classList.add("endRange");
        if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate))
          dayElem.classList.add("inRange");
      }
    });
  }
  function onResize() {
    if (self.isOpen && !self.config.static && !self.config.inline)
      positionCalendar();
  }
  function open(e3, positionElement) {
    if (positionElement === void 0) {
      positionElement = self._positionElement;
    }
    if (self.isMobile === true) {
      if (e3) {
        e3.preventDefault();
        var eventTarget = getEventTarget(e3);
        if (eventTarget) {
          eventTarget.blur();
        }
      }
      if (self.mobileInput !== void 0) {
        self.mobileInput.focus();
        self.mobileInput.click();
      }
      triggerEvent("onOpen");
      return;
    } else if (self._input.disabled || self.config.inline) {
      return;
    }
    var wasOpen = self.isOpen;
    self.isOpen = true;
    if (!wasOpen) {
      self.calendarContainer.classList.add("open");
      self._input.classList.add("active");
      triggerEvent("onOpen");
      positionCalendar(positionElement);
    }
    if (self.config.enableTime === true && self.config.noCalendar === true) {
      if (self.config.allowInput === false && (e3 === void 0 || !self.timeContainer.contains(e3.relatedTarget))) {
        setTimeout(function() {
          return self.hourElement.select();
        }, 50);
      }
    }
  }
  function minMaxDateSetter(type) {
    return function(date) {
      var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
      var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
      if (dateObj !== void 0) {
        self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
      }
      if (self.selectedDates) {
        self.selectedDates = self.selectedDates.filter(function(d) {
          return isEnabled(d);
        });
        if (!self.selectedDates.length && type === "min")
          setHoursFromDate(dateObj);
        updateValue();
      }
      if (self.daysContainer) {
        redraw();
        if (dateObj !== void 0)
          self.currentYearElement[type] = dateObj.getFullYear().toString();
        else
          self.currentYearElement.removeAttribute(type);
        self.currentYearElement.disabled = !!inverseDateObj && dateObj !== void 0 && inverseDateObj.getFullYear() === dateObj.getFullYear();
      }
    };
  }
  function parseConfig() {
    var boolOpts = [
      "wrap",
      "weekNumbers",
      "allowInput",
      "allowInvalidPreload",
      "clickOpens",
      "time_24hr",
      "enableTime",
      "noCalendar",
      "altInput",
      "shorthandCurrentMonth",
      "inline",
      "static",
      "enableSeconds",
      "disableMobile"
    ];
    var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
    var formats2 = {};
    self.config.parseDate = userConfig.parseDate;
    self.config.formatDate = userConfig.formatDate;
    Object.defineProperty(self.config, "enable", {
      get: function() {
        return self.config._enable;
      },
      set: function(dates) {
        self.config._enable = parseDateRules(dates);
      }
    });
    Object.defineProperty(self.config, "disable", {
      get: function() {
        return self.config._disable;
      },
      set: function(dates) {
        self.config._disable = parseDateRules(dates);
      }
    });
    var timeMode = userConfig.mode === "time";
    if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
      var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
      formats2.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
    }
    if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
      var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
      formats2.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
    }
    Object.defineProperty(self.config, "minDate", {
      get: function() {
        return self.config._minDate;
      },
      set: minMaxDateSetter("min")
    });
    Object.defineProperty(self.config, "maxDate", {
      get: function() {
        return self.config._maxDate;
      },
      set: minMaxDateSetter("max")
    });
    var minMaxTimeSetter = function(type) {
      return function(val) {
        self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
      };
    };
    Object.defineProperty(self.config, "minTime", {
      get: function() {
        return self.config._minTime;
      },
      set: minMaxTimeSetter("min")
    });
    Object.defineProperty(self.config, "maxTime", {
      get: function() {
        return self.config._maxTime;
      },
      set: minMaxTimeSetter("max")
    });
    if (userConfig.mode === "time") {
      self.config.noCalendar = true;
      self.config.enableTime = true;
    }
    Object.assign(self.config, formats2, userConfig);
    for (var i3 = 0; i3 < boolOpts.length; i3++)
      self.config[boolOpts[i3]] = self.config[boolOpts[i3]] === true || self.config[boolOpts[i3]] === "true";
    HOOKS.filter(function(hook) {
      return self.config[hook] !== void 0;
    }).forEach(function(hook) {
      self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
    });
    self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    for (var i3 = 0; i3 < self.config.plugins.length; i3++) {
      var pluginConf = self.config.plugins[i3](self) || {};
      for (var key in pluginConf) {
        if (HOOKS.indexOf(key) > -1) {
          self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
        } else if (typeof userConfig[key] === "undefined")
          self.config[key] = pluginConf[key];
      }
    }
    if (!userConfig.altInputClass) {
      self.config.altInputClass = getInputElem().className + " " + self.config.altInputClass;
    }
    triggerEvent("onParseConfig");
  }
  function getInputElem() {
    return self.config.wrap ? element.querySelector("[data-input]") : element;
  }
  function setupLocale() {
    if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined")
      self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
    self.l10n = __assign(__assign({}, flatpickr.l10ns.default), typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : void 0);
    tokenRegex.D = "(" + self.l10n.weekdays.shorthand.join("|") + ")";
    tokenRegex.l = "(" + self.l10n.weekdays.longhand.join("|") + ")";
    tokenRegex.M = "(" + self.l10n.months.shorthand.join("|") + ")";
    tokenRegex.F = "(" + self.l10n.months.longhand.join("|") + ")";
    tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
    var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
    if (userConfig.time_24hr === void 0 && flatpickr.defaultConfig.time_24hr === void 0) {
      self.config.time_24hr = self.l10n.time_24hr;
    }
    self.formatDate = createDateFormatter(self);
    self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
  }
  function positionCalendar(customPositionElement) {
    if (typeof self.config.position === "function") {
      return void self.config.position(self, customPositionElement);
    }
    if (self.calendarContainer === void 0)
      return;
    triggerEvent("onPreCalendarPosition");
    var positionElement = customPositionElement || self._positionElement;
    var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function(acc, child) {
      return acc + child.offsetHeight;
    }, 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
    var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
    toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
    toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
    if (self.config.inline)
      return;
    var left = window.pageXOffset + inputBounds.left;
    var isCenter = false;
    var isRight = false;
    if (configPosHorizontal === "center") {
      left -= (calendarWidth - inputBounds.width) / 2;
      isCenter = true;
    } else if (configPosHorizontal === "right") {
      left -= calendarWidth - inputBounds.width;
      isRight = true;
    }
    toggleClass(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
    toggleClass(self.calendarContainer, "arrowCenter", isCenter);
    toggleClass(self.calendarContainer, "arrowRight", isRight);
    var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
    var rightMost = left + calendarWidth > window.document.body.offsetWidth;
    var centerMost = right + calendarWidth > window.document.body.offsetWidth;
    toggleClass(self.calendarContainer, "rightMost", rightMost);
    if (self.config.static)
      return;
    self.calendarContainer.style.top = top + "px";
    if (!rightMost) {
      self.calendarContainer.style.left = left + "px";
      self.calendarContainer.style.right = "auto";
    } else if (!centerMost) {
      self.calendarContainer.style.left = "auto";
      self.calendarContainer.style.right = right + "px";
    } else {
      var doc = getDocumentStyleSheet();
      if (doc === void 0)
        return;
      var bodyWidth = window.document.body.offsetWidth;
      var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
      var centerBefore = ".flatpickr-calendar.centerMost:before";
      var centerAfter = ".flatpickr-calendar.centerMost:after";
      var centerIndex = doc.cssRules.length;
      var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
      toggleClass(self.calendarContainer, "rightMost", false);
      toggleClass(self.calendarContainer, "centerMost", true);
      doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
      self.calendarContainer.style.left = centerLeft + "px";
      self.calendarContainer.style.right = "auto";
    }
  }
  function getDocumentStyleSheet() {
    var editableSheet = null;
    for (var i3 = 0; i3 < document.styleSheets.length; i3++) {
      var sheet = document.styleSheets[i3];
      if (!sheet.cssRules)
        continue;
      try {
        sheet.cssRules;
      } catch (err) {
        continue;
      }
      editableSheet = sheet;
      break;
    }
    return editableSheet != null ? editableSheet : createStyleSheet();
  }
  function createStyleSheet() {
    var style = document.createElement("style");
    document.head.appendChild(style);
    return style.sheet;
  }
  function redraw() {
    if (self.config.noCalendar || self.isMobile)
      return;
    buildMonthSwitch();
    updateNavigationCurrentMonth();
    buildDays();
  }
  function focusAndClose() {
    self._input.focus();
    if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== void 0) {
      setTimeout(self.close, 0);
    } else {
      self.close();
    }
  }
  function selectDate(e3) {
    e3.preventDefault();
    e3.stopPropagation();
    var isSelectable = function(day) {
      return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
    };
    var t = findParent(getEventTarget(e3), isSelectable);
    if (t === void 0)
      return;
    var target = t;
    var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
    var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
    self.selectedDateElem = target;
    if (self.config.mode === "single")
      self.selectedDates = [selectedDate];
    else if (self.config.mode === "multiple") {
      var selectedIndex = isDateSelected(selectedDate);
      if (selectedIndex)
        self.selectedDates.splice(parseInt(selectedIndex), 1);
      else
        self.selectedDates.push(selectedDate);
    } else if (self.config.mode === "range") {
      if (self.selectedDates.length === 2) {
        self.clear(false, false);
      }
      self.latestSelectedDateObj = selectedDate;
      self.selectedDates.push(selectedDate);
      if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
        self.selectedDates.sort(function(a, b2) {
          return a.getTime() - b2.getTime();
        });
    }
    setHoursFromInputs();
    if (shouldChangeMonth) {
      var isNewYear = self.currentYear !== selectedDate.getFullYear();
      self.currentYear = selectedDate.getFullYear();
      self.currentMonth = selectedDate.getMonth();
      if (isNewYear) {
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }
      triggerEvent("onMonthChange");
    }
    updateNavigationCurrentMonth();
    buildDays();
    updateValue();
    if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1)
      focusOnDayElem(target);
    else if (self.selectedDateElem !== void 0 && self.hourElement === void 0) {
      self.selectedDateElem && self.selectedDateElem.focus();
    }
    if (self.hourElement !== void 0)
      self.hourElement !== void 0 && self.hourElement.focus();
    if (self.config.closeOnSelect) {
      var single = self.config.mode === "single" && !self.config.enableTime;
      var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;
      if (single || range) {
        focusAndClose();
      }
    }
    triggerChange();
  }
  var CALLBACKS = {
    locale: [setupLocale, updateWeekdays],
    showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
    minDate: [jumpToDate],
    maxDate: [jumpToDate],
    positionElement: [updatePositionElement],
    clickOpens: [
      function() {
        if (self.config.clickOpens === true) {
          bind(self._input, "focus", self.open);
          bind(self._input, "click", self.open);
        } else {
          self._input.removeEventListener("focus", self.open);
          self._input.removeEventListener("click", self.open);
        }
      }
    ]
  };
  function set(option, value) {
    if (option !== null && typeof option === "object") {
      Object.assign(self.config, option);
      for (var key in option) {
        if (CALLBACKS[key] !== void 0)
          CALLBACKS[key].forEach(function(x) {
            return x();
          });
      }
    } else {
      self.config[option] = value;
      if (CALLBACKS[option] !== void 0)
        CALLBACKS[option].forEach(function(x) {
          return x();
        });
      else if (HOOKS.indexOf(option) > -1)
        self.config[option] = arrayify(value);
    }
    self.redraw();
    updateValue(true);
  }
  function setSelectedDate(inputDate, format) {
    var dates = [];
    if (inputDate instanceof Array)
      dates = inputDate.map(function(d) {
        return self.parseDate(d, format);
      });
    else if (inputDate instanceof Date || typeof inputDate === "number")
      dates = [self.parseDate(inputDate, format)];
    else if (typeof inputDate === "string") {
      switch (self.config.mode) {
        case "single":
        case "time":
          dates = [self.parseDate(inputDate, format)];
          break;
        case "multiple":
          dates = inputDate.split(self.config.conjunction).map(function(date) {
            return self.parseDate(date, format);
          });
          break;
        case "range":
          dates = inputDate.split(self.l10n.rangeSeparator).map(function(date) {
            return self.parseDate(date, format);
          });
          break;
        default:
          break;
      }
    } else
      self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
    self.selectedDates = self.config.allowInvalidPreload ? dates : dates.filter(function(d) {
      return d instanceof Date && isEnabled(d, false);
    });
    if (self.config.mode === "range")
      self.selectedDates.sort(function(a, b2) {
        return a.getTime() - b2.getTime();
      });
  }
  function setDate(date, triggerChange2, format) {
    if (triggerChange2 === void 0) {
      triggerChange2 = false;
    }
    if (format === void 0) {
      format = self.config.dateFormat;
    }
    if (date !== 0 && !date || date instanceof Array && date.length === 0)
      return self.clear(triggerChange2);
    setSelectedDate(date, format);
    self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
    self.redraw();
    jumpToDate(void 0, triggerChange2);
    setHoursFromDate();
    if (self.selectedDates.length === 0) {
      self.clear(false);
    }
    updateValue(triggerChange2);
    if (triggerChange2)
      triggerEvent("onChange");
  }
  function parseDateRules(arr) {
    return arr.slice().map(function(rule) {
      if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
        return self.parseDate(rule, void 0, true);
      } else if (rule && typeof rule === "object" && rule.from && rule.to)
        return {
          from: self.parseDate(rule.from, void 0),
          to: self.parseDate(rule.to, void 0)
        };
      return rule;
    }).filter(function(x) {
      return x;
    });
  }
  function setupDates() {
    self.selectedDates = [];
    self.now = self.parseDate(self.config.now) || /* @__PURE__ */ new Date();
    var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
    if (preloadedDate)
      setSelectedDate(preloadedDate, self.config.dateFormat);
    self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
    self.currentYear = self._initialDate.getFullYear();
    self.currentMonth = self._initialDate.getMonth();
    if (self.selectedDates.length > 0)
      self.latestSelectedDateObj = self.selectedDates[0];
    if (self.config.minTime !== void 0)
      self.config.minTime = self.parseDate(self.config.minTime, "H:i");
    if (self.config.maxTime !== void 0)
      self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
    self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
    self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
  }
  function setupInputs() {
    self.input = getInputElem();
    if (!self.input) {
      self.config.errorHandler(new Error("Invalid input element specified"));
      return;
    }
    self.input._type = self.input.type;
    self.input.type = "text";
    self.input.classList.add("flatpickr-input");
    self._input = self.input;
    if (self.config.altInput) {
      self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
      self._input = self.altInput;
      self.altInput.placeholder = self.input.placeholder;
      self.altInput.disabled = self.input.disabled;
      self.altInput.required = self.input.required;
      self.altInput.tabIndex = self.input.tabIndex;
      self.altInput.type = "text";
      self.input.setAttribute("type", "hidden");
      if (!self.config.static && self.input.parentNode)
        self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
    }
    if (!self.config.allowInput)
      self._input.setAttribute("readonly", "readonly");
    updatePositionElement();
  }
  function updatePositionElement() {
    self._positionElement = self.config.positionElement || self._input;
  }
  function setupMobile() {
    var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
    self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
    self.mobileInput.tabIndex = 1;
    self.mobileInput.type = inputType;
    self.mobileInput.disabled = self.input.disabled;
    self.mobileInput.required = self.input.required;
    self.mobileInput.placeholder = self.input.placeholder;
    self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";
    if (self.selectedDates.length > 0) {
      self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
    }
    if (self.config.minDate)
      self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
    if (self.config.maxDate)
      self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
    if (self.input.getAttribute("step"))
      self.mobileInput.step = String(self.input.getAttribute("step"));
    self.input.type = "hidden";
    if (self.altInput !== void 0)
      self.altInput.type = "hidden";
    try {
      if (self.input.parentNode)
        self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
    } catch (_a) {
    }
    bind(self.mobileInput, "change", function(e3) {
      self.setDate(getEventTarget(e3).value, false, self.mobileFormatStr);
      triggerEvent("onChange");
      triggerEvent("onClose");
    });
  }
  function toggle(e3) {
    if (self.isOpen === true)
      return self.close();
    self.open(e3);
  }
  function triggerEvent(event, data) {
    if (self.config === void 0)
      return;
    var hooks = self.config[event];
    if (hooks !== void 0 && hooks.length > 0) {
      for (var i3 = 0; hooks[i3] && i3 < hooks.length; i3++)
        hooks[i3](self.selectedDates, self.input.value, self, data);
    }
    if (event === "onChange") {
      self.input.dispatchEvent(createEvent("change"));
      self.input.dispatchEvent(createEvent("input"));
    }
  }
  function createEvent(name) {
    var e3 = document.createEvent("Event");
    e3.initEvent(name, true, true);
    return e3;
  }
  function isDateSelected(date) {
    for (var i3 = 0; i3 < self.selectedDates.length; i3++) {
      var selectedDate = self.selectedDates[i3];
      if (selectedDate instanceof Date && compareDates(selectedDate, date) === 0)
        return "" + i3;
    }
    return false;
  }
  function isDateInRange(date) {
    if (self.config.mode !== "range" || self.selectedDates.length < 2)
      return false;
    return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
  }
  function updateNavigationCurrentMonth() {
    if (self.config.noCalendar || self.isMobile || !self.monthNav)
      return;
    self.yearElements.forEach(function(yearElement, i3) {
      var d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i3);
      if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
        self.monthElements[i3].textContent = monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
      } else {
        self.monthsDropdownContainer.value = d.getMonth().toString();
      }
      yearElement.value = d.getFullYear().toString();
    });
    self._hidePrevMonthArrow = self.config.minDate !== void 0 && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
    self._hideNextMonthArrow = self.config.maxDate !== void 0 && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
  }
  function getDateStr(specificFormat) {
    var format = specificFormat || (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
    return self.selectedDates.map(function(dObj) {
      return self.formatDate(dObj, format);
    }).filter(function(d, i3, arr) {
      return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i3;
    }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
  }
  function updateValue(triggerChange2) {
    if (triggerChange2 === void 0) {
      triggerChange2 = true;
    }
    if (self.mobileInput !== void 0 && self.mobileFormatStr) {
      self.mobileInput.value = self.latestSelectedDateObj !== void 0 ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
    }
    self.input.value = getDateStr(self.config.dateFormat);
    if (self.altInput !== void 0) {
      self.altInput.value = getDateStr(self.config.altFormat);
    }
    if (triggerChange2 !== false)
      triggerEvent("onValueUpdate");
  }
  function onMonthNavClick(e3) {
    var eventTarget = getEventTarget(e3);
    var isPrevMonth = self.prevMonthNav.contains(eventTarget);
    var isNextMonth = self.nextMonthNav.contains(eventTarget);
    if (isPrevMonth || isNextMonth) {
      changeMonth(isPrevMonth ? -1 : 1);
    } else if (self.yearElements.indexOf(eventTarget) >= 0) {
      eventTarget.select();
    } else if (eventTarget.classList.contains("arrowUp")) {
      self.changeYear(self.currentYear + 1);
    } else if (eventTarget.classList.contains("arrowDown")) {
      self.changeYear(self.currentYear - 1);
    }
  }
  function timeWrapper(e3) {
    e3.preventDefault();
    var isKeyDown = e3.type === "keydown", eventTarget = getEventTarget(e3), input = eventTarget;
    if (self.amPM !== void 0 && eventTarget === self.amPM) {
      self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
    }
    var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e3.delta || (isKeyDown ? e3.which === 38 ? 1 : -1 : 0);
    var newValue = curValue + step * delta;
    if (typeof input.value !== "undefined" && input.value.length === 2) {
      var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
      if (newValue < min) {
        newValue = max + newValue + int(!isHourElem) + (int(isHourElem) && int(!self.amPM));
        if (isMinuteElem)
          incrementNumInput(void 0, -1, self.hourElement);
      } else if (newValue > max) {
        newValue = input === self.hourElement ? newValue - max - int(!self.amPM) : min;
        if (isMinuteElem)
          incrementNumInput(void 0, 1, self.hourElement);
      }
      if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
        self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
      }
      input.value = pad(newValue);
    }
  }
  init();
  return self;
}
function _flatpickr(nodeList, config) {
  var nodes = Array.prototype.slice.call(nodeList).filter(function(x) {
    return x instanceof HTMLElement;
  });
  var instances = [];
  for (var i3 = 0; i3 < nodes.length; i3++) {
    var node = nodes[i3];
    try {
      if (node.getAttribute("data-fp-omit") !== null)
        continue;
      if (node._flatpickr !== void 0) {
        node._flatpickr.destroy();
        node._flatpickr = void 0;
      }
      node._flatpickr = FlatpickrInstance(node, config || {});
      instances.push(node._flatpickr);
    } catch (e3) {
      console.error(e3);
    }
  }
  return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
  HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(config) {
    return _flatpickr(this, config);
  };
  HTMLElement.prototype.flatpickr = function(config) {
    return _flatpickr([this], config);
  };
}
var flatpickr = function(selector, config) {
  if (typeof selector === "string") {
    return _flatpickr(window.document.querySelectorAll(selector), config);
  } else if (selector instanceof Node) {
    return _flatpickr([selector], config);
  } else {
    return _flatpickr(selector, config);
  }
};
flatpickr.defaultConfig = {};
flatpickr.l10ns = {
  en: __assign({}, default_default),
  default: __assign({}, default_default)
};
flatpickr.localize = function(l10n) {
  flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
};
flatpickr.setDefaults = function(config) {
  flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
};
flatpickr.parseDate = createDateParser({});
flatpickr.formatDate = createDateFormatter({});
flatpickr.compareDates = compareDates;
if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
  jQuery.fn.flatpickr = function(config) {
    return _flatpickr(this, config);
  };
}
Date.prototype.fp_incr = function(days) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
if (typeof window !== "undefined") {
  window.flatpickr = flatpickr;
}
var esm_default = flatpickr;

// node_modules/@carbon/web-components/es/components/date-picker/iso-date.js
var getISODateString = (date) => new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())).toISOString().split("T")[0];
var parseISODateString = (s) => {
  const utcDate = new Date(Date.parse(s));
  return new Date(utcDate.getUTCFullYear(), utcDate.getUTCMonth(), utcDate.getUTCDate());
};

// node_modules/@carbon/web-components/es/components/date-picker/append-to-plugin.js
var appendToPlugin = (config) => (fp) => {
  const handlePreCalendarPosition = async () => {
    await Promise.resolve();
    const { calendarContainer, config: fpConfig, _positionElement: positionElement } = fp;
    const { appendTo } = fpConfig;
    const { top: containerTop } = appendTo.getBoundingClientRect();
    const { bottom: refBottom } = positionElement.getBoundingClientRect();
    const isRtl = (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- https://github.com/carbon-design-system/carbon/issues/20452
      appendTo.ownerDocument.defaultView.getComputedStyle(appendTo).getPropertyValue("direction") === "rtl"
    );
    calendarContainer.style.top = `${refBottom - containerTop}px`;
    calendarContainer.style.left = !isRtl ? "0" : "auto";
    calendarContainer.style.right = !isRtl ? "auto" : "0";
  };
  const register = () => {
    fp.loadedPlugins.push("carbonFlatpickrAppendToPlugin");
  };
  return {
    appendTo: config.appendTo,
    onReady: register,
    onPreCalendarPosition: handlePreCalendarPosition
  };
};

// node_modules/@carbon/web-components/es/components/date-picker/css-class-plugin.js
var cssClassPlugin = (config) => (fp) => {
  const ensureClassesInDatePicker = () => {
    const { calendarContainer, selectedDates } = fp;
    if (calendarContainer) {
      const { classCalendarContainer, classMonth, classWeekdays, classDays, classWeekday, classDay, classNoBorder, selectorFlatpickrMonth, selectorFlatpickrWeekdays, selectorFlatpickrDays, selectorFlatpickrWeekday, selectorFlatpickrDay, classFlatpickrToday } = config;
      calendarContainer.classList.add(classCalendarContainer);
      const month = calendarContainer.querySelector(selectorFlatpickrMonth);
      if (month) {
        month.classList.add(classMonth);
      }
      const weekdays = calendarContainer.querySelector(selectorFlatpickrWeekdays);
      if (weekdays) {
        weekdays.classList.add(classWeekdays);
      }
      const days = calendarContainer.querySelector(selectorFlatpickrDays);
      if (days) {
        days.classList.add(classDays);
      }
      forEach(calendarContainer.querySelectorAll(selectorFlatpickrWeekday), (item) => {
        item.innerHTML = item.innerHTML.replace(/\s+/g, "");
        item.classList.add(classWeekday);
      });
      forEach(calendarContainer.querySelectorAll(selectorFlatpickrDay), (item) => {
        item.classList.add(classDay);
        if (item.classList.contains(classFlatpickrToday) && // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- https://github.com/carbon-design-system/carbon/issues/20452
        selectedDates.length > 0) {
          item.classList.add(classNoBorder);
        } else if (item.classList.contains(classFlatpickrToday) && // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- https://github.com/carbon-design-system/carbon/issues/20452
        selectedDates.length === 0) {
          item.classList.remove(classNoBorder);
        }
      });
    }
  };
  const register = () => {
    fp.loadedPlugins.push("carbonFlatpickrCSSClassPlugin");
  };
  return {
    onMonthChange: ensureClassesInDatePicker,
    onYearChange: ensureClassesInDatePicker,
    onValueUpdate: ensureClassesInDatePicker,
    onOpen: ensureClassesInDatePicker,
    onReady: [register]
  };
};

// node_modules/@carbon/web-components/es/components/date-picker/fix-events-plugin.js
var fixEventsPlugin = (config) => (fp) => {
  const handleKeydown = (event) => {
    const { inputFrom, inputTo } = config;
    const { key, target } = event;
    if (inputFrom === target || inputTo === target) {
      switch (key) {
        case "Enter":
          fp.setDate(
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- https://github.com/carbon-design-system/carbon/issues/20452
            [inputFrom.value, inputTo && inputTo.value],
            true,
            fp.config.dateFormat
          );
          event.stopPropagation();
          break;
        case "ArrowLeft":
        case "Left":
        case "ArrowRight":
        case "Right":
          event.stopPropagation();
          break;
      }
    }
  };
  const release = () => {
    if (fp._hCDSCEDatePickerFixEventsPluginKeydownTo) {
      fp._hCDSCEDatePickerFixEventsPluginKeydownTo = fp._hCDSCEDatePickerFixEventsPluginKeydownTo.release();
    }
    if (fp._hCDSCEDatePickerFixEventsPluginKeydownFrom) {
      fp._hCDSCEDatePickerFixEventsPluginKeydownFrom = fp._hCDSCEDatePickerFixEventsPluginKeydownFrom.release();
    }
  };
  const init = () => {
    release();
    const { inputFrom, inputTo } = config;
    fp._hCDSCEDatePickerFixEventsPluginKeydownFrom = on(inputFrom, "keydown", handleKeydown, true);
    if (inputTo) {
      fp._hCDSCEDatePickerFixEventsPluginKeydownTo = on(inputTo, "keydown", handleKeydown, true);
    }
  };
  const register = () => {
    fp.loadedPlugins.push("carbonFlatpickrFixEventsPlugin");
  };
  return {
    onReady: [register, init],
    onDestroy: [release]
  };
};

// node_modules/@carbon/web-components/es/components/date-picker/defs.js
var DATE_PICKER_INPUT_KIND;
(function(DATE_PICKER_INPUT_KIND2) {
  DATE_PICKER_INPUT_KIND2["SIMPLE"] = "simple";
  DATE_PICKER_INPUT_KIND2["SINGLE"] = "single";
  DATE_PICKER_INPUT_KIND2["FROM"] = "from";
  DATE_PICKER_INPUT_KIND2["TO"] = "to";
})(DATE_PICKER_INPUT_KIND || (DATE_PICKER_INPUT_KIND = {}));

// node_modules/@carbon/web-components/es/components/date-picker/date-picker.scss.js
var styles = i(['@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}.cds--layout--size-xs{--cds-layout-size-height-context:var(--cds-layout-size-height-xs,1.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xs{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xs,1.5rem))}.cds--layout-constraint--size__min-xs{--cds-layout-size-height-min:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout-constraint--size__max-xs{--cds-layout-size-height-max:var(--cds-layout-size-height-xs,1.5rem)}.cds--layout--size-sm{--cds-layout-size-height-context:var(--cds-layout-size-height-sm,2rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-sm{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-sm,2rem))}.cds--layout-constraint--size__min-sm{--cds-layout-size-height-min:var(--cds-layout-size-height-sm,2rem)}.cds--layout-constraint--size__max-sm{--cds-layout-size-height-max:var(--cds-layout-size-height-sm,2rem)}.cds--layout--size-md{--cds-layout-size-height-context:var(--cds-layout-size-height-md,2.5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-md{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-md,2.5rem))}.cds--layout-constraint--size__min-md{--cds-layout-size-height-min:var(--cds-layout-size-height-md,2.5rem)}.cds--layout-constraint--size__max-md{--cds-layout-size-height-max:var(--cds-layout-size-height-md,2.5rem)}.cds--layout--size-lg{--cds-layout-size-height-context:var(--cds-layout-size-height-lg,3rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-lg{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-lg,3rem))}.cds--layout-constraint--size__min-lg{--cds-layout-size-height-min:var(--cds-layout-size-height-lg,3rem)}.cds--layout-constraint--size__max-lg{--cds-layout-size-height-max:var(--cds-layout-size-height-lg,3rem)}.cds--layout--size-xl{--cds-layout-size-height-context:var(--cds-layout-size-height-xl,4rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-xl,4rem))}.cds--layout-constraint--size__min-xl{--cds-layout-size-height-min:var(--cds-layout-size-height-xl,4rem)}.cds--layout-constraint--size__max-xl{--cds-layout-size-height-max:var(--cds-layout-size-height-xl,4rem)}.cds--layout--size-2xl{--cds-layout-size-height-context:var(--cds-layout-size-height-2xl,5rem);--cds-layout-size-height:var(--cds-layout-size-height-context)}.cds--layout-constraint--size__default-2xl{--cds-layout-size-height:var(--cds-layout-size-height-context,var(--cds-layout-size-height-2xl,5rem))}.cds--layout-constraint--size__min-2xl{--cds-layout-size-height-min:var(--cds-layout-size-height-2xl,5rem)}.cds--layout-constraint--size__max-2xl{--cds-layout-size-height-max:var(--cds-layout-size-height-2xl,5rem)}.cds--layout--density-condensed{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-condensed,0.5rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-condensed{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-condensed,0.5rem))}.cds--layout-constraint--density__min-condensed{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout-constraint--density__max-condensed{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-condensed,0.5rem)}.cds--layout--density-normal{--cds-layout-density-padding-inline-context:var(--cds-layout-density-padding-inline-normal,1rem);--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context)}.cds--layout-constraint--density__default-normal{--cds-layout-density-padding-inline:var(--cds-layout-density-padding-inline-context,var(--cds-layout-density-padding-inline-normal,1rem))}.cds--layout-constraint--density__min-normal{--cds-layout-density-padding-inline-min:var(--cds-layout-density-padding-inline-normal,1rem)}.cds--layout-constraint--density__max-normal{--cds-layout-density-padding-inline-max:var(--cds-layout-density-padding-inline-normal,1rem)}:root{--cds-layout-size-height-xs:1.5rem;--cds-layout-size-height-sm:2rem;--cds-layout-size-height-md:2.5rem;--cds-layout-size-height-lg:3rem;--cds-layout-size-height-xl:4rem;--cds-layout-size-height-2xl:5rem;--cds-layout-size-height-min:0px;--cds-layout-size-height-max:999999999px;--cds-layout-density-padding-inline-condensed:0.5rem;--cds-layout-density-padding-inline-normal:1rem;--cds-layout-density-padding-inline-min:0px;--cds-layout-density-padding-inline-max:999999999px}.cds--assistive-text,.cds--visually-hidden{block-size:1px;border:0;margin:-1px;overflow:hidden;padding:0;position:absolute;clip:rect(0,0,0,0);inline-size:1px;visibility:inherit;white-space:nowrap}.cds--layer-one,:root{--cds-layer:var(--cds-layer-01,#f4f4f4);--cds-layer-active:var(--cds-layer-active-01,#c6c6c6);--cds-layer-background:var(--cds-layer-background-01,#fff);--cds-layer-hover:var(--cds-layer-hover-01,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-01,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-01,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-01,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-01,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-01,#a8a8a8);--cds-field:var(--cds-field-01,#f4f4f4);--cds-field-hover:var(--cds-field-hover-01,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-00,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-01,#c6c6c6);--cds-border-strong:var(--cds-border-strong-01,#8d8d8d);--cds-border-tile:var(--cds-border-tile-01,#c6c6c6)}.cds--layer-two{--cds-layer:var(--cds-layer-02,#fff);--cds-layer-active:var(--cds-layer-active-02,#c6c6c6);--cds-layer-background:var(--cds-layer-background-02,#f4f4f4);--cds-layer-hover:var(--cds-layer-hover-02,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-02,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-02,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-02,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-02,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-02,#a8a8a8);--cds-field:var(--cds-field-02,#fff);--cds-field-hover:var(--cds-field-hover-02,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-01,#c6c6c6);--cds-border-subtle-selected:var(--cds-border-subtle-selected-02,#c6c6c6);--cds-border-strong:var(--cds-border-strong-02,#8d8d8d);--cds-border-tile:var(--cds-border-tile-02,#a8a8a8)}.cds--layer-three{--cds-layer:var(--cds-layer-03,#f4f4f4);--cds-layer-active:var(--cds-layer-active-03,#c6c6c6);--cds-layer-background:var(--cds-layer-background-03,#fff);--cds-layer-hover:var(--cds-layer-hover-03,#e8e8e8);--cds-layer-selected:var(--cds-layer-selected-03,#e0e0e0);--cds-layer-selected-hover:var(--cds-layer-selected-hover-03,#d1d1d1);--cds-layer-accent:var(--cds-layer-accent-03,#e0e0e0);--cds-layer-accent-hover:var(--cds-layer-accent-hover-03,#d1d1d1);--cds-layer-accent-active:var(--cds-layer-accent-active-03,#a8a8a8);--cds-field:var(--cds-field-03,#f4f4f4);--cds-field-hover:var(--cds-field-hover-03,#e8e8e8);--cds-border-subtle:var(--cds-border-subtle-02,#e0e0e0);--cds-border-subtle-selected:var(--cds-border-subtle-selected-03,#c6c6c6);--cds-border-strong:var(--cds-border-strong-03,#8d8d8d);--cds-border-tile:var(--cds-border-tile-03,#c6c6c6)}.cds--layer-one.cds--layer__with-background,.cds--layer-three.cds--layer__with-background,.cds--layer-two.cds--layer__with-background{background-color:var(--cds-layer-background)}input:-webkit-autofill,input:-webkit-autofill:focus,input:-webkit-autofill:hover,textarea:-webkit-autofill,textarea:-webkit-autofill:focus,textarea:-webkit-autofill:hover{box-shadow:0 0 0 1000px var(--cds-field) inset;-webkit-text-fill-color:var(--cds-text-primary,#161616)}.cds--fieldset{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--fieldset *,.cds--fieldset :after,.cds--fieldset :before{box-sizing:inherit}.cds--form-item{align-items:flex-start;display:flex;flex:1 1 auto;flex-direction:column;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.cds--label html{font-size:100%}.cds--label body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--label code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--label strong{font-weight:600}.cds--label{color:var(--cds-text-secondary,#525252);display:inline-block;font-weight:var(--cds-label-01-font-weight,400);font-weight:400;line-height:var(--cds-label-01-line-height,1.33333);line-height:1rem;margin-block-end:.5rem;vertical-align:baseline}.cds--label,.cds--label .cds--toggletip-label{font-size:var(--cds-label-01-font-size,.75rem);letter-spacing:var(--cds-label-01-letter-spacing,.32px)}.cds--label .cds--toggletip-label{font-weight:var(--cds-label-01-font-weight,400);line-height:var(--cds-label-01-line-height,1.33333)}.cds--label--no-margin{margin-block-end:0}.cds--label+.cds--tooltip{inset-block-start:.2rem;inset-inline-start:.5rem;position:relative}.cds--label+.cds--tooltip .cds--tooltip__trigger{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;box-sizing:border-box;cursor:pointer;display:inline-block;font-family:inherit;font-size:100%;inline-size:100%;margin:0;padding:0;text-align:start;vertical-align:baseline}.cds--label+.cds--tooltip .cds--tooltip__trigger *,.cds--label+.cds--tooltip .cds--tooltip__trigger :after,.cds--label+.cds--tooltip .cds--tooltip__trigger :before{box-sizing:inherit}.cds--label+.cds--tooltip .cds--tooltip__trigger::-moz-focus-inner{border:0}.cds--label+.cds--tooltip .cds--tooltip__trigger{align-items:center;display:flex;font-size:var(--cds-label-01-font-size,.75rem);font-weight:var(--cds-label-01-font-weight,400);justify-content:center;letter-spacing:var(--cds-label-01-letter-spacing,.32px);line-height:var(--cds-label-01-line-height,1.33333)}.cds--label+.cds--tooltip .cds--tooltip__trigger:focus{outline:1px solid var(--cds-focus,#0f62fe)}.cds--label+.cds--tooltip .cds--tooltip__trigger svg{fill:var(--cds-icon-secondary,#525252)}.cds--label+.cds--tooltip .cds--tooltip__trigger svg :hover{fill:var(--cds-icon-primary,#161616)}.cds--label+.cds--toggletip{inset-block-start:.2rem;inset-inline-start:.5rem}.cds--label.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--label.cds--skeleton:active,.cds--label.cds--skeleton:focus,.cds--label.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--label.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--label.cds--skeleton:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--label.cds--skeleton{background:CanvasText}.cds--label.cds--skeleton:before{background:Canvas;forced-color-adjust:none}}.cds--label.cds--skeleton{block-size:.875rem;inline-size:4.6875rem}input[type=number],input[type=text].cds--number{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif}.cds--combo-box[data-invalid]:not(.cds--multi-select--selected) .cds--text-input:not(:focus),.cds--list-box[data-invalid]:not(.cds--multi-select--invalid--focused,.cds--combo-box--invalid--focused),.cds--number[data-invalid] input[type=number]:not(:focus),.cds--number[data-invalid] input[type=text]:not(:focus),.cds--select-input__wrapper[data-invalid] .cds--select-input:not(:focus),.cds--text-area__wrapper[data-invalid]>.cds--text-area--invalid:not(:focus),.cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline:2px solid var(--cds-support-error,#da1e28);outline-offset:-2px}@media screen and (prefers-contrast){.cds--combo-box[data-invalid]:not(.cds--multi-select--selected) .cds--text-input:not(:focus),.cds--list-box[data-invalid]:not(.cds--multi-select--invalid--focused,.cds--combo-box--invalid--focused),.cds--number[data-invalid] input[type=number]:not(:focus),.cds--number[data-invalid] input[type=text]:not(:focus),.cds--select-input__wrapper[data-invalid] .cds--select-input:not(:focus),.cds--text-area__wrapper[data-invalid]>.cds--text-area--invalid:not(:focus),.cds--text-input__field-wrapper[data-invalid]>.cds--text-input--invalid:not(:focus),input[data-invalid]:not(:focus){outline-style:dotted}}.cds--date-picker-input__wrapper--invalid~.cds--form-requirement,.cds--date-picker-input__wrapper--warn~.cds--form-requirement,.cds--date-picker-input__wrapper~.cds--form-requirement,.cds--list-box--warning~.cds--form-requirement,.cds--list-box[data-invalid]~.cds--form-requirement,.cds--number[data-invalid] .cds--number__input-wrapper~.cds--form-requirement,.cds--number__input-wrapper--warning~.cds--form-requirement,.cds--select--warning .cds--select-input__wrapper~.cds--form-requirement,.cds--select-input__wrapper[data-invalid]~.cds--form-requirement,.cds--text-area__wrapper--warn~.cds--form-requirement,.cds--text-area__wrapper[data-invalid]~.cds--form-requirement,.cds--text-input__field-wrapper--warning>.cds--text-input~.cds--form-requirement,.cds--text-input__field-wrapper--warning~.cds--form-requirement,.cds--text-input__field-wrapper[data-invalid]~.cds--form-requirement,.cds--time-picker--invalid~.cds--form-requirement,.cds--time-picker--warning~.cds--form-requirement,.cds--time-picker[data-invalid]~.cds--form-requirement,input[data-invalid]~.cds--form-requirement{display:block;font-weight:400;max-block-size:12.5rem;overflow:visible}.cds--select--inline.cds--select--warning .cds--select-input--inline__wrapper~.cds--form-requirement,.cds--select-input--inline__wrapper[data-invalid]~.cds--form-requirement{display:inline-flex;inline-size:100%;margin:0;margin-block-end:0;max-block-size:100%;overflow:visible;padding-inline-start:.5rem}.cds--date-picker-input__wrapper--invalid~.cds--form-requirement,.cds--date-picker-input__wrapper~.cds--form-requirement,.cds--list-box[data-invalid]~.cds--form-requirement,.cds--number[data-invalid] .cds--number__input-wrapper~.cds--form-requirement,.cds--select-input--inline__wrapper[data-invalid]~.cds--form-requirement,.cds--select-input__wrapper[data-invalid]~.cds--form-requirement,.cds--text-area__wrapper[data-invalid]~.cds--form-requirement,.cds--text-input__field-wrapper[data-invalid]~.cds--form-requirement,.cds--time-picker--invalid~.cds--form-requirement,.cds--time-picker[data-invalid]~.cds--form-requirement,input[data-invalid]~.cds--form-requirement{color:var(--cds-text-error,#da1e28)}.cds--form--fluid .cds--text-input__field-wrapper--warning,.cds--form--fluid .cds--text-input__field-wrapper[data-invalid]{display:block}.cds--form--fluid input[data-invalid]{outline:none}.cds--form--fluid .cds--form-requirement{margin:0;padding:.5rem 2.5rem .5rem 1rem}input:not(output,[data-invalid]):-moz-ui-invalid{box-shadow:none}.cds--form-requirement html{font-size:100%}.cds--form-requirement body{font-family:IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,sans-serif;font-weight:400;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.cds--form-requirement code{font-family:IBM Plex Mono,system-ui,-apple-system,BlinkMacSystemFont,\\.SFNSText-Regular,monospace}.cds--form-requirement strong{font-weight:600}.cds--form-requirement{display:none;font-size:var(--cds-helper-text-01-font-size,.75rem);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333);margin:.25rem 0 0;max-block-size:0;overflow:hidden}.cds--select--inline .cds--form__helper-text{margin-block-start:0}.cds--form__helper-text{color:var(--cds-text-helper,#6f6f6f);font-size:var(--cds-helper-text-01-font-size,.75rem);inline-size:100%;letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333);margin-block-start:.25rem;opacity:1;z-index:0}.cds--form__helper-text--disabled,.cds--label--disabled,fieldset[disabled] .cds--form__helper-text,fieldset[disabled] .cds--label{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}@keyframes fp-fade-in-down{0%{opacity:0;transform:translate3d(0,-20px,0)}to{opacity:1;transform:translateZ(0)}}@keyframes fp-slide-left{0%{transform:translateZ(0)}to{transform:translate3d(-100%,0,0)}}@keyframes fp-slide-left-new{0%{transform:translate3d(100%,0,0)}to{transform:translateZ(0)}}@keyframes fp-slide-right{0%{transform:translateZ(0)}to{transform:translate3d(100%,0,0)}}@keyframes fp-slide-right-new{0%{transform:translate3d(-100%,0,0)}to{transform:translateZ(0)}}@keyframes fp-fade-out{0%{opacity:1}to{opacity:0}}@keyframes fp-fade-in{0%{opacity:0}to{opacity:1}}.flatpickr-calendar{animation:none;border:0;border-radius:0;box-sizing:border-box;direction:ltr;inline-size:19.6875rem;max-block-size:0;opacity:0;overflow:hidden;padding:0;position:absolute;text-align:center;touch-action:manipulation;visibility:hidden}@media (forced-colors:active),screen and (-ms-high-contrast:active){.flatpickr-calendar{outline:1px solid transparent}}.flatpickr-calendar.inline,.flatpickr-calendar.open{max-block-size:40rem;opacity:1;overflow:visible;visibility:inherit}.flatpickr-calendar.open{align-items:center;background-color:var(--cds-layer-01,#f4f4f4);block-size:21rem;border:none;box-shadow:0 2px 6px var(--cds-shadow,rgba(0,0,0,.3));display:flex;flex-direction:column;inline-size:18rem;justify-content:center;margin-block-start:-.125rem;overflow:hidden;padding:.25rem .25rem .5rem;z-index:99999}.flatpickr-calendar.open:focus{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.flatpickr-calendar.open:focus{outline-style:dotted}}.flatpickr-calendar.animate.open{animation:fp-fade-in-down .11s cubic-bezier(0,0,.38,.9)}@media screen and (prefers-reduced-motion:reduce){.flatpickr-calendar.animate.open{animation:none}}.flatpickr-calendar.inline{display:block;inset-block-start:auto;position:absolute}.flatpickr-calendar.static{inset-block-start:calc(100% + 2px);position:absolute}.flatpickr-calendar.static.open{display:block;z-index:999}.flatpickr-calendar.hasWeeks{inline-size:auto}.dayContainer{block-size:15.375rem;display:flex;flex-wrap:wrap;justify-content:space-around;outline:0;padding:0}.flatpickr-calendar .hasTime .dayContainer,.flatpickr-calendar .hasWeeks .dayContainer{border-block-end:0;border-end-end-radius:0;border-end-start-radius:0}.flatpickr-calendar .hasWeeks .dayContainer{border-inline-start:0}.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time{block-size:2.5rem;border-block-start:1px solid #e6e6e6}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{block-size:auto}.flatpickr-calendar:focus{outline:0}.flatpickr-months{display:flex;inline-size:100%;justify-content:space-between}.flatpickr-month{align-items:center;background-color:transparent;block-size:2.5rem;color:var(--cds-text-primary,#161616);display:flex;font-size:var(--cds-heading-compact-01-font-size,.875rem);font-weight:var(--cds-heading-compact-01-font-weight,600);letter-spacing:var(--cds-heading-compact-01-letter-spacing,.16px);line-height:var(--cds-heading-compact-01-line-height,1.28572);line-height:1;text-align:center}.flatpickr-next-month,.flatpickr-prev-month{align-items:center;block-size:2.5rem;cursor:pointer;display:flex;justify-content:center;padding:0;z-index:3;fill:var(--cds-icon-primary,#161616);inline-size:2.5rem;line-height:16px;text-decoration:none;transform:scale(1);transition:background-color 70ms cubic-bezier(.2,0,.38,.9);-webkit-user-select:none;-moz-user-select:none;user-select:none}@media screen and (prefers-reduced-motion:reduce){.flatpickr-next-month,.flatpickr-prev-month{transition:none}}.flatpickr-next-month:hover,.flatpickr-prev-month:hover{background-color:var(--cds-layer-hover)}.flatpickr-next-month.disabled svg,.flatpickr-prev-month.disabled svg{cursor:not-allowed;fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.flatpickr-next-month.disabled:hover svg,.flatpickr-prev-month.disabled:hover svg{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.flatpickr-current-month{align-items:center;block-size:1.75rem;display:flex;font-size:var(--cds-heading-compact-01-font-size,.875rem);font-weight:var(--cds-heading-compact-01-font-weight,600);justify-content:center;letter-spacing:var(--cds-heading-compact-01-letter-spacing,.16px);line-height:var(--cds-heading-compact-01-line-height,1.28572);text-align:center}.flatpickr-current-month .cur-month{margin-inline:.25rem .25rem}.flatpickr-current-month .cur-month:hover{background-color:var(--cds-layer-hover)}.numInputWrapper{inline-size:3.75rem;position:relative}.numInputWrapper:hover{background-color:var(--cds-background-hover,hsla(0,0%,55%,.12))}.numInputWrapper .numInput{-moz-appearance:textfield;background-color:var(--cds-field-01,#f4f4f4);border:none;color:var(--cds-text-primary,#161616);cursor:default;display:inline-block;font-family:inherit;font-size:inherit;font-weight:600;inline-size:100%;margin:0;padding:.25rem}.numInputWrapper .numInput::-webkit-inner-spin-button,.numInputWrapper .numInput::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.numInputWrapper .numInput:focus{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.numInputWrapper .numInput:focus{outline-style:dotted}}.numInputWrapper .numInput[disabled],.numInputWrapper .numInput[disabled]:hover{background-color:var(--cds-layer-01,#f4f4f4);color:var(--cds-text-disabled,hsla(0,0%,9%,.25));pointer-events:none}.numInputWrapper .arrowUp{border-block-end:0;inset-block-start:.25rem}.numInputWrapper .arrowUp:after{border-block-end:.25rem solid var(--cds-icon-primary,#161616)}.numInputWrapper .arrowDown{inset-block-start:.6875rem}.numInputWrapper .arrowDown:after{border-block-start:.25rem solid var(--cds-icon-primary,#161616)}.numInputWrapper .arrowDown,.numInputWrapper .arrowUp{block-size:50%;border:none;cursor:pointer;inline-size:.75rem;inset-inline-start:2.6rem;line-height:50%;opacity:0;padding:0 .25rem 0 .125rem;position:absolute}.numInputWrapper .arrowDown:after,.numInputWrapper .arrowUp:after{border-inline-end:.25rem solid transparent;border-inline-start:.25rem solid transparent;content:"";display:block;inset-block-start:33%;position:absolute}.numInputWrapper .arrowDown:hover:after,.numInputWrapper .arrowUp:hover:after{border-block-end-color:var(--cds-button-primary,#0f62fe);border-block-start-color:var(--cds-button-primary,#0f62fe)}.numInputWrapper .arrowDown:active:after,.numInputWrapper .arrowUp:active:after{border-block-end-color:var(--cds-border-interactive,#0f62fe);border-block-start-color:var(--cds-border-interactive,#0f62fe)}.numInput[disabled]~.arrowUp:after{border-block-end-color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.numInput[disabled]~.arrowDown:after{border-block-start-color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.numInputWrapper:hover .arrowDown,.numInputWrapper:hover .arrowUp{opacity:1}.numInputWrapper:hover .numInput[disabled]~.arrowDown,.numInputWrapper:hover .numInput[disabled]~.arrowUp{opacity:0}.flatpickr-weekdays{align-items:center;block-size:2.5rem;display:flex}.flatpickr-weekdaycontainer{display:flex;inline-size:100%}.flatpickr-weekday{color:var(--cds-text-primary,#161616);cursor:default;flex:1;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572)}.flatpickr-days:focus{outline:0}.flatpickr-calendar.animate .dayContainer.slideLeft{animation:fp-fade-out .4s cubic-bezier(.23,1,.32,1),fp-slide-left .4s cubic-bezier(.23,1,.32,1)}.flatpickr-calendar.animate .dayContainer.slideLeft,.flatpickr-calendar.animate .dayContainer.slideLeftNew{transform:translate3d(-100%,0,0)}.flatpickr-calendar.animate .dayContainer.slideLeftNew{animation:fp-fade-in .4s cubic-bezier(.23,1,.32,1),fp-slide-left .4s cubic-bezier(.23,1,.32,1)}.flatpickr-calendar.animate .dayContainer.slideRight{animation:fp-fade-out .4s cubic-bezier(.23,1,.32,1),fp-slide-right .4s cubic-bezier(.23,1,.32,1);transform:translate3d(100%,0,0)}.flatpickr-calendar.animate .dayContainer.slideRightNew{animation:fp-fade-in .4s cubic-bezier(.23,1,.32,1),fp-slide-right-new .4s cubic-bezier(.23,1,.32,1)}.flatpickr-day{align-items:center;block-size:2.5rem;color:var(--cds-text-primary,#161616);cursor:pointer;display:flex;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);inline-size:2.5rem;justify-content:center;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);transition:all 70ms cubic-bezier(.2,0,.38,.9)}.flatpickr-day:hover{background:var(--cds-layer-hover)}.flatpickr-day:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.flatpickr-day:focus{outline-style:dotted}}.flatpickr-day:focus{outline-color:var(--cds-button-primary,#0f62fe)}.nextMonthDay,.prevMonthDay{color:var(--cds-text-helper,#6f6f6f)}.flatpickr-day.today{color:var(--cds-link-primary,#0f62fe);font-weight:600;position:relative}.flatpickr-day.today:after{background-color:var(--cds-link-primary,#0f62fe);block-size:.25rem;content:"";display:block;inline-size:.25rem;inset-block-end:.4375rem;inset-inline-start:50%;position:absolute;transform:translateX(-50%)}.flatpickr-day.today.no-border{border:none}.flatpickr-day.today.selected{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.flatpickr-day.today.selected{outline-style:dotted}}.flatpickr-day.today.selected:after{display:none}.flatpickr-day.inRange{background-color:var(--cds-highlight,#d0e2ff);color:var(--cds-text-primary,#161616)}.flatpickr-day.selected{background-color:var(--cds-button-primary,#0f62fe);color:var(--cds-text-on-color,#fff)}@media (forced-colors:active),screen and (-ms-high-contrast:active){.flatpickr-day.selected{color:Highlight;outline:1px solid Highlight;outline-style:dotted}}.flatpickr-day.selected:focus{outline:.0625rem solid var(--cds-layer-02,#fff);outline-offset:-.1875rem}.flatpickr-day.startRange.selected{box-shadow:none;z-index:2}.flatpickr-day.endRange.inRange,.flatpickr-day.startRange.inRange:not(.selected){outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.flatpickr-day.endRange.inRange,.flatpickr-day.startRange.inRange:not(.selected){outline-style:dotted}}.flatpickr-day.endRange.inRange,.flatpickr-day.startRange.inRange:not(.selected){background:var(--cds-layer-01,#f4f4f4);z-index:3}.flatpickr-day.endRange:hover{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.flatpickr-day.endRange:hover{outline-style:dotted}}.flatpickr-day.endRange:hover{background:var(--cds-layer-01,#f4f4f4);color:var(--cds-text-primary,#161616)}.flatpickr-day.endRange.inRange.selected{background:var(--cds-button-primary,#0f62fe);color:var(--cds-text-on-color,#fff)}.flatpickr-day.flatpickr-disabled{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed}.flatpickr-day.flatpickr-disabled:hover{background-color:transparent}.flatpickr-input[readonly]{cursor:pointer}@media (forced-colors:active),screen and (-ms-high-contrast:active){.flatpickr-day.inRange,.flatpickr-day.today{color:Highlight}}.cds--date-picker,:host(cds-date-picker){display:flex}.cds--date-picker--light .cds--date-picker__input{background:var(--cds-field-02,#fff)}.cds--date-picker~.cds--label,:host(cds-date-picker)~.cds--label{order:1}.cds--date-picker-container,:host(cds-date-picker-input),:host(cds-date-picker-input-skeleton){display:flex;flex-direction:column;justify-content:space-between;position:relative}.cds--date-picker-container .cds--label,:host(cds-date-picker-input) .cds--label,:host(cds-date-picker-input-skeleton) .cds--label{display:flex}.cds--date-picker-input__wrapper{align-items:center;display:flex}.cds--date-picker-input__wrapper>span{position:relative}.cds--date-picker.cds--date-picker--simple .cds--date-picker__input,.cds--date-picker.cds--date-picker--simple .cds--label{inline-size:7.5rem}.cds--date-picker.cds--date-picker--simple .cds--date-picker-input__wrapper--invalid .cds--date-picker__input,.cds--date-picker.cds--date-picker--simple .cds--date-picker-input__wrapper--invalid~.cds--form-requirement,.cds--date-picker.cds--date-picker--simple .cds--date-picker-input__wrapper--warn .cds--date-picker__input,.cds--date-picker.cds--date-picker--simple .cds--date-picker-input__wrapper--warn~.cds--form-requirement{inline-size:9.5rem}.cds--date-picker.cds--date-picker--simple.cds--date-picker--short .cds--date-picker__input{inline-size:5.7rem}.cds--date-picker.cds--date-picker--single .cds--date-picker__input{inline-size:18rem}.cds--date-picker .cds--date-picker-input__wrapper--warn~.cds--form-requirement,:host(cds-date-picker) .cds--date-picker-input__wrapper--warn~.cds--form-requirement{color:var(--cds-text-primary,#161616)}.cds--date-picker__input{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--date-picker__input *,.cds--date-picker__input :after,.cds--date-picker__input :before{box-sizing:inherit}.cds--date-picker__input{background-color:var(--cds-field);block-size:2.5rem;border:none;border-block-end:1px solid var(--cds-border-strong);color:var(--cds-text-primary,#161616);display:block;font-family:var(--cds-code-02-font-family,"IBM Plex Mono",system-ui,-apple-system,BlinkMacSystemFont,".SFNSText-Regular",monospace);font-size:var(--cds-code-02-font-size,.875rem);font-weight:var(--cds-code-02-font-weight,400);letter-spacing:var(--cds-code-02-letter-spacing,.32px);line-height:var(--cds-code-02-line-height,1.42857);outline:2px solid transparent;outline-offset:-2px;padding:0 1rem;position:relative;transition:all 70ms cubic-bezier(.2,0,.38,.9)}.cds--date-picker__input.cds--focused,.cds--date-picker__input:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.cds--date-picker__input.cds--focused,.cds--date-picker__input:focus{outline-style:dotted}}.cds--date-picker__input:disabled{background-color:var(--cds-field);border-block-end:1px solid transparent;color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed}.cds--date-picker__input:disabled::-moz-placeholder{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--date-picker__input:disabled::placeholder{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}.cds--date-picker__input:disabled:hover{border-block-end:1px solid transparent}.cds--date-picker__input::-moz-placeholder{color:var(--cds-text-placeholder,hsla(0,0%,9%,.4));opacity:1}.cds--date-picker__input::placeholder{color:var(--cds-text-placeholder,hsla(0,0%,9%,.4));opacity:1}.cds--date-picker__input--lg{block-size:3rem}.cds--date-picker__input--sm{block-size:2rem}.cds--date-picker__icon,:host(cds-date-picker-input) .cds--date-picker__icon{position:absolute;z-index:1;fill:var(--cds-icon-primary,#161616);inset-block-start:50%;inset-inline-end:1rem;pointer-events:none;transform:translateY(-50%)}.cds--date-picker__icon--invalid,.cds--date-picker__icon--warn,:host(cds-date-picker-input) .cds--date-picker__icon--invalid,:host(cds-date-picker-input) .cds--date-picker__icon--warn{cursor:auto}.cds--date-picker__icon--warn,:host(cds-date-picker-input) .cds--date-picker__icon--warn{fill:var(--cds-support-warning,#f1c21b)}.cds--date-picker__icon--warn path:first-of-type{fill:#000;opacity:1}.cds--date-picker__icon--invalid,:host(cds-date-picker-input) .cds--date-picker__icon--invalid{fill:var(--cds-support-error,#da1e28)}.cds--date-picker__icon~.cds--date-picker__input{padding-inline-end:3rem}.cds--date-picker__input:disabled~.cds--date-picker__icon{cursor:not-allowed;fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--date-picker--range>.cds--date-picker-container:first-child{margin-inline-end:.0625rem}.cds--date-picker--range .cds--date-picker-container,.cds--date-picker--range .cds--date-picker__input,.cds--date-picker--range :host(cds-date-picker-input),.cds--date-picker--range :host(cds-date-picker-input-skeleton){inline-size:8.96875rem}.cds--date-picker-input__wrapper--decorator .cds--date-picker-input-inner-wrapper--decorator>*,.cds--date-picker-input__wrapper--slug .cds--ai-label,.cds--date-picker-input__wrapper--slug .cds--slug{inset-block-start:50%;inset-inline-end:2.5rem;position:absolute;transform:translateY(-50%)}.cds--date-picker-input__wrapper--decorator .cds--date-picker-input-inner-wrapper--decorator:not(:has(.cds--ai-label))>*{block-size:1rem}.cds--date-picker-input__wrapper--decorator .cds--date-picker__input:has(~.cds--date-picker-input-inner-wrapper--decorator .cds--ai-label):not(:has(~.cds--date-picker-input-inner-wrapper--decorator .cds--ai-label--revert)),.cds--date-picker-input__wrapper--slug .cds--date-picker__input:has(~.cds--ai-label):not(:has(~.cds--ai-label--revert)),.cds--date-picker-input__wrapper--slug .cds--date-picker__input:has(~.cds--slug):not(:has(~.cds--slug--revert)){background-image:linear-gradient(0deg,var(--cds-ai-aura-start-sm,rgba(69,137,255,.16)) 0,15%,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%,transparent 100%);border-block-end-color:var(--cds-ai-border-strong,#4589ff);padding-inline-end:4rem}.cds--date-picker__input[readonly]{background:transparent;border-block-end-color:var(--cds-border-subtle);cursor:text}.cds--date-picker__input[readonly]+.cds--date-picker__icon{fill:var(--cds-icon-disabled,hsla(0,0%,9%,.25))}.cds--date-picker.cds--skeleton input,.cds--date-picker__input.cds--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--date-picker.cds--skeleton input:active,.cds--date-picker.cds--skeleton input:focus,.cds--date-picker.cds--skeleton input:hover,.cds--date-picker__input.cds--skeleton:active,.cds--date-picker__input.cds--skeleton:focus,.cds--date-picker__input.cds--skeleton:hover{border:none;cursor:default;outline:none}.cds--date-picker.cds--skeleton input:before,.cds--date-picker__input.cds--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--date-picker.cds--skeleton input:before,.cds--date-picker__input.cds--skeleton:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--date-picker.cds--skeleton input,.cds--date-picker__input.cds--skeleton{background:CanvasText}.cds--date-picker.cds--skeleton input:before,.cds--date-picker__input.cds--skeleton:before{background:Canvas;forced-color-adjust:none}}.cds--date-picker.cds--skeleton input,.cds--date-picker__input.cds--skeleton{inline-size:100%}.cds--date-picker.cds--skeleton input::-moz-placeholder,.cds--date-picker__input.cds--skeleton::-moz-placeholder{color:transparent}.cds--date-picker.cds--skeleton input::placeholder,.cds--date-picker__input.cds--skeleton::placeholder{color:transparent}.cds--date-picker.cds--skeleton .cds--label{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--date-picker.cds--skeleton .cds--label:active,.cds--date-picker.cds--skeleton .cds--label:focus,.cds--date-picker.cds--skeleton .cds--label:hover{border:none;cursor:default;outline:none}.cds--date-picker.cds--skeleton .cds--label:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--date-picker.cds--skeleton .cds--label:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--date-picker.cds--skeleton .cds--label{background:CanvasText}.cds--date-picker.cds--skeleton .cds--label:before{background:Canvas;forced-color-adjust:none}}.cds--date-picker.cds--skeleton .cds--label{block-size:.875rem;inline-size:4.6875rem}:host(cds-date-picker) #floating-menu-container{inline-size:100%;position:absolute}:host(cds-date-picker) .cds--date-picker__calendar.open{margin-block-start:0}:host(cds-date-picker) .flatpickr-next-month svg,:host(cds-date-picker) .flatpickr-prev-month svg{transform:rotate(0)}:host(cds-date-picker) .cds--date-picker__day.flatpickr-disabled,:host(cds-date-picker) .flatpickr-day.flatpickr-disabled{color:var(--cds-layer-selected-inverse,#161616);cursor:not-allowed;opacity:.5}:host(cds-date-picker) .cds--date-picker__day.flatpickr-disabled:hover,:host(cds-date-picker) .flatpickr-day.flatpickr-disabled:hover{background:transparent}:host(cds-date-picker) .flatpickr-next-month.flatpickr-disabled svg,:host(cds-date-picker) .flatpickr-prev-month.flatpickr-disabled svg{cursor:not-allowed;fill:var(--cds-layer-selected-inverse,#161616);opacity:.5}:host(cds-date-picker) .flatpickr-next-month.flatpickr-disabled:hover svg,:host(cds-date-picker) .flatpickr-prev-month.flatpickr-disabled:hover svg{fill:var(--cds-layer-selected-inverse,#161616)}:host(cds-date-picker-input),:host(cds-date-picker-input-skeleton){outline:none}:host(cds-date-picker-input) .cds--form-requirement[hidden],:host(cds-date-picker-input-skeleton) .cds--form-requirement[hidden]{display:none}:host(cds-date-picker-input[warn]:not([invalid])) .cds--form-requirement{color:var(--cds-text-primary,#161616)}:host(cds-date-picker-input-skeleton[kind=simple]) .cds--date-picker__input,:host(cds-date-picker-input[kind=simple]) .cds--date-picker__input{inline-size:7.5rem}:host(cds-date-picker-input-skeleton[kind=simple]) .cds--date-picker__input--invalid,:host(cds-date-picker-input-skeleton[kind=simple]) .cds--date-picker__input--warn,:host(cds-date-picker-input[kind=simple]) .cds--date-picker__input--invalid,:host(cds-date-picker-input[kind=simple]) .cds--date-picker__input--warn{inline-size:9.5rem}:host(cds-date-picker-input-skeleton[kind=simple][short]) .cds--date-picker__input,:host(cds-date-picker-input[kind=simple][short]) .cds--date-picker__input{inline-size:5.625rem}:host(cds-date-picker-input-skeleton[kind=single]),:host(cds-date-picker-input[kind=single]){max-inline-size:18rem}:host(cds-date-picker-input-skeleton[kind=single]) .cds--date-picker__input,:host(cds-date-picker-input[kind=single]) .cds--date-picker__input{inline-size:18rem}:host(cds-date-picker-input-skeleton[kind=from]),:host(cds-date-picker-input[kind=from]){margin-inline-end:.0625rem}:host(cds-date-picker-input-skeleton[kind=from]),:host(cds-date-picker-input-skeleton[kind=to]),:host(cds-date-picker-input[kind=from]),:host(cds-date-picker-input[kind=to]){inline-size:8.96875rem}:host(cds-date-picker-input-skeleton[kind=from]) .cds--date-picker__input,:host(cds-date-picker-input-skeleton[kind=to]) .cds--date-picker__input,:host(cds-date-picker-input[kind=from]) .cds--date-picker__input,:host(cds-date-picker-input[kind=to]) .cds--date-picker__input{inline-size:8.96875rem}:host(cds-date-picker-input) ::slotted(cds-ai-label),:host(cds-date-picker-input) ::slotted(cds-slug){inset-block-start:50%;inset-inline-end:2.5rem;position:absolute}:host(cds-date-picker-input) ::slotted(cds-ai-label:not([revert-active])),:host(cds-date-picker-input) ::slotted(cds-slug:not([revert-active])){transform:translateY(-50%)}:host(cds-date-picker-input-skeleton){display:inline-block}:host(cds-date-picker-input-skeleton) .cds--label{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}:host(cds-date-picker-input-skeleton) .cds--label:active,:host(cds-date-picker-input-skeleton) .cds--label:focus,:host(cds-date-picker-input-skeleton) .cds--label:hover{border:none;cursor:default;outline:none}:host(cds-date-picker-input-skeleton) .cds--label:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){:host(cds-date-picker-input-skeleton) .cds--label:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){:host(cds-date-picker-input-skeleton) .cds--label{background:CanvasText}:host(cds-date-picker-input-skeleton) .cds--label:before{background:Canvas;forced-color-adjust:none}}:host(cds-date-picker-input-skeleton) .cds--label{block-size:.875rem;inline-size:4.6875rem}:host(cds-date-picker-input-skeleton) .cds--date-picker-input-skeleton-container{display:inline-block}:host(cds-date-picker-input-skeleton[range]) .cds--date-picker-input-skeleton-container{inline-size:8.96875rem}:host(cds-date-picker-input-skeleton[range]) .cds--date-picker-input-skeleton-container .cds--date-picker__input{inline-size:8.96875rem}:host(cds-date-picker-input[ai-label]) .cds--date-picker__input--decorator{background-image:linear-gradient(0deg,var(--cds-ai-aura-start-sm,rgba(69,137,255,.16)) 0,15%,var(--cds-ai-aura-end,hsla(0,0%,100%,0)) 50%,transparent 100%);border-block-end-color:var(--cds-ai-border-strong,#4589ff)}']);

// node_modules/@carbon/icons/es/calendar/16.js
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
      "d": "M26,4h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V6C28,4.9,27.1,4,26,4z M26,26H6V12h20	V26z M26,10H6V6h4v2h2V6h8v2h2V6h4V10z"
    }
  }],
  "name": "calendar",
  "size": 16
};

// node_modules/@carbon/web-components/es/components/date-picker/date-picker-input.js
var CDSDatePickerInput = class CDSDatePickerInput2 extends FocusMixin(i2) {
  constructor() {
    super(...arguments);
    this._hasAILabel = false;
    this._hasHelperText = false;
    this.colorScheme = FORM_ELEMENT_COLOR_SCHEME.REGULAR;
    this.disabled = false;
    this.hideLabel = false;
    this.invalid = false;
    this.invalidText = "";
    this.kind = DATE_PICKER_INPUT_KIND.SIMPLE;
    this.readonly = false;
    this.required = false;
    this.short = false;
    this.size = INPUT_SIZE.MEDIUM;
    this.warn = false;
    this.warnText = "";
  }
  /**
   * Handles `slotchange` event.
   */
  _handleAILabelSlotChange({ target }) {
    const hasContent = target.assignedNodes().filter((elem) => elem.matches !== void 0 ? elem.matches(this.constructor.aiLabelItem) || // remove reference to slug in v12
    elem.matches(this.constructor.slugItem) : false);
    this._hasAILabel = Boolean(hasContent);
    hasContent[0].setAttribute("size", "mini");
    this.requestUpdate?.();
  }
  /**
   * Handles `click` event on the calendar icon.
   *
   * @param event The event.
   */
  _handleClickWrapper(event) {
    if (event.target === this._iconNode) {
      this.input.focus();
    }
  }
  /**
   * Handles `input` event on `<input>` in the shadow DOM.
   *
   * @param event The event.
   * @param event.target The event target.
   */
  _handleInput({ target }) {
    const { value } = target;
    this.value = value;
  }
  /**
   * @returns The template for the the calendar icon.
   */
  _renderIcon() {
    return this.kind === DATE_PICKER_INPUT_KIND.SIMPLE ? void 0 : iconLoader(_165, {
      class: `${prefix}--date-picker__icon`,
      role: "img",
      title: "Open calendar"
    });
  }
  /**
   * Handles `slotchange` event on the default `<slot>`.
   */
  _handleSlotChange({ target }) {
    if (!target.name) {
      const hasContent = target.assignedNodes().some((node) => (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- https://github.com/carbon-design-system/carbon/issues/20452
        node.nodeType !== Node.TEXT_NODE || node.textContent.trim()
      ));
      this._hasHelperText = hasContent;
    }
  }
  render() {
    const constructor = this.constructor;
    const { disabled, _hasHelperText: hasHelperText, hideLabel, invalid, invalidText, labelText, pattern = constructor.defaultPattern, placeholder, readonly, size, type = constructor.defaultType, value, warn, warnText, _handleClickWrapper: handleClickWrapper, _handleInput: handleInput, _hasAILabel: hasAILabel } = this;
    const invalidIcon = iconLoader(_162, {
      class: `${prefix}--date-picker__icon ${prefix}--date-picker__icon--invalid`
    });
    const warnIcon = iconLoader(_163, {
      class: `${prefix}--date-picker__icon ${prefix}--date-picker__icon--warn`
    });
    const normalizedProps = {
      disabled: disabled && !readonly,
      invalid: invalid && !readonly && !disabled,
      warn: warn && !readonly && !disabled && !invalid,
      "slot-name": "",
      "slot-text": "",
      icon: null
    };
    if (normalizedProps.invalid) {
      normalizedProps.icon = invalidIcon;
      normalizedProps["slot-name"] = "invalid-text";
      normalizedProps["slot-text"] = invalidText;
    } else if (normalizedProps.warn) {
      normalizedProps.icon = warnIcon;
      normalizedProps["slot-name"] = "warn-text";
      normalizedProps["slot-text"] = warnText;
    }
    const labelClasses = e2({
      [`${prefix}--label`]: true,
      [`${prefix}--visually-hidden`]: hideLabel,
      [`${prefix}--label--disabled`]: disabled
    });
    const inputClasses = e2({
      [`${prefix}--date-picker__input`]: true,
      [`${prefix}--date-picker__input--invalid`]: normalizedProps.invalid,
      [`${prefix}--date-picker__input--warn`]: normalizedProps.warn,
      [`${prefix}--date-picker__input--${size}`]: size,
      [`${prefix}--date-picker__input--decorator`]: hasAILabel
    });
    const inputWrapperClasses = e2({
      [`${prefix}--date-picker-input__wrapper`]: true,
      [`${prefix}--date-picker-input__wrapper--invalid`]: normalizedProps.invalid,
      [`${prefix}--date-picker-input__wrapper--warn`]: normalizedProps.warn
    });
    const helperTextClasses = e2({
      [`${prefix}--form__helper-text`]: true,
      [`${prefix}--form__helper-text--disabled`]: disabled
    });
    return b`
      <label for="input" class="${labelClasses}">
        <slot name="label-text">${labelText}</slot>
      </label>
      <div class="${inputWrapperClasses}" @click="${handleClickWrapper}">
        <span>
          <input
            id="input"
            type="${type}"
            class="${inputClasses}"
            ?disabled="${normalizedProps.disabled}"
            pattern="${pattern}"
            placeholder="${o(placeholder)}"
            .value="${o(value)}"
            ?data-invalid="${normalizedProps.invalid}"
            @input="${handleInput}"
            ?readonly="${readonly}" />
          ${normalizedProps.icon || this._renderIcon()}
          <slot
            name="ai-label"
            @slotchange="${this._handleAILabelSlotChange}"></slot>
          <slot
            name="slug"
            @slotchange="${this._handleAILabelSlotChange}"></slot>
        </span>
      </div>
      <div
        class="${prefix}--form-requirement"
        ?hidden="${!normalizedProps.invalid && !normalizedProps.warn}">
        <slot name="${normalizedProps["slot-name"]}">
          ${normalizedProps["slot-text"]}
        </slot>
      </div>
      <div ?hidden="${hasHelperText}" class="${helperTextClasses}">
        <slot name="helper-text" @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `;
  }
  updated() {
    var _a, _b, _c, _d, _e;
    this.toggleAttribute("ai-label", this._hasAILabel);
    const label = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("slot[name='ai-label']");
    if (label) {
      label === null || label === void 0 ? void 0 : label.classList.toggle(`${prefix}--slug--revert`, (_b = this.querySelector(`${prefix}-ai-label`)) === null || _b === void 0 ? void 0 : _b.hasAttribute("revert-active"));
    } else {
      (_d = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector("slot[name='slug']")) === null || _d === void 0 ? void 0 : _d.classList.toggle(`${prefix}--slug--revert`, (_e = this.querySelector(`${prefix}-slug`)) === null || _e === void 0 ? void 0 : _e.hasAttribute("revert-active"));
    }
  }
  /**
   * A selector that will return the parent date picker.
   */
  static get selectorParent() {
    return `${prefix}-date-picker`;
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
CDSDatePickerInput.defaultPattern = "\\d{1,2}\\/\\d{1,2}\\/\\d{4}";
CDSDatePickerInput.defaultType = "text";
CDSDatePickerInput.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSDatePickerInput.styles = styles;
__decorate([
  e(`.${prefix}--date-picker__icon`)
], CDSDatePickerInput.prototype, "_iconNode", void 0);
__decorate([
  r()
], CDSDatePickerInput.prototype, "_hasHelperText", void 0);
__decorate([
  e("input")
], CDSDatePickerInput.prototype, "input", void 0);
__decorate([
  n({ attribute: "color-scheme", reflect: true })
], CDSDatePickerInput.prototype, "colorScheme", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSDatePickerInput.prototype, "disabled", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "hide-label" })
], CDSDatePickerInput.prototype, "hideLabel", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSDatePickerInput.prototype, "invalid", void 0);
__decorate([
  n({ attribute: "invalid-text" })
], CDSDatePickerInput.prototype, "invalidText", void 0);
__decorate([
  n({ reflect: true })
], CDSDatePickerInput.prototype, "kind", void 0);
__decorate([
  n({ attribute: "label-text" })
], CDSDatePickerInput.prototype, "labelText", void 0);
__decorate([
  n()
], CDSDatePickerInput.prototype, "pattern", void 0);
__decorate([
  n()
], CDSDatePickerInput.prototype, "placeholder", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSDatePickerInput.prototype, "readonly", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSDatePickerInput.prototype, "required", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSDatePickerInput.prototype, "short", void 0);
__decorate([
  n({ attribute: "size", reflect: true })
], CDSDatePickerInput.prototype, "size", void 0);
__decorate([
  n()
], CDSDatePickerInput.prototype, "type", void 0);
__decorate([
  n()
], CDSDatePickerInput.prototype, "value", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSDatePickerInput.prototype, "warn", void 0);
__decorate([
  n({ attribute: "warn-text" })
], CDSDatePickerInput.prototype, "warnText", void 0);
CDSDatePickerInput = __decorate([
  carbonElement(`${prefix}-date-picker-input`)
], CDSDatePickerInput);
var CDSDatePickerInput$1 = CDSDatePickerInput;

// node_modules/@carbon/web-components/es/components/date-picker/focus-plugin.js
var focusPlugin = (config) => (fp) => {
  const focusCalendar = () => {
    const { calendarContainer, selectedDateElem, todayDateElem } = fp;
    (selectedDateElem || todayDateElem || calendarContainer).focus();
  };
  const handleInputKeydown = (event) => {
    if (!(event.target instanceof CDSDatePickerInput$1))
      return;
    const { key } = event;
    if (key === "Escape") {
      fp.close();
    }
    if (key === "Tab") {
      if (!event.shiftKey) {
        event.preventDefault();
        fp.open();
        focusCalendar();
      } else if (fp.isOpen && event.target === config.inputFrom) {
        fp.close();
      }
    }
  };
  const handleCalendarKeydown = (event) => {
    const endInput = config.inputTo ? config.inputTo : config.inputFrom;
    const { key } = event;
    if (key === "Tab") {
      if (!event.shiftKey) {
        if (fp._lastFocusInput === endInput) {
          endInput.focus();
          fp.close();
        } else {
          event.preventDefault();
          endInput.focus();
        }
      } else if (fp._lastFocusInput === endInput) {
        event.preventDefault();
        setTimeout(() => endInput.focus(), 0);
      }
    }
  };
  const handleInputFocus = ({ target }) => {
    fp._lastFocusInput = target;
  };
  const release = () => {
    if (fp._hCDSCEDatePickerFocusPluginBlur) {
      fp._hCDSCEDatePickerFocusPluginBlur = fp._hCDSCEDatePickerFocusPluginBlur.release();
    }
    if (fp._hCDSCEDatePickerFocusPluginFocusTo) {
      fp._hCDSCEDatePickerFocusPluginFocusTo = fp._hCDSCEDatePickerFocusPluginFocusTo.release();
    }
    if (fp._hCDSCEDatePickerFocusPluginFocusFrom) {
      fp._hCDSCEDatePickerFocusPluginFocusFrom = fp._hCDSCEDatePickerFocusPluginFocusFrom.release();
    }
    if (fp._hCDSCEDatePickerFocusPluginKeydownTo) {
      fp._hCDSCEDatePickerFocusPluginKeydownTo = fp._hCDSCEDatePickerFocusPluginKeydownTo.release();
    }
    if (fp._hCDSCEDatePickerFocusPluginKeydownFrom) {
      fp._hCDSCEDatePickerFocusPluginKeydownFrom = fp._hCDSCEDatePickerFocusPluginKeydownFrom.release();
    }
  };
  const init = () => {
    release();
    const { inputFrom, inputTo } = config;
    fp._hCDSCEDatePickerFocusPluginBlur = on(fp.calendarContainer, "keydown", handleCalendarKeydown, true);
    fp._hCDSCEDatePickerFocusPluginKeydownFrom = on(inputFrom, "keydown", handleInputKeydown);
    if (inputTo) {
      fp._hCDSCEDatePickerFocusPluginKeydownTo = on(inputTo, "keydown", handleInputKeydown);
    }
    fp._hCDSCEDatePickerFocusPluginFocusFrom = on(inputFrom, "focus", handleInputFocus);
    if (inputTo) {
      fp._hCDSCEDatePickerFocusPluginFocusTo = on(inputTo, "focus", handleInputFocus);
    }
  };
  const register = () => {
    fp.loadedPlugins.push("carbonFlatpickrFocusPlugin");
  };
  return {
    onReady: [register, init],
    onDestroy: release
  };
};

// node_modules/@carbon/web-components/es/components/date-picker/icon-plugin.js
var iconPlugin = () => (fp) => {
  const setIcon = () => {
    const { prevMonthNav, nextMonthNav } = fp;
    D(iconLoader(_164), prevMonthNav);
    D(iconLoader(_16), nextMonthNav);
  };
  const parseConfig = () => {
    const { config } = fp;
    config.prevArrow = "";
    config.nextArrow = "";
  };
  const register = () => {
    fp.loadedPlugins.push("carbonFlatpickrIconPlugin");
  };
  return {
    onParseConfig: parseConfig,
    onReady: [register, setIcon]
  };
};

// node_modules/@carbon/web-components/es/components/date-picker/month-select-plugin.js
var monthToStr2 = (monthNumber, shorthand, locale) => locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
var monthSelectPlugin = (config) => (fp) => {
  const setupElements = () => {
    const { monthElements, yearElements, currentMonth, l10n, _createElement: createElement2 } = fp;
    if (!monthElements) {
      return;
    }
    const { shorthand, selectorFlatpickrMonthYearContainer, selectorFlatpickrYearContainer, classFlatpickrCurrentMonth } = config;
    monthElements.forEach((elem) => {
      if (!elem.parentNode) {
        return;
      }
      elem.parentNode.removeChild(elem);
    });
    monthElements.splice(0, monthElements.length, ...monthElements.map(() => {
      const monthElement = createElement2("span", classFlatpickrCurrentMonth);
      monthElement.textContent = monthToStr2(currentMonth, shorthand === true, l10n);
      const monthYearContainer = yearElements[0].closest(selectorFlatpickrMonthYearContainer);
      if (monthYearContainer) {
        monthYearContainer.insertBefore(monthElement, yearElements[0].closest(selectorFlatpickrYearContainer));
      }
      return monthElement;
    }));
  };
  const updateCurrentMonth = () => {
    const { yearElements, currentMonth, l10n } = fp;
    const { shorthand, selectorFlatpickrMonthYearContainer, selectorFlatpickrCurrentMonth } = config;
    const monthStr = monthToStr2(currentMonth, shorthand === true, l10n);
    yearElements.forEach((elem) => {
      const currentMonthContainer = elem.closest(selectorFlatpickrMonthYearContainer);
      if (currentMonthContainer) {
        forEach(currentMonthContainer.querySelectorAll(selectorFlatpickrCurrentMonth), (monthElement) => {
          monthElement.textContent = monthStr;
        });
      }
    });
  };
  const register = () => {
    fp.loadedPlugins.push("carbonFlatpickrMonthSelectPlugin");
  };
  return {
    onMonthChange: updateCurrentMonth,
    onValueUpdate: updateCurrentMonth,
    onOpen: updateCurrentMonth,
    onReady: [setupElements, updateCurrentMonth, register]
  };
};

// node_modules/flatpickr/dist/esm/plugins/rangePlugin.js
var __spreadArrays2 = function() {
  for (var s = 0, i3 = 0, il = arguments.length; i3 < il; i3++)
    s += arguments[i3].length;
  for (var r2 = Array(s), k = 0, i3 = 0; i3 < il; i3++)
    for (var a = arguments[i3], j = 0, jl = a.length; j < jl; j++, k++)
      r2[k] = a[j];
  return r2;
};
function rangePlugin(config) {
  if (config === void 0) {
    config = {};
  }
  return function(fp) {
    var dateFormat = "", secondInput, _secondInputFocused, _prevDates;
    var createSecondInput = function() {
      if (config.input) {
        secondInput = config.input instanceof Element ? config.input : window.document.querySelector(config.input);
        if (!secondInput) {
          fp.config.errorHandler(new Error("Invalid input element specified"));
          return;
        }
        if (fp.config.wrap) {
          secondInput = secondInput.querySelector("[data-input]");
        }
      } else {
        secondInput = fp._input.cloneNode();
        secondInput.removeAttribute("id");
        secondInput._flatpickr = void 0;
      }
      if (secondInput.value) {
        var parsedDate = fp.parseDate(secondInput.value);
        if (parsedDate)
          fp.selectedDates.push(parsedDate);
      }
      secondInput.setAttribute("data-fp-omit", "");
      if (fp.config.clickOpens) {
        fp._bind(secondInput, ["focus", "click"], function() {
          if (fp.selectedDates[1]) {
            fp.latestSelectedDateObj = fp.selectedDates[1];
            fp._setHoursFromDate(fp.selectedDates[1]);
            fp.jumpToDate(fp.selectedDates[1]);
          }
          _secondInputFocused = true;
          fp.isOpen = false;
          fp.open(void 0, config.position === "left" ? fp._input : secondInput);
        });
        fp._bind(fp._input, ["focus", "click"], function(e3) {
          e3.preventDefault();
          fp.isOpen = false;
          fp.open();
        });
      }
      if (fp.config.allowInput)
        fp._bind(secondInput, "keydown", function(e3) {
          if (e3.key === "Enter") {
            fp.setDate([fp.selectedDates[0], secondInput.value], true, dateFormat);
            secondInput.click();
          }
        });
      if (!config.input)
        fp._input.parentNode && fp._input.parentNode.insertBefore(secondInput, fp._input.nextSibling);
    };
    var plugin = {
      onParseConfig: function() {
        fp.config.mode = "range";
        dateFormat = fp.config.altInput ? fp.config.altFormat : fp.config.dateFormat;
      },
      onReady: function() {
        createSecondInput();
        fp.config.ignoredFocusElements.push(secondInput);
        if (fp.config.allowInput) {
          fp._input.removeAttribute("readonly");
          secondInput.removeAttribute("readonly");
        } else {
          secondInput.setAttribute("readonly", "readonly");
        }
        fp._bind(fp._input, "focus", function() {
          fp.latestSelectedDateObj = fp.selectedDates[0];
          fp._setHoursFromDate(fp.selectedDates[0]);
          _secondInputFocused = false;
          fp.jumpToDate(fp.selectedDates[0]);
        });
        if (fp.config.allowInput)
          fp._bind(fp._input, "keydown", function(e3) {
            if (e3.key === "Enter")
              fp.setDate([fp._input.value, fp.selectedDates[1]], true, dateFormat);
          });
        fp.setDate(fp.selectedDates, false);
        plugin.onValueUpdate(fp.selectedDates);
        fp.loadedPlugins.push("range");
      },
      onPreCalendarPosition: function() {
        if (_secondInputFocused) {
          fp._positionElement = secondInput;
          setTimeout(function() {
            fp._positionElement = fp._input;
          }, 0);
        }
      },
      onChange: function() {
        if (!fp.selectedDates.length) {
          setTimeout(function() {
            if (fp.selectedDates.length)
              return;
            secondInput.value = "";
            _prevDates = [];
          }, 10);
        }
        if (_secondInputFocused) {
          setTimeout(function() {
            secondInput.focus();
          }, 0);
        }
      },
      onDestroy: function() {
        if (!config.input)
          secondInput.parentNode && secondInput.parentNode.removeChild(secondInput);
      },
      onValueUpdate: function(selDates) {
        var _a, _b, _c;
        if (!secondInput)
          return;
        _prevDates = !_prevDates || selDates.length >= _prevDates.length ? __spreadArrays2(selDates) : _prevDates;
        if (_prevDates.length > selDates.length) {
          var newSelectedDate = selDates[0];
          var newDates = _secondInputFocused ? [_prevDates[0], newSelectedDate] : [newSelectedDate, _prevDates[1]];
          if (newDates[0].getTime() > newDates[1].getTime()) {
            if (_secondInputFocused) {
              newDates[0] = newDates[1];
            } else {
              newDates[1] = newDates[0];
            }
          }
          fp.setDate(newDates, false);
          _prevDates = __spreadArrays2(newDates);
        }
        _a = fp.selectedDates.map(function(d) {
          return fp.formatDate(d, dateFormat);
        }), _b = _a[0], fp._input.value = _b === void 0 ? "" : _b, _c = _a[1], secondInput.value = _c === void 0 ? "" : _c;
      }
    };
    return plugin;
  };
}
var rangePlugin_default = rangePlugin;

// node_modules/@carbon/web-components/es/components/date-picker/range-plugin.js
var rangePlugin2 = (config) => {
  const factory = rangePlugin_default(Object.assign({ position: "left" }, config));
  return (fp) => {
    const origRangePlugin = factory(fp);
    const { onReady: origOnReady } = origRangePlugin;
    const getDateStrFromInputs = (dates) => {
      return dates.filter((value) => value).filter((d, i3, arr) => fp.config.mode !== "range" || fp.config.enableTime || arr.indexOf(d) === i3).join(fp.config.mode !== "range" ? fp.config.conjunction : fp.l10n.rangeSeparator);
    };
    const handleBlur = (event) => {
      event.stopPropagation();
      const firstInput = fp._input;
      const secondInput = config.input;
      const isInput = event.target === firstInput || event.target === secondInput;
      const valueChanged = getDateStrFromInputs([firstInput.value, secondInput.value]) !== fp.getDateStr();
      const relatedTargetIsCalendar = event.relatedTarget && event.relatedTarget instanceof Node && fp.calendarContainer.contains(event.relatedTarget);
      if (isInput && valueChanged && !relatedTargetIsCalendar) {
        fp.setDate([firstInput.value, secondInput.value], true, firstInput === fp.altInput ? fp.config.altFormat : fp.config.dateFormat);
      }
    };
    const release = () => {
      if (fp._hBXCEDatePickerRangePluginOnBlurFrom) {
        fp._hBXCEDatePickerRangePluginOnBlurFrom = fp._hBXCEDatePickerRangePluginOnBlurFrom.release();
      }
      if (fp._hBXCEDatePickerRangePluginOnBlurTo) {
        fp._hBXCEDatePickerRangePluginOnBlurTo = fp._hBXCEDatePickerRangePluginOnBlurTo.release();
      }
    };
    return Object.assign(origRangePlugin, {
      onReady() {
        origOnReady.call(this);
        const { ignoredFocusElements } = fp.config;
        ignoredFocusElements.push(...ignoredFocusElements.map((elem) => elem.shadowRoot).filter(Boolean));
        release();
        if (fp.config.allowInput) {
          fp._hBXCEDatePickerRangePluginOnBlurFrom = on(fp._input, "blur", handleBlur, { capture: true });
          fp._hBXCEDatePickerRangePluginOnBlurTo = on(config.input, "blur", handleBlur, { capture: true });
        }
      }
    });
  };
};

// node_modules/@carbon/web-components/es/components/date-picker/shadow-dom-events-plugin.js
var moveDateForKeys = {
  ArrowLeft: -1,
  Left: -1,
  ArrowUp: -7,
  Up: -7,
  ArrowRight: 1,
  Right: 1,
  ArrowDown: 7,
  Down: 7
};
var moveMonthForKeys = {
  ArrowLeft: -1,
  Left: -1,
  ArrowUp: -12,
  Up: -12,
  ArrowRight: 1,
  Right: 1,
  ArrowDown: 12,
  Down: 12
};
var MILLISECONDS_IN_DAY = 864e5;
var adjustDate = (localDate, { date: moveDate = 0 }) => {
  const utcDate = new Date(Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate()) + moveDate * MILLISECONDS_IN_DAY);
  return new Date(utcDate.getUTCFullYear(), utcDate.getUTCMonth(), utcDate.getUTCDate());
};
var shadowDOMEventPlugin = () => (fp) => {
  const getDateElem = (localDate) => find(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- https://github.com/carbon-design-system/carbon/issues/20452
    fp.daysContainer.firstElementChild.children,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/carbon-design-system/carbon/issues/20452
    ({ dateObj }) => localDate.getTime() === dateObj.getTime()
  );
  const handleKeydown = (event) => {
    const { ctrlKey, key, target } = event;
    if (key === "Enter") {
      target.dispatchEvent(Object.assign(new CustomEvent("mousedown", { bubbles: true }), {
        which: 1
      }));
    } else if (!ctrlKey && key in moveDateForKeys) {
      const { dateObj } = target;
      const movedDate = adjustDate(dateObj, { date: moveDateForKeys[key] });
      const movedDateElem = getDateElem(movedDate);
      if (movedDateElem) {
        movedDateElem.focus();
      } else {
        const innerDaysContainer = fp.daysContainer.firstElementChild;
        if (movedDate.getTime() < // eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/carbon-design-system/carbon/issues/20452
        innerDaysContainer.firstElementChild.dateObj.getTime()) {
          fp.changeMonth(-1);
          fp.daysContainer.firstElementChild.lastElementChild.focus();
        } else if (movedDate.getTime() > // eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/carbon-design-system/carbon/issues/20452
        innerDaysContainer.lastElementChild.dateObj.getTime()) {
          fp.changeMonth(1);
          fp.daysContainer.firstElementChild.firstElementChild.focus();
        }
      }
      event.preventDefault();
    } else if (ctrlKey && key in moveMonthForKeys) {
      fp.changeMonth(moveMonthForKeys[key]);
      fp.daysContainer.firstElementChild.firstElementChild.focus();
      event.preventDefault();
    }
  };
  const release = () => {
    if (fp._hCDSCEDatePickerShadowDOMEventsPluginKeydown) {
      fp._hCDSCEDatePickerShadowDOMEventsPluginKeydown = fp._hCDSCEDatePickerShadowDOMEventsPluginKeydown.release();
    }
  };
  const init = () => {
    release();
    fp._hCDSCEDatePickerShadowDOMEventsPluginKeydown = on(fp.calendarContainer, "keydown", handleKeydown);
  };
  const register = () => {
    fp.loadedPlugins.push("carbonFlatpickrShadowDOMEventsPlugin");
  };
  return {
    onReady: [register, init],
    onDestroy: [release]
  };
};

// node_modules/@carbon/web-components/es/components/date-picker/state-handshake-plugin.js
var stateHandshakePlugin = (datePicker) => (fp) => {
  const setOpen = () => {
    datePicker.open = true;
  };
  const setClosed = () => {
    datePicker.open = false;
  };
  const handleChange = (selectedDates) => {
    const { eventChange } = datePicker.constructor;
    datePicker.dispatchEvent(new CustomEvent(eventChange, {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        selectedDates
      }
    }));
  };
  const register = (_selectedDates, _value, calendar) => {
    datePicker.calendar = calendar;
    fp.loadedPlugins.push("carbonFlatpickrStateHandshakePlugin");
  };
  return {
    onOpen: setOpen,
    onClose: setClosed,
    onChange: handleChange,
    onReady: [register]
  };
};

// node_modules/@carbon/web-components/es/components/date-picker/date-picker.js
var DATE_PICKER_MODE;
(function(DATE_PICKER_MODE2) {
  DATE_PICKER_MODE2["SIMPLE"] = "simple";
  DATE_PICKER_MODE2["SINGLE"] = "single";
  DATE_PICKER_MODE2["RANGE"] = "range";
})(DATE_PICKER_MODE || (DATE_PICKER_MODE = {}));
esm_default.l10ns.en.weekdays.shorthand.forEach((_day, index) => {
  const currentDay = esm_default.l10ns.en.weekdays.shorthand;
  if (currentDay[index] === "Thu" || currentDay[index] === "Th") {
    currentDay[index] = "Th";
  } else {
    currentDay[index] = currentDay[index].charAt(0);
  }
});
var CDSDatePicker = class CDSDatePicker2 extends HostListenerMixin(FormMixin(i2)) {
  constructor() {
    super(...arguments);
    this._dateInteractNode = null;
    this._handleChange = ({ detail }) => {
      this._value = detail.selectedDates.map((date) => getISODateString(date)).join("/");
    };
    this._handleFlatpickrError = (error) => {
      this.dispatchEvent(new CustomEvent(this.constructor.eventFlatpickrError, {
        bubbles: true,
        cancelable: false,
        composed: true,
        detail: {
          error
        }
      }));
    };
    this.calendar = null;
    this.allowInput = true;
    this.closeOnSelect = true;
    this.disabled = false;
    this.name = "";
    this.open = false;
    this.readonly = false;
  }
  /**
   * @returns The effective date picker mode, determined by the child `<cds-date-picker-input>`.
   */
  get _mode() {
    const { selectorInputTo } = this.constructor;
    if (this.querySelector(selectorInputTo)) {
      return DATE_PICKER_MODE.RANGE;
    }
    if (this.querySelector(`${prefix}-date-picker-input[kind="single"]`)) {
      return DATE_PICKER_MODE.SINGLE;
    }
    return DATE_PICKER_MODE.SIMPLE;
  }
  /**
   * @returns The Flatpickr plugins to use.
   */
  get _datePickerPlugins() {
    const { classCalendarContainer, classMonth, classWeekdays, classDays, classWeekday, classDay, classNoBorder, selectorInputFrom, selectorInputTo, _selectorFlatpickrMonthYearContainer: selectorFlatpickrMonthYearContainer, _selectorFlatpickrYearContainer: selectorFlatpickrYearContainer, _selectorFlatpickrCurrentMonth: selectorFlatpickrCurrentMonth, _selectorFlatpickrMonth: selectorFlatpickrMonth, _selectorFlatpickrWeekdays: selectorFlatpickrWeekdays, _selectorFlatpickrDays: selectorFlatpickrDays, _selectorFlatpickrWeekday: selectorFlatpickrWeekday, _selectorFlatpickrDay: selectorFlatpickrDay, _classFlatpickrCurrentMonth: classFlatpickrCurrentMonth, _classFlatpickrToday: classFlatpickrToday } = this.constructor;
    const { _floatingMenuContainerNode: floatingMenuContainerNode, _mode: mode } = this;
    const inputFrom = this.querySelector(selectorInputFrom);
    const inputTo = this.querySelector(selectorInputTo);
    const plugins = [
      appendToPlugin({ appendTo: floatingMenuContainerNode }),
      cssClassPlugin({
        classCalendarContainer,
        classMonth,
        classWeekdays,
        classDays,
        classWeekday,
        classDay,
        classNoBorder,
        selectorFlatpickrMonth,
        selectorFlatpickrWeekdays,
        selectorFlatpickrDays,
        selectorFlatpickrWeekday,
        selectorFlatpickrDay,
        classFlatpickrToday
      }),
      fixEventsPlugin({
        inputFrom,
        inputTo
      }),
      focusPlugin({
        inputFrom,
        inputTo
      }),
      iconPlugin(),
      monthSelectPlugin({
        selectorFlatpickrMonthYearContainer,
        selectorFlatpickrYearContainer,
        selectorFlatpickrCurrentMonth,
        classFlatpickrCurrentMonth
      }),
      shadowDOMEventPlugin(),
      stateHandshakePlugin(this)
    ];
    if (mode === DATE_PICKER_MODE.RANGE) {
      plugins.push(rangePlugin2({ input: inputTo }));
    }
    return plugins;
  }
  /**
   * @returns The options to instantiate Flatpickr with.
   */
  get _datePickerOptions() {
    var _a;
    const { locale = this.constructor.defaultLocale, enabledRange, _dateInteractNode: dateInteractNode, _datePickerPlugins: plugins, _handleFlatpickrError: handleFlatpickrError } = this;
    const { input: positionElement } = dateInteractNode;
    const [minDate = void 0, maxDate = void 0] = !enabledRange ? [] : enabledRange.split("/");
    return {
      allowInput: this.allowInput,
      closeOnSelect: this.closeOnSelect,
      dateFormat: (_a = this.dateFormat) !== null && _a !== void 0 ? _a : this.constructor.defaultDateFormat,
      disableMobile: true,
      errorHandler: handleFlatpickrError,
      locale,
      maxDate,
      minDate,
      positionElement,
      plugins
    };
  }
  _handleFormdata(event) {
    const { formData } = event;
    const { disabled, name, value } = this;
    if (!disabled) {
      formData.append(name, value);
    }
  }
  /**
   * Handles `slotchange` event in the `<slot>`.
   */
  _handleSlotChange({ target }) {
    const { _dateInteractNode: oldDateInteractNode } = this;
    const dateInteractNode = target.assignedNodes().find((node) => node.nodeType === Node.ELEMENT_NODE && node.matches(this.constructor.selectorInputFrom));
    if (oldDateInteractNode !== dateInteractNode) {
      this._dateInteractNode = dateInteractNode;
      this._instantiateDatePicker();
    }
  }
  /**
   * Sets calendar options
   * @param property property to set
   * @param calendar calendar object
   */
  _setCalendar(property, calendar) {
    const { disabled, dateFormat, open, readonly, minDate, maxDate, value } = this;
    const { selectorInputFrom, selectorInputTo } = this.constructor;
    const inputFrom = this.querySelector(selectorInputFrom);
    const inputTo = this.querySelector(selectorInputTo);
    if (property === "dateFormat") {
      calendar.set({ dateFormat });
    }
    if (property === "date") {
      if (!parseISODateString(minDate)) {
        throw new Error(`Wrong date format found in \`minDate\` property: ${minDate}`);
      }
      if (!parseISODateString(maxDate)) {
        throw new Error(`Wrong date format found in \`maxDate\` property: ${maxDate}`);
      }
      if (minDate && maxDate && minDate > maxDate) {
        throw new Error(`\`maxDate\` property, shouldn't be smaller than the \`minDate\` property. You have: minDate: ${minDate}, maxDate: ${maxDate}`);
      }
      calendar.set({ minDate, maxDate });
    }
    if (property === "open") {
      if (open && !readonly) {
        calendar.open();
      } else {
        calendar.close();
      }
    }
    if (property === "disabled") {
      [inputFrom, inputTo].forEach((input) => {
        if (input) {
          input.disabled = disabled;
          input.readonly = readonly;
        }
      });
    }
    if (property === "value") {
      const dates = value.split("/").filter(Boolean).map((item) => parseISODateString(item));
      if (dates.some((item) => isNaN(Number(item)))) {
        throw new Error(`Wrong date format found in \`value\` property: ${value}`);
      }
      const [startDate, endDate] = dates;
      if (startDate && endDate && startDate > endDate) {
        throw new Error(`In \`value\` property, the end date shouldn't be smaller than the start date. You have: ${value}`);
      }
      if (calendar) {
        calendar.setDate(dates);
        [inputFrom, inputTo].forEach((input, i3) => {
          if (input) {
            input.value = !dates[i3] ? "" : calendar.formatDate(new Date(dates[i3]), calendar.config.dateFormat);
          }
        });
      }
    }
    return calendar;
  }
  /**
   * Instantiates Flatpickr.
   *
   * @returns The Flatpickr instance.
   */
  _instantiateDatePicker() {
    this._releaseDatePicker();
    const { _dateInteractNode: dateInteractNode } = this;
    if (dateInteractNode && dateInteractNode.input && this._mode !== "simple") {
      this.calendar = esm_default(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/carbon-design-system/carbon/issues/20452
        dateInteractNode.input,
        this._datePickerOptions
      );
    }
    const { calendar, disabled, dateFormat, open, readonly, minDate, maxDate, value } = this;
    if (calendar) {
      if (dateFormat) {
        this._setCalendar("dateFormat", calendar);
      }
      if (minDate || maxDate) {
        this._setCalendar("date", calendar);
      }
      if (open) {
        this._setCalendar("open", calendar);
      }
      if (disabled || readonly) {
        this._setCalendar("disabled", calendar);
      }
      if (value) {
        this._setCalendar("value", calendar);
      }
    }
    return calendar;
  }
  /**
   * Releases Flatpickr instances.
   */
  _releaseDatePicker() {
    if (this.calendar) {
      this.calendar.destroy();
      this.calendar = null;
    }
    return this.calendar;
  }
  /**
   * The date(s) in ISO8601 format (date portion only), for range mode, '/' is used for separate start/end dates.
   */
  get value() {
    return this._value;
  }
  set value(value) {
    const { _value: oldValue } = this;
    this._value = value;
    this.requestUpdate("value", oldValue);
  }
  connectedCallback() {
    super.connectedCallback();
    this._instantiateDatePicker();
  }
  disconnectedCallback() {
    this._releaseDatePicker();
    super.disconnectedCallback();
  }
  updated(changedProperties) {
    const { calendar } = this;
    if (calendar) {
      if (changedProperties.has("dateFormat")) {
        this._setCalendar("dateFormat", calendar);
      }
      if (changedProperties.has("minDate") || changedProperties.has("maxDate")) {
        this._setCalendar("date", calendar);
      }
      if (changedProperties.has("open")) {
        this._setCalendar("open", calendar);
      }
      if (changedProperties.has("disabled") || changedProperties.has("readonly")) {
        this._setCalendar("disabled", calendar);
      }
      if (changedProperties.has("value")) {
        this._setCalendar("value", calendar);
      }
    }
  }
  render() {
    const { _handleSlotChange: handleSlotChange } = this;
    return b`
      <a
        class="${prefix}--visually-hidden"
        href="javascript:void 0"
        role="navigation"
        tabindex="-1"></a>
      <slot @slotchange="${handleSlotChange}"></slot>
      <div id="floating-menu-container"></div>
      <a
        class="${prefix}--visually-hidden"
        href="javascript:void 0"
        role="navigation"
        tabindex="-1"></a>
    `;
  }
  /**
   * The CSS class for the calendar dropdown.
   */
  static get classCalendarContainer() {
    return `${prefix}--date-picker__calendar`;
  }
  /**
   * The CSS class for the month navigator.
   */
  static get classMonth() {
    return `${prefix}--date-picker__month`;
  }
  /**
   * The CSS class for the container of the weekdays.
   */
  static get classWeekdays() {
    return `${prefix}--date-picker__weekdays`;
  }
  /**
   * The CSS class for the container of the days.
   */
  static get classDays() {
    return `${prefix}--date-picker__days`;
  }
  /**
   * The CSS class applied to each weekdays.
   */
  static get classWeekday() {
    return `${prefix}--date-picker__weekday`;
  }
  /**
   * The CSS class applied to each days.
   */
  static get classDay() {
    return `${prefix}--date-picker__day`;
  }
  /**
   * A selector that will return the `<input>` to enter starting date.
   */
  static get selectorInputFrom() {
    return `${prefix}-date-picker-input,${prefix}-date-picker-input[kind="from"]`;
  }
  /**
   * A selector that will return the `<input>` to enter end date.
   */
  static get selectorInputTo() {
    return `${prefix}-date-picker-input[kind="to"]`;
  }
  /**
   * The name of the custom event when Flatpickr throws an error.
   */
  static get eventFlatpickrError() {
    return `${prefix}-date-picker-flatpickr-error`;
  }
  /**
   * The name of the custom event fired on this element when Flatpickr updates its value.
   */
  static get eventChange() {
    return `${prefix}-date-picker-changed`;
  }
};
CDSDatePicker._selectorFlatpickrMonthYearContainer = ".flatpickr-current-month";
CDSDatePicker._selectorFlatpickrYearContainer = ".numInputWrapper";
CDSDatePicker._selectorFlatpickrCurrentMonth = ".cur-month";
CDSDatePicker._selectorFlatpickrMonth = ".flatpickr-month";
CDSDatePicker._selectorFlatpickrWeekdays = ".flatpickr-weekdays";
CDSDatePicker._selectorFlatpickrDays = ".flatpickr-days";
CDSDatePicker._selectorFlatpickrWeekday = ".flatpickr-weekday";
CDSDatePicker._selectorFlatpickrDay = ".flatpickr-day";
CDSDatePicker._classFlatpickrCurrentMonth = "cur-month";
CDSDatePicker._classFlatpickrToday = "today";
CDSDatePicker.classNoBorder = "no-border";
CDSDatePicker.defaultDateFormat = "m/d/Y";
CDSDatePicker.defaultLocale = esm_default.l10ns.default;
CDSDatePicker.styles = styles;
__decorate([
  e("#floating-menu-container")
], CDSDatePicker.prototype, "_floatingMenuContainerNode", void 0);
__decorate([
  HostListener("eventChange")
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  // @ts-ignore: The decorator refers to this method but TS thinks this method is not referred to
], CDSDatePicker.prototype, "_handleChange", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "allow-input" })
], CDSDatePicker.prototype, "allowInput", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "close-on-select" })
], CDSDatePicker.prototype, "closeOnSelect", void 0);
__decorate([
  n({ attribute: "date-format" })
], CDSDatePicker.prototype, "dateFormat", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSDatePicker.prototype, "disabled", void 0);
__decorate([
  n({ attribute: "enabled-range" })
], CDSDatePicker.prototype, "enabledRange", void 0);
__decorate([
  n({ attribute: false })
], CDSDatePicker.prototype, "locale", void 0);
__decorate([
  n({ attribute: "max-date" })
], CDSDatePicker.prototype, "maxDate", void 0);
__decorate([
  n({ attribute: "min-date" })
], CDSDatePicker.prototype, "minDate", void 0);
__decorate([
  n()
], CDSDatePicker.prototype, "name", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSDatePicker.prototype, "open", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSDatePicker.prototype, "readonly", void 0);
__decorate([
  n()
], CDSDatePicker.prototype, "value", null);
CDSDatePicker = __decorate([
  carbonElement(`${prefix}-date-picker`)
], CDSDatePicker);
var CDSDatePicker$1 = CDSDatePicker;

export {
  DATE_PICKER_INPUT_KIND,
  styles,
  CDSDatePicker$1
};
