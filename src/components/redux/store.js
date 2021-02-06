import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import reducer from "./reducer";

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(reducer, enhancers);
// const store = createStore(reducer, applyMiddleware(logger));

// const unsubscribe = store.subscribe(() => {
//   console.log("update state", store.getState());
// });

// unsubscribe();

export default store;
