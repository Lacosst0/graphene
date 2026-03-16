// https://www.freshcodeit.com/blog/web-components-in-liveview
// This code will autoload web components if you define them somewhere
// in your DOM tree. There are many ways to install this library, but
// this is the easiest to start with. Every Phoenix app will have a
// single point of entry JS file, where you have a LiveView connection
// setup. We need to make some changes there:

// import { mergeWebComponentsAttrs } from "graphene";

// let liveSocket = new LiveSocket("/live", Socket, {
//   longPollFallbackMs: 2500,
//   params: {
//     _csrf_token: csrfToken
//   },

//   // Add this code.
//   dom: {
//     onBeforeElUpdated: mergeWebComponentsAttrs,
//   }
// )

export function mergeWebComponentsAttrs(from: HTMLElement, to: HTMLElement): void {
  // Maybe check for tagName.lower(), but it's probably not necessary
    if (from.tagName.startsWith("cds-") || from.tagName.startsWith("CDS-")) {
        const attributes = [...Array.from(to.attributes), ...Array.from(from.attributes)];
        attributes.forEach((attr) => {
            to.setAttribute(attr.name, attr.value);
        });
        const tagName = to.tagName.toLowerCase();
        if (tagName === "cds-number-input" || tagName === "cds-fluid-number-input") {
            const step = to.getAttribute("step");
            const safeStep = step === null || step === "" || step === "null" || step === "undefined" ? "1" : step;
            to.setAttribute("step", safeStep);
            (to as any)._step = safeStep;
            (to as any).step = safeStep;
        }
    }
}
