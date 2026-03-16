// Tabs-related LiveView hooks.

type TabsInitContext = {
  el: HTMLElement;
};

const applyInitialSelection = (root: HTMLElement) => {
  const tabs = root as HTMLElement & { value?: string | null };
  const items = Array.from(tabs.querySelectorAll("cds-tab")) as Array<
    HTMLElement & { value?: string | null; selected?: boolean }
  >;

  if (items.length === 0) return;

  let selectedItem = items.find(
    (item) => item.selected || item.hasAttribute("selected")
  );

  if (!selectedItem) {
    const desiredValue =
      tabs.value || tabs.getAttribute("value") || items[0].getAttribute("value");

    selectedItem =
      items.find(
        (item) =>
          item.value === desiredValue ||
          item.getAttribute("value") === desiredValue
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

  const targetId = selectedItem?.getAttribute("target");
  if (targetId) {
    const panel = document.getElementById(targetId);
    panel?.removeAttribute("hidden");
  }
};

export const TabsInit = {
  mounted(this: TabsInitContext) {
    applyInitialSelection(this.el);
  },

  updated(this: TabsInitContext) {
    applyInitialSelection(this.el);
  }
};
