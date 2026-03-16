defmodule Graphene.MixProject do
  use Mix.Project

  def project do
    [
      app: :graphene,
      # same as webcomponents
      version: "0.0.1",
      elixir: "~> 1.14",
      elixirc_paths: elixirc_paths(Mix.env()),
      start_permanent: Mix.env() == :prod,
      aliases: aliases(),
      deps: deps()
    ]
  end

  # Configuration for the OTP application.
  #
  # Type `mix help compile.app` for more information.
  def application do
    [
      extra_applications: [:logger]
    ]
  end

  # Specifies which paths to compile per environment.
  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(_), do: ["lib"]

  # Specifies your project dependencies.
  #
  # Type `mix help deps` for examples and options.
  defp deps do
    [
      {:phoenix, "~> 1.8.3"},
      {:phoenix_html, "~> 4.0"},
      {:phoenix_live_view, "~>  1.1.0"},
      {:gettext, "~> 1.0.2"},
      {:lib_combin, "~> 0.1.5"},
      {:esbuild, "~> 0.8", runtime: false},
      # dev deps (e.g. for code gen)
      {:jason, "~> 1.4"},
      {:phoenix_storybook, "~> 0.9.3", only: :dev},
      {:earmark, "~> 1.4", only: :dev},
      {:makeup_js, "~> 0.1.0", only: :dev},
      # testing
      {:floki, ">= 0.30.0", only: :test},
      # stories
      {:tmp, "~> 0.2.0", only: :dev}
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
      setup: ["deps.get", "assets.build"],
      # building assets requires npm available in shell
      "assets.setup": [
        # download files to node_modules
        "cmd --cd assets npm install"
      ],
      "assets.clean": ["cmd rm -rf priv/static/assets"],
      "assets.build": [
        "assets.setup",
        "assets.clean",
        "cmd --cd assets node build.cjs --outdir ../priv/static/assets"
      ],
      "assets.build.dev": [
        "assets.setup",
        "assets.clean",
        "cmd --cd assets env GRAPHENE_NO_CHUNKS=1 GRAPHENE_ALLOW_UNCHUNKED_ASSETS=1 node build.cjs --outdir ../priv/static/assets"
      ],
      "assets.deploy": [
        "assets.setup",
        "assets.clean",
        "cmd --cd assets node build.cjs --deploy --outdir ../priv/static/assets"
      ]
    ]
  end
end
