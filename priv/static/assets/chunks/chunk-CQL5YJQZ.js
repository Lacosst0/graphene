import {
  __spreadProps,
  __spreadValues
} from "./chunk-G6EI4S4W.js";

// node_modules/@lit/context/lib/context-request-event.js
var s = class extends Event {
  constructor(s4, t2, e3, o) {
    super("context-request", { bubbles: true, composed: true }), this.context = s4, this.contextTarget = t2, this.callback = e3, this.subscribe = o != null ? o : false;
  }
};

// node_modules/@lit/context/lib/controllers/context-consumer.js
var s2 = class {
  constructor(t2, s4, i2, h) {
    var _a;
    if (this.subscribe = false, this.provided = false, this.value = void 0, this.t = (t3, s5) => {
      this.unsubscribe && (this.unsubscribe !== s5 && (this.provided = false, this.unsubscribe()), this.subscribe || this.unsubscribe()), this.value = t3, this.host.requestUpdate?.(), this.provided && !this.subscribe || (this.provided = true, this.callback && this.callback(t3, s5)), this.unsubscribe = s5;
    }, this.host = t2, void 0 !== s4.context) {
      const t3 = s4;
      this.context = t3.context, this.callback = t3.callback, this.subscribe = (_a = t3.subscribe) != null ? _a : false;
    } else
      this.context = s4, this.callback = i2, this.subscribe = h != null ? h : false;
    this.host.addController(this);
  }
  hostConnected() {
    this.dispatchRequest();
  }
  hostDisconnected() {
    this.unsubscribe && (this.unsubscribe(), this.unsubscribe = void 0);
  }
  dispatchRequest() {
    this.host.dispatchEvent(new s(this.context, this.host, this.t, this.subscribe));
  }
};

// node_modules/@lit/context/lib/value-notifier.js
var s3 = class {
  get value() {
    return this.o;
  }
  set value(s4) {
    this.setValue(s4);
  }
  setValue(s4, t2 = false) {
    const i2 = t2 || !Object.is(s4, this.o);
    this.o = s4, i2 && this.updateObservers();
  }
  constructor(s4) {
    this.subscriptions = /* @__PURE__ */ new Map(), this.updateObservers = () => {
      for (const [s5, { disposer: t2 }] of this.subscriptions)
        s5(this.o, t2);
    }, void 0 !== s4 && (this.value = s4);
  }
  addCallback(s4, t2, i2) {
    if (!i2)
      return void s4(this.value);
    this.subscriptions.has(s4) || this.subscriptions.set(s4, { disposer: () => {
      this.subscriptions.delete(s4);
    }, consumerHost: t2 });
    const { disposer: h } = this.subscriptions.get(s4);
    s4(this.value, h);
  }
  clearCallbacks() {
    this.subscriptions.clear();
  }
};

// node_modules/@lit/context/lib/controllers/context-provider.js
var e = class extends Event {
  constructor(t2, s4) {
    super("context-provider", { bubbles: true, composed: true }), this.context = t2, this.contextTarget = s4;
  }
};
var i = class extends s3 {
  constructor(s4, e3, i2) {
    var _a, _b;
    super(void 0 !== e3.context ? e3.initialValue : i2), this.onContextRequest = (t2) => {
      var _a2;
      if (t2.context !== this.context)
        return;
      const s5 = (_a2 = t2.contextTarget) != null ? _a2 : t2.composedPath()[0];
      s5 !== this.host && (t2.stopPropagation(), this.addCallback(t2.callback, s5, t2.subscribe));
    }, this.onProviderRequest = (s5) => {
      var _a2;
      if (s5.context !== this.context)
        return;
      if (((_a2 = s5.contextTarget) != null ? _a2 : s5.composedPath()[0]) === this.host)
        return;
      const e4 = /* @__PURE__ */ new Set();
      for (const [s6, { consumerHost: i3 }] of this.subscriptions)
        e4.has(s6) || (e4.add(s6), i3.dispatchEvent(new s(this.context, i3, s6, true)));
      s5.stopPropagation();
    }, this.host = s4, void 0 !== e3.context ? this.context = e3.context : this.context = e3, this.attachListeners(), (_b = (_a = this.host).addController) == null ? void 0 : _b.call(_a, this);
  }
  attachListeners() {
    this.host.addEventListener("context-request", this.onContextRequest), this.host.addEventListener("context-provider", this.onProviderRequest);
  }
  hostConnected() {
    this.host.dispatchEvent(new e(this.context, this.host));
  }
};

// node_modules/@lit/context/lib/decorators/provide.js
function e2({ context: e3 }) {
  return (n2, i2) => {
    const r = /* @__PURE__ */ new WeakMap();
    if ("object" == typeof i2)
      return { get() {
        return n2.get.call(this);
      }, set(t2) {
        return r.get(this).setValue(t2), n2.set.call(this, t2);
      }, init(n3) {
        return r.set(this, new i(this, { context: e3, initialValue: n3 })), n3;
      } };
    {
      n2.constructor.addInitializer((n3) => {
        r.set(n3, new i(n3, { context: e3 }));
      });
      const o = Object.getOwnPropertyDescriptor(n2, i2);
      let s4;
      if (void 0 === o) {
        const t2 = /* @__PURE__ */ new WeakMap();
        s4 = { get() {
          return t2.get(this);
        }, set(e4) {
          r.get(this).setValue(e4), t2.set(this, e4);
        }, configurable: true, enumerable: true };
      } else {
        const t2 = o.set;
        s4 = __spreadProps(__spreadValues({}, o), { set(e4) {
          r.get(this).setValue(e4), t2 == null ? void 0 : t2.call(this, e4);
        } });
      }
      return void Object.defineProperty(n2, i2, s4);
    }
  };
}

// node_modules/@lit/context/lib/decorators/consume.js
function c({ context: c2, subscribe: e3 }) {
  return (o, n2) => {
    "object" == typeof n2 ? n2.addInitializer(function() {
      new s2(this, { context: c2, callback: (t2) => {
        o.set.call(this, t2);
      }, subscribe: e3 });
    }) : o.constructor.addInitializer((o2) => {
      new s2(o2, { context: c2, callback: (t2) => {
        o2[n2] = t2;
      }, subscribe: e3 });
    });
  };
}

// node_modules/@lit/context/lib/create-context.js
function n(n2) {
  return n2;
}

export {
  n,
  s2 as s,
  e2 as e,
  c
};
/*! Bundled license information:

@lit/context/lib/context-request-event.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/controllers/context-consumer.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/value-notifier.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/controllers/context-provider.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/decorators/provide.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/decorators/consume.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/create-context.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/context-root.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
