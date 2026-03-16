defmodule Demo.MixProject do
  use Mix.Project

  def project do
    [
      app: :demo,
      version: "0.1.0",
      elixir: "~> 1.16",
      start_permanent: Mix.env() == :prod,
      listeners: [Phoenix.CodeReloader],
      deps: deps(),
      aliases: aliases()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      mod: {Demo.Application, []},
      extra_applications: [:logger]
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:phoenix, "~> 1.8.3"},
      {:phoenix_html, "~> 4.0"},
      {:phoenix_live_view, "~>  1.1.0"},
      {:phoenix_live_reload, "~> 1.2", only: :dev},
      {:floki, ">= 0.30.0", only: :test},
      {:lazy_html, ">= 0.1.0", only: :test},
      {:wallaby, "~> 0.30.0", only: :test, runtime: false},
      {:phoenix_live_dashboard, "~> 0.8.3"},
      {:telemetry_metrics, "~> 1.0"},
      {:telemetry_poller, "~> 1.0"},
      {:gettext, "~> 1.0.2"},
      {:jason, "~> 1.2"},
      {:dns_cluster, "~> 0.1.1"},
      {:bandit, "~> 1.2"},
      {:graphene, path: ".."},
      {:tmp, "~> 0.2.0", only: :dev},
      {:phoenix_storybook, "~> 1.0.0", only: :dev},
      {:maplibre, "~> 0.1.9"}
    ]
  end

  # Aliases are shortcuts or tasks specific to the current project.
  # For example, to install project dependencies and perform other setup tasks, run:
  #
  #     $ mix setup
  #
  # See the documentation for `Mix` for more info on aliases.
  defp aliases do
    [
      setup: ["deps.get", "assets.setup", "assets.build"],
      # building assets requires npm available in shell
      "assets.setup": [
        # install Graphene package deps for local file dependency
        "cmd --cd ../assets npm install",
        # download files to node_modules
        "cmd --cd assets npm install"
      ],
      "assets.build": [
        # our build requires build.js where esbuild is limited in CLI
        "cmd --cd assets node build.js",
        "cmd --cd assets node patch-number-input.js"
      ],
      "assets.deploy": [
        # same as build but digests the output
        "cmd --cd assets node build.js --deploy",
        "phx.digest"
      ]
    ]
  end
end
