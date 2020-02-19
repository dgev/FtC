import React from 'react';
import { Grid, TextField } from '@material-ui/core';

export default function Name(props) {
  return (
    <React.Fragment>
      <Grid item xs={12} sm={6}>
        <TextField
          variant="outlined"
          required
          fullWidth
          label="First Name"
          helperText={props.name.isValid ? null : props.name.error}
          onChange={props.name.onChange}
          error={!props.name.isValid}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          variant="outlined"
          required
          fullWidth
          label="Last Name"
          helperText={props.surname.isValid ? null : props.surname.error}
          onChange={props.surname.onChange}
          error={!props.surname.isValid}
        />
      </Grid>
    </React.Fragment>
  );
}
