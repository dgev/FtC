import React from "react";
import ReactDOM from "react-dom";
// import { Router, Route, Switch, Redirect } from "react-router-dom";
import { store } from "redux/store";
import { Provider, useSelector } from "react-redux";

// core components
// import Home from "./App/components/Routes/Home";
// import { User } from "./App/components/Routes/User";
import App from "./App";
import "assets/css/material-dashboard-react.css?v=1.8.0";

// const loggedin = useSelector(state => state.isLoggedIn);

// const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
