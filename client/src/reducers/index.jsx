import { combineReducers } from 'redux';
import loading from './loading';
import auth from './auth';
import profile from './profile';
import alert from './alert';
import users from './user';

const combine = combineReducers({
  loading,
  auth,
  profile,
  alert,
  users,
});

export default combine;
