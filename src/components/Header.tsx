import React from "react";
import { useCartStore } from "store";

const Header = () => {
  const cart = useCartStore((state) => state.cart);

  return (
    <div>
      Header <pre>{JSON.stringify(cart, null, 2)}</pre>
    </div>
  );
};

export default Header;
