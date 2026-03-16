// Form-associated wrappers for Carbon web components.

type FormMode = "value" | "boolean" | "json-list";

type FormSpec = {
  baseTag: string;
  formTag: string;
  mode: FormMode;
  valueProp?: string;
  checkedProp?: string;
  events?: string[];
  parseEventValue?: (event: Event, el: HTMLElement) => string;
};

type Importer = () => Promise<any>;

type ChangeHandler = (event: Event) => void;

type FormElementBase = HTMLElement & {
  connectedCallback?(): void;
  disconnectedCallback?(): void;
  updated?(changed: Map<string | number | symbol, unknown>): void;
  formDisabledCallback?(disabled: boolean): void;
  formResetCallback?(): void;
  formStateRestoreCallback?(state: unknown): void;
};

type FormElementClass = { new (...args: any[]): FormElementBase };

const formSpecs: Record<string, FormSpec> = {
  "cds-checkbox": {
    baseTag: "cds-checkbox",
    formTag: "cds-checkbox-form",
    mode: "boolean",
    checkedProp: "checked",
    events: ["cds-checkbox-changed"]
  },
  "cds-toggle": {
    baseTag: "cds-toggle",
    formTag: "cds-toggle-form",
    mode: "boolean",
    checkedProp: "toggled",
    events: ["cds-toggle-changed"]
  },
  "cds-radio-button-group": {
    baseTag: "cds-radio-button-group",
    formTag: "cds-radio-button-group-form",
    mode: "value",
    events: ["cds-radio-button-group-changed"]
  },
  "cds-number-input": {
    baseTag: "cds-number-input",
    formTag: "cds-number-input-form",
    mode: "value",
    events: ["cds-number-input"]
  },
  "cds-fluid-number-input": {
    baseTag: "cds-fluid-number-input",
    formTag: "cds-fluid-number-input-form",
    mode: "value",
    events: ["cds-number-input"]
  },
  "cds-text-input": {
    baseTag: "cds-text-input",
    formTag: "cds-text-input-form",
    mode: "value"
  },
  "cds-fluid-text-input": {
    baseTag: "cds-fluid-text-input",
    formTag: "cds-fluid-text-input-form",
    mode: "value"
  },
  "cds-password-input": {
    baseTag: "cds-password-input",
    formTag: "cds-password-input-form",
    mode: "value"
  },
  "cds-textarea": {
    baseTag: "cds-textarea",
    formTag: "cds-textarea-form",
    mode: "value"
  },
  "cds-fluid-textarea": {
    baseTag: "cds-fluid-textarea",
    formTag: "cds-fluid-textarea-form",
    mode: "value"
  },
  "cds-search": {
    baseTag: "cds-search",
    formTag: "cds-search-form",
    mode: "value",
    events: ["cds-search-input"]
  },
  "cds-fluid-search": {
    baseTag: "cds-fluid-search",
    formTag: "cds-fluid-search-form",
    mode: "value",
    events: ["cds-search-input"]
  },
  "cds-select": {
    baseTag: "cds-select",
    formTag: "cds-select-form",
    mode: "value",
    events: ["cds-select-selected"]
  },
  "cds-fluid-select": {
    baseTag: "cds-fluid-select",
    formTag: "cds-fluid-select-form",
    mode: "value",
    events: ["cds-select-selected"]
  },
  "cds-dropdown": {
    baseTag: "cds-dropdown",
    formTag: "cds-dropdown-form",
    mode: "value",
    events: ["cds-dropdown-selected"]
  },
  "cds-combo-box": {
    baseTag: "cds-combo-box",
    formTag: "cds-combo-box-form",
    mode: "value",
    events: ["cds-combo-box-selected"]
  },
  "cds-multi-select": {
    baseTag: "cds-multi-select",
    formTag: "cds-multi-select-form",
    mode: "json-list",
    events: ["cds-multi-select-selected"],
    parseEventValue: (event, el) => {
      const detail = (event as CustomEvent).detail || {};
      if (Array.isArray(detail.selectedItems)) {
        const values = detail.selectedItems.map((item: any) => item?.value ?? item);
        return JSON.stringify(values);
      }
      return JSON.stringify(parseMultiSelectValues(el));
    }
  },
  "cds-date-picker": {
    baseTag: "cds-date-picker",
    formTag: "cds-date-picker-form",
    mode: "value",
    events: ["cds-date-picker-changed"]
  },
  "cds-time-picker": {
    baseTag: "cds-time-picker",
    formTag: "cds-time-picker-form",
    mode: "value"
  },
  "cds-slider": {
    baseTag: "cds-slider",
    formTag: "cds-slider-form",
    mode: "value",
    events: ["cds-slider-changed"]
  },
  "cds-file-uploader": {
    baseTag: "cds-file-uploader",
    formTag: "cds-file-uploader-form",
    mode: "json-list",
    events: ["cds-file-uploader-button-changed", "cds-file-uploader-drop-container-changed"],
    parseEventValue: (event) => {
      const detail = (event as CustomEvent).detail || {};
      const files = Array.isArray(detail.addedFiles) ? detail.addedFiles : [];
      return JSON.stringify(parseFileNames(files));
    }
  }
};

