"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
              ...item,
              quantity: (item.quantity || 1) + (product.quantity || 1),
            }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: product.quantity || 1,
        },
      ];
    });
  };
  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter(
        (product) => product.id !== productId
      )
    );
  };
  const updateQuantity = (productId, quantity) => {
    setCart((currentCart) =>
      currentCart.map((product) =>
        product.id === productId
          ? {
            ...product,
            quantity: Math.max(
              1,
              Math.min(quantity, product.stock)
            ),
          }
          : product
      )
    );
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}