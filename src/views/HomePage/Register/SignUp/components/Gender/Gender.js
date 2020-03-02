import React from "react";
import { Grid, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@material-ui/core";
import { useStyles } from "views/HomePage/Register/SignUp/style/SignUpCss";

export default function Gender(props) {
  const classes = useStyles();
  return (
    <>
      <Grid>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel shrink={false}>
            <div>{props.value !== "" || "Gender"}</div>
          </InputLabel>
          <Select value={props.value} onChange={props.handleChange} required>
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
          <FormHelperText error={!props.isValid && !props.canRegister}>
            {!props.isValid && !props.canRegister ? props.error : null}
          </FormHelperText>
        </FormControl>
      </Grid>
    </>
  );
}
