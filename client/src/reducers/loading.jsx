import { LOADING_START, LOADING_END } from '../actions/types';

const initialState = {
  loading: false,
};

const loading = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case LOADING_END:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default loading;
