import { combineReducers } from '@reduxjs/toolkit';
import movieReducer from './movieReducer';
import paginationReducer from './paginationReducer';

const rootReducer = combineReducers({
  allMovies: movieReducer,
  pagination: paginationReducer,
});
export default rootReducer;
