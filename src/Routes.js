import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './containers/Home'

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" render={(props) => <Home {...props} />} />
      </Switch>
    </Router>
  );
}

export default Routes;
