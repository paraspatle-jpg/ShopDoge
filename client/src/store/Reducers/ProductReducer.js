import { ActionTypes } from "../Types";

const initialState = {
  products: [],
  selected: null,
  failed: false,
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCTS:
      return {...state, products: action.payload, failed: false };
    case ActionTypes.FETCH_PRODUCT:
      return {...state, selected: action.payload, failed: false };
    case ActionTypes.FETCH_PRODUCT_FAIL:
      return { products: null, selected: null, failed: true };
    default:
      return { state };
  }
};
