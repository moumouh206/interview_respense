import ActionType from 'redux/constants/action-type';

const initialState = {
  pagination: {
    currentPage: 1,
    perPage: 12,
  },
};
const paginationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: action.currentPage,
        },
      };
    case ActionType.SET_PER_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          perPage: action.perPage,
        },
      };
    default:
      return state;
  }
};
export default paginationReducer;
