import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Footer from '../Footer/Footer';
import { useStyles, theme } from './ResetCss';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

export default function App() {
  const classes = useStyles();
  const email = useEmail();

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <ThemeProvider theme={theme}>
          <Typography component="h1" variant="h5">
            Reset Password
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

            <Typography className={classes.box}>
              <Button type="submit" variant="contained" color="primary">
                <Link to={`/signin`} className={classes.routerLink}>
                  Back to Signin
                </Link>
              </Button>

              <Button type="submit" variant="contained" color="primary" disabled={!email.isValid}>
                <Link to={`/signin`} className={classes.routerLink}>
                  Submit Email
                </Link>
              </Button>
            </Typography>
          </form>
        </ThemeProvider>
      </div>
      <Box mt={8}>
        <Footer />
      </Box>
    </Container>
  );
}

function useEmail() {
  const [email] = useState('');
  const [isValidEmail] = useState(true);
  const [error] = useState('');

  function handleEmailChange(event) {}
  return {
    value: email,
    onChange: handleEmailChange,
    isValid: isValidEmail,
    error: error,
  };
}
