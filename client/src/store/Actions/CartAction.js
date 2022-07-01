import shopDogeApi from "../../apis/shopDogeApi";
import { ActionTypes } from "../Types";

export const getCart = () => (dispatch) => {
  dispatch({ types: ActionTypes.CART_LOADING });
  shopDogeApi
    .get("/cart")
    .then((response) => {
      dispatch({
        types: ActionTypes.FETCH_CART_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({ types: ActionTypes.FETCH_CART_FAIL });
    });
};

export const addToCart = () => (dispatch) => {
  shopDogeApi
    .post("/cart")
    .then((response) => {
      dispatch({
        types: ActionTypes.ADD_PRODUCT_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({ types: ActionTypes.ADD_PRODUCT_FAIL });
    });
};
export const deleteFromCart = () => (dispatch) => {
  shopDogeApi
    .delete("/cart")
    .then((response) => {
      dispatch({
        types: ActionTypes.DELETE_PRODUCT_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({ types: ActionTypes.DELETE_PRODUCT_FAIL });
    });
};
export const updateCount = () => (dispatch) => {
  shopDogeApi
    .put("/cart")
    .then((response) => {
      dispatch({
        types: ActionTypes.UPDATE_PRODUCT_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({ types: ActionTypes.UPDATE_PRODUCT_FAIL });
    });
};
