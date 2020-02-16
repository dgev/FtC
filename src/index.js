import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

// core components
import Home from './App/components/Routes/Home';
import { User } from './App/components/Routes/User';
import 'assets/css/material-dashboard-react.css?v=1.8.0';
const loggedin = true;

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {loggedin ? <Route path="/" component={User} /> : <Route path="/" component={Home} />}
      {/* <Redirect from="/" to="/" /> */}
    </Switch>
  </Router>,
  document.getElementById('root')
);
