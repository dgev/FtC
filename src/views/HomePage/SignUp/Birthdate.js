import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { Grid } from '@material-ui/core';

export default function Birthdate(props) {
  // const date = useDate();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid style={{ marginLeft: '16px' }}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          label="Pick your Birthdate"
          value={props.date.value}
          onChange={props.date.onChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
// function useDate() {
//   const [date, setDate] = useState(new Date());
//   function handleChange(date) {
//     if (
//       new Date().getFullYear() - date.getFullYear() >= 18 &&
//       new Date().getFullYear() - date.getFullYear() <= 110
//     ) {
//       setDate(date);
//     }
//   }
//   return {
//     value: date,
//     onChange: handleChange,
//   };
// }
