import React from 'react';
import { Grid, Typography, FormControlLabel, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { useStyles, CustomCheckbox } from './SignUpCss';
import { useSelector } from 'react-redux';

export default function FormFooter(props) {
  // const state = useSelector(state => state);
  const classes = useStyles();
  const history = createBrowserHistory();
  function handleRedirect() {
    history.push('/');
  }
  // function handleSubmit() {
  //   console.log(state);
  // }

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Typography inline align="center">
          <FormControlLabel control={<CustomCheckbox />} />
          Check here to indicate that you have read and agreed to the
          <Link to={`/`} className={classes.color}>
            {' '}
            FtC Terms and Conditions
          </Link>
        </Typography>
      </Grid>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={props.handleSubmit}
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
