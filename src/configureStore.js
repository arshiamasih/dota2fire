import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './store/index';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;

// export default function configureStore(initialState) {
//   return createStore(
//       reducers,
//       initialState,
//       applyMiddleware(thunk)
//   );
// }
