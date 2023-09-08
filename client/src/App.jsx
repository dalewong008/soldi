import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import PrivateRoute from './components/common/PrivateRoute';
import Landing from './components/landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Spinner from './components/common/Spinner';
import Dashboard from './components/Dashboard';

import { loadProfile } from './actions/profile';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(loadProfile());
    }
  }, [isAuthenticated]);

  return (
    <>
      <Spinner />
      <Router>
        <Routes>
          <Route path='/' exact element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/dashboard'
            element={<PrivateRoute component={Dashboard} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
