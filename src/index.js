import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { store } from 'redux/store';
import { Provider } from 'react-redux';

// core components
import Home from './App/components/Routes/Home';
import { User } from './App/components/Routes/User';
import 'assets/css/material-dashboard-react.css?v=1.8.0';
const loggedin = false;

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {loggedin ? <Route path="/" component={User} /> : <Route path="/" component={Home} />}
        {/* <Redirect from="/" to="/" /> */}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';

// import { store } from 'redux/store/index';
// import { App } from 'App/App';

// // setup fake backend
// // import { configureFakeBackend } from 'redux/_helpers';
// // configureFakeBackend();

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('app')
// );
