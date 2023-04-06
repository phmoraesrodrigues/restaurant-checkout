import { createContext, FC, useState } from "react";
import { ProductModel } from "../common/model";

export type CartContextType = {
  cart: ProductModel[];
  addToCart: (product: ProductModel) => void;
  removeFromCart: (product: ProductModel) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<ProductModel[]>([]);

  const addToCart = (product: ProductModel) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  const removeFromCart = (product: ProductModel) => {
    setCart((prevCart) => prevCart.filter((p) => p.id !== product.id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
