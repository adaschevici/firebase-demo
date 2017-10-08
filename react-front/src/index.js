import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import store from './store';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';

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
