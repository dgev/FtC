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
          autoFocus
          error={!props.isValidEmail && !props.canRegister}
          label="Email Address"
          helperText={!props.isValidEmail && !props.canRegister ? props.emailError : null}
          onChange={props.handleEmailChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          autoFocus
          error={!props.isValidPassword && !props.canRegister}
          name="password"
          label="Password"
          type="password"
          helperText={!props.isValidPassword && !props.canRegister ? props.passwordError : null}
          onChange={props.handlePasswordChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          autoFocus
          error={!props.passwordMatches && !props.canRegister}
          label="Repeat the Password"
          helperText={!props.passwordMatches && !props.canRegister ? props.error : null}
          onChange={props.handleRepeatedPassword}
          type="password"
        />
      </Grid>
    </React.Fragment>
  );
}
