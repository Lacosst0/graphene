/* dynamic_loader.ts */
import { componentImports as carbonComponentImports } from "./_dynamic_loader_mapping";
import { productComponentImports } from "./_dynamic_loader_mapping_products";
import { ensureFormAssociatedTag } from "./form_associated";

type ComponentImporter = () => Promise<unknown>;

export interface WebComponentManagerOptions {
  hideUntilReady?: boolean;
  readyTimeoutMs?: number;
  loadingClass?: string;
  root?: ParentNode | null;
}

const componentImports = {
  ...carbonComponentImports,
  ...productComponentImports
};
const baseComponentNames = Object.keys(componentImports);
const formComponentNames = baseComponentNames.map((name) => `${name}-form`);
const componentNames = [...baseComponentNames, ...formComponentNames];
const componentSelector = componentNames.join(",");
const componentSet = new Set(componentNames);
const loadedComponents: Record<string, Promise<unknown>> = {};
const numberInputTags = new Set(["cds-number-input", "cds-fluid-number-input"]);
const notificationTags = new Set(["c4p-notification"]);
const patchedNumberInputs = new Set<string>();
const definePatchFlag = "__graphenePatchedDefine";
const originalDefine = customElements.define.bind(customElements);

function normalizeTagName(tagName: string): { tag: string; base: string; isForm: boolean } {
  const lower = tagName.toLowerCase();
  if (lower.endsWith("-form")) {
    return { tag: lower, base: lower.slice(0, -5), isForm: true };
  }
  return { tag: lower, base: lower, isForm: false };
}

function isComponentTag(tagName: string): boolean {
  return componentSet.has(tagName.toLowerCase());
}

function importerForTag(tagName: string): ComponentImporter | undefined {
  const { base } = normalizeTagName(tagName);
  return componentImports[base];
}

function loadComponentByTag(tagName: string): Promise<unknown> | undefined {
  const { tag, base, isForm } = normalizeTagName(tagName);

  if (!loadedComponents[base]) {
    const importer = importerForTag(base);
    if (!importer) {
      console.warn(`No importer found for component: ${base}`);
      return undefined;
    }

    loadedComponents[base] = importer()
      .then((module) => module)
      .catch((err) => {
        console.error(`Error loading ${base}:`, err);
        delete loadedComponents[base];
        throw err;
      });
  }

  const loadPromise = loadedComponents[base];

  if (isForm) {
    loadPromise.then(() => ensureFormAssociatedTag(tag));
  }

  return loadPromise;
}

function readNotificationTimestamp(el: Element): Date | null {
  if (!el.hasAttribute("timestamp")) {
    return null;
  }
  const raw = el.getAttribute("timestamp");
  if (!raw || raw === "null" || raw === "undefined") {
    return null;
  }
  const parsed = Date.parse(raw);
  if (Number.isNaN(parsed)) {
    return null;
  }
  return new Date(parsed);
}

function normalizeNotificationTimestamp(el: Element): void {
  const tagName = el.tagName.toLowerCase();
  if (!notificationTags.has(tagName)) {
    return;
  }

  const apply = () => {
    const value = readNotificationTimestamp(el);
    try {
      (el as any).timestamp = value ?? undefined;
    } catch (_error) {
      // Ignore if the component rejects the property assignment.
    }
  };

  if (customElements.get(tagName)) {
    apply();
  } else {
    customElements.whenDefined(tagName).then(apply);
  }
}

function normalizeNumberInputStep(el: Element): void {
  const tagName = el.tagName.toLowerCase();
  const { base } = normalizeTagName(tagName);
  if (!numberInputTags.has(base)) {
    return;
  }

  const step = el.getAttribute("step");
  const safeStep =
    step === null || step === "" || step === "null" || step === "undefined"
      ? "1"
      : step;
  el.setAttribute("step", safeStep);

  const applyStep = () => {
    (el as any)._step = safeStep;
    (el as any).step = safeStep;
  };

  if (customElements.get(tagName)) {
    applyStep();
  } else {
    customElements.whenDefined(tagName).then(applyStep);
  }
}

function applyNumberInputDescriptor(proto: any): void {
  const descriptor = Object.getOwnPropertyDescriptor(proto, "step");
  if (!descriptor) {
    return;
  }

  const originalGet = descriptor.get;
  const originalSet = descriptor.set;

  Object.defineProperty(proto, "step", {
    configurable: descriptor.configurable ?? true,
    enumerable: descriptor.enumerable ?? true,
    get() {
      const value = (this as any)._step;
      if (value === null || value === undefined) {
        return "1";
      }
      return originalGet ? originalGet.call(this) : String(value);
    },
    set(value: unknown) {
      const safeValue =
        value === null || value === undefined || value === "" ? "1" : value;
      if (originalSet) {
        originalSet.call(this, safeValue);
      } else {
        (this as any)._step = safeValue;
      }
    }
  });

  if (!proto.__grapheneStepPatched) {
    const originalConnected = proto.connectedCallback;
    proto.connectedCallback = function (...args: unknown[]) {
      if (this._step === null || this._step === undefined) {
        const step = this.getAttribute?.("step") || "1";
        this._step = step;
        try {
          this.step = step;
        } catch (_error) {
          // ignore if the component rejects programmatic assignment
        }
      }
      return originalConnected ? originalConnected.apply(this, args) : undefined;
    };
    proto.__grapheneStepPatched = true;
  }
}

