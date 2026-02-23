defmodule DemoWeb.Router do
  use DemoWeb, :router
  import PhoenixStorybook.Router

  pipeline :browser do
    plug(:accepts, ["html"])
    plug(:fetch_session)
    plug(:fetch_live_flash)
    plug(:put_root_layout, html: {DemoWeb.Layouts, :root})
    plug(:protect_from_forgery)
    plug(:put_secure_browser_headers)
  end

  # Enable LiveDashboard and Swoosh mailbox preview in development
  if Application.compile_env(:demo, :dev_routes) do
    # If you want to use the LiveDashboard in production, you should put
    # it behind authentication and allow only admins to access it.
    # If your application does not have an admins-only section yet,
    # you can use Plug.BasicAuth to set up some basic authentication
    # as long as you are also using SSL (which you should anyway).
    import Phoenix.LiveDashboard.Router

    scope "/dev", DemoWeb do
      pipe_through(:browser)

      live_dashboard("/dashboard", metrics: DemoWeb.Telemetry)
    end
  end

  scope "/" do
    # these are asserts for the storybook itself, be explicit of where they are
    get("/storybook/assets/css/fonts.css", DemoWeb.StorybookAssetsController, :fonts)
    storybook_assets("/storybook/assets")
  end

  scope "/demo", DemoWeb do
    pipe_through(:browser)

    live("/", DashboardLive)
    live("/infrastructure", InfrastructureLive)
    live("/operations", OperationsLive)
    live("/activity", ActivityLive)
    live("/costs", CostsLive)
    live("/security", SecurityLive)
    live("/settings", SettingsLive)
    live("/support", SupportLive)
    live("/components", ComponentCatalogLive)
    live("/devices", DevicesLive)
  end

  scope "/", DemoWeb do
    pipe_through(:browser)

    live_storybook("/", backend_module: DemoWeb.Storybook)
  end
end
