/* eslint-disable no-underscore-dangle */
import { createStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  {},
  typeof window !== 'undefined' && window !== undefined
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined,
);

export default store;
