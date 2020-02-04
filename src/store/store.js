import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

const logger = store => next => action => {
  console.info("Logger: ", action);
  return next(action);
};

let initialState = undefined;

export default createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);
