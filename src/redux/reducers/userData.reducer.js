import { userConstants } from '../constants';

const initialState = {
  userName: '',
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  age: '',
  gender: '',
  region: '',
};

function userData(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_USER_DATA:
      // return {
      //   userName: action.user.username,
      //   email: action.user.attributes.email,
      //   phoneNumber: action.user.attributes.phone_number,
      //   firstName: action.user.attributes['custom:firstname'],
      //   lastName: action.user.attributes['custom:lastname'],
      //   accessToken: action.user.accessToken,
      //   age: action.user.age,
      //   gender: action.user.gender,
      //   region: action.user.region,
      // };
      return {
        email: action.email,
        phoneNumber: action.phone_number,
        firstName: action.firstName,
        lastName: action.lastName,
        // accessToken: action.user.accessToken,
        birthDate: action.birthDate,
        gender: action.gender,
        region: action.region,
        company: action.company,
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
