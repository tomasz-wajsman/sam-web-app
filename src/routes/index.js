import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';

const AppRouter = () => {
  return (
    <Router history={{}}>
      <Switch>
        <Route exact path="/">
          <p>Home</p>
        </Route>
        <Router exact path="/activities">
          <p>Activities list</p>
        </Router>
        <Router exact path="/activities/show/:id">
          <p>Single activity</p>
        </Router>
        <Route exact path="/activities/add">
          <p>Add an activity</p>
        </Route>
        <Route exact path="/activities/modify/:id">
          <p>Modify an activity</p>
        </Route>
        <Route>
          <p>404</p>
        </Route>
      </Switch>
    </Router>
  );
};
export default AppRouter;
