import api from '../utils/api';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types';
import { loadProfile } from './profile';
import { setAlert } from './alert';
import { startLoading, endLoading } from './loading';

/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/

// Register User
export const register = (formData) => async (dispatch) => {
  try {
    dispatch(startLoading());

    const res = await api.post('/auth/register', formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadProfile());
  } catch (err) {
    const errors = err.response.data.errors;

    dispatch(endLoading());

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (formData) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const res = await api.post('/auth/login', formData);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadProfile());
  } catch (err) {
    const errors = err.response.data.errors;
    dispatch(endLoading());

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });
