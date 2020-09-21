import React, { memo } from 'react';
import {
  Button,
  FormGroup,
  FormLabel,
  FormControl,
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useAppContext } from '../../components/AppContext';
import error from '../../utils/error';
import asyncLocalStorage from '../../services/local-storage.service';
import useInputForm from '../../hooks/useInputForm';
import config from '../../config';
import style from './style.module.scss';

const Login = () => {
  const input = useInputForm(null);
  const history = useHistory();
  const { userHasAuthenticated } = useAppContext();

  const validateForm = () => input.loginEmail.length > 0 && input.loginPassword.length > 0;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (input.loginEmail === 'test@test.test' &&
        input.loginPassword === 'test1234') {
          userHasAuthenticated(true);
          const userStorage = await asyncLocalStorage.getItem(config.keyLocalStorage);
          let user = JSON.parse(userStorage);

          if (user) {

            user.isAuth = true;

          } else {

            user = {
              isAuth: true,
            };

          }

          await asyncLocalStorage.setItem(config.keyLocalStorage, JSON.stringify(user));
          history.push(config.routes.home.url);
      } else {
        alert(`${config.noAccessMessage}`);
      }
    } catch(e) {
      error(e);
    }
  }


  return (
    <div
    className={style['form-wrapper']}>

      <form>

        <FormGroup
        controlId='email'>

          <FormLabel>Email</FormLabel>

          <FormControl
          autoFocus
          type='email'
          name='loginEmail'
          placeholder='Type test@test.test'
          value={input.loginEmail}
          onChange={input.onChange} />

        </FormGroup>

        <FormGroup
        controlId='password'>

          <FormLabel>Password</FormLabel>

          <FormControl
            type='password'
            name='loginPassword'
            placeholder='Type test1234'
            value={input.loginPassword}
            onChange={input.onChange} />

        </FormGroup>

        <Button
        block
        type='button'
        variant='dark'
        onClick={handleSubmit}
        disabled={!validateForm()}>Login</Button>

      </form>

    </div>
  );
}

export default memo(Login);
