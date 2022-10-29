export const mapProductData = ({ product }) => {
  return {
    id: product.id || null,
    title: product.title || null,
    description: product.description || null,
    img: {
      alt: product.images.edges[0]?.node.altText || null,
      src: product.images.edges[0]?.node.src || null,
    },
    price: product.variants.edges[0]?.node.priceV2.amount || null,
    currency: product.variants.edges[0]?.node.priceV2.currencyCode || null,
  };
};
