// TODO: a nice way to control how many assets are generated for the components
// If one uses just few components, we need to add just a few

import "./polyfills/crypto_random_uuid";

export * as Hooks from "./lib/hooks";
export { WebComponentManager } from "./lib/dynamic_loader";
export type { WebComponentManagerOptions } from "./lib/dynamic_loader";
export { EventManager } from "./lib/event_manager";
export type { EventManagerOptions } from "./lib/event_manager";
export { mergeWebComponentsAttrs } from "./lib/socket_utils";
