import React from "react";
import { Grid, Typography, FormControlLabel, TextField } from "@material-ui/core";
import { CustomSwitch } from "views/HomePage/SignUp/style";

export default function Company(props) {
  return (
    <React.Fragment>

        <Typography gutterBottom component="div">
        <Grid  container alignItems="center" spacing={1} style={{marginLeft:"10px"}}>
          <Grid item>Farmer</Grid>
            <Grid item>
              <CustomSwitch
                value={props.isCompany}
                checked={props.isCompany}
                onChange={props.onChange}
              />
              </Grid>
           <Grid item> Company </Grid>     
            </Grid>
        </Typography>

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
