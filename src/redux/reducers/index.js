import { combineReducers } from "redux";

import userData from "./userData.reducer";
import userAuth from "./userAuth.reducer";

const rootReducer = combineReducers({
  userData,
  userAuth,
});

export default rootReducer;
