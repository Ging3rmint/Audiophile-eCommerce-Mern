import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productGetAllReducer,
  productGetAllByCategoryReducer,
  productGetBySlugReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducers";

const reducer = combineReducers({
  productGetAll: productGetAllReducer,
  productGetAllCategory: productGetAllByCategoryReducer,
  productGetBySlug: productGetBySlugReducer,
  cart: cartReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
