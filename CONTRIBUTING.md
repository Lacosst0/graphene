# Contributing to Graphene

First off, thanks for taking the time to contribute! ❤️

> And if you like the project, but just don't have time to contribute, that's fine. You can still support the project by:
>
> - Star the project
> - Tweet about it
> - Refer this project in your project's readme
> - Mention the project at local meetups and tell your friends/colleagues

## Contributing rules

1. Please use Github issues to report bugs and request features and Github pull requests to submit your code
2. Fully AI-vibe coded code is prohibited, but code verified by the user should be flagged with `// User verified AI-generated code`
3. If you commit or do PRs, please follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) specification
4. If you do PRs, please don't include newer versions of auto-generated files
5. Auto-generated files should be commited with the `chore:` or `docs:` commit prefix
6. Use formatters like `mix format` and `npx prettier . --write` with project configuration to keep code consistent

## Development

To start developing, follow these steps:

1. `mix setup` - Install dependencies for Graphene
   1.1. `mix assets.build` - Update auto-generated assets (optional)
2. `cd demo && mix setup` - Install `demo` dependencies
3. `mix phx.server` - Start the `demo` project

We recommend [Elixir official LSP (Expert)](https://github.com/elixir-lang/expert) for better type checking
