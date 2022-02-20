import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './reducers/_root.reducer'; // imports ./redux/reducers/index.js
import rootSaga from './sagas/_root.saga'; // imports ./redux/sagas/index.js

const sagaMiddleware = createSagaMiddleware();

// logger will only be added to the project if your in development mode
const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];

const store = createStore(
  rootReducer,
  // adds all middleware to the project including saga and logger
  applyMiddleware(...middlewareList),
);

// rootSaga contains all of our other sagas
sagaMiddleware.run(rootSaga);

export default store;