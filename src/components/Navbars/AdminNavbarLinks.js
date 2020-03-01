import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "redux/actions";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import {
  Paper,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Icon,
  Grid,
} from "@material-ui/core";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
// core components
import Button from "components/CustomButtons/Button.js";
import Notification from "./Notification";

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import { green, red } from "@material-ui/core/colors";
import { getNotif, notificationStatus } from "redux/actions/notification.action";
import { getUserById } from "redux/actions";
import { deleteNotif } from "redux/actions/notification.action";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(styles);

export default function AdminNavbarLinks() {
  const classes = useStyles();
  let notifications = useSelector(state => state.controlNotification);
  const loaded = useSelector(state => state.userData.loaded);
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.userData);
  const loadedNotif = useSelector(state => state.controlNotification.loaded);
  const id = localStorage.getItem("id");
  const [index, setIndex] = useState(0);
  const [openNotification, setOpenNotification] = useState(null);
  const [openProfile, setOpenProfile] = useState(null);
  const [open, setOpen] = useState(false);
  const [notificationDetail, setNotification] = useState("");
  const [contactInfo, setInfo] = useState("");
  const [length, setLength] = useState(0);

  const user =
    id && loaded === false ? dispatch(getUserById(localStorage.getItem("id"))) : currentUser;

  useEffect(() => {
    if (loaded) {
      user.hasCompany ? dispatch(getNotif("company/" + id)) : dispatch(getNotif("farmer/" + id));
    }
  }, [loaded]);

  useEffect(() => {
    if (loadedNotif) {
      length >= notifications.notifications.length ? setOpenSnackbar(false) : setOpenSnackbar(true);
      setLength(notifications.notifications.length);
    }
  }, [loadedNotif]);

  const handleClickNotification = event => {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };
  const handleCloseNotification = () => {
    setOpenNotification(null);
  };
  const handleClickProfile = event => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };
  function handleLogout() {
    dispatch(logoutUser());
  }

  const handleClick = isOpen => {
    setOpen(isOpen);
  };
  function handleStatus(status) {
    setOpen(!open);
    loadedNotif
      ? (function() {
          dispatch(notificationStatus({ status: status }, notifications.notifications[index].id));
          user.hasCompany
            ? dispatch(getNotif("company/" + id))
            : dispatch(getNotif("farmer/" + id));
        })()
      : setTimeout(function() {
          dispatch(notificationStatus({ status: status }, notifications.notifications[index].id));
          user.hasCompany
            ? dispatch(getNotif("company/" + id))
            : dispatch(getNotif("farmer/" + id));
        }, 1000);
    user.hasCompany ? dispatch(getNotif("company/" + id)) : dispatch(getNotif("farmer/" + id));
    setLength(length - 1);
  }

  function handleNotification(index) {
    const sender = notifications.notifications[index].sender;
    setIndex(index);
    setNotification(
      `${sender.firstName} ${sender.lastName} applied to your product request with code ${notifications.notifications[index].product.id}`
    );
    setInfo(sender.phoneNumber);
    setOpen(!open);
  }

  function handleDelete(index) {
    loadedNotif
      ? (function() {
          dispatch(deleteNotif(notifications.notifications[index].id));
          user.hasCompany
            ? dispatch(getNotif("company/" + id))
            : dispatch(getNotif("farmer/" + id));
        })()
      : setTimeout(function() {
          dispatch(deleteNotif(notifications.notifications[index].id));
          user.hasCompany
            ? dispatch(getNotif("company/" + id))
            : dispatch(getNotif("farmer/" + id));
        }, 3000);
    setLength(length - 1);
  }

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <div>
      <div className={classes.manager}>
        <Notification open={openSnackbar} handleClose={handleClose} />
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-owns={openNotification ? "notification-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickNotification}
          className={classes.buttonLink}
        >
          <Notifications className={classes.icons} />
          {loaded && loadedNotif ? (
            notifications.notifications.length === 0 ? null : (
              <span className={classes.notifications}>{notifications.notifications.length}</span>
            )
          ) : null}
          <Hidden mdUp implementation="css">
            <p onClick={handleCloseNotification} className={classes.linkText}>
              Notification
            </p>
          </Hidden>
        </Button>
        <Poppers
          open={Boolean(openNotification)}
          anchorEl={openNotification}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !openNotification }) + " " + classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="notification-menu-list-grow"
              style={{
                transformOrigin: placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseNotification}>
                  <MenuList role="menu" style={{ maxHeight: "400px", overflow: "auto" }}>
                    {loadedNotif ? (
                      notifications.notifications.length === 0 ? (
                        <MenuItem className={classes.dropdownItem}>No notifications</MenuItem>
                      ) : (
                        notifications.notifications.map((elem, i) =>
                          user.hasCompany ? (
                            <MenuItem
                              key={i}
                              onClick={() => handleNotification(i)}
                              className={classes.dropdownItem}
                            >
                              {`${elem.sender.firstName} applied to your product`}
                            </MenuItem>
                          ) : (
                            <MenuItem
                              key={i}
                              onClick={handleCloseNotification}
                              className={classes.dropdownItem}
                            >
                              {`${elem.receiver.firstName} ${elem.status} Your Request`}
                              <IconButton
                                onClick={() => handleDelete(i)}
                                style={{
                                  color: red[500],
                                }}
                              >
                                <HighlightOffIcon />
                              </IconButton>
                            </MenuItem>
                          )
                        )
                      )
                    ) : null}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
      <div className={classes.manager}>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-owns={openProfile ? "profile-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickProfile}
          className={classes.buttonLink}
        >
          <Person className={classes.icons} />
          <Hidden mdUp implementation="css">
            <p className={classes.linkText}>User</p>
          </Hidden>
        </Button>
        <Poppers
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          className={classNames({ [classes.popperClose]: !openProfile }) + " " + classes.popperNav}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list-grow"
              style={{
                transformOrigin: placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseProfile}>
                  <MenuList role="menu">
                    <MenuItem onClick={handleLogout} className={classes.dropdownItem}>
                      Logout
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => handleClick(!open)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Request Details"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {notificationDetail}
          </DialogContentText>
          {
            <Grid container>
              Contact Details:
              {contactInfo}
              <Icon>
                <PhoneEnabledIcon />
              </Icon>
            </Grid>
          }
        </DialogContent>
        <DialogActions>
          <IconButton onClick={() => handleStatus("accepted")} style={{ color: green[500] }}>
            <CheckCircleOutlineIcon />
          </IconButton>
          <IconButton onClick={() => handleStatus("rejected")} style={{ color: red[500] }}>
            <HighlightOffIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
