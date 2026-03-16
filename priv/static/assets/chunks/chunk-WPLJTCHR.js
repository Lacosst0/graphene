import {
  o
} from "./chunk-DAFPBEYU.js";
import {
  FocusMixin
} from "./chunk-73FE5HOG.js";
import {
  e as e2
} from "./chunk-YOLTZNLE.js";
import {
  e,
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

// node_modules/@carbon/web-components/es/components/link/link.scss.js
var styles = i([".cds--link{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--link *,.cds--link :after,.cds--link :before{box-sizing:inherit}.cds--link{color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe));display:inline-flex;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);outline:none;text-decoration:none;transition:color 70ms cubic-bezier(.2,0,.38,.9)}.cds--link:hover{color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce));text-decoration:underline}.cds--link:active:not(.cds--link--disabled),.cds--link:active:visited,.cds--link:active:visited:hover{outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--link:active:not(.cds--link--disabled),.cds--link:active:visited,.cds--link:active:visited:hover{outline-style:dotted}}.cds--link:active:not(.cds--link--disabled),.cds--link:active:visited,.cds--link:active:visited:hover{color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe));outline-color:var(--cds-link-focus-text-color,var(--cds-focus,#0f62fe));text-decoration:underline}.cds--link:focus:not(.cds--link--disabled){outline:1px solid var(--cds-focus,#0f62fe)}@media screen and (prefers-contrast){.cds--link:focus:not(.cds--link--disabled){outline-style:dotted}}.cds--link:focus:not(.cds--link--disabled){outline-color:var(--cds-link-focus-text-color,var(--cds-focus,#0f62fe));text-decoration:underline}.cds--link:visited{color:var(--cds-link-text-color,var(--cds-link-primary,#0f62fe))}.cds--link:visited:hover{color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce))}.cds--link--disabled,.cds--link--disabled:hover{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--link--disabled *,.cds--link--disabled :after,.cds--link--disabled :before,.cds--link--disabled:hover *,.cds--link--disabled:hover :after,.cds--link--disabled:hover :before{box-sizing:inherit}.cds--link--disabled,.cds--link--disabled:hover{color:var(--cds-text-disabled,hsla(0,0%,9%,.25));cursor:not-allowed;font-size:var(--cds-body-compact-01-font-size,.875rem);font-weight:var(--cds-body-compact-01-font-weight,400);font-weight:400;letter-spacing:var(--cds-body-compact-01-letter-spacing,.16px);line-height:var(--cds-body-compact-01-line-height,1.28572);text-decoration:none}.cds--link.cds--link--visited,.cds--link.cds--link--visited:visited{color:var(--cds-link-visited-text-color,var(--cds-link-visited,#8a3ffc))}.cds--link.cds--link--visited:hover,.cds--link.cds--link--visited:visited:hover{color:var(--cds-link-hover-text-color,var(--cds-link-primary-hover,#0043ce))}.cds--link.cds--link--inline{display:inline;text-decoration:underline}.cds--link--disabled.cds--link--inline{text-decoration:underline}.cds--link--sm,.cds--link--sm.cds--link--disabled:hover{font-size:var(--cds-helper-text-01-font-size,.75rem);letter-spacing:var(--cds-helper-text-01-letter-spacing,.32px);line-height:var(--cds-helper-text-01-line-height,1.33333)}.cds--link--lg,.cds--link--lg.cds--link--disabled:hover{font-size:var(--cds-body-compact-02-font-size,1rem);font-weight:var(--cds-body-compact-02-font-weight,400);letter-spacing:var(--cds-body-compact-02-letter-spacing,0);line-height:var(--cds-body-compact-02-line-height,1.375)}.cds--link__icon{align-self:center;display:inline-flex;margin-inline-start:.5rem}:host(cds-link){outline:none}:host(cds-link) .cds--link--disabled{color:var(--cds-text-disabled,hsla(0,0%,9%,.25))}:host(cds-link) .cds--link__icon[hidden]{display:none}"]);

// node_modules/@carbon/web-components/es/components/link/link.js
var LINK_SIZE = {
  MEDIUM: "md",
  SMALL: "sm",
  LARGE: "lg"
};
var CDSLink = class CDSLink2 extends FocusMixin(i2) {
  constructor() {
    super(...arguments);
    this._hasIcon = false;
    this.disabled = false;
    this.inline = false;
    this.size = LINK_SIZE.MEDIUM;
    this.visited = false;
  }
  /**
   * Handles `slotchange` event.
   */
  _handleSlotChange({ target }) {
    const { name } = target;
    const hasContent = target.assignedNodes().some(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- https://github.com/carbon-design-system/carbon/issues/20452
      (node) => node.nodeType !== Node.TEXT_NODE || node.textContent.trim()
    );
    this[name === "icon" ? "_hasIcon" : ""] = hasContent;
    this.requestUpdate?.();
  }
  /**
   * The CSS class list for the link node.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/carbon-design-system/carbon/issues/20452
  get _classes() {
    const { disabled, size, inline, visited, _hasIcon } = this;
    return e2({
      [`${prefix}--link`]: true,
      [`${prefix}--link--disabled`]: disabled,
      [`${prefix}--link--icon`]: _hasIcon,
      [`${prefix}--link--inline`]: inline,
      [`${prefix}--link--${size}`]: size,
      [`${prefix}--link--visited`]: visited
    });
  }
  /**
   * Handles `click` event on the `<a>`.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _handleClick(_) {
  }
  /**
   * @returns The inner content.
   */
  _renderInner() {
    const { _hasIcon: hasIcon, _handleSlotChange: handleSlotChange } = this;
    return b`
      <slot @slotchange="${handleSlotChange}"></slot>
      <div ?hidden="${!hasIcon}" class="${prefix}--link__icon">
        <slot name="icon" @slotchange="${handleSlotChange}"></slot>
      </div>
    `;
  }
  /**
   * @returns The disabled link content.
   */
  _renderDisabledLink() {
    const { _classes: classes } = this;
    return b`
      <p id="link" part="link" class="${classes}">${this._renderInner()}</p>
    `;
  }
  /**
   * @returns The link content.
   */
  _renderLink() {
    const { download, href, hreflang, linkRole, ping, rel, target, type, _classes: classes, _handleClick: handleClick } = this;
    return b`
      <a
        tabindex="0"
        id="link"
        role="${o(linkRole)}"
        class="${classes}"
        part="link"
        download="${o(download)}"
        href="${o(href)}"
        hreflang="${o(hreflang)}"
        ping="${o(ping)}"
        rel="${o(rel)}"
        target="${o(target)}"
        type="${o(type)}"
        @click="${handleClick}">
        ${this._renderInner()}
      </a>
    `;
  }
  render() {
    const { disabled } = this;
    return disabled ? this._renderDisabledLink() : this._renderLink();
  }
};
CDSLink.shadowRootOptions = Object.assign(Object.assign({}, i2.shadowRootOptions), { delegatesFocus: true });
CDSLink.styles = styles;
__decorate([
  e("#link")
], CDSLink.prototype, "_linkNode", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSLink.prototype, "disabled", void 0);
__decorate([
  n({ reflect: true })
], CDSLink.prototype, "download", void 0);
__decorate([
  n({ reflect: true })
], CDSLink.prototype, "href", void 0);
__decorate([
  n({ reflect: true })
], CDSLink.prototype, "hreflang", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSLink.prototype, "inline", void 0);
__decorate([
  n({ attribute: "link-role" })
], CDSLink.prototype, "linkRole", void 0);
__decorate([
  n({ reflect: true })
], CDSLink.prototype, "ping", void 0);
__decorate([
  n({ reflect: true })
], CDSLink.prototype, "rel", void 0);
__decorate([
  n({ reflect: true })
], CDSLink.prototype, "size", void 0);
__decorate([
  n({ reflect: true })
], CDSLink.prototype, "target", void 0);
__decorate([
  n({ reflect: true })
], CDSLink.prototype, "type", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], CDSLink.prototype, "visited", void 0);
CDSLink = __decorate([
  carbonElement(`${prefix}-link`)
], CDSLink);
var CDSLink$1 = CDSLink;

export {
  CDSLink$1
};
