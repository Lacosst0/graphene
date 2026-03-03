defmodule Storybook.Welcome do
  use PhoenixStorybook.Story, :page
  use Graphene, [:html, :live]

  def doc do
    "Start here: how to read Graphene Storybook and build Carbon-first UIs professionally."
  end

  def render(assigns) do
    component_example =
      ~S"""
      <.button kind="primary">Save</.button>
      <.data_table rows={[]} />
      """
      |> String.trim()

    e2e_commands =
      ~S"""
      cd demo && mix test test/route_rendering_feature_test.exs
      cd demo && mix test test/storybook_rendering_test.exs
      """
      |> String.trim()

    assigns =
      assign(assigns,
        component_example: component_example,
        e2e_commands: e2e_commands
      )

    ~H"""
    <div class="psb-doc">
      <h1>Welcome to Graphene</h1>
      <p>
        Graphene is a Carbon-first component facade for Phoenix LiveView. It wraps Carbon Web
        Components and gives you a consistent component API (slots, defaults, and patterns) so teams
        can ship complex, operational UIs without UI drift.
      </p>

      <h2>How to navigate this Storybook</h2>
      <ul>
        <li>
          <strong>Foundations</strong> explains the “why” behind sentiment, typography, grid, and
          density. Read this first if you’re composing real pages, not just rendering components.
        </li>
        <li>
          <strong>Carbon Components</strong> is the “how” for each building block. Each story includes
          a short usage note and variations that represent real states to validate.
        </li>
        <li>
          <strong>Examples</strong> shows realistic compositions you can adapt when building screens.
        </li>
        <li>
          The <a href="/demo">Nimbus Cloud demo</a> is a working application that exercises layout,
          density, and composition.
        </li>
      </ul>

      <h2>Component syntax (the “dot” style)</h2>
      <p>
        In your app, bring Graphene into scope with <code>use Graphene.Components</code> (typically in
        your <code>MyAppWeb.Components</code> module), then use the concise HEEx form:
      </p>

      <pre class="psb highlight psb:p-2 psb:md:p-3 psb:border psb:border-slate-800 psb:text-xs psb:md:text-sm psb:rounded-md psb:bg-slate-800! psb:whitespace-pre-wrap psb:break-normal">
        <code class="language-heex"><%= @component_example %></code>
      </pre>

      <p>
        In the docs, we refer to components using this <code>&lt;.component&gt;</code> style for
        brevity (for example, <code>.page_header</code>, <code>.grid</code>, <code>.modal</code>).
      </p>

      <h2>Read this first</h2>
      <ul>
        <li><a href="/foundations/sentiment">Sentiment</a></li>
        <li><a href="/foundations/style">Style</a></li>
        <li><a href="/foundations/layout">Layout</a></li>
        <li><a href="/foundations/feel">Feel</a></li>
        <li><a href="/foundations/calligraphy">Calligraphy (Typography)</a></li>
        <li><a href="/foundations/grid_usage">Effective Grid Usage</a></li>
        <li><a href="/foundations/application_outline">Application Page Outline</a></li>
        <li><a href="/foundations/aesthetics">Aesthetics</a></li>
        <li><a href="/foundations/content_density">Content Density</a></li>
      </ul>

      <h2>Get started</h2>
      <p>
        If you’re integrating Graphene into a Phoenix app, these steps are the minimal foundation:
      </p>

      <div class="psb-doc">
        <!-- GRAPHENE_INSTALL:START -->
        <%= Phoenix.HTML.raw(~S'''
        <h2>
        Install in a Phoenix app</h2>
        <ol>
          <li>
        Add the Elixir dependency:  </li>
        </ol>
        <pre class="psb highlight psb:p-2 psb:md:p-3 psb:border psb:border-slate-800 psb:text-xs psb:md:text-sm
        psb:rounded-md psb:bg-slate-800! psb:whitespace-pre-wrap psb:break-normal"><code class="language-elixir"><span class="kd">defp</span><span class="w"> </span><span class="nf">deps</span><span class="w"> </span><span class="k" data-group-id="0830078535-1">do</span><span class="w">
          </span><span class="p" data-group-id="0830078535-2">[</span><span class="w">
            </span><span class="p" data-group-id="0830078535-3">{</span><span class="ss">:graphene</span><span class="p">,</span><span class="w"> </span><span class="s">"~&gt; 0.0.1"</span><span class="p" data-group-id="0830078535-3">}</span><span class="w">
          </span><span class="p" data-group-id="0830078535-2">]</span><span class="w">
        </span><span class="k" data-group-id="0830078535-1">end</span></code></pre>
        <ol start="2">
          <li>
        Serve Graphene’s vendored assets from your endpoint:  </li>
        </ol>
        <pre class="psb highlight psb:p-2 psb:md:p-3 psb:border psb:border-slate-800 psb:text-xs psb:md:text-sm
        psb:rounded-md psb:bg-slate-800! psb:whitespace-pre-wrap psb:break-normal"><code class="language-elixir"><span class="n">plug</span><span class="w"> </span><span class="nc">Plug.Static</span><span class="p">,</span><span class="w">
          </span><span class="ss">at</span><span class="p">:</span><span class="w"> </span><span class="s">"/graphene"</span><span class="p">,</span><span class="w">
          </span><span class="ss">from</span><span class="p">:</span><span class="w"> </span><span class="ss">:graphene</span><span class="p">,</span><span class="w">
          </span><span class="ss">gzip</span><span class="p">:</span><span class="w"> </span><span class="no">false</span><span class="p">,</span><span class="w">
          </span><span class="ss">only</span><span class="p">:</span><span class="w"> </span><span class="sx">~w(assets)</span></code></pre>
        <ol start="3">
          <li>
        Include Graphene’s CSS + JS in your root layout:  </li>
        </ol>
        <pre class="psb highlight psb:p-2 psb:md:p-3 psb:border psb:border-slate-800 psb:text-xs psb:md:text-sm
        psb:rounded-md psb:bg-slate-800! psb:whitespace-pre-wrap psb:break-normal"><code class="language-heex"><span class="p" data-group-id="5219821928-out-1">&lt;</span><span class="nt">link</span><span class="w"> </span><span class="na">rel</span><span class="o">=</span><span class="s">"stylesheet"</span><span class="w"> </span><span class="na">href</span><span class="o">=</span><span class="p" data-group-id="5219821928-1">{</span><span class="sx">~p"/graphene/assets/graphene.css"</span><span class="p" data-group-id="5219821928-1">}</span><span class="s"> </span><span class="p" data-group-id="5219821928-out-1">/&gt;</span><span class="w">
        </span><span class="p" data-group-id="5219821928-out-2">&lt;</span><span class="nt">script</span><span class="w"> </span><span class="na">type</span><span class="o">=</span><span class="s">"module"</span><span class="p" data-group-id="5219821928-out-2">&gt;</span><span class="s">
          import * as Graphene from "</span><span class="p" data-group-id="5219821928-2">&lt;%=</span><span class="w"> </span><span class="sx">~p"/graphene/assets/index.js"</span><span class="w"> </span><span class="p" data-group-id="5219821928-2">%&gt;</span><span class="s">";
          window.Graphene = Graphene;
        </span><span class="p" data-group-id="5219821928-out-3">&lt;/</span><span class="nt">script</span><span class="p" data-group-id="5219821928-out-3">&gt;</span></code></pre>
        <ol start="4">
          <li>
        Wire Graphene into your LiveView entrypoint (<code class="inline">assets/js/app.js</code> or <code class="inline">assets/js/app.ts</code>):  </li>
        </ol>
        <pre class="psb highlight psb:p-2 psb:md:p-3 psb:border psb:border-slate-800 psb:text-xs psb:md:text-sm
        psb:rounded-md psb:bg-slate-800! psb:whitespace-pre-wrap psb:break-normal"><code class="language-typescript"><span class="kr">import</span><span class="w"> </span><span class="p" data-group-id="4015694342-1">{</span><span class="w"> </span><span class="n">LiveSocket</span><span class="w"> </span><span class="p" data-group-id="4015694342-1">}</span><span class="w"> </span><span class="kr">from</span><span class="w"> </span><span class="s">"phoenix_live_view"</span><span class="p">;</span><span class="w">
        </span><span class="kr">import</span><span class="w"> </span><span class="p" data-group-id="4015694342-2">{</span><span class="w"> </span><span class="n">Socket</span><span class="w"> </span><span class="p" data-group-id="4015694342-2">}</span><span class="w"> </span><span class="kr">from</span><span class="w"> </span><span class="s">"phoenix"</span><span class="p">;</span><span class="w">
        
        </span><span class="kd">const</span><span class="w"> </span><span class="p" data-group-id="4015694342-3">{</span><span class="w"> </span><span class="n">WebComponentManager</span><span class="p">,</span><span class="w"> </span><span class="n">Hooks</span><span class="p">,</span><span class="w"> </span><span class="n">mergeWebComponentsAttrs</span><span class="w"> </span><span class="p" data-group-id="4015694342-3">}</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nb">window</span><span class="p">.</span><span class="n">Graphene</span><span class="p">;</span><span class="w">
        </span><span class="kd">const</span><span class="w"> </span><span class="n">componentManager</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="ow">new</span><span class="w"> </span><span class="nf">WebComponentManager</span><span class="p" data-group-id="4015694342-4">(</span><span class="p" data-group-id="4015694342-4">)</span><span class="p">;</span><span class="w">
        </span><span class="n">componentManager</span><span class="p">.</span><span class="nf">connect</span><span class="p" data-group-id="4015694342-5">(</span><span class="p" data-group-id="4015694342-5">)</span><span class="p">;</span><span class="w">
        
        </span><span class="kd">const</span><span class="w"> </span><span class="n">liveSocket</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="ow">new</span><span class="w"> </span><span class="nf">LiveSocket</span><span class="p" data-group-id="4015694342-6">(</span><span class="s">"/live"</span><span class="p">,</span><span class="w"> </span><span class="n">Socket</span><span class="p">,</span><span class="w"> </span><span class="p" data-group-id="4015694342-7">{</span><span class="w">
          </span><span class="n">hooks</span><span class="o">:</span><span class="w"> </span><span class="n">Hooks</span><span class="p">,</span><span class="w">
          </span><span class="n">dom</span><span class="o">:</span><span class="w"> </span><span class="p" data-group-id="4015694342-8">{</span><span class="w"> </span><span class="n">onBeforeElUpdated</span><span class="o">:</span><span class="w"> </span><span class="n">mergeWebComponentsAttrs</span><span class="w"> </span><span class="p" data-group-id="4015694342-8">}</span><span class="w">
        </span><span class="p" data-group-id="4015694342-7">}</span><span class="p" data-group-id="4015694342-6">)</span><span class="p">;</span><span class="w">
        
        </span><span class="n">liveSocket</span><span class="p">.</span><span class="nf">connect</span><span class="p" data-group-id="4015694342-9">(</span><span class="p" data-group-id="4015694342-9">)</span><span class="p">;</span></code></pre>
        <ol start="5">
          <li>
        Expose Graphene components in your app:  </li>
        </ol>
        <pre class="psb highlight psb:p-2 psb:md:p-3 psb:border psb:border-slate-800 psb:text-xs psb:md:text-sm
        psb:rounded-md psb:bg-slate-800! psb:whitespace-pre-wrap psb:break-normal"><code class="language-elixir"><span class="kd">defmodule</span><span class="w"> </span><span class="nc">MyAppWeb.Components</span><span class="w"> </span><span class="k" data-group-id="3783259727-1">do</span><span class="w">
          </span><span class="kn">use</span><span class="w"> </span><span class="nc">Phoenix.Component</span><span class="w">
          </span><span class="kn">use</span><span class="w"> </span><span class="nc">Graphene.Components</span><span class="w">
        </span><span class="k" data-group-id="3783259727-1">end</span></code></pre>
        <p>
        Notes:</p>
        <ul>
          <li>
        Graphene ships Carbon styles + IBM Plex fonts inside <code class="inline">priv/static/assets</code>, so no Carbon-related npm packages are required.  </li>
          <li>
        When developing this repo locally (the <code class="inline">demo</code> app), run <code class="inline">mix assets.build</code> at the repo root to refresh vendored Graphene assets.  </li>
          <li>
        Optional (reduce flicker): preload Graphene’s CSS + a couple of IBM Plex font files. Use the helper to avoid hardcoding hashed filenames:  </li>
        </ul>
        <pre class="psb highlight psb:p-2 psb:md:p-3 psb:border psb:border-slate-800 psb:text-xs psb:md:text-sm
        psb:rounded-md psb:bg-slate-800! psb:whitespace-pre-wrap psb:break-normal"><code class="language-heex"><span class="p" data-group-id="6755798831-out-1">&lt;</span><span class="nt">link</span><span class="w"> </span><span class="na">rel</span><span class="o">=</span><span class="s">"preload"</span><span class="w"> </span><span class="na">as</span><span class="o">=</span><span class="s">"style"</span><span class="w"> </span><span class="na">href</span><span class="o">=</span><span class="p" data-group-id="6755798831-1">{</span><span class="sx">~p"/graphene/assets/graphene.css"</span><span class="p" data-group-id="6755798831-1">}</span><span class="s"> </span><span class="p" data-group-id="6755798831-out-1">/&gt;</span><span class="w">
        </span><span class="p" data-group-id="6755798831-out-2">&lt;</span><span class="nt">link</span><span class="w"> </span><span class="na">rel</span><span class="o">=</span><span class="s">"stylesheet"</span><span class="w"> </span><span class="na">href</span><span class="o">=</span><span class="p" data-group-id="6755798831-2">{</span><span class="sx">~p"/graphene/assets/graphene.css"</span><span class="p" data-group-id="6755798831-2">}</span><span class="s"> </span><span class="p" data-group-id="6755798831-out-2">/&gt;</span><span class="w">
        </span><span class="p" data-group-id="6755798831-3">&lt;%=</span><span class="w"> </span><span class="k">if</span><span class="w"> </span><span class="n">path</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nc">Graphene.Font</span><span class="o">.</span><span class="n">path</span><span class="p" data-group-id="6755798831-ex-1">(</span><span class="s">"Regular"</span><span class="p">,</span><span class="w"> </span><span class="s">"Latin1"</span><span class="p" data-group-id="6755798831-ex-1">)</span><span class="w"> </span><span class="k" data-group-id="6755798831-ex-2">do</span><span class="w"> </span><span class="p" data-group-id="6755798831-3">%&gt;</span><span class="w">
          </span><span class="p" data-group-id="6755798831-out-3">&lt;</span><span class="nt">link</span><span class="w"> </span><span class="na">rel</span><span class="o">=</span><span class="s">"preload"</span><span class="w"> </span><span class="na">as</span><span class="o">=</span><span class="s">"font"</span><span class="w"> </span><span class="na">type</span><span class="o">=</span><span class="s">"font/woff2"</span><span class="w"> </span><span class="na">crossorigin</span><span class="w"> </span><span class="na">href</span><span class="o">=</span><span class="p" data-group-id="6755798831-4">{</span><span class="n">path</span><span class="p" data-group-id="6755798831-4">}</span><span class="s"> </span><span class="p" data-group-id="6755798831-out-3">/&gt;</span><span class="w">
        </span><span class="p" data-group-id="6755798831-5">&lt;%</span><span class="w"> </span><span class="k" data-group-id="6755798831-ex-2">end</span><span class="w"> </span><span class="p" data-group-id="6755798831-5">%&gt;</span><span class="w">
        </span><span class="p" data-group-id="6755798831-6">&lt;%=</span><span class="w"> </span><span class="k">if</span><span class="w"> </span><span class="n">path</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nc">Graphene.Font</span><span class="o">.</span><span class="n">path</span><span class="p" data-group-id="6755798831-ex-3">(</span><span class="s">"SemiBold"</span><span class="p">,</span><span class="w"> </span><span class="s">"Latin1"</span><span class="p" data-group-id="6755798831-ex-3">)</span><span class="w"> </span><span class="k" data-group-id="6755798831-ex-4">do</span><span class="w"> </span><span class="p" data-group-id="6755798831-6">%&gt;</span><span class="w">
          </span><span class="p" data-group-id="6755798831-out-4">&lt;</span><span class="nt">link</span><span class="w"> </span><span class="na">rel</span><span class="o">=</span><span class="s">"preload"</span><span class="w"> </span><span class="na">as</span><span class="o">=</span><span class="s">"font"</span><span class="w"> </span><span class="na">type</span><span class="o">=</span><span class="s">"font/woff2"</span><span class="w"> </span><span class="na">crossorigin</span><span class="w"> </span><span class="na">href</span><span class="o">=</span><span class="p" data-group-id="6755798831-7">{</span><span class="n">path</span><span class="p" data-group-id="6755798831-7">}</span><span class="s"> </span><span class="p" data-group-id="6755798831-out-4">/&gt;</span><span class="w">
        </span><span class="p" data-group-id="6755798831-8">&lt;%</span><span class="w"> </span><span class="k" data-group-id="6755798831-ex-4">end</span><span class="w"> </span><span class="p" data-group-id="6755798831-8">%&gt;</span></code></pre>
        ''') %>
        <!-- GRAPHENE_INSTALL:END -->
      </div>

      <h2>Always run the E2E checks</h2>
      <p>
        When you change stories, examples, or wrappers, validate that every route and every story
        still renders (and that no compile errors leak into the UI):
      </p>

      <pre class="psb highlight psb:p-2 psb:md:p-3 psb:border psb:border-slate-800 psb:text-xs psb:md:text-sm psb:rounded-md psb:bg-slate-800! psb:whitespace-pre-wrap psb:break-normal">
        <code class="language-bash"><%= @e2e_commands %></code>
      </pre>

      <h2>Generated code</h2>
      <p>
        Most Graphene wrappers and many Storybook stories are generated. If you need to change how a
        wrapper works or how stories are structured, prefer updating codegen templates/patches and
        re-running generators over editing generated modules directly.
      </p>
    </div>
    """
  end
end
