import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Grid,
  TextField,
  Box,
  IconButton,
  InputAdornment,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Container,
} from "@material-ui/core";
import Footer from "views/HomePage/Footer/Footer";
import { useStyles, theme } from "../style/ResetCss";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
let passwordValidator = require("password-validator");

export default function Reset() {
  const classes = useStyles();
  const email = useEmail();
  const password = usePassword();
  const newPassword = useNewPassword();

  const [showPassword, setVisibility] = useState(false);
  const [showRepeatedPassword, setRepeatedVisibility] = useState(false);

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <MuiThemeProvider theme={theme}>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={!email.isValidEmail}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={email.onChange}
            />

            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth required>
                <InputLabel htmlFor="outlined-adornment-password" error={!password.isValidPassword}>
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  error={!password.isValidPassword}
                  type={showPassword ? "text" : "password"}
                  onChange={password.onChange}
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
                  labelWidth={75}
                />
                <FormHelperText error={!password.isValidPassword}>
                  {!password.isValidPassword ? "Invalid Input" : null}
                </FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth required>
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  error={!newPassword.isValidPassword}
                >
                  New Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  error={!newPassword.isValidPassword}
                  type={showRepeatedPassword ? "text" : "password"}
                  onChange={newPassword.handlePasswordChange}
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
                  labelWidth={140}
                />
                <FormHelperText error={!newPassword.isValidPassword}>
                  {!newPassword.isValidPassword ? newPassword.error : null}
                </FormHelperText>
              </FormControl>
            </Grid>

            <Grid container direction="row">
              <Grid item className={classes.routerLink}>
                <NavigateBeforeIcon />
              </Grid>
              <Grid item>
                <Link to={`/signin`} className={classes.routerLink}>
                  {"Back to Signin"}
                </Link>
              </Grid>
            </Grid>
            <Grid item md={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={
                  !(email.isValidEmail && password.isValidPassword && newPassword.isValidPassword)
                }
                align={"right"}
              >
                <Link to={`/signin`} className={classes.routerLink}>
                  {"Submit"}
                </Link>
              </Button>
            </Grid>
          </form>
        </MuiThemeProvider>
      </div>
      <Box mt={8}>
        <Footer />
      </Box>
    </Container>
  );
}

function usePassword() {
  const [password, setPassword] = useState("");
  const [isValidPassword, setValidPassword] = useState(true);
  function handlePasswordChange(event) {
    if (event.target.value !== null && event.target.value.length) {
      setPassword(event.target.value);
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  }
  return {
    value: password,
    onChange: handlePasswordChange,
    isValidPassword,
  };
}
function useEmail() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setValidEmail] = useState(true);
  function handleEmailChange(event) {
    if (event.target.value !== null && event.target.value.length) {
      setEmail(event.target.value);
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }
  return {
    value: email,
    onChange: handleEmailChange,
    isValidEmail,
  };
}

function useNewPassword() {
  const [value, setValue] = useState("");
  const [isValidPassword, setValidPassword] = useState(true);
  const [error, setError] = useState("Field is required");

  function handlePasswordChange(event) {
    let schema = new passwordValidator();
    schema
      .is()
      .min(8)
      .is()
      .max(40)
      .has()
      .uppercase()
      .has()
      .lowercase()
      .has()
      .digits()
      .has()
      .not()
      .spaces()
      .is()
      .not()
      .oneOf(["Passw0rd", "Password123"]);

    if (schema.validate(event.target.value)) {
      setValidPassword(true);
    } else {
      switch (schema.validate(event.target.value, { list: true })[0]) {
        case "min":
          setError("Password must contain at least 8 characters!");
          break;
        case "max":
          setError("Password must contain at most 150 characters!");
          break;
        case "spaces":
          setError("Password cannot contain spaces!");
          break;
        case "digits":
          setError("Password must contain at least one number!");
          break;
        case "lowercase":
          setError("Password must contain at least one lowercase letter!");
          break;
        case "uppercase":
          setError("Password must contain at least one uppercase letter!");
          break;
        default:
          setError("Please enter a valid password");
      }
      setValidPassword(false);
    }
    setValue(event.target.value);
  }

  return {
    value,
    handlePasswordChange,
    isValidPassword,
    error,
  };
}
