import React from 'react';
import { Route } from 'react-router-dom';

import Atendee from '../components/Atendee/Atendee.container';
import Hub from '../components/Hub/Hub.container';

export default ([
  <Route path="/atendee" component={Atendee} />,
  <Route path="/hub" component={Hub} />,
]);

