import shopDogeApi from "../../apis/shopDogeApi";
import { ActionTypes } from "../Types";

export const getCart = () => (dispatch) => {
  dispatch({ type: ActionTypes.CART_LOADING });
  const body = {
    header: { Authorization: "Bearer " + localStorage.getItem("token") },
  };
  shopDogeApi
    .get("/cart", body)
    .then((response) => {
      console.log(response);
      dispatch({
        type: ActionTypes.FETCH_CART_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({ type: ActionTypes.FETCH_CART_FAIL });
    });
};

export const addToCart = (productID) => (dispatch) => {
  const body = {
    productID: productID,
    header: { Authorization: "Bearer " + localStorage.getItem("token") },
  };
  shopDogeApi
    .post("/cart", body)
    .then((response) => {
      if (response.status >= 400) throw new Error(response.data.msg);
      dispatch({
        type: ActionTypes.ADD_PRODUCT_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({ type: ActionTypes.ADD_PRODUCT_FAIL });
    });
};

export const deleteFromCart = () => (dispatch) => {
  shopDogeApi
    .delete("/cart")
    .then((response) => {
      dispatch({
        type: ActionTypes.DELETE_PRODUCT_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({ type: ActionTypes.DELETE_PRODUCT_FAIL });
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
