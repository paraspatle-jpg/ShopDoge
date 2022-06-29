import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import { ProductReducer } from "./ProductReducer";
import { CartReducer } from "./CartReducer";

export default combineReducers({
  auth: AuthReducer,
  product: ProductReducer,
  cart: CartReducer,
});
