import React, { useEffect } from "react";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/Navbars/Navbar.js";
import Footer from "../components/Footer/Footer.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import { dashboardRoutes as routes } from "./components/Routes/User";

import styles from "../assets/jss/material-dashboard-react/layouts/adminStyle.js";

import bgImage from "../assets/img/sidebar-2.jpg";
import logo from "../assets/img/reactlogo.png";
import { useDispatch, useSelector } from "react-redux";
import { getNotif } from "redux/actions/notification.action.js";
import { getUserById } from "redux/actions/index.js";

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
  const id = localStorage.getItem("id");
  const user =
    id && loaded === false ? dispatch(getUserById(localStorage.getItem("id"))) : currentUser;

  useEffect(() => {
    const interval = setInterval(() => {
      if (loaded) {
        user.hasCompany ? dispatch(getNotif("company/" + id)) : dispatch(getNotif("farmer/" + id));
      }
    }, 10000);
    return () => clearInterval(interval);
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/company/maps";
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
        routes={routes}
        logoText={"SmartFarm"}
        logo={logo}
        image={bgImage}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={"green"}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar routes={routes} handleDrawerToggle={handleDrawerToggle} />
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{props.switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.map}>{props.switchRoutes}</div>
        )}
        {getRoute() ? <Footer /> : null}
      </div>
    </div>
  );
}
