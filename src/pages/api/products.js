import { postToShopify } from "../../utils";

const queryProducts = async () => {
  const data = await postToShopify({
    query: `
      {
        products(first: 10) {
          edges {
            node {
              id
              title
              description
              featuredImage {
                url
                altText
              }
              variants(first: 1) {
                edges {
                  node {
                    title
                    quantityAvailable
                    priceV2 {
                      amount
                      currencyCode
                    }
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
              images(first: 1) {
                edges {
                  node {
                    altText
                    src
                  }
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
  try {
    const data = await queryProducts();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
}
