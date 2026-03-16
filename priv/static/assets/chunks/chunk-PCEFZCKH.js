import {
  __export
} from "./chunk-G6EI4S4W.js";

// node_modules/@carbon/utilities/es/carousel/swipeEvents.js
var b = (t2, u, d, w) => {
  let n = null, l = null, v = 0;
  const M = 400;
  let o3 = false, s = null, i3 = null;
  const r3 = (e) => {
    n = e.touches[0].clientX;
  }, a = (e) => {
    l = e.touches[0].clientX;
  }, m = () => {
    if (n !== null && l !== null) {
      const e = n - l;
      Math.abs(e) > 50 && (e > 0 ? u() : d());
    }
    n = null, l = null;
  }, c = (e) => {
    o3 = true, s = e.clientX;
  }, h = (e) => {
    o3 && (i3 = e.clientX);
  }, E = () => {
    if (o3 && s !== null && i3 !== null) {
      const e = s - i3;
      Math.abs(e) > 50 && (e > 0 ? u() : d());
    }
    o3 = false, s = null, i3 = null;
  }, L = (e) => {
    const f = Date.now();
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 20) {
      if (e.preventDefault(), f - v < M)
        return;
      e.deltaX > 0 ? u() : d(), v = f;
    }
  };
  w && (t2.removeEventListener("touchstart", r3), t2.removeEventListener("touchmove", a), t2.removeEventListener("touchend", m), t2.removeEventListener("mousedown", c), t2.removeEventListener("mousemove", h), t2.removeEventListener("mouseup", E), t2.removeEventListener("wheel", L)), t2.addEventListener("touchstart", r3), t2.addEventListener("touchmove", a), t2.addEventListener("touchend", m), t2.addEventListener("mousedown", c), t2.addEventListener("mousemove", h), t2.addEventListener("mouseup", E), t2.addEventListener("wheel", L);
};

// node_modules/@carbon/utilities/es/carousel/carousel.js
var ne = (i3, S) => {
  const r3 = "carousel";
  let n = [0], m = [0];
  const l = {}, h = 4, { onViewChangeStart: v, onViewChangeEnd: k, excludeSwipeSupport: E, useMaxHeight: $ } = S || {}, V = (e, t2) => {
    l[e] = t2;
  }, A = (e, t2) => {
    if (e.querySelector(`.${t2}`))
      return;
    const o3 = document.createElement("div");
    for (o3.classList.add(`${t2}`); e.firstChild; )
      o3.appendChild(e.firstChild);
    e.appendChild(o3);
  }, R = () => n.map((e) => ({ id: e, elem: l[e] })), L = () => {
    const e = Object.keys(l).length, t2 = l[e - 1], o3 = R();
    return { currentIndex: n[0], lastIndex: parseInt((t2 == null ? void 0 : t2.dataset.index) || n[0].toString(), 10), totalViews: e, historyStack: o3 };
  }, H = () => {
    m = [...n];
    const e = L();
    v == null ? void 0 : v(e);
  }, T = (e) => {
    if (!e)
      return;
    const t2 = e.dataset.index;
    if (t2 && n[0] === parseInt(t2, 10)) {
      const o3 = L();
      k == null ? void 0 : k(o3);
    }
  }, w = (e) => {
    const o3 = Object.keys(l).length - 1;
    return Math.max(0, Math.min(e, o3));
  }, M = (e) => {
    const t2 = w(e);
    n[0] !== t2 && (H(), n = [t2, ...n], u(false));
  }, I = (e) => {
    T(e);
  }, W = (e, t2, o3, s, a) => {
    e.classList.add(`${r3}__view`), e.classList.toggle(`${r3}__view-in-stack`, t2 && !o3), e.classList.toggle(`${r3}__view-active`, t2 && o3), a && !s && e.classList.add(`${r3}__view-recycle-in`), !a && s && e.classList.add(`${r3}__view-recycle-out`);
  }, _ = (e) => {
    e.classList.remove(`${r3}__view-recycle-in`, `${r3}__view-recycle-out`);
  }, y2 = (e) => e * parseFloat(getComputedStyle(document.documentElement).fontSize), b2 = (e) => {
    const t2 = y2(h);
    if (i3.clientHeight < t2) {
      e < t2 && (e = t2);
      const s = i3.querySelector(`.${r3}__itemsWrapper`);
      s && (s.style.blockSize = `${e}px`);
    }
  }, u = (e) => {
    let t2 = 0, o3 = 0;
    Array.from(d).forEach((s, a) => {
      const N = n.findIndex((c) => c === a), x = m.filter((c) => c === a).length, P = m.length > n.length && m[0] === a && x > 0, B = m.length < n.length && n[0] === a && x > 0, G = N > -1, J = a === n[0];
      if (W(s, G, J, P, B), e) {
        V(a, s), setTimeout(() => {
          if ($) {
            const p = Array.from(d).map((K) => K.scrollHeight);
            o3 = Math.max(...p), s.style.position = "absolute", b2(o3);
          } else
            (!t2 || s.offsetHeight < t2 && t2 > y2(h)) && (t2 = s.offsetHeight), s.style.position = "absolute", b2(t2);
        });
        const c = (p) => {
          _(s), p.target === l[n[0]] && I(s);
        };
        s._carouselListener = c, s.addEventListener("animationend", c), s.addEventListener("transitionend", c), s.setAttribute("data-index", a.toString());
      }
    }), e && T(Array.from(d)[0]);
  }, f = () => {
    const e = n[0] + 1;
    M(e);
  }, g = () => {
    n.length - 1 >= 1 && (H(), n = n.slice(1), u(false));
  }, q = (e) => {
    M(e);
  }, z = () => ({ index: n[0], item: l[n[0]] }), j = () => {
    Array.from(d).forEach((e) => {
      _(e);
    }), m = [0], n = [0], u(false);
  }, D = () => {
    Object.values(l).forEach((e) => {
      const t2 = e;
      e && t2._carouselListener && (e.removeEventListener("animationend", t2._carouselListener), e.removeEventListener("transitionend", t2._carouselListener));
    }), E || b(i3, f, g, true);
  }, O = (e) => {
    const t2 = e.querySelector("slot");
    return t2 ? t2.assignedElements({ flatten: true }) : Array.from(e.children);
  };
  A(i3, `${r3}__itemsWrapper`);
  const F = i3.querySelector(`.${r3}__itemsWrapper`), d = O(F);
  return i3.classList.add(`${r3}__view-stack`), u(true), E || b(i3, f, g, false), { next: f, prev: g, reset: j, goToIndex: q, getActiveItem: z, destroyEvents: D, allViews: l };
};

