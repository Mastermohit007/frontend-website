import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartProduct, setCartProduct] = useState([]);

  const addToCart = (product) => {
    const itemInCart = cartProduct.find((item) => item.id === product.id);
    if (itemInCart) {
      // Increase quantity if already in cart
      const updatedCart = cartProduct.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      setCartProduct(updatedCart);
      toast.success("Item quantity is increased");
    } else {
      //Add new ietm with quantity 1
      setCartProduct([...cartProduct, { ...product, quantity: 1 }]);
      toast.success("Product is added to Cart");
    }
  };

  const productQuantity = (cartProduct, productId, action) => {
    setCartProduct(
      cartProduct
        .map((item) => {
          if (item.id === productId) {
            console.log(item.quantity);

            let newQuant = item.quantity;
            if (action === "increase") {
              newQuant = newQuant + 1;
              toast.success("item increased");
            } else if (action === "decrease") {
              newQuant = newQuant - 1;
              toast.success("item decreased");
            }
            return newQuant > 0 ? { ...item, quantity: newQuant } : null;
          }
          return item;
        })
        .filter((item) => item != null),
    );
  };

  const deleteProduct = (productId) => {
    setCartProduct(cartProduct.filter((item) => item.id !== productId));
    toast.success("Product is deleted from Cart");
  };

  return (
    <CartContext.Provider
      value={{
        cartProduct,
        setCartProduct,
        addToCart,
        productQuantity,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
