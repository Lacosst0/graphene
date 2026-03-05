if Mix.env() == :dev do
  defmodule Mix.Tasks.Graphene.Stories.Generate do
    use Mix.Task
    require Logger
    alias Makeup.Formatters.HTML.HTMLFormatter
    alias Makeup.Lexers.{ElixirLexer, HEExLexer, JsLexer}

    @readme_path Path.expand("../../../README.md", __DIR__)
    @welcome_story_path Path.join(["priv", "storybook", "welcome.story.exs"])
    @install_marker_start "<!-- GRAPHENE_INSTALL:START -->"
    @install_marker_end "<!-- GRAPHENE_INSTALL:END -->"
    @pre_class """
    psb highlight psb:p-2 psb:md:p-3 psb:border psb:border-slate-800 psb:text-xs psb:md:text-sm
    psb:rounded-md psb:bg-slate-800! psb:whitespace-pre-wrap psb:break-normal
    """

    defp template_story(:src) do
      Path.join(["lib", "mix", "tasks", "templates", "graphene_component_story.exs"])
    end

    defp template_index(:src) do
      Path.join(["lib", "mix", "tasks", "templates", "graphene_core_storybook_index.exs"])
    end

    defp template_story(:dst, base, name) do
      Path.join([base, "#{name}.story.exs"])
    end

    defp template_index(:dst, base) do
      Path.join([base, "_index.index.exs"])
    end

    defp storybook_location(folder) do
      Path.join(["priv", "storybook", "generated", folder])
    end

    @impl true
    def run(_args \\ []) do
      Logger.debug("Running #{__MODULE__}")

      Tmp.dir(fn path ->
        for name <- Map.keys(Graphene.Internal.CoreComponents.__components__()) do
          component = to_string(name)
          {func_module, func_name} = story_function(component)

          Mix.Generator.copy_template(
            template_story(:src),
            template_story(:dst, path, name),
            component: component,
            module: "CoreComponents",
            func_module: func_module,
            func_name: func_name,
            component_module: "Graphene.Internal.CoreComponents"
          )
        end

        Mix.Generator.copy_template(
          template_index(:src),
          template_index(:dst, path),
          []
        )

        maybe_compile_generated_stories(path)

        Logger.debug("Generation complete, finishing transaction")
        File.rm_rf!(storybook_location("core"))
        File.mkdir_p!(storybook_location("core"))
        File.cp_r(path, storybook_location("core"))
      end)

      update_welcome_story!()
    end

    defp maybe_compile_generated_stories(path) do
      if Code.ensure_loaded?(PhoenixStorybook.Story) do
        path
        |> Path.join("**/*.story.exs")
        |> Path.wildcard()
        |> Enum.each(&Code.compile_file/1)
      else
        Logger.warning(
          "PhoenixStorybook is not available; skipping compile check for generated stories."
        )
      end
    end

    defp story_function("form"), do: {"Graphene.StorybookAliases", "core_form"}
    defp story_function("link"), do: {"Graphene.StorybookAliases", "core_link"}
    defp story_function(component), do: {"Graphene.Internal.CoreComponents", component}

    defp update_welcome_story! do
      if File.exists?(@welcome_story_path) do
        markdown = readme_install_markdown()

        html =
          if markdown == "" do
            "<p>Install instructions are unavailable. Check README.md.</p>"
          else
            markdown_to_html(markdown)
          end

        content = File.read!(@welcome_story_path)
        updated = replace_install_section!(content, html)
        File.write!(@welcome_story_path, updated)
      else
        Logger.warning("Welcome story not found at #{@welcome_story_path}; skipping README injection.")
      end
    end

    defp readme_install_markdown do
      @readme_path
      |> File.read!()
      |> extract_install_section()
    end

    defp extract_install_section(content) do
      with [_, rest] <- String.split(content, @install_marker_start, parts: 2),
           [section, _] <- String.split(rest, @install_marker_end, parts: 2) do
        String.trim(section)
      else
        _ -> ""
      end
    end

    defp markdown_to_html(markdown) do
      if Code.ensure_loaded?(Earmark) do
        {prepared, blocks} = extract_code_blocks(markdown)

        prepared
        |> Earmark.as_html!()
        |> restore_code_blocks(blocks)
        |> unescape_html_entities()
      else
        "<pre>#{markdown}</pre>"
      end
    end

    defp extract_code_blocks(markdown) do
      matches = Regex.scan(~r/```([\w+-]*)\n(.*?)```/s, markdown)

      Enum.with_index(matches)
      |> Enum.reduce({markdown, []}, fn {[full, lang, code], idx}, {acc, blocks} ->
        placeholder = "<!-- GRAPHENE_CODE_BLOCK_#{idx} -->"
        html = highlight_code_block(code, lang)
        updated = String.replace(acc, full, placeholder, global: false)
        {updated, blocks ++ [{placeholder, html}]}
      end)
    end

    defp restore_code_blocks(html, blocks) do
      Enum.reduce(blocks, html, fn {placeholder, block_html}, acc ->
        String.replace(acc, placeholder, block_html)
      end)
    end

    defp highlight_code_block(code, lang) do
      ensure_makeup_started()

      lang = String.downcase(lang || "")
      trimmed = String.trim_trailing(code)

      {lexer, label} =
        case lang do
          "elixir" -> {ElixirLexer, "elixir"}
          "heex" -> {HEExLexer, "heex"}
          "js" -> {JsLexer, "javascript"}
          "javascript" -> {JsLexer, "javascript"}
          "ts" -> {JsLexer, "typescript"}
          "tsx" -> {JsLexer, "typescript"}
          _ -> {nil, lang}
        end

      inner =
        if lexer do
          lexer
          |> apply(:lex, [trimmed])
          |> HTMLFormatter.format_inner_as_binary([])
        else
          escape_html(trimmed)
        end

      ~s(<pre class="#{String.trim(@pre_class)}"><code class="language-#{label}">#{inner}</code></pre>)
    end

    defp escape_html(text) do
      text
      |> Phoenix.HTML.html_escape()
      |> Phoenix.HTML.safe_to_string()
    end

    defp unescape_html_entities(html) do
      html
      |> String.replace("&quot;", "\"")
      |> String.replace("&#34;", "\"")
      |> String.replace("&apos;", "'")
      |> String.replace("&#39;", "'")
      |> String.replace("&#x27;", "'")
      |> String.replace("&amp;", "&")
    end

    defp ensure_makeup_started do
      if Code.ensure_loaded?(Application) do
        _ = Application.ensure_all_started(:makeup_html)
        _ = Application.ensure_all_started(:makeup_eex)
        _ = Application.ensure_all_started(:makeup_js)
      end
    end

    defp replace_install_section!(content, html) do
      pattern =
        ~r/(^\s*<!-- GRAPHENE_INSTALL:START -->)(.*?)(^\s*<!-- GRAPHENE_INSTALL:END -->)/ms

      case Regex.run(pattern, content) do
        nil ->
          raise "Expected install markers in #{@welcome_story_path}"

        _ ->
          Regex.replace(pattern, content, fn _all, start_marker, _old, end_marker ->
            indent = start_marker |> String.split("<!--", parts: 2) |> hd()

            block =
              [
                "<%= Phoenix.HTML.raw(~S'''",
                String.trim(html),
                "''') %>"
              ]
              |> Enum.join("\n")

            formatted = indent_lines(block, indent)
            start_marker <> "\n" <> formatted <> "\n" <> end_marker
          end)
      end
    end

    defp indent_lines(text, indent) do
      text
      |> String.trim()
      |> String.split("\n")
      |> Enum.map_join("\n", fn line -> indent <> line end)
    end

  end
end
