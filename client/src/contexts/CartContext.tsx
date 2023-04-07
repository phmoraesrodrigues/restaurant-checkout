import { FC, ReactNode, createContext, useState } from "react";
import { ProductModel } from "../common/model";

export type CartContextType = {
  cart: ProductModel[];
  addToCart: (product: ProductModel) => void;
  removeFromCart: (product: ProductModel) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<ProductModel[]>([]);

  const addToCart = (product: ProductModel) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (product: ProductModel) => {
    setCart((prevCart) => prevCart.filter((p) => p.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
