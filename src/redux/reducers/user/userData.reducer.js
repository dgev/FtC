import { userConstants } from "redux/constants";

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
      console.log(action.payload);

      return {
        id: action.payload.id,
        username: action.payload.username,
        phoneNumber: action.payload.phoneNumber,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        birthDate: action.payload.birthDate,
        gender: action.payload.gender,
        region: action.payload.region,
        hasCompany: action.payload.isCompany,
        password: action.payload.password,
        companyName: action.payload.companyName,
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
        updating: true,
      };
    case userConstants.UPDATE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        updated: true,
      };
    case userConstants.UPDATE_FAILURE:
      return {
        ...state,
        updated: false,
      };
    case userConstants.RESET_REQUEST:
      return {
        ...state,
        resetting: true,
      };
    case userConstants.RESET_SUCCESS:
      return {
        ...state,
        reseted: true,
      };
    case userConstants.RESET_FAILURE:
      return {
        ...state,
        reseted: false,
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
