import { Button } from "components";
import { useCartStore } from "store";

const Product = (product: Product) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const resetCart = useCartStore((state) => state.resetCart);
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center shadow-md border border-gray-200">
      {product.img.src ? (
        <img
          className="object-cover lg:col-span-2"
          src={product.img.src}
          alt={
            product.img.alt || product.description || `Product ${product.title}`
          }
        />
      ) : (
        <div className="lg:col-span-2 bg-gray-300 grid justify-center content-center">
          No image
        </div>
      )}
      <div className="bg-gray-100 p-4 flex flex-col gap-4 h-full">
        <div>
          <h3 className="text-lg font-bold">{product.title}</h3>
          <span className="text-xs font-bold text-gray-500">
            #{product.id.split("/").pop()}
          </span>
        </div>
        <span className="font-medium text-xl">
          {product.price} {product.currency}
        </span>
        <p className="text-sm">{product.description}</p>
        <Button onClick={() => addToCart(product.id)} variant="success">
          Add to cart
        </Button>
        {cart.findIndex((cartProduct) => cartProduct.id === product.id) !==
          -1 && (
          <Button onClick={resetCart} variant="error">
            Remove from Cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default Product;
