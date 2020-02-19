import React from 'react';
import { Grid, Typography, FormControlLabel, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
import { useStyles, CustomCheckbox } from 'views/HomePage/SignUp/style';

export default function FormFooter(props) {
  const classes = useStyles();
  // const history = createBrowserHistory();
  // function handleRedirect() {
  //   history.push('/');
  // }
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Typography align="center">
          <FormControlLabel onChange={props.onChange} control={<CustomCheckbox />} />
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
        disabled={props.isChecked}
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
