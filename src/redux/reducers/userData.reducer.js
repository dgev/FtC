import { userConstants } from "../constants";

// const currentState = {
//   id: "",
//   username: "",
//   phoneNumber: "",
//   firstName: "",
//   lastName: "",
//   accessToken: "",
//   birthDate: "",
//   gender: "",
//   region: "",
//   hasCompany: "",
//   password: "",
//   companyName: "",
// };

// const initialState = localStorage.getItem("id") ? { loggedIn: true } : currentState;
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
  loaded: false,
};

function userData(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_REQUEST:
      return {
        loading: true,
      };
    case userConstants.GET_SUCCESS:
      return {
        id: action.user.id,
        username: action.user.username,
        phoneNumber: action.user.phoneNumber,
        firstName: action.user.firstName,
        lastName: action.user.lastName,
        birthDate: action.user.birthDate,
        gender: action.user.gender,
        region: action.user.region,
        hasCompany: action.user.isCompany,
        password: action.user.password,
        companyName: action.user.companyName,
        loaded: true,
      };
    case userConstants.GET_FAILURE:
      return {
        ...state,
        getError: action.error,
        loaded: false,
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
      console.log("in delete");

      return {
        deleted: true,
      };
    case userConstants.DELETE_FAILURE:
      console.log("in failure");

      return {
        ...state,
        deleteError: action.error,
        deleted: false,
      };
    default:
      return {
        ...state,
      };
  }
}

export default userData;
