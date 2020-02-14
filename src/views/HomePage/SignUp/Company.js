import React, { useState } from "react";
import {
  Grid,
  Typography,
  FormControlLabel,
  TextField
} from "@material-ui/core";
import { CustomSwitch } from "./SignUpCss";

export default function Company() {
  const isCompany = useSwitch();
  const companyName = useCompany();
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Typography gutterBottom>
          <FormControlLabel
            control={
              <CustomSwitch
                value={isCompany.checked}
                checked={isCompany.checked}
                onChange={isCompany.onChange}
              />
            }
            label="Register as a Company"
          />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          error={!companyName.isValid && isCompany.checked}
          id="company"
          label="Company Name"
          name="Company Name"
          autoComplete="Comapny"
          helperText={companyName.isValid ? null : companyName.error}
          onChange={companyName.onChange}
          disabled={!isCompany.checked}
        />
      </Grid>
    </React.Fragment>
  );
}

function useCompany() {
  const [company, setCompany] = useState("");
  const [isValidName, setValidName] = useState(true);
  const [error, setError] = useState("");

  function handleChange(event) {
    let company = event.target.value;
    if (company.trim() === "") {
      setError("This field should not be empty!");
      setValidName(false);
    } else {
      setCompany(company);
      setValidName(true);
    }
  }
  return {
    value: company,
    onChange: handleChange,
    isValid: isValidName,
    error: error
  };
}

function useSwitch() {
  const [checked, setChecked] = useState(false);
  function handleChange(event) {
    setChecked(event.target.checked);
  }
  return {
    checked: checked,
    onChange: handleChange
  };
}
