import { userConstants } from "../constants";

// const initialState = {
//   id: "",
//   username: "",
//   phoneNumber: "",
//   firstName: "",
//   lastName: "",
//   accessToken: "",
//   birthDate: "",
//   gender: "",
//   region: "",
//   isCompany: "",
//   password: "",
//   companyName: "",
// };

const initialState = {
  id: "0",
  username: "email@gmail.com",
  phoneNumber: "+374555555",
  firstName: "hey",
  lastName: "hi",
  accessToken: "",
  birthDate: "2012-12-01",
  gender: "",
  region: "",
  hasCompany: true,
  password: "",
  companyName: "Something",
};

function userData(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_USER_DATA:
      return {
        id: action.user.id,
        username: action.user.email,
        phoneNumber: action.user.phoneNumber,
        firstName: action.user.firstName,
        lastName: action.user.lastName,
        birthDate: action.user.birthDate,
        gender: action.user.gender,
        region: action.user.region,
        hasCompany: action.user.isCompany,
        password: action.user.password,
        companyName: action.user.companyName,
      };
    case userConstants.UPDATE_USER_DATA:
      console.log("here");

      return {
        firstName: action.updatedUser.firstName,
      };
    default:
      console.log("here");
      return {
        ...state,
        currentUser: action.updatedUser,
      };
  }
}

export default userData;
