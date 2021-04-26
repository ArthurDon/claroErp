/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Help from './pages/Help';

/**
 * Authorize
 */
import { isAuthorizated } from './utils';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthorizated() === true ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

export default () => (
  <BrowserRouter basename="/">
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/ajuda" exact component={Help} />
      <PrivateRoute path="/dashboard" exact component={Dashboard} />
      <Route path="*" component={() => <Redirect to="/" />} />
    </Switch>
  </BrowserRouter>
);
