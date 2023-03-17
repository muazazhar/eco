"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  // const router = useRouter();

  useEffect(() => {
    setCartState;
  }, []);

  const setCartState = () => {
    setCart(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  };

  const addItemToCart = async ({
    productId,
    name,
    price,
    image,
    // stock,
    quantity = 1,
    color: { colorHex, colorName },
    size,
  }) => {
    const item = {
      productId,
      name,
      price,
      image,
      // stock,
      quantity,
      color: { colorHex, colorName },
      size,
    };
    // const doesItemExist = cart?.cartItems?.find(
    //   (i) => i.productId === item.productId
    // );
    // let newCartItems;
    // if (doesItemExist) {
    //   newCartItems = cart?.cartItems?.map((i) =>
    //     i.productId === doesItemExist.productId ? item : i
    //   );
    // } else {
    //   newCartItems = [...(cart?.cartItems || []), item];
    // setCartItems([...cartItems, item]);
    // setCart(cartItems);
    // }

    const checkProductInCart = cartItems.find(
      (i) => i.productId === item.productId
    );
    setTotalPrice((prevTotalPrice) => prevTotalPrice + item.price * quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.productId === item.productId)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      item.quantity = quantity;

      setCartItems([...cartItems, { ...item }]);
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setCartState();
    toast.success(`${item.quantity} ${item.name} added to the cart.`);
  };

  const onRemove = (product) => {
    const foundProduct = cartItems.find(
      (item) => item.productId === product.productId
    );
    const newCartItems = cartItems.filter(
      (item) => item.productId !== product.productId
    );

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    // setTotalQuantities(
    //   (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    // );
    setCartItems(newCartItems);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        user,
        totalPrice,
        onRemove,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
