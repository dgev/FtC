import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { dashboardRoutes } from './routes';
import App from 'App/App';
import styles from 'assets/jss/material-dashboard-react/layouts/adminStyle.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

function User() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <App />
      <div className={classes.content}>
        <div className={classes.container}>
          <Switch>
            {dashboardRoutes.map((prop, key) => {
              return <Route exact path={prop.path} component={prop.component} key={key} />;
              // <Route exact path="/" component={App} />;
            })}
          </Switch>
        </div>
      </div>
    </div>
  );
}

export { User, dashboardRoutes };
