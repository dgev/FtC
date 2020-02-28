import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  fixed: {
    backgroundColor: "#4CAF50",
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    color: "white",
    justifyContent: "center",

  },
  toolbarSecondary: {
    justifyContent: "start",
    overflowX: "auto",
  },
  toolbarLink: {
    marginRight: theme.spacing(3),
    textDecoration: "none",
    color: "#FAFAFA",
  },
  buttonColor: {
    backgroundColor: "#FFCA28",
    color: "#4CAF50",
    fontWeight: "500",
    "&:hover": {
      backgroundColor: "#FFE082",
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <Grid className={classes.fixed}>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <Toolbar>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              size="small"
              color="primary"
              className={classes.buttonColor}
            >
              <span>Sign up</span>
            </Button>
          </Link>
        </Toolbar>
        <Toolbar>
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              size="small"
              color="primary"
              className={classes.buttonColor}
            >
              <span>Sign in</span>
            </Button>
          </Link>
        </Toolbar>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section, id) => (
          <Link key={id} to={`/${section.title.toLowerCase()}`} className={classes.toolbarLink}>
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </Grid>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
