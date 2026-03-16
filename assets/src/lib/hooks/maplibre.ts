import maplibregl, { Map, Marker, Popup } from "maplibre-gl";

// Define the shape of a marker
interface MarkerData {
  id: number | string;
  lat: number;
  lon: number;
  label: string;
  description: string;
}

type JSONString = string & { __brand: "JSON" };

interface MapLibreHookDataset {
  mapId?: string;

  styles?: JSONString | string;
  // Default zoom level
  // Style default zoom doesn't work in some cases
  zoom?: number;
  focusMarker?: string;
}

// Define the hook object type for LiveView
interface MapLibreLiveHook {
  el?: HTMLElement & { dataset: MapLibreHookDataset };

  mounted?(): void;
  updated?(): void;
  beforeUpdate?(): void;
  destroyed?(): void;
  disconnected?(): void;
  reconnected?(): void;
  appendEvent?(name: string): void;
  handleEvent?<T extends object>(
    event: string,
    handler: (data: T) => void
  ): void;

  map?: Map;
  markers: Record<string, Marker>;
  popup?: Popup;

  registerHandlers(): void;
  createPopup(phoenixPopup: HTMLElement): Popup;
  createMarker(id: string, data: MarkerData): Marker;
  pushEvent?(event: string, payload: any): void;
  pushEventTo?(element: HTMLElement, event: string, payload: any): void;
}

// TOOD: Options to set options for controls
// TODO: Event map click and other
// TODO: Change markers style
export const MapLibreHook: MapLibreLiveHook = {
  markers: {},
  popup: undefined,

  mounted() {
    const data = this.el!.dataset;

    let styles: string | maplibregl.StyleSpecification = data.styles!;
    try {
      styles = JSON.parse(data.styles);
    } catch {
      console.debug("Failed to parse styles as JSON, assuming it's a URL", styles)
    };

    this.map = new maplibregl.Map({
      container: data.mapId!,
      center: data.center ? JSON.parse(data.center) : [0, 0],
      zoom: data.zoom,
      style: styles,
    });
    this.map.addControl(
      new maplibregl.NavigationControl({ showCompass: false })
    );

    this.registerHandlers();

    const phoenixPopup = document.getElementById(`map-popup--${data.mapId}`);
    if (phoenixPopup) {
      this.popup = this.createPopup(phoenixPopup);
    }
  },

  updated() {},

  registerHandlers() {
    this.handleEvent!(
      "graphene:map-add-markers",
      ({ data }: { data: Record<string, MarkerData> }) => {
        for (const id in data) {
          this.markers[id] = this.createMarker(id, data[id]);
        }
      }
    );

    this.handleEvent!("graphene:map-focus-marker", ({ id }: { id: string }) => {
      const marker = this.markers[id];
      if (marker) {
        this.map!.flyTo({ center: marker.getLngLat(), zoom: 15 });
        marker
          .getElement()
          .dispatchEvent(new MouseEvent("click", { bubbles: true }));
      }
    });

    this.handleEvent!(
      "graphene:map-remove-markers",
      ({ ids }: { ids: string[] }) => {
        for (const id of ids) {
          const marker = this.markers[id];
          if (marker) {
            marker.remove();
            delete this.markers[id];
          }
        }
      }
    );

    this.handleEvent!("graphene:map-clear-markers", () => {
      Object.values(this.markers).forEach((m) => {
        m.remove();
      });
      this.markers = {};
    });
  },

  createPopup(phoenixPopup: HTMLElement): Popup {
    const popup = new Popup({ closeButton: false });

    popup.setHTML(phoenixPopup.innerHTML);

    //TODO rewrite using LiveView .portal

    // Don't need to know mutation, because we always rerender the popup
    new MutationObserver((_) => {
      popup.setHTML(phoenixPopup.innerHTML);
    }).observe(phoenixPopup, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    });

    popup.on("open", (_) => {
      // Prevent popup from scrolling the page
      popup.getElement().addEventListener("wheel", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.map!.getCanvas().dispatchEvent(new WheelEvent("wheel", e)); // zoom
      });
    });

    return popup;
  },

  createMarker(id: string, m: MarkerData): Marker {
    const marker = new Marker()
      .setLngLat([m.lon, m.lat])
      .setPopup(this.popup)
      .addTo(this.map!);
    marker.on("click", (_) => {
      this.pushEventTo!(this.el!, "graphene:map-marker-click", { id });

      if (this.popup?.isOpen()) {
        marker.togglePopup();
      }
    });
    return marker;
  },
};
