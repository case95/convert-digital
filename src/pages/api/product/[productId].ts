import { NextApiRequest, NextApiResponse } from "next";
import { postToShopify, mapProductData } from "utils";

const queryProduct = async (productId: string) => {
  const data = await postToShopify({
    // Looks for an product image src & alt text, id, title, description, price amount & currency
    query: `{
      product(id: "${productId}") {
        images(first: 1) {
          edges {
            node {
              src
              altText
            }
          }
        }
        description
        id
        title
        variants(first: 1) {
          edges {
            node {
              priceV2 {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }`,
    variables: {},
  });
  return data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Gets the product ID from the query params
    const { productId } = req.query;
    // Adds the shopify prefix
    const shopifyProductId = `gid://shopify/Product/${productId}`;
    // Fetches the product data from the Shopify Storefront API
    const data = await queryProduct(shopifyProductId);
    // Remaps data to receive a cleaner object in FE
    const mappedData = mapProductData(data);
    res.status(200).json(mappedData);
  } catch (err) {
    res.status(400).json(err);
  }
}
