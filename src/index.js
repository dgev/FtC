import React from "react";
import ReactDOM from "react-dom";
import { store } from "redux/store";
import { Provider } from "react-redux";

import App from "./App";
import "assets/css/material-dashboard-react.css?v=1.8.0";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
