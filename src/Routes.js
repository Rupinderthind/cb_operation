import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './containers/Home'
import Customer from './containers/Customer'
import Profile from './containers/Profile'
import Login from './containers/Login'
import Chat from './containers/Chat'
import Team from './containers/Team'

import AuthenticatedRoute from "./components/authenticated-route";
import UnauthenticatedRoute from "./components/unauthenticated-route";

function Routes(props) {
  console.log(props, 'routes')
  return (
    <Router>
      <Switch>
        <AuthenticatedRoute path="/chat" exact component={Chat} />
        <AuthenticatedRoute path="/" exact component={Home} />
        <AuthenticatedRoute path="/customer" exact component={Customer} />
        <AuthenticatedRoute path="/profile" exact component={Profile} />
        <UnauthenticatedRoute path="/login" exact component={Login} />
        <AuthenticatedRoute path="/team" exact component={Team} />
      </Switch>
    </Router>
  );
}

export default Routes;
