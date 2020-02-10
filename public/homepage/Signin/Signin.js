import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Footer from "../Footer/Footer";
import { useStyles, theme, CustomCheckbox } from "./SigninCss";
import { ThemeProvider } from "@material-ui/core";

export default function App() {
  const classes = useStyles();
  const email = useEmail();
  const password = usePassword();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <ThemeProvider theme={theme}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={!email.isValid}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              helperText={email.isValid ? null : email.error}
              onChange={email.onChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={!password.isValid}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              helperText={password.isValid ? null : password.error}
              onChange={password.onChange}
            />
            <FormControlLabel
              control={<CustomCheckbox value="remember" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={!(email.isValid && password.isValid)}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" className={classes.color}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" className={classes.color}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </ThemeProvider>
      </div>
      <Box mt={8}>
        <Footer />
      </Box>
    </Container>
  );
}

function usePassword() {
  const [password, setPassword] = useState("");
  const [isValidPassword, setValidPassword] = useState(true);
  const [error, setError] = useState("");

  function handlePasswordChange(event) {}
  return {
    value: password,
    onChange: handlePasswordChange,
    isValid: isValidPassword,
    error: error
  };
}

function useEmail() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setValidEmail] = useState(true);
  const [error, setError] = useState("");

  function handleEmailChange(event) {}
  return {
    value: email,
    onChange: handleEmailChange,
    isValid: isValidEmail,
    error: error
  };
}
