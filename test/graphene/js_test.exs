defmodule Graphene.JSTest do
  use ExUnit.Case, async: true

  doctest Graphene.JS

  test "accepts tuple list events with duplicates" do
    attrs =
      Graphene.JS.events(
        on: [
          {"c4p-side-panel-closed", [push: "panel:closed"]},
          {"c4p-side-panel-closed", [js: Phoenix.LiveView.JS.add_class("closing", to: "#panel")]}
        ]
      )

    events = Jason.decode!(attrs["data-gf-events"])

    assert Enum.map(events, & &1["name"]) == [
             "c4p-side-panel-closed",
             "c4p-side-panel-closed"
           ]

    assert Enum.map(events, &Map.get(&1, "push")) == ["panel:closed", nil]
    assert Enum.map(events, &Map.get(&1, "js")) == [nil, events |> List.last() |> Map.get("js")]
  end
end
