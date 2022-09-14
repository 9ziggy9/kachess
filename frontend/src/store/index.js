import { createStore, combineReducers } from "redux";
import game from "./game";

const rootReducer = combineReducers({
  game,
});

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState);
};

export default configureStore;
