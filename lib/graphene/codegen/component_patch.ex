defmodule Graphene.CodeGen.ComponentPatches do
  @moduledoc """
  Known Patches for components code generation
  """
  alias Graphene.CodeGen.Component
  alias Graphene.CodeGen.Component.{Attr, Slot}
  alias Graphene.CodeGen.Util

  def patch(component) do
    component
    |> do_patch()
    |> add_missing_slots()
    |> resolve_slot_collisions()
  end

  defp do_patch(
         %{
           htmltag: "cds-checkbox",
           componentname: componentname,
           docs: docs,
           source: "./src/components/checkbox/checkbox-group.ts"
         } = component
       ) do
    # in the documentation builder there is a clush with checkbox
    # realname is "cds-checkbox-group"
    # https://github.com/carbon-design-system/carbon-for-ibm-dotcom/issues/11883
    %{
      component
      | htmltag: "cds-checkbox-group",
        componentname: componentname <> "_group",
        docs: String.replace(docs, "<cds-checkbox>", "<cds-checkbox-group>")
    }
  end

  defp do_patch(
         %{
           htmltag: "cds-menu-item",
           componentname: componentname,
           docs: docs,
           source: "./src/components/menu/menu-item-selectable.ts"
         } = component
       ) do
    # in the documentation builder there is a bug with docs
    # realname is "cds-menu-item-selectable"
    # https://github.com/carbon-design-system/carbon/issues/21426
    %{
      component
      | htmltag: "cds-menu-item-selectable",
        componentname: componentname <> "_selectable",
        docs: String.replace(docs, "<cds-menu-item>", "<cds-menu-item-selectable>")
    }
  end

  defp do_patch(
         %{
           htmltag: "cds-fluid-textarea",
           componentname: componentname,
           docs: docs,
           source: "./src/components/fluid-textarea/fluid-textarea-skeleton.ts"
         } = component
       ) do
    # in the documentation builder there is a bug with docs
    # realname is "cds-fluid-textarea-skeleton"
    # https://github.com/carbon-design-system/carbon/issues/21425
    %{
      component
      | htmltag: "cds-fluid-textarea-skeleton",
        componentname: componentname <> "_skeleton",
        docs: String.replace(docs, "<cds-fluid-textarea>", "<cds-fluid-textarea-skeleton>")
    }
  end

  defp do_patch(
         %{
           htmltag: "cds-popover",
           componentname: componentname,
           docs: docs,
           source: "./src/components/popover/popover-content.ts"
         } = component
       ) do
    # in the documentation builder there is a clush with popover
    # realname is "cds-popover-content"
    # https://github.com/carbon-design-system/carbon-for-ibm-dotcom/issues/11884
    %{
      component
      | htmltag: "cds-popover-content",
        componentname: componentname <> "_content",
        docs: String.replace(docs, "<cds-popover>", "<cds-popover-content>")
    }
  end

  defp do_patch(%{htmltag: "cds-copy"} = component) do
    %{component | import: "./src/components/copy/copy.js"}
  end

  defp do_patch(%{htmltag: "cds-number-input"} = component) do
    component
    |> set_step_default()
    |> set_number_input_bounds_default()
  end

  defp do_patch(%{htmltag: "cds-fluid-number-input"} = component) do
    component
    |> set_step_default()
    |> set_number_input_bounds_default()
  end

  defp do_patch(%{htmltag: "cds-slider"} = component) do
    set_attr_default(component, "step-multiplier", "4")
  end

  defp do_patch(%{htmltag: "cds-slider-input"} = component) do
    set_attr_default(component, "step-multiplier", "4")
  end

  defp do_patch(%{htmltag: "cds-grid", docs: docs} = component) do
    docs =
      cond do
        is_binary(docs) and String.contains?(docs, "Rows are formed implicitly") ->
          docs

        is_binary(docs) ->
          String.trim_trailing(docs) <>
            "\n\nRows are formed implicitly as columns fill the 16-unit span."

        true ->
          docs
      end

    component
    |> Map.put(:docs, docs)
    |> ensure_attr(%{
      "name" => "row-gap",
      "type" => "GRID_ROW_GAP",
      "description" =>
        "Row gap spacing token suffix for grid rows (for example \"05\"). Defaults to \"07\" via CSS fallback; \"narrow\" defaults to \"05\" and \"condensed\" defaults to \"gutter\". You can set --graphene-grid-row-gap on a parent to let nested grids inherit."
    })
  end

  defp do_patch(%{htmltag: "cds-button", slots: []} = component) do
    %{component | slots: [Slot.parse(%{"name" => "icon", "description" => "Icon."})]}
  end

  defp do_patch(%{htmltag: "cds-ai-label"} = component) do
    component
    |> ensure_slot(%{"name" => "body-text", "description" => "Content for the AI label body."})
    |> ensure_slot(%{"name" => "actions", "description" => "Action buttons for the AI label."})
  end

  defp do_patch(%{htmltag: "cds-toggletip"} = component) do
    component
    |> ensure_slot(%{
      "name" => "body-text",
      "description" => "Body text content for the toggletip."
    })
    |> ensure_slot(%{"name" => "actions", "description" => "Action buttons for the toggletip."})
  end

  defp do_patch(%{htmltag: "cds-overflow-menu"} = component) do
    ensure_slot(component, %{
      "name" => "tooltip-content",
      "description" => "Tooltip content for the overflow menu trigger."
    })
  end

  defp do_patch(%{htmltag: "cds-table"} = component) do
    component =
      component
      |> Map.put(:componentname, "table_element")

    if component.slots == [] do
      %{
        component
        | slots: [
            Slot.parse(%{"name" => "title", "description" => "Title"}),
            Slot.parse(%{"name" => "description", "description" => "Description"}),
            Slot.parse(%{"name" => "toolbar", "description" => "Toolbar"})
          ]
      }
    else
      component
    end
  end

  defp do_patch(%{htmltag: "cds-table-row"} = component) do
    ensure_attr(
      component,
      %{
        "name" => "radio",
        "type" => "boolean",
        "default" => "false",
        "description" =>
          "Specify whether the control should be a radio button or inline checkbox."
      }
    )
  end

  defp do_patch(component), do: component

  @manual_components [
    %Component{
      htmltag: "cds-accordion-skeleton",
      componentname: "accordion_skeleton",
      source: "./src/components/accordion/accordion-skeleton.ts",
      docs: """
      Component `<cds-accordion-skeleton>` from `./src/components/accordion/accordion-skeleton.ts`

      Accordion skeleton.
      """,
      attrs: [
        Attr.parse(%{
          "name" => "alignment",
          "type" => "ACCORDION_ALIGNMENT",
          "description" => "Specify the alignment of the accordion heading title and chevron."
        }),
        Attr.parse(%{
          "name" => "count",
          "type" => "number",
          "description" => "Set number of items to render."
        }),
        Attr.parse(%{
          "name" => "is-flush",
          "type" => "boolean",
          "description" => "Specify whether Accordion text should be flush."
        }),
        Attr.parse(%{
          "name" => "open",
          "type" => "boolean",
          "description" => "`true` if the first accordion item should be open."
        })
      ],
      slots: []
    },
    %Component{
      htmltag: "cds-breadcrumb-skeleton",
      componentname: "breadcrumb_skeleton",
      source: "./src/components/breadcrumb/breadcrumb-skeleton.ts",
      docs: """
      Component `<cds-breadcrumb-skeleton>` from `./src/components/breadcrumb/breadcrumb-skeleton.ts`

      Breadcrumb skeleton.
      """,
      attrs: [
        Attr.parse(%{
          "name" => "items",
          "type" => "number",
          "description" => "Number of items to render."
        }),
        Attr.parse(%{
          "name" => "no-trailing-slash",
          "type" => "boolean",
          "description" => "`true` to omit the trailing slash."
        }),
        Attr.parse(%{
          "name" => "size",
          "type" => "string",
          "description" => "Breadcrumb size."
        })
      ],
      slots: []
    },
    %Component{
      htmltag: "cds-button-skeleton",
      componentname: "button_skeleton",
      source: "./src/components/button/button-skeleton.ts",
      docs: """
      Component `<cds-button-skeleton>` from `./src/components/button/button-skeleton.ts`

      Button skeleton.
      """,
      attrs: [],
      slots: []
    },
    %Component{
      htmltag: "cds-checkbox-skeleton",
      componentname: "checkbox_skeleton",
      source: "./src/components/checkbox/checkbox-skeleton.ts",
      docs: """
      Component `<cds-checkbox-skeleton>` from `./src/components/checkbox/checkbox-skeleton.ts`

      Checkbox skeleton.
      """,
      attrs: [],
      slots: []
    },
    %Component{
      htmltag: "cds-code-snippet-skeleton",
      componentname: "code_snippet_skeleton",
      source: "./src/components/code-snippet/code-snippet-skeleton.ts",
      docs: """
      Component `<cds-code-snippet-skeleton>` from `./src/components/code-snippet/code-snippet-skeleton.ts`

      Code snippet skeleton.
      """,
      attrs: [
        Attr.parse(%{
          "name" => "type",
          "type" => "CODE_SNIPPET_TYPE",
          "description" => "Code snippet type."
        })
      ],
      slots: []
    },
    %Component{
      htmltag: "cds-date-picker-input-skeleton",
      componentname: "date_picker_input_skeleton",
      source: "./src/components/date-picker/date-picker-input-skeleton.ts",
      docs: """
      Component `<cds-date-picker-input-skeleton>` from `./src/components/date-picker/date-picker-input-skeleton.ts`

      Date picker input skeleton.
      """,
      attrs: [
        Attr.parse(%{
          "name" => "hide-label",
          "type" => "boolean",
          "description" => "Specify whether the label should be hidden."
        }),
        Attr.parse(%{
          "name" => "kind",
          "type" => "DATE_PICKER_INPUT_KIND",
          "description" => "Date picker kind."
        }),
        Attr.parse(%{
          "name" => "range",
          "type" => "boolean",
          "description" => "`true` if the input is a range."
        })
      ],
      slots: []
    },
    %Component{
      htmltag: "cds-dropdown-skeleton",
      componentname: "dropdown_skeleton",
      source: "./src/components/dropdown/dropdown-skeleton.ts",
      docs: """
      Component `<cds-dropdown-skeleton>` from `./src/components/dropdown/dropdown-skeleton.ts`

      Dropdown skeleton.
      """,
      attrs: [
        Attr.parse(%{
          "name" => "hide-label",
          "type" => "boolean",
          "description" => "Specify whether the label should be hidden."
        }),
        Attr.parse(%{
          "name" => "size",
          "type" => "DROPDOWN_SIZE",
          "description" => "Dropdown size."
        })
      ],
      slots: []
    },
    %Component{
      htmltag: "cds-menu",
      componentname: "menu",
      source: "./src/components/menu/menu.ts",
      docs: """
      Component `<cds-menu>` from `./src/components/menu/menu.ts`

      Menu.
      """,
      attrs: [
        Attr.parse(%{
          "name" => "open",
          "type" => "boolean",
          "description" => "Whether the menu is open."
        }),
        Attr.parse(%{
          "name" => "size",
          "type" => "string",
          "description" => "Menu size."
        }),
        Attr.parse(%{
          "name" => "label",
          "type" => "string",
          "description" => "Menu label."
        }),
        Attr.parse(%{
          "name" => "border",
          "type" => "boolean",
          "description" => "Whether the menu has a border."
        }),
        Attr.parse(%{
          "name" => "backgroundToken",
          "attribute" => "background-token",
          "type" => "string",
          "description" => "Background token for the menu."
        }),
        Attr.parse(%{
          "name" => "menuAlignment",
          "attribute" => "menu-alignment",
          "type" => "string",
          "description" => "Alignment of the menu."
        }),
        Attr.parse(%{
          "name" => "x",
          "type" => "number",
          "description" => "Horizontal position of the menu."
        }),
        Attr.parse(%{
          "name" => "y",
          "type" => "number",
          "description" => "Vertical position of the menu."
        })
      ],
      slots: []
    },
    %Component{
      htmltag: "cds-number-input-skeleton",
      componentname: "number_input_skeleton",
      source: "./src/components/number-input/number-input-skeleton.ts",
      docs: """
      Component `<cds-number-input-skeleton>` from `./src/components/number-input/number-input-skeleton.ts`

      Number input skeleton.
      """,
      attrs: [
        Attr.parse(%{
          "name" => "hide-label",
          "type" => "boolean",
          "description" => "Specify whether the label should be hidden."
        })
      ],
      slots: []
    },
    %Component{
      htmltag: "cds-progress-indicator-skeleton",
      componentname: "progress_indicator_skeleton",
      source: "./src/components/progress-indicator/progress-indicator-skeleton.ts",
      docs: """
      Component `<cds-progress-indicator-skeleton>` from `./src/components/progress-indicator/progress-indicator-skeleton.ts`

      Progress indicator skeleton.
      """,
      attrs: [
        Attr.parse(%{
          "name" => "vertical",
          "type" => "boolean",
          "description" => "`true` to render the vertical variant."
        })
      ],
      slots: []
    },
    %Component{
      htmltag: "cds-progress-step-skeleton",
      componentname: "progress_step_skeleton",
      source: "./src/components/progress-indicator/progress-step-skeleton.ts",
      docs: """
      Component `<cds-progress-step-skeleton>` from `./src/components/progress-indicator/progress-step-skeleton.ts`

      Progress step skeleton.
      """,
      attrs: [
        Attr.parse(%{
          "name" => "vertical",
          "type" => "boolean",
          "description" => "`true` to render the vertical variant."
        })
      ],
      slots: []
    },
    %Component{
      htmltag: "cds-radio-button-skeleton",
      componentname: "radio_button_skeleton",
      source: "./src/components/radio-button/radio-button-skeleton.ts",
      docs: """
      Component `<cds-radio-button-skeleton>` from `./src/components/radio-button/radio-button-skeleton.ts`

      Radio button skeleton.
      """,
      attrs: [],
      slots: []
    },
    %Component{
      htmltag: "cds-select-skeleton",
      componentname: "select_skeleton",
      source: "./src/components/select/select-skeleton.ts",
      docs: """
      Component `<cds-select-skeleton>` from `./src/components/select/select-skeleton.ts`

      Select skeleton.
      """,
      attrs: [
        Attr.parse(%{
          "name" => "hide-label",
          "type" => "boolean",
          "description" => "Specify whether the label should be hidden."
        })
      ],
      slots: []
    },
    %Component{
      htmltag: "cds-slider-skeleton",
      componentname: "slider_skeleton",
      source: "./src/components/slider/slider-skeleton.ts",
      docs: """
      Component `<cds-slider-skeleton>` from `./src/components/slider/slider-skeleton.ts`

      Slider skeleton.
      """,
      attrs: [
        Attr.parse(%{
          "name" => "two-handles",
          "type" => "boolean",
          "description" => "`true` to show two handles."
        })
      ],
      slots: []
    },
    %Component{
      htmltag: "cds-structured-list-header-cell-skeleton",
      componentname: "structured_list_header_cell_skeleton",
      source: "./src/components/structured-list/structured-list-header-cell-skeleton.ts",
      docs: """
      Component `<cds-structured-list-header-cell-skeleton>` from `./src/components/structured-list/structured-list-header-cell-skeleton.ts`

      Structured list header cell skeleton.
      """,
      attrs: [],
      slots: []
    },
    %Component{
      htmltag: "cds-tile-above-the-fold-content",
      componentname: "tile_above_the_fold_content",
      source: "./src/components/tile/tile.ts",
      docs: """
      Component `<cds-tile-above-the-fold-content>` from `./src/components/tile/tile.ts`

      Tile above-the-fold content.
      """,
      attrs: [],
      slots: []
    },
    %Component{
      htmltag: "cds-tile-below-the-fold-content",
      componentname: "tile_below_the_fold_content",
      source: "./src/components/tile/tile.ts",
      docs: """
      Component `<cds-tile-below-the-fold-content>` from `./src/components/tile/tile.ts`

      Tile below-the-fold content.
      """,
      attrs: [],
      slots: []
    }
  ]

  def carbon_component_overrides do
    Graphene.CarbonComponents.Custom.ComponentRecipes.overrides()
  end

  def carbon_component_recipes do
    Graphene.CarbonComponents.Custom.ComponentRecipes.recipes()
  end

  def append_missing_components(components) do
    Enum.reduce(@manual_components, components, fn component, acc ->
      if Enum.any?(acc, &(&1.htmltag == component.htmltag)) do
        acc
      else
        acc ++ [component]
      end
    end)
  end

  defp set_step_default(component) do
    %{component | attrs: Enum.map(component.attrs, &set_step_attr_default/1)}
  end

  defp set_number_input_bounds_default(component) do
    component
    |> set_attr_default("min", "-Infty")
    |> set_attr_default("max", "Infty")
  end

  defp set_attr_default(component, htmlname, default) do
    attrs =
      Enum.map(component.attrs, fn attr ->
        if attr.htmlname == htmlname and Keyword.get(attr.opts, :default) in [nil, :__missing__] do
          %{attr | opts: Keyword.put(attr.opts, :default, default)}
        else
          attr
        end
      end)

    %{component | attrs: attrs}
  end

  defp add_missing_slots(%{htmltag: "cds-accordion-item"} = component) do
    ensure_attr(component, %{
      "name" => "controlled",
      "type" => "boolean",
      "description" => "Whether the item is controlled by the parent."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-actionable-notification"} = component) do
    ensure_slot(component, %{
      "name" => "action",
      "description" => "Action content for the notification."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-combo-box"} = component) do
    ensure_attr(component, %{
      "name" => "controlled",
      "type" => "boolean",
      "description" => "Whether the combobox is controlled."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-content-switcher-item"} = component) do
    ensure_slot(component, %{
      "name" => "tooltip-content",
      "description" => "Tooltip content for the item."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-definition-tooltip"} = component) do
    ensure_slot(component, %{
      "name" => "definition",
      "description" => "Definition content."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-dropdown"} = component) do
    ensure_slot(component, %{
      "name" => "title-text",
      "description" => "Title text content."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-expandable-tile"} = component) do
    ensure_slot(component, %{
      "name" => "above-the-fold-content",
      "description" => "Above-the-fold content."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-file-uploader"} = component) do
    component
    |> ensure_attr(%{
      "name" => "multiple",
      "type" => "boolean",
      "description" => "`true` to enable multiple selection."
    })
    |> ensure_attr(%{
      "name" => "inputState",
      "attribute" => "input-state",
      "type" => "string",
      "description" => "Input state for the uploader."
    })
    |> ensure_attr(%{
      "name" => "inputName",
      "attribute" => "input-name",
      "type" => "string",
      "description" => "Name attribute for the input."
    })
    |> ensure_attr(%{
      "name" => "iconDescription",
      "attribute" => "icon-description",
      "type" => "string",
      "description" => "Description for the status icon."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-icon-button"} = component) do
    ensure_slot(component, %{
      "name" => "tooltip-content",
      "description" => "Tooltip content."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-inline-loading"} = component) do
    ensure_attr(component, %{
      "name" => "controlled",
      "type" => "boolean",
      "description" => "Whether the loading state is controlled."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-menu"} = component) do
    component
    |> ensure_attr(%{
      "name" => "open",
      "type" => "boolean",
      "description" => "Whether the menu is open."
    })
    |> ensure_attr(%{
      "name" => "size",
      "type" => "string",
      "description" => "Menu size."
    })
    |> ensure_attr(%{
      "name" => "label",
      "type" => "string",
      "description" => "Menu label."
    })
    |> ensure_attr(%{
      "name" => "border",
      "type" => "boolean",
      "description" => "Whether the menu has a border."
    })
    |> ensure_attr(%{
      "name" => "backgroundToken",
      "attribute" => "background-token",
      "type" => "string",
      "description" => "Background token for the menu."
    })
    |> ensure_attr(%{
      "name" => "menuAlignment",
      "attribute" => "menu-alignment",
      "type" => "string",
      "description" => "Alignment of the menu."
    })
    |> ensure_attr(%{
      "name" => "x",
      "type" => "number",
      "description" => "Horizontal position of the menu."
    })
    |> ensure_attr(%{
      "name" => "y",
      "type" => "number",
      "description" => "Vertical position of the menu."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-menu-item"} = component) do
    component
    |> ensure_attr(%{
      "name" => "selected",
      "type" => "boolean",
      "description" => "Whether the menu item is selected."
    })
    |> ensure_slot(%{
      "name" => "submenu",
      "description" => "Submenu content."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-multi-select"} = component) do
    ensure_slot(component, %{
      "name" => "title-text",
      "description" => "Title text content."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-multi-select-item"} = component) do
    ensure_attr(component, %{
      "name" => "selected",
      "type" => "boolean",
      "description" => "Whether the item is selected."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-page-header-breadcrumb"} = component) do
    component
    |> ensure_slot(%{
      "name" => "content-actions",
      "description" => "Content actions for the breadcrumb."
    })
    |> ensure_slot(%{
      "name" => "page-actions",
      "description" => "Page actions for the breadcrumb."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-page-header-content"} = component) do
    component
    |> ensure_slot(%{
      "name" => "contextual-actions",
      "description" => "Contextual actions for the page header."
    })
    |> ensure_slot(%{
      "name" => "page-actions",
      "description" => "Page actions for the page header."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-page-header-tabs"} = component) do
    ensure_slot(component, %{
      "name" => "tags",
      "description" => "Tags for the page header."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-radio-button"} = component) do
    ensure_slot(component, %{
      "name" => "ai-label",
      "description" => "AI label content."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-search"} = component) do
    ensure_attr(component, %{
      "name" => "colorScheme",
      "attribute" => "color-scheme",
      "type" => "string",
      "description" => "Color scheme for the search."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-select-item"} = component) do
    ensure_attr(component, %{
      "name" => "text",
      "type" => "string",
      "description" => "Text for the select item."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-side-nav"} = component) do
    ensure_attr(component, %{
      "name" => "usageMode",
      "attribute" => "usage-mode",
      "type" => "string",
      "description" => "Usage mode for the side nav."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-slider"} = component) do
    component
    |> ensure_attr(%{
      "name" => "controlled",
      "type" => "boolean",
      "description" => "Whether the slider is controlled."
    })
    |> ensure_attr(%{
      "name" => "formatLabel",
      "attribute" => "format-label",
      "type" => "any",
      "description" => "Formatter for the slider label."
    })
    |> ensure_slot(%{
      "name" => "lower-input",
      "description" => "Lower input content."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-slider-input"} = component) do
    ensure_attr(component, %{
      "name" => "required",
      "type" => "boolean",
      "description" => "Whether the input is required."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-tabs"} = component) do
    ensure_attr(component, %{
      "name" => "disabled",
      "type" => "boolean",
      "description" => "Whether the tabs are disabled."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-tile"} = component) do
    ensure_slot(component, %{
      "name" => "decorator",
      "description" => "Decorator content."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-tile-group"} = component) do
    ensure_slot(component, %{
      "name" => "legend",
      "description" => "Legend content."
    })
  end

  defp add_missing_slots(%{htmltag: "cds-tree-view"} = component) do
    component
    |> ensure_attr(%{
      "name" => "controlled",
      "type" => "boolean",
      "description" => "Whether the tree view is controlled."
    })
    |> ensure_attr(%{
      "name" => "links",
      "type" => "boolean",
      "description" => "Whether the tree view renders links."
    })
  end

  defp add_missing_slots(%{htmltag: "feature-flags"} = component) do
    ensure_attr(component, %{
      "name" => "enableV12ToggleReducedLabelSpacing",
      "attribute" => "enable-v12-toggle-reduced-label-spacing",
      "type" => "boolean",
      "description" => "Enable reduced label spacing for v12 toggle."
    })
  end

  defp add_missing_slots(component), do: component

  defp resolve_slot_collisions(component) do
    slot_names =
      component.slots
      |> Enum.map(&Util.kebab2snake(&1.htmlname))
      |> MapSet.new()

    attrs =
      component.attrs
      |> Enum.reject(fn attr ->
        attr_name = Util.kebab2snake(attr.htmlname)
        MapSet.member?(slot_names, attr_name)
      end)

    %{component | attrs: attrs}
  end

  defp ensure_attr(component, %{"name" => name} = attr) do
    exists? = Enum.any?(component.attrs, &(&1.htmlname == name))

    if exists? do
      component
    else
      %{component | attrs: component.attrs ++ [Attr.parse(attr)]}
    end
  end

  defp ensure_slot(component, %{"name" => name} = slot) do
    exists? = Enum.any?(component.slots, &(&1.htmlname == name))

    if exists? do
      component
    else
      %{component | slots: component.slots ++ [Slot.parse(slot)]}
    end
  end

  defp set_step_attr_default(%{htmlname: "step"} = attr) do
    %{attr | opts: Keyword.put(attr.opts, :default, "1")}
  end

  defp set_step_attr_default(attr), do: attr
end
