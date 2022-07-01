import { ActionTypes } from "../Types";

const initialState = {
  cart: null,
  isLoading: false,
  isError: false,
};

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CART_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ActionTypes.DELETE_PRODUCT_SUCCESS:
    case ActionTypes.FETCH_CART_SUCCESS:
      return {
        cart: action.payload.cart,
        isLoading: false,
        isError: false,
      };
    case ActionTypes.FETCH_CART_FAIL:
      return {
        cart: [],
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
