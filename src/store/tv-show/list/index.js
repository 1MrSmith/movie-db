import { getPopular } from '../../../services/rest.service';
import asyncLocalStorage from '../../../services/local-storage.service';
import markResponseVideos from '../../../utils/mark-response-videos';
import fetchStoreData from '../../../utils/fetch-data-store';
import {
  startLoadingTVShows,
  handleSuccessLoadingTVShows,
} from '../common';
import config from '../../../config';

const actionTypes = {
  SET_TVSHOWS_LIST: 'SET_TVSHOWS_LIST',
};

export const setTVShowsList = (payload) => {
  return { type: actionTypes.SET_TVSHOWS_LIST, payload };
}

export const loadTVShows = (pageId) => {
  return (dispatch) =>
    fetchStoreData({
      dispatch,
      startLoading: startLoadingTVShows,
      handleSuccess: handleSuccessLoadingTVShows,

      fetch: async () => {
        const data = await getPopular(pageId, config.typeVideos.tvShow);
        const userStorage = await asyncLocalStorage.getItem(config.keyLocalStorage);
        const user = JSON.parse(userStorage);
        const markedVideos = markResponseVideos(data?.results, user?.tvShowLibrary);

        dispatch(setTVShowsList({...data, markedVideos}));
        return data;
      },
    });
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_TVSHOWS_LIST:
      return { ...state, tvShowsList: payload };
    default:
      return state;
  }
}

export default reducer;
