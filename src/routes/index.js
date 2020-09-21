import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import NotFound from '../components/NotFound';
import PrivateRoute from '../components/PrivateRoute';
import CardDetails from '../components/CardDetails';
import TVShow from '../components/TVShow';
import Search from '../components/Search';
import MyLibrary from '../components/MyLibrary';
import config from '../config';

const Routes = () => {
  return (
    <Switch>

      <Route
      exact
      path={[
        config.routes.home.url,
        config.routes.movie.url,
        config.routes.movie.paginationUrl,
        ]}>
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      </Route>

      <Route
      exact
      path={[
        config.routes.tvShow.url,
        config.routes.tvShow.paginationUrl,
        ]}>
        <PrivateRoute>
          <TVShow />
        </PrivateRoute>
      </Route>

      <Route exact path={config.routes.login.url}>
        <PrivateRoute>
          <Login />
        </PrivateRoute>
      </Route>

      <Route
      exact
      path={[
        config.routes.movie.detailsUrl,
        config.routes.tvShow.detailsUrl,
        ]}>
        <PrivateRoute>
          <CardDetails />
        </PrivateRoute>
      </Route>

      <Route
      exact
      path={[
        config.routes.myLibrary.url,
        config.routes.myLibrary.paginationUrl,
        ]}>
        <PrivateRoute>
          <MyLibrary />
        </PrivateRoute>
      </Route>

      <Route
      exact
      path={[
        config.routes.search.searchUrl,
        ]}>
        <PrivateRoute>
          <Search />
        </PrivateRoute>
      </Route>

      <Route>
        <NotFound />
      </Route>

    </Switch>
  );
}

export default memo(Routes);
