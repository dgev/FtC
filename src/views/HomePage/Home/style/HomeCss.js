import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

const drawerWidth = 100;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: "#FAFAFA",
  },
  marginTop: {
    marginTop: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(6),
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: { main: "#4CAF50" },
  },
});
export { useStyles, theme };
