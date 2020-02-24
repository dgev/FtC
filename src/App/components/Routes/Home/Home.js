import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { homeRoutes } from "./routes";

export default function Home() {
  window.addEventListener("storage", e => {
    if (e.key === "token" && !e.oldValue && e.newValue !== null) {
      window.location.reload();
    }
  });
  return (
    <Switch>
      {homeRoutes.map((prop, key) => {
        return <Route exact path={prop.path} component={prop.component} key={key} />;
      })}
      <Redirect from="/" to="/" />
    </Switch>
  );
}
