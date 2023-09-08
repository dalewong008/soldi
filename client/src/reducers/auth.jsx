import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: !!localStorage.getItem('token'),
};

function auth(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      console.log(payload);
      localStorage.setItem('token', payload.token);
      console.log('localstorage token => ', localStorage.getItem('token'));
      return {
        token: payload.token,
        isAuthenticated: true,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      return {
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

export default auth;
