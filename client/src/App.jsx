import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Routes,
} from 'react-router-dom';

import Landing from './components/landing';

function App() {
  return (
    <>
      <Router>
        {/* <Landing /> */}
        <Switch>
          <Route path='/' exact component={Landing} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
