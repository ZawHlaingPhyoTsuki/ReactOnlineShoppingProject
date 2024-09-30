import { create } from "zustand";
import useProductStore from "./useProductStore";

// const { products } = useProductStore();

const useCartStore = create((set) => ({
  carts: [
    {
      id: 1,
      productId: 2,
      quantity: 3,
    },
    {
      id: 2,
      productId: 7,
      quantity: 1,
    },
  ],

  removeCart: (Id) =>
    set((state) => ({ carts: state.carts.filter((cart) => cart.id !== Id) })),

  increaseQuantity: (Id) =>
    set((state) => ({
      carts: state.carts.map((cart) =>
        cart.id === Id ? { ...cart, quantity: cart.quantity + 1 } : cart
      ),
    })),
  decreaseQuantity: (Id) =>
    set((state) => ({
      carts: state.carts.map((cart) =>
        cart.id === Id ? { ...cart, quantity: cart.quantity - 1 } : cart
      ),
    })),
  
  addCart: (newCart) => set((state) => ({carts: [...state.carts, newCart]}) ) 
}));

export default useCartStore;
