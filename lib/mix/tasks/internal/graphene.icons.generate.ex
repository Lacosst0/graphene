if Mix.env() == :dev do
  defmodule Mix.Tasks.Graphene.Icons.Generate do
    use Mix.Task
    require Logger

    @svg_regex ~r/<svg (?<defaults>[^>]+)+>(?<content>.*)<\/svg>/
    @view_box_regex ~r/viewBox="(?<viewBox>\d+ \d+ \d+ \d+)"/

    @impl true
    def run(args \\ []) do
      Logger.debug("Running #{__MODULE__}")

      icons =
        svgsrc()
        |> extract_metadata()
        |> group_icon()
        |> Enum.sort(&(&1.name < &2.name))

      icons =
        if Enum.member?(args, "debug") do
          Enum.take(icons, 1)
        else
          icons
        end

      tmp_dir =
        Path.join(System.tmp_dir!(), "graphene-icons-#{System.unique_integer([:positive])}")

      File.mkdir_p!(tmp_dir)
      tmp_dst = Path.join(tmp_dir, "icons_raw.ex")

      Mix.Generator.copy_template(
        templatesrc(),
        tmp_dst,
        [icons: icons, version: version(), module: "Graphene.Internal.IconsRaw"],
        force: true
      )

      Mix.Task.reenable("format")
      Mix.Task.run("format", [tmp_dst])

      compile_generated!(tmp_dst, "Graphene.Internal.IconsRaw")

      File.mkdir_p!(Path.dirname(templatedst()))
      File.cp!(tmp_dst, templatedst())
      Logger.debug("Added #{length(icons)} icons")
    end

    defp templatesrc() do
      Path.join(["lib", "mix", "tasks", "templates", "graphene_icons_raw.ex"])
    end

    defp templatedst() do
      Path.join(["lib", "graphene", "internal", "icons_raw.ex"])
    end

    defp svgsrc() do
      Path.join(["assets", "node_modules", "@carbon", "icons", "svg"])
    end

    defp version() do
      package = Path.join(["assets", "node_modules", "@carbon", "icons", "package.json"])
      File.read!(package) |> Jason.decode!() |> Map.fetch!("version")
    end

    defp relpath(meta) do
      Map.put(meta, :relpath, Path.relative_to(meta.path, svgsrc()))
    end

    defp svgsize(meta) do
      [folder | _] = Path.split(meta.relpath)

      size =
        case folder do
          "16" -> 16
          "20" -> 20
          "24" -> 24
          "32" -> 32
          _ -> nil
        end

      Map.put(meta, :size, size)
    end

    defp name(meta) do
      origname =
        meta.path
        |> Path.basename()
        |> String.replace_trailing(".svg", "")
        |> String.downcase()

      Map.put(meta, :name, origname)
    end

    defp content(%{path: path} = meta) do
      content =
        File.read!(path)
        |> String.trim()

      case Regex.named_captures(@svg_regex, content) do
        %{"content" => artwork, "defaults" => defautls} ->
          %{"viewBox" => view_box} = Regex.named_captures(@view_box_regex, defautls)

          meta
          |> Map.put(:content, artwork)
          |> Map.put(:view_box, view_box)

        result ->
          Logger.warning(
            "could not parse #{inspect(content)}, got #{inspect(result)} in #{inspect(meta)}"
          )

          Map.put(meta, :content, nil)
      end
    end

    defp extract_metadata(src_dir) do
      Path.wildcard(Path.join([src_dir, "**", "*.svg"]))
      |> Stream.map(fn path -> %{path: path} end)
      |> Stream.map(&relpath/1)
      |> Stream.map(&svgsize/1)
      |> Stream.map(&name/1)
      |> Stream.map(&content/1)
      # remove glyphs and some icons that seem to not have any content
      |> Enum.filter(&(&1.content != nil and &1.size != nil))
    end

    defp group_icon(svginfo) do
      svginfo
      |> Enum.group_by(& &1.name)
      |> Enum.map(&as_icon/1)
    end

    defp as_icon({name, svginfo}) do
      # for now use the largest icon as a fallback
      [default | variants] = Enum.sort(svginfo, &(&1.size > &2.size))

      %{
        name: name,
        variants: variants,
        default: default
      }
    end

    defp compile_generated!(path, module_name) do
      content = File.read!(path)
      module_decl = "defmodule #{module_name} do"
      check_module = "#{module_name}.GeneratedCheck"

      content =
        if String.contains?(content, module_decl) do
          String.replace(content, module_decl, "defmodule #{check_module} do", global: false)
        else
          raise "Expected #{module_decl} in generated output"
        end

      Code.compile_string(content, path)
      :ok
    end
  end
end
