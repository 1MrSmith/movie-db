import React, {
  Fragment,
  memo,
} from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';
import { useAppContext } from '../../components/AppContext';
import SearchBox from '../SearchBox';
import config from '../../config';
import style from './style.module.scss';

const NavBar = ({ cleanUp, handleLogout }) => {
  const { isAuthenticated } = useAppContext();
 
  return (
    <Fragment>
      <div
      className={style['nav-bar']}>

        {isAuthenticated
        ? <Fragment>

            <SearchBox />

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

    </Fragment>

  );
}

export default memo(NavBar);
