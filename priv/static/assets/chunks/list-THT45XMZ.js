import {
  e
} from "./chunk-YOLTZNLE.js";
import "./chunk-M2VBID3H.js";
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
import "./chunk-G6EI4S4W.js";

// node_modules/@carbon/web-components/es/components/list/list.scss.js
var styles = i(['@charset "UTF-8";.cds--list--nested,.cds--list--ordered,.cds--list--ordered--native,.cds--list--unordered{border:0;box-sizing:border-box;font-family:inherit;font-size:100%;margin:0;padding:0;vertical-align:baseline}.cds--list--nested *,.cds--list--nested :after,.cds--list--nested :before,.cds--list--ordered *,.cds--list--ordered :after,.cds--list--ordered :before,.cds--list--ordered--native *,.cds--list--ordered--native :after,.cds--list--ordered--native :before,.cds--list--unordered *,.cds--list--unordered :after,.cds--list--unordered :before{box-sizing:inherit}.cds--list--nested,.cds--list--ordered,.cds--list--ordered--native,.cds--list--unordered{font-size:var(--cds-body-01-font-size,.875rem);font-weight:var(--cds-body-01-font-weight,400);letter-spacing:var(--cds-body-01-letter-spacing,.16px);line-height:var(--cds-body-01-line-height,1.42857);list-style:none}.cds--list--unordered:not(.cds--list--nested){margin-inline-start:1rem}.cds--list--expressive,.cds--list--expressive .cds--list--nested{font-size:var(--cds-body-02-font-size,1rem);font-weight:var(--cds-body-02-font-weight,400);letter-spacing:var(--cds-body-02-letter-spacing,0);line-height:var(--cds-body-02-line-height,1.5)}.cds--list--ordered--native{list-style:decimal}.cds--list__item{color:var(--cds-text-primary,#161616)}.cds--list--nested{margin-inline-start:2rem}.cds--list--nested .cds--list__item{padding-inline-start:.25rem}.cds--list--ordered:not(.cds--list--nested){counter-reset:item}.cds--list--ordered:not(.cds--list--nested)>.cds--list__item{position:relative}.cds--list--ordered:not(.cds--list--nested)>.cds--list__item:before{content:counter(item) ".";counter-increment:item;inset-inline-start:-1.5rem;position:absolute}.cds--list--ordered--native.cds--list--nested,.cds--list--ordered.cds--list--nested{list-style-type:lower-latin}.cds--list--unordered>.cds--list__item{position:relative}.cds--list--unordered>.cds--list__item:before{content:"\u2013";inset-inline-start:-1rem;position:absolute}.cds--list--unordered.cds--list--nested>.cds--list__item:before{content:"\u25AA";inset-inline-start:-.75rem}:host(cds-ordered-list) .cds--list--nested,:host(cds-unordered-list) .cds--list--nested{margin-inline-start:2rem}:host(cds-ordered-list) .cds--list--nested ::slotted(cds-list-item),:host(cds-unordered-list) .cds--list--nested ::slotted(cds-list-item){padding-inline-start:.25rem}:host(cds-ordered-list) .cds--list--ordered.cds--list--nested{list-style-type:lower-latin}:host(cds-ordered-list):not(.cds--list--nested){counter-reset:item}:host(cds-ordered-list) .cds--list--ordered:not(.cds--list--nested) ::slotted(cds-list-item){counter-increment:item;position:relative}:host(cds-ordered-list) .cds--list--ordered:not(.cds--list--nested) ::slotted(cds-list-item):before{content:counter(item) ".";inset-inline-start:-1.5rem;position:absolute}:host(cds-unordered-list){--cds-ce--list-marker:"\u2013"}:host(cds-unordered-list)[slot=nested]{--cds-ce--list-marker:"\u25AA"}:host(cds-unordered-list) ::slotted(cds-list-item){position:relative}:host(cds-unordered-list) ::slotted(cds-list-item):before{content:"\u2013";inset-inline-start:-1rem;position:absolute}:host(cds-unordered-list[nested]) ::slotted(cds-list-item):before,:host(cds-unordered-list[slot=nested]) ::slotted(cds-list-item):before{content:"\u25AA";inset-inline-start:-.75rem}:host(cds-list-item){color:var(--cds-text-primary,#161616);display:list-item}:host(cds-list-item):before{content:var(--cds-ce--list-marker,none);inset-inline-start:-1rem;position:absolute}:host(cds-list-item[nested]){margin-block:0}:host(cds-list-item[nested]) .cds-ce--list__item__nested-child{padding-block-start:0}']);

