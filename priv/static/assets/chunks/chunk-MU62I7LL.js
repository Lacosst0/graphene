import {
  CDSButton$1,
  buttonStyles
<<<<<<<< HEAD:priv/static/assets/chunks/chunk-PLQOWKQD.js
} from "./chunk-3LINNEX3.js";
import {
  o
} from "./chunk-NZEGYYG7.js";
import {
  e
} from "./chunk-DT7CIZC4.js";
========
} from "./chunk-JYACJRIF.js";
import {
  o
} from "./chunk-DAFPBEYU.js";
import {
  e
} from "./chunk-YOLTZNLE.js";
>>>>>>>> 8ec8e62f80de45f4d42992fbfd1d4576ecc905a2:priv/static/assets/chunks/chunk-MU62I7LL.js
import {
  prefix
} from "./chunk-ITCMO2MJ.js";
import {
  carbonElement
} from "./chunk-D5HOJOMG.js";
import {
  __decorate,
  b
<<<<<<<< HEAD:priv/static/assets/chunks/chunk-PLQOWKQD.js
} from "./chunk-XGWNKZOA.js";
========
} from "./chunk-3GZFZEMV.js";
>>>>>>>> 8ec8e62f80de45f4d42992fbfd1d4576ecc905a2:priv/static/assets/chunks/chunk-MU62I7LL.js

// node_modules/@carbon/web-components/es/components/button/button-skeleton.js
var CDSButtonSkeleton = class CDSButtonSkeleton2 extends CDSButton$1 {
  /**
   * Handles `click` event on the `<a>.
   *
   * @param event The event.
   */
  _handleClickLinkSkeleton(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  render() {
    const { autofocus, disabled, download, href, hreflang, ping, rel, size, target, type } = this;
    const classes = e({
      [`${prefix}--btn`]: true,
      [`${prefix}--skeleton`]: true,
      [`${prefix}--btn--${size}`]: size
    });
    return href ? b`
          <a
            id="button"
            role="button"
            class="${classes}"
            download="${o(download)}"
            href="${o(href)}"
            hreflang="${o(hreflang)}"
            ping="${o(ping)}"
            rel="${o(rel)}"
            target="${o(target)}"
            type="${o(type)}"
            @click="${this._handleClickLinkSkeleton}"></a>
        ` : b`
          <button
            id="button"
            class="${classes}"
            ?autofocus="${autofocus}"
            ?disabled="${disabled}"
            type="${o(type)}"></button>
        `;
  }
};
CDSButtonSkeleton.styles = buttonStyles;
CDSButtonSkeleton = __decorate([
  carbonElement(`${prefix}-button-skeleton`)
], CDSButtonSkeleton);
