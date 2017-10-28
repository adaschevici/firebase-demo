import React from 'react';
import { Route } from 'react-router-dom';
import uuid from 'uuid/v4';

import Attendee from '../components/Attendee/Attendee.container';
import Hub from '../components/Hub/Hub.container';

export default ([
  <Route path="/attendee" component={Attendee} key={uuid()} />,
  <Route path="/hub" component={Hub} key={uuid()} />,
]);

