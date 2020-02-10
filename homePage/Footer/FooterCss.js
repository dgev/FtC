import { makeStyles, createMuiTheme } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0)
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  lightBlue: {
    color: "#55acee"
  },
  blue: {
    color: "#3b5999"
  },
  linkedin: {
    color: "#0077B5"
  },
  black: {
    color: "#212121"
  }
}));
const theme = createMuiTheme({
  palette: {
    // inherit: { main: "#0077B5" },
    primary: purple
    // secondary: { main: "#3b5999" },
    // // action: { main: "#55acee" },
    // error: { main: "#212121" },
    // disabled: { main: "#55acee" }
  }
});

export { useStyles, theme };
