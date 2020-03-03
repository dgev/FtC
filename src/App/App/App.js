import React, { useEffect } from "react";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "components/Navbars/Navbar";
import Sidebar from "components/Sidebar/Sidebar.js";

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

import bgImage from "assets/img/sidebar-2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getNotif } from "redux/actions/notification/notification.action.js";
import { getRegisteredUser } from "redux/actions/user/user.actions";

let ps;
const useStyles = makeStyles(styles);

export default function App(props) {
  // styles
  const classes = useStyles();
  const mainPanel = React.createRef();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const loaded = useSelector(state => state.userData.loaded);
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.userData);
  const user =
    localStorage.getItem("token") && loaded === false ? dispatch(getRegisteredUser()) : currentUser;

  useEffect(() => {
    const interval = setInterval(() => {
      if (loaded) {
        user.hasCompany
          ? dispatch(getNotif("company/" + user.id))
          : dispatch(getNotif("farmer/" + user.id));
      }
    }, 5000);
    return () => clearInterval(interval);
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);
  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={props.routes}
        logoText={"SmartFarm"}
        image={bgImage}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={"green"}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar routes={props.routes} handleDrawerToggle={handleDrawerToggle} />
        <div className={classes.content}>
          <div className={classes.container}>{props.switchRoutes}</div>
        </div>
      </div>
    </div>
  );
}
