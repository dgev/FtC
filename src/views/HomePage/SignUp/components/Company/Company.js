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
          autoFocus
          fullWidth
          error={!props.companyName.isValid && props.isCompany && !props.canRegister}
          label="Company Name"
          helperText={
            !props.companyName.isValid && props.isCompany && !props.canRegister
              ? props.companyName.error
              : null
          }
          onChange={props.companyName.onChange}
          disabled={!props.isCompany}
        />
      </Grid>
    </React.Fragment>
  );
}
