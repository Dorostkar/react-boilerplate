import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from 'redux-thunk'



export default initialState => {
  let enhancer;
  if(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
 enhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
     applyMiddleware(thunk, reduxImmutableStateInvariant())
   )
  }else{
    enhancer=applyMiddleware(thunk, reduxImmutableStateInvariant())
  }

  return createStore(
    rootReducer,
    initialState,
    enhancer
  );
};
