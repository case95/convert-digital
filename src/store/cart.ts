import create from "zustand";

type Product = {
  id: string;
  quantity: number;
};

interface CartState {
  cart: Product[];
  addToCart: (product: string) => void;
  resetCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],

  addToCart: (productId: string, amount = 1) =>
    set((state) => {
      const productIndex = state.cart.findIndex(
        (product) => product.id === productId
      );

      if (productIndex === -1) {
        return {
          cart: [
            ...state.cart,
            {
              id: productId,
              quantity: amount,
            },
          ],
        };
      }
      const cart = [...state.cart];
      cart[productIndex].quantity = cart[productIndex].quantity + amount;
      return { cart };
    }),

  resetCart: () => set({ cart: [] }),
}));
