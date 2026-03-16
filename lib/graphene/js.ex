defmodule Graphene.JS do
  @moduledoc """
  Helpers for wiring custom DOM events to LiveView hooks and Phoenix.JS commands.

  `Graphene.JS.events/1` returns a map of attributes you can splat into any
  component or HTML tag. A global `EventManager` scans those attributes and:

  * listens to custom DOM events on a target element (web component),
  * optionally runs a `Phoenix.LiveView.JS` pipeline client-side, and
  * optionally pushes a (static or dynamic) payload to the server.

  The helper is intentionally generic so you can use it with Carbon, IBM
  Products, or your own custom elements.
  """

  alias Phoenix.LiveView.JS, as: LVJS

  @type event_name :: String.t() | atom()
  @type payload_spec ::
          :detail
          | :target
          | :all
          | {:merge, list()}
          | map()
          | list()

  @doc """
  Builds attributes for the `EventManager` global bridge.

  ## Requirements

  * Connect the event manager once in your app entrypoint:

        import { EventManager } from "graphene"

        const eventManager = new EventManager()
        eventManager.connect()

  `events/1` stores its configuration in `data-gf-events`. The event manager
  reads those attributes and attaches listeners.

  ## Options

    * `:id` - Optional DOM id for the element receiving the attributes.
    * `:target` - CSS selector for the elements emitting events. Defaults to the element itself.
      Use `:self` (or omit) to attach directly to the element. You can also pass
      `target:` inside per-event options to override this for a specific event.
    * `:on` (or `:events`) - A list of event names or a map of event name => options.
      When a list is given, top-level `:push`, `:payload`, and `:js` apply to all events.
    * `:push` - Event name to push to the server (can differ from the DOM event name).
    * `:payload` - Dynamic payload strategy (`:detail`, `:target`, `:all`, or `{:merge, [...]}`).
    * `:js` - `Phoenix.LiveView.JS` pipeline to run client-side before push.
    * `:push_target` / `:phx_target` - Optional target for `pushEventTo`.

  ## Doctest

      iex> attrs = Graphene.JS.events(
      ...>   id: "ts-1",
      ...>   on: ["c4p-tearsheet-closed"],
      ...>   push: "tearsheet:closed"
      ...> )
      iex> attrs["id"]
      "ts-1"
      iex> events = Jason.decode!(attrs["data-gf-events"])
      iex> Enum.at(events, 0) |> Map.take(["name", "push"])
      %{"name" => "c4p-tearsheet-closed", "push" => "tearsheet:closed"}

  ## Exhaustive usage patterns

  ### 1) Attach directly to the element (default target)

      <Product.tearsheet
        id="ts-1"
        open
        {Graphene.JS.events(
          on: %{"c4p-tearsheet-closed" => [push: "tearsheet:closed"]}
        )}
      />

  ### 2) Attach to a wrapper and target a selector

      <div {Graphene.JS.events(
        id: "panel-events",
        target: "c4p-side-panel",
        on: %{"c4p-side-panel-closed" => [push: "panel:closed"]}
      )}>
        <Product.side_panel open ... />
      </div>

  If the selector matches multiple elements, the event manager attaches listeners to all
  of them. Each matching element will independently trigger the configured JS
  and/or push when it emits the event. Use an id selector (e.g. `#panel-1`) or
  attach the events directly to the element when you want a single target.

  ### 2b) Custom hook + events

  `events/1` only adds data attributes, so you can safely attach your own
  `phx-hook` on the same element:

      <.component
        id="panel-1"
        phx-hook="MyHook"
        {Graphene.JS.events(
          on: %{"c4p-side-panel-closed" => [push: "panel:closed"]}
        )}
      />

  If you need to listen on a child element, use `:target` to point at it.

  ### 3) Single event, server push only

      {Graphene.JS.events(
        on: %{"c4p-interstitial-closed" => [push: "interstitial:closed"]}
      )}

  ### 4) Single event, JS only (no server push)

      {Graphene.JS.events(
        on: %{"c4p-tearsheet-closed" => [
          js: JS.remove_attribute("open", to: "#ts-1")
        ]}
      )}

  ### 5) Single event, JS + server push (JS runs first)

      {Graphene.JS.events(
        on: %{"c4p-tearsheet-closed" => [
          js: JS.remove_attribute("open", to: "#ts-1"),
          push: "tearsheet:closed"
        ]}
      )}

  ### 6) Multiple events, same behavior (list form)

      {Graphene.JS.events(
        on: ["c4p-side-panel-closed", "c4p-side-panel-beingclosed"],
        push: "panel:event",
        payload: :detail
      )}

  *If you need duplicates, use a list of `{event, opts}` tuples:*

      {Graphene.JS.events(
        on: [
          {"c4p-side-panel-closed", [push: "panel:closed"]},
          {"c4p-side-panel-closed", [js: JS.add_class("closing", to: "#panel")]}
        ]
      )}

  ### 7) Multiple events, different behavior (map form)

      {Graphene.JS.events(
        on: %{
          "c4p-side-panel-closed" => [push: "panel:closed"],
          "c4p-side-panel-beingclosed" => [js: JS.add_class("closing", to: "#panel")],
          "c4p-side-panel-navigate-back" => [push: "panel:back"]
        }
      )}

  ### 8) Rename events on the server (push name differs)

      {Graphene.JS.events(
        on: %{"c4p-tearsheet-closed" => [push: "tearsheet:closed"]}
      )}

  ### 9) Dynamic payloads

  * `payload: :detail` - sends `%{detail: event.detail}`.
  * `payload: :target` - sends `%{value, checked, toggled}` from the event target.
  * `payload: :all` - sends `%{detail: event.detail, value, checked, toggled}`.

      {Graphene.JS.events(
        on: %{"cds-combo-box-selected" => [
          push: "combo:selected",
          payload: :detail
        ]}
      )}

  #### Real component examples

  *Use `:detail` when the component emits rich detail (e.g. selection data):*

      <.combo_box
        id="env-combo"
        items={["Prod", "Stage", "Dev"]}
        {Graphene.JS.events(
          on: %{"cds-combo-box-selected" => [
            push: "env:selected",
            payload: :detail
          ]}
        )}
      />

      # Example payload pushed
      %{detail: %{item: %{id: "Prod", text: "Prod", value: "Prod"}}}

  *Use `:target` for form-like controls (checked/toggled/value):*

      <.toggle
        id="alerts-toggle"
        label_text="Enable alerts"
        {Graphene.JS.events(
          on: %{"cds-toggle-changed" => [
            push: "alerts:toggle",
            payload: :target
          ]}
        )}
      />

      # Example payload pushed
      %{checked: true, toggled: nil, value: "on"}

  *Use `:all` when you want both:*

      <.checkbox
        id="notify-checkbox"
        label_text="Notify team"
        {Graphene.JS.events(
          on: %{"cds-checkbox-changed" => [
            push: "notify:changed",
            payload: :all
          ]}
        )}
      />

      # Example payload pushed
      %{
        detail: %{item: %{id: "notify", text: "Notify team"}},
        checked: true,
        toggled: nil,
        value: "notify"
      }

  ### 10) Merge payloads (list or `{:merge, ...}`)

      {Graphene.JS.events(
        on: %{"cds-toggle-changed" => [
          push: "toggle:changed",
          payload: [:detail, :target]
        ]}
      )}

      {Graphene.JS.events(
        on: %{"cds-toggle-changed" => [
          push: "toggle:changed",
          payload: {:merge, [:detail, :target]}
        ]}
      )}

      # Example payload pushed (detail + target merged)
      %{
        detail: %{item: %{id: "notify", text: "Notify team"}},
        checked: true,
        toggled: nil,
        value: "notify"
      }

      # If keys collide, the later payload wins.

  ### 11) Add static payload fields

      {Graphene.JS.events(
        on: %{"c4p-tearsheet-closed" => [
          push: "tearsheet:closed",
          payload: %{reason: "user"}
        ]}
      )}

      {Graphene.JS.events(
        on: %{"c4p-tearsheet-closed" => [
          push: "tearsheet:closed",
          payload: %{merge: [:detail, :target], static: %{source: "storybook"}}
        ]}
      )}

  ### 12) Push to a specific LiveComponent (`push_target` / `phx_target`)

      {Graphene.JS.events(
        on: %{"c4p-tearsheet-closed" => [
          push: "tearsheet:closed",
          push_target: @myself
        ]}
      )}

  ### 13) Use `:events` alias for `:on`

      {Graphene.JS.events(events: ["c4p-tearsheet-closed"], push: "tearsheet:closed")}
  """
  @spec events(map() | keyword()) :: map()
  def events(opts) when is_list(opts) or is_map(opts) do
    opts = normalize_opts(opts)
    on = fetch_opt(opts, :on) || fetch_opt(opts, :events) || []

    defaults = %{
      push: fetch_opt(opts, :push),
      payload: fetch_opt(opts, :payload),
      js: fetch_opt(opts, :js),
      push_target: fetch_opt(opts, :push_target) || fetch_opt(opts, :phx_target),
      target: fetch_opt(opts, :target)
    }

    events =
      on
      |> normalize_on(defaults)
      |> Jason.encode!()

    attrs =
      %{"data-gf-events" => events}
      |> maybe_put("id", fetch_opt(opts, :id))
      |> maybe_put("data-gf-target-selector", normalize_dom_target(fetch_opt(opts, :target)))

    attrs
  end

  defp normalize_opts(opts) when is_list(opts), do: Map.new(opts)
  defp normalize_opts(opts) when is_map(opts), do: opts

  defp fetch_opt(opts, key) when is_map(opts) do
    Map.get(opts, key) || Map.get(opts, Atom.to_string(key))
  end

  defp normalize_on(on, defaults) when is_list(on) and on != [] do
    cond do
      Keyword.keyword?(on) ->
        Enum.map(on, fn {event, event_opts} -> build_event(event, event_opts, defaults) end)

      tuple_event_list?(on) ->
        Enum.map(on, fn {event, event_opts} -> build_event(event, event_opts, defaults) end)

      true ->
        Enum.map(on, fn event -> build_event(event, %{}, defaults) end)
    end
  end

  defp normalize_on(on, defaults) when is_map(on) do
    Enum.map(on, fn {event, event_opts} -> build_event(event, event_opts, defaults) end)
  end

  defp normalize_on(_on, _defaults), do: []

  defp tuple_event_list?(list) do
    Enum.all?(list, fn
      {event, event_opts} ->
        not is_nil(event) and
          (is_list(event_opts) or is_map(event_opts) or is_nil(event_opts))

      _ ->
        false
    end)
  end

  defp build_event(event, event_opts, defaults) do
    event_opts = normalize_event_opts(event_opts)
    merged = Map.merge(defaults, event_opts)

    %{}
    |> Map.put("name", normalize_event_name(event))
    |> maybe_put("push", normalize_event_name(fetch_opt(merged, :push)))
    |> maybe_put("payload", normalize_payload(fetch_opt(merged, :payload)))
    |> maybe_put("js", encode_js(fetch_opt(merged, :js)))
    |> maybe_put("push_target", normalize_push_target(fetch_opt(merged, :push_target)))
    |> maybe_put("target", normalize_dom_target(fetch_opt(merged, :target)))
  end

  defp normalize_event_opts(nil), do: %{}
  defp normalize_event_opts(opts) when is_list(opts), do: Map.new(opts)
  defp normalize_event_opts(opts) when is_map(opts), do: opts
  defp normalize_event_opts(_opts), do: %{}

  defp normalize_event_name(nil), do: nil
  defp normalize_event_name(event) when is_atom(event), do: Atom.to_string(event)
  defp normalize_event_name(event) when is_binary(event), do: event
  defp normalize_event_name(event), do: to_string(event)

  defp normalize_payload(nil), do: nil

  defp normalize_payload({:merge, list}) when is_list(list),
    do: %{merge: Enum.map(list, &normalize_payload/1)}

  defp normalize_payload(list) when is_list(list),
    do: Enum.map(list, &normalize_payload/1)

  defp normalize_payload(payload) when is_atom(payload), do: Atom.to_string(payload)
  defp normalize_payload(payload) when is_map(payload), do: payload
  defp normalize_payload(payload), do: payload

  defp normalize_dom_target(nil), do: nil
  defp normalize_dom_target(:self), do: nil
  defp normalize_dom_target(target) when is_binary(target), do: target
  defp normalize_dom_target(target) when is_atom(target), do: Atom.to_string(target)
  defp normalize_dom_target(target), do: to_string(target)

  defp normalize_push_target(nil), do: nil
  defp normalize_push_target(target) when is_binary(target), do: target
  defp normalize_push_target(target) when is_integer(target), do: target
  defp normalize_push_target(target), do: to_string(target)

  defp encode_js(nil), do: nil

  defp encode_js(%LVJS{ops: ops}) do
    Phoenix.json_library().encode!(ops)
  end

  defp encode_js(js) when is_binary(js), do: js
  defp encode_js(js) when is_list(js), do: Jason.encode!(js)
  defp encode_js(js), do: Phoenix.HTML.safe_to_string(js)

  defp maybe_put(map, _key, nil), do: map
  defp maybe_put(map, key, value), do: Map.put(map, key, value)
end
