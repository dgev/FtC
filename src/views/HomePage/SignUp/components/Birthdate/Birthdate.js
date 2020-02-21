import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import { Grid } from "@material-ui/core";

export default function Birthdate(props) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid style={{ marginLeft: "16px" }}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          label="Pick your Birthdate"
          value={props.value}
          helperText={props.error}
          error={!props.isValid}
          maxDate={new Date()}
          onChange={date => props.onChange(date)}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
