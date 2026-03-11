defmodule Demo.RouteRenderingFeatureTest do
  use ExUnit.Case, async: false
  use Wallaby.Feature

  import Wallaby.Query, only: [css: 2]

  @moduletag :wallaby

  setup do
    {:ok, session} = Wallaby.start_session()
    on_exit(fn -> Wallaby.end_session(session) end)
    {:ok, session: session}
  end

  @tag timeout: 180_000
  feature "renders all demo routes without compile errors", %{session: session} do
    demo_paths()
    |> Enum.reduce(session, fn path, session ->
      visit_and_assert(session, path)
    end)
  end

  defp visit_and_assert(session, path) do
    try do
      session
      |> visit(path)
      |> assert_has(css("#main-content", count: 1))
      |> wait_for_components_ready()
      |> assert_no_compile_errors()
    rescue
      error in Wallaby.JSError ->
        raise """
        Demo JS error on #{path}:
        #{Exception.message(error)}
        """
    end
  end

  defp assert_no_compile_errors(session) do
    refute has?(session, css("body", text: "Compilation error"))
    refute has?(session, css("body", text: "CompileError"))
    refute has?(session, css("body", text: "Internal Server Error"))
    refute has?(session, css("body", text: "Something went wrong"))
    session
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

  defp demo_paths do
    DemoWeb.Router
    |> Phoenix.Router.routes()
    |> Enum.filter(&(&1.verb == :get))
    |> Enum.map(& &1.path)
    |> Enum.filter(&String.starts_with?(&1, "/demo"))
    |> Enum.reject(&String.contains?(&1, "assets"))
    |> Enum.uniq()
    |> Enum.sort()
  end
end
