import { combineReducers } from "redux";

import userData from "./user/userData.reducer";
import userAuth from "./user/userAuth.reducer";
import userRegistration from "./user/register.reducer";
import getProducts from "./product/getProducts.reducer";
import controlNotification from "./notification/notification.reducer";

const rootReducer = combineReducers({
  userData,
  userAuth,
  userRegistration,
  getProducts,
  controlNotification,
});

export default rootReducer;
