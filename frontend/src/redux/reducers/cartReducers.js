import * as actionTypes from "../types/cartTypes";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.CART_ADD:
      const thisItem = action.payload;
      const existItem = state.cartItems.find(
        (item) => item.slug === thisItem.slug
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.slug === existItem.slug ? thisItem : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, thisItem],
        };
      }
    case actionTypes.CART_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case actionTypes.CART_GET_REQUEST:
      return {
        loading: true,
        cartItems: [],
      };
    case actionTypes.CART_GET_SUCCESS:
      return {
        loading: false,
        cartItems: action.payload,
      };
    case actionTypes.CART_GET_FAIL:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case actionTypes.CART_REMOVE_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.slug !== action.payload
        ),
      };
    case actionTypes.CART_STATE_RESET:
      return { ...state, loading: false, success: false };
    default:
      return state;
  }
};
