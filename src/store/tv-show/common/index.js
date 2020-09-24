const actionTypes = {
  TVSHOWS_START_LOADING: 'TVSHOWS_START_LOADING',
  TVSHOWS_HANDLE_SUCCESS: 'TVSHOWS_HANDLE_SUCCESS',
};

export const startLoadingTVShows = (payload) => {
  return { type: actionTypes.TVSHOWS_START_LOADING, payload };
}
export const handleSuccessLoadingTVShows = (payload) => {
  return { type: actionTypes.TVSHOWS_HANDLE_SUCCESS, payload };
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.TVSHOWS_START_LOADING:
      return { ...state, isLoading: payload };
    case actionTypes.TVSHOWS_HANDLE_SUCCESS:
      return { ...state, isLoading: payload };
    default:
      return state;
  }
}

export default reducer;
