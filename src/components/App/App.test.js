import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Router } from 'react-router-dom';
import { AppContext } from '../AppContext';
import Routes from '../../routes';
import Bars from '../Bars';
import history from '../../utils/history';
import App from './index';

describe('App component', () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('renders without crashing', async () => {
    await act(async () => {
        render(<App />, container);
    });
  });

  it('with context', async() => {
    let tvs,
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
    userHasAuthenticated;

    await act(async () => {
      render(<AppContext.Provider
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
      </AppContext.Provider>, container);
    });
  })

});
