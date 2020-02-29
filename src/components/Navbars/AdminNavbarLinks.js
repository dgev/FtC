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

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import { green, red } from "@material-ui/core/colors";
import { getNotif } from "redux/actions/notification.action";
import { getUserById } from "redux/actions";

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
  const [openNotification, setOpenNotification] = useState(null);
  const [openProfile, setOpenProfile] = useState(null);
  const [open, setOpen] = useState(false);
  const [notificationDetail, setNotification] = useState("");
  const [contactInfo, setInfo] = useState("");

  const user =
    id && loaded === false ? dispatch(getUserById(localStorage.getItem("id"))) : currentUser;

  useEffect(() => {
    if (loaded) {
      user.hasCompany ? dispatch(getNotif("company/" + id)) : dispatch(getNotif("farmer/" + id));
    }
  }, [loaded]);

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
  const handleApply = e => {
    // const notif = {
    //   senderId: localStorage.getItem("id"),
    //   receiverId: index,
    //   userProductId: id,
    //   message: "Want to buy this item",
    // };
    e.preventDefault();
    setOpen(!open);
    // dispatch(sendNotif(notif));
  };

  function handleNotification(index) {
    const sender = notifications.notifications[index].sender;
    setNotification(
      `${sender.firstName} ${sender.lastName} applied to your product request with code ${notifications.notifications[index].product.id}`
    );
    setInfo(sender.phoneNumber);
    setOpen(!open);
  }

  return (
    <div>
      <div className={classes.manager}>
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
                  <MenuList role="menu">
                    {loadedNotif ? (
                      notifications.notifications.length === 0 ? (
                        <MenuItem className={classes.dropdownItem}>No notifications</MenuItem>
                      ) : (
                        notifications.notifications.map((elem, i) => (
                          <MenuItem
                            key={i}
                            onClick={() => handleNotification(i)}
                            className={classes.dropdownItem}
                          >
                            {elem.sender.firstName + " apllied to your product"}
                          </MenuItem>
                        ))
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
          <IconButton onClick={handleApply} style={{ color: green[500] }}>
            <CheckCircleOutlineIcon />
          </IconButton>
          <IconButton onClick={() => handleClick(!open)} style={{ color: red[500] }}>
            <HighlightOffIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
