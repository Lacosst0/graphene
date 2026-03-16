import {
  __export,
  __spreadProps,
  __spreadValues
} from "./chunks/chunk-G6EI4S4W.js";

// src/polyfills/crypto_random_uuid.ts
(() => {
  const makeRandomUUID = () => {
    const cryptoSource = globalThis.crypto;
    if (cryptoSource && typeof cryptoSource.getRandomValues === "function") {
      const bytes = new Uint8Array(16);
      cryptoSource.getRandomValues(bytes);
      bytes[6] = bytes[6] & 15 | 64;
      bytes[8] = bytes[8] & 63 | 128;
      const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0"));
      return `${hex[0]}${hex[1]}${hex[2]}${hex[3]}-${hex[4]}${hex[5]}-${hex[6]}${hex[7]}-${hex[8]}${hex[9]}-${hex[10]}${hex[11]}${hex[12]}${hex[13]}${hex[14]}${hex[15]}`;
    }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
      const rand = Math.random() * 16;
      const value = char === "x" ? rand : rand % 4 + 8;
      return Math.floor(value).toString(16);
    });
  };
  const ensureRandomUUID = () => {
    const cryptoObj = globalThis.crypto;
    if (cryptoObj && typeof cryptoObj.randomUUID === "function") {
      return;
    }
    const randomUUID = makeRandomUUID;
    const attach = (target) => {
      if (!target || typeof target.randomUUID === "function") {
        return typeof (target == null ? void 0 : target.randomUUID) === "function";
      }
      try {
        Object.defineProperty(target, "randomUUID", {
          value: randomUUID,
          configurable: true
        });
      } catch (_error) {
        try {
          target.randomUUID = randomUUID;
        } catch (_inner) {
        }
      }
      return typeof target.randomUUID === "function";
    };
    if (attach(cryptoObj)) {
      return;
    }
    if (cryptoObj) {
      try {
        if (attach(Object.getPrototypeOf(cryptoObj))) {
          return;
        }
      } catch (_error) {
      }
    }
    const CryptoClass = globalThis.Crypto;
    if ((CryptoClass == null ? void 0 : CryptoClass.prototype) && attach(CryptoClass.prototype)) {
      return;
    }
    if (!cryptoObj) {
      const fallbackCrypto = { randomUUID };
      try {
        Object.defineProperty(globalThis, "crypto", {
          value: fallbackCrypto,
          configurable: true,
          writable: true
        });
      } catch (_error) {
        try {
          globalThis.crypto = fallbackCrypto;
        } catch (_inner) {
        }
      }
    }
  };
  ensureRandomUUID();
})();

// src/lib/hooks/index.ts
var hooks_exports = {};
__export(hooks_exports, {
  BasicComponentsTable: () => BasicComponentsTable,
  GrapheneCustomEvents: () => GrapheneCustomEvents,
  GrapheneEventsRoot: () => GrapheneEventsRoot,
  GrapheneFormBridge: () => GrapheneFormBridge,
  TabsInit: () => TabsInit
});

