import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Footer from "../Footer/Footer";
import { useStyles, theme } from "./SigninCss";
import { Link } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { login } from "redux/actions";
import { useDispatch } from "react-redux";

export default function Signin() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loginIsValid, setLoginIsValid] = useState(true);

  const email = useEmail();
  const password = usePassword();

  function handleLogin() {
    if (email.isValidEmail && password.isValidPassword) {
      dispatch(login({ username: email.value, password: password.value }));
    } else {
      setLoginIsValid(false);
    }
  }

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <MuiThemeProvider theme={theme}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={!email.isValidEmail && !loginIsValid}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={email.onChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={!password.isValidPassword && !loginIsValid}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={password.onChange}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={!(email.isValidEmail && password.isValidPassword)}
              onClick={handleLogin}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to={`/reset`} className={classes.routerLink}>
                  {"Forgot password?"}
                </Link>
              </Grid>
              <Grid item>
                <Link to={`/signup`} className={classes.routerLink}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </MuiThemeProvider>
      </div>
      <Box mt={8}>
        <Footer />
      </Box>
    </Container>
  );
}
function usePassword() {
  const [password, setPassword] = useState("");
  const [isValidPassword, setValidPassword] = useState(false);
  function handlePasswordChange(event) {
    if (event.target.value !== null && event.target.value.length) {
      setPassword(event.target.value);
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  }
  return {
    value: password,
    onChange: handlePasswordChange,
    isValidPassword,
  };
}
function useEmail() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setValidEmail] = useState(false);
  function handleEmailChange(event) {
    if (event.target.value !== null && event.target.value.length) {
      setEmail(event.target.value);
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }
  return {
    value: email,
    onChange: handleEmailChange,
    isValidEmail,
  };
}
