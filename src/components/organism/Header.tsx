import { Button } from "components/atoms";
import React from "react";
import { useCartStore } from "store";

const Header = () => {
  const cart = useCartStore((state) => state.cart);

  return (
    <header className="flex items-center justify-between w-full h-24 border-b px-8">
      <span>Site Logo</span>
      <nav>{/* Nav Links */}</nav>
      <Button className="flex gap-2 items-center">
        <span>Cart</span>
        <span className="bg-black block h-6 w-6 leading-6 font-bold text-white text-center rounded-full	">
          {cart.reduce((acc, product) => acc + product.quantity, 0)}
        </span>
      </Button>
    </header>
  );
};

export default Header;
