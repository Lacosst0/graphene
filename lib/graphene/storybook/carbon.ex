defmodule Graphene.Docs.StorybookBackend do
  @moduledoc false

  def config(_key, default), do: default
end

if Code.ensure_loaded?(PhoenixStorybook.Rendering.ComponentRenderer) do
  defmodule Graphene.Docs.StorybookCarbon do
    @moduledoc false

    alias Phoenix.HTML.Safe
    alias PhoenixStorybook.Helpers.ExampleHelpers
    alias PhoenixStorybook.Rendering.{CodeRenderer, ComponentRenderer, RenderingContext}
    alias PhoenixStorybook.Stories.{Variation, VariationGroup}

    @carbon_root Path.join(["priv", "storybook", "carbon_components"])
    @story_globs [
      Path.join([@carbon_root, "*.story.exs"]),
      Path.join([@carbon_root, "**", "*.story.exs"])
    ]

    def generate_markdown(opts \\ []) do
      indent = Keyword.get(opts, :indent, 0)
      include_html = Keyword.get(opts, :include_html, true)
      entries = story_entries(include_html)

      lines =
        ["## Carbon Components Examples", ""] ++
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

      case Enum.drop_while(parts, &(&1 != "carbon_components")) do
        ["carbon_components", file] ->
          Path.basename(file, ".story.exs")

        ["carbon_components", component_dir | _] ->
          component_dir

        _ ->
          Path.basename(path, ".story.exs")
      end
    end

    defp story_label(path, component) do
      relative =
        path
        |> Path.relative_to(@carbon_root)
        |> String.replace_suffix(".story.exs", "")

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
        story_lines =
          case story.story_label do
            nil -> []
            label -> [heading(story_label_level, label), ""]
          end

        story_lines ++
          Enum.flat_map(story.snippets, &snippet_lines(&1, snippet_label_level)) ++
          [""]
      end)
    end

    defp snippet_lines(%{label: label, code: code, lang: lang} = snippet, label_level) do
      header =
        case label do
          nil -> []
          _ -> [heading(label_level, label), ""]
        end

      html_block =
        case Map.get(snippet, :html) do
          nil ->
            []

          html ->
            [
              "```html",
              html,
              "```",
              ""
            ]
        end

      header ++
        [
          "```#{lang}",
          code,
          "```",
          ""
        ] ++ html_block
    end

    defp normalize_code(code) do
      code
      |> String.replace("\r\n", "\n")
      |> String.trim()
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
      Regex.replace(~r/<script\b[^>]*>.*?<\/script>/s, html, "")
    end

    defp escape_doc(content) do
      pattern = "#" <> "{"
      replacement = "\\" <> pattern

      content
      |> String.replace(pattern, replacement)
      |> String.replace(~s(\"\"\"), ~s(\\\"\\\"\\\"))
    end

    defp heading(level, text) when is_integer(level) and level > 0 do
      String.duplicate("#", level) <> " " <> text
    end

    defp join_lines(lines) do
      lines
      |> Enum.join("\n")
      |> String.trim_trailing()
      |> Kernel.<>("\n")
    end

    defp rendered_to_string(rendered) do
      rendered
      |> Safe.to_iodata()
      |> IO.iodata_to_binary()
    end

    defp extract_heex(source) do
      Regex.run(~r/~H\"\"\"(.*?)\"\"\"/s, source, capture: :all_but_first)
      |> case do
        [heex] ->
          heex |> String.trim()

        _ ->
          Regex.run(~r/~H'''(.*?)'''/s, source, capture: :all_but_first)
          |> case do
            [heex] -> heex |> String.trim()
            _ -> nil
          end
      end
    end

    defp escape_triple_quotes(code) do
      String.replace(code, ~s(\"\"\"), ~s(\\\"\\\"\\\"))
    end

    defp indent_lines(content, 0), do: content

    defp indent_lines(content, indent) when is_integer(indent) and indent > 0 do
      pad = String.duplicate(" ", indent)

      content
      |> String.split("\n")
      |> Enum.map_join("\n", fn
        "" -> pad |> String.trim_trailing()
        line -> pad <> line
      end)
    end
  end
else
  defmodule Graphene.Docs.StorybookCarbon do
    @moduledoc false

    def generate_markdown(_opts \\ []) do
      ""
    end

    def generate_component_markdown(_opts \\ []) do
      []
    end
  end
end
