import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/home/index';
import SignIn from './Components/signin';
import Dashboard from './Components/admin/Dashboard';
import PrivateRoute from './Components/authRoutes/privateRoutes';
import PublicRoute from './Components/authRoutes/publicRoutes';
import AdminMatches from './Components/admin/matches';

const Routes = props => {
  console.log(props);
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          restricted={true}
          path="/dashboard"
          exact
          component={Dashboard}
        />

        <PrivateRoute
          {...props}
          restricted={true}
          path="/admin_matches"
          exact
          component={AdminMatches}
        />
        <PublicRoute
          {...props}
          restricted={false}
          path="/"
          exact
          component={Home}
        />
        <PublicRoute
          {...props}
          restricted={false}
          path="/sign_in"
          exact
          component={SignIn}
        />
      </Switch>
    </Layout>
  );
};

export default Routes;
