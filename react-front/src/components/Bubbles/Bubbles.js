import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactBubbleChart from '../../components/ReactBubbles/ReactBubbleChart';
import Pallette from './ColorPallette';

const dataPoints = [
  {
    id: 123,
    claps: 15,
    sentiment: 5,
    selected: false,
  }, {
    id: 13,
    claps: 128,
    sentiment: 4,
    selected: false,
  }, {
    id: 134,
    claps: 128,
    sentiment: 16,
    selected: false,

  }];

class Bubbles extends Component {
  render() {
    const data = this.props.users.map(user => ({
      _id: user.id,
      value: user.claps,
      colorValue: user.colorValue,
    }));

    return (<ReactBubbleChart
      data={data}
      colorLegend={Pallette}
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
      colorValue: PropTypes.number,
    }),
  ),
};

export default Bubbles;
