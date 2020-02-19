import { nameConstants } from '../constants';

export const changeName = (name, surname) => {
  return {
    type: nameConstants.INPUT,
    name,
    surname,
  };
};
