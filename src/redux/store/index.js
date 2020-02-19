// import { createStore, applyMiddleware } from 'redux';
// // import thunk from 'redux-thunk';
// import rootReducer from 'redux/reducers';
// import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';

// const loggerMiddleware = createLogger();

// // export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

// // const store = createStore(rootReducer, applyMiddleware(thunk));

// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
// );

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
);
