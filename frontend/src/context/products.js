import React, { useEffect, createContext, useState } from "react";
import axios from "axios";

import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "./actions";
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [myproducts, setProducts] = useState([]);

  const listProducts =
    (keyword = "", pageNumber = "") =>
    async (dispatch) => {
      try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const { data } = await axios.get(
          `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
        );

        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
      } catch (error) {
        dispatch({
          type: PRODUCT_LIST_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    };

  useEffect(() => {
    setLoading(true);
    setProducts(listProducts);
    return () => {};
  }, []);

  return (
    <ProductContext.Provider
      value={{
        myproducts,
        loading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
