import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  fixed: {
    backgroundColor: "#9C27B0",
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "start",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  buttonColor: {
    backgroundColor: "#03A9F4",
    "&:hover": {
      backgroundColor: "#2196F3"
    }
  }
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
          <Button
            variant="contained"
            size="small"
            color="primary"
            className={classes.buttonColor}
          >
            Sign up
          </Button>
        </Toolbar>
        <Toolbar>
          <Button
            variant="contained"
            size="small"
            color="primary"
            className={classes.buttonColor}
          >
            Sign in
          </Button>
        </Toolbar>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map(section => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </Grid>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string
};
