import { postToShopify, mapProductData } from "../../utils";

const queryProduct = async (productId) => {
  const data = await postToShopify({
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

export default async function handler(_req, res) {
  const PRODUCT_ID = "gid://shopify/Product/6701794328741";
  try {
    const data = await queryProduct(PRODUCT_ID);
    // Remaps data to receive a cleaner object in FE
    const mappedData = mapProductData(data);
    res.status(200).json(mappedData);
  } catch (err) {
    res.status(400).json(err);
  }
}
