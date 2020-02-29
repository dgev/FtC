import { combineReducers } from "redux";

import userData from "./userData.reducer";
import userAuth from "./userAuth.reducer";
import userRegistration from "./register.reducer";
import getProducts from "./getProducts.reducer";
import controlNotification from "./notification.reducer";
// import modifyProducts from "./modifyProduct.reducer";

const rootReducer = combineReducers({
  userData,
  userAuth,
  userRegistration,
  getProducts,
  controlNotification,
  // modifyProducts,
});

export default rootReducer;
