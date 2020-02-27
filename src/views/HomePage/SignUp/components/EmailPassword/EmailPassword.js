import React, { useState } from "react";
import { Grid, TextField, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export default function EmailPassword(props) {
  const [showPassword, setVisibility] = useState(false);
  const [showRepeatedPassword, setRepeatedVisibility] = useState(false);

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
          type={showPassword ? null : "password"}
          helperText={!props.isValidPassword && !props.canRegister ? props.passwordError : null}
          onChange={props.handlePasswordChange}
        />
        <IconButton
          aria-label="toggle password visibility"
          onClick={() => setVisibility(!showPassword)}
          // onMouseDown={handleMouseDownPassword}
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
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
          type={showRepeatedPassword ? null : "password"}
        />
        <IconButton
          aria-label="toggle password visibility"
          onClick={() => setRepeatedVisibility(!showRepeatedPassword)}
          // onMouseDown={handleMouseDownPassword}
        >
          {showRepeatedPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </Grid>
    </React.Fragment>
  );
}
