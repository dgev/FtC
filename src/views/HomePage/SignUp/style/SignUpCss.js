import { createMuiTheme, withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, Switch } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "#388E3C",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  color: {
    color: "#4CAF50",
    "&:hover": {
      color: "#FFEB3B",
    },
  },
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
  routerLink: {
    textDecoration: "none",
    color: "#4CAF50",
    "&:hover": {
      color: "#FFEB3B",
    },
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: { main: "#FFEB3B" },
  },
});
const checkBoxStyles = theme => ({
  root: {
    "&$checked": {
      color: "#4CAF50",
    },
  },
  checked: {},
});
const CustomSwitch = withStyles({
  switchBase: {
    color: "#4CAF50",
    "&$checked": {
      color: "#4CAF50",
    },
    "&$checked + $track": {
      backgroundColor: "#8BC34A",
    },
  },
  checked: {},
  track: {},
})(Switch);

const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);

export { useStyles, theme, CustomCheckbox, CustomSwitch };
