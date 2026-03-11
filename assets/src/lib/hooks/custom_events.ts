// Custom event bridge for web components and Phoenix.LiveView.JS.

import {
  buildPayload,
  execJS,
  readEvents,
  resolveTargets,
  type CustomEventConfig
} from "../event_helpers";

type HookHandler = (event: Event) => void;

type GrapheneHook = {
  el: HTMLElement;
  pushEvent: (event: string, payload?: any) => void;
  pushEventTo: (target: any, event: string, payload?: any) => void;
  __view?: () => any;
  _handlers?: Array<[EventTarget, string, HookHandler]>;
};

type GrapheneRootHook = GrapheneHook & {
  attachAll?: () => void;
};

const execViewJS = (hook: any, sourceEl: HTMLElement, encodedJS: string, eventType: string) => {
  const view = hook.__view?.();
  execJS(view?.liveSocket, sourceEl, encodedJS, eventType);
};

export const GrapheneCustomEvents = {
  mounted(this: GrapheneHook) {
    const configs = readEvents(this.el);
    this._handlers = [];
    const handlers = this._handlers;

    configs.forEach((config) => {
      const name = config.name;
      if (!name) return;

      resolveTargets(this.el, config).forEach((target) => {
        const handler: HookHandler = (event: Event) => {
          if (config.js) {
            execViewJS(this, this.el, config.js, event.type);
          }

          if (config.push) {
            const payload = buildPayload(config.payload, event, target);
            if (config.push_target) {
              this.pushEventTo(config.push_target, config.push, payload);
            } else {
              this.pushEvent(config.push, payload);
            }
          }
        };

        target.addEventListener(name, handler as EventListener);
        handlers.push([target, name, handler]);
      });
    });
  },

  destroyed(this: GrapheneHook) {
    (this._handlers || []).forEach(([target, name, handler]: any) => {
      target.removeEventListener(name, handler as EventListener);
    });
    this._handlers = [];
  }
};

export const GrapheneEventsRoot = {
  mounted(this: GrapheneRootHook) {
    this._handlers = [];
    this.attachAll?.();
  },

  updated(this: GrapheneRootHook) {
    this.attachAll?.();
  },

  destroyed(this: GrapheneRootHook) {
    (this._handlers || []).forEach(([target, name, handler]: any) => {
      target.removeEventListener(name, handler as EventListener);
    });
    this._handlers = [];
  },

  attachAll(this: GrapheneRootHook) {
    (this._handlers || []).forEach(([target, name, handler]: any) => {
      target.removeEventListener(name, handler as EventListener);
    });
    this._handlers = [];

    const elements = Array.from(
      this.el.querySelectorAll("[data-gf-events]")
    ) as HTMLElement[];
    if (this.el.dataset.gfEvents) {
      elements.unshift(this.el);
    }

    elements.forEach((element) => {
      const configs = readEvents(element);

      configs.forEach((config) => {
        const name = config.name;
        if (!name) return;

        resolveTargets(element, config).forEach((target) => {
          const handler: HookHandler = (event: Event) => {
            if (config.js) {
              execViewJS(this, element, config.js, event.type);
            }

            if (config.push) {
              const payload = buildPayload(config.payload, event, target);
              if (config.push_target) {
                this.pushEventTo(config.push_target, config.push, payload);
              } else {
                this.pushEvent(config.push, payload);
              }
            }
          };

          target.addEventListener(name, handler as EventListener);
          this._handlers?.push([target, name, handler]);
        });
      });
    });
  }
};
