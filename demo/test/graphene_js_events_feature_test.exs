defmodule Demo.GrapheneJSEventsFeatureTest do
  use ExUnit.Case, async: false
  use Wallaby.Feature

  import Wallaby.Query, only: [css: 1, css: 2]

  @moduletag :wallaby

  setup do
    {:ok, session} = Wallaby.start_session()
    on_exit(fn -> Wallaby.end_session(session) end)
    {:ok, session: session}
  end

  @tag timeout: 600_000
  feature "Graphene.JS events usage patterns", %{session: session} do
    session =
      session
      |> visit("/components/js_events")
      |> wait_for_components_ready()

    assert_has(session, css("h1", text: "Graphene JS Events"))

    session
    |> click(css("#pattern-1-trigger"))
    |> assert_has(css("#pattern-1-result[data-payload*='\"source\":\"direct\"']"))

    session
    |> click(css("#pattern-2-trigger"))
    |> assert_has(css("#pattern-2-result[data-payload*='\"source\":\"wrapper\"']"))

    session
    |> click(css("#pattern-3-trigger"))
    |> assert_has(css("#pattern-3-result[data-payload*='\"ok\":true']"))

    session
    |> click(css("#pattern-4-trigger"))
    |> assert_has(css("#pattern-4-panel.is-open"))

    session
    |> click(css("#pattern-5-trigger"))
    |> assert_has(css("#pattern-5-panel.is-open"))
    |> assert_has(css("#pattern-5-result[data-payload*='\"ok\":true']"))

    session
    |> click(css("#pattern-6-trigger-a"))
    |> assert_has(css("#pattern-6-result[data-payload*='\"source\":\"a\"']"))

    session
    |> click(css("#pattern-6-trigger-b"))
    |> assert_has(css("#pattern-6-result[data-payload*='\"source\":\"b\"']"))

    session
    |> click(css("#pattern-7-trigger-closed"))
    |> assert_has(css("#pattern-7-result-closed[data-payload*='\"ok\":true']"))

    session
    |> click(css("#pattern-7-trigger-closing"))
    |> assert_has(css("#pattern-7-panel.closing"))

    session
    |> click(css("#pattern-7-trigger-back"))
    |> assert_has(css("#pattern-7-result-back[data-payload*='\"ok\":true']"))

    session
    |> click(css("#pattern-8-trigger"))
    |> assert_has(css("#pattern-8-result[data-payload*='\"ok\":true']"))

    session
    |> click(css("#pattern-9-detail-trigger"))
    |> assert_has(css("#pattern-9-detail-result[data-payload*='\"id\":\"prod\"']"))

    session
    |> click(css("#pattern-9-target-trigger"))
    |> assert_has(css("#pattern-9-target-result[data-payload*='\"value\":\"alerts\"']"))
    |> assert_has(css("#pattern-9-target-result[data-payload*='\"checked\":true']"))

    session
    |> click(css("#pattern-9-all-trigger"))
    |> assert_has(css("#pattern-9-all-result[data-payload*='\"id\":\"all\"']"))
    |> assert_has(css("#pattern-9-all-result[data-payload*='\"value\":\"notify\"']"))

    session
    |> click(css("#pattern-10-trigger"))
    |> assert_has(css("#pattern-10-result[data-payload*='\"id\":\"merge\"']"))
    |> assert_has(css("#pattern-10-result[data-payload*='\"value\":\"merge\"']"))

    session
    |> click(css("#pattern-11-trigger"))
    |> assert_has(css("#pattern-11-result[data-payload*='\"source\":\"storybook\"']"))

    session
    |> click(css("#pattern-12-trigger"))
    |> assert_has(css("#pattern-12-result[data-payload*='\"ok\":true']"))

    session
    |> click(css("#pattern-13-trigger"))
    |> assert_has(css("#pattern-13-result[data-payload*='\"ok\":true']"))
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