// src/lib/hooks/table.ts
var TABLE_EVENTS = {
  "cds-table-row-selected": "graphene:table-row-selected",
  "cds-table-row-all-selected": "graphene:table-row-all-selected",
  "cds-table-sorted": "graphene:table-sorted",
  "cds-table-filtered": "graphene:table-filtered",
  "cds-search-input": "graphene:table-search-input",
  "cds-table-batch-actions-cancel-clicked": "graphene:table-batch-cancel"
};
var CARBON_PREFIX = "cds";
var rowId = (row) => {
  var _a;
  if (!row)
    return null;
  if (typeof row === "string" || typeof row === "number")
    return String(row);
  if (typeof row === "object") {
    if (typeof row.rowId === "string" || typeof row.rowId === "number")
      return String(row.rowId);
    if (typeof row.row_id === "string" || typeof row.row_id === "number")
      return String(row.row_id);
    if (typeof row.id === "string" || typeof row.id === "number")
      return String(row.id);
  }
  if ((_a = row.dataset) == null ? void 0 : _a.rowId)
    return row.dataset.rowId;
  if (row.getAttribute) {
    return row.getAttribute("data-row-id") || row.getAttribute("id");
  }
  return row.id || null;
};
var rowIds = (rows) => (rows || []).map((row) => rowId(row)).filter((value) => Boolean(value));
var buildPayload = (event, root) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const detail = event.detail || {};
  const isSimulated = detail.__simulated === true;
  const selectedRowsFromDetail = Array.isArray(detail.selectedRows) ? detail.selectedRows : detail.selectedRows && typeof detail.selectedRows[Symbol.iterator] === "function" ? Array.from(detail.selectedRows) : [];
  const selectedRowsFromTable = !isSimulated && Array.isArray(root._selectedRows) ? root._selectedRows : null;
  const selectedIdFromDetail = rowId(detail.selectedRow || null);
  const selectedRowsFromDom = Array.from(root.querySelectorAll("cds-table-row")).filter(
    (row) => row.hasAttribute("selected") || row.selected
  );
  const selectedIdsFromDom = rowIds(selectedRowsFromDom);
  const selectedIdsFromDetail = rowIds(selectedRowsFromDetail);
  let selectedIds = selectedIdsFromDom;
  if (selectedIds.length === 0) {
    if (selectedIdsFromDetail.length > 0) {
      selectedIds = selectedIdsFromDetail;
    } else if (selectedIdFromDetail) {
      selectedIds = [selectedIdFromDetail];
    } else if (selectedRowsFromTable !== null) {
      selectedIds = rowIds(selectedRowsFromTable);
    }
  }
  const unfilteredRowsFromDetail = Array.isArray(detail.unfilteredRows) ? detail.unfilteredRows : detail.unfilteredRows && typeof detail.unfilteredRows[Symbol.iterator] === "function" ? Array.from(detail.unfilteredRows) : [];
  const unfilteredRows = unfilteredRowsFromDetail.length > 0 ? unfilteredRowsFromDetail : Array.from(root.querySelectorAll("cds-table-row")).filter(
    (row) => !row.hasAttribute("filtered") && !row.filtered
  );
  const columnIndexValue = (_i = (_h = (_g = (_f = (_d = (_b = (_a = detail.sortedHeader) == null ? void 0 : _a.dataset) == null ? void 0 : _b.colIndex) != null ? _d : (_c = detail.sortedHeader) == null ? void 0 : _c.colIndex) != null ? _f : (_e = detail.sortedHeader) == null ? void 0 : _e.columnIndex) != null ? _g : detail.columnIndex) != null ? _h : detail.colIndex) != null ? _i : null;
  const columnIndex = columnIndexValue === null || columnIndexValue === void 0 ? null : Number(columnIndexValue);
  return {
    selected_id: selectedIdFromDetail,
    selected_ids: selectedIds,
    column_index: Number.isNaN(columnIndex) ? null : columnIndex,
    unfiltered_ids: rowIds(unfilteredRows),
    search: detail.value || detail.searchValue || null
  };
};
var selectionSignature = (root) => {
  const selectedRows = Array.from(root.querySelectorAll("cds-table-row")).filter(
    (row) => row.hasAttribute("selected") || row.selected
  );
  const selected = rowIds(selectedRows).sort();
  return selected.join("|");
};
var parseSelectedIds = (root) => {
  const raw = root.dataset.selectedIds;
  if (raw === void 0)
    return null;
  if (raw.trim() === "")
    return /* @__PURE__ */ new Set();
  const ids = raw.split(",").map((value) => value.trim()).filter((value) => value.length > 0);
  return new Set(ids);
};
var applySelectedIdsFromDataset = (root) => {
  const desiredIds = parseSelectedIds(root);
  if (!desiredIds)
    return false;
  const rows = Array.from(root.querySelectorAll("cds-table-row"));
  let changed = false;
  rows.forEach((row) => {
    const id = rowId(row);
    if (!id)
      return;
    const shouldSelect = desiredIds.has(id);
    const currentlySelected = row.hasAttribute("selected") || row.selected;
    if (shouldSelect !== currentlySelected) {
      changed = true;
      if (shouldSelect) {
        row.setAttribute("selected", "");
      } else {
        row.removeAttribute("selected");
      }
      row.selected = shouldSelect;
    }
  });
  return changed;
};
var updateTableSelectionUI = (table, selectedCount) => {
  var _a, _b, _c, _d;
  const tableRows2 = (table == null ? void 0 : table._tableRows) && table._tableRows.length > 0 ? Array.from(table._tableRows) : Array.from(table.querySelectorAll("cds-table-row"));
  const totalSelectableRows = tableRows2.filter(
    (row) => !row.hasAttribute("filtered") && !row.hasAttribute("disabled")
  ).length;
  const headerCheckbox = (_d = (_c = (_b = (_a = table == null ? void 0 : table._tableHeaderRow) == null ? void 0 : _a.shadowRoot) == null ? void 0 : _b.querySelector(`${CARBON_PREFIX}-checkbox`)) == null ? void 0 : _c.shadowRoot) == null ? void 0 : _d.querySelector(`.${CARBON_PREFIX}--checkbox`);
  if (headerCheckbox) {
    headerCheckbox.checked = selectedCount > 0;
    headerCheckbox.indeterminate = selectedCount > 0 && selectedCount < totalSelectableRows;
  }
  if (table == null ? void 0 : table._tableBatchActions) {
    table._tableBatchActions.active = selectedCount > 0;
    table._tableBatchActions.selectedRowsCount = selectedCount;
  }
  if (table == null ? void 0 : table._tableToolbarContent) {
    table._tableToolbarContent.hasBatchActions = selectedCount > 0;
  }
};
var ensureSearchValue = (table) => {
  if (!table)
    return;
  if (table._searchValue === void 0 || table._searchValue === null) {
    table._searchValue = "";
  }
};
var ensureFilterRows = (table) => {
  if (!table || typeof table.filterRows !== "function")
    return;
  if (table._grapheneFilterRowsWrapped)
    return;
  const original = table.filterRows;
  table.filterRows = (rowText, searchString) => {
    const safeRowText = typeof rowText === "string" ? rowText : "";
    const safeSearch = typeof searchString === "string" ? searchString : "";
    try {
      return original.call(table, safeRowText, safeSearch);
    } catch (_error) {
      return safeRowText.toLowerCase().indexOf(safeSearch.toLowerCase()) < 0;
    }
  };
  table._grapheneFilterRowsWrapped = true;
};
var tableRows = (root) => Array.from(root.querySelectorAll("cds-table-row"));
var tableHeaderCells = (root) => Array.from(root.querySelectorAll("cds-table-header-cell"));
var setRowSelected = (row, selected) => {
  if (selected) {
    row.setAttribute("selected", "");
  } else {
    row.removeAttribute("selected");
  }
  row.selected = selected;
};
var applySelection = (hook, selectedIds, sourceRowId, eventName) => {
  const table = hook.el;
  const isRadio = table.radio === true || table.radio === "true" || table.hasAttribute("radio");
  const effectiveSelectedIds = isRadio ? new Set(sourceRowId ? [sourceRowId] : []) : selectedIds;
  const rows = tableRows(table);
  const selectedRows = [];
  rows.forEach((row) => {
    const id = rowId(row);
    if (!id)
      return;
    const shouldSelect = effectiveSelectedIds.has(id);
    setRowSelected(row, shouldSelect);
    if (shouldSelect) {
      selectedRows.push(row);
    }
  });
  table._selectedRows = selectedRows;
  updateTableSelectionUI(table, selectedRows.length);
  hook._basicComponentsTableSelectionSignature = selectionSignature(table);
  const selectedRow = sourceRowId !== null ? rows.find((row) => rowId(row) === sourceRowId) || null : null;
  const payload = buildPayload(
    { detail: { selectedRow, selectedRows } },
    table
  );
  hook.pushEventTo(table, eventName, payload);
};
var applySort = (hook, columnIndex, direction) => {
  const table = hook.el;
  const tbody = table.querySelector("cds-table-body");
  if (!tbody)
    return;
  const rows = tableRows(table);
  const isExpandable = table.expandable === true || table.expandable === "true" || table.hasAttribute("expandable");
  const rowPairs = rows.map((row) => {
    const next = row.nextElementSibling;
    const expanded = next && next.matches && next.matches("cds-table-expanded-row") ? next : null;
    return { row, expanded };
  });
  const sorted = [...rowPairs].sort((rowA, rowB) => {
    var _a, _b, _c, _d;
    const cellA = rowA.row.querySelectorAll("cds-table-cell")[columnIndex];
    const cellB = rowB.row.querySelectorAll("cds-table-cell")[columnIndex];
    const textA = (_b = (_a = cellA == null ? void 0 : cellA.textContent) == null ? void 0 : _a.trim()) != null ? _b : "";
    const textB = (_d = (_c = cellB == null ? void 0 : cellB.textContent) == null ? void 0 : _c.trim()) != null ? _d : "";
    const comparison = textA.localeCompare(textB, void 0, { numeric: true, sensitivity: "base" });
    return direction === "descending" ? -comparison : comparison;
  });
  if (isExpandable) {
    sorted.forEach(({ row, expanded }) => {
      tbody.appendChild(row);
      if (expanded) {
        tbody.appendChild(expanded);
      }
    });
  } else {
    sorted.forEach(({ row }) => tbody.appendChild(row));
  }
  const headers = tableHeaderCells(table);
  headers.forEach((header) => {
    if (header.getAttribute("data-col-index") === String(columnIndex)) {
      header.setAttribute("sort-active", "");
      header.setAttribute("sort-direction", direction);
    } else {
      header.removeAttribute("sort-active");
      header.setAttribute("sort-direction", "none");
    }
  });
  const payload = buildPayload(
    { detail: { sortedHeader: { dataset: { colIndex: String(columnIndex) } } } },
    table
  );
  hook.pushEventTo(table, "graphene:table-sorted", payload);
};
var applySearch = (hook, value) => {
  var _a, _b, _c, _d;
  const table = hook.el;
  const searchValue = value != null ? value : "";
  let unfilteredRows = [];
  if (typeof table._handleFilterRows === "function") {
    table._searchValue = searchValue;
    try {
      table._handleFilterRows();
      unfilteredRows = tableRows(table).filter(
        (row) => !row.hasAttribute("filtered") && !row.filtered
      );
    } catch (_error) {
      const rows = tableRows(table);
      const normalized = searchValue.toLowerCase();
      rows.forEach((row) => {
        var _a2, _b2;
        const rowText = (_b2 = (_a2 = row.textContent) == null ? void 0 : _a2.trim().toLowerCase()) != null ? _b2 : "";
        const filtered = normalized.length > 0 && !rowText.includes(normalized);
        row.filtered = filtered;
        if (filtered) {
          row.setAttribute("filtered", "");
        } else {
          row.removeAttribute("filtered");
          unfilteredRows.push(row);
        }
      });
    }
  } else {
    const rows = tableRows(table);
    const normalized = searchValue.toLowerCase();
    rows.forEach((row) => {
      var _a2, _b2;
      const rowText = (_b2 = (_a2 = row.textContent) == null ? void 0 : _a2.trim().toLowerCase()) != null ? _b2 : "";
      const filtered = normalized.length > 0 && !rowText.includes(normalized);
      row.filtered = filtered;
      if (filtered) {
        row.setAttribute("filtered", "");
      } else {
        row.removeAttribute("filtered");
        unfilteredRows.push(row);
      }
    });
    const headerCheckbox = (_d = (_c = (_b = (_a = table == null ? void 0 : table._tableHeaderRow) == null ? void 0 : _a.shadowRoot) == null ? void 0 : _b.querySelector(`${CARBON_PREFIX}-checkbox`)) == null ? void 0 : _c.shadowRoot) == null ? void 0 : _d.querySelector(`.${CARBON_PREFIX}--checkbox`);
    if (headerCheckbox) {
      headerCheckbox.disabled = unfilteredRows.length === 0;
    }
  }
  const searchPayload = buildPayload({ detail: { value: searchValue } }, table);
  hook.pushEventTo(table, "graphene:table-search-input", searchPayload);
  const filterPayload = buildPayload({ detail: { unfilteredRows } }, table);
  hook.pushEventTo(table, "graphene:table-filtered", filterPayload);
};
var handleSimulation = (hook, detail) => {
  if (!detail || typeof detail.action !== "string")
    return;
  const table = hook.el;
  const rows = tableRows(table);
  const currentSelectedIds = rowIds(
    rows.filter((row) => row.hasAttribute("selected") || row.selected)
  );
  switch (detail.action) {
    case "select_row": {
      const rowIdValue = detail.row_id ? String(detail.row_id) : null;
      if (!rowIdValue)
        return;
      const selectedSet = new Set(currentSelectedIds);
      const shouldSelect = typeof detail.selected === "boolean" ? detail.selected : !selectedSet.has(rowIdValue);
      if (shouldSelect) {
        selectedSet.add(rowIdValue);
      } else {
        selectedSet.delete(rowIdValue);
      }
      applySelection(hook, selectedSet, rowIdValue, "graphene:table-row-selected");
      break;
    }
    case "select_all": {
      const selectableRows = rows.filter(
        (row) => !row.hasAttribute("filtered") && !row.hasAttribute("disabled")
      );
      const selectableIds = rowIds(selectableRows);
      const selectedSet = new Set(currentSelectedIds);
      const shouldSelect = typeof detail.selected === "boolean" ? detail.selected : selectedSet.size < selectableIds.length;
      const nextSet = shouldSelect ? new Set(selectableIds) : /* @__PURE__ */ new Set();
      applySelection(hook, nextSet, null, "graphene:table-row-all-selected");
      break;
    }
    case "select_none": {
      applySelection(hook, /* @__PURE__ */ new Set(), null, "graphene:table-row-all-selected");
      break;
    }
    case "sort": {
      const columnIndex = Number(detail.column_index);
      if (Number.isNaN(columnIndex))
        return;
      const direction = detail.direction === "descending" ? "descending" : "ascending";
      applySort(hook, columnIndex, direction);
      break;
    }
    case "search": {
      const value = detail.value ? String(detail.value) : "";
      applySearch(hook, value);
      break;
    }
    default:
      break;
  }
};
var syncSelection = async (hook) => {
  const root = hook.el;
  await Promise.all([
    customElements.whenDefined("cds-table"),
    customElements.whenDefined("cds-table-row"),
    customElements.whenDefined("cds-table-header-row")
  ]);
  const table = root;
  if (table == null ? void 0 : table.updateComplete) {
    await table.updateComplete;
  }
  const rows = Array.from(root.querySelectorAll("cds-table-row"));
  if (!rows.length)
    return;
  await Promise.all(
    rows.map((row) => row.updateComplete).filter((value) => value && typeof value.then === "function")
  );
  const desiredRows = rows.filter((row) => row.hasAttribute("selected"));
  rows.forEach((row) => {
    const desired = row.hasAttribute("selected");
    if (row.selected !== desired) {
      row.selected = desired;
    }
  });
  const currentRows = Array.isArray(table._selectedRows) ? table._selectedRows : [];
  const desiredSet = new Set(desiredRows);
  const currentSet = new Set(currentRows);
  let changed = false;
  desiredRows.forEach((row) => {
    if (!currentSet.has(row))
      changed = true;
  });
  currentRows.forEach((row) => {
    if (!desiredSet.has(row))
      changed = true;
  });
  if (changed) {
    table._selectedRows = [...desiredRows];
    updateTableSelectionUI(table, desiredRows.length);
  }
};
var syncSelectionWithSignature = (hook) => {
  const root = hook.el;
  const appliedFromDataset = applySelectedIdsFromDataset(root);
  const signature = selectionSignature(root);
  if (!appliedFromDataset && hook._basicComponentsTableSelectionSignature === signature)
    return;
  hook._basicComponentsTableSelectionSignature = signature;
  void syncSelection(hook);
};
var BasicComponentsTable = {
  mounted() {
    const handlers = {};
    Object.entries(TABLE_EVENTS).forEach(([eventName, pushEventName]) => {
      const handler = (event) => {
        this.pushEventTo(this.el, pushEventName, buildPayload(event, this.el));
      };
      handlers[eventName] = handler;
      this.el.addEventListener(eventName, handler);
    });
    this._basicComponentsTableHandlers = handlers;
    const simulatorHandler = (event) => {
      handleSimulation(this, event.detail || {});
    };
    this.el.addEventListener("graphene:table-simulate", simulatorHandler);
    this._basicComponentsTableSimulatorHandler = simulatorHandler;
    ensureSearchValue(this.el);
    ensureFilterRows(this.el);
    syncSelectionWithSignature(this);
  },
  updated() {
    ensureSearchValue(this.el);
    ensureFilterRows(this.el);
    syncSelectionWithSignature(this);
  },
  destroyed() {
    const handlers = this._basicComponentsTableHandlers || {};
    Object.entries(handlers).forEach(([eventName, handler]) => {
      this.el.removeEventListener(eventName, handler);
    });
    this._basicComponentsTableHandlers = {};
    if (this._basicComponentsTableSimulatorHandler) {
      this.el.removeEventListener(
        "graphene:table-simulate",
        this._basicComponentsTableSimulatorHandler
      );
    }
    this._basicComponentsTableSimulatorHandler = null;
  }
};

