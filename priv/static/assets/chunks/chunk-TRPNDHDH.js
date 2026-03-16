import {
  createIconTemplate,
  o
<<<<<<<< HEAD:priv/static/assets/chunks/chunk-PBKNMGYX.js
} from "./chunk-OZCPNA5T.js";
========
} from "./chunk-LDCWSK5M.js";
>>>>>>>> 8ec8e62f80de45f4d42992fbfd1d4576ecc905a2:priv/static/assets/chunks/chunk-TRPNDHDH.js

// node_modules/@carbon/web-components/es/globals/internal/icon-loader.js
function iconLoader(icon, attributes = {}, customSvg) {
  if (customSvg) {
    return o(customSvg);
  }
  if (icon) {
    if ("default" in icon || "attrs" in icon && "content" in icon) {
      const iconTemplate = createIconTemplate(icon);
      return iconTemplate(attributes);
    }
    return icon;
  }
  return null;
}

export {
  iconLoader
};
