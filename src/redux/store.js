import { applyMiddleware, combineReducers, createStore } from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import { thunk } from "redux-thunk";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
  restaurantReducer,
  cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
