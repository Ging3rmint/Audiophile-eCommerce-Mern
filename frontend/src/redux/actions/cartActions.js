import axios from "axios";
import * as actionTypes from "../types/cartTypes";

export const setCart = (slug, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/one?slug=${slug}`); //get detail from product api

  dispatch({
    type: actionTypes.CART_ADD,
    payload: {
      slug: data.slug,
      name: data.name,
      tag: data.tag,
      image: data.image,
      price: data.price,
      qty,
    },
  });

  const res = await axios.post("/api/cart", getState().cart.cartItems); //post all item to api

  if (res) {
    dispatch({ type: actionTypes.CART_UPDATE_SUCCESS });
  }
};

export const getCart = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.CART_GET_REQUEST }); //dispatch loading

    const { data } = await axios.get("/api/cart");

    dispatch({
      type: actionTypes.CART_GET_SUCCESS, //end loading, send payload
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.CART_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeAllCart = () => async (dispatch) => {
  dispatch({
    type: actionTypes.CART_REMOVE_ALL,
  });

  const res = await axios.post("/api/cart", []);

  if (res) {
    dispatch({ type: actionTypes.CART_UPDATE_SUCCESS }); //trigger reload of cart if required
  }
};

export const removeAnItem = (slug) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.CART_REMOVE,
    payload: slug,
  });

  const res = await axios.post("/api/cart", getState().cart.cartItems);

  if (res) {
    dispatch({ type: actionTypes.CART_UPDATE_SUCCESS }); //trigger reload of cart if required
  }
};
