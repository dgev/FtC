import React from "react";
import { Grid, TextField } from "@material-ui/core";

export default function EmailPassword(props) {
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          error={!props.isValidEmail}
          label="Email Address"
          helperText={props.isValidEmail ? null : props.emailError}
          onChange={props.handleEmailChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          error={!props.isValidPassword}
          name="password"
          label="Password"
          type="password"
          helperText={props.isValidPassword ? null : props.passwordError}
          onChange={props.handlePasswordChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          error={!props.passwordMatches}
          label="Repeat the Password"
          helperText={props.passwordMatches ? null : "Passwords do not match"}
          onChange={props.handleRepeatedPassword}
          type="password"
        />
      </Grid>
    </React.Fragment>
  );
}
