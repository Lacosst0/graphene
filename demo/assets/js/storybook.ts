import * as Graphene from "/graphene/assets/index.js";
import { buildHooks } from "./hooks";

(function () {
  (window as any).Graphene = Graphene;
  const { EventManager, WebComponentManager, mergeWebComponentsAttrs } = Graphene;
  const componentManager = new WebComponentManager({
    hideUntilReady: true,
    readyTimeoutMs: 3000
  });
  componentManager.connect();
  const eventManager = new EventManager();
  eventManager.connect();
  (window as any).storybook = {
    Hooks: buildHooks(),
    LiveSocketOptions: {
      dom: {
        onBeforeElUpdated: mergeWebComponentsAttrs
      }
    }
  };
  (window as any).componentManager = componentManager;
  (window as any).eventManager = eventManager;
})();
