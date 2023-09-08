import api from '../utils/api';
import {
  USERS_LOAD_SUCCESS,
  USERS_LOAD_FAIL,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
} from './types';

export const loadUsers = () => async (dispatch) => {
  try {
    const res = await api.get('/users');

    dispatch({
      type: USERS_LOAD_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USERS_LOAD_FAIL,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    const res = await api.post('/profile', id);

    dispatch({
      type: USER_DELETE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_DELETE_FAIL,
    });
  }
};