// src/lib/hooks/form.ts
var resolveTarget = (el) => {
  const selector = el.dataset.formTargetSelector;
  if (selector) {
    const target = document.querySelector(selector);
    if (target)
      return target;
  }
  return el;
};
var whenDefined = (tagName, cb) => {
  if (!tagName || !customElements || !customElements.whenDefined) {
    cb();
    return;
  }
  customElements.whenDefined(tagName).then(cb).catch(cb);
};
var parseFileNames = (files) => {
  return Array.from(files || []).map((file) => {
    if (file && typeof file === "object" && "name" in file)
      return file.name;
    return file;
  });
};
var parseValue = (detail, target) => {
  if (detail && Object.prototype.hasOwnProperty.call(detail, "value"))
    return detail.value;
  if (detail && detail.item && Object.prototype.hasOwnProperty.call(detail.item, "value")) {
    return detail.item.value;
  }
  if (detail && detail.selectedItem && Object.prototype.hasOwnProperty.call(detail.selectedItem, "value")) {
    return detail.selectedItem.value;
  }
  if (detail && Array.isArray(detail.selectedItems)) {
    return detail.selectedItems.map(
      (item) => item && Object.prototype.hasOwnProperty.call(item, "value") ? item.value : item
    );
  }
  if (detail && Array.isArray(detail.addedFiles)) {
    return parseFileNames(detail.addedFiles);
  }
  if (target && Object.prototype.hasOwnProperty.call(target, "value"))
    return target.value;
  if (target && target.files)
    return parseFileNames(target.files);
  if (target && Object.prototype.hasOwnProperty.call(target, "selectedItem")) {
    const selected = target.selectedItem;
    if (selected && Object.prototype.hasOwnProperty.call(selected, "value"))
      return selected.value;
  }
  return "";
};
var parseChecked = (detail, target, detailKey) => {
  if (detailKey && detail && Object.prototype.hasOwnProperty.call(detail, detailKey)) {
    return Boolean(detail[detailKey]);
  }
  if (detail && Object.prototype.hasOwnProperty.call(detail, "toggled"))
    return Boolean(detail.toggled);
  if (detail && Object.prototype.hasOwnProperty.call(detail, "checked"))
    return Boolean(detail.checked);
  if (target && Object.prototype.hasOwnProperty.call(target, "toggled"))
    return Boolean(target.toggled);
  if (target && Object.prototype.hasOwnProperty.call(target, "checked"))
    return Boolean(target.checked);
  return false;
};
var GrapheneFormBridge = {
  mounted() {
    const bridgeTarget = resolveTarget(this.el);
    const handler = (event) => {
      const inputId = this.el.dataset.formInput;
      if (!inputId)
        return;
      const input = document.getElementById(inputId);
      if (!input)
        return;
      const mode = this.el.dataset.formMode || "value";
      const detailKey = this.el.dataset.formDetail || null;
      const detail = event && event.detail ? event.detail : null;
      const target = event && event.target ? event.target : bridgeTarget;
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
      const shadowTarget = bridgeTarget.shadowRoot && bridgeTarget.shadowRoot.querySelector("input, textarea, select");
      if (shadowTarget) {
        this._formBridgeTarget = shadowTarget;
        this._formBridgeTarget.addEventListener(eventName, handler);
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
            if (attachNativeListener())
              return;
            if (attempts < 20) {
              this._formBridgeTimer = requestAnimationFrame(retry);
            }
          };
          this._formBridgeTimer = requestAnimationFrame(retry);
        }
      } else {
        this._formBridgeTarget = bridgeTarget;
        this._formBridgeTarget.addEventListener(eventName, handler);
      }
    });
  },
  destroyed() {
    if (this._formBridgeHandler && this._formBridgeEvent && this._formBridgeTarget) {
      this._formBridgeTarget.removeEventListener(
        this._formBridgeEvent,
        this._formBridgeHandler
      );
    }
    if (this._formBridgeTimer) {
      cancelAnimationFrame(this._formBridgeTimer);
    }
  }
};

// src/lib/event_helpers.ts
var parseEvents = (raw) => {
  if (!raw)
    return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_error) {
    return [];
  }
};
var readEvents = (el) => {
  return parseEvents(el.dataset.gfEvents);
};
var resolveTargets = (el, config) => {
  const selector = (config == null ? void 0 : config.target) || el.dataset.gfTargetSelector;
  if (!selector)
    return [el];
  if (selector === ":self")
    return [el];
  return Array.from(el.querySelectorAll(selector));
};
var normalizeDetail = (event) => {
  const custom = event;
  if (custom && typeof custom.detail !== "undefined") {
    return custom.detail;
  }
  return null;
};
var readTargetValue = (targetEl) => {
  if (!targetEl)
    return null;
  if (typeof targetEl.value !== "undefined")
    return targetEl.value;
  return null;
};
var readTargetChecked = (detail, targetEl) => {
  if (detail && Object.prototype.hasOwnProperty.call(detail, "toggled")) {
    return detail.toggled;
  }
  if (detail && Object.prototype.hasOwnProperty.call(detail, "checked")) {
    return detail.checked;
  }
  if (targetEl && typeof targetEl.toggled !== "undefined")
    return targetEl.toggled;
  if (targetEl && typeof targetEl.checked !== "undefined")
    return targetEl.checked;
  return null;
};
var targetPayload = (event, fallbackTarget) => {
  const detail = normalizeDetail(event);
  const targetEl = event && event.target || fallbackTarget;
  return {
    value: readTargetValue(targetEl),
    checked: readTargetChecked(detail, targetEl),
    toggled: targetEl && typeof targetEl.toggled !== "undefined" ? targetEl.toggled : null
  };
};
var mergePayload = (base, extra) => {
  if (!extra || typeof extra !== "object")
    return base;
  return __spreadValues(__spreadValues({}, base), extra);
};
var buildPayload2 = (spec, event, fallbackTarget) => {
  if (!spec)
    return {};
  const detail = normalizeDetail(event);
  const target = targetPayload(event, fallbackTarget);
  if (typeof spec === "string") {
    if (spec === "detail")
      return { detail };
    if (spec === "target")
      return target;
    if (spec === "all")
      return __spreadValues({ detail }, target);
    return {};
  }
  if (Array.isArray(spec)) {
    return spec.reduce((acc, item) => mergePayload(acc, buildPayload2(item, event, fallbackTarget)), {});
  }
  if (typeof spec === "object") {
    if (Array.isArray(spec.merge)) {
      const merged = spec.merge.reduce(
        (acc, item) => mergePayload(acc, buildPayload2(item, event, fallbackTarget)),
        {}
      );
      return mergePayload(merged, spec.static || {});
    }
    return spec;
  }
  return {};
};
var execJS = (liveSocket, sourceEl, encodedJS, eventType) => {
  if (!encodedJS)
    return;
  if (!liveSocket || typeof liveSocket.execJS !== "function")
    return;
  liveSocket.execJS(sourceEl, encodedJS, eventType || "hook");
};
var isDomElement = (value) => typeof Element !== "undefined" && value instanceof Element;
var isDomNode = (value) => typeof Node !== "undefined" && value instanceof Node;
var isDomEvent = (value) => typeof Event !== "undefined" && value instanceof Event;
var isDomWindow = (value) => typeof Window !== "undefined" && value instanceof Window;
var isDomDocument = (value) => typeof Document !== "undefined" && value instanceof Document;
var summarizeElement = (el) => {
  var _a, _b, _c;
  const anyEl = el;
  const summary = {
    tagName: (_c = (_b = (_a = el.tagName) == null ? void 0 : _a.toLowerCase) == null ? void 0 : _b.call(_a)) != null ? _c : null
  };
  if ("id" in anyEl && anyEl.id)
    summary.id = anyEl.id;
  if ("className" in anyEl && anyEl.className)
    summary.className = anyEl.className;
  if ("name" in anyEl && anyEl.name)
    summary.name = anyEl.name;
  if ("value" in anyEl && typeof anyEl.value !== "undefined")
    summary.value = anyEl.value;
  if ("role" in anyEl && anyEl.getAttribute) {
    const role = anyEl.getAttribute("role");
    if (role)
      summary.role = role;
  }
  return summary;
};
var summarizeNode = (node) => ({
  nodeName: node.nodeName,
  nodeType: node.nodeType
});
var summarizeEvent = (event) => ({
  type: event.type,
  detail: event.detail
});
var sanitizePayload = (value) => {
  const seen = /* @__PURE__ */ new WeakSet();
  const replacer = (_key, val) => {
    if (typeof val === "bigint")
      return val.toString();
    if (typeof val === "function" || typeof val === "symbol")
      return void 0;
    if (val === void 0)
      return void 0;
    if (isDomElement(val))
      return summarizeElement(val);
    if (isDomEvent(val))
      return summarizeEvent(val);
    if (isDomWindow(val))
      return { type: "window" };
    if (isDomDocument(val))
      return { type: "document" };
    if (val instanceof Map)
      return Array.from(val.entries());
    if (val instanceof Set)
      return Array.from(val.values());
    if (isDomNode(val))
      return summarizeNode(val);
    if (val && typeof val === "object") {
      if (seen.has(val))
        return "[Circular]";
      seen.add(val);
    }
    return val;
  };
  try {
    const json = JSON.stringify(value != null ? value : {}, replacer);
    if (!json)
      return {};
    return JSON.parse(json);
  } catch (_error) {
    return {};
  }
};

