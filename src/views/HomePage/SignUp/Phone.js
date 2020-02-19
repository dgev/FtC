import React, { useState } from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import MuiPhoneInput from 'material-ui-phone-number';
import { Grid, Typography, Button, IconButton } from '@material-ui/core';

export default function Phone(props) {
  // const phone = usePhone();
  return (
    <Grid item xs={12}>
      <Typography variant="h6">
        <Button disabled>
          <IconButton>
            <PhoneIcon />
          </IconButton>
          Phone
        </Button>
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

// function usePhone() {
//   const [phone, setPhone] = useState('');
//   function handleChange(event) {
//     setPhone(event.target.value);
//   }
//   return {
//     value: phone,
//     onChange: handleChange,
//   };
// }
