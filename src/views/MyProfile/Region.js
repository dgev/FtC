import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18
    }
  }
});

export default function Region() {
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
    "Yerevan"
  ];

  return (
    <Autocomplete
      style={{ width: 300 }}
      options={regions}
      classes={{
        option: classes.option
      }}
      autoHighlight
      getOptionLabel={option => option}
      renderOption={option => <React.Fragment>{option}</React.Fragment>}
      renderInput={params => (
        <TextField
          {...params}
          label="Choose a region"
          variant="outlined"
          fullWidth
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password"
          }}
        />
      )}
    />
  );
}
