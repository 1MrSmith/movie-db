import React, {
  Fragment,
  memo,
  useEffect,
} from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { useAppContext } from '../AppContext';
import { getPopular } from '../../services/rest.service';
import markResponseVideos from '../../utils/mark-response-videos';
import asyncLocalStorage from '../../services/local-storage.service';
import error from '../../utils/error';
import config from '../../config';
import List from '../List';
import style from './style.module.scss';

const Home = () => {
  const {
    movies,
    setMovies,
    isLoading,
    moviePages,
    searchString,
    setIsLoading,
    setMoviePages,
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

          const data = await getPopular(pageId, config.typeVideos.movie);

          const markedVideos = markResponseVideos(data.results, user?.moviesLibrary);

          setMovies(markedVideos);
          setMoviePages({
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
    setMovies,
    params.id,
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

          <List
          data={movies}
          detailsUrl={config.routes.movie.url}
          paginationUrl={config.routes.movie.paginationPage}
          activePage={moviePages.page}
          totalPage={moviePages.totalPage}
          typeVideo={config.typeVideos.movie} />

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

export default memo(Home);
