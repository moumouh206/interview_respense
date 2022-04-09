import { combineReducers } from '@reduxjs/toolkit';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
  allMovies: movieReducer,
});
export default rootReducer;
