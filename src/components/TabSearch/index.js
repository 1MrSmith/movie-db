import React, {
  Fragment,
  memo,
  useEffect
} from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import { useAppContext } from '../AppContext';
import { searchByName } from '../../services/rest.service';
import markResponseVideos from '../../utils/mark-response-videos';
import asyncLocalStorage from '../../services/local-storage.service';
import error from '../../utils/error';
import config from '../../config';
import List from '../List';
import style from './style.module.scss';

const TabSearch = ({ typeVideo, activeTab }) => {
  const {
    tvs,
    movies,
    setTvs,
    tvPages,
    setMovies,
    isLoading,
    moviePages,
    setTvPages,
    setIsLoading,
    searchString,
    setMoviePages,
    isAuthenticated,
  } = useAppContext();
  const params = useParams();
  const history = useHistory();

  useEffect(() => {

    if (searchString.length > 2) {
      history.push(`${config.routes.search.url}/${searchString}/page/1`);
    }

  }, [history, searchString]);

  useEffect(() => {
    const loadSearchData = async () => {

    try {

      if (params.query.length > 2 && isAuthenticated) {
        setIsLoading(true);
        const userStorage = await asyncLocalStorage.getItem(config.keyLocalStorage);
        const user = JSON.parse(userStorage);

        if (activeTab.match(config.routes.movie.title)) {

          const data = await searchByName(params.query, params.id, config.typeVideos.movie);

          const markedVideos = markResponseVideos(data.results, user?.moviesLibrary);

          setMovies(markedVideos);
          setMoviePages({
            page: data.page,
            totalPage: data.total_pages,
          });

        } else {
          const data = await searchByName(params.query, params.id, config.typeVideos.tvShow);

          const markedVideos = markResponseVideos(data.results, user?.tvShowLibrary);

          setTvs(markedVideos);
          setTvPages({
            page: data.page,
            totalPage: data.total_pages,
          });
        }

      }

      setIsLoading(false);

    } catch (e) {
      error(e);
      setIsLoading(false);
    }

  }
  loadSearchData();

  }, [
    setTvs,
    setMovies,
    params.id,
    typeVideo,
    activeTab,
    setTvPages,
    searchString,
    params.query,
    setIsLoading,
    setMoviePages,
    isAuthenticated,
  ]);

  return (
    <Fragment>
      {!isLoading
      ? <div
        className={style['page']}>

          {activeTab.match(config.routes.movie.title)
          ? <List
            data={movies}
            detailsUrl={config.routes.movie.url}
            paginationUrl={`${config.routes.search.url}/${params.query}/page`}
            activePage={moviePages.page}
            totalPage={moviePages.totalPage}
            typeVideo={config.typeVideos.movie} />

          : <List
            data={tvs}
            detailsUrl={config.routes.tvShow.url}
            paginationUrl={`${config.routes.search.url}/${params.query}/page`}
            activePage={tvPages.page}
            totalPage={tvPages.totalPage}
            typeVideo={config.typeVideos.tvShow} />

          }

        </div>

      : <div
        className={style['page__spinner']}>

          <Spinner
          animation='border'
          variant='secondary' />

        </div>

      }

    </Fragment>
  );
}

export default memo(TabSearch);
