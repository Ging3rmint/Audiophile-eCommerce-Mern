import * as actionTypes from "../types/productTypes";

//object state contains {loading : false, products: [], error : ""}
export const productGetAllReducer = (state = { products: [] }, action) => {
  switch (
    action.type //get the action type from actions
  ) {
    case actionTypes.PRODUCT_GET_ALL_REQUEST:
      return { loading: true, products: [] }; //on request products should be empty
    case actionTypes.PRODUCT_GET_ALL_SUCCESS:
      return { loading: false, products: action.payload }; //on success, set loader to false and pass payload into state
    case actionTypes.PRODUCT_GET_ALL_FAIL:
      return { loading: false, error: action.payload }; //on fail, set loader to false, pass payload into error
    default:
      return state;
  }
};

//object state contains {loading : false, products: [], error : ""}
export const productGetAllByCategoryReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (
    action.type //get the action type from actions
  ) {
    case actionTypes.PRODUCT_GET_ALL_CATEGORY_REQUEST:
      return { loading: true, products: [] }; //on request products should be empty
    case actionTypes.PRODUCT_GET_ALL_CATEGORY_SUCCESS:
      return { loading: false, products: action.payload }; //on success, set loader to false and pass payload into state
    case actionTypes.PRODUCT_GET_ALL_CATEGORY_FAIL:
      return { loading: false, error: action.payload }; //on fail, set loader to false, pass payload into error
    default:
      return state;
  }
};

//object state contains {loading : false, product: {}, error : ""}
export const productGetBySlugReducer = (
  state = { loading: true, product: {} },
  action
) => {
  switch (
    action.type //get the action type from actions
  ) {
    case actionTypes.PRODUCT_GET_REQUEST:
      return { loading: true, product: {} }; //on request products should be empty
    case actionTypes.PRODUCT_GET_SUCCESS:
      return { loading: false, product: action.payload }; //on success, set loader to false and pass payload into state
    case actionTypes.PRODUCT_GET_FAIL:
      return { loading: false, error: action.payload }; //on fail, set loader to false, pass payload into error
    default:
      return state;
  }
};
