import React from 'react';
import ReactDOM from 'react-dom';
import Attendee from './Attendee';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Attendee join={() => {}} />, div);
});
