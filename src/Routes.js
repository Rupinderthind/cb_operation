import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './containers/Home'
import Customer from './containers/Customer'
import Profile from './containers/Profile'
import Login from './containers/Login'
import Chat from './containers/Chat'
import Team from './containers/Team'

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route path="/chat" exact render={(props) => <Chat {...props} />} />
        <Route path="/" exact render={(props) => <Home {...props} />} />
        <Route path="/customer" render={(props) => <Customer {...props} />} />
        <Route path="/profile" render={(props) => <Profile {...props} />} />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route path="/team" render={(props) => <Team {...props} />} />
      </Switch>
    </Router>
  );
}

export default Routes;
