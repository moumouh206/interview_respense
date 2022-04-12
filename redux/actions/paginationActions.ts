import ActionType from 'redux/constants/action-type';

// set current page in the state
export const setCurrentPage = (currentPage: number) => ({
  type: ActionType.SET_CURRENT_PAGE,
  currentPage,
});

// set per page in the state
export const setPerPage = (perPage: number) => ({
  type: ActionType.SET_PER_PAGE,
  perPage,
});
