import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { farmerRoutes, companyRoutes } from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { getRegisteredUser } from "redux/actions/user/user.actions";
import { WindMillLoading } from "react-loadingg";
import App from "App/App";

export default function User() {
  window.addEventListener("storage", e => {
    if (e.key === "token" && e.oldValue && e.newValue === null) {
      window.location.reload();
    }
  });

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.userData);
  const loaded = useSelector(state => state.userData.loaded);
  const user =
    localStorage.getItem("token") && loaded === false ? dispatch(getRegisteredUser()) : currentUser;

  const company = (
    <Switch>
      {companyRoutes.map((prop, key) => {
        return <Route exact path={prop.path} component={prop.component} key={key} />;
      })}
      <Redirect from="/" to="/" />
    </Switch>
  );

  const farmer = (
    <Switch>
      {farmerRoutes.map((prop, key) => {
        return <Route exact path={prop.path} component={prop.component} key={key} />;
      })}
      <Redirect from="/" to="/" />
    </Switch>
  );

  return (
    <>
      {loaded ? (
        <div>
          {user.hasCompany ? (
            <App switchRoutes={company} routes={companyRoutes} />
          ) : (
            <App switchRoutes={farmer} routes={farmerRoutes} />
          )}
        </div>
      ) : (
        <WindMillLoading />
      )}
    </>
  );
}
