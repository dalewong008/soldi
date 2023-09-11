import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import PrivateRoute from './components/common/PrivateRoute';
import Landing from './components/landing/Landing';
import About from './components/about/About';
import Faq from './components/FAQ/FAQ';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Spinner from './components/common/Spinner';

import { loadProfile } from './actions/profile';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(loadProfile());
    }
  }, [isAuthenticated, dispatch]);

  return (
    <>
      <Spinner />
      <Router>
        <Routes>
          <Route path='/' exact element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/faq' element={<Faq />} />
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
