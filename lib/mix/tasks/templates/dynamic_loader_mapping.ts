/* _dynamic_loader_mapping.ts */

/* generated from <%= @source %> of carbon web-components v<%= @version %> for <%= @module %> */

type ComponentImports = { [componentName: string]: () => Promise<any> };

// Define a static mapping for component imports
export const componentImports: ComponentImports = {<%= for component <- @components do %>
  <%= Graphene.CodeGen.Component.display_js_map_entry component %><% end %>
};
