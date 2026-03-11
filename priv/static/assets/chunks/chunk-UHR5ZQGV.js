// node_modules/@carbon/ibm-products-web-components/es/globals/js/utils/getSupportedLocale.js
var getSupportedLocale = (locale, defaultLocale = "en-US") => {
  let supportedLocale;
  try {
    Intl.NumberFormat.supportedLocalesOf(locale);
    supportedLocale = locale;
  } catch (error) {
    supportedLocale = defaultLocale;
  }
  return supportedLocale;
};

export {
  getSupportedLocale
};
