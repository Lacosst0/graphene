import {
  e
} from "./chunk-YOLTZNLE.js";
import {
  n
} from "./chunk-V6ENGPT2.js";
import {
  prefix
} from "./chunk-ITCMO2MJ.js";
import {
  carbonElement
} from "./chunk-D5HOJOMG.js";
import {
  __decorate,
  b,
  i,
  i2
} from "./chunk-3GZFZEMV.js";

// node_modules/@carbon/web-components/es/components/skeleton-text/defs.js
var SKELETON_TEXT_TYPE;
(function(SKELETON_TEXT_TYPE2) {
  SKELETON_TEXT_TYPE2["REGULAR"] = "";
  SKELETON_TEXT_TYPE2["HEADING"] = "heading";
})(SKELETON_TEXT_TYPE || (SKELETON_TEXT_TYPE = {}));

// node_modules/@carbon/web-components/es/components/skeleton-text/skeleton-text.scss.js
var styles = i(['@keyframes cds--hide-feedback{0%{opacity:1;visibility:inherit}to{opacity:0;visibility:hidden}}@keyframes cds--show-feedback{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:inherit}}@keyframes cds--skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}to{opacity:.3;transform:scaleX(0);transform-origin:left}}@keyframes ai-skeleton-animation{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}.cds--icon--skeleton{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--icon--skeleton:active,.cds--icon--skeleton:focus,.cds--icon--skeleton:hover{border:none;cursor:default;outline:none}.cds--icon--skeleton:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--icon--skeleton:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--icon--skeleton{background:CanvasText}.cds--icon--skeleton:before{background:Canvas;forced-color-adjust:none}}.cds--icon--skeleton{block-size:1rem;display:inline-block;inline-size:1rem}.cds--skeleton__placeholder{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--skeleton__placeholder:active,.cds--skeleton__placeholder:focus,.cds--skeleton__placeholder:hover{border:none;cursor:default;outline:none}.cds--skeleton__placeholder:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--skeleton__placeholder:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--skeleton__placeholder{background:CanvasText}.cds--skeleton__placeholder:before{background:Canvas;forced-color-adjust:none}}.cds--skeleton__placeholder{block-size:6.25rem;inline-size:6.25rem}.cds--skeleton__text{background:var(--cds-skeleton-background,#e8e8e8);border:none;box-shadow:none;padding:0;pointer-events:none;position:relative}.cds--skeleton__text:active,.cds--skeleton__text:focus,.cds--skeleton__text:hover{border:none;cursor:default;outline:none}.cds--skeleton__text:before{animation:cds--skeleton 3s ease-in-out infinite;background:var(--cds-skeleton-element,#c6c6c6);block-size:100%;content:"";inline-size:100%;inset-inline-start:0;position:absolute;will-change:transform-origin,transform,opacity}@media (prefers-reduced-motion:reduce){.cds--skeleton__text:before{animation:none}}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--skeleton__text{background:CanvasText}.cds--skeleton__text:before{background:Canvas;forced-color-adjust:none}}.cds--skeleton__text{block-size:1rem;inline-size:100%;margin-block-end:.5rem}.cds--skeleton__heading{block-size:1.5rem}.cds--skeleton__icon--ai,.cds--skeleton__placeholder--ai,.cds--skeleton__text--ai{background:var(--cds-ai-skeleton-background,#d0e2ff);overflow:hidden}.cds--skeleton__icon--ai:before,.cds--skeleton__placeholder--ai:before,.cds--skeleton__text--ai:before{animation:ai-skeleton-animation 1.25s ease-in-out infinite;background:linear-gradient(90deg,rgba(69,137,255,0) 0,rgba(69,137,255,.5) 50%,rgba(69,137,255,0))}.cds--skeleton__icon--ai:before,.cds--skeleton__placeholder--ai:before{inline-size:200%}.cds--skeleton__placeholder--ai{border-radius:.5rem}.cds--skeleton__text--ai{border-radius:1rem}.cds--skeleton__icon--ai{border-radius:.125rem}@media (forced-colors:active),screen and (-ms-high-contrast:active){.cds--skeleton__icon--ai,.cds--skeleton__placeholder--ai,.cds--skeleton__text--ai{background:CanvasText}.cds--skeleton__icon--ai:before,.cds--skeleton__placeholder--ai:before,.cds--skeleton__text--ai:before{background:Canvas}}:host(cds-skeleton-text){display:block;inline-size:100%}:host(cds-skeleton-text) .cds--skeleton__text{margin-block-start:0}']);

// node_modules/@carbon/web-components/es/components/skeleton-text/skeleton-text.js
function getRandomInt(min, max, n2) {
  const randoms = [0.973051493507435, 0.15334737213558558, 0.5671034553053769];
  return Math.floor(randoms[n2 % 3] * (max - min + 1)) + min;
}
var CDSSkeletonText = class CDSSkeletonText2 extends i2 {
  constructor() {
    super(...arguments);
    this.type = SKELETON_TEXT_TYPE.REGULAR;
    this.heading = false;
    this.width = "100%";
    this.paragraph = false;
    this.lineCount = 3;
  }
  render() {
    const { optionalClasses, paragraph, lineCount, type, width, heading } = this;
    let defaultClasses = {
      [`${prefix}--skeleton__text`]: true,
      [`${prefix}--skeleton__heading`]: heading || type === SKELETON_TEXT_TYPE.HEADING
    };
    if (optionalClasses) {
      const outputObject = {};
      optionalClasses === null || optionalClasses === void 0 ? void 0 : optionalClasses.split(" ").forEach((element) => {
        outputObject[element] = true;
      });
      defaultClasses = Object.assign(Object.assign({}, defaultClasses), outputObject);
    }
    const classes = e(defaultClasses);
    if (paragraph) {
      const widthNum = parseInt(this.width, 10);
      const widthPx = this.width.includes("px");
      const widthPercent = this.width.includes("%");
      const lines = [];
      for (let i3 = 0; i3 < lineCount; i3++) {
        const randomWidth = widthPercent && `${getRandomInt(0, 75, i3)}px` || widthPx && `${getRandomInt(0, widthNum, i3)}px`;
        const style = widthPercent && `width: calc(${width} - ${randomWidth})` || widthPx && `width: ${randomWidth}` || "";
        lines.push(b`<p class="${classes}" style="${style}"></p>`);
      }
      return lines;
    }
    return b`<p class="${classes}" style="width:${width}"></p>`;
  }
};
CDSSkeletonText.styles = styles;
__decorate([
  n({ reflect: true, attribute: "optional-classes" })
], CDSSkeletonText.prototype, "optionalClasses", void 0);
__decorate([
  n({ reflect: true })
], CDSSkeletonText.prototype, "type", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSkeletonText.prototype, "heading", void 0);
__decorate([
  n({ reflect: true })
], CDSSkeletonText.prototype, "width", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSSkeletonText.prototype, "paragraph", void 0);
__decorate([
  n({ type: Number, reflect: true })
], CDSSkeletonText.prototype, "lineCount", void 0);
CDSSkeletonText = __decorate([
  carbonElement(`${prefix}-skeleton-text`)
], CDSSkeletonText);

export {
  SKELETON_TEXT_TYPE
};
