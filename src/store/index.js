import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reporter from "./logger/logger.js";

import recordsReducer from "./reducer.js";

let reducers = combineReducers({
  records: recordsReducer
});

const store = () =>
  createStore(reducers, composeWithDevTools(applyMiddleware(reporter)));
export default store;
