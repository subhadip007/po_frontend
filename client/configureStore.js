import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from './reducers';

const axiosInstance = axios.create({
  baseURL: '/api',
});

const composeEnhancers =
  typeof window === 'object' && process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk.withExtraArgument(axiosInstance)),
);

const store = createStore(
  reducers,
  window.__INITIAL_STATE__,
  enhancer,
);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers');
    store.replaceReducer(nextRootReducer);
  });
}

export default store;