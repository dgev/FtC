import React from 'react';
import { Grid, TextField } from '@material-ui/core';

export default function EmailPassword(props) {
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          error={!props.email.isValid}
          label="Email Address"
          helperText={props.email.isValid ? null : props.email.error}
          onChange={props.email.onChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          error={!props.password.isValid}
          name="password"
          label="Password"
          helperText={props.password.isValid ? null : props.password.error}
          onChange={props.password.onChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          error={!props.repeatPassword.isValid}
          label="Repeat the Password"
          helperText={props.repeatPassword.isValid ? null : 'Passwords do not match'}
          onChange={props.repeatPassword.onChange}
        />
      </Grid>
    </React.Fragment>
  );
}
