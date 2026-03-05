# Graphene

Graphene is a Phoenix component library built with [Carbon Design System](https://carbondesignsystem.com/) using [Carbon Web Components](https://www.npmjs.com/package/@carbon/web-components). It ships
Elixir components plus a small JS package that wires up hooks and lazy-loads web
components on demand.

<!-- GRAPHENE_INSTALL:START -->

## Install in a Phoenix app

1. Add the Elixir dependency:

```elixir
defp deps do
  [
    {:graphene, "~> 0.0.1"}
  ]
end
```

2. Serve Graphene's vendored assets from your endpoint:

```elixir
plug Plug.Static,
  at: "/graphene",
  from: :graphene,
  gzip: false,
  only: ~w(assets)
```

3. Include Graphene's CSS + JS in your root layout:

```heex
<link rel="stylesheet" href={~p"/graphene/assets/graphene.css"} />
<script type="module">
  import * as Graphene from "<%= ~p"/graphene/assets/index.js" %>";
  window.Graphene = Graphene;
</script>
```

4. Wire Graphene into your LiveView entrypoint (`assets/js/app.js` or `assets/js/app.ts`):

```ts
import { LiveSocket } from "phoenix_live_view";
import { Socket } from "phoenix";

const { WebComponentManager, Hooks, mergeWebComponentsAttrs } = window.Graphene;
const componentManager = new WebComponentManager();
componentManager.connect();

const liveSocket = new LiveSocket("/live", Socket, {
  hooks: Hooks,
  dom: { onBeforeElUpdated: mergeWebComponentsAttrs },
});

liveSocket.connect();
```

5. Expose Graphene components in your app:

```elixir
defmodule MyAppWeb.Components do
  use Phoenix.Component
  use Graphene.Components
end
```

Notes:

- Graphene ships Carbon styles + IBM Plex fonts inside `priv/static/assets`, so no Carbon-related npm packages are required.
- When developing this repo locally (the `demo` app), run `mix assets.build` at the repo root to refresh vendored Graphene assets.
- For local debugging you can disable Graphene asset chunking via `GRAPHENE_NO_CHUNKS=1` when running `node assets/build.cjs` directly. To keep commit-ready output safe, `mix assets.build` ignores that flag for `priv/static/assets` unless you also set `GRAPHENE_ALLOW_UNCHUNKED_ASSETS=1`.
- Optional (reduce flicker): preload Graphene’s CSS + a couple of IBM Plex font files. Use the helper to avoid hardcoding hashed filenames:

```heex
<link rel="preload" as="style" href={~p"/graphene/assets/graphene.css"} />
<link rel="stylesheet" href={~p"/graphene/assets/graphene.css"} />
<%= if path = Graphene.Font.path("Regular", "Latin1") do %>
  <link rel="preload" as="font" type="font/woff2" crossorigin href={path} />
<% end %>
<%= if path = Graphene.Font.path("SemiBold", "Latin1") do %>
  <link rel="preload" as="font" type="font/woff2" crossorigin href={path} />
<% end %>
```

<!-- GRAPHENE_INSTALL:END -->
