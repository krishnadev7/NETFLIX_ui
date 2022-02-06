import Watch from './pages/watch/Watch';
import './App.scss';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Fragment } from 'react';

function App() {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {user ? <Home /> : <Redirect to='/register' />}
        </Route>
        <Route path='/register'>
          {!user ? <Register /> : <Redirect to='/' />}
        </Route>
        <Route path='/login'>{user ? <Login /> : <Redirect to='/' />}</Route>
        {user && (
          <Fragment>
            <Route path='/movies'>
              <Home type='movies' />
            </Route>
            <Route path='/series'>
              <Home type='series' />
            </Route>
            <Route path='/watch'>
              <Watch />
            </Route>
          </Fragment>
        )}
      </Switch>
    </Router>
  );
}

export default App;
