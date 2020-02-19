import React, { useState } from 'react';
import { Grid, Typography, FormControlLabel, TextField } from '@material-ui/core';
import { CustomSwitch } from './SignUpCss';

export default function Company(props) {
  // const isCompany = useSwitch();
  // const companyName = useCompany();
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Typography gutterBottom>
          <FormControlLabel
            control={
              <CustomSwitch
                value={props.isCompany.checked}
                checked={props.isCompany.checked}
                onChange={props.isCompany.onChange}
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
          fullWidth
          error={!props.companyName.isValid && props.isCompany.checked}
          label="Company Name"
          helperText={props.companyName.isValid ? null : props.companyName.error}
          onChange={props.companyName.onChange}
          disabled={!props.isCompany.checked}
        />
      </Grid>
    </React.Fragment>
  );
}

// function useCompany() {
//   const [company, setCompany] = useState('');
//   const [isValidName, setValidName] = useState(true);
//   const [error, setError] = useState('');

//   function handleChange(event) {
//     let company = event.target.value;
//     if (company.trim() === '') {
//       setError('This field should not be empty!');
//       setValidName(false);
//     } else {
//       setCompany(company);
//       setValidName(true);
//     }
//   }
//   return {
//     value: company,
//     onChange: handleChange,
//     isValid: isValidName,
//     error: error,
//   };
// }

// function useSwitch() {
//   const [checked, setChecked] = useState(false);
//   function handleChange(event) {
//     setChecked(event.target.checked);
//   }
//   return {
//     checked: checked,
//     onChange: handleChange,
//   };
// }
