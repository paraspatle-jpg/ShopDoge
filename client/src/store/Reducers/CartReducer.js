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
    case ActionTypes.ADD_PRODUCT_SUCCESS:
    case ActionTypes.FETCH_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
        isLoading: false,
        isError: false,
      };
    case ActionTypes.FETCH_CART_FAIL:
      return {
        ...state,
        cart: null,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
