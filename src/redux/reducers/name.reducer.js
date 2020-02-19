import { nameConstants } from '../constants';

const initialState = {
  name: '',
  surname: '',
};

export function nameReducer(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case nameConstants.INPUT:
      return {
        name: action.name,
        surname: action.surname,
      };
    default:
      return state;
  }
}
