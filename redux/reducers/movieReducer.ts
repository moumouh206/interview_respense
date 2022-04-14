import ActionType from 'redux/constants/action-type';

const initialState = {
  movies: [],
  filtredMovies: [],
  moviesPerPage: [],
  selectedCategories: [],
  search: '',
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
    case ActionType.SET_MOVIES_PER_PAGE:
      return {
        ...state,
        moviesPerPage: action.payload,
      };
    case ActionType.SET_SELECTED_CATEGORIES:
      return {
        ...state,
        selectedCategories: action.payload,
      };
    case ActionType.SET_SEARCH_QUERY:
      return {
        ...state,
        search: action.payload,
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
              likes: movie.liked ? movie.likes - 1 : movie.likes + 1,
              liked: movie.liked ? false : true,
              dislikes: movie.disliked ? movie.dislikes - 1 : movie.dislikes,
              disliked: movie.disliked ? false : null,
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
              // likes: movie.likes > 0 ? movie.likes - 1 : 0,
              dislikes: movie.disliked
                ? movie.dislikes - 1
                : movie.dislikes + 1,
              disliked: movie.disliked ? false : true,
              likes: movie.liked ? movie.likes - 1 : movie.likes,
              liked: movie.liked ? false : null,
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
