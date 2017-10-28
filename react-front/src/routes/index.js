import React from 'react';
import { Route } from 'react-router-dom';

import Attendee from '../components/Attendee/Attendee.container';
import Hub from '../components/Hub/Hub.container';

export default ([
  <Route path="/attendee" component={Attendee} />,
  <Route path="/hub" component={Hub} />,
]);