// src/lib/hooks/custom_events.ts
var execViewJS = (hook, sourceEl, encodedJS, eventType) => {
  var _a;
  const view = (_a = hook.__view) == null ? void 0 : _a.call(hook);
  execJS(view == null ? void 0 : view.liveSocket, sourceEl, encodedJS, eventType);
};
var GrapheneCustomEvents = {
  mounted() {
    const configs = readEvents(this.el);
    this._handlers = [];
    const handlers = this._handlers;
    configs.forEach((config) => {
      const name = config.name;
      if (!name)
        return;
      resolveTargets(this.el, config).forEach((target) => {
        const handler = (event) => {
          if (config.js) {
            execViewJS(this, this.el, config.js, event.type);
          }
          if (config.push) {
            const payload = buildPayload2(config.payload, event, target);
            if (config.push_target) {
              this.pushEventTo(config.push_target, config.push, payload);
            } else {
              this.pushEvent(config.push, payload);
            }
          }
        };
        target.addEventListener(name, handler);
        handlers.push([target, name, handler]);
      });
    });
  },
  destroyed() {
    (this._handlers || []).forEach(([target, name, handler]) => {
      target.removeEventListener(name, handler);
    });
    this._handlers = [];
  }
};
var GrapheneEventsRoot = {
  mounted() {
    var _a;
    this._handlers = [];
    (_a = this.attachAll) == null ? void 0 : _a.call(this);
  },
  updated() {
    var _a;
    (_a = this.attachAll) == null ? void 0 : _a.call(this);
  },
  destroyed() {
    (this._handlers || []).forEach(([target, name, handler]) => {
      target.removeEventListener(name, handler);
    });
    this._handlers = [];
  },
  attachAll() {
    (this._handlers || []).forEach(([target, name, handler]) => {
      target.removeEventListener(name, handler);
    });
    this._handlers = [];
    const elements = Array.from(
      this.el.querySelectorAll("[data-gf-events]")
    );
    if (this.el.dataset.gfEvents) {
      elements.unshift(this.el);
    }
    elements.forEach((element) => {
      const configs = readEvents(element);
      configs.forEach((config) => {
        const name = config.name;
        if (!name)
          return;
        resolveTargets(element, config).forEach((target) => {
          var _a;
          const handler = (event) => {
            if (config.js) {
              execViewJS(this, element, config.js, event.type);
            }
            if (config.push) {
              const payload = buildPayload2(config.payload, event, target);
              if (config.push_target) {
                this.pushEventTo(config.push_target, config.push, payload);
              } else {
                this.pushEvent(config.push, payload);
              }
            }
          };
          target.addEventListener(name, handler);
          (_a = this._handlers) == null ? void 0 : _a.push([target, name, handler]);
        });
      });
    });
  }
};

// src/lib/hooks/tabs.ts
var applyInitialSelection = (root) => {
  const tabs = root;
  const items = Array.from(tabs.querySelectorAll("cds-tab"));
  if (items.length === 0)
    return;
  let selectedItem = items.find(
    (item) => item.selected || item.hasAttribute("selected")
  );
  if (!selectedItem) {
    const desiredValue = tabs.value || tabs.getAttribute("value") || items[0].getAttribute("value");
    selectedItem = items.find(
      (item) => item.value === desiredValue || item.getAttribute("value") === desiredValue
    ) || items[0];
    items.forEach((item) => {
      const isSelected = item === selectedItem;
      item.selected = isSelected;
      if (isSelected) {
        item.setAttribute("selected", "");
      } else {
        item.removeAttribute("selected");
      }
    });
  }
  const targetId = selectedItem == null ? void 0 : selectedItem.getAttribute("target");
  if (targetId) {
    const panel = document.getElementById(targetId);
    panel == null ? void 0 : panel.removeAttribute("hidden");
  }
};
var TabsInit = {
  mounted() {
    applyInitialSelection(this.el);
  },
  updated() {
    applyInitialSelection(this.el);
  }
};

