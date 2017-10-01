import React from 'react';
import ReactDOM from 'react-dom';
import loggerMiddleware from 'redux-logger';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App/App';
import sagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import reducers from './reducers';
import saga from './sagas';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';

const middleware = composeWithDevTools(applyMiddleware(
  loggerMiddleware,
  sagaMiddleware(saga),
));
const store = createStore(reducers, middleware);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        { routes }
      </Switch>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root'));
registerServiceWorker();
