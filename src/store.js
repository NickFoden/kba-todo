import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Reducers'
import thunk from 'redux-thunk'

const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f)
  )

  window.store = store;

export default store

//   const authToken = loadAuthToken();
//   if (authToken) {
//       const token = authToken;
//       store.dispatch(setAuthToken(token));
//   }

//END OF PAGE