// src/lib/_dynamic_loader_mapping.ts
var componentImports = {
  "cds-accordion": () => import("./chunks/accordion-2R2GJCV3.js"),
  "cds-accordion-item": () => import("./chunks/accordion-2R2GJCV3.js"),
  "cds-accordion-skeleton": () => import("./chunks/accordion-2R2GJCV3.js"),
  "cds-actionable-notification": () => import("./chunks/notification-2F7XCZGW.js"),
  "cds-actionable-notification-button": () => import("./chunks/notification-2F7XCZGW.js"),
  "cds-ai-label": () => import("./chunks/ai-label-MSQQAO5J.js"),
  "cds-ai-label-action-button": () => import("./chunks/ai-label-MSQQAO5J.js"),
  "cds-ai-skeleton-icon": () => import("./chunks/ai-skeleton-OXJZMDKY.js"),
  "cds-ai-skeleton-placeholder": () => import("./chunks/ai-skeleton-OXJZMDKY.js"),
  "cds-ai-skeleton-text": () => import("./chunks/ai-skeleton-OXJZMDKY.js"),
  "cds-badge-indicator": () => import("./chunks/badge-indicator-FRGJT4GI.js"),
  "cds-breadcrumb": () => import("./chunks/breadcrumb-ZRKEJNPA.js"),
  "cds-breadcrumb-item": () => import("./chunks/breadcrumb-ZRKEJNPA.js"),
  "cds-breadcrumb-link": () => import("./chunks/breadcrumb-ZRKEJNPA.js"),
  "cds-breadcrumb-overflow-menu": () => import("./chunks/breadcrumb-ZRKEJNPA.js"),
  "cds-breadcrumb-skeleton": () => import("./chunks/breadcrumb-ZRKEJNPA.js"),
  "cds-button": () => import("./chunks/button-WIA57XQ2.js"),
  "cds-button-set": () => import("./chunks/button-WIA57XQ2.js"),
  "cds-button-set-base": () => import("./chunks/button-WIA57XQ2.js"),
  "cds-button-skeleton": () => import("./chunks/button-WIA57XQ2.js"),
  "cds-callout-notification": () => import("./chunks/notification-2F7XCZGW.js"),
  "cds-chat-button": () => import("./chunks/chat-button-2G6YFUUS.js"),
  "cds-chat-button-skeleton": () => import("./chunks/chat-button-2G6YFUUS.js"),
  "cds-checkbox": () => import("./chunks/checkbox-XMZATRAC.js"),
  "cds-checkbox-group": () => import("./chunks/checkbox-XMZATRAC.js"),
  "cds-checkbox-skeleton": () => import("./chunks/checkbox-XMZATRAC.js"),
  "cds-clickable-tile": () => import("./chunks/tile-2HRIK5G3.js"),
  "cds-code-snippet": () => import("./chunks/code-snippet-FEUR4BCG.js"),
  "cds-code-snippet-skeleton": () => import("./chunks/code-snippet-FEUR4BCG.js"),
  "cds-column": () => import("./chunks/grid-6F73WRNG.js"),
  "cds-column-hang": () => import("./chunks/grid-6F73WRNG.js"),
  "cds-combo-box": () => import("./chunks/combo-box-FIRTDL42.js"),
  "cds-combo-box-item": () => import("./chunks/combo-box-FIRTDL42.js"),
  "cds-combo-button": () => import("./chunks/combo-button-FST2OO6L.js"),
  "cds-contained-list": () => import("./chunks/contained-list-YVSHYODL.js"),
  "cds-contained-list-description": () => import("./chunks/contained-list-YVSHYODL.js"),
  "cds-contained-list-item": () => import("./chunks/contained-list-YVSHYODL.js"),
  "cds-content-switcher": () => import("./chunks/content-switcher-ER3U6PER.js"),
  "cds-content-switcher-item": () => import("./chunks/content-switcher-ER3U6PER.js"),
  "cds-copy": () => import("./chunks/copy-ZOTJNHXY.js"),
  "cds-copy-button": () => import("./chunks/copy-button-OCNPAJB4.js"),
  "cds-date-picker": () => import("./chunks/date-picker-P4JS6AZR.js"),
  "cds-date-picker-input": () => import("./chunks/date-picker-P4JS6AZR.js"),
  "cds-date-picker-input-skeleton": () => import("./chunks/date-picker-P4JS6AZR.js"),
  "cds-definition-tooltip": () => import("./chunks/tooltip-EGI7YSGN.js"),
  "cds-dismissible-tag": () => import("./chunks/tag-APKQYZAW.js"),
  "cds-dropdown": () => import("./chunks/dropdown-YJLPY3C2.js"),
  "cds-dropdown-item": () => import("./chunks/dropdown-YJLPY3C2.js"),
  "cds-dropdown-skeleton": () => import("./chunks/dropdown-YJLPY3C2.js"),
  "cds-expandable-tile": () => import("./chunks/tile-2HRIK5G3.js"),
  "feature-flags": () => import("./chunks/feature-flags-Q4NEPPKH.js"),
  "cds-file-uploader": () => import("./chunks/file-uploader-VNKTDUIT.js"),
  "cds-file-uploader-button": () => import("./chunks/file-uploader-VNKTDUIT.js"),
  "cds-file-uploader-drop-container": () => import("./chunks/file-uploader-VNKTDUIT.js"),
  "cds-file-uploader-item": () => import("./chunks/file-uploader-VNKTDUIT.js"),
  "cds-file-uploader-skeleton": () => import("./chunks/file-uploader-VNKTDUIT.js"),
  "cds-fluid-number-input": () => import("./chunks/fluid-number-input-IWRTOUZP.js"),
  "cds-fluid-number-input-skeleton": () => import("./chunks/fluid-number-input-IWRTOUZP.js"),
  "cds-fluid-search": () => import("./chunks/fluid-search-NPF4GUHH.js"),
  "cds-fluid-search-skeleton": () => import("./chunks/fluid-search-NPF4GUHH.js"),
  "cds-fluid-select": () => import("./chunks/fluid-select-P4L6GCTO.js"),
  "cds-fluid-select-skeleton": () => import("./chunks/fluid-select-P4L6GCTO.js"),
  "cds-fluid-text-input": () => import("./chunks/fluid-text-input-LW6FWXRV.js"),
  "cds-fluid-text-input-skeleton": () => import("./chunks/fluid-text-input-LW6FWXRV.js"),
  "cds-fluid-textarea": () => import("./chunks/fluid-textarea-UXUITDBU.js"),
  "cds-fluid-textarea-skeleton": () => import("./chunks/fluid-textarea-UXUITDBU.js"),
  "cds-fluid-time-picker": () => import("./chunks/fluid-time-picker-GDXLSOMH.js"),
  "cds-fluid-time-picker-select": () => import("./chunks/fluid-time-picker-GDXLSOMH.js"),
  "cds-fluid-time-picker-skeleton": () => import("./chunks/fluid-time-picker-GDXLSOMH.js"),
  "cds-form": () => import("./chunks/form-WNMMCCDI.js"),
  "cds-form-group": () => import("./chunks/form-group-5YN4VXTJ.js"),
  "cds-form-item": () => import("./chunks/form-WNMMCCDI.js"),
  "cds-grid": () => import("./chunks/grid-6F73WRNG.js"),
  "cds-header": () => import("./chunks/ui-shell-FTV4RIXD.js"),
  "cds-header-global-action": () => import("./chunks/ui-shell-FTV4RIXD.js"),
  "cds-header-menu": () => import("./chunks/ui-shell-FTV4RIXD.js"),
  "cds-header-menu-button": () => import("./chunks/ui-shell-FTV4RIXD.js"),
  "cds-header-menu-item": () => import("./chunks/ui-shell-FTV4RIXD.js"),
  "cds-header-name": () => import("./chunks/ui-shell-FTV4RIXD.js"),
  "cds-header-nav": () => import("./chunks/ui-shell-FTV4RIXD.js"),
  "cds-header-nav-item": () => import("./chunks/ui-shell-FTV4RIXD.js"),
  "cds-header-panel": () => import("./chunks/ui-shell-FTV4RIXD.js"),
  "cds-header-side-nav-items": () => import("./chunks/ui-shell-FTV4RIXD.js"),
  "cds-heading": () => import("./chunks/heading-HVM5IX6X.js"),
  "cds-icon": () => import("./chunks/icon-6U4GZJ3F.js"),
  "cds-icon-button": () => import("./chunks/icon-button-KFVSHU4K.js"),
  "cds-icon-indicator": () => import("./chunks/icon-indicator-QYPE4FEV.js"),
  "cds-inline-loading": () => import("./chunks/inline-loading-LAPCIXTU.js"),
  "cds-inline-notification": () => import("./chunks/notification-2F7XCZGW.js"),
  "cds-layer": () => import("./chunks/layer-SBDSKLKE.js"),
  "cds-link": () => import("./chunks/link-FSIPKGMT.js"),
  "cds-list-item": () => import("./chunks/list-THT45XMZ.js"),
  "cds-loading": () => import("./chunks/loading-AK3FSK5Y.js"),
  "cds-menu": () => import("./chunks/menu-KSEZIFH4.js"),
  "cds-menu-button": () => import("./chunks/menu-button-PXH7T572.js"),
  "cds-menu-item": () => import("./chunks/menu-KSEZIFH4.js"),
  "cds-menu-item-divider": () => import("./chunks/menu-KSEZIFH4.js"),
  "cds-menu-item-group": () => import("./chunks/menu-KSEZIFH4.js"),
  "cds-menu-item-radio-group": () => import("./chunks/menu-KSEZIFH4.js"),
  "cds-menu-item-selectable": () => import("./chunks/menu-KSEZIFH4.js"),
  "cds-modal": () => import("./chunks/modal-BZJKC4AL.js"),
  "cds-modal-body": () => import("./chunks/modal-BZJKC4AL.js"),
  "cds-modal-body-content": () => import("./chunks/modal-BZJKC4AL.js"),
  "cds-modal-close-button": () => import("./chunks/modal-BZJKC4AL.js"),
  "cds-modal-footer": () => import("./chunks/modal-BZJKC4AL.js"),
  "cds-modal-footer-button": () => import("./chunks/modal-BZJKC4AL.js"),
  "cds-modal-header": () => import("./chunks/modal-BZJKC4AL.js"),
  "cds-modal-heading": () => import("./chunks/modal-BZJKC4AL.js"),
  "cds-modal-label": () => import("./chunks/modal-BZJKC4AL.js"),
  "cds-multi-select": () => import("./chunks/multi-select-QWXZZBSX.js"),
  "cds-multi-select-item": () => import("./chunks/multi-select-QWXZZBSX.js"),
  "cds-number-input": () => import("./chunks/number-input-W7YGOKJQ.js"),
  "cds-number-input-skeleton": () => import("./chunks/number-input-W7YGOKJQ.js"),
  "cds-operational-tag": () => import("./chunks/tag-APKQYZAW.js"),
  "cds-ordered-list": () => import("./chunks/list-THT45XMZ.js"),
  "cds-overflow-menu": () => import("./chunks/overflow-menu-4ICZIOY2.js"),
  "cds-overflow-menu-body": () => import("./chunks/overflow-menu-4ICZIOY2.js"),
  "cds-overflow-menu-item": () => import("./chunks/overflow-menu-4ICZIOY2.js"),
  "cds-page-header": () => import("./chunks/page-header-FMPT57Y6.js"),
  "cds-page-header-breadcrumb": () => import("./chunks/page-header-FMPT57Y6.js"),
  "cds-page-header-content": () => import("./chunks/page-header-FMPT57Y6.js"),
  "cds-page-header-content-text": () => import("./chunks/page-header-FMPT57Y6.js"),
  "cds-page-header-hero-image": () => import("./chunks/page-header-FMPT57Y6.js"),
  "cds-page-header-tabs": () => import("./chunks/page-header-FMPT57Y6.js"),
  "cds-pagination": () => import("./chunks/pagination-DQHWKNQ6.js"),
  "cds-pagination-nav": () => import("./chunks/pagination-nav-RZUMDEIZ.js"),
  "cds-password-input": () => import("./chunks/password-input-2UWQATC4.js"),
  "cds-password-input-skeleton": () => import("./chunks/password-input-2UWQATC4.js"),
  "cds-popover": () => import("./chunks/popover-BXEYGX53.js"),
  "cds-popover-content": () => import("./chunks/popover-BXEYGX53.js"),
  "cds-progress-bar": () => import("./chunks/progress-bar-YSV2DDZ3.js"),
  "cds-progress-indicator": () => import("./chunks/progress-indicator-G5G4HKR4.js"),
  "cds-progress-indicator-skeleton": () => import("./chunks/progress-indicator-G5G4HKR4.js"),
  "cds-progress-step": () => import("./chunks/progress-indicator-G5G4HKR4.js"),
  "cds-progress-step-skeleton": () => import("./chunks/progress-indicator-G5G4HKR4.js"),
  "cds-radio-button": () => import("./chunks/radio-button-R3FPM7DA.js"),
  "cds-radio-button-group": () => import("./chunks/radio-button-R3FPM7DA.js"),
  "cds-radio-button-skeleton": () => import("./chunks/radio-button-R3FPM7DA.js"),
  "cds-radio-tile": () => import("./chunks/tile-2HRIK5G3.js"),
  "cds-search": () => import("./chunks/search-LMVIKAH7.js"),
  "cds-select": () => import("./chunks/select-2KPXSQMD.js"),
  "cds-select-item": () => import("./chunks/select-2KPXSQMD.js"),
  "cds-select-item-group": () => import("./chunks/select-2KPXSQMD.js"),
  "cds-select-skeleton": () => import("./chunks/select-2KPXSQMD.js"),
  "cds-selectable-tag": () => import("./chunks/tag-APKQYZAW.js"),
  "cds-selectable-tile": () => import("./chunks/tile-2HRIK5G3.js"),
  "cds-shape-indicator": () => import("./chunks/shape-indicator-W5S2UF7V.js"),
  "cds-side-nav": () => import("./chunks/ui-shell-FTV4RIXD.js"),
  "cds-side-nav-divider": () => import("./chunks/ui-shell-FTV4RIXD.js"),
  "cds-side-nav-items": () => import("./chunks/ui-shell-FTV4RIXD.js"),
  "cds-side-nav-link": () => import("./chunks/ui-shell-FTV4RIXD.js"),
  "cds-side-nav-menu": () => import("./chunks/ui-shell-FTV4RIXD.js"),
  "cds-side-nav-menu-item": () => import("./chunks/ui-shell-FTV4RIXD.js"),
  "cds-side-panel": () => import("./chunks/side-panel-WEQMIBH5.js"),
  "cds-skeleton-icon": () => import("./chunks/skeleton-icon-BAJFTOAO.js"),
  "cds-skeleton-placeholder": () => import("./chunks/skeleton-placeholder-HVDWR6DS.js"),
  "cds-skeleton-text": () => import("./chunks/skeleton-text-23HXVW3A.js"),
  "cds-skip-to-content": () => import("./chunks/skip-to-content-JSXYJI2F.js"),
  "cds-slider": () => import("./chunks/slider-G7ZBR5GO.js"),
  "cds-slider-input": () => import("./chunks/slider-G7ZBR5GO.js"),
  "cds-slider-skeleton": () => import("./chunks/slider-G7ZBR5GO.js"),
  "cds-slug": () => import("./chunks/slug-GO3X3ES3.js"),
  "cds-slug-action-button": () => import("./chunks/slug-GO3X3ES3.js"),
  "cds-stack": () => import("./chunks/stack-2YKDPWSA.js"),
  "cds-structured-list": () => import("./chunks/structured-list-APBQ42NU.js"),
  "cds-structured-list-body": () => import("./chunks/structured-list-APBQ42NU.js"),
  "cds-structured-list-cell": () => import("./chunks/structured-list-APBQ42NU.js"),
  "cds-structured-list-head": () => import("./chunks/structured-list-APBQ42NU.js"),
  "cds-structured-list-header-cell": () => import("./chunks/structured-list-APBQ42NU.js"),
  "cds-structured-list-header-cell-skeleton": () => import("./chunks/structured-list-APBQ42NU.js"),
  "cds-structured-list-header-row": () => import("./chunks/structured-list-APBQ42NU.js"),
  "cds-structured-list-row": () => import("./chunks/structured-list-APBQ42NU.js"),
  "cds-switcher": () => import("./chunks/ui-shell-FTV4RIXD.js"),
  "cds-switcher-divider": () => import("./chunks/ui-shell-FTV4RIXD.js"),
  "cds-switcher-item": () => import("./chunks/ui-shell-FTV4RIXD.js"),
  "cds-tab": () => import("./chunks/tabs-JPMADR6A.js"),
  "cds-tab-skeleton": () => import("./chunks/tabs-JPMADR6A.js"),
  "cds-table-batch-actions": () => import("./chunks/data-table-MH6OQK2E.js"),
  "cds-table-body": () => import("./chunks/data-table-MH6OQK2E.js"),
  "cds-table-cell": () => import("./chunks/data-table-MH6OQK2E.js"),
  "cds-table-cell-content": () => import("./chunks/data-table-MH6OQK2E.js"),
  "cds-table": () => import("./chunks/data-table-MH6OQK2E.js"),
  "cds-table-expanded-row": () => import("./chunks/data-table-MH6OQK2E.js"),
  "cds-table-head": () => import("./chunks/data-table-MH6OQK2E.js"),
  "cds-table-header-cell": () => import("./chunks/data-table-MH6OQK2E.js"),
  "cds-table-header-description": () => import("./chunks/data-table-MH6OQK2E.js"),
  "cds-table-header-row": () => import("./chunks/data-table-MH6OQK2E.js"),
  "cds-table-header-title": () => import("./chunks/data-table-MH6OQK2E.js"),
  "cds-table-row": () => import("./chunks/data-table-MH6OQK2E.js"),
  "cds-table-skeleton": () => import("./chunks/data-table-MH6OQK2E.js"),
  "cds-table-toolbar": () => import("./chunks/data-table-MH6OQK2E.js"),
  "cds-table-toolbar-content": () => import("./chunks/data-table-MH6OQK2E.js"),
  "cds-table-toolbar-search": () => import("./chunks/data-table-MH6OQK2E.js"),
  "cds-tabs": () => import("./chunks/tabs-JPMADR6A.js"),
  "cds-tabs-skeleton": () => import("./chunks/tabs-JPMADR6A.js"),
  "cds-tag": () => import("./chunks/tag-APKQYZAW.js"),
  "cds-tag-skeleton": () => import("./chunks/tag-APKQYZAW.js"),
  "cds-tearsheet": () => import("./chunks/tearsheet-PSP4ULFK.js"),
  "cds-text-input": () => import("./chunks/text-input-HOWHTNY7.js"),
  "cds-text-input-skeleton": () => import("./chunks/text-input-HOWHTNY7.js"),
  "cds-textarea": () => import("./chunks/textarea-IBPUY4LD.js"),
  "cds-textarea-skeleton": () => import("./chunks/textarea-IBPUY4LD.js"),
  "cds-tile": () => import("./chunks/tile-2HRIK5G3.js"),
  "cds-tile-above-the-fold-content": () => import("./chunks/tile-2HRIK5G3.js"),
  "cds-tile-below-the-fold-content": () => import("./chunks/tile-2HRIK5G3.js"),
  "cds-tile-group": () => import("./chunks/tile-2HRIK5G3.js"),
  "cds-time-picker": () => import("./chunks/time-picker-AOQHKT3I.js"),
  "cds-time-picker-select": () => import("./chunks/time-picker-AOQHKT3I.js"),
  "cds-toast-notification": () => import("./chunks/notification-2F7XCZGW.js"),
  "cds-toggle": () => import("./chunks/toggle-LDE4223B.js"),
  "cds-toggle-skeleton": () => import("./chunks/toggle-LDE4223B.js"),
  "cds-toggletip": () => import("./chunks/toggle-tip-3KKDUK2W.js"),
  "cds-tooltip": () => import("./chunks/tooltip-EGI7YSGN.js"),
  "cds-tooltip-content": () => import("./chunks/tooltip-EGI7YSGN.js"),
  "cds-tree-node": () => import("./chunks/tree-view-ZNQKUJFN.js"),
  "cds-tree-view": () => import("./chunks/tree-view-ZNQKUJFN.js"),
  "cds-unordered-list": () => import("./chunks/list-THT45XMZ.js")
};

