defmodule Demo.StorybookRenderingFeatureTest do
  use ExUnit.Case, async: false
  use Wallaby.Feature

  @moduletag :wallaby

  @tag timeout: 600_000
  feature "renders all storybook stories (parallelized)", _ctx do
    paths = story_paths()
    partitions = partition_count(paths)

    paths
    |> partition_story_paths(partitions)
    |> Task.async_stream(&run_partition/1,
      max_concurrency: partitions,
      timeout: 600_000,
      on_timeout: :kill_task
    )
    |> Enum.each(fn
      {:ok, :ok} ->
        :ok

      {:exit, reason} ->
        exit(reason)
    end)
  end

  defp assert_story_renders(session, path) do
    html = Wallaby.Browser.page_source(session)

    # All stories render inside a sandbox container. If it's missing, we likely hit a 500 or LV crash.
    unless html =~ "psb-sandbox" do
      raise """
      Storybook failed to render sandbox on #{path}:
      Missing .psb-sandbox in page source.
      """
    end

    assert_no_compile_errors_in_source(html, path)
    session
  end

  defp story_paths do
    storybook_root = Path.join(:code.priv_dir(:graphene), "storybook")

    storybook_root
    |> Path.join("**/*.story.exs")
    |> Path.wildcard()
    |> Enum.map(&storybook_path/1)
    |> Enum.reject(&String.starts_with?(&1, "/generated/"))
    |> Enum.sort()
  end

  defp partition_count(paths) do
    max_partitions = max(1, div(System.schedulers_online(), 5))
    min(max_partitions, max(1, length(paths)))
  end

  defp partition_story_paths(paths, count) do
    paths
    |> Enum.with_index()
    |> Enum.reduce(List.duplicate([], count), fn {path, idx}, acc ->
      bucket = rem(idx, count)
      List.update_at(acc, bucket, &[path | &1])
    end)
    |> Enum.with_index(1)
    |> Enum.map(fn {bucket_paths, bucket_index} ->
      {bucket_index, Enum.reverse(bucket_paths)}
    end)
  end

  defp run_partition({partition_index, paths}) do
    {:ok, session} = Wallaby.start_session()

    try do
      Enum.reduce(paths, session, fn path, session ->
        try do
          session = visit(session, path)
          session = wait_for_components_ready(session)

          session
          |> assert_story_renders(path)
        rescue
          error in Wallaby.JSError ->
            raise """
            Storybook JS error on #{path} (partition #{partition_index}):
            #{Exception.message(error)}
            """

          error in Wallaby.ExpectationNotMetError ->
            raise """
            Storybook failed to render sandbox on #{path} (partition #{partition_index}):
            #{Exception.message(error)}
            """
        end
      end)

      :ok
    after
      Wallaby.end_session(session)
    end
  end

  defp storybook_path(file) do
    storybook_root = Path.join(:code.priv_dir(:graphene), "storybook")
    relative = Path.relative_to(file, storybook_root)
    "/" <> String.replace_suffix(relative, ".story.exs", "")
  end

  defp assert_no_compile_errors_in_source(html, path) do
    # These are the common error pages surfaced by Phoenix/Phoenix LiveView when a story crashes.
    error_markers = [
      "Compilation error",
      "CompileError",
      "Internal Server Error",
      # Avoid false-positives from story content by matching the Phoenix error heading.
      "<h1>Something went wrong</h1>"
    ]

    Enum.each(error_markers, fn marker ->
      if String.contains?(html, marker) do
        raise "Storybook error on #{path}: #{marker}"
      end
    end)
  end

  defp wait_for_components_ready(session, attempts \\ 20) do
    token = System.unique_integer([:positive])
    do_wait_for_components_ready(session, token, attempts)
  end

  defp do_wait_for_components_ready(session, _token, 0), do: session

  defp do_wait_for_components_ready(session, token, attempts) do
    Wallaby.Browser.execute_script(
      session,
      """
      const token = #{token};
      const manager = window.componentManager;
      if (manager && typeof manager.whenReady === "function") {
        if (window.__grapheneReadyToken !== token) {
          window.__grapheneReadyToken = token;
          window.__grapheneReadyDoneToken = null;
          manager.whenReady()
            .then(() => { window.__grapheneReadyDoneToken = token; })
            .catch(() => { window.__grapheneReadyDoneToken = token; });
        }
      }

      const tags = new Set();
      document.querySelectorAll("*").forEach((el) => {
        const tag = el.tagName?.toLowerCase?.();
        if (tag && tag.includes("-")) tags.add(tag);
      });
      for (const tag of tags) {
        if (!customElements.get(tag)) return false;
      }
      return true;
      """,
      fn ready ->
        if ready do
          session
        else
          Process.sleep(250)
          do_wait_for_components_ready(session, token, attempts - 1)
        end
      end
    )
  end
end

defmodule Demo.StorybookRenderingServerTest do
  use ExUnit.Case, async: true
  import Phoenix.ConnTest
  import Phoenix.LiveViewTest

  @endpoint DemoWeb.Endpoint

  test "table story renders rows server-side" do
    {:ok, _view, html} =
      build_conn()
      |> live("/basic_components/table/basic")

    # If rendering fails (e.g., invalid DOM ids), LiveView exits and this assertion is never reached.
    assert html =~ "basic-table"
    assert html =~ "Load Balancer"
    assert html =~ "cds-table"
  end
end
