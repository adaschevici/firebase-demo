import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../components/App/App';

      {/* <Route path="/atendee" component={Clap} />
      <Route path="/hub" component={Hub} /> */}
export default ([
      <Route path="/test" component={App} />,
      <Route path="/" component={App} />
]);

