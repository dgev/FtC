import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Footer from "../Footer/Footer";
import { useStyles, theme } from "./ResetCss";
import { Link } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';


export default function Reset() {
  const classes = useStyles();
  const [loginIsValid, setLoginIsValid] = useState(true);

  const email = useEmail();
  const password = usePassword();
  const newPassword = usePassword();

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <MuiThemeProvider theme={theme}>
          <Typography component="h1" variant="h5">
            Reset Password
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={!newPassword.isValidPassword && !loginIsValid}
              name="New Password"
              label="newPassword"
              type="password"
              id="newPassword"
              autoComplete="new-password"
              onChange={newPassword.onChange}
            />

            <Typography className={classes.box}>

            <Grid container direction="row" alignItems="left" >
                <Grid item className={classes.routerLink}>
                  <NavigateBeforeIcon/>
                </Grid>
                <Grid item>
                  <Link to={`/signin`} className={classes.routerLink}>
                    {"Back to Signin"}
                  </Link>
                 </Grid>
                </Grid>
            
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              disabled={!(email.isValidEmail && password.isValidPassword && newPassword.isValidPassword)}>
                <Link to={`/signin`} className={classes.routerLink}>
                 {"Submit"} 
                </Link>
              </Button>
              
              
              
             </Typography>
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
