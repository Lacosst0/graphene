// Table-related LiveView hooks.

type TableEventDetail = {
  selectedRow?: HTMLElement | null;
  selectedRows?: HTMLElement[];
  sortedHeader?: HTMLElement | null;
  unfilteredRows?: HTMLElement[];
  value?: string;
  searchValue?: string;
};

type TableEvent = CustomEvent & { detail?: TableEventDetail };

type TablePayload = {
  selected_id: string | null;
  selected_ids: string[];
  column_index: number | null;
  unfiltered_ids: string[];
  search: string | null;
};

const TABLE_EVENTS: Record<string, string> = {
  "cds-table-row-selected": "graphene:table-row-selected",
  "cds-table-row-all-selected": "graphene:table-row-all-selected",
  "cds-table-sorted": "graphene:table-sorted",
  "cds-table-filtered": "graphene:table-filtered",
  "cds-search-input": "graphene:table-search-input",
  "cds-table-batch-actions-cancel-clicked": "graphene:table-batch-cancel",
};

const rowId = (row: any): string | null => {
  if (!row) return null;
  if (typeof row === "string" || typeof row === "number") return String(row);

  if (typeof row === "object") {
    if (typeof row.rowId === "string" || typeof row.rowId === "number")
      return String(row.rowId);
    if (typeof row.row_id === "string" || typeof row.row_id === "number")
      return String(row.row_id);
    if (typeof row.id === "string" || typeof row.id === "number")
      return String(row.id);
  }

  if (row.dataset?.rowId) return row.dataset.rowId;
  if (row.getAttribute) {
    return row.getAttribute("data-row-id") || row.getAttribute("id");
  }

  return row.id || null;
};

const rowIds = (rows?: HTMLElement[]): string[] =>
  (rows || [])
    .map((row) => rowId(row))
    .filter((value): value is string => Boolean(value));

const buildPayload = (event: TableEvent, root: HTMLElement): TablePayload => {
  const detail = event.detail || {};
  const isSimulated = (detail as any).__simulated === true;
  const selectedRowsFromDetail = Array.isArray(detail.selectedRows)
    ? detail.selectedRows
    : detail.selectedRows &&
        typeof detail.selectedRows[Symbol.iterator] === "function"
      ? Array.from(detail.selectedRows)
      : [];
  const selectedRowsFromTable =
    !isSimulated && Array.isArray((root as any)._selectedRows)
      ? ((root as any)._selectedRows as HTMLElement[])
      : null;
  const selectedIdFromDetail = rowId(detail.selectedRow || null);
  const selectedRowsFromDom = Array.from(
    root.querySelectorAll<HTMLElement>("cds-table-row"),
  ).filter((row) => row.hasAttribute("selected") || (row as any).selected);
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

  const unfilteredRowsFromDetail = Array.isArray(detail.unfilteredRows)
    ? detail.unfilteredRows
    : detail.unfilteredRows &&
        typeof detail.unfilteredRows[Symbol.iterator] === "function"
      ? Array.from(detail.unfilteredRows)
      : [];
  const unfilteredRows =
    unfilteredRowsFromDetail.length > 0
      ? unfilteredRowsFromDetail
      : Array.from(root.querySelectorAll<HTMLElement>("cds-table-row")).filter(
          (row) => !row.hasAttribute("filtered") && !(row as any).filtered,
        );

  const columnIndexValue =
    detail.sortedHeader?.dataset?.colIndex ??
    detail.sortedHeader?.colIndex ??
    detail.sortedHeader?.columnIndex ??
    detail.columnIndex ??
    detail.colIndex ??
    null;
  const columnIndex =
    columnIndexValue === null || columnIndexValue === undefined
      ? null
      : Number(columnIndexValue);

  return {
    selected_id: selectedIdFromDetail,
    selected_ids: selectedIds,
    column_index: Number.isNaN(columnIndex) ? null : columnIndex,
    unfiltered_ids: rowIds(unfilteredRows),
    search: detail.value || detail.searchValue || null,
  };
};

const selectionSignature = (root: HTMLElement): string => {
  const selectedRows = Array.from(
    root.querySelectorAll<HTMLElement>("cds-table-row"),
  ).filter((row) => row.hasAttribute("selected") || (row as any).selected);
  const selected = rowIds(selectedRows).sort();
  return selected.join("|");
};

