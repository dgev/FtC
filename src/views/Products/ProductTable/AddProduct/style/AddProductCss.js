import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: { main: "#FFEB3B" },
  },
});
const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(3),
      width: 200,
    },
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2, 1),
    color: "#388E3C",
  },
  color: {
    color: "#4CAF50",
  },
  button: {
    color: "#388E3C",
  },
  newstyle: {
    primary: { main: "#388E3C" },
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
export { useStyles, theme };
