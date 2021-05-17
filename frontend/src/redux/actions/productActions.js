import * as actionTypes from "../types/productTypes";
import axios from "axios";

export const getAllProduct = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.PRODUCT_GET_ALL_REQUEST }); //initiate loader

    const { data } = await axios.get("/api/products");

    dispatch({
      type: actionTypes.PRODUCT_GET_ALL_SUCCESS, //set loader to false, pass data to state
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.PRODUCT_GET_ALL_FAIL, //set loader to false, pass error to state
      payload:
        error.response && error.response.data.messsage //check if server have a message else, use catch error message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllProductByCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.PRODUCT_GET_ALL_CATEGORY_REQUEST }); //initiate loader

    const { data } = await axios.get(`/api/products/all?category=${category}`);

    dispatch({
      type: actionTypes.PRODUCT_GET_ALL_CATEGORY_SUCCESS, //set loader to false, pass data to state
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.PRODUCT_GET_ALL_CATEGORY_FAIL, //set loader to false, pass error to state
      payload:
        error.response && error.response.data.messsage //check if server have a message else, use catch error message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductBySlug = (slug) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.PRODUCT_GET_REQUEST }); //initiate loader

    const { data } = await axios.get(`/api/products/one?slug=${slug}`);

    dispatch({
      type: actionTypes.PRODUCT_GET_SUCCESS, //set loader to false, pass data to state
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.PRODUCT_GET_FAIL, //set loader to false, pass error to state
      payload:
        error.response && error.response.data.messsage //check if server have a message else, use catch error message
          ? error.response.data.message
          : error.message,
    });
  }
};
