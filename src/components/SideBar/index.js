import React, {
  Fragment,
  memo,
} from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faVideo,
  faSignInAlt,
  faHamburger,
  faFileVideo,
  faSignOutAlt,
  faAddressBook,
} from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from '../../components/AppContext';
import config from '../../config';
import style from './style.module.scss';


const SideBar = ({ cleanUp, handleLogout }) => {
  const { isAuthenticated } = useAppContext();

  return (
    <Fragment>
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

export default memo(SideBar);
