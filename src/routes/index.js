import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Activities from './Activities';
import ActivityDetails from './ActivityDetails';
import ActivityAddForm from './ActivityAddForm';
import ActivityEditForm from './ActivityEditForm';

const AppRouter = () => {
  return (
    <Router history={{}}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/activities">
          <Activities />
        </Route>
        <Route exact path="/activities/details/:id">
          <ActivityDetails />
        </Route>
        <Route exact path="/activities/add">
          <ActivityAddForm />
        </Route>
        <Route exact path="/activities/modify/:id">
          <ActivityEditForm />
        </Route>
        <Route>
          <p>404 not found</p>
        </Route>
      </Switch>
    </Router>
  );
};
export default AppRouter;
