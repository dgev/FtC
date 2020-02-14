import React from 'react';
import { Grid, Typography, FormControlLabel, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { useStyles, CustomCheckbox } from './SignUpCss';

// function handleSubmit() {}

export default function FormFooter() {
  const classes = useStyles();
  const history = createBrowserHistory();
  function handleRedirect() {
    history.push('/');
  }

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Typography inline align="center">
          <FormControlLabel control={<CustomCheckbox />} />
          {/* <a className={classes.color}> */}
          Check here to indicate that you have read and agreed to the
          <Link to={`/`} className={classes.color}>
            {' '}
            FtC Terms and Conditions
          </Link>
          {/* </a> */}
        </Typography>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleRedirect}
      >
        Sign Up
      </Button>
      <Grid container justify="flex-end">
        <Grid item>
          <Link to={`/signin`} className={classes.routerLink}>
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
