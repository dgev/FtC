import React from "react";
import { Switch, Route } from "react-router-dom";
import { dashboardRoutes } from "./routes";
import App from "App/App";

export function User() {
  const routes = (
    <Switch>
      {dashboardRoutes.map((prop, key) => {
        return <Route exact path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  );
  return (
    <div>
      <App switchRoutes={routes} />
    </div>
  );
}
