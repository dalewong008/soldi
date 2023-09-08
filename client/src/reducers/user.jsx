import {
  USERS_LOAD_SUCCESS,
  USERS_LOAD_FAIL,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
} from '../actions/types';

const initialState = {};

function user(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USERS_LOAD_SUCCESS:
    case USER_DELETE_SUCCESS:
      return {
        users: payload
      };
    case USERS_LOAD_FAIL:
    case USER_DELETE_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default user;
