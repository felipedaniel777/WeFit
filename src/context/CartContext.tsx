import React, { createContext, useContext, ReactNode } from 'react';
import { useCart as useCartHook, CartItem } from '../hooks/useCart';

interface CartContextType {
  cartItems: CartItem[];
  addItemToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeItemFromCart: (id: string) => void;
  clearCart: () => void;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const cart = useCartHook();

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
};
