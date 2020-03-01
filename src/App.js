import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./App/Routes/Home";
import User from "./App/Routes/User";
import { useSelector } from "react-redux";
import { history } from "redux/helpers";

export default function App() {
  const loggedin = useSelector(state => state.userAuth.loggedIn);

  return (
    <Router history={history}>
      <Switch>
        {loggedin ? <Route path="/" component={User} /> : <Route path="/" component={Home} />}
        {/* <Redirect from="/" to="/" /> */}
      </Switch>
    </Router>
  );
}
