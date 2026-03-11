defmodule Graphene.CodeGen.ComponentTest do
  alias Graphene.CodeGen.Component
  use ExUnit.Case, async: true

  defp sample() do
    %{
      "attributes" => [
        %{
          "default" => "false",
          "description" => "`true` if this tooltip is in a data table row",
          "name" => "data-table",
          "type" => "boolean"
        },
        %{
          "default" => "false",
          "description" => "`true` if this overflow menu body should be flipped.",
          "name" => "flipped",
          "type" => "boolean"
        }
      ],
      "description" => "Overflow menu in breadcrumb.",
      "name" => "cds-breadcrumb-overflow-menu",
      "path" => "./src/components/breadcrumb/breadcrumb-overflow-menu.ts",
      "properties" => [
        %{
          "attribute" => "data-table",
          "default" => "false",
          "description" => "`true` if this tooltip is in a data table row",
          "name" => "dataTable",
          "type" => "boolean"
        },
        %{
          "attribute" => "toolbar-action",
          "default" => "false",
          "description" => "`true` if this menu is a toolbar action",
          "name" => "toolbarAction",
          "type" => "boolean"
        }
      ],
      "slots" => [
        %{"description" => "The icon for the trigger button.", "name" => "icon"}
      ],
      "events" => [
        %{
          "name" => "example-event",
          "description" => "Example Event"
        }
      ]
    }
  end

  describe "Parsing" do
    setup do
      [data: sample()]
    end

    test "example", %{data: data} do
      struct = Component.parse(data, "cds-")

      assert struct == %Graphene.CodeGen.Component{
               attrs: [
                 %Graphene.CodeGen.Component.Attr{
                   name: "data-table",
                   htmlname: "data-table",
                   atomname: ":data_table",
                   type: :boolean,
                   opts: [default: false, doc: "`true` if this tooltip is in a data table row"],
                   deprecated: false
                 },
                 %Graphene.CodeGen.Component.Attr{
                   name: "flipped",
                   htmlname: "flipped",
                   atomname: ":flipped",
                   type: :boolean,
                   opts: [
                     default: false,
                     doc: "`true` if this overflow menu body should be flipped."
                   ],
                   deprecated: false
                 },
                 %Graphene.CodeGen.Component.Attr{
                   name: "toolbarAction",
                   htmlname: "toolbar-action",
                   atomname: ":toolbar_action",
                   type: :boolean,
                   opts: [default: false, doc: "`true` if this menu is a toolbar action"],
                   deprecated: false
                 }
               ],
               componentname: "breadcrumb_overflow_menu",
               docs: """
               Component `<cds-breadcrumb-overflow-menu>` from `./src/components/breadcrumb/breadcrumb-overflow-menu.ts`

               Overflow menu in breadcrumb.

               ## Events

               * `example-event` - Example Event
               """,
               htmltag: "cds-breadcrumb-overflow-menu",
               source: "./src/components/breadcrumb/breadcrumb-overflow-menu.ts",
               slots: [
                 %Graphene.CodeGen.Component.Slot{
                   name: "icon",
                   htmlname: "icon",
                   atomname: ":icon",
                   opts: [doc: "The icon for the trigger button."],
                   deprecated: false
                 }
               ]
             }
    end
  end

  describe "Code Gen" do
    setup do
      [component: sample() |> Component.parse("cds-")]
    end

    test "representation", %{component: component} do
      res = Component.display(component)

      assert res == ~S'''
             @doc """
             Component `<cds-breadcrumb-overflow-menu>` from `./src/components/breadcrumb/breadcrumb-overflow-menu.ts`

             Overflow menu in breadcrumb.

             ## Events

             * `example-event` - Example Event

             """

             attr :data_table, :boolean, default: false, doc: "`true` if this tooltip is in a data table row"
             attr :flipped, :boolean, default: false, doc: "`true` if this overflow menu body should be flipped."
             attr :toolbar_action, :boolean, default: false, doc: "`true` if this menu is a toolbar action"

             attr :events, :any, default: nil, doc: "custom events passed to Graphene.JS.events/1"

             attr :rest, :global

             slot :icon, doc: "The icon for the trigger button.", do: attr(:tag, :string)
             slot :inner_block
             def breadcrumb_overflow_menu(assigns) do
                 assigns = apply_events(assigns)

                 ~H"""
                 <cds-breadcrumb-overflow-menu
                  data-table={assigns[:data_table]}
                  flipped={assigns[:flipped]}
                  toolbar-action={assigns[:toolbar_action]}
                  {@rest}>
                  <%= render_slot(@inner_block) %>
                  <.dynamic_tag :for={s <- assigns[:icon]} tag_name={Map.get(s, :tag, "div")} slot="icon"><%= render_slot(s) %></.dynamic_tag>
                 </cds-breadcrumb-overflow-menu>
                 """
             end
             '''
    end
  end
end
