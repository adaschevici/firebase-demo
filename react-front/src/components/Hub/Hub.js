import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Bubbles from '../../components/Bubbles/Bubbles.container';
import env from '../../.env';
import './Hub.css';

class Hub extends Component {

  componentDidMount() {
    this.props.listenData();
  }

  render() {
    return ([
      <div className="hub-container">
        <Bubbles />
        <a href={env.DEMO_URL}>{env.DEMO_URL}</a>
      </div>,
    ]);
  }
}


Hub.propTypes = {
  listenData: PropTypes.func.isRequired,
};

export default Hub;

