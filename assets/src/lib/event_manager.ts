// Global event manager for Graphene.JS.events data attributes.

import {
  buildPayload,
  execJS,
  readEvents,
  resolveTargets,
  sanitizePayload,
  type CustomEventConfig
} from "./event_helpers";

type HandlerEntry = [EventTarget, string, EventListener];

type RegistryEntry = {
  raw: string;
  targetSelector: string | null;
  handlers: HandlerEntry[];
};

export interface EventManagerOptions {
  root?: ParentNode;
}

const getLiveSocket = () => (window as any).liveSocket;

export class EventManager {
  private observer: MutationObserver | null = null;
  private registry: Map<HTMLElement, RegistryEntry> = new Map();
  private options: EventManagerOptions;

  constructor(options: EventManagerOptions = {}) {
    this.options = options;
  }

  public connect(): void {
    const doConnect = () => {
      const root = this.options.root ?? document.body ?? document.documentElement;
      if (!root) return;
      this.attachTree(root);
      this.observe(root);
    };

    if (["complete", "interactive"].includes(document.readyState)) {
      doConnect();
    } else {
      document.addEventListener("DOMContentLoaded", doConnect, { once: true });
    }
  }

  public disconnect(): void {
    this.observer?.disconnect();
    this.observer = null;
    this.registry.forEach((entry, el) => this.detachElement(el, entry));
    this.registry.clear();
  }

  private observe(root: ParentNode): void {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => this.attachNode(node));
          mutation.removedNodes.forEach((node) => this.detachNode(node));
        } else if (mutation.type === "attributes") {
          const target = mutation.target;
          if (target instanceof HTMLElement) {
            this.attachElement(target);
          }
        }
      }
    });

    observer.observe(root, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-gf-events", "data-gf-target-selector"]
    });
    this.observer = observer;
  }

  private attachNode(node: Node): void {
    if (!(node instanceof HTMLElement)) return;
    this.attachTree(node);
  }

  private detachNode(node: Node): void {
    if (!(node instanceof HTMLElement)) return;
    if (this.registry.has(node)) {
      this.detachElement(node);
    }
    node.querySelectorAll("[data-gf-events]").forEach((el) => {
      this.detachElement(el as HTMLElement);
    });
  }

  private attachTree(root: ParentNode): void {
    if (root instanceof HTMLElement && root.dataset.gfEvents) {
      this.attachElement(root);
    }
    if ("querySelectorAll" in root) {
      (root as ParentNode).querySelectorAll?.("[data-gf-events]").forEach((el) => {
        this.attachElement(el as HTMLElement);
      });
    }
  }

  private attachElement(el: HTMLElement): void {
    const raw = el.dataset.gfEvents;
    if (!raw) {
      this.detachElement(el);
      return;
    }

    const targetSelector = el.dataset.gfTargetSelector || null;
    const existing = this.registry.get(el);
    if (
      existing &&
      existing.raw === raw &&
      existing.targetSelector === targetSelector
    ) {
      return;
    }

    if (existing) {
      this.detachElement(el, existing);
    }

    const configs = readEvents(el);
    const handlers: HandlerEntry[] = [];

    configs.forEach((config) => {
      const name = config.name;
      if (!name) return;

      resolveTargets(el, config).forEach((target) => {
        const handler: EventListener = (event: Event) => {
          const liveSocket = getLiveSocket();

          if (config.js) {
            execJS(liveSocket, el, config.js, event.type);
          }

          if (config.push) {
            this.pushEvent(liveSocket, el, config, event, target);
          }
        };

        target.addEventListener(name, handler);
        handlers.push([target, name, handler]);
      });
    });

    this.registry.set(el, { raw, targetSelector, handlers });
  }

  private detachElement(el: HTMLElement, entry?: RegistryEntry): void {
    const current = entry ?? this.registry.get(el);
    if (!current) return;
    current.handlers.forEach(([target, name, handler]) => {
      target.removeEventListener(name, handler);
    });
    this.registry.delete(el);
  }

  private pushEvent(
    liveSocket: any,
    sourceEl: HTMLElement,
    config: CustomEventConfig,
    event: Event,
    fallbackTarget: any
  ): void {
    if (!liveSocket || typeof liveSocket.isConnected !== "function") return;
    if (!liveSocket.isConnected()) return;
    if (typeof liveSocket.owner !== "function") return;

    const payload = sanitizePayload(buildPayload(config.payload, event, fallbackTarget));
    const pushTarget = config.push_target;
    const pushEventName = config.push;

    liveSocket.owner(sourceEl, (view: any) => {
      if (!view) return;
      if (pushTarget && typeof view.withinTargets === "function") {
        view.withinTargets(pushTarget, (targetView: any, targetCtx: any) => {
          if (targetView && typeof targetView.pushHookEvent === "function") {
            targetView.pushHookEvent(sourceEl, targetCtx, pushEventName, payload);
          }
        });
        return;
      }

      if (typeof view.pushHookEvent === "function") {
        view.pushHookEvent(sourceEl, null, pushEventName, payload);
      } else if (typeof view.pushEvent === "function") {
        view.pushEvent(pushEventName, payload);
      }
    });
  }
}
