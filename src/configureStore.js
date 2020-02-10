import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducer/index";

export default function configureStore(initialState) {
  return createStore(reducers, initialState, applyMiddleware(thunk));
}
