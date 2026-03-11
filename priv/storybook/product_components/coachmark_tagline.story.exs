defmodule Storybook.ProductComponents.CoachmarkTagline do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon
  alias Graphene.ProductComponents, as: Product

  def doc do
    """
    Coachmark tagline is a specialized onboarding element.
    Use it only within guided onboarding experiences.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, open_tagline: false, event_log: [])}
  end

  @impl true
  def handle_event("open_tagline", _params, socket) do
    {:noreply, assign(socket, open_tagline: true)}
  end

  @impl true
  def handle_event("close_tagline", _params, socket) do
    {:noreply, assign(socket, open_tagline: false)}
  end

  @impl true
  def handle_event("coachmark:event", payload, socket) do
    socket = log_event(socket, payload)

    socket =
      if payload["event"] == "c4p-coachmark-tagline-close" do
        assign(socket, open_tagline: false)
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
        <Carbon.button kind="primary" phx-click="open_tagline">Open coachmark tagline</Carbon.button>
        <Carbon.button kind="ghost" phx-click="close_tagline">Close</Carbon.button>
      </div>

      <%= if @open_tagline do %>
        <Product.coachmark_tagline
          id="coachmark-tagline"
          title="This is a tagline"
          close_icon_description="Close"
          events={[
            {"c4p-coachmark-tagline-close",
             [push: "coachmark:event", payload: event_payload("c4p-coachmark-tagline-close")]},
            {"c4p-coachmark-tagline-cta-click",
             [push: "coachmark:event", payload: event_payload("c4p-coachmark-tagline-cta-click")]}
          ]}
        />
      <% end %>

      <.event_log logs={@event_log} />
    </div>
    """
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
