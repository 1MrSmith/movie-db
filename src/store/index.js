import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

import tvShowsReducer from './tv-show';

const middlewares = [];

const rootReducer = combineReducers({
  tvShowsReducer,
});

export const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk, ...middlewares));

  return store;
};