import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useStyles } from 'views/HomePage/SignUp/style';
import { Grid } from '@material-ui/core';

export default function Region() {
  const classes = useStyles();
  const region = useRegion();

  const regions = [
    'Aragatsotn',
    'Ararat',
    'Armavir',
    'Gegharquniq',
    'Lory',
    'Kotayq',
    'Shirak',
    'Syunik',
    'Vayots Dzor',
    'Tavush',
    'Yerevan',
  ];

  return (
    <Grid item xs={12}>
      <Autocomplete
        style={{ width: 300 }}
        options={regions}
        classes={{
          option: classes.option,
        }}
        autoHighlight
        getOptionLabel={option => option}
        renderOption={option => <React.Fragment>{option}</React.Fragment>}
        renderInput={params => (
          <TextField
            {...params}
            label="Choose a region"
            variant="outlined"
            value={region.value}
            onChange={region.onChange}
            fullWidth
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password',
            }}
          />
        )}
      />
    </Grid>
  );
}

function useRegion() {
  const [region, setRegion] = useState('');
  function handleChange(event) {
    debugger;
    setRegion(event.target.value);
    console.log(region);
  }
  return {
    value: region,
    onChange: handleChange,
  };
}
