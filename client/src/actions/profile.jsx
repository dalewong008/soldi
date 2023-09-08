import api from '../utils/api';
import {
  PROFILE_LOAD_SUCCESS,
  PROFILE_LOAD_FAIL,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAIL,
} from './types';
import { startLoading, endLoading } from './loading';
import setAuthToken from '../utils/setAuthToken';

export const loadProfile = () => async (dispatch) => {
  if (localStorage.getItem('token')) {
    setAuthToken(localStorage.getItem('token'));
  }

  try {
    dispatch(startLoading());
    const res = await api.get('/profile');

    dispatch({
      type: PROFILE_LOAD_SUCCESS,
      payload: res.data,
    });
    dispatch(endLoading());
  } catch (err) {
    dispatch({
      type: PROFILE_LOAD_FAIL,
    });
    dispatch(endLoading());
  }
};

export const updateProfile = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/profile', formData);

    dispatch({
      type: PROFILE_UPDATE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_UPDATE_FAIL,
    });
  }
};
