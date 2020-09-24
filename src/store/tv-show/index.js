import reduceReducers from 'reduce-reducers';

import commonReducer from './common';
import listReducer from './list';
import itemReducer from './item';

export * from './list';
export * from './item';

export default reduceReducers(
  {
    tvShowDetail: {},
    tvShowsList: {},
    isLoading: true,
  },
  commonReducer,
  listReducer,
  itemReducer,
);
