import React from 'react';
import { Switch } from 'react-router-dom';
import ProtectedRoute from '../../components/_shared/ProtectedRoute';
import Menubar from '../../components/menubar';
import Strategy from '../strategy';
import Identity from '../identity';
import NotFound from '../notfound';
import Dashboard from '../dashboard';
import Account from '../account';

const Application = () => (
  <>
    <Menubar />
    <Switch>
      <ProtectedRoute
        path="/app"
        component={Dashboard}
        exact
      />
      <ProtectedRoute
        path="/app/dashboard"
        component={Dashboard}
        exact
      />
      <ProtectedRoute
        path="/app/strategize"
        component={Strategy}
        exact
      />
      <ProtectedRoute
        path="/app/identity"
        component={Identity}
        exact
      />
      <ProtectedRoute
        path="/app/account"
        component={Account}
        exact
      />
      <ProtectedRoute
        path="/app/collaborate"
        component={NotFound}
        exact
      />
    </Switch>
  </>
);

export default Application;
