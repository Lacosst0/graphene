defmodule Graphene.CarbonComponents.Custom.Map do
  @moduledoc false

  use Phoenix.Component

  alias Graphene.CarbonComponents.MapComponent

  @doc """
  Renders a MapLibre Gl JS map with styles, markers, and layers support.
  This component owns interactive state to avoid LiveView flicker.

  You can use [:maplibre](https://hex.pm/packages/maplibre) for easier style generation.

  ## Popup
  The popup has `maplibregl-popup` class and `map-popup--\#\{@id\}` id.
  Use popup slot to customize the popup content.

  ## Events

  * `graphene:map-marker-click` - Marker selection changed.

  ## Actions

  * `graphene:map-add-markers` - Adds multiple markers to the map.
  * `graphene:map-focus-marker` - Focuses a marker on the map.
  * `graphene:map-remove-markers` - Removes multiple markers from the map.
  * `graphene:map-clear-markers` - Clears all markers from the map.

  """

  attr :id, :string, required: true

  attr :map_styles, :string,
    default: nil,
    doc: "the MapLibre styles URL or JSON object. Please use URL + CDN if you have big styles"

  attr :map_zoom, :integer, default: 10, doc: "the initial map zoom level"
  attr :map_center, :list, default: nil, doc: "the initial map center coordinates"
  attr :markers, :map, default: nil, doc: "the MapLibre markers"

  attr :phx_update, :string,
    default: "ignore",
    doc:
      "phx-update behavior for the map root. Defaults to \"ignore\" so LiveView does not patch the map after client-side events. Set to nil or false to allow normal patching."

  attr :on_marker_click, :fun, default: nil, doc: "callback for marker click events"

  attr :bubble_events, :list,
    default: [],
    doc: "list of events to bubble up to the parent LiveView"

  slot :popup, doc: "content rendered as a popup for markers"

  def map(assigns) do
    ~H"""
    <.live_component
      module={MapComponent}
      id={@id}
      map_styles={@map_styles}
      map_zoom={@map_zoom}
      map_center={@map_center}
      markers={@markers}
      phx_update={@phx_update}
      bubble_events={@bubble_events}
      on_marker_click={@on_marker_click}
      popup={@popup}
    />
    """
  end
end
