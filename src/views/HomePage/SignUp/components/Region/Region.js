import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useStyles } from "views/HomePage/SignUp/style";
import { Grid } from "@material-ui/core";

export default function Region(props) {
  const classes = useStyles();

  const regions = [
    "Aragatsotn",
    "Ararat",
    "Armavir",
    "Gegharquniq",
    "Lory",
    "Kotayq",
    "Shirak",
    "Syunik",
    "Vayots Dzor",
    "Tavush",
    "Yerevan",
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
        onInputChange={props.onChange}
        renderOption={option => <React.Fragment>{option}</React.Fragment>}
        renderInput={params => (
          <TextField
            {...params}
            label="Choose a region"
            variant="outlined"
            fullWidth
            inputProps={{
              ...params.inputProps,
            }}
          />
        )}
      />
    </Grid>
  );
}
