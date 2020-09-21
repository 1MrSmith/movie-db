import React, { Fragment, memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppContext } from '../../components/AppContext';
import asyncLocalStorage from '../../services/local-storage.service';
import SideBar from '../SideBar';
import NavBar from '../NavBar';
import config from '../../config';

const Bars = () => {
  const { userHasAuthenticated, userSearchString } = useAppContext();
  const history = useHistory();

  const cleanUp = () => {
    userSearchString('');
  }

  const handleLogout = async () => {
    userHasAuthenticated(false);
    const userStorage = await asyncLocalStorage.getItem(config.keyLocalStorage);
    let user = JSON.parse(userStorage);

    if (user) {

      user.isAuth = false;

    } else {

      user = {
        isAuth: false,
      };

    }
    await asyncLocalStorage.setItem(config.keyLocalStorage, JSON.stringify(user));
    history.push(`${config.routes.login.url}`);
  }

  return (
    <Fragment>
      <NavBar
      cleanUp={cleanUp}
      handleLogout={handleLogout} />

      <SideBar
      cleanUp={cleanUp}
      handleLogout={handleLogout} />
    </Fragment>
  );
}

export default memo(Bars);
