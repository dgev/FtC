import React, { useState } from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useStyles } from './SignUpCss';

export default function Gender(props) {
  const classes = useStyles();
  // const gender = useGender();
  return (
    <Grid>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel shrink={false}>{props.gender.value !== '' || 'Gender *'}</InputLabel>
        <Select value={props.gender.value} onChange={props.gender.onChange} required>
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
          <MenuItem value={'Other'}>Other</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
}

// function useGender() {
//   const [gender, setGender] = useState("");
//   function handleChange(event) {
//     setGender(event.target.value);
//   }
//   return {
//     gender: gender,
//     onChange: handleChange
//   };
// }
