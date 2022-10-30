module.exports = {
  env: {
    SHOP: process.env.SHOP,
    SHOPIFY_STOREFRONT_ACCESS_TOKEN:
      process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  },
  images: {
    domains: ["cdn.shopify.com"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
