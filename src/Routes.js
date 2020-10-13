import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './containers/Home'
import Customer from './containers/Customer'
import Profile from './containers/Profile'
import Login from './containers/Login'
import Chat from './containers/Chat'
import Team from './containers/Team'

function Routes(props) {
  console.log(props, 'routes')
  return (
    <Router>
      <Switch>
        <Route path="/chat" exact render={(props) => <Chat {...props} />} />
        <Route path="/" exact render={(props) => <Home {...props} />} />
        <Route path="/customer" exact render={(props) => <Customer {...props} />} />
        <Route path="/profile" exact render={(props) => <Profile {...props} />} />
        <Route path="/login" exact render={(props) => <Login {...props} />} />
        <Route path="/team" exact render={(props) => <Team {...props} />} />
      </Switch>
    </Router>
  );
}

export default Routes;
