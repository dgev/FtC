import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import { validate as validateEmail } from "email-validator";
let passwordValidator = require("password-validator");

export default function EmailPassword() {
  const email = useEmail();
  const password = usePassword();
  const repeatPassword = useRepeatedPassword(password);
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          error={!email.isValid}
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          helperText={email.isValid ? null : email.error}
          onChange={email.onChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          error={!password.isValid}
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          helperText={password.isValid ? null : password.error}
          onChange={password.onChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          error={!repeatPassword.isValid}
          name="repeat-password"
          label="Repeat the Password"
          type="password"
          id="reapeat-password"
          autoComplete="current-password"
          helperText={repeatPassword.isValid ? null : "Passwords do not match"}
          onChange={repeatPassword.onChange}
        />
      </Grid>
    </React.Fragment>
  );
}

function useEmail() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setValidEmail] = useState(true);
  const [error, setError] = useState("");

  function handleEmailChange(event) {
    let user = event.target.value;
    if (user === "") {
      setError("Please enter your email!\n");
      setValidEmail(false);
    } else if (!validateEmail(user)) {
      setError("Invalid email!");
      setValidEmail(false);
    } else {
      setEmail(user);
      setValidEmail(true);
    }
  }
  return {
    value: email,
    onChange: handleEmailChange,
    isValid: isValidEmail,
    error: error
  };
}

function usePassword() {
  const [password, setPassword] = useState("");
  const [isValidPassword, setValidPassword] = useState(true);
  const [error, setError] = useState("");

  function handlePasswordChange(event) {
    let schema = new passwordValidator();
    schema
      .is()
      .min(8)
      .is()
      .max(150)
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
      setPassword(event.target.value);
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
  }
  return {
    value: password,
    onChange: handlePasswordChange,
    isValid: isValidPassword,
    error: error
  };
}

function useRepeatedPassword(password) {
  const [isValid, setValidPassword] = useState(true);
  function handleChange(event) {
    if (event.target.value === password.value) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  }
  return {
    isValid: isValid,
    onChange: handleChange
  };
}
