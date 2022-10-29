import { useCartStore } from "store";

function Product(product) {
  const addToCart = useCartStore((state) => state.addToCart);
  const resetCart = useCartStore((state) => state.resetCart);

  return (
    <pre>
      {JSON.stringify(product, null, 2)}
      <button onClick={() => addToCart(product.id)}>Add to cart</button>
      <button onClick={resetCart}>Empty cart</button>
    </pre>
  );
}

export default Product;
