import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from './components/landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Landing /> */}
          <Route path='/' exact element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
