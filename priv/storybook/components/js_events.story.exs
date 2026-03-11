defmodule Storybook.Components.JSEvents do
  use PhoenixStorybook.Story, :example
  use Graphene, [:html, :live]

  alias Phoenix.LiveView.JS

  def doc do
    "End-to-end coverage for `Graphene.JS.events/1` usage patterns."
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, events: %{})}
  end

  @impl true
  def handle_event(event, payload, socket) do
    {:noreply, assign(socket, events: Map.put(socket.assigns.events, event, payload))}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div id="js-events-story">
      <h1>Graphene JS Events</h1>

      <section id="pattern-1">
        <h2>1) Direct target</h2>
        <div {Graphene.JS.events(
          id: "pattern-1-target",
          on: %{"js-events:direct" => [push: "pattern:direct", payload: :detail]}
        )}>
          Direct target
        </div>
        <button
          id="pattern-1-trigger"
          type="button"
          phx-click={
            JS.dispatch("js-events:direct", to: "#pattern-1-target", detail: %{source: "direct"})
          }
        >
          Trigger
        </button>
        <div id="pattern-1-result" data-payload={payload_json(@events, "pattern:direct")}>
          {payload_json(@events, "pattern:direct")}
        </div>
      </section>

      <section id="pattern-2">
        <h2>2) Wrapper target selector</h2>
        <div {Graphene.JS.events(
          id: "pattern-2-wrapper",
          target: "#pattern-2-target",
          on: %{"js-events:wrapper" => [push: "pattern:wrapper", payload: :detail]}
        )}>
          <div id="pattern-2-target">Wrapper target</div>
        </div>
        <button
          id="pattern-2-trigger"
          type="button"
          phx-click={
            JS.dispatch("js-events:wrapper", to: "#pattern-2-target", detail: %{source: "wrapper"})
          }
        >
          Trigger
        </button>
        <div id="pattern-2-result" data-payload={payload_json(@events, "pattern:wrapper")}>
          {payload_json(@events, "pattern:wrapper")}
        </div>
      </section>

      <section id="pattern-3">
        <h2>3) Push only</h2>
        <div {Graphene.JS.events(
          id: "pattern-3-target",
          on: %{"js-events:push" => [push: "pattern:push", payload: :detail]}
        )}>
          Push only target
        </div>
        <button
          id="pattern-3-trigger"
          type="button"
          phx-click={JS.dispatch("js-events:push", to: "#pattern-3-target", detail: %{ok: true})}
        >
          Trigger
        </button>
        <div id="pattern-3-result" data-payload={payload_json(@events, "pattern:push")}>
          {payload_json(@events, "pattern:push")}
        </div>
      </section>

      <section id="pattern-4">
        <h2>4) JS only</h2>
        <div {Graphene.JS.events(
          id: "pattern-4-panel",
          on: %{"js-events:js-only" => [js: JS.add_class("is-open", to: "#pattern-4-panel")]}
        )}>
          JS-only panel
        </div>
        <button
          id="pattern-4-trigger"
          type="button"
          phx-click={JS.dispatch("js-events:js-only", to: "#pattern-4-panel")}
        >
          Trigger
        </button>
      </section>

      <section id="pattern-5">
        <h2>5) JS + push</h2>
        <div {Graphene.JS.events(
          id: "pattern-5-panel",
          on: %{"js-events:js-push" => [
            js: JS.add_class("is-open", to: "#pattern-5-panel"),
            push: "pattern:js_push",
            payload: :detail
          ]}
        )}>
          JS + push panel
        </div>
        <button
          id="pattern-5-trigger"
          type="button"
          phx-click={JS.dispatch("js-events:js-push", to: "#pattern-5-panel", detail: %{ok: true})}
        >
          Trigger
        </button>
        <div id="pattern-5-result" data-payload={payload_json(@events, "pattern:js_push")}>
          {payload_json(@events, "pattern:js_push")}
        </div>
      </section>

      <section id="pattern-6">
        <h2>6) Multiple events, list form</h2>
        <div {Graphene.JS.events(
          id: "pattern-6-target",
          on: ["js-events:list-a", "js-events:list-b"],
          push: "pattern:list",
          payload: :detail
        )}>
          List target
        </div>
        <button
          id="pattern-6-trigger-a"
          type="button"
          phx-click={JS.dispatch("js-events:list-a", to: "#pattern-6-target", detail: %{source: "a"})}
        >
          Trigger A
        </button>
        <button
          id="pattern-6-trigger-b"
          type="button"
          phx-click={JS.dispatch("js-events:list-b", to: "#pattern-6-target", detail: %{source: "b"})}
        >
          Trigger B
        </button>
        <div id="pattern-6-result" data-payload={payload_json(@events, "pattern:list")}>
          {payload_json(@events, "pattern:list")}
        </div>
      </section>

      <section id="pattern-7">
        <h2>7) Multiple events, map form</h2>
        <div {Graphene.JS.events(
          id: "pattern-7-target",
          on: %{
            "js-events:map-closed" => [push: "pattern:map_closed", payload: :detail],
            "js-events:map-closing" => [js: JS.add_class("closing", to: "#pattern-7-panel")],
            "js-events:map-back" => [push: "pattern:map_back", payload: :detail]
          }
        )}>
          <div id="pattern-7-panel">Map panel</div>
        </div>
        <button
          id="pattern-7-trigger-closed"
          type="button"
          phx-click={
            JS.dispatch("js-events:map-closed", to: "#pattern-7-target", detail: %{ok: true})
          }
        >
          Trigger Closed
        </button>
        <button
          id="pattern-7-trigger-closing"
          type="button"
          phx-click={JS.dispatch("js-events:map-closing", to: "#pattern-7-target")}
        >
          Trigger Closing
        </button>
        <button
          id="pattern-7-trigger-back"
          type="button"
          phx-click={JS.dispatch("js-events:map-back", to: "#pattern-7-target", detail: %{ok: true})}
        >
          Trigger Back
        </button>
        <div
          id="pattern-7-result-closed"
          data-payload={payload_json(@events, "pattern:map_closed")}
        >
          {payload_json(@events, "pattern:map_closed")}
        </div>
        <div id="pattern-7-result-back" data-payload={payload_json(@events, "pattern:map_back")}>
          {payload_json(@events, "pattern:map_back")}
        </div>
      </section>

      <section id="pattern-8">
        <h2>8) Rename events on the server</h2>
        <div {Graphene.JS.events(
          id: "pattern-8-target",
          on: %{"js-events:rename" => [push: "pattern:renamed", payload: :detail]}
        )}>
          Rename target
        </div>
        <button
          id="pattern-8-trigger"
          type="button"
          phx-click={JS.dispatch("js-events:rename", to: "#pattern-8-target", detail: %{ok: true})}
        >
          Trigger
        </button>
        <div id="pattern-8-result" data-payload={payload_json(@events, "pattern:renamed")}>
          {payload_json(@events, "pattern:renamed")}
        </div>
      </section>

      <section id="pattern-9">
        <h2>9) Dynamic payloads</h2>
        <div {Graphene.JS.events(
          id: "pattern-9-detail-target",
          on: %{"js-events:detail" => [push: "pattern:payload_detail", payload: :detail]}
        )}>
          Detail payload target
        </div>
        <button
          id="pattern-9-detail-trigger"
          type="button"
          phx-click={
            JS.dispatch("js-events:detail",
              to: "#pattern-9-detail-target",
              detail: %{item: %{id: "prod"}}
            )
          }
        >
          Trigger detail
        </button>
        <div
          id="pattern-9-detail-result"
          data-payload={payload_json(@events, "pattern:payload_detail")}
        >
          {payload_json(@events, "pattern:payload_detail")}
        </div>

        <input
          type="checkbox"
          value="alerts"
          checked
          {Graphene.JS.events(
            id: "pattern-9-target-input",
            on: %{"js-events:target" => [push: "pattern:payload_target", payload: :target]}
          )}
        />
        <button
          id="pattern-9-target-trigger"
          type="button"
          phx-click={JS.dispatch("js-events:target", to: "#pattern-9-target-input")}
        >
          Trigger target
        </button>
        <div
          id="pattern-9-target-result"
          data-payload={payload_json(@events, "pattern:payload_target")}
        >
          {payload_json(@events, "pattern:payload_target")}
        </div>

        <input
          type="checkbox"
          value="notify"
          checked
          {Graphene.JS.events(
            id: "pattern-9-all-input",
            on: %{"js-events:all" => [push: "pattern:payload_all", payload: :all]}
          )}
        />
        <button
          id="pattern-9-all-trigger"
          type="button"
          phx-click={
            JS.dispatch("js-events:all", to: "#pattern-9-all-input", detail: %{item: %{id: "all"}})
          }
        >
          Trigger all
        </button>
        <div id="pattern-9-all-result" data-payload={payload_json(@events, "pattern:payload_all")}>
          {payload_json(@events, "pattern:payload_all")}
        </div>
      </section>

      <section id="pattern-10">
        <h2>10) Merge payloads</h2>
        <input
          type="checkbox"
          value="merge"
          checked
          {Graphene.JS.events(
            id: "pattern-10-input",
            on: %{"js-events:merge" => [push: "pattern:payload_merge", payload: {:merge, [:detail, :target]}]}
          )}
        />
        <button
          id="pattern-10-trigger"
          type="button"
          phx-click={
            JS.dispatch("js-events:merge", to: "#pattern-10-input", detail: %{item: %{id: "merge"}})
          }
        >
          Trigger merge
        </button>
        <div id="pattern-10-result" data-payload={payload_json(@events, "pattern:payload_merge")}>
          {payload_json(@events, "pattern:payload_merge")}
        </div>
      </section>

      <section id="pattern-11">
        <h2>11) Static payload fields</h2>
        <div {Graphene.JS.events(
          id: "pattern-11-target",
          on: %{"js-events:static" => [
            push: "pattern:payload_static",
            payload: %{merge: [:detail], static: %{source: "storybook"}}
          ]}
        )}>
          Static payload target
        </div>
        <button
          id="pattern-11-trigger"
          type="button"
          phx-click={
            JS.dispatch("js-events:static",
              to: "#pattern-11-target",
              detail: %{item: %{id: "static"}}
            )
          }
        >
          Trigger static
        </button>
        <div id="pattern-11-result" data-payload={payload_json(@events, "pattern:payload_static")}>
          {payload_json(@events, "pattern:payload_static")}
        </div>
      </section>

      <section id="pattern-12">
        <h2>12) Push to LiveComponent</h2>
        <.live_component
          module={Storybook.Components.JSEvents.TargetComponent}
          id="pattern-12-component"
        />
      </section>

      <section id="pattern-13">
        <h2>13) :events alias</h2>
        <div {Graphene.JS.events(
          id: "pattern-13-target",
          events: ["js-events:alias"],
          push: "pattern:events_alias",
          payload: :detail
        )}>
          Events alias target
        </div>
        <button
          id="pattern-13-trigger"
          type="button"
          phx-click={JS.dispatch("js-events:alias", to: "#pattern-13-target", detail: %{ok: true})}
        >
          Trigger
        </button>
        <div id="pattern-13-result" data-payload={payload_json(@events, "pattern:events_alias")}>
          {payload_json(@events, "pattern:events_alias")}
        </div>
      </section>
    </div>
    """
  end

  defp payload_json(events, event_name) do
    events
    |> Map.get(event_name, %{})
    |> Jason.encode!()
  end
end

defmodule Storybook.Components.JSEvents.TargetComponent do
  use Phoenix.LiveComponent
  use Graphene, [:html, :live]

  alias Phoenix.LiveView.JS

  @impl true
  def update(assigns, socket) do
    {:ok, assign(socket, assigns) |> assign_new(:payload, fn -> %{} end)}
  end

  @impl true
  def handle_event("pattern:component_event", payload, socket) do
    {:noreply, assign(socket, payload: payload)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div id="pattern-12-component-root">
      <div {Graphene.JS.events(
        id: "pattern-12-target",
        on: %{"js-events:component" => [
          push: "pattern:component_event",
          payload: :detail,
          push_target: @myself
        ]}
      )}>
        Component target
      </div>
      <button
        id="pattern-12-trigger"
        type="button"
        phx-click={JS.dispatch("js-events:component", to: "#pattern-12-target", detail: %{ok: true})}
      >
        Trigger
      </button>
      <div id="pattern-12-result" data-payload={Jason.encode!(@payload || %{})}>
        {Jason.encode!(@payload || %{})}
      </div>
    </div>
    """
  end
end
