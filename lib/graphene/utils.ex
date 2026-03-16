defmodule Graphene.Utils do
  import Phoenix.LiveView, only: [push_event: 3]

  def push_event_if(socket, condition, event, payload) do
    if condition do
      push_event(socket, event, payload)
    else
      socket
    end
  end
end
