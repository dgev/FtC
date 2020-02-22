import React, { useState, useEffect } from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Birthdate from "views/HomePage/SignUp/components/Birthdate";

import farmerAvatar from "./Images/farmers.jpg";
import companyAvatar from "./Images/company.png";
import Region from "../../components/Region";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { useStyles, theme } from "./MyProfileCss";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "redux/actions";

export default function MyProfile() {
  const classes = useStyles();
  const user = useSelector(state => state.userData);
  useEffect(() => {
    console.log(user.firstName);
  }, [user]);
  const dispatch = useDispatch();

  const firstName = useName();
  const lastName = useName();
  const date = useDate();

  const updatedUser = {
    firstName: firstName.value,
    lastName: lastName.value,
  };

  function handleChange() {
    // if(valid)
    console.log(updatedUser);

    dispatch(updateUser(updatedUser));
  }

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
                      onInputChange={firstName.handleChange}
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Last Name"
                      id="last-name"
                      onChange={lastName.handleChange}
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
                <Button color="primary" onClick={handleChange}>
                  Update Profile
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={user.hasCompany ? companyAvatar : farmerAvatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h4>{`Name:  ${user.firstName} ${user.lastName}`}</h4>
                <h5>{"Born in:  " + user.birthDate}</h5>
                {user.hasCompany ? <h5>{`Company Name:  ${user.companyName}`}</h5> : null}
              </CardBody>
            </Card>
          </GridItem>
        </MuiThemeProvider>
      </GridContainer>
    </div>
  );
}

function useName() {
  const [value, setValue] = useState("");
  function handleChange(value) {
    console.log(value);

    setValue(value);
  }
  return {
    value,
    handleChange,
  };
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
