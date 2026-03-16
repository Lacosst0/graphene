// Shared helpers for Graphene custom event wiring.

export type CustomEventConfig = {
  name?: string;
  push?: string;
  payload?: any;
  js?: string;
  push_target?: any;
  target?: string;
};

export const parseEvents = (raw: string | undefined): CustomEventConfig[] => {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_error) {
    return [];
  }
};

export const readEvents = (el: HTMLElement): CustomEventConfig[] => {
  return parseEvents(el.dataset.gfEvents);
};

export const resolveTargets = (
  el: HTMLElement,
  config?: CustomEventConfig
): EventTarget[] => {
  const selector = config?.target || el.dataset.gfTargetSelector;
  if (!selector) return [el];
  if (selector === ":self") return [el];
  return Array.from(el.querySelectorAll(selector));
};

const normalizeDetail = (event: Event): any | null => {
  const custom = event as CustomEvent;
  if (custom && typeof custom.detail !== "undefined") {
    return custom.detail;
  }
  return null;
};

const readTargetValue = (targetEl: any) => {
  if (!targetEl) return null;
  if (typeof targetEl.value !== "undefined") return targetEl.value;
  return null;
};

const readTargetChecked = (detail: any, targetEl: any) => {
  if (detail && Object.prototype.hasOwnProperty.call(detail, "toggled")) {
    return detail.toggled;
  }
  if (detail && Object.prototype.hasOwnProperty.call(detail, "checked")) {
    return detail.checked;
  }
  if (targetEl && typeof targetEl.toggled !== "undefined") return targetEl.toggled;
  if (targetEl && typeof targetEl.checked !== "undefined") return targetEl.checked;
  return null;
};

const targetPayload = (event: Event, fallbackTarget: any) => {
  const detail = normalizeDetail(event);
  const targetEl = (event && (event as any).target) || fallbackTarget;
  return {
    value: readTargetValue(targetEl),
    checked: readTargetChecked(detail, targetEl),
    toggled: targetEl && typeof targetEl.toggled !== "undefined" ? targetEl.toggled : null
  };
};

const mergePayload = (base: any, extra: any) => {
  if (!extra || typeof extra !== "object") return base;
  return { ...base, ...extra };
};

export const buildPayload = (spec: any, event: Event, fallbackTarget: any) => {
  if (!spec) return {};

  const detail = normalizeDetail(event);
  const target = targetPayload(event, fallbackTarget);

  if (typeof spec === "string") {
    if (spec === "detail") return { detail };
    if (spec === "target") return target;
    if (spec === "all") return { detail, ...target };
    return {};
  }

  if (Array.isArray(spec)) {
    return spec.reduce((acc, item) => mergePayload(acc, buildPayload(item, event, fallbackTarget)), {});
  }

  if (typeof spec === "object") {
    if (Array.isArray(spec.merge)) {
      const merged = spec.merge.reduce(
        (acc: any, item: any) => mergePayload(acc, buildPayload(item, event, fallbackTarget)),
        {}
      );
      return mergePayload(merged, spec.static || {});
    }
    return spec;
  }

  return {};
};

export const execJS = (
  liveSocket: any,
  sourceEl: HTMLElement,
  encodedJS: string,
  eventType?: string
) => {
  if (!encodedJS) return;
  if (!liveSocket || typeof liveSocket.execJS !== "function") return;
  liveSocket.execJS(sourceEl, encodedJS, eventType || "hook");
};

const isDomElement = (value: any): value is Element =>
  typeof Element !== "undefined" && value instanceof Element;

const isDomNode = (value: any): value is Node =>
  typeof Node !== "undefined" && value instanceof Node;

const isDomEvent = (value: any): value is Event =>
  typeof Event !== "undefined" && value instanceof Event;

const isDomWindow = (value: any): value is Window =>
  typeof Window !== "undefined" && value instanceof Window;

const isDomDocument = (value: any): value is Document =>
  typeof Document !== "undefined" && value instanceof Document;

const summarizeElement = (el: Element) => {
  const anyEl = el as any;
  const summary: Record<string, any> = {
    tagName: el.tagName?.toLowerCase?.() ?? null
  };
  if ("id" in anyEl && anyEl.id) summary.id = anyEl.id;
  if ("className" in anyEl && anyEl.className) summary.className = anyEl.className;
  if ("name" in anyEl && anyEl.name) summary.name = anyEl.name;
  if ("value" in anyEl && typeof anyEl.value !== "undefined") summary.value = anyEl.value;
  if ("role" in anyEl && anyEl.getAttribute) {
    const role = anyEl.getAttribute("role");
    if (role) summary.role = role;
  }
  return summary;
};

const summarizeNode = (node: Node) => ({
  nodeName: node.nodeName,
  nodeType: node.nodeType
});

const summarizeEvent = (event: Event) => ({
  type: event.type,
  detail: (event as any).detail
});

export const sanitizePayload = (value: any) => {
  const seen = new WeakSet();

  const replacer = (_key: string, val: any) => {
    if (typeof val === "bigint") return val.toString();
    if (typeof val === "function" || typeof val === "symbol") return undefined;
    if (val === undefined) return undefined;

    if (isDomElement(val)) return summarizeElement(val);
    if (isDomEvent(val)) return summarizeEvent(val);
    if (isDomWindow(val)) return { type: "window" };
    if (isDomDocument(val)) return { type: "document" };
    if (val instanceof Map) return Array.from(val.entries());
    if (val instanceof Set) return Array.from(val.values());
    if (isDomNode(val)) return summarizeNode(val);

    if (val && typeof val === "object") {
      if (seen.has(val)) return "[Circular]";
      seen.add(val);
    }

    return val;
  };

  try {
    const json = JSON.stringify(value ?? {}, replacer);
    if (!json) return {};
    return JSON.parse(json);
  } catch (_error) {
    return {};
  }
};
