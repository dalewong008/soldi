import { LOADING_START, LOADING_END } from './types';

export const startLoading = () => ({
  type: LOADING_START,
});

export const endLoading = () => ({
  type: LOADING_END,
});
