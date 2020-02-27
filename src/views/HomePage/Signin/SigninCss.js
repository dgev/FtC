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
    backgroundColor: "#8BC34A",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  color: {
    color: "#4CAF50",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "#388E3C",
  },
  routerLink: {
    textDecoration: "none",
    color: "#4CAF50",
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: { main: "#FFEB3B" },
  },
});

export { useStyles, theme };
