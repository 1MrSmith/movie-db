import React, {
  Fragment,
  memo,
  useState,
  useCallback,
} from 'react';
import { NavLink } from 'react-router-dom';
import {NavItem, Form, FormControl } from 'react-bootstrap';
import { useAppContext } from '../../components/AppContext';
import debounce from '../../utils/debounce';
import config from '../../config';
import style from './style.module.scss';

const NavBar = ({ cleanUp, handleLogout }) => {
  const { isAuthenticated, userSearchString } = useAppContext();
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

    </Fragment>

  );
}

export default memo(NavBar);
