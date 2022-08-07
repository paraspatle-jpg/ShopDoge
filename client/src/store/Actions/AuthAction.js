import shopDogeApi from "../../apis/shopDogeApi";
import { ActionTypes } from "../Types";

export const register =
  ({ name, email, password }) =>
  (dispatch) => {
    // headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    //request body
    const body = JSON.stringify({ name, email, password });
    dispatch({
      type: ActionTypes.USER_LOADING,
    });
    shopDogeApi
      .post("/register", body, config)
      .then((res) =>
        dispatch({
          type: ActionTypes.REGISTER_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch({
          type: ActionTypes.REGISTER_FAIL,
        });
      });
  };

export const login =
  ({ email, password }) =>
  (dispatch) => {
    // headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    //request body
    const body = JSON.stringify({ email, password });
    dispatch({
      type: ActionTypes.USER_LOADING,
    });
    shopDogeApi
      .post("/login", body, config)
      .then((res) => {
        console.log(res.data);
        
        dispatch({
          type: ActionTypes.LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: ActionTypes.LOGIN_FAIL,
        });
      });
  };
