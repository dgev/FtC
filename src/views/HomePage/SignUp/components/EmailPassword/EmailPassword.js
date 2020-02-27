import React, { useState } from "react";
import {
  Grid,
  TextField,
  IconButton,
  InputAdornment,
  FilledInput,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
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
        <FormControl variant="outlined" fullWidth required>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            error={!props.isValidPassword && !props.canRegister}
            type={showPassword ? "text" : "password"}
            helperText={!props.isValidPassword && !props.canRegister ? props.passwordError : null}
            onChange={props.handlePasswordChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setVisibility(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        {/* <TextField
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
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton> */}
      </Grid>
      <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth required>
          <InputLabel htmlFor="outlined-adornment-password">Repeat Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            error={!props.passwordMatches && !props.canRegister}
            helperText={!props.passwordMatches && !props.canRegister ? props.error : null}
            type={showRepeatedPassword ? "text" : "password"}
            onChange={props.handleRepeatedPassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setRepeatedVisibility(!showRepeatedPassword)}
                  edge="end"
                >
                  {showRepeatedPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={160}
          />
        </FormControl>
      </Grid>
    </React.Fragment>
  );
}
