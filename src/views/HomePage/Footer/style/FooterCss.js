import { makeStyles, createMuiTheme } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0),
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    color: "#4CAF50",
    "&:hover": {
      color: "#FFEB3B",
    },
  },
  lightBlue: {
    color: "#55acee",
    "&:hover": {
      color: "#FFEB3B",
    },
  },
  blue: {
    color: "#3b5999",
    "&:hover": {
      color: "#FFEB3B",
    },
  },
  linkedin: {
    color: "#0077B5",
    "&:hover": {
      color: "#FFEB3B",
    },
  },
  black: {
    color: "#212121",
    "&:hover": {
      color: "#FFEB3B",
    },
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: { main: "#8BC34A" },
  },
});

export { useStyles, theme };
