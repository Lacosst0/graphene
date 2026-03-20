defmodule Graphene.CarbonComponents.MapComponent do
  @moduledoc false

  use Phoenix.LiveComponent
  import Graphene.Utils

  @js_events [
    "graphene:map-add-markers",
    "graphene:map-focus-marker",
    "graphene:map-remove-markers",
    "graphene:map-clear-markers"
  ]

  @impl true
  def update(assigns, socket) do
    socket =
      socket
      |> assign(assigns)
      |> assign_new(:map_styles, fn -> nil end)
      |> assign_new(:markers, fn -> %{} end)
      |> assign_new(:current_markers, fn -> %{} end)
      |> assign_new(:phx_update, fn -> "ignore" end)
      |> assign_new(:on_marker_click, fn -> nil end)
      |> assign_new(:map_zoom, fn -> 10 end)
      |> assign_new(:map_center, fn -> nil end)
      |> assign_new(:bubble_events, fn -> [] end)
      |> update_markers_diff()

    {:ok, socket}
  end

  def update_markers_diff(socket) do
    new_markers =
      socket.assigns.markers
      |> Enum.filter(fn {key, _} ->
        !Map.has_key?(socket.assigns.current_markers, key)
      end)
      |> Enum.into(%{})

    changed_markers =
      socket.assigns.markers
      |> Enum.filter(fn {key, _} ->
        !Map.has_key?(new_markers, key)
      end)
      |> Enum.filter(fn {key, marker} ->
        Map.get(socket.assigns.current_markers, key) != marker
      end)
      |> Enum.into(%{})

    removed_markers =
      socket.assigns.current_markers
      |> Enum.filter(fn {key, _} ->
        !Map.has_key?(socket.assigns.markers, key)
      end)
      |> Enum.into(%{})

    map_to_remove = Map.merge(changed_markers, removed_markers)
    map_to_add = Map.merge(changed_markers, new_markers)

    socket
    |> push_event_if(map_to_remove != %{}, "graphene:map-remove-markers", %{
      ids: map_to_remove |> Map.keys()
    })
    |> push_event_if(map_to_add != %{}, "graphene:map-add-markers", %{data: map_to_add})
    |> assign(:current_markers, socket.assigns.markers)
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div class="map-containter" style="width: 100%; height: 100%;">
      <%= if @popup do %>
        <div id={"map-popup--#{@id}"} class="maplibregl-popup" hidden style="display: none;">
          {render_slot(@popup)}
        </div>
      <% end %>
      <div
        id={@id}
        phx-hook="MapLibreHook"
        phx-update={@phx_update}
        phx-target={@myself}
        data-map-id={@id}
        data-styles={@map_styles}
        data-zoom={@map_zoom}
        data-center={Jason.encode!(@map_center)}
        style="width: 100%; height: 100%;"
      />
    </div>
    """
  end

  # TODO handle add, remove, change markers manually to avoid checking for rerenders

  def bubble(socket, event, payload) do
    event = String.trim_leading(event, "graphene:")

    if event in socket.assigns.bubble_events do
      send(self(), {event, payload, socket})
    end

    socket
  end

  @impl true
  def handle_event("graphene:map-marker-click" = event, payload, socket) do
    socket = apply_callback(socket, socket.assigns.on_marker_click, payload)
    {:noreply, bubble(socket, event, payload)}
  end

  @impl true
  def handle_event(event, payload, socket) when event in @js_events do
    {:noreply, push_event(socket, event, payload)}
  end

  defp normalize_callback_result({:noreply, %Phoenix.LiveView.Socket{} = sock}, _socket), do: sock
  defp normalize_callback_result(%Phoenix.LiveView.Socket{} = sock, _socket), do: sock
  defp normalize_callback_result(%{} = assigns, socket), do: assign(socket, assigns)
  defp normalize_callback_result(_, socket), do: socket

  defp apply_callback(socket, nil, _payload), do: socket

  defp apply_callback(socket, fun, payload) when is_function(fun, 2) do
    normalize_callback_result(fun.(payload, socket), socket)
  end

  defp apply_callback(socket, fun, payload) when is_function(fun, 1) do
    normalize_callback_result(fun.(payload), socket)
  end

  defp apply_callback(socket, _fun, _payload), do: socket
end
