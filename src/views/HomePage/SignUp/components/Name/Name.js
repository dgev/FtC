import React from "react";
import { Grid, TextField } from "@material-ui/core";

export default function Name(props) {
  return (
    <React.Fragment>
      <Grid item xs={12} sm={6}>
        <TextField
          variant="outlined"
          required
          fullWidth
          autoFocus
          label="First Name"
          helperText={props.name.isValid || props.canRegister ? null : props.name.error}
          onChange={props.name.onChange}
          error={!props.name.isValid && !props.canRegister}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          variant="outlined"
          required
          fullWidth
          autoFocus
          label="Last Name"
          helperText={props.surname.isValid || props.canRegister ? null : props.surname.error}
          onChange={props.surname.onChange}
          error={!props.surname.isValid && !props.canRegister}
        />
      </Grid>
    </React.Fragment>
  );
}
