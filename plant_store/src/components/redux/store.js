import { createStore, compose } from "redux";
import reducer from "./reducer";
const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const store = createStore(reducer, enhancers);

// const unsubscribe = store.subscribe(() => {
//   console.log("update state", store.getState());
// });

// unsubscribe();
