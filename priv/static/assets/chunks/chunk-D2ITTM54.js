import {
  prefix
} from "./chunk-ITCMO2MJ.js";
import {
  b
} from "./chunk-3GZFZEMV.js";

// node_modules/@carbon/web-components/es/components/loading/loading-icon.js
var getLoadingIcon = ({ description, small }) => {
  const radius = small ? "42" : "44";
  return b`
    <svg class="${prefix}--loading__svg" viewBox="0 0 100 100">
      ${!description ? void 0 : b` <title>${description}</title> `}
      <circle
        ?hidden="${!small}"
        class="${prefix}--loading__background"
        cx="50%"
        cy="50%"
        r="${radius}" />
      <circle
        class="${prefix}--loading__stroke"
        cx="50%"
        cy="50%"
        r="${radius}" />
    </svg>
  `;
};

export {
  getLoadingIcon
};