function patchNumberInputPrototype(tagName: string): void {
  if (!numberInputTags.has(tagName) || patchedNumberInputs.has(tagName)) {
    return;
  }

  const ctor = customElements.get(tagName) as { prototype?: any } | undefined;
  if (!ctor?.prototype) {
    return;
  }

  applyNumberInputDescriptor(ctor.prototype);
  patchedNumberInputs.add(tagName);
}

function ensureNumberInputPatched(tagName: string): void {
  if (!numberInputTags.has(tagName) || patchedNumberInputs.has(tagName)) {
    return;
  }

  customElements.whenDefined(tagName).then(() => {
    patchNumberInputPrototype(tagName);
  });
}

function ensureDefinePatched(): void {
  const registry = customElements as unknown as Record<string, unknown>;
  if (registry[definePatchFlag]) {
    return;
  }

  registry[definePatchFlag] = true;

  customElements.define = (name, ctor, options) => {
    if (numberInputTags.has(name) && ctor?.prototype) {
      applyNumberInputDescriptor(ctor.prototype);
      patchedNumberInputs.add(name);
    }

    return originalDefine(name, ctor, options);
  };
}

function scanAndLoad(root: ParentNode | null): void {
  if (!root) {
    return;
  }

  if (root instanceof Element && isComponentTag(root.tagName)) {
    normalizeNotificationTimestamp(root);
    normalizeNumberInputStep(root);
    const { base } = normalizeTagName(root.tagName);
    ensureNumberInputPatched(base);
    loadComponentByTag(root.tagName);
  }

  if (!componentSelector || !("querySelectorAll" in root)) {
    return;
  }

  root
    .querySelectorAll(componentSelector)
    .forEach((el) => {
      normalizeNotificationTimestamp(el);
      normalizeNumberInputStep(el);
      const { base } = normalizeTagName(el.tagName);
      ensureNumberInputPatched(base);
      loadComponentByTag(el.tagName);
    });
}

function collectComponentTags(root: ParentNode | null): string[] {
  if (!root) {
    return [];
  }

  const tags = new Set<string>();

  if (root instanceof Element && isComponentTag(root.tagName)) {
    tags.add(root.tagName.toLowerCase());
  }

  if (componentSelector && "querySelectorAll" in root) {
    root
      .querySelectorAll(componentSelector)
      .forEach((el) => tags.add(el.tagName.toLowerCase()));
  }

  return Array.from(tags);
}

async function waitForComponent(tagName: string): Promise<void> {
  const loadPromise = loadComponentByTag(tagName);
  if (loadPromise) {
    await loadPromise;
  }
  await customElements.whenDefined(tagName);
}

export class WebComponentManager {
  private observer: MutationObserver | null = null;
  private options: WebComponentManagerOptions;
  private readyPromise: Promise<void> | null = null;

  constructor(options: WebComponentManagerOptions = {}) {
    this.options = options;
  }

  public connect(): void {
    const doConnect = () => {
      if (this.options.hideUntilReady) {
        this.applyLoadingClass();
        const ready = this.whenReady();
        const timeoutMs = this.options.readyTimeoutMs ?? 0;
        if (timeoutMs > 0) {
          Promise.race([
            ready,
            new Promise((resolve) => setTimeout(resolve, timeoutMs))
          ]).finally(() => this.clearLoadingClass());
        } else {
          ready.finally(() => this.clearLoadingClass());
        }
      }

      ensureDefinePatched();
      ensureNumberInputPatched("cds-number-input");
      ensureNumberInputPatched("cds-fluid-number-input");
      this.loadExistingComponents();
      this.observeDOM();
    };

    if (["complete", "interactive"].includes(document.readyState)) {
      doConnect();
    } else {
      document.addEventListener("DOMContentLoaded", doConnect);
    }
  }

  public disconnect(): void {
    this.observer?.disconnect();
    this.observer = null;
  }

  public whenReady(root: ParentNode | null = this.options.root ?? document.body): Promise<void> {
    if (this.readyPromise) {
      return this.readyPromise;
    }

    this.loadExistingComponents();
    const tags = collectComponentTags(root ?? document.documentElement);

    this.readyPromise = Promise.all(tags.map((tag) => waitForComponent(tag))).then(
      () => undefined
    );

    return this.readyPromise;
  }

  private loadExistingComponents(): void {
    scanAndLoad(document.body ?? document);
  }

  private observeDOM(): void {
    const observerCallback: MutationCallback = (mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof Element || node instanceof DocumentFragment) {
              scanAndLoad(node);
            }
          });
        } else if (mutation.type === "attributes") {
          const target = mutation.target;
          if (
            target instanceof Element &&
            mutation.attributeName === "timestamp"
          ) {
            normalizeNotificationTimestamp(target);
          }
        }
      }
    };

    const observerOptions: MutationObserverInit = {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["timestamp"]
    };
    const root = document.body ?? document.documentElement;
    if (!root) {
      return;
    }

    this.observer = new MutationObserver(observerCallback);
    this.observer.observe(root, observerOptions);
  }

  private applyLoadingClass(): void {
    const className = this.options.loadingClass ?? "graphene-loading";
    document.documentElement?.classList.add(className);
  }

  private clearLoadingClass(): void {
    const className = this.options.loadingClass ?? "graphene-loading";
    document.documentElement?.classList.remove(className);
  }
}

ensureDefinePatched();
ensureNumberInputPatched("cds-number-input");
ensureNumberInputPatched("cds-fluid-number-input");