const importers: Record<string, Importer> = {
  "cds-checkbox": () => import("@carbon/web-components/es/components/checkbox/checkbox.js"),
  "cds-toggle": () => import("@carbon/web-components/es/components/toggle/toggle.js"),
  "cds-radio-button-group": () =>
    import("@carbon/web-components/es/components/radio-button/radio-button-group.js"),
  "cds-number-input": () => import("@carbon/web-components/es/components/number-input/number-input.js"),
  "cds-fluid-number-input": () =>
    import("@carbon/web-components/es/components/fluid-number-input/fluid-number-input.js"),
  "cds-text-input": () => import("@carbon/web-components/es/components/text-input/text-input.js"),
  "cds-fluid-text-input": () =>
    import("@carbon/web-components/es/components/fluid-text-input/fluid-text-input.js"),
  "cds-password-input": () =>
    import("@carbon/web-components/es/components/password-input/password-input.js"),
  "cds-textarea": () => import("@carbon/web-components/es/components/textarea/textarea.js"),
  "cds-fluid-textarea": () =>
    import("@carbon/web-components/es/components/fluid-textarea/fluid-textarea.js"),
  "cds-search": () => import("@carbon/web-components/es/components/search/search.js"),
  "cds-fluid-search": () => import("@carbon/web-components/es/components/fluid-search/fluid-search.js"),
  "cds-select": () => import("@carbon/web-components/es/components/select/select.js"),
  "cds-fluid-select": () => import("@carbon/web-components/es/components/fluid-select/fluid-select.js"),
  "cds-dropdown": () => import("@carbon/web-components/es/components/dropdown/dropdown.js"),
  "cds-combo-box": () => import("@carbon/web-components/es/components/combo-box/combo-box.js"),
  "cds-multi-select": () => import("@carbon/web-components/es/components/multi-select/multi-select.js"),
  "cds-date-picker": () => import("@carbon/web-components/es/components/date-picker/date-picker.js"),
  "cds-time-picker": () => import("@carbon/web-components/es/components/time-picker/time-picker.js"),
  "cds-slider": () => import("@carbon/web-components/es/components/slider/slider.js"),
  "cds-file-uploader": () => import("@carbon/web-components/es/components/file-uploader/file-uploader.js")
};

const resolved = new Set<string>();

const parseFileNames = (files: ArrayLike<any> | null | undefined): string[] => {
  return Array.from(files || []).map((file: any) => {
    if (file && typeof file === "object" && "name" in file) return file.name as string;
    return String(file ?? "");
  });
};

const parseMultiSelectValues = (el: HTMLElement): string[] => {
  const items = Array.from(el.querySelectorAll("cds-multi-select-item[selected]")) as any[];
  if (items.length > 0) {
    return items.map((item) => item?.value ?? item?.getAttribute?.("value") ?? "").filter(Boolean);
  }
  const rawValue = (el as any).value;
  if (typeof rawValue === "string" && rawValue.length > 0) {
    return rawValue
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);
  }
  if (Array.isArray(rawValue)) {
    return rawValue.map((value) => String(value));
  }
  return [];
};

const toFormValue = (value: any): string => {
  if (Array.isArray(value)) return JSON.stringify(value);
  if (value === null || typeof value === "undefined") return "";
  if (typeof value === "boolean") return value ? "true" : "false";
  return String(value);
};

const computeFormValue = (el: HTMLElement, spec: FormSpec): string => {
  if (spec.mode === "boolean") {
    const prop = spec.checkedProp || "checked";
    return (el as any)[prop] ? "true" : "false";
  }

  if (spec.mode === "json-list") {
    return JSON.stringify(parseMultiSelectValues(el));
  }

  const prop = spec.valueProp || "value";
  return toFormValue((el as any)[prop]);
};

const normalizeTag = (tagName: string): { baseTag: string; formTag: string } => {
  const lower = tagName.toLowerCase();
  if (lower.endsWith("-form")) {
    return { baseTag: lower.slice(0, -5), formTag: lower };
  }
  return { baseTag: lower, formTag: `${lower}-form` };
};

const emitNativeChange = (el: HTMLElement): void => {
  const inputEvent = new Event("input", { bubbles: true, composed: true });
  (inputEvent as any).__grapheneSynthetic = true;
  el.dispatchEvent(inputEvent);
  const changeEvent = new Event("change", { bubbles: true, composed: true });
  (changeEvent as any).__grapheneSynthetic = true;
  el.dispatchEvent(changeEvent);
};

