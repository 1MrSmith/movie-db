import { getPopularById } from '../../../services/rest.service';
import fetchStoreData from '../../../utils/fetch-data-store';
import {
  startLoadingTVShows,
  handleSuccessLoadingTVShows,
} from '../common';
import config from '../../../config';

const actionTypes = {
  SET_TVSHOWS_ITEM: 'SET_TVSHOWS_ITEM',
};

export const setTVShowsItem = (payload) => {
  return { type: actionTypes.SET_TVSHOWS_ITEM, payload };
}

export const loadTVShowDescription = (typeId) => {
  return (dispatch) =>
    fetchStoreData({
      dispatch,
      startLoading: startLoadingTVShows,
      handleSuccess: handleSuccessLoadingTVShows,

      fetch: async () => {
        const data = await getPopularById(typeId, config.typeVideos.tvShow);

        dispatch(setTVShowsItem(data));
        return data;
      },
    });
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_TVSHOWS_ITEM:
      return { ...state, tvShowDetail: payload };
    default:
      return state;
  }
}

export default reducer;
