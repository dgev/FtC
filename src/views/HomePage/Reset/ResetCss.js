import { makeStyles, createMuiTheme } from '@material-ui/core';
// import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.paper,
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  box: {
    display: 'flex',
    alignContent: 'space-between',
    justifyContent: 'space-around',
  },
  paper: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#8BC34A',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  color: {
    color: '#4CAF50',
  },
  routerLink: {
    textDecoration: 'none',
    color: '#4CAF50',
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: { main: '#FFEB3B' },
  },
});

export { useStyles, theme };
