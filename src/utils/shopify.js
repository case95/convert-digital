import { default as fetch } from "node-fetch";

export const postToShopify = async ({ query, variables = {} }) => {
  try {
    const result = await fetch(process.env.SHOP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token":
          process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    }).then((res) => res.json());

    if (result.errors) {
      console.error({ errors: result.errors });
    } else if (!result || !result.data) {
      return "No results found.";
    }
    return result.data;
  } catch (error) {
    console.error(error);
  }
};
