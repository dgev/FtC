import { createMuiTheme, withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { Checkbox } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.paper
  },
  paper: {
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
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  color: {
    color: "#2196F3"
  },
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18
    }
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
