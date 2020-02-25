import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { dashboardRoutes } from "./routes";
import App from "App/App";

export function User() {
  // window.addEventListener("beforeunload", function(e) {
  //   e = e || window.event;
  //   var localStorageTime = localStorage.getItem("storageTime");
  //   if (localStorageTime !== null && localStorageTime !== undefined) {
  //     var currentTime = new Date().getTime(),
  //       timeDifference = currentTime - localStorageTime;

  //     if (timeDifference < 25) {
  //       //Browser Closed
  //       localStorage.removeItem("storageTime");
  //       localStorage.clear();
  //     } else {
  //       //Browser Tab Closed
  //       localStorage.setItem("storageTime", new Date().getTime());
  //     }
  //   } else {
  //     localStorage.setItem("storageTime", new Date().getTime());
  //   }
  // });

  window.addEventListener("storage", e => {
    if (e.key === "token" && e.oldValue && e.newValue === null) {
      window.location.reload();
    }
  });
  const routes = (
    <Switch>
      {dashboardRoutes.map((prop, key) => {
        return <Route exact path={prop.path} component={prop.component} key={key} />;
      })}
      <Redirect from="/" to="/" />
    </Switch>
  );
  return (
    <div>
      <App switchRoutes={routes} />
    </div>
  );
}
