import ActionTypes from "../actionTypes";

const initialState = {
  restaurants: [],
  isLoading: true,
  error: null,
  theme: false,
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REST_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.REST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    case ActionTypes.REST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        restaurants: action.payload,
      };
    case ActionTypes.TOGGLE_THEME:
      return { ...state, theme: action.payload };

    default:
      return state;
  }
};

export default restaurantReducer;
