import React, { memo, useEffect, useState } from 'react';
import { Router } from 'react-router-dom';
import Routes from '../../routes';
import Bars from '../Bars';
import history from '../../utils/history';
import { AppContext } from '../AppContext';
import asyncLocalStorage from '../../services/local-storage.service';
import config from '../../config';

const App = () => {
  const [isAuthenticated, userHasAuthenticated] = useState(
    asyncLocalStorage.getItem(config.keyLocalStorage)
  );
  const [moviePages, setMoviePages] = useState({
    page: 0,
    totalPage: 0,
  });
  const [searchString, userSearchString] = useState('');
  const [tvPages, setTvPages] = useState({
    page: 0,
    totalPage: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [tvs, setTvs] = useState([]);
  const [runPush, setRunPush] = useState('');

  useEffect(() => {
    const checkLocalStorage = async() => {
      const userStorage = await asyncLocalStorage.getItem(config.keyLocalStorage);
      const user = JSON.parse(userStorage);
      userHasAuthenticated(user?.isAuth || false);
    }
    checkLocalStorage();
  }, [isAuthenticated]);

  return (
    <AppContext.Provider
      value={{
        tvs,
        movies,
        setTvs,
        runPush,
        tvPages,
        isLoading,
        setMovies,
        setRunPush,
        moviePages,
        setTvPages,
        searchString,
        setIsLoading,
        setMoviePages,
        isAuthenticated,
        userSearchString,
        userHasAuthenticated,
      }}>
        <Router history={history}>
          <Bars />
          <Routes />
        </Router>
    </AppContext.Provider>
  );
}

export default memo(App);
