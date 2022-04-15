import React, { useReducer, useContext } from "react";
import axios from "axios";
import reducer from "./reducer.js";
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  DELETE_PRODUCT_BEGIN,
  TOGGLE_PRODUCT,
  HANDLE_CHANGE,
} from "./actions.js";

const AppContext = React.createContext();

const initialState = {
  isLoading: false,
  showAlert: false,
  products: [],
  totalProducts: 0,
  numOfPages: 1,
  selectedItems: [],
  sku: "",
  name: "",
  price: "",
  size: "",
  height: "",
  width: "",
  length: "",
  weight: "",
  defaultOption: "DVD",
  list: ["DVD", "Furniture", "Book"],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

  const getProducts = async () => {
    let url = "/";
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const { data } = await authFetch(url);
      const { products, totalProducts, numOfPages } = data;
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: { products, totalProducts, numOfPages },
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  const toggleProduct = (e) => {
    const id = e.target.id;
    dispatch({ type: TOGGLE_PRODUCT, payload: { id } });
  };

  const deleteProduct = async (selectedItems) => {
    dispatch({ type: DELETE_PRODUCT_BEGIN });
    try {
      await axios.delete(`http://localhost:5000/api/v1/${selectedItems}`);
      getProducts();
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        getProducts,
        deleteProduct,
        toggleProduct,
        handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
