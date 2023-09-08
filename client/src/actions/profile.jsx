import api from '../utils/api';
import {
  PROFILE_LOAD_SUCCESS,
  PROFILE_LOAD_FAIL,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAIL,
} from './types';

export const loadProfile = () => async (dispatch) => {
  try {
    const res = await api.get('/profile');

    dispatch({
      type: PROFILE_LOAD_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_LOAD_FAIL,
    });
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
