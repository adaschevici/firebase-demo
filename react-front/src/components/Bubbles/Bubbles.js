import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactBubbleChart from '../../utils/ReactBubbleChart';

const dataPoints = [
  {
    _id: 123,
    value: 15,
    sentiment: 'Negative',
    selected: false,
  }, {
    _id: 13,
    value: 18,
    sentiment: 'Negative',
    selected: false,
  }];

class Bubbles extends Component {
  constructor(props) {
    super(props);
    this.colorLegend = [
      // reds from dark to light
      { color: '#67000d', text: 'Negative', textColor: '#ffffff' }, '#a50f15', '#cb181d', '#ef3b2c', '#fb6a4a', '#fc9272', '#fcbba1', '#fee0d2',
      // neutral grey
      { color: '#f0f0f0', text: 'Neutral' },
      // blues from light to dark
      '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', { color: '#08306b', text: 'Positive', textColor: '#ffffff' },
    ];
    this.tooltipProps = [{
      css: 'symbol',
      prop: '_id',
    }, {
      css: 'value',
      prop: 'value',
      display: 'Last Value',
    }, {
      css: 'change',
      prop: 'colorValue',
      display: 'Change',
    }];
  }

  render() {
    const data = dataPoints.map(dp => ({
      _id: dp._id,
      value: dp.value,
      colorValue: dp.sentiment,
      selected: dp.selected,
    }));
    return (
      <ReactBubbleChart
        className="bubbles"
        colorLegend={this.colorLegend}
        data={data}
        selectedColor="#737373"
        selectedTextColor="#d9d9d9"
        fixedDomain={{ min: -1, max: 1 }}
        legendSpacing={0}
      />
    );
  }
}


Bubbles.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      claps: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Bubbles;
