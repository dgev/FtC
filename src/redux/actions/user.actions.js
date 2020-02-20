import { userConstants } from '../constants';

export const registerUser = (
  email,
  phoneNumber,
  firstName,
  lastName,
  birthDate,
  gender,
  region,
  company
) => {
  return {
    type: userConstants.GET_USER,
    email,
    phoneNumber,
    firstName,
    lastName,
    birthDate,
    gender,
    region,
    company,
  };
};
