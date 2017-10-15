import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactBubbleChart from 'react-bubble-chart';

const colorLegend = [
  // reds from dark to light
  { color: '#67000d', text: 'Negative', textColor: '#ffffff' },
  '#a50f15',
  '#cb181d',
  '#ef3b2c',
  '#fb6a4a',
  '#fc9272',
  '#fcbba1',
  '#fee0d2',
  // neutral grey
  { color: '#f0f0f0', text: 'Neutral' },
  // blues from light to dark
  '#deebf7',
  '#c6dbef',
  '#9ecae1',
  '#6baed6',
  '#4292c6',
  '#2171b5',
  '#08519c',
  { color: '#08306b', text: 'Positive', textColor: '#ffffff' },
];

const dataPoints = [
  {
    _id: 123,
    value: 15,
    sentiment: 'Negative',
    selected: false,
  }, {
    _id: 13,
    value: 128,
    sentiment: 'Positive',
    selected: false,
  }, {
    _id: 134,
    value: 128,
    sentiment: 'Positive',
    selected: false,

  }];

class Bubbles extends Component {
  render() {
    const data = this.props.users.map(user => ({
      _id: user.id,
      value: user.claps,
    }));

    return (<ReactBubbleChart
      data={data}
    />);
  }
}

Bubbles.defaultProps = {
  users: [],
};

Bubbles.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      claps: PropTypes.number,
    }),
  ),
};

export default Bubbles;
