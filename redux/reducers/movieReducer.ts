import ActionType from 'redux/constants/action-type';

const initialState = {
  movies: [],
  filtredMovies: [],
};

const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionType.SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case ActionType.SET_FILTRED_MOVIES:
      return {
        ...state,
        filtredMovies: action.payload,
      };
    case ActionType.FETCH_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    case ActionType.LIKE_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie: any) => {
          if (movie.id === action.id) {
            return {
              ...movie,
              likes: movie.likes + 1,
              dislikes: movie.dislikes > 0 ? movie.dislikes - 1 : 0,
            };
          }
          return movie;
        }),
      };
    case ActionType.DESLIKE_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie: any) => {
          if (movie.id === action.id) {
            return {
              ...movie,
              likes: movie.likes > 0 ? movie.likes - 1 : 0,
              dislikes: movie.dislikes + 1,
            };
          }
          return movie;
        }),
      };
    case ActionType.DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie: any) => movie.id !== action.id),
      };
    case ActionType.ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.movie],
      };
    case ActionType.UPDATE_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie: any) => {
          if (movie.id === action.movie.id) {
            return {
              ...movie,
              ...action.movie,
            };
          }
          return movie;
        }),
      };
    default:
      return state;
  }
};
export default movieReducer;
