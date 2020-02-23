import { combineReducers } from "redux";

import userData from "./userData.reducer";
import userAuth from "./userAuth.reducer";
import userRegistration from "./register.reducer";

const rootReducer = combineReducers({
  userData,
  userAuth,
  userRegistration,
});

export default rootReducer;