// src/lib/_dynamic_loader_mapping_products.ts
var productComponentImports = {
  "c4p-about-modal": () => import("./chunks/about-modal-WWH2S75W.js"),
  "c4p-big-number": () => import("./chunks/big-number-BXKUTE5Y.js"),
  "c4p-big-number-skeleton": () => import("./chunks/big-number-BXKUTE5Y.js"),
  "c4p-checklist": () => import("./chunks/checklist-KPCRCKVU.js"),
  "c4p-checklist-chart": () => import("./chunks/checklist-KPCRCKVU.js"),
  "c4p-checklist-group": () => import("./chunks/checklist-KPCRCKVU.js"),
  "c4p-checklist-icon": () => import("./chunks/checklist-KPCRCKVU.js"),
  "c4p-checklist-item": () => import("./chunks/checklist-KPCRCKVU.js"),
  "c4p-coachmark": () => import("./chunks/coachmark-SOPF44BO.js"),
  "c4p-coachmark-beacon": () => import("./chunks/coachmark-beacon-HOG5BMHM.js"),
  "c4p-coachmark-body": () => import("./chunks/coachmark-SOPF44BO.js"),
  "c4p-coachmark-header": () => import("./chunks/coachmark-SOPF44BO.js"),
  "c4p-coachmark-tagline": () => import("./chunks/coachmark-tagline-4363UVOB.js"),
  "c4p-full-page-error": () => import("./chunks/full-page-error-DZ5GUW67.js"),
  "c4p-guide-banner": () => import("./chunks/guide-banner-OO2OPQP6.js"),
  "c4p-guide-banner-element": () => import("./chunks/guide-banner-OO2OPQP6.js"),
  "c4p-interstitial-screen": () => import("./chunks/interstitial-screen-O2GMKY5G.js"),
  "c4p-interstitial-screen-body": () => import("./chunks/interstitial-screen-O2GMKY5G.js"),
  "c4p-interstitial-screen-body-item": () => import("./chunks/interstitial-screen-O2GMKY5G.js"),
  "c4p-interstitial-screen-footer": () => import("./chunks/interstitial-screen-O2GMKY5G.js"),
  "c4p-interstitial-screen-header": () => import("./chunks/interstitial-screen-O2GMKY5G.js"),
  "c4p-notification": () => import("./chunks/notification-panel-HTIXKPHE.js"),
  "c4p-notification-footer": () => import("./chunks/notification-panel-HTIXKPHE.js"),
  "c4p-notification-panel": () => import("./chunks/notification-panel-HTIXKPHE.js"),
  "c4p-options-tile": () => import("./chunks/options-tile-CJVNA6CY.js"),
  "c4p-page-header": () => import("./chunks/page-header-6S7W4PAF.js"),
  "c4p-page-header-breadcrumb": () => import("./chunks/page-header-6S7W4PAF.js"),
  "c4p-page-header-content": () => import("./chunks/page-header-6S7W4PAF.js"),
  "c4p-page-header-content-text": () => import("./chunks/page-header-6S7W4PAF.js"),
  "c4p-page-header-hero-image": () => import("./chunks/page-header-6S7W4PAF.js"),
  "c4p-page-header-scroller": () => import("./chunks/page-header-6S7W4PAF.js"),
  "c4p-page-header-tabs": () => import("./chunks/page-header-6S7W4PAF.js"),
  "c4p-page-header-title-breadcrumb": () => import("./chunks/page-header-6S7W4PAF.js"),
  "c4p-side-panel": () => import("./chunks/side-panel-UXHGQKRA.js"),
  "c4p-tearsheet": () => import("./chunks/tearsheet-LNAKKF4V.js"),
  "c4p-truncated-text": () => import("./chunks/truncated-text-JZLHJMQ5.js"),
  "c4p-user-avatar": () => import("./chunks/user-avatar-UCJRUJJV.js")
};

