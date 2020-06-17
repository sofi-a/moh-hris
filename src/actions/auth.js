import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';
import db from '../db';
import {
	LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
} from './types';
import { setAlert } from './alert';

const salt = bcrypt.genSaltSync(10);

export const register = (username, password) => dispatch => {
  db.table('users')
    .get({username})
    .then(existingUser => {
      if(existingUser) {
        dispatch(setAlert('A user already exists with this username', 'error'));
        dispatch({
          type: REGISTER_FAIL,
        });
      } else {
        const newUser = {
          id: uuidv4(),
          username,
          password: bcrypt.hashSync(password, salt),
        };
        db.table('users')
          .add(newUser)
          .then(userId => {
            localStorage.setItem('user', JSON.stringify(newUser));
            localStorage.setItem('remember', JSON.stringify(false));
            dispatch(setAlert('Welcome back!', 'success'));
            dispatch({
              type: REGISTER_SUCCESS,
              payload: {
                newUser,
                remember: false,
              },
            });
          });
      }
    });
};

export const login = (username, password, remember) => dispatch => {
  db.table('users')
    .get({username})
    .then(existingUser => {
      if(existingUser) {
        if(bcrypt.compareSync(password, existingUser.password)) {
          localStorage.setItem('user', JSON.stringify(existingUser));
          localStorage.setItem('remember', JSON.stringify(remember));
          dispatch(setAlert('Welcome back!', 'success'));
          dispatch({
            type: LOGIN_SUCCESS,
            payload: {
              user: existingUser,
              remember,
            },
          });
        } else {
          dispatch(setAlert('Invalid credentials', 'error'));
          dispatch({
            type: LOGIN_FAIL,
          });
        }
      } else {
        dispatch(setAlert('Invalid credentials', 'error'));
        dispatch({
          type: LOGIN_FAIL,
        });
      }
    });
};

export const logout = () => dispatch => {
  localStorage.removeItem('user');
  localStorage.removeItem('remember');
  dispatch({
    type: LOGOUT,
  });
};
