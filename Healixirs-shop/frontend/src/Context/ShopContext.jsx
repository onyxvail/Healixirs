import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product.js";
// Import CartItems if it's being used
// import CartItems from "../Components/CartItems/CartItems.jsx";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0; // Corrected typo here from Cart[index] to cart[index]
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [CartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(CartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = { all_product, CartItems, addToCart, removeFromCart };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
