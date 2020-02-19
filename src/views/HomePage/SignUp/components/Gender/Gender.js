import React from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useStyles } from 'views/HomePage/SignUp/style';

export default function Gender(props) {
  const classes = useStyles();
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
