import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import saga from '../sagas';
import reducers from '../reducers';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(reducers,
      composeWithDevTools(applyMiddleware(
        loggerMiddleware,
        sagaMiddleware,
      ))),
    runSaga: sagaMiddleware.run(saga),
  };
};

export default configureStore;
