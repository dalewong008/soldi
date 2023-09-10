import api from '../utils/api';
import {
  USERS_LOAD_SUCCESS,
  USERS_LOAD_FAIL,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
} from './types';
import { startLoading, endLoading } from './loading';

export const loadUsers = () => async (dispatch) => {
  try {
    dispatch(startLoading);
    const res = await api.get('/users');

    dispatch({
      type: USERS_LOAD_SUCCESS,
      payload: res.data,
    });
    dispatch(endLoading());
  } catch (err) {
    dispatch({
      type: USERS_LOAD_FAIL,
    });
    dispatch(endLoading());
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch(startLoading());
    await api.delete(`/users/delete/${id}`);

    dispatch({
      type: USER_DELETE_SUCCESS,
    });
    dispatch(loadUsers());
  } catch (err) {
    dispatch({
      type: USER_DELETE_FAIL,
    });
    dispatch(endLoading());
  }
};
