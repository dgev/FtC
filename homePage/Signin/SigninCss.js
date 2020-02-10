import {
  makeStyles,
  createMuiTheme,
  withStyles,
  Checkbox
} from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#BA68C8"
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  color: {
    color: "#2196F3"
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
const theme = createMuiTheme({
  palette: {
    primary: purple
  }
});
const checkBoxStyles = theme => ({
  root: {
    "&$checked": {
      color: "#03A9F4"
    }
  },
  checked: {}
});

const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);
export { useStyles, theme, CustomCheckbox };
