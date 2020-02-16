import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { dashboardRoutes } from './routes';
import App from 'App/App';
import styles from 'assets/jss/material-dashboard-react/layouts/adminStyle.js';
import { makeStyles } from '@material-ui/core/styles';
import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbars/Navbar.js';

const useStyles = makeStyles(styles);

function User() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <App />
      <Navbar />
      <div className={classes.content}>
        <div className={classes.container}>
          <Switch>
            {dashboardRoutes.map((prop, key) => {
              return <Route exact path={prop.path} component={prop.component} key={key} />;
            })}
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export { User, dashboardRoutes };
