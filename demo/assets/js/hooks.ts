/* Place for custom hooks */

type CustomEventHandler = (event: Event) => void;

type CustomEventTarget = HTMLElement & {
  checked?: boolean;
  toggled?: boolean;
  value?: string;
};

type StorybookCustomEventsHook = {
  _handlers?: Array<[EventTarget, string, CustomEventHandler]>;
  mounted: () => void;
  destroyed: () => void;
};

const parseEvents = (raw: string | undefined): string[] => {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_error) {
    return [];
  }
};

const resolveTargets = (el: HTMLElement): EventTarget[] => {
  const selector = el.dataset.gfTargetSelector;
  if (!selector) return [el];
  return Array.from(el.querySelectorAll(selector));
};

const buildPayload = (event: Event, targetEl: CustomEventTarget | null) => {
  const customEvent = event as CustomEvent;
  const detail = customEvent && customEvent.detail ? customEvent.detail : null;

  let detailChecked: boolean | undefined;
  if (detail && Object.prototype.hasOwnProperty.call(detail, "toggled")) {
    detailChecked = detail.toggled;
  } else if (detail && Object.prototype.hasOwnProperty.call(detail, "checked")) {
    detailChecked = detail.checked;
  }

  const targetChecked = targetEl && typeof targetEl.checked !== "undefined" ? targetEl.checked : null;
  const targetToggled = targetEl && typeof targetEl.toggled !== "undefined" ? targetEl.toggled : null;

  const checked =
    typeof detailChecked !== "undefined" ? detailChecked : targetToggled !== null ? targetToggled : targetChecked;

  return {
    detail,
    value: targetEl && typeof targetEl.value !== "undefined" ? targetEl.value : null,
    checked,
    toggled: targetToggled,
  };
};


const StorybookCustomEvents: StorybookCustomEventsHook = {
  mounted() {
    const events = parseEvents(this.el.dataset.gfEvents);
    const targets = resolveTargets(this.el);

    this._handlers = [];
    events.forEach((name) => {
      if (!name) return;

      targets.forEach((target) => {
        const handler: CustomEventHandler = (event) => {
          const targetEl = (event && (event as any).target) || null;
          const payload = buildPayload(event, targetEl as CustomEventTarget | null);
          this.pushEvent(name, payload);
        };

        target.addEventListener(name, handler as EventListener);
        this._handlers?.push([target, name, handler]);
      });
    });
  },

  destroyed() {
    (this._handlers || []).forEach(([target, name, handler]) => {
      target.removeEventListener(name, handler as EventListener);
    });
    this._handlers = [];
  },
};

export const buildHooks = () => {
  const GrapheneHooks = (window as any).Graphene?.Hooks ?? {};
  return { ...GrapheneHooks, StorybookCustomEvents };
};
