import { userConstants } from "../constants";

const initialState = {
  username: "",
  phoneNumber: "",
  firstName: "",
  lastName: "",
  // accessToken: action.user.accessToken,
  birthDate: "",
  gender: "",
  region: "",
  isCompany: "",
  password: "",
  companyName: "",
};

function userData(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_USER_DATA:
      return {
        username: action.user.email,
        phoneNumber: action.user.phoneNumber,
        firstName: action.user.firstName,
        lastName: action.user.lastName,
        // accessToken: action.user.accessToken,
        birthDate: action.user.birthDate,
        gender: action.user.gender,
        region: action.user.region,
        isCompany: action.user.isCompany,
        password: action.user.password,
        companyName: action.user.companyName,
      };
    case userConstants.UPDATE_USER_DATA:
      return {
        ...state,
        ...action.user,
      };

    default:
      return state;
  }
}

export default userData;
