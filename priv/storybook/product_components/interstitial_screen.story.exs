defmodule Storybook.ProductComponents.InterstitialScreen do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon
  alias Graphene.ProductComponents, as: Product

  def doc do
    """
    Interstitial screens provide guided, multi-step onboarding in a modal or
    full-screen experience. Use the body items for step content and the footer
    for navigation actions.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, active_screen: nil, event_log: [])}
  end

  @impl true
  def handle_event("open_screen", %{"id" => id}, socket) do
    {:noreply, assign(socket, active_screen: id)}
  end

  @impl true
  def handle_event("close_screen", _params, socket) do
    {:noreply, assign(socket, active_screen: nil)}
  end

  @impl true
  def handle_event("interstitial:event", payload, socket) do
    socket = log_event(socket, payload)

    socket =
      if payload["event"] == "c4p-interstitial-closed" do
        assign(socket, active_screen: nil)
      else
        socket
      end

    {:noreply, socket}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1rem;">
      <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
        <Carbon.button kind="primary" phx-click="open_screen" phx-value-id="modal">
          Open modal
        </Carbon.button>
        <Carbon.button kind="secondary" phx-click="open_screen" phx-value-id="modal_multi_step">
          Open modal (multi-step)
        </Carbon.button>
        <Carbon.button kind="secondary" phx-click="open_screen" phx-value-id="modal_async_action">
          Open modal (async action)
        </Carbon.button>
        <Carbon.button kind="secondary" phx-click="open_screen" phx-value-id="custom_actions">
          Open modal (custom actions)
        </Carbon.button>
        <Carbon.button kind="secondary" phx-click="open_screen" phx-value-id="full_screen">
          Open full screen
        </Carbon.button>
        <Carbon.button kind="secondary" phx-click="open_screen" phx-value-id="full_screen_multi_step">
          Open full screen (multi-step)
        </Carbon.button>
        <Carbon.button kind="ghost" phx-click="close_screen">Close</Carbon.button>
      </div>

      <Product.interstitial_screen
        :if={@active_screen == "modal"}
        id="interstitial-modal"
        open
        events={interstitial_events("modal")}
      >
        <:header>
          <Product.interstitial_screen_header
            header_title="Use case-specific title"
            header_subtitle="Use case-specific sub title"
          />
        </:header>
        <:body>
          <.single_step_body variant="modal" />
        </:body>
        <:footer>
          <Product.interstitial_screen_footer />
        </:footer>
      </Product.interstitial_screen>

      <Product.interstitial_screen
        :if={@active_screen == "modal_multi_step"}
        id="interstitial-modal-multi-step"
        open
        events={interstitial_events("modal_multi_step")}
      >
        <:header>
          <Product.interstitial_screen_header
            header_title="Use case-specific title"
            header_subtitle="Use case-specific sub title"
          />
        </:header>
        <:body>
          <.multi_step_body variant="modal_multi_step" />
        </:body>
        <:footer>
          <Product.interstitial_screen_footer />
        </:footer>
      </Product.interstitial_screen>

      <Product.interstitial_screen
        :if={@active_screen == "modal_async_action"}
        id="interstitial-modal-async-action"
        open
        events={interstitial_events("modal_async_action")}
      >
        <:header>
          <Product.interstitial_screen_header
            header_title="Use case-specific title"
            header_subtitle="Use case-specific sub title"
          />
        </:header>
        <:body>
          <.multi_step_body variant="modal_async_action" />
        </:body>
        <:footer>
          <Product.interstitial_screen_footer async_action={true} />
        </:footer>
      </Product.interstitial_screen>

      <Product.interstitial_screen
        :if={@active_screen == "custom_actions"}
        id="interstitial-custom-actions"
        open
        events={interstitial_events("custom_actions")}
      >
        <:header>
          <Product.interstitial_screen_header
            header_title="Use case-specific title"
            header_subtitle="Use case-specific sub title"
          />
        </:header>
        <:body>
          <.multi_step_body variant="custom_actions" />
        </:body>
        <:footer>
          <div class="c4p--interstitial-screen--footer">
            <Carbon.button
              kind="ghost"
              class="c4p--interstitial-screen--skip-btn"
              phx-click="close_screen"
            >
              Skip
            </Carbon.button>
            <div class="c4p--interstitial-screen--footer-controls">
              <Carbon.button kind="secondary" class="c4p--interstitial-screen--prev-btn">
                Back
              </Carbon.button>
              <Carbon.button kind="primary" class="c4p--interstitial-screen--next-btn">
                Next
                <:icon>
                  <Carbon.icon name="arrow--right" size="16" />
                </:icon>
              </Carbon.button>
            </div>
          </div>
        </:footer>
      </Product.interstitial_screen>

      <Product.interstitial_screen
        :if={@active_screen == "full_screen"}
        id="interstitial-full-screen"
        open
        fullscreen
        role="main"
        events={interstitial_events("full_screen")}
      >
        <:header>
          <Product.interstitial_screen_header
            header_title="Use case-specific title"
            header_subtitle="Use case-specific sub title"
          />
        </:header>
        <:body>
          <.single_step_body variant="full_screen" />
        </:body>
        <:footer>
          <Product.interstitial_screen_footer />
        </:footer>
      </Product.interstitial_screen>

      <Product.interstitial_screen
        :if={@active_screen == "full_screen_multi_step"}
        id="interstitial-full-screen-multi-step"
        open
        fullscreen
        role="main"
        events={interstitial_events("full_screen_multi_step")}
      >
        <:header>
          <Product.interstitial_screen_header
            header_title="Use case-specific title"
            header_subtitle="Use case-specific sub title"
          />
        </:header>
        <:body>
          <.multi_step_body variant="full_screen_multi_step" />
        </:body>
        <:footer>
          <Product.interstitial_screen_footer />
        </:footer>
      </Product.interstitial_screen>

      <.event_log logs={@event_log} />
    </div>
    """
  end

  defp single_step_body(assigns) do
    assigns = assign_new(assigns, :variant, fn -> "interstitial" end)
    step = single_step(assigns.variant)
    assigns = assign(assigns, :step, step)

    ~H"""
    <Product.interstitial_screen_body>
      <Product.interstitial_screen_body_item id={@step.id} step_title={@step.step_title}>
        <.view_module
          aria_label={@step.aria_label}
          title={@step.title}
          body={@step.body}
          enable_tag={@step.enable_tag}
        />
      </Product.interstitial_screen_body_item>
    </Product.interstitial_screen_body>
    """
  end

  defp multi_step_body(assigns) do
    assigns = assign_new(assigns, :variant, fn -> "interstitial" end)

    ~H"""
    <Product.interstitial_screen_body>
      <%= for step <- multi_steps(@variant) do %>
        <Product.interstitial_screen_body_item id={step.id} step_title={step.step_title}>
          <.view_module
            aria_label={step.aria_label}
            title={step.title}
            body={step.body}
            extras={step.extras}
          />
        </Product.interstitial_screen_body_item>
      <% end %>
    </Product.interstitial_screen_body>
    """
  end

  defp view_module(assigns) do
    assigns =
      assigns
      |> assign_new(:extras, fn -> [] end)
      |> assign_new(:enable_tag, fn -> false end)

    ~H"""
    <div role="complementary" aria-label={@aria_label} class="c4p--interstitial-screen-view">
      <section class="c4p--interstitial-screen-view-module">
        <h1 class="c4p--interstitial-screen-view-module--heading">{@title}</h1>
        <p class="c4p--interstitial-screen-view-module--body">{@body}</p>

        <%= if @enable_tag do %>
          <Carbon.selectable_tag
            text="Enable Get Started"
            size="md"
            class="c4p--interstitial-screen-view-module--enableTag"
          >
            <Carbon.icon name="checkmark" size="16" slot="icon" />
          </Carbon.selectable_tag>
        <% end %>
      </section>

      <%= for extra <- @extras do %>
        <section class="c4p--interstitial-screen-view-module">
          <h2 class="c4p--interstitial-screen-view-module--heading">{extra.title}</h2>
          <p class="c4p--interstitial-screen-view-module--body">{extra.body}</p>
        </section>
      <% end %>
    </div>
    """
  end

  defp single_step(variant) do
    %{
      id: "#{variant}-step-1",
      step_title: "Step 1",
      aria_label: "Use case-specific heading",
      title: "Use case-specific heading",
      body:
        "Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept.",
      enable_tag: true
    }
  end

  defp multi_steps(variant) do
    [
      %{
        id: "#{variant}-step-1",
        step_title: "Step 1",
        aria_label: "Step 1",
        title: "Use case-specific heading 1",
        body:
          "Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept.",
        extras: []
      },
      %{
        id: "#{variant}-step-2",
        step_title: "Step 2",
        aria_label: "Step 2",
        title: "Use case-specific heading 2",
        body:
          "Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept.",
        extras: []
      },
      %{
        id: "#{variant}-step-3",
        step_title: "Step 3",
        aria_label: "Step 3",
        title: "Use case-specific heading 3",
        body:
          "Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept.",
        extras: [
          %{
            title: "More content",
            body:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popular in the 1960s with the release sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like PageMaker including versions of Lorem Ipsum."
          }
        ]
      },
      %{
        id: "#{variant}-step-4",
        step_title: "Step 4",
        aria_label: "Step 4",
        title: "Use case-specific heading 4",
        body:
          "Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept. Use case-specific content that explains the concept.",
        extras: []
      }
    ]
  end

  defp interstitial_events(variant) do
    [
      {"c4p-interstitial-opened",
       [
         push: "interstitial:event",
         payload: event_payload("c4p-interstitial-opened", %{variant: variant})
       ]},
      {"c4p-interstitial-beingclosed",
       [
         push: "interstitial:event",
         payload: event_payload("c4p-interstitial-beingclosed", %{variant: variant})
       ]},
      {"c4p-interstitial-closed",
       [
         push: "interstitial:event",
         payload: event_payload("c4p-interstitial-closed", %{variant: variant})
       ]}
    ]
  end

  defp event_payload(event, extra \\ %{}) do
    %{merge: [:detail, :target], static: Map.merge(%{event: event}, extra)}
  end

  defp log_event(socket, payload) do
    update(socket, :event_log, fn logs ->
      [%{event: payload["event"] || "event", payload: payload} | Enum.take(logs, 19)]
    end)
  end

  attr :logs, :list, default: []

  defp event_log(assigns) do
    ~H"""
    <div>
      <h4>Event payloads</h4>
      <pre>
    <%= for log <- Enum.reverse(@logs) do %>
    [<%= log.event %>] <%= Jason.encode!(log.payload) %>
    <% end %>
      </pre>
    </div>
    """
  end
end
