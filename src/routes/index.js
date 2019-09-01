import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login, Page404 } from 'pages';
import Main from './Main';

function RootRoute() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Main} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default RootRoute;