// node_modules/@carbon/utilities/es/dateTimeFormat/relative.js
var relative_exports = {};
__export(relative_exports, {
  format: () => i
});
function i(a, o3) {
  var _a, _b;
  const t2 = new Intl.RelativeTimeFormat(o3 == null ? void 0 : o3.locale, { style: (_a = o3 == null ? void 0 : o3.style) != null ? _a : "long" }), f = typeof a == "number" ? new Date(a) : a, m = Date.now(), l = Math.floor((m - f.getTime()) / 1e3), r3 = Math.floor(l / 60), n = Math.floor(r3 / 60), e = Math.floor(n / 24), s = Math.floor(e / 7), c = Math.floor(s / 4), h = Math.floor(e / 365);
  return Math.abs(l) < 60 ? new Intl.RelativeTimeFormat(o3 == null ? void 0 : o3.locale, { numeric: "auto", style: (_b = o3 == null ? void 0 : o3.style) != null ? _b : "long" }).format(0, "seconds") : Math.abs(r3) < 60 ? t2.format(r3 * -1, "minutes") : Math.abs(n) < 24 ? t2.format(n * -1, "hours") : Math.abs(e) < 7 ? t2.format(e * -1, "days") : Math.abs(s) < 4 ? t2.format(s * -1, "weeks") : Math.abs(e) < 365 ? t2.format(c * -1, "months") : t2.format(h * -1, "years");
}

// node_modules/@carbon/utilities/es/dateTimeFormat/absolute.js
var absolute_exports = {};
__export(absolute_exports, {
  format: () => o,
  formatDate: () => r,
  formatRange: () => y,
  formatTime: () => i2
});
function i2(l, t2) {
  var _a;
  return new Intl.DateTimeFormat(t2 == null ? void 0 : t2.locale, { timeStyle: (_a = t2 == null ? void 0 : t2.style) != null ? _a : "short", timeZone: t2 == null ? void 0 : t2.timeZone }).format(l);
}
function r(l, t2) {
  var _a;
  return new Intl.DateTimeFormat(t2 == null ? void 0 : t2.locale, { dateStyle: (_a = t2 == null ? void 0 : t2.style) != null ? _a : "medium", timeZone: t2 == null ? void 0 : t2.timeZone }).format(l);
}
function o(l, t2) {
  var _a, _b, _c, _d;
  const e = (_b = (_a = t2 == null ? void 0 : t2.timeStyle) != null ? _a : (t2 == null ? void 0 : t2.style) === "tooltip" ? "long" : t2 == null ? void 0 : t2.style) != null ? _b : "short", m = (_d = (_c = t2 == null ? void 0 : t2.dateStyle) != null ? _c : (t2 == null ? void 0 : t2.style) === "tooltip" ? "full" : t2 == null ? void 0 : t2.style) != null ? _d : "medium";
  return new Intl.DateTimeFormat(t2 == null ? void 0 : t2.locale, { timeStyle: e, dateStyle: m, timeZone: t2 == null ? void 0 : t2.timeZone }).format(l);
}
function y(l, t2, e) {
  var _a, _b, _c, _d;
  const m = (e == null ? void 0 : e.timeStyle) === null ? void 0 : (_b = (_a = e == null ? void 0 : e.timeStyle) != null ? _a : e == null ? void 0 : e.style) != null ? _b : "short", a = (e == null ? void 0 : e.dateStyle) === null ? void 0 : (_d = (_c = e == null ? void 0 : e.dateStyle) != null ? _c : e == null ? void 0 : e.style) != null ? _d : "medium";
  return new Intl.DateTimeFormat(e == null ? void 0 : e.locale, { timeStyle: m, dateStyle: a, timeZone: e == null ? void 0 : e.timeZone }).formatRange(l, t2);
}

// node_modules/@carbon/utilities/es/dateTimeFormat/index.js
var r2 = { relative: relative_exports, absolute: absolute_exports };

// node_modules/@carbon/utilities/es/documentLang/documentLang.js
var t = typeof document < "u";
var o2 = t ? document.documentElement.lang : "";

export {
  ne,
  r2 as r
};