// node_modules/@carbon/web-components/es/components/list/list-item.js
var CDSListItem = class CDSListItem2 extends i2 {
  constructor() {
    super(...arguments);
    this.nested = false;
  }
  connectedCallback() {
    this.toggleAttribute("nested", Boolean(this.closest(this.constructor.selectorNestedList)));
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "listitem");
    }
    super.connectedCallback();
  }
  render() {
    return b`
      <slot></slot>
      <slot name="nested"></slot>
    `;
  }
  /**
   * A selector that will return nested list.
   */
  static get selectorNestedList() {
    return `${prefix}-ordered-list[slot="nested"],${prefix}-unordered-list[slot="nested"]`;
  }
};
CDSListItem.styles = styles;
__decorate([
  n({ type: Boolean, reflect: true })
], CDSListItem.prototype, "nested", void 0);
CDSListItem = __decorate([
  carbonElement(`${prefix}-list-item`)
], CDSListItem);

// node_modules/@carbon/web-components/es/components/list/unordered-list.js
var CDSUnorderedList = class CDSUnorderedList2 extends i2 {
  constructor() {
    super(...arguments);
    this.isExpressive = false;
    this.nested = false;
  }
  connectedCallback() {
    if (this.closest(this.constructor.selectorListItem) || this.nested) {
      this.setAttribute("slot", "nested");
    } else {
      this.removeAttribute("slot");
    }
    super.connectedCallback();
  }
  render() {
    const classes = e({
      [`${prefix}--list--unordered`]: true,
      [`${prefix}--list--nested`]: this.getAttribute("slot") === "nested" || this.nested,
      [`${prefix}--list--expressive`]: this.isExpressive
    });
    return b`
      <ul class="${classes}">
        <slot></slot>
      </ul>
    `;
  }
  /**
   * A selector that will return list item.
   */
  static get selectorListItem() {
    return `${prefix}-list-item`;
  }
};
CDSUnorderedList.styles = styles;
__decorate([
  n({ type: Boolean, reflect: true, attribute: "is-expressive" })
], CDSUnorderedList.prototype, "isExpressive", void 0);
__decorate([
  n({ type: Boolean })
], CDSUnorderedList.prototype, "nested", void 0);
CDSUnorderedList = __decorate([
  carbonElement(`${prefix}-unordered-list`)
], CDSUnorderedList);
var CDSUnorderedList$1 = CDSUnorderedList;

// node_modules/@carbon/web-components/es/components/list/ordered-list.js
var CDSOrderedList = class CDSOrderedList2 extends CDSUnorderedList$1 {
  constructor() {
    super(...arguments);
    this.native = false;
  }
  render() {
    const classes = e({
      [`${prefix}--list--ordered`]: !this.native,
      [`${prefix}--list--ordered--native`]: this.native,
      [`${prefix}--list--nested`]: this.getAttribute("slot") === "nested" || this.nested,
      [`${prefix}--list--expressive`]: this.isExpressive
    });
    return b`
      <ol class="${classes}">
        <slot></slot>
      </ol>
    `;
  }
};
__decorate([
  n({ type: Boolean, reflect: true })
], CDSOrderedList.prototype, "native", void 0);
CDSOrderedList = __decorate([
  carbonElement(`${prefix}-ordered-list`)
], CDSOrderedList);
