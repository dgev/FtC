// import { combineReducers } from 'redux';

// import userData from './userData.reducer';

// const rootReducer = combineReducers({
//   userData,
// });

// export default rootReducer;
import { combineReducers } from 'redux';

import { nameReducer } from './name.reducer';

const rootReducer = combineReducers({
  // users,
  // alert,
  nameReducer,
});

export default rootReducer;
