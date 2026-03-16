defmodule Storybook.Examples.CoreComponents do
  use PhoenixStorybook.Story, :example
  use Graphene, [:html, :live]

  def doc do
    "An example of what you can achieve with Phoenix core components."
  end

  defstruct [:id, :first_name, :last_name]

  @impl true
  def mount(_params, _session, socket) do
    {:ok,
     assign(socket,
       current_id: 2,
       users: [
         %__MODULE__{id: 1, first_name: "Jose", last_name: "Valim"},
         %__MODULE__{
           id: 2,
           first_name: "Chris",
           last_name: "McCord"
         }
       ]
     )}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <.header style="position: relative;" aria-label="Probabilistic Platform Name">
      <.header_menu_button
        button_label_active="Close menu"
        button_label_inactive="Open menu"
      >
      </.header_menu_button>
      <.header_name href="javascript:void 0" prefix="Probabilistic">[Platform]</.header_name>
      <.header_nav menu_bar_label="Probabilistic [Platform]">
        <.header_nav_item href="javascript:void 0">Link 1</.header_nav_item>
        <.header_nav_item href="javascript:void 0">Link 2</.header_nav_item>
        <.header_nav_item href="javascript:void 0">Link 3</.header_nav_item>
        <.header_menu menu_label="Link 4" trigger_content="Link 4">
          <.header_menu_item href="javascript:void 0">
            Sub_link 1
          </.header_menu_item>
          <.header_menu_item href="javascript:void 0">
            Sub_link 2
          </.header_menu_item>
          <.header_menu_item href="javascript:void 0">
            Sub_link 3
          </.header_menu_item>
        </.header_menu>
      </.header_nav>
    </.header>
    """
  end

  @impl true
  def handle_event("save_user", %{"user" => params}, socket) do
    user = %__MODULE__{
      first_name: params["first_name"],
      last_name: params["last_name"],
      id: socket.assigns.current_id + 1
    }

    {:noreply,
     socket
     |> update(:users, &(&1 ++ [user]))
     |> update(:current_id, &(&1 + 1))}
  end
end
