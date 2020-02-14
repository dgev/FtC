import React from 'react';
// import { ThemeProvider } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Region from './Region';
import 'date-fns';
import Footer from '../Footer/Footer';
import Name from './Name';
import Gender from './Gender';
import Birthdate from './Birthdate';
import Phone from './Phone';
import Company from './Company';
import EmailPassword from './EmailPassword';
import FormFooter from './FormFooter';
import { useStyles, theme } from './SignUpCss';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Name />
              <Gender />
              <Birthdate />
              <Region />
              <Phone />
              <Company />
              <EmailPassword />
            </Grid>
            <FormFooter />
          </form>
        </div>
        <Box mt={5}>
          <Footer />
        </Box>
      </ThemeProvider>
    </Container>
  );
}