const parseSelectedIds = (root: HTMLElement): Set<string> | null => {
  const raw = root.dataset.selectedIds;
  if (raw === undefined) return null;
  if (raw.trim() === "") return new Set();

  const ids = raw
    .split(",")
    .map((value) => value.trim())
    .filter((value) => value.length > 0);

  return new Set(ids);
};

const applySelectedIdsFromDataset = (root: HTMLElement): boolean => {
  const desiredIds = parseSelectedIds(root);
  if (!desiredIds) return false;

  const rows = Array.from(root.querySelectorAll<HTMLElement>("cds-table-row"));
  let changed = false;

  rows.forEach((row) => {
    const id = rowId(row);
    if (!id) return;
    const shouldSelect = desiredIds.has(id);
    const currentlySelected =
      row.hasAttribute("selected") || (row as any).selected;

    if (shouldSelect !== currentlySelected) {
      changed = true;
      if (shouldSelect) {
        row.setAttribute("selected", "");
      } else {
        row.removeAttribute("selected");
      }
      (row as any).selected = shouldSelect;
    }
  });

  return changed;
};

const updateTableSelectionUI = (table: any, selectedCount: number) => {
  const tableRows: HTMLElement[] =
    table?._tableRows && table._tableRows.length > 0
      ? Array.from(table._tableRows as HTMLElement[])
      : Array.from((table as HTMLElement).querySelectorAll("cds-table-row"));
  const totalSelectableRows = tableRows.filter(
    (row) => !row.hasAttribute("filtered") && !row.hasAttribute("disabled"),
  ).length;
  const headerCheckbox = table?._tableHeaderRow?.shadowRoot
    ?.querySelector("cds-checkbox")
    ?.shadowRoot?.querySelector(".cds--checkbox");

  if (headerCheckbox) {
    headerCheckbox.checked = selectedCount > 0;
    headerCheckbox.indeterminate =
      selectedCount > 0 && selectedCount < totalSelectableRows;
  }

  if (table?._tableBatchActions) {
    table._tableBatchActions.active = selectedCount > 0;
    table._tableBatchActions.selectedRowsCount = selectedCount;
  }

  if (table?._tableToolbarContent) {
    table._tableToolbarContent.hasBatchActions = selectedCount > 0;
  }
};

const ensureSearchValue = (table: any) => {
  if (!table) return;
  if (table._searchValue === undefined || table._searchValue === null) {
    table._searchValue = "";
  }
};

const ensureFilterRows = (table: any) => {
  if (!table || typeof table.filterRows !== "function") return;
  if ((table as any)._grapheneFilterRowsWrapped) return;
  const original = table.filterRows;
  table.filterRows = (
    rowText: string | null | undefined,
    searchString: string | null | undefined,
  ) => {
    const safeRowText = typeof rowText === "string" ? rowText : "";
    const safeSearch = typeof searchString === "string" ? searchString : "";
    try {
      return original.call(table, safeRowText, safeSearch);
    } catch (_error) {
      return safeRowText.toLowerCase().indexOf(safeSearch.toLowerCase()) < 0;
    }
  };
  (table as any)._grapheneFilterRowsWrapped = true;
};

const tableRows = (root: HTMLElement): HTMLElement[] =>
  Array.from(root.querySelectorAll<HTMLElement>("cds-table-row"));

const tableHeaderCells = (root: HTMLElement): HTMLElement[] =>
  Array.from(root.querySelectorAll<HTMLElement>("cds-table-header-cell"));

const setRowSelected = (row: HTMLElement, selected: boolean) => {
  if (selected) {
    row.setAttribute("selected", "");
  } else {
    row.removeAttribute("selected");
  }
  (row as any).selected = selected;
};

const applySelection = (
  hook: any,
  selectedIds: Set<string>,
  sourceRowId: string | null,
  eventName: string,
) => {
  const table = hook.el as HTMLElement;
  const isRadio =
    (table as any).radio === true ||
    (table as any).radio === "true" ||
    table.hasAttribute("radio");
  const effectiveSelectedIds = isRadio
    ? new Set(sourceRowId ? [sourceRowId] : [])
    : selectedIds;
  const rows = tableRows(table);
  const selectedRows: HTMLElement[] = [];

  rows.forEach((row) => {
    const id = rowId(row);
    if (!id) return;
    const shouldSelect = effectiveSelectedIds.has(id);
    setRowSelected(row, shouldSelect);
    if (shouldSelect) {
      selectedRows.push(row);
    }
  });

  (table as any)._selectedRows = selectedRows;
  updateTableSelectionUI(table, selectedRows.length);
  hook._basicComponentsTableSelectionSignature = selectionSignature(table);

  const selectedRow =
    sourceRowId !== null
      ? rows.find((row) => rowId(row) === sourceRowId) || null
      : null;
  const payload = buildPayload(
    { detail: { selectedRow, selectedRows } } as any,
    table as HTMLElement,
  );
  hook.pushEventTo(table, eventName, payload);
};

