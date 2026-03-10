import maplibregl, { Map, Marker } from "maplibre-gl";

// Define the shape of a marker
interface MarkerData {
  id: number;
  lat: number;
  lon: number;
  label: string;
  description: string;
}

// Define the hook object type for LiveView
interface LiveViewHook {
  mounted(): void;
  updated(): void;
  map?: Map;
  markers: Marker[];
  renderMarkers(markerData: MarkerData[]): void;
  el?: HTMLElement & { dataset: { markers?: string } };
  pushEvent?(event: string, payload: any): void;
}

export const MapLibreHook: LiveViewHook = {
  markers: [],

  mounted() {
    this.map = new maplibregl.Map({
      container: "map",
      style: "https://styles.trailsta.sh/openmaptiles-osm.json",
      minZoom: 0,
      maxZoom: 100,
      zoom: 10,
      attributionControl: false,
    });

    this.map.addControl(new maplibregl.NavigationControl());

    const initialMarkers: MarkerData[] = this.el?.dataset.markers ? JSON.parse(this.el.dataset.markers) : [];
    // Instantly center map on first load
    if (initialMarkers.length > 0) {
      const firstMarker = initialMarkers[0];
      this.map.setCenter([firstMarker.lon, firstMarker.lat]);
    }
    this.renderMarkers(initialMarkers);
  },

  // Update markers whenever LiveView assigns change
  updated() {
    const updatedMarkers: MarkerData[] = this.el?.dataset.markers ? JSON.parse(this.el.dataset.markers) : [];
    this.renderMarkers(updatedMarkers);
  },

  renderMarkers(markerData: MarkerData[]) {
    // Remove old markers
    this.markers.forEach((marker) => marker.remove());
    this.markers = [];

    const focusMarker = this.el?.dataset.focus;

    markerData.forEach((m) => {
      const popup = new maplibregl.Popup({ closeButton: false });

      // Prevent popup from scrolling the page
      popup.on("open", (e) => {
        // Get element when it's rendered (exists)
        popup.getElement().addEventListener("wheel", (e) => {
          e.preventDefault();
          e.stopPropagation(); // prevent scroll
          this.map!.getCanvas().dispatchEvent(new WheelEvent("wheel", e)); // zoom
        });
      });

      const popupContent = document.createElement("div");
      popup.setDOMContent(popupContent);

      // Title
      const title = document.createElement("h4");
      const strong = document.createElement("strong");
      strong.textContent = m.label;
      title.appendChild(strong);
      popupContent.appendChild(title);

      // Description
      const description = document.createElement("p");
      m.description.split("\n").forEach((line, idx) => {
        const span = document.createElement("span");
        span.textContent = line;
        description.appendChild(span);
        if (idx < m.description.split("\n").length - 1) {
          description.appendChild(document.createElement("br"));
        }
      });
      popupContent.appendChild(description);

      const marker = new maplibregl.Marker().setLngLat([m.lon, m.lat]).setPopup(popup).addTo(this.map!);

      // Focus marker if needed
      if (focusMarker && m.id.toString() === focusMarker) {
        this.map!.flyTo({ center: marker.getLngLat(), zoom: 15 });
        marker.togglePopup();
      }

      this.markers.push(marker);
    });
  },
};
