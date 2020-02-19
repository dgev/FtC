import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import MuiPhoneInput from 'material-ui-phone-number';
import { Grid, Typography, IconButton } from '@material-ui/core';

export default function Phone(props) {
  return (
    <Grid item xs={12}>
      <Typography variant="h6">
        <IconButton>
          <PhoneIcon />
        </IconButton>
        Phone
        <MuiPhoneInput
          onChange={props.phone.onChange}
          defaultCountry="am"
          regions={'asia'}
          style={{ marginLeft: '30px' }}
          inputProps={{ minLength: 12, maxLength: 12 }}
        />
      </Typography>
    </Grid>
  );
}
