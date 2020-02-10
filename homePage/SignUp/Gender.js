import React, { useState } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { useStyles } from "./SignUpCss";

export default function Gender() {
  const classes = useStyles();
  const gender = useGender();
  return (
    <Grid>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel shrink={false}>
          {gender.gender !== "" || "Gender *"}
        </InputLabel>
        <Select value={gender.gender} onChange={gender.onChange} required>
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
}

function useGender() {
  const [gender, setGender] = useState("");
  function handleChange(event) {
    setGender(event.target.value);
  }
  return {
    gender: gender,
    onChange: handleChange
  };
}
