import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import {
  TextField,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from "@material-ui/core";
import { useStyles, theme } from "views/MyProfile/style/MyProfileCss";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer.js";
let passwordValidator = require("password-validator");

export default function Reset() {
  const classes = useStyles();
  const email = useEmail();
  const password = usePassword();
  const newPassword = useNewPassword();

  const [showPassword, setVisibility] = useState(false);
  const [showRepeatedPassword, setRepeatedVisibility] = useState(false);

  return (
    <>
      <GridContainer justify="flex-end">
        <MuiThemeProvider theme={theme}>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Reset Password</h4>
              </CardHeader>
              <CardBody>
                <GridItem xs={12} sm={12} md={6}>
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
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <FormControl variant="outlined" fullWidth required>
                    <InputLabel
                      htmlFor="outlined-adornment-password"
                      error={!password.isValidPassword}
                    >
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
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
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
                </GridItem>
                <GridItem xs={12} md={6}>
                  <Button
                    color="primary"
                    disabled={
                      !(
                        email.isValidEmail &&
                        password.isValidPassword &&
                        newPassword.isValidPassword
                      )
                    }
                  >
                    {"Submit"}
                  </Button>
                </GridItem>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardHeader color="danger">
                <h4 className={classes.cardTitleWhite}>Delete Account</h4>
              </CardHeader>
              <CardBody profile>
                <h5>Once deleted the account cannot be restored!</h5>
                <GridItem xs={12} md={6}>
                  <Button
                    color="danger"
                    // onClick={() => handleClickOpen("permanently delete", "Delete")}
                  >
                    Delete Account
                  </Button>
                </GridItem>
              </CardBody>
            </Card>
          </GridItem>
        </MuiThemeProvider>
      </GridContainer>
    </>
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
