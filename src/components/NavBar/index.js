import React, { Fragment, memo, useState, useCallback } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Navbar, Nav, NavItem, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileVideo, faVideo, faAddressBook, faSignInAlt, faSignOutAlt, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from '../../components/AppContext';
import debounce from '../../utils/debounce';
import asyncLocalStorage from '../../services/local-storage.service';
import config from '../../config';
import style from './style.module.scss';

const NavBar = () => {
  const { isAuthenticated, userHasAuthenticated, userSearchString } = useAppContext();
  const history = useHistory();
  const [, setValue] = useState('');

  const debounced = useCallback(
    debounce((nextValue) => userSearchString(nextValue), config.delay),
    [],
  );

  const handleChange = (event) => {
    const { value: nextValue } = event.target;
    setValue(nextValue);
    debounced(nextValue);
  };

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
        <div
        className={style['nav-bar']}>
        {isAuthenticated
        ? <Fragment>

            <Form
            inline
            className='pr-3'>
              <FormControl
              type='text'
              placeholder='Search'
              name='search'
              onChange={handleChange} />
            </Form>

            <NavItem
            className='pt-1'
            onClick={handleLogout}>

              <NavLink
              activeclassname='text-body font-weight-bold'
              className='text-muted'
              onClick={cleanUp}
              to={config.routes.login.url}>{config.routes.logout.title}</NavLink>

            </NavItem>

          </Fragment>

        : <NavItem>

            <NavLink
            activeclassname='text-body font-weight-bold'
            className='text-muted'
            onClick={cleanUp}
            to={config.routes.login.url}>{config.routes.login.title}</NavLink>

          </NavItem>
        }

        </div>

        <nav className={style['side-bar']}>

          <ul>
            <li>
              <div className={style['logo']}>
                <FontAwesomeIcon
                size='lg'
                icon={faHamburger}/>
              </div>
            </li>
          {isAuthenticated
            ? <Fragment>
                <li>

                  <NavLink
                  activeclassname='text-body font-weight-bold'
                  className='text-muted pr-3'
                  onClick={cleanUp}
                  to={config.routes.home.url}>
                    <FontAwesomeIcon
                    size='lg'
                    icon={faHome}/>
                    <span className={style['nav-text']}>{config.routes.home.title}</span>

                    </NavLink>

                </li>

                <li>

                  <NavLink
                  activeclassname='text-body font-weight-bold'
                  className='text-muted pr-3'
                  onClick={cleanUp}
                  to={config.routes.movie.url}>
                    <FontAwesomeIcon
                    size='lg'
                    icon={faFileVideo}/>
                    <span className={style['nav-text']}>{config.routes.movie.title}</span>

                  </NavLink>

                </li>

                <li>

                  <NavLink
                  activeclassname='text-body font-weight-bold'
                  className='text-muted pr-3'
                  onClick={cleanUp}
                  to={config.routes.tvShow.url}>
                    <FontAwesomeIcon
                    size='lg'
                    icon={faVideo}/>
                    <span className={style['nav-text']}>{config.routes.tvShow.title}</span>

                  </NavLink>

                </li>

                <li>

                  <NavLink
                  activeclassname='text-body font-weight-bold'
                  className='text-muted pr-3'
                  onClick={cleanUp}
                  to={config.routes.myLibrary.url}>
                    <FontAwesomeIcon
                    size='lg'
                    icon={faAddressBook}/>
                    <span className={style['nav-text']}>{config.routes.myLibrary.title}</span>

                  </NavLink>

                </li>

                <li
                onClick={handleLogout}>

                  <NavLink
                  activeclassname='text-body font-weight-bold'
                  className='text-muted pr-3'
                  onClick={cleanUp}
                  to={config.routes.login.url}>
                    <FontAwesomeIcon
                    size='lg'
                    icon={faSignOutAlt}/>
                    <span className={style['nav-text']}>{config.routes.logout.title}</span>

                  </NavLink>

                </li>

              </Fragment>

            : <li
              onClick={handleLogout}>

              <NavLink
              activeclassname='text-body font-weight-bold'
              className='text-muted pr-3'
              onClick={cleanUp}
              to={config.routes.login.url}>
                <FontAwesomeIcon
                size='lg'
                icon={faSignInAlt}/>
                <span className={style['nav-text']}>{config.routes.login.title}</span>

              </NavLink>

            </li>
            }

          </ul>

        </nav>

    </Fragment>

  );
}

export default memo(NavBar);
