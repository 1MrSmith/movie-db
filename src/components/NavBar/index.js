import React, { Fragment, memo, useState, useCallback } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Navbar, Nav, NavItem, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from '../../components/AppContext';
import debounce from '../../utils/debounce';
import asyncLocalStorage from '../../services/local-storage.service';
import config from '../../config';

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
    const user = {
      isAuth: false,
    };
    await asyncLocalStorage.setItem(config.keyLocalStorage, JSON.stringify(user));
    history.push(`${config.routes.login.url}`);
  }

  return (
    <Fragment>
      <Navbar
        bg='light'
        fixed='top'
        expand='lg'>

          <Navbar.Toggle
          aria-controls='basic-navbar-nav' />

          <Navbar.Collapse
          id='basic-navbar-nav'>

            <Nav
            className='mr-auto'>

              <Navbar.Brand>

                <NavLink
                activeClassName='text-body'
                className='text-muted'
                onClick={cleanUp}
                to={config.routes.home.url}>

                  <FontAwesomeIcon
                  size='lg'
                  icon={faHome}/>

                </NavLink>

              </Navbar.Brand>

            </Nav>

            <Nav
            className='pullRight'>

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
                  className='pt-1'>

                    <NavLink
                    activeClassName='text-body font-weight-bold'
                    className='text-muted pr-3'
                    onClick={cleanUp}
                    to={config.routes.movie.url}>{config.routes.movie.title}</NavLink>

                  </NavItem>

                  <NavItem
                  className='pt-1'>

                    <NavLink
                    activeClassName='text-body font-weight-bold'
                    className='text-muted pr-3'
                    onClick={cleanUp}
                    to={config.routes.tvShow.url}>{config.routes.tvShow.title}</NavLink>

                  </NavItem>

                  <NavItem
                  className='pt-1'>

                    <NavLink
                    activeClassName='text-body font-weight-bold'
                    className='text-muted pr-3'
                    onClick={cleanUp}
                    to={config.routes.myLibrary.url}>{config.routes.myLibrary.title}</NavLink>

                  </NavItem>

                  <NavItem
                  className='pt-1'
                  onClick={handleLogout}>

                    <NavLink
                    activeClassName='text-body font-weight-bold'
                    className='text-muted'
                    onClick={cleanUp}
                    to={config.routes.login.url}>{config.routes.logout.title}</NavLink>

                  </NavItem>

                </Fragment>

              : <NavItem>

                  <NavLink
                  activeClassName='text-body font-weight-bold'
                  className='text-muted'
                  onClick={cleanUp}
                  to={config.routes.login.url}>{config.routes.login.title}</NavLink>

                </NavItem>
              }

            </Nav>

          </Navbar.Collapse>

        </Navbar>

    </Fragment>
  
  );
}

export default memo(NavBar);
