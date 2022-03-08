import React, {
  useState,
  useContext,
  useEffect,
  createContext,
  useReducer,
} from "react";
import axios from "axios";

import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productReviewCreateReducer,
  productTopRatedReducer,
} from "../reducers/productReducers";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

export const GlobalContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productListReducer, initialState);

  const listProducts = () =>
    dispatch({
      type: "PRODUCT_LIST_REQUEST",
    });

  return (
    <GlobalContext.Provider
      value={{
        listProducts,
        cart: state.cart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
