import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { homeRoutes } from './routes';

export default function Home() {
  return (
    <Switch>
      {homeRoutes.map((prop, key) => {
        return <Route exact path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  );
}
