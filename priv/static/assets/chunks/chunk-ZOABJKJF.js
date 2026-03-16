import {
  e,
  i,
  t
} from "./chunk-M2VBID3H.js";
import {
  b,
  j,
  w
} from "./chunk-3GZFZEMV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-G6EI4S4W.js";

// node_modules/signal-polyfill/dist/index.js
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateIn = (member, obj) => {
  if (Object(obj) !== obj)
    throw TypeError('Cannot use the "in" operator on this value');
  return member.has(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
function defaultEquals(a, b2) {
  return Object.is(a, b2);
}
var activeConsumer = null;
var inNotificationPhase = false;
var epoch = 1;
var SIGNAL = /* @__PURE__ */ Symbol("SIGNAL");
function setActiveConsumer(consumer) {
  const prev = activeConsumer;
  activeConsumer = consumer;
  return prev;
}
function getActiveConsumer() {
  return activeConsumer;
}
function isInNotificationPhase() {
  return inNotificationPhase;
}
var REACTIVE_NODE = {
  version: 0,
  lastCleanEpoch: 0,
  dirty: false,
  producerNode: void 0,
  producerLastReadVersion: void 0,
  producerIndexOfThis: void 0,
  nextProducerIndex: 0,
  liveConsumerNode: void 0,
  liveConsumerIndexOfThis: void 0,
  consumerAllowSignalWrites: false,
  consumerIsAlwaysLive: false,
  producerMustRecompute: () => false,
  producerRecomputeValue: () => {
  },
  consumerMarkedDirty: () => {
  },
  consumerOnSignalRead: () => {
  }
};
function producerAccessed(node) {
  if (inNotificationPhase) {
    throw new Error(
      typeof ngDevMode !== "undefined" && ngDevMode ? `Assertion error: signal read during notification phase` : ""
    );
  }
  if (activeConsumer === null) {
    return;
  }
  activeConsumer.consumerOnSignalRead(node);
  const idx = activeConsumer.nextProducerIndex++;
  assertConsumerNode(activeConsumer);
  if (idx < activeConsumer.producerNode.length && activeConsumer.producerNode[idx] !== node) {
    if (consumerIsLive(activeConsumer)) {
      const staleProducer = activeConsumer.producerNode[idx];
      producerRemoveLiveConsumerAtIndex(staleProducer, activeConsumer.producerIndexOfThis[idx]);
    }
  }
  if (activeConsumer.producerNode[idx] !== node) {
    activeConsumer.producerNode[idx] = node;
    activeConsumer.producerIndexOfThis[idx] = consumerIsLive(activeConsumer) ? producerAddLiveConsumer(node, activeConsumer, idx) : 0;
  }
  activeConsumer.producerLastReadVersion[idx] = node.version;
}
function producerIncrementEpoch() {
  epoch++;
}
function producerUpdateValueVersion(node) {
  if (!node.dirty && node.lastCleanEpoch === epoch) {
    return;
  }
  if (!node.producerMustRecompute(node) && !consumerPollProducersForChange(node)) {
    node.dirty = false;
    node.lastCleanEpoch = epoch;
    return;
  }
  node.producerRecomputeValue(node);
  node.dirty = false;
  node.lastCleanEpoch = epoch;
}
function producerNotifyConsumers(node) {
  if (node.liveConsumerNode === void 0) {
    return;
  }
  const prev = inNotificationPhase;
  inNotificationPhase = true;
  try {
    for (const consumer of node.liveConsumerNode) {
      if (!consumer.dirty) {
        consumerMarkDirty(consumer);
      }
    }
  } finally {
    inNotificationPhase = prev;
  }
}
function producerUpdatesAllowed() {
  return (activeConsumer == null ? void 0 : activeConsumer.consumerAllowSignalWrites) !== false;
}
function consumerMarkDirty(node) {
  var _a2;
  var _a;
  node.dirty = true;
  producerNotifyConsumers(node);
  (_a = node.consumerMarkedDirty) == null ? void 0 : _a.call((_a2 = node.wrapper) != null ? _a2 : node);
}
function consumerBeforeComputation(node) {
  node && (node.nextProducerIndex = 0);
  return setActiveConsumer(node);
}
function consumerAfterComputation(node, prevConsumer) {
  setActiveConsumer(prevConsumer);
  if (!node || node.producerNode === void 0 || node.producerIndexOfThis === void 0 || node.producerLastReadVersion === void 0) {
    return;
  }
  if (consumerIsLive(node)) {
    for (let i3 = node.nextProducerIndex; i3 < node.producerNode.length; i3++) {
      producerRemoveLiveConsumerAtIndex(node.producerNode[i3], node.producerIndexOfThis[i3]);
    }
  }
  while (node.producerNode.length > node.nextProducerIndex) {
    node.producerNode.pop();
    node.producerLastReadVersion.pop();
    node.producerIndexOfThis.pop();
  }
}
function consumerPollProducersForChange(node) {
  assertConsumerNode(node);
  for (let i3 = 0; i3 < node.producerNode.length; i3++) {
    const producer = node.producerNode[i3];
    const seenVersion = node.producerLastReadVersion[i3];
    if (seenVersion !== producer.version) {
      return true;
    }
    producerUpdateValueVersion(producer);
    if (seenVersion !== producer.version) {
      return true;
    }
  }
  return false;
}
function producerAddLiveConsumer(node, consumer, indexOfThis) {
  var _a;
  assertProducerNode(node);
  assertConsumerNode(node);
  if (node.liveConsumerNode.length === 0) {
    (_a = node.watched) == null ? void 0 : _a.call(node.wrapper);
    for (let i3 = 0; i3 < node.producerNode.length; i3++) {
      node.producerIndexOfThis[i3] = producerAddLiveConsumer(node.producerNode[i3], node, i3);
    }
  }
  node.liveConsumerIndexOfThis.push(indexOfThis);
  return node.liveConsumerNode.push(consumer) - 1;
}
function producerRemoveLiveConsumerAtIndex(node, idx) {
  var _a;
  assertProducerNode(node);
  assertConsumerNode(node);
  if (typeof ngDevMode !== "undefined" && ngDevMode && idx >= node.liveConsumerNode.length) {
    throw new Error(
      `Assertion error: active consumer index ${idx} is out of bounds of ${node.liveConsumerNode.length} consumers)`
    );
  }
  if (node.liveConsumerNode.length === 1) {
    (_a = node.unwatched) == null ? void 0 : _a.call(node.wrapper);
    for (let i3 = 0; i3 < node.producerNode.length; i3++) {
      producerRemoveLiveConsumerAtIndex(node.producerNode[i3], node.producerIndexOfThis[i3]);
    }
  }
  const lastIdx = node.liveConsumerNode.length - 1;
  node.liveConsumerNode[idx] = node.liveConsumerNode[lastIdx];
  node.liveConsumerIndexOfThis[idx] = node.liveConsumerIndexOfThis[lastIdx];
  node.liveConsumerNode.length--;
  node.liveConsumerIndexOfThis.length--;
  if (idx < node.liveConsumerNode.length) {
    const idxProducer = node.liveConsumerIndexOfThis[idx];
    const consumer = node.liveConsumerNode[idx];
    assertConsumerNode(consumer);
    consumer.producerIndexOfThis[idxProducer] = idx;
  }
}
function consumerIsLive(node) {
  var _a2;
  var _a;
  return node.consumerIsAlwaysLive || ((_a2 = (_a = node == null ? void 0 : node.liveConsumerNode) == null ? void 0 : _a.length) != null ? _a2 : 0) > 0;
}
function assertConsumerNode(node) {
  var _a, _b, _c;
  (_a = node.producerNode) != null ? _a : node.producerNode = [];
  (_b = node.producerIndexOfThis) != null ? _b : node.producerIndexOfThis = [];
  (_c = node.producerLastReadVersion) != null ? _c : node.producerLastReadVersion = [];
}
function assertProducerNode(node) {
  var _a, _b;
  (_a = node.liveConsumerNode) != null ? _a : node.liveConsumerNode = [];
  (_b = node.liveConsumerIndexOfThis) != null ? _b : node.liveConsumerIndexOfThis = [];
}
function computedGet(node) {
  producerUpdateValueVersion(node);
  producerAccessed(node);
  if (node.value === ERRORED) {
    throw node.error;
  }
  return node.value;
}
function createComputed(computation) {
  const node = Object.create(COMPUTED_NODE);
  node.computation = computation;
  const computed = () => computedGet(node);
  computed[SIGNAL] = node;
  return computed;
}
var UNSET = /* @__PURE__ */ Symbol("UNSET");
var COMPUTING = /* @__PURE__ */ Symbol("COMPUTING");
var ERRORED = /* @__PURE__ */ Symbol("ERRORED");
var COMPUTED_NODE = /* @__PURE__ */ (() => {
  return __spreadProps(__spreadValues({}, REACTIVE_NODE), {
    value: UNSET,
    dirty: true,
    error: null,
    equal: defaultEquals,
    producerMustRecompute(node) {
      return node.value === UNSET || node.value === COMPUTING;
    },
    producerRecomputeValue(node) {
      if (node.value === COMPUTING) {
        throw new Error("Detected cycle in computations.");
      }
      const oldValue = node.value;
      node.value = COMPUTING;
      const prevConsumer = consumerBeforeComputation(node);
      let newValue;
      let wasEqual = false;
      try {
        newValue = node.computation.call(node.wrapper);
        const oldOk = oldValue !== UNSET && oldValue !== ERRORED;
        wasEqual = oldOk && node.equal.call(node.wrapper, oldValue, newValue);
      } catch (err) {
        newValue = ERRORED;
        node.error = err;
      } finally {
        consumerAfterComputation(node, prevConsumer);
      }
      if (wasEqual) {
        node.value = oldValue;
        return;
      }
      node.value = newValue;
      node.version++;
    }
  });
})();
function defaultThrowError() {
  throw new Error();
}
var throwInvalidWriteToSignalErrorFn = defaultThrowError;
function throwInvalidWriteToSignalError() {
  throwInvalidWriteToSignalErrorFn();
}
function createSignal(initialValue) {
  const node = Object.create(SIGNAL_NODE);
  node.value = initialValue;
  const getter = () => {
    producerAccessed(node);
    return node.value;
  };
  getter[SIGNAL] = node;
  return getter;
}
function signalGetFn() {
  producerAccessed(this);
  return this.value;
}
function signalSetFn(node, newValue) {
  if (!producerUpdatesAllowed()) {
    throwInvalidWriteToSignalError();
  }
  if (!node.equal.call(node.wrapper, node.value, newValue)) {
    node.value = newValue;
    signalValueChanged(node);
  }
}
var SIGNAL_NODE = /* @__PURE__ */ (() => {
  return __spreadProps(__spreadValues({}, REACTIVE_NODE), {
    equal: defaultEquals,
    value: void 0
  });
})();
function signalValueChanged(node) {
  node.version++;
  producerIncrementEpoch();
  producerNotifyConsumers(node);
}
var NODE = Symbol("node");
var Signal;
((Signal2) => {
  var _a, _brand, brand_fn, _b, _brand2, brand_fn2;
  class State {
    constructor(initialValue, options = {}) {
      __privateAdd(this, _brand);
      __publicField(this, _a);
      const ref = createSignal(initialValue);
      const node = ref[SIGNAL];
      this[NODE] = node;
      node.wrapper = this;
      if (options) {
        const equals = options.equals;
        if (equals) {
          node.equal = equals;
        }
        node.watched = options[Signal2.subtle.watched];
        node.unwatched = options[Signal2.subtle.unwatched];
      }
    }
    get() {
      if (!(0, Signal2.isState)(this))
        throw new TypeError("Wrong receiver type for Signal.State.prototype.get");
      return signalGetFn.call(this[NODE]);
    }
    set(newValue) {
      if (!(0, Signal2.isState)(this))
        throw new TypeError("Wrong receiver type for Signal.State.prototype.set");
      if (isInNotificationPhase()) {
        throw new Error("Writes to signals not permitted during Watcher callback");
      }
      const ref = this[NODE];
      signalSetFn(ref, newValue);
    }
  }
  _a = NODE;
  _brand = /* @__PURE__ */ new WeakSet();
  brand_fn = function() {
  };
  Signal2.isState = (s3) => typeof s3 === "object" && __privateIn(_brand, s3);
  Signal2.State = State;
  class Computed {
    // Create a Signal which evaluates to the value returned by the callback.
    // Callback is called with this signal as the parameter.
    constructor(computation, options) {
      __privateAdd(this, _brand2);
      __publicField(this, _b);
      const ref = createComputed(computation);
      const node = ref[SIGNAL];
      node.consumerAllowSignalWrites = true;
      this[NODE] = node;
      node.wrapper = this;
      if (options) {
        const equals = options.equals;
        if (equals) {
          node.equal = equals;
        }
        node.watched = options[Signal2.subtle.watched];
        node.unwatched = options[Signal2.subtle.unwatched];
      }
    }
    get() {
      if (!(0, Signal2.isComputed)(this))
        throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");
      return computedGet(this[NODE]);
    }
  }
  _b = NODE;
  _brand2 = /* @__PURE__ */ new WeakSet();
  brand_fn2 = function() {
  };
  Signal2.isComputed = (c2) => typeof c2 === "object" && __privateIn(_brand2, c2);
  Signal2.Computed = Computed;
  ((subtle2) => {
    var _a2, _brand3, brand_fn3, _assertSignals, assertSignals_fn;
    function untrack(cb) {
      let output;
      let prevActiveConsumer = null;
      try {
        prevActiveConsumer = setActiveConsumer(null);
        output = cb();
      } finally {
        setActiveConsumer(prevActiveConsumer);
      }
      return output;
    }
    subtle2.untrack = untrack;
    function introspectSources(sink) {
      var _a4;
      var _a3;
      if (!(0, Signal2.isComputed)(sink) && !(0, Signal2.isWatcher)(sink)) {
        throw new TypeError("Called introspectSources without a Computed or Watcher argument");
      }
      return (_a4 = (_a3 = sink[NODE].producerNode) == null ? void 0 : _a3.map((n2) => n2.wrapper)) != null ? _a4 : [];
    }
    subtle2.introspectSources = introspectSources;
    function introspectSinks(signal) {
      var _a4;
      var _a3;
      if (!(0, Signal2.isComputed)(signal) && !(0, Signal2.isState)(signal)) {
        throw new TypeError("Called introspectSinks without a Signal argument");
      }
      return (_a4 = (_a3 = signal[NODE].liveConsumerNode) == null ? void 0 : _a3.map((n2) => n2.wrapper)) != null ? _a4 : [];
    }
    subtle2.introspectSinks = introspectSinks;
    function hasSinks(signal) {
      if (!(0, Signal2.isComputed)(signal) && !(0, Signal2.isState)(signal)) {
        throw new TypeError("Called hasSinks without a Signal argument");
      }
      const liveConsumerNode = signal[NODE].liveConsumerNode;
      if (!liveConsumerNode)
        return false;
      return liveConsumerNode.length > 0;
    }
    subtle2.hasSinks = hasSinks;
    function hasSources(signal) {
      if (!(0, Signal2.isComputed)(signal) && !(0, Signal2.isWatcher)(signal)) {
        throw new TypeError("Called hasSources without a Computed or Watcher argument");
      }
      const producerNode = signal[NODE].producerNode;
      if (!producerNode)
        return false;
      return producerNode.length > 0;
    }
    subtle2.hasSources = hasSources;
    class Watcher {
      // When a (recursive) source of Watcher is written to, call this callback,
      // if it hasn't already been called since the last `watch` call.
      // No signals may be read or written during the notify.
      constructor(notify) {
        __privateAdd(this, _brand3);
        __privateAdd(this, _assertSignals);
        __publicField(this, _a2);
        let node = Object.create(REACTIVE_NODE);
        node.wrapper = this;
        node.consumerMarkedDirty = notify;
        node.consumerIsAlwaysLive = true;
        node.consumerAllowSignalWrites = false;
        node.producerNode = [];
        this[NODE] = node;
      }
      // Add these signals to the Watcher's set, and set the watcher to run its
      // notify callback next time any signal in the set (or one of its dependencies) changes.
      // Can be called with no arguments just to reset the "notified" state, so that
      // the notify callback will be invoked again.
      watch(...signals) {
        if (!(0, Signal2.isWatcher)(this)) {
          throw new TypeError("Called unwatch without Watcher receiver");
        }
        __privateMethod(this, _assertSignals, assertSignals_fn).call(this, signals);
        const node = this[NODE];
        node.dirty = false;
        const prev = setActiveConsumer(node);
        for (const signal of signals) {
          producerAccessed(signal[NODE]);
        }
        setActiveConsumer(prev);
      }
      // Remove these signals from the watched set (e.g., for an effect which is disposed)
      unwatch(...signals) {
        if (!(0, Signal2.isWatcher)(this)) {
          throw new TypeError("Called unwatch without Watcher receiver");
        }
        __privateMethod(this, _assertSignals, assertSignals_fn).call(this, signals);
        const node = this[NODE];
        assertConsumerNode(node);
        for (let i3 = node.producerNode.length - 1; i3 >= 0; i3--) {
          if (signals.includes(node.producerNode[i3].wrapper)) {
            producerRemoveLiveConsumerAtIndex(node.producerNode[i3], node.producerIndexOfThis[i3]);
            const lastIdx = node.producerNode.length - 1;
            node.producerNode[i3] = node.producerNode[lastIdx];
            node.producerIndexOfThis[i3] = node.producerIndexOfThis[lastIdx];
            node.producerNode.length--;
            node.producerIndexOfThis.length--;
            node.nextProducerIndex--;
            if (i3 < node.producerNode.length) {
              const idxConsumer = node.producerIndexOfThis[i3];
              const producer = node.producerNode[i3];
              assertProducerNode(producer);
              producer.liveConsumerIndexOfThis[idxConsumer] = i3;
            }
          }
        }
      }
      // Returns the set of computeds in the Watcher's set which are still yet
      // to be re-evaluated
      getPending() {
        if (!(0, Signal2.isWatcher)(this)) {
          throw new TypeError("Called getPending without Watcher receiver");
        }
        const node = this[NODE];
        return node.producerNode.filter((n2) => n2.dirty).map((n2) => n2.wrapper);
      }
    }
    _a2 = NODE;
    _brand3 = /* @__PURE__ */ new WeakSet();
    brand_fn3 = function() {
    };
    _assertSignals = /* @__PURE__ */ new WeakSet();
    assertSignals_fn = function(signals) {
      for (const signal of signals) {
        if (!(0, Signal2.isComputed)(signal) && !(0, Signal2.isState)(signal)) {
          throw new TypeError("Called watch/unwatch without a Computed or State argument");
        }
      }
    };
    Signal2.isWatcher = (w2) => __privateIn(_brand3, w2);
    subtle2.Watcher = Watcher;
    function currentComputed() {
      var _a3;
      return (_a3 = getActiveConsumer()) == null ? void 0 : _a3.wrapper;
    }
    subtle2.currentComputed = currentComputed;
    subtle2.watched = Symbol("watched");
    subtle2.unwatched = Symbol("unwatched");
  })(Signal2.subtle || (Signal2.subtle = {}));
})(Signal || (Signal = {}));

// node_modules/@lit-labs/signals/lib/signal-watcher.js
var i2 = Symbol("SignalWatcherBrand");
var s = new FinalizationRegistry(({ watcher: t3, signal: i3 }) => {
  t3.unwatch(i3);
});
var h = /* @__PURE__ */ new WeakMap();
function e2(e3) {
  return true === e3[i2] ? (console.warn("SignalWatcher should not be applied to the same class more than once."), e3) : class extends e3 {
    constructor() {
      super(...arguments), this._$St = new Signal.State(0), this._$Si = false, this._$So = true, this._$Sh = /* @__PURE__ */ new Set();
    }
    _$Sl() {
      if (void 0 !== this._$Su)
        return;
      this._$Sv = new Signal.Computed(() => {
        this._$St.get(), super.performUpdate();
      });
      const i3 = this._$Su = new Signal.subtle.Watcher(function() {
        const t3 = h.get(this);
        void 0 !== t3 && (false === t3._$Si && t3.requestUpdate?.(), this.watch());
      });
      h.set(i3, this), s.register(this, { watcher: i3, signal: this._$Sv }), i3.watch(this._$Sv);
    }
    _$Sp() {
      void 0 !== this._$Su && (this._$Su.unwatch(this._$Sv), this._$Sv = void 0, this._$Su = void 0);
    }
    performUpdate() {
      this.isUpdatePending && (this._$Sl(), this._$Si = true, this._$St.set(this._$St.get() + 1), this._$Si = false, this._$Sv.get());
    }
    update(t3) {
      try {
        this._$So ? (this._$So = false, super.update(t3)) : this._$Sh.forEach((t4) => t4.commit());
      } finally {
        this.isUpdatePending = false, this._$Sh.clear();
      }
    }
    requestUpdate(t3, i3, s3) {
      this._$So = true, super.requestUpdate(t3, i3, s3);
    }
    connectedCallback() {
      super.connectedCallback(), this.requestUpdate?.();
    }
    disconnectedCallback() {
      super.disconnectedCallback(), queueMicrotask(() => {
        false === this.isConnected && this._$Sp();
      });
    }
    _(t3) {
      this._$Sh.add(t3);
      const i3 = this._$So;
      this.requestUpdate?.(), this._$So = i3;
    }
    m(t3) {
      this._$Sh.delete(t3);
    }
  };
}

// node_modules/lit-html/directive-helpers.js
var { I: t2 } = j;
var r = (o4) => void 0 === o4.strings;

// node_modules/lit-html/async-directive.js
var s2 = (i3, t3) => {
  var _a;
  const e3 = i3._$AN;
  if (void 0 === e3)
    return false;
  for (const i4 of e3)
    (_a = i4._$AO) == null ? void 0 : _a.call(i4, t3, false), s2(i4, t3);
  return true;
};
var o = (i3) => {
  let t3, e3;
  do {
    if (void 0 === (t3 = i3._$AM))
      break;
    e3 = t3._$AN, e3.delete(i3), i3 = t3;
  } while (0 === (e3 == null ? void 0 : e3.size));
};
var r2 = (i3) => {
  for (let t3; t3 = i3._$AM; i3 = t3) {
    let e3 = t3._$AN;
    if (void 0 === e3)
      t3._$AN = e3 = /* @__PURE__ */ new Set();
    else if (e3.has(i3))
      break;
    e3.add(i3), c(t3);
  }
};
function h2(i3) {
  void 0 !== this._$AN ? (o(this), this._$AM = i3, r2(this)) : this._$AM = i3;
}
function n(i3, t3 = false, e3 = 0) {
  const r5 = this._$AH, h4 = this._$AN;
  if (void 0 !== h4 && 0 !== h4.size)
    if (t3)
      if (Array.isArray(r5))
        for (let i4 = e3; i4 < r5.length; i4++)
          s2(r5[i4], false), o(r5[i4]);
      else
        null != r5 && (s2(r5, false), o(r5));
    else
      s2(this, i3);
}
var c = (i3) => {
  var _a, _b;
  i3.type == t.CHILD && ((_a = i3._$AP) != null ? _a : i3._$AP = n, (_b = i3._$AQ) != null ? _b : i3._$AQ = h2);
};
var f = class extends i {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i3, t3, e3) {
    super._$AT(i3, t3, e3), r2(this), this.isConnected = i3._$AU;
  }
  _$AO(i3, t3 = true) {
    var _a, _b;
    i3 !== this.isConnected && (this.isConnected = i3, i3 ? (_a = this.reconnected) == null ? void 0 : _a.call(this) : (_b = this.disconnected) == null ? void 0 : _b.call(this)), t3 && (s2(this, i3), o(this));
  }
  setValue(t3) {
    if (r(this._$Ct))
      this._$Ct._$AI(t3, this);
    else {
      const i3 = [...this._$Ct._$AH];
      i3[this._$Ci] = t3, this._$Ct._$AI(i3, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
};

// node_modules/@lit-labs/signals/lib/watch.js
var h3 = class extends f {
  _$Sl() {
    if (void 0 !== this._$Su)
      return;
    this._$SW = new Signal.Computed(() => {
      var i4;
      return null === (i4 = this._$Sj) || void 0 === i4 ? void 0 : i4.get();
    });
    const i3 = this._$Su = new Signal.subtle.Watcher(() => {
      var t3;
      null === (t3 = this._$SO) || void 0 === t3 || t3._(this), i3.watch();
    });
    i3.watch(this._$SW);
  }
  _$Sp() {
    var i3;
    void 0 !== this._$Su && (this._$Su.unwatch(this._$SW), this._$SW = void 0, this._$Su = void 0, null === (i3 = this._$SO) || void 0 === i3 || i3.m(this));
  }
  commit() {
    this.setValue(Signal.subtle.untrack(() => {
      var i3;
      return null === (i3 = this._$SW) || void 0 === i3 ? void 0 : i3.get();
    }));
  }
  render(i3) {
    return Signal.subtle.untrack(() => i3.get());
  }
  update(i3, [t3]) {
    var h4, o4;
    return null !== (h4 = this._$SO) && void 0 !== h4 || (this._$SO = null === (o4 = i3.options) || void 0 === o4 ? void 0 : o4.host), t3 !== this._$Sj && void 0 !== this._$Sj && this._$Sp(), this._$Sj = t3, this._$Sl(), Signal.subtle.untrack(() => this._$SW.get());
  }
  disconnected() {
    this._$Sp();
  }
  reconnected() {
    this._$Sl();
  }
};
var o2 = e(h3);

// node_modules/@lit-labs/signals/lib/html-tag.js
var m = (o4) => (t3, ...m2) => o4(t3, ...m2.map((o5) => o5 instanceof Signal.State || o5 instanceof Signal.Computed ? o2(o5) : o5));
var l = m(b);
var r3 = m(w);

// node_modules/@lit-labs/signals/index.js
var l2 = Signal.State;
var o3 = Signal.Computed;
var r4 = (l3, o4) => new Signal.State(l3, o4);

export {
  e2 as e,
  f,
  r4 as r
};
/*! Bundled license information:

signal-polyfill/dist/index.js:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
  (**
   * @license
   * Copyright 2024 Bloomberg Finance L.P.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@lit-labs/signals/lib/signal-watcher.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/signals/lib/watch.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/signals/lib/html-tag.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/signals/index.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
