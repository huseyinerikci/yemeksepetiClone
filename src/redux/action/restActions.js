import ActionTypes from "../actionTypes";
import api from "../../api/index";

export const getRestaurants = () => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.REST_LOADING });

    api
      .get("/restaurants")
      .then((res) => {
        dispatch({ type: ActionTypes.REST_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: ActionTypes.REST_ERROR, payload: err });
      });
  };
};

export const changeToggle = (theme) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.TOGGLE_THEME, payload: theme });
  };
};
