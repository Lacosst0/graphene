/* _dynamic_loader_mapping_products.ts */

/* generated from <%= @source %> of ibm-products web-components v<%= @version %> for <%= @module %> */

type ComponentImports = { [componentName: string]: () => Promise<any> };

// Define a static mapping for component imports
export const productComponentImports: ComponentImports = {<%= for component <- @components do %>
  <%= Graphene.CodeGen.Component.display_js_map_entry component, import_base: "@carbon/ibm-products-web-components/es" %><% end %>
};
