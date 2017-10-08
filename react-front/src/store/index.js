import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import sagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import saga from '../sagas';
import reducers from '../reducers';

const middleware = composeWithDevTools(applyMiddleware(
  loggerMiddleware,
  sagaMiddleware(saga),
));
const store = createStore(reducers, middleware);

export default store;
