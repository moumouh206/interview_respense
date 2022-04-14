import ActionType from 'redux/constants/action-type';

// fetch the movies from the state
export const fetchMovies = () => ({
  type: ActionType.FETCH_MOVIES,
});

// set filtred movies to the state
export const setFiltredMovies = (movies) => ({
  type: ActionType.SET_FILTRED_MOVIES,
  payload: movies,
});

// Set slected categories to the state
export const setSelectedCategories = (categories) => ({
  type: ActionType.SET_SELECTED_CATEGORIES,
  payload: categories,
});

// Set Movies per page to the state
export const setMoviesPerPage = (movies) => ({
  type: ActionType.SET_MOVIES_PER_PAGE,
  payload: movies,
});

// set the movies in the state
export const setMovies = (movies: any) => ({
  type: ActionType.SET_MOVIES,
  payload: movies,
});

// set Search query to the state
export const setSearchQuery = (query: string) => ({
  type: ActionType.SET_SEARCH_QUERY,
  payload: query,
});

// like a movie
export const likeMovie = (id: number) => ({
  type: ActionType.LIKE_MOVIE,
  id,
});

// dislike a movie
export const dislikeMovie = (id: number) => ({
  type: ActionType.DESLIKE_MOVIE,
  id,
});

// delete a movie
export const deleteMovie = (id: number) => ({
  type: ActionType.DELETE_MOVIE,
  id,
});
