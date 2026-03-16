// Establish Phoenix Socket and LiveView configuration.
import "phoenix_html"
import { Socket } from "phoenix"
import { LiveSocket } from "phoenix_live_view"
import { buildHooks } from "./hooks"

const csrfToken = (document.querySelector("meta[name='csrf-token']") as HTMLElement)?.getAttribute("content")

declare global {
  interface Window {
    liveSocket: LiveSocket
  }
}

const resolveGraphene = async () => {
  const existing = (window as any).Graphene
  if (existing) return existing
  const Graphene = await import("/graphene/assets/index.js")
  ;(window as any).Graphene = Graphene
  return Graphene
}

const start = async () => {
  const Graphene = await resolveGraphene()
  const { EventManager, WebComponentManager, mergeWebComponentsAttrs } = Graphene

  const componentManager = new WebComponentManager({
    hideUntilReady: true,
    readyTimeoutMs: 3000
  })
  componentManager.connect()
  const eventManager = new EventManager()
  eventManager.connect()

  const liveSocket = new LiveSocket("/live", Socket, {
    params: { _csrf_token: csrfToken },
    hooks: buildHooks(),
    dom: { onBeforeElUpdated: mergeWebComponentsAttrs }
  })

  // connect if there are any LiveViews on the page
  liveSocket.connect()

  // expose liveSocket on window for web console debug logs and latency simulation:
  // >> liveSocket.enableDebug()
  // >> liveSocket.enableLatencySim(1000)  // enabled for duration of browser session
  // >> liveSocket.disableLatencySim()
  window.liveSocket = liveSocket
  ;(window as any).componentManager = componentManager
  ;(window as any).eventManager = eventManager
}

start().catch((_error) => {
  // eslint-disable-next-line no-console
  console.error("Failed to initialize Graphene assets.")
})
