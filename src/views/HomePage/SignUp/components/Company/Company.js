import React from "react";
import { Grid, Typography, FormControlLabel, TextField } from "@material-ui/core";
import { CustomSwitch } from "views/HomePage/SignUp/style";

export default function Company(props) {
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Typography gutterBottom>
          <FormControlLabel
            control={
              <CustomSwitch
                value={props.isCompany}
                checked={props.isCompany}
                onChange={props.onChange}
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
          error={!props.companyName.isValid && props.isCompany}
          label="Company Name"
          helperText={props.companyName.isValid ? null : props.companyName.error}
          onChange={props.companyName.onChange}
          disabled={!props.isCompany}
        />
      </Grid>
    </React.Fragment>
  );
}
