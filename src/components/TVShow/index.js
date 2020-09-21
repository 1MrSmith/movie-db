import React, {
  memo,
  Fragment,
  useEffect,
} from 'react';
import { Spinner } from 'react-bootstrap';
import { useAppContext } from '../AppContext';
import { useHistory, useParams } from 'react-router-dom';
import { getPopular } from '../../services/rest.service';
import markResponseVideos from '../../utils/mark-response-videos';
import asyncLocalStorage from '../../services/local-storage.service';
import config from '../../config';
import error from '../../utils/error';
import List from '../List';
import style from './style.module.scss';

const TVShow = () => {
  const {
    tvs,
    setTvs,
    tvPages,
    isLoading,
    setTvPages,
    searchString,
    setIsLoading,
    isAuthenticated,
  } = useAppContext();
  const history = useHistory();
  const params = useParams();

  useEffect(() => {

    if (searchString.length > 2) {
      history.push(`${config.routes.search.url}/${searchString}/page/1`);
    }

  }, [history, searchString]);

  useEffect(() => {
    const loadData = async() => {
      try {

        if (isAuthenticated) {
          setIsLoading(true);

          let pageId;
          if (params.query) {
            pageId = 1;
          } else {
            pageId = params.id;
          }

          const userStorage = await asyncLocalStorage.getItem(config.keyLocalStorage);
          const user = JSON.parse(userStorage);

          const data = await getPopular(pageId, config.typeVideos.tvShow);

          const markedVideos = markResponseVideos(data.results, user?.tvShowLibrary);

          setTvs(markedVideos);
          setTvPages({
            page: data.page,
            totalPage: data.total_pages,
          });

        }

        setIsLoading(false);

      } catch (e) {
        error(e);
        setIsLoading(false);
      }
    }
    loadData();

  }, [
    setTvs,
    params.id,
    setTvPages,
    params.query,
    setIsLoading,
    isAuthenticated,
  ]);

  return (
    <Fragment>
      {!isLoading
      ? <div
        className={style['page']}>

          <List
          data={tvs}
          detailsUrl={config.routes.tvShow.url}
          paginationUrl={config.routes.tvShow.paginationPage}
          activePage={tvPages.page}
          totalPage={tvPages.totalPage}
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

export default memo(TVShow);
