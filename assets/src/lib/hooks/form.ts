// Form-related LiveView hooks.

type FormBridgeEvent = Event & { detail?: any };

type FormBridgeContext = {
  el: HTMLElement;
  _formBridgeHandler?: (event: Event) => void;
  _formBridgeEvent?: string;
  _formBridgeTarget?: EventTarget | null;
  _formBridgeTimer?: number;
};

const resolveTarget = (el: HTMLElement): HTMLElement => {
  const selector = el.dataset.formTargetSelector;
  if (selector) {
    const target = document.querySelector(selector);
    if (target) return target as HTMLElement;
  }
  return el;
};

const whenDefined = (tagName: string | null, cb: () => void) => {
  if (!tagName || !customElements || !customElements.whenDefined) {
    cb();
    return;
  }
  customElements.whenDefined(tagName).then(cb).catch(cb);
};

const parseFileNames = (files: FileList | ArrayLike<any> | null | undefined): any[] => {
  return Array.from(files || []).map((file: any) => {
    if (file && typeof file === "object" && "name" in file) return file.name as string;
    return file;
  });
};

const parseValue = (detail: any, target: any): any => {
  if (detail && Object.prototype.hasOwnProperty.call(detail, "value")) return detail.value;
  if (detail && detail.item && Object.prototype.hasOwnProperty.call(detail.item, "value")) {
    return detail.item.value;
  }
  if (detail && detail.selectedItem && Object.prototype.hasOwnProperty.call(detail.selectedItem, "value")) {
    return detail.selectedItem.value;
  }
  if (detail && Array.isArray(detail.selectedItems)) {
    return detail.selectedItems.map((item: any) =>
      item && Object.prototype.hasOwnProperty.call(item, "value") ? item.value : item
    );
  }
  if (detail && Array.isArray(detail.addedFiles)) {
    return parseFileNames(detail.addedFiles);
  }
  if (target && Object.prototype.hasOwnProperty.call(target, "value")) return target.value;
  if (target && target.files) return parseFileNames(target.files);
  if (target && Object.prototype.hasOwnProperty.call(target, "selectedItem")) {
    const selected = target.selectedItem;
    if (selected && Object.prototype.hasOwnProperty.call(selected, "value")) return selected.value;
  }
  return "";
};

const parseChecked = (detail: any, target: any, detailKey: string | null): boolean => {
  if (detailKey && detail && Object.prototype.hasOwnProperty.call(detail, detailKey)) {
    return Boolean(detail[detailKey]);
  }
  if (detail && Object.prototype.hasOwnProperty.call(detail, "toggled")) return Boolean(detail.toggled);
  if (detail && Object.prototype.hasOwnProperty.call(detail, "checked")) return Boolean(detail.checked);
  if (target && Object.prototype.hasOwnProperty.call(target, "toggled")) return Boolean(target.toggled);
  if (target && Object.prototype.hasOwnProperty.call(target, "checked")) return Boolean(target.checked);
  return false;
};

export const GrapheneFormBridge: any = {
  mounted(this: FormBridgeContext) {
    const bridgeTarget = resolveTarget(this.el);
    const handler = (event: FormBridgeEvent) => {
      const inputId = this.el.dataset.formInput;
      if (!inputId) return;
      const input = document.getElementById(inputId) as HTMLInputElement | null;
      if (!input) return;

      const mode = this.el.dataset.formMode || "value";
      const detailKey = this.el.dataset.formDetail || null;
      const detail = event && event.detail ? event.detail : null;
      const target = event && (event as any).target ? (event as any).target : bridgeTarget;

      if (mode === "boolean") {
        const checked = Boolean(parseChecked(detail, target, detailKey));
        input.value = checked ? "true" : "false";
      } else {
        const value = parseValue(detail, target);
        if (Array.isArray(value)) {
          input.value = JSON.stringify(value);
        } else if (value === null || typeof value === "undefined") {
          input.value = "";
        } else {
          input.value = String(value);
        }
      }

      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.dispatchEvent(new Event("change", { bubbles: true }));
    };

    this._formBridgeHandler = handler;

    const eventName = this.el.dataset.formEvent || "change";
    this._formBridgeEvent = eventName;

    const isNativeEvent = eventName === "input" || eventName === "change";
    const attachNativeListener = () => {
      const shadowTarget =
        bridgeTarget.shadowRoot && bridgeTarget.shadowRoot.querySelector("input, textarea, select");
      if (shadowTarget) {
        this._formBridgeTarget = shadowTarget;
        this._formBridgeTarget.addEventListener(eventName, handler as EventListener);
        return true;
      }
      return false;
    };

    const tagName = (bridgeTarget.tagName || "").toLowerCase();
    whenDefined(tagName, () => {
      if (isNativeEvent) {
        if (!attachNativeListener()) {
          let attempts = 0;
          const retry = () => {
            attempts += 1;
            if (attachNativeListener()) return;
            if (attempts < 20) {
              this._formBridgeTimer = requestAnimationFrame(retry);
            }
          };
          this._formBridgeTimer = requestAnimationFrame(retry);
        }
      } else {
        this._formBridgeTarget = bridgeTarget;
        this._formBridgeTarget.addEventListener(eventName, handler as EventListener);
      }
    });
  },

  destroyed(this: FormBridgeContext) {
    if (this._formBridgeHandler && this._formBridgeEvent && this._formBridgeTarget) {
      this._formBridgeTarget.removeEventListener(
        this._formBridgeEvent,
        this._formBridgeHandler as EventListener
      );
    }
    if (this._formBridgeTimer) {
      cancelAnimationFrame(this._formBridgeTimer);
    }
  }
};
