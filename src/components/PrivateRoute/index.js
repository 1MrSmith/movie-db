import React, { Fragment, memo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppContext } from '../AppContext';
import config from '../../config';

const PrivateRoute = ({ children }) => {
  const history = useHistory();
  const { isAuthenticated } = useAppContext();

  useEffect(() => {
    if (!isAuthenticated) {
      history.push(config.routes.login.url);
    }
  }, [history, isAuthenticated]);

  return (
    <Fragment>
      {children}
    </Fragment>
  );
}

export default memo(PrivateRoute);
