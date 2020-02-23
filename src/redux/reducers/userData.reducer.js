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
  hasCompany: false,
  password: "",
  companyName: "Something",
};

function userData(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_REQUEST:
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
    case userConstants.UPDATE_REQUEST:
      return {
        ...state,
        ...action.payload,
      };
    case userConstants.DELETE_REQUEST:
      return {
        ...state,
        deleting: true,
      };
    case userConstants.DELETE_SUCCESS:
      return {
        deleted: true,
      };
    case userConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user
      return {
        ...state,
        deleteError: action.error,
      };
    default:
      return {
        ...state,
      };
  }
}

export default userData;
