import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from './components/landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Spinner from './components/common/Spinner';

function App() {
  return (
    <>
      <Spinner />
      <Router>
        <Routes>
          <Route path='/' exact element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
