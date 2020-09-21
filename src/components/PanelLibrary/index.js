import React, {
  Fragment,
  memo,
  useEffect
} from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import { useAppContext } from '../AppContext';
import { getPopularById } from '../../services/rest.service';
import markResponseVideos from '../../utils/mark-response-videos';
import getQuantityPages from '../../utils/get-quantity-pages';
import asyncLocalStorage from '../../services/local-storage.service';
import error from '../../utils/error';
import config from '../../config';
import List from '../List';
import style from './style.module.scss';

const PanelLibrary = ({ typeVideo, activeTab }) => {
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

      if (isAuthenticated) {
        setIsLoading(true);
        const userStorage = await asyncLocalStorage.getItem(config.keyLocalStorage);
        const user = JSON.parse(userStorage);

        if (activeTab.match(config.routes.movie.title)) {

          const moviesLibrary = user?.moviesLibrary || [];

           const moviesLibraryOnPage = await Promise.all(moviesLibrary.map(async(element) =>
            await getPopularById(element, config.typeVideos.movie)
          ));

          const markedVideos = markResponseVideos(moviesLibraryOnPage, user?.moviesLibrary);

          const { startIndex, endIndex, page, totalPage } = getQuantityPages(params.id, markedVideos.length);

          setMovies(markedVideos.slice(startIndex, endIndex));
          setMoviePages({
            page,
            totalPage,
          });

        } else {
          const tvShowLibrary = user?.tvShowLibrary || [];

          const tvShowLibraryOnPage = await Promise.all(tvShowLibrary.map(async(element) =>
            await getPopularById(element, config.typeVideos.tvShow)
          ));

          const markedVideos = markResponseVideos(tvShowLibraryOnPage, user?.tvShowLibrary);

          const { startIndex, endIndex, page, totalPage } = getQuantityPages(params.id, markedVideos.length);

          setTvs(markedVideos.slice(startIndex, endIndex));
          setTvPages({
            page,
            totalPage,
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
            paginationUrl={`${config.routes.myLibrary.url}/${config.typeVideos.movie}/page`}
            activePage={moviePages.page}
            totalPage={moviePages.totalPage}
            typeVideo={config.typeVideos.movie} />

          : <List
            data={tvs}
            detailsUrl={config.routes.tvShow.url}
            paginationUrl={`${config.routes.myLibrary.url}/${config.typeVideos.tvShow}/page`}
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

export default memo(PanelLibrary);
