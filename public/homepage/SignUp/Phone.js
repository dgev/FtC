import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import MuiPhoneInput from "material-ui-phone-number";
import { Grid, Typography, Button, IconButton } from "@material-ui/core";

export default function Phone() {
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
          defaultCountry="am"
          regions={"asia"}
          style={{ marginLeft: "30px" }}
          inputProps={{ minLength: 12, maxLength: 12 }}
        />
      </Typography>
    </Grid>
  );
}
