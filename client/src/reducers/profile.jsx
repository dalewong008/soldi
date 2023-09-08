import {
  PROFILE_LOAD_SUCCESS,
  PROFILE_LOAD_FAIL,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAIL,
} from '../actions/types';

const initialState = {};

function profile(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PROFILE_LOAD_SUCCESS:
    case PROFILE_UPDATE_SUCCESS:
      return {
        ...payload,
      };
    case PROFILE_LOAD_FAIL:
    case PROFILE_UPDATE_FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default profile;