const createFormAssociatedClass = (Base: FormElementClass, spec: FormSpec): FormElementClass => {
  class FormAssociatedElement extends Base {
    static formAssociated = true;
    static shadowRootOptions = {
      ...(Base as any).shadowRootOptions,
      delegatesFocus: true
    };

    private _internals: ElementInternals | null = null;
    private _eventValue: string | null = null;
    private _eventValueSet = false;
    private _changeHandler: ChangeHandler | null = null;
    private _boundEvents: string[] = [];

    constructor(...args: any[]) {
      super(...args);
      this._internals = this._attachInternals();
    }

    connectedCallback() {
      if (super.connectedCallback) {
        super.connectedCallback();
      }
      this._bindEvents();
      this._syncFormValue();
    }

    disconnectedCallback() {
      this._unbindEvents();
      if (super.disconnectedCallback) {
        super.disconnectedCallback();
      }
    }

    updated(changedProperties: Map<string | number | symbol, unknown>) {
      if (super.updated) {
        super.updated(changedProperties as any);
      }
      if (this._shouldSync(changedProperties)) {
        this._syncFormValue();
      }
    }

    formDisabledCallback(disabled: boolean) {
      if ("disabled" in this) {
        (this as any).disabled = disabled;
      }
    }

    formResetCallback() {
      this._resetFormValue();
      this._syncFormValue();
    }

    formStateRestoreCallback(state: unknown) {
      this._restoreFormValue(state);
      this._syncFormValue();
    }

    get form(): HTMLFormElement | null {
      return (this._internals && this._internals.form) || this.closest("form");
    }

    private _attachInternals(): ElementInternals | null {
      if (typeof (this as any).attachInternals !== "function") return null;
      try {
        return (this as any).attachInternals();
      } catch (_error) {
        return null;
      }
    }

    private _shouldSync(changed: Map<string | number | symbol, unknown> | null | undefined): boolean {
      if (!changed) return true;
      if (spec.mode === "boolean") {
        const checkedProp = spec.checkedProp || "checked";
        return changed.has(checkedProp) || changed.has("checked") || changed.has("toggled");
      }
      const valueProp = spec.valueProp || "value";
      return changed.has(valueProp) || changed.has("value");
    }

    private _resolveEvents(): string[] {
      const override = this.getAttribute("form-event");
      if (override && override.trim().length > 0) {
        return override
          .split(/[,\s]+/)
          .map((event) => event.trim())
          .filter((event) => event.length > 0);
      }
      return spec.events || [];
    }

    private _bindEvents() {
      const events = this._resolveEvents();
      if (events.length === 0) return;
      const handler: ChangeHandler = (event: Event) => {
        if ((event as any).isTrusted === false && (event as any).__grapheneSynthetic) {
          return;
        }
        if (spec.parseEventValue) {
          this._eventValue = spec.parseEventValue(event, this);
          this._eventValueSet = true;
        }
        this._syncFormValue();
        emitNativeChange(this);
      };
      this._changeHandler = handler;
      this._boundEvents = events;
      events.forEach((eventName) => this.addEventListener(eventName, handler));
    }

    private _unbindEvents() {
      if (!this._changeHandler) return;
      this._boundEvents.forEach((eventName) =>
        this.removeEventListener(eventName, this._changeHandler!)
      );
      this._boundEvents = [];
      this._changeHandler = null;
    }

    private _syncFormValue() {
      if (!this._internals || typeof this._internals.setFormValue !== "function") return;
      let value: string;
      if (this._eventValueSet) {
        value = this._eventValue ?? "";
        this._eventValueSet = false;
      } else {
        value = computeFormValue(this, spec);
      }
      this._internals.setFormValue(value);
    }

    private _resetFormValue() {
      if (spec.mode === "boolean") {
        const prop = spec.checkedProp || "checked";
        (this as any)[prop] = false;
      } else {
        const prop = spec.valueProp || "value";
        if (prop in this) {
          (this as any)[prop] = "";
        }
      }
    }

    private _restoreFormValue(state: unknown) {
      if (spec.mode === "boolean") {
        const prop = spec.checkedProp || "checked";
        (this as any)[prop] = state === "true" || state === true;
      } else {
        const prop = spec.valueProp || "value";
        if (prop in this) {
          (this as any)[prop] = state == null ? "" : String(state);
        }
      }
    }
  }

  if (!Object.getOwnPropertyDescriptor(Base.prototype, "name")) {
    Object.defineProperty(FormAssociatedElement.prototype, "name", {
      configurable: true,
      enumerable: true,
      get() {
        return this.getAttribute("name") || "";
      },
      set(value: unknown) {
        if (value === null || value === undefined || value === "") {
          this.removeAttribute("name");
        } else {
          this.setAttribute("name", String(value));
        }
      }
    });
  }

  return FormAssociatedElement;
};

export const ensureFormAssociatedTag = async (tagName: string): Promise<void> => {
  const { baseTag, formTag } = normalizeTag(tagName);
  const spec = formSpecs[baseTag];
  if (!spec) return;

  if (customElements.get(formTag)) {
    resolved.add(formTag);
    return;
  }

  if (resolved.has(formTag)) return;
  resolved.add(formTag);

  const importer = importers[baseTag];
  if (!importer) return;

  const module = await importer();
  const Base = (module && (module.default || module)) as FormElementClass;
  if (!Base) return;

  if (!customElements.get(formTag)) {
    const FormElement = createFormAssociatedClass(Base, spec);
    customElements.define(formTag, FormElement as CustomElementConstructor);
  }
};