const applySort = (hook: any, columnIndex: number, direction: string) => {
  const table = hook.el as HTMLElement;
  const tbody = table.querySelector("cds-table-body");
  if (!tbody) return;

  const rows = tableRows(table);
  const isExpandable =
    (table as any).expandable === true ||
    (table as any).expandable === "true" ||
    table.hasAttribute("expandable");
  const rowPairs = rows.map((row) => {
    const next = row.nextElementSibling;
    const expanded =
      next && next.matches && next.matches("cds-table-expanded-row")
        ? (next as HTMLElement)
        : null;
    return { row, expanded };
  });
  const sorted = [...rowPairs].sort((rowA, rowB) => {
    const cellA = rowA.row.querySelectorAll("cds-table-cell")[columnIndex];
    const cellB = rowB.row.querySelectorAll("cds-table-cell")[columnIndex];
    const textA = cellA?.textContent?.trim() ?? "";
    const textB = cellB?.textContent?.trim() ?? "";
    const comparison = textA.localeCompare(textB, undefined, {
      numeric: true,
      sensitivity: "base",
    });
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
    {
      detail: { sortedHeader: { dataset: { colIndex: String(columnIndex) } } },
    } as any,
    table as HTMLElement,
  );
  hook.pushEventTo(table, "graphene:table-sorted", payload);
};

const applySearch = (hook: any, value: string) => {
  const table = hook.el as any;
  const searchValue = value ?? "";
  let unfilteredRows: HTMLElement[] = [];

  if (typeof table._handleFilterRows === "function") {
    table._searchValue = searchValue;
    try {
      table._handleFilterRows();
      unfilteredRows = tableRows(table).filter(
        (row) => !row.hasAttribute("filtered") && !(row as any).filtered,
      );
    } catch (_error) {
      const rows = tableRows(table);
      const normalized = searchValue.toLowerCase();
      rows.forEach((row) => {
        const rowText = row.textContent?.trim().toLowerCase() ?? "";
        const filtered = normalized.length > 0 && !rowText.includes(normalized);
        (row as any).filtered = filtered;
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
      const rowText = row.textContent?.trim().toLowerCase() ?? "";
      const filtered = normalized.length > 0 && !rowText.includes(normalized);
      (row as any).filtered = filtered;
      if (filtered) {
        row.setAttribute("filtered", "");
      } else {
        row.removeAttribute("filtered");
        unfilteredRows.push(row);
      }
    });

    const headerCheckbox = table?._tableHeaderRow?.shadowRoot
      ?.querySelector("cds-checkbox")
      ?.shadowRoot?.querySelector(".cds--checkbox");
    if (headerCheckbox) {
      headerCheckbox.disabled = unfilteredRows.length === 0;
    }
  }

  const searchPayload = buildPayload(
    { detail: { value: searchValue } } as any,
    table,
  );
  hook.pushEventTo(table, "graphene:table-search-input", searchPayload);

  const filterPayload = buildPayload(
    { detail: { unfilteredRows } } as any,
    table,
  );
  hook.pushEventTo(table, "graphene:table-filtered", filterPayload);
};

const handleSimulation = (hook: any, detail: any) => {
  if (!detail || typeof detail.action !== "string") return;

  const table = hook.el as HTMLElement;
  const rows = tableRows(table);
  const currentSelectedIds = rowIds(
    rows.filter((row) => row.hasAttribute("selected") || (row as any).selected),
  );

  switch (detail.action) {
    case "select_row": {
      const rowIdValue = detail.row_id ? String(detail.row_id) : null;
      if (!rowIdValue) return;
      const selectedSet = new Set(currentSelectedIds);
      const shouldSelect =
        typeof detail.selected === "boolean"
          ? detail.selected
          : !selectedSet.has(rowIdValue);
      if (shouldSelect) {
        selectedSet.add(rowIdValue);
      } else {
        selectedSet.delete(rowIdValue);
      }
      applySelection(
        hook,
        selectedSet,
        rowIdValue,
        "graphene:table-row-selected",
      );
      break;
    }
    case "select_all": {
      const selectableRows = rows.filter(
        (row) => !row.hasAttribute("filtered") && !row.hasAttribute("disabled"),
      );
      const selectableIds = rowIds(selectableRows);
      const selectedSet = new Set(currentSelectedIds);
      const shouldSelect =
        typeof detail.selected === "boolean"
          ? detail.selected
          : selectedSet.size < selectableIds.length;
      const nextSet = shouldSelect ? new Set(selectableIds) : new Set<string>();
      applySelection(hook, nextSet, null, "graphene:table-row-all-selected");
      break;
    }
    case "select_none": {
      applySelection(
        hook,
        new Set<string>(),
        null,
        "graphene:table-row-all-selected",
      );
      break;
    }
    case "sort": {
      const columnIndex = Number(detail.column_index);
      if (Number.isNaN(columnIndex)) return;
      const direction =
        detail.direction === "descending" ? "descending" : "ascending";
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

const syncSelection = async (hook: any) => {
  const root = hook.el as HTMLElement;

  await Promise.all([
    customElements.whenDefined("cds-table"),
    customElements.whenDefined("cds-table-row"),
    customElements.whenDefined("cds-table-header-row"),
  ]);

  const table: any = root;
  if (table?.updateComplete) {
    await table.updateComplete;
  }
  const rows = Array.from(root.querySelectorAll<HTMLElement>("cds-table-row"));
  if (!rows.length) return;

  await Promise.all(
    rows
      .map((row) => (row as any).updateComplete)
      .filter((value) => value && typeof value.then === "function"),
  );

  const desiredRows = rows.filter((row) => row.hasAttribute("selected"));

  rows.forEach((row) => {
    const desired = row.hasAttribute("selected");
    if ((row as any).selected !== desired) {
      (row as any).selected = desired;
    }
  });

  const currentRows: HTMLElement[] = Array.isArray(table._selectedRows)
    ? table._selectedRows
    : [];
  const desiredSet = new Set(desiredRows);
  const currentSet = new Set(currentRows);
  let changed = false;

  desiredRows.forEach((row) => {
    if (!currentSet.has(row)) changed = true;
  });

  currentRows.forEach((row) => {
    if (!desiredSet.has(row)) changed = true;
  });

  if (changed) {
    table._selectedRows = [...desiredRows];
    updateTableSelectionUI(table, desiredRows.length);
  }
};

const syncSelectionWithSignature = (hook: any) => {
  const root = hook.el as HTMLElement;
  const appliedFromDataset = applySelectedIdsFromDataset(root);
  const signature = selectionSignature(root);
  if (
    !appliedFromDataset &&
    hook._basicComponentsTableSelectionSignature === signature
  )
    return;
  hook._basicComponentsTableSelectionSignature = signature;
  void syncSelection(hook);
};

export const BasicComponentsTable: any = {
  mounted(this: any) {
    const handlers: Record<string, (event: TableEvent) => void> = {};

    Object.entries(TABLE_EVENTS).forEach(([eventName, pushEventName]) => {
      const handler = (event: TableEvent) => {
        this.pushEventTo(this.el, pushEventName, buildPayload(event, this.el));
      };

      handlers[eventName] = handler;
      this.el.addEventListener(eventName, handler);
    });

    this._basicComponentsTableHandlers = handlers;
    const simulatorHandler = (event: CustomEvent) => {
      handleSimulation(this, event.detail || {});
    };
    this.el.addEventListener(
      "graphene:table-simulate",
      simulatorHandler as EventListener,
    );
    this._basicComponentsTableSimulatorHandler = simulatorHandler;
    ensureSearchValue(this.el);
    ensureFilterRows(this.el);
    syncSelectionWithSignature(this);
  },

  updated(this: any) {
    ensureSearchValue(this.el);
    ensureFilterRows(this.el);
    syncSelectionWithSignature(this);
  },

  destroyed(this: any) {
    const handlers = this._basicComponentsTableHandlers || {};

    Object.entries(handlers).forEach(([eventName, handler]) => {
      this.el.removeEventListener(eventName, handler);
    });

    this._basicComponentsTableHandlers = {};
    if (this._basicComponentsTableSimulatorHandler) {
      this.el.removeEventListener(
        "graphene:table-simulate",
        this._basicComponentsTableSimulatorHandler as EventListener,
      );
    }
    this._basicComponentsTableSimulatorHandler = null;
  },
};
