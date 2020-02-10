import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";

export default function Name() {
  const name = useName();
  const surname = useName();
  return (
    <React.Fragment>
      <Grid item xs={12} sm={6}>
        <TextField
          autoComplete="fname"
          name="firstName"
          variant="outlined"
          required
          fullWidth
          id="firstName"
          label="First Name"
          helperText={name.isValid ? null : name.error}
          onChange={name.onChange}
          autoFocus
          error={!name.isValid}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          helperText={surname.isValid ? null : surname.error}
          onChange={surname.onChange}
          autoComplete="lname"
          error={!surname.isValid}
        />
      </Grid>
    </React.Fragment>
  );
}
function useName() {
  const [name, setName] = useState("");
  const [isValid, setValidName] = useState(true);
  const [error, setError] = useState("");
  function handleChange(event) {
    if (
      event.target.value.match(/^[a-zA-Z ]{2,30}$/) &&
      event.target.value.length > 0
    ) {
      setName(event.target.value);
      setValidName(true);
    } else {
      setValidName(false);
      setError(
        event.target.value.trim() === ""
          ? "This field should not be empty"
          : "Invalid Surname"
      );
    }
  }
  return {
    value: name,
    onChange: handleChange,
    isValid: isValid,
    error: error
  };
}
