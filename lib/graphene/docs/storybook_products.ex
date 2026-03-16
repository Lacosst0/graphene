if Code.ensure_loaded?(PhoenixStorybook.Rendering.ComponentRenderer) do
  defmodule Graphene.Docs.StorybookProducts do
    @moduledoc false

    alias Phoenix.HTML.Safe
    alias PhoenixStorybook.Helpers.ExampleHelpers
    alias PhoenixStorybook.Rendering.{CodeRenderer, ComponentRenderer, RenderingContext}
    alias PhoenixStorybook.Stories.{Variation, VariationGroup}

    @product_roots [
      Path.join(["priv", "storybook", "product_components"]),
      Path.join(["priv", "storybook", "generated", "product"])
    ]
    @story_globs Enum.flat_map(@product_roots, fn root ->
                   [
                     Path.join([root, "*.story.exs"]),
                     Path.join([root, "**", "*.story.exs"])
                   ]
                 end)

    def generate_markdown(opts \\ []) do
      indent = Keyword.get(opts, :indent, 0)
      include_html = Keyword.get(opts, :include_html, true)
      entries = story_entries(include_html)

      lines =
        ["## Product Components Examples", ""] ++
          Enum.flat_map(entries, fn {component, stories} ->
            component_lines(component, stories, component_heading_level: 3)
          end)

      lines
      |> join_lines()
      |> escape_doc()
      |> indent_lines(indent)
    end

    def generate_component_markdown(opts \\ []) do
      include_html = Keyword.get(opts, :include_html, true)
      entries = story_entries(include_html)

      Enum.map(entries, fn {component, stories} ->
        lines =
          [heading(1, "`#{component}`"), ""] ++
            component_body_lines(stories, story_label_level: 2, snippet_label_level: 3)

        {component, join_lines(lines)}
      end)
    end

    defp story_entries(include_html) do
      story_files()
      |> Enum.flat_map(&load_story_modules/1)
      |> Enum.map(&build_story_entry(&1, include_html))
      |> Enum.reject(&is_nil/1)
      |> Enum.group_by(& &1.component)
      |> Enum.sort_by(fn {component, _} -> component end)
      |> Enum.map(fn {component, stories} ->
        sorted =
          stories
          |> Enum.sort_by(fn story -> story.story_label || "" end)

        {component, sorted}
      end)
    end

    defp story_files do
      @story_globs
      |> Enum.flat_map(&Path.wildcard/1)
      |> Enum.uniq()
      |> Enum.sort()
    end

    defp load_story_modules(path) do
      Code.compile_file(path)
      |> Enum.map(fn {module, _} -> {module, path} end)
      |> Enum.filter(fn {module, _} -> function_exported?(module, :storybook_type, 0) end)
    end

    defp build_story_entry({module, path}, include_html) do
      component = component_name(module, path)
      label = story_label(path, component)

      snippets =
        case module.storybook_type() do
          :component -> render_component_story(module, include_html)
          :live_component -> render_component_story(module, include_html)
          :example -> render_example_story(module, include_html)
          _ -> []
        end

      if snippets == [] do
        nil
      else
        %{component: component, story_label: label, snippets: snippets}
      end
    end

    defp render_component_story(story, include_html) do
      if component_available?(story) do
        story.variations()
        |> Enum.flat_map(fn
          %Variation{} = variation ->
            html =
              if include_html do
                render_variation_html(story, variation)
              else
                nil
              end

            [
              %{
                label: to_string(variation.id),
                code: render_variation_code(story, variation),
                html: html,
                lang: "heex"
              }
            ]

          %VariationGroup{} = group ->
            label = "group: #{group.id}"

            html =
              if include_html do
                render_variation_group_html(story, group)
              else
                nil
              end

            [
              %{
                label: label,
                code: render_variation_group_code(story, group),
                html: html,
                lang: "heex"
              }
            ]
        end)
        |> Enum.reject(fn snippet -> snippet.code == "" end)
      else
        []
      end
    end

    defp render_example_story(story, include_html) do
      source =
        story.__source__()
        |> ExampleHelpers.strip_example_source()

      html =
        if include_html do
          render_example_html(story)
        else
          nil
        end

      case extract_heex(source) do
        nil ->
          [
            %{
              label: "example",
              code: escape_triple_quotes(String.trim(source)),
              html: html,
              lang: "elixir"
            }
          ]

        heex ->
          [
            %{
              label: "example",
              code: heex,
              html: html,
              lang: "heex"
            }
          ]
      end
    end

    defp render_variation_code(story, variation) do
      context =
        RenderingContext.build(
          Graphene.Docs.StorybookBackend,
          story,
          variation,
          %{},
          format: false,
          trim: true
        )

      context
      |> CodeRenderer.render()
      |> rendered_to_string()
      |> normalize_code()
    end

    defp render_variation_group_code(story, group) do
      context =
        RenderingContext.build(
          Graphene.Docs.StorybookBackend,
          story,
          group,
          %{},
          format: false,
          trim: true
        )

      context
      |> CodeRenderer.render()
      |> rendered_to_string()
      |> normalize_code()
    end

    defp render_variation_html(story, variation) do
      context =
        RenderingContext.build(
          Graphene.Docs.StorybookBackend,
          story,
          variation,
          %{},
          []
        )

      context
      |> ComponentRenderer.render()
      |> render_to_html()
      |> sanitize_html()
      |> normalize_code()
    end

    defp render_variation_group_html(story, group) do
      context =
        RenderingContext.build(
          Graphene.Docs.StorybookBackend,
          story,
          group,
          %{},
          []
        )

      context
      |> ComponentRenderer.render()
      |> render_to_html()
      |> sanitize_html()
      |> normalize_code()
    end

    defp render_example_html(story) do
      assigns = example_assigns(story)

      story.render(assigns)
      |> render_to_html()
      |> sanitize_html()
      |> normalize_code()
    end

    defp example_assigns(story) do
      socket = %Phoenix.LiveView.Socket{}
      session = %{"theme" => "light"}

      assigns =
        if function_exported?(story, :mount, 3) do
          case story.mount(%{}, session, socket) do
            {:ok, socket} -> socket.assigns
            {:ok, socket, _opts} -> socket.assigns
            _ -> socket.assigns
          end
        else
          socket.assigns
        end

      assigns
      |> Map.put_new(:theme, session["theme"])
      |> Map.put_new(:tab, :example)
    end

    defp render_to_html(%Phoenix.LiveView.Rendered{} = rendered) do
      socket = %Phoenix.LiveView.Socket{}

      {diff, _, _} =
        Phoenix.LiveView.Diff.render(
          socket,
          rendered,
          Phoenix.LiveView.Diff.new_fingerprints(),
          Phoenix.LiveView.Diff.new_components()
        )

      diff
      |> Phoenix.LiveView.Diff.to_iodata()
      |> IO.iodata_to_binary()
    end

    defp render_to_html(other) do
      other
      |> Safe.to_iodata()
      |> IO.iodata_to_binary()
    end

    defp sanitize_html(html) do
      html
      |> then(&Regex.replace(~r/<script\b[^>]*>.*?<\/script>/s, &1, ""))
      |> then(&Regex.replace(~r/\sdata-phx-[a-z-]+="[^"]*"/, &1, ""))
    end

    defp normalize_code(code) do
      code
      |> String.replace("\r\n", "\n")
      |> String.trim()
    end

    defp rendered_to_string(rendered) do
      rendered
      |> Safe.to_iodata()
      |> IO.iodata_to_binary()
    end

    defp extract_heex(source) do
      case Regex.run(~r/~H\"\"\"(.*?)\"\"\"/s, source) do
        [_, heex] -> String.trim(heex)
        _ -> nil
      end
    end

    defp escape_triple_quotes(text) do
      String.replace(text, ~r/\"\"\"/, "\\\"\\\"\\\"")
    end

    defp component_name(story, path) do
      case story.storybook_type() do
        :component ->
          story.function()
          |> function_name()
          |> case do
            nil -> component_from_path(path)
            name -> name
          end

        :live_component ->
          story.component()
          |> Module.split()
          |> List.last()
          |> Macro.underscore()

        _ ->
          component_from_path(path)
      end
    end

    defp function_name(fun) when is_function(fun) do
      Function.info(fun)[:name] |> Atom.to_string()
    end

    defp function_name(_), do: nil

    defp component_available?(story) do
      case story.storybook_type() do
        :component ->
          fun = story.function()
          info = Function.info(fun)
          function_exported?(info[:module], info[:name], 1)

        :live_component ->
          Code.ensure_loaded?(story.component())

        _ ->
          false
      end
    end

    defp component_from_path(path) do
      parts = Path.split(path)

      case Enum.drop_while(parts, &(&1 != "product_components")) do
        ["product_components", file] ->
          Path.basename(file, ".story.exs")

        ["product_components", component_dir | _] ->
          component_dir

        _ ->
          case Enum.drop_while(parts, &(&1 != "generated")) do
            ["generated", "product", file] ->
              Path.basename(file, ".story.exs")

            ["generated", "product", component_dir | _] ->
              component_dir

            _ ->
              Path.basename(path, ".story.exs")
          end
      end
    end

    defp story_label(path, component) do
      relative =
        case story_root_for(path) do
          nil -> Path.basename(path, ".story.exs")
          root -> path |> Path.relative_to(root) |> String.replace_suffix(".story.exs", "")
        end

      label =
        if String.starts_with?(relative, component <> "/") do
          String.replace_prefix(relative, component <> "/", "")
        else
          relative
        end

      case label do
        "" -> nil
        ^component -> nil
        other -> other
      end
    end

    defp story_root_for(path) do
      Enum.find(@product_roots, fn root ->
        String.starts_with?(Path.expand(path), Path.expand(root))
      end)
    end

    defp component_lines(component, stories, opts) do
      component_heading_level = Keyword.fetch!(opts, :component_heading_level)
      story_label_level = component_heading_level + 1
      snippet_label_level = component_heading_level + 2

      [heading(component_heading_level, "`#{component}`"), ""] ++
        component_body_lines(stories,
          story_label_level: story_label_level,
          snippet_label_level: snippet_label_level
        )
    end

    defp component_body_lines(stories, opts) do
      story_label_level = Keyword.fetch!(opts, :story_label_level)
      snippet_label_level = Keyword.fetch!(opts, :snippet_label_level)

      Enum.flat_map(stories, fn story ->
        story_lines(story, story_label_level: story_label_level, snippet_label_level: snippet_label_level)
      end)
    end

    defp story_lines(story, opts) do
      story_label_level = Keyword.fetch!(opts, :story_label_level)
      snippet_label_level = Keyword.fetch!(opts, :snippet_label_level)

      label =
        case story.story_label do
          nil -> []
          label -> [heading(story_label_level, label), ""]
        end

      label ++
        Enum.flat_map(story.snippets, fn snippet ->
          snippet_lines(snippet, snippet_label_level: snippet_label_level)
        end)
    end

    defp snippet_lines(snippet, opts) do
      snippet_label_level = Keyword.fetch!(opts, :snippet_label_level)
      label = heading(snippet_label_level, snippet.label)

      [
        label,
        "",
        "```#{snippet.lang}",
        snippet.code,
        "```",
        ""
      ]
    end

    defp heading(level, text), do: String.duplicate("#", level) <> " " <> text

    defp join_lines(lines) do
      lines
      |> Enum.join("\n")
      |> String.trim_trailing()
      |> Kernel.<>("\n")
    end

    defp escape_doc(content) do
      pattern = "#" <> "{"
      replacement = "\\" <> pattern

      content
      |> String.replace(pattern, replacement)
      |> String.replace(~s(\"\"\"), ~s(\\\"\\\"\\\"))
    end

    defp indent_lines(text, indent) do
      padding = String.duplicate(" ", indent)

      text
      |> String.split("\n")
      |> Enum.map(&"#{padding}#{&1}")
      |> Enum.join("\n")
    end
  end
end