// src/lib/form_associated.ts
var formSpecs = {
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
      const detail = event.detail || {};
      if (Array.isArray(detail.selectedItems)) {
        const values = detail.selectedItems.map((item) => {
          var _a;
          return (_a = item == null ? void 0 : item.value) != null ? _a : item;
        });
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
      const detail = event.detail || {};
      const files = Array.isArray(detail.addedFiles) ? detail.addedFiles : [];
      return JSON.stringify(parseFileNames2(files));
    }
  }
};
var importers = {
  "cds-checkbox": () => import("./chunks/checkbox-DTZHC277.js"),
  "cds-toggle": () => import("./chunks/toggle-JSBYOPYW.js"),
  "cds-radio-button-group": () => import("./chunks/radio-button-group-GCZAF4JV.js"),
  "cds-number-input": () => import("./chunks/number-input-TEE2JY6D.js"),
  "cds-fluid-number-input": () => import("./chunks/fluid-number-input-PKBAM6JH.js"),
  "cds-text-input": () => import("./chunks/text-input-EEEL3FG6.js"),
  "cds-fluid-text-input": () => import("./chunks/fluid-text-input-L7TYJKV3.js"),
  "cds-password-input": () => import("./chunks/password-input-2LI7XUW2.js"),
  "cds-textarea": () => import("./chunks/textarea-AB3TYOMW.js"),
  "cds-fluid-textarea": () => import("./chunks/fluid-textarea-6LZRL652.js"),
  "cds-search": () => import("./chunks/search-7MMQN535.js"),
  "cds-fluid-search": () => import("./chunks/fluid-search-W2HSR4H6.js"),
  "cds-select": () => import("./chunks/select-IWALEUHS.js"),
  "cds-fluid-select": () => import("./chunks/fluid-select-H7J4SSNI.js"),
  "cds-dropdown": () => import("./chunks/dropdown-5YE57H5D.js"),
  "cds-combo-box": () => import("./chunks/combo-box-WSOTJFE4.js"),
  "cds-multi-select": () => import("./chunks/multi-select-HJQJ2PB7.js"),
  "cds-date-picker": () => import("./chunks/date-picker-B4HIGEEK.js"),
  "cds-time-picker": () => import("./chunks/time-picker-IX4JSJFB.js"),
  "cds-slider": () => import("./chunks/slider-THJH7BXB.js"),
  "cds-file-uploader": () => import("./chunks/file-uploader-64SAZ2WM.js")
};
var resolved = /* @__PURE__ */ new Set();
var parseFileNames2 = (files) => {
  return Array.from(files || []).map((file) => {
    if (file && typeof file === "object" && "name" in file)
      return file.name;
    return String(file != null ? file : "");
  });
};
var parseMultiSelectValues = (el) => {
  const items = Array.from(el.querySelectorAll("cds-multi-select-item[selected]"));
  if (items.length > 0) {
    return items.map((item) => {
      var _a, _b, _c;
      return (_c = (_b = item == null ? void 0 : item.value) != null ? _b : (_a = item == null ? void 0 : item.getAttribute) == null ? void 0 : _a.call(item, "value")) != null ? _c : "";
    }).filter(Boolean);
  }
  const rawValue = el.value;
  if (typeof rawValue === "string" && rawValue.length > 0) {
    return rawValue.split(",").map((value) => value.trim()).filter(Boolean);
  }
  if (Array.isArray(rawValue)) {
    return rawValue.map((value) => String(value));
  }
  return [];
};
var toFormValue = (value) => {
  if (Array.isArray(value))
    return JSON.stringify(value);
  if (value === null || typeof value === "undefined")
    return "";
  if (typeof value === "boolean")
    return value ? "true" : "false";
  return String(value);
};
var computeFormValue = (el, spec) => {
  if (spec.mode === "boolean") {
    const prop2 = spec.checkedProp || "checked";
    return el[prop2] ? "true" : "false";
  }
  if (spec.mode === "json-list") {
    return JSON.stringify(parseMultiSelectValues(el));
  }
  const prop = spec.valueProp || "value";
  return toFormValue(el[prop]);
};
var normalizeTag = (tagName) => {
  const lower = tagName.toLowerCase();
  if (lower.endsWith("-form")) {
    return { baseTag: lower.slice(0, -5), formTag: lower };
  }
  return { baseTag: lower, formTag: `${lower}-form` };
};
var emitNativeChange = (el) => {
  const inputEvent = new Event("input", { bubbles: true, composed: true });
  inputEvent.__grapheneSynthetic = true;
  el.dispatchEvent(inputEvent);
  const changeEvent = new Event("change", { bubbles: true, composed: true });
  changeEvent.__grapheneSynthetic = true;
  el.dispatchEvent(changeEvent);
};
var createFormAssociatedClass = (Base, spec) => {
  class FormAssociatedElement extends Base {
    constructor(...args) {
      super(...args);
      this._internals = null;
      this._eventValue = null;
      this._eventValueSet = false;
      this._changeHandler = null;
      this._boundEvents = [];
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
    updated(changedProperties) {
      if (super.updated) {
        super.updated(changedProperties);
      }
      if (this._shouldSync(changedProperties)) {
        this._syncFormValue();
      }
    }
    formDisabledCallback(disabled) {
      if ("disabled" in this) {
        this.disabled = disabled;
      }
    }
    formResetCallback() {
      this._resetFormValue();
      this._syncFormValue();
    }
    formStateRestoreCallback(state) {
      this._restoreFormValue(state);
      this._syncFormValue();
    }
    get form() {
      return this._internals && this._internals.form || this.closest("form");
    }
    _attachInternals() {
      if (typeof this.attachInternals !== "function")
        return null;
      try {
        return this.attachInternals();
      } catch (_error) {
        return null;
      }
    }
    _shouldSync(changed) {
      if (!changed)
        return true;
      if (spec.mode === "boolean") {
        const checkedProp = spec.checkedProp || "checked";
        return changed.has(checkedProp) || changed.has("checked") || changed.has("toggled");
      }
      const valueProp = spec.valueProp || "value";
      return changed.has(valueProp) || changed.has("value");
    }
    _resolveEvents() {
      const override = this.getAttribute("form-event");
      if (override && override.trim().length > 0) {
        return override.split(/[,\s]+/).map((event) => event.trim()).filter((event) => event.length > 0);
      }
      return spec.events || [];
    }
    _bindEvents() {
      const events = this._resolveEvents();
      if (events.length === 0)
        return;
      const handler = (event) => {
        if (event.isTrusted === false && event.__grapheneSynthetic) {
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
    _unbindEvents() {
      if (!this._changeHandler)
        return;
      this._boundEvents.forEach(
        (eventName) => this.removeEventListener(eventName, this._changeHandler)
      );
      this._boundEvents = [];
      this._changeHandler = null;
    }
    _syncFormValue() {
      var _a;
      if (!this._internals || typeof this._internals.setFormValue !== "function")
        return;
      let value;
      if (this._eventValueSet) {
        value = (_a = this._eventValue) != null ? _a : "";
        this._eventValueSet = false;
      } else {
        value = computeFormValue(this, spec);
      }
      this._internals.setFormValue(value);
    }
    _resetFormValue() {
      if (spec.mode === "boolean") {
        const prop = spec.checkedProp || "checked";
        this[prop] = false;
      } else {
        const prop = spec.valueProp || "value";
        if (prop in this) {
          this[prop] = "";
        }
      }
    }
    _restoreFormValue(state) {
      if (spec.mode === "boolean") {
        const prop = spec.checkedProp || "checked";
        this[prop] = state === "true" || state === true;
      } else {
        const prop = spec.valueProp || "value";
        if (prop in this) {
          this[prop] = state == null ? "" : String(state);
        }
      }
    }
  }
  FormAssociatedElement.formAssociated = true;
  FormAssociatedElement.shadowRootOptions = __spreadProps(__spreadValues({}, Base.shadowRootOptions), {
    delegatesFocus: true
  });
  if (!Object.getOwnPropertyDescriptor(Base.prototype, "name")) {
    Object.defineProperty(FormAssociatedElement.prototype, "name", {
      configurable: true,
      enumerable: true,
      get() {
        return this.getAttribute("name") || "";
      },
      set(value) {
        if (value === null || value === void 0 || value === "") {
          this.removeAttribute("name");
        } else {
          this.setAttribute("name", String(value));
        }
      }
    });
  }
  return FormAssociatedElement;
};
var ensureFormAssociatedTag = async (tagName) => {
  const { baseTag, formTag } = normalizeTag(tagName);
  const spec = formSpecs[baseTag];
  if (!spec)
    return;
  if (customElements.get(formTag)) {
    resolved.add(formTag);
    return;
  }
  if (resolved.has(formTag))
    return;
  resolved.add(formTag);
  const importer = importers[baseTag];
  if (!importer)
    return;
  const module = await importer();
  const Base = module && (module.default || module);
  if (!Base)
    return;
  if (!customElements.get(formTag)) {
    const FormElement = createFormAssociatedClass(Base, spec);
    customElements.define(formTag, FormElement);
  }
};

// src/lib/dynamic_loader.ts
var componentImports2 = __spreadValues(__spreadValues({}, componentImports), productComponentImports);
var baseComponentNames = Object.keys(componentImports2);
var formComponentNames = baseComponentNames.map((name) => `${name}-form`);
var componentNames = [...baseComponentNames, ...formComponentNames];
var componentSelector = componentNames.join(",");
var componentSet = new Set(componentNames);
var loadedComponents = {};
var numberInputTags = /* @__PURE__ */ new Set(["cds-number-input", "cds-fluid-number-input"]);
var notificationTags = /* @__PURE__ */ new Set(["c4p-notification"]);
var patchedNumberInputs = /* @__PURE__ */ new Set();
var definePatchFlag = "__graphenePatchedDefine";
var originalDefine = customElements.define.bind(customElements);
function normalizeTagName(tagName) {
  const lower = tagName.toLowerCase();
  if (lower.endsWith("-form")) {
    return { tag: lower, base: lower.slice(0, -5), isForm: true };
  }
  return { tag: lower, base: lower, isForm: false };
}
function isComponentTag(tagName) {
  return componentSet.has(tagName.toLowerCase());
}
function importerForTag(tagName) {
  const { base } = normalizeTagName(tagName);
  return componentImports2[base];
}
function loadComponentByTag(tagName) {
  const { tag, base, isForm } = normalizeTagName(tagName);
  if (!loadedComponents[base]) {
    const importer = importerForTag(base);
    if (!importer) {
      console.warn(`No importer found for component: ${base}`);
      return void 0;
    }
    loadedComponents[base] = importer().then((module) => module).catch((err) => {
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
function readNotificationTimestamp(el) {
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
function normalizeNotificationTimestamp(el) {
  const tagName = el.tagName.toLowerCase();
  if (!notificationTags.has(tagName)) {
    return;
  }
  const apply = () => {
    const value = readNotificationTimestamp(el);
    try {
      el.timestamp = value != null ? value : void 0;
    } catch (_error) {
    }
  };
  if (customElements.get(tagName)) {
    apply();
  } else {
    customElements.whenDefined(tagName).then(apply);
  }
}
function normalizeNumberInputStep(el) {
  const tagName = el.tagName.toLowerCase();
  const { base } = normalizeTagName(tagName);
  if (!numberInputTags.has(base)) {
    return;
  }
  const step = el.getAttribute("step");
  const safeStep = step === null || step === "" || step === "null" || step === "undefined" ? "1" : step;
  el.setAttribute("step", safeStep);
  const applyStep = () => {
    el._step = safeStep;
    el.step = safeStep;
  };
  if (customElements.get(tagName)) {
    applyStep();
  } else {
    customElements.whenDefined(tagName).then(applyStep);
  }
}
function applyNumberInputDescriptor(proto) {
  var _a, _b;
  const descriptor = Object.getOwnPropertyDescriptor(proto, "step");
  if (!descriptor) {
    return;
  }
  const originalGet = descriptor.get;
  const originalSet = descriptor.set;
  Object.defineProperty(proto, "step", {
    configurable: (_a = descriptor.configurable) != null ? _a : true,
    enumerable: (_b = descriptor.enumerable) != null ? _b : true,
    get() {
      const value = this._step;
      if (value === null || value === void 0) {
        return "1";
      }
      return originalGet ? originalGet.call(this) : String(value);
    },
    set(value) {
      const safeValue = value === null || value === void 0 || value === "" ? "1" : value;
      if (originalSet) {
        originalSet.call(this, safeValue);
      } else {
        this._step = safeValue;
      }
    }
  });
  if (!proto.__grapheneStepPatched) {
    const originalConnected = proto.connectedCallback;
    proto.connectedCallback = function(...args) {
      var _a2;
      if (this._step === null || this._step === void 0) {
        const step = ((_a2 = this.getAttribute) == null ? void 0 : _a2.call(this, "step")) || "1";
        this._step = step;
        try {
          this.step = step;
        } catch (_error) {
        }
      }
      return originalConnected ? originalConnected.apply(this, args) : void 0;
    };
    proto.__grapheneStepPatched = true;
  }
}
function patchNumberInputPrototype(tagName) {
  if (!numberInputTags.has(tagName) || patchedNumberInputs.has(tagName)) {
    return;
  }
  const ctor = customElements.get(tagName);
  if (!(ctor == null ? void 0 : ctor.prototype)) {
    return;
  }
  applyNumberInputDescriptor(ctor.prototype);
  patchedNumberInputs.add(tagName);
}
function ensureNumberInputPatched(tagName) {
  if (!numberInputTags.has(tagName) || patchedNumberInputs.has(tagName)) {
    return;
  }
  customElements.whenDefined(tagName).then(() => {
    patchNumberInputPrototype(tagName);
  });
}
function ensureDefinePatched() {
  const registry = customElements;
  if (registry[definePatchFlag]) {
    return;
  }
  registry[definePatchFlag] = true;
  customElements.define = (name, ctor, options) => {
    if (numberInputTags.has(name) && (ctor == null ? void 0 : ctor.prototype)) {
      applyNumberInputDescriptor(ctor.prototype);
      patchedNumberInputs.add(name);
    }
    return originalDefine(name, ctor, options);
  };
}
function scanAndLoad(root) {
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
  root.querySelectorAll(componentSelector).forEach((el) => {
    normalizeNotificationTimestamp(el);
    normalizeNumberInputStep(el);
    const { base } = normalizeTagName(el.tagName);
    ensureNumberInputPatched(base);
    loadComponentByTag(el.tagName);
  });
}
function collectComponentTags(root) {
  if (!root) {
    return [];
  }
  const tags = /* @__PURE__ */ new Set();
  if (root instanceof Element && isComponentTag(root.tagName)) {
    tags.add(root.tagName.toLowerCase());
  }
  if (componentSelector && "querySelectorAll" in root) {
    root.querySelectorAll(componentSelector).forEach((el) => tags.add(el.tagName.toLowerCase()));
  }
  return Array.from(tags);
}
async function waitForComponent(tagName) {
  const loadPromise = loadComponentByTag(tagName);
  if (loadPromise) {
    await loadPromise;
  }
  await customElements.whenDefined(tagName);
}
var WebComponentManager = class {
  constructor(options = {}) {
    this.observer = null;
    this.readyPromise = null;
    this.options = options;
  }
  connect() {
    const doConnect = () => {
      var _a;
      if (this.options.hideUntilReady) {
        this.applyLoadingClass();
        const ready = this.whenReady();
        const timeoutMs = (_a = this.options.readyTimeoutMs) != null ? _a : 0;
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
  disconnect() {
    var _a;
    (_a = this.observer) == null ? void 0 : _a.disconnect();
    this.observer = null;
  }
  whenReady(root = ((_a) => (_a = this.options.root) != null ? _a : document.body)()) {
    if (this.readyPromise) {
      return this.readyPromise;
    }
    this.loadExistingComponents();
    const tags = collectComponentTags(root != null ? root : document.documentElement);
    this.readyPromise = Promise.all(tags.map((tag) => waitForComponent(tag))).then(
      () => void 0
    );
    return this.readyPromise;
  }
  loadExistingComponents() {
    var _a;
    scanAndLoad((_a = document.body) != null ? _a : document);
  }
  observeDOM() {
    var _a;
    const observerCallback = (mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof Element || node instanceof DocumentFragment) {
              scanAndLoad(node);
            }
          });
        } else if (mutation.type === "attributes") {
          const target = mutation.target;
          if (target instanceof Element && mutation.attributeName === "timestamp") {
            normalizeNotificationTimestamp(target);
          }
        }
      }
    };
    const observerOptions = {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["timestamp"]
    };
    const root = (_a = document.body) != null ? _a : document.documentElement;
    if (!root) {
      return;
    }
    this.observer = new MutationObserver(observerCallback);
    this.observer.observe(root, observerOptions);
  }
  applyLoadingClass() {
    var _a, _b;
    const className = (_a = this.options.loadingClass) != null ? _a : "graphene-loading";
    (_b = document.documentElement) == null ? void 0 : _b.classList.add(className);
  }
  clearLoadingClass() {
    var _a, _b;
    const className = (_a = this.options.loadingClass) != null ? _a : "graphene-loading";
    (_b = document.documentElement) == null ? void 0 : _b.classList.remove(className);
  }
};
ensureDefinePatched();
ensureNumberInputPatched("cds-number-input");
ensureNumberInputPatched("cds-fluid-number-input");

// src/lib/event_manager.ts
var getLiveSocket = () => window.liveSocket;
var EventManager = class {
  constructor(options = {}) {
    this.observer = null;
    this.registry = /* @__PURE__ */ new Map();
    this.options = options;
  }
  connect() {
    const doConnect = () => {
      var _a, _b;
      const root = (_b = (_a = this.options.root) != null ? _a : document.body) != null ? _b : document.documentElement;
      if (!root)
        return;
      this.attachTree(root);
      this.observe(root);
    };
    if (["complete", "interactive"].includes(document.readyState)) {
      doConnect();
    } else {
      document.addEventListener("DOMContentLoaded", doConnect, { once: true });
    }
  }
  disconnect() {
    var _a;
    (_a = this.observer) == null ? void 0 : _a.disconnect();
    this.observer = null;
    this.registry.forEach((entry, el) => this.detachElement(el, entry));
    this.registry.clear();
  }
  observe(root) {
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
  attachNode(node) {
    if (!(node instanceof HTMLElement))
      return;
    this.attachTree(node);
  }
  detachNode(node) {
    if (!(node instanceof HTMLElement))
      return;
    if (this.registry.has(node)) {
      this.detachElement(node);
    }
    node.querySelectorAll("[data-gf-events]").forEach((el) => {
      this.detachElement(el);
    });
  }
  attachTree(root) {
    var _a;
    if (root instanceof HTMLElement && root.dataset.gfEvents) {
      this.attachElement(root);
    }
    if ("querySelectorAll" in root) {
      (_a = root.querySelectorAll) == null ? void 0 : _a.call(root, "[data-gf-events]").forEach((el) => {
        this.attachElement(el);
      });
    }
  }
  attachElement(el) {
    const raw = el.dataset.gfEvents;
    if (!raw) {
      this.detachElement(el);
      return;
    }
    const targetSelector = el.dataset.gfTargetSelector || null;
    const existing = this.registry.get(el);
    if (existing && existing.raw === raw && existing.targetSelector === targetSelector) {
      return;
    }
    if (existing) {
      this.detachElement(el, existing);
    }
    const configs = readEvents(el);
    const handlers = [];
    configs.forEach((config) => {
      const name = config.name;
      if (!name)
        return;
      resolveTargets(el, config).forEach((target) => {
        const handler = (event) => {
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
  detachElement(el, entry) {
    const current = entry != null ? entry : this.registry.get(el);
    if (!current)
      return;
    current.handlers.forEach(([target, name, handler]) => {
      target.removeEventListener(name, handler);
    });
    this.registry.delete(el);
  }
  pushEvent(liveSocket, sourceEl, config, event, fallbackTarget) {
    if (!liveSocket || typeof liveSocket.isConnected !== "function")
      return;
    if (!liveSocket.isConnected())
      return;
    if (typeof liveSocket.owner !== "function")
      return;
    const payload = sanitizePayload(buildPayload2(config.payload, event, fallbackTarget));
    const pushTarget = config.push_target;
    const pushEventName = config.push;
    liveSocket.owner(sourceEl, (view) => {
      if (!view)
        return;
      if (pushTarget && typeof view.withinTargets === "function") {
        view.withinTargets(pushTarget, (targetView, targetCtx) => {
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
};

// src/lib/socket_utils.ts
function mergeWebComponentsAttrs(from, to) {
  if (from.tagName.startsWith("cds-")) {
    const attributes = [...Array.from(to.attributes), ...Array.from(from.attributes)];
    attributes.forEach((attr) => {
      to.setAttribute(attr.name, attr.value);
    });
    const tagName = to.tagName.toLowerCase();
    if (tagName === "cds-number-input" || tagName === "cds-fluid-number-input") {
      const step = to.getAttribute("step");
      const safeStep = step === null || step === "" || step === "null" || step === "undefined" ? "1" : step;
      to.setAttribute("step", safeStep);
      to._step = safeStep;
      to.step = safeStep;
    }
  }
}
export {
  EventManager,
  hooks_exports as Hooks,
  WebComponentManager,
  mergeWebComponentsAttrs
};
