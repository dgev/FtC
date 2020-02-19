import React from 'react';
// creates a beautiful scrollbar
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from 'components/Sidebar/Sidebar.js';

import { dashboardRoutes } from 'App/components/Routes/User';

import styles from 'assets/jss/material-dashboard-react/layouts/adminStyle.js';

import bgImage from 'assets/img/sidebar-2.jpg';
import logo from 'assets/img/reactlogo.png';
let ps;
const useStyles = makeStyles(styles);

export default function App() {
  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== '/';
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = 'hidden';
    }
    window.addEventListener('resize', resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        // ps.destroy();
      }
      window.removeEventListener('resize', resizeFunction);
    };
  }, [mainPanel]);
  return (
    <div>
      <Sidebar
        routes={dashboardRoutes}
        logoText={'FtC'}
        logo={logo}
        image={bgImage}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={'purple'}
      />
    </div>
  );
}
// import React from 'react';
// import { Router, Route, Switch, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';

// import { history } from 'redux/helpers/history';
// import { alertActions } from 'redux/actions/alert.actions';
// import { PrivateRoute } from 'components/PrivateRoute';
// import { HomePage } from 'views/HomePage/HomePage';
// import { LoginPage } from 'views/LoginPage/LoginPage';
// import { RegisterPage } from 'views/RegisterPage/RegisterPage';

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     history.listen((location, action) => {
//       // clear alert on location change
//       this.props.clearAlerts();
//     });
//   }

//   render() {
//     // const { alert } = this.props;
//     return (
//       // <div className="jumbotron">
//       //   <div className="container">
//       //     <div className="col-sm-8 col-sm-offset-2">
//       //       {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
//       <div>
//         <Router history={history}>
//           <Switch>
//             <PrivateRoute exact path="/" component={HomePage} />
//             <Route path="/login" component={LoginPage} />
//             <Route path="/register" component={RegisterPage} />
//             <Redirect from="*" to="/" />
//           </Switch>
//         </Router>
//       </div>
//       //   </div>
//       // </div>
//     );
//   }
// }

// function mapState(state) {
//   const { alert } = state;
//   return { alert };
// }

// const actionCreators = {
//   clearAlerts: alertActions.clear,
// };

// const connectedApp = connect(
//   mapState,
//   actionCreators
// )(App);
// export { connectedApp as App };
