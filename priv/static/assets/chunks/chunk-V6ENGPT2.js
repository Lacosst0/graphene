import {
  f,
  u
} from "./chunk-3GZFZEMV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-G6EI4S4W.js";

// node_modules/@lit/reactive-element/decorators/property.js
var o = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
var r = (t2 = o, e4, r4) => {
  const { kind: n2, metadata: i } = r4;
  let s = globalThis.litPropertyMetadata.get(i);
  if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = /* @__PURE__ */ new Map()), "setter" === n2 && ((t2 = Object.create(t2)).wrapped = true), s.set(r4.name, t2), "accessor" === n2) {
    const { name: o3 } = r4;
    return { set(r5) {
      const n3 = e4.get.call(this);
      e4.set.call(this, r5), this.requestUpdate(o3, n3, t2, true, r5);
    }, init(e5) {
      return void 0 !== e5 && this.C(o3, void 0, t2, e5), e5;
    } };
  }
  if ("setter" === n2) {
    const { name: o3 } = r4;
    return function(r5) {
      const n3 = this[o3];
      e4.call(this, r5), this.requestUpdate(o3, n3, t2, true, r5);
    };
  }
  throw Error("Unsupported decorator location: " + n2);
};
function n(t2) {
  return (e4, o3) => "object" == typeof o3 ? r(t2, e4, o3) : ((t3, e5, o4) => {
    const r4 = e5.hasOwnProperty(o4);
    return e5.constructor.createProperty(o4, t3), r4 ? Object.getOwnPropertyDescriptor(e5, o4) : void 0;
  })(t2, e4, o3);
}

// node_modules/@lit/reactive-element/decorators/state.js
function r2(r4) {
  return n(__spreadProps(__spreadValues({}, r4), { state: true, attribute: false }));
}

// node_modules/@lit/reactive-element/decorators/base.js
var e = (e4, t2, c) => (c.configurable = true, c.enumerable = true, Reflect.decorate && "object" != typeof t2 && Object.defineProperty(e4, t2, c), c);

// node_modules/@lit/reactive-element/decorators/query.js
function e2(e4, r4) {
  return (n2, s, i) => {
    const o3 = (t2) => {
      var _a, _b;
      return (_b = (_a = t2.renderRoot) == null ? void 0 : _a.querySelector(e4)) != null ? _b : null;
    };
    if (r4) {
      const { get: e5, set: r5 } = "object" == typeof s ? n2 : i != null ? i : (() => {
        const t2 = Symbol();
        return { get() {
          return this[t2];
        }, set(e6) {
          this[t2] = e6;
        } };
      })();
      return e(n2, s, { get() {
        let t2 = e5.call(this);
        return void 0 === t2 && (t2 = o3(this), (null !== t2 || this.hasUpdated) && r5.call(this, t2)), t2;
      } });
    }
    return e(n2, s, { get() {
      return o3(this);
    } });
  };
}

// node_modules/@lit/reactive-element/decorators/query-all.js
var e3;
function r3(r4) {
  return (n2, o3) => e(n2, o3, { get() {
    var _a;
    return ((_a = this.renderRoot) != null ? _a : e3 != null ? e3 : e3 = document.createDocumentFragment()).querySelectorAll(r4);
  } });
}

// node_modules/@lit/reactive-element/decorators/custom-element.js
var t = (t2) => (e4, o3) => {
  void 0 !== o3 ? o3.addInitializer(() => {
    customElements.define(t2, e4);
  }) : customElements.define(t2, e4);
};

// node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
function o2(o3) {
  return (e4, n2) => {
    const { slot: r4, selector: s } = o3 != null ? o3 : {}, c = "slot" + (r4 ? `[name=${r4}]` : ":not([name])");
    return e(e4, n2, { get() {
      var _a, _b;
      const t2 = (_a = this.renderRoot) == null ? void 0 : _a.querySelector(c), e5 = (_b = t2 == null ? void 0 : t2.assignedElements(o3)) != null ? _b : [];
      return void 0 === s ? e5 : e5.filter((t3) => t3.matches(s));
    } });
  };
}

export {
  t,
  n,
  r2 as r,
  e2 as e,
  r3 as r2,
  o2 as o
};
/*! Bundled license information:

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
