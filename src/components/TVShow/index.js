/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  Fragment,
  useEffect,
} from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { loadTVShows } from '../../store/tv-show';
import { useAppContext } from '../AppContext';
import { useHistory, useParams } from 'react-router-dom';
import config from '../../config';
import error from '../../utils/error';
import List from '../List';
import style from './style.module.scss';

const TVShow = (props) => {
  const {
    searchString,
    isAuthenticated,
  } = useAppContext();

  const history = useHistory();
  const params = useParams();
  const { tvShowsList, isLoading, } = props.tvShowsList;

  useEffect(() => {

    if (searchString.length > 2) {
      history.push(`${config.routes.search.url}/${searchString}/page/1`);
    }

  }, [history, searchString]);

  const loadStoreData = (pageId) => Promise.all([props.loadTVShows(pageId)]);

  useEffect(() => {
    try {

      if (isAuthenticated) {
        let pageId;
        if (params.query) {
          pageId = 1;
        } else {
          pageId = params.id;
        }

        loadStoreData(pageId);
      }

    } catch (e) {
      error(e);
    }

  }, [
    params.id,
    isLoading,
    params.query,
    isAuthenticated,
  ]);

  return (
    <Fragment>
      {!isLoading
      ? <div
        className={style['page']}>

          <List
          data={tvShowsList.markedVideos}
          detailsUrl={config.routes.tvShow.url}
          paginationUrl={config.routes.tvShow.paginationPage}
          activePage={tvShowsList.page || 1}
          totalPage={tvShowsList.total_pages || 1}
          typeVideo={config.typeVideos.tvShow} />

        </div>

      : <div
        className={style['page']}>

          <Spinner
          animation='border'
          variant='secondary' />

        </div>

      }

    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  tvShowsList: state.tvShowsReducer,
});

const mapDispatchToProps = (dispatch) => ({
  loadTVShows: (payLoad) => dispatch(loadTVShows(payLoad)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TVShow);
