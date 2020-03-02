import { makeStyles, createMuiTheme } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#4CAF50",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  color: {
    color: "#4CAF50",
    "&:hover": {
      color: "#FFEB3B",
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "#388E3C",
    "&:hover": {
      color: "#FFEB3B",
    },
  },
  routerLink: {
    textDecoration: "none",
    color: "#4CAF50",
    "&:hover": {
      color: "#FFEB3B",
    },
    float: "right",
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: { main: "#FFEB3B" },
  },
});

export { useStyles, theme };
