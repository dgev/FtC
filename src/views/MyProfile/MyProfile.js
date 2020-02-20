import React, { useState } from 'react';
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardAvatar from 'components/Card/CardAvatar.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import Birthdate from 'views/HomePage/SignUp/components/Birthdate';

import avatar from 'assets/img/faces/marc.jpg';
import Region from '../../components/Region';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { useStyles, theme } from './MyProfileCss';

export default function MyProfile() {
  const classes = useStyles();
  const date = useDate();
  return (
    <div>
      <GridContainer justify="flex-end">
        <MuiThemeProvider theme={theme}>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                <p className={classes.cardCategoryWhite}>Complete your profile</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="First Name"
                      id="first-name"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Last Name"
                      id="last-name"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Gender"
                      id="postal-code"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <Birthdate onChange={date.onChange} value={date.value} />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <Region />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary">Update Profile</Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h4 className={classes.cardTitle}>Alec Thompson</h4>
              </CardBody>
            </Card>
          </GridItem>
        </MuiThemeProvider>
      </GridContainer>
    </div>
  );
}
function useDate() {
  const [date, setDate] = useState(new Date());
  function handleChange(date) {
    if (
      new Date().getFullYear() - date.getFullYear() >= 18 &&
      new Date().getFullYear() - date.getFullYear() <= 110
    ) {
      setDate(date);
    }
  }
  return {
    value: date,
    onChange: handleChange,
  };
}
