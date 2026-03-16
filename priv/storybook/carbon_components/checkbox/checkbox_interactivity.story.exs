defmodule Storybook.CarbonComponents.Checkbox.Interactivity do
  use PhoenixStorybook.Story, :example

  alias Graphene.CarbonComponents, as: Carbon

  def doc do
    """
    Interactive checkboxes with change events wired.
    Use it to validate checkbox payloads across multiple options.
    """
  end

  @impl true
  def mount(_params, _session, socket) do
    {:ok, assign(socket, event_log: [])}
  end

  @impl true
  def handle_event("checkbox:event", payload, socket) do
    {:noreply, log_event(socket, payload)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div style="display: grid; gap: 1.5rem;">
      <Carbon.form_group legend_text="Notification settings" helper_text="Pick all that apply">
        <Carbon.checkbox
          id="checkbox-email"
          label_text="Email"
          value="email"
          events={checkbox_events("Email")}
        />
        <Carbon.checkbox
          id="checkbox-sms"
          label_text="SMS"
          value="sms"
          events={checkbox_events("SMS")}
        />
        <Carbon.checkbox
          id="checkbox-push"
          label_text="Push"
          value="push"
          events={checkbox_events("Push")}
        />
      </Carbon.form_group>

      <.event_log logs={@event_log} />
    </div>
    """
  end

  defp checkbox_events(label) do
    [
      {"cds-checkbox-changed",
       [push: "checkbox:event", payload: event_payload("cds-checkbox-changed", %{label: label})]}
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
