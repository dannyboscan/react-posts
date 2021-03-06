import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducer from './reducer';


const middlewares = [thunk];

// if (process.env.NODE_ENV === 'development') {
//   const createLogger = require('redux-logger');
//   const logger = createLogger({ duration: true });
//   middlewares.push(logger);
// }

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
